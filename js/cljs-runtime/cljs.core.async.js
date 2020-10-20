goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11022 = arguments.length;
switch (G__11022) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11023 = (function (f,blockable,meta11024){
this.f = f;
this.blockable = blockable;
this.meta11024 = meta11024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11025,meta11024__$1){
var self__ = this;
var _11025__$1 = this;
return (new cljs.core.async.t_cljs$core$async11023(self__.f,self__.blockable,meta11024__$1));
}));

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11025){
var self__ = this;
var _11025__$1 = this;
return self__.meta11024;
}));

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11024","meta11024",-52135434,null)], null);
}));

(cljs.core.async.t_cljs$core$async11023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11023");

(cljs.core.async.t_cljs$core$async11023.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11023.
 */
cljs.core.async.__GT_t_cljs$core$async11023 = (function cljs$core$async$__GT_t_cljs$core$async11023(f__$1,blockable__$1,meta11024){
return (new cljs.core.async.t_cljs$core$async11023(f__$1,blockable__$1,meta11024));
});

}

return (new cljs.core.async.t_cljs$core$async11023(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11028 = arguments.length;
switch (G__11028) {
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
var G__11030 = arguments.length;
switch (G__11030) {
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
var G__11038 = arguments.length;
switch (G__11038) {
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
var val_12781 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12781) : fn1.call(null,val_12781));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12781) : fn1.call(null,val_12781));
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
var G__11041 = arguments.length;
switch (G__11041) {
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
var n__4613__auto___12785 = n;
var x_12786 = (0);
while(true){
if((x_12786 < n__4613__auto___12785)){
(a[x_12786] = x_12786);

var G__12787 = (x_12786 + (1));
x_12786 = G__12787;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11042 = (function (flag,meta11043){
this.flag = flag;
this.meta11043 = meta11043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11044,meta11043__$1){
var self__ = this;
var _11044__$1 = this;
return (new cljs.core.async.t_cljs$core$async11042(self__.flag,meta11043__$1));
}));

(cljs.core.async.t_cljs$core$async11042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11044){
var self__ = this;
var _11044__$1 = this;
return self__.meta11043;
}));

(cljs.core.async.t_cljs$core$async11042.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11043","meta11043",1865792108,null)], null);
}));

(cljs.core.async.t_cljs$core$async11042.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11042");

(cljs.core.async.t_cljs$core$async11042.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11042");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11042.
 */
cljs.core.async.__GT_t_cljs$core$async11042 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11042(flag__$1,meta11043){
return (new cljs.core.async.t_cljs$core$async11042(flag__$1,meta11043));
});

}

return (new cljs.core.async.t_cljs$core$async11042(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11047 = (function (flag,cb,meta11048){
this.flag = flag;
this.cb = cb;
this.meta11048 = meta11048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11049,meta11048__$1){
var self__ = this;
var _11049__$1 = this;
return (new cljs.core.async.t_cljs$core$async11047(self__.flag,self__.cb,meta11048__$1));
}));

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11049){
var self__ = this;
var _11049__$1 = this;
return self__.meta11048;
}));

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11048","meta11048",-2138760179,null)], null);
}));

(cljs.core.async.t_cljs$core$async11047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11047");

(cljs.core.async.t_cljs$core$async11047.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11047.
 */
cljs.core.async.__GT_t_cljs$core$async11047 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11047(flag__$1,cb__$1,meta11048){
return (new cljs.core.async.t_cljs$core$async11047(flag__$1,cb__$1,meta11048));
});

}

