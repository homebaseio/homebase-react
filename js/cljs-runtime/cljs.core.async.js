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
var val_13649 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13649) : fn1.call(null,val_13649));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13649) : fn1.call(null,val_13649));
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
var n__4613__auto___13651 = n;
var x_13652 = (0);
while(true){
if((x_13652 < n__4613__auto___13651)){
(a[x_13652] = x_13652);

var G__13653 = (x_13652 + (1));
x_13652 = G__13653;
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
var G__13654 = (i + (1));
i = G__13654;
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
var len__4736__auto___13655 = arguments.length;
var i__4737__auto___13656 = (0);
while(true){
if((i__4737__auto___13656 < len__4736__auto___13655)){
args__4742__auto__.push((arguments[i__4737__auto___13656]));

var G__13657 = (i__4737__auto___13656 + (1));
i__4737__auto___13656 = G__13657;
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
var c__12107__auto___13659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_13664 = state_12218__$1;
(statearr_12220_13664[(2)] = inst_12214);

(statearr_12220_13664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_13665 = state_12218__$1;
(statearr_12221_13665[(2)] = null);

(statearr_12221_13665[(1)] = (2));


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
var statearr_12223_13666 = state_12218__$1;
(statearr_12223_13666[(1)] = (5));

} else {
var statearr_12224_13667 = state_12218__$1;
(statearr_12224_13667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_13668 = state_12218__$1;
(statearr_12225_13668[(2)] = null);

(statearr_12225_13668[(1)] = (14));


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
var statearr_12226_13669 = state_12218__$1;
(statearr_12226_13669[(2)] = null);

(statearr_12226_13669[(1)] = (2));


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
var statearr_12227_13670 = state_12218__$1;
(statearr_12227_13670[(1)] = (12));

} else {
var statearr_12228_13671 = state_12218__$1;
(statearr_12228_13671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_13672 = state_12218__$1;
(statearr_12229_13672[(2)] = null);

(statearr_12229_13672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_13674 = state_12218__$1;
(statearr_12230_13674[(1)] = (8));

} else {
var statearr_12231_13675 = state_12218__$1;
(statearr_12231_13675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_13676 = state_12218__$1;
(statearr_12232_13676[(2)] = inst_12212);

(statearr_12232_13676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_13677 = state_12218__$1;
(statearr_12233_13677[(2)] = inst_12204);

(statearr_12233_13677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_13678 = state_12218__$1;
(statearr_12234_13678[(2)] = inst_12201);

(statearr_12234_13678[(1)] = (10));


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
var statearr_12237_13679 = state_12218;
(statearr_12237_13679[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_13680 = state_12218;
(statearr_12238_13680[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13681 = state_12218;
state_12218 = G__13681;
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
(statearr_12239[(6)] = c__12107__auto___13659);

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
var c__12107__auto___13682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_12253_13683 = state_12248;
(statearr_12253_13683[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_13684 = state_12248;
(statearr_12254_13684[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13685 = state_12248;
state_12248 = G__13685;
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
(statearr_12255[(6)] = c__12107__auto___13682);

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
var n__4613__auto___13686 = n;
var __13687 = (0);
while(true){
if((__13687 < n__4613__auto___13686)){
var G__12260_13688 = type;
var G__12260_13689__$1 = (((G__12260_13688 instanceof cljs.core.Keyword))?G__12260_13688.fqn:null);
switch (G__12260_13689__$1) {
case "compute":
var c__12107__auto___13691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13687,c__12107__auto___13691,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__13687,c__12107__auto___13691,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_13692 = state_12273__$1;
(statearr_12275_13692[(2)] = null);

(statearr_12275_13692[(1)] = (2));


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
var statearr_12276_13693 = state_12273__$1;
(statearr_12276_13693[(1)] = (5));

} else {
var statearr_12277_13694 = state_12273__$1;
(statearr_12277_13694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_13695 = state_12273__$1;
(statearr_12278_13695[(2)] = null);

(statearr_12278_13695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_13696 = state_12273__$1;
(statearr_12279_13696[(2)] = null);

(statearr_12279_13696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_13697 = state_12273__$1;
(statearr_12280_13697[(2)] = inst_12269);

(statearr_12280_13697[(1)] = (3));


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
});})(__13687,c__12107__auto___13691,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async))
;
return ((function (__13687,switch__12071__auto__,c__12107__auto___13691,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async){
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
var statearr_12283_13698 = state_12273;
(statearr_12283_13698[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_13699 = state_12273;
(statearr_12284_13699[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13700 = state_12273;
state_12273 = G__13700;
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
;})(__13687,switch__12071__auto__,c__12107__auto___13691,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___13691);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__13687,c__12107__auto___13691,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___13702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13687,c__12107__auto___13702,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__13687,c__12107__auto___13702,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_13703 = state_12298__$1;
(statearr_12300_13703[(2)] = null);

(statearr_12300_13703[(1)] = (2));


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
var statearr_12301_13705 = state_12298__$1;
(statearr_12301_13705[(1)] = (5));

} else {
var statearr_12302_13706 = state_12298__$1;
(statearr_12302_13706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_13707 = state_12298__$1;
(statearr_12303_13707[(2)] = null);

(statearr_12303_13707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_13708 = state_12298__$1;
(statearr_12304_13708[(2)] = null);

(statearr_12304_13708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_13709 = state_12298__$1;
(statearr_12305_13709[(2)] = inst_12294);

(statearr_12305_13709[(1)] = (3));


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
});})(__13687,c__12107__auto___13702,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async))
;
return ((function (__13687,switch__12071__auto__,c__12107__auto___13702,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async){
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
var statearr_12308_13711 = state_12298;
(statearr_12308_13711[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_13712 = state_12298;
(statearr_12309_13712[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13713 = state_12298;
state_12298 = G__13713;
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
;})(__13687,switch__12071__auto__,c__12107__auto___13702,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___13702);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__13687,c__12107__auto___13702,G__12260_13688,G__12260_13689__$1,n__4613__auto___13686,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_13689__$1)].join('')));

}

var G__13714 = (__13687 + (1));
__13687 = G__13714;
continue;
} else {
}
break;
}

var c__12107__auto___13715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_13716 = state_12332__$1;
(statearr_12334_13716[(2)] = inst_12328);

(statearr_12334_13716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_13717 = state_12332__$1;
(statearr_12335_13717[(2)] = null);

(statearr_12335_13717[(1)] = (2));


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
var statearr_12337_13718 = state_12332__$1;
(statearr_12337_13718[(1)] = (5));

} else {
var statearr_12338_13719 = state_12332__$1;
(statearr_12338_13719[(1)] = (6));

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
var statearr_12341_13720 = state_12332__$1;
(statearr_12341_13720[(2)] = null);

(statearr_12341_13720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_13721 = state_12332__$1;
(statearr_12342_13721[(2)] = inst_12316);

(statearr_12342_13721[(1)] = (7));


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
var statearr_12346_13722 = state_12332;
(statearr_12346_13722[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_13723 = state_12332;
(statearr_12347_13723[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13724 = state_12332;
state_12332 = G__13724;
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
(statearr_12348[(6)] = c__12107__auto___13715);

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
var statearr_12388_13725 = state_12386__$1;
(statearr_12388_13725[(2)] = inst_12382);

(statearr_12388_13725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (20))){
var state_12386__$1 = state_12386;
var statearr_12389_13728 = state_12386__$1;
(statearr_12389_13728[(2)] = null);

(statearr_12389_13728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (1))){
var state_12386__$1 = state_12386;
var statearr_12390_13729 = state_12386__$1;
(statearr_12390_13729[(2)] = null);

(statearr_12390_13729[(1)] = (2));


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
var statearr_12392_13733 = state_12386__$1;
(statearr_12392_13733[(1)] = (5));

} else {
var statearr_12393_13734 = state_12386__$1;
(statearr_12393_13734[(1)] = (6));

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
var statearr_12394_13737 = state_12386__$1;
(statearr_12394_13737[(2)] = inst_12377);

(statearr_12394_13737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (13))){
var inst_12379 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12395 = state_12386;
(statearr_12395[(9)] = inst_12379);

return statearr_12395;
})();
var statearr_12396_13738 = state_12386__$1;
(statearr_12396_13738[(2)] = null);

(statearr_12396_13738[(1)] = (2));


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
var statearr_12397_13739 = state_12386__$1;
(statearr_12397_13739[(1)] = (19));

} else {
var statearr_12398_13740 = state_12386__$1;
(statearr_12398_13740[(1)] = (20));

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
var statearr_12399_13741 = state_12386__$1;
(statearr_12399_13741[(2)] = null);

(statearr_12399_13741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (11))){
var inst_12361 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12400 = state_12386;
(statearr_12400[(10)] = inst_12361);

return statearr_12400;
})();
var statearr_12401_13742 = state_12386__$1;
(statearr_12401_13742[(2)] = null);

(statearr_12401_13742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12402_13743 = state_12386__$1;
(statearr_12402_13743[(2)] = null);

(statearr_12402_13743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12403_13744 = state_12386__$1;
(statearr_12403_13744[(1)] = (8));

} else {
var statearr_12404_13745 = state_12386__$1;
(statearr_12404_13745[(1)] = (9));

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
var statearr_12406_13746 = state_12386__$1;
(statearr_12406_13746[(1)] = (15));

} else {
var statearr_12407_13747 = state_12386__$1;
(statearr_12407_13747[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12408_13748 = state_12386__$1;
(statearr_12408_13748[(2)] = false);

(statearr_12408_13748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12409_13749 = state_12386__$1;
(statearr_12409_13749[(2)] = inst_12358);

(statearr_12409_13749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12410_13750 = state_12386__$1;
(statearr_12410_13750[(2)] = inst_12369);

(statearr_12410_13750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12411_13751 = state_12386__$1;
(statearr_12411_13751[(2)] = inst_12355);

(statearr_12411_13751[(1)] = (10));


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
var statearr_12414_13752 = state_12386;
(statearr_12414_13752[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12415_13753 = state_12386;
(statearr_12415_13753[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13754 = state_12386;
state_12386 = G__13754;
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
var c__12107__auto___13758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12448){
var state_val_12449 = (state_12448[(1)]);
if((state_val_12449 === (7))){
var inst_12444 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12450_13759 = state_12448__$1;
(statearr_12450_13759[(2)] = inst_12444);

(statearr_12450_13759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (1))){
var state_12448__$1 = state_12448;
var statearr_12451_13760 = state_12448__$1;
(statearr_12451_13760[(2)] = null);

(statearr_12451_13760[(1)] = (2));


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
var statearr_12453_13761 = state_12448__$1;
(statearr_12453_13761[(1)] = (5));

} else {
var statearr_12454_13762 = state_12448__$1;
(statearr_12454_13762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (13))){
var state_12448__$1 = state_12448;
var statearr_12455_13763 = state_12448__$1;
(statearr_12455_13763[(2)] = null);

(statearr_12455_13763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (6))){
var inst_12425 = (state_12448[(7)]);
var inst_12431 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12425) : p.call(null,inst_12425));
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12431)){
var statearr_12456_13764 = state_12448__$1;
(statearr_12456_13764[(1)] = (9));

} else {
var statearr_12457_13765 = state_12448__$1;
(statearr_12457_13765[(1)] = (10));

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
var statearr_12458_13766 = state_12448__$1;
(statearr_12458_13766[(2)] = null);

(statearr_12458_13766[(1)] = (2));


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
var statearr_12459_13768 = state_12448__$1;
(statearr_12459_13768[(2)] = tc);

(statearr_12459_13768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (5))){
var inst_12428 = cljs.core.async.close_BANG_(tc);
var inst_12429 = cljs.core.async.close_BANG_(fc);
var state_12448__$1 = (function (){var statearr_12460 = state_12448;
(statearr_12460[(8)] = inst_12428);

return statearr_12460;
})();
var statearr_12461_13769 = state_12448__$1;
(statearr_12461_13769[(2)] = inst_12429);

(statearr_12461_13769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (14))){
var inst_12442 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12462_13770 = state_12448__$1;
(statearr_12462_13770[(2)] = inst_12442);

(statearr_12462_13770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (10))){
var state_12448__$1 = state_12448;
var statearr_12463_13771 = state_12448__$1;
(statearr_12463_13771[(2)] = fc);

(statearr_12463_13771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (8))){
var inst_12437 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12437)){
var statearr_12464_13772 = state_12448__$1;
(statearr_12464_13772[(1)] = (12));

} else {
var statearr_12465_13773 = state_12448__$1;
(statearr_12465_13773[(1)] = (13));

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
var statearr_12468_13775 = state_12448;
(statearr_12468_13775[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12448[(4)]))){
var statearr_12469_13779 = state_12448;
(statearr_12469_13779[(1)] = cljs.core.first((state_12448[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13780 = state_12448;
state_12448 = G__13780;
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
(statearr_12470[(6)] = c__12107__auto___13758);

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
var statearr_12494_13784 = state_12492__$1;
(statearr_12494_13784[(2)] = inst_12488);

(statearr_12494_13784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (1))){
var inst_12471 = init;
var inst_12472 = inst_12471;
var state_12492__$1 = (function (){var statearr_12495 = state_12492;
(statearr_12495[(7)] = inst_12472);

return statearr_12495;
})();
var statearr_12496_13785 = state_12492__$1;
(statearr_12496_13785[(2)] = null);

(statearr_12496_13785[(1)] = (2));


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
var statearr_12498_13786 = state_12492__$1;
(statearr_12498_13786[(1)] = (5));

} else {
var statearr_12499_13787 = state_12492__$1;
(statearr_12499_13787[(1)] = (6));

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
var statearr_12501_13788 = state_12492__$1;
(statearr_12501_13788[(1)] = (8));

} else {
var statearr_12502_13789 = state_12492__$1;
(statearr_12502_13789[(1)] = (9));

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
var statearr_12504_13790 = state_12492__$1;
(statearr_12504_13790[(2)] = null);

(statearr_12504_13790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (5))){
var inst_12472 = (state_12492[(7)]);
var state_12492__$1 = state_12492;
var statearr_12505_13791 = state_12492__$1;
(statearr_12505_13791[(2)] = inst_12472);

(statearr_12505_13791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (10))){
var inst_12486 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12506_13792 = state_12492__$1;
(statearr_12506_13792[(2)] = inst_12486);

(statearr_12506_13792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (8))){
var inst_12479 = (state_12492[(9)]);
var inst_12482 = cljs.core.deref(inst_12479);
var state_12492__$1 = state_12492;
var statearr_12507_13793 = state_12492__$1;
(statearr_12507_13793[(2)] = inst_12482);

(statearr_12507_13793[(1)] = (10));


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
var statearr_12510_13794 = state_12492;
(statearr_12510_13794[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12492[(4)]))){
var statearr_12511_13795 = state_12492;
(statearr_12511_13795[(1)] = cljs.core.first((state_12492[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13796 = state_12492;
state_12492 = G__13796;
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
var statearr_12522_13797 = state_12518;
(statearr_12522_13797[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12518[(4)]))){
var statearr_12523_13798 = state_12518;
(statearr_12523_13798[(1)] = cljs.core.first((state_12518[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13799 = state_12518;
state_12518 = G__13799;
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
var statearr_12553_13801 = state_12551__$1;
(statearr_12553_13801[(2)] = inst_12533);

(statearr_12553_13801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (1))){
var inst_12527 = cljs.core.seq(coll);
var inst_12528 = inst_12527;
var state_12551__$1 = (function (){var statearr_12554 = state_12551;
(statearr_12554[(7)] = inst_12528);

return statearr_12554;
})();
var statearr_12555_13802 = state_12551__$1;
(statearr_12555_13802[(2)] = null);

(statearr_12555_13802[(1)] = (2));


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
var statearr_12556_13803 = state_12551__$1;
(statearr_12556_13803[(2)] = inst_12545);

(statearr_12556_13803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (6))){
var inst_12536 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12536)){
var statearr_12557_13804 = state_12551__$1;
(statearr_12557_13804[(1)] = (8));

} else {
var statearr_12558_13805 = state_12551__$1;
(statearr_12558_13805[(1)] = (9));

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
var statearr_12559_13806 = state_12551__$1;
(statearr_12559_13806[(2)] = null);

(statearr_12559_13806[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (2))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12528)){
var statearr_12560_13807 = state_12551__$1;
(statearr_12560_13807[(1)] = (4));

} else {
var statearr_12561_13808 = state_12551__$1;
(statearr_12561_13808[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (11))){
var inst_12542 = cljs.core.async.close_BANG_(ch);
var state_12551__$1 = state_12551;
var statearr_12562_13809 = state_12551__$1;
(statearr_12562_13809[(2)] = inst_12542);

(statearr_12562_13809[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (9))){
var state_12551__$1 = state_12551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12563_13810 = state_12551__$1;
(statearr_12563_13810[(1)] = (11));

} else {
var statearr_12564_13811 = state_12551__$1;
(statearr_12564_13811[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (5))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
var statearr_12565_13812 = state_12551__$1;
(statearr_12565_13812[(2)] = inst_12528);

(statearr_12565_13812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (10))){
var inst_12547 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12566_13813 = state_12551__$1;
(statearr_12566_13813[(2)] = inst_12547);

(statearr_12566_13813[(1)] = (3));


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
var statearr_12568_13814 = state_12551__$1;
(statearr_12568_13814[(2)] = null);

(statearr_12568_13814[(1)] = (2));


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
var statearr_12571_13818 = state_12551;
(statearr_12571_13818[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12551[(4)]))){
var statearr_12572_13819 = state_12551;
(statearr_12572_13819[(1)] = cljs.core.first((state_12551[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13820 = state_12551;
state_12551 = G__13820;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13822 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13822(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13823 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13823(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13824 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13824(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13825 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13825(m);
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
var c__12107__auto___13826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12711){
var state_val_12712 = (state_12711[(1)]);
if((state_val_12712 === (7))){
var inst_12707 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12713_13827 = state_12711__$1;
(statearr_12713_13827[(2)] = inst_12707);

(statearr_12713_13827[(1)] = (3));


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
var statearr_12715_13828 = state_12711__$1;
(statearr_12715_13828[(1)] = (22));

} else {
var statearr_12716_13829 = state_12711__$1;
(statearr_12716_13829[(1)] = (23));

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
var statearr_12718_13830 = state_12711__$1;
(statearr_12718_13830[(1)] = (30));

} else {
var statearr_12719_13831 = state_12711__$1;
(statearr_12719_13831[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (1))){
var state_12711__$1 = state_12711;
var statearr_12720_13832 = state_12711__$1;
(statearr_12720_13832[(2)] = null);

(statearr_12720_13832[(1)] = (2));


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
var statearr_12722_13833 = state_12711__$1;
(statearr_12722_13833[(2)] = null);

(statearr_12722_13833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (39))){
var state_12711__$1 = state_12711;
var statearr_12726_13834 = state_12711__$1;
(statearr_12726_13834[(2)] = null);

(statearr_12726_13834[(1)] = (41));


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
var statearr_12728_13835 = state_12711__$1;
(statearr_12728_13835[(1)] = (5));

} else {
var statearr_12729_13836 = state_12711__$1;
(statearr_12729_13836[(1)] = (6));

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
var statearr_12731_13837 = state_12711__$1;
(statearr_12731_13837[(2)] = null);

(statearr_12731_13837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (21))){
var inst_12635 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12735_13838 = state_12711__$1;
(statearr_12735_13838[(2)] = inst_12635);

(statearr_12735_13838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (31))){
var inst_12661 = (state_12711[(12)]);
var inst_12665 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12661);
var state_12711__$1 = state_12711;
var statearr_12736_13839 = state_12711__$1;
(statearr_12736_13839[(2)] = inst_12665);

(statearr_12736_13839[(1)] = (32));


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
var statearr_12738_13840 = state_12711__$1;
(statearr_12738_13840[(2)] = null);

(statearr_12738_13840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (40))){
var inst_12680 = (state_12711[(22)]);
var inst_12684 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12680);
var state_12711__$1 = state_12711;
var statearr_12739_13841 = state_12711__$1;
(statearr_12739_13841[(2)] = inst_12684);

(statearr_12739_13841[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (33))){
var inst_12671 = (state_12711[(23)]);
var inst_12673 = cljs.core.chunked_seq_QMARK_(inst_12671);
var state_12711__$1 = state_12711;
if(inst_12673){
var statearr_12740_13842 = state_12711__$1;
(statearr_12740_13842[(1)] = (36));

} else {
var statearr_12741_13843 = state_12711__$1;
(statearr_12741_13843[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (13))){
var inst_12602 = (state_12711[(24)]);
var inst_12605 = cljs.core.async.close_BANG_(inst_12602);
var state_12711__$1 = state_12711;
var statearr_12742_13844 = state_12711__$1;
(statearr_12742_13844[(2)] = inst_12605);

(statearr_12742_13844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (22))){
var inst_12625 = (state_12711[(8)]);
var inst_12628 = cljs.core.async.close_BANG_(inst_12625);
var state_12711__$1 = state_12711;
var statearr_12743_13845 = state_12711__$1;
(statearr_12743_13845[(2)] = inst_12628);

(statearr_12743_13845[(1)] = (24));


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
var statearr_12745_13846 = state_12711__$1;
(statearr_12745_13846[(2)] = null);

(statearr_12745_13846[(1)] = (25));


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
var statearr_12747_13847 = state_12711__$1;
(statearr_12747_13847[(2)] = null);

(statearr_12747_13847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (43))){
var state_12711__$1 = state_12711;
var statearr_12748_13848 = state_12711__$1;
(statearr_12748_13848[(2)] = null);

(statearr_12748_13848[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (29))){
var inst_12695 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12749_13849 = state_12711__$1;
(statearr_12749_13849[(2)] = inst_12695);

(statearr_12749_13849[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (44))){
var inst_12704 = (state_12711[(2)]);
var state_12711__$1 = (function (){var statearr_12750 = state_12711;
(statearr_12750[(26)] = inst_12704);

return statearr_12750;
})();
var statearr_12751_13850 = state_12711__$1;
(statearr_12751_13850[(2)] = null);

(statearr_12751_13850[(1)] = (2));


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
var statearr_12753_13851 = state_12711__$1;
(statearr_12753_13851[(2)] = null);

(statearr_12753_13851[(1)] = (25));


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
var statearr_12755_13852 = state_12711__$1;
(statearr_12755_13852[(1)] = (33));

} else {
var statearr_12756_13853 = state_12711__$1;
(statearr_12756_13853[(1)] = (34));

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
var statearr_12757_13854 = state_12711__$1;
(statearr_12757_13854[(1)] = (27));

} else {
var statearr_12758_13855 = state_12711__$1;
(statearr_12758_13855[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (34))){
var state_12711__$1 = state_12711;
var statearr_12759_13856 = state_12711__$1;
(statearr_12759_13856[(2)] = null);

(statearr_12759_13856[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (17))){
var state_12711__$1 = state_12711;
var statearr_12760_13857 = state_12711__$1;
(statearr_12760_13857[(2)] = null);

(statearr_12760_13857[(1)] = (18));


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
var statearr_12761_13858 = state_12711__$1;
(statearr_12761_13858[(2)] = inst_12640);

(statearr_12761_13858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (2))){
var state_12711__$1 = state_12711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12711__$1,(4),ch);
} else {
if((state_val_12712 === (23))){
var state_12711__$1 = state_12711;
var statearr_12762_13859 = state_12711__$1;
(statearr_12762_13859[(2)] = null);

(statearr_12762_13859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (35))){
var inst_12693 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12763_13860 = state_12711__$1;
(statearr_12763_13860[(2)] = inst_12693);

(statearr_12763_13860[(1)] = (29));


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
var statearr_12765_13861 = state_12711__$1;
(statearr_12765_13861[(2)] = null);

(statearr_12765_13861[(1)] = (8));


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
var statearr_12767_13862 = state_12711__$1;
(statearr_12767_13862[(1)] = (16));

} else {
var statearr_12768_13863 = state_12711__$1;
(statearr_12768_13863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (9))){
var inst_12642 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12769_13864 = state_12711__$1;
(statearr_12769_13864[(2)] = inst_12642);

(statearr_12769_13864[(1)] = (7));


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
var statearr_12771_13865 = state_12711__$1;
(statearr_12771_13865[(2)] = null);

(statearr_12771_13865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (14))){
var state_12711__$1 = state_12711;
var statearr_12772_13866 = state_12711__$1;
(statearr_12772_13866[(2)] = null);

(statearr_12772_13866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (45))){
var inst_12701 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12773_13867 = state_12711__$1;
(statearr_12773_13867[(2)] = inst_12701);

(statearr_12773_13867[(1)] = (44));


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
var statearr_12775_13868 = state_12711__$1;
(statearr_12775_13868[(1)] = (42));

} else {
var statearr_12776_13869 = state_12711__$1;
(statearr_12776_13869[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (16))){
var inst_12612 = (state_12711[(7)]);
var inst_12614 = cljs.core.chunked_seq_QMARK_(inst_12612);
var state_12711__$1 = state_12711;
if(inst_12614){
var statearr_12777_13870 = state_12711__$1;
(statearr_12777_13870[(1)] = (19));

} else {
var statearr_12778_13871 = state_12711__$1;
(statearr_12778_13871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (38))){
var inst_12690 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12779_13872 = state_12711__$1;
(statearr_12779_13872[(2)] = inst_12690);

(statearr_12779_13872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (30))){
var state_12711__$1 = state_12711;
var statearr_12780_13873 = state_12711__$1;
(statearr_12780_13873[(2)] = null);

(statearr_12780_13873[(1)] = (32));


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
var statearr_12782_13874 = state_12711__$1;
(statearr_12782_13874[(1)] = (13));

} else {
var statearr_12783_13875 = state_12711__$1;
(statearr_12783_13875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (18))){
var inst_12638 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12784_13876 = state_12711__$1;
(statearr_12784_13876[(2)] = inst_12638);

(statearr_12784_13876[(1)] = (12));


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
var statearr_12786_13877 = state_12711__$1;
(statearr_12786_13877[(1)] = (39));

} else {
var statearr_12787_13878 = state_12711__$1;
(statearr_12787_13878[(1)] = (40));

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
var statearr_12788_13879 = state_12711__$1;
(statearr_12788_13879[(1)] = (10));

} else {
var statearr_12789_13880 = state_12711__$1;
(statearr_12789_13880[(1)] = (11));

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
var statearr_12792_13881 = state_12711;
(statearr_12792_13881[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12711[(4)]))){
var statearr_12793_13882 = state_12711;
(statearr_12793_13882[(1)] = cljs.core.first((state_12711[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13883 = state_12711;
state_12711 = G__13883;
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
(statearr_12794[(6)] = c__12107__auto___13826);

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

var cljs$core$async$Mix$admix_STAR_$dyn_13885 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13885(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13886 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13886(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13887 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13887(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13888 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13888(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13889 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13889(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13890 = arguments.length;
var i__4737__auto___13891 = (0);
while(true){
if((i__4737__auto___13891 < len__4736__auto___13890)){
args__4742__auto__.push((arguments[i__4737__auto___13891]));

var G__13892 = (i__4737__auto___13891 + (1));
i__4737__auto___13891 = G__13892;
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
var statearr_12804_13893 = state;
(statearr_12804_13893[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12805_13894 = state;
(statearr_12805_13894[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12806_13895 = state;
(statearr_12806_13895[(2)] = cljs.core.deref(cb));


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
var c__12107__auto___13896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12911){
var state_val_12912 = (state_12911[(1)]);
if((state_val_12912 === (7))){
var inst_12826 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12913_13897 = state_12911__$1;
(statearr_12913_13897[(2)] = inst_12826);

(statearr_12913_13897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (20))){
var inst_12838 = (state_12911[(7)]);
var state_12911__$1 = state_12911;
var statearr_12914_13898 = state_12911__$1;
(statearr_12914_13898[(2)] = inst_12838);

(statearr_12914_13898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (27))){
var state_12911__$1 = state_12911;
var statearr_12915_13899 = state_12911__$1;
(statearr_12915_13899[(2)] = null);

(statearr_12915_13899[(1)] = (28));


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
var statearr_12917_13900 = state_12911__$1;
(statearr_12917_13900[(1)] = (2));

} else {
var statearr_12918_13901 = state_12911__$1;
(statearr_12918_13901[(1)] = (3));

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
var statearr_12920_13902 = state_12911__$1;
(statearr_12920_13902[(1)] = (29));

} else {
var statearr_12921_13903 = state_12911__$1;
(statearr_12921_13903[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (4))){
var inst_12829 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12829)){
var statearr_12922_13904 = state_12911__$1;
(statearr_12922_13904[(1)] = (8));

} else {
var statearr_12923_13905 = state_12911__$1;
(statearr_12923_13905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (15))){
var inst_12856 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12856)){
var statearr_12924_13906 = state_12911__$1;
(statearr_12924_13906[(1)] = (19));

} else {
var statearr_12925_13907 = state_12911__$1;
(statearr_12925_13907[(1)] = (20));

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
var statearr_12927_13908 = state_12911__$1;
(statearr_12927_13908[(1)] = (32));

} else {
var statearr_12928_13909 = state_12911__$1;
(statearr_12928_13909[(1)] = (33));

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
var statearr_12930_13910 = state_12911__$1;
(statearr_12930_13910[(2)] = null);

(statearr_12930_13910[(1)] = (11));


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
var statearr_12931_13912 = state_12911__$1;
(statearr_12931_13912[(1)] = (16));

} else {
var statearr_12932_13913 = state_12911__$1;
(statearr_12932_13913[(1)] = (17));

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
var statearr_12934_13914 = state_12911__$1;
(statearr_12934_13914[(1)] = (23));

} else {
var statearr_12935_13915 = state_12911__$1;
(statearr_12935_13915[(1)] = (24));

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
var statearr_12937_13916 = state_12911__$1;
(statearr_12937_13916[(2)] = null);

(statearr_12937_13916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (29))){
var inst_12885 = (state_12911[(11)]);
var state_12911__$1 = state_12911;
var statearr_12938_13917 = state_12911__$1;
(statearr_12938_13917[(2)] = inst_12885);

(statearr_12938_13917[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (6))){
var state_12911__$1 = state_12911;
var statearr_12939_13918 = state_12911__$1;
(statearr_12939_13918[(2)] = false);

(statearr_12939_13918[(1)] = (7));


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
var statearr_12941_13919 = state_12911__$1;
(statearr_12941_13919[(2)] = null);

(statearr_12941_13919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (25))){
var inst_12907 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12942_13920 = state_12911__$1;
(statearr_12942_13920[(2)] = inst_12907);

(statearr_12942_13920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (34))){
var inst_12905 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12943_13921 = state_12911__$1;
(statearr_12943_13921[(2)] = inst_12905);

(statearr_12943_13921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (17))){
var state_12911__$1 = state_12911;
var statearr_12944_13922 = state_12911__$1;
(statearr_12944_13922[(2)] = false);

(statearr_12944_13922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (3))){
var state_12911__$1 = state_12911;
var statearr_12945_13923 = state_12911__$1;
(statearr_12945_13923[(2)] = false);

(statearr_12945_13923[(1)] = (4));


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
var statearr_12946_13924 = state_12911__$1;
(statearr_12946_13924[(1)] = (5));

} else {
var statearr_12947_13925 = state_12911__$1;
(statearr_12947_13925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (23))){
var inst_12870 = (state_12911[(14)]);
var inst_12876 = (inst_12870 == null);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12876)){
var statearr_12948_13926 = state_12911__$1;
(statearr_12948_13926[(1)] = (26));

} else {
var statearr_12949_13927 = state_12911__$1;
(statearr_12949_13927[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (35))){
var inst_12896 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12896)){
var statearr_12950_13928 = state_12911__$1;
(statearr_12950_13928[(1)] = (36));

} else {
var statearr_12951_13929 = state_12911__$1;
(statearr_12951_13929[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (19))){
var inst_12838 = (state_12911[(7)]);
var inst_12858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12838);
var state_12911__$1 = state_12911;
var statearr_12952_13930 = state_12911__$1;
(statearr_12952_13930[(2)] = inst_12858);

(statearr_12952_13930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (11))){
var inst_12838 = (state_12911[(7)]);
var inst_12842 = (inst_12838 == null);
var inst_12843 = cljs.core.not(inst_12842);
var state_12911__$1 = state_12911;
if(inst_12843){
var statearr_12953_13931 = state_12911__$1;
(statearr_12953_13931[(1)] = (13));

} else {
var statearr_12954_13932 = state_12911__$1;
(statearr_12954_13932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (9))){
var inst_12813 = (state_12911[(8)]);
var state_12911__$1 = state_12911;
var statearr_12955_13933 = state_12911__$1;
(statearr_12955_13933[(2)] = inst_12813);

(statearr_12955_13933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (5))){
var state_12911__$1 = state_12911;
var statearr_12956_13934 = state_12911__$1;
(statearr_12956_13934[(2)] = true);

(statearr_12956_13934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (14))){
var state_12911__$1 = state_12911;
var statearr_12957_13935 = state_12911__$1;
(statearr_12957_13935[(2)] = false);

(statearr_12957_13935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (26))){
var inst_12871 = (state_12911[(10)]);
var inst_12878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12871);
var state_12911__$1 = state_12911;
var statearr_12958_13936 = state_12911__$1;
(statearr_12958_13936[(2)] = inst_12878);

(statearr_12958_13936[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (16))){
var state_12911__$1 = state_12911;
var statearr_12959_13937 = state_12911__$1;
(statearr_12959_13937[(2)] = true);

(statearr_12959_13937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (38))){
var inst_12901 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12960_13938 = state_12911__$1;
(statearr_12960_13938[(2)] = inst_12901);

(statearr_12960_13938[(1)] = (34));


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
var statearr_12961_13939 = state_12911__$1;
(statearr_12961_13939[(2)] = inst_12891);

(statearr_12961_13939[(1)] = (31));


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
var statearr_12963_13940 = state_12911__$1;
(statearr_12963_13940[(2)] = null);

(statearr_12963_13940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (18))){
var inst_12853 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12964_13941 = state_12911__$1;
(statearr_12964_13941[(2)] = inst_12853);

(statearr_12964_13941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (37))){
var state_12911__$1 = state_12911;
var statearr_12965_13942 = state_12911__$1;
(statearr_12965_13942[(2)] = null);

(statearr_12965_13942[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (8))){
var inst_12813 = (state_12911[(8)]);
var inst_12831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12813);
var state_12911__$1 = state_12911;
var statearr_12966_13943 = state_12911__$1;
(statearr_12966_13943[(2)] = inst_12831);

(statearr_12966_13943[(1)] = (10));


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
var statearr_12969_13944 = state_12911;
(statearr_12969_13944[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12911[(4)]))){
var statearr_12970_13945 = state_12911;
(statearr_12970_13945[(1)] = cljs.core.first((state_12911[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13946 = state_12911;
state_12911 = G__13946;
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
(statearr_12971[(6)] = c__12107__auto___13896);

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

var cljs$core$async$Pub$sub_STAR_$dyn_13947 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13947(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13948 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13948(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13949 = (function() {
var G__13950 = null;
var G__13950__1 = (function (p){
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
var G__13950__2 = (function (p,v){
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
G__13950 = function(p,v){
switch(arguments.length){
case 1:
return G__13950__1.call(this,p);
case 2:
return G__13950__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13950.cljs$core$IFn$_invoke$arity$1 = G__13950__1;
G__13950.cljs$core$IFn$_invoke$arity$2 = G__13950__2;
return G__13950;
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13949(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13949(p,v);
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
var G__12976 = arguments.length;
switch (G__12976) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12974_SHARP_){
if(cljs.core.truth_((p1__12974_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12974_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12974_SHARP_.call(null,topic)))){
return p1__12974_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12974_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12977 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12978){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12978 = meta12978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12979,meta12978__$1){
var self__ = this;
var _12979__$1 = this;
return (new cljs.core.async.t_cljs$core$async12977(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12978__$1));
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12979){
var self__ = this;
var _12979__$1 = this;
return self__.meta12978;
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12978","meta12978",-173704706,null)], null);
}));

(cljs.core.async.t_cljs$core$async12977.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12977");

(cljs.core.async.t_cljs$core$async12977.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12977");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12977.
 */
cljs.core.async.__GT_t_cljs$core$async12977 = (function cljs$core$async$__GT_t_cljs$core$async12977(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12978){
return (new cljs.core.async.t_cljs$core$async12977(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12978));
});

}

return (new cljs.core.async.t_cljs$core$async12977(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___13956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13051){
var state_val_13052 = (state_13051[(1)]);
if((state_val_13052 === (7))){
var inst_13047 = (state_13051[(2)]);
var state_13051__$1 = state_13051;
var statearr_13053_13957 = state_13051__$1;
(statearr_13053_13957[(2)] = inst_13047);

(statearr_13053_13957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (20))){
var state_13051__$1 = state_13051;
var statearr_13054_13958 = state_13051__$1;
(statearr_13054_13958[(2)] = null);

(statearr_13054_13958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (1))){
var state_13051__$1 = state_13051;
var statearr_13055_13959 = state_13051__$1;
(statearr_13055_13959[(2)] = null);

(statearr_13055_13959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (24))){
var inst_13030 = (state_13051[(7)]);
var inst_13039 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13030);
var state_13051__$1 = state_13051;
var statearr_13056_13960 = state_13051__$1;
(statearr_13056_13960[(2)] = inst_13039);

(statearr_13056_13960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (4))){
var inst_12982 = (state_13051[(8)]);
var inst_12982__$1 = (state_13051[(2)]);
var inst_12983 = (inst_12982__$1 == null);
var state_13051__$1 = (function (){var statearr_13057 = state_13051;
(statearr_13057[(8)] = inst_12982__$1);

return statearr_13057;
})();
if(cljs.core.truth_(inst_12983)){
var statearr_13058_13961 = state_13051__$1;
(statearr_13058_13961[(1)] = (5));

} else {
var statearr_13059_13962 = state_13051__$1;
(statearr_13059_13962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (15))){
var inst_13024 = (state_13051[(2)]);
var state_13051__$1 = state_13051;
var statearr_13060_13963 = state_13051__$1;
(statearr_13060_13963[(2)] = inst_13024);

(statearr_13060_13963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (21))){
var inst_13044 = (state_13051[(2)]);
var state_13051__$1 = (function (){var statearr_13061 = state_13051;
(statearr_13061[(9)] = inst_13044);

return statearr_13061;
})();
var statearr_13062_13964 = state_13051__$1;
(statearr_13062_13964[(2)] = null);

(statearr_13062_13964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (13))){
var inst_13006 = (state_13051[(10)]);
var inst_13008 = cljs.core.chunked_seq_QMARK_(inst_13006);
var state_13051__$1 = state_13051;
if(inst_13008){
var statearr_13063_13965 = state_13051__$1;
(statearr_13063_13965[(1)] = (16));

} else {
var statearr_13064_13966 = state_13051__$1;
(statearr_13064_13966[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (22))){
var inst_13036 = (state_13051[(2)]);
var state_13051__$1 = state_13051;
if(cljs.core.truth_(inst_13036)){
var statearr_13065_13967 = state_13051__$1;
(statearr_13065_13967[(1)] = (23));

} else {
var statearr_13066_13968 = state_13051__$1;
(statearr_13066_13968[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (6))){
var inst_13032 = (state_13051[(11)]);
var inst_12982 = (state_13051[(8)]);
var inst_13030 = (state_13051[(7)]);
var inst_13030__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12982) : topic_fn.call(null,inst_12982));
var inst_13031 = cljs.core.deref(mults);
var inst_13032__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13031,inst_13030__$1);
var state_13051__$1 = (function (){var statearr_13067 = state_13051;
(statearr_13067[(11)] = inst_13032__$1);

(statearr_13067[(7)] = inst_13030__$1);

return statearr_13067;
})();
if(cljs.core.truth_(inst_13032__$1)){
var statearr_13068_13970 = state_13051__$1;
(statearr_13068_13970[(1)] = (19));

} else {
var statearr_13069_13971 = state_13051__$1;
(statearr_13069_13971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (25))){
var inst_13041 = (state_13051[(2)]);
var state_13051__$1 = state_13051;
var statearr_13070_13972 = state_13051__$1;
(statearr_13070_13972[(2)] = inst_13041);

(statearr_13070_13972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (17))){
var inst_13006 = (state_13051[(10)]);
var inst_13015 = cljs.core.first(inst_13006);
var inst_13016 = cljs.core.async.muxch_STAR_(inst_13015);
var inst_13017 = cljs.core.async.close_BANG_(inst_13016);
var inst_13018 = cljs.core.next(inst_13006);
var inst_12992 = inst_13018;
var inst_12993 = null;
var inst_12994 = (0);
var inst_12995 = (0);
var state_13051__$1 = (function (){var statearr_13071 = state_13051;
(statearr_13071[(12)] = inst_12995);

(statearr_13071[(13)] = inst_12994);

(statearr_13071[(14)] = inst_13017);

(statearr_13071[(15)] = inst_12993);

(statearr_13071[(16)] = inst_12992);

return statearr_13071;
})();
var statearr_13072_13973 = state_13051__$1;
(statearr_13072_13973[(2)] = null);

(statearr_13072_13973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (3))){
var inst_13049 = (state_13051[(2)]);
var state_13051__$1 = state_13051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13051__$1,inst_13049);
} else {
if((state_val_13052 === (12))){
var inst_13026 = (state_13051[(2)]);
var state_13051__$1 = state_13051;
var statearr_13073_13974 = state_13051__$1;
(statearr_13073_13974[(2)] = inst_13026);

(statearr_13073_13974[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (2))){
var state_13051__$1 = state_13051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13051__$1,(4),ch);
} else {
if((state_val_13052 === (23))){
var state_13051__$1 = state_13051;
var statearr_13074_13975 = state_13051__$1;
(statearr_13074_13975[(2)] = null);

(statearr_13074_13975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (19))){
var inst_13032 = (state_13051[(11)]);
var inst_12982 = (state_13051[(8)]);
var inst_13034 = cljs.core.async.muxch_STAR_(inst_13032);
var state_13051__$1 = state_13051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13051__$1,(22),inst_13034,inst_12982);
} else {
if((state_val_13052 === (11))){
var inst_12992 = (state_13051[(16)]);
var inst_13006 = (state_13051[(10)]);
var inst_13006__$1 = cljs.core.seq(inst_12992);
var state_13051__$1 = (function (){var statearr_13075 = state_13051;
(statearr_13075[(10)] = inst_13006__$1);

return statearr_13075;
})();
if(inst_13006__$1){
var statearr_13076_13979 = state_13051__$1;
(statearr_13076_13979[(1)] = (13));

} else {
var statearr_13077_13980 = state_13051__$1;
(statearr_13077_13980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (9))){
var inst_13028 = (state_13051[(2)]);
var state_13051__$1 = state_13051;
var statearr_13078_13981 = state_13051__$1;
(statearr_13078_13981[(2)] = inst_13028);

(statearr_13078_13981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (5))){
var inst_12989 = cljs.core.deref(mults);
var inst_12990 = cljs.core.vals(inst_12989);
var inst_12991 = cljs.core.seq(inst_12990);
var inst_12992 = inst_12991;
var inst_12993 = null;
var inst_12994 = (0);
var inst_12995 = (0);
var state_13051__$1 = (function (){var statearr_13079 = state_13051;
(statearr_13079[(12)] = inst_12995);

(statearr_13079[(13)] = inst_12994);

(statearr_13079[(15)] = inst_12993);

(statearr_13079[(16)] = inst_12992);

return statearr_13079;
})();
var statearr_13080_13982 = state_13051__$1;
(statearr_13080_13982[(2)] = null);

(statearr_13080_13982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (14))){
var state_13051__$1 = state_13051;
var statearr_13084_13983 = state_13051__$1;
(statearr_13084_13983[(2)] = null);

(statearr_13084_13983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (16))){
var inst_13006 = (state_13051[(10)]);
var inst_13010 = cljs.core.chunk_first(inst_13006);
var inst_13011 = cljs.core.chunk_rest(inst_13006);
var inst_13012 = cljs.core.count(inst_13010);
var inst_12992 = inst_13011;
var inst_12993 = inst_13010;
var inst_12994 = inst_13012;
var inst_12995 = (0);
var state_13051__$1 = (function (){var statearr_13085 = state_13051;
(statearr_13085[(12)] = inst_12995);

(statearr_13085[(13)] = inst_12994);

(statearr_13085[(15)] = inst_12993);

(statearr_13085[(16)] = inst_12992);

return statearr_13085;
})();
var statearr_13086_13984 = state_13051__$1;
(statearr_13086_13984[(2)] = null);

(statearr_13086_13984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (10))){
var inst_12995 = (state_13051[(12)]);
var inst_12994 = (state_13051[(13)]);
var inst_12993 = (state_13051[(15)]);
var inst_12992 = (state_13051[(16)]);
var inst_13000 = cljs.core._nth(inst_12993,inst_12995);
var inst_13001 = cljs.core.async.muxch_STAR_(inst_13000);
var inst_13002 = cljs.core.async.close_BANG_(inst_13001);
var inst_13003 = (inst_12995 + (1));
var tmp13081 = inst_12994;
var tmp13082 = inst_12993;
var tmp13083 = inst_12992;
var inst_12992__$1 = tmp13083;
var inst_12993__$1 = tmp13082;
var inst_12994__$1 = tmp13081;
var inst_12995__$1 = inst_13003;
var state_13051__$1 = (function (){var statearr_13087 = state_13051;
(statearr_13087[(12)] = inst_12995__$1);

(statearr_13087[(17)] = inst_13002);

(statearr_13087[(13)] = inst_12994__$1);

(statearr_13087[(15)] = inst_12993__$1);

(statearr_13087[(16)] = inst_12992__$1);

return statearr_13087;
})();
var statearr_13088_13986 = state_13051__$1;
(statearr_13088_13986[(2)] = null);

(statearr_13088_13986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (18))){
var inst_13021 = (state_13051[(2)]);
var state_13051__$1 = state_13051;
var statearr_13089_13987 = state_13051__$1;
(statearr_13089_13987[(2)] = inst_13021);

(statearr_13089_13987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13052 === (8))){
var inst_12995 = (state_13051[(12)]);
var inst_12994 = (state_13051[(13)]);
var inst_12997 = (inst_12995 < inst_12994);
var inst_12998 = inst_12997;
var state_13051__$1 = state_13051;
if(cljs.core.truth_(inst_12998)){
var statearr_13090_13988 = state_13051__$1;
(statearr_13090_13988[(1)] = (10));

} else {
var statearr_13091_13989 = state_13051__$1;
(statearr_13091_13989[(1)] = (11));

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
var statearr_13092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13092[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13092[(1)] = (1));

return statearr_13092;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13051){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13051);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13093){var ex__12075__auto__ = e13093;
var statearr_13094_13990 = state_13051;
(statearr_13094_13990[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13051[(4)]))){
var statearr_13095_13991 = state_13051;
(statearr_13095_13991[(1)] = cljs.core.first((state_13051[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13992 = state_13051;
state_13051 = G__13992;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13096 = f__12108__auto__();
(statearr_13096[(6)] = c__12107__auto___13956);

return statearr_13096;
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
var G__13098 = arguments.length;
switch (G__13098) {
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
var G__13100 = arguments.length;
switch (G__13100) {
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
var G__13102 = arguments.length;
switch (G__13102) {
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
var c__12107__auto___13996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13145){
var state_val_13146 = (state_13145[(1)]);
if((state_val_13146 === (7))){
var state_13145__$1 = state_13145;
var statearr_13147_13997 = state_13145__$1;
(statearr_13147_13997[(2)] = null);

(statearr_13147_13997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (1))){
var state_13145__$1 = state_13145;
var statearr_13148_13998 = state_13145__$1;
(statearr_13148_13998[(2)] = null);

(statearr_13148_13998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (4))){
var inst_13106 = (state_13145[(7)]);
var inst_13105 = (state_13145[(8)]);
var inst_13108 = (inst_13106 < inst_13105);
var state_13145__$1 = state_13145;
if(cljs.core.truth_(inst_13108)){
var statearr_13149_13999 = state_13145__$1;
(statearr_13149_13999[(1)] = (6));

} else {
var statearr_13150_14000 = state_13145__$1;
(statearr_13150_14000[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (15))){
var inst_13131 = (state_13145[(9)]);
var inst_13136 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13131);
var state_13145__$1 = state_13145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13145__$1,(17),out,inst_13136);
} else {
if((state_val_13146 === (13))){
var inst_13131 = (state_13145[(9)]);
var inst_13131__$1 = (state_13145[(2)]);
var inst_13132 = cljs.core.some(cljs.core.nil_QMARK_,inst_13131__$1);
var state_13145__$1 = (function (){var statearr_13151 = state_13145;
(statearr_13151[(9)] = inst_13131__$1);

return statearr_13151;
})();
if(cljs.core.truth_(inst_13132)){
var statearr_13152_14001 = state_13145__$1;
(statearr_13152_14001[(1)] = (14));

} else {
var statearr_13153_14002 = state_13145__$1;
(statearr_13153_14002[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (6))){
var state_13145__$1 = state_13145;
var statearr_13154_14003 = state_13145__$1;
(statearr_13154_14003[(2)] = null);

(statearr_13154_14003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (17))){
var inst_13138 = (state_13145[(2)]);
var state_13145__$1 = (function (){var statearr_13156 = state_13145;
(statearr_13156[(10)] = inst_13138);

return statearr_13156;
})();
var statearr_13157_14007 = state_13145__$1;
(statearr_13157_14007[(2)] = null);

(statearr_13157_14007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (3))){
var inst_13143 = (state_13145[(2)]);
var state_13145__$1 = state_13145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13145__$1,inst_13143);
} else {
if((state_val_13146 === (12))){
var _ = (function (){var statearr_13158 = state_13145;
(statearr_13158[(4)] = cljs.core.rest((state_13145[(4)])));

return statearr_13158;
})();
var state_13145__$1 = state_13145;
var ex13155 = (state_13145__$1[(2)]);
var statearr_13159_14008 = state_13145__$1;
(statearr_13159_14008[(5)] = ex13155);


if((ex13155 instanceof Object)){
var statearr_13160_14009 = state_13145__$1;
(statearr_13160_14009[(1)] = (11));

(statearr_13160_14009[(5)] = null);

} else {
throw ex13155;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (2))){
var inst_13104 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13105 = cnt;
var inst_13106 = (0);
var state_13145__$1 = (function (){var statearr_13161 = state_13145;
(statearr_13161[(7)] = inst_13106);

(statearr_13161[(11)] = inst_13104);

(statearr_13161[(8)] = inst_13105);

return statearr_13161;
})();
var statearr_13162_14010 = state_13145__$1;
(statearr_13162_14010[(2)] = null);

(statearr_13162_14010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (11))){
var inst_13110 = (state_13145[(2)]);
var inst_13111 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13145__$1 = (function (){var statearr_13163 = state_13145;
(statearr_13163[(12)] = inst_13110);

return statearr_13163;
})();
var statearr_13164_14011 = state_13145__$1;
(statearr_13164_14011[(2)] = inst_13111);

(statearr_13164_14011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (9))){
var inst_13106 = (state_13145[(7)]);
var _ = (function (){var statearr_13165 = state_13145;
(statearr_13165[(4)] = cljs.core.cons((12),(state_13145[(4)])));

return statearr_13165;
})();
var inst_13117 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13106) : chs__$1.call(null,inst_13106));
var inst_13118 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13106) : done.call(null,inst_13106));
var inst_13119 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13117,inst_13118);
var ___$1 = (function (){var statearr_13166 = state_13145;
(statearr_13166[(4)] = cljs.core.rest((state_13145[(4)])));

return statearr_13166;
})();
var state_13145__$1 = state_13145;
var statearr_13167_14012 = state_13145__$1;
(statearr_13167_14012[(2)] = inst_13119);

(statearr_13167_14012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (5))){
var inst_13129 = (state_13145[(2)]);
var state_13145__$1 = (function (){var statearr_13168 = state_13145;
(statearr_13168[(13)] = inst_13129);

return statearr_13168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13145__$1,(13),dchan);
} else {
if((state_val_13146 === (14))){
var inst_13134 = cljs.core.async.close_BANG_(out);
var state_13145__$1 = state_13145;
var statearr_13169_14013 = state_13145__$1;
(statearr_13169_14013[(2)] = inst_13134);

(statearr_13169_14013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (16))){
var inst_13141 = (state_13145[(2)]);
var state_13145__$1 = state_13145;
var statearr_13170_14014 = state_13145__$1;
(statearr_13170_14014[(2)] = inst_13141);

(statearr_13170_14014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (10))){
var inst_13106 = (state_13145[(7)]);
var inst_13122 = (state_13145[(2)]);
var inst_13123 = (inst_13106 + (1));
var inst_13106__$1 = inst_13123;
var state_13145__$1 = (function (){var statearr_13171 = state_13145;
(statearr_13171[(7)] = inst_13106__$1);

(statearr_13171[(14)] = inst_13122);

return statearr_13171;
})();
var statearr_13172_14015 = state_13145__$1;
(statearr_13172_14015[(2)] = null);

(statearr_13172_14015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13146 === (8))){
var inst_13127 = (state_13145[(2)]);
var state_13145__$1 = state_13145;
var statearr_13173_14016 = state_13145__$1;
(statearr_13173_14016[(2)] = inst_13127);

(statearr_13173_14016[(1)] = (5));


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
var statearr_13174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13174[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13174[(1)] = (1));

return statearr_13174;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13145){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13145);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13175){var ex__12075__auto__ = e13175;
var statearr_13176_14017 = state_13145;
(statearr_13176_14017[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13145[(4)]))){
var statearr_13177_14018 = state_13145;
(statearr_13177_14018[(1)] = cljs.core.first((state_13145[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14019 = state_13145;
state_13145 = G__14019;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13178 = f__12108__auto__();
(statearr_13178[(6)] = c__12107__auto___13996);

return statearr_13178;
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
var G__13181 = arguments.length;
switch (G__13181) {
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
var c__12107__auto___14021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13213){
var state_val_13214 = (state_13213[(1)]);
if((state_val_13214 === (7))){
var inst_13192 = (state_13213[(7)]);
var inst_13193 = (state_13213[(8)]);
var inst_13192__$1 = (state_13213[(2)]);
var inst_13193__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13192__$1,(0),null);
var inst_13194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13192__$1,(1),null);
var inst_13195 = (inst_13193__$1 == null);
var state_13213__$1 = (function (){var statearr_13215 = state_13213;
(statearr_13215[(7)] = inst_13192__$1);

(statearr_13215[(9)] = inst_13194);

(statearr_13215[(8)] = inst_13193__$1);

return statearr_13215;
})();
if(cljs.core.truth_(inst_13195)){
var statearr_13216_14022 = state_13213__$1;
(statearr_13216_14022[(1)] = (8));

} else {
var statearr_13217_14023 = state_13213__$1;
(statearr_13217_14023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13214 === (1))){
var inst_13182 = cljs.core.vec(chs);
var inst_13183 = inst_13182;
var state_13213__$1 = (function (){var statearr_13218 = state_13213;
(statearr_13218[(10)] = inst_13183);

return statearr_13218;
})();
var statearr_13219_14024 = state_13213__$1;
(statearr_13219_14024[(2)] = null);

(statearr_13219_14024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13214 === (4))){
var inst_13183 = (state_13213[(10)]);
var state_13213__$1 = state_13213;
return cljs.core.async.ioc_alts_BANG_(state_13213__$1,(7),inst_13183);
} else {
if((state_val_13214 === (6))){
var inst_13209 = (state_13213[(2)]);
var state_13213__$1 = state_13213;
var statearr_13220_14025 = state_13213__$1;
(statearr_13220_14025[(2)] = inst_13209);

(statearr_13220_14025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13214 === (3))){
var inst_13211 = (state_13213[(2)]);
var state_13213__$1 = state_13213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13213__$1,inst_13211);
} else {
if((state_val_13214 === (2))){
var inst_13183 = (state_13213[(10)]);
var inst_13185 = cljs.core.count(inst_13183);
var inst_13186 = (inst_13185 > (0));
var state_13213__$1 = state_13213;
if(cljs.core.truth_(inst_13186)){
var statearr_13222_14026 = state_13213__$1;
(statearr_13222_14026[(1)] = (4));

} else {
var statearr_13223_14027 = state_13213__$1;
(statearr_13223_14027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13214 === (11))){
var inst_13183 = (state_13213[(10)]);
var inst_13202 = (state_13213[(2)]);
var tmp13221 = inst_13183;
var inst_13183__$1 = tmp13221;
var state_13213__$1 = (function (){var statearr_13224 = state_13213;
(statearr_13224[(11)] = inst_13202);

(statearr_13224[(10)] = inst_13183__$1);

return statearr_13224;
})();
var statearr_13225_14028 = state_13213__$1;
(statearr_13225_14028[(2)] = null);

(statearr_13225_14028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13214 === (9))){
var inst_13193 = (state_13213[(8)]);
var state_13213__$1 = state_13213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13213__$1,(11),out,inst_13193);
} else {
if((state_val_13214 === (5))){
var inst_13207 = cljs.core.async.close_BANG_(out);
var state_13213__$1 = state_13213;
var statearr_13226_14029 = state_13213__$1;
(statearr_13226_14029[(2)] = inst_13207);

(statearr_13226_14029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13214 === (10))){
var inst_13205 = (state_13213[(2)]);
var state_13213__$1 = state_13213;
var statearr_13227_14030 = state_13213__$1;
(statearr_13227_14030[(2)] = inst_13205);

(statearr_13227_14030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13214 === (8))){
var inst_13192 = (state_13213[(7)]);
var inst_13183 = (state_13213[(10)]);
var inst_13194 = (state_13213[(9)]);
var inst_13193 = (state_13213[(8)]);
var inst_13197 = (function (){var cs = inst_13183;
var vec__13188 = inst_13192;
var v = inst_13193;
var c = inst_13194;
return (function (p1__13179_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13179_SHARP_);
});
})();
var inst_13198 = cljs.core.filterv(inst_13197,inst_13183);
var inst_13183__$1 = inst_13198;
var state_13213__$1 = (function (){var statearr_13228 = state_13213;
(statearr_13228[(10)] = inst_13183__$1);

return statearr_13228;
})();
var statearr_13229_14031 = state_13213__$1;
(statearr_13229_14031[(2)] = null);

(statearr_13229_14031[(1)] = (2));


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
var statearr_13230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13230[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13230[(1)] = (1));

return statearr_13230;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13213){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13213);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13231){var ex__12075__auto__ = e13231;
var statearr_13232_14032 = state_13213;
(statearr_13232_14032[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13213[(4)]))){
var statearr_13233_14033 = state_13213;
(statearr_13233_14033[(1)] = cljs.core.first((state_13213[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14034 = state_13213;
state_13213 = G__14034;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13234 = f__12108__auto__();
(statearr_13234[(6)] = c__12107__auto___14021);

return statearr_13234;
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
var G__13236 = arguments.length;
switch (G__13236) {
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
var c__12107__auto___14036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13260){
var state_val_13261 = (state_13260[(1)]);
if((state_val_13261 === (7))){
var inst_13242 = (state_13260[(7)]);
var inst_13242__$1 = (state_13260[(2)]);
var inst_13243 = (inst_13242__$1 == null);
var inst_13244 = cljs.core.not(inst_13243);
var state_13260__$1 = (function (){var statearr_13262 = state_13260;
(statearr_13262[(7)] = inst_13242__$1);

return statearr_13262;
})();
if(inst_13244){
var statearr_13263_14037 = state_13260__$1;
(statearr_13263_14037[(1)] = (8));

} else {
var statearr_13264_14038 = state_13260__$1;
(statearr_13264_14038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (1))){
var inst_13237 = (0);
var state_13260__$1 = (function (){var statearr_13265 = state_13260;
(statearr_13265[(8)] = inst_13237);

return statearr_13265;
})();
var statearr_13266_14039 = state_13260__$1;
(statearr_13266_14039[(2)] = null);

(statearr_13266_14039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (4))){
var state_13260__$1 = state_13260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13260__$1,(7),ch);
} else {
if((state_val_13261 === (6))){
var inst_13255 = (state_13260[(2)]);
var state_13260__$1 = state_13260;
var statearr_13267_14040 = state_13260__$1;
(statearr_13267_14040[(2)] = inst_13255);

(statearr_13267_14040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (3))){
var inst_13257 = (state_13260[(2)]);
var inst_13258 = cljs.core.async.close_BANG_(out);
var state_13260__$1 = (function (){var statearr_13268 = state_13260;
(statearr_13268[(9)] = inst_13257);

return statearr_13268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13260__$1,inst_13258);
} else {
if((state_val_13261 === (2))){
var inst_13237 = (state_13260[(8)]);
var inst_13239 = (inst_13237 < n);
var state_13260__$1 = state_13260;
if(cljs.core.truth_(inst_13239)){
var statearr_13269_14041 = state_13260__$1;
(statearr_13269_14041[(1)] = (4));

} else {
var statearr_13270_14042 = state_13260__$1;
(statearr_13270_14042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (11))){
var inst_13237 = (state_13260[(8)]);
var inst_13247 = (state_13260[(2)]);
var inst_13248 = (inst_13237 + (1));
var inst_13237__$1 = inst_13248;
var state_13260__$1 = (function (){var statearr_13271 = state_13260;
(statearr_13271[(10)] = inst_13247);

(statearr_13271[(8)] = inst_13237__$1);

return statearr_13271;
})();
var statearr_13272_14044 = state_13260__$1;
(statearr_13272_14044[(2)] = null);

(statearr_13272_14044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (9))){
var state_13260__$1 = state_13260;
var statearr_13273_14045 = state_13260__$1;
(statearr_13273_14045[(2)] = null);

(statearr_13273_14045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (5))){
var state_13260__$1 = state_13260;
var statearr_13274_14046 = state_13260__$1;
(statearr_13274_14046[(2)] = null);

(statearr_13274_14046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (10))){
var inst_13252 = (state_13260[(2)]);
var state_13260__$1 = state_13260;
var statearr_13275_14047 = state_13260__$1;
(statearr_13275_14047[(2)] = inst_13252);

(statearr_13275_14047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (8))){
var inst_13242 = (state_13260[(7)]);
var state_13260__$1 = state_13260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13260__$1,(11),out,inst_13242);
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
var statearr_13276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13276[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13276[(1)] = (1));

return statearr_13276;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13260){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13260);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13277){var ex__12075__auto__ = e13277;
var statearr_13278_14049 = state_13260;
(statearr_13278_14049[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13260[(4)]))){
var statearr_13279_14050 = state_13260;
(statearr_13279_14050[(1)] = cljs.core.first((state_13260[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14051 = state_13260;
state_13260 = G__14051;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13280 = f__12108__auto__();
(statearr_13280[(6)] = c__12107__auto___14036);

return statearr_13280;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13282 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13282 = (function (f,ch,meta13283){
this.f = f;
this.ch = ch;
this.meta13283 = meta13283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13284,meta13283__$1){
var self__ = this;
var _13284__$1 = this;
return (new cljs.core.async.t_cljs$core$async13282(self__.f,self__.ch,meta13283__$1));
}));

(cljs.core.async.t_cljs$core$async13282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13284){
var self__ = this;
var _13284__$1 = this;
return self__.meta13283;
}));

(cljs.core.async.t_cljs$core$async13282.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13282.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13282.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13285 = (function (f,ch,meta13283,_,fn1,meta13286){
this.f = f;
this.ch = ch;
this.meta13283 = meta13283;
this._ = _;
this.fn1 = fn1;
this.meta13286 = meta13286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13287,meta13286__$1){
var self__ = this;
var _13287__$1 = this;
return (new cljs.core.async.t_cljs$core$async13285(self__.f,self__.ch,self__.meta13283,self__._,self__.fn1,meta13286__$1));
}));

(cljs.core.async.t_cljs$core$async13285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13287){
var self__ = this;
var _13287__$1 = this;
return self__.meta13286;
}));

(cljs.core.async.t_cljs$core$async13285.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13281_SHARP_){
var G__13288 = (((p1__13281_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13281_SHARP_) : self__.f.call(null,p1__13281_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13288) : f1.call(null,G__13288));
});
}));

(cljs.core.async.t_cljs$core$async13285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13283","meta13283",-142163368,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13282","cljs.core.async/t_cljs$core$async13282",-981870082,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13286","meta13286",358450130,null)], null);
}));

(cljs.core.async.t_cljs$core$async13285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13285");

(cljs.core.async.t_cljs$core$async13285.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13285.
 */
cljs.core.async.__GT_t_cljs$core$async13285 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13285(f__$1,ch__$1,meta13283__$1,___$2,fn1__$1,meta13286){
return (new cljs.core.async.t_cljs$core$async13285(f__$1,ch__$1,meta13283__$1,___$2,fn1__$1,meta13286));
});

}

return (new cljs.core.async.t_cljs$core$async13285(self__.f,self__.ch,self__.meta13283,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13289 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13289) : self__.f.call(null,G__13289));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13282.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13283","meta13283",-142163368,null)], null);
}));

(cljs.core.async.t_cljs$core$async13282.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13282");

(cljs.core.async.t_cljs$core$async13282.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13282");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13282.
 */
cljs.core.async.__GT_t_cljs$core$async13282 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13282(f__$1,ch__$1,meta13283){
return (new cljs.core.async.t_cljs$core$async13282(f__$1,ch__$1,meta13283));
});

}

return (new cljs.core.async.t_cljs$core$async13282(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13290 = (function (f,ch,meta13291){
this.f = f;
this.ch = ch;
this.meta13291 = meta13291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13292,meta13291__$1){
var self__ = this;
var _13292__$1 = this;
return (new cljs.core.async.t_cljs$core$async13290(self__.f,self__.ch,meta13291__$1));
}));

(cljs.core.async.t_cljs$core$async13290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13292){
var self__ = this;
var _13292__$1 = this;
return self__.meta13291;
}));

(cljs.core.async.t_cljs$core$async13290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13291","meta13291",-808361998,null)], null);
}));

(cljs.core.async.t_cljs$core$async13290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13290");

(cljs.core.async.t_cljs$core$async13290.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13290.
 */
cljs.core.async.__GT_t_cljs$core$async13290 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13290(f__$1,ch__$1,meta13291){
return (new cljs.core.async.t_cljs$core$async13290(f__$1,ch__$1,meta13291));
});

}

return (new cljs.core.async.t_cljs$core$async13290(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13293 = (function (p,ch,meta13294){
this.p = p;
this.ch = ch;
this.meta13294 = meta13294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13295,meta13294__$1){
var self__ = this;
var _13295__$1 = this;
return (new cljs.core.async.t_cljs$core$async13293(self__.p,self__.ch,meta13294__$1));
}));

(cljs.core.async.t_cljs$core$async13293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13295){
var self__ = this;
var _13295__$1 = this;
return self__.meta13294;
}));

(cljs.core.async.t_cljs$core$async13293.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13293.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13293.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13293.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13294","meta13294",615102301,null)], null);
}));

(cljs.core.async.t_cljs$core$async13293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13293");

(cljs.core.async.t_cljs$core$async13293.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13293.
 */
cljs.core.async.__GT_t_cljs$core$async13293 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13293(p__$1,ch__$1,meta13294){
return (new cljs.core.async.t_cljs$core$async13293(p__$1,ch__$1,meta13294));
});

}

return (new cljs.core.async.t_cljs$core$async13293(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13297 = arguments.length;
switch (G__13297) {
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
var c__12107__auto___14059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13318){
var state_val_13319 = (state_13318[(1)]);
if((state_val_13319 === (7))){
var inst_13314 = (state_13318[(2)]);
var state_13318__$1 = state_13318;
var statearr_13320_14060 = state_13318__$1;
(statearr_13320_14060[(2)] = inst_13314);

(statearr_13320_14060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (1))){
var state_13318__$1 = state_13318;
var statearr_13321_14061 = state_13318__$1;
(statearr_13321_14061[(2)] = null);

(statearr_13321_14061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (4))){
var inst_13300 = (state_13318[(7)]);
var inst_13300__$1 = (state_13318[(2)]);
var inst_13301 = (inst_13300__$1 == null);
var state_13318__$1 = (function (){var statearr_13322 = state_13318;
(statearr_13322[(7)] = inst_13300__$1);

return statearr_13322;
})();
if(cljs.core.truth_(inst_13301)){
var statearr_13323_14062 = state_13318__$1;
(statearr_13323_14062[(1)] = (5));

} else {
var statearr_13324_14063 = state_13318__$1;
(statearr_13324_14063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (6))){
var inst_13300 = (state_13318[(7)]);
var inst_13305 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13300) : p.call(null,inst_13300));
var state_13318__$1 = state_13318;
if(cljs.core.truth_(inst_13305)){
var statearr_13325_14064 = state_13318__$1;
(statearr_13325_14064[(1)] = (8));

} else {
var statearr_13326_14065 = state_13318__$1;
(statearr_13326_14065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (3))){
var inst_13316 = (state_13318[(2)]);
var state_13318__$1 = state_13318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13318__$1,inst_13316);
} else {
if((state_val_13319 === (2))){
var state_13318__$1 = state_13318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13318__$1,(4),ch);
} else {
if((state_val_13319 === (11))){
var inst_13308 = (state_13318[(2)]);
var state_13318__$1 = state_13318;
var statearr_13327_14066 = state_13318__$1;
(statearr_13327_14066[(2)] = inst_13308);

(statearr_13327_14066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (9))){
var state_13318__$1 = state_13318;
var statearr_13328_14067 = state_13318__$1;
(statearr_13328_14067[(2)] = null);

(statearr_13328_14067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (5))){
var inst_13303 = cljs.core.async.close_BANG_(out);
var state_13318__$1 = state_13318;
var statearr_13329_14068 = state_13318__$1;
(statearr_13329_14068[(2)] = inst_13303);

(statearr_13329_14068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (10))){
var inst_13311 = (state_13318[(2)]);
var state_13318__$1 = (function (){var statearr_13330 = state_13318;
(statearr_13330[(8)] = inst_13311);

return statearr_13330;
})();
var statearr_13331_14069 = state_13318__$1;
(statearr_13331_14069[(2)] = null);

(statearr_13331_14069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (8))){
var inst_13300 = (state_13318[(7)]);
var state_13318__$1 = state_13318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13318__$1,(11),out,inst_13300);
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
var statearr_13332 = [null,null,null,null,null,null,null,null,null];
(statearr_13332[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13332[(1)] = (1));

return statearr_13332;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13318){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13318);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13333){var ex__12075__auto__ = e13333;
var statearr_13334_14070 = state_13318;
(statearr_13334_14070[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13318[(4)]))){
var statearr_13335_14071 = state_13318;
(statearr_13335_14071[(1)] = cljs.core.first((state_13318[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14072 = state_13318;
state_13318 = G__14072;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13336 = f__12108__auto__();
(statearr_13336[(6)] = c__12107__auto___14059);

return statearr_13336;
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
var G__13338 = arguments.length;
switch (G__13338) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13400){
var state_val_13401 = (state_13400[(1)]);
if((state_val_13401 === (7))){
var inst_13396 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
var statearr_13402_14074 = state_13400__$1;
(statearr_13402_14074[(2)] = inst_13396);

(statearr_13402_14074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (20))){
var inst_13366 = (state_13400[(7)]);
var inst_13377 = (state_13400[(2)]);
var inst_13378 = cljs.core.next(inst_13366);
var inst_13352 = inst_13378;
var inst_13353 = null;
var inst_13354 = (0);
var inst_13355 = (0);
var state_13400__$1 = (function (){var statearr_13403 = state_13400;
(statearr_13403[(8)] = inst_13377);

(statearr_13403[(9)] = inst_13354);

(statearr_13403[(10)] = inst_13353);

(statearr_13403[(11)] = inst_13352);

(statearr_13403[(12)] = inst_13355);

return statearr_13403;
})();
var statearr_13404_14075 = state_13400__$1;
(statearr_13404_14075[(2)] = null);

(statearr_13404_14075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (1))){
var state_13400__$1 = state_13400;
var statearr_13405_14076 = state_13400__$1;
(statearr_13405_14076[(2)] = null);

(statearr_13405_14076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (4))){
var inst_13341 = (state_13400[(13)]);
var inst_13341__$1 = (state_13400[(2)]);
var inst_13342 = (inst_13341__$1 == null);
var state_13400__$1 = (function (){var statearr_13406 = state_13400;
(statearr_13406[(13)] = inst_13341__$1);

return statearr_13406;
})();
if(cljs.core.truth_(inst_13342)){
var statearr_13407_14077 = state_13400__$1;
(statearr_13407_14077[(1)] = (5));

} else {
var statearr_13408_14078 = state_13400__$1;
(statearr_13408_14078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (15))){
var state_13400__$1 = state_13400;
var statearr_13412_14079 = state_13400__$1;
(statearr_13412_14079[(2)] = null);

(statearr_13412_14079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (21))){
var state_13400__$1 = state_13400;
var statearr_13413_14080 = state_13400__$1;
(statearr_13413_14080[(2)] = null);

(statearr_13413_14080[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (13))){
var inst_13354 = (state_13400[(9)]);
var inst_13353 = (state_13400[(10)]);
var inst_13352 = (state_13400[(11)]);
var inst_13355 = (state_13400[(12)]);
var inst_13362 = (state_13400[(2)]);
var inst_13363 = (inst_13355 + (1));
var tmp13409 = inst_13354;
var tmp13410 = inst_13353;
var tmp13411 = inst_13352;
var inst_13352__$1 = tmp13411;
var inst_13353__$1 = tmp13410;
var inst_13354__$1 = tmp13409;
var inst_13355__$1 = inst_13363;
var state_13400__$1 = (function (){var statearr_13414 = state_13400;
(statearr_13414[(9)] = inst_13354__$1);

(statearr_13414[(10)] = inst_13353__$1);

(statearr_13414[(11)] = inst_13352__$1);

(statearr_13414[(14)] = inst_13362);

(statearr_13414[(12)] = inst_13355__$1);

return statearr_13414;
})();
var statearr_13415_14081 = state_13400__$1;
(statearr_13415_14081[(2)] = null);

(statearr_13415_14081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (22))){
var state_13400__$1 = state_13400;
var statearr_13416_14082 = state_13400__$1;
(statearr_13416_14082[(2)] = null);

(statearr_13416_14082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (6))){
var inst_13341 = (state_13400[(13)]);
var inst_13350 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13341) : f.call(null,inst_13341));
var inst_13351 = cljs.core.seq(inst_13350);
var inst_13352 = inst_13351;
var inst_13353 = null;
var inst_13354 = (0);
var inst_13355 = (0);
var state_13400__$1 = (function (){var statearr_13417 = state_13400;
(statearr_13417[(9)] = inst_13354);

(statearr_13417[(10)] = inst_13353);

(statearr_13417[(11)] = inst_13352);

(statearr_13417[(12)] = inst_13355);

return statearr_13417;
})();
var statearr_13418_14083 = state_13400__$1;
(statearr_13418_14083[(2)] = null);

(statearr_13418_14083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (17))){
var inst_13366 = (state_13400[(7)]);
var inst_13370 = cljs.core.chunk_first(inst_13366);
var inst_13371 = cljs.core.chunk_rest(inst_13366);
var inst_13372 = cljs.core.count(inst_13370);
var inst_13352 = inst_13371;
var inst_13353 = inst_13370;
var inst_13354 = inst_13372;
var inst_13355 = (0);
var state_13400__$1 = (function (){var statearr_13419 = state_13400;
(statearr_13419[(9)] = inst_13354);

(statearr_13419[(10)] = inst_13353);

(statearr_13419[(11)] = inst_13352);

(statearr_13419[(12)] = inst_13355);

return statearr_13419;
})();
var statearr_13420_14084 = state_13400__$1;
(statearr_13420_14084[(2)] = null);

(statearr_13420_14084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (3))){
var inst_13398 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13400__$1,inst_13398);
} else {
if((state_val_13401 === (12))){
var inst_13386 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
var statearr_13421_14085 = state_13400__$1;
(statearr_13421_14085[(2)] = inst_13386);

(statearr_13421_14085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (2))){
var state_13400__$1 = state_13400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13400__$1,(4),in$);
} else {
if((state_val_13401 === (23))){
var inst_13394 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
var statearr_13422_14086 = state_13400__$1;
(statearr_13422_14086[(2)] = inst_13394);

(statearr_13422_14086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (19))){
var inst_13381 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
var statearr_13423_14087 = state_13400__$1;
(statearr_13423_14087[(2)] = inst_13381);

(statearr_13423_14087[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (11))){
var inst_13366 = (state_13400[(7)]);
var inst_13352 = (state_13400[(11)]);
var inst_13366__$1 = cljs.core.seq(inst_13352);
var state_13400__$1 = (function (){var statearr_13424 = state_13400;
(statearr_13424[(7)] = inst_13366__$1);

return statearr_13424;
})();
if(inst_13366__$1){
var statearr_13425_14088 = state_13400__$1;
(statearr_13425_14088[(1)] = (14));

} else {
var statearr_13426_14089 = state_13400__$1;
(statearr_13426_14089[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (9))){
var inst_13388 = (state_13400[(2)]);
var inst_13389 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13400__$1 = (function (){var statearr_13427 = state_13400;
(statearr_13427[(15)] = inst_13388);

return statearr_13427;
})();
if(cljs.core.truth_(inst_13389)){
var statearr_13428_14090 = state_13400__$1;
(statearr_13428_14090[(1)] = (21));

} else {
var statearr_13429_14091 = state_13400__$1;
(statearr_13429_14091[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (5))){
var inst_13344 = cljs.core.async.close_BANG_(out);
var state_13400__$1 = state_13400;
var statearr_13430_14092 = state_13400__$1;
(statearr_13430_14092[(2)] = inst_13344);

(statearr_13430_14092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (14))){
var inst_13366 = (state_13400[(7)]);
var inst_13368 = cljs.core.chunked_seq_QMARK_(inst_13366);
var state_13400__$1 = state_13400;
if(inst_13368){
var statearr_13431_14093 = state_13400__$1;
(statearr_13431_14093[(1)] = (17));

} else {
var statearr_13432_14094 = state_13400__$1;
(statearr_13432_14094[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (16))){
var inst_13384 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
var statearr_13433_14095 = state_13400__$1;
(statearr_13433_14095[(2)] = inst_13384);

(statearr_13433_14095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (10))){
var inst_13353 = (state_13400[(10)]);
var inst_13355 = (state_13400[(12)]);
var inst_13360 = cljs.core._nth(inst_13353,inst_13355);
var state_13400__$1 = state_13400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13400__$1,(13),out,inst_13360);
} else {
if((state_val_13401 === (18))){
var inst_13366 = (state_13400[(7)]);
var inst_13375 = cljs.core.first(inst_13366);
var state_13400__$1 = state_13400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13400__$1,(20),out,inst_13375);
} else {
if((state_val_13401 === (8))){
var inst_13354 = (state_13400[(9)]);
var inst_13355 = (state_13400[(12)]);
var inst_13357 = (inst_13355 < inst_13354);
var inst_13358 = inst_13357;
var state_13400__$1 = state_13400;
if(cljs.core.truth_(inst_13358)){
var statearr_13435_14096 = state_13400__$1;
(statearr_13435_14096[(1)] = (10));

} else {
var statearr_13436_14097 = state_13400__$1;
(statearr_13436_14097[(1)] = (11));

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
var statearr_13445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13445[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_13445[(1)] = (1));

return statearr_13445;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_13400){
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
}catch (e13446){var ex__12075__auto__ = e13446;
var statearr_13447_14098 = state_13400;
(statearr_13447_14098[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13400[(4)]))){
var statearr_13448_14099 = state_13400;
(statearr_13448_14099[(1)] = cljs.core.first((state_13400[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14100 = state_13400;
state_13400 = G__14100;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_13400){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_13400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13449 = f__12108__auto__();
(statearr_13449[(6)] = c__12107__auto__);

return statearr_13449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13451 = arguments.length;
switch (G__13451) {
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
var G__13453 = arguments.length;
switch (G__13453) {
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
var G__13455 = arguments.length;
switch (G__13455) {
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
var c__12107__auto___14104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13479){
var state_val_13480 = (state_13479[(1)]);
if((state_val_13480 === (7))){
var inst_13474 = (state_13479[(2)]);
var state_13479__$1 = state_13479;
var statearr_13481_14105 = state_13479__$1;
(statearr_13481_14105[(2)] = inst_13474);

(statearr_13481_14105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13480 === (1))){
var inst_13456 = null;
var state_13479__$1 = (function (){var statearr_13482 = state_13479;
(statearr_13482[(7)] = inst_13456);

return statearr_13482;
})();
var statearr_13483_14106 = state_13479__$1;
(statearr_13483_14106[(2)] = null);

(statearr_13483_14106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13480 === (4))){
var inst_13459 = (state_13479[(8)]);
var inst_13459__$1 = (state_13479[(2)]);
var inst_13460 = (inst_13459__$1 == null);
var inst_13461 = cljs.core.not(inst_13460);
var state_13479__$1 = (function (){var statearr_13484 = state_13479;
(statearr_13484[(8)] = inst_13459__$1);

return statearr_13484;
})();
if(inst_13461){
var statearr_13485_14107 = state_13479__$1;
(statearr_13485_14107[(1)] = (5));

} else {
var statearr_13486_14108 = state_13479__$1;
(statearr_13486_14108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13480 === (6))){
var state_13479__$1 = state_13479;
var statearr_13487_14109 = state_13479__$1;
(statearr_13487_14109[(2)] = null);

(statearr_13487_14109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13480 === (3))){
var inst_13476 = (state_13479[(2)]);
var inst_13477 = cljs.core.async.close_BANG_(out);
var state_13479__$1 = (function (){var statearr_13488 = state_13479;
(statearr_13488[(9)] = inst_13476);

return statearr_13488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13479__$1,inst_13477);
} else {
if((state_val_13480 === (2))){
var state_13479__$1 = state_13479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13479__$1,(4),ch);
} else {
if((state_val_13480 === (11))){
var inst_13459 = (state_13479[(8)]);
var inst_13468 = (state_13479[(2)]);
var inst_13456 = inst_13459;
var state_13479__$1 = (function (){var statearr_13489 = state_13479;
(statearr_13489[(7)] = inst_13456);

(statearr_13489[(10)] = inst_13468);

return statearr_13489;
})();
var statearr_13490_14110 = state_13479__$1;
(statearr_13490_14110[(2)] = null);

(statearr_13490_14110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13480 === (9))){
var inst_13459 = (state_13479[(8)]);
var state_13479__$1 = state_13479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13479__$1,(11),out,inst_13459);
} else {
if((state_val_13480 === (5))){
var inst_13456 = (state_13479[(7)]);
var inst_13459 = (state_13479[(8)]);
var inst_13463 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13459,inst_13456);
var state_13479__$1 = state_13479;
if(inst_13463){
var statearr_13492_14111 = state_13479__$1;
(statearr_13492_14111[(1)] = (8));

} else {
var statearr_13493_14112 = state_13479__$1;
(statearr_13493_14112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13480 === (10))){
var inst_13471 = (state_13479[(2)]);
var state_13479__$1 = state_13479;
var statearr_13495_14113 = state_13479__$1;
(statearr_13495_14113[(2)] = inst_13471);

(statearr_13495_14113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13480 === (8))){
var inst_13456 = (state_13479[(7)]);
var tmp13491 = inst_13456;
var inst_13456__$1 = tmp13491;
var state_13479__$1 = (function (){var statearr_13496 = state_13479;
(statearr_13496[(7)] = inst_13456__$1);

return statearr_13496;
})();
var statearr_13497_14114 = state_13479__$1;
(statearr_13497_14114[(2)] = null);

(statearr_13497_14114[(1)] = (2));


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
var statearr_13499 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13499[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13499[(1)] = (1));

return statearr_13499;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13479){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13479);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13500){var ex__12075__auto__ = e13500;
var statearr_13501_14115 = state_13479;
(statearr_13501_14115[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13479[(4)]))){
var statearr_13504_14116 = state_13479;
(statearr_13504_14116[(1)] = cljs.core.first((state_13479[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14117 = state_13479;
state_13479 = G__14117;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13506 = f__12108__auto__();
(statearr_13506[(6)] = c__12107__auto___14104);

return statearr_13506;
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
var G__13508 = arguments.length;
switch (G__13508) {
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
var c__12107__auto___14119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13546){
var state_val_13547 = (state_13546[(1)]);
if((state_val_13547 === (7))){
var inst_13542 = (state_13546[(2)]);
var state_13546__$1 = state_13546;
var statearr_13548_14120 = state_13546__$1;
(statearr_13548_14120[(2)] = inst_13542);

(statearr_13548_14120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (1))){
var inst_13509 = (new Array(n));
var inst_13510 = inst_13509;
var inst_13511 = (0);
var state_13546__$1 = (function (){var statearr_13549 = state_13546;
(statearr_13549[(7)] = inst_13510);

(statearr_13549[(8)] = inst_13511);

return statearr_13549;
})();
var statearr_13550_14121 = state_13546__$1;
(statearr_13550_14121[(2)] = null);

(statearr_13550_14121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (4))){
var inst_13514 = (state_13546[(9)]);
var inst_13514__$1 = (state_13546[(2)]);
var inst_13515 = (inst_13514__$1 == null);
var inst_13516 = cljs.core.not(inst_13515);
var state_13546__$1 = (function (){var statearr_13551 = state_13546;
(statearr_13551[(9)] = inst_13514__$1);

return statearr_13551;
})();
if(inst_13516){
var statearr_13552_14122 = state_13546__$1;
(statearr_13552_14122[(1)] = (5));

} else {
var statearr_13553_14134 = state_13546__$1;
(statearr_13553_14134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (15))){
var inst_13536 = (state_13546[(2)]);
var state_13546__$1 = state_13546;
var statearr_13554_14135 = state_13546__$1;
(statearr_13554_14135[(2)] = inst_13536);

(statearr_13554_14135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (13))){
var state_13546__$1 = state_13546;
var statearr_13555_14136 = state_13546__$1;
(statearr_13555_14136[(2)] = null);

(statearr_13555_14136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (6))){
var inst_13511 = (state_13546[(8)]);
var inst_13532 = (inst_13511 > (0));
var state_13546__$1 = state_13546;
if(cljs.core.truth_(inst_13532)){
var statearr_13556_14137 = state_13546__$1;
(statearr_13556_14137[(1)] = (12));

} else {
var statearr_13557_14138 = state_13546__$1;
(statearr_13557_14138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (3))){
var inst_13544 = (state_13546[(2)]);
var state_13546__$1 = state_13546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13546__$1,inst_13544);
} else {
if((state_val_13547 === (12))){
var inst_13510 = (state_13546[(7)]);
var inst_13534 = cljs.core.vec(inst_13510);
var state_13546__$1 = state_13546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13546__$1,(15),out,inst_13534);
} else {
if((state_val_13547 === (2))){
var state_13546__$1 = state_13546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13546__$1,(4),ch);
} else {
if((state_val_13547 === (11))){
var inst_13526 = (state_13546[(2)]);
var inst_13527 = (new Array(n));
var inst_13510 = inst_13527;
var inst_13511 = (0);
var state_13546__$1 = (function (){var statearr_13558 = state_13546;
(statearr_13558[(7)] = inst_13510);

(statearr_13558[(8)] = inst_13511);

(statearr_13558[(10)] = inst_13526);

return statearr_13558;
})();
var statearr_13559_14139 = state_13546__$1;
(statearr_13559_14139[(2)] = null);

(statearr_13559_14139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (9))){
var inst_13510 = (state_13546[(7)]);
var inst_13524 = cljs.core.vec(inst_13510);
var state_13546__$1 = state_13546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13546__$1,(11),out,inst_13524);
} else {
if((state_val_13547 === (5))){
var inst_13510 = (state_13546[(7)]);
var inst_13519 = (state_13546[(11)]);
var inst_13511 = (state_13546[(8)]);
var inst_13514 = (state_13546[(9)]);
var inst_13518 = (inst_13510[inst_13511] = inst_13514);
var inst_13519__$1 = (inst_13511 + (1));
var inst_13520 = (inst_13519__$1 < n);
var state_13546__$1 = (function (){var statearr_13560 = state_13546;
(statearr_13560[(11)] = inst_13519__$1);

(statearr_13560[(12)] = inst_13518);

return statearr_13560;
})();
if(cljs.core.truth_(inst_13520)){
var statearr_13561_14140 = state_13546__$1;
(statearr_13561_14140[(1)] = (8));

} else {
var statearr_13562_14141 = state_13546__$1;
(statearr_13562_14141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (14))){
var inst_13539 = (state_13546[(2)]);
var inst_13540 = cljs.core.async.close_BANG_(out);
var state_13546__$1 = (function (){var statearr_13564 = state_13546;
(statearr_13564[(13)] = inst_13539);

return statearr_13564;
})();
var statearr_13565_14147 = state_13546__$1;
(statearr_13565_14147[(2)] = inst_13540);

(statearr_13565_14147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (10))){
var inst_13530 = (state_13546[(2)]);
var state_13546__$1 = state_13546;
var statearr_13566_14149 = state_13546__$1;
(statearr_13566_14149[(2)] = inst_13530);

(statearr_13566_14149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (8))){
var inst_13510 = (state_13546[(7)]);
var inst_13519 = (state_13546[(11)]);
var tmp13563 = inst_13510;
var inst_13510__$1 = tmp13563;
var inst_13511 = inst_13519;
var state_13546__$1 = (function (){var statearr_13567 = state_13546;
(statearr_13567[(7)] = inst_13510__$1);

(statearr_13567[(8)] = inst_13511);

return statearr_13567;
})();
var statearr_13568_14151 = state_13546__$1;
(statearr_13568_14151[(2)] = null);

(statearr_13568_14151[(1)] = (2));


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
var statearr_13569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13569[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13569[(1)] = (1));

return statearr_13569;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13546){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13546);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13570){var ex__12075__auto__ = e13570;
var statearr_13571_14152 = state_13546;
(statearr_13571_14152[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13546[(4)]))){
var statearr_13572_14153 = state_13546;
(statearr_13572_14153[(1)] = cljs.core.first((state_13546[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14154 = state_13546;
state_13546 = G__14154;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13573 = f__12108__auto__();
(statearr_13573[(6)] = c__12107__auto___14119);

return statearr_13573;
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
var G__13575 = arguments.length;
switch (G__13575) {
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
var c__12107__auto___14156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13617){
var state_val_13618 = (state_13617[(1)]);
if((state_val_13618 === (7))){
var inst_13613 = (state_13617[(2)]);
var state_13617__$1 = state_13617;
var statearr_13619_14157 = state_13617__$1;
(statearr_13619_14157[(2)] = inst_13613);

(statearr_13619_14157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (1))){
var inst_13576 = [];
var inst_13577 = inst_13576;
var inst_13578 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13617__$1 = (function (){var statearr_13620 = state_13617;
(statearr_13620[(7)] = inst_13577);

(statearr_13620[(8)] = inst_13578);

return statearr_13620;
})();
var statearr_13621_14158 = state_13617__$1;
(statearr_13621_14158[(2)] = null);

(statearr_13621_14158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (4))){
var inst_13581 = (state_13617[(9)]);
var inst_13581__$1 = (state_13617[(2)]);
var inst_13582 = (inst_13581__$1 == null);
var inst_13583 = cljs.core.not(inst_13582);
var state_13617__$1 = (function (){var statearr_13622 = state_13617;
(statearr_13622[(9)] = inst_13581__$1);

return statearr_13622;
})();
if(inst_13583){
var statearr_13623_14159 = state_13617__$1;
(statearr_13623_14159[(1)] = (5));

} else {
var statearr_13624_14160 = state_13617__$1;
(statearr_13624_14160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (15))){
var inst_13607 = (state_13617[(2)]);
var state_13617__$1 = state_13617;
var statearr_13625_14161 = state_13617__$1;
(statearr_13625_14161[(2)] = inst_13607);

(statearr_13625_14161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (13))){
var state_13617__$1 = state_13617;
var statearr_13626_14162 = state_13617__$1;
(statearr_13626_14162[(2)] = null);

(statearr_13626_14162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (6))){
var inst_13577 = (state_13617[(7)]);
var inst_13602 = inst_13577.length;
var inst_13603 = (inst_13602 > (0));
var state_13617__$1 = state_13617;
if(cljs.core.truth_(inst_13603)){
var statearr_13627_14163 = state_13617__$1;
(statearr_13627_14163[(1)] = (12));

} else {
var statearr_13628_14164 = state_13617__$1;
(statearr_13628_14164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (3))){
var inst_13615 = (state_13617[(2)]);
var state_13617__$1 = state_13617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13617__$1,inst_13615);
} else {
if((state_val_13618 === (12))){
var inst_13577 = (state_13617[(7)]);
var inst_13605 = cljs.core.vec(inst_13577);
var state_13617__$1 = state_13617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13617__$1,(15),out,inst_13605);
} else {
if((state_val_13618 === (2))){
var state_13617__$1 = state_13617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13617__$1,(4),ch);
} else {
if((state_val_13618 === (11))){
var inst_13585 = (state_13617[(10)]);
var inst_13581 = (state_13617[(9)]);
var inst_13595 = (state_13617[(2)]);
var inst_13596 = [];
var inst_13597 = inst_13596.push(inst_13581);
var inst_13577 = inst_13596;
var inst_13578 = inst_13585;
var state_13617__$1 = (function (){var statearr_13629 = state_13617;
(statearr_13629[(7)] = inst_13577);

(statearr_13629[(11)] = inst_13597);

(statearr_13629[(12)] = inst_13595);

(statearr_13629[(8)] = inst_13578);

return statearr_13629;
})();
var statearr_13630_14190 = state_13617__$1;
(statearr_13630_14190[(2)] = null);

(statearr_13630_14190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (9))){
var inst_13577 = (state_13617[(7)]);
var inst_13593 = cljs.core.vec(inst_13577);
var state_13617__$1 = state_13617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13617__$1,(11),out,inst_13593);
} else {
if((state_val_13618 === (5))){
var inst_13585 = (state_13617[(10)]);
var inst_13581 = (state_13617[(9)]);
var inst_13578 = (state_13617[(8)]);
var inst_13585__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13581) : f.call(null,inst_13581));
var inst_13586 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13585__$1,inst_13578);
var inst_13587 = cljs.core.keyword_identical_QMARK_(inst_13578,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13588 = ((inst_13586) || (inst_13587));
var state_13617__$1 = (function (){var statearr_13631 = state_13617;
(statearr_13631[(10)] = inst_13585__$1);

return statearr_13631;
})();
if(cljs.core.truth_(inst_13588)){
var statearr_13632_14191 = state_13617__$1;
(statearr_13632_14191[(1)] = (8));

} else {
var statearr_13633_14192 = state_13617__$1;
(statearr_13633_14192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (14))){
var inst_13610 = (state_13617[(2)]);
var inst_13611 = cljs.core.async.close_BANG_(out);
var state_13617__$1 = (function (){var statearr_13635 = state_13617;
(statearr_13635[(13)] = inst_13610);

return statearr_13635;
})();
var statearr_13636_14193 = state_13617__$1;
(statearr_13636_14193[(2)] = inst_13611);

(statearr_13636_14193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (10))){
var inst_13600 = (state_13617[(2)]);
var state_13617__$1 = state_13617;
var statearr_13637_14194 = state_13617__$1;
(statearr_13637_14194[(2)] = inst_13600);

(statearr_13637_14194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13618 === (8))){
var inst_13577 = (state_13617[(7)]);
var inst_13585 = (state_13617[(10)]);
var inst_13581 = (state_13617[(9)]);
var inst_13590 = inst_13577.push(inst_13581);
var tmp13634 = inst_13577;
var inst_13577__$1 = tmp13634;
var inst_13578 = inst_13585;
var state_13617__$1 = (function (){var statearr_13638 = state_13617;
(statearr_13638[(7)] = inst_13577__$1);

(statearr_13638[(8)] = inst_13578);

(statearr_13638[(14)] = inst_13590);

return statearr_13638;
})();
var statearr_13639_14195 = state_13617__$1;
(statearr_13639_14195[(2)] = null);

(statearr_13639_14195[(1)] = (2));


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
var statearr_13640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13640[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13640[(1)] = (1));

return statearr_13640;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13617){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13617);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13641){var ex__12075__auto__ = e13641;
var statearr_13642_14196 = state_13617;
(statearr_13642_14196[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13617[(4)]))){
var statearr_13643_14197 = state_13617;
(statearr_13643_14197[(1)] = cljs.core.first((state_13617[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14198 = state_13617;
state_13617 = G__14198;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13644 = f__12108__auto__();
(statearr_13644[(6)] = c__12107__auto___14156);

return statearr_13644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
