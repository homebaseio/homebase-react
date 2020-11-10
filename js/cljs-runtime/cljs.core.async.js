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
var val_14663 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14663) : fn1.call(null,val_14663));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14663) : fn1.call(null,val_14663));
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
var n__4613__auto___14665 = n;
var x_14666 = (0);
while(true){
if((x_14666 < n__4613__auto___14665)){
(a[x_14666] = x_14666);

var G__14667 = (x_14666 + (1));
x_14666 = G__14667;
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
var G__14671 = (i + (1));
i = G__14671;
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
var len__4736__auto___14672 = arguments.length;
var i__4737__auto___14673 = (0);
while(true){
if((i__4737__auto___14673 < len__4736__auto___14672)){
args__4742__auto__.push((arguments[i__4737__auto___14673]));

var G__14674 = (i__4737__auto___14673 + (1));
i__4737__auto___14673 = G__14674;
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
var c__12107__auto___14686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_14687 = state_12218__$1;
(statearr_12220_14687[(2)] = inst_12214);

(statearr_12220_14687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_14688 = state_12218__$1;
(statearr_12221_14688[(2)] = null);

(statearr_12221_14688[(1)] = (2));


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
var statearr_12223_14689 = state_12218__$1;
(statearr_12223_14689[(1)] = (5));

} else {
var statearr_12224_14690 = state_12218__$1;
(statearr_12224_14690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_14691 = state_12218__$1;
(statearr_12225_14691[(2)] = null);

(statearr_12225_14691[(1)] = (14));


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
var statearr_12226_14692 = state_12218__$1;
(statearr_12226_14692[(2)] = null);

(statearr_12226_14692[(1)] = (2));


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
var statearr_12227_14693 = state_12218__$1;
(statearr_12227_14693[(1)] = (12));

} else {
var statearr_12228_14694 = state_12218__$1;
(statearr_12228_14694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_14695 = state_12218__$1;
(statearr_12229_14695[(2)] = null);

(statearr_12229_14695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_14696 = state_12218__$1;
(statearr_12230_14696[(1)] = (8));

} else {
var statearr_12231_14697 = state_12218__$1;
(statearr_12231_14697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_14698 = state_12218__$1;
(statearr_12232_14698[(2)] = inst_12212);

(statearr_12232_14698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_14700 = state_12218__$1;
(statearr_12233_14700[(2)] = inst_12204);

(statearr_12233_14700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_14701 = state_12218__$1;
(statearr_12234_14701[(2)] = inst_12201);

(statearr_12234_14701[(1)] = (10));


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
var statearr_12237_14703 = state_12218;
(statearr_12237_14703[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_14704 = state_12218;
(statearr_12238_14704[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14705 = state_12218;
state_12218 = G__14705;
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
(statearr_12239[(6)] = c__12107__auto___14686);

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
var c__12107__auto___14707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_12253_14710 = state_12248;
(statearr_12253_14710[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_14711 = state_12248;
(statearr_12254_14711[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14712 = state_12248;
state_12248 = G__14712;
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
(statearr_12255[(6)] = c__12107__auto___14707);

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
var n__4613__auto___14714 = n;
var __14715 = (0);
while(true){
if((__14715 < n__4613__auto___14714)){
var G__12260_14716 = type;
var G__12260_14717__$1 = (((G__12260_14716 instanceof cljs.core.Keyword))?G__12260_14716.fqn:null);
switch (G__12260_14717__$1) {
case "compute":
var c__12107__auto___14719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14715,c__12107__auto___14719,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14715,c__12107__auto___14719,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_14720 = state_12273__$1;
(statearr_12275_14720[(2)] = null);

(statearr_12275_14720[(1)] = (2));


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
var statearr_12276_14721 = state_12273__$1;
(statearr_12276_14721[(1)] = (5));

} else {
var statearr_12277_14722 = state_12273__$1;
(statearr_12277_14722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_14723 = state_12273__$1;
(statearr_12278_14723[(2)] = null);

(statearr_12278_14723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_14724 = state_12273__$1;
(statearr_12279_14724[(2)] = null);

(statearr_12279_14724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_14725 = state_12273__$1;
(statearr_12280_14725[(2)] = inst_12269);

(statearr_12280_14725[(1)] = (3));


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
});})(__14715,c__12107__auto___14719,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async))
;
return ((function (__14715,switch__12071__auto__,c__12107__auto___14719,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async){
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
var statearr_12283_14726 = state_12273;
(statearr_12283_14726[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_14727 = state_12273;
(statearr_12284_14727[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14728 = state_12273;
state_12273 = G__14728;
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
;})(__14715,switch__12071__auto__,c__12107__auto___14719,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___14719);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14715,c__12107__auto___14719,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___14729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14715,c__12107__auto___14729,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14715,c__12107__auto___14729,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_14730 = state_12298__$1;
(statearr_12300_14730[(2)] = null);

(statearr_12300_14730[(1)] = (2));


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
var statearr_12301_14731 = state_12298__$1;
(statearr_12301_14731[(1)] = (5));

} else {
var statearr_12302_14732 = state_12298__$1;
(statearr_12302_14732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_14733 = state_12298__$1;
(statearr_12303_14733[(2)] = null);

(statearr_12303_14733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_14734 = state_12298__$1;
(statearr_12304_14734[(2)] = null);

(statearr_12304_14734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_14735 = state_12298__$1;
(statearr_12305_14735[(2)] = inst_12294);

(statearr_12305_14735[(1)] = (3));


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
});})(__14715,c__12107__auto___14729,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async))
;
return ((function (__14715,switch__12071__auto__,c__12107__auto___14729,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async){
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
var statearr_12308_14736 = state_12298;
(statearr_12308_14736[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_14737 = state_12298;
(statearr_12309_14737[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14738 = state_12298;
state_12298 = G__14738;
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
;})(__14715,switch__12071__auto__,c__12107__auto___14729,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___14729);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14715,c__12107__auto___14729,G__12260_14716,G__12260_14717__$1,n__4613__auto___14714,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_14717__$1)].join('')));

}

var G__14740 = (__14715 + (1));
__14715 = G__14740;
continue;
} else {
}
break;
}

var c__12107__auto___14741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_14742 = state_12332__$1;
(statearr_12334_14742[(2)] = inst_12328);

(statearr_12334_14742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_14743 = state_12332__$1;
(statearr_12335_14743[(2)] = null);

(statearr_12335_14743[(1)] = (2));


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
var statearr_12337_14745 = state_12332__$1;
(statearr_12337_14745[(1)] = (5));

} else {
var statearr_12338_14746 = state_12332__$1;
(statearr_12338_14746[(1)] = (6));

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
var statearr_12341_14748 = state_12332__$1;
(statearr_12341_14748[(2)] = null);

(statearr_12341_14748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_14749 = state_12332__$1;
(statearr_12342_14749[(2)] = inst_12316);

(statearr_12342_14749[(1)] = (7));


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
var statearr_12346_14752 = state_12332;
(statearr_12346_14752[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_14753 = state_12332;
(statearr_12347_14753[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14754 = state_12332;
state_12332 = G__14754;
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
(statearr_12348[(6)] = c__12107__auto___14741);

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
var statearr_12388_14756 = state_12386__$1;
(statearr_12388_14756[(2)] = inst_12382);

(statearr_12388_14756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (20))){
var state_12386__$1 = state_12386;
var statearr_12389_14757 = state_12386__$1;
(statearr_12389_14757[(2)] = null);

(statearr_12389_14757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (1))){
var state_12386__$1 = state_12386;
var statearr_12390_14758 = state_12386__$1;
(statearr_12390_14758[(2)] = null);

(statearr_12390_14758[(1)] = (2));


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
var statearr_12392_14760 = state_12386__$1;
(statearr_12392_14760[(1)] = (5));

} else {
var statearr_12393_14761 = state_12386__$1;
(statearr_12393_14761[(1)] = (6));

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
var statearr_12394_14762 = state_12386__$1;
(statearr_12394_14762[(2)] = inst_12377);

(statearr_12394_14762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (13))){
var inst_12379 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12395 = state_12386;
(statearr_12395[(9)] = inst_12379);

return statearr_12395;
})();
var statearr_12396_14763 = state_12386__$1;
(statearr_12396_14763[(2)] = null);

(statearr_12396_14763[(1)] = (2));


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
var statearr_12397_14764 = state_12386__$1;
(statearr_12397_14764[(1)] = (19));

} else {
var statearr_12398_14765 = state_12386__$1;
(statearr_12398_14765[(1)] = (20));

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
var statearr_12408_14766 = state_12386__$1;
(statearr_12408_14766[(2)] = null);

(statearr_12408_14766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (11))){
var inst_12361 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12409 = state_12386;
(statearr_12409[(10)] = inst_12361);

return statearr_12409;
})();
var statearr_12410_14767 = state_12386__$1;
(statearr_12410_14767[(2)] = null);

(statearr_12410_14767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12411_14768 = state_12386__$1;
(statearr_12411_14768[(2)] = null);

(statearr_12411_14768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12412_14769 = state_12386__$1;
(statearr_12412_14769[(1)] = (8));

} else {
var statearr_12413_14770 = state_12386__$1;
(statearr_12413_14770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (14))){
var inst_12364 = (state_12386[(8)]);
var inst_12364__$1 = (state_12386[(2)]);
var inst_12365 = (inst_12364__$1 == null);
var inst_12366 = cljs.core.not(inst_12365);
var state_12386__$1 = (function (){var statearr_12414 = state_12386;
(statearr_12414[(8)] = inst_12364__$1);

return statearr_12414;
})();
if(inst_12366){
var statearr_12415_14771 = state_12386__$1;
(statearr_12415_14771[(1)] = (15));

} else {
var statearr_12416_14772 = state_12386__$1;
(statearr_12416_14772[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12417_14773 = state_12386__$1;
(statearr_12417_14773[(2)] = false);

(statearr_12417_14773[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12418_14774 = state_12386__$1;
(statearr_12418_14774[(2)] = inst_12358);

(statearr_12418_14774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12419_14775 = state_12386__$1;
(statearr_12419_14775[(2)] = inst_12369);

(statearr_12419_14775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12420_14776 = state_12386__$1;
(statearr_12420_14776[(2)] = inst_12355);

(statearr_12420_14776[(1)] = (10));


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
}catch (e12422){var ex__12075__auto__ = e12422;
var statearr_12423_14777 = state_12386;
(statearr_12423_14777[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12424_14778 = state_12386;
(statearr_12424_14778[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14779 = state_12386;
state_12386 = G__14779;
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
var G__12432 = arguments.length;
switch (G__12432) {
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
var c__12107__auto___14783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12458){
var state_val_12459 = (state_12458[(1)]);
if((state_val_12459 === (7))){
var inst_12454 = (state_12458[(2)]);
var state_12458__$1 = state_12458;
var statearr_12461_14784 = state_12458__$1;
(statearr_12461_14784[(2)] = inst_12454);

(statearr_12461_14784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (1))){
var state_12458__$1 = state_12458;
var statearr_12464_14785 = state_12458__$1;
(statearr_12464_14785[(2)] = null);

(statearr_12464_14785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (4))){
var inst_12435 = (state_12458[(7)]);
var inst_12435__$1 = (state_12458[(2)]);
var inst_12436 = (inst_12435__$1 == null);
var state_12458__$1 = (function (){var statearr_12466 = state_12458;
(statearr_12466[(7)] = inst_12435__$1);

return statearr_12466;
})();
if(cljs.core.truth_(inst_12436)){
var statearr_12467_14786 = state_12458__$1;
(statearr_12467_14786[(1)] = (5));

} else {
var statearr_12468_14787 = state_12458__$1;
(statearr_12468_14787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (13))){
var state_12458__$1 = state_12458;
var statearr_12469_14789 = state_12458__$1;
(statearr_12469_14789[(2)] = null);

(statearr_12469_14789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (6))){
var inst_12435 = (state_12458[(7)]);
var inst_12441 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12435) : p.call(null,inst_12435));
var state_12458__$1 = state_12458;
if(cljs.core.truth_(inst_12441)){
var statearr_12470_14790 = state_12458__$1;
(statearr_12470_14790[(1)] = (9));

} else {
var statearr_12471_14791 = state_12458__$1;
(statearr_12471_14791[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (3))){
var inst_12456 = (state_12458[(2)]);
var state_12458__$1 = state_12458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12458__$1,inst_12456);
} else {
if((state_val_12459 === (12))){
var state_12458__$1 = state_12458;
var statearr_12472_14792 = state_12458__$1;
(statearr_12472_14792[(2)] = null);

(statearr_12472_14792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (2))){
var state_12458__$1 = state_12458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12458__$1,(4),ch);
} else {
if((state_val_12459 === (11))){
var inst_12435 = (state_12458[(7)]);
var inst_12445 = (state_12458[(2)]);
var state_12458__$1 = state_12458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12458__$1,(8),inst_12445,inst_12435);
} else {
if((state_val_12459 === (9))){
var state_12458__$1 = state_12458;
var statearr_12473_14794 = state_12458__$1;
(statearr_12473_14794[(2)] = tc);

(statearr_12473_14794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (5))){
var inst_12438 = cljs.core.async.close_BANG_(tc);
var inst_12439 = cljs.core.async.close_BANG_(fc);
var state_12458__$1 = (function (){var statearr_12474 = state_12458;
(statearr_12474[(8)] = inst_12438);

return statearr_12474;
})();
var statearr_12475_14795 = state_12458__$1;
(statearr_12475_14795[(2)] = inst_12439);

(statearr_12475_14795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (14))){
var inst_12452 = (state_12458[(2)]);
var state_12458__$1 = state_12458;
var statearr_12476_14797 = state_12458__$1;
(statearr_12476_14797[(2)] = inst_12452);

(statearr_12476_14797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (10))){
var state_12458__$1 = state_12458;
var statearr_12477_14798 = state_12458__$1;
(statearr_12477_14798[(2)] = fc);

(statearr_12477_14798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12459 === (8))){
var inst_12447 = (state_12458[(2)]);
var state_12458__$1 = state_12458;
if(cljs.core.truth_(inst_12447)){
var statearr_12478_14799 = state_12458__$1;
(statearr_12478_14799[(1)] = (12));

} else {
var statearr_12479_14800 = state_12458__$1;
(statearr_12479_14800[(1)] = (13));

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
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12458){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12458);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12481){var ex__12075__auto__ = e12481;
var statearr_12482_14801 = state_12458;
(statearr_12482_14801[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12458[(4)]))){
var statearr_12483_14802 = state_12458;
(statearr_12483_14802[(1)] = cljs.core.first((state_12458[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14803 = state_12458;
state_12458 = G__14803;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12484 = f__12108__auto__();
(statearr_12484[(6)] = c__12107__auto___14783);

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
var statearr_12508_14805 = state_12506__$1;
(statearr_12508_14805[(2)] = inst_12502);

(statearr_12508_14805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (1))){
var inst_12485 = init;
var inst_12486 = inst_12485;
var state_12506__$1 = (function (){var statearr_12509 = state_12506;
(statearr_12509[(7)] = inst_12486);

return statearr_12509;
})();
var statearr_12510_14807 = state_12506__$1;
(statearr_12510_14807[(2)] = null);

(statearr_12510_14807[(1)] = (2));


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
var statearr_12512_14808 = state_12506__$1;
(statearr_12512_14808[(1)] = (5));

} else {
var statearr_12513_14809 = state_12506__$1;
(statearr_12513_14809[(1)] = (6));

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
var statearr_12515_14810 = state_12506__$1;
(statearr_12515_14810[(1)] = (8));

} else {
var statearr_12516_14811 = state_12506__$1;
(statearr_12516_14811[(1)] = (9));

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
var statearr_12518_14812 = state_12506__$1;
(statearr_12518_14812[(2)] = null);

(statearr_12518_14812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (5))){
var inst_12486 = (state_12506[(7)]);
var state_12506__$1 = state_12506;
var statearr_12519_14813 = state_12506__$1;
(statearr_12519_14813[(2)] = inst_12486);

(statearr_12519_14813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (10))){
var inst_12500 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
var statearr_12520_14814 = state_12506__$1;
(statearr_12520_14814[(2)] = inst_12500);

(statearr_12520_14814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (8))){
var inst_12493 = (state_12506[(9)]);
var inst_12496 = cljs.core.deref(inst_12493);
var state_12506__$1 = state_12506;
var statearr_12521_14815 = state_12506__$1;
(statearr_12521_14815[(2)] = inst_12496);

(statearr_12521_14815[(1)] = (10));


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
var statearr_12524_14816 = state_12506;
(statearr_12524_14816[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12506[(4)]))){
var statearr_12525_14817 = state_12506;
(statearr_12525_14817[(1)] = cljs.core.first((state_12506[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14818 = state_12506;
state_12506 = G__14818;
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
var statearr_12536_14819 = state_12532;
(statearr_12536_14819[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12532[(4)]))){
var statearr_12537_14820 = state_12532;
(statearr_12537_14820[(1)] = cljs.core.first((state_12532[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14821 = state_12532;
state_12532 = G__14821;
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
var statearr_12567_14827 = state_12565__$1;
(statearr_12567_14827[(2)] = inst_12547);

(statearr_12567_14827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (1))){
var inst_12541 = cljs.core.seq(coll);
var inst_12542 = inst_12541;
var state_12565__$1 = (function (){var statearr_12568 = state_12565;
(statearr_12568[(7)] = inst_12542);

return statearr_12568;
})();
var statearr_12569_14828 = state_12565__$1;
(statearr_12569_14828[(2)] = null);

(statearr_12569_14828[(1)] = (2));


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
var statearr_12570_14829 = state_12565__$1;
(statearr_12570_14829[(2)] = inst_12559);

(statearr_12570_14829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (6))){
var inst_12550 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12550)){
var statearr_12571_14831 = state_12565__$1;
(statearr_12571_14831[(1)] = (8));

} else {
var statearr_12572_14832 = state_12565__$1;
(statearr_12572_14832[(1)] = (9));

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
var statearr_12573_14833 = state_12565__$1;
(statearr_12573_14833[(2)] = null);

(statearr_12573_14833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (2))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12542)){
var statearr_12574_14834 = state_12565__$1;
(statearr_12574_14834[(1)] = (4));

} else {
var statearr_12575_14836 = state_12565__$1;
(statearr_12575_14836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (11))){
var inst_12556 = cljs.core.async.close_BANG_(ch);
var state_12565__$1 = state_12565;
var statearr_12576_14837 = state_12565__$1;
(statearr_12576_14837[(2)] = inst_12556);

(statearr_12576_14837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (9))){
var state_12565__$1 = state_12565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12577_14838 = state_12565__$1;
(statearr_12577_14838[(1)] = (11));

} else {
var statearr_12578_14839 = state_12565__$1;
(statearr_12578_14839[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (5))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
var statearr_12579_14841 = state_12565__$1;
(statearr_12579_14841[(2)] = inst_12542);

(statearr_12579_14841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (10))){
var inst_12561 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
var statearr_12580_14842 = state_12565__$1;
(statearr_12580_14842[(2)] = inst_12561);

(statearr_12580_14842[(1)] = (3));


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
var statearr_12582_14843 = state_12565__$1;
(statearr_12582_14843[(2)] = null);

(statearr_12582_14843[(1)] = (2));


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
var statearr_12585_14844 = state_12565;
(statearr_12585_14844[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12565[(4)]))){
var statearr_12586_14845 = state_12565;
(statearr_12586_14845[(1)] = cljs.core.first((state_12565[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14846 = state_12565;
state_12565 = G__14846;
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
var G__12593 = arguments.length;
switch (G__12593) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14848 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14848(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14849 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14849(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14850 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14850(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14851 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14851(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12613 = (function (ch,cs,meta12614){
this.ch = ch;
this.cs = cs;
this.meta12614 = meta12614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12615,meta12614__$1){
var self__ = this;
var _12615__$1 = this;
return (new cljs.core.async.t_cljs$core$async12613(self__.ch,self__.cs,meta12614__$1));
}));

(cljs.core.async.t_cljs$core$async12613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12615){
var self__ = this;
var _12615__$1 = this;
return self__.meta12614;
}));

(cljs.core.async.t_cljs$core$async12613.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12613.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12613.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12613.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12613.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12614","meta12614",-488905215,null)], null);
}));

(cljs.core.async.t_cljs$core$async12613.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12613");

(cljs.core.async.t_cljs$core$async12613.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12613");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12613.
 */
cljs.core.async.__GT_t_cljs$core$async12613 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12613(ch__$1,cs__$1,meta12614){
return (new cljs.core.async.t_cljs$core$async12613(ch__$1,cs__$1,meta12614));
});

}

return (new cljs.core.async.t_cljs$core$async12613(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12107__auto___14856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12759){
var state_val_12761 = (state_12759[(1)]);
if((state_val_12761 === (7))){
var inst_12748 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12762_14857 = state_12759__$1;
(statearr_12762_14857[(2)] = inst_12748);

(statearr_12762_14857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (20))){
var inst_12652 = (state_12759[(7)]);
var inst_12664 = cljs.core.first(inst_12652);
var inst_12665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12664,(0),null);
var inst_12666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12664,(1),null);
var state_12759__$1 = (function (){var statearr_12763 = state_12759;
(statearr_12763[(8)] = inst_12665);

return statearr_12763;
})();
if(cljs.core.truth_(inst_12666)){
var statearr_12764_14859 = state_12759__$1;
(statearr_12764_14859[(1)] = (22));

} else {
var statearr_12765_14860 = state_12759__$1;
(statearr_12765_14860[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (27))){
var inst_12621 = (state_12759[(9)]);
var inst_12694 = (state_12759[(10)]);
var inst_12696 = (state_12759[(11)]);
var inst_12701 = (state_12759[(12)]);
var inst_12701__$1 = cljs.core._nth(inst_12694,inst_12696);
var inst_12702 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12701__$1,inst_12621,done);
var state_12759__$1 = (function (){var statearr_12769 = state_12759;
(statearr_12769[(12)] = inst_12701__$1);

return statearr_12769;
})();
if(cljs.core.truth_(inst_12702)){
var statearr_12770_14861 = state_12759__$1;
(statearr_12770_14861[(1)] = (30));

} else {
var statearr_12771_14863 = state_12759__$1;
(statearr_12771_14863[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (1))){
var state_12759__$1 = state_12759;
var statearr_12772_14864 = state_12759__$1;
(statearr_12772_14864[(2)] = null);

(statearr_12772_14864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (24))){
var inst_12652 = (state_12759[(7)]);
var inst_12671 = (state_12759[(2)]);
var inst_12672 = cljs.core.next(inst_12652);
var inst_12630 = inst_12672;
var inst_12631 = null;
var inst_12632 = (0);
var inst_12633 = (0);
var state_12759__$1 = (function (){var statearr_12773 = state_12759;
(statearr_12773[(13)] = inst_12630);

(statearr_12773[(14)] = inst_12633);

(statearr_12773[(15)] = inst_12671);

(statearr_12773[(16)] = inst_12632);

(statearr_12773[(17)] = inst_12631);

return statearr_12773;
})();
var statearr_12774_14865 = state_12759__$1;
(statearr_12774_14865[(2)] = null);

(statearr_12774_14865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (39))){
var state_12759__$1 = state_12759;
var statearr_12778_14867 = state_12759__$1;
(statearr_12778_14867[(2)] = null);

(statearr_12778_14867[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (4))){
var inst_12621 = (state_12759[(9)]);
var inst_12621__$1 = (state_12759[(2)]);
var inst_12622 = (inst_12621__$1 == null);
var state_12759__$1 = (function (){var statearr_12779 = state_12759;
(statearr_12779[(9)] = inst_12621__$1);

return statearr_12779;
})();
if(cljs.core.truth_(inst_12622)){
var statearr_12780_14868 = state_12759__$1;
(statearr_12780_14868[(1)] = (5));

} else {
var statearr_12781_14869 = state_12759__$1;
(statearr_12781_14869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (15))){
var inst_12630 = (state_12759[(13)]);
var inst_12633 = (state_12759[(14)]);
var inst_12632 = (state_12759[(16)]);
var inst_12631 = (state_12759[(17)]);
var inst_12648 = (state_12759[(2)]);
var inst_12649 = (inst_12633 + (1));
var tmp12775 = inst_12630;
var tmp12776 = inst_12632;
var tmp12777 = inst_12631;
var inst_12630__$1 = tmp12775;
var inst_12631__$1 = tmp12777;
var inst_12632__$1 = tmp12776;
var inst_12633__$1 = inst_12649;
var state_12759__$1 = (function (){var statearr_12782 = state_12759;
(statearr_12782[(18)] = inst_12648);

(statearr_12782[(13)] = inst_12630__$1);

(statearr_12782[(14)] = inst_12633__$1);

(statearr_12782[(16)] = inst_12632__$1);

(statearr_12782[(17)] = inst_12631__$1);

return statearr_12782;
})();
var statearr_12783_14891 = state_12759__$1;
(statearr_12783_14891[(2)] = null);

(statearr_12783_14891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (21))){
var inst_12675 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12787_14892 = state_12759__$1;
(statearr_12787_14892[(2)] = inst_12675);

(statearr_12787_14892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (31))){
var inst_12701 = (state_12759[(12)]);
var inst_12705 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12701);
var state_12759__$1 = state_12759;
var statearr_12788_14893 = state_12759__$1;
(statearr_12788_14893[(2)] = inst_12705);

(statearr_12788_14893[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (32))){
var inst_12695 = (state_12759[(19)]);
var inst_12693 = (state_12759[(20)]);
var inst_12694 = (state_12759[(10)]);
var inst_12696 = (state_12759[(11)]);
var inst_12708 = (state_12759[(2)]);
var inst_12709 = (inst_12696 + (1));
var tmp12784 = inst_12695;
var tmp12785 = inst_12693;
var tmp12786 = inst_12694;
var inst_12693__$1 = tmp12785;
var inst_12694__$1 = tmp12786;
var inst_12695__$1 = tmp12784;
var inst_12696__$1 = inst_12709;
var state_12759__$1 = (function (){var statearr_12790 = state_12759;
(statearr_12790[(19)] = inst_12695__$1);

(statearr_12790[(20)] = inst_12693__$1);

(statearr_12790[(10)] = inst_12694__$1);

(statearr_12790[(11)] = inst_12696__$1);

(statearr_12790[(21)] = inst_12708);

return statearr_12790;
})();
var statearr_12798_14894 = state_12759__$1;
(statearr_12798_14894[(2)] = null);

(statearr_12798_14894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (40))){
var inst_12721 = (state_12759[(22)]);
var inst_12725 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12721);
var state_12759__$1 = state_12759;
var statearr_12799_14899 = state_12759__$1;
(statearr_12799_14899[(2)] = inst_12725);

(statearr_12799_14899[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (33))){
var inst_12712 = (state_12759[(23)]);
var inst_12714 = cljs.core.chunked_seq_QMARK_(inst_12712);
var state_12759__$1 = state_12759;
if(inst_12714){
var statearr_12800_14902 = state_12759__$1;
(statearr_12800_14902[(1)] = (36));

} else {
var statearr_12801_14903 = state_12759__$1;
(statearr_12801_14903[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (13))){
var inst_12642 = (state_12759[(24)]);
var inst_12645 = cljs.core.async.close_BANG_(inst_12642);
var state_12759__$1 = state_12759;
var statearr_12802_14904 = state_12759__$1;
(statearr_12802_14904[(2)] = inst_12645);

(statearr_12802_14904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (22))){
var inst_12665 = (state_12759[(8)]);
var inst_12668 = cljs.core.async.close_BANG_(inst_12665);
var state_12759__$1 = state_12759;
var statearr_12803_14905 = state_12759__$1;
(statearr_12803_14905[(2)] = inst_12668);

(statearr_12803_14905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (36))){
var inst_12712 = (state_12759[(23)]);
var inst_12716 = cljs.core.chunk_first(inst_12712);
var inst_12717 = cljs.core.chunk_rest(inst_12712);
var inst_12718 = cljs.core.count(inst_12716);
var inst_12693 = inst_12717;
var inst_12694 = inst_12716;
var inst_12695 = inst_12718;
var inst_12696 = (0);
var state_12759__$1 = (function (){var statearr_12804 = state_12759;
(statearr_12804[(19)] = inst_12695);

(statearr_12804[(20)] = inst_12693);

(statearr_12804[(10)] = inst_12694);

(statearr_12804[(11)] = inst_12696);

return statearr_12804;
})();
var statearr_12805_14908 = state_12759__$1;
(statearr_12805_14908[(2)] = null);

(statearr_12805_14908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (41))){
var inst_12712 = (state_12759[(23)]);
var inst_12727 = (state_12759[(2)]);
var inst_12728 = cljs.core.next(inst_12712);
var inst_12693 = inst_12728;
var inst_12694 = null;
var inst_12695 = (0);
var inst_12696 = (0);
var state_12759__$1 = (function (){var statearr_12806 = state_12759;
(statearr_12806[(19)] = inst_12695);

(statearr_12806[(20)] = inst_12693);

(statearr_12806[(10)] = inst_12694);

(statearr_12806[(11)] = inst_12696);

(statearr_12806[(25)] = inst_12727);

return statearr_12806;
})();
var statearr_12807_14911 = state_12759__$1;
(statearr_12807_14911[(2)] = null);

(statearr_12807_14911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (43))){
var state_12759__$1 = state_12759;
var statearr_12808_14914 = state_12759__$1;
(statearr_12808_14914[(2)] = null);

(statearr_12808_14914[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (29))){
var inst_12736 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12809_14918 = state_12759__$1;
(statearr_12809_14918[(2)] = inst_12736);

(statearr_12809_14918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (44))){
var inst_12745 = (state_12759[(2)]);
var state_12759__$1 = (function (){var statearr_12810 = state_12759;
(statearr_12810[(26)] = inst_12745);

return statearr_12810;
})();
var statearr_12811_14919 = state_12759__$1;
(statearr_12811_14919[(2)] = null);

(statearr_12811_14919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (6))){
var inst_12685 = (state_12759[(27)]);
var inst_12684 = cljs.core.deref(cs);
var inst_12685__$1 = cljs.core.keys(inst_12684);
var inst_12686 = cljs.core.count(inst_12685__$1);
var inst_12687 = cljs.core.reset_BANG_(dctr,inst_12686);
var inst_12692 = cljs.core.seq(inst_12685__$1);
var inst_12693 = inst_12692;
var inst_12694 = null;
var inst_12695 = (0);
var inst_12696 = (0);
var state_12759__$1 = (function (){var statearr_12812 = state_12759;
(statearr_12812[(19)] = inst_12695);

(statearr_12812[(20)] = inst_12693);

(statearr_12812[(10)] = inst_12694);

(statearr_12812[(27)] = inst_12685__$1);

(statearr_12812[(28)] = inst_12687);

(statearr_12812[(11)] = inst_12696);

return statearr_12812;
})();
var statearr_12813_14944 = state_12759__$1;
(statearr_12813_14944[(2)] = null);

(statearr_12813_14944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (28))){
var inst_12712 = (state_12759[(23)]);
var inst_12693 = (state_12759[(20)]);
var inst_12712__$1 = cljs.core.seq(inst_12693);
var state_12759__$1 = (function (){var statearr_12814 = state_12759;
(statearr_12814[(23)] = inst_12712__$1);

return statearr_12814;
})();
if(inst_12712__$1){
var statearr_12815_14947 = state_12759__$1;
(statearr_12815_14947[(1)] = (33));

} else {
var statearr_12816_14948 = state_12759__$1;
(statearr_12816_14948[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (25))){
var inst_12695 = (state_12759[(19)]);
var inst_12696 = (state_12759[(11)]);
var inst_12698 = (inst_12696 < inst_12695);
var inst_12699 = inst_12698;
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12699)){
var statearr_12817_14951 = state_12759__$1;
(statearr_12817_14951[(1)] = (27));

} else {
var statearr_12818_14954 = state_12759__$1;
(statearr_12818_14954[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (34))){
var state_12759__$1 = state_12759;
var statearr_12819_14955 = state_12759__$1;
(statearr_12819_14955[(2)] = null);

(statearr_12819_14955[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (17))){
var state_12759__$1 = state_12759;
var statearr_12820_14956 = state_12759__$1;
(statearr_12820_14956[(2)] = null);

(statearr_12820_14956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (3))){
var inst_12750 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12759__$1,inst_12750);
} else {
if((state_val_12761 === (12))){
var inst_12680 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12821_14959 = state_12759__$1;
(statearr_12821_14959[(2)] = inst_12680);

(statearr_12821_14959[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (2))){
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12759__$1,(4),ch);
} else {
if((state_val_12761 === (23))){
var state_12759__$1 = state_12759;
var statearr_12824_14964 = state_12759__$1;
(statearr_12824_14964[(2)] = null);

(statearr_12824_14964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (35))){
var inst_12734 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12828_14966 = state_12759__$1;
(statearr_12828_14966[(2)] = inst_12734);

(statearr_12828_14966[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (19))){
var inst_12652 = (state_12759[(7)]);
var inst_12656 = cljs.core.chunk_first(inst_12652);
var inst_12657 = cljs.core.chunk_rest(inst_12652);
var inst_12658 = cljs.core.count(inst_12656);
var inst_12630 = inst_12657;
var inst_12631 = inst_12656;
var inst_12632 = inst_12658;
var inst_12633 = (0);
var state_12759__$1 = (function (){var statearr_12830 = state_12759;
(statearr_12830[(13)] = inst_12630);

(statearr_12830[(14)] = inst_12633);

(statearr_12830[(16)] = inst_12632);

(statearr_12830[(17)] = inst_12631);

return statearr_12830;
})();
var statearr_12831_14973 = state_12759__$1;
(statearr_12831_14973[(2)] = null);

(statearr_12831_14973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (11))){
var inst_12630 = (state_12759[(13)]);
var inst_12652 = (state_12759[(7)]);
var inst_12652__$1 = cljs.core.seq(inst_12630);
var state_12759__$1 = (function (){var statearr_12838 = state_12759;
(statearr_12838[(7)] = inst_12652__$1);

return statearr_12838;
})();
if(inst_12652__$1){
var statearr_12839_14974 = state_12759__$1;
(statearr_12839_14974[(1)] = (16));

} else {
var statearr_12840_14977 = state_12759__$1;
(statearr_12840_14977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (9))){
var inst_12682 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12841_14978 = state_12759__$1;
(statearr_12841_14978[(2)] = inst_12682);

(statearr_12841_14978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (5))){
var inst_12628 = cljs.core.deref(cs);
var inst_12629 = cljs.core.seq(inst_12628);
var inst_12630 = inst_12629;
var inst_12631 = null;
var inst_12632 = (0);
var inst_12633 = (0);
var state_12759__$1 = (function (){var statearr_12842 = state_12759;
(statearr_12842[(13)] = inst_12630);

(statearr_12842[(14)] = inst_12633);

(statearr_12842[(16)] = inst_12632);

(statearr_12842[(17)] = inst_12631);

return statearr_12842;
})();
var statearr_12843_14981 = state_12759__$1;
(statearr_12843_14981[(2)] = null);

(statearr_12843_14981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (14))){
var state_12759__$1 = state_12759;
var statearr_12846_14983 = state_12759__$1;
(statearr_12846_14983[(2)] = null);

(statearr_12846_14983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (45))){
var inst_12742 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12848_14984 = state_12759__$1;
(statearr_12848_14984[(2)] = inst_12742);

(statearr_12848_14984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (26))){
var inst_12685 = (state_12759[(27)]);
var inst_12738 = (state_12759[(2)]);
var inst_12739 = cljs.core.seq(inst_12685);
var state_12759__$1 = (function (){var statearr_12851 = state_12759;
(statearr_12851[(29)] = inst_12738);

return statearr_12851;
})();
if(inst_12739){
var statearr_12852_14985 = state_12759__$1;
(statearr_12852_14985[(1)] = (42));

} else {
var statearr_12854_14986 = state_12759__$1;
(statearr_12854_14986[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (16))){
var inst_12652 = (state_12759[(7)]);
var inst_12654 = cljs.core.chunked_seq_QMARK_(inst_12652);
var state_12759__$1 = state_12759;
if(inst_12654){
var statearr_12855_15013 = state_12759__$1;
(statearr_12855_15013[(1)] = (19));

} else {
var statearr_12856_15014 = state_12759__$1;
(statearr_12856_15014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (38))){
var inst_12731 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12857_15017 = state_12759__$1;
(statearr_12857_15017[(2)] = inst_12731);

(statearr_12857_15017[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (30))){
var state_12759__$1 = state_12759;
var statearr_12858_15022 = state_12759__$1;
(statearr_12858_15022[(2)] = null);

(statearr_12858_15022[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (10))){
var inst_12633 = (state_12759[(14)]);
var inst_12631 = (state_12759[(17)]);
var inst_12641 = cljs.core._nth(inst_12631,inst_12633);
var inst_12642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12641,(0),null);
var inst_12643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12641,(1),null);
var state_12759__$1 = (function (){var statearr_12861 = state_12759;
(statearr_12861[(24)] = inst_12642);

return statearr_12861;
})();
if(cljs.core.truth_(inst_12643)){
var statearr_12863_15024 = state_12759__$1;
(statearr_12863_15024[(1)] = (13));

} else {
var statearr_12864_15025 = state_12759__$1;
(statearr_12864_15025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (18))){
var inst_12678 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12868_15027 = state_12759__$1;
(statearr_12868_15027[(2)] = inst_12678);

(statearr_12868_15027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (42))){
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12759__$1,(45),dchan);
} else {
if((state_val_12761 === (37))){
var inst_12712 = (state_12759[(23)]);
var inst_12721 = (state_12759[(22)]);
var inst_12621 = (state_12759[(9)]);
var inst_12721__$1 = cljs.core.first(inst_12712);
var inst_12722 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12721__$1,inst_12621,done);
var state_12759__$1 = (function (){var statearr_12869 = state_12759;
(statearr_12869[(22)] = inst_12721__$1);

return statearr_12869;
})();
if(cljs.core.truth_(inst_12722)){
var statearr_12889_15030 = state_12759__$1;
(statearr_12889_15030[(1)] = (39));

} else {
var statearr_12890_15031 = state_12759__$1;
(statearr_12890_15031[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (8))){
var inst_12633 = (state_12759[(14)]);
var inst_12632 = (state_12759[(16)]);
var inst_12635 = (inst_12633 < inst_12632);
var inst_12636 = inst_12635;
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12636)){
var statearr_12894_15033 = state_12759__$1;
(statearr_12894_15033[(1)] = (10));

} else {
var statearr_12896_15034 = state_12759__$1;
(statearr_12896_15034[(1)] = (11));

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
var statearr_12898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12898[(0)] = cljs$core$async$mult_$_state_machine__12072__auto__);

(statearr_12898[(1)] = (1));

return statearr_12898;
});
var cljs$core$async$mult_$_state_machine__12072__auto____1 = (function (state_12759){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12759);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12904){var ex__12075__auto__ = e12904;
var statearr_12907_15044 = state_12759;
(statearr_12907_15044[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12759[(4)]))){
var statearr_12909_15045 = state_12759;
(statearr_12909_15045[(1)] = cljs.core.first((state_12759[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15046 = state_12759;
state_12759 = G__15046;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12072__auto__ = function(state_12759){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12072__auto____1.call(this,state_12759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12072__auto____0;
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12072__auto____1;
return cljs$core$async$mult_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12915 = f__12108__auto__();
(statearr_12915[(6)] = c__12107__auto___14856);

return statearr_12915;
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
var G__12981 = arguments.length;
switch (G__12981) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_15051 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_15051(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_15057 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_15057(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_15063 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_15063(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_15093 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_15093(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_15098 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_15098(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15105 = arguments.length;
var i__4737__auto___15106 = (0);
while(true){
if((i__4737__auto___15106 < len__4736__auto___15105)){
args__4742__auto__.push((arguments[i__4737__auto___15106]));

var G__15108 = (i__4737__auto___15106 + (1));
i__4737__auto___15106 = G__15108;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13155){
var map__13156 = p__13155;
var map__13156__$1 = (((((!((map__13156 == null))))?(((((map__13156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13156):map__13156);
var opts = map__13156__$1;
var statearr_13158_15115 = state;
(statearr_13158_15115[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_13159_15116 = state;
(statearr_13159_15116[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_13160_15117 = state;
(statearr_13160_15117[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13151){
var G__13152 = cljs.core.first(seq13151);
var seq13151__$1 = cljs.core.next(seq13151);
var G__13153 = cljs.core.first(seq13151__$1);
var seq13151__$2 = cljs.core.next(seq13151__$1);
var G__13154 = cljs.core.first(seq13151__$2);
var seq13151__$3 = cljs.core.next(seq13151__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13152,G__13153,G__13154,seq13151__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13191 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13192){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13192 = meta13192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13193,meta13192__$1){
var self__ = this;
var _13193__$1 = this;
return (new cljs.core.async.t_cljs$core$async13191(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13192__$1));
}));

(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13193){
var self__ = this;
var _13193__$1 = this;
return self__.meta13192;
}));

(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13191.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13192","meta13192",-1339616439,null)], null);
}));

(cljs.core.async.t_cljs$core$async13191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13191");

(cljs.core.async.t_cljs$core$async13191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13191.
 */
cljs.core.async.__GT_t_cljs$core$async13191 = (function cljs$core$async$mix_$___GT_t_cljs$core$async13191(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13192){
return (new cljs.core.async.t_cljs$core$async13191(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13192));
});

}

return (new cljs.core.async.t_cljs$core$async13191(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___15182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13348){
var state_val_13349 = (state_13348[(1)]);
if((state_val_13349 === (7))){
var inst_13240 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
var statearr_13350_15183 = state_13348__$1;
(statearr_13350_15183[(2)] = inst_13240);

(statearr_13350_15183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (20))){
var inst_13252 = (state_13348[(7)]);
var state_13348__$1 = state_13348;
var statearr_13351_15184 = state_13348__$1;
(statearr_13351_15184[(2)] = inst_13252);

(statearr_13351_15184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (27))){
var state_13348__$1 = state_13348;
var statearr_13352_15185 = state_13348__$1;
(statearr_13352_15185[(2)] = null);

(statearr_13352_15185[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (1))){
var inst_13227 = (state_13348[(8)]);
var inst_13227__$1 = calc_state();
var inst_13229 = (inst_13227__$1 == null);
var inst_13230 = cljs.core.not(inst_13229);
var state_13348__$1 = (function (){var statearr_13353 = state_13348;
(statearr_13353[(8)] = inst_13227__$1);

return statearr_13353;
})();
if(inst_13230){
var statearr_13354_15186 = state_13348__$1;
(statearr_13354_15186[(1)] = (2));

} else {
var statearr_13355_15187 = state_13348__$1;
(statearr_13355_15187[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (24))){
var inst_13276 = (state_13348[(9)]);
var inst_13285 = (state_13348[(10)]);
var inst_13322 = (state_13348[(11)]);
var inst_13322__$1 = (inst_13276.cljs$core$IFn$_invoke$arity$1 ? inst_13276.cljs$core$IFn$_invoke$arity$1(inst_13285) : inst_13276.call(null,inst_13285));
var state_13348__$1 = (function (){var statearr_13356 = state_13348;
(statearr_13356[(11)] = inst_13322__$1);

return statearr_13356;
})();
if(cljs.core.truth_(inst_13322__$1)){
var statearr_13357_15188 = state_13348__$1;
(statearr_13357_15188[(1)] = (29));

} else {
var statearr_13358_15189 = state_13348__$1;
(statearr_13358_15189[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (4))){
var inst_13243 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
if(cljs.core.truth_(inst_13243)){
var statearr_13359_15190 = state_13348__$1;
(statearr_13359_15190[(1)] = (8));

} else {
var statearr_13360_15191 = state_13348__$1;
(statearr_13360_15191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (15))){
var inst_13270 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
if(cljs.core.truth_(inst_13270)){
var statearr_13431_15192 = state_13348__$1;
(statearr_13431_15192[(1)] = (19));

} else {
var statearr_13433_15193 = state_13348__$1;
(statearr_13433_15193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (21))){
var inst_13275 = (state_13348[(12)]);
var inst_13275__$1 = (state_13348[(2)]);
var inst_13276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13275__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13275__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13275__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13348__$1 = (function (){var statearr_13462 = state_13348;
(statearr_13462[(9)] = inst_13276);

(statearr_13462[(12)] = inst_13275__$1);

(statearr_13462[(13)] = inst_13277);

return statearr_13462;
})();
return cljs.core.async.ioc_alts_BANG_(state_13348__$1,(22),inst_13278);
} else {
if((state_val_13349 === (31))){
var inst_13330 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
if(cljs.core.truth_(inst_13330)){
var statearr_13469_15194 = state_13348__$1;
(statearr_13469_15194[(1)] = (32));

} else {
var statearr_13470_15195 = state_13348__$1;
(statearr_13470_15195[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (32))){
var inst_13284 = (state_13348[(14)]);
var state_13348__$1 = state_13348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13348__$1,(35),out,inst_13284);
} else {
if((state_val_13349 === (33))){
var inst_13275 = (state_13348[(12)]);
var inst_13252 = inst_13275;
var state_13348__$1 = (function (){var statearr_13483 = state_13348;
(statearr_13483[(7)] = inst_13252);

return statearr_13483;
})();
var statearr_13484_15196 = state_13348__$1;
(statearr_13484_15196[(2)] = null);

(statearr_13484_15196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (13))){
var inst_13252 = (state_13348[(7)]);
var inst_13259 = inst_13252.cljs$lang$protocol_mask$partition0$;
var inst_13260 = (inst_13259 & (64));
var inst_13261 = inst_13252.cljs$core$ISeq$;
var inst_13262 = (cljs.core.PROTOCOL_SENTINEL === inst_13261);
var inst_13263 = ((inst_13260) || (inst_13262));
var state_13348__$1 = state_13348;
if(cljs.core.truth_(inst_13263)){
var statearr_13485_15197 = state_13348__$1;
(statearr_13485_15197[(1)] = (16));

} else {
var statearr_13486_15198 = state_13348__$1;
(statearr_13486_15198[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (22))){
var inst_13284 = (state_13348[(14)]);
var inst_13285 = (state_13348[(10)]);
var inst_13283 = (state_13348[(2)]);
var inst_13284__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13283,(0),null);
var inst_13285__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13283,(1),null);
var inst_13309 = (inst_13284__$1 == null);
var inst_13310 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13285__$1,change);
var inst_13311 = ((inst_13309) || (inst_13310));
var state_13348__$1 = (function (){var statearr_13489 = state_13348;
(statearr_13489[(14)] = inst_13284__$1);

(statearr_13489[(10)] = inst_13285__$1);

return statearr_13489;
})();
if(cljs.core.truth_(inst_13311)){
var statearr_13490_15199 = state_13348__$1;
(statearr_13490_15199[(1)] = (23));

} else {
var statearr_13491_15200 = state_13348__$1;
(statearr_13491_15200[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (36))){
var inst_13275 = (state_13348[(12)]);
var inst_13252 = inst_13275;
var state_13348__$1 = (function (){var statearr_13494 = state_13348;
(statearr_13494[(7)] = inst_13252);

return statearr_13494;
})();
var statearr_13495_15201 = state_13348__$1;
(statearr_13495_15201[(2)] = null);

(statearr_13495_15201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (29))){
var inst_13322 = (state_13348[(11)]);
var state_13348__$1 = state_13348;
var statearr_13496_15202 = state_13348__$1;
(statearr_13496_15202[(2)] = inst_13322);

(statearr_13496_15202[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (6))){
var state_13348__$1 = state_13348;
var statearr_13497_15238 = state_13348__$1;
(statearr_13497_15238[(2)] = false);

(statearr_13497_15238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (28))){
var inst_13318 = (state_13348[(2)]);
var inst_13319 = calc_state();
var inst_13252 = inst_13319;
var state_13348__$1 = (function (){var statearr_13500 = state_13348;
(statearr_13500[(15)] = inst_13318);

(statearr_13500[(7)] = inst_13252);

return statearr_13500;
})();
var statearr_13503_15239 = state_13348__$1;
(statearr_13503_15239[(2)] = null);

(statearr_13503_15239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (25))){
var inst_13344 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
var statearr_13504_15240 = state_13348__$1;
(statearr_13504_15240[(2)] = inst_13344);

(statearr_13504_15240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (34))){
var inst_13342 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
var statearr_13507_15241 = state_13348__$1;
(statearr_13507_15241[(2)] = inst_13342);

(statearr_13507_15241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (17))){
var state_13348__$1 = state_13348;
var statearr_13509_15242 = state_13348__$1;
(statearr_13509_15242[(2)] = false);

(statearr_13509_15242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (3))){
var state_13348__$1 = state_13348;
var statearr_13511_15243 = state_13348__$1;
(statearr_13511_15243[(2)] = false);

(statearr_13511_15243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (12))){
var inst_13346 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13348__$1,inst_13346);
} else {
if((state_val_13349 === (2))){
var inst_13227 = (state_13348[(8)]);
var inst_13232 = inst_13227.cljs$lang$protocol_mask$partition0$;
var inst_13233 = (inst_13232 & (64));
var inst_13234 = inst_13227.cljs$core$ISeq$;
var inst_13235 = (cljs.core.PROTOCOL_SENTINEL === inst_13234);
var inst_13236 = ((inst_13233) || (inst_13235));
var state_13348__$1 = state_13348;
if(cljs.core.truth_(inst_13236)){
var statearr_13512_15244 = state_13348__$1;
(statearr_13512_15244[(1)] = (5));

} else {
var statearr_13514_15245 = state_13348__$1;
(statearr_13514_15245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (23))){
var inst_13284 = (state_13348[(14)]);
var inst_13313 = (inst_13284 == null);
var state_13348__$1 = state_13348;
if(cljs.core.truth_(inst_13313)){
var statearr_13517_15246 = state_13348__$1;
(statearr_13517_15246[(1)] = (26));

} else {
var statearr_13519_15247 = state_13348__$1;
(statearr_13519_15247[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (35))){
var inst_13333 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
if(cljs.core.truth_(inst_13333)){
var statearr_13520_15248 = state_13348__$1;
(statearr_13520_15248[(1)] = (36));

} else {
var statearr_13521_15249 = state_13348__$1;
(statearr_13521_15249[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (19))){
var inst_13252 = (state_13348[(7)]);
var inst_13272 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13252);
var state_13348__$1 = state_13348;
var statearr_13525_15271 = state_13348__$1;
(statearr_13525_15271[(2)] = inst_13272);

(statearr_13525_15271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (11))){
var inst_13252 = (state_13348[(7)]);
var inst_13256 = (inst_13252 == null);
var inst_13257 = cljs.core.not(inst_13256);
var state_13348__$1 = state_13348;
if(inst_13257){
var statearr_13528_15272 = state_13348__$1;
(statearr_13528_15272[(1)] = (13));

} else {
var statearr_13529_15273 = state_13348__$1;
(statearr_13529_15273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (9))){
var inst_13227 = (state_13348[(8)]);
var state_13348__$1 = state_13348;
var statearr_13530_15274 = state_13348__$1;
(statearr_13530_15274[(2)] = inst_13227);

(statearr_13530_15274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (5))){
var state_13348__$1 = state_13348;
var statearr_13532_15275 = state_13348__$1;
(statearr_13532_15275[(2)] = true);

(statearr_13532_15275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (14))){
var state_13348__$1 = state_13348;
var statearr_13536_15276 = state_13348__$1;
(statearr_13536_15276[(2)] = false);

(statearr_13536_15276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (26))){
var inst_13285 = (state_13348[(10)]);
var inst_13315 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13285);
var state_13348__$1 = state_13348;
var statearr_13538_15277 = state_13348__$1;
(statearr_13538_15277[(2)] = inst_13315);

(statearr_13538_15277[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (16))){
var state_13348__$1 = state_13348;
var statearr_13539_15278 = state_13348__$1;
(statearr_13539_15278[(2)] = true);

(statearr_13539_15278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (38))){
var inst_13338 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
var statearr_13541_15279 = state_13348__$1;
(statearr_13541_15279[(2)] = inst_13338);

(statearr_13541_15279[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (30))){
var inst_13276 = (state_13348[(9)]);
var inst_13285 = (state_13348[(10)]);
var inst_13277 = (state_13348[(13)]);
var inst_13325 = cljs.core.empty_QMARK_(inst_13276);
var inst_13326 = (inst_13277.cljs$core$IFn$_invoke$arity$1 ? inst_13277.cljs$core$IFn$_invoke$arity$1(inst_13285) : inst_13277.call(null,inst_13285));
var inst_13327 = cljs.core.not(inst_13326);
var inst_13328 = ((inst_13325) && (inst_13327));
var state_13348__$1 = state_13348;
var statearr_13547_15280 = state_13348__$1;
(statearr_13547_15280[(2)] = inst_13328);

(statearr_13547_15280[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (10))){
var inst_13227 = (state_13348[(8)]);
var inst_13248 = (state_13348[(2)]);
var inst_13249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13248,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13248,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13248,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13252 = inst_13227;
var state_13348__$1 = (function (){var statearr_13552 = state_13348;
(statearr_13552[(16)] = inst_13251);

(statearr_13552[(7)] = inst_13252);

(statearr_13552[(17)] = inst_13249);

(statearr_13552[(18)] = inst_13250);

return statearr_13552;
})();
var statearr_13553_15281 = state_13348__$1;
(statearr_13553_15281[(2)] = null);

(statearr_13553_15281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (18))){
var inst_13267 = (state_13348[(2)]);
var state_13348__$1 = state_13348;
var statearr_13555_15282 = state_13348__$1;
(statearr_13555_15282[(2)] = inst_13267);

(statearr_13555_15282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (37))){
var state_13348__$1 = state_13348;
var statearr_13561_15283 = state_13348__$1;
(statearr_13561_15283[(2)] = null);

(statearr_13561_15283[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13349 === (8))){
var inst_13227 = (state_13348[(8)]);
var inst_13245 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13227);
var state_13348__$1 = state_13348;
var statearr_13568_15284 = state_13348__$1;
(statearr_13568_15284[(2)] = inst_13245);

(statearr_13568_15284[(1)] = (10));


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
var statearr_13576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13576[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_13576[(1)] = (1));

return statearr_13576;
});
var cljs$core$async$mix_$_state_machine__12072__auto____1 = (function (state_13348){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13348);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13577){var ex__12075__auto__ = e13577;
var statearr_13578_15314 = state_13348;
(statearr_13578_15314[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13348[(4)]))){
var statearr_13580_15315 = state_13348;
(statearr_13580_15315[(1)] = cljs.core.first((state_13348[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15316 = state_13348;
state_13348 = G__15316;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12072__auto__ = function(state_13348){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12072__auto____1.call(this,state_13348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12072__auto____0;
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12072__auto____1;
return cljs$core$async$mix_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13584 = f__12108__auto__();
(statearr_13584[(6)] = c__12107__auto___15182);

return statearr_13584;
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

var cljs$core$async$Pub$sub_STAR_$dyn_15317 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_15317(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_15318 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_15318(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_15319 = (function() {
var G__15320 = null;
var G__15320__1 = (function (p){
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
var G__15320__2 = (function (p,v){
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
G__15320 = function(p,v){
switch(arguments.length){
case 1:
return G__15320__1.call(this,p);
case 2:
return G__15320__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15320.cljs$core$IFn$_invoke$arity$1 = G__15320__1;
G__15320.cljs$core$IFn$_invoke$arity$2 = G__15320__2;
return G__15320;
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_15319(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_15319(p,v);
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
var G__13698 = arguments.length;
switch (G__13698) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13680_SHARP_){
if(cljs.core.truth_((p1__13680_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13680_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13680_SHARP_.call(null,topic)))){
return p1__13680_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13680_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13722 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13723){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13723 = meta13723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13724,meta13723__$1){
var self__ = this;
var _13724__$1 = this;
return (new cljs.core.async.t_cljs$core$async13722(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13723__$1));
}));

(cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13724){
var self__ = this;
var _13724__$1 = this;
return self__.meta13723;
}));

(cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13723","meta13723",-1716726142,null)], null);
}));

(cljs.core.async.t_cljs$core$async13722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13722");

(cljs.core.async.t_cljs$core$async13722.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13722.
 */
cljs.core.async.__GT_t_cljs$core$async13722 = (function cljs$core$async$__GT_t_cljs$core$async13722(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13723){
return (new cljs.core.async.t_cljs$core$async13722(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13723));
});

}

return (new cljs.core.async.t_cljs$core$async13722(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___15340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13811){
var state_val_13812 = (state_13811[(1)]);
if((state_val_13812 === (7))){
var inst_13807 = (state_13811[(2)]);
var state_13811__$1 = state_13811;
var statearr_13821_15341 = state_13811__$1;
(statearr_13821_15341[(2)] = inst_13807);

(statearr_13821_15341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (20))){
var state_13811__$1 = state_13811;
var statearr_13822_15342 = state_13811__$1;
(statearr_13822_15342[(2)] = null);

(statearr_13822_15342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (1))){
var state_13811__$1 = state_13811;
var statearr_13823_15343 = state_13811__$1;
(statearr_13823_15343[(2)] = null);

(statearr_13823_15343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (24))){
var inst_13790 = (state_13811[(7)]);
var inst_13799 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13790);
var state_13811__$1 = state_13811;
var statearr_13824_15344 = state_13811__$1;
(statearr_13824_15344[(2)] = inst_13799);

(statearr_13824_15344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (4))){
var inst_13742 = (state_13811[(8)]);
var inst_13742__$1 = (state_13811[(2)]);
var inst_13743 = (inst_13742__$1 == null);
var state_13811__$1 = (function (){var statearr_13825 = state_13811;
(statearr_13825[(8)] = inst_13742__$1);

return statearr_13825;
})();
if(cljs.core.truth_(inst_13743)){
var statearr_13826_15345 = state_13811__$1;
(statearr_13826_15345[(1)] = (5));

} else {
var statearr_13827_15346 = state_13811__$1;
(statearr_13827_15346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (15))){
var inst_13784 = (state_13811[(2)]);
var state_13811__$1 = state_13811;
var statearr_13828_15347 = state_13811__$1;
(statearr_13828_15347[(2)] = inst_13784);

(statearr_13828_15347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (21))){
var inst_13804 = (state_13811[(2)]);
var state_13811__$1 = (function (){var statearr_13829 = state_13811;
(statearr_13829[(9)] = inst_13804);

return statearr_13829;
})();
var statearr_13830_15348 = state_13811__$1;
(statearr_13830_15348[(2)] = null);

(statearr_13830_15348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (13))){
var inst_13766 = (state_13811[(10)]);
var inst_13768 = cljs.core.chunked_seq_QMARK_(inst_13766);
var state_13811__$1 = state_13811;
if(inst_13768){
var statearr_13831_15384 = state_13811__$1;
(statearr_13831_15384[(1)] = (16));

} else {
var statearr_13832_15385 = state_13811__$1;
(statearr_13832_15385[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (22))){
var inst_13796 = (state_13811[(2)]);
var state_13811__$1 = state_13811;
if(cljs.core.truth_(inst_13796)){
var statearr_13833_15391 = state_13811__$1;
(statearr_13833_15391[(1)] = (23));

} else {
var statearr_13834_15392 = state_13811__$1;
(statearr_13834_15392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (6))){
var inst_13742 = (state_13811[(8)]);
var inst_13790 = (state_13811[(7)]);
var inst_13792 = (state_13811[(11)]);
var inst_13790__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13742) : topic_fn.call(null,inst_13742));
var inst_13791 = cljs.core.deref(mults);
var inst_13792__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13791,inst_13790__$1);
var state_13811__$1 = (function (){var statearr_13835 = state_13811;
(statearr_13835[(7)] = inst_13790__$1);

(statearr_13835[(11)] = inst_13792__$1);

return statearr_13835;
})();
if(cljs.core.truth_(inst_13792__$1)){
var statearr_13836_15399 = state_13811__$1;
(statearr_13836_15399[(1)] = (19));

} else {
var statearr_13837_15401 = state_13811__$1;
(statearr_13837_15401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (25))){
var inst_13801 = (state_13811[(2)]);
var state_13811__$1 = state_13811;
var statearr_13838_15403 = state_13811__$1;
(statearr_13838_15403[(2)] = inst_13801);

(statearr_13838_15403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (17))){
var inst_13766 = (state_13811[(10)]);
var inst_13775 = cljs.core.first(inst_13766);
var inst_13776 = cljs.core.async.muxch_STAR_(inst_13775);
var inst_13777 = cljs.core.async.close_BANG_(inst_13776);
var inst_13778 = cljs.core.next(inst_13766);
var inst_13752 = inst_13778;
var inst_13753 = null;
var inst_13754 = (0);
var inst_13755 = (0);
var state_13811__$1 = (function (){var statearr_13846 = state_13811;
(statearr_13846[(12)] = inst_13777);

(statearr_13846[(13)] = inst_13753);

(statearr_13846[(14)] = inst_13752);

(statearr_13846[(15)] = inst_13755);

(statearr_13846[(16)] = inst_13754);

return statearr_13846;
})();
var statearr_13847_15405 = state_13811__$1;
(statearr_13847_15405[(2)] = null);

(statearr_13847_15405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (3))){
var inst_13809 = (state_13811[(2)]);
var state_13811__$1 = state_13811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13811__$1,inst_13809);
} else {
if((state_val_13812 === (12))){
var inst_13786 = (state_13811[(2)]);
var state_13811__$1 = state_13811;
var statearr_13848_15412 = state_13811__$1;
(statearr_13848_15412[(2)] = inst_13786);

(statearr_13848_15412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (2))){
var state_13811__$1 = state_13811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13811__$1,(4),ch);
} else {
if((state_val_13812 === (23))){
var state_13811__$1 = state_13811;
var statearr_13849_15414 = state_13811__$1;
(statearr_13849_15414[(2)] = null);

(statearr_13849_15414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (19))){
var inst_13742 = (state_13811[(8)]);
var inst_13792 = (state_13811[(11)]);
var inst_13794 = cljs.core.async.muxch_STAR_(inst_13792);
var state_13811__$1 = state_13811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13811__$1,(22),inst_13794,inst_13742);
} else {
if((state_val_13812 === (11))){
var inst_13752 = (state_13811[(14)]);
var inst_13766 = (state_13811[(10)]);
var inst_13766__$1 = cljs.core.seq(inst_13752);
var state_13811__$1 = (function (){var statearr_13850 = state_13811;
(statearr_13850[(10)] = inst_13766__$1);

return statearr_13850;
})();
if(inst_13766__$1){
var statearr_13851_15418 = state_13811__$1;
(statearr_13851_15418[(1)] = (13));

} else {
var statearr_13852_15419 = state_13811__$1;
(statearr_13852_15419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (9))){
var inst_13788 = (state_13811[(2)]);
var state_13811__$1 = state_13811;
var statearr_13853_15424 = state_13811__$1;
(statearr_13853_15424[(2)] = inst_13788);

(statearr_13853_15424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (5))){
var inst_13749 = cljs.core.deref(mults);
var inst_13750 = cljs.core.vals(inst_13749);
var inst_13751 = cljs.core.seq(inst_13750);
var inst_13752 = inst_13751;
var inst_13753 = null;
var inst_13754 = (0);
var inst_13755 = (0);
var state_13811__$1 = (function (){var statearr_13854 = state_13811;
(statearr_13854[(13)] = inst_13753);

(statearr_13854[(14)] = inst_13752);

(statearr_13854[(15)] = inst_13755);

(statearr_13854[(16)] = inst_13754);

return statearr_13854;
})();
var statearr_13855_15427 = state_13811__$1;
(statearr_13855_15427[(2)] = null);

(statearr_13855_15427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (14))){
var state_13811__$1 = state_13811;
var statearr_13859_15428 = state_13811__$1;
(statearr_13859_15428[(2)] = null);

(statearr_13859_15428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (16))){
var inst_13766 = (state_13811[(10)]);
var inst_13770 = cljs.core.chunk_first(inst_13766);
var inst_13771 = cljs.core.chunk_rest(inst_13766);
var inst_13772 = cljs.core.count(inst_13770);
var inst_13752 = inst_13771;
var inst_13753 = inst_13770;
var inst_13754 = inst_13772;
var inst_13755 = (0);
var state_13811__$1 = (function (){var statearr_13860 = state_13811;
(statearr_13860[(13)] = inst_13753);

(statearr_13860[(14)] = inst_13752);

(statearr_13860[(15)] = inst_13755);

(statearr_13860[(16)] = inst_13754);

return statearr_13860;
})();
var statearr_13873_15435 = state_13811__$1;
(statearr_13873_15435[(2)] = null);

(statearr_13873_15435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (10))){
var inst_13753 = (state_13811[(13)]);
var inst_13752 = (state_13811[(14)]);
var inst_13755 = (state_13811[(15)]);
var inst_13754 = (state_13811[(16)]);
var inst_13760 = cljs.core._nth(inst_13753,inst_13755);
var inst_13761 = cljs.core.async.muxch_STAR_(inst_13760);
var inst_13762 = cljs.core.async.close_BANG_(inst_13761);
var inst_13763 = (inst_13755 + (1));
var tmp13856 = inst_13753;
var tmp13857 = inst_13752;
var tmp13858 = inst_13754;
var inst_13752__$1 = tmp13857;
var inst_13753__$1 = tmp13856;
var inst_13754__$1 = tmp13858;
var inst_13755__$1 = inst_13763;
var state_13811__$1 = (function (){var statearr_13874 = state_13811;
(statearr_13874[(13)] = inst_13753__$1);

(statearr_13874[(14)] = inst_13752__$1);

(statearr_13874[(17)] = inst_13762);

(statearr_13874[(15)] = inst_13755__$1);

(statearr_13874[(16)] = inst_13754__$1);

return statearr_13874;
})();
var statearr_13875_15481 = state_13811__$1;
(statearr_13875_15481[(2)] = null);

(statearr_13875_15481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (18))){
var inst_13781 = (state_13811[(2)]);
var state_13811__$1 = state_13811;
var statearr_13876_15487 = state_13811__$1;
(statearr_13876_15487[(2)] = inst_13781);

(statearr_13876_15487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13812 === (8))){
var inst_13755 = (state_13811[(15)]);
var inst_13754 = (state_13811[(16)]);
var inst_13757 = (inst_13755 < inst_13754);
var inst_13758 = inst_13757;
var state_13811__$1 = state_13811;
if(cljs.core.truth_(inst_13758)){
var statearr_13877_15490 = state_13811__$1;
(statearr_13877_15490[(1)] = (10));

} else {
var statearr_13878_15491 = state_13811__$1;
(statearr_13878_15491[(1)] = (11));

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
var statearr_13879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13879[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13879[(1)] = (1));

return statearr_13879;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13811){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13811);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13880){var ex__12075__auto__ = e13880;
var statearr_13881_15497 = state_13811;
(statearr_13881_15497[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13811[(4)]))){
var statearr_13882_15499 = state_13811;
(statearr_13882_15499[(1)] = cljs.core.first((state_13811[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15503 = state_13811;
state_13811 = G__15503;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13885 = f__12108__auto__();
(statearr_13885[(6)] = c__12107__auto___15340);

return statearr_13885;
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
var G__13892 = arguments.length;
switch (G__13892) {
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
var G__13895 = arguments.length;
switch (G__13895) {
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
var G__13897 = arguments.length;
switch (G__13897) {
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
var c__12107__auto___15541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13951){
var state_val_13952 = (state_13951[(1)]);
if((state_val_13952 === (7))){
var state_13951__$1 = state_13951;
var statearr_13953_15542 = state_13951__$1;
(statearr_13953_15542[(2)] = null);

(statearr_13953_15542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (1))){
var state_13951__$1 = state_13951;
var statearr_13955_15544 = state_13951__$1;
(statearr_13955_15544[(2)] = null);

(statearr_13955_15544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (4))){
var inst_13905 = (state_13951[(7)]);
var inst_13900 = (state_13951[(8)]);
var inst_13907 = (inst_13905 < inst_13900);
var state_13951__$1 = state_13951;
if(cljs.core.truth_(inst_13907)){
var statearr_13957_15546 = state_13951__$1;
(statearr_13957_15546[(1)] = (6));

} else {
var statearr_13958_15547 = state_13951__$1;
(statearr_13958_15547[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (15))){
var inst_13936 = (state_13951[(9)]);
var inst_13941 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13936);
var state_13951__$1 = state_13951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13951__$1,(17),out,inst_13941);
} else {
if((state_val_13952 === (13))){
var inst_13936 = (state_13951[(9)]);
var inst_13936__$1 = (state_13951[(2)]);
var inst_13937 = cljs.core.some(cljs.core.nil_QMARK_,inst_13936__$1);
var state_13951__$1 = (function (){var statearr_13961 = state_13951;
(statearr_13961[(9)] = inst_13936__$1);

return statearr_13961;
})();
if(cljs.core.truth_(inst_13937)){
var statearr_13962_15555 = state_13951__$1;
(statearr_13962_15555[(1)] = (14));

} else {
var statearr_13963_15557 = state_13951__$1;
(statearr_13963_15557[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (6))){
var state_13951__$1 = state_13951;
var statearr_13965_15592 = state_13951__$1;
(statearr_13965_15592[(2)] = null);

(statearr_13965_15592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (17))){
var inst_13943 = (state_13951[(2)]);
var state_13951__$1 = (function (){var statearr_13970 = state_13951;
(statearr_13970[(10)] = inst_13943);

return statearr_13970;
})();
var statearr_13971_15595 = state_13951__$1;
(statearr_13971_15595[(2)] = null);

(statearr_13971_15595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (3))){
var inst_13948 = (state_13951[(2)]);
var state_13951__$1 = state_13951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13951__$1,inst_13948);
} else {
if((state_val_13952 === (12))){
var _ = (function (){var statearr_13991 = state_13951;
(statearr_13991[(4)] = cljs.core.rest((state_13951[(4)])));

return statearr_13991;
})();
var state_13951__$1 = state_13951;
var ex13969 = (state_13951__$1[(2)]);
var statearr_13994_15596 = state_13951__$1;
(statearr_13994_15596[(5)] = ex13969);


if((ex13969 instanceof Object)){
var statearr_13995_15597 = state_13951__$1;
(statearr_13995_15597[(1)] = (11));

(statearr_13995_15597[(5)] = null);

} else {
throw ex13969;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (2))){
var inst_13899 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13900 = cnt;
var inst_13905 = (0);
var state_13951__$1 = (function (){var statearr_14000 = state_13951;
(statearr_14000[(7)] = inst_13905);

(statearr_14000[(11)] = inst_13899);

(statearr_14000[(8)] = inst_13900);

return statearr_14000;
})();
var statearr_14002_15600 = state_13951__$1;
(statearr_14002_15600[(2)] = null);

(statearr_14002_15600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (11))){
var inst_13915 = (state_13951[(2)]);
var inst_13916 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13951__$1 = (function (){var statearr_14003 = state_13951;
(statearr_14003[(12)] = inst_13915);

return statearr_14003;
})();
var statearr_14004_15601 = state_13951__$1;
(statearr_14004_15601[(2)] = inst_13916);

(statearr_14004_15601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (9))){
var inst_13905 = (state_13951[(7)]);
var _ = (function (){var statearr_14005 = state_13951;
(statearr_14005[(4)] = cljs.core.cons((12),(state_13951[(4)])));

return statearr_14005;
})();
var inst_13922 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13905) : chs__$1.call(null,inst_13905));
var inst_13923 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13905) : done.call(null,inst_13905));
var inst_13924 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13922,inst_13923);
var ___$1 = (function (){var statearr_14006 = state_13951;
(statearr_14006[(4)] = cljs.core.rest((state_13951[(4)])));

return statearr_14006;
})();
var state_13951__$1 = state_13951;
var statearr_14007_15606 = state_13951__$1;
(statearr_14007_15606[(2)] = inst_13924);

(statearr_14007_15606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (5))){
var inst_13934 = (state_13951[(2)]);
var state_13951__$1 = (function (){var statearr_14008 = state_13951;
(statearr_14008[(13)] = inst_13934);

return statearr_14008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13951__$1,(13),dchan);
} else {
if((state_val_13952 === (14))){
var inst_13939 = cljs.core.async.close_BANG_(out);
var state_13951__$1 = state_13951;
var statearr_14009_15607 = state_13951__$1;
(statearr_14009_15607[(2)] = inst_13939);

(statearr_14009_15607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (16))){
var inst_13946 = (state_13951[(2)]);
var state_13951__$1 = state_13951;
var statearr_14010_15608 = state_13951__$1;
(statearr_14010_15608[(2)] = inst_13946);

(statearr_14010_15608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (10))){
var inst_13905 = (state_13951[(7)]);
var inst_13927 = (state_13951[(2)]);
var inst_13928 = (inst_13905 + (1));
var inst_13905__$1 = inst_13928;
var state_13951__$1 = (function (){var statearr_14020 = state_13951;
(statearr_14020[(7)] = inst_13905__$1);

(statearr_14020[(14)] = inst_13927);

return statearr_14020;
})();
var statearr_14021_15612 = state_13951__$1;
(statearr_14021_15612[(2)] = null);

(statearr_14021_15612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (8))){
var inst_13932 = (state_13951[(2)]);
var state_13951__$1 = state_13951;
var statearr_14023_15613 = state_13951__$1;
(statearr_14023_15613[(2)] = inst_13932);

(statearr_14023_15613[(1)] = (5));


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
var statearr_14026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14026[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14026[(1)] = (1));

return statearr_14026;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13951){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13951);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14027){var ex__12075__auto__ = e14027;
var statearr_14028_15615 = state_13951;
(statearr_14028_15615[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13951[(4)]))){
var statearr_14030_15616 = state_13951;
(statearr_14030_15616[(1)] = cljs.core.first((state_13951[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15618 = state_13951;
state_13951 = G__15618;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14032 = f__12108__auto__();
(statearr_14032[(6)] = c__12107__auto___15541);

return statearr_14032;
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
var G__14037 = arguments.length;
switch (G__14037) {
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
var c__12107__auto___15656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14078){
var state_val_14079 = (state_14078[(1)]);
if((state_val_14079 === (7))){
var inst_14058 = (state_14078[(7)]);
var inst_14057 = (state_14078[(8)]);
var inst_14057__$1 = (state_14078[(2)]);
var inst_14058__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14057__$1,(0),null);
var inst_14059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14057__$1,(1),null);
var inst_14060 = (inst_14058__$1 == null);
var state_14078__$1 = (function (){var statearr_14084 = state_14078;
(statearr_14084[(7)] = inst_14058__$1);

(statearr_14084[(9)] = inst_14059);

(statearr_14084[(8)] = inst_14057__$1);

return statearr_14084;
})();
if(cljs.core.truth_(inst_14060)){
var statearr_14086_15663 = state_14078__$1;
(statearr_14086_15663[(1)] = (8));

} else {
var statearr_14087_15665 = state_14078__$1;
(statearr_14087_15665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (1))){
var inst_14041 = cljs.core.vec(chs);
var inst_14042 = inst_14041;
var state_14078__$1 = (function (){var statearr_14088 = state_14078;
(statearr_14088[(10)] = inst_14042);

return statearr_14088;
})();
var statearr_14089_15667 = state_14078__$1;
(statearr_14089_15667[(2)] = null);

(statearr_14089_15667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (4))){
var inst_14042 = (state_14078[(10)]);
var state_14078__$1 = state_14078;
return cljs.core.async.ioc_alts_BANG_(state_14078__$1,(7),inst_14042);
} else {
if((state_val_14079 === (6))){
var inst_14074 = (state_14078[(2)]);
var state_14078__$1 = state_14078;
var statearr_14091_15669 = state_14078__$1;
(statearr_14091_15669[(2)] = inst_14074);

(statearr_14091_15669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (3))){
var inst_14076 = (state_14078[(2)]);
var state_14078__$1 = state_14078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14078__$1,inst_14076);
} else {
if((state_val_14079 === (2))){
var inst_14042 = (state_14078[(10)]);
var inst_14048 = cljs.core.count(inst_14042);
var inst_14049 = (inst_14048 > (0));
var state_14078__$1 = state_14078;
if(cljs.core.truth_(inst_14049)){
var statearr_14094_15675 = state_14078__$1;
(statearr_14094_15675[(1)] = (4));

} else {
var statearr_14095_15676 = state_14078__$1;
(statearr_14095_15676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (11))){
var inst_14042 = (state_14078[(10)]);
var inst_14067 = (state_14078[(2)]);
var tmp14092 = inst_14042;
var inst_14042__$1 = tmp14092;
var state_14078__$1 = (function (){var statearr_14096 = state_14078;
(statearr_14096[(11)] = inst_14067);

(statearr_14096[(10)] = inst_14042__$1);

return statearr_14096;
})();
var statearr_14097_15681 = state_14078__$1;
(statearr_14097_15681[(2)] = null);

(statearr_14097_15681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (9))){
var inst_14058 = (state_14078[(7)]);
var state_14078__$1 = state_14078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14078__$1,(11),out,inst_14058);
} else {
if((state_val_14079 === (5))){
var inst_14072 = cljs.core.async.close_BANG_(out);
var state_14078__$1 = state_14078;
var statearr_14098_15683 = state_14078__$1;
(statearr_14098_15683[(2)] = inst_14072);

(statearr_14098_15683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (10))){
var inst_14070 = (state_14078[(2)]);
var state_14078__$1 = state_14078;
var statearr_14099_15684 = state_14078__$1;
(statearr_14099_15684[(2)] = inst_14070);

(statearr_14099_15684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (8))){
var inst_14058 = (state_14078[(7)]);
var inst_14059 = (state_14078[(9)]);
var inst_14057 = (state_14078[(8)]);
var inst_14042 = (state_14078[(10)]);
var inst_14062 = (function (){var cs = inst_14042;
var vec__14053 = inst_14057;
var v = inst_14058;
var c = inst_14059;
return (function (p1__14033_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14033_SHARP_);
});
})();
var inst_14063 = cljs.core.filterv(inst_14062,inst_14042);
var inst_14042__$1 = inst_14063;
var state_14078__$1 = (function (){var statearr_14117 = state_14078;
(statearr_14117[(10)] = inst_14042__$1);

return statearr_14117;
})();
var statearr_14118_15688 = state_14078__$1;
(statearr_14118_15688[(2)] = null);

(statearr_14118_15688[(1)] = (2));


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
var statearr_14119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14119[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14119[(1)] = (1));

return statearr_14119;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14078){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14078);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14122){var ex__12075__auto__ = e14122;
var statearr_14123_15695 = state_14078;
(statearr_14123_15695[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14078[(4)]))){
var statearr_14125_15697 = state_14078;
(statearr_14125_15697[(1)] = cljs.core.first((state_14078[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15698 = state_14078;
state_14078 = G__15698;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14126 = f__12108__auto__();
(statearr_14126[(6)] = c__12107__auto___15656);

return statearr_14126;
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
var G__14131 = arguments.length;
switch (G__14131) {
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
var c__12107__auto___15752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14179){
var state_val_14180 = (state_14179[(1)]);
if((state_val_14180 === (7))){
var inst_14160 = (state_14179[(7)]);
var inst_14160__$1 = (state_14179[(2)]);
var inst_14161 = (inst_14160__$1 == null);
var inst_14162 = cljs.core.not(inst_14161);
var state_14179__$1 = (function (){var statearr_14186 = state_14179;
(statearr_14186[(7)] = inst_14160__$1);

return statearr_14186;
})();
if(inst_14162){
var statearr_14188_15757 = state_14179__$1;
(statearr_14188_15757[(1)] = (8));

} else {
var statearr_14189_15758 = state_14179__$1;
(statearr_14189_15758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14180 === (1))){
var inst_14142 = (0);
var state_14179__$1 = (function (){var statearr_14192 = state_14179;
(statearr_14192[(8)] = inst_14142);

return statearr_14192;
})();
var statearr_14193_15762 = state_14179__$1;
(statearr_14193_15762[(2)] = null);

(statearr_14193_15762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14180 === (4))){
var state_14179__$1 = state_14179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14179__$1,(7),ch);
} else {
if((state_val_14180 === (6))){
var inst_14174 = (state_14179[(2)]);
var state_14179__$1 = state_14179;
var statearr_14195_15764 = state_14179__$1;
(statearr_14195_15764[(2)] = inst_14174);

(statearr_14195_15764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14180 === (3))){
var inst_14176 = (state_14179[(2)]);
var inst_14177 = cljs.core.async.close_BANG_(out);
var state_14179__$1 = (function (){var statearr_14196 = state_14179;
(statearr_14196[(9)] = inst_14176);

return statearr_14196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14179__$1,inst_14177);
} else {
if((state_val_14180 === (2))){
var inst_14142 = (state_14179[(8)]);
var inst_14144 = (inst_14142 < n);
var state_14179__$1 = state_14179;
if(cljs.core.truth_(inst_14144)){
var statearr_14197_15768 = state_14179__$1;
(statearr_14197_15768[(1)] = (4));

} else {
var statearr_14198_15770 = state_14179__$1;
(statearr_14198_15770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14180 === (11))){
var inst_14142 = (state_14179[(8)]);
var inst_14165 = (state_14179[(2)]);
var inst_14166 = (inst_14142 + (1));
var inst_14142__$1 = inst_14166;
var state_14179__$1 = (function (){var statearr_14199 = state_14179;
(statearr_14199[(8)] = inst_14142__$1);

(statearr_14199[(10)] = inst_14165);

return statearr_14199;
})();
var statearr_14201_15774 = state_14179__$1;
(statearr_14201_15774[(2)] = null);

(statearr_14201_15774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14180 === (9))){
var state_14179__$1 = state_14179;
var statearr_14203_15775 = state_14179__$1;
(statearr_14203_15775[(2)] = null);

(statearr_14203_15775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14180 === (5))){
var state_14179__$1 = state_14179;
var statearr_14204_15777 = state_14179__$1;
(statearr_14204_15777[(2)] = null);

(statearr_14204_15777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14180 === (10))){
var inst_14171 = (state_14179[(2)]);
var state_14179__$1 = state_14179;
var statearr_14207_15780 = state_14179__$1;
(statearr_14207_15780[(2)] = inst_14171);

(statearr_14207_15780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14180 === (8))){
var inst_14160 = (state_14179[(7)]);
var state_14179__$1 = state_14179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14179__$1,(11),out,inst_14160);
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
var statearr_14217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14217[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14217[(1)] = (1));

return statearr_14217;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14179){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14179);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14218){var ex__12075__auto__ = e14218;
var statearr_14219_15782 = state_14179;
(statearr_14219_15782[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14179[(4)]))){
var statearr_14220_15784 = state_14179;
(statearr_14220_15784[(1)] = cljs.core.first((state_14179[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15785 = state_14179;
state_14179 = G__15785;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14221 = f__12108__auto__();
(statearr_14221[(6)] = c__12107__auto___15752);

return statearr_14221;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14223 = (function (f,ch,meta14224){
this.f = f;
this.ch = ch;
this.meta14224 = meta14224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14225,meta14224__$1){
var self__ = this;
var _14225__$1 = this;
return (new cljs.core.async.t_cljs$core$async14223(self__.f,self__.ch,meta14224__$1));
}));

(cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14225){
var self__ = this;
var _14225__$1 = this;
return self__.meta14224;
}));

(cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14240 = (function (f,ch,meta14224,_,fn1,meta14241){
this.f = f;
this.ch = ch;
this.meta14224 = meta14224;
this._ = _;
this.fn1 = fn1;
this.meta14241 = meta14241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14242,meta14241__$1){
var self__ = this;
var _14242__$1 = this;
return (new cljs.core.async.t_cljs$core$async14240(self__.f,self__.ch,self__.meta14224,self__._,self__.fn1,meta14241__$1));
}));

(cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14242){
var self__ = this;
var _14242__$1 = this;
return self__.meta14241;
}));

(cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14222_SHARP_){
var G__14243 = (((p1__14222_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14222_SHARP_) : self__.f.call(null,p1__14222_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14243) : f1.call(null,G__14243));
});
}));

(cljs.core.async.t_cljs$core$async14240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14224","meta14224",524838331,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14223","cljs.core.async/t_cljs$core$async14223",-158493348,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14241","meta14241",-1791155389,null)], null);
}));

(cljs.core.async.t_cljs$core$async14240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14240");

(cljs.core.async.t_cljs$core$async14240.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14240.
 */
cljs.core.async.__GT_t_cljs$core$async14240 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14240(f__$1,ch__$1,meta14224__$1,___$2,fn1__$1,meta14241){
return (new cljs.core.async.t_cljs$core$async14240(f__$1,ch__$1,meta14224__$1,___$2,fn1__$1,meta14241));
});

}

return (new cljs.core.async.t_cljs$core$async14240(self__.f,self__.ch,self__.meta14224,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14244 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14244) : self__.f.call(null,G__14244));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14224","meta14224",524838331,null)], null);
}));

(cljs.core.async.t_cljs$core$async14223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14223");

(cljs.core.async.t_cljs$core$async14223.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14223.
 */
cljs.core.async.__GT_t_cljs$core$async14223 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14223(f__$1,ch__$1,meta14224){
return (new cljs.core.async.t_cljs$core$async14223(f__$1,ch__$1,meta14224));
});

}

return (new cljs.core.async.t_cljs$core$async14223(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14245 = (function (f,ch,meta14246){
this.f = f;
this.ch = ch;
this.meta14246 = meta14246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14247,meta14246__$1){
var self__ = this;
var _14247__$1 = this;
return (new cljs.core.async.t_cljs$core$async14245(self__.f,self__.ch,meta14246__$1));
}));

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14247){
var self__ = this;
var _14247__$1 = this;
return self__.meta14246;
}));

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14246","meta14246",1574167705,null)], null);
}));

(cljs.core.async.t_cljs$core$async14245.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14245");

(cljs.core.async.t_cljs$core$async14245.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14245");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14245.
 */
cljs.core.async.__GT_t_cljs$core$async14245 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14245(f__$1,ch__$1,meta14246){
return (new cljs.core.async.t_cljs$core$async14245(f__$1,ch__$1,meta14246));
});

}

return (new cljs.core.async.t_cljs$core$async14245(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14251 = (function (p,ch,meta14252){
this.p = p;
this.ch = ch;
this.meta14252 = meta14252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14253,meta14252__$1){
var self__ = this;
var _14253__$1 = this;
return (new cljs.core.async.t_cljs$core$async14251(self__.p,self__.ch,meta14252__$1));
}));

(cljs.core.async.t_cljs$core$async14251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14253){
var self__ = this;
var _14253__$1 = this;
return self__.meta14252;
}));

(cljs.core.async.t_cljs$core$async14251.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14251.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14251.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14251.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14252","meta14252",179989999,null)], null);
}));

(cljs.core.async.t_cljs$core$async14251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14251");

(cljs.core.async.t_cljs$core$async14251.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14251.
 */
cljs.core.async.__GT_t_cljs$core$async14251 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14251(p__$1,ch__$1,meta14252){
return (new cljs.core.async.t_cljs$core$async14251(p__$1,ch__$1,meta14252));
});

}

return (new cljs.core.async.t_cljs$core$async14251(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14259 = arguments.length;
switch (G__14259) {
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
var c__12107__auto___15843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14293){
var state_val_14294 = (state_14293[(1)]);
if((state_val_14294 === (7))){
var inst_14289 = (state_14293[(2)]);
var state_14293__$1 = state_14293;
var statearr_14295_15844 = state_14293__$1;
(statearr_14295_15844[(2)] = inst_14289);

(statearr_14295_15844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (1))){
var state_14293__$1 = state_14293;
var statearr_14296_15845 = state_14293__$1;
(statearr_14296_15845[(2)] = null);

(statearr_14296_15845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (4))){
var inst_14275 = (state_14293[(7)]);
var inst_14275__$1 = (state_14293[(2)]);
var inst_14276 = (inst_14275__$1 == null);
var state_14293__$1 = (function (){var statearr_14297 = state_14293;
(statearr_14297[(7)] = inst_14275__$1);

return statearr_14297;
})();
if(cljs.core.truth_(inst_14276)){
var statearr_14298_15846 = state_14293__$1;
(statearr_14298_15846[(1)] = (5));

} else {
var statearr_14299_15847 = state_14293__$1;
(statearr_14299_15847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (6))){
var inst_14275 = (state_14293[(7)]);
var inst_14280 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14275) : p.call(null,inst_14275));
var state_14293__$1 = state_14293;
if(cljs.core.truth_(inst_14280)){
var statearr_14300_15848 = state_14293__$1;
(statearr_14300_15848[(1)] = (8));

} else {
var statearr_14301_15849 = state_14293__$1;
(statearr_14301_15849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (3))){
var inst_14291 = (state_14293[(2)]);
var state_14293__$1 = state_14293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14293__$1,inst_14291);
} else {
if((state_val_14294 === (2))){
var state_14293__$1 = state_14293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14293__$1,(4),ch);
} else {
if((state_val_14294 === (11))){
var inst_14283 = (state_14293[(2)]);
var state_14293__$1 = state_14293;
var statearr_14302_15850 = state_14293__$1;
(statearr_14302_15850[(2)] = inst_14283);

(statearr_14302_15850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (9))){
var state_14293__$1 = state_14293;
var statearr_14303_15851 = state_14293__$1;
(statearr_14303_15851[(2)] = null);

(statearr_14303_15851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (5))){
var inst_14278 = cljs.core.async.close_BANG_(out);
var state_14293__$1 = state_14293;
var statearr_14304_15852 = state_14293__$1;
(statearr_14304_15852[(2)] = inst_14278);

(statearr_14304_15852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (10))){
var inst_14286 = (state_14293[(2)]);
var state_14293__$1 = (function (){var statearr_14305 = state_14293;
(statearr_14305[(8)] = inst_14286);

return statearr_14305;
})();
var statearr_14306_15853 = state_14293__$1;
(statearr_14306_15853[(2)] = null);

(statearr_14306_15853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (8))){
var inst_14275 = (state_14293[(7)]);
var state_14293__$1 = state_14293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14293__$1,(11),out,inst_14275);
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
var statearr_14307 = [null,null,null,null,null,null,null,null,null];
(statearr_14307[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14307[(1)] = (1));

return statearr_14307;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14293){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14293);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14310){var ex__12075__auto__ = e14310;
var statearr_14311_15866 = state_14293;
(statearr_14311_15866[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14293[(4)]))){
var statearr_14312_15867 = state_14293;
(statearr_14312_15867[(1)] = cljs.core.first((state_14293[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15868 = state_14293;
state_14293 = G__15868;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14313 = f__12108__auto__();
(statearr_14313[(6)] = c__12107__auto___15843);

return statearr_14313;
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
var G__14315 = arguments.length;
switch (G__14315) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14385){
var state_val_14386 = (state_14385[(1)]);
if((state_val_14386 === (7))){
var inst_14381 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14387_15870 = state_14385__$1;
(statearr_14387_15870[(2)] = inst_14381);

(statearr_14387_15870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (20))){
var inst_14351 = (state_14385[(7)]);
var inst_14362 = (state_14385[(2)]);
var inst_14363 = cljs.core.next(inst_14351);
var inst_14329 = inst_14363;
var inst_14330 = null;
var inst_14331 = (0);
var inst_14332 = (0);
var state_14385__$1 = (function (){var statearr_14388 = state_14385;
(statearr_14388[(8)] = inst_14330);

(statearr_14388[(9)] = inst_14332);

(statearr_14388[(10)] = inst_14331);

(statearr_14388[(11)] = inst_14362);

(statearr_14388[(12)] = inst_14329);

return statearr_14388;
})();
var statearr_14389_15876 = state_14385__$1;
(statearr_14389_15876[(2)] = null);

(statearr_14389_15876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (1))){
var state_14385__$1 = state_14385;
var statearr_14390_15877 = state_14385__$1;
(statearr_14390_15877[(2)] = null);

(statearr_14390_15877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (4))){
var inst_14318 = (state_14385[(13)]);
var inst_14318__$1 = (state_14385[(2)]);
var inst_14319 = (inst_14318__$1 == null);
var state_14385__$1 = (function (){var statearr_14391 = state_14385;
(statearr_14391[(13)] = inst_14318__$1);

return statearr_14391;
})();
if(cljs.core.truth_(inst_14319)){
var statearr_14392_15878 = state_14385__$1;
(statearr_14392_15878[(1)] = (5));

} else {
var statearr_14393_15879 = state_14385__$1;
(statearr_14393_15879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (15))){
var state_14385__$1 = state_14385;
var statearr_14397_15880 = state_14385__$1;
(statearr_14397_15880[(2)] = null);

(statearr_14397_15880[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (21))){
var state_14385__$1 = state_14385;
var statearr_14398_15881 = state_14385__$1;
(statearr_14398_15881[(2)] = null);

(statearr_14398_15881[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (13))){
var inst_14330 = (state_14385[(8)]);
var inst_14332 = (state_14385[(9)]);
var inst_14331 = (state_14385[(10)]);
var inst_14329 = (state_14385[(12)]);
var inst_14347 = (state_14385[(2)]);
var inst_14348 = (inst_14332 + (1));
var tmp14394 = inst_14330;
var tmp14395 = inst_14331;
var tmp14396 = inst_14329;
var inst_14329__$1 = tmp14396;
var inst_14330__$1 = tmp14394;
var inst_14331__$1 = tmp14395;
var inst_14332__$1 = inst_14348;
var state_14385__$1 = (function (){var statearr_14399 = state_14385;
(statearr_14399[(8)] = inst_14330__$1);

(statearr_14399[(9)] = inst_14332__$1);

(statearr_14399[(10)] = inst_14331__$1);

(statearr_14399[(14)] = inst_14347);

(statearr_14399[(12)] = inst_14329__$1);

return statearr_14399;
})();
var statearr_14402_15882 = state_14385__$1;
(statearr_14402_15882[(2)] = null);

(statearr_14402_15882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (22))){
var state_14385__$1 = state_14385;
var statearr_14403_15883 = state_14385__$1;
(statearr_14403_15883[(2)] = null);

(statearr_14403_15883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (6))){
var inst_14318 = (state_14385[(13)]);
var inst_14327 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14318) : f.call(null,inst_14318));
var inst_14328 = cljs.core.seq(inst_14327);
var inst_14329 = inst_14328;
var inst_14330 = null;
var inst_14331 = (0);
var inst_14332 = (0);
var state_14385__$1 = (function (){var statearr_14404 = state_14385;
(statearr_14404[(8)] = inst_14330);

(statearr_14404[(9)] = inst_14332);

(statearr_14404[(10)] = inst_14331);

(statearr_14404[(12)] = inst_14329);

return statearr_14404;
})();
var statearr_14405_15884 = state_14385__$1;
(statearr_14405_15884[(2)] = null);

(statearr_14405_15884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (17))){
var inst_14351 = (state_14385[(7)]);
var inst_14355 = cljs.core.chunk_first(inst_14351);
var inst_14356 = cljs.core.chunk_rest(inst_14351);
var inst_14357 = cljs.core.count(inst_14355);
var inst_14329 = inst_14356;
var inst_14330 = inst_14355;
var inst_14331 = inst_14357;
var inst_14332 = (0);
var state_14385__$1 = (function (){var statearr_14406 = state_14385;
(statearr_14406[(8)] = inst_14330);

(statearr_14406[(9)] = inst_14332);

(statearr_14406[(10)] = inst_14331);

(statearr_14406[(12)] = inst_14329);

return statearr_14406;
})();
var statearr_14407_15885 = state_14385__$1;
(statearr_14407_15885[(2)] = null);

(statearr_14407_15885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (3))){
var inst_14383 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14385__$1,inst_14383);
} else {
if((state_val_14386 === (12))){
var inst_14371 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14408_15886 = state_14385__$1;
(statearr_14408_15886[(2)] = inst_14371);

(statearr_14408_15886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (2))){
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14385__$1,(4),in$);
} else {
if((state_val_14386 === (23))){
var inst_14379 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14409_15887 = state_14385__$1;
(statearr_14409_15887[(2)] = inst_14379);

(statearr_14409_15887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (19))){
var inst_14366 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14410_15888 = state_14385__$1;
(statearr_14410_15888[(2)] = inst_14366);

(statearr_14410_15888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (11))){
var inst_14351 = (state_14385[(7)]);
var inst_14329 = (state_14385[(12)]);
var inst_14351__$1 = cljs.core.seq(inst_14329);
var state_14385__$1 = (function (){var statearr_14411 = state_14385;
(statearr_14411[(7)] = inst_14351__$1);

return statearr_14411;
})();
if(inst_14351__$1){
var statearr_14412_15889 = state_14385__$1;
(statearr_14412_15889[(1)] = (14));

} else {
var statearr_14415_15890 = state_14385__$1;
(statearr_14415_15890[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (9))){
var inst_14373 = (state_14385[(2)]);
var inst_14374 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14385__$1 = (function (){var statearr_14416 = state_14385;
(statearr_14416[(15)] = inst_14373);

return statearr_14416;
})();
if(cljs.core.truth_(inst_14374)){
var statearr_14417_15897 = state_14385__$1;
(statearr_14417_15897[(1)] = (21));

} else {
var statearr_14419_15898 = state_14385__$1;
(statearr_14419_15898[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (5))){
var inst_14321 = cljs.core.async.close_BANG_(out);
var state_14385__$1 = state_14385;
var statearr_14420_15899 = state_14385__$1;
(statearr_14420_15899[(2)] = inst_14321);

(statearr_14420_15899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (14))){
var inst_14351 = (state_14385[(7)]);
var inst_14353 = cljs.core.chunked_seq_QMARK_(inst_14351);
var state_14385__$1 = state_14385;
if(inst_14353){
var statearr_14421_15900 = state_14385__$1;
(statearr_14421_15900[(1)] = (17));

} else {
var statearr_14423_15901 = state_14385__$1;
(statearr_14423_15901[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (16))){
var inst_14369 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14424_15902 = state_14385__$1;
(statearr_14424_15902[(2)] = inst_14369);

(statearr_14424_15902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (10))){
var inst_14330 = (state_14385[(8)]);
var inst_14332 = (state_14385[(9)]);
var inst_14345 = cljs.core._nth(inst_14330,inst_14332);
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14385__$1,(13),out,inst_14345);
} else {
if((state_val_14386 === (18))){
var inst_14351 = (state_14385[(7)]);
var inst_14360 = cljs.core.first(inst_14351);
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14385__$1,(20),out,inst_14360);
} else {
if((state_val_14386 === (8))){
var inst_14332 = (state_14385[(9)]);
var inst_14331 = (state_14385[(10)]);
var inst_14342 = (inst_14332 < inst_14331);
var inst_14343 = inst_14342;
var state_14385__$1 = state_14385;
if(cljs.core.truth_(inst_14343)){
var statearr_14426_15903 = state_14385__$1;
(statearr_14426_15903[(1)] = (10));

} else {
var statearr_14427_15904 = state_14385__$1;
(statearr_14427_15904[(1)] = (11));

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
var statearr_14429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14429[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_14429[(1)] = (1));

return statearr_14429;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_14385){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14385);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14430){var ex__12075__auto__ = e14430;
var statearr_14432_15905 = state_14385;
(statearr_14432_15905[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14385[(4)]))){
var statearr_14433_15906 = state_14385;
(statearr_14433_15906[(1)] = cljs.core.first((state_14385[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15907 = state_14385;
state_14385 = G__15907;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_14385){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_14385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14434 = f__12108__auto__();
(statearr_14434[(6)] = c__12107__auto__);

return statearr_14434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14438 = arguments.length;
switch (G__14438) {
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
var G__14441 = arguments.length;
switch (G__14441) {
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
var G__14443 = arguments.length;
switch (G__14443) {
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
var c__12107__auto___15925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14467){
var state_val_14468 = (state_14467[(1)]);
if((state_val_14468 === (7))){
var inst_14462 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14469_15926 = state_14467__$1;
(statearr_14469_15926[(2)] = inst_14462);

(statearr_14469_15926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (1))){
var inst_14444 = null;
var state_14467__$1 = (function (){var statearr_14470 = state_14467;
(statearr_14470[(7)] = inst_14444);

return statearr_14470;
})();
var statearr_14471_15927 = state_14467__$1;
(statearr_14471_15927[(2)] = null);

(statearr_14471_15927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (4))){
var inst_14447 = (state_14467[(8)]);
var inst_14447__$1 = (state_14467[(2)]);
var inst_14448 = (inst_14447__$1 == null);
var inst_14449 = cljs.core.not(inst_14448);
var state_14467__$1 = (function (){var statearr_14473 = state_14467;
(statearr_14473[(8)] = inst_14447__$1);

return statearr_14473;
})();
if(inst_14449){
var statearr_14474_15928 = state_14467__$1;
(statearr_14474_15928[(1)] = (5));

} else {
var statearr_14475_15930 = state_14467__$1;
(statearr_14475_15930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (6))){
var state_14467__$1 = state_14467;
var statearr_14477_15931 = state_14467__$1;
(statearr_14477_15931[(2)] = null);

(statearr_14477_15931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (3))){
var inst_14464 = (state_14467[(2)]);
var inst_14465 = cljs.core.async.close_BANG_(out);
var state_14467__$1 = (function (){var statearr_14478 = state_14467;
(statearr_14478[(9)] = inst_14464);

return statearr_14478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14467__$1,inst_14465);
} else {
if((state_val_14468 === (2))){
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14467__$1,(4),ch);
} else {
if((state_val_14468 === (11))){
var inst_14447 = (state_14467[(8)]);
var inst_14456 = (state_14467[(2)]);
var inst_14444 = inst_14447;
var state_14467__$1 = (function (){var statearr_14480 = state_14467;
(statearr_14480[(10)] = inst_14456);

(statearr_14480[(7)] = inst_14444);

return statearr_14480;
})();
var statearr_14481_15934 = state_14467__$1;
(statearr_14481_15934[(2)] = null);

(statearr_14481_15934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (9))){
var inst_14447 = (state_14467[(8)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14467__$1,(11),out,inst_14447);
} else {
if((state_val_14468 === (5))){
var inst_14447 = (state_14467[(8)]);
var inst_14444 = (state_14467[(7)]);
var inst_14451 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14447,inst_14444);
var state_14467__$1 = state_14467;
if(inst_14451){
var statearr_14484_15935 = state_14467__$1;
(statearr_14484_15935[(1)] = (8));

} else {
var statearr_14485_15936 = state_14467__$1;
(statearr_14485_15936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (10))){
var inst_14459 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14486_15937 = state_14467__$1;
(statearr_14486_15937[(2)] = inst_14459);

(statearr_14486_15937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (8))){
var inst_14444 = (state_14467[(7)]);
var tmp14482 = inst_14444;
var inst_14444__$1 = tmp14482;
var state_14467__$1 = (function (){var statearr_14488 = state_14467;
(statearr_14488[(7)] = inst_14444__$1);

return statearr_14488;
})();
var statearr_14489_15940 = state_14467__$1;
(statearr_14489_15940[(2)] = null);

(statearr_14489_15940[(1)] = (2));


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
var statearr_14490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14490[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14490[(1)] = (1));

return statearr_14490;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14467){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14467);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14492){var ex__12075__auto__ = e14492;
var statearr_14493_15941 = state_14467;
(statearr_14493_15941[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14467[(4)]))){
var statearr_14494_15942 = state_14467;
(statearr_14494_15942[(1)] = cljs.core.first((state_14467[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15945 = state_14467;
state_14467 = G__15945;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14496 = f__12108__auto__();
(statearr_14496[(6)] = c__12107__auto___15925);

return statearr_14496;
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
var G__14498 = arguments.length;
switch (G__14498) {
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
var c__12107__auto___15964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14536){
var state_val_14537 = (state_14536[(1)]);
if((state_val_14537 === (7))){
var inst_14532 = (state_14536[(2)]);
var state_14536__$1 = state_14536;
var statearr_14538_15965 = state_14536__$1;
(statearr_14538_15965[(2)] = inst_14532);

(statearr_14538_15965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (1))){
var inst_14499 = (new Array(n));
var inst_14500 = inst_14499;
var inst_14501 = (0);
var state_14536__$1 = (function (){var statearr_14539 = state_14536;
(statearr_14539[(7)] = inst_14500);

(statearr_14539[(8)] = inst_14501);

return statearr_14539;
})();
var statearr_14540_15966 = state_14536__$1;
(statearr_14540_15966[(2)] = null);

(statearr_14540_15966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (4))){
var inst_14504 = (state_14536[(9)]);
var inst_14504__$1 = (state_14536[(2)]);
var inst_14505 = (inst_14504__$1 == null);
var inst_14506 = cljs.core.not(inst_14505);
var state_14536__$1 = (function (){var statearr_14541 = state_14536;
(statearr_14541[(9)] = inst_14504__$1);

return statearr_14541;
})();
if(inst_14506){
var statearr_14542_15968 = state_14536__$1;
(statearr_14542_15968[(1)] = (5));

} else {
var statearr_14543_15970 = state_14536__$1;
(statearr_14543_15970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (15))){
var inst_14526 = (state_14536[(2)]);
var state_14536__$1 = state_14536;
var statearr_14544_15972 = state_14536__$1;
(statearr_14544_15972[(2)] = inst_14526);

(statearr_14544_15972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (13))){
var state_14536__$1 = state_14536;
var statearr_14546_15973 = state_14536__$1;
(statearr_14546_15973[(2)] = null);

(statearr_14546_15973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (6))){
var inst_14501 = (state_14536[(8)]);
var inst_14522 = (inst_14501 > (0));
var state_14536__$1 = state_14536;
if(cljs.core.truth_(inst_14522)){
var statearr_14547_15974 = state_14536__$1;
(statearr_14547_15974[(1)] = (12));

} else {
var statearr_14548_15975 = state_14536__$1;
(statearr_14548_15975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (3))){
var inst_14534 = (state_14536[(2)]);
var state_14536__$1 = state_14536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14536__$1,inst_14534);
} else {
if((state_val_14537 === (12))){
var inst_14500 = (state_14536[(7)]);
var inst_14524 = cljs.core.vec(inst_14500);
var state_14536__$1 = state_14536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14536__$1,(15),out,inst_14524);
} else {
if((state_val_14537 === (2))){
var state_14536__$1 = state_14536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14536__$1,(4),ch);
} else {
if((state_val_14537 === (11))){
var inst_14516 = (state_14536[(2)]);
var inst_14517 = (new Array(n));
var inst_14500 = inst_14517;
var inst_14501 = (0);
var state_14536__$1 = (function (){var statearr_14549 = state_14536;
(statearr_14549[(10)] = inst_14516);

(statearr_14549[(7)] = inst_14500);

(statearr_14549[(8)] = inst_14501);

return statearr_14549;
})();
var statearr_14550_15977 = state_14536__$1;
(statearr_14550_15977[(2)] = null);

(statearr_14550_15977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (9))){
var inst_14500 = (state_14536[(7)]);
var inst_14514 = cljs.core.vec(inst_14500);
var state_14536__$1 = state_14536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14536__$1,(11),out,inst_14514);
} else {
if((state_val_14537 === (5))){
var inst_14500 = (state_14536[(7)]);
var inst_14509 = (state_14536[(11)]);
var inst_14504 = (state_14536[(9)]);
var inst_14501 = (state_14536[(8)]);
var inst_14508 = (inst_14500[inst_14501] = inst_14504);
var inst_14509__$1 = (inst_14501 + (1));
var inst_14510 = (inst_14509__$1 < n);
var state_14536__$1 = (function (){var statearr_14552 = state_14536;
(statearr_14552[(12)] = inst_14508);

(statearr_14552[(11)] = inst_14509__$1);

return statearr_14552;
})();
if(cljs.core.truth_(inst_14510)){
var statearr_14553_15980 = state_14536__$1;
(statearr_14553_15980[(1)] = (8));

} else {
var statearr_14555_15981 = state_14536__$1;
(statearr_14555_15981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (14))){
var inst_14529 = (state_14536[(2)]);
var inst_14530 = cljs.core.async.close_BANG_(out);
var state_14536__$1 = (function (){var statearr_14557 = state_14536;
(statearr_14557[(13)] = inst_14529);

return statearr_14557;
})();
var statearr_14558_15982 = state_14536__$1;
(statearr_14558_15982[(2)] = inst_14530);

(statearr_14558_15982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (10))){
var inst_14520 = (state_14536[(2)]);
var state_14536__$1 = state_14536;
var statearr_14560_15983 = state_14536__$1;
(statearr_14560_15983[(2)] = inst_14520);

(statearr_14560_15983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (8))){
var inst_14500 = (state_14536[(7)]);
var inst_14509 = (state_14536[(11)]);
var tmp14556 = inst_14500;
var inst_14500__$1 = tmp14556;
var inst_14501 = inst_14509;
var state_14536__$1 = (function (){var statearr_14561 = state_14536;
(statearr_14561[(7)] = inst_14500__$1);

(statearr_14561[(8)] = inst_14501);

return statearr_14561;
})();
var statearr_14562_15986 = state_14536__$1;
(statearr_14562_15986[(2)] = null);

(statearr_14562_15986[(1)] = (2));


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
var statearr_14564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14564[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14564[(1)] = (1));

return statearr_14564;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14536){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14536);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14565){var ex__12075__auto__ = e14565;
var statearr_14566_15997 = state_14536;
(statearr_14566_15997[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14536[(4)]))){
var statearr_14567_15998 = state_14536;
(statearr_14567_15998[(1)] = cljs.core.first((state_14536[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16000 = state_14536;
state_14536 = G__16000;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14569 = f__12108__auto__();
(statearr_14569[(6)] = c__12107__auto___15964);

return statearr_14569;
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
var G__14572 = arguments.length;
switch (G__14572) {
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
var c__12107__auto___16004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14614){
var state_val_14615 = (state_14614[(1)]);
if((state_val_14615 === (7))){
var inst_14610 = (state_14614[(2)]);
var state_14614__$1 = state_14614;
var statearr_14616_16005 = state_14614__$1;
(statearr_14616_16005[(2)] = inst_14610);

(statearr_14616_16005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (1))){
var inst_14573 = [];
var inst_14574 = inst_14573;
var inst_14575 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14614__$1 = (function (){var statearr_14617 = state_14614;
(statearr_14617[(7)] = inst_14574);

(statearr_14617[(8)] = inst_14575);

return statearr_14617;
})();
var statearr_14618_16007 = state_14614__$1;
(statearr_14618_16007[(2)] = null);

(statearr_14618_16007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (4))){
var inst_14578 = (state_14614[(9)]);
var inst_14578__$1 = (state_14614[(2)]);
var inst_14579 = (inst_14578__$1 == null);
var inst_14580 = cljs.core.not(inst_14579);
var state_14614__$1 = (function (){var statearr_14619 = state_14614;
(statearr_14619[(9)] = inst_14578__$1);

return statearr_14619;
})();
if(inst_14580){
var statearr_14620_16010 = state_14614__$1;
(statearr_14620_16010[(1)] = (5));

} else {
var statearr_14621_16011 = state_14614__$1;
(statearr_14621_16011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (15))){
var inst_14604 = (state_14614[(2)]);
var state_14614__$1 = state_14614;
var statearr_14622_16012 = state_14614__$1;
(statearr_14622_16012[(2)] = inst_14604);

(statearr_14622_16012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (13))){
var state_14614__$1 = state_14614;
var statearr_14623_16013 = state_14614__$1;
(statearr_14623_16013[(2)] = null);

(statearr_14623_16013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (6))){
var inst_14574 = (state_14614[(7)]);
var inst_14599 = inst_14574.length;
var inst_14600 = (inst_14599 > (0));
var state_14614__$1 = state_14614;
if(cljs.core.truth_(inst_14600)){
var statearr_14625_16014 = state_14614__$1;
(statearr_14625_16014[(1)] = (12));

} else {
var statearr_14626_16015 = state_14614__$1;
(statearr_14626_16015[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (3))){
var inst_14612 = (state_14614[(2)]);
var state_14614__$1 = state_14614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14614__$1,inst_14612);
} else {
if((state_val_14615 === (12))){
var inst_14574 = (state_14614[(7)]);
var inst_14602 = cljs.core.vec(inst_14574);
var state_14614__$1 = state_14614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14614__$1,(15),out,inst_14602);
} else {
if((state_val_14615 === (2))){
var state_14614__$1 = state_14614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14614__$1,(4),ch);
} else {
if((state_val_14615 === (11))){
var inst_14578 = (state_14614[(9)]);
var inst_14582 = (state_14614[(10)]);
var inst_14592 = (state_14614[(2)]);
var inst_14593 = [];
var inst_14594 = inst_14593.push(inst_14578);
var inst_14574 = inst_14593;
var inst_14575 = inst_14582;
var state_14614__$1 = (function (){var statearr_14628 = state_14614;
(statearr_14628[(7)] = inst_14574);

(statearr_14628[(11)] = inst_14592);

(statearr_14628[(8)] = inst_14575);

(statearr_14628[(12)] = inst_14594);

return statearr_14628;
})();
var statearr_14630_16019 = state_14614__$1;
(statearr_14630_16019[(2)] = null);

(statearr_14630_16019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (9))){
var inst_14574 = (state_14614[(7)]);
var inst_14590 = cljs.core.vec(inst_14574);
var state_14614__$1 = state_14614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14614__$1,(11),out,inst_14590);
} else {
if((state_val_14615 === (5))){
var inst_14575 = (state_14614[(8)]);
var inst_14578 = (state_14614[(9)]);
var inst_14582 = (state_14614[(10)]);
var inst_14582__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14578) : f.call(null,inst_14578));
var inst_14583 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14582__$1,inst_14575);
var inst_14584 = cljs.core.keyword_identical_QMARK_(inst_14575,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14585 = ((inst_14583) || (inst_14584));
var state_14614__$1 = (function (){var statearr_14632 = state_14614;
(statearr_14632[(10)] = inst_14582__$1);

return statearr_14632;
})();
if(cljs.core.truth_(inst_14585)){
var statearr_14633_16029 = state_14614__$1;
(statearr_14633_16029[(1)] = (8));

} else {
var statearr_14634_16030 = state_14614__$1;
(statearr_14634_16030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (14))){
var inst_14607 = (state_14614[(2)]);
var inst_14608 = cljs.core.async.close_BANG_(out);
var state_14614__$1 = (function (){var statearr_14637 = state_14614;
(statearr_14637[(13)] = inst_14607);

return statearr_14637;
})();
var statearr_14638_16031 = state_14614__$1;
(statearr_14638_16031[(2)] = inst_14608);

(statearr_14638_16031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (10))){
var inst_14597 = (state_14614[(2)]);
var state_14614__$1 = state_14614;
var statearr_14639_16033 = state_14614__$1;
(statearr_14639_16033[(2)] = inst_14597);

(statearr_14639_16033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14615 === (8))){
var inst_14574 = (state_14614[(7)]);
var inst_14578 = (state_14614[(9)]);
var inst_14582 = (state_14614[(10)]);
var inst_14587 = inst_14574.push(inst_14578);
var tmp14635 = inst_14574;
var inst_14574__$1 = tmp14635;
var inst_14575 = inst_14582;
var state_14614__$1 = (function (){var statearr_14641 = state_14614;
(statearr_14641[(7)] = inst_14574__$1);

(statearr_14641[(14)] = inst_14587);

(statearr_14641[(8)] = inst_14575);

return statearr_14641;
})();
var statearr_14642_16035 = state_14614__$1;
(statearr_14642_16035[(2)] = null);

(statearr_14642_16035[(1)] = (2));


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
var statearr_14644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14644[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14644[(1)] = (1));

return statearr_14644;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14614){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14614);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14645){var ex__12075__auto__ = e14645;
var statearr_14646_16037 = state_14614;
(statearr_14646_16037[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14614[(4)]))){
var statearr_14647_16038 = state_14614;
(statearr_14647_16038[(1)] = cljs.core.first((state_14614[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16039 = state_14614;
state_14614 = G__16039;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14648 = f__12108__auto__();
(statearr_14648[(6)] = c__12107__auto___16004);

return statearr_14648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