return (new cljs.core.async.t_cljs$core$async11047(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11050_SHARP_){
var G__11052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11050_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11052) : fret.call(null,G__11052));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11051_SHARP_){
var G__11053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11051_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11053) : fret.call(null,G__11053));
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
var G__12790 = (i + (1));
i = G__12790;
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
var len__4736__auto___12791 = arguments.length;
var i__4737__auto___12792 = (0);
while(true){
if((i__4737__auto___12792 < len__4736__auto___12791)){
args__4742__auto__.push((arguments[i__4737__auto___12792]));

var G__12793 = (i__4737__auto___12792 + (1));
i__4737__auto___12792 = G__12793;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11056){
var map__11057 = p__11056;
var map__11057__$1 = (((((!((map__11057 == null))))?(((((map__11057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11057):map__11057);
var opts = map__11057__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11054){
var G__11055 = cljs.core.first(seq11054);
var seq11054__$1 = cljs.core.next(seq11054);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11055,seq11054__$1);
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
var G__11061 = arguments.length;
switch (G__11061) {
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
var c__10958__auto___12798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11089){
var state_val_11090 = (state_11089[(1)]);
if((state_val_11090 === (7))){
var inst_11085 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
var statearr_11094_12799 = state_11089__$1;
(statearr_11094_12799[(2)] = inst_11085);

(statearr_11094_12799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (1))){
var state_11089__$1 = state_11089;
var statearr_11095_12800 = state_11089__$1;
(statearr_11095_12800[(2)] = null);

(statearr_11095_12800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (4))){
var inst_11067 = (state_11089[(7)]);
var inst_11067__$1 = (state_11089[(2)]);
var inst_11069 = (inst_11067__$1 == null);
var state_11089__$1 = (function (){var statearr_11096 = state_11089;
(statearr_11096[(7)] = inst_11067__$1);

return statearr_11096;
})();
if(cljs.core.truth_(inst_11069)){
var statearr_11102_12801 = state_11089__$1;
(statearr_11102_12801[(1)] = (5));

} else {
var statearr_11103_12802 = state_11089__$1;
(statearr_11103_12802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (13))){
var state_11089__$1 = state_11089;
var statearr_11104_12803 = state_11089__$1;
(statearr_11104_12803[(2)] = null);

(statearr_11104_12803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (6))){
var inst_11067 = (state_11089[(7)]);
var state_11089__$1 = state_11089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11089__$1,(11),to,inst_11067);
} else {
if((state_val_11090 === (3))){
var inst_11087 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11089__$1,inst_11087);
} else {
if((state_val_11090 === (12))){
var state_11089__$1 = state_11089;
var statearr_11105_12807 = state_11089__$1;
(statearr_11105_12807[(2)] = null);

(statearr_11105_12807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (2))){
var state_11089__$1 = state_11089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11089__$1,(4),from);
} else {
if((state_val_11090 === (11))){
var inst_11078 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
if(cljs.core.truth_(inst_11078)){
var statearr_11106_12808 = state_11089__$1;
(statearr_11106_12808[(1)] = (12));

} else {
var statearr_11107_12809 = state_11089__$1;
(statearr_11107_12809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (9))){
var state_11089__$1 = state_11089;
var statearr_11108_12810 = state_11089__$1;
(statearr_11108_12810[(2)] = null);

(statearr_11108_12810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (5))){
var state_11089__$1 = state_11089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11109_12811 = state_11089__$1;
(statearr_11109_12811[(1)] = (8));

} else {
var statearr_11110_12812 = state_11089__$1;
(statearr_11110_12812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (14))){
var inst_11083 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
var statearr_11112_12813 = state_11089__$1;
(statearr_11112_12813[(2)] = inst_11083);

(statearr_11112_12813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (10))){
var inst_11075 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
var statearr_11113_12814 = state_11089__$1;
(statearr_11113_12814[(2)] = inst_11075);

(statearr_11113_12814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (8))){
var inst_11072 = cljs.core.async.close_BANG_(to);
var state_11089__$1 = state_11089;
var statearr_11114_12815 = state_11089__$1;
(statearr_11114_12815[(2)] = inst_11072);

(statearr_11114_12815[(1)] = (10));


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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_11118 = [null,null,null,null,null,null,null,null];
(statearr_11118[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_11118[(1)] = (1));

return statearr_11118;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_11089){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11089);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11119){var ex__10907__auto__ = e11119;
var statearr_11121_12816 = state_11089;
(statearr_11121_12816[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11089[(4)]))){
var statearr_11122_12817 = state_11089;
(statearr_11122_12817[(1)] = cljs.core.first((state_11089[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12818 = state_11089;
state_11089 = G__12818;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_11089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_11089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11124 = f__10959__auto__();
(statearr_11124[(6)] = c__10958__auto___12798);

return statearr_11124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
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
var process = (function (p__11128){
var vec__11130 = p__11128;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11130,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11130,(1),null);
var job = vec__11130;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10958__auto___12819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11137){
var state_val_11138 = (state_11137[(1)]);
if((state_val_11138 === (1))){
var state_11137__$1 = state_11137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11137__$1,(2),res,v);
} else {
if((state_val_11138 === (2))){
var inst_11134 = (state_11137[(2)]);
var inst_11135 = cljs.core.async.close_BANG_(res);
var state_11137__$1 = (function (){var statearr_11140 = state_11137;
(statearr_11140[(7)] = inst_11134);

return statearr_11140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11137__$1,inst_11135);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0 = (function (){
var statearr_11142 = [null,null,null,null,null,null,null,null];
(statearr_11142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__);

(statearr_11142[(1)] = (1));

return statearr_11142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1 = (function (state_11137){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11137);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11143){var ex__10907__auto__ = e11143;
var statearr_11144_12832 = state_11137;
(statearr_11144_12832[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11137[(4)]))){
var statearr_11145_12834 = state_11137;
(statearr_11145_12834[(1)] = cljs.core.first((state_11137[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12836 = state_11137;
state_11137 = G__12836;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = function(state_11137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1.call(this,state_11137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11146 = f__10959__auto__();
(statearr_11146[(6)] = c__10958__auto___12819);

return statearr_11146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11147){
var vec__11148 = p__11147;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11148,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11148,(1),null);
var job = vec__11148;
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
var n__4613__auto___12841 = n;
var __12842 = (0);
while(true){
if((__12842 < n__4613__auto___12841)){
var G__11152_12843 = type;
var G__11152_12844__$1 = (((G__11152_12843 instanceof cljs.core.Keyword))?G__11152_12843.fqn:null);
switch (G__11152_12844__$1) {
case "compute":
var c__10958__auto___12846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12842,c__10958__auto___12846,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async){
return (function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = ((function (__12842,c__10958__auto___12846,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async){
return (function (state_11166){
var state_val_11167 = (state_11166[(1)]);
if((state_val_11167 === (1))){
var state_11166__$1 = state_11166;
var statearr_11168_12862 = state_11166__$1;
(statearr_11168_12862[(2)] = null);

(statearr_11168_12862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11167 === (2))){
var state_11166__$1 = state_11166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11166__$1,(4),jobs);
} else {
if((state_val_11167 === (3))){
var inst_11164 = (state_11166[(2)]);
var state_11166__$1 = state_11166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11166__$1,inst_11164);
} else {
if((state_val_11167 === (4))){
var inst_11156 = (state_11166[(2)]);
var inst_11157 = process(inst_11156);
var state_11166__$1 = state_11166;
if(cljs.core.truth_(inst_11157)){
var statearr_11169_12863 = state_11166__$1;
(statearr_11169_12863[(1)] = (5));

} else {
var statearr_11170_12864 = state_11166__$1;
(statearr_11170_12864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11167 === (5))){
var state_11166__$1 = state_11166;
var statearr_11171_12865 = state_11166__$1;
(statearr_11171_12865[(2)] = null);

(statearr_11171_12865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11167 === (6))){
var state_11166__$1 = state_11166;
var statearr_11172_12866 = state_11166__$1;
(statearr_11172_12866[(2)] = null);

(statearr_11172_12866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11167 === (7))){
var inst_11162 = (state_11166[(2)]);
var state_11166__$1 = state_11166;
var statearr_11173_12867 = state_11166__$1;
(statearr_11173_12867[(2)] = inst_11162);

(statearr_11173_12867[(1)] = (3));


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
});})(__12842,c__10958__auto___12846,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async))
;
return ((function (__12842,switch__10903__auto__,c__10958__auto___12846,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0 = (function (){
var statearr_11174 = [null,null,null,null,null,null,null];
(statearr_11174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__);

(statearr_11174[(1)] = (1));

return statearr_11174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1 = (function (state_11166){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11166);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11175){var ex__10907__auto__ = e11175;
var statearr_11176_12868 = state_11166;
(statearr_11176_12868[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11166[(4)]))){
var statearr_11177_12869 = state_11166;
(statearr_11177_12869[(1)] = cljs.core.first((state_11166[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12870 = state_11166;
state_11166 = G__12870;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = function(state_11166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1.call(this,state_11166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__;
})()
;})(__12842,switch__10903__auto__,c__10958__auto___12846,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async))
})();
var state__10960__auto__ = (function (){var statearr_11186 = f__10959__auto__();
(statearr_11186[(6)] = c__10958__auto___12846);

return statearr_11186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
});})(__12842,c__10958__auto___12846,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async))
);


break;
case "async":
var c__10958__auto___12876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12842,c__10958__auto___12876,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async){
return (function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = ((function (__12842,c__10958__auto___12876,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async){
return (function (state_11203){
var state_val_11204 = (state_11203[(1)]);
if((state_val_11204 === (1))){
var state_11203__$1 = state_11203;
var statearr_11205_12880 = state_11203__$1;
(statearr_11205_12880[(2)] = null);

(statearr_11205_12880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (2))){
var state_11203__$1 = state_11203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11203__$1,(4),jobs);
} else {
if((state_val_11204 === (3))){
var inst_11201 = (state_11203[(2)]);
var state_11203__$1 = state_11203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11203__$1,inst_11201);
} else {
if((state_val_11204 === (4))){
var inst_11189 = (state_11203[(2)]);
var inst_11190 = async(inst_11189);
var state_11203__$1 = state_11203;
if(cljs.core.truth_(inst_11190)){
var statearr_11208_12901 = state_11203__$1;
(statearr_11208_12901[(1)] = (5));

} else {
var statearr_11209_12902 = state_11203__$1;
(statearr_11209_12902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (5))){
var state_11203__$1 = state_11203;
var statearr_11211_12903 = state_11203__$1;
(statearr_11211_12903[(2)] = null);

(statearr_11211_12903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (6))){
var state_11203__$1 = state_11203;
var statearr_11212_12904 = state_11203__$1;
(statearr_11212_12904[(2)] = null);

(statearr_11212_12904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (7))){
var inst_11199 = (state_11203[(2)]);
var state_11203__$1 = state_11203;
var statearr_11213_12905 = state_11203__$1;
(statearr_11213_12905[(2)] = inst_11199);

(statearr_11213_12905[(1)] = (3));


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
});})(__12842,c__10958__auto___12876,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async))
;
return ((function (__12842,switch__10903__auto__,c__10958__auto___12876,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0 = (function (){
var statearr_11214 = [null,null,null,null,null,null,null];
(statearr_11214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__);

(statearr_11214[(1)] = (1));

return statearr_11214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1 = (function (state_11203){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11203);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11215){var ex__10907__auto__ = e11215;
var statearr_11216_12906 = state_11203;
(statearr_11216_12906[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11203[(4)]))){
var statearr_11217_12907 = state_11203;
(statearr_11217_12907[(1)] = cljs.core.first((state_11203[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12908 = state_11203;
state_11203 = G__12908;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = function(state_11203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1.call(this,state_11203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__;
})()
;})(__12842,switch__10903__auto__,c__10958__auto___12876,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async))
})();
var state__10960__auto__ = (function (){var statearr_11218 = f__10959__auto__();
(statearr_11218[(6)] = c__10958__auto___12876);

return statearr_11218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
});})(__12842,c__10958__auto___12876,G__11152_12843,G__11152_12844__$1,n__4613__auto___12841,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11152_12844__$1)].join('')));

}

var G__12910 = (__12842 + (1));
__12842 = G__12910;
continue;
} else {
}
break;
}

var c__10958__auto___12911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11240){
var state_val_11241 = (state_11240[(1)]);
if((state_val_11241 === (7))){
var inst_11236 = (state_11240[(2)]);
var state_11240__$1 = state_11240;
var statearr_11248_12912 = state_11240__$1;
(statearr_11248_12912[(2)] = inst_11236);

(statearr_11248_12912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11241 === (1))){
var state_11240__$1 = state_11240;
var statearr_11249_12913 = state_11240__$1;
(statearr_11249_12913[(2)] = null);

(statearr_11249_12913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11241 === (4))){
var inst_11221 = (state_11240[(7)]);
var inst_11221__$1 = (state_11240[(2)]);
var inst_11222 = (inst_11221__$1 == null);
var state_11240__$1 = (function (){var statearr_11250 = state_11240;
(statearr_11250[(7)] = inst_11221__$1);

return statearr_11250;
})();
if(cljs.core.truth_(inst_11222)){
var statearr_11251_12929 = state_11240__$1;
(statearr_11251_12929[(1)] = (5));

} else {
var statearr_11252_12930 = state_11240__$1;
(statearr_11252_12930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11241 === (6))){
var inst_11226 = (state_11240[(8)]);
var inst_11221 = (state_11240[(7)]);
var inst_11226__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11227 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11228 = [inst_11221,inst_11226__$1];
var inst_11229 = (new cljs.core.PersistentVector(null,2,(5),inst_11227,inst_11228,null));
var state_11240__$1 = (function (){var statearr_11254 = state_11240;
(statearr_11254[(8)] = inst_11226__$1);

return statearr_11254;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11240__$1,(8),jobs,inst_11229);
} else {
if((state_val_11241 === (3))){
var inst_11238 = (state_11240[(2)]);
var state_11240__$1 = state_11240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11240__$1,inst_11238);
} else {
if((state_val_11241 === (2))){
var state_11240__$1 = state_11240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11240__$1,(4),from);
} else {
if((state_val_11241 === (9))){
var inst_11233 = (state_11240[(2)]);
var state_11240__$1 = (function (){var statearr_11255 = state_11240;
(statearr_11255[(9)] = inst_11233);

return statearr_11255;
})();
var statearr_11256_12935 = state_11240__$1;
(statearr_11256_12935[(2)] = null);

(statearr_11256_12935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11241 === (5))){
var inst_11224 = cljs.core.async.close_BANG_(jobs);
var state_11240__$1 = state_11240;
var statearr_11257_12936 = state_11240__$1;
(statearr_11257_12936[(2)] = inst_11224);

(statearr_11257_12936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11241 === (8))){
var inst_11226 = (state_11240[(8)]);
var inst_11231 = (state_11240[(2)]);
var state_11240__$1 = (function (){var statearr_11258 = state_11240;
(statearr_11258[(10)] = inst_11231);

return statearr_11258;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11240__$1,(9),results,inst_11226);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0 = (function (){
var statearr_11274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__);

(statearr_11274[(1)] = (1));

return statearr_11274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1 = (function (state_11240){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11240);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11275){var ex__10907__auto__ = e11275;
var statearr_11276_12940 = state_11240;
(statearr_11276_12940[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11240[(4)]))){
var statearr_11277_12941 = state_11240;
(statearr_11277_12941[(1)] = cljs.core.first((state_11240[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12944 = state_11240;
state_11240 = G__12944;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = function(state_11240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1.call(this,state_11240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11278 = f__10959__auto__();
(statearr_11278[(6)] = c__10958__auto___12911);

return statearr_11278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));


var c__10958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11318){
var state_val_11319 = (state_11318[(1)]);
if((state_val_11319 === (7))){
var inst_11314 = (state_11318[(2)]);
var state_11318__$1 = state_11318;
var statearr_11320_12948 = state_11318__$1;
(statearr_11320_12948[(2)] = inst_11314);

(statearr_11320_12948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (20))){
var state_11318__$1 = state_11318;
var statearr_11321_12949 = state_11318__$1;
(statearr_11321_12949[(2)] = null);

(statearr_11321_12949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (1))){
var state_11318__$1 = state_11318;
var statearr_11322_12959 = state_11318__$1;
(statearr_11322_12959[(2)] = null);

(statearr_11322_12959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (4))){
var inst_11281 = (state_11318[(7)]);
var inst_11281__$1 = (state_11318[(2)]);
var inst_11282 = (inst_11281__$1 == null);
var state_11318__$1 = (function (){var statearr_11323 = state_11318;
(statearr_11323[(7)] = inst_11281__$1);

return statearr_11323;
})();
if(cljs.core.truth_(inst_11282)){
var statearr_11324_12966 = state_11318__$1;
(statearr_11324_12966[(1)] = (5));

} else {
var statearr_11325_12967 = state_11318__$1;
(statearr_11325_12967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (15))){
var inst_11296 = (state_11318[(8)]);
var state_11318__$1 = state_11318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11318__$1,(18),to,inst_11296);
} else {
if((state_val_11319 === (21))){
var inst_11309 = (state_11318[(2)]);
var state_11318__$1 = state_11318;
var statearr_11326_12971 = state_11318__$1;
(statearr_11326_12971[(2)] = inst_11309);

(statearr_11326_12971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (13))){
var inst_11311 = (state_11318[(2)]);
var state_11318__$1 = (function (){var statearr_11327 = state_11318;
(statearr_11327[(9)] = inst_11311);

return statearr_11327;
})();
var statearr_11328_12972 = state_11318__$1;
(statearr_11328_12972[(2)] = null);

(statearr_11328_12972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (6))){
var inst_11281 = (state_11318[(7)]);
var state_11318__$1 = state_11318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11318__$1,(11),inst_11281);
} else {
if((state_val_11319 === (17))){
var inst_11304 = (state_11318[(2)]);
var state_11318__$1 = state_11318;
if(cljs.core.truth_(inst_11304)){
var statearr_11329_12973 = state_11318__$1;
(statearr_11329_12973[(1)] = (19));

} else {
var statearr_11330_12974 = state_11318__$1;
(statearr_11330_12974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (3))){
var inst_11316 = (state_11318[(2)]);
var state_11318__$1 = state_11318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11318__$1,inst_11316);
} else {
if((state_val_11319 === (12))){
var inst_11293 = (state_11318[(10)]);
var state_11318__$1 = state_11318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11318__$1,(14),inst_11293);
} else {
if((state_val_11319 === (2))){
var state_11318__$1 = state_11318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11318__$1,(4),results);
} else {
if((state_val_11319 === (19))){
var state_11318__$1 = state_11318;
var statearr_11335_12975 = state_11318__$1;
(statearr_11335_12975[(2)] = null);

(statearr_11335_12975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (11))){
var inst_11293 = (state_11318[(2)]);
var state_11318__$1 = (function (){var statearr_11336 = state_11318;
(statearr_11336[(10)] = inst_11293);

return statearr_11336;
})();
var statearr_11337_12976 = state_11318__$1;
(statearr_11337_12976[(2)] = null);

(statearr_11337_12976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (9))){
var state_11318__$1 = state_11318;
var statearr_11338_12977 = state_11318__$1;
(statearr_11338_12977[(2)] = null);

(statearr_11338_12977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (5))){
var state_11318__$1 = state_11318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11339_12978 = state_11318__$1;
(statearr_11339_12978[(1)] = (8));

} else {
var statearr_11340_12979 = state_11318__$1;
(statearr_11340_12979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (14))){
var inst_11296 = (state_11318[(8)]);
var inst_11296__$1 = (state_11318[(2)]);
var inst_11297 = (inst_11296__$1 == null);
var inst_11298 = cljs.core.not(inst_11297);
var state_11318__$1 = (function (){var statearr_11341 = state_11318;
(statearr_11341[(8)] = inst_11296__$1);

return statearr_11341;
})();
if(inst_11298){
var statearr_11342_12980 = state_11318__$1;
(statearr_11342_12980[(1)] = (15));

} else {
var statearr_11343_12981 = state_11318__$1;
(statearr_11343_12981[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (16))){
var state_11318__$1 = state_11318;
var statearr_11344_12982 = state_11318__$1;
(statearr_11344_12982[(2)] = false);

(statearr_11344_12982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (10))){
var inst_11290 = (state_11318[(2)]);
var state_11318__$1 = state_11318;
var statearr_11345_12983 = state_11318__$1;
(statearr_11345_12983[(2)] = inst_11290);

(statearr_11345_12983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (18))){
var inst_11301 = (state_11318[(2)]);
var state_11318__$1 = state_11318;
var statearr_11346_12984 = state_11318__$1;
(statearr_11346_12984[(2)] = inst_11301);

(statearr_11346_12984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11319 === (8))){
var inst_11285 = cljs.core.async.close_BANG_(to);
var state_11318__$1 = state_11318;
var statearr_11347_12985 = state_11318__$1;
(statearr_11347_12985[(2)] = inst_11285);

(statearr_11347_12985[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0 = (function (){
var statearr_11348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__);

(statearr_11348[(1)] = (1));

return statearr_11348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1 = (function (state_11318){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11318);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11349){var ex__10907__auto__ = e11349;
var statearr_11350_12986 = state_11318;
(statearr_11350_12986[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11318[(4)]))){
var statearr_11351_12987 = state_11318;
(statearr_11351_12987[(1)] = cljs.core.first((state_11318[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12988 = state_11318;
state_11318 = G__12988;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__ = function(state_11318){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1.call(this,state_11318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11352 = f__10959__auto__();
(statearr_11352[(6)] = c__10958__auto__);

return statearr_11352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));

return c__10958__auto__;
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
var G__11354 = arguments.length;
switch (G__11354) {
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
var G__11359 = arguments.length;
switch (G__11359) {
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
var G__11361 = arguments.length;
switch (G__11361) {
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
var c__10958__auto___12992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11387){
var state_val_11388 = (state_11387[(1)]);
if((state_val_11388 === (7))){
var inst_11383 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
var statearr_11389_12993 = state_11387__$1;
(statearr_11389_12993[(2)] = inst_11383);

(statearr_11389_12993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (1))){
var state_11387__$1 = state_11387;
var statearr_11390_12994 = state_11387__$1;
(statearr_11390_12994[(2)] = null);

(statearr_11390_12994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (4))){
var inst_11364 = (state_11387[(7)]);
var inst_11364__$1 = (state_11387[(2)]);
var inst_11365 = (inst_11364__$1 == null);
var state_11387__$1 = (function (){var statearr_11391 = state_11387;
(statearr_11391[(7)] = inst_11364__$1);

return statearr_11391;
})();
if(cljs.core.truth_(inst_11365)){
var statearr_11392_12999 = state_11387__$1;
(statearr_11392_12999[(1)] = (5));

} else {
var statearr_11393_13000 = state_11387__$1;
(statearr_11393_13000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (13))){
var state_11387__$1 = state_11387;
var statearr_11394_13001 = state_11387__$1;
(statearr_11394_13001[(2)] = null);

(statearr_11394_13001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (6))){
var inst_11364 = (state_11387[(7)]);
var inst_11370 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11364) : p.call(null,inst_11364));
var state_11387__$1 = state_11387;
if(cljs.core.truth_(inst_11370)){
var statearr_11395_13002 = state_11387__$1;
(statearr_11395_13002[(1)] = (9));

} else {
var statearr_11396_13003 = state_11387__$1;
(statearr_11396_13003[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (3))){
var inst_11385 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11387__$1,inst_11385);
} else {
if((state_val_11388 === (12))){
var state_11387__$1 = state_11387;
var statearr_11398_13004 = state_11387__$1;
(statearr_11398_13004[(2)] = null);

(statearr_11398_13004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (2))){
var state_11387__$1 = state_11387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11387__$1,(4),ch);
} else {
if((state_val_11388 === (11))){
var inst_11364 = (state_11387[(7)]);
var inst_11374 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11387__$1,(8),inst_11374,inst_11364);
} else {
if((state_val_11388 === (9))){
var state_11387__$1 = state_11387;
var statearr_11399_13005 = state_11387__$1;
(statearr_11399_13005[(2)] = tc);

(statearr_11399_13005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (5))){
var inst_11367 = cljs.core.async.close_BANG_(tc);
var inst_11368 = cljs.core.async.close_BANG_(fc);
var state_11387__$1 = (function (){var statearr_11400 = state_11387;
(statearr_11400[(8)] = inst_11367);

return statearr_11400;
})();
var statearr_11401_13006 = state_11387__$1;
(statearr_11401_13006[(2)] = inst_11368);

(statearr_11401_13006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (14))){
var inst_11381 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
var statearr_11402_13007 = state_11387__$1;
(statearr_11402_13007[(2)] = inst_11381);

(statearr_11402_13007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (10))){
var state_11387__$1 = state_11387;
var statearr_11403_13008 = state_11387__$1;
(statearr_11403_13008[(2)] = fc);

(statearr_11403_13008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (8))){
var inst_11376 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
if(cljs.core.truth_(inst_11376)){
var statearr_11406_13009 = state_11387__$1;
(statearr_11406_13009[(1)] = (12));

} else {
var statearr_11407_13011 = state_11387__$1;
(statearr_11407_13011[(1)] = (13));

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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_11408 = [null,null,null,null,null,null,null,null,null];
(statearr_11408[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_11408[(1)] = (1));

return statearr_11408;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_11387){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11387);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11409){var ex__10907__auto__ = e11409;
var statearr_11410_13013 = state_11387;
(statearr_11410_13013[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11387[(4)]))){
var statearr_11411_13014 = state_11387;
(statearr_11411_13014[(1)] = cljs.core.first((state_11387[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13015 = state_11387;
state_11387 = G__13015;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_11387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_11387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11412 = f__10959__auto__();
(statearr_11412[(6)] = c__10958__auto___12992);

return statearr_11412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
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
var c__10958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11434){
var state_val_11435 = (state_11434[(1)]);
if((state_val_11435 === (7))){
var inst_11430 = (state_11434[(2)]);
var state_11434__$1 = state_11434;
var statearr_11436_13017 = state_11434__$1;
(statearr_11436_13017[(2)] = inst_11430);

(statearr_11436_13017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (1))){
var inst_11413 = init;
var inst_11414 = inst_11413;
var state_11434__$1 = (function (){var statearr_11437 = state_11434;
(statearr_11437[(7)] = inst_11414);

return statearr_11437;
})();
var statearr_11438_13018 = state_11434__$1;
(statearr_11438_13018[(2)] = null);

(statearr_11438_13018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (4))){
var inst_11417 = (state_11434[(8)]);
var inst_11417__$1 = (state_11434[(2)]);
var inst_11418 = (inst_11417__$1 == null);
var state_11434__$1 = (function (){var statearr_11439 = state_11434;
(statearr_11439[(8)] = inst_11417__$1);

return statearr_11439;
})();
if(cljs.core.truth_(inst_11418)){
var statearr_11440_13020 = state_11434__$1;
(statearr_11440_13020[(1)] = (5));

} else {
var statearr_11441_13021 = state_11434__$1;
(statearr_11441_13021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (6))){
var inst_11414 = (state_11434[(7)]);
var inst_11421 = (state_11434[(9)]);
var inst_11417 = (state_11434[(8)]);
var inst_11421__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11414,inst_11417) : f.call(null,inst_11414,inst_11417));
var inst_11422 = cljs.core.reduced_QMARK_(inst_11421__$1);
var state_11434__$1 = (function (){var statearr_11442 = state_11434;
(statearr_11442[(9)] = inst_11421__$1);

return statearr_11442;
})();
if(inst_11422){
var statearr_11443_13029 = state_11434__$1;
(statearr_11443_13029[(1)] = (8));

} else {
var statearr_11444_13030 = state_11434__$1;
(statearr_11444_13030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (3))){
var inst_11432 = (state_11434[(2)]);
var state_11434__$1 = state_11434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11434__$1,inst_11432);
} else {
if((state_val_11435 === (2))){
var state_11434__$1 = state_11434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11434__$1,(4),ch);
} else {
if((state_val_11435 === (9))){
var inst_11421 = (state_11434[(9)]);
var inst_11414 = inst_11421;
var state_11434__$1 = (function (){var statearr_11445 = state_11434;
(statearr_11445[(7)] = inst_11414);

return statearr_11445;
})();
var statearr_11446_13032 = state_11434__$1;
(statearr_11446_13032[(2)] = null);

(statearr_11446_13032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (5))){
var inst_11414 = (state_11434[(7)]);
var state_11434__$1 = state_11434;
var statearr_11447_13033 = state_11434__$1;
(statearr_11447_13033[(2)] = inst_11414);

(statearr_11447_13033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (10))){
var inst_11428 = (state_11434[(2)]);
var state_11434__$1 = state_11434;
var statearr_11448_13034 = state_11434__$1;
(statearr_11448_13034[(2)] = inst_11428);

(statearr_11448_13034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (8))){
var inst_11421 = (state_11434[(9)]);
var inst_11424 = cljs.core.deref(inst_11421);
var state_11434__$1 = state_11434;
var statearr_11449_13036 = state_11434__$1;
(statearr_11449_13036[(2)] = inst_11424);

(statearr_11449_13036[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10904__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10904__auto____0 = (function (){
var statearr_11450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11450[(0)] = cljs$core$async$reduce_$_state_machine__10904__auto__);

(statearr_11450[(1)] = (1));

return statearr_11450;
});
var cljs$core$async$reduce_$_state_machine__10904__auto____1 = (function (state_11434){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11434);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11451){var ex__10907__auto__ = e11451;
var statearr_11452_13037 = state_11434;
(statearr_11452_13037[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11434[(4)]))){
var statearr_11453_13039 = state_11434;
(statearr_11453_13039[(1)] = cljs.core.first((state_11434[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13040 = state_11434;
state_11434 = G__13040;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10904__auto__ = function(state_11434){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10904__auto____1.call(this,state_11434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10904__auto____0;
cljs$core$async$reduce_$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10904__auto____1;
return cljs$core$async$reduce_$_state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11454 = f__10959__auto__();
(statearr_11454[(6)] = c__10958__auto__);

return statearr_11454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));

return c__10958__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11460){
var state_val_11461 = (state_11460[(1)]);
if((state_val_11461 === (1))){
var inst_11455 = cljs.core.async.reduce(f__$1,init,ch);
var state_11460__$1 = state_11460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11460__$1,(2),inst_11455);
} else {
if((state_val_11461 === (2))){
var inst_11457 = (state_11460[(2)]);
var inst_11458 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11457) : f__$1.call(null,inst_11457));
var state_11460__$1 = state_11460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11460__$1,inst_11458);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10904__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10904__auto____0 = (function (){
var statearr_11462 = [null,null,null,null,null,null,null];
(statearr_11462[(0)] = cljs$core$async$transduce_$_state_machine__10904__auto__);

(statearr_11462[(1)] = (1));

return statearr_11462;
});
var cljs$core$async$transduce_$_state_machine__10904__auto____1 = (function (state_11460){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11460);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11463){var ex__10907__auto__ = e11463;
var statearr_11464_13044 = state_11460;
(statearr_11464_13044[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11460[(4)]))){
var statearr_11465_13045 = state_11460;
(statearr_11465_13045[(1)] = cljs.core.first((state_11460[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13046 = state_11460;
state_11460 = G__13046;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10904__auto__ = function(state_11460){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10904__auto____1.call(this,state_11460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10904__auto____0;
cljs$core$async$transduce_$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10904__auto____1;
return cljs$core$async$transduce_$_state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11466 = f__10959__auto__();
(statearr_11466[(6)] = c__10958__auto__);

return statearr_11466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));

return c__10958__auto__;
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
var G__11468 = arguments.length;
switch (G__11468) {
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
var c__10958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11493){
var state_val_11494 = (state_11493[(1)]);
if((state_val_11494 === (7))){
var inst_11475 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
var statearr_11495_13048 = state_11493__$1;
(statearr_11495_13048[(2)] = inst_11475);

(statearr_11495_13048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (1))){
var inst_11469 = cljs.core.seq(coll);
var inst_11470 = inst_11469;
var state_11493__$1 = (function (){var statearr_11496 = state_11493;
(statearr_11496[(7)] = inst_11470);

return statearr_11496;
})();
var statearr_11497_13049 = state_11493__$1;
(statearr_11497_13049[(2)] = null);

(statearr_11497_13049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (4))){
var inst_11470 = (state_11493[(7)]);
var inst_11473 = cljs.core.first(inst_11470);
var state_11493__$1 = state_11493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11493__$1,(7),ch,inst_11473);
} else {
if((state_val_11494 === (13))){
var inst_11487 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
var statearr_11498_13050 = state_11493__$1;
(statearr_11498_13050[(2)] = inst_11487);

(statearr_11498_13050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (6))){
var inst_11478 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
if(cljs.core.truth_(inst_11478)){
var statearr_11499_13051 = state_11493__$1;
(statearr_11499_13051[(1)] = (8));

} else {
var statearr_11500_13052 = state_11493__$1;
(statearr_11500_13052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (3))){
var inst_11491 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11493__$1,inst_11491);
} else {
if((state_val_11494 === (12))){
var state_11493__$1 = state_11493;
var statearr_11501_13053 = state_11493__$1;
(statearr_11501_13053[(2)] = null);

(statearr_11501_13053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (2))){
var inst_11470 = (state_11493[(7)]);
var state_11493__$1 = state_11493;
if(cljs.core.truth_(inst_11470)){
var statearr_11502_13054 = state_11493__$1;
(statearr_11502_13054[(1)] = (4));

} else {
var statearr_11503_13055 = state_11493__$1;
(statearr_11503_13055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (11))){
var inst_11484 = cljs.core.async.close_BANG_(ch);
var state_11493__$1 = state_11493;
var statearr_11504_13056 = state_11493__$1;
(statearr_11504_13056[(2)] = inst_11484);

(statearr_11504_13056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (9))){
var state_11493__$1 = state_11493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11505_13057 = state_11493__$1;
(statearr_11505_13057[(1)] = (11));

} else {
var statearr_11506_13058 = state_11493__$1;
(statearr_11506_13058[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (5))){
var inst_11470 = (state_11493[(7)]);
var state_11493__$1 = state_11493;
var statearr_11509_13059 = state_11493__$1;
(statearr_11509_13059[(2)] = inst_11470);

(statearr_11509_13059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (10))){
var inst_11489 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
var statearr_11512_13060 = state_11493__$1;
(statearr_11512_13060[(2)] = inst_11489);

(statearr_11512_13060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (8))){
var inst_11470 = (state_11493[(7)]);
var inst_11480 = cljs.core.next(inst_11470);
var inst_11470__$1 = inst_11480;
var state_11493__$1 = (function (){var statearr_11513 = state_11493;
(statearr_11513[(7)] = inst_11470__$1);

return statearr_11513;
})();
var statearr_11514_13061 = state_11493__$1;
(statearr_11514_13061[(2)] = null);

(statearr_11514_13061[(1)] = (2));


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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_11517 = [null,null,null,null,null,null,null,null];
(statearr_11517[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_11517[(1)] = (1));

return statearr_11517;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_11493){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11493);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11518){var ex__10907__auto__ = e11518;
var statearr_11519_13062 = state_11493;
(statearr_11519_13062[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11493[(4)]))){
var statearr_11520_13063 = state_11493;
(statearr_11520_13063[(1)] = cljs.core.first((state_11493[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13064 = state_11493;
state_11493 = G__13064;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_11493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_11493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11521 = f__10959__auto__();
(statearr_11521[(6)] = c__10958__auto__);

return statearr_11521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));

return c__10958__auto__;
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
var G__11523 = arguments.length;
switch (G__11523) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13066 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13066(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13067 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13067(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13068 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13068(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13082 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13082(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11530 = (function (ch,cs,meta11531){
this.ch = ch;
this.cs = cs;
this.meta11531 = meta11531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11532,meta11531__$1){
var self__ = this;
var _11532__$1 = this;
return (new cljs.core.async.t_cljs$core$async11530(self__.ch,self__.cs,meta11531__$1));
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11532){
var self__ = this;
var _11532__$1 = this;
return self__.meta11531;
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11531","meta11531",856556692,null)], null);
}));

(cljs.core.async.t_cljs$core$async11530.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11530");

(cljs.core.async.t_cljs$core$async11530.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11530");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11530.
 */
cljs.core.async.__GT_t_cljs$core$async11530 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11530(ch__$1,cs__$1,meta11531){
return (new cljs.core.async.t_cljs$core$async11530(ch__$1,cs__$1,meta11531));
});

}

return (new cljs.core.async.t_cljs$core$async11530(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10958__auto___13117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11665){
var state_val_11666 = (state_11665[(1)]);
if((state_val_11666 === (7))){
var inst_11661 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11667_13118 = state_11665__$1;
(statearr_11667_13118[(2)] = inst_11661);

(statearr_11667_13118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (20))){
var inst_11566 = (state_11665[(7)]);
var inst_11578 = cljs.core.first(inst_11566);
var inst_11579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11578,(0),null);
var inst_11580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11578,(1),null);
var state_11665__$1 = (function (){var statearr_11668 = state_11665;
(statearr_11668[(8)] = inst_11579);

return statearr_11668;
})();
if(cljs.core.truth_(inst_11580)){
var statearr_11669_13119 = state_11665__$1;
(statearr_11669_13119[(1)] = (22));

} else {
var statearr_11670_13120 = state_11665__$1;
(statearr_11670_13120[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (27))){
var inst_11535 = (state_11665[(9)]);
var inst_11615 = (state_11665[(10)]);
var inst_11610 = (state_11665[(11)]);
var inst_11608 = (state_11665[(12)]);
var inst_11615__$1 = cljs.core._nth(inst_11608,inst_11610);
var inst_11616 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11615__$1,inst_11535,done);
var state_11665__$1 = (function (){var statearr_11671 = state_11665;
(statearr_11671[(10)] = inst_11615__$1);

return statearr_11671;
})();
if(cljs.core.truth_(inst_11616)){
var statearr_11672_13121 = state_11665__$1;
(statearr_11672_13121[(1)] = (30));

} else {
var statearr_11673_13122 = state_11665__$1;
(statearr_11673_13122[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (1))){
var state_11665__$1 = state_11665;
var statearr_11674_13123 = state_11665__$1;
(statearr_11674_13123[(2)] = null);

(statearr_11674_13123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (24))){
var inst_11566 = (state_11665[(7)]);
var inst_11585 = (state_11665[(2)]);
var inst_11586 = cljs.core.next(inst_11566);
var inst_11544 = inst_11586;
var inst_11545 = null;
var inst_11546 = (0);
var inst_11547 = (0);
var state_11665__$1 = (function (){var statearr_11681 = state_11665;
(statearr_11681[(13)] = inst_11546);

(statearr_11681[(14)] = inst_11585);

(statearr_11681[(15)] = inst_11545);

(statearr_11681[(16)] = inst_11547);

(statearr_11681[(17)] = inst_11544);

return statearr_11681;
})();
var statearr_11682_13124 = state_11665__$1;
(statearr_11682_13124[(2)] = null);

(statearr_11682_13124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (39))){
var state_11665__$1 = state_11665;
var statearr_11686_13125 = state_11665__$1;
(statearr_11686_13125[(2)] = null);

(statearr_11686_13125[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (4))){
var inst_11535 = (state_11665[(9)]);
var inst_11535__$1 = (state_11665[(2)]);
var inst_11536 = (inst_11535__$1 == null);
var state_11665__$1 = (function (){var statearr_11687 = state_11665;
(statearr_11687[(9)] = inst_11535__$1);

return statearr_11687;
})();
if(cljs.core.truth_(inst_11536)){
var statearr_11688_13126 = state_11665__$1;
(statearr_11688_13126[(1)] = (5));

} else {
var statearr_11689_13127 = state_11665__$1;
(statearr_11689_13127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (15))){
var inst_11546 = (state_11665[(13)]);
var inst_11545 = (state_11665[(15)]);
var inst_11547 = (state_11665[(16)]);
var inst_11544 = (state_11665[(17)]);
var inst_11562 = (state_11665[(2)]);
var inst_11563 = (inst_11547 + (1));
var tmp11683 = inst_11546;
var tmp11684 = inst_11545;
var tmp11685 = inst_11544;
var inst_11544__$1 = tmp11685;
var inst_11545__$1 = tmp11684;
var inst_11546__$1 = tmp11683;
var inst_11547__$1 = inst_11563;
var state_11665__$1 = (function (){var statearr_11690 = state_11665;
(statearr_11690[(13)] = inst_11546__$1);

(statearr_11690[(15)] = inst_11545__$1);

(statearr_11690[(16)] = inst_11547__$1);

(statearr_11690[(18)] = inst_11562);

(statearr_11690[(17)] = inst_11544__$1);

return statearr_11690;
})();
var statearr_11691_13128 = state_11665__$1;
(statearr_11691_13128[(2)] = null);

(statearr_11691_13128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (21))){
var inst_11589 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11695_13129 = state_11665__$1;
(statearr_11695_13129[(2)] = inst_11589);

(statearr_11695_13129[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (31))){
var inst_11615 = (state_11665[(10)]);
var inst_11619 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11615);
var state_11665__$1 = state_11665;
var statearr_11696_13130 = state_11665__$1;
(statearr_11696_13130[(2)] = inst_11619);

(statearr_11696_13130[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (32))){
var inst_11609 = (state_11665[(19)]);
var inst_11610 = (state_11665[(11)]);
var inst_11608 = (state_11665[(12)]);
var inst_11607 = (state_11665[(20)]);
var inst_11621 = (state_11665[(2)]);
var inst_11622 = (inst_11610 + (1));
var tmp11692 = inst_11609;
var tmp11693 = inst_11608;
var tmp11694 = inst_11607;
var inst_11607__$1 = tmp11694;
var inst_11608__$1 = tmp11693;
var inst_11609__$1 = tmp11692;
var inst_11610__$1 = inst_11622;
var state_11665__$1 = (function (){var statearr_11697 = state_11665;
(statearr_11697[(19)] = inst_11609__$1);

(statearr_11697[(11)] = inst_11610__$1);

(statearr_11697[(12)] = inst_11608__$1);

(statearr_11697[(21)] = inst_11621);

(statearr_11697[(20)] = inst_11607__$1);

return statearr_11697;
})();
var statearr_11698_13135 = state_11665__$1;
(statearr_11698_13135[(2)] = null);

(statearr_11698_13135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (40))){
var inst_11634 = (state_11665[(22)]);
var inst_11638 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11634);
var state_11665__$1 = state_11665;
var statearr_11699_13136 = state_11665__$1;
(statearr_11699_13136[(2)] = inst_11638);

(statearr_11699_13136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (33))){
var inst_11625 = (state_11665[(23)]);
var inst_11627 = cljs.core.chunked_seq_QMARK_(inst_11625);
var state_11665__$1 = state_11665;
if(inst_11627){
var statearr_11700_13137 = state_11665__$1;
(statearr_11700_13137[(1)] = (36));

} else {
var statearr_11701_13138 = state_11665__$1;
(statearr_11701_13138[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (13))){
var inst_11556 = (state_11665[(24)]);
var inst_11559 = cljs.core.async.close_BANG_(inst_11556);
var state_11665__$1 = state_11665;
var statearr_11702_13139 = state_11665__$1;
(statearr_11702_13139[(2)] = inst_11559);

(statearr_11702_13139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (22))){
var inst_11579 = (state_11665[(8)]);
var inst_11582 = cljs.core.async.close_BANG_(inst_11579);
var state_11665__$1 = state_11665;
var statearr_11703_13140 = state_11665__$1;
(statearr_11703_13140[(2)] = inst_11582);

(statearr_11703_13140[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (36))){
var inst_11625 = (state_11665[(23)]);
var inst_11629 = cljs.core.chunk_first(inst_11625);
var inst_11630 = cljs.core.chunk_rest(inst_11625);
var inst_11631 = cljs.core.count(inst_11629);
var inst_11607 = inst_11630;
var inst_11608 = inst_11629;
var inst_11609 = inst_11631;
var inst_11610 = (0);
var state_11665__$1 = (function (){var statearr_11704 = state_11665;
(statearr_11704[(19)] = inst_11609);

(statearr_11704[(11)] = inst_11610);

(statearr_11704[(12)] = inst_11608);

(statearr_11704[(20)] = inst_11607);

return statearr_11704;
})();
var statearr_11705_13141 = state_11665__$1;
(statearr_11705_13141[(2)] = null);

(statearr_11705_13141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (41))){
var inst_11625 = (state_11665[(23)]);
var inst_11640 = (state_11665[(2)]);
var inst_11641 = cljs.core.next(inst_11625);
var inst_11607 = inst_11641;
var inst_11608 = null;
var inst_11609 = (0);
var inst_11610 = (0);
var state_11665__$1 = (function (){var statearr_11706 = state_11665;
(statearr_11706[(19)] = inst_11609);

(statearr_11706[(11)] = inst_11610);

(statearr_11706[(12)] = inst_11608);

(statearr_11706[(20)] = inst_11607);

(statearr_11706[(25)] = inst_11640);

return statearr_11706;
})();
var statearr_11707_13142 = state_11665__$1;
(statearr_11707_13142[(2)] = null);

(statearr_11707_13142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (43))){
var state_11665__$1 = state_11665;
var statearr_11708_13143 = state_11665__$1;
(statearr_11708_13143[(2)] = null);

(statearr_11708_13143[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (29))){
var inst_11649 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11709_13144 = state_11665__$1;
(statearr_11709_13144[(2)] = inst_11649);

(statearr_11709_13144[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (44))){
var inst_11658 = (state_11665[(2)]);
var state_11665__$1 = (function (){var statearr_11714 = state_11665;
(statearr_11714[(26)] = inst_11658);

return statearr_11714;
})();
var statearr_11715_13145 = state_11665__$1;
(statearr_11715_13145[(2)] = null);

(statearr_11715_13145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (6))){
var inst_11599 = (state_11665[(27)]);
var inst_11598 = cljs.core.deref(cs);
var inst_11599__$1 = cljs.core.keys(inst_11598);
var inst_11600 = cljs.core.count(inst_11599__$1);
var inst_11601 = cljs.core.reset_BANG_(dctr,inst_11600);
var inst_11606 = cljs.core.seq(inst_11599__$1);
var inst_11607 = inst_11606;
var inst_11608 = null;
var inst_11609 = (0);
var inst_11610 = (0);
var state_11665__$1 = (function (){var statearr_11716 = state_11665;
(statearr_11716[(28)] = inst_11601);

(statearr_11716[(19)] = inst_11609);

(statearr_11716[(11)] = inst_11610);

(statearr_11716[(12)] = inst_11608);

(statearr_11716[(20)] = inst_11607);

(statearr_11716[(27)] = inst_11599__$1);

return statearr_11716;
})();
var statearr_11717_13146 = state_11665__$1;
(statearr_11717_13146[(2)] = null);

(statearr_11717_13146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (28))){
var inst_11625 = (state_11665[(23)]);
var inst_11607 = (state_11665[(20)]);
var inst_11625__$1 = cljs.core.seq(inst_11607);
var state_11665__$1 = (function (){var statearr_11718 = state_11665;
(statearr_11718[(23)] = inst_11625__$1);

return statearr_11718;
})();
if(inst_11625__$1){
var statearr_11719_13147 = state_11665__$1;
(statearr_11719_13147[(1)] = (33));

} else {
var statearr_11720_13148 = state_11665__$1;
(statearr_11720_13148[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (25))){
var inst_11609 = (state_11665[(19)]);
var inst_11610 = (state_11665[(11)]);
var inst_11612 = (inst_11610 < inst_11609);
var inst_11613 = inst_11612;
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11613)){
var statearr_11721_13149 = state_11665__$1;
(statearr_11721_13149[(1)] = (27));

} else {
var statearr_11722_13150 = state_11665__$1;
(statearr_11722_13150[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (34))){
var state_11665__$1 = state_11665;
var statearr_11723_13151 = state_11665__$1;
(statearr_11723_13151[(2)] = null);

(statearr_11723_13151[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (17))){
var state_11665__$1 = state_11665;
var statearr_11724_13152 = state_11665__$1;
(statearr_11724_13152[(2)] = null);

(statearr_11724_13152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (3))){
var inst_11663 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11665__$1,inst_11663);
} else {
if((state_val_11666 === (12))){
var inst_11594 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11725_13153 = state_11665__$1;
(statearr_11725_13153[(2)] = inst_11594);

(statearr_11725_13153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (2))){
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11665__$1,(4),ch);
} else {
if((state_val_11666 === (23))){
var state_11665__$1 = state_11665;
var statearr_11726_13154 = state_11665__$1;
(statearr_11726_13154[(2)] = null);

(statearr_11726_13154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (35))){
var inst_11647 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11727_13155 = state_11665__$1;
(statearr_11727_13155[(2)] = inst_11647);

(statearr_11727_13155[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (19))){
var inst_11566 = (state_11665[(7)]);
var inst_11570 = cljs.core.chunk_first(inst_11566);
var inst_11571 = cljs.core.chunk_rest(inst_11566);
var inst_11572 = cljs.core.count(inst_11570);
var inst_11544 = inst_11571;
var inst_11545 = inst_11570;
var inst_11546 = inst_11572;
var inst_11547 = (0);
var state_11665__$1 = (function (){var statearr_11728 = state_11665;
(statearr_11728[(13)] = inst_11546);

(statearr_11728[(15)] = inst_11545);

(statearr_11728[(16)] = inst_11547);

(statearr_11728[(17)] = inst_11544);

return statearr_11728;
})();
var statearr_11729_13159 = state_11665__$1;
(statearr_11729_13159[(2)] = null);

(statearr_11729_13159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (11))){
var inst_11544 = (state_11665[(17)]);
var inst_11566 = (state_11665[(7)]);
var inst_11566__$1 = cljs.core.seq(inst_11544);
var state_11665__$1 = (function (){var statearr_11730 = state_11665;
(statearr_11730[(7)] = inst_11566__$1);

return statearr_11730;
})();
if(inst_11566__$1){
var statearr_11731_13164 = state_11665__$1;
(statearr_11731_13164[(1)] = (16));

} else {
var statearr_11732_13165 = state_11665__$1;
(statearr_11732_13165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (9))){
var inst_11596 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11733_13166 = state_11665__$1;
(statearr_11733_13166[(2)] = inst_11596);

(statearr_11733_13166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (5))){
var inst_11542 = cljs.core.deref(cs);
var inst_11543 = cljs.core.seq(inst_11542);
var inst_11544 = inst_11543;
var inst_11545 = null;
var inst_11546 = (0);
var inst_11547 = (0);
var state_11665__$1 = (function (){var statearr_11734 = state_11665;
(statearr_11734[(13)] = inst_11546);

(statearr_11734[(15)] = inst_11545);

(statearr_11734[(16)] = inst_11547);

(statearr_11734[(17)] = inst_11544);

return statearr_11734;
})();
var statearr_11735_13168 = state_11665__$1;
(statearr_11735_13168[(2)] = null);

(statearr_11735_13168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (14))){
var state_11665__$1 = state_11665;
var statearr_11736_13170 = state_11665__$1;
(statearr_11736_13170[(2)] = null);

(statearr_11736_13170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (45))){
var inst_11655 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11737_13171 = state_11665__$1;
(statearr_11737_13171[(2)] = inst_11655);

(statearr_11737_13171[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (26))){
var inst_11599 = (state_11665[(27)]);
var inst_11651 = (state_11665[(2)]);
var inst_11652 = cljs.core.seq(inst_11599);
var state_11665__$1 = (function (){var statearr_11738 = state_11665;
(statearr_11738[(29)] = inst_11651);

return statearr_11738;
})();
if(inst_11652){
var statearr_11739_13172 = state_11665__$1;
(statearr_11739_13172[(1)] = (42));

} else {
var statearr_11740_13173 = state_11665__$1;
(statearr_11740_13173[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (16))){
var inst_11566 = (state_11665[(7)]);
var inst_11568 = cljs.core.chunked_seq_QMARK_(inst_11566);
var state_11665__$1 = state_11665;
if(inst_11568){
var statearr_11741_13174 = state_11665__$1;
(statearr_11741_13174[(1)] = (19));

} else {
var statearr_11742_13175 = state_11665__$1;
(statearr_11742_13175[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (38))){
var inst_11644 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11743_13176 = state_11665__$1;
(statearr_11743_13176[(2)] = inst_11644);

(statearr_11743_13176[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (30))){
var state_11665__$1 = state_11665;
var statearr_11744_13177 = state_11665__$1;
(statearr_11744_13177[(2)] = null);

(statearr_11744_13177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (10))){
var inst_11545 = (state_11665[(15)]);
var inst_11547 = (state_11665[(16)]);
var inst_11555 = cljs.core._nth(inst_11545,inst_11547);
var inst_11556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11555,(0),null);
var inst_11557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11555,(1),null);
var state_11665__$1 = (function (){var statearr_11745 = state_11665;
(statearr_11745[(24)] = inst_11556);

return statearr_11745;
})();
if(cljs.core.truth_(inst_11557)){
var statearr_11746_13178 = state_11665__$1;
(statearr_11746_13178[(1)] = (13));

} else {
var statearr_11747_13179 = state_11665__$1;
(statearr_11747_13179[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (18))){
var inst_11592 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11748_13180 = state_11665__$1;
(statearr_11748_13180[(2)] = inst_11592);

(statearr_11748_13180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (42))){
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11665__$1,(45),dchan);
} else {
if((state_val_11666 === (37))){
var inst_11535 = (state_11665[(9)]);
var inst_11625 = (state_11665[(23)]);
var inst_11634 = (state_11665[(22)]);
var inst_11634__$1 = cljs.core.first(inst_11625);
var inst_11635 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11634__$1,inst_11535,done);
var state_11665__$1 = (function (){var statearr_11749 = state_11665;
(statearr_11749[(22)] = inst_11634__$1);

return statearr_11749;
})();
if(cljs.core.truth_(inst_11635)){
var statearr_11750_13181 = state_11665__$1;
(statearr_11750_13181[(1)] = (39));

} else {
var statearr_11751_13182 = state_11665__$1;
(statearr_11751_13182[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (8))){
var inst_11546 = (state_11665[(13)]);
var inst_11547 = (state_11665[(16)]);
var inst_11549 = (inst_11547 < inst_11546);
var inst_11550 = inst_11549;
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11550)){
var statearr_11752_13183 = state_11665__$1;
(statearr_11752_13183[(1)] = (10));

} else {
var statearr_11753_13184 = state_11665__$1;
(statearr_11753_13184[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10904__auto__ = null;
var cljs$core$async$mult_$_state_machine__10904__auto____0 = (function (){
var statearr_11754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11754[(0)] = cljs$core$async$mult_$_state_machine__10904__auto__);

(statearr_11754[(1)] = (1));

return statearr_11754;
});
var cljs$core$async$mult_$_state_machine__10904__auto____1 = (function (state_11665){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11665);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11755){var ex__10907__auto__ = e11755;
var statearr_11756_13185 = state_11665;
(statearr_11756_13185[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11665[(4)]))){
var statearr_11757_13186 = state_11665;
(statearr_11757_13186[(1)] = cljs.core.first((state_11665[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13187 = state_11665;
state_11665 = G__13187;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10904__auto__ = function(state_11665){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10904__auto____1.call(this,state_11665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10904__auto____0;
cljs$core$async$mult_$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10904__auto____1;
return cljs$core$async$mult_$_state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11758 = f__10959__auto__();
(statearr_11758[(6)] = c__10958__auto___13117);

return statearr_11758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
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
var G__11760 = arguments.length;
switch (G__11760) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13189 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13189(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13193 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13193(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13195 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13195(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13198 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13198(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13200 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13200(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13203 = arguments.length;
var i__4737__auto___13204 = (0);
while(true){
if((i__4737__auto___13204 < len__4736__auto___13203)){
args__4742__auto__.push((arguments[i__4737__auto___13204]));

var G__13205 = (i__4737__auto___13204 + (1));
i__4737__auto___13204 = G__13205;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11766){
var map__11767 = p__11766;
var map__11767__$1 = (((((!((map__11767 == null))))?(((((map__11767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11767):map__11767);
var opts = map__11767__$1;
var statearr_11769_13207 = state;
(statearr_11769_13207[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11770_13208 = state;
(statearr_11770_13208[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11771_13209 = state;
(statearr_11771_13209[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11762){
var G__11763 = cljs.core.first(seq11762);
var seq11762__$1 = cljs.core.next(seq11762);
var G__11764 = cljs.core.first(seq11762__$1);
var seq11762__$2 = cljs.core.next(seq11762__$1);
var G__11765 = cljs.core.first(seq11762__$2);
var seq11762__$3 = cljs.core.next(seq11762__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11763,G__11764,G__11765,seq11762__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11772 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11773){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11773 = meta11773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11774,meta11773__$1){
var self__ = this;
var _11774__$1 = this;
return (new cljs.core.async.t_cljs$core$async11772(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11773__$1));
}));

(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11774){
var self__ = this;
var _11774__$1 = this;
return self__.meta11773;
}));

(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11772.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11773","meta11773",436025524,null)], null);
}));

(cljs.core.async.t_cljs$core$async11772.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11772");

(cljs.core.async.t_cljs$core$async11772.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11772");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11772.
 */
cljs.core.async.__GT_t_cljs$core$async11772 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11772(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11773){
return (new cljs.core.async.t_cljs$core$async11772(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11773));
});

}

return (new cljs.core.async.t_cljs$core$async11772(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10958__auto___13213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_11879){
var state_val_11880 = (state_11879[(1)]);
if((state_val_11880 === (7))){
var inst_11794 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11881_13214 = state_11879__$1;
(statearr_11881_13214[(2)] = inst_11794);

(statearr_11881_13214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (20))){
var inst_11806 = (state_11879[(7)]);
var state_11879__$1 = state_11879;
var statearr_11882_13215 = state_11879__$1;
(statearr_11882_13215[(2)] = inst_11806);

(statearr_11882_13215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (27))){
var state_11879__$1 = state_11879;
var statearr_11883_13216 = state_11879__$1;
(statearr_11883_13216[(2)] = null);

(statearr_11883_13216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (1))){
var inst_11779 = (state_11879[(8)]);
var inst_11779__$1 = calc_state();
var inst_11781 = (inst_11779__$1 == null);
var inst_11782 = cljs.core.not(inst_11781);
var state_11879__$1 = (function (){var statearr_11884 = state_11879;
(statearr_11884[(8)] = inst_11779__$1);

return statearr_11884;
})();
if(inst_11782){
var statearr_11885_13217 = state_11879__$1;
(statearr_11885_13217[(1)] = (2));

} else {
var statearr_11886_13219 = state_11879__$1;
(statearr_11886_13219[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (24))){
var inst_11853 = (state_11879[(9)]);
var inst_11830 = (state_11879[(10)]);
var inst_11839 = (state_11879[(11)]);
var inst_11853__$1 = (inst_11830.cljs$core$IFn$_invoke$arity$1 ? inst_11830.cljs$core$IFn$_invoke$arity$1(inst_11839) : inst_11830.call(null,inst_11839));
var state_11879__$1 = (function (){var statearr_11887 = state_11879;
(statearr_11887[(9)] = inst_11853__$1);

return statearr_11887;
})();
if(cljs.core.truth_(inst_11853__$1)){
var statearr_11888_13220 = state_11879__$1;
(statearr_11888_13220[(1)] = (29));

} else {
var statearr_11889_13221 = state_11879__$1;
(statearr_11889_13221[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (4))){
var inst_11797 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11797)){
var statearr_11890_13223 = state_11879__$1;
(statearr_11890_13223[(1)] = (8));

} else {
var statearr_11891_13224 = state_11879__$1;
(statearr_11891_13224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (15))){
var inst_11824 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11824)){
var statearr_11892_13225 = state_11879__$1;
(statearr_11892_13225[(1)] = (19));

} else {
var statearr_11893_13226 = state_11879__$1;
(statearr_11893_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (21))){
var inst_11829 = (state_11879[(12)]);
var inst_11829__$1 = (state_11879[(2)]);
var inst_11830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11829__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11829__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11829__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11879__$1 = (function (){var statearr_11894 = state_11879;
(statearr_11894[(12)] = inst_11829__$1);

(statearr_11894[(10)] = inst_11830);

(statearr_11894[(13)] = inst_11831);

return statearr_11894;
})();
return cljs.core.async.ioc_alts_BANG_(state_11879__$1,(22),inst_11832);
} else {
if((state_val_11880 === (31))){
var inst_11861 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11861)){
var statearr_11895_13231 = state_11879__$1;
(statearr_11895_13231[(1)] = (32));

} else {
var statearr_11896_13232 = state_11879__$1;
(statearr_11896_13232[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (32))){
var inst_11838 = (state_11879[(14)]);
var state_11879__$1 = state_11879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11879__$1,(35),out,inst_11838);
} else {
if((state_val_11880 === (33))){
var inst_11829 = (state_11879[(12)]);
var inst_11806 = inst_11829;
var state_11879__$1 = (function (){var statearr_11897 = state_11879;
(statearr_11897[(7)] = inst_11806);

return statearr_11897;
})();
var statearr_11898_13233 = state_11879__$1;
(statearr_11898_13233[(2)] = null);

(statearr_11898_13233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (13))){
var inst_11806 = (state_11879[(7)]);
var inst_11813 = inst_11806.cljs$lang$protocol_mask$partition0$;
var inst_11814 = (inst_11813 & (64));
var inst_11815 = inst_11806.cljs$core$ISeq$;
var inst_11816 = (cljs.core.PROTOCOL_SENTINEL === inst_11815);
var inst_11817 = ((inst_11814) || (inst_11816));
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11817)){
var statearr_11899_13235 = state_11879__$1;
(statearr_11899_13235[(1)] = (16));

} else {
var statearr_11900_13236 = state_11879__$1;
(statearr_11900_13236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (22))){
var inst_11838 = (state_11879[(14)]);
var inst_11839 = (state_11879[(11)]);
var inst_11837 = (state_11879[(2)]);
var inst_11838__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11837,(0),null);
var inst_11839__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11837,(1),null);
var inst_11840 = (inst_11838__$1 == null);
var inst_11841 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11839__$1,change);
var inst_11842 = ((inst_11840) || (inst_11841));
var state_11879__$1 = (function (){var statearr_11901 = state_11879;
(statearr_11901[(14)] = inst_11838__$1);

(statearr_11901[(11)] = inst_11839__$1);

return statearr_11901;
})();
if(cljs.core.truth_(inst_11842)){
var statearr_11903_13238 = state_11879__$1;
(statearr_11903_13238[(1)] = (23));

} else {
var statearr_11904_13239 = state_11879__$1;
(statearr_11904_13239[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (36))){
var inst_11829 = (state_11879[(12)]);
var inst_11806 = inst_11829;
var state_11879__$1 = (function (){var statearr_11905 = state_11879;
(statearr_11905[(7)] = inst_11806);

return statearr_11905;
})();
var statearr_11906_13241 = state_11879__$1;
(statearr_11906_13241[(2)] = null);

(statearr_11906_13241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (29))){
var inst_11853 = (state_11879[(9)]);
var state_11879__$1 = state_11879;
var statearr_11907_13243 = state_11879__$1;
(statearr_11907_13243[(2)] = inst_11853);

(statearr_11907_13243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (6))){
var state_11879__$1 = state_11879;
var statearr_11910_13244 = state_11879__$1;
(statearr_11910_13244[(2)] = false);

(statearr_11910_13244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (28))){
var inst_11849 = (state_11879[(2)]);
var inst_11850 = calc_state();
var inst_11806 = inst_11850;
var state_11879__$1 = (function (){var statearr_11911 = state_11879;
(statearr_11911[(7)] = inst_11806);

(statearr_11911[(15)] = inst_11849);

return statearr_11911;
})();
var statearr_11912_13245 = state_11879__$1;
(statearr_11912_13245[(2)] = null);

(statearr_11912_13245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (25))){
var inst_11875 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11913_13246 = state_11879__$1;
(statearr_11913_13246[(2)] = inst_11875);

(statearr_11913_13246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (34))){
var inst_11873 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11914_13247 = state_11879__$1;
(statearr_11914_13247[(2)] = inst_11873);

(statearr_11914_13247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (17))){
var state_11879__$1 = state_11879;
var statearr_11915_13248 = state_11879__$1;
(statearr_11915_13248[(2)] = false);

(statearr_11915_13248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (3))){
var state_11879__$1 = state_11879;
var statearr_11916_13249 = state_11879__$1;
(statearr_11916_13249[(2)] = false);

(statearr_11916_13249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (12))){
var inst_11877 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11879__$1,inst_11877);
} else {
if((state_val_11880 === (2))){
var inst_11779 = (state_11879[(8)]);
var inst_11786 = inst_11779.cljs$lang$protocol_mask$partition0$;
var inst_11787 = (inst_11786 & (64));
var inst_11788 = inst_11779.cljs$core$ISeq$;
var inst_11789 = (cljs.core.PROTOCOL_SENTINEL === inst_11788);
var inst_11790 = ((inst_11787) || (inst_11789));
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11790)){
var statearr_11917_13250 = state_11879__$1;
(statearr_11917_13250[(1)] = (5));

} else {
var statearr_11918_13251 = state_11879__$1;
(statearr_11918_13251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (23))){
var inst_11838 = (state_11879[(14)]);
var inst_11844 = (inst_11838 == null);
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11844)){
var statearr_11919_13252 = state_11879__$1;
(statearr_11919_13252[(1)] = (26));

} else {
var statearr_11920_13253 = state_11879__$1;
(statearr_11920_13253[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (35))){
var inst_11864 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11864)){
var statearr_11921_13254 = state_11879__$1;
(statearr_11921_13254[(1)] = (36));

} else {
var statearr_11922_13255 = state_11879__$1;
(statearr_11922_13255[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (19))){
var inst_11806 = (state_11879[(7)]);
var inst_11826 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11806);
var state_11879__$1 = state_11879;
var statearr_11923_13256 = state_11879__$1;
(statearr_11923_13256[(2)] = inst_11826);

(statearr_11923_13256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (11))){
var inst_11806 = (state_11879[(7)]);
var inst_11810 = (inst_11806 == null);
var inst_11811 = cljs.core.not(inst_11810);
var state_11879__$1 = state_11879;
if(inst_11811){
var statearr_11924_13257 = state_11879__$1;
(statearr_11924_13257[(1)] = (13));

} else {
var statearr_11925_13258 = state_11879__$1;
(statearr_11925_13258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (9))){
var inst_11779 = (state_11879[(8)]);
var state_11879__$1 = state_11879;
var statearr_11926_13259 = state_11879__$1;
(statearr_11926_13259[(2)] = inst_11779);

(statearr_11926_13259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (5))){
var state_11879__$1 = state_11879;
var statearr_11927_13260 = state_11879__$1;
(statearr_11927_13260[(2)] = true);

(statearr_11927_13260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (14))){
var state_11879__$1 = state_11879;
var statearr_11928_13261 = state_11879__$1;
(statearr_11928_13261[(2)] = false);

(statearr_11928_13261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (26))){
var inst_11839 = (state_11879[(11)]);
var inst_11846 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11839);
var state_11879__$1 = state_11879;
var statearr_11930_13262 = state_11879__$1;
(statearr_11930_13262[(2)] = inst_11846);

(statearr_11930_13262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (16))){
var state_11879__$1 = state_11879;
var statearr_11932_13263 = state_11879__$1;
(statearr_11932_13263[(2)] = true);

(statearr_11932_13263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (38))){
var inst_11869 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11933_13264 = state_11879__$1;
(statearr_11933_13264[(2)] = inst_11869);

(statearr_11933_13264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (30))){
var inst_11830 = (state_11879[(10)]);
var inst_11831 = (state_11879[(13)]);
var inst_11839 = (state_11879[(11)]);
var inst_11856 = cljs.core.empty_QMARK_(inst_11830);
var inst_11857 = (inst_11831.cljs$core$IFn$_invoke$arity$1 ? inst_11831.cljs$core$IFn$_invoke$arity$1(inst_11839) : inst_11831.call(null,inst_11839));
var inst_11858 = cljs.core.not(inst_11857);
var inst_11859 = ((inst_11856) && (inst_11858));
var state_11879__$1 = state_11879;
var statearr_11934_13265 = state_11879__$1;
(statearr_11934_13265[(2)] = inst_11859);

(statearr_11934_13265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (10))){
var inst_11779 = (state_11879[(8)]);
var inst_11802 = (state_11879[(2)]);
var inst_11803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11802,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11802,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11802,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11806 = inst_11779;
var state_11879__$1 = (function (){var statearr_11935 = state_11879;
(statearr_11935[(7)] = inst_11806);

(statearr_11935[(16)] = inst_11803);

(statearr_11935[(17)] = inst_11804);

(statearr_11935[(18)] = inst_11805);

return statearr_11935;
})();
var statearr_11936_13266 = state_11879__$1;
(statearr_11936_13266[(2)] = null);

(statearr_11936_13266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (18))){
var inst_11821 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11937_13267 = state_11879__$1;
(statearr_11937_13267[(2)] = inst_11821);

(statearr_11937_13267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (37))){
var state_11879__$1 = state_11879;
var statearr_11938_13268 = state_11879__$1;
(statearr_11938_13268[(2)] = null);

(statearr_11938_13268[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (8))){
var inst_11779 = (state_11879[(8)]);
var inst_11799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11779);
var state_11879__$1 = state_11879;
var statearr_11939_13269 = state_11879__$1;
(statearr_11939_13269[(2)] = inst_11799);

(statearr_11939_13269[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10904__auto__ = null;
var cljs$core$async$mix_$_state_machine__10904__auto____0 = (function (){
var statearr_11940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11940[(0)] = cljs$core$async$mix_$_state_machine__10904__auto__);

(statearr_11940[(1)] = (1));

return statearr_11940;
});
var cljs$core$async$mix_$_state_machine__10904__auto____1 = (function (state_11879){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_11879);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e11941){var ex__10907__auto__ = e11941;
var statearr_11942_13270 = state_11879;
(statearr_11942_13270[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_11879[(4)]))){
var statearr_11943_13271 = state_11879;
(statearr_11943_13271[(1)] = cljs.core.first((state_11879[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13272 = state_11879;
state_11879 = G__13272;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10904__auto__ = function(state_11879){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10904__auto____1.call(this,state_11879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10904__auto____0;
cljs$core$async$mix_$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10904__auto____1;
return cljs$core$async$mix_$_state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_11944 = f__10959__auto__();
(statearr_11944[(6)] = c__10958__auto___13213);

return statearr_11944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13273 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13273(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13274 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13274(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13275 = (function() {
var G__13276 = null;
var G__13276__1 = (function (p){
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
var G__13276__2 = (function (p,v){
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
G__13276 = function(p,v){
switch(arguments.length){
case 1:
return G__13276__1.call(this,p);
case 2:
return G__13276__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13276.cljs$core$IFn$_invoke$arity$1 = G__13276__1;
G__13276.cljs$core$IFn$_invoke$arity$2 = G__13276__2;
return G__13276;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11964 = arguments.length;
switch (G__11964) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13275(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13275(p,v);
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
var G__11975 = arguments.length;
switch (G__11975) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11973_SHARP_){
if(cljs.core.truth_((p1__11973_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11973_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11973_SHARP_.call(null,topic)))){
return p1__11973_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11973_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11976 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11977){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11977 = meta11977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11978,meta11977__$1){
var self__ = this;
var _11978__$1 = this;
return (new cljs.core.async.t_cljs$core$async11976(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11977__$1));
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11978){
var self__ = this;
var _11978__$1 = this;
return self__.meta11977;
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11977","meta11977",-1730821131,null)], null);
}));

(cljs.core.async.t_cljs$core$async11976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11976");

(cljs.core.async.t_cljs$core$async11976.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11976.
 */
cljs.core.async.__GT_t_cljs$core$async11976 = (function cljs$core$async$__GT_t_cljs$core$async11976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11977){
return (new cljs.core.async.t_cljs$core$async11976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11977));
});

}

return (new cljs.core.async.t_cljs$core$async11976(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10958__auto___13280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_12055){
var state_val_12056 = (state_12055[(1)]);
if((state_val_12056 === (7))){
var inst_12051 = (state_12055[(2)]);
var state_12055__$1 = state_12055;
var statearr_12057_13281 = state_12055__$1;
(statearr_12057_13281[(2)] = inst_12051);

(statearr_12057_13281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (20))){
var state_12055__$1 = state_12055;
var statearr_12058_13282 = state_12055__$1;
(statearr_12058_13282[(2)] = null);

(statearr_12058_13282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (1))){
var state_12055__$1 = state_12055;
var statearr_12059_13283 = state_12055__$1;
(statearr_12059_13283[(2)] = null);

(statearr_12059_13283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (24))){
var inst_12034 = (state_12055[(7)]);
var inst_12043 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12034);
var state_12055__$1 = state_12055;
var statearr_12060_13285 = state_12055__$1;
(statearr_12060_13285[(2)] = inst_12043);

(statearr_12060_13285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (4))){
var inst_11985 = (state_12055[(8)]);
var inst_11985__$1 = (state_12055[(2)]);
var inst_11987 = (inst_11985__$1 == null);
var state_12055__$1 = (function (){var statearr_12061 = state_12055;
(statearr_12061[(8)] = inst_11985__$1);

return statearr_12061;
})();
if(cljs.core.truth_(inst_11987)){
var statearr_12062_13286 = state_12055__$1;
(statearr_12062_13286[(1)] = (5));

} else {
var statearr_12063_13287 = state_12055__$1;
(statearr_12063_13287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (15))){
var inst_12028 = (state_12055[(2)]);
var state_12055__$1 = state_12055;
var statearr_12064_13288 = state_12055__$1;
(statearr_12064_13288[(2)] = inst_12028);

(statearr_12064_13288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (21))){
var inst_12048 = (state_12055[(2)]);
var state_12055__$1 = (function (){var statearr_12065 = state_12055;
(statearr_12065[(9)] = inst_12048);

return statearr_12065;
})();
var statearr_12066_13289 = state_12055__$1;
(statearr_12066_13289[(2)] = null);

(statearr_12066_13289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (13))){
var inst_12010 = (state_12055[(10)]);
var inst_12012 = cljs.core.chunked_seq_QMARK_(inst_12010);
var state_12055__$1 = state_12055;
if(inst_12012){
var statearr_12067_13290 = state_12055__$1;
(statearr_12067_13290[(1)] = (16));

} else {
var statearr_12068_13291 = state_12055__$1;
(statearr_12068_13291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (22))){
var inst_12040 = (state_12055[(2)]);
var state_12055__$1 = state_12055;
if(cljs.core.truth_(inst_12040)){
var statearr_12069_13292 = state_12055__$1;
(statearr_12069_13292[(1)] = (23));

} else {
var statearr_12070_13293 = state_12055__$1;
(statearr_12070_13293[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (6))){
var inst_11985 = (state_12055[(8)]);
var inst_12036 = (state_12055[(11)]);
var inst_12034 = (state_12055[(7)]);
var inst_12034__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11985) : topic_fn.call(null,inst_11985));
var inst_12035 = cljs.core.deref(mults);
var inst_12036__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12035,inst_12034__$1);
var state_12055__$1 = (function (){var statearr_12071 = state_12055;
(statearr_12071[(11)] = inst_12036__$1);

(statearr_12071[(7)] = inst_12034__$1);

return statearr_12071;
})();
if(cljs.core.truth_(inst_12036__$1)){
var statearr_12072_13302 = state_12055__$1;
(statearr_12072_13302[(1)] = (19));

} else {
var statearr_12073_13303 = state_12055__$1;
(statearr_12073_13303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (25))){
var inst_12045 = (state_12055[(2)]);
var state_12055__$1 = state_12055;
var statearr_12074_13304 = state_12055__$1;
(statearr_12074_13304[(2)] = inst_12045);

(statearr_12074_13304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (17))){
var inst_12010 = (state_12055[(10)]);
var inst_12019 = cljs.core.first(inst_12010);
var inst_12020 = cljs.core.async.muxch_STAR_(inst_12019);
var inst_12021 = cljs.core.async.close_BANG_(inst_12020);
var inst_12022 = cljs.core.next(inst_12010);
var inst_11996 = inst_12022;
var inst_11997 = null;
var inst_11998 = (0);
var inst_11999 = (0);
var state_12055__$1 = (function (){var statearr_12075 = state_12055;
(statearr_12075[(12)] = inst_11998);

(statearr_12075[(13)] = inst_12021);

(statearr_12075[(14)] = inst_11997);

(statearr_12075[(15)] = inst_11999);

(statearr_12075[(16)] = inst_11996);

return statearr_12075;
})();
var statearr_12076_13314 = state_12055__$1;
(statearr_12076_13314[(2)] = null);

(statearr_12076_13314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (3))){
var inst_12053 = (state_12055[(2)]);
var state_12055__$1 = state_12055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12055__$1,inst_12053);
} else {
if((state_val_12056 === (12))){
var inst_12030 = (state_12055[(2)]);
var state_12055__$1 = state_12055;
var statearr_12077_13320 = state_12055__$1;
(statearr_12077_13320[(2)] = inst_12030);

(statearr_12077_13320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (2))){
var state_12055__$1 = state_12055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12055__$1,(4),ch);
} else {
if((state_val_12056 === (23))){
var state_12055__$1 = state_12055;
var statearr_12078_13321 = state_12055__$1;
(statearr_12078_13321[(2)] = null);

(statearr_12078_13321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (19))){
var inst_11985 = (state_12055[(8)]);
var inst_12036 = (state_12055[(11)]);
var inst_12038 = cljs.core.async.muxch_STAR_(inst_12036);
var state_12055__$1 = state_12055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12055__$1,(22),inst_12038,inst_11985);
} else {
if((state_val_12056 === (11))){
var inst_12010 = (state_12055[(10)]);
var inst_11996 = (state_12055[(16)]);
var inst_12010__$1 = cljs.core.seq(inst_11996);
var state_12055__$1 = (function (){var statearr_12079 = state_12055;
(statearr_12079[(10)] = inst_12010__$1);

return statearr_12079;
})();
if(inst_12010__$1){
var statearr_12080_13322 = state_12055__$1;
(statearr_12080_13322[(1)] = (13));

} else {
var statearr_12081_13327 = state_12055__$1;
(statearr_12081_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (9))){
var inst_12032 = (state_12055[(2)]);
var state_12055__$1 = state_12055;
var statearr_12082_13328 = state_12055__$1;
(statearr_12082_13328[(2)] = inst_12032);

(statearr_12082_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (5))){
var inst_11993 = cljs.core.deref(mults);
var inst_11994 = cljs.core.vals(inst_11993);
var inst_11995 = cljs.core.seq(inst_11994);
var inst_11996 = inst_11995;
var inst_11997 = null;
var inst_11998 = (0);
var inst_11999 = (0);
var state_12055__$1 = (function (){var statearr_12086 = state_12055;
(statearr_12086[(12)] = inst_11998);

(statearr_12086[(14)] = inst_11997);

(statearr_12086[(15)] = inst_11999);

(statearr_12086[(16)] = inst_11996);

return statearr_12086;
})();
var statearr_12087_13329 = state_12055__$1;
(statearr_12087_13329[(2)] = null);

(statearr_12087_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (14))){
var state_12055__$1 = state_12055;
var statearr_12091_13330 = state_12055__$1;
(statearr_12091_13330[(2)] = null);

(statearr_12091_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (16))){
var inst_12010 = (state_12055[(10)]);
var inst_12014 = cljs.core.chunk_first(inst_12010);
var inst_12015 = cljs.core.chunk_rest(inst_12010);
var inst_12016 = cljs.core.count(inst_12014);
var inst_11996 = inst_12015;
var inst_11997 = inst_12014;
var inst_11998 = inst_12016;
var inst_11999 = (0);
var state_12055__$1 = (function (){var statearr_12092 = state_12055;
(statearr_12092[(12)] = inst_11998);

(statearr_12092[(14)] = inst_11997);

(statearr_12092[(15)] = inst_11999);

(statearr_12092[(16)] = inst_11996);

return statearr_12092;
})();
var statearr_12093_13331 = state_12055__$1;
(statearr_12093_13331[(2)] = null);

(statearr_12093_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (10))){
var inst_11998 = (state_12055[(12)]);
var inst_11997 = (state_12055[(14)]);
var inst_11999 = (state_12055[(15)]);
var inst_11996 = (state_12055[(16)]);
var inst_12004 = cljs.core._nth(inst_11997,inst_11999);
var inst_12005 = cljs.core.async.muxch_STAR_(inst_12004);
var inst_12006 = cljs.core.async.close_BANG_(inst_12005);
var inst_12007 = (inst_11999 + (1));
var tmp12088 = inst_11998;
var tmp12089 = inst_11997;
var tmp12090 = inst_11996;
var inst_11996__$1 = tmp12090;
var inst_11997__$1 = tmp12089;
var inst_11998__$1 = tmp12088;
var inst_11999__$1 = inst_12007;
var state_12055__$1 = (function (){var statearr_12095 = state_12055;
(statearr_12095[(12)] = inst_11998__$1);

(statearr_12095[(14)] = inst_11997__$1);

(statearr_12095[(17)] = inst_12006);

(statearr_12095[(15)] = inst_11999__$1);

(statearr_12095[(16)] = inst_11996__$1);

return statearr_12095;
})();
var statearr_12096_13332 = state_12055__$1;
(statearr_12096_13332[(2)] = null);

(statearr_12096_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (18))){
var inst_12025 = (state_12055[(2)]);
var state_12055__$1 = state_12055;
var statearr_12097_13333 = state_12055__$1;
(statearr_12097_13333[(2)] = inst_12025);

(statearr_12097_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12056 === (8))){
var inst_11998 = (state_12055[(12)]);
var inst_11999 = (state_12055[(15)]);
var inst_12001 = (inst_11999 < inst_11998);
var inst_12002 = inst_12001;
var state_12055__$1 = state_12055;
if(cljs.core.truth_(inst_12002)){
var statearr_12098_13334 = state_12055__$1;
(statearr_12098_13334[(1)] = (10));

} else {
var statearr_12099_13335 = state_12055__$1;
(statearr_12099_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_12100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12100[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_12100[(1)] = (1));

return statearr_12100;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_12055){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_12055);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e12101){var ex__10907__auto__ = e12101;
var statearr_12102_13336 = state_12055;
(statearr_12102_13336[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_12055[(4)]))){
var statearr_12103_13337 = state_12055;
(statearr_12103_13337[(1)] = cljs.core.first((state_12055[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12055;
state_12055 = G__13338;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_12055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_12055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_12104 = f__10959__auto__();
(statearr_12104[(6)] = c__10958__auto___13280);

return statearr_12104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
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
var G__12106 = arguments.length;
switch (G__12106) {
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
var G__12108 = arguments.length;
switch (G__12108) {
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
var G__12110 = arguments.length;
switch (G__12110) {
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
var c__10958__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_12156){
var state_val_12157 = (state_12156[(1)]);
if((state_val_12157 === (7))){
var state_12156__$1 = state_12156;
var statearr_12158_13343 = state_12156__$1;
(statearr_12158_13343[(2)] = null);

(statearr_12158_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (1))){
var state_12156__$1 = state_12156;
var statearr_12159_13344 = state_12156__$1;
(statearr_12159_13344[(2)] = null);

(statearr_12159_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (4))){
var inst_12114 = (state_12156[(7)]);
var inst_12113 = (state_12156[(8)]);
var inst_12116 = (inst_12114 < inst_12113);
var state_12156__$1 = state_12156;
if(cljs.core.truth_(inst_12116)){
var statearr_12160_13345 = state_12156__$1;
(statearr_12160_13345[(1)] = (6));

} else {
var statearr_12161_13346 = state_12156__$1;
(statearr_12161_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (15))){
var inst_12142 = (state_12156[(9)]);
var inst_12147 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12142);
var state_12156__$1 = state_12156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12156__$1,(17),out,inst_12147);
} else {
if((state_val_12157 === (13))){
var inst_12142 = (state_12156[(9)]);
var inst_12142__$1 = (state_12156[(2)]);
var inst_12143 = cljs.core.some(cljs.core.nil_QMARK_,inst_12142__$1);
var state_12156__$1 = (function (){var statearr_12162 = state_12156;
(statearr_12162[(9)] = inst_12142__$1);

return statearr_12162;
})();
if(cljs.core.truth_(inst_12143)){
var statearr_12163_13347 = state_12156__$1;
(statearr_12163_13347[(1)] = (14));

} else {
var statearr_12164_13348 = state_12156__$1;
(statearr_12164_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (6))){
var state_12156__$1 = state_12156;
var statearr_12165_13349 = state_12156__$1;
(statearr_12165_13349[(2)] = null);

(statearr_12165_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (17))){
var inst_12149 = (state_12156[(2)]);
var state_12156__$1 = (function (){var statearr_12167 = state_12156;
(statearr_12167[(10)] = inst_12149);

return statearr_12167;
})();
var statearr_12168_13350 = state_12156__$1;
(statearr_12168_13350[(2)] = null);

(statearr_12168_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (3))){
var inst_12154 = (state_12156[(2)]);
var state_12156__$1 = state_12156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12156__$1,inst_12154);
} else {
if((state_val_12157 === (12))){
var _ = (function (){var statearr_12169 = state_12156;
(statearr_12169[(4)] = cljs.core.rest((state_12156[(4)])));

return statearr_12169;
})();
var state_12156__$1 = state_12156;
var ex12166 = (state_12156__$1[(2)]);
var statearr_12170_13351 = state_12156__$1;
(statearr_12170_13351[(5)] = ex12166);


if((ex12166 instanceof Object)){
var statearr_12172_13352 = state_12156__$1;
(statearr_12172_13352[(1)] = (11));

(statearr_12172_13352[(5)] = null);

} else {
throw ex12166;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (2))){
var inst_12112 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12113 = cnt;
var inst_12114 = (0);
var state_12156__$1 = (function (){var statearr_12173 = state_12156;
(statearr_12173[(7)] = inst_12114);

(statearr_12173[(11)] = inst_12112);

(statearr_12173[(8)] = inst_12113);

return statearr_12173;
})();
var statearr_12174_13353 = state_12156__$1;
(statearr_12174_13353[(2)] = null);

(statearr_12174_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (11))){
var inst_12120 = (state_12156[(2)]);
var inst_12121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12156__$1 = (function (){var statearr_12175 = state_12156;
(statearr_12175[(12)] = inst_12120);

return statearr_12175;
})();
var statearr_12176_13354 = state_12156__$1;
(statearr_12176_13354[(2)] = inst_12121);

(statearr_12176_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (9))){
var inst_12114 = (state_12156[(7)]);
var _ = (function (){var statearr_12177 = state_12156;
(statearr_12177[(4)] = cljs.core.cons((12),(state_12156[(4)])));

return statearr_12177;
})();
var inst_12128 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12114) : chs__$1.call(null,inst_12114));
var inst_12129 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12114) : done.call(null,inst_12114));
var inst_12130 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12128,inst_12129);
var ___$1 = (function (){var statearr_12178 = state_12156;
(statearr_12178[(4)] = cljs.core.rest((state_12156[(4)])));

return statearr_12178;
})();
var state_12156__$1 = state_12156;
var statearr_12179_13355 = state_12156__$1;
(statearr_12179_13355[(2)] = inst_12130);

(statearr_12179_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (5))){
var inst_12140 = (state_12156[(2)]);
var state_12156__$1 = (function (){var statearr_12180 = state_12156;
(statearr_12180[(13)] = inst_12140);

return statearr_12180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12156__$1,(13),dchan);
} else {
if((state_val_12157 === (14))){
var inst_12145 = cljs.core.async.close_BANG_(out);
var state_12156__$1 = state_12156;
var statearr_12181_13356 = state_12156__$1;
(statearr_12181_13356[(2)] = inst_12145);

(statearr_12181_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (16))){
var inst_12152 = (state_12156[(2)]);
var state_12156__$1 = state_12156;
var statearr_12182_13357 = state_12156__$1;
(statearr_12182_13357[(2)] = inst_12152);

(statearr_12182_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (10))){
var inst_12114 = (state_12156[(7)]);
var inst_12133 = (state_12156[(2)]);
var inst_12134 = (inst_12114 + (1));
var inst_12114__$1 = inst_12134;
var state_12156__$1 = (function (){var statearr_12183 = state_12156;
(statearr_12183[(7)] = inst_12114__$1);

(statearr_12183[(14)] = inst_12133);

return statearr_12183;
})();
var statearr_12184_13358 = state_12156__$1;
(statearr_12184_13358[(2)] = null);

(statearr_12184_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (8))){
var inst_12138 = (state_12156[(2)]);
var state_12156__$1 = state_12156;
var statearr_12185_13359 = state_12156__$1;
(statearr_12185_13359[(2)] = inst_12138);

(statearr_12185_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_12186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12186[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_12186[(1)] = (1));

return statearr_12186;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_12156){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_12156);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e12187){var ex__10907__auto__ = e12187;
var statearr_12188_13360 = state_12156;
(statearr_12188_13360[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_12156[(4)]))){
var statearr_12189_13361 = state_12156;
(statearr_12189_13361[(1)] = cljs.core.first((state_12156[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12156;
state_12156 = G__13362;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_12156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_12156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_12204 = f__10959__auto__();
(statearr_12204[(6)] = c__10958__auto___13342);

return statearr_12204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
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
var G__12207 = arguments.length;
switch (G__12207) {
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
var c__10958__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_12239){
var state_val_12240 = (state_12239[(1)]);
if((state_val_12240 === (7))){
var inst_12218 = (state_12239[(7)]);
var inst_12219 = (state_12239[(8)]);
var inst_12218__$1 = (state_12239[(2)]);
var inst_12219__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12218__$1,(0),null);
var inst_12220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12218__$1,(1),null);
var inst_12221 = (inst_12219__$1 == null);
var state_12239__$1 = (function (){var statearr_12257 = state_12239;
(statearr_12257[(9)] = inst_12220);

(statearr_12257[(7)] = inst_12218__$1);

(statearr_12257[(8)] = inst_12219__$1);

return statearr_12257;
})();
if(cljs.core.truth_(inst_12221)){
var statearr_12258_13365 = state_12239__$1;
(statearr_12258_13365[(1)] = (8));

} else {
var statearr_12259_13366 = state_12239__$1;
(statearr_12259_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (1))){
var inst_12208 = cljs.core.vec(chs);
var inst_12209 = inst_12208;
var state_12239__$1 = (function (){var statearr_12260 = state_12239;
(statearr_12260[(10)] = inst_12209);

return statearr_12260;
})();
var statearr_12261_13367 = state_12239__$1;
(statearr_12261_13367[(2)] = null);

(statearr_12261_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (4))){
var inst_12209 = (state_12239[(10)]);
var state_12239__$1 = state_12239;
return cljs.core.async.ioc_alts_BANG_(state_12239__$1,(7),inst_12209);
} else {
if((state_val_12240 === (6))){
var inst_12235 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
var statearr_12262_13368 = state_12239__$1;
(statearr_12262_13368[(2)] = inst_12235);

(statearr_12262_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (3))){
var inst_12237 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12239__$1,inst_12237);
} else {
if((state_val_12240 === (2))){
var inst_12209 = (state_12239[(10)]);
var inst_12211 = cljs.core.count(inst_12209);
var inst_12212 = (inst_12211 > (0));
var state_12239__$1 = state_12239;
if(cljs.core.truth_(inst_12212)){
var statearr_12264_13369 = state_12239__$1;
(statearr_12264_13369[(1)] = (4));

} else {
var statearr_12265_13370 = state_12239__$1;
(statearr_12265_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (11))){
var inst_12209 = (state_12239[(10)]);
var inst_12228 = (state_12239[(2)]);
var tmp12263 = inst_12209;
var inst_12209__$1 = tmp12263;
var state_12239__$1 = (function (){var statearr_12266 = state_12239;
(statearr_12266[(10)] = inst_12209__$1);

(statearr_12266[(11)] = inst_12228);

return statearr_12266;
})();
var statearr_12267_13371 = state_12239__$1;
(statearr_12267_13371[(2)] = null);

(statearr_12267_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (9))){
var inst_12219 = (state_12239[(8)]);
var state_12239__$1 = state_12239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12239__$1,(11),out,inst_12219);
} else {
if((state_val_12240 === (5))){
var inst_12233 = cljs.core.async.close_BANG_(out);
var state_12239__$1 = state_12239;
var statearr_12268_13372 = state_12239__$1;
(statearr_12268_13372[(2)] = inst_12233);

(statearr_12268_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (10))){
var inst_12231 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
var statearr_12269_13373 = state_12239__$1;
(statearr_12269_13373[(2)] = inst_12231);

(statearr_12269_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (8))){
var inst_12209 = (state_12239[(10)]);
var inst_12220 = (state_12239[(9)]);
var inst_12218 = (state_12239[(7)]);
var inst_12219 = (state_12239[(8)]);
var inst_12223 = (function (){var cs = inst_12209;
var vec__12214 = inst_12218;
var v = inst_12219;
var c = inst_12220;
return (function (p1__12205_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12205_SHARP_);
});
})();
var inst_12224 = cljs.core.filterv(inst_12223,inst_12209);
var inst_12209__$1 = inst_12224;
var state_12239__$1 = (function (){var statearr_12270 = state_12239;
(statearr_12270[(10)] = inst_12209__$1);

return statearr_12270;
})();
var statearr_12271_13374 = state_12239__$1;
(statearr_12271_13374[(2)] = null);

(statearr_12271_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_12272 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12272[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_12272[(1)] = (1));

return statearr_12272;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_12239){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_12239);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e12273){var ex__10907__auto__ = e12273;
var statearr_12274_13375 = state_12239;
(statearr_12274_13375[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_12239[(4)]))){
var statearr_12275_13376 = state_12239;
(statearr_12275_13376[(1)] = cljs.core.first((state_12239[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12239;
state_12239 = G__13377;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_12239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_12239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_12276 = f__10959__auto__();
(statearr_12276[(6)] = c__10958__auto___13364);

return statearr_12276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
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
var G__12278 = arguments.length;
switch (G__12278) {
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
var c__10958__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_12308){
var state_val_12309 = (state_12308[(1)]);
if((state_val_12309 === (7))){
var inst_12287 = (state_12308[(7)]);
var inst_12287__$1 = (state_12308[(2)]);
var inst_12289 = (inst_12287__$1 == null);
var inst_12290 = cljs.core.not(inst_12289);
var state_12308__$1 = (function (){var statearr_12311 = state_12308;
(statearr_12311[(7)] = inst_12287__$1);

return statearr_12311;
})();
if(inst_12290){
var statearr_12312_13380 = state_12308__$1;
(statearr_12312_13380[(1)] = (8));

} else {
var statearr_12313_13381 = state_12308__$1;
(statearr_12313_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (1))){
var inst_12282 = (0);
var state_12308__$1 = (function (){var statearr_12316 = state_12308;
(statearr_12316[(8)] = inst_12282);

return statearr_12316;
})();
var statearr_12317_13382 = state_12308__$1;
(statearr_12317_13382[(2)] = null);

(statearr_12317_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (4))){
var state_12308__$1 = state_12308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12308__$1,(7),ch);
} else {
if((state_val_12309 === (6))){
var inst_12302 = (state_12308[(2)]);
var state_12308__$1 = state_12308;
var statearr_12319_13383 = state_12308__$1;
(statearr_12319_13383[(2)] = inst_12302);

(statearr_12319_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (3))){
var inst_12304 = (state_12308[(2)]);
var inst_12305 = cljs.core.async.close_BANG_(out);
var state_12308__$1 = (function (){var statearr_12322 = state_12308;
(statearr_12322[(9)] = inst_12304);

return statearr_12322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12308__$1,inst_12305);
} else {
if((state_val_12309 === (2))){
var inst_12282 = (state_12308[(8)]);
var inst_12284 = (inst_12282 < n);
var state_12308__$1 = state_12308;
if(cljs.core.truth_(inst_12284)){
var statearr_12323_13384 = state_12308__$1;
(statearr_12323_13384[(1)] = (4));

} else {
var statearr_12324_13385 = state_12308__$1;
(statearr_12324_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (11))){
var inst_12282 = (state_12308[(8)]);
var inst_12294 = (state_12308[(2)]);
var inst_12295 = (inst_12282 + (1));
var inst_12282__$1 = inst_12295;
var state_12308__$1 = (function (){var statearr_12325 = state_12308;
(statearr_12325[(8)] = inst_12282__$1);

(statearr_12325[(10)] = inst_12294);

return statearr_12325;
})();
var statearr_12326_13386 = state_12308__$1;
(statearr_12326_13386[(2)] = null);

(statearr_12326_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (9))){
var state_12308__$1 = state_12308;
var statearr_12327_13387 = state_12308__$1;
(statearr_12327_13387[(2)] = null);

(statearr_12327_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (5))){
var state_12308__$1 = state_12308;
var statearr_12328_13388 = state_12308__$1;
(statearr_12328_13388[(2)] = null);

(statearr_12328_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (10))){
var inst_12299 = (state_12308[(2)]);
var state_12308__$1 = state_12308;
var statearr_12329_13389 = state_12308__$1;
(statearr_12329_13389[(2)] = inst_12299);

(statearr_12329_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (8))){
var inst_12287 = (state_12308[(7)]);
var state_12308__$1 = state_12308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12308__$1,(11),out,inst_12287);
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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_12330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12330[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_12330[(1)] = (1));

return statearr_12330;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_12308){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_12308);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e12331){var ex__10907__auto__ = e12331;
var statearr_12332_13390 = state_12308;
(statearr_12332_13390[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_12308[(4)]))){
var statearr_12333_13391 = state_12308;
(statearr_12333_13391[(1)] = cljs.core.first((state_12308[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12308;
state_12308 = G__13392;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_12308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_12308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_12334 = f__10959__auto__();
(statearr_12334[(6)] = c__10958__auto___13379);

return statearr_12334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12336 = (function (f,ch,meta12337){
this.f = f;
this.ch = ch;
this.meta12337 = meta12337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12338,meta12337__$1){
var self__ = this;
var _12338__$1 = this;
return (new cljs.core.async.t_cljs$core$async12336(self__.f,self__.ch,meta12337__$1));
}));

(cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12338){
var self__ = this;
var _12338__$1 = this;
return self__.meta12337;
}));

(cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12344 = (function (f,ch,meta12337,_,fn1,meta12345){
this.f = f;
this.ch = ch;
this.meta12337 = meta12337;
this._ = _;
this.fn1 = fn1;
this.meta12345 = meta12345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12346,meta12345__$1){
var self__ = this;
var _12346__$1 = this;
return (new cljs.core.async.t_cljs$core$async12344(self__.f,self__.ch,self__.meta12337,self__._,self__.fn1,meta12345__$1));
}));

(cljs.core.async.t_cljs$core$async12344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12346){
var self__ = this;
var _12346__$1 = this;
return self__.meta12345;
}));

(cljs.core.async.t_cljs$core$async12344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12335_SHARP_){
var G__12349 = (((p1__12335_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12335_SHARP_) : self__.f.call(null,p1__12335_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12349) : f1.call(null,G__12349));
});
}));

(cljs.core.async.t_cljs$core$async12344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12337","meta12337",-1150409756,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12336","cljs.core.async/t_cljs$core$async12336",1223395091,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12345","meta12345",959175176,null)], null);
}));

(cljs.core.async.t_cljs$core$async12344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12344");

(cljs.core.async.t_cljs$core$async12344.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12344.
 */
cljs.core.async.__GT_t_cljs$core$async12344 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12344(f__$1,ch__$1,meta12337__$1,___$2,fn1__$1,meta12345){
return (new cljs.core.async.t_cljs$core$async12344(f__$1,ch__$1,meta12337__$1,___$2,fn1__$1,meta12345));
});

}

return (new cljs.core.async.t_cljs$core$async12344(self__.f,self__.ch,self__.meta12337,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12350 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12350) : self__.f.call(null,G__12350));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12337","meta12337",-1150409756,null)], null);
}));

(cljs.core.async.t_cljs$core$async12336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12336");

(cljs.core.async.t_cljs$core$async12336.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12336.
 */
cljs.core.async.__GT_t_cljs$core$async12336 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12336(f__$1,ch__$1,meta12337){
return (new cljs.core.async.t_cljs$core$async12336(f__$1,ch__$1,meta12337));
});

}

return (new cljs.core.async.t_cljs$core$async12336(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12351 = (function (f,ch,meta12352){
this.f = f;
this.ch = ch;
this.meta12352 = meta12352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12353,meta12352__$1){
var self__ = this;
var _12353__$1 = this;
return (new cljs.core.async.t_cljs$core$async12351(self__.f,self__.ch,meta12352__$1));
}));

(cljs.core.async.t_cljs$core$async12351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12353){
var self__ = this;
var _12353__$1 = this;
return self__.meta12352;
}));

(cljs.core.async.t_cljs$core$async12351.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12351.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12351.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12352","meta12352",880293465,null)], null);
}));

(cljs.core.async.t_cljs$core$async12351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12351");

(cljs.core.async.t_cljs$core$async12351.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12351.
 */
cljs.core.async.__GT_t_cljs$core$async12351 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12351(f__$1,ch__$1,meta12352){
return (new cljs.core.async.t_cljs$core$async12351(f__$1,ch__$1,meta12352));
});

}

return (new cljs.core.async.t_cljs$core$async12351(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12354 = (function (p,ch,meta12355){
this.p = p;
this.ch = ch;
this.meta12355 = meta12355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12356,meta12355__$1){
var self__ = this;
var _12356__$1 = this;
return (new cljs.core.async.t_cljs$core$async12354(self__.p,self__.ch,meta12355__$1));
}));

(cljs.core.async.t_cljs$core$async12354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12356){
var self__ = this;
var _12356__$1 = this;
return self__.meta12355;
}));

(cljs.core.async.t_cljs$core$async12354.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12354.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12354.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12354.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12355","meta12355",-605994945,null)], null);
}));

(cljs.core.async.t_cljs$core$async12354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12354");

(cljs.core.async.t_cljs$core$async12354.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12354.
 */
cljs.core.async.__GT_t_cljs$core$async12354 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12354(p__$1,ch__$1,meta12355){
return (new cljs.core.async.t_cljs$core$async12354(p__$1,ch__$1,meta12355));
});

}

return (new cljs.core.async.t_cljs$core$async12354(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12363 = arguments.length;
switch (G__12363) {
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
var c__10958__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_12389){
var state_val_12390 = (state_12389[(1)]);
if((state_val_12390 === (7))){
var inst_12385 = (state_12389[(2)]);
var state_12389__$1 = state_12389;
var statearr_12391_13395 = state_12389__$1;
(statearr_12391_13395[(2)] = inst_12385);

(statearr_12391_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12390 === (1))){
var state_12389__$1 = state_12389;
var statearr_12392_13396 = state_12389__$1;
(statearr_12392_13396[(2)] = null);

(statearr_12392_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12390 === (4))){
var inst_12369 = (state_12389[(7)]);
var inst_12369__$1 = (state_12389[(2)]);
var inst_12370 = (inst_12369__$1 == null);
var state_12389__$1 = (function (){var statearr_12393 = state_12389;
(statearr_12393[(7)] = inst_12369__$1);

return statearr_12393;
})();
if(cljs.core.truth_(inst_12370)){
var statearr_12394_13397 = state_12389__$1;
(statearr_12394_13397[(1)] = (5));

} else {
var statearr_12395_13398 = state_12389__$1;
(statearr_12395_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12390 === (6))){
var inst_12369 = (state_12389[(7)]);
var inst_12374 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12369) : p.call(null,inst_12369));
var state_12389__$1 = state_12389;
if(cljs.core.truth_(inst_12374)){
var statearr_12396_13399 = state_12389__$1;
(statearr_12396_13399[(1)] = (8));

} else {
var statearr_12409_13400 = state_12389__$1;
(statearr_12409_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12390 === (3))){
var inst_12387 = (state_12389[(2)]);
var state_12389__$1 = state_12389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12389__$1,inst_12387);
} else {
if((state_val_12390 === (2))){
var state_12389__$1 = state_12389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12389__$1,(4),ch);
} else {
if((state_val_12390 === (11))){
var inst_12379 = (state_12389[(2)]);
var state_12389__$1 = state_12389;
var statearr_12411_13401 = state_12389__$1;
(statearr_12411_13401[(2)] = inst_12379);

(statearr_12411_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12390 === (9))){
var state_12389__$1 = state_12389;
var statearr_12416_13402 = state_12389__$1;
(statearr_12416_13402[(2)] = null);

(statearr_12416_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12390 === (5))){
var inst_12372 = cljs.core.async.close_BANG_(out);
var state_12389__$1 = state_12389;
var statearr_12419_13403 = state_12389__$1;
(statearr_12419_13403[(2)] = inst_12372);

(statearr_12419_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12390 === (10))){
var inst_12382 = (state_12389[(2)]);
var state_12389__$1 = (function (){var statearr_12423 = state_12389;
(statearr_12423[(8)] = inst_12382);

return statearr_12423;
})();
var statearr_12424_13404 = state_12389__$1;
(statearr_12424_13404[(2)] = null);

(statearr_12424_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12390 === (8))){
var inst_12369 = (state_12389[(7)]);
var state_12389__$1 = state_12389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12389__$1,(11),out,inst_12369);
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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_12426 = [null,null,null,null,null,null,null,null,null];
(statearr_12426[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_12426[(1)] = (1));

return statearr_12426;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_12389){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_12389);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e12427){var ex__10907__auto__ = e12427;
var statearr_12428_13405 = state_12389;
(statearr_12428_13405[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_12389[(4)]))){
var statearr_12429_13406 = state_12389;
(statearr_12429_13406[(1)] = cljs.core.first((state_12389[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12389;
state_12389 = G__13407;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_12389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_12389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_12430 = f__10959__auto__();
(statearr_12430[(6)] = c__10958__auto___13394);

return statearr_12430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12433 = arguments.length;
switch (G__12433) {
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
var c__10958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_12508){
var state_val_12509 = (state_12508[(1)]);
if((state_val_12509 === (7))){
var inst_12504 = (state_12508[(2)]);
var state_12508__$1 = state_12508;
var statearr_12512_13409 = state_12508__$1;
(statearr_12512_13409[(2)] = inst_12504);

(statearr_12512_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (20))){
var inst_12474 = (state_12508[(7)]);
var inst_12485 = (state_12508[(2)]);
var inst_12486 = cljs.core.next(inst_12474);
var inst_12447 = inst_12486;
var inst_12448 = null;
var inst_12449 = (0);
var inst_12450 = (0);
var state_12508__$1 = (function (){var statearr_12513 = state_12508;
(statearr_12513[(8)] = inst_12447);

(statearr_12513[(9)] = inst_12449);

(statearr_12513[(10)] = inst_12450);

(statearr_12513[(11)] = inst_12485);

(statearr_12513[(12)] = inst_12448);

return statearr_12513;
})();
var statearr_12514_13410 = state_12508__$1;
(statearr_12514_13410[(2)] = null);

(statearr_12514_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (1))){
var state_12508__$1 = state_12508;
var statearr_12517_13411 = state_12508__$1;
(statearr_12517_13411[(2)] = null);

(statearr_12517_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (4))){
var inst_12436 = (state_12508[(13)]);
var inst_12436__$1 = (state_12508[(2)]);
var inst_12437 = (inst_12436__$1 == null);
var state_12508__$1 = (function (){var statearr_12519 = state_12508;
(statearr_12519[(13)] = inst_12436__$1);

return statearr_12519;
})();
if(cljs.core.truth_(inst_12437)){
var statearr_12522_13412 = state_12508__$1;
(statearr_12522_13412[(1)] = (5));

} else {
var statearr_12524_13413 = state_12508__$1;
(statearr_12524_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (15))){
var state_12508__$1 = state_12508;
var statearr_12528_13414 = state_12508__$1;
(statearr_12528_13414[(2)] = null);

(statearr_12528_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (21))){
var state_12508__$1 = state_12508;
var statearr_12529_13415 = state_12508__$1;
(statearr_12529_13415[(2)] = null);

(statearr_12529_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (13))){
var inst_12447 = (state_12508[(8)]);
var inst_12449 = (state_12508[(9)]);
var inst_12450 = (state_12508[(10)]);
var inst_12448 = (state_12508[(12)]);
var inst_12470 = (state_12508[(2)]);
var inst_12471 = (inst_12450 + (1));
var tmp12525 = inst_12447;
var tmp12526 = inst_12449;
var tmp12527 = inst_12448;
var inst_12447__$1 = tmp12525;
var inst_12448__$1 = tmp12527;
var inst_12449__$1 = tmp12526;
var inst_12450__$1 = inst_12471;
var state_12508__$1 = (function (){var statearr_12533 = state_12508;
(statearr_12533[(8)] = inst_12447__$1);

(statearr_12533[(9)] = inst_12449__$1);

(statearr_12533[(10)] = inst_12450__$1);

(statearr_12533[(14)] = inst_12470);

(statearr_12533[(12)] = inst_12448__$1);

return statearr_12533;
})();
var statearr_12534_13416 = state_12508__$1;
(statearr_12534_13416[(2)] = null);

(statearr_12534_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (22))){
var state_12508__$1 = state_12508;
var statearr_12535_13417 = state_12508__$1;
(statearr_12535_13417[(2)] = null);

(statearr_12535_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (6))){
var inst_12436 = (state_12508[(13)]);
var inst_12445 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12436) : f.call(null,inst_12436));
var inst_12446 = cljs.core.seq(inst_12445);
var inst_12447 = inst_12446;
var inst_12448 = null;
var inst_12449 = (0);
var inst_12450 = (0);
var state_12508__$1 = (function (){var statearr_12539 = state_12508;
(statearr_12539[(8)] = inst_12447);

(statearr_12539[(9)] = inst_12449);

(statearr_12539[(10)] = inst_12450);

(statearr_12539[(12)] = inst_12448);

return statearr_12539;
})();
var statearr_12540_13418 = state_12508__$1;
(statearr_12540_13418[(2)] = null);

(statearr_12540_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (17))){
var inst_12474 = (state_12508[(7)]);
var inst_12478 = cljs.core.chunk_first(inst_12474);
var inst_12479 = cljs.core.chunk_rest(inst_12474);
var inst_12480 = cljs.core.count(inst_12478);
var inst_12447 = inst_12479;
var inst_12448 = inst_12478;
var inst_12449 = inst_12480;
var inst_12450 = (0);
var state_12508__$1 = (function (){var statearr_12541 = state_12508;
(statearr_12541[(8)] = inst_12447);

(statearr_12541[(9)] = inst_12449);

(statearr_12541[(10)] = inst_12450);

(statearr_12541[(12)] = inst_12448);

return statearr_12541;
})();
var statearr_12542_13419 = state_12508__$1;
(statearr_12542_13419[(2)] = null);

(statearr_12542_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (3))){
var inst_12506 = (state_12508[(2)]);
var state_12508__$1 = state_12508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12508__$1,inst_12506);
} else {
if((state_val_12509 === (12))){
var inst_12494 = (state_12508[(2)]);
var state_12508__$1 = state_12508;
var statearr_12543_13420 = state_12508__$1;
(statearr_12543_13420[(2)] = inst_12494);

(statearr_12543_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (2))){
var state_12508__$1 = state_12508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12508__$1,(4),in$);
} else {
if((state_val_12509 === (23))){
var inst_12502 = (state_12508[(2)]);
var state_12508__$1 = state_12508;
var statearr_12544_13421 = state_12508__$1;
(statearr_12544_13421[(2)] = inst_12502);

(statearr_12544_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (19))){
var inst_12489 = (state_12508[(2)]);
var state_12508__$1 = state_12508;
var statearr_12545_13422 = state_12508__$1;
(statearr_12545_13422[(2)] = inst_12489);

(statearr_12545_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (11))){
var inst_12474 = (state_12508[(7)]);
var inst_12447 = (state_12508[(8)]);
var inst_12474__$1 = cljs.core.seq(inst_12447);
var state_12508__$1 = (function (){var statearr_12546 = state_12508;
(statearr_12546[(7)] = inst_12474__$1);

return statearr_12546;
})();
if(inst_12474__$1){
var statearr_12547_13423 = state_12508__$1;
(statearr_12547_13423[(1)] = (14));

} else {
var statearr_12548_13424 = state_12508__$1;
(statearr_12548_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (9))){
var inst_12496 = (state_12508[(2)]);
var inst_12497 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12508__$1 = (function (){var statearr_12549 = state_12508;
(statearr_12549[(15)] = inst_12496);

return statearr_12549;
})();
if(cljs.core.truth_(inst_12497)){
var statearr_12550_13425 = state_12508__$1;
(statearr_12550_13425[(1)] = (21));

} else {
var statearr_12551_13426 = state_12508__$1;
(statearr_12551_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (5))){
var inst_12439 = cljs.core.async.close_BANG_(out);
var state_12508__$1 = state_12508;
var statearr_12552_13427 = state_12508__$1;
(statearr_12552_13427[(2)] = inst_12439);

(statearr_12552_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (14))){
var inst_12474 = (state_12508[(7)]);
var inst_12476 = cljs.core.chunked_seq_QMARK_(inst_12474);
var state_12508__$1 = state_12508;
if(inst_12476){
var statearr_12553_13428 = state_12508__$1;
(statearr_12553_13428[(1)] = (17));

} else {
var statearr_12554_13429 = state_12508__$1;
(statearr_12554_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (16))){
var inst_12492 = (state_12508[(2)]);
var state_12508__$1 = state_12508;
var statearr_12555_13430 = state_12508__$1;
(statearr_12555_13430[(2)] = inst_12492);

(statearr_12555_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (10))){
var inst_12450 = (state_12508[(10)]);
var inst_12448 = (state_12508[(12)]);
var inst_12468 = cljs.core._nth(inst_12448,inst_12450);
var state_12508__$1 = state_12508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12508__$1,(13),out,inst_12468);
} else {
if((state_val_12509 === (18))){
var inst_12474 = (state_12508[(7)]);
var inst_12483 = cljs.core.first(inst_12474);
var state_12508__$1 = state_12508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12508__$1,(20),out,inst_12483);
} else {
if((state_val_12509 === (8))){
var inst_12449 = (state_12508[(9)]);
var inst_12450 = (state_12508[(10)]);
var inst_12465 = (inst_12450 < inst_12449);
var inst_12466 = inst_12465;
var state_12508__$1 = state_12508;
if(cljs.core.truth_(inst_12466)){
var statearr_12556_13431 = state_12508__$1;
(statearr_12556_13431[(1)] = (10));

} else {
var statearr_12557_13432 = state_12508__$1;
(statearr_12557_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10904__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10904__auto____0 = (function (){
var statearr_12558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12558[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10904__auto__);

(statearr_12558[(1)] = (1));

return statearr_12558;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10904__auto____1 = (function (state_12508){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_12508);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e12559){var ex__10907__auto__ = e12559;
var statearr_12560_13433 = state_12508;
(statearr_12560_13433[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_12508[(4)]))){
var statearr_12562_13434 = state_12508;
(statearr_12562_13434[(1)] = cljs.core.first((state_12508[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12508;
state_12508 = G__13435;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10904__auto__ = function(state_12508){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10904__auto____1.call(this,state_12508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10904__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10904__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_12563 = f__10959__auto__();
(statearr_12563[(6)] = c__10958__auto__);

return statearr_12563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));

return c__10958__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12565 = arguments.length;
switch (G__12565) {
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
var G__12569 = arguments.length;
switch (G__12569) {
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
var G__12575 = arguments.length;
switch (G__12575) {
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
var c__10958__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_12599){
var state_val_12600 = (state_12599[(1)]);
if((state_val_12600 === (7))){
var inst_12594 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
var statearr_12601_13440 = state_12599__$1;
(statearr_12601_13440[(2)] = inst_12594);

(statearr_12601_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (1))){
var inst_12576 = null;
var state_12599__$1 = (function (){var statearr_12602 = state_12599;
(statearr_12602[(7)] = inst_12576);

return statearr_12602;
})();
var statearr_12603_13441 = state_12599__$1;
(statearr_12603_13441[(2)] = null);

(statearr_12603_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (4))){
var inst_12579 = (state_12599[(8)]);
var inst_12579__$1 = (state_12599[(2)]);
var inst_12580 = (inst_12579__$1 == null);
var inst_12581 = cljs.core.not(inst_12580);
var state_12599__$1 = (function (){var statearr_12604 = state_12599;
(statearr_12604[(8)] = inst_12579__$1);

return statearr_12604;
})();
if(inst_12581){
var statearr_12608_13442 = state_12599__$1;
(statearr_12608_13442[(1)] = (5));

} else {
var statearr_12609_13443 = state_12599__$1;
(statearr_12609_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (6))){
var state_12599__$1 = state_12599;
var statearr_12610_13444 = state_12599__$1;
(statearr_12610_13444[(2)] = null);

(statearr_12610_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (3))){
var inst_12596 = (state_12599[(2)]);
var inst_12597 = cljs.core.async.close_BANG_(out);
var state_12599__$1 = (function (){var statearr_12612 = state_12599;
(statearr_12612[(9)] = inst_12596);

return statearr_12612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12599__$1,inst_12597);
} else {
if((state_val_12600 === (2))){
var state_12599__$1 = state_12599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12599__$1,(4),ch);
} else {
if((state_val_12600 === (11))){
var inst_12579 = (state_12599[(8)]);
var inst_12588 = (state_12599[(2)]);
var inst_12576 = inst_12579;
var state_12599__$1 = (function (){var statearr_12616 = state_12599;
(statearr_12616[(7)] = inst_12576);

(statearr_12616[(10)] = inst_12588);

return statearr_12616;
})();
var statearr_12617_13445 = state_12599__$1;
(statearr_12617_13445[(2)] = null);

(statearr_12617_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (9))){
var inst_12579 = (state_12599[(8)]);
var state_12599__$1 = state_12599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12599__$1,(11),out,inst_12579);
} else {
if((state_val_12600 === (5))){
var inst_12576 = (state_12599[(7)]);
var inst_12579 = (state_12599[(8)]);
var inst_12583 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12579,inst_12576);
var state_12599__$1 = state_12599;
if(inst_12583){
var statearr_12619_13446 = state_12599__$1;
(statearr_12619_13446[(1)] = (8));

} else {
var statearr_12620_13447 = state_12599__$1;
(statearr_12620_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (10))){
var inst_12591 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
var statearr_12621_13448 = state_12599__$1;
(statearr_12621_13448[(2)] = inst_12591);

(statearr_12621_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (8))){
var inst_12576 = (state_12599[(7)]);
var tmp12618 = inst_12576;
var inst_12576__$1 = tmp12618;
var state_12599__$1 = (function (){var statearr_12622 = state_12599;
(statearr_12622[(7)] = inst_12576__$1);

return statearr_12622;
})();
var statearr_12623_13449 = state_12599__$1;
(statearr_12623_13449[(2)] = null);

(statearr_12623_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_12627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12627[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_12627[(1)] = (1));

return statearr_12627;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_12599){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_12599);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e12629){var ex__10907__auto__ = e12629;
var statearr_12630_13450 = state_12599;
(statearr_12630_13450[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_12599[(4)]))){
var statearr_12631_13451 = state_12599;
(statearr_12631_13451[(1)] = cljs.core.first((state_12599[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12599;
state_12599 = G__13452;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_12599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_12599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_12632 = f__10959__auto__();
(statearr_12632[(6)] = c__10958__auto___13439);

return statearr_12632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12634 = arguments.length;
switch (G__12634) {
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
var c__10958__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_12672){
var state_val_12673 = (state_12672[(1)]);
if((state_val_12673 === (7))){
var inst_12668 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
var statearr_12674_13455 = state_12672__$1;
(statearr_12674_13455[(2)] = inst_12668);

(statearr_12674_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (1))){
var inst_12635 = (new Array(n));
var inst_12636 = inst_12635;
var inst_12637 = (0);
var state_12672__$1 = (function (){var statearr_12675 = state_12672;
(statearr_12675[(7)] = inst_12636);

(statearr_12675[(8)] = inst_12637);

return statearr_12675;
})();
var statearr_12676_13456 = state_12672__$1;
(statearr_12676_13456[(2)] = null);

(statearr_12676_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (4))){
var inst_12640 = (state_12672[(9)]);
var inst_12640__$1 = (state_12672[(2)]);
var inst_12641 = (inst_12640__$1 == null);
var inst_12642 = cljs.core.not(inst_12641);
var state_12672__$1 = (function (){var statearr_12677 = state_12672;
(statearr_12677[(9)] = inst_12640__$1);

return statearr_12677;
})();
if(inst_12642){
var statearr_12678_13457 = state_12672__$1;
(statearr_12678_13457[(1)] = (5));

} else {
var statearr_12679_13458 = state_12672__$1;
(statearr_12679_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (15))){
var inst_12662 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
var statearr_12680_13459 = state_12672__$1;
(statearr_12680_13459[(2)] = inst_12662);

(statearr_12680_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (13))){
var state_12672__$1 = state_12672;
var statearr_12681_13460 = state_12672__$1;
(statearr_12681_13460[(2)] = null);

(statearr_12681_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (6))){
var inst_12637 = (state_12672[(8)]);
var inst_12658 = (inst_12637 > (0));
var state_12672__$1 = state_12672;
if(cljs.core.truth_(inst_12658)){
var statearr_12682_13461 = state_12672__$1;
(statearr_12682_13461[(1)] = (12));

} else {
var statearr_12683_13462 = state_12672__$1;
(statearr_12683_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (3))){
var inst_12670 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12672__$1,inst_12670);
} else {
if((state_val_12673 === (12))){
var inst_12636 = (state_12672[(7)]);
var inst_12660 = cljs.core.vec(inst_12636);
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12672__$1,(15),out,inst_12660);
} else {
if((state_val_12673 === (2))){
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12672__$1,(4),ch);
} else {
if((state_val_12673 === (11))){
var inst_12652 = (state_12672[(2)]);
var inst_12653 = (new Array(n));
var inst_12636 = inst_12653;
var inst_12637 = (0);
var state_12672__$1 = (function (){var statearr_12684 = state_12672;
(statearr_12684[(7)] = inst_12636);

(statearr_12684[(8)] = inst_12637);

(statearr_12684[(10)] = inst_12652);

return statearr_12684;
})();
var statearr_12685_13463 = state_12672__$1;
(statearr_12685_13463[(2)] = null);

(statearr_12685_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (9))){
var inst_12636 = (state_12672[(7)]);
var inst_12650 = cljs.core.vec(inst_12636);
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12672__$1,(11),out,inst_12650);
} else {
if((state_val_12673 === (5))){
var inst_12636 = (state_12672[(7)]);
var inst_12637 = (state_12672[(8)]);
var inst_12645 = (state_12672[(11)]);
var inst_12640 = (state_12672[(9)]);
var inst_12644 = (inst_12636[inst_12637] = inst_12640);
var inst_12645__$1 = (inst_12637 + (1));
var inst_12646 = (inst_12645__$1 < n);
var state_12672__$1 = (function (){var statearr_12688 = state_12672;
(statearr_12688[(12)] = inst_12644);

(statearr_12688[(11)] = inst_12645__$1);

return statearr_12688;
})();
if(cljs.core.truth_(inst_12646)){
var statearr_12689_13464 = state_12672__$1;
(statearr_12689_13464[(1)] = (8));

} else {
var statearr_12690_13465 = state_12672__$1;
(statearr_12690_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (14))){
var inst_12665 = (state_12672[(2)]);
var inst_12666 = cljs.core.async.close_BANG_(out);
var state_12672__$1 = (function (){var statearr_12692 = state_12672;
(statearr_12692[(13)] = inst_12665);

return statearr_12692;
})();
var statearr_12693_13466 = state_12672__$1;
(statearr_12693_13466[(2)] = inst_12666);

(statearr_12693_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (10))){
var inst_12656 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
var statearr_12694_13467 = state_12672__$1;
(statearr_12694_13467[(2)] = inst_12656);

(statearr_12694_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (8))){
var inst_12636 = (state_12672[(7)]);
var inst_12645 = (state_12672[(11)]);
var tmp12691 = inst_12636;
var inst_12636__$1 = tmp12691;
var inst_12637 = inst_12645;
var state_12672__$1 = (function (){var statearr_12695 = state_12672;
(statearr_12695[(7)] = inst_12636__$1);

(statearr_12695[(8)] = inst_12637);

return statearr_12695;
})();
var statearr_12696_13468 = state_12672__$1;
(statearr_12696_13468[(2)] = null);

(statearr_12696_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_12698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12698[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_12698[(1)] = (1));

return statearr_12698;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_12672){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_12672);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e12699){var ex__10907__auto__ = e12699;
var statearr_12700_13469 = state_12672;
(statearr_12700_13469[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_12672[(4)]))){
var statearr_12701_13470 = state_12672;
(statearr_12701_13470[(1)] = cljs.core.first((state_12672[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12672;
state_12672 = G__13471;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_12672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_12672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_12702 = f__10959__auto__();
(statearr_12702[(6)] = c__10958__auto___13454);

return statearr_12702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12704 = arguments.length;
switch (G__12704) {
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
var c__10958__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10959__auto__ = (function (){var switch__10903__auto__ = (function (state_12746){
var state_val_12747 = (state_12746[(1)]);
if((state_val_12747 === (7))){
var inst_12742 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_12748_13474 = state_12746__$1;
(statearr_12748_13474[(2)] = inst_12742);

(statearr_12748_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (1))){
var inst_12705 = [];
var inst_12706 = inst_12705;
var inst_12707 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12746__$1 = (function (){var statearr_12749 = state_12746;
(statearr_12749[(7)] = inst_12707);

(statearr_12749[(8)] = inst_12706);

return statearr_12749;
})();
var statearr_12751_13475 = state_12746__$1;
(statearr_12751_13475[(2)] = null);

(statearr_12751_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (4))){
var inst_12710 = (state_12746[(9)]);
var inst_12710__$1 = (state_12746[(2)]);
var inst_12711 = (inst_12710__$1 == null);
var inst_12712 = cljs.core.not(inst_12711);
var state_12746__$1 = (function (){var statearr_12752 = state_12746;
(statearr_12752[(9)] = inst_12710__$1);

return statearr_12752;
})();
if(inst_12712){
var statearr_12753_13476 = state_12746__$1;
(statearr_12753_13476[(1)] = (5));

} else {
var statearr_12754_13477 = state_12746__$1;
(statearr_12754_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (15))){
var inst_12736 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_12755_13478 = state_12746__$1;
(statearr_12755_13478[(2)] = inst_12736);

(statearr_12755_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (13))){
var state_12746__$1 = state_12746;
var statearr_12756_13479 = state_12746__$1;
(statearr_12756_13479[(2)] = null);

(statearr_12756_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (6))){
var inst_12706 = (state_12746[(8)]);
var inst_12731 = inst_12706.length;
var inst_12732 = (inst_12731 > (0));
var state_12746__$1 = state_12746;
if(cljs.core.truth_(inst_12732)){
var statearr_12757_13480 = state_12746__$1;
(statearr_12757_13480[(1)] = (12));

} else {
var statearr_12758_13481 = state_12746__$1;
(statearr_12758_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (3))){
var inst_12744 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12746__$1,inst_12744);
} else {
if((state_val_12747 === (12))){
var inst_12706 = (state_12746[(8)]);
var inst_12734 = cljs.core.vec(inst_12706);
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12746__$1,(15),out,inst_12734);
} else {
if((state_val_12747 === (2))){
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12746__$1,(4),ch);
} else {
if((state_val_12747 === (11))){
var inst_12710 = (state_12746[(9)]);
var inst_12714 = (state_12746[(10)]);
var inst_12724 = (state_12746[(2)]);
var inst_12725 = [];
var inst_12726 = inst_12725.push(inst_12710);
var inst_12706 = inst_12725;
var inst_12707 = inst_12714;
var state_12746__$1 = (function (){var statearr_12759 = state_12746;
(statearr_12759[(7)] = inst_12707);

(statearr_12759[(11)] = inst_12726);

(statearr_12759[(12)] = inst_12724);

(statearr_12759[(8)] = inst_12706);

return statearr_12759;
})();
var statearr_12761_13482 = state_12746__$1;
(statearr_12761_13482[(2)] = null);

(statearr_12761_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (9))){
var inst_12706 = (state_12746[(8)]);
var inst_12722 = cljs.core.vec(inst_12706);
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12746__$1,(11),out,inst_12722);
} else {
if((state_val_12747 === (5))){
var inst_12707 = (state_12746[(7)]);
var inst_12710 = (state_12746[(9)]);
var inst_12714 = (state_12746[(10)]);
var inst_12714__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12710) : f.call(null,inst_12710));
var inst_12715 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12714__$1,inst_12707);
var inst_12716 = cljs.core.keyword_identical_QMARK_(inst_12707,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12717 = ((inst_12715) || (inst_12716));
var state_12746__$1 = (function (){var statearr_12762 = state_12746;
(statearr_12762[(10)] = inst_12714__$1);

return statearr_12762;
})();
if(cljs.core.truth_(inst_12717)){
var statearr_12763_13483 = state_12746__$1;
(statearr_12763_13483[(1)] = (8));

} else {
var statearr_12764_13484 = state_12746__$1;
(statearr_12764_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (14))){
var inst_12739 = (state_12746[(2)]);
var inst_12740 = cljs.core.async.close_BANG_(out);
var state_12746__$1 = (function (){var statearr_12766 = state_12746;
(statearr_12766[(13)] = inst_12739);

return statearr_12766;
})();
var statearr_12767_13485 = state_12746__$1;
(statearr_12767_13485[(2)] = inst_12740);

(statearr_12767_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (10))){
var inst_12729 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_12768_13486 = state_12746__$1;
(statearr_12768_13486[(2)] = inst_12729);

(statearr_12768_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (8))){
var inst_12710 = (state_12746[(9)]);
var inst_12714 = (state_12746[(10)]);
var inst_12706 = (state_12746[(8)]);
var inst_12719 = inst_12706.push(inst_12710);
var tmp12765 = inst_12706;
var inst_12706__$1 = tmp12765;
var inst_12707 = inst_12714;
var state_12746__$1 = (function (){var statearr_12769 = state_12746;
(statearr_12769[(7)] = inst_12707);

(statearr_12769[(14)] = inst_12719);

(statearr_12769[(8)] = inst_12706__$1);

return statearr_12769;
})();
var statearr_12770_13487 = state_12746__$1;
(statearr_12770_13487[(2)] = null);

(statearr_12770_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10904__auto__ = null;
var cljs$core$async$state_machine__10904__auto____0 = (function (){
var statearr_12771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12771[(0)] = cljs$core$async$state_machine__10904__auto__);

(statearr_12771[(1)] = (1));

return statearr_12771;
});
var cljs$core$async$state_machine__10904__auto____1 = (function (state_12746){
while(true){
var ret_value__10905__auto__ = (function (){try{while(true){
var result__10906__auto__ = switch__10903__auto__(state_12746);
if(cljs.core.keyword_identical_QMARK_(result__10906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10906__auto__;
}
break;
}
}catch (e12772){var ex__10907__auto__ = e12772;
var statearr_12773_13488 = state_12746;
(statearr_12773_13488[(2)] = ex__10907__auto__);


if(cljs.core.seq((state_12746[(4)]))){
var statearr_12774_13489 = state_12746;
(statearr_12774_13489[(1)] = cljs.core.first((state_12746[(4)])));

} else {
throw ex__10907__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12746;
state_12746 = G__13490;
continue;
} else {
return ret_value__10905__auto__;
}
break;
}
});
cljs$core$async$state_machine__10904__auto__ = function(state_12746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10904__auto____1.call(this,state_12746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10904__auto____0;
cljs$core$async$state_machine__10904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10904__auto____1;
return cljs$core$async$state_machine__10904__auto__;
})()
})();
var state__10960__auto__ = (function (){var statearr_12775 = f__10959__auto__();
(statearr_12775[(6)] = c__10958__auto___13473);

return statearr_12775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10960__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
