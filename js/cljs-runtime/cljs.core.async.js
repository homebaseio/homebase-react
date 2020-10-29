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
var val_14592 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14592) : fn1.call(null,val_14592));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14592) : fn1.call(null,val_14592));
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
var n__4613__auto___14597 = n;
var x_14599 = (0);
while(true){
if((x_14599 < n__4613__auto___14597)){
(a[x_14599] = x_14599);

var G__14600 = (x_14599 + (1));
x_14599 = G__14600;
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
var G__14605 = (i + (1));
i = G__14605;
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
var len__4736__auto___14606 = arguments.length;
var i__4737__auto___14607 = (0);
while(true){
if((i__4737__auto___14607 < len__4736__auto___14606)){
args__4742__auto__.push((arguments[i__4737__auto___14607]));

var G__14608 = (i__4737__auto___14607 + (1));
i__4737__auto___14607 = G__14608;
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
var c__12107__auto___14610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_14611 = state_12218__$1;
(statearr_12220_14611[(2)] = inst_12214);

(statearr_12220_14611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_14612 = state_12218__$1;
(statearr_12221_14612[(2)] = null);

(statearr_12221_14612[(1)] = (2));


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
var statearr_12223_14614 = state_12218__$1;
(statearr_12223_14614[(1)] = (5));

} else {
var statearr_12224_14615 = state_12218__$1;
(statearr_12224_14615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_14616 = state_12218__$1;
(statearr_12225_14616[(2)] = null);

(statearr_12225_14616[(1)] = (14));


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
var statearr_12226_14618 = state_12218__$1;
(statearr_12226_14618[(2)] = null);

(statearr_12226_14618[(1)] = (2));


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
var statearr_12227_14619 = state_12218__$1;
(statearr_12227_14619[(1)] = (12));

} else {
var statearr_12228_14620 = state_12218__$1;
(statearr_12228_14620[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_14622 = state_12218__$1;
(statearr_12229_14622[(2)] = null);

(statearr_12229_14622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_14623 = state_12218__$1;
(statearr_12230_14623[(1)] = (8));

} else {
var statearr_12231_14624 = state_12218__$1;
(statearr_12231_14624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_14625 = state_12218__$1;
(statearr_12232_14625[(2)] = inst_12212);

(statearr_12232_14625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_14627 = state_12218__$1;
(statearr_12233_14627[(2)] = inst_12204);

(statearr_12233_14627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_14628 = state_12218__$1;
(statearr_12234_14628[(2)] = inst_12201);

(statearr_12234_14628[(1)] = (10));


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
var statearr_12237_14630 = state_12218;
(statearr_12237_14630[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_14631 = state_12218;
(statearr_12238_14631[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14632 = state_12218;
state_12218 = G__14632;
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
(statearr_12239[(6)] = c__12107__auto___14610);

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
var c__12107__auto___14633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_12253_14634 = state_12248;
(statearr_12253_14634[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_14635 = state_12248;
(statearr_12254_14635[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14636 = state_12248;
state_12248 = G__14636;
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
(statearr_12255[(6)] = c__12107__auto___14633);

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
var n__4613__auto___14637 = n;
var __14638 = (0);
while(true){
if((__14638 < n__4613__auto___14637)){
var G__12260_14639 = type;
var G__12260_14640__$1 = (((G__12260_14639 instanceof cljs.core.Keyword))?G__12260_14639.fqn:null);
switch (G__12260_14640__$1) {
case "compute":
var c__12107__auto___14642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14638,c__12107__auto___14642,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14638,c__12107__auto___14642,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_14643 = state_12273__$1;
(statearr_12275_14643[(2)] = null);

(statearr_12275_14643[(1)] = (2));


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
var statearr_12276_14644 = state_12273__$1;
(statearr_12276_14644[(1)] = (5));

} else {
var statearr_12277_14645 = state_12273__$1;
(statearr_12277_14645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_14646 = state_12273__$1;
(statearr_12278_14646[(2)] = null);

(statearr_12278_14646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_14648 = state_12273__$1;
(statearr_12279_14648[(2)] = null);

(statearr_12279_14648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_14649 = state_12273__$1;
(statearr_12280_14649[(2)] = inst_12269);

(statearr_12280_14649[(1)] = (3));


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
});})(__14638,c__12107__auto___14642,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async))
;
return ((function (__14638,switch__12071__auto__,c__12107__auto___14642,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async){
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
var statearr_12283_14651 = state_12273;
(statearr_12283_14651[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_14652 = state_12273;
(statearr_12284_14652[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14654 = state_12273;
state_12273 = G__14654;
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
;})(__14638,switch__12071__auto__,c__12107__auto___14642,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___14642);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14638,c__12107__auto___14642,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___14655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14638,c__12107__auto___14655,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14638,c__12107__auto___14655,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_14657 = state_12298__$1;
(statearr_12300_14657[(2)] = null);

(statearr_12300_14657[(1)] = (2));


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
var statearr_12301_14659 = state_12298__$1;
(statearr_12301_14659[(1)] = (5));

} else {
var statearr_12302_14660 = state_12298__$1;
(statearr_12302_14660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_14661 = state_12298__$1;
(statearr_12303_14661[(2)] = null);

(statearr_12303_14661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_14662 = state_12298__$1;
(statearr_12304_14662[(2)] = null);

(statearr_12304_14662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_14663 = state_12298__$1;
(statearr_12305_14663[(2)] = inst_12294);

(statearr_12305_14663[(1)] = (3));


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
});})(__14638,c__12107__auto___14655,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async))
;
return ((function (__14638,switch__12071__auto__,c__12107__auto___14655,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async){
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
var statearr_12308_14665 = state_12298;
(statearr_12308_14665[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_14666 = state_12298;
(statearr_12309_14666[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14667 = state_12298;
state_12298 = G__14667;
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
;})(__14638,switch__12071__auto__,c__12107__auto___14655,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___14655);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14638,c__12107__auto___14655,G__12260_14639,G__12260_14640__$1,n__4613__auto___14637,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_14640__$1)].join('')));

}

var G__14668 = (__14638 + (1));
__14638 = G__14668;
continue;
} else {
}
break;
}

var c__12107__auto___14669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_14670 = state_12332__$1;
(statearr_12334_14670[(2)] = inst_12328);

(statearr_12334_14670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_14671 = state_12332__$1;
(statearr_12335_14671[(2)] = null);

(statearr_12335_14671[(1)] = (2));


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
var statearr_12337_14672 = state_12332__$1;
(statearr_12337_14672[(1)] = (5));

} else {
var statearr_12338_14673 = state_12332__$1;
(statearr_12338_14673[(1)] = (6));

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
var statearr_12341_14674 = state_12332__$1;
(statearr_12341_14674[(2)] = null);

(statearr_12341_14674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_14675 = state_12332__$1;
(statearr_12342_14675[(2)] = inst_12316);

(statearr_12342_14675[(1)] = (7));


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
var statearr_12346_14676 = state_12332;
(statearr_12346_14676[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_14677 = state_12332;
(statearr_12347_14677[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14678 = state_12332;
state_12332 = G__14678;
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
(statearr_12348[(6)] = c__12107__auto___14669);

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
var statearr_12388_14680 = state_12386__$1;
(statearr_12388_14680[(2)] = inst_12382);

(statearr_12388_14680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (20))){
var state_12386__$1 = state_12386;
var statearr_12389_14681 = state_12386__$1;
(statearr_12389_14681[(2)] = null);

(statearr_12389_14681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (1))){
var state_12386__$1 = state_12386;
var statearr_12390_14683 = state_12386__$1;
(statearr_12390_14683[(2)] = null);

(statearr_12390_14683[(1)] = (2));


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
var statearr_12392_14684 = state_12386__$1;
(statearr_12392_14684[(1)] = (5));

} else {
var statearr_12393_14685 = state_12386__$1;
(statearr_12393_14685[(1)] = (6));

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
var statearr_12394_14687 = state_12386__$1;
(statearr_12394_14687[(2)] = inst_12377);

(statearr_12394_14687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (13))){
var inst_12379 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12395 = state_12386;
(statearr_12395[(9)] = inst_12379);

return statearr_12395;
})();
var statearr_12396_14688 = state_12386__$1;
(statearr_12396_14688[(2)] = null);

(statearr_12396_14688[(1)] = (2));


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
var statearr_12397_14690 = state_12386__$1;
(statearr_12397_14690[(1)] = (19));

} else {
var statearr_12398_14691 = state_12386__$1;
(statearr_12398_14691[(1)] = (20));

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
var statearr_12399_14693 = state_12386__$1;
(statearr_12399_14693[(2)] = null);

(statearr_12399_14693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (11))){
var inst_12361 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12400 = state_12386;
(statearr_12400[(10)] = inst_12361);

return statearr_12400;
})();
var statearr_12401_14694 = state_12386__$1;
(statearr_12401_14694[(2)] = null);

(statearr_12401_14694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12402_14696 = state_12386__$1;
(statearr_12402_14696[(2)] = null);

(statearr_12402_14696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12403_14697 = state_12386__$1;
(statearr_12403_14697[(1)] = (8));

} else {
var statearr_12404_14698 = state_12386__$1;
(statearr_12404_14698[(1)] = (9));

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
var statearr_12406_14700 = state_12386__$1;
(statearr_12406_14700[(1)] = (15));

} else {
var statearr_12407_14701 = state_12386__$1;
(statearr_12407_14701[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12408_14702 = state_12386__$1;
(statearr_12408_14702[(2)] = false);

(statearr_12408_14702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12409_14703 = state_12386__$1;
(statearr_12409_14703[(2)] = inst_12358);

(statearr_12409_14703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12410_14704 = state_12386__$1;
(statearr_12410_14704[(2)] = inst_12369);

(statearr_12410_14704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12411_14705 = state_12386__$1;
(statearr_12411_14705[(2)] = inst_12355);

(statearr_12411_14705[(1)] = (10));


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
var statearr_12414_14706 = state_12386;
(statearr_12414_14706[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12415_14707 = state_12386;
(statearr_12415_14707[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14708 = state_12386;
state_12386 = G__14708;
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
var c__12107__auto___14712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12448){
var state_val_12449 = (state_12448[(1)]);
if((state_val_12449 === (7))){
var inst_12444 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12450_14720 = state_12448__$1;
(statearr_12450_14720[(2)] = inst_12444);

(statearr_12450_14720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (1))){
var state_12448__$1 = state_12448;
var statearr_12451_14721 = state_12448__$1;
(statearr_12451_14721[(2)] = null);

(statearr_12451_14721[(1)] = (2));


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
var statearr_12453_14722 = state_12448__$1;
(statearr_12453_14722[(1)] = (5));

} else {
var statearr_12454_14723 = state_12448__$1;
(statearr_12454_14723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (13))){
var state_12448__$1 = state_12448;
var statearr_12455_14724 = state_12448__$1;
(statearr_12455_14724[(2)] = null);

(statearr_12455_14724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (6))){
var inst_12425 = (state_12448[(7)]);
var inst_12431 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12425) : p.call(null,inst_12425));
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12431)){
var statearr_12456_14725 = state_12448__$1;
(statearr_12456_14725[(1)] = (9));

} else {
var statearr_12457_14726 = state_12448__$1;
(statearr_12457_14726[(1)] = (10));

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
var statearr_12458_14727 = state_12448__$1;
(statearr_12458_14727[(2)] = null);

(statearr_12458_14727[(1)] = (2));


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
var statearr_12459_14728 = state_12448__$1;
(statearr_12459_14728[(2)] = tc);

(statearr_12459_14728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (5))){
var inst_12428 = cljs.core.async.close_BANG_(tc);
var inst_12429 = cljs.core.async.close_BANG_(fc);
var state_12448__$1 = (function (){var statearr_12460 = state_12448;
(statearr_12460[(8)] = inst_12428);

return statearr_12460;
})();
var statearr_12461_14729 = state_12448__$1;
(statearr_12461_14729[(2)] = inst_12429);

(statearr_12461_14729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (14))){
var inst_12442 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12462_14730 = state_12448__$1;
(statearr_12462_14730[(2)] = inst_12442);

(statearr_12462_14730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (10))){
var state_12448__$1 = state_12448;
var statearr_12463_14731 = state_12448__$1;
(statearr_12463_14731[(2)] = fc);

(statearr_12463_14731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (8))){
var inst_12437 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12437)){
var statearr_12464_14732 = state_12448__$1;
(statearr_12464_14732[(1)] = (12));

} else {
var statearr_12465_14733 = state_12448__$1;
(statearr_12465_14733[(1)] = (13));

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
var statearr_12468_14734 = state_12448;
(statearr_12468_14734[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12448[(4)]))){
var statearr_12469_14735 = state_12448;
(statearr_12469_14735[(1)] = cljs.core.first((state_12448[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14736 = state_12448;
state_12448 = G__14736;
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
(statearr_12470[(6)] = c__12107__auto___14712);

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
var statearr_12494_14745 = state_12492__$1;
(statearr_12494_14745[(2)] = inst_12488);

(statearr_12494_14745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (1))){
var inst_12471 = init;
var inst_12472 = inst_12471;
var state_12492__$1 = (function (){var statearr_12495 = state_12492;
(statearr_12495[(7)] = inst_12472);

return statearr_12495;
})();
var statearr_12496_14746 = state_12492__$1;
(statearr_12496_14746[(2)] = null);

(statearr_12496_14746[(1)] = (2));


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
var statearr_12498_14747 = state_12492__$1;
(statearr_12498_14747[(1)] = (5));

} else {
var statearr_12499_14748 = state_12492__$1;
(statearr_12499_14748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (6))){
var inst_12475 = (state_12492[(8)]);
var inst_12479 = (state_12492[(9)]);
var inst_12472 = (state_12492[(7)]);
var inst_12479__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12472,inst_12475) : f.call(null,inst_12472,inst_12475));
var inst_12480 = cljs.core.reduced_QMARK_(inst_12479__$1);
var state_12492__$1 = (function (){var statearr_12501 = state_12492;
(statearr_12501[(9)] = inst_12479__$1);

return statearr_12501;
})();
if(inst_12480){
var statearr_12502_14749 = state_12492__$1;
(statearr_12502_14749[(1)] = (8));

} else {
var statearr_12503_14750 = state_12492__$1;
(statearr_12503_14750[(1)] = (9));

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
var state_12492__$1 = (function (){var statearr_12504 = state_12492;
(statearr_12504[(7)] = inst_12472);

return statearr_12504;
})();
var statearr_12505_14751 = state_12492__$1;
(statearr_12505_14751[(2)] = null);

(statearr_12505_14751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (5))){
var inst_12472 = (state_12492[(7)]);
var state_12492__$1 = state_12492;
var statearr_12509_14753 = state_12492__$1;
(statearr_12509_14753[(2)] = inst_12472);

(statearr_12509_14753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (10))){
var inst_12486 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12510_14754 = state_12492__$1;
(statearr_12510_14754[(2)] = inst_12486);

(statearr_12510_14754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (8))){
var inst_12479 = (state_12492[(9)]);
var inst_12482 = cljs.core.deref(inst_12479);
var state_12492__$1 = state_12492;
var statearr_12511_14755 = state_12492__$1;
(statearr_12511_14755[(2)] = inst_12482);

(statearr_12511_14755[(1)] = (10));


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
var statearr_12512 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12512[(0)] = cljs$core$async$reduce_$_state_machine__12072__auto__);

(statearr_12512[(1)] = (1));

return statearr_12512;
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
}catch (e12514){var ex__12075__auto__ = e12514;
var statearr_12518_14756 = state_12492;
(statearr_12518_14756[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12492[(4)]))){
var statearr_12519_14764 = state_12492;
(statearr_12519_14764[(1)] = cljs.core.first((state_12492[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14765 = state_12492;
state_12492 = G__14765;
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
}catch (e12530){var ex__12075__auto__ = e12530;
var statearr_12531_14766 = state_12527;
(statearr_12531_14766[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12527[(4)]))){
var statearr_12532_14767 = state_12527;
(statearr_12532_14767[(1)] = cljs.core.first((state_12527[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14768 = state_12527;
state_12527 = G__14768;
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
var state__12109__auto__ = (function (){var statearr_12533 = f__12108__auto__();
(statearr_12533[(6)] = c__12107__auto__);

return statearr_12533;
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
var statearr_12567_14770 = state_12565__$1;
(statearr_12567_14770[(2)] = inst_12547);

(statearr_12567_14770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (1))){
var inst_12541 = cljs.core.seq(coll);
var inst_12542 = inst_12541;
var state_12565__$1 = (function (){var statearr_12568 = state_12565;
(statearr_12568[(7)] = inst_12542);

return statearr_12568;
})();
var statearr_12569_14771 = state_12565__$1;
(statearr_12569_14771[(2)] = null);

(statearr_12569_14771[(1)] = (2));


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
var statearr_12570_14772 = state_12565__$1;
(statearr_12570_14772[(2)] = inst_12559);

(statearr_12570_14772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (6))){
var inst_12550 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12550)){
var statearr_12571_14773 = state_12565__$1;
(statearr_12571_14773[(1)] = (8));

} else {
var statearr_12572_14774 = state_12565__$1;
(statearr_12572_14774[(1)] = (9));

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
var statearr_12573_14775 = state_12565__$1;
(statearr_12573_14775[(2)] = null);

(statearr_12573_14775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (2))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12542)){
var statearr_12574_14783 = state_12565__$1;
(statearr_12574_14783[(1)] = (4));

} else {
var statearr_12575_14784 = state_12565__$1;
(statearr_12575_14784[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (11))){
var inst_12556 = cljs.core.async.close_BANG_(ch);
var state_12565__$1 = state_12565;
var statearr_12576_14785 = state_12565__$1;
(statearr_12576_14785[(2)] = inst_12556);

(statearr_12576_14785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (9))){
var state_12565__$1 = state_12565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12577_14786 = state_12565__$1;
(statearr_12577_14786[(1)] = (11));

} else {
var statearr_12578_14787 = state_12565__$1;
(statearr_12578_14787[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (5))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
var statearr_12579_14788 = state_12565__$1;
(statearr_12579_14788[(2)] = inst_12542);

(statearr_12579_14788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (10))){
var inst_12561 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
var statearr_12580_14789 = state_12565__$1;
(statearr_12580_14789[(2)] = inst_12561);

(statearr_12580_14789[(1)] = (3));


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
var statearr_12582_14790 = state_12565__$1;
(statearr_12582_14790[(2)] = null);

(statearr_12582_14790[(1)] = (2));


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
var statearr_12585_14791 = state_12565;
(statearr_12585_14791[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12565[(4)]))){
var statearr_12586_14792 = state_12565;
(statearr_12586_14792[(1)] = cljs.core.first((state_12565[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14793 = state_12565;
state_12565 = G__14793;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14795 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14795(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14803 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14803(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14804 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14804(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14805 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14805(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12605 = (function (ch,cs,meta12606){
this.ch = ch;
this.cs = cs;
this.meta12606 = meta12606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12607,meta12606__$1){
var self__ = this;
var _12607__$1 = this;
return (new cljs.core.async.t_cljs$core$async12605(self__.ch,self__.cs,meta12606__$1));
}));

(cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12607){
var self__ = this;
var _12607__$1 = this;
return self__.meta12606;
}));

(cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12606","meta12606",-1370667569,null)], null);
}));

(cljs.core.async.t_cljs$core$async12605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12605");

(cljs.core.async.t_cljs$core$async12605.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12605.
 */
cljs.core.async.__GT_t_cljs$core$async12605 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12605(ch__$1,cs__$1,meta12606){
return (new cljs.core.async.t_cljs$core$async12605(ch__$1,cs__$1,meta12606));
});

}

return (new cljs.core.async.t_cljs$core$async12605(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12107__auto___14806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12751){
var state_val_12752 = (state_12751[(1)]);
if((state_val_12752 === (7))){
var inst_12747 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12753_14807 = state_12751__$1;
(statearr_12753_14807[(2)] = inst_12747);

(statearr_12753_14807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (20))){
var inst_12652 = (state_12751[(7)]);
var inst_12664 = cljs.core.first(inst_12652);
var inst_12665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12664,(0),null);
var inst_12666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12664,(1),null);
var state_12751__$1 = (function (){var statearr_12755 = state_12751;
(statearr_12755[(8)] = inst_12665);

return statearr_12755;
})();
if(cljs.core.truth_(inst_12666)){
var statearr_12756_14808 = state_12751__$1;
(statearr_12756_14808[(1)] = (22));

} else {
var statearr_12757_14809 = state_12751__$1;
(statearr_12757_14809[(1)] = (23));

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
var state_12751__$1 = (function (){var statearr_12758 = state_12751;
(statearr_12758[(12)] = inst_12701__$1);

return statearr_12758;
})();
if(cljs.core.truth_(inst_12702)){
var statearr_12759_14810 = state_12751__$1;
(statearr_12759_14810[(1)] = (30));

} else {
var statearr_12760_14811 = state_12751__$1;
(statearr_12760_14811[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (1))){
var state_12751__$1 = state_12751;
var statearr_12761_14812 = state_12751__$1;
(statearr_12761_14812[(2)] = null);

(statearr_12761_14812[(1)] = (2));


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
var state_12751__$1 = (function (){var statearr_12762 = state_12751;
(statearr_12762[(13)] = inst_12630);

(statearr_12762[(14)] = inst_12633);

(statearr_12762[(15)] = inst_12671);

(statearr_12762[(16)] = inst_12632);

(statearr_12762[(17)] = inst_12631);

return statearr_12762;
})();
var statearr_12763_14814 = state_12751__$1;
(statearr_12763_14814[(2)] = null);

(statearr_12763_14814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (39))){
var state_12751__$1 = state_12751;
var statearr_12768_14815 = state_12751__$1;
(statearr_12768_14815[(2)] = null);

(statearr_12768_14815[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (4))){
var inst_12621 = (state_12751[(9)]);
var inst_12621__$1 = (state_12751[(2)]);
var inst_12622 = (inst_12621__$1 == null);
var state_12751__$1 = (function (){var statearr_12769 = state_12751;
(statearr_12769[(9)] = inst_12621__$1);

return statearr_12769;
})();
if(cljs.core.truth_(inst_12622)){
var statearr_12771_14817 = state_12751__$1;
(statearr_12771_14817[(1)] = (5));

} else {
var statearr_12772_14818 = state_12751__$1;
(statearr_12772_14818[(1)] = (6));

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
var tmp12765 = inst_12630;
var tmp12766 = inst_12632;
var tmp12767 = inst_12631;
var inst_12630__$1 = tmp12765;
var inst_12631__$1 = tmp12767;
var inst_12632__$1 = tmp12766;
var inst_12633__$1 = inst_12649;
var state_12751__$1 = (function (){var statearr_12773 = state_12751;
(statearr_12773[(18)] = inst_12648);

(statearr_12773[(13)] = inst_12630__$1);

(statearr_12773[(14)] = inst_12633__$1);

(statearr_12773[(16)] = inst_12632__$1);

(statearr_12773[(17)] = inst_12631__$1);

return statearr_12773;
})();
var statearr_12774_14820 = state_12751__$1;
(statearr_12774_14820[(2)] = null);

(statearr_12774_14820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (21))){
var inst_12675 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12780_14821 = state_12751__$1;
(statearr_12780_14821[(2)] = inst_12675);

(statearr_12780_14821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (31))){
var inst_12701 = (state_12751[(12)]);
var inst_12705 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12701);
var state_12751__$1 = state_12751;
var statearr_12781_14823 = state_12751__$1;
(statearr_12781_14823[(2)] = inst_12705);

(statearr_12781_14823[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (32))){
var inst_12695 = (state_12751[(19)]);
var inst_12693 = (state_12751[(20)]);
var inst_12694 = (state_12751[(10)]);
var inst_12696 = (state_12751[(11)]);
var inst_12707 = (state_12751[(2)]);
var inst_12708 = (inst_12696 + (1));
var tmp12776 = inst_12695;
var tmp12777 = inst_12693;
var tmp12778 = inst_12694;
var inst_12693__$1 = tmp12777;
var inst_12694__$1 = tmp12778;
var inst_12695__$1 = tmp12776;
var inst_12696__$1 = inst_12708;
var state_12751__$1 = (function (){var statearr_12785 = state_12751;
(statearr_12785[(19)] = inst_12695__$1);

(statearr_12785[(20)] = inst_12693__$1);

(statearr_12785[(21)] = inst_12707);

(statearr_12785[(10)] = inst_12694__$1);

(statearr_12785[(11)] = inst_12696__$1);

return statearr_12785;
})();
var statearr_12790_14825 = state_12751__$1;
(statearr_12790_14825[(2)] = null);

(statearr_12790_14825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (40))){
var inst_12720 = (state_12751[(22)]);
var inst_12724 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12720);
var state_12751__$1 = state_12751;
var statearr_12791_14826 = state_12751__$1;
(statearr_12791_14826[(2)] = inst_12724);

(statearr_12791_14826[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (33))){
var inst_12711 = (state_12751[(23)]);
var inst_12713 = cljs.core.chunked_seq_QMARK_(inst_12711);
var state_12751__$1 = state_12751;
if(inst_12713){
var statearr_12792_14828 = state_12751__$1;
(statearr_12792_14828[(1)] = (36));

} else {
var statearr_12793_14829 = state_12751__$1;
(statearr_12793_14829[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (13))){
var inst_12642 = (state_12751[(24)]);
var inst_12645 = cljs.core.async.close_BANG_(inst_12642);
var state_12751__$1 = state_12751;
var statearr_12795_14830 = state_12751__$1;
(statearr_12795_14830[(2)] = inst_12645);

(statearr_12795_14830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (22))){
var inst_12665 = (state_12751[(8)]);
var inst_12668 = cljs.core.async.close_BANG_(inst_12665);
var state_12751__$1 = state_12751;
var statearr_12796_14832 = state_12751__$1;
(statearr_12796_14832[(2)] = inst_12668);

(statearr_12796_14832[(1)] = (24));


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
var state_12751__$1 = (function (){var statearr_12798 = state_12751;
(statearr_12798[(19)] = inst_12695);

(statearr_12798[(20)] = inst_12693);

(statearr_12798[(10)] = inst_12694);

(statearr_12798[(11)] = inst_12696);

return statearr_12798;
})();
var statearr_12799_14833 = state_12751__$1;
(statearr_12799_14833[(2)] = null);

(statearr_12799_14833[(1)] = (25));


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
var state_12751__$1 = (function (){var statearr_12800 = state_12751;
(statearr_12800[(19)] = inst_12695);

(statearr_12800[(20)] = inst_12693);

(statearr_12800[(10)] = inst_12694);

(statearr_12800[(25)] = inst_12726);

(statearr_12800[(11)] = inst_12696);

return statearr_12800;
})();
var statearr_12801_14834 = state_12751__$1;
(statearr_12801_14834[(2)] = null);

(statearr_12801_14834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (43))){
var state_12751__$1 = state_12751;
var statearr_12803_14835 = state_12751__$1;
(statearr_12803_14835[(2)] = null);

(statearr_12803_14835[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (29))){
var inst_12735 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12809_14836 = state_12751__$1;
(statearr_12809_14836[(2)] = inst_12735);

(statearr_12809_14836[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (44))){
var inst_12744 = (state_12751[(2)]);
var state_12751__$1 = (function (){var statearr_12810 = state_12751;
(statearr_12810[(26)] = inst_12744);

return statearr_12810;
})();
var statearr_12811_14837 = state_12751__$1;
(statearr_12811_14837[(2)] = null);

(statearr_12811_14837[(1)] = (2));


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
var state_12751__$1 = (function (){var statearr_12812 = state_12751;
(statearr_12812[(19)] = inst_12695);

(statearr_12812[(20)] = inst_12693);

(statearr_12812[(10)] = inst_12694);

(statearr_12812[(27)] = inst_12685__$1);

(statearr_12812[(28)] = inst_12687);

(statearr_12812[(11)] = inst_12696);

return statearr_12812;
})();
var statearr_12813_14838 = state_12751__$1;
(statearr_12813_14838[(2)] = null);

(statearr_12813_14838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (28))){
var inst_12711 = (state_12751[(23)]);
var inst_12693 = (state_12751[(20)]);
var inst_12711__$1 = cljs.core.seq(inst_12693);
var state_12751__$1 = (function (){var statearr_12814 = state_12751;
(statearr_12814[(23)] = inst_12711__$1);

return statearr_12814;
})();
if(inst_12711__$1){
var statearr_12815_14839 = state_12751__$1;
(statearr_12815_14839[(1)] = (33));

} else {
var statearr_12816_14840 = state_12751__$1;
(statearr_12816_14840[(1)] = (34));

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
var statearr_12817_14841 = state_12751__$1;
(statearr_12817_14841[(1)] = (27));

} else {
var statearr_12818_14842 = state_12751__$1;
(statearr_12818_14842[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (34))){
var state_12751__$1 = state_12751;
var statearr_12819_14843 = state_12751__$1;
(statearr_12819_14843[(2)] = null);

(statearr_12819_14843[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (17))){
var state_12751__$1 = state_12751;
var statearr_12820_14844 = state_12751__$1;
(statearr_12820_14844[(2)] = null);

(statearr_12820_14844[(1)] = (18));


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
var statearr_12821_14845 = state_12751__$1;
(statearr_12821_14845[(2)] = inst_12680);

(statearr_12821_14845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (2))){
var state_12751__$1 = state_12751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12751__$1,(4),ch);
} else {
if((state_val_12752 === (23))){
var state_12751__$1 = state_12751;
var statearr_12822_14846 = state_12751__$1;
(statearr_12822_14846[(2)] = null);

(statearr_12822_14846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (35))){
var inst_12733 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12823_14847 = state_12751__$1;
(statearr_12823_14847[(2)] = inst_12733);

(statearr_12823_14847[(1)] = (29));


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
var state_12751__$1 = (function (){var statearr_12824 = state_12751;
(statearr_12824[(13)] = inst_12630);

(statearr_12824[(14)] = inst_12633);

(statearr_12824[(16)] = inst_12632);

(statearr_12824[(17)] = inst_12631);

return statearr_12824;
})();
var statearr_12825_14848 = state_12751__$1;
(statearr_12825_14848[(2)] = null);

(statearr_12825_14848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (11))){
var inst_12630 = (state_12751[(13)]);
var inst_12652 = (state_12751[(7)]);
var inst_12652__$1 = cljs.core.seq(inst_12630);
var state_12751__$1 = (function (){var statearr_12826 = state_12751;
(statearr_12826[(7)] = inst_12652__$1);

return statearr_12826;
})();
if(inst_12652__$1){
var statearr_12827_14850 = state_12751__$1;
(statearr_12827_14850[(1)] = (16));

} else {
var statearr_12828_14851 = state_12751__$1;
(statearr_12828_14851[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (9))){
var inst_12682 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12829_14852 = state_12751__$1;
(statearr_12829_14852[(2)] = inst_12682);

(statearr_12829_14852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (5))){
var inst_12628 = cljs.core.deref(cs);
var inst_12629 = cljs.core.seq(inst_12628);
var inst_12630 = inst_12629;
var inst_12631 = null;
var inst_12632 = (0);
var inst_12633 = (0);
var state_12751__$1 = (function (){var statearr_12830 = state_12751;
(statearr_12830[(13)] = inst_12630);

(statearr_12830[(14)] = inst_12633);

(statearr_12830[(16)] = inst_12632);

(statearr_12830[(17)] = inst_12631);

return statearr_12830;
})();
var statearr_12831_14855 = state_12751__$1;
(statearr_12831_14855[(2)] = null);

(statearr_12831_14855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (14))){
var state_12751__$1 = state_12751;
var statearr_12832_14856 = state_12751__$1;
(statearr_12832_14856[(2)] = null);

(statearr_12832_14856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (45))){
var inst_12741 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12833_14858 = state_12751__$1;
(statearr_12833_14858[(2)] = inst_12741);

(statearr_12833_14858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (26))){
var inst_12685 = (state_12751[(27)]);
var inst_12737 = (state_12751[(2)]);
var inst_12738 = cljs.core.seq(inst_12685);
var state_12751__$1 = (function (){var statearr_12834 = state_12751;
(statearr_12834[(29)] = inst_12737);

return statearr_12834;
})();
if(inst_12738){
var statearr_12835_14859 = state_12751__$1;
(statearr_12835_14859[(1)] = (42));

} else {
var statearr_12836_14861 = state_12751__$1;
(statearr_12836_14861[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (16))){
var inst_12652 = (state_12751[(7)]);
var inst_12654 = cljs.core.chunked_seq_QMARK_(inst_12652);
var state_12751__$1 = state_12751;
if(inst_12654){
var statearr_12837_14862 = state_12751__$1;
(statearr_12837_14862[(1)] = (19));

} else {
var statearr_12838_14863 = state_12751__$1;
(statearr_12838_14863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (38))){
var inst_12730 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12839_14864 = state_12751__$1;
(statearr_12839_14864[(2)] = inst_12730);

(statearr_12839_14864[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (30))){
var state_12751__$1 = state_12751;
var statearr_12840_14866 = state_12751__$1;
(statearr_12840_14866[(2)] = null);

(statearr_12840_14866[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (10))){
var inst_12633 = (state_12751[(14)]);
var inst_12631 = (state_12751[(17)]);
var inst_12641 = cljs.core._nth(inst_12631,inst_12633);
var inst_12642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12641,(0),null);
var inst_12643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12641,(1),null);
var state_12751__$1 = (function (){var statearr_12841 = state_12751;
(statearr_12841[(24)] = inst_12642);

return statearr_12841;
})();
if(cljs.core.truth_(inst_12643)){
var statearr_12842_14868 = state_12751__$1;
(statearr_12842_14868[(1)] = (13));

} else {
var statearr_12843_14869 = state_12751__$1;
(statearr_12843_14869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (18))){
var inst_12678 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12844_14870 = state_12751__$1;
(statearr_12844_14870[(2)] = inst_12678);

(statearr_12844_14870[(1)] = (12));


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
var state_12751__$1 = (function (){var statearr_12845 = state_12751;
(statearr_12845[(22)] = inst_12720__$1);

return statearr_12845;
})();
if(cljs.core.truth_(inst_12721)){
var statearr_12846_14871 = state_12751__$1;
(statearr_12846_14871[(1)] = (39));

} else {
var statearr_12847_14872 = state_12751__$1;
(statearr_12847_14872[(1)] = (40));

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
var statearr_12848_14873 = state_12751__$1;
(statearr_12848_14873[(1)] = (10));

} else {
var statearr_12849_14874 = state_12751__$1;
(statearr_12849_14874[(1)] = (11));

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
var statearr_12850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12850[(0)] = cljs$core$async$mult_$_state_machine__12072__auto__);

(statearr_12850[(1)] = (1));

return statearr_12850;
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
}catch (e12851){var ex__12075__auto__ = e12851;
var statearr_12852_14875 = state_12751;
(statearr_12852_14875[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12751[(4)]))){
var statearr_12853_14876 = state_12751;
(statearr_12853_14876[(1)] = cljs.core.first((state_12751[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14877 = state_12751;
state_12751 = G__14877;
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
var state__12109__auto__ = (function (){var statearr_12854 = f__12108__auto__();
(statearr_12854[(6)] = c__12107__auto___14806);

return statearr_12854;
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
var G__12862 = arguments.length;
switch (G__12862) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_14879 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14879(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14880 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14880(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14881 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14881(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14883 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14883(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14885 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14885(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14887 = arguments.length;
var i__4737__auto___14888 = (0);
while(true){
if((i__4737__auto___14888 < len__4736__auto___14887)){
args__4742__auto__.push((arguments[i__4737__auto___14888]));

var G__14890 = (i__4737__auto___14888 + (1));
i__4737__auto___14888 = G__14890;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12951){
var map__12952 = p__12951;
var map__12952__$1 = (((((!((map__12952 == null))))?(((((map__12952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12952):map__12952);
var opts = map__12952__$1;
var statearr_12954_14892 = state;
(statearr_12954_14892[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12955_14893 = state;
(statearr_12955_14893[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12958_14894 = state;
(statearr_12958_14894[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12900){
var G__12901 = cljs.core.first(seq12900);
var seq12900__$1 = cljs.core.next(seq12900);
var G__12902 = cljs.core.first(seq12900__$1);
var seq12900__$2 = cljs.core.next(seq12900__$1);
var G__12903 = cljs.core.first(seq12900__$2);
var seq12900__$3 = cljs.core.next(seq12900__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12901,G__12902,G__12903,seq12900__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13070 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13071){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13071 = meta13071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13072,meta13071__$1){
var self__ = this;
var _13072__$1 = this;
return (new cljs.core.async.t_cljs$core$async13070(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13071__$1));
}));

(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13072){
var self__ = this;
var _13072__$1 = this;
return self__.meta13071;
}));

(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13070.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13071","meta13071",1202447273,null)], null);
}));

(cljs.core.async.t_cljs$core$async13070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13070");

(cljs.core.async.t_cljs$core$async13070.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13070.
 */
cljs.core.async.__GT_t_cljs$core$async13070 = (function cljs$core$async$mix_$___GT_t_cljs$core$async13070(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13071){
return (new cljs.core.async.t_cljs$core$async13070(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13071));
});

}

return (new cljs.core.async.t_cljs$core$async13070(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13267){
var state_val_13268 = (state_13267[(1)]);
if((state_val_13268 === (7))){
var inst_13180 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
var statearr_13269_14899 = state_13267__$1;
(statearr_13269_14899[(2)] = inst_13180);

(statearr_13269_14899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (20))){
var inst_13192 = (state_13267[(7)]);
var state_13267__$1 = state_13267;
var statearr_13272_14900 = state_13267__$1;
(statearr_13272_14900[(2)] = inst_13192);

(statearr_13272_14900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (27))){
var state_13267__$1 = state_13267;
var statearr_13276_14901 = state_13267__$1;
(statearr_13276_14901[(2)] = null);

(statearr_13276_14901[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (1))){
var inst_13142 = (state_13267[(8)]);
var inst_13142__$1 = calc_state();
var inst_13144 = (inst_13142__$1 == null);
var inst_13145 = cljs.core.not(inst_13144);
var state_13267__$1 = (function (){var statearr_13279 = state_13267;
(statearr_13279[(8)] = inst_13142__$1);

return statearr_13279;
})();
if(inst_13145){
var statearr_13282_14902 = state_13267__$1;
(statearr_13282_14902[(1)] = (2));

} else {
var statearr_13283_14903 = state_13267__$1;
(statearr_13283_14903[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (24))){
var inst_13216 = (state_13267[(9)]);
var inst_13241 = (state_13267[(10)]);
var inst_13227 = (state_13267[(11)]);
var inst_13241__$1 = (inst_13216.cljs$core$IFn$_invoke$arity$1 ? inst_13216.cljs$core$IFn$_invoke$arity$1(inst_13227) : inst_13216.call(null,inst_13227));
var state_13267__$1 = (function (){var statearr_13286 = state_13267;
(statearr_13286[(10)] = inst_13241__$1);

return statearr_13286;
})();
if(cljs.core.truth_(inst_13241__$1)){
var statearr_13287_14904 = state_13267__$1;
(statearr_13287_14904[(1)] = (29));

} else {
var statearr_13289_14905 = state_13267__$1;
(statearr_13289_14905[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (4))){
var inst_13183 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
if(cljs.core.truth_(inst_13183)){
var statearr_13295_14906 = state_13267__$1;
(statearr_13295_14906[(1)] = (8));

} else {
var statearr_13296_14907 = state_13267__$1;
(statearr_13296_14907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (15))){
var inst_13210 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
if(cljs.core.truth_(inst_13210)){
var statearr_13297_14908 = state_13267__$1;
(statearr_13297_14908[(1)] = (19));

} else {
var statearr_13298_14909 = state_13267__$1;
(statearr_13298_14909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (21))){
var inst_13215 = (state_13267[(12)]);
var inst_13215__$1 = (state_13267[(2)]);
var inst_13216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13215__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13215__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13215__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13267__$1 = (function (){var statearr_13303 = state_13267;
(statearr_13303[(9)] = inst_13216);

(statearr_13303[(12)] = inst_13215__$1);

(statearr_13303[(13)] = inst_13217);

return statearr_13303;
})();
return cljs.core.async.ioc_alts_BANG_(state_13267__$1,(22),inst_13218);
} else {
if((state_val_13268 === (31))){
var inst_13249 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
if(cljs.core.truth_(inst_13249)){
var statearr_13308_14910 = state_13267__$1;
(statearr_13308_14910[(1)] = (32));

} else {
var statearr_13309_14911 = state_13267__$1;
(statearr_13309_14911[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (32))){
var inst_13226 = (state_13267[(14)]);
var state_13267__$1 = state_13267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13267__$1,(35),out,inst_13226);
} else {
if((state_val_13268 === (33))){
var inst_13215 = (state_13267[(12)]);
var inst_13192 = inst_13215;
var state_13267__$1 = (function (){var statearr_13317 = state_13267;
(statearr_13317[(7)] = inst_13192);

return statearr_13317;
})();
var statearr_13321_14913 = state_13267__$1;
(statearr_13321_14913[(2)] = null);

(statearr_13321_14913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (13))){
var inst_13192 = (state_13267[(7)]);
var inst_13199 = inst_13192.cljs$lang$protocol_mask$partition0$;
var inst_13200 = (inst_13199 & (64));
var inst_13201 = inst_13192.cljs$core$ISeq$;
var inst_13202 = (cljs.core.PROTOCOL_SENTINEL === inst_13201);
var inst_13203 = ((inst_13200) || (inst_13202));
var state_13267__$1 = state_13267;
if(cljs.core.truth_(inst_13203)){
var statearr_13326_14915 = state_13267__$1;
(statearr_13326_14915[(1)] = (16));

} else {
var statearr_13327_14916 = state_13267__$1;
(statearr_13327_14916[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (22))){
var inst_13227 = (state_13267[(11)]);
var inst_13226 = (state_13267[(14)]);
var inst_13225 = (state_13267[(2)]);
var inst_13226__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13225,(0),null);
var inst_13227__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13225,(1),null);
var inst_13228 = (inst_13226__$1 == null);
var inst_13229 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13227__$1,change);
var inst_13230 = ((inst_13228) || (inst_13229));
var state_13267__$1 = (function (){var statearr_13347 = state_13267;
(statearr_13347[(11)] = inst_13227__$1);

(statearr_13347[(14)] = inst_13226__$1);

return statearr_13347;
})();
if(cljs.core.truth_(inst_13230)){
var statearr_13348_14918 = state_13267__$1;
(statearr_13348_14918[(1)] = (23));

} else {
var statearr_13349_14919 = state_13267__$1;
(statearr_13349_14919[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (36))){
var inst_13215 = (state_13267[(12)]);
var inst_13192 = inst_13215;
var state_13267__$1 = (function (){var statearr_13350 = state_13267;
(statearr_13350[(7)] = inst_13192);

return statearr_13350;
})();
var statearr_13351_14920 = state_13267__$1;
(statearr_13351_14920[(2)] = null);

(statearr_13351_14920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (29))){
var inst_13241 = (state_13267[(10)]);
var state_13267__$1 = state_13267;
var statearr_13352_14922 = state_13267__$1;
(statearr_13352_14922[(2)] = inst_13241);

(statearr_13352_14922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (6))){
var state_13267__$1 = state_13267;
var statearr_13353_14923 = state_13267__$1;
(statearr_13353_14923[(2)] = false);

(statearr_13353_14923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (28))){
var inst_13237 = (state_13267[(2)]);
var inst_13238 = calc_state();
var inst_13192 = inst_13238;
var state_13267__$1 = (function (){var statearr_13354 = state_13267;
(statearr_13354[(15)] = inst_13237);

(statearr_13354[(7)] = inst_13192);

return statearr_13354;
})();
var statearr_13355_14925 = state_13267__$1;
(statearr_13355_14925[(2)] = null);

(statearr_13355_14925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (25))){
var inst_13263 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
var statearr_13377_14926 = state_13267__$1;
(statearr_13377_14926[(2)] = inst_13263);

(statearr_13377_14926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (34))){
var inst_13261 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
var statearr_13378_14927 = state_13267__$1;
(statearr_13378_14927[(2)] = inst_13261);

(statearr_13378_14927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (17))){
var state_13267__$1 = state_13267;
var statearr_13379_14929 = state_13267__$1;
(statearr_13379_14929[(2)] = false);

(statearr_13379_14929[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (3))){
var state_13267__$1 = state_13267;
var statearr_13380_14930 = state_13267__$1;
(statearr_13380_14930[(2)] = false);

(statearr_13380_14930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (12))){
var inst_13265 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13267__$1,inst_13265);
} else {
if((state_val_13268 === (2))){
var inst_13142 = (state_13267[(8)]);
var inst_13172 = inst_13142.cljs$lang$protocol_mask$partition0$;
var inst_13173 = (inst_13172 & (64));
var inst_13174 = inst_13142.cljs$core$ISeq$;
var inst_13175 = (cljs.core.PROTOCOL_SENTINEL === inst_13174);
var inst_13176 = ((inst_13173) || (inst_13175));
var state_13267__$1 = state_13267;
if(cljs.core.truth_(inst_13176)){
var statearr_13381_14931 = state_13267__$1;
(statearr_13381_14931[(1)] = (5));

} else {
var statearr_13382_14932 = state_13267__$1;
(statearr_13382_14932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (23))){
var inst_13226 = (state_13267[(14)]);
var inst_13232 = (inst_13226 == null);
var state_13267__$1 = state_13267;
if(cljs.core.truth_(inst_13232)){
var statearr_13383_14933 = state_13267__$1;
(statearr_13383_14933[(1)] = (26));

} else {
var statearr_13384_14934 = state_13267__$1;
(statearr_13384_14934[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (35))){
var inst_13252 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
if(cljs.core.truth_(inst_13252)){
var statearr_13385_14935 = state_13267__$1;
(statearr_13385_14935[(1)] = (36));

} else {
var statearr_13386_14936 = state_13267__$1;
(statearr_13386_14936[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (19))){
var inst_13192 = (state_13267[(7)]);
var inst_13212 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13192);
var state_13267__$1 = state_13267;
var statearr_13387_14937 = state_13267__$1;
(statearr_13387_14937[(2)] = inst_13212);

(statearr_13387_14937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (11))){
var inst_13192 = (state_13267[(7)]);
var inst_13196 = (inst_13192 == null);
var inst_13197 = cljs.core.not(inst_13196);
var state_13267__$1 = state_13267;
if(inst_13197){
var statearr_13388_14938 = state_13267__$1;
(statearr_13388_14938[(1)] = (13));

} else {
var statearr_13389_14939 = state_13267__$1;
(statearr_13389_14939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (9))){
var inst_13142 = (state_13267[(8)]);
var state_13267__$1 = state_13267;
var statearr_13390_14940 = state_13267__$1;
(statearr_13390_14940[(2)] = inst_13142);

(statearr_13390_14940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (5))){
var state_13267__$1 = state_13267;
var statearr_13391_14941 = state_13267__$1;
(statearr_13391_14941[(2)] = true);

(statearr_13391_14941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (14))){
var state_13267__$1 = state_13267;
var statearr_13392_14942 = state_13267__$1;
(statearr_13392_14942[(2)] = false);

(statearr_13392_14942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (26))){
var inst_13227 = (state_13267[(11)]);
var inst_13234 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13227);
var state_13267__$1 = state_13267;
var statearr_13452_14943 = state_13267__$1;
(statearr_13452_14943[(2)] = inst_13234);

(statearr_13452_14943[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (16))){
var state_13267__$1 = state_13267;
var statearr_13453_14944 = state_13267__$1;
(statearr_13453_14944[(2)] = true);

(statearr_13453_14944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (38))){
var inst_13257 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
var statearr_13454_14945 = state_13267__$1;
(statearr_13454_14945[(2)] = inst_13257);

(statearr_13454_14945[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (30))){
var inst_13216 = (state_13267[(9)]);
var inst_13217 = (state_13267[(13)]);
var inst_13227 = (state_13267[(11)]);
var inst_13244 = cljs.core.empty_QMARK_(inst_13216);
var inst_13245 = (inst_13217.cljs$core$IFn$_invoke$arity$1 ? inst_13217.cljs$core$IFn$_invoke$arity$1(inst_13227) : inst_13217.call(null,inst_13227));
var inst_13246 = cljs.core.not(inst_13245);
var inst_13247 = ((inst_13244) && (inst_13246));
var state_13267__$1 = state_13267;
var statearr_13455_14946 = state_13267__$1;
(statearr_13455_14946[(2)] = inst_13247);

(statearr_13455_14946[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (10))){
var inst_13142 = (state_13267[(8)]);
var inst_13188 = (state_13267[(2)]);
var inst_13189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13188,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13188,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13188,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13192 = inst_13142;
var state_13267__$1 = (function (){var statearr_13456 = state_13267;
(statearr_13456[(16)] = inst_13189);

(statearr_13456[(17)] = inst_13191);

(statearr_13456[(18)] = inst_13190);

(statearr_13456[(7)] = inst_13192);

return statearr_13456;
})();
var statearr_13457_14947 = state_13267__$1;
(statearr_13457_14947[(2)] = null);

(statearr_13457_14947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (18))){
var inst_13207 = (state_13267[(2)]);
var state_13267__$1 = state_13267;
var statearr_13458_14948 = state_13267__$1;
(statearr_13458_14948[(2)] = inst_13207);

(statearr_13458_14948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (37))){
var state_13267__$1 = state_13267;
var statearr_13459_14949 = state_13267__$1;
(statearr_13459_14949[(2)] = null);

(statearr_13459_14949[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13268 === (8))){
var inst_13142 = (state_13267[(8)]);
var inst_13185 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13142);
var state_13267__$1 = state_13267;
var statearr_13460_14950 = state_13267__$1;
(statearr_13460_14950[(2)] = inst_13185);

(statearr_13460_14950[(1)] = (10));


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
var statearr_13461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13461[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_13461[(1)] = (1));

return statearr_13461;
});
var cljs$core$async$mix_$_state_machine__12072__auto____1 = (function (state_13267){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13267);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13462){var ex__12075__auto__ = e13462;
var statearr_13463_14953 = state_13267;
(statearr_13463_14953[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13267[(4)]))){
var statearr_13464_14954 = state_13267;
(statearr_13464_14954[(1)] = cljs.core.first((state_13267[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14955 = state_13267;
state_13267 = G__14955;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12072__auto__ = function(state_13267){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12072__auto____1.call(this,state_13267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12072__auto____0;
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12072__auto____1;
return cljs$core$async$mix_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13465 = f__12108__auto__();
(statearr_13465[(6)] = c__12107__auto___14898);

return statearr_13465;
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

var cljs$core$async$Pub$sub_STAR_$dyn_14958 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14958(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14960 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14960(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14962 = (function() {
var G__14963 = null;
var G__14963__1 = (function (p){
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
var G__14963__2 = (function (p,v){
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
G__14963 = function(p,v){
switch(arguments.length){
case 1:
return G__14963__1.call(this,p);
case 2:
return G__14963__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14963.cljs$core$IFn$_invoke$arity$1 = G__14963__1;
G__14963.cljs$core$IFn$_invoke$arity$2 = G__14963__2;
return G__14963;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13539 = arguments.length;
switch (G__13539) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14962(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14962(p,v);
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
var G__13542 = arguments.length;
switch (G__13542) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13540_SHARP_){
if(cljs.core.truth_((p1__13540_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13540_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13540_SHARP_.call(null,topic)))){
return p1__13540_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13540_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13556 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13557){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13557 = meta13557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13558,meta13557__$1){
var self__ = this;
var _13558__$1 = this;
return (new cljs.core.async.t_cljs$core$async13556(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13557__$1));
}));

(cljs.core.async.t_cljs$core$async13556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13558){
var self__ = this;
var _13558__$1 = this;
return self__.meta13557;
}));

(cljs.core.async.t_cljs$core$async13556.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13556.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13556.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13556.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13556.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13556.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13556.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13557","meta13557",-1923263062,null)], null);
}));

(cljs.core.async.t_cljs$core$async13556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13556");

(cljs.core.async.t_cljs$core$async13556.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13556.
 */
cljs.core.async.__GT_t_cljs$core$async13556 = (function cljs$core$async$__GT_t_cljs$core$async13556(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13557){
return (new cljs.core.async.t_cljs$core$async13556(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13557));
});

}

return (new cljs.core.async.t_cljs$core$async13556(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13664){
var state_val_13665 = (state_13664[(1)]);
if((state_val_13665 === (7))){
var inst_13660 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
var statearr_13666_14979 = state_13664__$1;
(statearr_13666_14979[(2)] = inst_13660);

(statearr_13666_14979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (20))){
var state_13664__$1 = state_13664;
var statearr_13667_14980 = state_13664__$1;
(statearr_13667_14980[(2)] = null);

(statearr_13667_14980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (1))){
var state_13664__$1 = state_13664;
var statearr_13668_14982 = state_13664__$1;
(statearr_13668_14982[(2)] = null);

(statearr_13668_14982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (24))){
var inst_13643 = (state_13664[(7)]);
var inst_13652 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13643);
var state_13664__$1 = state_13664;
var statearr_13670_14983 = state_13664__$1;
(statearr_13670_14983[(2)] = inst_13652);

(statearr_13670_14983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (4))){
var inst_13595 = (state_13664[(8)]);
var inst_13595__$1 = (state_13664[(2)]);
var inst_13596 = (inst_13595__$1 == null);
var state_13664__$1 = (function (){var statearr_13672 = state_13664;
(statearr_13672[(8)] = inst_13595__$1);

return statearr_13672;
})();
if(cljs.core.truth_(inst_13596)){
var statearr_13673_14985 = state_13664__$1;
(statearr_13673_14985[(1)] = (5));

} else {
var statearr_13675_14986 = state_13664__$1;
(statearr_13675_14986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (15))){
var inst_13637 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
var statearr_13677_14987 = state_13664__$1;
(statearr_13677_14987[(2)] = inst_13637);

(statearr_13677_14987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (21))){
var inst_13657 = (state_13664[(2)]);
var state_13664__$1 = (function (){var statearr_13678 = state_13664;
(statearr_13678[(9)] = inst_13657);

return statearr_13678;
})();
var statearr_13679_14989 = state_13664__$1;
(statearr_13679_14989[(2)] = null);

(statearr_13679_14989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (13))){
var inst_13619 = (state_13664[(10)]);
var inst_13621 = cljs.core.chunked_seq_QMARK_(inst_13619);
var state_13664__$1 = state_13664;
if(inst_13621){
var statearr_13682_14990 = state_13664__$1;
(statearr_13682_14990[(1)] = (16));

} else {
var statearr_13683_14991 = state_13664__$1;
(statearr_13683_14991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (22))){
var inst_13649 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
if(cljs.core.truth_(inst_13649)){
var statearr_13685_14998 = state_13664__$1;
(statearr_13685_14998[(1)] = (23));

} else {
var statearr_13686_14999 = state_13664__$1;
(statearr_13686_14999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (6))){
var inst_13645 = (state_13664[(11)]);
var inst_13595 = (state_13664[(8)]);
var inst_13643 = (state_13664[(7)]);
var inst_13643__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13595) : topic_fn.call(null,inst_13595));
var inst_13644 = cljs.core.deref(mults);
var inst_13645__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13644,inst_13643__$1);
var state_13664__$1 = (function (){var statearr_13687 = state_13664;
(statearr_13687[(11)] = inst_13645__$1);

(statearr_13687[(7)] = inst_13643__$1);

return statearr_13687;
})();
if(cljs.core.truth_(inst_13645__$1)){
var statearr_13688_15007 = state_13664__$1;
(statearr_13688_15007[(1)] = (19));

} else {
var statearr_13689_15008 = state_13664__$1;
(statearr_13689_15008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (25))){
var inst_13654 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
var statearr_13690_15009 = state_13664__$1;
(statearr_13690_15009[(2)] = inst_13654);

(statearr_13690_15009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (17))){
var inst_13619 = (state_13664[(10)]);
var inst_13628 = cljs.core.first(inst_13619);
var inst_13629 = cljs.core.async.muxch_STAR_(inst_13628);
var inst_13630 = cljs.core.async.close_BANG_(inst_13629);
var inst_13631 = cljs.core.next(inst_13619);
var inst_13605 = inst_13631;
var inst_13606 = null;
var inst_13607 = (0);
var inst_13608 = (0);
var state_13664__$1 = (function (){var statearr_13691 = state_13664;
(statearr_13691[(12)] = inst_13630);

(statearr_13691[(13)] = inst_13606);

(statearr_13691[(14)] = inst_13605);

(statearr_13691[(15)] = inst_13607);

(statearr_13691[(16)] = inst_13608);

return statearr_13691;
})();
var statearr_13692_15011 = state_13664__$1;
(statearr_13692_15011[(2)] = null);

(statearr_13692_15011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (3))){
var inst_13662 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13664__$1,inst_13662);
} else {
if((state_val_13665 === (12))){
var inst_13639 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
var statearr_13693_15012 = state_13664__$1;
(statearr_13693_15012[(2)] = inst_13639);

(statearr_13693_15012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (2))){
var state_13664__$1 = state_13664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13664__$1,(4),ch);
} else {
if((state_val_13665 === (23))){
var state_13664__$1 = state_13664;
var statearr_13694_15014 = state_13664__$1;
(statearr_13694_15014[(2)] = null);

(statearr_13694_15014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (19))){
var inst_13645 = (state_13664[(11)]);
var inst_13595 = (state_13664[(8)]);
var inst_13647 = cljs.core.async.muxch_STAR_(inst_13645);
var state_13664__$1 = state_13664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13664__$1,(22),inst_13647,inst_13595);
} else {
if((state_val_13665 === (11))){
var inst_13619 = (state_13664[(10)]);
var inst_13605 = (state_13664[(14)]);
var inst_13619__$1 = cljs.core.seq(inst_13605);
var state_13664__$1 = (function (){var statearr_13695 = state_13664;
(statearr_13695[(10)] = inst_13619__$1);

return statearr_13695;
})();
if(inst_13619__$1){
var statearr_13696_15018 = state_13664__$1;
(statearr_13696_15018[(1)] = (13));

} else {
var statearr_13697_15019 = state_13664__$1;
(statearr_13697_15019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (9))){
var inst_13641 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
var statearr_13698_15020 = state_13664__$1;
(statearr_13698_15020[(2)] = inst_13641);

(statearr_13698_15020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (5))){
var inst_13602 = cljs.core.deref(mults);
var inst_13603 = cljs.core.vals(inst_13602);
var inst_13604 = cljs.core.seq(inst_13603);
var inst_13605 = inst_13604;
var inst_13606 = null;
var inst_13607 = (0);
var inst_13608 = (0);
var state_13664__$1 = (function (){var statearr_13699 = state_13664;
(statearr_13699[(13)] = inst_13606);

(statearr_13699[(14)] = inst_13605);

(statearr_13699[(15)] = inst_13607);

(statearr_13699[(16)] = inst_13608);

return statearr_13699;
})();
var statearr_13700_15022 = state_13664__$1;
(statearr_13700_15022[(2)] = null);

(statearr_13700_15022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (14))){
var state_13664__$1 = state_13664;
var statearr_13704_15023 = state_13664__$1;
(statearr_13704_15023[(2)] = null);

(statearr_13704_15023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (16))){
var inst_13619 = (state_13664[(10)]);
var inst_13623 = cljs.core.chunk_first(inst_13619);
var inst_13624 = cljs.core.chunk_rest(inst_13619);
var inst_13625 = cljs.core.count(inst_13623);
var inst_13605 = inst_13624;
var inst_13606 = inst_13623;
var inst_13607 = inst_13625;
var inst_13608 = (0);
var state_13664__$1 = (function (){var statearr_13705 = state_13664;
(statearr_13705[(13)] = inst_13606);

(statearr_13705[(14)] = inst_13605);

(statearr_13705[(15)] = inst_13607);

(statearr_13705[(16)] = inst_13608);

return statearr_13705;
})();
var statearr_13706_15024 = state_13664__$1;
(statearr_13706_15024[(2)] = null);

(statearr_13706_15024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (10))){
var inst_13606 = (state_13664[(13)]);
var inst_13605 = (state_13664[(14)]);
var inst_13607 = (state_13664[(15)]);
var inst_13608 = (state_13664[(16)]);
var inst_13613 = cljs.core._nth(inst_13606,inst_13608);
var inst_13614 = cljs.core.async.muxch_STAR_(inst_13613);
var inst_13615 = cljs.core.async.close_BANG_(inst_13614);
var inst_13616 = (inst_13608 + (1));
var tmp13701 = inst_13606;
var tmp13702 = inst_13605;
var tmp13703 = inst_13607;
var inst_13605__$1 = tmp13702;
var inst_13606__$1 = tmp13701;
var inst_13607__$1 = tmp13703;
var inst_13608__$1 = inst_13616;
var state_13664__$1 = (function (){var statearr_13707 = state_13664;
(statearr_13707[(17)] = inst_13615);

(statearr_13707[(13)] = inst_13606__$1);

(statearr_13707[(14)] = inst_13605__$1);

(statearr_13707[(15)] = inst_13607__$1);

(statearr_13707[(16)] = inst_13608__$1);

return statearr_13707;
})();
var statearr_13708_15027 = state_13664__$1;
(statearr_13708_15027[(2)] = null);

(statearr_13708_15027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (18))){
var inst_13634 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
var statearr_13709_15030 = state_13664__$1;
(statearr_13709_15030[(2)] = inst_13634);

(statearr_13709_15030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (8))){
var inst_13607 = (state_13664[(15)]);
var inst_13608 = (state_13664[(16)]);
var inst_13610 = (inst_13608 < inst_13607);
var inst_13611 = inst_13610;
var state_13664__$1 = state_13664;
if(cljs.core.truth_(inst_13611)){
var statearr_13710_15033 = state_13664__$1;
(statearr_13710_15033[(1)] = (10));

} else {
var statearr_13711_15034 = state_13664__$1;
(statearr_13711_15034[(1)] = (11));

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
var statearr_13713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13713[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13713[(1)] = (1));

return statearr_13713;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13664){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13664);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13714){var ex__12075__auto__ = e13714;
var statearr_13715_15093 = state_13664;
(statearr_13715_15093[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13664[(4)]))){
var statearr_13716_15094 = state_13664;
(statearr_13716_15094[(1)] = cljs.core.first((state_13664[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15097 = state_13664;
state_13664 = G__15097;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13718 = f__12108__auto__();
(statearr_13718[(6)] = c__12107__auto___14978);

return statearr_13718;
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
var G__13720 = arguments.length;
switch (G__13720) {
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
var G__13731 = arguments.length;
switch (G__13731) {
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
var G__13740 = arguments.length;
switch (G__13740) {
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
var c__12107__auto___15114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13785){
var state_val_13786 = (state_13785[(1)]);
if((state_val_13786 === (7))){
var state_13785__$1 = state_13785;
var statearr_13790_15119 = state_13785__$1;
(statearr_13790_15119[(2)] = null);

(statearr_13790_15119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (1))){
var state_13785__$1 = state_13785;
var statearr_13791_15122 = state_13785__$1;
(statearr_13791_15122[(2)] = null);

(statearr_13791_15122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (4))){
var inst_13744 = (state_13785[(7)]);
var inst_13743 = (state_13785[(8)]);
var inst_13746 = (inst_13744 < inst_13743);
var state_13785__$1 = state_13785;
if(cljs.core.truth_(inst_13746)){
var statearr_13795_15123 = state_13785__$1;
(statearr_13795_15123[(1)] = (6));

} else {
var statearr_13797_15124 = state_13785__$1;
(statearr_13797_15124[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (15))){
var inst_13771 = (state_13785[(9)]);
var inst_13776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13771);
var state_13785__$1 = state_13785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13785__$1,(17),out,inst_13776);
} else {
if((state_val_13786 === (13))){
var inst_13771 = (state_13785[(9)]);
var inst_13771__$1 = (state_13785[(2)]);
var inst_13772 = cljs.core.some(cljs.core.nil_QMARK_,inst_13771__$1);
var state_13785__$1 = (function (){var statearr_13798 = state_13785;
(statearr_13798[(9)] = inst_13771__$1);

return statearr_13798;
})();
if(cljs.core.truth_(inst_13772)){
var statearr_13800_15149 = state_13785__$1;
(statearr_13800_15149[(1)] = (14));

} else {
var statearr_13801_15150 = state_13785__$1;
(statearr_13801_15150[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (6))){
var state_13785__$1 = state_13785;
var statearr_13802_15152 = state_13785__$1;
(statearr_13802_15152[(2)] = null);

(statearr_13802_15152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (17))){
var inst_13778 = (state_13785[(2)]);
var state_13785__$1 = (function (){var statearr_13811 = state_13785;
(statearr_13811[(10)] = inst_13778);

return statearr_13811;
})();
var statearr_13813_15156 = state_13785__$1;
(statearr_13813_15156[(2)] = null);

(statearr_13813_15156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (3))){
var inst_13783 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13785__$1,inst_13783);
} else {
if((state_val_13786 === (12))){
var _ = (function (){var statearr_13814 = state_13785;
(statearr_13814[(4)] = cljs.core.rest((state_13785[(4)])));

return statearr_13814;
})();
var state_13785__$1 = state_13785;
var ex13807 = (state_13785__$1[(2)]);
var statearr_13817_15159 = state_13785__$1;
(statearr_13817_15159[(5)] = ex13807);


if((ex13807 instanceof Object)){
var statearr_13818_15160 = state_13785__$1;
(statearr_13818_15160[(1)] = (11));

(statearr_13818_15160[(5)] = null);

} else {
throw ex13807;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (2))){
var inst_13742 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13743 = cnt;
var inst_13744 = (0);
var state_13785__$1 = (function (){var statearr_13819 = state_13785;
(statearr_13819[(7)] = inst_13744);

(statearr_13819[(11)] = inst_13742);

(statearr_13819[(8)] = inst_13743);

return statearr_13819;
})();
var statearr_13820_15163 = state_13785__$1;
(statearr_13820_15163[(2)] = null);

(statearr_13820_15163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (11))){
var inst_13748 = (state_13785[(2)]);
var inst_13749 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13785__$1 = (function (){var statearr_13821 = state_13785;
(statearr_13821[(12)] = inst_13748);

return statearr_13821;
})();
var statearr_13822_15164 = state_13785__$1;
(statearr_13822_15164[(2)] = inst_13749);

(statearr_13822_15164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (9))){
var inst_13744 = (state_13785[(7)]);
var _ = (function (){var statearr_13823 = state_13785;
(statearr_13823[(4)] = cljs.core.cons((12),(state_13785[(4)])));

return statearr_13823;
})();
var inst_13757 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13744) : chs__$1.call(null,inst_13744));
var inst_13758 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13744) : done.call(null,inst_13744));
var inst_13759 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13757,inst_13758);
var ___$1 = (function (){var statearr_13824 = state_13785;
(statearr_13824[(4)] = cljs.core.rest((state_13785[(4)])));

return statearr_13824;
})();
var state_13785__$1 = state_13785;
var statearr_13825_15168 = state_13785__$1;
(statearr_13825_15168[(2)] = inst_13759);

(statearr_13825_15168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (5))){
var inst_13769 = (state_13785[(2)]);
var state_13785__$1 = (function (){var statearr_13826 = state_13785;
(statearr_13826[(13)] = inst_13769);

return statearr_13826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13785__$1,(13),dchan);
} else {
if((state_val_13786 === (14))){
var inst_13774 = cljs.core.async.close_BANG_(out);
var state_13785__$1 = state_13785;
var statearr_13827_15176 = state_13785__$1;
(statearr_13827_15176[(2)] = inst_13774);

(statearr_13827_15176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (16))){
var inst_13781 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
var statearr_13828_15178 = state_13785__$1;
(statearr_13828_15178[(2)] = inst_13781);

(statearr_13828_15178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (10))){
var inst_13744 = (state_13785[(7)]);
var inst_13762 = (state_13785[(2)]);
var inst_13763 = (inst_13744 + (1));
var inst_13744__$1 = inst_13763;
var state_13785__$1 = (function (){var statearr_13829 = state_13785;
(statearr_13829[(7)] = inst_13744__$1);

(statearr_13829[(14)] = inst_13762);

return statearr_13829;
})();
var statearr_13830_15179 = state_13785__$1;
(statearr_13830_15179[(2)] = null);

(statearr_13830_15179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (8))){
var inst_13767 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
var statearr_13831_15180 = state_13785__$1;
(statearr_13831_15180[(2)] = inst_13767);

(statearr_13831_15180[(1)] = (5));


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
var statearr_13832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13832[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13832[(1)] = (1));

return statearr_13832;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13785){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13785);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13833){var ex__12075__auto__ = e13833;
var statearr_13834_15181 = state_13785;
(statearr_13834_15181[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13785[(4)]))){
var statearr_13835_15182 = state_13785;
(statearr_13835_15182[(1)] = cljs.core.first((state_13785[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15183 = state_13785;
state_13785 = G__15183;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13836 = f__12108__auto__();
(statearr_13836[(6)] = c__12107__auto___15114);

return statearr_13836;
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
var G__13844 = arguments.length;
switch (G__13844) {
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
var c__12107__auto___15185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13882){
var state_val_13883 = (state_13882[(1)]);
if((state_val_13883 === (7))){
var inst_13859 = (state_13882[(7)]);
var inst_13858 = (state_13882[(8)]);
var inst_13858__$1 = (state_13882[(2)]);
var inst_13859__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13858__$1,(0),null);
var inst_13860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13858__$1,(1),null);
var inst_13861 = (inst_13859__$1 == null);
var state_13882__$1 = (function (){var statearr_13888 = state_13882;
(statearr_13888[(7)] = inst_13859__$1);

(statearr_13888[(9)] = inst_13860);

(statearr_13888[(8)] = inst_13858__$1);

return statearr_13888;
})();
if(cljs.core.truth_(inst_13861)){
var statearr_13891_15186 = state_13882__$1;
(statearr_13891_15186[(1)] = (8));

} else {
var statearr_13892_15187 = state_13882__$1;
(statearr_13892_15187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (1))){
var inst_13847 = cljs.core.vec(chs);
var inst_13848 = inst_13847;
var state_13882__$1 = (function (){var statearr_13894 = state_13882;
(statearr_13894[(10)] = inst_13848);

return statearr_13894;
})();
var statearr_13897_15188 = state_13882__$1;
(statearr_13897_15188[(2)] = null);

(statearr_13897_15188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (4))){
var inst_13848 = (state_13882[(10)]);
var state_13882__$1 = state_13882;
return cljs.core.async.ioc_alts_BANG_(state_13882__$1,(7),inst_13848);
} else {
if((state_val_13883 === (6))){
var inst_13877 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13900_15189 = state_13882__$1;
(statearr_13900_15189[(2)] = inst_13877);

(statearr_13900_15189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (3))){
var inst_13879 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13882__$1,inst_13879);
} else {
if((state_val_13883 === (2))){
var inst_13848 = (state_13882[(10)]);
var inst_13851 = cljs.core.count(inst_13848);
var inst_13852 = (inst_13851 > (0));
var state_13882__$1 = state_13882;
if(cljs.core.truth_(inst_13852)){
var statearr_13904_15190 = state_13882__$1;
(statearr_13904_15190[(1)] = (4));

} else {
var statearr_13905_15191 = state_13882__$1;
(statearr_13905_15191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (11))){
var inst_13848 = (state_13882[(10)]);
var inst_13870 = (state_13882[(2)]);
var tmp13901 = inst_13848;
var inst_13848__$1 = tmp13901;
var state_13882__$1 = (function (){var statearr_13906 = state_13882;
(statearr_13906[(10)] = inst_13848__$1);

(statearr_13906[(11)] = inst_13870);

return statearr_13906;
})();
var statearr_13925_15192 = state_13882__$1;
(statearr_13925_15192[(2)] = null);

(statearr_13925_15192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (9))){
var inst_13859 = (state_13882[(7)]);
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13882__$1,(11),out,inst_13859);
} else {
if((state_val_13883 === (5))){
var inst_13875 = cljs.core.async.close_BANG_(out);
var state_13882__$1 = state_13882;
var statearr_13926_15193 = state_13882__$1;
(statearr_13926_15193[(2)] = inst_13875);

(statearr_13926_15193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (10))){
var inst_13873 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13927_15194 = state_13882__$1;
(statearr_13927_15194[(2)] = inst_13873);

(statearr_13927_15194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (8))){
var inst_13848 = (state_13882[(10)]);
var inst_13859 = (state_13882[(7)]);
var inst_13860 = (state_13882[(9)]);
var inst_13858 = (state_13882[(8)]);
var inst_13863 = (function (){var cs = inst_13848;
var vec__13854 = inst_13858;
var v = inst_13859;
var c = inst_13860;
return (function (p1__13839_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13839_SHARP_);
});
})();
var inst_13864 = cljs.core.filterv(inst_13863,inst_13848);
var inst_13848__$1 = inst_13864;
var state_13882__$1 = (function (){var statearr_13928 = state_13882;
(statearr_13928[(10)] = inst_13848__$1);

return statearr_13928;
})();
var statearr_13929_15201 = state_13882__$1;
(statearr_13929_15201[(2)] = null);

(statearr_13929_15201[(1)] = (2));


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
var statearr_13930 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13930[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13930[(1)] = (1));

return statearr_13930;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13882){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13882);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13931){var ex__12075__auto__ = e13931;
var statearr_13932_15202 = state_13882;
(statearr_13932_15202[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13882[(4)]))){
var statearr_13933_15207 = state_13882;
(statearr_13933_15207[(1)] = cljs.core.first((state_13882[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15208 = state_13882;
state_13882 = G__15208;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13934 = f__12108__auto__();
(statearr_13934[(6)] = c__12107__auto___15185);

return statearr_13934;
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
var G__13941 = arguments.length;
switch (G__13941) {
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
var c__12107__auto___15220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13965){
var state_val_13966 = (state_13965[(1)]);
if((state_val_13966 === (7))){
var inst_13947 = (state_13965[(7)]);
var inst_13947__$1 = (state_13965[(2)]);
var inst_13948 = (inst_13947__$1 == null);
var inst_13949 = cljs.core.not(inst_13948);
var state_13965__$1 = (function (){var statearr_13967 = state_13965;
(statearr_13967[(7)] = inst_13947__$1);

return statearr_13967;
})();
if(inst_13949){
var statearr_13968_15221 = state_13965__$1;
(statearr_13968_15221[(1)] = (8));

} else {
var statearr_13969_15222 = state_13965__$1;
(statearr_13969_15222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13966 === (1))){
var inst_13942 = (0);
var state_13965__$1 = (function (){var statearr_13970 = state_13965;
(statearr_13970[(8)] = inst_13942);

return statearr_13970;
})();
var statearr_13984_15226 = state_13965__$1;
(statearr_13984_15226[(2)] = null);

(statearr_13984_15226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13966 === (4))){
var state_13965__$1 = state_13965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13965__$1,(7),ch);
} else {
if((state_val_13966 === (6))){
var inst_13960 = (state_13965[(2)]);
var state_13965__$1 = state_13965;
var statearr_13985_15228 = state_13965__$1;
(statearr_13985_15228[(2)] = inst_13960);

(statearr_13985_15228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13966 === (3))){
var inst_13962 = (state_13965[(2)]);
var inst_13963 = cljs.core.async.close_BANG_(out);
var state_13965__$1 = (function (){var statearr_13986 = state_13965;
(statearr_13986[(9)] = inst_13962);

return statearr_13986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13965__$1,inst_13963);
} else {
if((state_val_13966 === (2))){
var inst_13942 = (state_13965[(8)]);
var inst_13944 = (inst_13942 < n);
var state_13965__$1 = state_13965;
if(cljs.core.truth_(inst_13944)){
var statearr_13987_15234 = state_13965__$1;
(statearr_13987_15234[(1)] = (4));

} else {
var statearr_13988_15235 = state_13965__$1;
(statearr_13988_15235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13966 === (11))){
var inst_13942 = (state_13965[(8)]);
var inst_13952 = (state_13965[(2)]);
var inst_13953 = (inst_13942 + (1));
var inst_13942__$1 = inst_13953;
var state_13965__$1 = (function (){var statearr_13989 = state_13965;
(statearr_13989[(10)] = inst_13952);

(statearr_13989[(8)] = inst_13942__$1);

return statearr_13989;
})();
var statearr_13990_15238 = state_13965__$1;
(statearr_13990_15238[(2)] = null);

(statearr_13990_15238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13966 === (9))){
var state_13965__$1 = state_13965;
var statearr_13991_15241 = state_13965__$1;
(statearr_13991_15241[(2)] = null);

(statearr_13991_15241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13966 === (5))){
var state_13965__$1 = state_13965;
var statearr_13992_15242 = state_13965__$1;
(statearr_13992_15242[(2)] = null);

(statearr_13992_15242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13966 === (10))){
var inst_13957 = (state_13965[(2)]);
var state_13965__$1 = state_13965;
var statearr_13993_15245 = state_13965__$1;
(statearr_13993_15245[(2)] = inst_13957);

(statearr_13993_15245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13966 === (8))){
var inst_13947 = (state_13965[(7)]);
var state_13965__$1 = state_13965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13965__$1,(11),out,inst_13947);
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
var statearr_13994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13994[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13994[(1)] = (1));

return statearr_13994;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13965){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13965);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13995){var ex__12075__auto__ = e13995;
var statearr_13996_15257 = state_13965;
(statearr_13996_15257[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13965[(4)]))){
var statearr_13997_15258 = state_13965;
(statearr_13997_15258[(1)] = cljs.core.first((state_13965[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15259 = state_13965;
state_13965 = G__15259;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13998 = f__12108__auto__();
(statearr_13998[(6)] = c__12107__auto___15220);

return statearr_13998;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14000 = (function (f,ch,meta14001){
this.f = f;
this.ch = ch;
this.meta14001 = meta14001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14002,meta14001__$1){
var self__ = this;
var _14002__$1 = this;
return (new cljs.core.async.t_cljs$core$async14000(self__.f,self__.ch,meta14001__$1));
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14002){
var self__ = this;
var _14002__$1 = this;
return self__.meta14001;
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14030 = (function (f,ch,meta14001,_,fn1,meta14031){
this.f = f;
this.ch = ch;
this.meta14001 = meta14001;
this._ = _;
this.fn1 = fn1;
this.meta14031 = meta14031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14032,meta14031__$1){
var self__ = this;
var _14032__$1 = this;
return (new cljs.core.async.t_cljs$core$async14030(self__.f,self__.ch,self__.meta14001,self__._,self__.fn1,meta14031__$1));
}));

(cljs.core.async.t_cljs$core$async14030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14032){
var self__ = this;
var _14032__$1 = this;
return self__.meta14031;
}));

(cljs.core.async.t_cljs$core$async14030.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13999_SHARP_){
var G__14033 = (((p1__13999_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13999_SHARP_) : self__.f.call(null,p1__13999_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14033) : f1.call(null,G__14033));
});
}));

(cljs.core.async.t_cljs$core$async14030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14001","meta14001",1342726642,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14000","cljs.core.async/t_cljs$core$async14000",65535942,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14031","meta14031",14798353,null)], null);
}));

(cljs.core.async.t_cljs$core$async14030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14030");

(cljs.core.async.t_cljs$core$async14030.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14030.
 */
cljs.core.async.__GT_t_cljs$core$async14030 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14030(f__$1,ch__$1,meta14001__$1,___$2,fn1__$1,meta14031){
return (new cljs.core.async.t_cljs$core$async14030(f__$1,ch__$1,meta14001__$1,___$2,fn1__$1,meta14031));
});

}

return (new cljs.core.async.t_cljs$core$async14030(self__.f,self__.ch,self__.meta14001,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14034 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14034) : self__.f.call(null,G__14034));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14001","meta14001",1342726642,null)], null);
}));

(cljs.core.async.t_cljs$core$async14000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14000");

(cljs.core.async.t_cljs$core$async14000.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14000.
 */
cljs.core.async.__GT_t_cljs$core$async14000 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14000(f__$1,ch__$1,meta14001){
return (new cljs.core.async.t_cljs$core$async14000(f__$1,ch__$1,meta14001));
});

}

return (new cljs.core.async.t_cljs$core$async14000(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14035 = (function (f,ch,meta14036){
this.f = f;
this.ch = ch;
this.meta14036 = meta14036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14037,meta14036__$1){
var self__ = this;
var _14037__$1 = this;
return (new cljs.core.async.t_cljs$core$async14035(self__.f,self__.ch,meta14036__$1));
}));

(cljs.core.async.t_cljs$core$async14035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14037){
var self__ = this;
var _14037__$1 = this;
return self__.meta14036;
}));

(cljs.core.async.t_cljs$core$async14035.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14035.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14035.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14036","meta14036",994036844,null)], null);
}));

(cljs.core.async.t_cljs$core$async14035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14035");

(cljs.core.async.t_cljs$core$async14035.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14035.
 */
cljs.core.async.__GT_t_cljs$core$async14035 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14035(f__$1,ch__$1,meta14036){
return (new cljs.core.async.t_cljs$core$async14035(f__$1,ch__$1,meta14036));
});

}

return (new cljs.core.async.t_cljs$core$async14035(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14038 = (function (p,ch,meta14039){
this.p = p;
this.ch = ch;
this.meta14039 = meta14039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14040,meta14039__$1){
var self__ = this;
var _14040__$1 = this;
return (new cljs.core.async.t_cljs$core$async14038(self__.p,self__.ch,meta14039__$1));
}));

(cljs.core.async.t_cljs$core$async14038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14040){
var self__ = this;
var _14040__$1 = this;
return self__.meta14039;
}));

(cljs.core.async.t_cljs$core$async14038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14038.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14039","meta14039",-699971841,null)], null);
}));

(cljs.core.async.t_cljs$core$async14038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14038");

(cljs.core.async.t_cljs$core$async14038.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14038.
 */
cljs.core.async.__GT_t_cljs$core$async14038 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14038(p__$1,ch__$1,meta14039){
return (new cljs.core.async.t_cljs$core$async14038(p__$1,ch__$1,meta14039));
});

}

return (new cljs.core.async.t_cljs$core$async14038(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14052 = arguments.length;
switch (G__14052) {
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
var c__12107__auto___15277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14080){
var state_val_14081 = (state_14080[(1)]);
if((state_val_14081 === (7))){
var inst_14076 = (state_14080[(2)]);
var state_14080__$1 = state_14080;
var statearr_14082_15278 = state_14080__$1;
(statearr_14082_15278[(2)] = inst_14076);

(statearr_14082_15278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14081 === (1))){
var state_14080__$1 = state_14080;
var statearr_14083_15280 = state_14080__$1;
(statearr_14083_15280[(2)] = null);

(statearr_14083_15280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14081 === (4))){
var inst_14062 = (state_14080[(7)]);
var inst_14062__$1 = (state_14080[(2)]);
var inst_14063 = (inst_14062__$1 == null);
var state_14080__$1 = (function (){var statearr_14084 = state_14080;
(statearr_14084[(7)] = inst_14062__$1);

return statearr_14084;
})();
if(cljs.core.truth_(inst_14063)){
var statearr_14085_15282 = state_14080__$1;
(statearr_14085_15282[(1)] = (5));

} else {
var statearr_14086_15283 = state_14080__$1;
(statearr_14086_15283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14081 === (6))){
var inst_14062 = (state_14080[(7)]);
var inst_14067 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14062) : p.call(null,inst_14062));
var state_14080__$1 = state_14080;
if(cljs.core.truth_(inst_14067)){
var statearr_14087_15287 = state_14080__$1;
(statearr_14087_15287[(1)] = (8));

} else {
var statearr_14088_15288 = state_14080__$1;
(statearr_14088_15288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14081 === (3))){
var inst_14078 = (state_14080[(2)]);
var state_14080__$1 = state_14080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14080__$1,inst_14078);
} else {
if((state_val_14081 === (2))){
var state_14080__$1 = state_14080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14080__$1,(4),ch);
} else {
if((state_val_14081 === (11))){
var inst_14070 = (state_14080[(2)]);
var state_14080__$1 = state_14080;
var statearr_14089_15293 = state_14080__$1;
(statearr_14089_15293[(2)] = inst_14070);

(statearr_14089_15293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14081 === (9))){
var state_14080__$1 = state_14080;
var statearr_14090_15295 = state_14080__$1;
(statearr_14090_15295[(2)] = null);

(statearr_14090_15295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14081 === (5))){
var inst_14065 = cljs.core.async.close_BANG_(out);
var state_14080__$1 = state_14080;
var statearr_14091_15299 = state_14080__$1;
(statearr_14091_15299[(2)] = inst_14065);

(statearr_14091_15299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14081 === (10))){
var inst_14073 = (state_14080[(2)]);
var state_14080__$1 = (function (){var statearr_14092 = state_14080;
(statearr_14092[(8)] = inst_14073);

return statearr_14092;
})();
var statearr_14093_15300 = state_14080__$1;
(statearr_14093_15300[(2)] = null);

(statearr_14093_15300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14081 === (8))){
var inst_14062 = (state_14080[(7)]);
var state_14080__$1 = state_14080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14080__$1,(11),out,inst_14062);
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
var statearr_14094 = [null,null,null,null,null,null,null,null,null];
(statearr_14094[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14094[(1)] = (1));

return statearr_14094;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14080){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14080);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14096){var ex__12075__auto__ = e14096;
var statearr_14097_15301 = state_14080;
(statearr_14097_15301[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14080[(4)]))){
var statearr_14098_15302 = state_14080;
(statearr_14098_15302[(1)] = cljs.core.first((state_14080[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15303 = state_14080;
state_14080 = G__15303;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14100 = f__12108__auto__();
(statearr_14100[(6)] = c__12107__auto___15277);

return statearr_14100;
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
var G__14106 = arguments.length;
switch (G__14106) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14168){
var state_val_14169 = (state_14168[(1)]);
if((state_val_14169 === (7))){
var inst_14164 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
var statearr_14170_15305 = state_14168__$1;
(statearr_14170_15305[(2)] = inst_14164);

(statearr_14170_15305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (20))){
var inst_14134 = (state_14168[(7)]);
var inst_14145 = (state_14168[(2)]);
var inst_14146 = cljs.core.next(inst_14134);
var inst_14120 = inst_14146;
var inst_14121 = null;
var inst_14122 = (0);
var inst_14123 = (0);
var state_14168__$1 = (function (){var statearr_14171 = state_14168;
(statearr_14171[(8)] = inst_14121);

(statearr_14171[(9)] = inst_14123);

(statearr_14171[(10)] = inst_14122);

(statearr_14171[(11)] = inst_14120);

(statearr_14171[(12)] = inst_14145);

return statearr_14171;
})();
var statearr_14172_15306 = state_14168__$1;
(statearr_14172_15306[(2)] = null);

(statearr_14172_15306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (1))){
var state_14168__$1 = state_14168;
var statearr_14173_15307 = state_14168__$1;
(statearr_14173_15307[(2)] = null);

(statearr_14173_15307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (4))){
var inst_14109 = (state_14168[(13)]);
var inst_14109__$1 = (state_14168[(2)]);
var inst_14110 = (inst_14109__$1 == null);
var state_14168__$1 = (function (){var statearr_14174 = state_14168;
(statearr_14174[(13)] = inst_14109__$1);

return statearr_14174;
})();
if(cljs.core.truth_(inst_14110)){
var statearr_14175_15309 = state_14168__$1;
(statearr_14175_15309[(1)] = (5));

} else {
var statearr_14176_15312 = state_14168__$1;
(statearr_14176_15312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (15))){
var state_14168__$1 = state_14168;
var statearr_14180_15314 = state_14168__$1;
(statearr_14180_15314[(2)] = null);

(statearr_14180_15314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (21))){
var state_14168__$1 = state_14168;
var statearr_14181_15315 = state_14168__$1;
(statearr_14181_15315[(2)] = null);

(statearr_14181_15315[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (13))){
var inst_14121 = (state_14168[(8)]);
var inst_14123 = (state_14168[(9)]);
var inst_14122 = (state_14168[(10)]);
var inst_14120 = (state_14168[(11)]);
var inst_14130 = (state_14168[(2)]);
var inst_14131 = (inst_14123 + (1));
var tmp14177 = inst_14121;
var tmp14178 = inst_14122;
var tmp14179 = inst_14120;
var inst_14120__$1 = tmp14179;
var inst_14121__$1 = tmp14177;
var inst_14122__$1 = tmp14178;
var inst_14123__$1 = inst_14131;
var state_14168__$1 = (function (){var statearr_14182 = state_14168;
(statearr_14182[(8)] = inst_14121__$1);

(statearr_14182[(9)] = inst_14123__$1);

(statearr_14182[(10)] = inst_14122__$1);

(statearr_14182[(11)] = inst_14120__$1);

(statearr_14182[(14)] = inst_14130);

return statearr_14182;
})();
var statearr_14183_15323 = state_14168__$1;
(statearr_14183_15323[(2)] = null);

(statearr_14183_15323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (22))){
var state_14168__$1 = state_14168;
var statearr_14184_15325 = state_14168__$1;
(statearr_14184_15325[(2)] = null);

(statearr_14184_15325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (6))){
var inst_14109 = (state_14168[(13)]);
var inst_14118 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14109) : f.call(null,inst_14109));
var inst_14119 = cljs.core.seq(inst_14118);
var inst_14120 = inst_14119;
var inst_14121 = null;
var inst_14122 = (0);
var inst_14123 = (0);
var state_14168__$1 = (function (){var statearr_14185 = state_14168;
(statearr_14185[(8)] = inst_14121);

(statearr_14185[(9)] = inst_14123);

(statearr_14185[(10)] = inst_14122);

(statearr_14185[(11)] = inst_14120);

return statearr_14185;
})();
var statearr_14186_15330 = state_14168__$1;
(statearr_14186_15330[(2)] = null);

(statearr_14186_15330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (17))){
var inst_14134 = (state_14168[(7)]);
var inst_14138 = cljs.core.chunk_first(inst_14134);
var inst_14139 = cljs.core.chunk_rest(inst_14134);
var inst_14140 = cljs.core.count(inst_14138);
var inst_14120 = inst_14139;
var inst_14121 = inst_14138;
var inst_14122 = inst_14140;
var inst_14123 = (0);
var state_14168__$1 = (function (){var statearr_14187 = state_14168;
(statearr_14187[(8)] = inst_14121);

(statearr_14187[(9)] = inst_14123);

(statearr_14187[(10)] = inst_14122);

(statearr_14187[(11)] = inst_14120);

return statearr_14187;
})();
var statearr_14188_15335 = state_14168__$1;
(statearr_14188_15335[(2)] = null);

(statearr_14188_15335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (3))){
var inst_14166 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14168__$1,inst_14166);
} else {
if((state_val_14169 === (12))){
var inst_14154 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
var statearr_14189_15340 = state_14168__$1;
(statearr_14189_15340[(2)] = inst_14154);

(statearr_14189_15340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (2))){
var state_14168__$1 = state_14168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14168__$1,(4),in$);
} else {
if((state_val_14169 === (23))){
var inst_14162 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
var statearr_14190_15341 = state_14168__$1;
(statearr_14190_15341[(2)] = inst_14162);

(statearr_14190_15341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (19))){
var inst_14149 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
var statearr_14191_15342 = state_14168__$1;
(statearr_14191_15342[(2)] = inst_14149);

(statearr_14191_15342[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (11))){
var inst_14134 = (state_14168[(7)]);
var inst_14120 = (state_14168[(11)]);
var inst_14134__$1 = cljs.core.seq(inst_14120);
var state_14168__$1 = (function (){var statearr_14192 = state_14168;
(statearr_14192[(7)] = inst_14134__$1);

return statearr_14192;
})();
if(inst_14134__$1){
var statearr_14193_15343 = state_14168__$1;
(statearr_14193_15343[(1)] = (14));

} else {
var statearr_14194_15344 = state_14168__$1;
(statearr_14194_15344[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (9))){
var inst_14156 = (state_14168[(2)]);
var inst_14157 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14168__$1 = (function (){var statearr_14195 = state_14168;
(statearr_14195[(15)] = inst_14156);

return statearr_14195;
})();
if(cljs.core.truth_(inst_14157)){
var statearr_14196_15345 = state_14168__$1;
(statearr_14196_15345[(1)] = (21));

} else {
var statearr_14197_15346 = state_14168__$1;
(statearr_14197_15346[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (5))){
var inst_14112 = cljs.core.async.close_BANG_(out);
var state_14168__$1 = state_14168;
var statearr_14198_15347 = state_14168__$1;
(statearr_14198_15347[(2)] = inst_14112);

(statearr_14198_15347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (14))){
var inst_14134 = (state_14168[(7)]);
var inst_14136 = cljs.core.chunked_seq_QMARK_(inst_14134);
var state_14168__$1 = state_14168;
if(inst_14136){
var statearr_14203_15348 = state_14168__$1;
(statearr_14203_15348[(1)] = (17));

} else {
var statearr_14204_15349 = state_14168__$1;
(statearr_14204_15349[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (16))){
var inst_14152 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
var statearr_14205_15350 = state_14168__$1;
(statearr_14205_15350[(2)] = inst_14152);

(statearr_14205_15350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14169 === (10))){
var inst_14121 = (state_14168[(8)]);
var inst_14123 = (state_14168[(9)]);
var inst_14128 = cljs.core._nth(inst_14121,inst_14123);
var state_14168__$1 = state_14168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14168__$1,(13),out,inst_14128);
} else {
if((state_val_14169 === (18))){
var inst_14134 = (state_14168[(7)]);
var inst_14143 = cljs.core.first(inst_14134);
var state_14168__$1 = state_14168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14168__$1,(20),out,inst_14143);
} else {
if((state_val_14169 === (8))){
var inst_14123 = (state_14168[(9)]);
var inst_14122 = (state_14168[(10)]);
var inst_14125 = (inst_14123 < inst_14122);
var inst_14126 = inst_14125;
var state_14168__$1 = state_14168;
if(cljs.core.truth_(inst_14126)){
var statearr_14209_15351 = state_14168__$1;
(statearr_14209_15351[(1)] = (10));

} else {
var statearr_14210_15352 = state_14168__$1;
(statearr_14210_15352[(1)] = (11));

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
var statearr_14211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14211[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_14211[(1)] = (1));

return statearr_14211;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_14168){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14168);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14213){var ex__12075__auto__ = e14213;
var statearr_14215_15353 = state_14168;
(statearr_14215_15353[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14168[(4)]))){
var statearr_14217_15354 = state_14168;
(statearr_14217_15354[(1)] = cljs.core.first((state_14168[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15355 = state_14168;
state_14168 = G__15355;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_14168){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_14168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14220 = f__12108__auto__();
(statearr_14220[(6)] = c__12107__auto__);

return statearr_14220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14224 = arguments.length;
switch (G__14224) {
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
var G__14228 = arguments.length;
switch (G__14228) {
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
var G__14257 = arguments.length;
switch (G__14257) {
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
var c__12107__auto___15359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14284){
var state_val_14285 = (state_14284[(1)]);
if((state_val_14285 === (7))){
var inst_14279 = (state_14284[(2)]);
var state_14284__$1 = state_14284;
var statearr_14289_15360 = state_14284__$1;
(statearr_14289_15360[(2)] = inst_14279);

(statearr_14289_15360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (1))){
var inst_14259 = null;
var state_14284__$1 = (function (){var statearr_14291 = state_14284;
(statearr_14291[(7)] = inst_14259);

return statearr_14291;
})();
var statearr_14292_15361 = state_14284__$1;
(statearr_14292_15361[(2)] = null);

(statearr_14292_15361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (4))){
var inst_14264 = (state_14284[(8)]);
var inst_14264__$1 = (state_14284[(2)]);
var inst_14265 = (inst_14264__$1 == null);
var inst_14266 = cljs.core.not(inst_14265);
var state_14284__$1 = (function (){var statearr_14294 = state_14284;
(statearr_14294[(8)] = inst_14264__$1);

return statearr_14294;
})();
if(inst_14266){
var statearr_14297_15362 = state_14284__$1;
(statearr_14297_15362[(1)] = (5));

} else {
var statearr_14300_15363 = state_14284__$1;
(statearr_14300_15363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (6))){
var state_14284__$1 = state_14284;
var statearr_14315_15364 = state_14284__$1;
(statearr_14315_15364[(2)] = null);

(statearr_14315_15364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (3))){
var inst_14281 = (state_14284[(2)]);
var inst_14282 = cljs.core.async.close_BANG_(out);
var state_14284__$1 = (function (){var statearr_14318 = state_14284;
(statearr_14318[(9)] = inst_14281);

return statearr_14318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14284__$1,inst_14282);
} else {
if((state_val_14285 === (2))){
var state_14284__$1 = state_14284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14284__$1,(4),ch);
} else {
if((state_val_14285 === (11))){
var inst_14264 = (state_14284[(8)]);
var inst_14273 = (state_14284[(2)]);
var inst_14259 = inst_14264;
var state_14284__$1 = (function (){var statearr_14319 = state_14284;
(statearr_14319[(10)] = inst_14273);

(statearr_14319[(7)] = inst_14259);

return statearr_14319;
})();
var statearr_14321_15366 = state_14284__$1;
(statearr_14321_15366[(2)] = null);

(statearr_14321_15366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (9))){
var inst_14264 = (state_14284[(8)]);
var state_14284__$1 = state_14284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14284__$1,(11),out,inst_14264);
} else {
if((state_val_14285 === (5))){
var inst_14264 = (state_14284[(8)]);
var inst_14259 = (state_14284[(7)]);
var inst_14268 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14264,inst_14259);
var state_14284__$1 = state_14284;
if(inst_14268){
var statearr_14330_15370 = state_14284__$1;
(statearr_14330_15370[(1)] = (8));

} else {
var statearr_14331_15371 = state_14284__$1;
(statearr_14331_15371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (10))){
var inst_14276 = (state_14284[(2)]);
var state_14284__$1 = state_14284;
var statearr_14333_15372 = state_14284__$1;
(statearr_14333_15372[(2)] = inst_14276);

(statearr_14333_15372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (8))){
var inst_14259 = (state_14284[(7)]);
var tmp14329 = inst_14259;
var inst_14259__$1 = tmp14329;
var state_14284__$1 = (function (){var statearr_14334 = state_14284;
(statearr_14334[(7)] = inst_14259__$1);

return statearr_14334;
})();
var statearr_14336_15373 = state_14284__$1;
(statearr_14336_15373[(2)] = null);

(statearr_14336_15373[(1)] = (2));


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
var statearr_14339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14339[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14339[(1)] = (1));

return statearr_14339;
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
}catch (e14341){var ex__12075__auto__ = e14341;
var statearr_14342_15377 = state_14284;
(statearr_14342_15377[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14284[(4)]))){
var statearr_14343_15379 = state_14284;
(statearr_14343_15379[(1)] = cljs.core.first((state_14284[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15381 = state_14284;
state_14284 = G__15381;
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
var state__12109__auto__ = (function (){var statearr_14346 = f__12108__auto__();
(statearr_14346[(6)] = c__12107__auto___15359);

return statearr_14346;
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
var G__14365 = arguments.length;
switch (G__14365) {
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
var c__12107__auto___15384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14408){
var state_val_14409 = (state_14408[(1)]);
if((state_val_14409 === (7))){
var inst_14404 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14427_15385 = state_14408__$1;
(statearr_14427_15385[(2)] = inst_14404);

(statearr_14427_15385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (1))){
var inst_14368 = (new Array(n));
var inst_14369 = inst_14368;
var inst_14370 = (0);
var state_14408__$1 = (function (){var statearr_14430 = state_14408;
(statearr_14430[(7)] = inst_14370);

(statearr_14430[(8)] = inst_14369);

return statearr_14430;
})();
var statearr_14431_15386 = state_14408__$1;
(statearr_14431_15386[(2)] = null);

(statearr_14431_15386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (4))){
var inst_14373 = (state_14408[(9)]);
var inst_14373__$1 = (state_14408[(2)]);
var inst_14374 = (inst_14373__$1 == null);
var inst_14375 = cljs.core.not(inst_14374);
var state_14408__$1 = (function (){var statearr_14432 = state_14408;
(statearr_14432[(9)] = inst_14373__$1);

return statearr_14432;
})();
if(inst_14375){
var statearr_14435_15387 = state_14408__$1;
(statearr_14435_15387[(1)] = (5));

} else {
var statearr_14436_15388 = state_14408__$1;
(statearr_14436_15388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (15))){
var inst_14398 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14440_15389 = state_14408__$1;
(statearr_14440_15389[(2)] = inst_14398);

(statearr_14440_15389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (13))){
var state_14408__$1 = state_14408;
var statearr_14443_15390 = state_14408__$1;
(statearr_14443_15390[(2)] = null);

(statearr_14443_15390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (6))){
var inst_14370 = (state_14408[(7)]);
var inst_14394 = (inst_14370 > (0));
var state_14408__$1 = state_14408;
if(cljs.core.truth_(inst_14394)){
var statearr_14447_15391 = state_14408__$1;
(statearr_14447_15391[(1)] = (12));

} else {
var statearr_14449_15392 = state_14408__$1;
(statearr_14449_15392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (3))){
var inst_14406 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14408__$1,inst_14406);
} else {
if((state_val_14409 === (12))){
var inst_14369 = (state_14408[(8)]);
var inst_14396 = cljs.core.vec(inst_14369);
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14408__$1,(15),out,inst_14396);
} else {
if((state_val_14409 === (2))){
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14408__$1,(4),ch);
} else {
if((state_val_14409 === (11))){
var inst_14385 = (state_14408[(2)]);
var inst_14386 = (new Array(n));
var inst_14369 = inst_14386;
var inst_14370 = (0);
var state_14408__$1 = (function (){var statearr_14452 = state_14408;
(statearr_14452[(7)] = inst_14370);

(statearr_14452[(10)] = inst_14385);

(statearr_14452[(8)] = inst_14369);

return statearr_14452;
})();
var statearr_14453_15393 = state_14408__$1;
(statearr_14453_15393[(2)] = null);

(statearr_14453_15393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (9))){
var inst_14369 = (state_14408[(8)]);
var inst_14383 = cljs.core.vec(inst_14369);
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14408__$1,(11),out,inst_14383);
} else {
if((state_val_14409 === (5))){
var inst_14370 = (state_14408[(7)]);
var inst_14373 = (state_14408[(9)]);
var inst_14378 = (state_14408[(11)]);
var inst_14369 = (state_14408[(8)]);
var inst_14377 = (inst_14369[inst_14370] = inst_14373);
var inst_14378__$1 = (inst_14370 + (1));
var inst_14379 = (inst_14378__$1 < n);
var state_14408__$1 = (function (){var statearr_14458 = state_14408;
(statearr_14458[(12)] = inst_14377);

(statearr_14458[(11)] = inst_14378__$1);

return statearr_14458;
})();
if(cljs.core.truth_(inst_14379)){
var statearr_14459_15394 = state_14408__$1;
(statearr_14459_15394[(1)] = (8));

} else {
var statearr_14462_15395 = state_14408__$1;
(statearr_14462_15395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (14))){
var inst_14401 = (state_14408[(2)]);
var inst_14402 = cljs.core.async.close_BANG_(out);
var state_14408__$1 = (function (){var statearr_14487 = state_14408;
(statearr_14487[(13)] = inst_14401);

return statearr_14487;
})();
var statearr_14488_15396 = state_14408__$1;
(statearr_14488_15396[(2)] = inst_14402);

(statearr_14488_15396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (10))){
var inst_14390 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14491_15397 = state_14408__$1;
(statearr_14491_15397[(2)] = inst_14390);

(statearr_14491_15397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (8))){
var inst_14378 = (state_14408[(11)]);
var inst_14369 = (state_14408[(8)]);
var tmp14467 = inst_14369;
var inst_14369__$1 = tmp14467;
var inst_14370 = inst_14378;
var state_14408__$1 = (function (){var statearr_14492 = state_14408;
(statearr_14492[(7)] = inst_14370);

(statearr_14492[(8)] = inst_14369__$1);

return statearr_14492;
})();
var statearr_14493_15398 = state_14408__$1;
(statearr_14493_15398[(2)] = null);

(statearr_14493_15398[(1)] = (2));


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
var statearr_14495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14495[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14495[(1)] = (1));

return statearr_14495;
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
}catch (e14496){var ex__12075__auto__ = e14496;
var statearr_14497_15403 = state_14408;
(statearr_14497_15403[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14408[(4)]))){
var statearr_14498_15404 = state_14408;
(statearr_14498_15404[(1)] = cljs.core.first((state_14408[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15407 = state_14408;
state_14408 = G__15407;
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
var state__12109__auto__ = (function (){var statearr_14500 = f__12108__auto__();
(statearr_14500[(6)] = c__12107__auto___15384);

return statearr_14500;
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
var G__14506 = arguments.length;
switch (G__14506) {
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
var c__12107__auto___15414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14551){
var state_val_14552 = (state_14551[(1)]);
if((state_val_14552 === (7))){
var inst_14547 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14555_15417 = state_14551__$1;
(statearr_14555_15417[(2)] = inst_14547);

(statearr_14555_15417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (1))){
var inst_14509 = [];
var inst_14510 = inst_14509;
var inst_14511 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14551__$1 = (function (){var statearr_14556 = state_14551;
(statearr_14556[(7)] = inst_14510);

(statearr_14556[(8)] = inst_14511);

return statearr_14556;
})();
var statearr_14557_15419 = state_14551__$1;
(statearr_14557_15419[(2)] = null);

(statearr_14557_15419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (4))){
var inst_14514 = (state_14551[(9)]);
var inst_14514__$1 = (state_14551[(2)]);
var inst_14515 = (inst_14514__$1 == null);
var inst_14516 = cljs.core.not(inst_14515);
var state_14551__$1 = (function (){var statearr_14559 = state_14551;
(statearr_14559[(9)] = inst_14514__$1);

return statearr_14559;
})();
if(inst_14516){
var statearr_14560_15426 = state_14551__$1;
(statearr_14560_15426[(1)] = (5));

} else {
var statearr_14561_15428 = state_14551__$1;
(statearr_14561_15428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (15))){
var inst_14541 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14563_15432 = state_14551__$1;
(statearr_14563_15432[(2)] = inst_14541);

(statearr_14563_15432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (13))){
var state_14551__$1 = state_14551;
var statearr_14564_15435 = state_14551__$1;
(statearr_14564_15435[(2)] = null);

(statearr_14564_15435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (6))){
var inst_14510 = (state_14551[(7)]);
var inst_14536 = inst_14510.length;
var inst_14537 = (inst_14536 > (0));
var state_14551__$1 = state_14551;
if(cljs.core.truth_(inst_14537)){
var statearr_14566_15436 = state_14551__$1;
(statearr_14566_15436[(1)] = (12));

} else {
var statearr_14567_15437 = state_14551__$1;
(statearr_14567_15437[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (3))){
var inst_14549 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14551__$1,inst_14549);
} else {
if((state_val_14552 === (12))){
var inst_14510 = (state_14551[(7)]);
var inst_14539 = cljs.core.vec(inst_14510);
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14551__$1,(15),out,inst_14539);
} else {
if((state_val_14552 === (2))){
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14551__$1,(4),ch);
} else {
if((state_val_14552 === (11))){
var inst_14518 = (state_14551[(10)]);
var inst_14514 = (state_14551[(9)]);
var inst_14529 = (state_14551[(2)]);
var inst_14530 = [];
var inst_14531 = inst_14530.push(inst_14514);
var inst_14510 = inst_14530;
var inst_14511 = inst_14518;
var state_14551__$1 = (function (){var statearr_14569 = state_14551;
(statearr_14569[(11)] = inst_14529);

(statearr_14569[(12)] = inst_14531);

(statearr_14569[(7)] = inst_14510);

(statearr_14569[(8)] = inst_14511);

return statearr_14569;
})();
var statearr_14570_15447 = state_14551__$1;
(statearr_14570_15447[(2)] = null);

(statearr_14570_15447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (9))){
var inst_14510 = (state_14551[(7)]);
var inst_14527 = cljs.core.vec(inst_14510);
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14551__$1,(11),out,inst_14527);
} else {
if((state_val_14552 === (5))){
var inst_14518 = (state_14551[(10)]);
var inst_14514 = (state_14551[(9)]);
var inst_14511 = (state_14551[(8)]);
var inst_14518__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14514) : f.call(null,inst_14514));
var inst_14519 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14518__$1,inst_14511);
var inst_14520 = cljs.core.keyword_identical_QMARK_(inst_14511,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14521 = ((inst_14519) || (inst_14520));
var state_14551__$1 = (function (){var statearr_14571 = state_14551;
(statearr_14571[(10)] = inst_14518__$1);

return statearr_14571;
})();
if(cljs.core.truth_(inst_14521)){
var statearr_14572_15453 = state_14551__$1;
(statearr_14572_15453[(1)] = (8));

} else {
var statearr_14573_15454 = state_14551__$1;
(statearr_14573_15454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (14))){
var inst_14544 = (state_14551[(2)]);
var inst_14545 = cljs.core.async.close_BANG_(out);
var state_14551__$1 = (function (){var statearr_14575 = state_14551;
(statearr_14575[(13)] = inst_14544);

return statearr_14575;
})();
var statearr_14576_15487 = state_14551__$1;
(statearr_14576_15487[(2)] = inst_14545);

(statearr_14576_15487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (10))){
var inst_14534 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14577_15490 = state_14551__$1;
(statearr_14577_15490[(2)] = inst_14534);

(statearr_14577_15490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (8))){
var inst_14518 = (state_14551[(10)]);
var inst_14514 = (state_14551[(9)]);
var inst_14510 = (state_14551[(7)]);
var inst_14523 = inst_14510.push(inst_14514);
var tmp14574 = inst_14510;
var inst_14510__$1 = tmp14574;
var inst_14511 = inst_14518;
var state_14551__$1 = (function (){var statearr_14578 = state_14551;
(statearr_14578[(7)] = inst_14510__$1);

(statearr_14578[(14)] = inst_14523);

(statearr_14578[(8)] = inst_14511);

return statearr_14578;
})();
var statearr_14579_15493 = state_14551__$1;
(statearr_14579_15493[(2)] = null);

(statearr_14579_15493[(1)] = (2));


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
var statearr_14580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14580[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14580[(1)] = (1));

return statearr_14580;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14551){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14551);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14581){var ex__12075__auto__ = e14581;
var statearr_14582_15497 = state_14551;
(statearr_14582_15497[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14551[(4)]))){
var statearr_14583_15498 = state_14551;
(statearr_14583_15498[(1)] = cljs.core.first((state_14551[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15504 = state_14551;
state_14551 = G__15504;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14584 = f__12108__auto__();
(statearr_14584[(6)] = c__12107__auto___15414);

return statearr_14584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
