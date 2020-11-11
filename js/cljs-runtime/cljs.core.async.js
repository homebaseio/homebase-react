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
var val_13697 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13697) : fn1.call(null,val_13697));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13697) : fn1.call(null,val_13697));
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
var n__4613__auto___13703 = n;
var x_13704 = (0);
while(true){
if((x_13704 < n__4613__auto___13703)){
(a[x_13704] = x_13704);

var G__13705 = (x_13704 + (1));
x_13704 = G__13705;
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
var G__13726 = (i + (1));
i = G__13726;
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
var len__4736__auto___13727 = arguments.length;
var i__4737__auto___13728 = (0);
while(true){
if((i__4737__auto___13728 < len__4736__auto___13727)){
args__4742__auto__.push((arguments[i__4737__auto___13728]));

var G__13729 = (i__4737__auto___13728 + (1));
i__4737__auto___13728 = G__13729;
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
var c__12107__auto___13731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_13732 = state_12218__$1;
(statearr_12220_13732[(2)] = inst_12214);

(statearr_12220_13732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_13733 = state_12218__$1;
(statearr_12221_13733[(2)] = null);

(statearr_12221_13733[(1)] = (2));


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
var statearr_12223_13734 = state_12218__$1;
(statearr_12223_13734[(1)] = (5));

} else {
var statearr_12224_13735 = state_12218__$1;
(statearr_12224_13735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_13736 = state_12218__$1;
(statearr_12225_13736[(2)] = null);

(statearr_12225_13736[(1)] = (14));


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
var statearr_12226_13737 = state_12218__$1;
(statearr_12226_13737[(2)] = null);

(statearr_12226_13737[(1)] = (2));


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
var statearr_12227_13738 = state_12218__$1;
(statearr_12227_13738[(1)] = (12));

} else {
var statearr_12228_13739 = state_12218__$1;
(statearr_12228_13739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_13740 = state_12218__$1;
(statearr_12229_13740[(2)] = null);

(statearr_12229_13740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_13741 = state_12218__$1;
(statearr_12230_13741[(1)] = (8));

} else {
var statearr_12231_13742 = state_12218__$1;
(statearr_12231_13742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_13743 = state_12218__$1;
(statearr_12232_13743[(2)] = inst_12212);

(statearr_12232_13743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_13744 = state_12218__$1;
(statearr_12233_13744[(2)] = inst_12204);

(statearr_12233_13744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_13745 = state_12218__$1;
(statearr_12234_13745[(2)] = inst_12201);

(statearr_12234_13745[(1)] = (10));


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
var statearr_12237_13746 = state_12218;
(statearr_12237_13746[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_13747 = state_12218;
(statearr_12238_13747[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13748 = state_12218;
state_12218 = G__13748;
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
(statearr_12239[(6)] = c__12107__auto___13731);

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
var c__12107__auto___13766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_12253_13804 = state_12248;
(statearr_12253_13804[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_13808 = state_12248;
(statearr_12254_13808[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13811 = state_12248;
state_12248 = G__13811;
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
(statearr_12255[(6)] = c__12107__auto___13766);

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
var n__4613__auto___13826 = n;
var __13829 = (0);
while(true){
if((__13829 < n__4613__auto___13826)){
var G__12260_13831 = type;
var G__12260_13832__$1 = (((G__12260_13831 instanceof cljs.core.Keyword))?G__12260_13831.fqn:null);
switch (G__12260_13832__$1) {
case "compute":
var c__12107__auto___13837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13829,c__12107__auto___13837,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__13829,c__12107__auto___13837,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_13848 = state_12273__$1;
(statearr_12275_13848[(2)] = null);

(statearr_12275_13848[(1)] = (2));


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
var statearr_12276_13859 = state_12273__$1;
(statearr_12276_13859[(1)] = (5));

} else {
var statearr_12277_13860 = state_12273__$1;
(statearr_12277_13860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_13861 = state_12273__$1;
(statearr_12278_13861[(2)] = null);

(statearr_12278_13861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_13862 = state_12273__$1;
(statearr_12279_13862[(2)] = null);

(statearr_12279_13862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_13863 = state_12273__$1;
(statearr_12280_13863[(2)] = inst_12269);

(statearr_12280_13863[(1)] = (3));


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
});})(__13829,c__12107__auto___13837,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async))
;
return ((function (__13829,switch__12071__auto__,c__12107__auto___13837,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async){
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
var statearr_12283_13868 = state_12273;
(statearr_12283_13868[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_13883 = state_12273;
(statearr_12284_13883[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13892 = state_12273;
state_12273 = G__13892;
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
;})(__13829,switch__12071__auto__,c__12107__auto___13837,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___13837);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__13829,c__12107__auto___13837,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___13893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13829,c__12107__auto___13893,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__13829,c__12107__auto___13893,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_13919 = state_12298__$1;
(statearr_12300_13919[(2)] = null);

(statearr_12300_13919[(1)] = (2));


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
var statearr_12301_13922 = state_12298__$1;
(statearr_12301_13922[(1)] = (5));

} else {
var statearr_12302_13923 = state_12298__$1;
(statearr_12302_13923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_13929 = state_12298__$1;
(statearr_12303_13929[(2)] = null);

(statearr_12303_13929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_13931 = state_12298__$1;
(statearr_12304_13931[(2)] = null);

(statearr_12304_13931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_13937 = state_12298__$1;
(statearr_12305_13937[(2)] = inst_12294);

(statearr_12305_13937[(1)] = (3));


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
});})(__13829,c__12107__auto___13893,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async))
;
return ((function (__13829,switch__12071__auto__,c__12107__auto___13893,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async){
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
var statearr_12308_13949 = state_12298;
(statearr_12308_13949[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_13952 = state_12298;
(statearr_12309_13952[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13955 = state_12298;
state_12298 = G__13955;
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
;})(__13829,switch__12071__auto__,c__12107__auto___13893,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___13893);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__13829,c__12107__auto___13893,G__12260_13831,G__12260_13832__$1,n__4613__auto___13826,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_13832__$1)].join('')));

}

var G__13963 = (__13829 + (1));
__13829 = G__13963;
continue;
} else {
}
break;
}

var c__12107__auto___13965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_13972 = state_12332__$1;
(statearr_12334_13972[(2)] = inst_12328);

(statearr_12334_13972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_13976 = state_12332__$1;
(statearr_12335_13976[(2)] = null);

(statearr_12335_13976[(1)] = (2));


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
var statearr_12337_14050 = state_12332__$1;
(statearr_12337_14050[(1)] = (5));

} else {
var statearr_12338_14051 = state_12332__$1;
(statearr_12338_14051[(1)] = (6));

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
var statearr_12341_14052 = state_12332__$1;
(statearr_12341_14052[(2)] = null);

(statearr_12341_14052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_14055 = state_12332__$1;
(statearr_12342_14055[(2)] = inst_12316);

(statearr_12342_14055[(1)] = (7));


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
var statearr_12346_14056 = state_12332;
(statearr_12346_14056[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_14057 = state_12332;
(statearr_12347_14057[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14058 = state_12332;
state_12332 = G__14058;
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
(statearr_12348[(6)] = c__12107__auto___13965);

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
var statearr_12388_14059 = state_12386__$1;
(statearr_12388_14059[(2)] = inst_12382);

(statearr_12388_14059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (20))){
var state_12386__$1 = state_12386;
var statearr_12389_14060 = state_12386__$1;
(statearr_12389_14060[(2)] = null);

(statearr_12389_14060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (1))){
var state_12386__$1 = state_12386;
var statearr_12390_14087 = state_12386__$1;
(statearr_12390_14087[(2)] = null);

(statearr_12390_14087[(1)] = (2));


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
var statearr_12392_14090 = state_12386__$1;
(statearr_12392_14090[(1)] = (5));

} else {
var statearr_12393_14091 = state_12386__$1;
(statearr_12393_14091[(1)] = (6));

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
var statearr_12394_14094 = state_12386__$1;
(statearr_12394_14094[(2)] = inst_12377);

(statearr_12394_14094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (13))){
var inst_12379 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12395 = state_12386;
(statearr_12395[(9)] = inst_12379);

return statearr_12395;
})();
var statearr_12396_14099 = state_12386__$1;
(statearr_12396_14099[(2)] = null);

(statearr_12396_14099[(1)] = (2));


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
var statearr_12397_14103 = state_12386__$1;
(statearr_12397_14103[(1)] = (19));

} else {
var statearr_12398_14106 = state_12386__$1;
(statearr_12398_14106[(1)] = (20));

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
var statearr_12399_14110 = state_12386__$1;
(statearr_12399_14110[(2)] = null);

(statearr_12399_14110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (11))){
var inst_12361 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12400 = state_12386;
(statearr_12400[(10)] = inst_12361);

return statearr_12400;
})();
var statearr_12401_14115 = state_12386__$1;
(statearr_12401_14115[(2)] = null);

(statearr_12401_14115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12402_14118 = state_12386__$1;
(statearr_12402_14118[(2)] = null);

(statearr_12402_14118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12403_14123 = state_12386__$1;
(statearr_12403_14123[(1)] = (8));

} else {
var statearr_12404_14126 = state_12386__$1;
(statearr_12404_14126[(1)] = (9));

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
var statearr_12406_14127 = state_12386__$1;
(statearr_12406_14127[(1)] = (15));

} else {
var statearr_12407_14128 = state_12386__$1;
(statearr_12407_14128[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12408_14131 = state_12386__$1;
(statearr_12408_14131[(2)] = false);

(statearr_12408_14131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12409_14132 = state_12386__$1;
(statearr_12409_14132[(2)] = inst_12358);

(statearr_12409_14132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12410_14182 = state_12386__$1;
(statearr_12410_14182[(2)] = inst_12369);

(statearr_12410_14182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12411_14183 = state_12386__$1;
(statearr_12411_14183[(2)] = inst_12355);

(statearr_12411_14183[(1)] = (10));


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
var statearr_12414_14184 = state_12386;
(statearr_12414_14184[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12415_14185 = state_12386;
(statearr_12415_14185[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14186 = state_12386;
state_12386 = G__14186;
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
var c__12107__auto___14260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12448){
var state_val_12449 = (state_12448[(1)]);
if((state_val_12449 === (7))){
var inst_12444 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12450_14261 = state_12448__$1;
(statearr_12450_14261[(2)] = inst_12444);

(statearr_12450_14261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (1))){
var state_12448__$1 = state_12448;
var statearr_12451_14262 = state_12448__$1;
(statearr_12451_14262[(2)] = null);

(statearr_12451_14262[(1)] = (2));


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
var statearr_12453_14263 = state_12448__$1;
(statearr_12453_14263[(1)] = (5));

} else {
var statearr_12454_14264 = state_12448__$1;
(statearr_12454_14264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (13))){
var state_12448__$1 = state_12448;
var statearr_12455_14265 = state_12448__$1;
(statearr_12455_14265[(2)] = null);

(statearr_12455_14265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (6))){
var inst_12425 = (state_12448[(7)]);
var inst_12431 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12425) : p.call(null,inst_12425));
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12431)){
var statearr_12456_14266 = state_12448__$1;
(statearr_12456_14266[(1)] = (9));

} else {
var statearr_12457_14267 = state_12448__$1;
(statearr_12457_14267[(1)] = (10));

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
var statearr_12458_14268 = state_12448__$1;
(statearr_12458_14268[(2)] = null);

(statearr_12458_14268[(1)] = (2));


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
var statearr_12459_14269 = state_12448__$1;
(statearr_12459_14269[(2)] = tc);

(statearr_12459_14269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (5))){
var inst_12428 = cljs.core.async.close_BANG_(tc);
var inst_12429 = cljs.core.async.close_BANG_(fc);
var state_12448__$1 = (function (){var statearr_12460 = state_12448;
(statearr_12460[(8)] = inst_12428);

return statearr_12460;
})();
var statearr_12461_14275 = state_12448__$1;
(statearr_12461_14275[(2)] = inst_12429);

(statearr_12461_14275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (14))){
var inst_12442 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12462_14280 = state_12448__$1;
(statearr_12462_14280[(2)] = inst_12442);

(statearr_12462_14280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (10))){
var state_12448__$1 = state_12448;
var statearr_12463_14283 = state_12448__$1;
(statearr_12463_14283[(2)] = fc);

(statearr_12463_14283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (8))){
var inst_12437 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12437)){
var statearr_12464_14289 = state_12448__$1;
(statearr_12464_14289[(1)] = (12));

} else {
var statearr_12465_14291 = state_12448__$1;
(statearr_12465_14291[(1)] = (13));

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
var statearr_12468_14300 = state_12448;
(statearr_12468_14300[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12448[(4)]))){
var statearr_12469_14301 = state_12448;
(statearr_12469_14301[(1)] = cljs.core.first((state_12448[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14302 = state_12448;
state_12448 = G__14302;
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
(statearr_12470[(6)] = c__12107__auto___14260);

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
var statearr_12494_14303 = state_12492__$1;
(statearr_12494_14303[(2)] = inst_12488);

(statearr_12494_14303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (1))){
var inst_12471 = init;
var inst_12472 = inst_12471;
var state_12492__$1 = (function (){var statearr_12495 = state_12492;
(statearr_12495[(7)] = inst_12472);

return statearr_12495;
})();
var statearr_12496_14304 = state_12492__$1;
(statearr_12496_14304[(2)] = null);

(statearr_12496_14304[(1)] = (2));


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
var statearr_12498_14305 = state_12492__$1;
(statearr_12498_14305[(1)] = (5));

} else {
var statearr_12499_14306 = state_12492__$1;
(statearr_12499_14306[(1)] = (6));

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
var statearr_12501_14309 = state_12492__$1;
(statearr_12501_14309[(1)] = (8));

} else {
var statearr_12502_14310 = state_12492__$1;
(statearr_12502_14310[(1)] = (9));

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
var statearr_12504_14311 = state_12492__$1;
(statearr_12504_14311[(2)] = null);

(statearr_12504_14311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (5))){
var inst_12472 = (state_12492[(7)]);
var state_12492__$1 = state_12492;
var statearr_12505_14314 = state_12492__$1;
(statearr_12505_14314[(2)] = inst_12472);

(statearr_12505_14314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (10))){
var inst_12486 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12506_14317 = state_12492__$1;
(statearr_12506_14317[(2)] = inst_12486);

(statearr_12506_14317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (8))){
var inst_12479 = (state_12492[(9)]);
var inst_12482 = cljs.core.deref(inst_12479);
var state_12492__$1 = state_12492;
var statearr_12507_14335 = state_12492__$1;
(statearr_12507_14335[(2)] = inst_12482);

(statearr_12507_14335[(1)] = (10));


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
var statearr_12510_14337 = state_12492;
(statearr_12510_14337[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12492[(4)]))){
var statearr_12511_14338 = state_12492;
(statearr_12511_14338[(1)] = cljs.core.first((state_12492[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14339 = state_12492;
state_12492 = G__14339;
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
var statearr_12522_14344 = state_12518;
(statearr_12522_14344[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12518[(4)]))){
var statearr_12523_14347 = state_12518;
(statearr_12523_14347[(1)] = cljs.core.first((state_12518[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14348 = state_12518;
state_12518 = G__14348;
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
var statearr_12553_14394 = state_12551__$1;
(statearr_12553_14394[(2)] = inst_12533);

(statearr_12553_14394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (1))){
var inst_12527 = cljs.core.seq(coll);
var inst_12528 = inst_12527;
var state_12551__$1 = (function (){var statearr_12554 = state_12551;
(statearr_12554[(7)] = inst_12528);

return statearr_12554;
})();
var statearr_12555_14396 = state_12551__$1;
(statearr_12555_14396[(2)] = null);

(statearr_12555_14396[(1)] = (2));


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
var statearr_12556_14402 = state_12551__$1;
(statearr_12556_14402[(2)] = inst_12545);

(statearr_12556_14402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (6))){
var inst_12536 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12536)){
var statearr_12557_14405 = state_12551__$1;
(statearr_12557_14405[(1)] = (8));

} else {
var statearr_12558_14407 = state_12551__$1;
(statearr_12558_14407[(1)] = (9));

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
var statearr_12559_14409 = state_12551__$1;
(statearr_12559_14409[(2)] = null);

(statearr_12559_14409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (2))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12528)){
var statearr_12560_14436 = state_12551__$1;
(statearr_12560_14436[(1)] = (4));

} else {
var statearr_12561_14437 = state_12551__$1;
(statearr_12561_14437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (11))){
var inst_12542 = cljs.core.async.close_BANG_(ch);
var state_12551__$1 = state_12551;
var statearr_12562_14438 = state_12551__$1;
(statearr_12562_14438[(2)] = inst_12542);

(statearr_12562_14438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (9))){
var state_12551__$1 = state_12551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12563_14439 = state_12551__$1;
(statearr_12563_14439[(1)] = (11));

} else {
var statearr_12564_14440 = state_12551__$1;
(statearr_12564_14440[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (5))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
var statearr_12565_14441 = state_12551__$1;
(statearr_12565_14441[(2)] = inst_12528);

(statearr_12565_14441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (10))){
var inst_12547 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12566_14442 = state_12551__$1;
(statearr_12566_14442[(2)] = inst_12547);

(statearr_12566_14442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (8))){
var inst_12528 = (state_12551[(7)]);
var inst_12538 = cljs.core.next(inst_12528);
var inst_12528__$1 = inst_12538;
var state_12551__$1 = (function (){var statearr_12567 = state_12551;
(statearr_12567[(7)] = inst_12528__$1);

return statearr_12567;
})();
var statearr_12568_14443 = state_12551__$1;
(statearr_12568_14443[(2)] = null);

(statearr_12568_14443[(1)] = (2));


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
var statearr_12569 = [null,null,null,null,null,null,null,null];
(statearr_12569[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12569[(1)] = (1));

return statearr_12569;
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
}catch (e12570){var ex__12075__auto__ = e12570;
var statearr_12571_14444 = state_12551;
(statearr_12571_14444[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12551[(4)]))){
var statearr_12572_14445 = state_12551;
(statearr_12572_14445[(1)] = cljs.core.first((state_12551[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14446 = state_12551;
state_12551 = G__14446;
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
var state__12109__auto__ = (function (){var statearr_12573 = f__12108__auto__();
(statearr_12573[(6)] = c__12107__auto__);

return statearr_12573;
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
var G__12575 = arguments.length;
switch (G__12575) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14464 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14464(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14485 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14485(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14486 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14486(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14487 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14487(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12576 = (function (ch,cs,meta12577){
this.ch = ch;
this.cs = cs;
this.meta12577 = meta12577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12578,meta12577__$1){
var self__ = this;
var _12578__$1 = this;
return (new cljs.core.async.t_cljs$core$async12576(self__.ch,self__.cs,meta12577__$1));
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12578){
var self__ = this;
var _12578__$1 = this;
return self__.meta12577;
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12577","meta12577",-744763079,null)], null);
}));

(cljs.core.async.t_cljs$core$async12576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12576");

(cljs.core.async.t_cljs$core$async12576.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12576.
 */
cljs.core.async.__GT_t_cljs$core$async12576 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12576(ch__$1,cs__$1,meta12577){
return (new cljs.core.async.t_cljs$core$async12576(ch__$1,cs__$1,meta12577));
});

}

return (new cljs.core.async.t_cljs$core$async12576(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12107__auto___14494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12711){
var state_val_12712 = (state_12711[(1)]);
if((state_val_12712 === (7))){
var inst_12707 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12713_14495 = state_12711__$1;
(statearr_12713_14495[(2)] = inst_12707);

(statearr_12713_14495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (20))){
var inst_12612 = (state_12711[(7)]);
var inst_12624 = cljs.core.first(inst_12612);
var inst_12625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12624,(0),null);
var inst_12626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12624,(1),null);
var state_12711__$1 = (function (){var statearr_12714 = state_12711;
(statearr_12714[(8)] = inst_12625);

return statearr_12714;
})();
if(cljs.core.truth_(inst_12626)){
var statearr_12715_14496 = state_12711__$1;
(statearr_12715_14496[(1)] = (22));

} else {
var statearr_12716_14497 = state_12711__$1;
(statearr_12716_14497[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (27))){
var inst_12654 = (state_12711[(9)]);
var inst_12581 = (state_12711[(10)]);
var inst_12656 = (state_12711[(11)]);
var inst_12661 = (state_12711[(12)]);
var inst_12661__$1 = cljs.core._nth(inst_12654,inst_12656);
var inst_12662 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12661__$1,inst_12581,done);
var state_12711__$1 = (function (){var statearr_12717 = state_12711;
(statearr_12717[(12)] = inst_12661__$1);

return statearr_12717;
})();
if(cljs.core.truth_(inst_12662)){
var statearr_12718_14498 = state_12711__$1;
(statearr_12718_14498[(1)] = (30));

} else {
var statearr_12719_14499 = state_12711__$1;
(statearr_12719_14499[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (1))){
var state_12711__$1 = state_12711;
var statearr_12720_14500 = state_12711__$1;
(statearr_12720_14500[(2)] = null);

(statearr_12720_14500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (24))){
var inst_12612 = (state_12711[(7)]);
var inst_12631 = (state_12711[(2)]);
var inst_12632 = cljs.core.next(inst_12612);
var inst_12590 = inst_12632;
var inst_12591 = null;
var inst_12592 = (0);
var inst_12593 = (0);
var state_12711__$1 = (function (){var statearr_12721 = state_12711;
(statearr_12721[(13)] = inst_12591);

(statearr_12721[(14)] = inst_12593);

(statearr_12721[(15)] = inst_12590);

(statearr_12721[(16)] = inst_12592);

(statearr_12721[(17)] = inst_12631);

return statearr_12721;
})();
var statearr_12722_14501 = state_12711__$1;
(statearr_12722_14501[(2)] = null);

(statearr_12722_14501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (39))){
var state_12711__$1 = state_12711;
var statearr_12726_14502 = state_12711__$1;
(statearr_12726_14502[(2)] = null);

(statearr_12726_14502[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (4))){
var inst_12581 = (state_12711[(10)]);
var inst_12581__$1 = (state_12711[(2)]);
var inst_12582 = (inst_12581__$1 == null);
var state_12711__$1 = (function (){var statearr_12727 = state_12711;
(statearr_12727[(10)] = inst_12581__$1);

return statearr_12727;
})();
if(cljs.core.truth_(inst_12582)){
var statearr_12728_14530 = state_12711__$1;
(statearr_12728_14530[(1)] = (5));

} else {
var statearr_12729_14531 = state_12711__$1;
(statearr_12729_14531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (15))){
var inst_12591 = (state_12711[(13)]);
var inst_12593 = (state_12711[(14)]);
var inst_12590 = (state_12711[(15)]);
var inst_12592 = (state_12711[(16)]);
var inst_12608 = (state_12711[(2)]);
var inst_12609 = (inst_12593 + (1));
var tmp12723 = inst_12591;
var tmp12724 = inst_12590;
var tmp12725 = inst_12592;
var inst_12590__$1 = tmp12724;
var inst_12591__$1 = tmp12723;
var inst_12592__$1 = tmp12725;
var inst_12593__$1 = inst_12609;
var state_12711__$1 = (function (){var statearr_12730 = state_12711;
(statearr_12730[(18)] = inst_12608);

(statearr_12730[(13)] = inst_12591__$1);

(statearr_12730[(14)] = inst_12593__$1);

(statearr_12730[(15)] = inst_12590__$1);

(statearr_12730[(16)] = inst_12592__$1);

return statearr_12730;
})();
var statearr_12731_14532 = state_12711__$1;
(statearr_12731_14532[(2)] = null);

(statearr_12731_14532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (21))){
var inst_12635 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12735_14543 = state_12711__$1;
(statearr_12735_14543[(2)] = inst_12635);

(statearr_12735_14543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (31))){
var inst_12661 = (state_12711[(12)]);
var inst_12665 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12661);
var state_12711__$1 = state_12711;
var statearr_12736_14544 = state_12711__$1;
(statearr_12736_14544[(2)] = inst_12665);

(statearr_12736_14544[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (32))){
var inst_12654 = (state_12711[(9)]);
var inst_12656 = (state_12711[(11)]);
var inst_12655 = (state_12711[(19)]);
var inst_12653 = (state_12711[(20)]);
var inst_12667 = (state_12711[(2)]);
var inst_12668 = (inst_12656 + (1));
var tmp12732 = inst_12654;
var tmp12733 = inst_12655;
var tmp12734 = inst_12653;
var inst_12653__$1 = tmp12734;
var inst_12654__$1 = tmp12732;
var inst_12655__$1 = tmp12733;
var inst_12656__$1 = inst_12668;
var state_12711__$1 = (function (){var statearr_12737 = state_12711;
(statearr_12737[(9)] = inst_12654__$1);

(statearr_12737[(11)] = inst_12656__$1);

(statearr_12737[(21)] = inst_12667);

(statearr_12737[(19)] = inst_12655__$1);

(statearr_12737[(20)] = inst_12653__$1);

return statearr_12737;
})();
var statearr_12738_14545 = state_12711__$1;
(statearr_12738_14545[(2)] = null);

(statearr_12738_14545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (40))){
var inst_12680 = (state_12711[(22)]);
var inst_12684 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12680);
var state_12711__$1 = state_12711;
var statearr_12739_14546 = state_12711__$1;
(statearr_12739_14546[(2)] = inst_12684);

(statearr_12739_14546[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (33))){
var inst_12671 = (state_12711[(23)]);
var inst_12673 = cljs.core.chunked_seq_QMARK_(inst_12671);
var state_12711__$1 = state_12711;
if(inst_12673){
var statearr_12740_14547 = state_12711__$1;
(statearr_12740_14547[(1)] = (36));

} else {
var statearr_12741_14548 = state_12711__$1;
(statearr_12741_14548[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (13))){
var inst_12602 = (state_12711[(24)]);
var inst_12605 = cljs.core.async.close_BANG_(inst_12602);
var state_12711__$1 = state_12711;
var statearr_12742_14549 = state_12711__$1;
(statearr_12742_14549[(2)] = inst_12605);

(statearr_12742_14549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (22))){
var inst_12625 = (state_12711[(8)]);
var inst_12628 = cljs.core.async.close_BANG_(inst_12625);
var state_12711__$1 = state_12711;
var statearr_12743_14550 = state_12711__$1;
(statearr_12743_14550[(2)] = inst_12628);

(statearr_12743_14550[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (36))){
var inst_12671 = (state_12711[(23)]);
var inst_12675 = cljs.core.chunk_first(inst_12671);
var inst_12676 = cljs.core.chunk_rest(inst_12671);
var inst_12677 = cljs.core.count(inst_12675);
var inst_12653 = inst_12676;
var inst_12654 = inst_12675;
var inst_12655 = inst_12677;
var inst_12656 = (0);
var state_12711__$1 = (function (){var statearr_12744 = state_12711;
(statearr_12744[(9)] = inst_12654);

(statearr_12744[(11)] = inst_12656);

(statearr_12744[(19)] = inst_12655);

(statearr_12744[(20)] = inst_12653);

return statearr_12744;
})();
var statearr_12745_14551 = state_12711__$1;
(statearr_12745_14551[(2)] = null);

(statearr_12745_14551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (41))){
var inst_12671 = (state_12711[(23)]);
var inst_12686 = (state_12711[(2)]);
var inst_12687 = cljs.core.next(inst_12671);
var inst_12653 = inst_12687;
var inst_12654 = null;
var inst_12655 = (0);
var inst_12656 = (0);
var state_12711__$1 = (function (){var statearr_12746 = state_12711;
(statearr_12746[(9)] = inst_12654);

(statearr_12746[(11)] = inst_12656);

(statearr_12746[(19)] = inst_12655);

(statearr_12746[(20)] = inst_12653);

(statearr_12746[(25)] = inst_12686);

return statearr_12746;
})();
var statearr_12747_14552 = state_12711__$1;
(statearr_12747_14552[(2)] = null);

(statearr_12747_14552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (43))){
var state_12711__$1 = state_12711;
var statearr_12748_14553 = state_12711__$1;
(statearr_12748_14553[(2)] = null);

(statearr_12748_14553[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (29))){
var inst_12695 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12749_14554 = state_12711__$1;
(statearr_12749_14554[(2)] = inst_12695);

(statearr_12749_14554[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (44))){
var inst_12704 = (state_12711[(2)]);
var state_12711__$1 = (function (){var statearr_12750 = state_12711;
(statearr_12750[(26)] = inst_12704);

return statearr_12750;
})();
var statearr_12751_14555 = state_12711__$1;
(statearr_12751_14555[(2)] = null);

(statearr_12751_14555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (6))){
var inst_12645 = (state_12711[(27)]);
var inst_12644 = cljs.core.deref(cs);
var inst_12645__$1 = cljs.core.keys(inst_12644);
var inst_12646 = cljs.core.count(inst_12645__$1);
var inst_12647 = cljs.core.reset_BANG_(dctr,inst_12646);
var inst_12652 = cljs.core.seq(inst_12645__$1);
var inst_12653 = inst_12652;
var inst_12654 = null;
var inst_12655 = (0);
var inst_12656 = (0);
var state_12711__$1 = (function (){var statearr_12752 = state_12711;
(statearr_12752[(9)] = inst_12654);

(statearr_12752[(11)] = inst_12656);

(statearr_12752[(27)] = inst_12645__$1);

(statearr_12752[(19)] = inst_12655);

(statearr_12752[(20)] = inst_12653);

(statearr_12752[(28)] = inst_12647);

return statearr_12752;
})();
var statearr_12753_14556 = state_12711__$1;
(statearr_12753_14556[(2)] = null);

(statearr_12753_14556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (28))){
var inst_12653 = (state_12711[(20)]);
var inst_12671 = (state_12711[(23)]);
var inst_12671__$1 = cljs.core.seq(inst_12653);
var state_12711__$1 = (function (){var statearr_12754 = state_12711;
(statearr_12754[(23)] = inst_12671__$1);

return statearr_12754;
})();
if(inst_12671__$1){
var statearr_12755_14576 = state_12711__$1;
(statearr_12755_14576[(1)] = (33));

} else {
var statearr_12756_14577 = state_12711__$1;
(statearr_12756_14577[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (25))){
var inst_12656 = (state_12711[(11)]);
var inst_12655 = (state_12711[(19)]);
var inst_12658 = (inst_12656 < inst_12655);
var inst_12659 = inst_12658;
var state_12711__$1 = state_12711;
if(cljs.core.truth_(inst_12659)){
var statearr_12757_14578 = state_12711__$1;
(statearr_12757_14578[(1)] = (27));

} else {
var statearr_12758_14579 = state_12711__$1;
(statearr_12758_14579[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (34))){
var state_12711__$1 = state_12711;
var statearr_12759_14580 = state_12711__$1;
(statearr_12759_14580[(2)] = null);

(statearr_12759_14580[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (17))){
var state_12711__$1 = state_12711;
var statearr_12760_14581 = state_12711__$1;
(statearr_12760_14581[(2)] = null);

(statearr_12760_14581[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (3))){
var inst_12709 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12711__$1,inst_12709);
} else {
if((state_val_12712 === (12))){
var inst_12640 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12761_14582 = state_12711__$1;
(statearr_12761_14582[(2)] = inst_12640);

(statearr_12761_14582[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (2))){
var state_12711__$1 = state_12711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12711__$1,(4),ch);
} else {
if((state_val_12712 === (23))){
var state_12711__$1 = state_12711;
var statearr_12762_14583 = state_12711__$1;
(statearr_12762_14583[(2)] = null);

(statearr_12762_14583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (35))){
var inst_12693 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12763_14584 = state_12711__$1;
(statearr_12763_14584[(2)] = inst_12693);

(statearr_12763_14584[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (19))){
var inst_12612 = (state_12711[(7)]);
var inst_12616 = cljs.core.chunk_first(inst_12612);
var inst_12617 = cljs.core.chunk_rest(inst_12612);
var inst_12618 = cljs.core.count(inst_12616);
var inst_12590 = inst_12617;
var inst_12591 = inst_12616;
var inst_12592 = inst_12618;
var inst_12593 = (0);
var state_12711__$1 = (function (){var statearr_12764 = state_12711;
(statearr_12764[(13)] = inst_12591);

(statearr_12764[(14)] = inst_12593);

(statearr_12764[(15)] = inst_12590);

(statearr_12764[(16)] = inst_12592);

return statearr_12764;
})();
var statearr_12765_14585 = state_12711__$1;
(statearr_12765_14585[(2)] = null);

(statearr_12765_14585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (11))){
var inst_12590 = (state_12711[(15)]);
var inst_12612 = (state_12711[(7)]);
var inst_12612__$1 = cljs.core.seq(inst_12590);
var state_12711__$1 = (function (){var statearr_12766 = state_12711;
(statearr_12766[(7)] = inst_12612__$1);

return statearr_12766;
})();
if(inst_12612__$1){
var statearr_12767_14586 = state_12711__$1;
(statearr_12767_14586[(1)] = (16));

} else {
var statearr_12768_14587 = state_12711__$1;
(statearr_12768_14587[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (9))){
var inst_12642 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12769_14588 = state_12711__$1;
(statearr_12769_14588[(2)] = inst_12642);

(statearr_12769_14588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (5))){
var inst_12588 = cljs.core.deref(cs);
var inst_12589 = cljs.core.seq(inst_12588);
var inst_12590 = inst_12589;
var inst_12591 = null;
var inst_12592 = (0);
var inst_12593 = (0);
var state_12711__$1 = (function (){var statearr_12770 = state_12711;
(statearr_12770[(13)] = inst_12591);

(statearr_12770[(14)] = inst_12593);

(statearr_12770[(15)] = inst_12590);

(statearr_12770[(16)] = inst_12592);

return statearr_12770;
})();
var statearr_12771_14589 = state_12711__$1;
(statearr_12771_14589[(2)] = null);

(statearr_12771_14589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (14))){
var state_12711__$1 = state_12711;
var statearr_12772_14590 = state_12711__$1;
(statearr_12772_14590[(2)] = null);

(statearr_12772_14590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (45))){
var inst_12701 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12773_14591 = state_12711__$1;
(statearr_12773_14591[(2)] = inst_12701);

(statearr_12773_14591[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (26))){
var inst_12645 = (state_12711[(27)]);
var inst_12697 = (state_12711[(2)]);
var inst_12698 = cljs.core.seq(inst_12645);
var state_12711__$1 = (function (){var statearr_12774 = state_12711;
(statearr_12774[(29)] = inst_12697);

return statearr_12774;
})();
if(inst_12698){
var statearr_12775_14592 = state_12711__$1;
(statearr_12775_14592[(1)] = (42));

} else {
var statearr_12776_14593 = state_12711__$1;
(statearr_12776_14593[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (16))){
var inst_12612 = (state_12711[(7)]);
var inst_12614 = cljs.core.chunked_seq_QMARK_(inst_12612);
var state_12711__$1 = state_12711;
if(inst_12614){
var statearr_12777_14594 = state_12711__$1;
(statearr_12777_14594[(1)] = (19));

} else {
var statearr_12778_14595 = state_12711__$1;
(statearr_12778_14595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (38))){
var inst_12690 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12779_14596 = state_12711__$1;
(statearr_12779_14596[(2)] = inst_12690);

(statearr_12779_14596[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (30))){
var state_12711__$1 = state_12711;
var statearr_12780_14597 = state_12711__$1;
(statearr_12780_14597[(2)] = null);

(statearr_12780_14597[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (10))){
var inst_12591 = (state_12711[(13)]);
var inst_12593 = (state_12711[(14)]);
var inst_12601 = cljs.core._nth(inst_12591,inst_12593);
var inst_12602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12601,(0),null);
var inst_12603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12601,(1),null);
var state_12711__$1 = (function (){var statearr_12781 = state_12711;
(statearr_12781[(24)] = inst_12602);

return statearr_12781;
})();
if(cljs.core.truth_(inst_12603)){
var statearr_12782_14598 = state_12711__$1;
(statearr_12782_14598[(1)] = (13));

} else {
var statearr_12783_14599 = state_12711__$1;
(statearr_12783_14599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (18))){
var inst_12638 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12784_14600 = state_12711__$1;
(statearr_12784_14600[(2)] = inst_12638);

(statearr_12784_14600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (42))){
var state_12711__$1 = state_12711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12711__$1,(45),dchan);
} else {
if((state_val_12712 === (37))){
var inst_12581 = (state_12711[(10)]);
var inst_12680 = (state_12711[(22)]);
var inst_12671 = (state_12711[(23)]);
var inst_12680__$1 = cljs.core.first(inst_12671);
var inst_12681 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12680__$1,inst_12581,done);
var state_12711__$1 = (function (){var statearr_12785 = state_12711;
(statearr_12785[(22)] = inst_12680__$1);

return statearr_12785;
})();
if(cljs.core.truth_(inst_12681)){
var statearr_12786_14601 = state_12711__$1;
(statearr_12786_14601[(1)] = (39));

} else {
var statearr_12787_14602 = state_12711__$1;
(statearr_12787_14602[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (8))){
var inst_12593 = (state_12711[(14)]);
var inst_12592 = (state_12711[(16)]);
var inst_12595 = (inst_12593 < inst_12592);
var inst_12596 = inst_12595;
var state_12711__$1 = state_12711;
if(cljs.core.truth_(inst_12596)){
var statearr_12788_14603 = state_12711__$1;
(statearr_12788_14603[(1)] = (10));

} else {
var statearr_12789_14604 = state_12711__$1;
(statearr_12789_14604[(1)] = (11));

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
var statearr_12790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12790[(0)] = cljs$core$async$mult_$_state_machine__12072__auto__);

(statearr_12790[(1)] = (1));

return statearr_12790;
});
var cljs$core$async$mult_$_state_machine__12072__auto____1 = (function (state_12711){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12711);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12791){var ex__12075__auto__ = e12791;
var statearr_12792_14605 = state_12711;
(statearr_12792_14605[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12711[(4)]))){
var statearr_12793_14608 = state_12711;
(statearr_12793_14608[(1)] = cljs.core.first((state_12711[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14611 = state_12711;
state_12711 = G__14611;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12072__auto__ = function(state_12711){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12072__auto____1.call(this,state_12711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12072__auto____0;
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12072__auto____1;
return cljs$core$async$mult_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12794 = f__12108__auto__();
(statearr_12794[(6)] = c__12107__auto___14494);

return statearr_12794;
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
var G__12796 = arguments.length;
switch (G__12796) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_14613 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14613(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14614 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14614(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14619 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14619(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14623 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14623(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14624 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14624(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14625 = arguments.length;
var i__4737__auto___14626 = (0);
while(true){
if((i__4737__auto___14626 < len__4736__auto___14625)){
args__4742__auto__.push((arguments[i__4737__auto___14626]));

var G__14627 = (i__4737__auto___14626 + (1));
i__4737__auto___14626 = G__14627;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12801){
var map__12802 = p__12801;
var map__12802__$1 = (((((!((map__12802 == null))))?(((((map__12802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12802):map__12802);
var opts = map__12802__$1;
var statearr_12804_14628 = state;
(statearr_12804_14628[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12805_14629 = state;
(statearr_12805_14629[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12806_14630 = state;
(statearr_12806_14630[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12797){
var G__12798 = cljs.core.first(seq12797);
var seq12797__$1 = cljs.core.next(seq12797);
var G__12799 = cljs.core.first(seq12797__$1);
var seq12797__$2 = cljs.core.next(seq12797__$1);
var G__12800 = cljs.core.first(seq12797__$2);
var seq12797__$3 = cljs.core.next(seq12797__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12798,G__12799,G__12800,seq12797__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12807 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12808){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12808 = meta12808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12809,meta12808__$1){
var self__ = this;
var _12809__$1 = this;
return (new cljs.core.async.t_cljs$core$async12807(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12808__$1));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12809){
var self__ = this;
var _12809__$1 = this;
return self__.meta12808;
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12808","meta12808",-628735870,null)], null);
}));

(cljs.core.async.t_cljs$core$async12807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12807");

(cljs.core.async.t_cljs$core$async12807.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12807.
 */
cljs.core.async.__GT_t_cljs$core$async12807 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12808){
return (new cljs.core.async.t_cljs$core$async12807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12808));
});

}

return (new cljs.core.async.t_cljs$core$async12807(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12911){
var state_val_12912 = (state_12911[(1)]);
if((state_val_12912 === (7))){
var inst_12826 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12913_14641 = state_12911__$1;
(statearr_12913_14641[(2)] = inst_12826);

(statearr_12913_14641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (20))){
var inst_12838 = (state_12911[(7)]);
var state_12911__$1 = state_12911;
var statearr_12914_14642 = state_12911__$1;
(statearr_12914_14642[(2)] = inst_12838);

(statearr_12914_14642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (27))){
var state_12911__$1 = state_12911;
var statearr_12915_14643 = state_12911__$1;
(statearr_12915_14643[(2)] = null);

(statearr_12915_14643[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (1))){
var inst_12813 = (state_12911[(8)]);
var inst_12813__$1 = calc_state();
var inst_12815 = (inst_12813__$1 == null);
var inst_12816 = cljs.core.not(inst_12815);
var state_12911__$1 = (function (){var statearr_12916 = state_12911;
(statearr_12916[(8)] = inst_12813__$1);

return statearr_12916;
})();
if(inst_12816){
var statearr_12917_14644 = state_12911__$1;
(statearr_12917_14644[(1)] = (2));

} else {
var statearr_12918_14645 = state_12911__$1;
(statearr_12918_14645[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (24))){
var inst_12862 = (state_12911[(9)]);
var inst_12871 = (state_12911[(10)]);
var inst_12885 = (state_12911[(11)]);
var inst_12885__$1 = (inst_12862.cljs$core$IFn$_invoke$arity$1 ? inst_12862.cljs$core$IFn$_invoke$arity$1(inst_12871) : inst_12862.call(null,inst_12871));
var state_12911__$1 = (function (){var statearr_12919 = state_12911;
(statearr_12919[(11)] = inst_12885__$1);

return statearr_12919;
})();
if(cljs.core.truth_(inst_12885__$1)){
var statearr_12920_14646 = state_12911__$1;
(statearr_12920_14646[(1)] = (29));

} else {
var statearr_12921_14647 = state_12911__$1;
(statearr_12921_14647[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (4))){
var inst_12829 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12829)){
var statearr_12922_14648 = state_12911__$1;
(statearr_12922_14648[(1)] = (8));

} else {
var statearr_12923_14649 = state_12911__$1;
(statearr_12923_14649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (15))){
var inst_12856 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12856)){
var statearr_12924_14650 = state_12911__$1;
(statearr_12924_14650[(1)] = (19));

} else {
var statearr_12925_14651 = state_12911__$1;
(statearr_12925_14651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (21))){
var inst_12861 = (state_12911[(12)]);
var inst_12861__$1 = (state_12911[(2)]);
var inst_12862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12861__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12861__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12861__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12911__$1 = (function (){var statearr_12926 = state_12911;
(statearr_12926[(12)] = inst_12861__$1);

(statearr_12926[(9)] = inst_12862);

(statearr_12926[(13)] = inst_12863);

return statearr_12926;
})();
return cljs.core.async.ioc_alts_BANG_(state_12911__$1,(22),inst_12864);
} else {
if((state_val_12912 === (31))){
var inst_12893 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12893)){
var statearr_12927_14652 = state_12911__$1;
(statearr_12927_14652[(1)] = (32));

} else {
var statearr_12928_14653 = state_12911__$1;
(statearr_12928_14653[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (32))){
var inst_12870 = (state_12911[(14)]);
var state_12911__$1 = state_12911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12911__$1,(35),out,inst_12870);
} else {
if((state_val_12912 === (33))){
var inst_12861 = (state_12911[(12)]);
var inst_12838 = inst_12861;
var state_12911__$1 = (function (){var statearr_12929 = state_12911;
(statearr_12929[(7)] = inst_12838);

return statearr_12929;
})();
var statearr_12930_14654 = state_12911__$1;
(statearr_12930_14654[(2)] = null);

(statearr_12930_14654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (13))){
var inst_12838 = (state_12911[(7)]);
var inst_12845 = inst_12838.cljs$lang$protocol_mask$partition0$;
var inst_12846 = (inst_12845 & (64));
var inst_12847 = inst_12838.cljs$core$ISeq$;
var inst_12848 = (cljs.core.PROTOCOL_SENTINEL === inst_12847);
var inst_12849 = ((inst_12846) || (inst_12848));
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12849)){
var statearr_12931_14656 = state_12911__$1;
(statearr_12931_14656[(1)] = (16));

} else {
var statearr_12932_14657 = state_12911__$1;
(statearr_12932_14657[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (22))){
var inst_12870 = (state_12911[(14)]);
var inst_12871 = (state_12911[(10)]);
var inst_12869 = (state_12911[(2)]);
var inst_12870__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12869,(0),null);
var inst_12871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12869,(1),null);
var inst_12872 = (inst_12870__$1 == null);
var inst_12873 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12871__$1,change);
var inst_12874 = ((inst_12872) || (inst_12873));
var state_12911__$1 = (function (){var statearr_12933 = state_12911;
(statearr_12933[(14)] = inst_12870__$1);

(statearr_12933[(10)] = inst_12871__$1);

return statearr_12933;
})();
if(cljs.core.truth_(inst_12874)){
var statearr_12934_14663 = state_12911__$1;
(statearr_12934_14663[(1)] = (23));

} else {
var statearr_12935_14664 = state_12911__$1;
(statearr_12935_14664[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (36))){
var inst_12861 = (state_12911[(12)]);
var inst_12838 = inst_12861;
var state_12911__$1 = (function (){var statearr_12936 = state_12911;
(statearr_12936[(7)] = inst_12838);

return statearr_12936;
})();
var statearr_12937_14668 = state_12911__$1;
(statearr_12937_14668[(2)] = null);

(statearr_12937_14668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (29))){
var inst_12885 = (state_12911[(11)]);
var state_12911__$1 = state_12911;
var statearr_12938_14670 = state_12911__$1;
(statearr_12938_14670[(2)] = inst_12885);

(statearr_12938_14670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (6))){
var state_12911__$1 = state_12911;
var statearr_12939_14671 = state_12911__$1;
(statearr_12939_14671[(2)] = false);

(statearr_12939_14671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (28))){
var inst_12881 = (state_12911[(2)]);
var inst_12882 = calc_state();
var inst_12838 = inst_12882;
var state_12911__$1 = (function (){var statearr_12940 = state_12911;
(statearr_12940[(7)] = inst_12838);

(statearr_12940[(15)] = inst_12881);

return statearr_12940;
})();
var statearr_12941_14683 = state_12911__$1;
(statearr_12941_14683[(2)] = null);

(statearr_12941_14683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (25))){
var inst_12907 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12942_14684 = state_12911__$1;
(statearr_12942_14684[(2)] = inst_12907);

(statearr_12942_14684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (34))){
var inst_12905 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12943_14685 = state_12911__$1;
(statearr_12943_14685[(2)] = inst_12905);

(statearr_12943_14685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (17))){
var state_12911__$1 = state_12911;
var statearr_12944_14687 = state_12911__$1;
(statearr_12944_14687[(2)] = false);

(statearr_12944_14687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (3))){
var state_12911__$1 = state_12911;
var statearr_12945_14688 = state_12911__$1;
(statearr_12945_14688[(2)] = false);

(statearr_12945_14688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (12))){
var inst_12909 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12911__$1,inst_12909);
} else {
if((state_val_12912 === (2))){
var inst_12813 = (state_12911[(8)]);
var inst_12818 = inst_12813.cljs$lang$protocol_mask$partition0$;
var inst_12819 = (inst_12818 & (64));
var inst_12820 = inst_12813.cljs$core$ISeq$;
var inst_12821 = (cljs.core.PROTOCOL_SENTINEL === inst_12820);
var inst_12822 = ((inst_12819) || (inst_12821));
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12822)){
var statearr_12946_14692 = state_12911__$1;
(statearr_12946_14692[(1)] = (5));

} else {
var statearr_12947_14693 = state_12911__$1;
(statearr_12947_14693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (23))){
var inst_12870 = (state_12911[(14)]);
var inst_12876 = (inst_12870 == null);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12876)){
var statearr_12948_14695 = state_12911__$1;
(statearr_12948_14695[(1)] = (26));

} else {
var statearr_12949_14696 = state_12911__$1;
(statearr_12949_14696[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (35))){
var inst_12896 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12896)){
var statearr_12950_14697 = state_12911__$1;
(statearr_12950_14697[(1)] = (36));

} else {
var statearr_12951_14699 = state_12911__$1;
(statearr_12951_14699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (19))){
var inst_12838 = (state_12911[(7)]);
var inst_12858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12838);
var state_12911__$1 = state_12911;
var statearr_12952_14701 = state_12911__$1;
(statearr_12952_14701[(2)] = inst_12858);

(statearr_12952_14701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (11))){
var inst_12838 = (state_12911[(7)]);
var inst_12842 = (inst_12838 == null);
var inst_12843 = cljs.core.not(inst_12842);
var state_12911__$1 = state_12911;
if(inst_12843){
var statearr_12953_14702 = state_12911__$1;
(statearr_12953_14702[(1)] = (13));

} else {
var statearr_12954_14703 = state_12911__$1;
(statearr_12954_14703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (9))){
var inst_12813 = (state_12911[(8)]);
var state_12911__$1 = state_12911;
var statearr_12955_14704 = state_12911__$1;
(statearr_12955_14704[(2)] = inst_12813);

(statearr_12955_14704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (5))){
var state_12911__$1 = state_12911;
var statearr_12956_14707 = state_12911__$1;
(statearr_12956_14707[(2)] = true);

(statearr_12956_14707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (14))){
var state_12911__$1 = state_12911;
var statearr_12957_14708 = state_12911__$1;
(statearr_12957_14708[(2)] = false);

(statearr_12957_14708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (26))){
var inst_12871 = (state_12911[(10)]);
var inst_12878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12871);
var state_12911__$1 = state_12911;
var statearr_12958_14728 = state_12911__$1;
(statearr_12958_14728[(2)] = inst_12878);

(statearr_12958_14728[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (16))){
var state_12911__$1 = state_12911;
var statearr_12959_14729 = state_12911__$1;
(statearr_12959_14729[(2)] = true);

(statearr_12959_14729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (38))){
var inst_12901 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12960_14732 = state_12911__$1;
(statearr_12960_14732[(2)] = inst_12901);

(statearr_12960_14732[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (30))){
var inst_12862 = (state_12911[(9)]);
var inst_12871 = (state_12911[(10)]);
var inst_12863 = (state_12911[(13)]);
var inst_12888 = cljs.core.empty_QMARK_(inst_12862);
var inst_12889 = (inst_12863.cljs$core$IFn$_invoke$arity$1 ? inst_12863.cljs$core$IFn$_invoke$arity$1(inst_12871) : inst_12863.call(null,inst_12871));
var inst_12890 = cljs.core.not(inst_12889);
var inst_12891 = ((inst_12888) && (inst_12890));
var state_12911__$1 = state_12911;
var statearr_12961_14733 = state_12911__$1;
(statearr_12961_14733[(2)] = inst_12891);

(statearr_12961_14733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (10))){
var inst_12813 = (state_12911[(8)]);
var inst_12834 = (state_12911[(2)]);
var inst_12835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12834,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12834,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12834,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12838 = inst_12813;
var state_12911__$1 = (function (){var statearr_12962 = state_12911;
(statearr_12962[(16)] = inst_12836);

(statearr_12962[(7)] = inst_12838);

(statearr_12962[(17)] = inst_12837);

(statearr_12962[(18)] = inst_12835);

return statearr_12962;
})();
var statearr_12963_14738 = state_12911__$1;
(statearr_12963_14738[(2)] = null);

(statearr_12963_14738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (18))){
var inst_12853 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12964_14739 = state_12911__$1;
(statearr_12964_14739[(2)] = inst_12853);

(statearr_12964_14739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (37))){
var state_12911__$1 = state_12911;
var statearr_12965_14743 = state_12911__$1;
(statearr_12965_14743[(2)] = null);

(statearr_12965_14743[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (8))){
var inst_12813 = (state_12911[(8)]);
var inst_12831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12813);
var state_12911__$1 = state_12911;
var statearr_12966_14749 = state_12911__$1;
(statearr_12966_14749[(2)] = inst_12831);

(statearr_12966_14749[(1)] = (10));


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
var statearr_12967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12967[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_12967[(1)] = (1));

return statearr_12967;
});
var cljs$core$async$mix_$_state_machine__12072__auto____1 = (function (state_12911){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12911);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12968){var ex__12075__auto__ = e12968;
var statearr_12969_14752 = state_12911;
(statearr_12969_14752[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12911[(4)]))){
var statearr_12970_14753 = state_12911;
(statearr_12970_14753[(1)] = cljs.core.first((state_12911[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14754 = state_12911;
state_12911 = G__14754;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12072__auto__ = function(state_12911){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12072__auto____1.call(this,state_12911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12072__auto____0;
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12072__auto____1;
return cljs$core$async$mix_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12971 = f__12108__auto__();
(statearr_12971[(6)] = c__12107__auto___14640);

return statearr_12971;
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

var cljs$core$async$Pub$sub_STAR_$dyn_14755 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14755(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14756 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14756(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14757 = (function() {
var G__14758 = null;
var G__14758__1 = (function (p){
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
var G__14758__2 = (function (p,v){
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
G__14758 = function(p,v){
switch(arguments.length){
case 1:
return G__14758__1.call(this,p);
case 2:
return G__14758__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14758.cljs$core$IFn$_invoke$arity$1 = G__14758__1;
G__14758.cljs$core$IFn$_invoke$arity$2 = G__14758__2;
return G__14758;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12973 = arguments.length;
switch (G__12973) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14757(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14757(p,v);
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
var G__12977 = arguments.length;
switch (G__12977) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12975_SHARP_){
if(cljs.core.truth_((p1__12975_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12975_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12975_SHARP_.call(null,topic)))){
return p1__12975_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12975_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12978 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12979){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12979 = meta12979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12980,meta12979__$1){
var self__ = this;
var _12980__$1 = this;
return (new cljs.core.async.t_cljs$core$async12978(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12979__$1));
}));

(cljs.core.async.t_cljs$core$async12978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12980){
var self__ = this;
var _12980__$1 = this;
return self__.meta12979;
}));

(cljs.core.async.t_cljs$core$async12978.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12978.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12978.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12978.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12979","meta12979",822928785,null)], null);
}));

(cljs.core.async.t_cljs$core$async12978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12978");

(cljs.core.async.t_cljs$core$async12978.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12978.
 */
cljs.core.async.__GT_t_cljs$core$async12978 = (function cljs$core$async$__GT_t_cljs$core$async12978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12979){
return (new cljs.core.async.t_cljs$core$async12978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12979));
});

}

return (new cljs.core.async.t_cljs$core$async12978(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13055){
var state_val_13056 = (state_13055[(1)]);
if((state_val_13056 === (7))){
var inst_13051 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13057_14780 = state_13055__$1;
(statearr_13057_14780[(2)] = inst_13051);

(statearr_13057_14780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (20))){
var state_13055__$1 = state_13055;
var statearr_13058_14781 = state_13055__$1;
(statearr_13058_14781[(2)] = null);

(statearr_13058_14781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (1))){
var state_13055__$1 = state_13055;
var statearr_13063_14782 = state_13055__$1;
(statearr_13063_14782[(2)] = null);

(statearr_13063_14782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (24))){
var inst_13034 = (state_13055[(7)]);
var inst_13043 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13034);
var state_13055__$1 = state_13055;
var statearr_13065_14783 = state_13055__$1;
(statearr_13065_14783[(2)] = inst_13043);

(statearr_13065_14783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (4))){
var inst_12986 = (state_13055[(8)]);
var inst_12986__$1 = (state_13055[(2)]);
var inst_12987 = (inst_12986__$1 == null);
var state_13055__$1 = (function (){var statearr_13066 = state_13055;
(statearr_13066[(8)] = inst_12986__$1);

return statearr_13066;
})();
if(cljs.core.truth_(inst_12987)){
var statearr_13067_14784 = state_13055__$1;
(statearr_13067_14784[(1)] = (5));

} else {
var statearr_13068_14785 = state_13055__$1;
(statearr_13068_14785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (15))){
var inst_13028 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13069_14786 = state_13055__$1;
(statearr_13069_14786[(2)] = inst_13028);

(statearr_13069_14786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (21))){
var inst_13048 = (state_13055[(2)]);
var state_13055__$1 = (function (){var statearr_13070 = state_13055;
(statearr_13070[(9)] = inst_13048);

return statearr_13070;
})();
var statearr_13071_14787 = state_13055__$1;
(statearr_13071_14787[(2)] = null);

(statearr_13071_14787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (13))){
var inst_13010 = (state_13055[(10)]);
var inst_13012 = cljs.core.chunked_seq_QMARK_(inst_13010);
var state_13055__$1 = state_13055;
if(inst_13012){
var statearr_13072_14788 = state_13055__$1;
(statearr_13072_14788[(1)] = (16));

} else {
var statearr_13073_14789 = state_13055__$1;
(statearr_13073_14789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (22))){
var inst_13040 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
if(cljs.core.truth_(inst_13040)){
var statearr_13074_14790 = state_13055__$1;
(statearr_13074_14790[(1)] = (23));

} else {
var statearr_13075_14791 = state_13055__$1;
(statearr_13075_14791[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (6))){
var inst_12986 = (state_13055[(8)]);
var inst_13036 = (state_13055[(11)]);
var inst_13034 = (state_13055[(7)]);
var inst_13034__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12986) : topic_fn.call(null,inst_12986));
var inst_13035 = cljs.core.deref(mults);
var inst_13036__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13035,inst_13034__$1);
var state_13055__$1 = (function (){var statearr_13076 = state_13055;
(statearr_13076[(11)] = inst_13036__$1);

(statearr_13076[(7)] = inst_13034__$1);

return statearr_13076;
})();
if(cljs.core.truth_(inst_13036__$1)){
var statearr_13077_14795 = state_13055__$1;
(statearr_13077_14795[(1)] = (19));

} else {
var statearr_13078_14796 = state_13055__$1;
(statearr_13078_14796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (25))){
var inst_13045 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13079_14798 = state_13055__$1;
(statearr_13079_14798[(2)] = inst_13045);

(statearr_13079_14798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (17))){
var inst_13010 = (state_13055[(10)]);
var inst_13019 = cljs.core.first(inst_13010);
var inst_13020 = cljs.core.async.muxch_STAR_(inst_13019);
var inst_13021 = cljs.core.async.close_BANG_(inst_13020);
var inst_13022 = cljs.core.next(inst_13010);
var inst_12996 = inst_13022;
var inst_12997 = null;
var inst_12998 = (0);
var inst_12999 = (0);
var state_13055__$1 = (function (){var statearr_13080 = state_13055;
(statearr_13080[(12)] = inst_12998);

(statearr_13080[(13)] = inst_12999);

(statearr_13080[(14)] = inst_12996);

(statearr_13080[(15)] = inst_13021);

(statearr_13080[(16)] = inst_12997);

return statearr_13080;
})();
var statearr_13081_14801 = state_13055__$1;
(statearr_13081_14801[(2)] = null);

(statearr_13081_14801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (3))){
var inst_13053 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13055__$1,inst_13053);
} else {
if((state_val_13056 === (12))){
var inst_13030 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13082_14802 = state_13055__$1;
(statearr_13082_14802[(2)] = inst_13030);

(statearr_13082_14802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (2))){
var state_13055__$1 = state_13055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13055__$1,(4),ch);
} else {
if((state_val_13056 === (23))){
var state_13055__$1 = state_13055;
var statearr_13083_14806 = state_13055__$1;
(statearr_13083_14806[(2)] = null);

(statearr_13083_14806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (19))){
var inst_12986 = (state_13055[(8)]);
var inst_13036 = (state_13055[(11)]);
var inst_13038 = cljs.core.async.muxch_STAR_(inst_13036);
var state_13055__$1 = state_13055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13055__$1,(22),inst_13038,inst_12986);
} else {
if((state_val_13056 === (11))){
var inst_13010 = (state_13055[(10)]);
var inst_12996 = (state_13055[(14)]);
var inst_13010__$1 = cljs.core.seq(inst_12996);
var state_13055__$1 = (function (){var statearr_13084 = state_13055;
(statearr_13084[(10)] = inst_13010__$1);

return statearr_13084;
})();
if(inst_13010__$1){
var statearr_13085_14809 = state_13055__$1;
(statearr_13085_14809[(1)] = (13));

} else {
var statearr_13086_14810 = state_13055__$1;
(statearr_13086_14810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (9))){
var inst_13032 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13087_14811 = state_13055__$1;
(statearr_13087_14811[(2)] = inst_13032);

(statearr_13087_14811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (5))){
var inst_12993 = cljs.core.deref(mults);
var inst_12994 = cljs.core.vals(inst_12993);
var inst_12995 = cljs.core.seq(inst_12994);
var inst_12996 = inst_12995;
var inst_12997 = null;
var inst_12998 = (0);
var inst_12999 = (0);
var state_13055__$1 = (function (){var statearr_13088 = state_13055;
(statearr_13088[(12)] = inst_12998);

(statearr_13088[(13)] = inst_12999);

(statearr_13088[(14)] = inst_12996);

(statearr_13088[(16)] = inst_12997);

return statearr_13088;
})();
var statearr_13089_14812 = state_13055__$1;
(statearr_13089_14812[(2)] = null);

(statearr_13089_14812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (14))){
var state_13055__$1 = state_13055;
var statearr_13093_14813 = state_13055__$1;
(statearr_13093_14813[(2)] = null);

(statearr_13093_14813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (16))){
var inst_13010 = (state_13055[(10)]);
var inst_13014 = cljs.core.chunk_first(inst_13010);
var inst_13015 = cljs.core.chunk_rest(inst_13010);
var inst_13016 = cljs.core.count(inst_13014);
var inst_12996 = inst_13015;
var inst_12997 = inst_13014;
var inst_12998 = inst_13016;
var inst_12999 = (0);
var state_13055__$1 = (function (){var statearr_13094 = state_13055;
(statearr_13094[(12)] = inst_12998);

(statearr_13094[(13)] = inst_12999);

(statearr_13094[(14)] = inst_12996);

(statearr_13094[(16)] = inst_12997);

return statearr_13094;
})();
var statearr_13095_14814 = state_13055__$1;
(statearr_13095_14814[(2)] = null);

(statearr_13095_14814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (10))){
var inst_12998 = (state_13055[(12)]);
var inst_12999 = (state_13055[(13)]);
var inst_12996 = (state_13055[(14)]);
var inst_12997 = (state_13055[(16)]);
var inst_13004 = cljs.core._nth(inst_12997,inst_12999);
var inst_13005 = cljs.core.async.muxch_STAR_(inst_13004);
var inst_13006 = cljs.core.async.close_BANG_(inst_13005);
var inst_13007 = (inst_12999 + (1));
var tmp13090 = inst_12998;
var tmp13091 = inst_12996;
var tmp13092 = inst_12997;
var inst_12996__$1 = tmp13091;
var inst_12997__$1 = tmp13092;
var inst_12998__$1 = tmp13090;
var inst_12999__$1 = inst_13007;
var state_13055__$1 = (function (){var statearr_13096 = state_13055;
(statearr_13096[(12)] = inst_12998__$1);

(statearr_13096[(13)] = inst_12999__$1);

(statearr_13096[(14)] = inst_12996__$1);

(statearr_13096[(16)] = inst_12997__$1);

(statearr_13096[(17)] = inst_13006);

return statearr_13096;
})();
var statearr_13097_14815 = state_13055__$1;
(statearr_13097_14815[(2)] = null);

(statearr_13097_14815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (18))){
var inst_13025 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13098_14816 = state_13055__$1;
(statearr_13098_14816[(2)] = inst_13025);

(statearr_13098_14816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (8))){
var inst_12998 = (state_13055[(12)]);
var inst_12999 = (state_13055[(13)]);
var inst_13001 = (inst_12999 < inst_12998);
var inst_13002 = inst_13001;
var state_13055__$1 = state_13055;
if(cljs.core.truth_(inst_13002)){
var statearr_13099_14817 = state_13055__$1;
(statearr_13099_14817[(1)] = (10));

} else {
var statearr_13100_14818 = state_13055__$1;
(statearr_13100_14818[(1)] = (11));

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
var statearr_13101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13101[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13101[(1)] = (1));

return statearr_13101;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13055){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13055);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13102){var ex__12075__auto__ = e13102;
var statearr_13103_14819 = state_13055;
(statearr_13103_14819[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13055[(4)]))){
var statearr_13104_14820 = state_13055;
(statearr_13104_14820[(1)] = cljs.core.first((state_13055[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14821 = state_13055;
state_13055 = G__14821;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13105 = f__12108__auto__();
(statearr_13105[(6)] = c__12107__auto___14779);

return statearr_13105;
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
var G__13107 = arguments.length;
switch (G__13107) {
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
var G__13109 = arguments.length;
switch (G__13109) {
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
var G__13111 = arguments.length;
switch (G__13111) {
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
var c__12107__auto___14841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13157){
var state_val_13158 = (state_13157[(1)]);
if((state_val_13158 === (7))){
var state_13157__$1 = state_13157;
var statearr_13160_14843 = state_13157__$1;
(statearr_13160_14843[(2)] = null);

(statearr_13160_14843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (1))){
var state_13157__$1 = state_13157;
var statearr_13162_14844 = state_13157__$1;
(statearr_13162_14844[(2)] = null);

(statearr_13162_14844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (4))){
var inst_13115 = (state_13157[(7)]);
var inst_13114 = (state_13157[(8)]);
var inst_13118 = (inst_13115 < inst_13114);
var state_13157__$1 = state_13157;
if(cljs.core.truth_(inst_13118)){
var statearr_13163_14845 = state_13157__$1;
(statearr_13163_14845[(1)] = (6));

} else {
var statearr_13164_14846 = state_13157__$1;
(statearr_13164_14846[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (15))){
var inst_13142 = (state_13157[(9)]);
var inst_13147 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13142);
var state_13157__$1 = state_13157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13157__$1,(17),out,inst_13147);
} else {
if((state_val_13158 === (13))){
var inst_13142 = (state_13157[(9)]);
var inst_13142__$1 = (state_13157[(2)]);
var inst_13143 = cljs.core.some(cljs.core.nil_QMARK_,inst_13142__$1);
var state_13157__$1 = (function (){var statearr_13165 = state_13157;
(statearr_13165[(9)] = inst_13142__$1);

return statearr_13165;
})();
if(cljs.core.truth_(inst_13143)){
var statearr_13166_14847 = state_13157__$1;
(statearr_13166_14847[(1)] = (14));

} else {
var statearr_13167_14848 = state_13157__$1;
(statearr_13167_14848[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (6))){
var state_13157__$1 = state_13157;
var statearr_13168_14849 = state_13157__$1;
(statearr_13168_14849[(2)] = null);

(statearr_13168_14849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (17))){
var inst_13149 = (state_13157[(2)]);
var state_13157__$1 = (function (){var statearr_13170 = state_13157;
(statearr_13170[(10)] = inst_13149);

return statearr_13170;
})();
var statearr_13171_14850 = state_13157__$1;
(statearr_13171_14850[(2)] = null);

(statearr_13171_14850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (3))){
var inst_13154 = (state_13157[(2)]);
var state_13157__$1 = state_13157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13157__$1,inst_13154);
} else {
if((state_val_13158 === (12))){
var _ = (function (){var statearr_13172 = state_13157;
(statearr_13172[(4)] = cljs.core.rest((state_13157[(4)])));

return statearr_13172;
})();
var state_13157__$1 = state_13157;
var ex13169 = (state_13157__$1[(2)]);
var statearr_13173_14851 = state_13157__$1;
(statearr_13173_14851[(5)] = ex13169);


if((ex13169 instanceof Object)){
var statearr_13174_14852 = state_13157__$1;
(statearr_13174_14852[(1)] = (11));

(statearr_13174_14852[(5)] = null);

} else {
throw ex13169;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (2))){
var inst_13113 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13114 = cnt;
var inst_13115 = (0);
var state_13157__$1 = (function (){var statearr_13175 = state_13157;
(statearr_13175[(11)] = inst_13113);

(statearr_13175[(7)] = inst_13115);

(statearr_13175[(8)] = inst_13114);

return statearr_13175;
})();
var statearr_13176_14853 = state_13157__$1;
(statearr_13176_14853[(2)] = null);

(statearr_13176_14853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (11))){
var inst_13121 = (state_13157[(2)]);
var inst_13122 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13157__$1 = (function (){var statearr_13177 = state_13157;
(statearr_13177[(12)] = inst_13121);

return statearr_13177;
})();
var statearr_13178_14857 = state_13157__$1;
(statearr_13178_14857[(2)] = inst_13122);

(statearr_13178_14857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (9))){
var inst_13115 = (state_13157[(7)]);
var _ = (function (){var statearr_13179 = state_13157;
(statearr_13179[(4)] = cljs.core.cons((12),(state_13157[(4)])));

return statearr_13179;
})();
var inst_13128 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13115) : chs__$1.call(null,inst_13115));
var inst_13129 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13115) : done.call(null,inst_13115));
var inst_13130 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13128,inst_13129);
var ___$1 = (function (){var statearr_13180 = state_13157;
(statearr_13180[(4)] = cljs.core.rest((state_13157[(4)])));

return statearr_13180;
})();
var state_13157__$1 = state_13157;
var statearr_13181_14867 = state_13157__$1;
(statearr_13181_14867[(2)] = inst_13130);

(statearr_13181_14867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (5))){
var inst_13140 = (state_13157[(2)]);
var state_13157__$1 = (function (){var statearr_13182 = state_13157;
(statearr_13182[(13)] = inst_13140);

return statearr_13182;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13157__$1,(13),dchan);
} else {
if((state_val_13158 === (14))){
var inst_13145 = cljs.core.async.close_BANG_(out);
var state_13157__$1 = state_13157;
var statearr_13183_14869 = state_13157__$1;
(statearr_13183_14869[(2)] = inst_13145);

(statearr_13183_14869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (16))){
var inst_13152 = (state_13157[(2)]);
var state_13157__$1 = state_13157;
var statearr_13184_14870 = state_13157__$1;
(statearr_13184_14870[(2)] = inst_13152);

(statearr_13184_14870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (10))){
var inst_13115 = (state_13157[(7)]);
var inst_13133 = (state_13157[(2)]);
var inst_13134 = (inst_13115 + (1));
var inst_13115__$1 = inst_13134;
var state_13157__$1 = (function (){var statearr_13185 = state_13157;
(statearr_13185[(7)] = inst_13115__$1);

(statearr_13185[(14)] = inst_13133);

return statearr_13185;
})();
var statearr_13186_14875 = state_13157__$1;
(statearr_13186_14875[(2)] = null);

(statearr_13186_14875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (8))){
var inst_13138 = (state_13157[(2)]);
var state_13157__$1 = state_13157;
var statearr_13187_14876 = state_13157__$1;
(statearr_13187_14876[(2)] = inst_13138);

(statearr_13187_14876[(1)] = (5));


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
var statearr_13188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13188[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13188[(1)] = (1));

return statearr_13188;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13157){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13157);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13189){var ex__12075__auto__ = e13189;
var statearr_13190_14883 = state_13157;
(statearr_13190_14883[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13157[(4)]))){
var statearr_13191_14884 = state_13157;
(statearr_13191_14884[(1)] = cljs.core.first((state_13157[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14888 = state_13157;
state_13157 = G__14888;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13192 = f__12108__auto__();
(statearr_13192[(6)] = c__12107__auto___14841);

return statearr_13192;
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
var G__13195 = arguments.length;
switch (G__13195) {
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
var c__12107__auto___14896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13227){
var state_val_13228 = (state_13227[(1)]);
if((state_val_13228 === (7))){
var inst_13206 = (state_13227[(7)]);
var inst_13207 = (state_13227[(8)]);
var inst_13206__$1 = (state_13227[(2)]);
var inst_13207__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13206__$1,(0),null);
var inst_13208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13206__$1,(1),null);
var inst_13209 = (inst_13207__$1 == null);
var state_13227__$1 = (function (){var statearr_13229 = state_13227;
(statearr_13229[(9)] = inst_13208);

(statearr_13229[(7)] = inst_13206__$1);

(statearr_13229[(8)] = inst_13207__$1);

return statearr_13229;
})();
if(cljs.core.truth_(inst_13209)){
var statearr_13230_14897 = state_13227__$1;
(statearr_13230_14897[(1)] = (8));

} else {
var statearr_13231_14898 = state_13227__$1;
(statearr_13231_14898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (1))){
var inst_13196 = cljs.core.vec(chs);
var inst_13197 = inst_13196;
var state_13227__$1 = (function (){var statearr_13232 = state_13227;
(statearr_13232[(10)] = inst_13197);

return statearr_13232;
})();
var statearr_13233_14899 = state_13227__$1;
(statearr_13233_14899[(2)] = null);

(statearr_13233_14899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (4))){
var inst_13197 = (state_13227[(10)]);
var state_13227__$1 = state_13227;
return cljs.core.async.ioc_alts_BANG_(state_13227__$1,(7),inst_13197);
} else {
if((state_val_13228 === (6))){
var inst_13223 = (state_13227[(2)]);
var state_13227__$1 = state_13227;
var statearr_13234_14900 = state_13227__$1;
(statearr_13234_14900[(2)] = inst_13223);

(statearr_13234_14900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (3))){
var inst_13225 = (state_13227[(2)]);
var state_13227__$1 = state_13227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13227__$1,inst_13225);
} else {
if((state_val_13228 === (2))){
var inst_13197 = (state_13227[(10)]);
var inst_13199 = cljs.core.count(inst_13197);
var inst_13200 = (inst_13199 > (0));
var state_13227__$1 = state_13227;
if(cljs.core.truth_(inst_13200)){
var statearr_13236_14901 = state_13227__$1;
(statearr_13236_14901[(1)] = (4));

} else {
var statearr_13237_14902 = state_13227__$1;
(statearr_13237_14902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (11))){
var inst_13197 = (state_13227[(10)]);
var inst_13216 = (state_13227[(2)]);
var tmp13235 = inst_13197;
var inst_13197__$1 = tmp13235;
var state_13227__$1 = (function (){var statearr_13238 = state_13227;
(statearr_13238[(11)] = inst_13216);

(statearr_13238[(10)] = inst_13197__$1);

return statearr_13238;
})();
var statearr_13239_14903 = state_13227__$1;
(statearr_13239_14903[(2)] = null);

(statearr_13239_14903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (9))){
var inst_13207 = (state_13227[(8)]);
var state_13227__$1 = state_13227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13227__$1,(11),out,inst_13207);
} else {
if((state_val_13228 === (5))){
var inst_13221 = cljs.core.async.close_BANG_(out);
var state_13227__$1 = state_13227;
var statearr_13245_14904 = state_13227__$1;
(statearr_13245_14904[(2)] = inst_13221);

(statearr_13245_14904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (10))){
var inst_13219 = (state_13227[(2)]);
var state_13227__$1 = state_13227;
var statearr_13246_14905 = state_13227__$1;
(statearr_13246_14905[(2)] = inst_13219);

(statearr_13246_14905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (8))){
var inst_13208 = (state_13227[(9)]);
var inst_13206 = (state_13227[(7)]);
var inst_13197 = (state_13227[(10)]);
var inst_13207 = (state_13227[(8)]);
var inst_13211 = (function (){var cs = inst_13197;
var vec__13202 = inst_13206;
var v = inst_13207;
var c = inst_13208;
return (function (p1__13193_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13193_SHARP_);
});
})();
var inst_13212 = cljs.core.filterv(inst_13211,inst_13197);
var inst_13197__$1 = inst_13212;
var state_13227__$1 = (function (){var statearr_13247 = state_13227;
(statearr_13247[(10)] = inst_13197__$1);

return statearr_13247;
})();
var statearr_13248_14907 = state_13227__$1;
(statearr_13248_14907[(2)] = null);

(statearr_13248_14907[(1)] = (2));


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
var statearr_13249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13249[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13249[(1)] = (1));

return statearr_13249;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13227){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13227);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13250){var ex__12075__auto__ = e13250;
var statearr_13251_14910 = state_13227;
(statearr_13251_14910[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13227[(4)]))){
var statearr_13252_14911 = state_13227;
(statearr_13252_14911[(1)] = cljs.core.first((state_13227[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14912 = state_13227;
state_13227 = G__14912;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13253 = f__12108__auto__();
(statearr_13253[(6)] = c__12107__auto___14896);

return statearr_13253;
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
var G__13255 = arguments.length;
switch (G__13255) {
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
var c__12107__auto___14919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13289){
var state_val_13290 = (state_13289[(1)]);
if((state_val_13290 === (7))){
var inst_13271 = (state_13289[(7)]);
var inst_13271__$1 = (state_13289[(2)]);
var inst_13272 = (inst_13271__$1 == null);
var inst_13273 = cljs.core.not(inst_13272);
var state_13289__$1 = (function (){var statearr_13291 = state_13289;
(statearr_13291[(7)] = inst_13271__$1);

return statearr_13291;
})();
if(inst_13273){
var statearr_13292_14924 = state_13289__$1;
(statearr_13292_14924[(1)] = (8));

} else {
var statearr_13293_14925 = state_13289__$1;
(statearr_13293_14925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (1))){
var inst_13266 = (0);
var state_13289__$1 = (function (){var statearr_13294 = state_13289;
(statearr_13294[(8)] = inst_13266);

return statearr_13294;
})();
var statearr_13295_14926 = state_13289__$1;
(statearr_13295_14926[(2)] = null);

(statearr_13295_14926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (4))){
var state_13289__$1 = state_13289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13289__$1,(7),ch);
} else {
if((state_val_13290 === (6))){
var inst_13284 = (state_13289[(2)]);
var state_13289__$1 = state_13289;
var statearr_13296_14928 = state_13289__$1;
(statearr_13296_14928[(2)] = inst_13284);

(statearr_13296_14928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (3))){
var inst_13286 = (state_13289[(2)]);
var inst_13287 = cljs.core.async.close_BANG_(out);
var state_13289__$1 = (function (){var statearr_13297 = state_13289;
(statearr_13297[(9)] = inst_13286);

return statearr_13297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13289__$1,inst_13287);
} else {
if((state_val_13290 === (2))){
var inst_13266 = (state_13289[(8)]);
var inst_13268 = (inst_13266 < n);
var state_13289__$1 = state_13289;
if(cljs.core.truth_(inst_13268)){
var statearr_13298_14929 = state_13289__$1;
(statearr_13298_14929[(1)] = (4));

} else {
var statearr_13299_14930 = state_13289__$1;
(statearr_13299_14930[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (11))){
var inst_13266 = (state_13289[(8)]);
var inst_13276 = (state_13289[(2)]);
var inst_13277 = (inst_13266 + (1));
var inst_13266__$1 = inst_13277;
var state_13289__$1 = (function (){var statearr_13300 = state_13289;
(statearr_13300[(10)] = inst_13276);

(statearr_13300[(8)] = inst_13266__$1);

return statearr_13300;
})();
var statearr_13301_14931 = state_13289__$1;
(statearr_13301_14931[(2)] = null);

(statearr_13301_14931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (9))){
var state_13289__$1 = state_13289;
var statearr_13302_14932 = state_13289__$1;
(statearr_13302_14932[(2)] = null);

(statearr_13302_14932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (5))){
var state_13289__$1 = state_13289;
var statearr_13303_14933 = state_13289__$1;
(statearr_13303_14933[(2)] = null);

(statearr_13303_14933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (10))){
var inst_13281 = (state_13289[(2)]);
var state_13289__$1 = state_13289;
var statearr_13304_14934 = state_13289__$1;
(statearr_13304_14934[(2)] = inst_13281);

(statearr_13304_14934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (8))){
var inst_13271 = (state_13289[(7)]);
var state_13289__$1 = state_13289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13289__$1,(11),out,inst_13271);
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
var statearr_13306 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13306[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13306[(1)] = (1));

return statearr_13306;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13289){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13289);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13307){var ex__12075__auto__ = e13307;
var statearr_13308_14935 = state_13289;
(statearr_13308_14935[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13289[(4)]))){
var statearr_13309_14936 = state_13289;
(statearr_13309_14936[(1)] = cljs.core.first((state_13289[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14937 = state_13289;
state_13289 = G__14937;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13310 = f__12108__auto__();
(statearr_13310[(6)] = c__12107__auto___14919);

return statearr_13310;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13312 = (function (f,ch,meta13313){
this.f = f;
this.ch = ch;
this.meta13313 = meta13313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13314,meta13313__$1){
var self__ = this;
var _13314__$1 = this;
return (new cljs.core.async.t_cljs$core$async13312(self__.f,self__.ch,meta13313__$1));
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13314){
var self__ = this;
var _13314__$1 = this;
return self__.meta13313;
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13315 = (function (f,ch,meta13313,_,fn1,meta13316){
this.f = f;
this.ch = ch;
this.meta13313 = meta13313;
this._ = _;
this.fn1 = fn1;
this.meta13316 = meta13316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13317,meta13316__$1){
var self__ = this;
var _13317__$1 = this;
return (new cljs.core.async.t_cljs$core$async13315(self__.f,self__.ch,self__.meta13313,self__._,self__.fn1,meta13316__$1));
}));

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13317){
var self__ = this;
var _13317__$1 = this;
return self__.meta13316;
}));

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13311_SHARP_){
var G__13328 = (((p1__13311_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13311_SHARP_) : self__.f.call(null,p1__13311_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13328) : f1.call(null,G__13328));
});
}));

(cljs.core.async.t_cljs$core$async13315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13313","meta13313",-1639726482,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13312","cljs.core.async/t_cljs$core$async13312",-1160450595,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13316","meta13316",299257274,null)], null);
}));

(cljs.core.async.t_cljs$core$async13315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13315");

(cljs.core.async.t_cljs$core$async13315.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13315.
 */
cljs.core.async.__GT_t_cljs$core$async13315 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13315(f__$1,ch__$1,meta13313__$1,___$2,fn1__$1,meta13316){
return (new cljs.core.async.t_cljs$core$async13315(f__$1,ch__$1,meta13313__$1,___$2,fn1__$1,meta13316));
});

}

return (new cljs.core.async.t_cljs$core$async13315(self__.f,self__.ch,self__.meta13313,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13329 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13329) : self__.f.call(null,G__13329));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13313","meta13313",-1639726482,null)], null);
}));

(cljs.core.async.t_cljs$core$async13312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13312");

(cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13312.
 */
cljs.core.async.__GT_t_cljs$core$async13312 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13312(f__$1,ch__$1,meta13313){
return (new cljs.core.async.t_cljs$core$async13312(f__$1,ch__$1,meta13313));
});

}

return (new cljs.core.async.t_cljs$core$async13312(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13330 = (function (f,ch,meta13331){
this.f = f;
this.ch = ch;
this.meta13331 = meta13331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13332,meta13331__$1){
var self__ = this;
var _13332__$1 = this;
return (new cljs.core.async.t_cljs$core$async13330(self__.f,self__.ch,meta13331__$1));
}));

(cljs.core.async.t_cljs$core$async13330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13332){
var self__ = this;
var _13332__$1 = this;
return self__.meta13331;
}));

(cljs.core.async.t_cljs$core$async13330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13331","meta13331",1277565643,null)], null);
}));

(cljs.core.async.t_cljs$core$async13330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13330");

(cljs.core.async.t_cljs$core$async13330.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13330.
 */
cljs.core.async.__GT_t_cljs$core$async13330 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13330(f__$1,ch__$1,meta13331){
return (new cljs.core.async.t_cljs$core$async13330(f__$1,ch__$1,meta13331));
});

}

return (new cljs.core.async.t_cljs$core$async13330(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13333 = (function (p,ch,meta13334){
this.p = p;
this.ch = ch;
this.meta13334 = meta13334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13335,meta13334__$1){
var self__ = this;
var _13335__$1 = this;
return (new cljs.core.async.t_cljs$core$async13333(self__.p,self__.ch,meta13334__$1));
}));

(cljs.core.async.t_cljs$core$async13333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13335){
var self__ = this;
var _13335__$1 = this;
return self__.meta13334;
}));

(cljs.core.async.t_cljs$core$async13333.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13333.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13333.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13334","meta13334",2125192463,null)], null);
}));

(cljs.core.async.t_cljs$core$async13333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13333");

(cljs.core.async.t_cljs$core$async13333.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13333.
 */
cljs.core.async.__GT_t_cljs$core$async13333 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13333(p__$1,ch__$1,meta13334){
return (new cljs.core.async.t_cljs$core$async13333(p__$1,ch__$1,meta13334));
});

}

return (new cljs.core.async.t_cljs$core$async13333(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13337 = arguments.length;
switch (G__13337) {
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
var c__12107__auto___14952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13358){
var state_val_13359 = (state_13358[(1)]);
if((state_val_13359 === (7))){
var inst_13354 = (state_13358[(2)]);
var state_13358__$1 = state_13358;
var statearr_13360_14953 = state_13358__$1;
(statearr_13360_14953[(2)] = inst_13354);

(statearr_13360_14953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (1))){
var state_13358__$1 = state_13358;
var statearr_13361_14955 = state_13358__$1;
(statearr_13361_14955[(2)] = null);

(statearr_13361_14955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (4))){
var inst_13340 = (state_13358[(7)]);
var inst_13340__$1 = (state_13358[(2)]);
var inst_13341 = (inst_13340__$1 == null);
var state_13358__$1 = (function (){var statearr_13362 = state_13358;
(statearr_13362[(7)] = inst_13340__$1);

return statearr_13362;
})();
if(cljs.core.truth_(inst_13341)){
var statearr_13363_14962 = state_13358__$1;
(statearr_13363_14962[(1)] = (5));

} else {
var statearr_13364_14963 = state_13358__$1;
(statearr_13364_14963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (6))){
var inst_13340 = (state_13358[(7)]);
var inst_13345 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13340) : p.call(null,inst_13340));
var state_13358__$1 = state_13358;
if(cljs.core.truth_(inst_13345)){
var statearr_13365_14964 = state_13358__$1;
(statearr_13365_14964[(1)] = (8));

} else {
var statearr_13366_14965 = state_13358__$1;
(statearr_13366_14965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (3))){
var inst_13356 = (state_13358[(2)]);
var state_13358__$1 = state_13358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13358__$1,inst_13356);
} else {
if((state_val_13359 === (2))){
var state_13358__$1 = state_13358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13358__$1,(4),ch);
} else {
if((state_val_13359 === (11))){
var inst_13348 = (state_13358[(2)]);
var state_13358__$1 = state_13358;
var statearr_13367_14966 = state_13358__$1;
(statearr_13367_14966[(2)] = inst_13348);

(statearr_13367_14966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (9))){
var state_13358__$1 = state_13358;
var statearr_13368_14967 = state_13358__$1;
(statearr_13368_14967[(2)] = null);

(statearr_13368_14967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (5))){
var inst_13343 = cljs.core.async.close_BANG_(out);
var state_13358__$1 = state_13358;
var statearr_13369_14968 = state_13358__$1;
(statearr_13369_14968[(2)] = inst_13343);

(statearr_13369_14968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (10))){
var inst_13351 = (state_13358[(2)]);
var state_13358__$1 = (function (){var statearr_13370 = state_13358;
(statearr_13370[(8)] = inst_13351);

return statearr_13370;
})();
var statearr_13371_14969 = state_13358__$1;
(statearr_13371_14969[(2)] = null);

(statearr_13371_14969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (8))){
var inst_13340 = (state_13358[(7)]);
var state_13358__$1 = state_13358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13358__$1,(11),out,inst_13340);
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
var statearr_13372 = [null,null,null,null,null,null,null,null,null];
(statearr_13372[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13372[(1)] = (1));

return statearr_13372;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13358){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13358);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13373){var ex__12075__auto__ = e13373;
var statearr_13374_14971 = state_13358;
(statearr_13374_14971[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13358[(4)]))){
var statearr_13375_14972 = state_13358;
(statearr_13375_14972[(1)] = cljs.core.first((state_13358[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14974 = state_13358;
state_13358 = G__14974;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13376 = f__12108__auto__();
(statearr_13376[(6)] = c__12107__auto___14952);

return statearr_13376;
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
var G__13378 = arguments.length;
switch (G__13378) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13440){
var state_val_13441 = (state_13440[(1)]);
if((state_val_13441 === (7))){
var inst_13436 = (state_13440[(2)]);
var state_13440__$1 = state_13440;
var statearr_13442_14978 = state_13440__$1;
(statearr_13442_14978[(2)] = inst_13436);

(statearr_13442_14978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (20))){
var inst_13406 = (state_13440[(7)]);
var inst_13417 = (state_13440[(2)]);
var inst_13418 = cljs.core.next(inst_13406);
var inst_13392 = inst_13418;
var inst_13393 = null;
var inst_13394 = (0);
var inst_13395 = (0);
var state_13440__$1 = (function (){var statearr_13443 = state_13440;
(statearr_13443[(8)] = inst_13394);

(statearr_13443[(9)] = inst_13393);

(statearr_13443[(10)] = inst_13395);

(statearr_13443[(11)] = inst_13417);

(statearr_13443[(12)] = inst_13392);

return statearr_13443;
})();
var statearr_13444_14980 = state_13440__$1;
(statearr_13444_14980[(2)] = null);

(statearr_13444_14980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (1))){
var state_13440__$1 = state_13440;
var statearr_13446_14982 = state_13440__$1;
(statearr_13446_14982[(2)] = null);

(statearr_13446_14982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (4))){
var inst_13381 = (state_13440[(13)]);
var inst_13381__$1 = (state_13440[(2)]);
var inst_13382 = (inst_13381__$1 == null);
var state_13440__$1 = (function (){var statearr_13447 = state_13440;
(statearr_13447[(13)] = inst_13381__$1);

return statearr_13447;
})();
if(cljs.core.truth_(inst_13382)){
var statearr_13448_14983 = state_13440__$1;
(statearr_13448_14983[(1)] = (5));

} else {
var statearr_13449_14984 = state_13440__$1;
(statearr_13449_14984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (15))){
var state_13440__$1 = state_13440;
var statearr_13453_14985 = state_13440__$1;
(statearr_13453_14985[(2)] = null);

(statearr_13453_14985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (21))){
var state_13440__$1 = state_13440;
var statearr_13454_14986 = state_13440__$1;
(statearr_13454_14986[(2)] = null);

(statearr_13454_14986[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (13))){
var inst_13394 = (state_13440[(8)]);
var inst_13393 = (state_13440[(9)]);
var inst_13395 = (state_13440[(10)]);
var inst_13392 = (state_13440[(12)]);
var inst_13402 = (state_13440[(2)]);
var inst_13403 = (inst_13395 + (1));
var tmp13450 = inst_13394;
var tmp13451 = inst_13393;
var tmp13452 = inst_13392;
var inst_13392__$1 = tmp13452;
var inst_13393__$1 = tmp13451;
var inst_13394__$1 = tmp13450;
var inst_13395__$1 = inst_13403;
var state_13440__$1 = (function (){var statearr_13455 = state_13440;
(statearr_13455[(8)] = inst_13394__$1);

(statearr_13455[(9)] = inst_13393__$1);

(statearr_13455[(14)] = inst_13402);

(statearr_13455[(10)] = inst_13395__$1);

(statearr_13455[(12)] = inst_13392__$1);

return statearr_13455;
})();
var statearr_13456_14987 = state_13440__$1;
(statearr_13456_14987[(2)] = null);

(statearr_13456_14987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (22))){
var state_13440__$1 = state_13440;
var statearr_13457_14988 = state_13440__$1;
(statearr_13457_14988[(2)] = null);

(statearr_13457_14988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (6))){
var inst_13381 = (state_13440[(13)]);
var inst_13390 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13381) : f.call(null,inst_13381));
var inst_13391 = cljs.core.seq(inst_13390);
var inst_13392 = inst_13391;
var inst_13393 = null;
var inst_13394 = (0);
var inst_13395 = (0);
var state_13440__$1 = (function (){var statearr_13458 = state_13440;
(statearr_13458[(8)] = inst_13394);

(statearr_13458[(9)] = inst_13393);

(statearr_13458[(10)] = inst_13395);

(statearr_13458[(12)] = inst_13392);

return statearr_13458;
})();
var statearr_13459_14989 = state_13440__$1;
(statearr_13459_14989[(2)] = null);

(statearr_13459_14989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (17))){
var inst_13406 = (state_13440[(7)]);
var inst_13410 = cljs.core.chunk_first(inst_13406);
var inst_13411 = cljs.core.chunk_rest(inst_13406);
var inst_13412 = cljs.core.count(inst_13410);
var inst_13392 = inst_13411;
var inst_13393 = inst_13410;
var inst_13394 = inst_13412;
var inst_13395 = (0);
var state_13440__$1 = (function (){var statearr_13460 = state_13440;
(statearr_13460[(8)] = inst_13394);

(statearr_13460[(9)] = inst_13393);

(statearr_13460[(10)] = inst_13395);

(statearr_13460[(12)] = inst_13392);

return statearr_13460;
})();
var statearr_13461_14990 = state_13440__$1;
(statearr_13461_14990[(2)] = null);

(statearr_13461_14990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (3))){
var inst_13438 = (state_13440[(2)]);
var state_13440__$1 = state_13440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13440__$1,inst_13438);
} else {
if((state_val_13441 === (12))){
var inst_13426 = (state_13440[(2)]);
var state_13440__$1 = state_13440;
var statearr_13462_14991 = state_13440__$1;
(statearr_13462_14991[(2)] = inst_13426);

(statearr_13462_14991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (2))){
var state_13440__$1 = state_13440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13440__$1,(4),in$);
} else {
if((state_val_13441 === (23))){
var inst_13434 = (state_13440[(2)]);
var state_13440__$1 = state_13440;
var statearr_13463_14992 = state_13440__$1;
(statearr_13463_14992[(2)] = inst_13434);

(statearr_13463_14992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (19))){
var inst_13421 = (state_13440[(2)]);
var state_13440__$1 = state_13440;
var statearr_13464_14993 = state_13440__$1;
(statearr_13464_14993[(2)] = inst_13421);

(statearr_13464_14993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (11))){
var inst_13406 = (state_13440[(7)]);
var inst_13392 = (state_13440[(12)]);
var inst_13406__$1 = cljs.core.seq(inst_13392);
var state_13440__$1 = (function (){var statearr_13465 = state_13440;
(statearr_13465[(7)] = inst_13406__$1);

return statearr_13465;
})();
if(inst_13406__$1){
var statearr_13466_14994 = state_13440__$1;
(statearr_13466_14994[(1)] = (14));

} else {
var statearr_13467_14995 = state_13440__$1;
(statearr_13467_14995[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (9))){
var inst_13428 = (state_13440[(2)]);
var inst_13429 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13440__$1 = (function (){var statearr_13468 = state_13440;
(statearr_13468[(15)] = inst_13428);

return statearr_13468;
})();
if(cljs.core.truth_(inst_13429)){
var statearr_13469_14997 = state_13440__$1;
(statearr_13469_14997[(1)] = (21));

} else {
var statearr_13470_14998 = state_13440__$1;
(statearr_13470_14998[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (5))){
var inst_13384 = cljs.core.async.close_BANG_(out);
var state_13440__$1 = state_13440;
var statearr_13471_14999 = state_13440__$1;
(statearr_13471_14999[(2)] = inst_13384);

(statearr_13471_14999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (14))){
var inst_13406 = (state_13440[(7)]);
var inst_13408 = cljs.core.chunked_seq_QMARK_(inst_13406);
var state_13440__$1 = state_13440;
if(inst_13408){
var statearr_13472_15001 = state_13440__$1;
(statearr_13472_15001[(1)] = (17));

} else {
var statearr_13473_15002 = state_13440__$1;
(statearr_13473_15002[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (16))){
var inst_13424 = (state_13440[(2)]);
var state_13440__$1 = state_13440;
var statearr_13482_15003 = state_13440__$1;
(statearr_13482_15003[(2)] = inst_13424);

(statearr_13482_15003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13441 === (10))){
var inst_13393 = (state_13440[(9)]);
var inst_13395 = (state_13440[(10)]);
var inst_13400 = cljs.core._nth(inst_13393,inst_13395);
var state_13440__$1 = state_13440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13440__$1,(13),out,inst_13400);
} else {
if((state_val_13441 === (18))){
var inst_13406 = (state_13440[(7)]);
var inst_13415 = cljs.core.first(inst_13406);
var state_13440__$1 = state_13440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13440__$1,(20),out,inst_13415);
} else {
if((state_val_13441 === (8))){
var inst_13394 = (state_13440[(8)]);
var inst_13395 = (state_13440[(10)]);
var inst_13397 = (inst_13395 < inst_13394);
var inst_13398 = inst_13397;
var state_13440__$1 = state_13440;
if(cljs.core.truth_(inst_13398)){
var statearr_13483_15005 = state_13440__$1;
(statearr_13483_15005[(1)] = (10));

} else {
var statearr_13484_15006 = state_13440__$1;
(statearr_13484_15006[(1)] = (11));

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
var statearr_13485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13485[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_13485[(1)] = (1));

return statearr_13485;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_13440){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13440);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13486){var ex__12075__auto__ = e13486;
var statearr_13487_15007 = state_13440;
(statearr_13487_15007[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13440[(4)]))){
var statearr_13488_15008 = state_13440;
(statearr_13488_15008[(1)] = cljs.core.first((state_13440[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15009 = state_13440;
state_13440 = G__15009;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_13440){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_13440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13489 = f__12108__auto__();
(statearr_13489[(6)] = c__12107__auto__);

return statearr_13489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13494 = arguments.length;
switch (G__13494) {
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
var G__13496 = arguments.length;
switch (G__13496) {
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
var G__13498 = arguments.length;
switch (G__13498) {
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
var c__12107__auto___15013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13522){
var state_val_13523 = (state_13522[(1)]);
if((state_val_13523 === (7))){
var inst_13517 = (state_13522[(2)]);
var state_13522__$1 = state_13522;
var statearr_13524_15015 = state_13522__$1;
(statearr_13524_15015[(2)] = inst_13517);

(statearr_13524_15015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13523 === (1))){
var inst_13499 = null;
var state_13522__$1 = (function (){var statearr_13525 = state_13522;
(statearr_13525[(7)] = inst_13499);

return statearr_13525;
})();
var statearr_13526_15017 = state_13522__$1;
(statearr_13526_15017[(2)] = null);

(statearr_13526_15017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13523 === (4))){
var inst_13502 = (state_13522[(8)]);
var inst_13502__$1 = (state_13522[(2)]);
var inst_13503 = (inst_13502__$1 == null);
var inst_13504 = cljs.core.not(inst_13503);
var state_13522__$1 = (function (){var statearr_13527 = state_13522;
(statearr_13527[(8)] = inst_13502__$1);

return statearr_13527;
})();
if(inst_13504){
var statearr_13528_15019 = state_13522__$1;
(statearr_13528_15019[(1)] = (5));

} else {
var statearr_13529_15020 = state_13522__$1;
(statearr_13529_15020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13523 === (6))){
var state_13522__$1 = state_13522;
var statearr_13530_15021 = state_13522__$1;
(statearr_13530_15021[(2)] = null);

(statearr_13530_15021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13523 === (3))){
var inst_13519 = (state_13522[(2)]);
var inst_13520 = cljs.core.async.close_BANG_(out);
var state_13522__$1 = (function (){var statearr_13533 = state_13522;
(statearr_13533[(9)] = inst_13519);

return statearr_13533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13522__$1,inst_13520);
} else {
if((state_val_13523 === (2))){
var state_13522__$1 = state_13522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13522__$1,(4),ch);
} else {
if((state_val_13523 === (11))){
var inst_13502 = (state_13522[(8)]);
var inst_13511 = (state_13522[(2)]);
var inst_13499 = inst_13502;
var state_13522__$1 = (function (){var statearr_13534 = state_13522;
(statearr_13534[(10)] = inst_13511);

(statearr_13534[(7)] = inst_13499);

return statearr_13534;
})();
var statearr_13536_15024 = state_13522__$1;
(statearr_13536_15024[(2)] = null);

(statearr_13536_15024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13523 === (9))){
var inst_13502 = (state_13522[(8)]);
var state_13522__$1 = state_13522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13522__$1,(11),out,inst_13502);
} else {
if((state_val_13523 === (5))){
var inst_13502 = (state_13522[(8)]);
var inst_13499 = (state_13522[(7)]);
var inst_13506 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13502,inst_13499);
var state_13522__$1 = state_13522;
if(inst_13506){
var statearr_13538_15026 = state_13522__$1;
(statearr_13538_15026[(1)] = (8));

} else {
var statearr_13539_15027 = state_13522__$1;
(statearr_13539_15027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13523 === (10))){
var inst_13514 = (state_13522[(2)]);
var state_13522__$1 = state_13522;
var statearr_13540_15028 = state_13522__$1;
(statearr_13540_15028[(2)] = inst_13514);

(statearr_13540_15028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13523 === (8))){
var inst_13499 = (state_13522[(7)]);
var tmp13537 = inst_13499;
var inst_13499__$1 = tmp13537;
var state_13522__$1 = (function (){var statearr_13541 = state_13522;
(statearr_13541[(7)] = inst_13499__$1);

return statearr_13541;
})();
var statearr_13542_15029 = state_13522__$1;
(statearr_13542_15029[(2)] = null);

(statearr_13542_15029[(1)] = (2));


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
var statearr_13543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13543[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13543[(1)] = (1));

return statearr_13543;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13522){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13522);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13544){var ex__12075__auto__ = e13544;
var statearr_13545_15030 = state_13522;
(statearr_13545_15030[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13522[(4)]))){
var statearr_13546_15031 = state_13522;
(statearr_13546_15031[(1)] = cljs.core.first((state_13522[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15032 = state_13522;
state_13522 = G__15032;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13549 = f__12108__auto__();
(statearr_13549[(6)] = c__12107__auto___15013);

return statearr_13549;
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
var G__13554 = arguments.length;
switch (G__13554) {
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
var c__12107__auto___15034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13592){
var state_val_13593 = (state_13592[(1)]);
if((state_val_13593 === (7))){
var inst_13588 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
var statearr_13594_15035 = state_13592__$1;
(statearr_13594_15035[(2)] = inst_13588);

(statearr_13594_15035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (1))){
var inst_13555 = (new Array(n));
var inst_13556 = inst_13555;
var inst_13557 = (0);
var state_13592__$1 = (function (){var statearr_13595 = state_13592;
(statearr_13595[(7)] = inst_13557);

(statearr_13595[(8)] = inst_13556);

return statearr_13595;
})();
var statearr_13596_15036 = state_13592__$1;
(statearr_13596_15036[(2)] = null);

(statearr_13596_15036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (4))){
var inst_13560 = (state_13592[(9)]);
var inst_13560__$1 = (state_13592[(2)]);
var inst_13561 = (inst_13560__$1 == null);
var inst_13562 = cljs.core.not(inst_13561);
var state_13592__$1 = (function (){var statearr_13597 = state_13592;
(statearr_13597[(9)] = inst_13560__$1);

return statearr_13597;
})();
if(inst_13562){
var statearr_13598_15037 = state_13592__$1;
(statearr_13598_15037[(1)] = (5));

} else {
var statearr_13599_15038 = state_13592__$1;
(statearr_13599_15038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (15))){
var inst_13582 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
var statearr_13600_15039 = state_13592__$1;
(statearr_13600_15039[(2)] = inst_13582);

(statearr_13600_15039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (13))){
var state_13592__$1 = state_13592;
var statearr_13601_15040 = state_13592__$1;
(statearr_13601_15040[(2)] = null);

(statearr_13601_15040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (6))){
var inst_13557 = (state_13592[(7)]);
var inst_13578 = (inst_13557 > (0));
var state_13592__$1 = state_13592;
if(cljs.core.truth_(inst_13578)){
var statearr_13602_15041 = state_13592__$1;
(statearr_13602_15041[(1)] = (12));

} else {
var statearr_13603_15042 = state_13592__$1;
(statearr_13603_15042[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (3))){
var inst_13590 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13592__$1,inst_13590);
} else {
if((state_val_13593 === (12))){
var inst_13556 = (state_13592[(8)]);
var inst_13580 = cljs.core.vec(inst_13556);
var state_13592__$1 = state_13592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13592__$1,(15),out,inst_13580);
} else {
if((state_val_13593 === (2))){
var state_13592__$1 = state_13592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13592__$1,(4),ch);
} else {
if((state_val_13593 === (11))){
var inst_13572 = (state_13592[(2)]);
var inst_13573 = (new Array(n));
var inst_13556 = inst_13573;
var inst_13557 = (0);
var state_13592__$1 = (function (){var statearr_13604 = state_13592;
(statearr_13604[(10)] = inst_13572);

(statearr_13604[(7)] = inst_13557);

(statearr_13604[(8)] = inst_13556);

return statearr_13604;
})();
var statearr_13605_15045 = state_13592__$1;
(statearr_13605_15045[(2)] = null);

(statearr_13605_15045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (9))){
var inst_13556 = (state_13592[(8)]);
var inst_13570 = cljs.core.vec(inst_13556);
var state_13592__$1 = state_13592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13592__$1,(11),out,inst_13570);
} else {
if((state_val_13593 === (5))){
var inst_13557 = (state_13592[(7)]);
var inst_13556 = (state_13592[(8)]);
var inst_13560 = (state_13592[(9)]);
var inst_13565 = (state_13592[(11)]);
var inst_13564 = (inst_13556[inst_13557] = inst_13560);
var inst_13565__$1 = (inst_13557 + (1));
var inst_13566 = (inst_13565__$1 < n);
var state_13592__$1 = (function (){var statearr_13606 = state_13592;
(statearr_13606[(12)] = inst_13564);

(statearr_13606[(11)] = inst_13565__$1);

return statearr_13606;
})();
if(cljs.core.truth_(inst_13566)){
var statearr_13607_15049 = state_13592__$1;
(statearr_13607_15049[(1)] = (8));

} else {
var statearr_13608_15050 = state_13592__$1;
(statearr_13608_15050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (14))){
var inst_13585 = (state_13592[(2)]);
var inst_13586 = cljs.core.async.close_BANG_(out);
var state_13592__$1 = (function (){var statearr_13610 = state_13592;
(statearr_13610[(13)] = inst_13585);

return statearr_13610;
})();
var statearr_13611_15052 = state_13592__$1;
(statearr_13611_15052[(2)] = inst_13586);

(statearr_13611_15052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (10))){
var inst_13576 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
var statearr_13612_15053 = state_13592__$1;
(statearr_13612_15053[(2)] = inst_13576);

(statearr_13612_15053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (8))){
var inst_13556 = (state_13592[(8)]);
var inst_13565 = (state_13592[(11)]);
var tmp13609 = inst_13556;
var inst_13556__$1 = tmp13609;
var inst_13557 = inst_13565;
var state_13592__$1 = (function (){var statearr_13613 = state_13592;
(statearr_13613[(7)] = inst_13557);

(statearr_13613[(8)] = inst_13556__$1);

return statearr_13613;
})();
var statearr_13614_15055 = state_13592__$1;
(statearr_13614_15055[(2)] = null);

(statearr_13614_15055[(1)] = (2));


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
var statearr_13615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13615[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13615[(1)] = (1));

return statearr_13615;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13592){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13592);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13616){var ex__12075__auto__ = e13616;
var statearr_13617_15057 = state_13592;
(statearr_13617_15057[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13592[(4)]))){
var statearr_13618_15058 = state_13592;
(statearr_13618_15058[(1)] = cljs.core.first((state_13592[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15067 = state_13592;
state_13592 = G__15067;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13619 = f__12108__auto__();
(statearr_13619[(6)] = c__12107__auto___15034);

return statearr_13619;
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
var G__13621 = arguments.length;
switch (G__13621) {
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
var c__12107__auto___15071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13663){
var state_val_13664 = (state_13663[(1)]);
if((state_val_13664 === (7))){
var inst_13659 = (state_13663[(2)]);
var state_13663__$1 = state_13663;
var statearr_13665_15073 = state_13663__$1;
(statearr_13665_15073[(2)] = inst_13659);

(statearr_13665_15073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (1))){
var inst_13622 = [];
var inst_13623 = inst_13622;
var inst_13624 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13663__$1 = (function (){var statearr_13666 = state_13663;
(statearr_13666[(7)] = inst_13623);

(statearr_13666[(8)] = inst_13624);

return statearr_13666;
})();
var statearr_13667_15075 = state_13663__$1;
(statearr_13667_15075[(2)] = null);

(statearr_13667_15075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (4))){
var inst_13627 = (state_13663[(9)]);
var inst_13627__$1 = (state_13663[(2)]);
var inst_13628 = (inst_13627__$1 == null);
var inst_13629 = cljs.core.not(inst_13628);
var state_13663__$1 = (function (){var statearr_13668 = state_13663;
(statearr_13668[(9)] = inst_13627__$1);

return statearr_13668;
})();
if(inst_13629){
var statearr_13669_15076 = state_13663__$1;
(statearr_13669_15076[(1)] = (5));

} else {
var statearr_13670_15077 = state_13663__$1;
(statearr_13670_15077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (15))){
var inst_13653 = (state_13663[(2)]);
var state_13663__$1 = state_13663;
var statearr_13671_15079 = state_13663__$1;
(statearr_13671_15079[(2)] = inst_13653);

(statearr_13671_15079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (13))){
var state_13663__$1 = state_13663;
var statearr_13672_15080 = state_13663__$1;
(statearr_13672_15080[(2)] = null);

(statearr_13672_15080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (6))){
var inst_13623 = (state_13663[(7)]);
var inst_13648 = inst_13623.length;
var inst_13649 = (inst_13648 > (0));
var state_13663__$1 = state_13663;
if(cljs.core.truth_(inst_13649)){
var statearr_13673_15082 = state_13663__$1;
(statearr_13673_15082[(1)] = (12));

} else {
var statearr_13674_15083 = state_13663__$1;
(statearr_13674_15083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (3))){
var inst_13661 = (state_13663[(2)]);
var state_13663__$1 = state_13663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13663__$1,inst_13661);
} else {
if((state_val_13664 === (12))){
var inst_13623 = (state_13663[(7)]);
var inst_13651 = cljs.core.vec(inst_13623);
var state_13663__$1 = state_13663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13663__$1,(15),out,inst_13651);
} else {
if((state_val_13664 === (2))){
var state_13663__$1 = state_13663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13663__$1,(4),ch);
} else {
if((state_val_13664 === (11))){
var inst_13631 = (state_13663[(10)]);
var inst_13627 = (state_13663[(9)]);
var inst_13641 = (state_13663[(2)]);
var inst_13642 = [];
var inst_13643 = inst_13642.push(inst_13627);
var inst_13623 = inst_13642;
var inst_13624 = inst_13631;
var state_13663__$1 = (function (){var statearr_13675 = state_13663;
(statearr_13675[(7)] = inst_13623);

(statearr_13675[(11)] = inst_13641);

(statearr_13675[(12)] = inst_13643);

(statearr_13675[(8)] = inst_13624);

return statearr_13675;
})();
var statearr_13676_15086 = state_13663__$1;
(statearr_13676_15086[(2)] = null);

(statearr_13676_15086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (9))){
var inst_13623 = (state_13663[(7)]);
var inst_13639 = cljs.core.vec(inst_13623);
var state_13663__$1 = state_13663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13663__$1,(11),out,inst_13639);
} else {
if((state_val_13664 === (5))){
var inst_13631 = (state_13663[(10)]);
var inst_13627 = (state_13663[(9)]);
var inst_13624 = (state_13663[(8)]);
var inst_13631__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13627) : f.call(null,inst_13627));
var inst_13632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13631__$1,inst_13624);
var inst_13633 = cljs.core.keyword_identical_QMARK_(inst_13624,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13634 = ((inst_13632) || (inst_13633));
var state_13663__$1 = (function (){var statearr_13677 = state_13663;
(statearr_13677[(10)] = inst_13631__$1);

return statearr_13677;
})();
if(cljs.core.truth_(inst_13634)){
var statearr_13678_15087 = state_13663__$1;
(statearr_13678_15087[(1)] = (8));

} else {
var statearr_13679_15088 = state_13663__$1;
(statearr_13679_15088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (14))){
var inst_13656 = (state_13663[(2)]);
var inst_13657 = cljs.core.async.close_BANG_(out);
var state_13663__$1 = (function (){var statearr_13681 = state_13663;
(statearr_13681[(13)] = inst_13656);

return statearr_13681;
})();
var statearr_13682_15089 = state_13663__$1;
(statearr_13682_15089[(2)] = inst_13657);

(statearr_13682_15089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (10))){
var inst_13646 = (state_13663[(2)]);
var state_13663__$1 = state_13663;
var statearr_13683_15090 = state_13663__$1;
(statearr_13683_15090[(2)] = inst_13646);

(statearr_13683_15090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (8))){
var inst_13623 = (state_13663[(7)]);
var inst_13631 = (state_13663[(10)]);
var inst_13627 = (state_13663[(9)]);
var inst_13636 = inst_13623.push(inst_13627);
var tmp13680 = inst_13623;
var inst_13623__$1 = tmp13680;
var inst_13624 = inst_13631;
var state_13663__$1 = (function (){var statearr_13684 = state_13663;
(statearr_13684[(7)] = inst_13623__$1);

(statearr_13684[(8)] = inst_13624);

(statearr_13684[(14)] = inst_13636);

return statearr_13684;
})();
var statearr_13685_15091 = state_13663__$1;
(statearr_13685_15091[(2)] = null);

(statearr_13685_15091[(1)] = (2));


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
var statearr_13686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13686[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13686[(1)] = (1));

return statearr_13686;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13663){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13663);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13687){var ex__12075__auto__ = e13687;
var statearr_13688_15092 = state_13663;
(statearr_13688_15092[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13663[(4)]))){
var statearr_13689_15093 = state_13663;
(statearr_13689_15093[(1)] = cljs.core.first((state_13663[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15095 = state_13663;
state_13663 = G__15095;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13690 = f__12108__auto__();
(statearr_13690[(6)] = c__12107__auto___15071);

return statearr_13690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
