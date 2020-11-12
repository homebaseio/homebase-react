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
var val_13695 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13695) : fn1.call(null,val_13695));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13695) : fn1.call(null,val_13695));
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
var n__4613__auto___13697 = n;
var x_13698 = (0);
while(true){
if((x_13698 < n__4613__auto___13697)){
(a[x_13698] = x_13698);

var G__13699 = (x_13698 + (1));
x_13698 = G__13699;
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
var G__13700 = (i + (1));
i = G__13700;
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
var len__4736__auto___13701 = arguments.length;
var i__4737__auto___13702 = (0);
while(true){
if((i__4737__auto___13702 < len__4736__auto___13701)){
args__4742__auto__.push((arguments[i__4737__auto___13702]));

var G__13703 = (i__4737__auto___13702 + (1));
i__4737__auto___13702 = G__13703;
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
var c__12107__auto___13711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_13712 = state_12218__$1;
(statearr_12220_13712[(2)] = inst_12214);

(statearr_12220_13712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_13713 = state_12218__$1;
(statearr_12221_13713[(2)] = null);

(statearr_12221_13713[(1)] = (2));


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
var statearr_12223_13714 = state_12218__$1;
(statearr_12223_13714[(1)] = (5));

} else {
var statearr_12224_13729 = state_12218__$1;
(statearr_12224_13729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_13730 = state_12218__$1;
(statearr_12225_13730[(2)] = null);

(statearr_12225_13730[(1)] = (14));


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
var statearr_12226_13735 = state_12218__$1;
(statearr_12226_13735[(2)] = null);

(statearr_12226_13735[(1)] = (2));


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
var statearr_12227_13736 = state_12218__$1;
(statearr_12227_13736[(1)] = (12));

} else {
var statearr_12228_13737 = state_12218__$1;
(statearr_12228_13737[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_13738 = state_12218__$1;
(statearr_12229_13738[(2)] = null);

(statearr_12229_13738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_13740 = state_12218__$1;
(statearr_12230_13740[(1)] = (8));

} else {
var statearr_12231_13741 = state_12218__$1;
(statearr_12231_13741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_13744 = state_12218__$1;
(statearr_12232_13744[(2)] = inst_12212);

(statearr_12232_13744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_13746 = state_12218__$1;
(statearr_12233_13746[(2)] = inst_12204);

(statearr_12233_13746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_13747 = state_12218__$1;
(statearr_12234_13747[(2)] = inst_12201);

(statearr_12234_13747[(1)] = (10));


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
var statearr_12237_13748 = state_12218;
(statearr_12237_13748[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_13749 = state_12218;
(statearr_12238_13749[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13751 = state_12218;
state_12218 = G__13751;
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
(statearr_12239[(6)] = c__12107__auto___13711);

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
var c__12107__auto___13845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_12253_13846 = state_12248;
(statearr_12253_13846[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_13847 = state_12248;
(statearr_12254_13847[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13848 = state_12248;
state_12248 = G__13848;
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
(statearr_12255[(6)] = c__12107__auto___13845);

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
var n__4613__auto___13849 = n;
var __13850 = (0);
while(true){
if((__13850 < n__4613__auto___13849)){
var G__12260_13851 = type;
var G__12260_13852__$1 = (((G__12260_13851 instanceof cljs.core.Keyword))?G__12260_13851.fqn:null);
switch (G__12260_13852__$1) {
case "compute":
var c__12107__auto___13854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13850,c__12107__auto___13854,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__13850,c__12107__auto___13854,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_13855 = state_12273__$1;
(statearr_12275_13855[(2)] = null);

(statearr_12275_13855[(1)] = (2));


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
var statearr_12276_13856 = state_12273__$1;
(statearr_12276_13856[(1)] = (5));

} else {
var statearr_12277_13857 = state_12273__$1;
(statearr_12277_13857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_13858 = state_12273__$1;
(statearr_12278_13858[(2)] = null);

(statearr_12278_13858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_13859 = state_12273__$1;
(statearr_12279_13859[(2)] = null);

(statearr_12279_13859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_13860 = state_12273__$1;
(statearr_12280_13860[(2)] = inst_12269);

(statearr_12280_13860[(1)] = (3));


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
});})(__13850,c__12107__auto___13854,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async))
;
return ((function (__13850,switch__12071__auto__,c__12107__auto___13854,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async){
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
var statearr_12283_13861 = state_12273;
(statearr_12283_13861[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_13867 = state_12273;
(statearr_12284_13867[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13868 = state_12273;
state_12273 = G__13868;
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
;})(__13850,switch__12071__auto__,c__12107__auto___13854,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___13854);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__13850,c__12107__auto___13854,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___13869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13850,c__12107__auto___13869,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__13850,c__12107__auto___13869,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_13870 = state_12298__$1;
(statearr_12300_13870[(2)] = null);

(statearr_12300_13870[(1)] = (2));


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
var statearr_12301_13871 = state_12298__$1;
(statearr_12301_13871[(1)] = (5));

} else {
var statearr_12302_13872 = state_12298__$1;
(statearr_12302_13872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_13873 = state_12298__$1;
(statearr_12303_13873[(2)] = null);

(statearr_12303_13873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_13874 = state_12298__$1;
(statearr_12304_13874[(2)] = null);

(statearr_12304_13874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_13875 = state_12298__$1;
(statearr_12305_13875[(2)] = inst_12294);

(statearr_12305_13875[(1)] = (3));


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
});})(__13850,c__12107__auto___13869,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async))
;
return ((function (__13850,switch__12071__auto__,c__12107__auto___13869,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async){
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
var statearr_12308_13876 = state_12298;
(statearr_12308_13876[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_13877 = state_12298;
(statearr_12309_13877[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13878 = state_12298;
state_12298 = G__13878;
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
;})(__13850,switch__12071__auto__,c__12107__auto___13869,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___13869);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__13850,c__12107__auto___13869,G__12260_13851,G__12260_13852__$1,n__4613__auto___13849,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_13852__$1)].join('')));

}

var G__13879 = (__13850 + (1));
__13850 = G__13879;
continue;
} else {
}
break;
}

var c__12107__auto___13880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_13881 = state_12332__$1;
(statearr_12334_13881[(2)] = inst_12328);

(statearr_12334_13881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_13882 = state_12332__$1;
(statearr_12335_13882[(2)] = null);

(statearr_12335_13882[(1)] = (2));


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
var statearr_12337_13883 = state_12332__$1;
(statearr_12337_13883[(1)] = (5));

} else {
var statearr_12338_13884 = state_12332__$1;
(statearr_12338_13884[(1)] = (6));

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
var statearr_12341_13885 = state_12332__$1;
(statearr_12341_13885[(2)] = null);

(statearr_12341_13885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_13886 = state_12332__$1;
(statearr_12342_13886[(2)] = inst_12316);

(statearr_12342_13886[(1)] = (7));


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
var statearr_12346_13888 = state_12332;
(statearr_12346_13888[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_13890 = state_12332;
(statearr_12347_13890[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13891 = state_12332;
state_12332 = G__13891;
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
(statearr_12348[(6)] = c__12107__auto___13880);

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
var statearr_12388_13918 = state_12386__$1;
(statearr_12388_13918[(2)] = inst_12382);

(statearr_12388_13918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (20))){
var state_12386__$1 = state_12386;
var statearr_12389_13920 = state_12386__$1;
(statearr_12389_13920[(2)] = null);

(statearr_12389_13920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (1))){
var state_12386__$1 = state_12386;
var statearr_12390_13921 = state_12386__$1;
(statearr_12390_13921[(2)] = null);

(statearr_12390_13921[(1)] = (2));


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
var statearr_12392_13923 = state_12386__$1;
(statearr_12392_13923[(1)] = (5));

} else {
var statearr_12393_13924 = state_12386__$1;
(statearr_12393_13924[(1)] = (6));

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
var statearr_12394_13930 = state_12386__$1;
(statearr_12394_13930[(2)] = inst_12377);

(statearr_12394_13930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (13))){
var inst_12379 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12395 = state_12386;
(statearr_12395[(9)] = inst_12379);

return statearr_12395;
})();
var statearr_12396_13934 = state_12386__$1;
(statearr_12396_13934[(2)] = null);

(statearr_12396_13934[(1)] = (2));


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
var statearr_12397_13940 = state_12386__$1;
(statearr_12397_13940[(1)] = (19));

} else {
var statearr_12398_13942 = state_12386__$1;
(statearr_12398_13942[(1)] = (20));

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
var statearr_12399_13950 = state_12386__$1;
(statearr_12399_13950[(2)] = null);

(statearr_12399_13950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (11))){
var inst_12361 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12400 = state_12386;
(statearr_12400[(10)] = inst_12361);

return statearr_12400;
})();
var statearr_12401_13951 = state_12386__$1;
(statearr_12401_13951[(2)] = null);

(statearr_12401_13951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12402_13952 = state_12386__$1;
(statearr_12402_13952[(2)] = null);

(statearr_12402_13952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12403_13953 = state_12386__$1;
(statearr_12403_13953[(1)] = (8));

} else {
var statearr_12404_13954 = state_12386__$1;
(statearr_12404_13954[(1)] = (9));

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
var statearr_12406_13955 = state_12386__$1;
(statearr_12406_13955[(1)] = (15));

} else {
var statearr_12407_13956 = state_12386__$1;
(statearr_12407_13956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12408_13957 = state_12386__$1;
(statearr_12408_13957[(2)] = false);

(statearr_12408_13957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12409_13958 = state_12386__$1;
(statearr_12409_13958[(2)] = inst_12358);

(statearr_12409_13958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12410_13959 = state_12386__$1;
(statearr_12410_13959[(2)] = inst_12369);

(statearr_12410_13959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12411_13960 = state_12386__$1;
(statearr_12411_13960[(2)] = inst_12355);

(statearr_12411_13960[(1)] = (10));


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
var statearr_12414_13961 = state_12386;
(statearr_12414_13961[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12415_13962 = state_12386;
(statearr_12415_13962[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13963 = state_12386;
state_12386 = G__13963;
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
var c__12107__auto___13984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12448){
var state_val_12449 = (state_12448[(1)]);
if((state_val_12449 === (7))){
var inst_12444 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12450_13988 = state_12448__$1;
(statearr_12450_13988[(2)] = inst_12444);

(statearr_12450_13988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (1))){
var state_12448__$1 = state_12448;
var statearr_12451_13993 = state_12448__$1;
(statearr_12451_13993[(2)] = null);

(statearr_12451_13993[(1)] = (2));


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
var statearr_12453_13999 = state_12448__$1;
(statearr_12453_13999[(1)] = (5));

} else {
var statearr_12454_14000 = state_12448__$1;
(statearr_12454_14000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (13))){
var state_12448__$1 = state_12448;
var statearr_12455_14003 = state_12448__$1;
(statearr_12455_14003[(2)] = null);

(statearr_12455_14003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (6))){
var inst_12425 = (state_12448[(7)]);
var inst_12431 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12425) : p.call(null,inst_12425));
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12431)){
var statearr_12456_14008 = state_12448__$1;
(statearr_12456_14008[(1)] = (9));

} else {
var statearr_12457_14010 = state_12448__$1;
(statearr_12457_14010[(1)] = (10));

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
var statearr_12458_14017 = state_12448__$1;
(statearr_12458_14017[(2)] = null);

(statearr_12458_14017[(1)] = (2));


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
var statearr_12459_14024 = state_12448__$1;
(statearr_12459_14024[(2)] = tc);

(statearr_12459_14024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (5))){
var inst_12428 = cljs.core.async.close_BANG_(tc);
var inst_12429 = cljs.core.async.close_BANG_(fc);
var state_12448__$1 = (function (){var statearr_12460 = state_12448;
(statearr_12460[(8)] = inst_12428);

return statearr_12460;
})();
var statearr_12461_14029 = state_12448__$1;
(statearr_12461_14029[(2)] = inst_12429);

(statearr_12461_14029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (14))){
var inst_12442 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12462_14042 = state_12448__$1;
(statearr_12462_14042[(2)] = inst_12442);

(statearr_12462_14042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (10))){
var state_12448__$1 = state_12448;
var statearr_12463_14045 = state_12448__$1;
(statearr_12463_14045[(2)] = fc);

(statearr_12463_14045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (8))){
var inst_12437 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12437)){
var statearr_12464_14052 = state_12448__$1;
(statearr_12464_14052[(1)] = (12));

} else {
var statearr_12465_14054 = state_12448__$1;
(statearr_12465_14054[(1)] = (13));

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
var statearr_12468_14091 = state_12448;
(statearr_12468_14091[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12448[(4)]))){
var statearr_12469_14093 = state_12448;
(statearr_12469_14093[(1)] = cljs.core.first((state_12448[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14097 = state_12448;
state_12448 = G__14097;
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
(statearr_12470[(6)] = c__12107__auto___13984);

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
var statearr_12494_14098 = state_12492__$1;
(statearr_12494_14098[(2)] = inst_12488);

(statearr_12494_14098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (1))){
var inst_12471 = init;
var inst_12472 = inst_12471;
var state_12492__$1 = (function (){var statearr_12495 = state_12492;
(statearr_12495[(7)] = inst_12472);

return statearr_12495;
})();
var statearr_12496_14099 = state_12492__$1;
(statearr_12496_14099[(2)] = null);

(statearr_12496_14099[(1)] = (2));


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
var statearr_12498_14100 = state_12492__$1;
(statearr_12498_14100[(1)] = (5));

} else {
var statearr_12499_14101 = state_12492__$1;
(statearr_12499_14101[(1)] = (6));

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
var statearr_12501_14102 = state_12492__$1;
(statearr_12501_14102[(1)] = (8));

} else {
var statearr_12502_14103 = state_12492__$1;
(statearr_12502_14103[(1)] = (9));

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
var statearr_12504_14104 = state_12492__$1;
(statearr_12504_14104[(2)] = null);

(statearr_12504_14104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (5))){
var inst_12472 = (state_12492[(7)]);
var state_12492__$1 = state_12492;
var statearr_12505_14105 = state_12492__$1;
(statearr_12505_14105[(2)] = inst_12472);

(statearr_12505_14105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (10))){
var inst_12486 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12506_14106 = state_12492__$1;
(statearr_12506_14106[(2)] = inst_12486);

(statearr_12506_14106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (8))){
var inst_12479 = (state_12492[(9)]);
var inst_12482 = cljs.core.deref(inst_12479);
var state_12492__$1 = state_12492;
var statearr_12507_14107 = state_12492__$1;
(statearr_12507_14107[(2)] = inst_12482);

(statearr_12507_14107[(1)] = (10));


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
var statearr_12510_14108 = state_12492;
(statearr_12510_14108[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12492[(4)]))){
var statearr_12511_14109 = state_12492;
(statearr_12511_14109[(1)] = cljs.core.first((state_12492[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14110 = state_12492;
state_12492 = G__14110;
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
var statearr_12522_14114 = state_12518;
(statearr_12522_14114[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12518[(4)]))){
var statearr_12523_14115 = state_12518;
(statearr_12523_14115[(1)] = cljs.core.first((state_12518[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14116 = state_12518;
state_12518 = G__14116;
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
var statearr_12553_14118 = state_12551__$1;
(statearr_12553_14118[(2)] = inst_12533);

(statearr_12553_14118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (1))){
var inst_12527 = cljs.core.seq(coll);
var inst_12528 = inst_12527;
var state_12551__$1 = (function (){var statearr_12554 = state_12551;
(statearr_12554[(7)] = inst_12528);

return statearr_12554;
})();
var statearr_12555_14119 = state_12551__$1;
(statearr_12555_14119[(2)] = null);

(statearr_12555_14119[(1)] = (2));


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
var statearr_12556_14120 = state_12551__$1;
(statearr_12556_14120[(2)] = inst_12545);

(statearr_12556_14120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (6))){
var inst_12536 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12536)){
var statearr_12557_14123 = state_12551__$1;
(statearr_12557_14123[(1)] = (8));

} else {
var statearr_12558_14124 = state_12551__$1;
(statearr_12558_14124[(1)] = (9));

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
var statearr_12559_14125 = state_12551__$1;
(statearr_12559_14125[(2)] = null);

(statearr_12559_14125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (2))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12528)){
var statearr_12560_14126 = state_12551__$1;
(statearr_12560_14126[(1)] = (4));

} else {
var statearr_12561_14127 = state_12551__$1;
(statearr_12561_14127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (11))){
var inst_12542 = cljs.core.async.close_BANG_(ch);
var state_12551__$1 = state_12551;
var statearr_12562_14129 = state_12551__$1;
(statearr_12562_14129[(2)] = inst_12542);

(statearr_12562_14129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (9))){
var state_12551__$1 = state_12551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12563_14131 = state_12551__$1;
(statearr_12563_14131[(1)] = (11));

} else {
var statearr_12564_14132 = state_12551__$1;
(statearr_12564_14132[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (5))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
var statearr_12565_14137 = state_12551__$1;
(statearr_12565_14137[(2)] = inst_12528);

(statearr_12565_14137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (10))){
var inst_12547 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12566_14139 = state_12551__$1;
(statearr_12566_14139[(2)] = inst_12547);

(statearr_12566_14139[(1)] = (3));


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
var statearr_12568_14142 = state_12551__$1;
(statearr_12568_14142[(2)] = null);

(statearr_12568_14142[(1)] = (2));


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
var statearr_12571_14173 = state_12551;
(statearr_12571_14173[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12551[(4)]))){
var statearr_12572_14174 = state_12551;
(statearr_12572_14174[(1)] = cljs.core.first((state_12551[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14177 = state_12551;
state_12551 = G__14177;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14192 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14192(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14197 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14197(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14198 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14198(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14199 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14199(m);
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
var c__12107__auto___14262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12711){
var state_val_12712 = (state_12711[(1)]);
if((state_val_12712 === (7))){
var inst_12707 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12713_14263 = state_12711__$1;
(statearr_12713_14263[(2)] = inst_12707);

(statearr_12713_14263[(1)] = (3));


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
var statearr_12715_14264 = state_12711__$1;
(statearr_12715_14264[(1)] = (22));

} else {
var statearr_12716_14265 = state_12711__$1;
(statearr_12716_14265[(1)] = (23));

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
var statearr_12718_14266 = state_12711__$1;
(statearr_12718_14266[(1)] = (30));

} else {
var statearr_12719_14267 = state_12711__$1;
(statearr_12719_14267[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (1))){
var state_12711__$1 = state_12711;
var statearr_12720_14268 = state_12711__$1;
(statearr_12720_14268[(2)] = null);

(statearr_12720_14268[(1)] = (2));


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
var statearr_12722_14269 = state_12711__$1;
(statearr_12722_14269[(2)] = null);

(statearr_12722_14269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (39))){
var state_12711__$1 = state_12711;
var statearr_12726_14270 = state_12711__$1;
(statearr_12726_14270[(2)] = null);

(statearr_12726_14270[(1)] = (41));


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
var statearr_12728_14271 = state_12711__$1;
(statearr_12728_14271[(1)] = (5));

} else {
var statearr_12729_14272 = state_12711__$1;
(statearr_12729_14272[(1)] = (6));

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
var statearr_12731_14273 = state_12711__$1;
(statearr_12731_14273[(2)] = null);

(statearr_12731_14273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (21))){
var inst_12635 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12735_14274 = state_12711__$1;
(statearr_12735_14274[(2)] = inst_12635);

(statearr_12735_14274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (31))){
var inst_12661 = (state_12711[(12)]);
var inst_12665 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12661);
var state_12711__$1 = state_12711;
var statearr_12736_14275 = state_12711__$1;
(statearr_12736_14275[(2)] = inst_12665);

(statearr_12736_14275[(1)] = (32));


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
var statearr_12738_14276 = state_12711__$1;
(statearr_12738_14276[(2)] = null);

(statearr_12738_14276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (40))){
var inst_12680 = (state_12711[(22)]);
var inst_12684 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12680);
var state_12711__$1 = state_12711;
var statearr_12739_14355 = state_12711__$1;
(statearr_12739_14355[(2)] = inst_12684);

(statearr_12739_14355[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (33))){
var inst_12671 = (state_12711[(23)]);
var inst_12673 = cljs.core.chunked_seq_QMARK_(inst_12671);
var state_12711__$1 = state_12711;
if(inst_12673){
var statearr_12740_14356 = state_12711__$1;
(statearr_12740_14356[(1)] = (36));

} else {
var statearr_12741_14357 = state_12711__$1;
(statearr_12741_14357[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (13))){
var inst_12602 = (state_12711[(24)]);
var inst_12605 = cljs.core.async.close_BANG_(inst_12602);
var state_12711__$1 = state_12711;
var statearr_12742_14358 = state_12711__$1;
(statearr_12742_14358[(2)] = inst_12605);

(statearr_12742_14358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (22))){
var inst_12625 = (state_12711[(8)]);
var inst_12628 = cljs.core.async.close_BANG_(inst_12625);
var state_12711__$1 = state_12711;
var statearr_12743_14359 = state_12711__$1;
(statearr_12743_14359[(2)] = inst_12628);

(statearr_12743_14359[(1)] = (24));


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
var statearr_12745_14360 = state_12711__$1;
(statearr_12745_14360[(2)] = null);

(statearr_12745_14360[(1)] = (25));


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
var statearr_12747_14361 = state_12711__$1;
(statearr_12747_14361[(2)] = null);

(statearr_12747_14361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (43))){
var state_12711__$1 = state_12711;
var statearr_12748_14362 = state_12711__$1;
(statearr_12748_14362[(2)] = null);

(statearr_12748_14362[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (29))){
var inst_12695 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12749_14363 = state_12711__$1;
(statearr_12749_14363[(2)] = inst_12695);

(statearr_12749_14363[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (44))){
var inst_12704 = (state_12711[(2)]);
var state_12711__$1 = (function (){var statearr_12750 = state_12711;
(statearr_12750[(26)] = inst_12704);

return statearr_12750;
})();
var statearr_12751_14364 = state_12711__$1;
(statearr_12751_14364[(2)] = null);

(statearr_12751_14364[(1)] = (2));


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
var statearr_12753_14365 = state_12711__$1;
(statearr_12753_14365[(2)] = null);

(statearr_12753_14365[(1)] = (25));


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
var statearr_12755_14366 = state_12711__$1;
(statearr_12755_14366[(1)] = (33));

} else {
var statearr_12756_14367 = state_12711__$1;
(statearr_12756_14367[(1)] = (34));

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
var statearr_12757_14368 = state_12711__$1;
(statearr_12757_14368[(1)] = (27));

} else {
var statearr_12758_14369 = state_12711__$1;
(statearr_12758_14369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (34))){
var state_12711__$1 = state_12711;
var statearr_12759_14386 = state_12711__$1;
(statearr_12759_14386[(2)] = null);

(statearr_12759_14386[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (17))){
var state_12711__$1 = state_12711;
var statearr_12760_14389 = state_12711__$1;
(statearr_12760_14389[(2)] = null);

(statearr_12760_14389[(1)] = (18));


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
var statearr_12761_14392 = state_12711__$1;
(statearr_12761_14392[(2)] = inst_12640);

(statearr_12761_14392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (2))){
var state_12711__$1 = state_12711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12711__$1,(4),ch);
} else {
if((state_val_12712 === (23))){
var state_12711__$1 = state_12711;
var statearr_12762_14394 = state_12711__$1;
(statearr_12762_14394[(2)] = null);

(statearr_12762_14394[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (35))){
var inst_12693 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12763_14395 = state_12711__$1;
(statearr_12763_14395[(2)] = inst_12693);

(statearr_12763_14395[(1)] = (29));


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
var statearr_12765_14397 = state_12711__$1;
(statearr_12765_14397[(2)] = null);

(statearr_12765_14397[(1)] = (8));


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
var statearr_12767_14398 = state_12711__$1;
(statearr_12767_14398[(1)] = (16));

} else {
var statearr_12768_14400 = state_12711__$1;
(statearr_12768_14400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (9))){
var inst_12642 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12769_14401 = state_12711__$1;
(statearr_12769_14401[(2)] = inst_12642);

(statearr_12769_14401[(1)] = (7));


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
var statearr_12771_14403 = state_12711__$1;
(statearr_12771_14403[(2)] = null);

(statearr_12771_14403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (14))){
var state_12711__$1 = state_12711;
var statearr_12772_14404 = state_12711__$1;
(statearr_12772_14404[(2)] = null);

(statearr_12772_14404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (45))){
var inst_12701 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12773_14405 = state_12711__$1;
(statearr_12773_14405[(2)] = inst_12701);

(statearr_12773_14405[(1)] = (44));


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
var statearr_12775_14431 = state_12711__$1;
(statearr_12775_14431[(1)] = (42));

} else {
var statearr_12776_14433 = state_12711__$1;
(statearr_12776_14433[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (16))){
var inst_12612 = (state_12711[(7)]);
var inst_12614 = cljs.core.chunked_seq_QMARK_(inst_12612);
var state_12711__$1 = state_12711;
if(inst_12614){
var statearr_12777_14438 = state_12711__$1;
(statearr_12777_14438[(1)] = (19));

} else {
var statearr_12778_14440 = state_12711__$1;
(statearr_12778_14440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (38))){
var inst_12690 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12779_14441 = state_12711__$1;
(statearr_12779_14441[(2)] = inst_12690);

(statearr_12779_14441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (30))){
var state_12711__$1 = state_12711;
var statearr_12780_14442 = state_12711__$1;
(statearr_12780_14442[(2)] = null);

(statearr_12780_14442[(1)] = (32));


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
var statearr_12782_14445 = state_12711__$1;
(statearr_12782_14445[(1)] = (13));

} else {
var statearr_12783_14446 = state_12711__$1;
(statearr_12783_14446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (18))){
var inst_12638 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12784_14447 = state_12711__$1;
(statearr_12784_14447[(2)] = inst_12638);

(statearr_12784_14447[(1)] = (12));


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
var statearr_12786_14450 = state_12711__$1;
(statearr_12786_14450[(1)] = (39));

} else {
var statearr_12787_14451 = state_12711__$1;
(statearr_12787_14451[(1)] = (40));

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
var statearr_12788_14452 = state_12711__$1;
(statearr_12788_14452[(1)] = (10));

} else {
var statearr_12789_14453 = state_12711__$1;
(statearr_12789_14453[(1)] = (11));

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
var statearr_12792_14455 = state_12711;
(statearr_12792_14455[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12711[(4)]))){
var statearr_12793_14457 = state_12711;
(statearr_12793_14457[(1)] = cljs.core.first((state_12711[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14459 = state_12711;
state_12711 = G__14459;
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
(statearr_12794[(6)] = c__12107__auto___14262);

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

var cljs$core$async$Mix$admix_STAR_$dyn_14465 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14465(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14486 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14486(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14489 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14489(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14493 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14493(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14496 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14496(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14502 = arguments.length;
var i__4737__auto___14503 = (0);
while(true){
if((i__4737__auto___14503 < len__4736__auto___14502)){
args__4742__auto__.push((arguments[i__4737__auto___14503]));

var G__14504 = (i__4737__auto___14503 + (1));
i__4737__auto___14503 = G__14504;
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
var statearr_12804_14506 = state;
(statearr_12804_14506[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12805_14507 = state;
(statearr_12805_14507[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12806_14508 = state;
(statearr_12806_14508[(2)] = cljs.core.deref(cb));


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
var c__12107__auto___14543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12911){
var state_val_12912 = (state_12911[(1)]);
if((state_val_12912 === (7))){
var inst_12826 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12913_14544 = state_12911__$1;
(statearr_12913_14544[(2)] = inst_12826);

(statearr_12913_14544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (20))){
var inst_12838 = (state_12911[(7)]);
var state_12911__$1 = state_12911;
var statearr_12914_14547 = state_12911__$1;
(statearr_12914_14547[(2)] = inst_12838);

(statearr_12914_14547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (27))){
var state_12911__$1 = state_12911;
var statearr_12915_14549 = state_12911__$1;
(statearr_12915_14549[(2)] = null);

(statearr_12915_14549[(1)] = (28));


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
var statearr_12917_14552 = state_12911__$1;
(statearr_12917_14552[(1)] = (2));

} else {
var statearr_12918_14553 = state_12911__$1;
(statearr_12918_14553[(1)] = (3));

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
var statearr_12920_14556 = state_12911__$1;
(statearr_12920_14556[(1)] = (29));

} else {
var statearr_12921_14557 = state_12911__$1;
(statearr_12921_14557[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (4))){
var inst_12829 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12829)){
var statearr_12922_14558 = state_12911__$1;
(statearr_12922_14558[(1)] = (8));

} else {
var statearr_12923_14560 = state_12911__$1;
(statearr_12923_14560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (15))){
var inst_12856 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12856)){
var statearr_12924_14561 = state_12911__$1;
(statearr_12924_14561[(1)] = (19));

} else {
var statearr_12925_14562 = state_12911__$1;
(statearr_12925_14562[(1)] = (20));

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
var statearr_12927_14568 = state_12911__$1;
(statearr_12927_14568[(1)] = (32));

} else {
var statearr_12928_14569 = state_12911__$1;
(statearr_12928_14569[(1)] = (33));

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
var statearr_12930_14572 = state_12911__$1;
(statearr_12930_14572[(2)] = null);

(statearr_12930_14572[(1)] = (11));


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
var statearr_12931_14574 = state_12911__$1;
(statearr_12931_14574[(1)] = (16));

} else {
var statearr_12932_14575 = state_12911__$1;
(statearr_12932_14575[(1)] = (17));

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
var statearr_12934_14596 = state_12911__$1;
(statearr_12934_14596[(1)] = (23));

} else {
var statearr_12935_14597 = state_12911__$1;
(statearr_12935_14597[(1)] = (24));

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
var statearr_12937_14601 = state_12911__$1;
(statearr_12937_14601[(2)] = null);

(statearr_12937_14601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (29))){
var inst_12885 = (state_12911[(11)]);
var state_12911__$1 = state_12911;
var statearr_12938_14603 = state_12911__$1;
(statearr_12938_14603[(2)] = inst_12885);

(statearr_12938_14603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (6))){
var state_12911__$1 = state_12911;
var statearr_12939_14605 = state_12911__$1;
(statearr_12939_14605[(2)] = false);

(statearr_12939_14605[(1)] = (7));


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
var statearr_12941_14609 = state_12911__$1;
(statearr_12941_14609[(2)] = null);

(statearr_12941_14609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (25))){
var inst_12907 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12942_14610 = state_12911__$1;
(statearr_12942_14610[(2)] = inst_12907);

(statearr_12942_14610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (34))){
var inst_12905 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12943_14611 = state_12911__$1;
(statearr_12943_14611[(2)] = inst_12905);

(statearr_12943_14611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (17))){
var state_12911__$1 = state_12911;
var statearr_12944_14613 = state_12911__$1;
(statearr_12944_14613[(2)] = false);

(statearr_12944_14613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (3))){
var state_12911__$1 = state_12911;
var statearr_12945_14616 = state_12911__$1;
(statearr_12945_14616[(2)] = false);

(statearr_12945_14616[(1)] = (4));


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
var statearr_12946_14618 = state_12911__$1;
(statearr_12946_14618[(1)] = (5));

} else {
var statearr_12947_14619 = state_12911__$1;
(statearr_12947_14619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (23))){
var inst_12870 = (state_12911[(14)]);
var inst_12876 = (inst_12870 == null);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12876)){
var statearr_12948_14620 = state_12911__$1;
(statearr_12948_14620[(1)] = (26));

} else {
var statearr_12949_14621 = state_12911__$1;
(statearr_12949_14621[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (35))){
var inst_12896 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12896)){
var statearr_12950_14623 = state_12911__$1;
(statearr_12950_14623[(1)] = (36));

} else {
var statearr_12951_14625 = state_12911__$1;
(statearr_12951_14625[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (19))){
var inst_12838 = (state_12911[(7)]);
var inst_12858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12838);
var state_12911__$1 = state_12911;
var statearr_12961_14627 = state_12911__$1;
(statearr_12961_14627[(2)] = inst_12858);

(statearr_12961_14627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (11))){
var inst_12838 = (state_12911[(7)]);
var inst_12842 = (inst_12838 == null);
var inst_12843 = cljs.core.not(inst_12842);
var state_12911__$1 = state_12911;
if(inst_12843){
var statearr_12962_14630 = state_12911__$1;
(statearr_12962_14630[(1)] = (13));

} else {
var statearr_12963_14631 = state_12911__$1;
(statearr_12963_14631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (9))){
var inst_12813 = (state_12911[(8)]);
var state_12911__$1 = state_12911;
var statearr_12964_14632 = state_12911__$1;
(statearr_12964_14632[(2)] = inst_12813);

(statearr_12964_14632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (5))){
var state_12911__$1 = state_12911;
var statearr_12965_14633 = state_12911__$1;
(statearr_12965_14633[(2)] = true);

(statearr_12965_14633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (14))){
var state_12911__$1 = state_12911;
var statearr_12966_14634 = state_12911__$1;
(statearr_12966_14634[(2)] = false);

(statearr_12966_14634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (26))){
var inst_12871 = (state_12911[(10)]);
var inst_12878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12871);
var state_12911__$1 = state_12911;
var statearr_12967_14635 = state_12911__$1;
(statearr_12967_14635[(2)] = inst_12878);

(statearr_12967_14635[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (16))){
var state_12911__$1 = state_12911;
var statearr_12968_14636 = state_12911__$1;
(statearr_12968_14636[(2)] = true);

(statearr_12968_14636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (38))){
var inst_12901 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12969_14637 = state_12911__$1;
(statearr_12969_14637[(2)] = inst_12901);

(statearr_12969_14637[(1)] = (34));


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
var statearr_12970_14638 = state_12911__$1;
(statearr_12970_14638[(2)] = inst_12891);

(statearr_12970_14638[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (10))){
var inst_12813 = (state_12911[(8)]);
var inst_12834 = (state_12911[(2)]);
var inst_12835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12834,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12834,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12834,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12838 = inst_12813;
var state_12911__$1 = (function (){var statearr_12971 = state_12911;
(statearr_12971[(16)] = inst_12836);

(statearr_12971[(7)] = inst_12838);

(statearr_12971[(17)] = inst_12837);

(statearr_12971[(18)] = inst_12835);

return statearr_12971;
})();
var statearr_12972_14639 = state_12911__$1;
(statearr_12972_14639[(2)] = null);

(statearr_12972_14639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (18))){
var inst_12853 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12973_14640 = state_12911__$1;
(statearr_12973_14640[(2)] = inst_12853);

(statearr_12973_14640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (37))){
var state_12911__$1 = state_12911;
var statearr_12974_14641 = state_12911__$1;
(statearr_12974_14641[(2)] = null);

(statearr_12974_14641[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (8))){
var inst_12813 = (state_12911[(8)]);
var inst_12831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12813);
var state_12911__$1 = state_12911;
var statearr_12975_14642 = state_12911__$1;
(statearr_12975_14642[(2)] = inst_12831);

(statearr_12975_14642[(1)] = (10));


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
var statearr_12976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12976[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_12976[(1)] = (1));

return statearr_12976;
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
}catch (e12977){var ex__12075__auto__ = e12977;
var statearr_12978_14643 = state_12911;
(statearr_12978_14643[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12911[(4)]))){
var statearr_12979_14644 = state_12911;
(statearr_12979_14644[(1)] = cljs.core.first((state_12911[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14645 = state_12911;
state_12911 = G__14645;
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
var state__12109__auto__ = (function (){var statearr_12980 = f__12108__auto__();
(statearr_12980[(6)] = c__12107__auto___14543);

return statearr_12980;
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

var cljs$core$async$Pub$sub_STAR_$dyn_14646 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14646(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14647 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14647(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14648 = (function() {
var G__14649 = null;
var G__14649__1 = (function (p){
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
var G__14649__2 = (function (p,v){
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
G__14649 = function(p,v){
switch(arguments.length){
case 1:
return G__14649__1.call(this,p);
case 2:
return G__14649__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14649.cljs$core$IFn$_invoke$arity$1 = G__14649__1;
G__14649.cljs$core$IFn$_invoke$arity$2 = G__14649__2;
return G__14649;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12987 = arguments.length;
switch (G__12987) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14648(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14648(p,v);
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
var G__12990 = arguments.length;
switch (G__12990) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12988_SHARP_){
if(cljs.core.truth_((p1__12988_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12988_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12988_SHARP_.call(null,topic)))){
return p1__12988_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12988_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12995 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12996){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12996 = meta12996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12997,meta12996__$1){
var self__ = this;
var _12997__$1 = this;
return (new cljs.core.async.t_cljs$core$async12995(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12996__$1));
}));

(cljs.core.async.t_cljs$core$async12995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12997){
var self__ = this;
var _12997__$1 = this;
return self__.meta12996;
}));

(cljs.core.async.t_cljs$core$async12995.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12995.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12995.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12995.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12996","meta12996",-988729777,null)], null);
}));

(cljs.core.async.t_cljs$core$async12995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12995");

(cljs.core.async.t_cljs$core$async12995.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12995.
 */
cljs.core.async.__GT_t_cljs$core$async12995 = (function cljs$core$async$__GT_t_cljs$core$async12995(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12996){
return (new cljs.core.async.t_cljs$core$async12995(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12996));
});

}

return (new cljs.core.async.t_cljs$core$async12995(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13071){
var state_val_13072 = (state_13071[(1)]);
if((state_val_13072 === (7))){
var inst_13067 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13073_14658 = state_13071__$1;
(statearr_13073_14658[(2)] = inst_13067);

(statearr_13073_14658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (20))){
var state_13071__$1 = state_13071;
var statearr_13074_14659 = state_13071__$1;
(statearr_13074_14659[(2)] = null);

(statearr_13074_14659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (1))){
var state_13071__$1 = state_13071;
var statearr_13075_14660 = state_13071__$1;
(statearr_13075_14660[(2)] = null);

(statearr_13075_14660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (24))){
var inst_13050 = (state_13071[(7)]);
var inst_13059 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13050);
var state_13071__$1 = state_13071;
var statearr_13076_14661 = state_13071__$1;
(statearr_13076_14661[(2)] = inst_13059);

(statearr_13076_14661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (4))){
var inst_13002 = (state_13071[(8)]);
var inst_13002__$1 = (state_13071[(2)]);
var inst_13003 = (inst_13002__$1 == null);
var state_13071__$1 = (function (){var statearr_13077 = state_13071;
(statearr_13077[(8)] = inst_13002__$1);

return statearr_13077;
})();
if(cljs.core.truth_(inst_13003)){
var statearr_13078_14662 = state_13071__$1;
(statearr_13078_14662[(1)] = (5));

} else {
var statearr_13079_14663 = state_13071__$1;
(statearr_13079_14663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (15))){
var inst_13044 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13080_14664 = state_13071__$1;
(statearr_13080_14664[(2)] = inst_13044);

(statearr_13080_14664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (21))){
var inst_13064 = (state_13071[(2)]);
var state_13071__$1 = (function (){var statearr_13081 = state_13071;
(statearr_13081[(9)] = inst_13064);

return statearr_13081;
})();
var statearr_13083_14665 = state_13071__$1;
(statearr_13083_14665[(2)] = null);

(statearr_13083_14665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (13))){
var inst_13026 = (state_13071[(10)]);
var inst_13028 = cljs.core.chunked_seq_QMARK_(inst_13026);
var state_13071__$1 = state_13071;
if(inst_13028){
var statearr_13084_14666 = state_13071__$1;
(statearr_13084_14666[(1)] = (16));

} else {
var statearr_13085_14667 = state_13071__$1;
(statearr_13085_14667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (22))){
var inst_13056 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
if(cljs.core.truth_(inst_13056)){
var statearr_13086_14668 = state_13071__$1;
(statearr_13086_14668[(1)] = (23));

} else {
var statearr_13087_14669 = state_13071__$1;
(statearr_13087_14669[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (6))){
var inst_13052 = (state_13071[(11)]);
var inst_13050 = (state_13071[(7)]);
var inst_13002 = (state_13071[(8)]);
var inst_13050__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13002) : topic_fn.call(null,inst_13002));
var inst_13051 = cljs.core.deref(mults);
var inst_13052__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13051,inst_13050__$1);
var state_13071__$1 = (function (){var statearr_13089 = state_13071;
(statearr_13089[(11)] = inst_13052__$1);

(statearr_13089[(7)] = inst_13050__$1);

return statearr_13089;
})();
if(cljs.core.truth_(inst_13052__$1)){
var statearr_13090_14670 = state_13071__$1;
(statearr_13090_14670[(1)] = (19));

} else {
var statearr_13091_14671 = state_13071__$1;
(statearr_13091_14671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (25))){
var inst_13061 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13092_14672 = state_13071__$1;
(statearr_13092_14672[(2)] = inst_13061);

(statearr_13092_14672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (17))){
var inst_13026 = (state_13071[(10)]);
var inst_13035 = cljs.core.first(inst_13026);
var inst_13036 = cljs.core.async.muxch_STAR_(inst_13035);
var inst_13037 = cljs.core.async.close_BANG_(inst_13036);
var inst_13038 = cljs.core.next(inst_13026);
var inst_13012 = inst_13038;
var inst_13013 = null;
var inst_13014 = (0);
var inst_13015 = (0);
var state_13071__$1 = (function (){var statearr_13098 = state_13071;
(statearr_13098[(12)] = inst_13015);

(statearr_13098[(13)] = inst_13012);

(statearr_13098[(14)] = inst_13037);

(statearr_13098[(15)] = inst_13013);

(statearr_13098[(16)] = inst_13014);

return statearr_13098;
})();
var statearr_13099_14673 = state_13071__$1;
(statearr_13099_14673[(2)] = null);

(statearr_13099_14673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (3))){
var inst_13069 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13071__$1,inst_13069);
} else {
if((state_val_13072 === (12))){
var inst_13046 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13102_14674 = state_13071__$1;
(statearr_13102_14674[(2)] = inst_13046);

(statearr_13102_14674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (2))){
var state_13071__$1 = state_13071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13071__$1,(4),ch);
} else {
if((state_val_13072 === (23))){
var state_13071__$1 = state_13071;
var statearr_13103_14675 = state_13071__$1;
(statearr_13103_14675[(2)] = null);

(statearr_13103_14675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (19))){
var inst_13052 = (state_13071[(11)]);
var inst_13002 = (state_13071[(8)]);
var inst_13054 = cljs.core.async.muxch_STAR_(inst_13052);
var state_13071__$1 = state_13071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13071__$1,(22),inst_13054,inst_13002);
} else {
if((state_val_13072 === (11))){
var inst_13026 = (state_13071[(10)]);
var inst_13012 = (state_13071[(13)]);
var inst_13026__$1 = cljs.core.seq(inst_13012);
var state_13071__$1 = (function (){var statearr_13104 = state_13071;
(statearr_13104[(10)] = inst_13026__$1);

return statearr_13104;
})();
if(inst_13026__$1){
var statearr_13105_14676 = state_13071__$1;
(statearr_13105_14676[(1)] = (13));

} else {
var statearr_13106_14677 = state_13071__$1;
(statearr_13106_14677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (9))){
var inst_13048 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13107_14678 = state_13071__$1;
(statearr_13107_14678[(2)] = inst_13048);

(statearr_13107_14678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (5))){
var inst_13009 = cljs.core.deref(mults);
var inst_13010 = cljs.core.vals(inst_13009);
var inst_13011 = cljs.core.seq(inst_13010);
var inst_13012 = inst_13011;
var inst_13013 = null;
var inst_13014 = (0);
var inst_13015 = (0);
var state_13071__$1 = (function (){var statearr_13108 = state_13071;
(statearr_13108[(12)] = inst_13015);

(statearr_13108[(13)] = inst_13012);

(statearr_13108[(15)] = inst_13013);

(statearr_13108[(16)] = inst_13014);

return statearr_13108;
})();
var statearr_13109_14679 = state_13071__$1;
(statearr_13109_14679[(2)] = null);

(statearr_13109_14679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (14))){
var state_13071__$1 = state_13071;
var statearr_13113_14680 = state_13071__$1;
(statearr_13113_14680[(2)] = null);

(statearr_13113_14680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (16))){
var inst_13026 = (state_13071[(10)]);
var inst_13030 = cljs.core.chunk_first(inst_13026);
var inst_13031 = cljs.core.chunk_rest(inst_13026);
var inst_13032 = cljs.core.count(inst_13030);
var inst_13012 = inst_13031;
var inst_13013 = inst_13030;
var inst_13014 = inst_13032;
var inst_13015 = (0);
var state_13071__$1 = (function (){var statearr_13114 = state_13071;
(statearr_13114[(12)] = inst_13015);

(statearr_13114[(13)] = inst_13012);

(statearr_13114[(15)] = inst_13013);

(statearr_13114[(16)] = inst_13014);

return statearr_13114;
})();
var statearr_13115_14681 = state_13071__$1;
(statearr_13115_14681[(2)] = null);

(statearr_13115_14681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (10))){
var inst_13015 = (state_13071[(12)]);
var inst_13012 = (state_13071[(13)]);
var inst_13013 = (state_13071[(15)]);
var inst_13014 = (state_13071[(16)]);
var inst_13020 = cljs.core._nth(inst_13013,inst_13015);
var inst_13021 = cljs.core.async.muxch_STAR_(inst_13020);
var inst_13022 = cljs.core.async.close_BANG_(inst_13021);
var inst_13023 = (inst_13015 + (1));
var tmp13110 = inst_13012;
var tmp13111 = inst_13013;
var tmp13112 = inst_13014;
var inst_13012__$1 = tmp13110;
var inst_13013__$1 = tmp13111;
var inst_13014__$1 = tmp13112;
var inst_13015__$1 = inst_13023;
var state_13071__$1 = (function (){var statearr_13116 = state_13071;
(statearr_13116[(12)] = inst_13015__$1);

(statearr_13116[(13)] = inst_13012__$1);

(statearr_13116[(17)] = inst_13022);

(statearr_13116[(15)] = inst_13013__$1);

(statearr_13116[(16)] = inst_13014__$1);

return statearr_13116;
})();
var statearr_13117_14682 = state_13071__$1;
(statearr_13117_14682[(2)] = null);

(statearr_13117_14682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (18))){
var inst_13041 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13118_14683 = state_13071__$1;
(statearr_13118_14683[(2)] = inst_13041);

(statearr_13118_14683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (8))){
var inst_13015 = (state_13071[(12)]);
var inst_13014 = (state_13071[(16)]);
var inst_13017 = (inst_13015 < inst_13014);
var inst_13018 = inst_13017;
var state_13071__$1 = state_13071;
if(cljs.core.truth_(inst_13018)){
var statearr_13119_14684 = state_13071__$1;
(statearr_13119_14684[(1)] = (10));

} else {
var statearr_13120_14685 = state_13071__$1;
(statearr_13120_14685[(1)] = (11));

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
var statearr_13121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13121[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13121[(1)] = (1));

return statearr_13121;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13071){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13071);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13122){var ex__12075__auto__ = e13122;
var statearr_13123_14686 = state_13071;
(statearr_13123_14686[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13071[(4)]))){
var statearr_13124_14687 = state_13071;
(statearr_13124_14687[(1)] = cljs.core.first((state_13071[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14688 = state_13071;
state_13071 = G__14688;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13125 = f__12108__auto__();
(statearr_13125[(6)] = c__12107__auto___14657);

return statearr_13125;
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
var G__13127 = arguments.length;
switch (G__13127) {
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
var G__13130 = arguments.length;
switch (G__13130) {
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
var G__13133 = arguments.length;
switch (G__13133) {
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
var c__12107__auto___14692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13179){
var state_val_13180 = (state_13179[(1)]);
if((state_val_13180 === (7))){
var state_13179__$1 = state_13179;
var statearr_13181_14693 = state_13179__$1;
(statearr_13181_14693[(2)] = null);

(statearr_13181_14693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (1))){
var state_13179__$1 = state_13179;
var statearr_13182_14694 = state_13179__$1;
(statearr_13182_14694[(2)] = null);

(statearr_13182_14694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (4))){
var inst_13136 = (state_13179[(7)]);
var inst_13137 = (state_13179[(8)]);
var inst_13139 = (inst_13137 < inst_13136);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13139)){
var statearr_13186_14695 = state_13179__$1;
(statearr_13186_14695[(1)] = (6));

} else {
var statearr_13187_14696 = state_13179__$1;
(statearr_13187_14696[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (15))){
var inst_13165 = (state_13179[(9)]);
var inst_13170 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13165);
var state_13179__$1 = state_13179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13179__$1,(17),out,inst_13170);
} else {
if((state_val_13180 === (13))){
var inst_13165 = (state_13179[(9)]);
var inst_13165__$1 = (state_13179[(2)]);
var inst_13166 = cljs.core.some(cljs.core.nil_QMARK_,inst_13165__$1);
var state_13179__$1 = (function (){var statearr_13188 = state_13179;
(statearr_13188[(9)] = inst_13165__$1);

return statearr_13188;
})();
if(cljs.core.truth_(inst_13166)){
var statearr_13189_14697 = state_13179__$1;
(statearr_13189_14697[(1)] = (14));

} else {
var statearr_13190_14698 = state_13179__$1;
(statearr_13190_14698[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (6))){
var state_13179__$1 = state_13179;
var statearr_13191_14700 = state_13179__$1;
(statearr_13191_14700[(2)] = null);

(statearr_13191_14700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (17))){
var inst_13172 = (state_13179[(2)]);
var state_13179__$1 = (function (){var statearr_13196 = state_13179;
(statearr_13196[(10)] = inst_13172);

return statearr_13196;
})();
var statearr_13197_14701 = state_13179__$1;
(statearr_13197_14701[(2)] = null);

(statearr_13197_14701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (3))){
var inst_13177 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13179__$1,inst_13177);
} else {
if((state_val_13180 === (12))){
var _ = (function (){var statearr_13198 = state_13179;
(statearr_13198[(4)] = cljs.core.rest((state_13179[(4)])));

return statearr_13198;
})();
var state_13179__$1 = state_13179;
var ex13194 = (state_13179__$1[(2)]);
var statearr_13199_14702 = state_13179__$1;
(statearr_13199_14702[(5)] = ex13194);


if((ex13194 instanceof Object)){
var statearr_13200_14703 = state_13179__$1;
(statearr_13200_14703[(1)] = (11));

(statearr_13200_14703[(5)] = null);

} else {
throw ex13194;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (2))){
var inst_13135 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13136 = cnt;
var inst_13137 = (0);
var state_13179__$1 = (function (){var statearr_13201 = state_13179;
(statearr_13201[(7)] = inst_13136);

(statearr_13201[(11)] = inst_13135);

(statearr_13201[(8)] = inst_13137);

return statearr_13201;
})();
var statearr_13202_14705 = state_13179__$1;
(statearr_13202_14705[(2)] = null);

(statearr_13202_14705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (11))){
var inst_13141 = (state_13179[(2)]);
var inst_13142 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13179__$1 = (function (){var statearr_13203 = state_13179;
(statearr_13203[(12)] = inst_13141);

return statearr_13203;
})();
var statearr_13204_14710 = state_13179__$1;
(statearr_13204_14710[(2)] = inst_13142);

(statearr_13204_14710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (9))){
var inst_13137 = (state_13179[(8)]);
var _ = (function (){var statearr_13205 = state_13179;
(statearr_13205[(4)] = cljs.core.cons((12),(state_13179[(4)])));

return statearr_13205;
})();
var inst_13151 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13137) : chs__$1.call(null,inst_13137));
var inst_13152 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13137) : done.call(null,inst_13137));
var inst_13153 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13151,inst_13152);
var ___$1 = (function (){var statearr_13206 = state_13179;
(statearr_13206[(4)] = cljs.core.rest((state_13179[(4)])));

return statearr_13206;
})();
var state_13179__$1 = state_13179;
var statearr_13207_14714 = state_13179__$1;
(statearr_13207_14714[(2)] = inst_13153);

(statearr_13207_14714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (5))){
var inst_13163 = (state_13179[(2)]);
var state_13179__$1 = (function (){var statearr_13208 = state_13179;
(statearr_13208[(13)] = inst_13163);

return statearr_13208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13179__$1,(13),dchan);
} else {
if((state_val_13180 === (14))){
var inst_13168 = cljs.core.async.close_BANG_(out);
var state_13179__$1 = state_13179;
var statearr_13209_14715 = state_13179__$1;
(statearr_13209_14715[(2)] = inst_13168);

(statearr_13209_14715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (16))){
var inst_13175 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13210_14717 = state_13179__$1;
(statearr_13210_14717[(2)] = inst_13175);

(statearr_13210_14717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (10))){
var inst_13137 = (state_13179[(8)]);
var inst_13156 = (state_13179[(2)]);
var inst_13157 = (inst_13137 + (1));
var inst_13137__$1 = inst_13157;
var state_13179__$1 = (function (){var statearr_13211 = state_13179;
(statearr_13211[(14)] = inst_13156);

(statearr_13211[(8)] = inst_13137__$1);

return statearr_13211;
})();
var statearr_13212_14718 = state_13179__$1;
(statearr_13212_14718[(2)] = null);

(statearr_13212_14718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (8))){
var inst_13161 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13213_14719 = state_13179__$1;
(statearr_13213_14719[(2)] = inst_13161);

(statearr_13213_14719[(1)] = (5));


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
var statearr_13214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13214[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13214[(1)] = (1));

return statearr_13214;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13179){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13179);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13215){var ex__12075__auto__ = e13215;
var statearr_13216_14721 = state_13179;
(statearr_13216_14721[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13179[(4)]))){
var statearr_13217_14722 = state_13179;
(statearr_13217_14722[(1)] = cljs.core.first((state_13179[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14723 = state_13179;
state_13179 = G__14723;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13218 = f__12108__auto__();
(statearr_13218[(6)] = c__12107__auto___14692);

return statearr_13218;
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
var G__13221 = arguments.length;
switch (G__13221) {
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
var c__12107__auto___14725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13253){
var state_val_13254 = (state_13253[(1)]);
if((state_val_13254 === (7))){
var inst_13233 = (state_13253[(7)]);
var inst_13232 = (state_13253[(8)]);
var inst_13232__$1 = (state_13253[(2)]);
var inst_13233__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13232__$1,(0),null);
var inst_13234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13232__$1,(1),null);
var inst_13235 = (inst_13233__$1 == null);
var state_13253__$1 = (function (){var statearr_13255 = state_13253;
(statearr_13255[(7)] = inst_13233__$1);

(statearr_13255[(9)] = inst_13234);

(statearr_13255[(8)] = inst_13232__$1);

return statearr_13255;
})();
if(cljs.core.truth_(inst_13235)){
var statearr_13256_14726 = state_13253__$1;
(statearr_13256_14726[(1)] = (8));

} else {
var statearr_13257_14727 = state_13253__$1;
(statearr_13257_14727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (1))){
var inst_13222 = cljs.core.vec(chs);
var inst_13223 = inst_13222;
var state_13253__$1 = (function (){var statearr_13258 = state_13253;
(statearr_13258[(10)] = inst_13223);

return statearr_13258;
})();
var statearr_13259_14728 = state_13253__$1;
(statearr_13259_14728[(2)] = null);

(statearr_13259_14728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (4))){
var inst_13223 = (state_13253[(10)]);
var state_13253__$1 = state_13253;
return cljs.core.async.ioc_alts_BANG_(state_13253__$1,(7),inst_13223);
} else {
if((state_val_13254 === (6))){
var inst_13249 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
var statearr_13260_14729 = state_13253__$1;
(statearr_13260_14729[(2)] = inst_13249);

(statearr_13260_14729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (3))){
var inst_13251 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13253__$1,inst_13251);
} else {
if((state_val_13254 === (2))){
var inst_13223 = (state_13253[(10)]);
var inst_13225 = cljs.core.count(inst_13223);
var inst_13226 = (inst_13225 > (0));
var state_13253__$1 = state_13253;
if(cljs.core.truth_(inst_13226)){
var statearr_13262_14730 = state_13253__$1;
(statearr_13262_14730[(1)] = (4));

} else {
var statearr_13263_14731 = state_13253__$1;
(statearr_13263_14731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (11))){
var inst_13223 = (state_13253[(10)]);
var inst_13242 = (state_13253[(2)]);
var tmp13261 = inst_13223;
var inst_13223__$1 = tmp13261;
var state_13253__$1 = (function (){var statearr_13264 = state_13253;
(statearr_13264[(10)] = inst_13223__$1);

(statearr_13264[(11)] = inst_13242);

return statearr_13264;
})();
var statearr_13265_14732 = state_13253__$1;
(statearr_13265_14732[(2)] = null);

(statearr_13265_14732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (9))){
var inst_13233 = (state_13253[(7)]);
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13253__$1,(11),out,inst_13233);
} else {
if((state_val_13254 === (5))){
var inst_13247 = cljs.core.async.close_BANG_(out);
var state_13253__$1 = state_13253;
var statearr_13266_14733 = state_13253__$1;
(statearr_13266_14733[(2)] = inst_13247);

(statearr_13266_14733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (10))){
var inst_13245 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
var statearr_13267_14734 = state_13253__$1;
(statearr_13267_14734[(2)] = inst_13245);

(statearr_13267_14734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (8))){
var inst_13233 = (state_13253[(7)]);
var inst_13223 = (state_13253[(10)]);
var inst_13234 = (state_13253[(9)]);
var inst_13232 = (state_13253[(8)]);
var inst_13237 = (function (){var cs = inst_13223;
var vec__13228 = inst_13232;
var v = inst_13233;
var c = inst_13234;
return (function (p1__13219_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13219_SHARP_);
});
})();
var inst_13238 = cljs.core.filterv(inst_13237,inst_13223);
var inst_13223__$1 = inst_13238;
var state_13253__$1 = (function (){var statearr_13268 = state_13253;
(statearr_13268[(10)] = inst_13223__$1);

return statearr_13268;
})();
var statearr_13269_14735 = state_13253__$1;
(statearr_13269_14735[(2)] = null);

(statearr_13269_14735[(1)] = (2));


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
var statearr_13270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13270[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13270[(1)] = (1));

return statearr_13270;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13253){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13253);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13271){var ex__12075__auto__ = e13271;
var statearr_13272_14736 = state_13253;
(statearr_13272_14736[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13253[(4)]))){
var statearr_13273_14737 = state_13253;
(statearr_13273_14737[(1)] = cljs.core.first((state_13253[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14738 = state_13253;
state_13253 = G__14738;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13274 = f__12108__auto__();
(statearr_13274[(6)] = c__12107__auto___14725);

return statearr_13274;
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
var G__13276 = arguments.length;
switch (G__13276) {
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
var c__12107__auto___14740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13300){
var state_val_13301 = (state_13300[(1)]);
if((state_val_13301 === (7))){
var inst_13282 = (state_13300[(7)]);
var inst_13282__$1 = (state_13300[(2)]);
var inst_13283 = (inst_13282__$1 == null);
var inst_13284 = cljs.core.not(inst_13283);
var state_13300__$1 = (function (){var statearr_13302 = state_13300;
(statearr_13302[(7)] = inst_13282__$1);

return statearr_13302;
})();
if(inst_13284){
var statearr_13303_14741 = state_13300__$1;
(statearr_13303_14741[(1)] = (8));

} else {
var statearr_13304_14742 = state_13300__$1;
(statearr_13304_14742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13301 === (1))){
var inst_13277 = (0);
var state_13300__$1 = (function (){var statearr_13305 = state_13300;
(statearr_13305[(8)] = inst_13277);

return statearr_13305;
})();
var statearr_13306_14743 = state_13300__$1;
(statearr_13306_14743[(2)] = null);

(statearr_13306_14743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13301 === (4))){
var state_13300__$1 = state_13300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13300__$1,(7),ch);
} else {
if((state_val_13301 === (6))){
var inst_13295 = (state_13300[(2)]);
var state_13300__$1 = state_13300;
var statearr_13307_14744 = state_13300__$1;
(statearr_13307_14744[(2)] = inst_13295);

(statearr_13307_14744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13301 === (3))){
var inst_13297 = (state_13300[(2)]);
var inst_13298 = cljs.core.async.close_BANG_(out);
var state_13300__$1 = (function (){var statearr_13308 = state_13300;
(statearr_13308[(9)] = inst_13297);

return statearr_13308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13300__$1,inst_13298);
} else {
if((state_val_13301 === (2))){
var inst_13277 = (state_13300[(8)]);
var inst_13279 = (inst_13277 < n);
var state_13300__$1 = state_13300;
if(cljs.core.truth_(inst_13279)){
var statearr_13309_14745 = state_13300__$1;
(statearr_13309_14745[(1)] = (4));

} else {
var statearr_13310_14746 = state_13300__$1;
(statearr_13310_14746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13301 === (11))){
var inst_13277 = (state_13300[(8)]);
var inst_13287 = (state_13300[(2)]);
var inst_13288 = (inst_13277 + (1));
var inst_13277__$1 = inst_13288;
var state_13300__$1 = (function (){var statearr_13311 = state_13300;
(statearr_13311[(10)] = inst_13287);

(statearr_13311[(8)] = inst_13277__$1);

return statearr_13311;
})();
var statearr_13312_14747 = state_13300__$1;
(statearr_13312_14747[(2)] = null);

(statearr_13312_14747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13301 === (9))){
var state_13300__$1 = state_13300;
var statearr_13313_14748 = state_13300__$1;
(statearr_13313_14748[(2)] = null);

(statearr_13313_14748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13301 === (5))){
var state_13300__$1 = state_13300;
var statearr_13314_14751 = state_13300__$1;
(statearr_13314_14751[(2)] = null);

(statearr_13314_14751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13301 === (10))){
var inst_13292 = (state_13300[(2)]);
var state_13300__$1 = state_13300;
var statearr_13315_14754 = state_13300__$1;
(statearr_13315_14754[(2)] = inst_13292);

(statearr_13315_14754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13301 === (8))){
var inst_13282 = (state_13300[(7)]);
var state_13300__$1 = state_13300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13300__$1,(11),out,inst_13282);
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
var statearr_13316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13316[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13316[(1)] = (1));

return statearr_13316;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13300){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13300);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13317){var ex__12075__auto__ = e13317;
var statearr_13318_14758 = state_13300;
(statearr_13318_14758[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13300[(4)]))){
var statearr_13319_14759 = state_13300;
(statearr_13319_14759[(1)] = cljs.core.first((state_13300[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14760 = state_13300;
state_13300 = G__14760;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13320 = f__12108__auto__();
(statearr_13320[(6)] = c__12107__auto___14740);

return statearr_13320;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13322 = (function (f,ch,meta13323){
this.f = f;
this.ch = ch;
this.meta13323 = meta13323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13324,meta13323__$1){
var self__ = this;
var _13324__$1 = this;
return (new cljs.core.async.t_cljs$core$async13322(self__.f,self__.ch,meta13323__$1));
}));

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13324){
var self__ = this;
var _13324__$1 = this;
return self__.meta13323;
}));

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13325 = (function (f,ch,meta13323,_,fn1,meta13326){
this.f = f;
this.ch = ch;
this.meta13323 = meta13323;
this._ = _;
this.fn1 = fn1;
this.meta13326 = meta13326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13327,meta13326__$1){
var self__ = this;
var _13327__$1 = this;
return (new cljs.core.async.t_cljs$core$async13325(self__.f,self__.ch,self__.meta13323,self__._,self__.fn1,meta13326__$1));
}));

(cljs.core.async.t_cljs$core$async13325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13327){
var self__ = this;
var _13327__$1 = this;
return self__.meta13326;
}));

(cljs.core.async.t_cljs$core$async13325.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13325.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13321_SHARP_){
var G__13328 = (((p1__13321_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13321_SHARP_) : self__.f.call(null,p1__13321_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13328) : f1.call(null,G__13328));
});
}));

(cljs.core.async.t_cljs$core$async13325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13323","meta13323",807582913,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13322","cljs.core.async/t_cljs$core$async13322",591429732,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13326","meta13326",-559559224,null)], null);
}));

(cljs.core.async.t_cljs$core$async13325.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13325");

(cljs.core.async.t_cljs$core$async13325.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13325");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13325.
 */
cljs.core.async.__GT_t_cljs$core$async13325 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13325(f__$1,ch__$1,meta13323__$1,___$2,fn1__$1,meta13326){
return (new cljs.core.async.t_cljs$core$async13325(f__$1,ch__$1,meta13323__$1,___$2,fn1__$1,meta13326));
});

}

return (new cljs.core.async.t_cljs$core$async13325(self__.f,self__.ch,self__.meta13323,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13323","meta13323",807582913,null)], null);
}));

(cljs.core.async.t_cljs$core$async13322.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13322");

(cljs.core.async.t_cljs$core$async13322.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13322");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13322.
 */
cljs.core.async.__GT_t_cljs$core$async13322 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13322(f__$1,ch__$1,meta13323){
return (new cljs.core.async.t_cljs$core$async13322(f__$1,ch__$1,meta13323));
});

}

return (new cljs.core.async.t_cljs$core$async13322(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12107__auto___14776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13358){
var state_val_13359 = (state_13358[(1)]);
if((state_val_13359 === (7))){
var inst_13354 = (state_13358[(2)]);
var state_13358__$1 = state_13358;
var statearr_13360_14777 = state_13358__$1;
(statearr_13360_14777[(2)] = inst_13354);

(statearr_13360_14777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (1))){
var state_13358__$1 = state_13358;
var statearr_13361_14778 = state_13358__$1;
(statearr_13361_14778[(2)] = null);

(statearr_13361_14778[(1)] = (2));


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
var statearr_13363_14779 = state_13358__$1;
(statearr_13363_14779[(1)] = (5));

} else {
var statearr_13364_14780 = state_13358__$1;
(statearr_13364_14780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (6))){
var inst_13340 = (state_13358[(7)]);
var inst_13345 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13340) : p.call(null,inst_13340));
var state_13358__$1 = state_13358;
if(cljs.core.truth_(inst_13345)){
var statearr_13365_14781 = state_13358__$1;
(statearr_13365_14781[(1)] = (8));

} else {
var statearr_13366_14782 = state_13358__$1;
(statearr_13366_14782[(1)] = (9));

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
var statearr_13367_14783 = state_13358__$1;
(statearr_13367_14783[(2)] = inst_13348);

(statearr_13367_14783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (9))){
var state_13358__$1 = state_13358;
var statearr_13368_14784 = state_13358__$1;
(statearr_13368_14784[(2)] = null);

(statearr_13368_14784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (5))){
var inst_13343 = cljs.core.async.close_BANG_(out);
var state_13358__$1 = state_13358;
var statearr_13369_14785 = state_13358__$1;
(statearr_13369_14785[(2)] = inst_13343);

(statearr_13369_14785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13359 === (10))){
var inst_13351 = (state_13358[(2)]);
var state_13358__$1 = (function (){var statearr_13370 = state_13358;
(statearr_13370[(8)] = inst_13351);

return statearr_13370;
})();
var statearr_13371_14786 = state_13358__$1;
(statearr_13371_14786[(2)] = null);

(statearr_13371_14786[(1)] = (2));


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
var statearr_13374_14787 = state_13358;
(statearr_13374_14787[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13358[(4)]))){
var statearr_13375_14788 = state_13358;
(statearr_13375_14788[(1)] = cljs.core.first((state_13358[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14789 = state_13358;
state_13358 = G__14789;
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
(statearr_13376[(6)] = c__12107__auto___14776);

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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13441){
var state_val_13442 = (state_13441[(1)]);
if((state_val_13442 === (7))){
var inst_13437 = (state_13441[(2)]);
var state_13441__$1 = state_13441;
var statearr_13443_14794 = state_13441__$1;
(statearr_13443_14794[(2)] = inst_13437);

(statearr_13443_14794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (20))){
var inst_13407 = (state_13441[(7)]);
var inst_13418 = (state_13441[(2)]);
var inst_13419 = cljs.core.next(inst_13407);
var inst_13393 = inst_13419;
var inst_13394 = null;
var inst_13395 = (0);
var inst_13396 = (0);
var state_13441__$1 = (function (){var statearr_13444 = state_13441;
(statearr_13444[(8)] = inst_13394);

(statearr_13444[(9)] = inst_13393);

(statearr_13444[(10)] = inst_13395);

(statearr_13444[(11)] = inst_13396);

(statearr_13444[(12)] = inst_13418);

return statearr_13444;
})();
var statearr_13445_14796 = state_13441__$1;
(statearr_13445_14796[(2)] = null);

(statearr_13445_14796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (1))){
var state_13441__$1 = state_13441;
var statearr_13446_14798 = state_13441__$1;
(statearr_13446_14798[(2)] = null);

(statearr_13446_14798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (4))){
var inst_13382 = (state_13441[(13)]);
var inst_13382__$1 = (state_13441[(2)]);
var inst_13383 = (inst_13382__$1 == null);
var state_13441__$1 = (function (){var statearr_13447 = state_13441;
(statearr_13447[(13)] = inst_13382__$1);

return statearr_13447;
})();
if(cljs.core.truth_(inst_13383)){
var statearr_13448_14799 = state_13441__$1;
(statearr_13448_14799[(1)] = (5));

} else {
var statearr_13449_14800 = state_13441__$1;
(statearr_13449_14800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (15))){
var state_13441__$1 = state_13441;
var statearr_13453_14801 = state_13441__$1;
(statearr_13453_14801[(2)] = null);

(statearr_13453_14801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (21))){
var state_13441__$1 = state_13441;
var statearr_13454_14802 = state_13441__$1;
(statearr_13454_14802[(2)] = null);

(statearr_13454_14802[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (13))){
var inst_13394 = (state_13441[(8)]);
var inst_13393 = (state_13441[(9)]);
var inst_13395 = (state_13441[(10)]);
var inst_13396 = (state_13441[(11)]);
var inst_13403 = (state_13441[(2)]);
var inst_13404 = (inst_13396 + (1));
var tmp13450 = inst_13394;
var tmp13451 = inst_13393;
var tmp13452 = inst_13395;
var inst_13393__$1 = tmp13451;
var inst_13394__$1 = tmp13450;
var inst_13395__$1 = tmp13452;
var inst_13396__$1 = inst_13404;
var state_13441__$1 = (function (){var statearr_13455 = state_13441;
(statearr_13455[(8)] = inst_13394__$1);

(statearr_13455[(9)] = inst_13393__$1);

(statearr_13455[(10)] = inst_13395__$1);

(statearr_13455[(11)] = inst_13396__$1);

(statearr_13455[(14)] = inst_13403);

return statearr_13455;
})();
var statearr_13456_14805 = state_13441__$1;
(statearr_13456_14805[(2)] = null);

(statearr_13456_14805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (22))){
var state_13441__$1 = state_13441;
var statearr_13457_14806 = state_13441__$1;
(statearr_13457_14806[(2)] = null);

(statearr_13457_14806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (6))){
var inst_13382 = (state_13441[(13)]);
var inst_13391 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13382) : f.call(null,inst_13382));
var inst_13392 = cljs.core.seq(inst_13391);
var inst_13393 = inst_13392;
var inst_13394 = null;
var inst_13395 = (0);
var inst_13396 = (0);
var state_13441__$1 = (function (){var statearr_13458 = state_13441;
(statearr_13458[(8)] = inst_13394);

(statearr_13458[(9)] = inst_13393);

(statearr_13458[(10)] = inst_13395);

(statearr_13458[(11)] = inst_13396);

return statearr_13458;
})();
var statearr_13459_14810 = state_13441__$1;
(statearr_13459_14810[(2)] = null);

(statearr_13459_14810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (17))){
var inst_13407 = (state_13441[(7)]);
var inst_13411 = cljs.core.chunk_first(inst_13407);
var inst_13412 = cljs.core.chunk_rest(inst_13407);
var inst_13413 = cljs.core.count(inst_13411);
var inst_13393 = inst_13412;
var inst_13394 = inst_13411;
var inst_13395 = inst_13413;
var inst_13396 = (0);
var state_13441__$1 = (function (){var statearr_13460 = state_13441;
(statearr_13460[(8)] = inst_13394);

(statearr_13460[(9)] = inst_13393);

(statearr_13460[(10)] = inst_13395);

(statearr_13460[(11)] = inst_13396);

return statearr_13460;
})();
var statearr_13461_14811 = state_13441__$1;
(statearr_13461_14811[(2)] = null);

(statearr_13461_14811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (3))){
var inst_13439 = (state_13441[(2)]);
var state_13441__$1 = state_13441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13441__$1,inst_13439);
} else {
if((state_val_13442 === (12))){
var inst_13427 = (state_13441[(2)]);
var state_13441__$1 = state_13441;
var statearr_13462_14812 = state_13441__$1;
(statearr_13462_14812[(2)] = inst_13427);

(statearr_13462_14812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (2))){
var state_13441__$1 = state_13441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13441__$1,(4),in$);
} else {
if((state_val_13442 === (23))){
var inst_13435 = (state_13441[(2)]);
var state_13441__$1 = state_13441;
var statearr_13463_14813 = state_13441__$1;
(statearr_13463_14813[(2)] = inst_13435);

(statearr_13463_14813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (19))){
var inst_13422 = (state_13441[(2)]);
var state_13441__$1 = state_13441;
var statearr_13466_14814 = state_13441__$1;
(statearr_13466_14814[(2)] = inst_13422);

(statearr_13466_14814[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (11))){
var inst_13407 = (state_13441[(7)]);
var inst_13393 = (state_13441[(9)]);
var inst_13407__$1 = cljs.core.seq(inst_13393);
var state_13441__$1 = (function (){var statearr_13467 = state_13441;
(statearr_13467[(7)] = inst_13407__$1);

return statearr_13467;
})();
if(inst_13407__$1){
var statearr_13468_14815 = state_13441__$1;
(statearr_13468_14815[(1)] = (14));

} else {
var statearr_13469_14816 = state_13441__$1;
(statearr_13469_14816[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (9))){
var inst_13429 = (state_13441[(2)]);
var inst_13430 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13441__$1 = (function (){var statearr_13470 = state_13441;
(statearr_13470[(15)] = inst_13429);

return statearr_13470;
})();
if(cljs.core.truth_(inst_13430)){
var statearr_13471_14817 = state_13441__$1;
(statearr_13471_14817[(1)] = (21));

} else {
var statearr_13472_14818 = state_13441__$1;
(statearr_13472_14818[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (5))){
var inst_13385 = cljs.core.async.close_BANG_(out);
var state_13441__$1 = state_13441;
var statearr_13473_14819 = state_13441__$1;
(statearr_13473_14819[(2)] = inst_13385);

(statearr_13473_14819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (14))){
var inst_13407 = (state_13441[(7)]);
var inst_13409 = cljs.core.chunked_seq_QMARK_(inst_13407);
var state_13441__$1 = state_13441;
if(inst_13409){
var statearr_13474_14820 = state_13441__$1;
(statearr_13474_14820[(1)] = (17));

} else {
var statearr_13475_14821 = state_13441__$1;
(statearr_13475_14821[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (16))){
var inst_13425 = (state_13441[(2)]);
var state_13441__$1 = state_13441;
var statearr_13476_14822 = state_13441__$1;
(statearr_13476_14822[(2)] = inst_13425);

(statearr_13476_14822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13442 === (10))){
var inst_13394 = (state_13441[(8)]);
var inst_13396 = (state_13441[(11)]);
var inst_13401 = cljs.core._nth(inst_13394,inst_13396);
var state_13441__$1 = state_13441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13441__$1,(13),out,inst_13401);
} else {
if((state_val_13442 === (18))){
var inst_13407 = (state_13441[(7)]);
var inst_13416 = cljs.core.first(inst_13407);
var state_13441__$1 = state_13441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13441__$1,(20),out,inst_13416);
} else {
if((state_val_13442 === (8))){
var inst_13395 = (state_13441[(10)]);
var inst_13396 = (state_13441[(11)]);
var inst_13398 = (inst_13396 < inst_13395);
var inst_13399 = inst_13398;
var state_13441__$1 = state_13441;
if(cljs.core.truth_(inst_13399)){
var statearr_13477_14823 = state_13441__$1;
(statearr_13477_14823[(1)] = (10));

} else {
var statearr_13478_14824 = state_13441__$1;
(statearr_13478_14824[(1)] = (11));

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
var statearr_13479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13479[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_13479[(1)] = (1));

return statearr_13479;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_13441){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13441);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13480){var ex__12075__auto__ = e13480;
var statearr_13481_14825 = state_13441;
(statearr_13481_14825[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13441[(4)]))){
var statearr_13482_14826 = state_13441;
(statearr_13482_14826[(1)] = cljs.core.first((state_13441[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14827 = state_13441;
state_13441 = G__14827;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_13441){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_13441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13483 = f__12108__auto__();
(statearr_13483[(6)] = c__12107__auto__);

return statearr_13483;
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
var c__12107__auto___14834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13523){
var state_val_13524 = (state_13523[(1)]);
if((state_val_13524 === (7))){
var inst_13518 = (state_13523[(2)]);
var state_13523__$1 = state_13523;
var statearr_13525_14837 = state_13523__$1;
(statearr_13525_14837[(2)] = inst_13518);

(statearr_13525_14837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13524 === (1))){
var inst_13500 = null;
var state_13523__$1 = (function (){var statearr_13526 = state_13523;
(statearr_13526[(7)] = inst_13500);

return statearr_13526;
})();
var statearr_13527_14840 = state_13523__$1;
(statearr_13527_14840[(2)] = null);

(statearr_13527_14840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13524 === (4))){
var inst_13503 = (state_13523[(8)]);
var inst_13503__$1 = (state_13523[(2)]);
var inst_13504 = (inst_13503__$1 == null);
var inst_13505 = cljs.core.not(inst_13504);
var state_13523__$1 = (function (){var statearr_13528 = state_13523;
(statearr_13528[(8)] = inst_13503__$1);

return statearr_13528;
})();
if(inst_13505){
var statearr_13529_14841 = state_13523__$1;
(statearr_13529_14841[(1)] = (5));

} else {
var statearr_13530_14842 = state_13523__$1;
(statearr_13530_14842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13524 === (6))){
var state_13523__$1 = state_13523;
var statearr_13531_14844 = state_13523__$1;
(statearr_13531_14844[(2)] = null);

(statearr_13531_14844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13524 === (3))){
var inst_13520 = (state_13523[(2)]);
var inst_13521 = cljs.core.async.close_BANG_(out);
var state_13523__$1 = (function (){var statearr_13532 = state_13523;
(statearr_13532[(9)] = inst_13520);

return statearr_13532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13523__$1,inst_13521);
} else {
if((state_val_13524 === (2))){
var state_13523__$1 = state_13523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13523__$1,(4),ch);
} else {
if((state_val_13524 === (11))){
var inst_13503 = (state_13523[(8)]);
var inst_13512 = (state_13523[(2)]);
var inst_13500 = inst_13503;
var state_13523__$1 = (function (){var statearr_13533 = state_13523;
(statearr_13533[(7)] = inst_13500);

(statearr_13533[(10)] = inst_13512);

return statearr_13533;
})();
var statearr_13534_14855 = state_13523__$1;
(statearr_13534_14855[(2)] = null);

(statearr_13534_14855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13524 === (9))){
var inst_13503 = (state_13523[(8)]);
var state_13523__$1 = state_13523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13523__$1,(11),out,inst_13503);
} else {
if((state_val_13524 === (5))){
var inst_13503 = (state_13523[(8)]);
var inst_13500 = (state_13523[(7)]);
var inst_13507 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13503,inst_13500);
var state_13523__$1 = state_13523;
if(inst_13507){
var statearr_13536_14857 = state_13523__$1;
(statearr_13536_14857[(1)] = (8));

} else {
var statearr_13537_14858 = state_13523__$1;
(statearr_13537_14858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13524 === (10))){
var inst_13515 = (state_13523[(2)]);
var state_13523__$1 = state_13523;
var statearr_13538_14860 = state_13523__$1;
(statearr_13538_14860[(2)] = inst_13515);

(statearr_13538_14860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13524 === (8))){
var inst_13500 = (state_13523[(7)]);
var tmp13535 = inst_13500;
var inst_13500__$1 = tmp13535;
var state_13523__$1 = (function (){var statearr_13546 = state_13523;
(statearr_13546[(7)] = inst_13500__$1);

return statearr_13546;
})();
var statearr_13547_14863 = state_13523__$1;
(statearr_13547_14863[(2)] = null);

(statearr_13547_14863[(1)] = (2));


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
var statearr_13548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13548[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13548[(1)] = (1));

return statearr_13548;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13523){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13523);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13549){var ex__12075__auto__ = e13549;
var statearr_13550_14865 = state_13523;
(statearr_13550_14865[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13523[(4)]))){
var statearr_13551_14866 = state_13523;
(statearr_13551_14866[(1)] = cljs.core.first((state_13523[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14868 = state_13523;
state_13523 = G__14868;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13552 = f__12108__auto__();
(statearr_13552[(6)] = c__12107__auto___14834);

return statearr_13552;
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
var c__12107__auto___14870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13592){
var state_val_13593 = (state_13592[(1)]);
if((state_val_13593 === (7))){
var inst_13588 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
var statearr_13594_14871 = state_13592__$1;
(statearr_13594_14871[(2)] = inst_13588);

(statearr_13594_14871[(1)] = (3));


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
var statearr_13596_14872 = state_13592__$1;
(statearr_13596_14872[(2)] = null);

(statearr_13596_14872[(1)] = (2));


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
var statearr_13598_14873 = state_13592__$1;
(statearr_13598_14873[(1)] = (5));

} else {
var statearr_13599_14874 = state_13592__$1;
(statearr_13599_14874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (15))){
var inst_13582 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
var statearr_13600_14875 = state_13592__$1;
(statearr_13600_14875[(2)] = inst_13582);

(statearr_13600_14875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (13))){
var state_13592__$1 = state_13592;
var statearr_13601_14876 = state_13592__$1;
(statearr_13601_14876[(2)] = null);

(statearr_13601_14876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (6))){
var inst_13557 = (state_13592[(7)]);
var inst_13578 = (inst_13557 > (0));
var state_13592__$1 = state_13592;
if(cljs.core.truth_(inst_13578)){
var statearr_13602_14877 = state_13592__$1;
(statearr_13602_14877[(1)] = (12));

} else {
var statearr_13603_14878 = state_13592__$1;
(statearr_13603_14878[(1)] = (13));

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
var statearr_13605_14880 = state_13592__$1;
(statearr_13605_14880[(2)] = null);

(statearr_13605_14880[(1)] = (2));


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
var statearr_13607_14881 = state_13592__$1;
(statearr_13607_14881[(1)] = (8));

} else {
var statearr_13608_14882 = state_13592__$1;
(statearr_13608_14882[(1)] = (9));

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
var statearr_13611_14885 = state_13592__$1;
(statearr_13611_14885[(2)] = inst_13586);

(statearr_13611_14885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (10))){
var inst_13576 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
var statearr_13612_14886 = state_13592__$1;
(statearr_13612_14886[(2)] = inst_13576);

(statearr_13612_14886[(1)] = (7));


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
var statearr_13614_14887 = state_13592__$1;
(statearr_13614_14887[(2)] = null);

(statearr_13614_14887[(1)] = (2));


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
var statearr_13617_14892 = state_13592;
(statearr_13617_14892[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13592[(4)]))){
var statearr_13618_14893 = state_13592;
(statearr_13618_14893[(1)] = cljs.core.first((state_13592[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14894 = state_13592;
state_13592 = G__14894;
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
(statearr_13619[(6)] = c__12107__auto___14870);

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
var c__12107__auto___14904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13663){
var state_val_13664 = (state_13663[(1)]);
if((state_val_13664 === (7))){
var inst_13659 = (state_13663[(2)]);
var state_13663__$1 = state_13663;
var statearr_13665_14905 = state_13663__$1;
(statearr_13665_14905[(2)] = inst_13659);

(statearr_13665_14905[(1)] = (3));


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
var statearr_13667_14908 = state_13663__$1;
(statearr_13667_14908[(2)] = null);

(statearr_13667_14908[(1)] = (2));


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
var statearr_13669_14911 = state_13663__$1;
(statearr_13669_14911[(1)] = (5));

} else {
var statearr_13670_14912 = state_13663__$1;
(statearr_13670_14912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (15))){
var inst_13653 = (state_13663[(2)]);
var state_13663__$1 = state_13663;
var statearr_13671_14913 = state_13663__$1;
(statearr_13671_14913[(2)] = inst_13653);

(statearr_13671_14913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (13))){
var state_13663__$1 = state_13663;
var statearr_13672_14914 = state_13663__$1;
(statearr_13672_14914[(2)] = null);

(statearr_13672_14914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (6))){
var inst_13623 = (state_13663[(7)]);
var inst_13648 = inst_13623.length;
var inst_13649 = (inst_13648 > (0));
var state_13663__$1 = state_13663;
if(cljs.core.truth_(inst_13649)){
var statearr_13673_14915 = state_13663__$1;
(statearr_13673_14915[(1)] = (12));

} else {
var statearr_13674_14916 = state_13663__$1;
(statearr_13674_14916[(1)] = (13));

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
var statearr_13676_14917 = state_13663__$1;
(statearr_13676_14917[(2)] = null);

(statearr_13676_14917[(1)] = (2));


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
var statearr_13678_14918 = state_13663__$1;
(statearr_13678_14918[(1)] = (8));

} else {
var statearr_13679_14919 = state_13663__$1;
(statearr_13679_14919[(1)] = (9));

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
var statearr_13682_14920 = state_13663__$1;
(statearr_13682_14920[(2)] = inst_13657);

(statearr_13682_14920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (10))){
var inst_13646 = (state_13663[(2)]);
var state_13663__$1 = state_13663;
var statearr_13683_14921 = state_13663__$1;
(statearr_13683_14921[(2)] = inst_13646);

(statearr_13683_14921[(1)] = (7));


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
var statearr_13685_14922 = state_13663__$1;
(statearr_13685_14922[(2)] = null);

(statearr_13685_14922[(1)] = (2));


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
var statearr_13688_14924 = state_13663;
(statearr_13688_14924[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13663[(4)]))){
var statearr_13689_14926 = state_13663;
(statearr_13689_14926[(1)] = cljs.core.first((state_13663[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14928 = state_13663;
state_13663 = G__14928;
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
(statearr_13690[(6)] = c__12107__auto___14904);

return statearr_13690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
