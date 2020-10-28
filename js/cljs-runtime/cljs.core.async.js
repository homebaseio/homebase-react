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
var val_14335 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14335) : fn1.call(null,val_14335));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14335) : fn1.call(null,val_14335));
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
var n__4613__auto___14337 = n;
var x_14338 = (0);
while(true){
if((x_14338 < n__4613__auto___14337)){
(a[x_14338] = x_14338);

var G__14339 = (x_14338 + (1));
x_14338 = G__14339;
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
var G__14345 = (i + (1));
i = G__14345;
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
var len__4736__auto___14346 = arguments.length;
var i__4737__auto___14347 = (0);
while(true){
if((i__4737__auto___14347 < len__4736__auto___14346)){
args__4742__auto__.push((arguments[i__4737__auto___14347]));

var G__14348 = (i__4737__auto___14347 + (1));
i__4737__auto___14347 = G__14348;
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
var c__12107__auto___14351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_14352 = state_12218__$1;
(statearr_12220_14352[(2)] = inst_12214);

(statearr_12220_14352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_14355 = state_12218__$1;
(statearr_12221_14355[(2)] = null);

(statearr_12221_14355[(1)] = (2));


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
var statearr_12223_14357 = state_12218__$1;
(statearr_12223_14357[(1)] = (5));

} else {
var statearr_12224_14358 = state_12218__$1;
(statearr_12224_14358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_14359 = state_12218__$1;
(statearr_12225_14359[(2)] = null);

(statearr_12225_14359[(1)] = (14));


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
var statearr_12226_14363 = state_12218__$1;
(statearr_12226_14363[(2)] = null);

(statearr_12226_14363[(1)] = (2));


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
var statearr_12227_14364 = state_12218__$1;
(statearr_12227_14364[(1)] = (12));

} else {
var statearr_12228_14365 = state_12218__$1;
(statearr_12228_14365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_14366 = state_12218__$1;
(statearr_12229_14366[(2)] = null);

(statearr_12229_14366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_14370 = state_12218__$1;
(statearr_12230_14370[(1)] = (8));

} else {
var statearr_12231_14372 = state_12218__$1;
(statearr_12231_14372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_14375 = state_12218__$1;
(statearr_12232_14375[(2)] = inst_12212);

(statearr_12232_14375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_14377 = state_12218__$1;
(statearr_12233_14377[(2)] = inst_12204);

(statearr_12233_14377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_14378 = state_12218__$1;
(statearr_12234_14378[(2)] = inst_12201);

(statearr_12234_14378[(1)] = (10));


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
var statearr_12237_14384 = state_12218;
(statearr_12237_14384[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_14387 = state_12218;
(statearr_12238_14387[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14389 = state_12218;
state_12218 = G__14389;
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
(statearr_12239[(6)] = c__12107__auto___14351);

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
var c__12107__auto___14390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_12253_14391 = state_12248;
(statearr_12253_14391[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_14392 = state_12248;
(statearr_12254_14392[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14393 = state_12248;
state_12248 = G__14393;
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
(statearr_12255[(6)] = c__12107__auto___14390);

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
var n__4613__auto___14394 = n;
var __14395 = (0);
while(true){
if((__14395 < n__4613__auto___14394)){
var G__12260_14396 = type;
var G__12260_14397__$1 = (((G__12260_14396 instanceof cljs.core.Keyword))?G__12260_14396.fqn:null);
switch (G__12260_14397__$1) {
case "compute":
var c__12107__auto___14399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14395,c__12107__auto___14399,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14395,c__12107__auto___14399,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_14400 = state_12273__$1;
(statearr_12275_14400[(2)] = null);

(statearr_12275_14400[(1)] = (2));


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
var statearr_12276_14401 = state_12273__$1;
(statearr_12276_14401[(1)] = (5));

} else {
var statearr_12277_14402 = state_12273__$1;
(statearr_12277_14402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_14403 = state_12273__$1;
(statearr_12278_14403[(2)] = null);

(statearr_12278_14403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_14405 = state_12273__$1;
(statearr_12279_14405[(2)] = null);

(statearr_12279_14405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_14409 = state_12273__$1;
(statearr_12280_14409[(2)] = inst_12269);

(statearr_12280_14409[(1)] = (3));


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
});})(__14395,c__12107__auto___14399,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async))
;
return ((function (__14395,switch__12071__auto__,c__12107__auto___14399,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async){
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
var statearr_12283_14412 = state_12273;
(statearr_12283_14412[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_14414 = state_12273;
(statearr_12284_14414[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14416 = state_12273;
state_12273 = G__14416;
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
;})(__14395,switch__12071__auto__,c__12107__auto___14399,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___14399);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14395,c__12107__auto___14399,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___14417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14395,c__12107__auto___14417,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14395,c__12107__auto___14417,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_14420 = state_12298__$1;
(statearr_12300_14420[(2)] = null);

(statearr_12300_14420[(1)] = (2));


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
var statearr_12301_14425 = state_12298__$1;
(statearr_12301_14425[(1)] = (5));

} else {
var statearr_12302_14426 = state_12298__$1;
(statearr_12302_14426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_14427 = state_12298__$1;
(statearr_12303_14427[(2)] = null);

(statearr_12303_14427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_14428 = state_12298__$1;
(statearr_12304_14428[(2)] = null);

(statearr_12304_14428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_14429 = state_12298__$1;
(statearr_12305_14429[(2)] = inst_12294);

(statearr_12305_14429[(1)] = (3));


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
});})(__14395,c__12107__auto___14417,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async))
;
return ((function (__14395,switch__12071__auto__,c__12107__auto___14417,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async){
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
var statearr_12308_14434 = state_12298;
(statearr_12308_14434[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_14435 = state_12298;
(statearr_12309_14435[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14436 = state_12298;
state_12298 = G__14436;
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
;})(__14395,switch__12071__auto__,c__12107__auto___14417,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___14417);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14395,c__12107__auto___14417,G__12260_14396,G__12260_14397__$1,n__4613__auto___14394,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_14397__$1)].join('')));

}

var G__14437 = (__14395 + (1));
__14395 = G__14437;
continue;
} else {
}
break;
}

var c__12107__auto___14438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_14439 = state_12332__$1;
(statearr_12334_14439[(2)] = inst_12328);

(statearr_12334_14439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_14440 = state_12332__$1;
(statearr_12335_14440[(2)] = null);

(statearr_12335_14440[(1)] = (2));


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
var statearr_12337_14441 = state_12332__$1;
(statearr_12337_14441[(1)] = (5));

} else {
var statearr_12338_14442 = state_12332__$1;
(statearr_12338_14442[(1)] = (6));

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
var statearr_12341_14443 = state_12332__$1;
(statearr_12341_14443[(2)] = null);

(statearr_12341_14443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_14444 = state_12332__$1;
(statearr_12342_14444[(2)] = inst_12316);

(statearr_12342_14444[(1)] = (7));


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
var statearr_12346_14445 = state_12332;
(statearr_12346_14445[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_14446 = state_12332;
(statearr_12347_14446[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14447 = state_12332;
state_12332 = G__14447;
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
(statearr_12348[(6)] = c__12107__auto___14438);

return statearr_12348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12387){
var state_val_12388 = (state_12387[(1)]);
if((state_val_12388 === (7))){
var inst_12383 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
var statearr_12389_14448 = state_12387__$1;
(statearr_12389_14448[(2)] = inst_12383);

(statearr_12389_14448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (20))){
var state_12387__$1 = state_12387;
var statearr_12390_14449 = state_12387__$1;
(statearr_12390_14449[(2)] = null);

(statearr_12390_14449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (1))){
var state_12387__$1 = state_12387;
var statearr_12391_14450 = state_12387__$1;
(statearr_12391_14450[(2)] = null);

(statearr_12391_14450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (4))){
var inst_12351 = (state_12387[(7)]);
var inst_12351__$1 = (state_12387[(2)]);
var inst_12352 = (inst_12351__$1 == null);
var state_12387__$1 = (function (){var statearr_12392 = state_12387;
(statearr_12392[(7)] = inst_12351__$1);

return statearr_12392;
})();
if(cljs.core.truth_(inst_12352)){
var statearr_12393_14451 = state_12387__$1;
(statearr_12393_14451[(1)] = (5));

} else {
var statearr_12394_14452 = state_12387__$1;
(statearr_12394_14452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (15))){
var inst_12365 = (state_12387[(8)]);
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12387__$1,(18),to,inst_12365);
} else {
if((state_val_12388 === (21))){
var inst_12378 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
var statearr_12395_14453 = state_12387__$1;
(statearr_12395_14453[(2)] = inst_12378);

(statearr_12395_14453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (13))){
var inst_12380 = (state_12387[(2)]);
var state_12387__$1 = (function (){var statearr_12396 = state_12387;
(statearr_12396[(9)] = inst_12380);

return statearr_12396;
})();
var statearr_12397_14454 = state_12387__$1;
(statearr_12397_14454[(2)] = null);

(statearr_12397_14454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (6))){
var inst_12351 = (state_12387[(7)]);
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12387__$1,(11),inst_12351);
} else {
if((state_val_12388 === (17))){
var inst_12373 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
if(cljs.core.truth_(inst_12373)){
var statearr_12398_14455 = state_12387__$1;
(statearr_12398_14455[(1)] = (19));

} else {
var statearr_12399_14456 = state_12387__$1;
(statearr_12399_14456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (3))){
var inst_12385 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12387__$1,inst_12385);
} else {
if((state_val_12388 === (12))){
var inst_12362 = (state_12387[(10)]);
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12387__$1,(14),inst_12362);
} else {
if((state_val_12388 === (2))){
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12387__$1,(4),results);
} else {
if((state_val_12388 === (19))){
var state_12387__$1 = state_12387;
var statearr_12400_14457 = state_12387__$1;
(statearr_12400_14457[(2)] = null);

(statearr_12400_14457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (11))){
var inst_12362 = (state_12387[(2)]);
var state_12387__$1 = (function (){var statearr_12404 = state_12387;
(statearr_12404[(10)] = inst_12362);

return statearr_12404;
})();
var statearr_12405_14458 = state_12387__$1;
(statearr_12405_14458[(2)] = null);

(statearr_12405_14458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (9))){
var state_12387__$1 = state_12387;
var statearr_12406_14459 = state_12387__$1;
(statearr_12406_14459[(2)] = null);

(statearr_12406_14459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (5))){
var state_12387__$1 = state_12387;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12407_14460 = state_12387__$1;
(statearr_12407_14460[(1)] = (8));

} else {
var statearr_12408_14461 = state_12387__$1;
(statearr_12408_14461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (14))){
var inst_12365 = (state_12387[(8)]);
var inst_12365__$1 = (state_12387[(2)]);
var inst_12366 = (inst_12365__$1 == null);
var inst_12367 = cljs.core.not(inst_12366);
var state_12387__$1 = (function (){var statearr_12413 = state_12387;
(statearr_12413[(8)] = inst_12365__$1);

return statearr_12413;
})();
if(inst_12367){
var statearr_12414_14462 = state_12387__$1;
(statearr_12414_14462[(1)] = (15));

} else {
var statearr_12416_14463 = state_12387__$1;
(statearr_12416_14463[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (16))){
var state_12387__$1 = state_12387;
var statearr_12417_14464 = state_12387__$1;
(statearr_12417_14464[(2)] = false);

(statearr_12417_14464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (10))){
var inst_12358 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
var statearr_12418_14465 = state_12387__$1;
(statearr_12418_14465[(2)] = inst_12358);

(statearr_12418_14465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (18))){
var inst_12370 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
var statearr_12419_14467 = state_12387__$1;
(statearr_12419_14467[(2)] = inst_12370);

(statearr_12419_14467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12387__$1 = state_12387;
var statearr_12420_14468 = state_12387__$1;
(statearr_12420_14468[(2)] = inst_12355);

(statearr_12420_14468[(1)] = (10));


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
var statearr_12421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12421[(1)] = (1));

return statearr_12421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12387){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12387);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12422){var ex__12075__auto__ = e12422;
var statearr_12423_14470 = state_12387;
(statearr_12423_14470[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12387[(4)]))){
var statearr_12424_14472 = state_12387;
(statearr_12424_14472[(1)] = cljs.core.first((state_12387[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14475 = state_12387;
state_12387 = G__14475;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12425 = f__12108__auto__();
(statearr_12425[(6)] = c__12107__auto__);

return statearr_12425;
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
var G__12427 = arguments.length;
switch (G__12427) {
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
var G__12429 = arguments.length;
switch (G__12429) {
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
var G__12436 = arguments.length;
switch (G__12436) {
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
var c__12107__auto___14497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12462){
var state_val_12463 = (state_12462[(1)]);
if((state_val_12463 === (7))){
var inst_12458 = (state_12462[(2)]);
var state_12462__$1 = state_12462;
var statearr_12464_14498 = state_12462__$1;
(statearr_12464_14498[(2)] = inst_12458);

(statearr_12464_14498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (1))){
var state_12462__$1 = state_12462;
var statearr_12465_14499 = state_12462__$1;
(statearr_12465_14499[(2)] = null);

(statearr_12465_14499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (4))){
var inst_12439 = (state_12462[(7)]);
var inst_12439__$1 = (state_12462[(2)]);
var inst_12440 = (inst_12439__$1 == null);
var state_12462__$1 = (function (){var statearr_12466 = state_12462;
(statearr_12466[(7)] = inst_12439__$1);

return statearr_12466;
})();
if(cljs.core.truth_(inst_12440)){
var statearr_12467_14500 = state_12462__$1;
(statearr_12467_14500[(1)] = (5));

} else {
var statearr_12468_14501 = state_12462__$1;
(statearr_12468_14501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (13))){
var state_12462__$1 = state_12462;
var statearr_12469_14502 = state_12462__$1;
(statearr_12469_14502[(2)] = null);

(statearr_12469_14502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (6))){
var inst_12439 = (state_12462[(7)]);
var inst_12445 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12439) : p.call(null,inst_12439));
var state_12462__$1 = state_12462;
if(cljs.core.truth_(inst_12445)){
var statearr_12470_14503 = state_12462__$1;
(statearr_12470_14503[(1)] = (9));

} else {
var statearr_12471_14504 = state_12462__$1;
(statearr_12471_14504[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (3))){
var inst_12460 = (state_12462[(2)]);
var state_12462__$1 = state_12462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12462__$1,inst_12460);
} else {
if((state_val_12463 === (12))){
var state_12462__$1 = state_12462;
var statearr_12472_14505 = state_12462__$1;
(statearr_12472_14505[(2)] = null);

(statearr_12472_14505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (2))){
var state_12462__$1 = state_12462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12462__$1,(4),ch);
} else {
if((state_val_12463 === (11))){
var inst_12439 = (state_12462[(7)]);
var inst_12449 = (state_12462[(2)]);
var state_12462__$1 = state_12462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12462__$1,(8),inst_12449,inst_12439);
} else {
if((state_val_12463 === (9))){
var state_12462__$1 = state_12462;
var statearr_12473_14506 = state_12462__$1;
(statearr_12473_14506[(2)] = tc);

(statearr_12473_14506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (5))){
var inst_12442 = cljs.core.async.close_BANG_(tc);
var inst_12443 = cljs.core.async.close_BANG_(fc);
var state_12462__$1 = (function (){var statearr_12474 = state_12462;
(statearr_12474[(8)] = inst_12442);

return statearr_12474;
})();
var statearr_12475_14515 = state_12462__$1;
(statearr_12475_14515[(2)] = inst_12443);

(statearr_12475_14515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (14))){
var inst_12456 = (state_12462[(2)]);
var state_12462__$1 = state_12462;
var statearr_12476_14516 = state_12462__$1;
(statearr_12476_14516[(2)] = inst_12456);

(statearr_12476_14516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (10))){
var state_12462__$1 = state_12462;
var statearr_12477_14517 = state_12462__$1;
(statearr_12477_14517[(2)] = fc);

(statearr_12477_14517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (8))){
var inst_12451 = (state_12462[(2)]);
var state_12462__$1 = state_12462;
if(cljs.core.truth_(inst_12451)){
var statearr_12478_14518 = state_12462__$1;
(statearr_12478_14518[(1)] = (12));

} else {
var statearr_12479_14519 = state_12462__$1;
(statearr_12479_14519[(1)] = (13));

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
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12462){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12462);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12481){var ex__12075__auto__ = e12481;
var statearr_12482_14520 = state_12462;
(statearr_12482_14520[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12462[(4)]))){
var statearr_12483_14521 = state_12462;
(statearr_12483_14521[(1)] = cljs.core.first((state_12462[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14522 = state_12462;
state_12462 = G__14522;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12484 = f__12108__auto__();
(statearr_12484[(6)] = c__12107__auto___14497);

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
var statearr_12508_14523 = state_12506__$1;
(statearr_12508_14523[(2)] = inst_12502);

(statearr_12508_14523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (1))){
var inst_12485 = init;
var inst_12486 = inst_12485;
var state_12506__$1 = (function (){var statearr_12509 = state_12506;
(statearr_12509[(7)] = inst_12486);

return statearr_12509;
})();
var statearr_12510_14524 = state_12506__$1;
(statearr_12510_14524[(2)] = null);

(statearr_12510_14524[(1)] = (2));


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
var statearr_12512_14525 = state_12506__$1;
(statearr_12512_14525[(1)] = (5));

} else {
var statearr_12513_14526 = state_12506__$1;
(statearr_12513_14526[(1)] = (6));

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
var statearr_12515_14527 = state_12506__$1;
(statearr_12515_14527[(1)] = (8));

} else {
var statearr_12516_14528 = state_12506__$1;
(statearr_12516_14528[(1)] = (9));

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
var statearr_12518_14529 = state_12506__$1;
(statearr_12518_14529[(2)] = null);

(statearr_12518_14529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (5))){
var inst_12486 = (state_12506[(7)]);
var state_12506__$1 = state_12506;
var statearr_12519_14544 = state_12506__$1;
(statearr_12519_14544[(2)] = inst_12486);

(statearr_12519_14544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (10))){
var inst_12500 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
var statearr_12520_14545 = state_12506__$1;
(statearr_12520_14545[(2)] = inst_12500);

(statearr_12520_14545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (8))){
var inst_12493 = (state_12506[(9)]);
var inst_12496 = cljs.core.deref(inst_12493);
var state_12506__$1 = state_12506;
var statearr_12521_14546 = state_12506__$1;
(statearr_12521_14546[(2)] = inst_12496);

(statearr_12521_14546[(1)] = (10));


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
var statearr_12524_14547 = state_12506;
(statearr_12524_14547[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12506[(4)]))){
var statearr_12525_14548 = state_12506;
(statearr_12525_14548[(1)] = cljs.core.first((state_12506[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14549 = state_12506;
state_12506 = G__14549;
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12532){
var state_val_12533 = (state_12532[(1)]);
if((state_val_12533 === (1))){
var inst_12527 = cljs.core.async.reduce(f__$1,init,ch);
var state_12532__$1 = state_12532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12532__$1,(2),inst_12527);
} else {
if((state_val_12533 === (2))){
var inst_12529 = (state_12532[(2)]);
var inst_12530 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12529) : f__$1.call(null,inst_12529));
var state_12532__$1 = state_12532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12532__$1,inst_12530);
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
var cljs$core$async$transduce_$_state_machine__12072__auto____1 = (function (state_12532){
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
}catch (e12535){var ex__12075__auto__ = e12535;
var statearr_12536_14550 = state_12532;
(statearr_12536_14550[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12532[(4)]))){
var statearr_12537_14551 = state_12532;
(statearr_12537_14551[(1)] = cljs.core.first((state_12532[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14552 = state_12532;
state_12532 = G__14552;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12072__auto__ = function(state_12532){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12072__auto____1.call(this,state_12532);
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
var statearr_12571_14574 = state_12565__$1;
(statearr_12571_14574[(2)] = inst_12547);

(statearr_12571_14574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (1))){
var inst_12541 = cljs.core.seq(coll);
var inst_12542 = inst_12541;
var state_12565__$1 = (function (){var statearr_12572 = state_12565;
(statearr_12572[(7)] = inst_12542);

return statearr_12572;
})();
var statearr_12573_14575 = state_12565__$1;
(statearr_12573_14575[(2)] = null);

(statearr_12573_14575[(1)] = (2));


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
var statearr_12575_14576 = state_12565__$1;
(statearr_12575_14576[(2)] = inst_12559);

(statearr_12575_14576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (6))){
var inst_12550 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12550)){
var statearr_12576_14577 = state_12565__$1;
(statearr_12576_14577[(1)] = (8));

} else {
var statearr_12577_14578 = state_12565__$1;
(statearr_12577_14578[(1)] = (9));

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
var statearr_12578_14579 = state_12565__$1;
(statearr_12578_14579[(2)] = null);

(statearr_12578_14579[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (2))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12542)){
var statearr_12579_14580 = state_12565__$1;
(statearr_12579_14580[(1)] = (4));

} else {
var statearr_12580_14581 = state_12565__$1;
(statearr_12580_14581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (11))){
var inst_12556 = cljs.core.async.close_BANG_(ch);
var state_12565__$1 = state_12565;
var statearr_12581_14582 = state_12565__$1;
(statearr_12581_14582[(2)] = inst_12556);

(statearr_12581_14582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (9))){
var state_12565__$1 = state_12565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12582_14583 = state_12565__$1;
(statearr_12582_14583[(1)] = (11));

} else {
var statearr_12583_14584 = state_12565__$1;
(statearr_12583_14584[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (5))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
var statearr_12584_14585 = state_12565__$1;
(statearr_12584_14585[(2)] = inst_12542);

(statearr_12584_14585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (10))){
var inst_12561 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
var statearr_12586_14586 = state_12565__$1;
(statearr_12586_14586[(2)] = inst_12561);

(statearr_12586_14586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (8))){
var inst_12542 = (state_12565[(7)]);
var inst_12552 = cljs.core.next(inst_12542);
var inst_12542__$1 = inst_12552;
var state_12565__$1 = (function (){var statearr_12588 = state_12565;
(statearr_12588[(7)] = inst_12542__$1);

return statearr_12588;
})();
var statearr_12589_14587 = state_12565__$1;
(statearr_12589_14587[(2)] = null);

(statearr_12589_14587[(1)] = (2));


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
var statearr_12598 = [null,null,null,null,null,null,null,null];
(statearr_12598[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12598[(1)] = (1));

return statearr_12598;
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
}catch (e12599){var ex__12075__auto__ = e12599;
var statearr_12600_14588 = state_12565;
(statearr_12600_14588[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12565[(4)]))){
var statearr_12602_14589 = state_12565;
(statearr_12602_14589[(1)] = cljs.core.first((state_12565[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14590 = state_12565;
state_12565 = G__14590;
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
var G__12609 = arguments.length;
switch (G__12609) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14592 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14592(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14595 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14595(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14598 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14598(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14601 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14601(m);
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
var c__12107__auto___14642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12751){
var state_val_12752 = (state_12751[(1)]);
if((state_val_12752 === (7))){
var inst_12747 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12753_14645 = state_12751__$1;
(statearr_12753_14645[(2)] = inst_12747);

(statearr_12753_14645[(1)] = (3));


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
var statearr_12755_14651 = state_12751__$1;
(statearr_12755_14651[(1)] = (22));

} else {
var statearr_12756_14652 = state_12751__$1;
(statearr_12756_14652[(1)] = (23));

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
var statearr_12758_14655 = state_12751__$1;
(statearr_12758_14655[(1)] = (30));

} else {
var statearr_12759_14656 = state_12751__$1;
(statearr_12759_14656[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (1))){
var state_12751__$1 = state_12751;
var statearr_12760_14658 = state_12751__$1;
(statearr_12760_14658[(2)] = null);

(statearr_12760_14658[(1)] = (2));


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
var statearr_12762_14662 = state_12751__$1;
(statearr_12762_14662[(2)] = null);

(statearr_12762_14662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (39))){
var state_12751__$1 = state_12751;
var statearr_12766_14664 = state_12751__$1;
(statearr_12766_14664[(2)] = null);

(statearr_12766_14664[(1)] = (41));


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
var statearr_12768_14665 = state_12751__$1;
(statearr_12768_14665[(1)] = (5));

} else {
var statearr_12770_14666 = state_12751__$1;
(statearr_12770_14666[(1)] = (6));

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
var state_12751__$1 = (function (){var statearr_12771 = state_12751;
(statearr_12771[(18)] = inst_12648);

(statearr_12771[(13)] = inst_12630__$1);

(statearr_12771[(14)] = inst_12633__$1);

(statearr_12771[(16)] = inst_12632__$1);

(statearr_12771[(17)] = inst_12631__$1);

return statearr_12771;
})();
var statearr_12772_14669 = state_12751__$1;
(statearr_12772_14669[(2)] = null);

(statearr_12772_14669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (21))){
var inst_12675 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12776_14671 = state_12751__$1;
(statearr_12776_14671[(2)] = inst_12675);

(statearr_12776_14671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (31))){
var inst_12701 = (state_12751[(12)]);
var inst_12705 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12701);
var state_12751__$1 = state_12751;
var statearr_12777_14717 = state_12751__$1;
(statearr_12777_14717[(2)] = inst_12705);

(statearr_12777_14717[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (32))){
var inst_12695 = (state_12751[(19)]);
var inst_12693 = (state_12751[(20)]);
var inst_12694 = (state_12751[(10)]);
var inst_12696 = (state_12751[(11)]);
var inst_12707 = (state_12751[(2)]);
var inst_12708 = (inst_12696 + (1));
var tmp12773 = inst_12695;
var tmp12774 = inst_12693;
var tmp12775 = inst_12694;
var inst_12693__$1 = tmp12774;
var inst_12694__$1 = tmp12775;
var inst_12695__$1 = tmp12773;
var inst_12696__$1 = inst_12708;
var state_12751__$1 = (function (){var statearr_12778 = state_12751;
(statearr_12778[(19)] = inst_12695__$1);

(statearr_12778[(20)] = inst_12693__$1);

(statearr_12778[(21)] = inst_12707);

(statearr_12778[(10)] = inst_12694__$1);

(statearr_12778[(11)] = inst_12696__$1);

return statearr_12778;
})();
var statearr_12779_14727 = state_12751__$1;
(statearr_12779_14727[(2)] = null);

(statearr_12779_14727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (40))){
var inst_12720 = (state_12751[(22)]);
var inst_12724 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12720);
var state_12751__$1 = state_12751;
var statearr_12780_14729 = state_12751__$1;
(statearr_12780_14729[(2)] = inst_12724);

(statearr_12780_14729[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (33))){
var inst_12711 = (state_12751[(23)]);
var inst_12713 = cljs.core.chunked_seq_QMARK_(inst_12711);
var state_12751__$1 = state_12751;
if(inst_12713){
var statearr_12781_14730 = state_12751__$1;
(statearr_12781_14730[(1)] = (36));

} else {
var statearr_12782_14731 = state_12751__$1;
(statearr_12782_14731[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (13))){
var inst_12642 = (state_12751[(24)]);
var inst_12645 = cljs.core.async.close_BANG_(inst_12642);
var state_12751__$1 = state_12751;
var statearr_12783_14734 = state_12751__$1;
(statearr_12783_14734[(2)] = inst_12645);

(statearr_12783_14734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (22))){
var inst_12665 = (state_12751[(8)]);
var inst_12668 = cljs.core.async.close_BANG_(inst_12665);
var state_12751__$1 = state_12751;
var statearr_12784_14735 = state_12751__$1;
(statearr_12784_14735[(2)] = inst_12668);

(statearr_12784_14735[(1)] = (24));


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
var state_12751__$1 = (function (){var statearr_12785 = state_12751;
(statearr_12785[(19)] = inst_12695);

(statearr_12785[(20)] = inst_12693);

(statearr_12785[(10)] = inst_12694);

(statearr_12785[(11)] = inst_12696);

return statearr_12785;
})();
var statearr_12786_14739 = state_12751__$1;
(statearr_12786_14739[(2)] = null);

(statearr_12786_14739[(1)] = (25));


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
var state_12751__$1 = (function (){var statearr_12787 = state_12751;
(statearr_12787[(19)] = inst_12695);

(statearr_12787[(20)] = inst_12693);

(statearr_12787[(10)] = inst_12694);

(statearr_12787[(25)] = inst_12726);

(statearr_12787[(11)] = inst_12696);

return statearr_12787;
})();
var statearr_12788_14742 = state_12751__$1;
(statearr_12788_14742[(2)] = null);

(statearr_12788_14742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (43))){
var state_12751__$1 = state_12751;
var statearr_12790_14743 = state_12751__$1;
(statearr_12790_14743[(2)] = null);

(statearr_12790_14743[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (29))){
var inst_12735 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12791_14746 = state_12751__$1;
(statearr_12791_14746[(2)] = inst_12735);

(statearr_12791_14746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (44))){
var inst_12744 = (state_12751[(2)]);
var state_12751__$1 = (function (){var statearr_12793 = state_12751;
(statearr_12793[(26)] = inst_12744);

return statearr_12793;
})();
var statearr_12794_14759 = state_12751__$1;
(statearr_12794_14759[(2)] = null);

(statearr_12794_14759[(1)] = (2));


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
var state_12751__$1 = (function (){var statearr_12795 = state_12751;
(statearr_12795[(19)] = inst_12695);

(statearr_12795[(20)] = inst_12693);

(statearr_12795[(10)] = inst_12694);

(statearr_12795[(27)] = inst_12685__$1);

(statearr_12795[(28)] = inst_12687);

(statearr_12795[(11)] = inst_12696);

return statearr_12795;
})();
var statearr_12796_14760 = state_12751__$1;
(statearr_12796_14760[(2)] = null);

(statearr_12796_14760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (28))){
var inst_12711 = (state_12751[(23)]);
var inst_12693 = (state_12751[(20)]);
var inst_12711__$1 = cljs.core.seq(inst_12693);
var state_12751__$1 = (function (){var statearr_12797 = state_12751;
(statearr_12797[(23)] = inst_12711__$1);

return statearr_12797;
})();
if(inst_12711__$1){
var statearr_12798_14761 = state_12751__$1;
(statearr_12798_14761[(1)] = (33));

} else {
var statearr_12799_14762 = state_12751__$1;
(statearr_12799_14762[(1)] = (34));

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
var statearr_12800_14763 = state_12751__$1;
(statearr_12800_14763[(1)] = (27));

} else {
var statearr_12801_14764 = state_12751__$1;
(statearr_12801_14764[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (34))){
var state_12751__$1 = state_12751;
var statearr_12802_14765 = state_12751__$1;
(statearr_12802_14765[(2)] = null);

(statearr_12802_14765[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (17))){
var state_12751__$1 = state_12751;
var statearr_12803_14768 = state_12751__$1;
(statearr_12803_14768[(2)] = null);

(statearr_12803_14768[(1)] = (18));


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
var statearr_12804_14769 = state_12751__$1;
(statearr_12804_14769[(2)] = inst_12680);

(statearr_12804_14769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (2))){
var state_12751__$1 = state_12751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12751__$1,(4),ch);
} else {
if((state_val_12752 === (23))){
var state_12751__$1 = state_12751;
var statearr_12805_14770 = state_12751__$1;
(statearr_12805_14770[(2)] = null);

(statearr_12805_14770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (35))){
var inst_12733 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12806_14771 = state_12751__$1;
(statearr_12806_14771[(2)] = inst_12733);

(statearr_12806_14771[(1)] = (29));


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
var state_12751__$1 = (function (){var statearr_12807 = state_12751;
(statearr_12807[(13)] = inst_12630);

(statearr_12807[(14)] = inst_12633);

(statearr_12807[(16)] = inst_12632);

(statearr_12807[(17)] = inst_12631);

return statearr_12807;
})();
var statearr_12808_14772 = state_12751__$1;
(statearr_12808_14772[(2)] = null);

(statearr_12808_14772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (11))){
var inst_12630 = (state_12751[(13)]);
var inst_12652 = (state_12751[(7)]);
var inst_12652__$1 = cljs.core.seq(inst_12630);
var state_12751__$1 = (function (){var statearr_12811 = state_12751;
(statearr_12811[(7)] = inst_12652__$1);

return statearr_12811;
})();
if(inst_12652__$1){
var statearr_12812_14777 = state_12751__$1;
(statearr_12812_14777[(1)] = (16));

} else {
var statearr_12813_14778 = state_12751__$1;
(statearr_12813_14778[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (9))){
var inst_12682 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12817_14779 = state_12751__$1;
(statearr_12817_14779[(2)] = inst_12682);

(statearr_12817_14779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (5))){
var inst_12628 = cljs.core.deref(cs);
var inst_12629 = cljs.core.seq(inst_12628);
var inst_12630 = inst_12629;
var inst_12631 = null;
var inst_12632 = (0);
var inst_12633 = (0);
var state_12751__$1 = (function (){var statearr_12818 = state_12751;
(statearr_12818[(13)] = inst_12630);

(statearr_12818[(14)] = inst_12633);

(statearr_12818[(16)] = inst_12632);

(statearr_12818[(17)] = inst_12631);

return statearr_12818;
})();
var statearr_12819_14781 = state_12751__$1;
(statearr_12819_14781[(2)] = null);

(statearr_12819_14781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (14))){
var state_12751__$1 = state_12751;
var statearr_12820_14783 = state_12751__$1;
(statearr_12820_14783[(2)] = null);

(statearr_12820_14783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (45))){
var inst_12741 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12821_14784 = state_12751__$1;
(statearr_12821_14784[(2)] = inst_12741);

(statearr_12821_14784[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (26))){
var inst_12685 = (state_12751[(27)]);
var inst_12737 = (state_12751[(2)]);
var inst_12738 = cljs.core.seq(inst_12685);
var state_12751__$1 = (function (){var statearr_12823 = state_12751;
(statearr_12823[(29)] = inst_12737);

return statearr_12823;
})();
if(inst_12738){
var statearr_12824_14786 = state_12751__$1;
(statearr_12824_14786[(1)] = (42));

} else {
var statearr_12825_14787 = state_12751__$1;
(statearr_12825_14787[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (16))){
var inst_12652 = (state_12751[(7)]);
var inst_12654 = cljs.core.chunked_seq_QMARK_(inst_12652);
var state_12751__$1 = state_12751;
if(inst_12654){
var statearr_12826_14788 = state_12751__$1;
(statearr_12826_14788[(1)] = (19));

} else {
var statearr_12827_14792 = state_12751__$1;
(statearr_12827_14792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (38))){
var inst_12730 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12828_14793 = state_12751__$1;
(statearr_12828_14793[(2)] = inst_12730);

(statearr_12828_14793[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (30))){
var state_12751__$1 = state_12751;
var statearr_12829_14794 = state_12751__$1;
(statearr_12829_14794[(2)] = null);

(statearr_12829_14794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (10))){
var inst_12633 = (state_12751[(14)]);
var inst_12631 = (state_12751[(17)]);
var inst_12641 = cljs.core._nth(inst_12631,inst_12633);
var inst_12642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12641,(0),null);
var inst_12643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12641,(1),null);
var state_12751__$1 = (function (){var statearr_12830 = state_12751;
(statearr_12830[(24)] = inst_12642);

return statearr_12830;
})();
if(cljs.core.truth_(inst_12643)){
var statearr_12831_14798 = state_12751__$1;
(statearr_12831_14798[(1)] = (13));

} else {
var statearr_12832_14799 = state_12751__$1;
(statearr_12832_14799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (18))){
var inst_12678 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12833_14800 = state_12751__$1;
(statearr_12833_14800[(2)] = inst_12678);

(statearr_12833_14800[(1)] = (12));


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
var state_12751__$1 = (function (){var statearr_12834 = state_12751;
(statearr_12834[(22)] = inst_12720__$1);

return statearr_12834;
})();
if(cljs.core.truth_(inst_12721)){
var statearr_12835_14802 = state_12751__$1;
(statearr_12835_14802[(1)] = (39));

} else {
var statearr_12836_14803 = state_12751__$1;
(statearr_12836_14803[(1)] = (40));

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
var statearr_12837_14804 = state_12751__$1;
(statearr_12837_14804[(1)] = (10));

} else {
var statearr_12838_14805 = state_12751__$1;
(statearr_12838_14805[(1)] = (11));

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
var statearr_12839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12839[(0)] = cljs$core$async$mult_$_state_machine__12072__auto__);

(statearr_12839[(1)] = (1));

return statearr_12839;
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
}catch (e12840){var ex__12075__auto__ = e12840;
var statearr_12841_14806 = state_12751;
(statearr_12841_14806[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12751[(4)]))){
var statearr_12842_14807 = state_12751;
(statearr_12842_14807[(1)] = cljs.core.first((state_12751[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14808 = state_12751;
state_12751 = G__14808;
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
var state__12109__auto__ = (function (){var statearr_12843 = f__12108__auto__();
(statearr_12843[(6)] = c__12107__auto___14642);

return statearr_12843;
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
var G__12845 = arguments.length;
switch (G__12845) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_14810 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14810(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14815 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14815(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14816 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14816(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14817 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14817(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14818 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14818(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14819 = arguments.length;
var i__4737__auto___14820 = (0);
while(true){
if((i__4737__auto___14820 < len__4736__auto___14819)){
args__4742__auto__.push((arguments[i__4737__auto___14820]));

var G__14821 = (i__4737__auto___14820 + (1));
i__4737__auto___14820 = G__14821;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12853){
var map__12854 = p__12853;
var map__12854__$1 = (((((!((map__12854 == null))))?(((((map__12854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12854):map__12854);
var opts = map__12854__$1;
var statearr_12856_14822 = state;
(statearr_12856_14822[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12858_14823 = state;
(statearr_12858_14823[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12859_14833 = state;
(statearr_12859_14833[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12849){
var G__12850 = cljs.core.first(seq12849);
var seq12849__$1 = cljs.core.next(seq12849);
var G__12851 = cljs.core.first(seq12849__$1);
var seq12849__$2 = cljs.core.next(seq12849__$1);
var G__12852 = cljs.core.first(seq12849__$2);
var seq12849__$3 = cljs.core.next(seq12849__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12850,G__12851,G__12852,seq12849__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12862 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12863){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12863 = meta12863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12864,meta12863__$1){
var self__ = this;
var _12864__$1 = this;
return (new cljs.core.async.t_cljs$core$async12862(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12863__$1));
}));

(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12864){
var self__ = this;
var _12864__$1 = this;
return self__.meta12863;
}));

(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12863","meta12863",1828607876,null)], null);
}));

(cljs.core.async.t_cljs$core$async12862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12862");

(cljs.core.async.t_cljs$core$async12862.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12862.
 */
cljs.core.async.__GT_t_cljs$core$async12862 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12862(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12863){
return (new cljs.core.async.t_cljs$core$async12862(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12863));
});

}

return (new cljs.core.async.t_cljs$core$async12862(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12971){
var state_val_12972 = (state_12971[(1)]);
if((state_val_12972 === (7))){
var inst_12886 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_12973_14837 = state_12971__$1;
(statearr_12973_14837[(2)] = inst_12886);

(statearr_12973_14837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (20))){
var inst_12898 = (state_12971[(7)]);
var state_12971__$1 = state_12971;
var statearr_12974_14838 = state_12971__$1;
(statearr_12974_14838[(2)] = inst_12898);

(statearr_12974_14838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (27))){
var state_12971__$1 = state_12971;
var statearr_12975_14839 = state_12971__$1;
(statearr_12975_14839[(2)] = null);

(statearr_12975_14839[(1)] = (28));


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
var statearr_12977_14841 = state_12971__$1;
(statearr_12977_14841[(1)] = (2));

} else {
var statearr_12978_14842 = state_12971__$1;
(statearr_12978_14842[(1)] = (3));

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
var statearr_12980_14843 = state_12971__$1;
(statearr_12980_14843[(1)] = (29));

} else {
var statearr_12981_14844 = state_12971__$1;
(statearr_12981_14844[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (4))){
var inst_12889 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12889)){
var statearr_12982_14845 = state_12971__$1;
(statearr_12982_14845[(1)] = (8));

} else {
var statearr_12983_14846 = state_12971__$1;
(statearr_12983_14846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (15))){
var inst_12916 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12916)){
var statearr_12984_14847 = state_12971__$1;
(statearr_12984_14847[(1)] = (19));

} else {
var statearr_12985_14848 = state_12971__$1;
(statearr_12985_14848[(1)] = (20));

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
var statearr_12987_14850 = state_12971__$1;
(statearr_12987_14850[(1)] = (32));

} else {
var statearr_12988_14851 = state_12971__$1;
(statearr_12988_14851[(1)] = (33));

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
var statearr_12990_14852 = state_12971__$1;
(statearr_12990_14852[(2)] = null);

(statearr_12990_14852[(1)] = (11));


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
var statearr_12991_14853 = state_12971__$1;
(statearr_12991_14853[(1)] = (16));

} else {
var statearr_12992_14854 = state_12971__$1;
(statearr_12992_14854[(1)] = (17));

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
var statearr_12994_14855 = state_12971__$1;
(statearr_12994_14855[(1)] = (23));

} else {
var statearr_12995_14856 = state_12971__$1;
(statearr_12995_14856[(1)] = (24));

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
var statearr_12997_14857 = state_12971__$1;
(statearr_12997_14857[(2)] = null);

(statearr_12997_14857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (29))){
var inst_12945 = (state_12971[(9)]);
var state_12971__$1 = state_12971;
var statearr_12998_14858 = state_12971__$1;
(statearr_12998_14858[(2)] = inst_12945);

(statearr_12998_14858[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (6))){
var state_12971__$1 = state_12971;
var statearr_12999_14859 = state_12971__$1;
(statearr_12999_14859[(2)] = false);

(statearr_12999_14859[(1)] = (7));


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
var statearr_13001_14860 = state_12971__$1;
(statearr_13001_14860[(2)] = null);

(statearr_13001_14860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (25))){
var inst_12967 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13002_14861 = state_12971__$1;
(statearr_13002_14861[(2)] = inst_12967);

(statearr_13002_14861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (34))){
var inst_12965 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13003_14862 = state_12971__$1;
(statearr_13003_14862[(2)] = inst_12965);

(statearr_13003_14862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (17))){
var state_12971__$1 = state_12971;
var statearr_13004_14863 = state_12971__$1;
(statearr_13004_14863[(2)] = false);

(statearr_13004_14863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (3))){
var state_12971__$1 = state_12971;
var statearr_13005_14864 = state_12971__$1;
(statearr_13005_14864[(2)] = false);

(statearr_13005_14864[(1)] = (4));


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
var statearr_13006_14865 = state_12971__$1;
(statearr_13006_14865[(1)] = (5));

} else {
var statearr_13007_14866 = state_12971__$1;
(statearr_13007_14866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (23))){
var inst_12930 = (state_12971[(14)]);
var inst_12936 = (inst_12930 == null);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12936)){
var statearr_13008_14868 = state_12971__$1;
(statearr_13008_14868[(1)] = (26));

} else {
var statearr_13009_14869 = state_12971__$1;
(statearr_13009_14869[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (35))){
var inst_12956 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12956)){
var statearr_13010_14870 = state_12971__$1;
(statearr_13010_14870[(1)] = (36));

} else {
var statearr_13011_14871 = state_12971__$1;
(statearr_13011_14871[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (19))){
var inst_12898 = (state_12971[(7)]);
var inst_12918 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12898);
var state_12971__$1 = state_12971;
var statearr_13012_14873 = state_12971__$1;
(statearr_13012_14873[(2)] = inst_12918);

(statearr_13012_14873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (11))){
var inst_12898 = (state_12971[(7)]);
var inst_12902 = (inst_12898 == null);
var inst_12903 = cljs.core.not(inst_12902);
var state_12971__$1 = state_12971;
if(inst_12903){
var statearr_13013_14874 = state_12971__$1;
(statearr_13013_14874[(1)] = (13));

} else {
var statearr_13014_14876 = state_12971__$1;
(statearr_13014_14876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (9))){
var inst_12873 = (state_12971[(8)]);
var state_12971__$1 = state_12971;
var statearr_13015_14877 = state_12971__$1;
(statearr_13015_14877[(2)] = inst_12873);

(statearr_13015_14877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (5))){
var state_12971__$1 = state_12971;
var statearr_13016_14878 = state_12971__$1;
(statearr_13016_14878[(2)] = true);

(statearr_13016_14878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (14))){
var state_12971__$1 = state_12971;
var statearr_13017_14880 = state_12971__$1;
(statearr_13017_14880[(2)] = false);

(statearr_13017_14880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (26))){
var inst_12931 = (state_12971[(10)]);
var inst_12938 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12931);
var state_12971__$1 = state_12971;
var statearr_13018_14881 = state_12971__$1;
(statearr_13018_14881[(2)] = inst_12938);

(statearr_13018_14881[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (16))){
var state_12971__$1 = state_12971;
var statearr_13019_14882 = state_12971__$1;
(statearr_13019_14882[(2)] = true);

(statearr_13019_14882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (38))){
var inst_12961 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13020_14884 = state_12971__$1;
(statearr_13020_14884[(2)] = inst_12961);

(statearr_13020_14884[(1)] = (34));


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
var statearr_13021_14886 = state_12971__$1;
(statearr_13021_14886[(2)] = inst_12951);

(statearr_13021_14886[(1)] = (31));


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
var statearr_13023_14888 = state_12971__$1;
(statearr_13023_14888[(2)] = null);

(statearr_13023_14888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (18))){
var inst_12913 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13024_14889 = state_12971__$1;
(statearr_13024_14889[(2)] = inst_12913);

(statearr_13024_14889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (37))){
var state_12971__$1 = state_12971;
var statearr_13025_14890 = state_12971__$1;
(statearr_13025_14890[(2)] = null);

(statearr_13025_14890[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (8))){
var inst_12873 = (state_12971[(8)]);
var inst_12891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12873);
var state_12971__$1 = state_12971;
var statearr_13026_14891 = state_12971__$1;
(statearr_13026_14891[(2)] = inst_12891);

(statearr_13026_14891[(1)] = (10));


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
var statearr_13029_14892 = state_12971;
(statearr_13029_14892[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12971[(4)]))){
var statearr_13030_14893 = state_12971;
(statearr_13030_14893[(1)] = cljs.core.first((state_12971[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14894 = state_12971;
state_12971 = G__14894;
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
(statearr_13031[(6)] = c__12107__auto___14835);

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

var cljs$core$async$Pub$sub_STAR_$dyn_14895 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14895(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14896 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14896(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14897 = (function() {
var G__14898 = null;
var G__14898__1 = (function (p){
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
var G__14898__2 = (function (p,v){
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
G__14898 = function(p,v){
switch(arguments.length){
case 1:
return G__14898__1.call(this,p);
case 2:
return G__14898__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14898.cljs$core$IFn$_invoke$arity$1 = G__14898__1;
G__14898.cljs$core$IFn$_invoke$arity$2 = G__14898__2;
return G__14898;
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14897(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14897(p,v);
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
var G__13041 = arguments.length;
switch (G__13041) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13036_SHARP_){
if(cljs.core.truth_((p1__13036_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13036_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13036_SHARP_.call(null,topic)))){
return p1__13036_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13036_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13043 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13044){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13044 = meta13044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13045,meta13044__$1){
var self__ = this;
var _13045__$1 = this;
return (new cljs.core.async.t_cljs$core$async13043(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13044__$1));
}));

(cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13045){
var self__ = this;
var _13045__$1 = this;
return self__.meta13044;
}));

(cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13044","meta13044",-1021559533,null)], null);
}));

(cljs.core.async.t_cljs$core$async13043.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13043");

(cljs.core.async.t_cljs$core$async13043.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13043");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13043.
 */
cljs.core.async.__GT_t_cljs$core$async13043 = (function cljs$core$async$__GT_t_cljs$core$async13043(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13044){
return (new cljs.core.async.t_cljs$core$async13043(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13044));
});

}

return (new cljs.core.async.t_cljs$core$async13043(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13122){
var state_val_13123 = (state_13122[(1)]);
if((state_val_13123 === (7))){
var inst_13118 = (state_13122[(2)]);
var state_13122__$1 = state_13122;
var statearr_13125_14909 = state_13122__$1;
(statearr_13125_14909[(2)] = inst_13118);

(statearr_13125_14909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (20))){
var state_13122__$1 = state_13122;
var statearr_13126_14910 = state_13122__$1;
(statearr_13126_14910[(2)] = null);

(statearr_13126_14910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (1))){
var state_13122__$1 = state_13122;
var statearr_13127_14911 = state_13122__$1;
(statearr_13127_14911[(2)] = null);

(statearr_13127_14911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (24))){
var inst_13101 = (state_13122[(7)]);
var inst_13110 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13101);
var state_13122__$1 = state_13122;
var statearr_13128_14912 = state_13122__$1;
(statearr_13128_14912[(2)] = inst_13110);

(statearr_13128_14912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (4))){
var inst_13053 = (state_13122[(8)]);
var inst_13053__$1 = (state_13122[(2)]);
var inst_13054 = (inst_13053__$1 == null);
var state_13122__$1 = (function (){var statearr_13129 = state_13122;
(statearr_13129[(8)] = inst_13053__$1);

return statearr_13129;
})();
if(cljs.core.truth_(inst_13054)){
var statearr_13132_14913 = state_13122__$1;
(statearr_13132_14913[(1)] = (5));

} else {
var statearr_13133_14914 = state_13122__$1;
(statearr_13133_14914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (15))){
var inst_13095 = (state_13122[(2)]);
var state_13122__$1 = state_13122;
var statearr_13136_14915 = state_13122__$1;
(statearr_13136_14915[(2)] = inst_13095);

(statearr_13136_14915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (21))){
var inst_13115 = (state_13122[(2)]);
var state_13122__$1 = (function (){var statearr_13138 = state_13122;
(statearr_13138[(9)] = inst_13115);

return statearr_13138;
})();
var statearr_13139_14916 = state_13122__$1;
(statearr_13139_14916[(2)] = null);

(statearr_13139_14916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (13))){
var inst_13077 = (state_13122[(10)]);
var inst_13079 = cljs.core.chunked_seq_QMARK_(inst_13077);
var state_13122__$1 = state_13122;
if(inst_13079){
var statearr_13141_14917 = state_13122__$1;
(statearr_13141_14917[(1)] = (16));

} else {
var statearr_13142_14918 = state_13122__$1;
(statearr_13142_14918[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (22))){
var inst_13107 = (state_13122[(2)]);
var state_13122__$1 = state_13122;
if(cljs.core.truth_(inst_13107)){
var statearr_13143_14919 = state_13122__$1;
(statearr_13143_14919[(1)] = (23));

} else {
var statearr_13144_14920 = state_13122__$1;
(statearr_13144_14920[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (6))){
var inst_13053 = (state_13122[(8)]);
var inst_13103 = (state_13122[(11)]);
var inst_13101 = (state_13122[(7)]);
var inst_13101__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13053) : topic_fn.call(null,inst_13053));
var inst_13102 = cljs.core.deref(mults);
var inst_13103__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13102,inst_13101__$1);
var state_13122__$1 = (function (){var statearr_13147 = state_13122;
(statearr_13147[(11)] = inst_13103__$1);

(statearr_13147[(7)] = inst_13101__$1);

return statearr_13147;
})();
if(cljs.core.truth_(inst_13103__$1)){
var statearr_13149_14921 = state_13122__$1;
(statearr_13149_14921[(1)] = (19));

} else {
var statearr_13151_14922 = state_13122__$1;
(statearr_13151_14922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (25))){
var inst_13112 = (state_13122[(2)]);
var state_13122__$1 = state_13122;
var statearr_13152_14923 = state_13122__$1;
(statearr_13152_14923[(2)] = inst_13112);

(statearr_13152_14923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (17))){
var inst_13077 = (state_13122[(10)]);
var inst_13086 = cljs.core.first(inst_13077);
var inst_13087 = cljs.core.async.muxch_STAR_(inst_13086);
var inst_13088 = cljs.core.async.close_BANG_(inst_13087);
var inst_13089 = cljs.core.next(inst_13077);
var inst_13063 = inst_13089;
var inst_13064 = null;
var inst_13065 = (0);
var inst_13066 = (0);
var state_13122__$1 = (function (){var statearr_13153 = state_13122;
(statearr_13153[(12)] = inst_13066);

(statearr_13153[(13)] = inst_13064);

(statearr_13153[(14)] = inst_13065);

(statearr_13153[(15)] = inst_13063);

(statearr_13153[(16)] = inst_13088);

return statearr_13153;
})();
var statearr_13154_14925 = state_13122__$1;
(statearr_13154_14925[(2)] = null);

(statearr_13154_14925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (3))){
var inst_13120 = (state_13122[(2)]);
var state_13122__$1 = state_13122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13122__$1,inst_13120);
} else {
if((state_val_13123 === (12))){
var inst_13097 = (state_13122[(2)]);
var state_13122__$1 = state_13122;
var statearr_13155_14926 = state_13122__$1;
(statearr_13155_14926[(2)] = inst_13097);

(statearr_13155_14926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (2))){
var state_13122__$1 = state_13122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13122__$1,(4),ch);
} else {
if((state_val_13123 === (23))){
var state_13122__$1 = state_13122;
var statearr_13156_14927 = state_13122__$1;
(statearr_13156_14927[(2)] = null);

(statearr_13156_14927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (19))){
var inst_13053 = (state_13122[(8)]);
var inst_13103 = (state_13122[(11)]);
var inst_13105 = cljs.core.async.muxch_STAR_(inst_13103);
var state_13122__$1 = state_13122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13122__$1,(22),inst_13105,inst_13053);
} else {
if((state_val_13123 === (11))){
var inst_13077 = (state_13122[(10)]);
var inst_13063 = (state_13122[(15)]);
var inst_13077__$1 = cljs.core.seq(inst_13063);
var state_13122__$1 = (function (){var statearr_13157 = state_13122;
(statearr_13157[(10)] = inst_13077__$1);

return statearr_13157;
})();
if(inst_13077__$1){
var statearr_13158_14928 = state_13122__$1;
(statearr_13158_14928[(1)] = (13));

} else {
var statearr_13159_14929 = state_13122__$1;
(statearr_13159_14929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (9))){
var inst_13099 = (state_13122[(2)]);
var state_13122__$1 = state_13122;
var statearr_13160_14930 = state_13122__$1;
(statearr_13160_14930[(2)] = inst_13099);

(statearr_13160_14930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (5))){
var inst_13060 = cljs.core.deref(mults);
var inst_13061 = cljs.core.vals(inst_13060);
var inst_13062 = cljs.core.seq(inst_13061);
var inst_13063 = inst_13062;
var inst_13064 = null;
var inst_13065 = (0);
var inst_13066 = (0);
var state_13122__$1 = (function (){var statearr_13161 = state_13122;
(statearr_13161[(12)] = inst_13066);

(statearr_13161[(13)] = inst_13064);

(statearr_13161[(14)] = inst_13065);

(statearr_13161[(15)] = inst_13063);

return statearr_13161;
})();
var statearr_13162_14931 = state_13122__$1;
(statearr_13162_14931[(2)] = null);

(statearr_13162_14931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (14))){
var state_13122__$1 = state_13122;
var statearr_13166_14932 = state_13122__$1;
(statearr_13166_14932[(2)] = null);

(statearr_13166_14932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (16))){
var inst_13077 = (state_13122[(10)]);
var inst_13081 = cljs.core.chunk_first(inst_13077);
var inst_13082 = cljs.core.chunk_rest(inst_13077);
var inst_13083 = cljs.core.count(inst_13081);
var inst_13063 = inst_13082;
var inst_13064 = inst_13081;
var inst_13065 = inst_13083;
var inst_13066 = (0);
var state_13122__$1 = (function (){var statearr_13167 = state_13122;
(statearr_13167[(12)] = inst_13066);

(statearr_13167[(13)] = inst_13064);

(statearr_13167[(14)] = inst_13065);

(statearr_13167[(15)] = inst_13063);

return statearr_13167;
})();
var statearr_13168_14933 = state_13122__$1;
(statearr_13168_14933[(2)] = null);

(statearr_13168_14933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (10))){
var inst_13066 = (state_13122[(12)]);
var inst_13064 = (state_13122[(13)]);
var inst_13065 = (state_13122[(14)]);
var inst_13063 = (state_13122[(15)]);
var inst_13071 = cljs.core._nth(inst_13064,inst_13066);
var inst_13072 = cljs.core.async.muxch_STAR_(inst_13071);
var inst_13073 = cljs.core.async.close_BANG_(inst_13072);
var inst_13074 = (inst_13066 + (1));
var tmp13163 = inst_13064;
var tmp13164 = inst_13065;
var tmp13165 = inst_13063;
var inst_13063__$1 = tmp13165;
var inst_13064__$1 = tmp13163;
var inst_13065__$1 = tmp13164;
var inst_13066__$1 = inst_13074;
var state_13122__$1 = (function (){var statearr_13171 = state_13122;
(statearr_13171[(12)] = inst_13066__$1);

(statearr_13171[(13)] = inst_13064__$1);

(statearr_13171[(14)] = inst_13065__$1);

(statearr_13171[(15)] = inst_13063__$1);

(statearr_13171[(17)] = inst_13073);

return statearr_13171;
})();
var statearr_13172_14936 = state_13122__$1;
(statearr_13172_14936[(2)] = null);

(statearr_13172_14936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (18))){
var inst_13092 = (state_13122[(2)]);
var state_13122__$1 = state_13122;
var statearr_13174_14937 = state_13122__$1;
(statearr_13174_14937[(2)] = inst_13092);

(statearr_13174_14937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13123 === (8))){
var inst_13066 = (state_13122[(12)]);
var inst_13065 = (state_13122[(14)]);
var inst_13068 = (inst_13066 < inst_13065);
var inst_13069 = inst_13068;
var state_13122__$1 = state_13122;
if(cljs.core.truth_(inst_13069)){
var statearr_13178_14939 = state_13122__$1;
(statearr_13178_14939[(1)] = (10));

} else {
var statearr_13179_14940 = state_13122__$1;
(statearr_13179_14940[(1)] = (11));

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
var statearr_13194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13194[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13194[(1)] = (1));

return statearr_13194;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13122){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13122);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13196){var ex__12075__auto__ = e13196;
var statearr_13197_14942 = state_13122;
(statearr_13197_14942[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13122[(4)]))){
var statearr_13198_14943 = state_13122;
(statearr_13198_14943[(1)] = cljs.core.first((state_13122[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14944 = state_13122;
state_13122 = G__14944;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13199 = f__12108__auto__();
(statearr_13199[(6)] = c__12107__auto___14908);

return statearr_13199;
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
var G__13201 = arguments.length;
switch (G__13201) {
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
var G__13203 = arguments.length;
switch (G__13203) {
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
var G__13205 = arguments.length;
switch (G__13205) {
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
var c__12107__auto___14950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13332){
var state_val_13333 = (state_13332[(1)]);
if((state_val_13333 === (7))){
var state_13332__$1 = state_13332;
var statearr_13334_14951 = state_13332__$1;
(statearr_13334_14951[(2)] = null);

(statearr_13334_14951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (1))){
var state_13332__$1 = state_13332;
var statearr_13335_14952 = state_13332__$1;
(statearr_13335_14952[(2)] = null);

(statearr_13335_14952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (4))){
var inst_13257 = (state_13332[(7)]);
var inst_13258 = (state_13332[(8)]);
var inst_13261 = (inst_13258 < inst_13257);
var state_13332__$1 = state_13332;
if(cljs.core.truth_(inst_13261)){
var statearr_13336_14953 = state_13332__$1;
(statearr_13336_14953[(1)] = (6));

} else {
var statearr_13337_14954 = state_13332__$1;
(statearr_13337_14954[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (15))){
var inst_13318 = (state_13332[(9)]);
var inst_13323 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13318);
var state_13332__$1 = state_13332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13332__$1,(17),out,inst_13323);
} else {
if((state_val_13333 === (13))){
var inst_13318 = (state_13332[(9)]);
var inst_13318__$1 = (state_13332[(2)]);
var inst_13319 = cljs.core.some(cljs.core.nil_QMARK_,inst_13318__$1);
var state_13332__$1 = (function (){var statearr_13338 = state_13332;
(statearr_13338[(9)] = inst_13318__$1);

return statearr_13338;
})();
if(cljs.core.truth_(inst_13319)){
var statearr_13339_14955 = state_13332__$1;
(statearr_13339_14955[(1)] = (14));

} else {
var statearr_13340_14956 = state_13332__$1;
(statearr_13340_14956[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (6))){
var state_13332__$1 = state_13332;
var statearr_13341_14958 = state_13332__$1;
(statearr_13341_14958[(2)] = null);

(statearr_13341_14958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (17))){
var inst_13325 = (state_13332[(2)]);
var state_13332__$1 = (function (){var statearr_13343 = state_13332;
(statearr_13343[(10)] = inst_13325);

return statearr_13343;
})();
var statearr_13344_14960 = state_13332__$1;
(statearr_13344_14960[(2)] = null);

(statearr_13344_14960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (3))){
var inst_13330 = (state_13332[(2)]);
var state_13332__$1 = state_13332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13332__$1,inst_13330);
} else {
if((state_val_13333 === (12))){
var _ = (function (){var statearr_13347 = state_13332;
(statearr_13347[(4)] = cljs.core.rest((state_13332[(4)])));

return statearr_13347;
})();
var state_13332__$1 = state_13332;
var ex13342 = (state_13332__$1[(2)]);
var statearr_13360_14962 = state_13332__$1;
(statearr_13360_14962[(5)] = ex13342);


if((ex13342 instanceof Object)){
var statearr_13371_14963 = state_13332__$1;
(statearr_13371_14963[(1)] = (11));

(statearr_13371_14963[(5)] = null);

} else {
throw ex13342;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (2))){
var inst_13254 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13257 = cnt;
var inst_13258 = (0);
var state_13332__$1 = (function (){var statearr_13375 = state_13332;
(statearr_13375[(7)] = inst_13257);

(statearr_13375[(8)] = inst_13258);

(statearr_13375[(11)] = inst_13254);

return statearr_13375;
})();
var statearr_13377_14964 = state_13332__$1;
(statearr_13377_14964[(2)] = null);

(statearr_13377_14964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (11))){
var inst_13292 = (state_13332[(2)]);
var inst_13293 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13332__$1 = (function (){var statearr_13379 = state_13332;
(statearr_13379[(12)] = inst_13292);

return statearr_13379;
})();
var statearr_13380_14966 = state_13332__$1;
(statearr_13380_14966[(2)] = inst_13293);

(statearr_13380_14966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (9))){
var inst_13258 = (state_13332[(8)]);
var _ = (function (){var statearr_13383 = state_13332;
(statearr_13383[(4)] = cljs.core.cons((12),(state_13332[(4)])));

return statearr_13383;
})();
var inst_13304 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13258) : chs__$1.call(null,inst_13258));
var inst_13305 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13258) : done.call(null,inst_13258));
var inst_13306 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13304,inst_13305);
var ___$1 = (function (){var statearr_13388 = state_13332;
(statearr_13388[(4)] = cljs.core.rest((state_13332[(4)])));

return statearr_13388;
})();
var state_13332__$1 = state_13332;
var statearr_13392_14968 = state_13332__$1;
(statearr_13392_14968[(2)] = inst_13306);

(statearr_13392_14968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (5))){
var inst_13316 = (state_13332[(2)]);
var state_13332__$1 = (function (){var statearr_13398 = state_13332;
(statearr_13398[(13)] = inst_13316);

return statearr_13398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13332__$1,(13),dchan);
} else {
if((state_val_13333 === (14))){
var inst_13321 = cljs.core.async.close_BANG_(out);
var state_13332__$1 = state_13332;
var statearr_13405_14970 = state_13332__$1;
(statearr_13405_14970[(2)] = inst_13321);

(statearr_13405_14970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (16))){
var inst_13328 = (state_13332[(2)]);
var state_13332__$1 = state_13332;
var statearr_13408_14971 = state_13332__$1;
(statearr_13408_14971[(2)] = inst_13328);

(statearr_13408_14971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (10))){
var inst_13258 = (state_13332[(8)]);
var inst_13309 = (state_13332[(2)]);
var inst_13310 = (inst_13258 + (1));
var inst_13258__$1 = inst_13310;
var state_13332__$1 = (function (){var statearr_13409 = state_13332;
(statearr_13409[(8)] = inst_13258__$1);

(statearr_13409[(14)] = inst_13309);

return statearr_13409;
})();
var statearr_13410_14973 = state_13332__$1;
(statearr_13410_14973[(2)] = null);

(statearr_13410_14973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13333 === (8))){
var inst_13314 = (state_13332[(2)]);
var state_13332__$1 = state_13332;
var statearr_13411_14974 = state_13332__$1;
(statearr_13411_14974[(2)] = inst_13314);

(statearr_13411_14974[(1)] = (5));


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
var statearr_13412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13412[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13412[(1)] = (1));

return statearr_13412;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13332){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13332);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13413){var ex__12075__auto__ = e13413;
var statearr_13414_14976 = state_13332;
(statearr_13414_14976[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13332[(4)]))){
var statearr_13415_14977 = state_13332;
(statearr_13415_14977[(1)] = cljs.core.first((state_13332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14978 = state_13332;
state_13332 = G__14978;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13416 = f__12108__auto__();
(statearr_13416[(6)] = c__12107__auto___14950);

return statearr_13416;
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
var G__13419 = arguments.length;
switch (G__13419) {
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
var c__12107__auto___14980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13462){
var state_val_13463 = (state_13462[(1)]);
if((state_val_13463 === (7))){
var inst_13436 = (state_13462[(7)]);
var inst_13430 = (state_13462[(8)]);
var inst_13430__$1 = (state_13462[(2)]);
var inst_13436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13430__$1,(0),null);
var inst_13437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13430__$1,(1),null);
var inst_13438 = (inst_13436__$1 == null);
var state_13462__$1 = (function (){var statearr_13477 = state_13462;
(statearr_13477[(7)] = inst_13436__$1);

(statearr_13477[(9)] = inst_13437);

(statearr_13477[(8)] = inst_13430__$1);

return statearr_13477;
})();
if(cljs.core.truth_(inst_13438)){
var statearr_13480_14981 = state_13462__$1;
(statearr_13480_14981[(1)] = (8));

} else {
var statearr_13483_14982 = state_13462__$1;
(statearr_13483_14982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (1))){
var inst_13420 = cljs.core.vec(chs);
var inst_13421 = inst_13420;
var state_13462__$1 = (function (){var statearr_13487 = state_13462;
(statearr_13487[(10)] = inst_13421);

return statearr_13487;
})();
var statearr_13490_14983 = state_13462__$1;
(statearr_13490_14983[(2)] = null);

(statearr_13490_14983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (4))){
var inst_13421 = (state_13462[(10)]);
var state_13462__$1 = state_13462;
return cljs.core.async.ioc_alts_BANG_(state_13462__$1,(7),inst_13421);
} else {
if((state_val_13463 === (6))){
var inst_13454 = (state_13462[(2)]);
var state_13462__$1 = state_13462;
var statearr_13500_14984 = state_13462__$1;
(statearr_13500_14984[(2)] = inst_13454);

(statearr_13500_14984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (3))){
var inst_13456 = (state_13462[(2)]);
var state_13462__$1 = state_13462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13462__$1,inst_13456);
} else {
if((state_val_13463 === (2))){
var inst_13421 = (state_13462[(10)]);
var inst_13423 = cljs.core.count(inst_13421);
var inst_13424 = (inst_13423 > (0));
var state_13462__$1 = state_13462;
if(cljs.core.truth_(inst_13424)){
var statearr_13510_14985 = state_13462__$1;
(statearr_13510_14985[(1)] = (4));

} else {
var statearr_13513_14986 = state_13462__$1;
(statearr_13513_14986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (11))){
var inst_13421 = (state_13462[(10)]);
var inst_13446 = (state_13462[(2)]);
var tmp13502 = inst_13421;
var inst_13421__$1 = tmp13502;
var state_13462__$1 = (function (){var statearr_13519 = state_13462;
(statearr_13519[(10)] = inst_13421__$1);

(statearr_13519[(11)] = inst_13446);

return statearr_13519;
})();
var statearr_13522_14987 = state_13462__$1;
(statearr_13522_14987[(2)] = null);

(statearr_13522_14987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (9))){
var inst_13436 = (state_13462[(7)]);
var state_13462__$1 = state_13462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13462__$1,(11),out,inst_13436);
} else {
if((state_val_13463 === (5))){
var inst_13452 = cljs.core.async.close_BANG_(out);
var state_13462__$1 = state_13462;
var statearr_13527_14994 = state_13462__$1;
(statearr_13527_14994[(2)] = inst_13452);

(statearr_13527_14994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (10))){
var inst_13449 = (state_13462[(2)]);
var state_13462__$1 = state_13462;
var statearr_13528_14995 = state_13462__$1;
(statearr_13528_14995[(2)] = inst_13449);

(statearr_13528_14995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13463 === (8))){
var inst_13436 = (state_13462[(7)]);
var inst_13437 = (state_13462[(9)]);
var inst_13421 = (state_13462[(10)]);
var inst_13430 = (state_13462[(8)]);
var inst_13441 = (function (){var cs = inst_13421;
var vec__13426 = inst_13430;
var v = inst_13436;
var c = inst_13437;
return (function (p1__13417_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13417_SHARP_);
});
})();
var inst_13442 = cljs.core.filterv(inst_13441,inst_13421);
var inst_13421__$1 = inst_13442;
var state_13462__$1 = (function (){var statearr_13529 = state_13462;
(statearr_13529[(10)] = inst_13421__$1);

return statearr_13529;
})();
var statearr_13530_14996 = state_13462__$1;
(statearr_13530_14996[(2)] = null);

(statearr_13530_14996[(1)] = (2));


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
var statearr_13531 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13531[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13531[(1)] = (1));

return statearr_13531;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13462){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13462);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13532){var ex__12075__auto__ = e13532;
var statearr_13533_14997 = state_13462;
(statearr_13533_14997[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13462[(4)]))){
var statearr_13534_14998 = state_13462;
(statearr_13534_14998[(1)] = cljs.core.first((state_13462[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14999 = state_13462;
state_13462 = G__14999;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13535 = f__12108__auto__();
(statearr_13535[(6)] = c__12107__auto___14980);

return statearr_13535;
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
var G__13537 = arguments.length;
switch (G__13537) {
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
var c__12107__auto___15001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13614){
var state_val_13615 = (state_13614[(1)]);
if((state_val_13615 === (7))){
var inst_13596 = (state_13614[(7)]);
var inst_13596__$1 = (state_13614[(2)]);
var inst_13597 = (inst_13596__$1 == null);
var inst_13598 = cljs.core.not(inst_13597);
var state_13614__$1 = (function (){var statearr_13616 = state_13614;
(statearr_13616[(7)] = inst_13596__$1);

return statearr_13616;
})();
if(inst_13598){
var statearr_13617_15002 = state_13614__$1;
(statearr_13617_15002[(1)] = (8));

} else {
var statearr_13618_15003 = state_13614__$1;
(statearr_13618_15003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13615 === (1))){
var inst_13538 = (0);
var state_13614__$1 = (function (){var statearr_13619 = state_13614;
(statearr_13619[(8)] = inst_13538);

return statearr_13619;
})();
var statearr_13620_15004 = state_13614__$1;
(statearr_13620_15004[(2)] = null);

(statearr_13620_15004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13615 === (4))){
var state_13614__$1 = state_13614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13614__$1,(7),ch);
} else {
if((state_val_13615 === (6))){
var inst_13609 = (state_13614[(2)]);
var state_13614__$1 = state_13614;
var statearr_13621_15005 = state_13614__$1;
(statearr_13621_15005[(2)] = inst_13609);

(statearr_13621_15005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13615 === (3))){
var inst_13611 = (state_13614[(2)]);
var inst_13612 = cljs.core.async.close_BANG_(out);
var state_13614__$1 = (function (){var statearr_13622 = state_13614;
(statearr_13622[(9)] = inst_13611);

return statearr_13622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13614__$1,inst_13612);
} else {
if((state_val_13615 === (2))){
var inst_13538 = (state_13614[(8)]);
var inst_13593 = (inst_13538 < n);
var state_13614__$1 = state_13614;
if(cljs.core.truth_(inst_13593)){
var statearr_13623_15013 = state_13614__$1;
(statearr_13623_15013[(1)] = (4));

} else {
var statearr_13624_15014 = state_13614__$1;
(statearr_13624_15014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13615 === (11))){
var inst_13538 = (state_13614[(8)]);
var inst_13601 = (state_13614[(2)]);
var inst_13602 = (inst_13538 + (1));
var inst_13538__$1 = inst_13602;
var state_13614__$1 = (function (){var statearr_13627 = state_13614;
(statearr_13627[(10)] = inst_13601);

(statearr_13627[(8)] = inst_13538__$1);

return statearr_13627;
})();
var statearr_13628_15015 = state_13614__$1;
(statearr_13628_15015[(2)] = null);

(statearr_13628_15015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13615 === (9))){
var state_13614__$1 = state_13614;
var statearr_13629_15016 = state_13614__$1;
(statearr_13629_15016[(2)] = null);

(statearr_13629_15016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13615 === (5))){
var state_13614__$1 = state_13614;
var statearr_13630_15017 = state_13614__$1;
(statearr_13630_15017[(2)] = null);

(statearr_13630_15017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13615 === (10))){
var inst_13606 = (state_13614[(2)]);
var state_13614__$1 = state_13614;
var statearr_13633_15018 = state_13614__$1;
(statearr_13633_15018[(2)] = inst_13606);

(statearr_13633_15018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13615 === (8))){
var inst_13596 = (state_13614[(7)]);
var state_13614__$1 = state_13614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13614__$1,(11),out,inst_13596);
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
var statearr_13639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13639[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13639[(1)] = (1));

return statearr_13639;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13614){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13614);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13640){var ex__12075__auto__ = e13640;
var statearr_13641_15019 = state_13614;
(statearr_13641_15019[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13614[(4)]))){
var statearr_13642_15020 = state_13614;
(statearr_13642_15020[(1)] = cljs.core.first((state_13614[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15021 = state_13614;
state_13614 = G__15021;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13643 = f__12108__auto__();
(statearr_13643[(6)] = c__12107__auto___15001);

return statearr_13643;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13645 = (function (f,ch,meta13646){
this.f = f;
this.ch = ch;
this.meta13646 = meta13646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13647,meta13646__$1){
var self__ = this;
var _13647__$1 = this;
return (new cljs.core.async.t_cljs$core$async13645(self__.f,self__.ch,meta13646__$1));
}));

(cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13647){
var self__ = this;
var _13647__$1 = this;
return self__.meta13646;
}));

(cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13648 = (function (f,ch,meta13646,_,fn1,meta13649){
this.f = f;
this.ch = ch;
this.meta13646 = meta13646;
this._ = _;
this.fn1 = fn1;
this.meta13649 = meta13649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13650,meta13649__$1){
var self__ = this;
var _13650__$1 = this;
return (new cljs.core.async.t_cljs$core$async13648(self__.f,self__.ch,self__.meta13646,self__._,self__.fn1,meta13649__$1));
}));

(cljs.core.async.t_cljs$core$async13648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13650){
var self__ = this;
var _13650__$1 = this;
return self__.meta13649;
}));

(cljs.core.async.t_cljs$core$async13648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13644_SHARP_){
var G__13681 = (((p1__13644_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13644_SHARP_) : self__.f.call(null,p1__13644_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13681) : f1.call(null,G__13681));
});
}));

(cljs.core.async.t_cljs$core$async13648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13646","meta13646",1204651146,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13645","cljs.core.async/t_cljs$core$async13645",1590384383,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13649","meta13649",-125657426,null)], null);
}));

(cljs.core.async.t_cljs$core$async13648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13648");

(cljs.core.async.t_cljs$core$async13648.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13648.
 */
cljs.core.async.__GT_t_cljs$core$async13648 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13648(f__$1,ch__$1,meta13646__$1,___$2,fn1__$1,meta13649){
return (new cljs.core.async.t_cljs$core$async13648(f__$1,ch__$1,meta13646__$1,___$2,fn1__$1,meta13649));
});

}

return (new cljs.core.async.t_cljs$core$async13648(self__.f,self__.ch,self__.meta13646,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13701 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13701) : self__.f.call(null,G__13701));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13646","meta13646",1204651146,null)], null);
}));

(cljs.core.async.t_cljs$core$async13645.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13645");

(cljs.core.async.t_cljs$core$async13645.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13645");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13645.
 */
cljs.core.async.__GT_t_cljs$core$async13645 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13645(f__$1,ch__$1,meta13646){
return (new cljs.core.async.t_cljs$core$async13645(f__$1,ch__$1,meta13646));
});

}

return (new cljs.core.async.t_cljs$core$async13645(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13702 = (function (f,ch,meta13703){
this.f = f;
this.ch = ch;
this.meta13703 = meta13703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13704,meta13703__$1){
var self__ = this;
var _13704__$1 = this;
return (new cljs.core.async.t_cljs$core$async13702(self__.f,self__.ch,meta13703__$1));
}));

(cljs.core.async.t_cljs$core$async13702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13704){
var self__ = this;
var _13704__$1 = this;
return self__.meta13703;
}));

(cljs.core.async.t_cljs$core$async13702.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13702.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13702.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13702.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13702.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13702.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13703","meta13703",1386956453,null)], null);
}));

(cljs.core.async.t_cljs$core$async13702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13702");

(cljs.core.async.t_cljs$core$async13702.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13702.
 */
cljs.core.async.__GT_t_cljs$core$async13702 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13702(f__$1,ch__$1,meta13703){
return (new cljs.core.async.t_cljs$core$async13702(f__$1,ch__$1,meta13703));
});

}

return (new cljs.core.async.t_cljs$core$async13702(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13794 = (function (p,ch,meta13795){
this.p = p;
this.ch = ch;
this.meta13795 = meta13795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13796,meta13795__$1){
var self__ = this;
var _13796__$1 = this;
return (new cljs.core.async.t_cljs$core$async13794(self__.p,self__.ch,meta13795__$1));
}));

(cljs.core.async.t_cljs$core$async13794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13796){
var self__ = this;
var _13796__$1 = this;
return self__.meta13795;
}));

(cljs.core.async.t_cljs$core$async13794.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13794.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13794.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13794.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13795","meta13795",-954338606,null)], null);
}));

(cljs.core.async.t_cljs$core$async13794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13794");

(cljs.core.async.t_cljs$core$async13794.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13794.
 */
cljs.core.async.__GT_t_cljs$core$async13794 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13794(p__$1,ch__$1,meta13795){
return (new cljs.core.async.t_cljs$core$async13794(p__$1,ch__$1,meta13795));
});

}

return (new cljs.core.async.t_cljs$core$async13794(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13824 = arguments.length;
switch (G__13824) {
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
var c__12107__auto___15036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13872){
var state_val_13873 = (state_13872[(1)]);
if((state_val_13873 === (7))){
var inst_13841 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13874_15037 = state_13872__$1;
(statearr_13874_15037[(2)] = inst_13841);

(statearr_13874_15037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (1))){
var state_13872__$1 = state_13872;
var statearr_13875_15041 = state_13872__$1;
(statearr_13875_15041[(2)] = null);

(statearr_13875_15041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (4))){
var inst_13827 = (state_13872[(7)]);
var inst_13827__$1 = (state_13872[(2)]);
var inst_13828 = (inst_13827__$1 == null);
var state_13872__$1 = (function (){var statearr_13876 = state_13872;
(statearr_13876[(7)] = inst_13827__$1);

return statearr_13876;
})();
if(cljs.core.truth_(inst_13828)){
var statearr_13877_15042 = state_13872__$1;
(statearr_13877_15042[(1)] = (5));

} else {
var statearr_13878_15043 = state_13872__$1;
(statearr_13878_15043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (6))){
var inst_13827 = (state_13872[(7)]);
var inst_13832 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13827) : p.call(null,inst_13827));
var state_13872__$1 = state_13872;
if(cljs.core.truth_(inst_13832)){
var statearr_13879_15044 = state_13872__$1;
(statearr_13879_15044[(1)] = (8));

} else {
var statearr_13880_15045 = state_13872__$1;
(statearr_13880_15045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (3))){
var inst_13843 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13872__$1,inst_13843);
} else {
if((state_val_13873 === (2))){
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13872__$1,(4),ch);
} else {
if((state_val_13873 === (11))){
var inst_13835 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13881_15046 = state_13872__$1;
(statearr_13881_15046[(2)] = inst_13835);

(statearr_13881_15046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (9))){
var state_13872__$1 = state_13872;
var statearr_13882_15047 = state_13872__$1;
(statearr_13882_15047[(2)] = null);

(statearr_13882_15047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (5))){
var inst_13830 = cljs.core.async.close_BANG_(out);
var state_13872__$1 = state_13872;
var statearr_13883_15048 = state_13872__$1;
(statearr_13883_15048[(2)] = inst_13830);

(statearr_13883_15048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (10))){
var inst_13838 = (state_13872[(2)]);
var state_13872__$1 = (function (){var statearr_13884 = state_13872;
(statearr_13884[(8)] = inst_13838);

return statearr_13884;
})();
var statearr_13885_15049 = state_13872__$1;
(statearr_13885_15049[(2)] = null);

(statearr_13885_15049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (8))){
var inst_13827 = (state_13872[(7)]);
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13872__$1,(11),out,inst_13827);
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
var statearr_13886 = [null,null,null,null,null,null,null,null,null];
(statearr_13886[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13886[(1)] = (1));

return statearr_13886;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13872){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13872);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13899){var ex__12075__auto__ = e13899;
var statearr_13900_15050 = state_13872;
(statearr_13900_15050[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13872[(4)]))){
var statearr_13901_15052 = state_13872;
(statearr_13901_15052[(1)] = cljs.core.first((state_13872[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15053 = state_13872;
state_13872 = G__15053;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13902 = f__12108__auto__();
(statearr_13902[(6)] = c__12107__auto___15036);

return statearr_13902;
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
var G__13904 = arguments.length;
switch (G__13904) {
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
var statearr_13981_15057 = state_13979__$1;
(statearr_13981_15057[(2)] = inst_13975);

(statearr_13981_15057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (20))){
var inst_13945 = (state_13979[(7)]);
var inst_13956 = (state_13979[(2)]);
var inst_13957 = cljs.core.next(inst_13945);
var inst_13924 = inst_13957;
var inst_13925 = null;
var inst_13926 = (0);
var inst_13927 = (0);
var state_13979__$1 = (function (){var statearr_13982 = state_13979;
(statearr_13982[(8)] = inst_13926);

(statearr_13982[(9)] = inst_13924);

(statearr_13982[(10)] = inst_13956);

(statearr_13982[(11)] = inst_13925);

(statearr_13982[(12)] = inst_13927);

return statearr_13982;
})();
var statearr_13983_15059 = state_13979__$1;
(statearr_13983_15059[(2)] = null);

(statearr_13983_15059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (1))){
var state_13979__$1 = state_13979;
var statearr_13984_15060 = state_13979__$1;
(statearr_13984_15060[(2)] = null);

(statearr_13984_15060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (4))){
var inst_13911 = (state_13979[(13)]);
var inst_13911__$1 = (state_13979[(2)]);
var inst_13912 = (inst_13911__$1 == null);
var state_13979__$1 = (function (){var statearr_13985 = state_13979;
(statearr_13985[(13)] = inst_13911__$1);

return statearr_13985;
})();
if(cljs.core.truth_(inst_13912)){
var statearr_13986_15062 = state_13979__$1;
(statearr_13986_15062[(1)] = (5));

} else {
var statearr_13987_15063 = state_13979__$1;
(statearr_13987_15063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (15))){
var state_13979__$1 = state_13979;
var statearr_13991_15064 = state_13979__$1;
(statearr_13991_15064[(2)] = null);

(statearr_13991_15064[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (21))){
var state_13979__$1 = state_13979;
var statearr_13992_15065 = state_13979__$1;
(statearr_13992_15065[(2)] = null);

(statearr_13992_15065[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (13))){
var inst_13926 = (state_13979[(8)]);
var inst_13924 = (state_13979[(9)]);
var inst_13925 = (state_13979[(11)]);
var inst_13927 = (state_13979[(12)]);
var inst_13941 = (state_13979[(2)]);
var inst_13942 = (inst_13927 + (1));
var tmp13988 = inst_13926;
var tmp13989 = inst_13924;
var tmp13990 = inst_13925;
var inst_13924__$1 = tmp13989;
var inst_13925__$1 = tmp13990;
var inst_13926__$1 = tmp13988;
var inst_13927__$1 = inst_13942;
var state_13979__$1 = (function (){var statearr_13993 = state_13979;
(statearr_13993[(8)] = inst_13926__$1);

(statearr_13993[(14)] = inst_13941);

(statearr_13993[(9)] = inst_13924__$1);

(statearr_13993[(11)] = inst_13925__$1);

(statearr_13993[(12)] = inst_13927__$1);

return statearr_13993;
})();
var statearr_13994_15066 = state_13979__$1;
(statearr_13994_15066[(2)] = null);

(statearr_13994_15066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (22))){
var state_13979__$1 = state_13979;
var statearr_13995_15067 = state_13979__$1;
(statearr_13995_15067[(2)] = null);

(statearr_13995_15067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (6))){
var inst_13911 = (state_13979[(13)]);
var inst_13921 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13911) : f.call(null,inst_13911));
var inst_13922 = cljs.core.seq(inst_13921);
var inst_13924 = inst_13922;
var inst_13925 = null;
var inst_13926 = (0);
var inst_13927 = (0);
var state_13979__$1 = (function (){var statearr_13996 = state_13979;
(statearr_13996[(8)] = inst_13926);

(statearr_13996[(9)] = inst_13924);

(statearr_13996[(11)] = inst_13925);

(statearr_13996[(12)] = inst_13927);

return statearr_13996;
})();
var statearr_13998_15068 = state_13979__$1;
(statearr_13998_15068[(2)] = null);

(statearr_13998_15068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (17))){
var inst_13945 = (state_13979[(7)]);
var inst_13949 = cljs.core.chunk_first(inst_13945);
var inst_13950 = cljs.core.chunk_rest(inst_13945);
var inst_13951 = cljs.core.count(inst_13949);
var inst_13924 = inst_13950;
var inst_13925 = inst_13949;
var inst_13926 = inst_13951;
var inst_13927 = (0);
var state_13979__$1 = (function (){var statearr_13999 = state_13979;
(statearr_13999[(8)] = inst_13926);

(statearr_13999[(9)] = inst_13924);

(statearr_13999[(11)] = inst_13925);

(statearr_13999[(12)] = inst_13927);

return statearr_13999;
})();
var statearr_14001_15069 = state_13979__$1;
(statearr_14001_15069[(2)] = null);

(statearr_14001_15069[(1)] = (8));


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
var statearr_14007_15070 = state_13979__$1;
(statearr_14007_15070[(2)] = inst_13965);

(statearr_14007_15070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (2))){
var state_13979__$1 = state_13979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13979__$1,(4),in$);
} else {
if((state_val_13980 === (23))){
var inst_13973 = (state_13979[(2)]);
var state_13979__$1 = state_13979;
var statearr_14010_15071 = state_13979__$1;
(statearr_14010_15071[(2)] = inst_13973);

(statearr_14010_15071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (19))){
var inst_13960 = (state_13979[(2)]);
var state_13979__$1 = state_13979;
var statearr_14013_15072 = state_13979__$1;
(statearr_14013_15072[(2)] = inst_13960);

(statearr_14013_15072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (11))){
var inst_13924 = (state_13979[(9)]);
var inst_13945 = (state_13979[(7)]);
var inst_13945__$1 = cljs.core.seq(inst_13924);
var state_13979__$1 = (function (){var statearr_14015 = state_13979;
(statearr_14015[(7)] = inst_13945__$1);

return statearr_14015;
})();
if(inst_13945__$1){
var statearr_14021_15073 = state_13979__$1;
(statearr_14021_15073[(1)] = (14));

} else {
var statearr_14023_15074 = state_13979__$1;
(statearr_14023_15074[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (9))){
var inst_13967 = (state_13979[(2)]);
var inst_13968 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13979__$1 = (function (){var statearr_14030 = state_13979;
(statearr_14030[(15)] = inst_13967);

return statearr_14030;
})();
if(cljs.core.truth_(inst_13968)){
var statearr_14032_15075 = state_13979__$1;
(statearr_14032_15075[(1)] = (21));

} else {
var statearr_14035_15076 = state_13979__$1;
(statearr_14035_15076[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (5))){
var inst_13914 = cljs.core.async.close_BANG_(out);
var state_13979__$1 = state_13979;
var statearr_14039_15077 = state_13979__$1;
(statearr_14039_15077[(2)] = inst_13914);

(statearr_14039_15077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (14))){
var inst_13945 = (state_13979[(7)]);
var inst_13947 = cljs.core.chunked_seq_QMARK_(inst_13945);
var state_13979__$1 = state_13979;
if(inst_13947){
var statearr_14040_15078 = state_13979__$1;
(statearr_14040_15078[(1)] = (17));

} else {
var statearr_14041_15080 = state_13979__$1;
(statearr_14041_15080[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (16))){
var inst_13963 = (state_13979[(2)]);
var state_13979__$1 = state_13979;
var statearr_14044_15081 = state_13979__$1;
(statearr_14044_15081[(2)] = inst_13963);

(statearr_14044_15081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (10))){
var inst_13925 = (state_13979[(11)]);
var inst_13927 = (state_13979[(12)]);
var inst_13939 = cljs.core._nth(inst_13925,inst_13927);
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
var inst_13926 = (state_13979[(8)]);
var inst_13927 = (state_13979[(12)]);
var inst_13929 = (inst_13927 < inst_13926);
var inst_13930 = inst_13929;
var state_13979__$1 = state_13979;
if(cljs.core.truth_(inst_13930)){
var statearr_14048_15082 = state_13979__$1;
(statearr_14048_15082[(1)] = (10));

} else {
var statearr_14049_15083 = state_13979__$1;
(statearr_14049_15083[(1)] = (11));

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
var statearr_14050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14050[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_14050[(1)] = (1));

return statearr_14050;
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
}catch (e14051){var ex__12075__auto__ = e14051;
var statearr_14052_15085 = state_13979;
(statearr_14052_15085[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13979[(4)]))){
var statearr_14053_15086 = state_13979;
(statearr_14053_15086[(1)] = cljs.core.first((state_13979[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15088 = state_13979;
state_13979 = G__15088;
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
var state__12109__auto__ = (function (){var statearr_14054 = f__12108__auto__();
(statearr_14054[(6)] = c__12107__auto__);

return statearr_14054;
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
var G__14058 = arguments.length;
switch (G__14058) {
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
var G__14060 = arguments.length;
switch (G__14060) {
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
var c__12107__auto___15093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14084){
var state_val_14085 = (state_14084[(1)]);
if((state_val_14085 === (7))){
var inst_14079 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
var statearr_14086_15094 = state_14084__$1;
(statearr_14086_15094[(2)] = inst_14079);

(statearr_14086_15094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (1))){
var inst_14061 = null;
var state_14084__$1 = (function (){var statearr_14088 = state_14084;
(statearr_14088[(7)] = inst_14061);

return statearr_14088;
})();
var statearr_14089_15095 = state_14084__$1;
(statearr_14089_15095[(2)] = null);

(statearr_14089_15095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (4))){
var inst_14064 = (state_14084[(8)]);
var inst_14064__$1 = (state_14084[(2)]);
var inst_14065 = (inst_14064__$1 == null);
var inst_14066 = cljs.core.not(inst_14065);
var state_14084__$1 = (function (){var statearr_14092 = state_14084;
(statearr_14092[(8)] = inst_14064__$1);

return statearr_14092;
})();
if(inst_14066){
var statearr_14093_15098 = state_14084__$1;
(statearr_14093_15098[(1)] = (5));

} else {
var statearr_14094_15099 = state_14084__$1;
(statearr_14094_15099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (6))){
var state_14084__$1 = state_14084;
var statearr_14096_15101 = state_14084__$1;
(statearr_14096_15101[(2)] = null);

(statearr_14096_15101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (3))){
var inst_14081 = (state_14084[(2)]);
var inst_14082 = cljs.core.async.close_BANG_(out);
var state_14084__$1 = (function (){var statearr_14098 = state_14084;
(statearr_14098[(9)] = inst_14081);

return statearr_14098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14084__$1,inst_14082);
} else {
if((state_val_14085 === (2))){
var state_14084__$1 = state_14084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14084__$1,(4),ch);
} else {
if((state_val_14085 === (11))){
var inst_14064 = (state_14084[(8)]);
var inst_14073 = (state_14084[(2)]);
var inst_14061 = inst_14064;
var state_14084__$1 = (function (){var statearr_14100 = state_14084;
(statearr_14100[(7)] = inst_14061);

(statearr_14100[(10)] = inst_14073);

return statearr_14100;
})();
var statearr_14101_15103 = state_14084__$1;
(statearr_14101_15103[(2)] = null);

(statearr_14101_15103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (9))){
var inst_14064 = (state_14084[(8)]);
var state_14084__$1 = state_14084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14084__$1,(11),out,inst_14064);
} else {
if((state_val_14085 === (5))){
var inst_14061 = (state_14084[(7)]);
var inst_14064 = (state_14084[(8)]);
var inst_14068 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14064,inst_14061);
var state_14084__$1 = state_14084;
if(inst_14068){
var statearr_14103_15105 = state_14084__$1;
(statearr_14103_15105[(1)] = (8));

} else {
var statearr_14104_15106 = state_14084__$1;
(statearr_14104_15106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (10))){
var inst_14076 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
var statearr_14105_15107 = state_14084__$1;
(statearr_14105_15107[(2)] = inst_14076);

(statearr_14105_15107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (8))){
var inst_14061 = (state_14084[(7)]);
var tmp14102 = inst_14061;
var inst_14061__$1 = tmp14102;
var state_14084__$1 = (function (){var statearr_14106 = state_14084;
(statearr_14106[(7)] = inst_14061__$1);

return statearr_14106;
})();
var statearr_14107_15108 = state_14084__$1;
(statearr_14107_15108[(2)] = null);

(statearr_14107_15108[(1)] = (2));


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
var statearr_14108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14108[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14108[(1)] = (1));

return statearr_14108;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14084){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14084);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14109){var ex__12075__auto__ = e14109;
var statearr_14110_15109 = state_14084;
(statearr_14110_15109[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14084[(4)]))){
var statearr_14111_15110 = state_14084;
(statearr_14111_15110[(1)] = cljs.core.first((state_14084[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15111 = state_14084;
state_14084 = G__15111;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14112 = f__12108__auto__();
(statearr_14112[(6)] = c__12107__auto___15093);

return statearr_14112;
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
var G__14114 = arguments.length;
switch (G__14114) {
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
var c__12107__auto___15113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14154){
var state_val_14155 = (state_14154[(1)]);
if((state_val_14155 === (7))){
var inst_14150 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
var statearr_14157_15114 = state_14154__$1;
(statearr_14157_15114[(2)] = inst_14150);

(statearr_14157_15114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (1))){
var inst_14115 = (new Array(n));
var inst_14116 = inst_14115;
var inst_14117 = (0);
var state_14154__$1 = (function (){var statearr_14161 = state_14154;
(statearr_14161[(7)] = inst_14116);

(statearr_14161[(8)] = inst_14117);

return statearr_14161;
})();
var statearr_14163_15115 = state_14154__$1;
(statearr_14163_15115[(2)] = null);

(statearr_14163_15115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (4))){
var inst_14120 = (state_14154[(9)]);
var inst_14120__$1 = (state_14154[(2)]);
var inst_14121 = (inst_14120__$1 == null);
var inst_14122 = cljs.core.not(inst_14121);
var state_14154__$1 = (function (){var statearr_14165 = state_14154;
(statearr_14165[(9)] = inst_14120__$1);

return statearr_14165;
})();
if(inst_14122){
var statearr_14166_15116 = state_14154__$1;
(statearr_14166_15116[(1)] = (5));

} else {
var statearr_14169_15117 = state_14154__$1;
(statearr_14169_15117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (15))){
var inst_14144 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
var statearr_14171_15118 = state_14154__$1;
(statearr_14171_15118[(2)] = inst_14144);

(statearr_14171_15118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (13))){
var state_14154__$1 = state_14154;
var statearr_14172_15119 = state_14154__$1;
(statearr_14172_15119[(2)] = null);

(statearr_14172_15119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (6))){
var inst_14117 = (state_14154[(8)]);
var inst_14138 = (inst_14117 > (0));
var state_14154__$1 = state_14154;
if(cljs.core.truth_(inst_14138)){
var statearr_14173_15121 = state_14154__$1;
(statearr_14173_15121[(1)] = (12));

} else {
var statearr_14175_15122 = state_14154__$1;
(statearr_14175_15122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (3))){
var inst_14152 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14154__$1,inst_14152);
} else {
if((state_val_14155 === (12))){
var inst_14116 = (state_14154[(7)]);
var inst_14142 = cljs.core.vec(inst_14116);
var state_14154__$1 = state_14154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14154__$1,(15),out,inst_14142);
} else {
if((state_val_14155 === (2))){
var state_14154__$1 = state_14154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14154__$1,(4),ch);
} else {
if((state_val_14155 === (11))){
var inst_14132 = (state_14154[(2)]);
var inst_14133 = (new Array(n));
var inst_14116 = inst_14133;
var inst_14117 = (0);
var state_14154__$1 = (function (){var statearr_14184 = state_14154;
(statearr_14184[(7)] = inst_14116);

(statearr_14184[(8)] = inst_14117);

(statearr_14184[(10)] = inst_14132);

return statearr_14184;
})();
var statearr_14185_15124 = state_14154__$1;
(statearr_14185_15124[(2)] = null);

(statearr_14185_15124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (9))){
var inst_14116 = (state_14154[(7)]);
var inst_14130 = cljs.core.vec(inst_14116);
var state_14154__$1 = state_14154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14154__$1,(11),out,inst_14130);
} else {
if((state_val_14155 === (5))){
var inst_14116 = (state_14154[(7)]);
var inst_14120 = (state_14154[(9)]);
var inst_14117 = (state_14154[(8)]);
var inst_14125 = (state_14154[(11)]);
var inst_14124 = (inst_14116[inst_14117] = inst_14120);
var inst_14125__$1 = (inst_14117 + (1));
var inst_14126 = (inst_14125__$1 < n);
var state_14154__$1 = (function (){var statearr_14189 = state_14154;
(statearr_14189[(11)] = inst_14125__$1);

(statearr_14189[(12)] = inst_14124);

return statearr_14189;
})();
if(cljs.core.truth_(inst_14126)){
var statearr_14190_15127 = state_14154__$1;
(statearr_14190_15127[(1)] = (8));

} else {
var statearr_14191_15128 = state_14154__$1;
(statearr_14191_15128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (14))){
var inst_14147 = (state_14154[(2)]);
var inst_14148 = cljs.core.async.close_BANG_(out);
var state_14154__$1 = (function (){var statearr_14193 = state_14154;
(statearr_14193[(13)] = inst_14147);

return statearr_14193;
})();
var statearr_14194_15129 = state_14154__$1;
(statearr_14194_15129[(2)] = inst_14148);

(statearr_14194_15129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (10))){
var inst_14136 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
var statearr_14195_15131 = state_14154__$1;
(statearr_14195_15131[(2)] = inst_14136);

(statearr_14195_15131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (8))){
var inst_14116 = (state_14154[(7)]);
var inst_14125 = (state_14154[(11)]);
var tmp14192 = inst_14116;
var inst_14116__$1 = tmp14192;
var inst_14117 = inst_14125;
var state_14154__$1 = (function (){var statearr_14196 = state_14154;
(statearr_14196[(7)] = inst_14116__$1);

(statearr_14196[(8)] = inst_14117);

return statearr_14196;
})();
var statearr_14197_15132 = state_14154__$1;
(statearr_14197_15132[(2)] = null);

(statearr_14197_15132[(1)] = (2));


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
var statearr_14198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14198[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14198[(1)] = (1));

return statearr_14198;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14154){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14154);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14199){var ex__12075__auto__ = e14199;
var statearr_14200_15135 = state_14154;
(statearr_14200_15135[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14154[(4)]))){
var statearr_14201_15137 = state_14154;
(statearr_14201_15137[(1)] = cljs.core.first((state_14154[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15138 = state_14154;
state_14154 = G__15138;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14202 = f__12108__auto__();
(statearr_14202[(6)] = c__12107__auto___15113);

return statearr_14202;
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
var G__14204 = arguments.length;
switch (G__14204) {
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
var c__12107__auto___15142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14248){
var state_val_14249 = (state_14248[(1)]);
if((state_val_14249 === (7))){
var inst_14243 = (state_14248[(2)]);
var state_14248__$1 = state_14248;
var statearr_14252_15143 = state_14248__$1;
(statearr_14252_15143[(2)] = inst_14243);

(statearr_14252_15143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (1))){
var inst_14205 = [];
var inst_14206 = inst_14205;
var inst_14207 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14248__$1 = (function (){var statearr_14255 = state_14248;
(statearr_14255[(7)] = inst_14207);

(statearr_14255[(8)] = inst_14206);

return statearr_14255;
})();
var statearr_14257_15145 = state_14248__$1;
(statearr_14257_15145[(2)] = null);

(statearr_14257_15145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (4))){
var inst_14210 = (state_14248[(9)]);
var inst_14210__$1 = (state_14248[(2)]);
var inst_14211 = (inst_14210__$1 == null);
var inst_14212 = cljs.core.not(inst_14211);
var state_14248__$1 = (function (){var statearr_14259 = state_14248;
(statearr_14259[(9)] = inst_14210__$1);

return statearr_14259;
})();
if(inst_14212){
var statearr_14260_15147 = state_14248__$1;
(statearr_14260_15147[(1)] = (5));

} else {
var statearr_14261_15148 = state_14248__$1;
(statearr_14261_15148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (15))){
var inst_14237 = (state_14248[(2)]);
var state_14248__$1 = state_14248;
var statearr_14262_15149 = state_14248__$1;
(statearr_14262_15149[(2)] = inst_14237);

(statearr_14262_15149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (13))){
var state_14248__$1 = state_14248;
var statearr_14263_15150 = state_14248__$1;
(statearr_14263_15150[(2)] = null);

(statearr_14263_15150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (6))){
var inst_14206 = (state_14248[(8)]);
var inst_14231 = inst_14206.length;
var inst_14232 = (inst_14231 > (0));
var state_14248__$1 = state_14248;
if(cljs.core.truth_(inst_14232)){
var statearr_14265_15152 = state_14248__$1;
(statearr_14265_15152[(1)] = (12));

} else {
var statearr_14266_15153 = state_14248__$1;
(statearr_14266_15153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (3))){
var inst_14245 = (state_14248[(2)]);
var state_14248__$1 = state_14248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14248__$1,inst_14245);
} else {
if((state_val_14249 === (12))){
var inst_14206 = (state_14248[(8)]);
var inst_14235 = cljs.core.vec(inst_14206);
var state_14248__$1 = state_14248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14248__$1,(15),out,inst_14235);
} else {
if((state_val_14249 === (2))){
var state_14248__$1 = state_14248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14248__$1,(4),ch);
} else {
if((state_val_14249 === (11))){
var inst_14210 = (state_14248[(9)]);
var inst_14214 = (state_14248[(10)]);
var inst_14224 = (state_14248[(2)]);
var inst_14225 = [];
var inst_14226 = inst_14225.push(inst_14210);
var inst_14206 = inst_14225;
var inst_14207 = inst_14214;
var state_14248__$1 = (function (){var statearr_14273 = state_14248;
(statearr_14273[(7)] = inst_14207);

(statearr_14273[(11)] = inst_14224);

(statearr_14273[(8)] = inst_14206);

(statearr_14273[(12)] = inst_14226);

return statearr_14273;
})();
var statearr_14275_15154 = state_14248__$1;
(statearr_14275_15154[(2)] = null);

(statearr_14275_15154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (9))){
var inst_14206 = (state_14248[(8)]);
var inst_14222 = cljs.core.vec(inst_14206);
var state_14248__$1 = state_14248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14248__$1,(11),out,inst_14222);
} else {
if((state_val_14249 === (5))){
var inst_14210 = (state_14248[(9)]);
var inst_14207 = (state_14248[(7)]);
var inst_14214 = (state_14248[(10)]);
var inst_14214__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14210) : f.call(null,inst_14210));
var inst_14215 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14214__$1,inst_14207);
var inst_14216 = cljs.core.keyword_identical_QMARK_(inst_14207,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14217 = ((inst_14215) || (inst_14216));
var state_14248__$1 = (function (){var statearr_14277 = state_14248;
(statearr_14277[(10)] = inst_14214__$1);

return statearr_14277;
})();
if(cljs.core.truth_(inst_14217)){
var statearr_14278_15155 = state_14248__$1;
(statearr_14278_15155[(1)] = (8));

} else {
var statearr_14279_15156 = state_14248__$1;
(statearr_14279_15156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (14))){
var inst_14240 = (state_14248[(2)]);
var inst_14241 = cljs.core.async.close_BANG_(out);
var state_14248__$1 = (function (){var statearr_14282 = state_14248;
(statearr_14282[(13)] = inst_14240);

return statearr_14282;
})();
var statearr_14284_15157 = state_14248__$1;
(statearr_14284_15157[(2)] = inst_14241);

(statearr_14284_15157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (10))){
var inst_14229 = (state_14248[(2)]);
var state_14248__$1 = state_14248;
var statearr_14286_15158 = state_14248__$1;
(statearr_14286_15158[(2)] = inst_14229);

(statearr_14286_15158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14249 === (8))){
var inst_14210 = (state_14248[(9)]);
var inst_14206 = (state_14248[(8)]);
var inst_14214 = (state_14248[(10)]);
var inst_14219 = inst_14206.push(inst_14210);
var tmp14280 = inst_14206;
var inst_14206__$1 = tmp14280;
var inst_14207 = inst_14214;
var state_14248__$1 = (function (){var statearr_14288 = state_14248;
(statearr_14288[(7)] = inst_14207);

(statearr_14288[(8)] = inst_14206__$1);

(statearr_14288[(14)] = inst_14219);

return statearr_14288;
})();
var statearr_14290_15159 = state_14248__$1;
(statearr_14290_15159[(2)] = null);

(statearr_14290_15159[(1)] = (2));


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
var statearr_14292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14292[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14292[(1)] = (1));

return statearr_14292;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14248){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14248);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14295){var ex__12075__auto__ = e14295;
var statearr_14296_15160 = state_14248;
(statearr_14296_15160[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14248[(4)]))){
var statearr_14299_15161 = state_14248;
(statearr_14299_15161[(1)] = cljs.core.first((state_14248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15163 = state_14248;
state_14248 = G__15163;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14303 = f__12108__auto__();
(statearr_14303[(6)] = c__12107__auto___15142);

return statearr_14303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
