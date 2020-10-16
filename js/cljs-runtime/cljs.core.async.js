goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11036 = arguments.length;
switch (G__11036) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11037 = (function (f,blockable,meta11038){
this.f = f;
this.blockable = blockable;
this.meta11038 = meta11038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11039,meta11038__$1){
var self__ = this;
var _11039__$1 = this;
return (new cljs.core.async.t_cljs$core$async11037(self__.f,self__.blockable,meta11038__$1));
}));

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11039){
var self__ = this;
var _11039__$1 = this;
return self__.meta11038;
}));

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11038","meta11038",282322275,null)], null);
}));

(cljs.core.async.t_cljs$core$async11037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11037");

(cljs.core.async.t_cljs$core$async11037.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11037.
 */
cljs.core.async.__GT_t_cljs$core$async11037 = (function cljs$core$async$__GT_t_cljs$core$async11037(f__$1,blockable__$1,meta11038){
return (new cljs.core.async.t_cljs$core$async11037(f__$1,blockable__$1,meta11038));
});

}

return (new cljs.core.async.t_cljs$core$async11037(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11042 = arguments.length;
switch (G__11042) {
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
var G__11050 = arguments.length;
switch (G__11050) {
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
var G__11052 = arguments.length;
switch (G__11052) {
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
var val_13026 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13026) : fn1.call(null,val_13026));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13026) : fn1.call(null,val_13026));
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
var G__11056 = arguments.length;
switch (G__11056) {
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
var n__4613__auto___13028 = n;
var x_13029 = (0);
while(true){
if((x_13029 < n__4613__auto___13028)){
(a[x_13029] = x_13029);

var G__13030 = (x_13029 + (1));
x_13029 = G__13030;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11057 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11057 = (function (flag,meta11058){
this.flag = flag;
this.meta11058 = meta11058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11059,meta11058__$1){
var self__ = this;
var _11059__$1 = this;
return (new cljs.core.async.t_cljs$core$async11057(self__.flag,meta11058__$1));
}));

(cljs.core.async.t_cljs$core$async11057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11059){
var self__ = this;
var _11059__$1 = this;
return self__.meta11058;
}));

(cljs.core.async.t_cljs$core$async11057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11058","meta11058",-1208125250,null)], null);
}));

(cljs.core.async.t_cljs$core$async11057.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11057");

(cljs.core.async.t_cljs$core$async11057.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11057");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11057.
 */
cljs.core.async.__GT_t_cljs$core$async11057 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11057(flag__$1,meta11058){
return (new cljs.core.async.t_cljs$core$async11057(flag__$1,meta11058));
});

}

return (new cljs.core.async.t_cljs$core$async11057(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11068 = (function (flag,cb,meta11069){
this.flag = flag;
this.cb = cb;
this.meta11069 = meta11069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11070,meta11069__$1){
var self__ = this;
var _11070__$1 = this;
return (new cljs.core.async.t_cljs$core$async11068(self__.flag,self__.cb,meta11069__$1));
}));

(cljs.core.async.t_cljs$core$async11068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11070){
var self__ = this;
var _11070__$1 = this;
return self__.meta11069;
}));

(cljs.core.async.t_cljs$core$async11068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11069","meta11069",-1199666927,null)], null);
}));

(cljs.core.async.t_cljs$core$async11068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11068");

(cljs.core.async.t_cljs$core$async11068.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11068.
 */
cljs.core.async.__GT_t_cljs$core$async11068 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11068(flag__$1,cb__$1,meta11069){
return (new cljs.core.async.t_cljs$core$async11068(flag__$1,cb__$1,meta11069));
});

}

return (new cljs.core.async.t_cljs$core$async11068(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11074_SHARP_){
var G__11079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11074_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11079) : fret.call(null,G__11079));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11078_SHARP_){
var G__11080 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11078_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11080) : fret.call(null,G__11080));
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
var G__13035 = (i + (1));
i = G__13035;
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
var len__4736__auto___13036 = arguments.length;
var i__4737__auto___13037 = (0);
while(true){
if((i__4737__auto___13037 < len__4736__auto___13036)){
args__4742__auto__.push((arguments[i__4737__auto___13037]));

var G__13038 = (i__4737__auto___13037 + (1));
i__4737__auto___13037 = G__13038;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11087){
var map__11088 = p__11087;
var map__11088__$1 = (((((!((map__11088 == null))))?(((((map__11088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11088):map__11088);
var opts = map__11088__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11081){
var G__11082 = cljs.core.first(seq11081);
var seq11081__$1 = cljs.core.next(seq11081);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11082,seq11081__$1);
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
var G__11106 = arguments.length;
switch (G__11106) {
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
var c__10976__auto___13040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_11154){
var state_val_11155 = (state_11154[(1)]);
if((state_val_11155 === (7))){
var inst_11150 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
var statearr_11162_13041 = state_11154__$1;
(statearr_11162_13041[(2)] = inst_11150);

(statearr_11162_13041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (1))){
var state_11154__$1 = state_11154;
var statearr_11163_13042 = state_11154__$1;
(statearr_11163_13042[(2)] = null);

(statearr_11163_13042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (4))){
var inst_11113 = (state_11154[(7)]);
var inst_11113__$1 = (state_11154[(2)]);
var inst_11132 = (inst_11113__$1 == null);
var state_11154__$1 = (function (){var statearr_11164 = state_11154;
(statearr_11164[(7)] = inst_11113__$1);

return statearr_11164;
})();
if(cljs.core.truth_(inst_11132)){
var statearr_11165_13043 = state_11154__$1;
(statearr_11165_13043[(1)] = (5));

} else {
var statearr_11166_13044 = state_11154__$1;
(statearr_11166_13044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (13))){
var state_11154__$1 = state_11154;
var statearr_11167_13045 = state_11154__$1;
(statearr_11167_13045[(2)] = null);

(statearr_11167_13045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (6))){
var inst_11113 = (state_11154[(7)]);
var state_11154__$1 = state_11154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11154__$1,(11),to,inst_11113);
} else {
if((state_val_11155 === (3))){
var inst_11152 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11154__$1,inst_11152);
} else {
if((state_val_11155 === (12))){
var state_11154__$1 = state_11154;
var statearr_11168_13046 = state_11154__$1;
(statearr_11168_13046[(2)] = null);

(statearr_11168_13046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (2))){
var state_11154__$1 = state_11154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11154__$1,(4),from);
} else {
if((state_val_11155 === (11))){
var inst_11141 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
if(cljs.core.truth_(inst_11141)){
var statearr_11169_13047 = state_11154__$1;
(statearr_11169_13047[(1)] = (12));

} else {
var statearr_11170_13048 = state_11154__$1;
(statearr_11170_13048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (9))){
var state_11154__$1 = state_11154;
var statearr_11171_13049 = state_11154__$1;
(statearr_11171_13049[(2)] = null);

(statearr_11171_13049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (5))){
var state_11154__$1 = state_11154;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11172_13050 = state_11154__$1;
(statearr_11172_13050[(1)] = (8));

} else {
var statearr_11173_13051 = state_11154__$1;
(statearr_11173_13051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (14))){
var inst_11148 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
var statearr_11174_13052 = state_11154__$1;
(statearr_11174_13052[(2)] = inst_11148);

(statearr_11174_13052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (10))){
var inst_11138 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
var statearr_11175_13053 = state_11154__$1;
(statearr_11175_13053[(2)] = inst_11138);

(statearr_11175_13053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (8))){
var inst_11135 = cljs.core.async.close_BANG_(to);
var state_11154__$1 = state_11154;
var statearr_11176_13054 = state_11154__$1;
(statearr_11176_13054[(2)] = inst_11135);

(statearr_11176_13054[(1)] = (10));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_11179 = [null,null,null,null,null,null,null,null];
(statearr_11179[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_11179[(1)] = (1));

return statearr_11179;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_11154){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11154);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11182){var ex__10932__auto__ = e11182;
var statearr_11183_13055 = state_11154;
(statearr_11183_13055[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11154[(4)]))){
var statearr_11184_13056 = state_11154;
(statearr_11184_13056[(1)] = cljs.core.first((state_11154[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13057 = state_11154;
state_11154 = G__13057;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_11154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_11154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11187 = f__10977__auto__();
(statearr_11187[(6)] = c__10976__auto___13040);

return statearr_11187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var process = (function (p__11194){
var vec__11195 = p__11194;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11195,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11195,(1),null);
var job = vec__11195;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10976__auto___13058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_11202){
var state_val_11203 = (state_11202[(1)]);
if((state_val_11203 === (1))){
var state_11202__$1 = state_11202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11202__$1,(2),res,v);
} else {
if((state_val_11203 === (2))){
var inst_11199 = (state_11202[(2)]);
var inst_11200 = cljs.core.async.close_BANG_(res);
var state_11202__$1 = (function (){var statearr_11204 = state_11202;
(statearr_11204[(7)] = inst_11199);

return statearr_11204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11202__$1,inst_11200);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11205 = [null,null,null,null,null,null,null,null];
(statearr_11205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11205[(1)] = (1));

return statearr_11205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11202){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11202);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11206){var ex__10932__auto__ = e11206;
var statearr_11207_13059 = state_11202;
(statearr_11207_13059[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11202[(4)]))){
var statearr_11208_13060 = state_11202;
(statearr_11208_13060[(1)] = cljs.core.first((state_11202[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13061 = state_11202;
state_11202 = G__13061;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11212 = f__10977__auto__();
(statearr_11212[(6)] = c__10976__auto___13058);

return statearr_11212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11216){
var vec__11217 = p__11216;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11217,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11217,(1),null);
var job = vec__11217;
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
var n__4613__auto___13062 = n;
var __13063 = (0);
while(true){
if((__13063 < n__4613__auto___13062)){
var G__11225_13064 = type;
var G__11225_13065__$1 = (((G__11225_13064 instanceof cljs.core.Keyword))?G__11225_13064.fqn:null);
switch (G__11225_13065__$1) {
case "compute":
var c__10976__auto___13067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__10976__auto___13067,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = ((function (__13063,c__10976__auto___13067,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11238){
var state_val_11239 = (state_11238[(1)]);
if((state_val_11239 === (1))){
var state_11238__$1 = state_11238;
var statearr_11240_13068 = state_11238__$1;
(statearr_11240_13068[(2)] = null);

(statearr_11240_13068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11239 === (2))){
var state_11238__$1 = state_11238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11238__$1,(4),jobs);
} else {
if((state_val_11239 === (3))){
var inst_11236 = (state_11238[(2)]);
var state_11238__$1 = state_11238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11238__$1,inst_11236);
} else {
if((state_val_11239 === (4))){
var inst_11228 = (state_11238[(2)]);
var inst_11229 = process(inst_11228);
var state_11238__$1 = state_11238;
if(cljs.core.truth_(inst_11229)){
var statearr_11241_13069 = state_11238__$1;
(statearr_11241_13069[(1)] = (5));

} else {
var statearr_11242_13070 = state_11238__$1;
(statearr_11242_13070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11239 === (5))){
var state_11238__$1 = state_11238;
var statearr_11243_13071 = state_11238__$1;
(statearr_11243_13071[(2)] = null);

(statearr_11243_13071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11239 === (6))){
var state_11238__$1 = state_11238;
var statearr_11244_13072 = state_11238__$1;
(statearr_11244_13072[(2)] = null);

(statearr_11244_13072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11239 === (7))){
var inst_11234 = (state_11238[(2)]);
var state_11238__$1 = state_11238;
var statearr_11245_13073 = state_11238__$1;
(statearr_11245_13073[(2)] = inst_11234);

(statearr_11245_13073[(1)] = (3));


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
});})(__13063,c__10976__auto___13067,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10928__auto__,c__10976__auto___13067,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11246 = [null,null,null,null,null,null,null];
(statearr_11246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11246[(1)] = (1));

return statearr_11246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11238){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11238);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11247){var ex__10932__auto__ = e11247;
var statearr_11248_13074 = state_11238;
(statearr_11248_13074[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11238[(4)]))){
var statearr_11249_13075 = state_11238;
(statearr_11249_13075[(1)] = cljs.core.first((state_11238[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13076 = state_11238;
state_11238 = G__13076;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
;})(__13063,switch__10928__auto__,c__10976__auto___13067,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__10978__auto__ = (function (){var statearr_11252 = f__10977__auto__();
(statearr_11252[(6)] = c__10976__auto___13067);

return statearr_11252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
});})(__13063,c__10976__auto___13067,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
case "async":
var c__10976__auto___13077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__10976__auto___13077,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = ((function (__13063,c__10976__auto___13077,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11266){
var state_val_11267 = (state_11266[(1)]);
if((state_val_11267 === (1))){
var state_11266__$1 = state_11266;
var statearr_11268_13078 = state_11266__$1;
(statearr_11268_13078[(2)] = null);

(statearr_11268_13078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (2))){
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11266__$1,(4),jobs);
} else {
if((state_val_11267 === (3))){
var inst_11264 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11266__$1,inst_11264);
} else {
if((state_val_11267 === (4))){
var inst_11256 = (state_11266[(2)]);
var inst_11257 = async(inst_11256);
var state_11266__$1 = state_11266;
if(cljs.core.truth_(inst_11257)){
var statearr_11269_13079 = state_11266__$1;
(statearr_11269_13079[(1)] = (5));

} else {
var statearr_11270_13080 = state_11266__$1;
(statearr_11270_13080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (5))){
var state_11266__$1 = state_11266;
var statearr_11271_13081 = state_11266__$1;
(statearr_11271_13081[(2)] = null);

(statearr_11271_13081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (6))){
var state_11266__$1 = state_11266;
var statearr_11277_13082 = state_11266__$1;
(statearr_11277_13082[(2)] = null);

(statearr_11277_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (7))){
var inst_11262 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
var statearr_11278_13083 = state_11266__$1;
(statearr_11278_13083[(2)] = inst_11262);

(statearr_11278_13083[(1)] = (3));


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
});})(__13063,c__10976__auto___13077,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10928__auto__,c__10976__auto___13077,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11279 = [null,null,null,null,null,null,null];
(statearr_11279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11279[(1)] = (1));

return statearr_11279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11266){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11266);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11280){var ex__10932__auto__ = e11280;
var statearr_11281_13084 = state_11266;
(statearr_11281_13084[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11266[(4)]))){
var statearr_11282_13085 = state_11266;
(statearr_11282_13085[(1)] = cljs.core.first((state_11266[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13086 = state_11266;
state_11266 = G__13086;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
;})(__13063,switch__10928__auto__,c__10976__auto___13077,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__10978__auto__ = (function (){var statearr_11283 = f__10977__auto__();
(statearr_11283[(6)] = c__10976__auto___13077);

return statearr_11283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
});})(__13063,c__10976__auto___13077,G__11225_13064,G__11225_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11225_13065__$1)].join('')));

}

var G__13087 = (__13063 + (1));
__13063 = G__13087;
continue;
} else {
}
break;
}

var c__10976__auto___13088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_11305){
var state_val_11306 = (state_11305[(1)]);
if((state_val_11306 === (7))){
var inst_11301 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
var statearr_11322_13089 = state_11305__$1;
(statearr_11322_13089[(2)] = inst_11301);

(statearr_11322_13089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (1))){
var state_11305__$1 = state_11305;
var statearr_11323_13090 = state_11305__$1;
(statearr_11323_13090[(2)] = null);

(statearr_11323_13090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (4))){
var inst_11286 = (state_11305[(7)]);
var inst_11286__$1 = (state_11305[(2)]);
var inst_11287 = (inst_11286__$1 == null);
var state_11305__$1 = (function (){var statearr_11324 = state_11305;
(statearr_11324[(7)] = inst_11286__$1);

return statearr_11324;
})();
if(cljs.core.truth_(inst_11287)){
var statearr_11325_13091 = state_11305__$1;
(statearr_11325_13091[(1)] = (5));

} else {
var statearr_11326_13092 = state_11305__$1;
(statearr_11326_13092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (6))){
var inst_11291 = (state_11305[(8)]);
var inst_11286 = (state_11305[(7)]);
var inst_11291__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11292 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11293 = [inst_11286,inst_11291__$1];
var inst_11294 = (new cljs.core.PersistentVector(null,2,(5),inst_11292,inst_11293,null));
var state_11305__$1 = (function (){var statearr_11327 = state_11305;
(statearr_11327[(8)] = inst_11291__$1);

return statearr_11327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11305__$1,(8),jobs,inst_11294);
} else {
if((state_val_11306 === (3))){
var inst_11303 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11305__$1,inst_11303);
} else {
if((state_val_11306 === (2))){
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11305__$1,(4),from);
} else {
if((state_val_11306 === (9))){
var inst_11298 = (state_11305[(2)]);
var state_11305__$1 = (function (){var statearr_11328 = state_11305;
(statearr_11328[(9)] = inst_11298);

return statearr_11328;
})();
var statearr_11329_13093 = state_11305__$1;
(statearr_11329_13093[(2)] = null);

(statearr_11329_13093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (5))){
var inst_11289 = cljs.core.async.close_BANG_(jobs);
var state_11305__$1 = state_11305;
var statearr_11330_13094 = state_11305__$1;
(statearr_11330_13094[(2)] = inst_11289);

(statearr_11330_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (8))){
var inst_11291 = (state_11305[(8)]);
var inst_11296 = (state_11305[(2)]);
var state_11305__$1 = (function (){var statearr_11331 = state_11305;
(statearr_11331[(10)] = inst_11296);

return statearr_11331;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11305__$1,(9),results,inst_11291);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11334[(1)] = (1));

return statearr_11334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11305){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11305);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11336){var ex__10932__auto__ = e11336;
var statearr_11337_13095 = state_11305;
(statearr_11337_13095[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11305[(4)]))){
var statearr_11338_13096 = state_11305;
(statearr_11338_13096[(1)] = cljs.core.first((state_11305[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11305;
state_11305 = G__13097;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11339 = f__10977__auto__();
(statearr_11339[(6)] = c__10976__auto___13088);

return statearr_11339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_11385){
var state_val_11386 = (state_11385[(1)]);
if((state_val_11386 === (7))){
var inst_11381 = (state_11385[(2)]);
var state_11385__$1 = state_11385;
var statearr_11388_13098 = state_11385__$1;
(statearr_11388_13098[(2)] = inst_11381);

(statearr_11388_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (20))){
var state_11385__$1 = state_11385;
var statearr_11389_13099 = state_11385__$1;
(statearr_11389_13099[(2)] = null);

(statearr_11389_13099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (1))){
var state_11385__$1 = state_11385;
var statearr_11390_13100 = state_11385__$1;
(statearr_11390_13100[(2)] = null);

(statearr_11390_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (4))){
var inst_11342 = (state_11385[(7)]);
var inst_11342__$1 = (state_11385[(2)]);
var inst_11343 = (inst_11342__$1 == null);
var state_11385__$1 = (function (){var statearr_11391 = state_11385;
(statearr_11391[(7)] = inst_11342__$1);

return statearr_11391;
})();
if(cljs.core.truth_(inst_11343)){
var statearr_11392_13101 = state_11385__$1;
(statearr_11392_13101[(1)] = (5));

} else {
var statearr_11393_13102 = state_11385__$1;
(statearr_11393_13102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (15))){
var inst_11363 = (state_11385[(8)]);
var state_11385__$1 = state_11385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11385__$1,(18),to,inst_11363);
} else {
if((state_val_11386 === (21))){
var inst_11376 = (state_11385[(2)]);
var state_11385__$1 = state_11385;
var statearr_11396_13103 = state_11385__$1;
(statearr_11396_13103[(2)] = inst_11376);

(statearr_11396_13103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (13))){
var inst_11378 = (state_11385[(2)]);
var state_11385__$1 = (function (){var statearr_11397 = state_11385;
(statearr_11397[(9)] = inst_11378);

return statearr_11397;
})();
var statearr_11398_13104 = state_11385__$1;
(statearr_11398_13104[(2)] = null);

(statearr_11398_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (6))){
var inst_11342 = (state_11385[(7)]);
var state_11385__$1 = state_11385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11385__$1,(11),inst_11342);
} else {
if((state_val_11386 === (17))){
var inst_11371 = (state_11385[(2)]);
var state_11385__$1 = state_11385;
if(cljs.core.truth_(inst_11371)){
var statearr_11399_13105 = state_11385__$1;
(statearr_11399_13105[(1)] = (19));

} else {
var statearr_11400_13106 = state_11385__$1;
(statearr_11400_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (3))){
var inst_11383 = (state_11385[(2)]);
var state_11385__$1 = state_11385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11385__$1,inst_11383);
} else {
if((state_val_11386 === (12))){
var inst_11360 = (state_11385[(10)]);
var state_11385__$1 = state_11385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11385__$1,(14),inst_11360);
} else {
if((state_val_11386 === (2))){
var state_11385__$1 = state_11385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11385__$1,(4),results);
} else {
if((state_val_11386 === (19))){
var state_11385__$1 = state_11385;
var statearr_11401_13107 = state_11385__$1;
(statearr_11401_13107[(2)] = null);

(statearr_11401_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (11))){
var inst_11360 = (state_11385[(2)]);
var state_11385__$1 = (function (){var statearr_11402 = state_11385;
(statearr_11402[(10)] = inst_11360);

return statearr_11402;
})();
var statearr_11403_13108 = state_11385__$1;
(statearr_11403_13108[(2)] = null);

(statearr_11403_13108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (9))){
var state_11385__$1 = state_11385;
var statearr_11404_13109 = state_11385__$1;
(statearr_11404_13109[(2)] = null);

(statearr_11404_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (5))){
var state_11385__$1 = state_11385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11405_13110 = state_11385__$1;
(statearr_11405_13110[(1)] = (8));

} else {
var statearr_11406_13111 = state_11385__$1;
(statearr_11406_13111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (14))){
var inst_11363 = (state_11385[(8)]);
var inst_11363__$1 = (state_11385[(2)]);
var inst_11364 = (inst_11363__$1 == null);
var inst_11365 = cljs.core.not(inst_11364);
var state_11385__$1 = (function (){var statearr_11407 = state_11385;
(statearr_11407[(8)] = inst_11363__$1);

return statearr_11407;
})();
if(inst_11365){
var statearr_11408_13112 = state_11385__$1;
(statearr_11408_13112[(1)] = (15));

} else {
var statearr_11409_13113 = state_11385__$1;
(statearr_11409_13113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (16))){
var state_11385__$1 = state_11385;
var statearr_11410_13114 = state_11385__$1;
(statearr_11410_13114[(2)] = false);

(statearr_11410_13114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (10))){
var inst_11357 = (state_11385[(2)]);
var state_11385__$1 = state_11385;
var statearr_11411_13115 = state_11385__$1;
(statearr_11411_13115[(2)] = inst_11357);

(statearr_11411_13115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (18))){
var inst_11368 = (state_11385[(2)]);
var state_11385__$1 = state_11385;
var statearr_11412_13116 = state_11385__$1;
(statearr_11412_13116[(2)] = inst_11368);

(statearr_11412_13116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (8))){
var inst_11346 = cljs.core.async.close_BANG_(to);
var state_11385__$1 = state_11385;
var statearr_11414_13117 = state_11385__$1;
(statearr_11414_13117[(2)] = inst_11346);

(statearr_11414_13117[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11416[(1)] = (1));

return statearr_11416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11385){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11385);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11417){var ex__10932__auto__ = e11417;
var statearr_11418_13118 = state_11385;
(statearr_11418_13118[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11385[(4)]))){
var statearr_11419_13119 = state_11385;
(statearr_11419_13119[(1)] = cljs.core.first((state_11385[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11385;
state_11385 = G__13120;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11420 = f__10977__auto__();
(statearr_11420[(6)] = c__10976__auto__);

return statearr_11420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
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
var G__11422 = arguments.length;
switch (G__11422) {
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
var G__11424 = arguments.length;
switch (G__11424) {
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
var G__11426 = arguments.length;
switch (G__11426) {
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
var c__10976__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_11452){
var state_val_11453 = (state_11452[(1)]);
if((state_val_11453 === (7))){
var inst_11448 = (state_11452[(2)]);
var state_11452__$1 = state_11452;
var statearr_11454_13125 = state_11452__$1;
(statearr_11454_13125[(2)] = inst_11448);

(statearr_11454_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (1))){
var state_11452__$1 = state_11452;
var statearr_11455_13126 = state_11452__$1;
(statearr_11455_13126[(2)] = null);

(statearr_11455_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (4))){
var inst_11429 = (state_11452[(7)]);
var inst_11429__$1 = (state_11452[(2)]);
var inst_11430 = (inst_11429__$1 == null);
var state_11452__$1 = (function (){var statearr_11456 = state_11452;
(statearr_11456[(7)] = inst_11429__$1);

return statearr_11456;
})();
if(cljs.core.truth_(inst_11430)){
var statearr_11457_13127 = state_11452__$1;
(statearr_11457_13127[(1)] = (5));

} else {
var statearr_11458_13128 = state_11452__$1;
(statearr_11458_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (13))){
var state_11452__$1 = state_11452;
var statearr_11459_13129 = state_11452__$1;
(statearr_11459_13129[(2)] = null);

(statearr_11459_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (6))){
var inst_11429 = (state_11452[(7)]);
var inst_11435 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11429) : p.call(null,inst_11429));
var state_11452__$1 = state_11452;
if(cljs.core.truth_(inst_11435)){
var statearr_11460_13130 = state_11452__$1;
(statearr_11460_13130[(1)] = (9));

} else {
var statearr_11461_13131 = state_11452__$1;
(statearr_11461_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (3))){
var inst_11450 = (state_11452[(2)]);
var state_11452__$1 = state_11452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11452__$1,inst_11450);
} else {
if((state_val_11453 === (12))){
var state_11452__$1 = state_11452;
var statearr_11462_13132 = state_11452__$1;
(statearr_11462_13132[(2)] = null);

(statearr_11462_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (2))){
var state_11452__$1 = state_11452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11452__$1,(4),ch);
} else {
if((state_val_11453 === (11))){
var inst_11429 = (state_11452[(7)]);
var inst_11439 = (state_11452[(2)]);
var state_11452__$1 = state_11452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11452__$1,(8),inst_11439,inst_11429);
} else {
if((state_val_11453 === (9))){
var state_11452__$1 = state_11452;
var statearr_11463_13133 = state_11452__$1;
(statearr_11463_13133[(2)] = tc);

(statearr_11463_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (5))){
var inst_11432 = cljs.core.async.close_BANG_(tc);
var inst_11433 = cljs.core.async.close_BANG_(fc);
var state_11452__$1 = (function (){var statearr_11464 = state_11452;
(statearr_11464[(8)] = inst_11432);

return statearr_11464;
})();
var statearr_11465_13134 = state_11452__$1;
(statearr_11465_13134[(2)] = inst_11433);

(statearr_11465_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (14))){
var inst_11446 = (state_11452[(2)]);
var state_11452__$1 = state_11452;
var statearr_11466_13135 = state_11452__$1;
(statearr_11466_13135[(2)] = inst_11446);

(statearr_11466_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (10))){
var state_11452__$1 = state_11452;
var statearr_11467_13136 = state_11452__$1;
(statearr_11467_13136[(2)] = fc);

(statearr_11467_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (8))){
var inst_11441 = (state_11452[(2)]);
var state_11452__$1 = state_11452;
if(cljs.core.truth_(inst_11441)){
var statearr_11468_13137 = state_11452__$1;
(statearr_11468_13137[(1)] = (12));

} else {
var statearr_11469_13138 = state_11452__$1;
(statearr_11469_13138[(1)] = (13));

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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_11470 = [null,null,null,null,null,null,null,null,null];
(statearr_11470[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_11470[(1)] = (1));

return statearr_11470;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_11452){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11452);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11471){var ex__10932__auto__ = e11471;
var statearr_11472_13139 = state_11452;
(statearr_11472_13139[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11452[(4)]))){
var statearr_11473_13140 = state_11452;
(statearr_11473_13140[(1)] = cljs.core.first((state_11452[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11452;
state_11452 = G__13141;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_11452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_11452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11474 = f__10977__auto__();
(statearr_11474[(6)] = c__10976__auto___13124);

return statearr_11474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_11496){
var state_val_11497 = (state_11496[(1)]);
if((state_val_11497 === (7))){
var inst_11492 = (state_11496[(2)]);
var state_11496__$1 = state_11496;
var statearr_11498_13142 = state_11496__$1;
(statearr_11498_13142[(2)] = inst_11492);

(statearr_11498_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11497 === (1))){
var inst_11475 = init;
var inst_11476 = inst_11475;
var state_11496__$1 = (function (){var statearr_11499 = state_11496;
(statearr_11499[(7)] = inst_11476);

return statearr_11499;
})();
var statearr_11500_13143 = state_11496__$1;
(statearr_11500_13143[(2)] = null);

(statearr_11500_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11497 === (4))){
var inst_11479 = (state_11496[(8)]);
var inst_11479__$1 = (state_11496[(2)]);
var inst_11480 = (inst_11479__$1 == null);
var state_11496__$1 = (function (){var statearr_11501 = state_11496;
(statearr_11501[(8)] = inst_11479__$1);

return statearr_11501;
})();
if(cljs.core.truth_(inst_11480)){
var statearr_11502_13144 = state_11496__$1;
(statearr_11502_13144[(1)] = (5));

} else {
var statearr_11503_13145 = state_11496__$1;
(statearr_11503_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11497 === (6))){
var inst_11479 = (state_11496[(8)]);
var inst_11483 = (state_11496[(9)]);
var inst_11476 = (state_11496[(7)]);
var inst_11483__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11476,inst_11479) : f.call(null,inst_11476,inst_11479));
var inst_11484 = cljs.core.reduced_QMARK_(inst_11483__$1);
var state_11496__$1 = (function (){var statearr_11504 = state_11496;
(statearr_11504[(9)] = inst_11483__$1);

return statearr_11504;
})();
if(inst_11484){
var statearr_11505_13146 = state_11496__$1;
(statearr_11505_13146[(1)] = (8));

} else {
var statearr_11506_13147 = state_11496__$1;
(statearr_11506_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11497 === (3))){
var inst_11494 = (state_11496[(2)]);
var state_11496__$1 = state_11496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11496__$1,inst_11494);
} else {
if((state_val_11497 === (2))){
var state_11496__$1 = state_11496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11496__$1,(4),ch);
} else {
if((state_val_11497 === (9))){
var inst_11483 = (state_11496[(9)]);
var inst_11476 = inst_11483;
var state_11496__$1 = (function (){var statearr_11507 = state_11496;
(statearr_11507[(7)] = inst_11476);

return statearr_11507;
})();
var statearr_11508_13148 = state_11496__$1;
(statearr_11508_13148[(2)] = null);

(statearr_11508_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11497 === (5))){
var inst_11476 = (state_11496[(7)]);
var state_11496__$1 = state_11496;
var statearr_11509_13149 = state_11496__$1;
(statearr_11509_13149[(2)] = inst_11476);

(statearr_11509_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11497 === (10))){
var inst_11490 = (state_11496[(2)]);
var state_11496__$1 = state_11496;
var statearr_11510_13150 = state_11496__$1;
(statearr_11510_13150[(2)] = inst_11490);

(statearr_11510_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11497 === (8))){
var inst_11483 = (state_11496[(9)]);
var inst_11486 = cljs.core.deref(inst_11483);
var state_11496__$1 = state_11496;
var statearr_11512_13151 = state_11496__$1;
(statearr_11512_13151[(2)] = inst_11486);

(statearr_11512_13151[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10929__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10929__auto____0 = (function (){
var statearr_11514 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11514[(0)] = cljs$core$async$reduce_$_state_machine__10929__auto__);

(statearr_11514[(1)] = (1));

return statearr_11514;
});
var cljs$core$async$reduce_$_state_machine__10929__auto____1 = (function (state_11496){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11496);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11516){var ex__10932__auto__ = e11516;
var statearr_11517_13152 = state_11496;
(statearr_11517_13152[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11496[(4)]))){
var statearr_11518_13153 = state_11496;
(statearr_11518_13153[(1)] = cljs.core.first((state_11496[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11496;
state_11496 = G__13154;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10929__auto__ = function(state_11496){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10929__auto____1.call(this,state_11496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10929__auto____0;
cljs$core$async$reduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10929__auto____1;
return cljs$core$async$reduce_$_state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11519 = f__10977__auto__();
(statearr_11519[(6)] = c__10976__auto__);

return statearr_11519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_11525){
var state_val_11526 = (state_11525[(1)]);
if((state_val_11526 === (1))){
var inst_11520 = cljs.core.async.reduce(f__$1,init,ch);
var state_11525__$1 = state_11525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11525__$1,(2),inst_11520);
} else {
if((state_val_11526 === (2))){
var inst_11522 = (state_11525[(2)]);
var inst_11523 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11522) : f__$1.call(null,inst_11522));
var state_11525__$1 = state_11525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11525__$1,inst_11523);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10929__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10929__auto____0 = (function (){
var statearr_11527 = [null,null,null,null,null,null,null];
(statearr_11527[(0)] = cljs$core$async$transduce_$_state_machine__10929__auto__);

(statearr_11527[(1)] = (1));

return statearr_11527;
});
var cljs$core$async$transduce_$_state_machine__10929__auto____1 = (function (state_11525){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11525);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11528){var ex__10932__auto__ = e11528;
var statearr_11529_13155 = state_11525;
(statearr_11529_13155[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11525[(4)]))){
var statearr_11530_13156 = state_11525;
(statearr_11530_13156[(1)] = cljs.core.first((state_11525[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11525;
state_11525 = G__13157;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10929__auto__ = function(state_11525){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10929__auto____1.call(this,state_11525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10929__auto____0;
cljs$core$async$transduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10929__auto____1;
return cljs$core$async$transduce_$_state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11531 = f__10977__auto__();
(statearr_11531[(6)] = c__10976__auto__);

return statearr_11531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
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
var G__11533 = arguments.length;
switch (G__11533) {
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
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_11558){
var state_val_11559 = (state_11558[(1)]);
if((state_val_11559 === (7))){
var inst_11540 = (state_11558[(2)]);
var state_11558__$1 = state_11558;
var statearr_11560_13159 = state_11558__$1;
(statearr_11560_13159[(2)] = inst_11540);

(statearr_11560_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (1))){
var inst_11534 = cljs.core.seq(coll);
var inst_11535 = inst_11534;
var state_11558__$1 = (function (){var statearr_11561 = state_11558;
(statearr_11561[(7)] = inst_11535);

return statearr_11561;
})();
var statearr_11562_13160 = state_11558__$1;
(statearr_11562_13160[(2)] = null);

(statearr_11562_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (4))){
var inst_11535 = (state_11558[(7)]);
var inst_11538 = cljs.core.first(inst_11535);
var state_11558__$1 = state_11558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11558__$1,(7),ch,inst_11538);
} else {
if((state_val_11559 === (13))){
var inst_11552 = (state_11558[(2)]);
var state_11558__$1 = state_11558;
var statearr_11563_13161 = state_11558__$1;
(statearr_11563_13161[(2)] = inst_11552);

(statearr_11563_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (6))){
var inst_11543 = (state_11558[(2)]);
var state_11558__$1 = state_11558;
if(cljs.core.truth_(inst_11543)){
var statearr_11564_13162 = state_11558__$1;
(statearr_11564_13162[(1)] = (8));

} else {
var statearr_11565_13163 = state_11558__$1;
(statearr_11565_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (3))){
var inst_11556 = (state_11558[(2)]);
var state_11558__$1 = state_11558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11558__$1,inst_11556);
} else {
if((state_val_11559 === (12))){
var state_11558__$1 = state_11558;
var statearr_11566_13164 = state_11558__$1;
(statearr_11566_13164[(2)] = null);

(statearr_11566_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (2))){
var inst_11535 = (state_11558[(7)]);
var state_11558__$1 = state_11558;
if(cljs.core.truth_(inst_11535)){
var statearr_11567_13165 = state_11558__$1;
(statearr_11567_13165[(1)] = (4));

} else {
var statearr_11568_13166 = state_11558__$1;
(statearr_11568_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (11))){
var inst_11549 = cljs.core.async.close_BANG_(ch);
var state_11558__$1 = state_11558;
var statearr_11569_13167 = state_11558__$1;
(statearr_11569_13167[(2)] = inst_11549);

(statearr_11569_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (9))){
var state_11558__$1 = state_11558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11570_13168 = state_11558__$1;
(statearr_11570_13168[(1)] = (11));

} else {
var statearr_11571_13169 = state_11558__$1;
(statearr_11571_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (5))){
var inst_11535 = (state_11558[(7)]);
var state_11558__$1 = state_11558;
var statearr_11572_13170 = state_11558__$1;
(statearr_11572_13170[(2)] = inst_11535);

(statearr_11572_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (10))){
var inst_11554 = (state_11558[(2)]);
var state_11558__$1 = state_11558;
var statearr_11574_13171 = state_11558__$1;
(statearr_11574_13171[(2)] = inst_11554);

(statearr_11574_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (8))){
var inst_11535 = (state_11558[(7)]);
var inst_11545 = cljs.core.next(inst_11535);
var inst_11535__$1 = inst_11545;
var state_11558__$1 = (function (){var statearr_11575 = state_11558;
(statearr_11575[(7)] = inst_11535__$1);

return statearr_11575;
})();
var statearr_11576_13172 = state_11558__$1;
(statearr_11576_13172[(2)] = null);

(statearr_11576_13172[(1)] = (2));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_11577 = [null,null,null,null,null,null,null,null];
(statearr_11577[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_11577[(1)] = (1));

return statearr_11577;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_11558){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11558);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11578){var ex__10932__auto__ = e11578;
var statearr_11579_13173 = state_11558;
(statearr_11579_13173[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11558[(4)]))){
var statearr_11583_13174 = state_11558;
(statearr_11583_13174[(1)] = cljs.core.first((state_11558[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11558;
state_11558 = G__13175;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_11558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_11558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11584 = f__10977__auto__();
(statearr_11584[(6)] = c__10976__auto__);

return statearr_11584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
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
var G__11586 = arguments.length;
switch (G__11586) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13177 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13177(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13178 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13178(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13179 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13179(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13180 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13180(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11602 = (function (ch,cs,meta11603){
this.ch = ch;
this.cs = cs;
this.meta11603 = meta11603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11604,meta11603__$1){
var self__ = this;
var _11604__$1 = this;
return (new cljs.core.async.t_cljs$core$async11602(self__.ch,self__.cs,meta11603__$1));
}));

(cljs.core.async.t_cljs$core$async11602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11604){
var self__ = this;
var _11604__$1 = this;
return self__.meta11603;
}));

(cljs.core.async.t_cljs$core$async11602.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11602.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11602.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11602.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11602.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11603","meta11603",-1061054419,null)], null);
}));

(cljs.core.async.t_cljs$core$async11602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11602");

(cljs.core.async.t_cljs$core$async11602.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11602.
 */
cljs.core.async.__GT_t_cljs$core$async11602 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11602(ch__$1,cs__$1,meta11603){
return (new cljs.core.async.t_cljs$core$async11602(ch__$1,cs__$1,meta11603));
});

}

return (new cljs.core.async.t_cljs$core$async11602(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10976__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_11780){
var state_val_11781 = (state_11780[(1)]);
if((state_val_11781 === (7))){
var inst_11776 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
var statearr_11784_13182 = state_11780__$1;
(statearr_11784_13182[(2)] = inst_11776);

(statearr_11784_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (20))){
var inst_11673 = (state_11780[(7)]);
var inst_11685 = cljs.core.first(inst_11673);
var inst_11686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11685,(0),null);
var inst_11687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11685,(1),null);
var state_11780__$1 = (function (){var statearr_11785 = state_11780;
(statearr_11785[(8)] = inst_11686);

return statearr_11785;
})();
if(cljs.core.truth_(inst_11687)){
var statearr_11786_13183 = state_11780__$1;
(statearr_11786_13183[(1)] = (22));

} else {
var statearr_11787_13184 = state_11780__$1;
(statearr_11787_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (27))){
var inst_11722 = (state_11780[(9)]);
var inst_11610 = (state_11780[(10)]);
var inst_11715 = (state_11780[(11)]);
var inst_11717 = (state_11780[(12)]);
var inst_11722__$1 = cljs.core._nth(inst_11715,inst_11717);
var inst_11723 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11722__$1,inst_11610,done);
var state_11780__$1 = (function (){var statearr_11788 = state_11780;
(statearr_11788[(9)] = inst_11722__$1);

return statearr_11788;
})();
if(cljs.core.truth_(inst_11723)){
var statearr_11789_13185 = state_11780__$1;
(statearr_11789_13185[(1)] = (30));

} else {
var statearr_11790_13186 = state_11780__$1;
(statearr_11790_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (1))){
var state_11780__$1 = state_11780;
var statearr_11791_13187 = state_11780__$1;
(statearr_11791_13187[(2)] = null);

(statearr_11791_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (24))){
var inst_11673 = (state_11780[(7)]);
var inst_11692 = (state_11780[(2)]);
var inst_11693 = cljs.core.next(inst_11673);
var inst_11619 = inst_11693;
var inst_11620 = null;
var inst_11621 = (0);
var inst_11622 = (0);
var state_11780__$1 = (function (){var statearr_11796 = state_11780;
(statearr_11796[(13)] = inst_11619);

(statearr_11796[(14)] = inst_11692);

(statearr_11796[(15)] = inst_11620);

(statearr_11796[(16)] = inst_11622);

(statearr_11796[(17)] = inst_11621);

return statearr_11796;
})();
var statearr_11801_13188 = state_11780__$1;
(statearr_11801_13188[(2)] = null);

(statearr_11801_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (39))){
var state_11780__$1 = state_11780;
var statearr_11809_13189 = state_11780__$1;
(statearr_11809_13189[(2)] = null);

(statearr_11809_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (4))){
var inst_11610 = (state_11780[(10)]);
var inst_11610__$1 = (state_11780[(2)]);
var inst_11611 = (inst_11610__$1 == null);
var state_11780__$1 = (function (){var statearr_11810 = state_11780;
(statearr_11810[(10)] = inst_11610__$1);

return statearr_11810;
})();
if(cljs.core.truth_(inst_11611)){
var statearr_11811_13190 = state_11780__$1;
(statearr_11811_13190[(1)] = (5));

} else {
var statearr_11812_13191 = state_11780__$1;
(statearr_11812_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (15))){
var inst_11619 = (state_11780[(13)]);
var inst_11620 = (state_11780[(15)]);
var inst_11622 = (state_11780[(16)]);
var inst_11621 = (state_11780[(17)]);
var inst_11669 = (state_11780[(2)]);
var inst_11670 = (inst_11622 + (1));
var tmp11802 = inst_11619;
var tmp11804 = inst_11620;
var tmp11806 = inst_11621;
var inst_11619__$1 = tmp11802;
var inst_11620__$1 = tmp11804;
var inst_11621__$1 = tmp11806;
var inst_11622__$1 = inst_11670;
var state_11780__$1 = (function (){var statearr_11813 = state_11780;
(statearr_11813[(13)] = inst_11619__$1);

(statearr_11813[(15)] = inst_11620__$1);

(statearr_11813[(18)] = inst_11669);

(statearr_11813[(16)] = inst_11622__$1);

(statearr_11813[(17)] = inst_11621__$1);

return statearr_11813;
})();
var statearr_11815_13192 = state_11780__$1;
(statearr_11815_13192[(2)] = null);

(statearr_11815_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (21))){
var inst_11696 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
var statearr_11819_13193 = state_11780__$1;
(statearr_11819_13193[(2)] = inst_11696);

(statearr_11819_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (31))){
var inst_11722 = (state_11780[(9)]);
var inst_11726 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11722);
var state_11780__$1 = state_11780;
var statearr_11820_13194 = state_11780__$1;
(statearr_11820_13194[(2)] = inst_11726);

(statearr_11820_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (32))){
var inst_11714 = (state_11780[(19)]);
var inst_11716 = (state_11780[(20)]);
var inst_11715 = (state_11780[(11)]);
var inst_11717 = (state_11780[(12)]);
var inst_11728 = (state_11780[(2)]);
var inst_11729 = (inst_11717 + (1));
var tmp11816 = inst_11714;
var tmp11817 = inst_11716;
var tmp11818 = inst_11715;
var inst_11714__$1 = tmp11816;
var inst_11715__$1 = tmp11818;
var inst_11716__$1 = tmp11817;
var inst_11717__$1 = inst_11729;
var state_11780__$1 = (function (){var statearr_11821 = state_11780;
(statearr_11821[(19)] = inst_11714__$1);

(statearr_11821[(21)] = inst_11728);

(statearr_11821[(20)] = inst_11716__$1);

(statearr_11821[(11)] = inst_11715__$1);

(statearr_11821[(12)] = inst_11717__$1);

return statearr_11821;
})();
var statearr_11833_13195 = state_11780__$1;
(statearr_11833_13195[(2)] = null);

(statearr_11833_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (40))){
var inst_11742 = (state_11780[(22)]);
var inst_11746 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11742);
var state_11780__$1 = state_11780;
var statearr_11838_13196 = state_11780__$1;
(statearr_11838_13196[(2)] = inst_11746);

(statearr_11838_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (33))){
var inst_11732 = (state_11780[(23)]);
var inst_11734 = cljs.core.chunked_seq_QMARK_(inst_11732);
var state_11780__$1 = state_11780;
if(inst_11734){
var statearr_11843_13197 = state_11780__$1;
(statearr_11843_13197[(1)] = (36));

} else {
var statearr_11844_13198 = state_11780__$1;
(statearr_11844_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (13))){
var inst_11662 = (state_11780[(24)]);
var inst_11666 = cljs.core.async.close_BANG_(inst_11662);
var state_11780__$1 = state_11780;
var statearr_11849_13199 = state_11780__$1;
(statearr_11849_13199[(2)] = inst_11666);

(statearr_11849_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (22))){
var inst_11686 = (state_11780[(8)]);
var inst_11689 = cljs.core.async.close_BANG_(inst_11686);
var state_11780__$1 = state_11780;
var statearr_11850_13200 = state_11780__$1;
(statearr_11850_13200[(2)] = inst_11689);

(statearr_11850_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (36))){
var inst_11732 = (state_11780[(23)]);
var inst_11736 = cljs.core.chunk_first(inst_11732);
var inst_11737 = cljs.core.chunk_rest(inst_11732);
var inst_11738 = cljs.core.count(inst_11736);
var inst_11714 = inst_11737;
var inst_11715 = inst_11736;
var inst_11716 = inst_11738;
var inst_11717 = (0);
var state_11780__$1 = (function (){var statearr_11851 = state_11780;
(statearr_11851[(19)] = inst_11714);

(statearr_11851[(20)] = inst_11716);

(statearr_11851[(11)] = inst_11715);

(statearr_11851[(12)] = inst_11717);

return statearr_11851;
})();
var statearr_11852_13201 = state_11780__$1;
(statearr_11852_13201[(2)] = null);

(statearr_11852_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (41))){
var inst_11732 = (state_11780[(23)]);
var inst_11748 = (state_11780[(2)]);
var inst_11749 = cljs.core.next(inst_11732);
var inst_11714 = inst_11749;
var inst_11715 = null;
var inst_11716 = (0);
var inst_11717 = (0);
var state_11780__$1 = (function (){var statearr_11853 = state_11780;
(statearr_11853[(19)] = inst_11714);

(statearr_11853[(25)] = inst_11748);

(statearr_11853[(20)] = inst_11716);

(statearr_11853[(11)] = inst_11715);

(statearr_11853[(12)] = inst_11717);

return statearr_11853;
})();
var statearr_11854_13202 = state_11780__$1;
(statearr_11854_13202[(2)] = null);

(statearr_11854_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (43))){
var state_11780__$1 = state_11780;
var statearr_11856_13203 = state_11780__$1;
(statearr_11856_13203[(2)] = null);

(statearr_11856_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (29))){
var inst_11757 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
var statearr_11857_13204 = state_11780__$1;
(statearr_11857_13204[(2)] = inst_11757);

(statearr_11857_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (44))){
var inst_11773 = (state_11780[(2)]);
var state_11780__$1 = (function (){var statearr_11858 = state_11780;
(statearr_11858[(26)] = inst_11773);

return statearr_11858;
})();
var statearr_11859_13205 = state_11780__$1;
(statearr_11859_13205[(2)] = null);

(statearr_11859_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (6))){
var inst_11706 = (state_11780[(27)]);
var inst_11705 = cljs.core.deref(cs);
var inst_11706__$1 = cljs.core.keys(inst_11705);
var inst_11707 = cljs.core.count(inst_11706__$1);
var inst_11708 = cljs.core.reset_BANG_(dctr,inst_11707);
var inst_11713 = cljs.core.seq(inst_11706__$1);
var inst_11714 = inst_11713;
var inst_11715 = null;
var inst_11716 = (0);
var inst_11717 = (0);
var state_11780__$1 = (function (){var statearr_11860 = state_11780;
(statearr_11860[(27)] = inst_11706__$1);

(statearr_11860[(19)] = inst_11714);

(statearr_11860[(28)] = inst_11708);

(statearr_11860[(20)] = inst_11716);

(statearr_11860[(11)] = inst_11715);

(statearr_11860[(12)] = inst_11717);

return statearr_11860;
})();
var statearr_11861_13206 = state_11780__$1;
(statearr_11861_13206[(2)] = null);

(statearr_11861_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (28))){
var inst_11732 = (state_11780[(23)]);
var inst_11714 = (state_11780[(19)]);
var inst_11732__$1 = cljs.core.seq(inst_11714);
var state_11780__$1 = (function (){var statearr_11862 = state_11780;
(statearr_11862[(23)] = inst_11732__$1);

return statearr_11862;
})();
if(inst_11732__$1){
var statearr_11863_13207 = state_11780__$1;
(statearr_11863_13207[(1)] = (33));

} else {
var statearr_11864_13208 = state_11780__$1;
(statearr_11864_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (25))){
var inst_11716 = (state_11780[(20)]);
var inst_11717 = (state_11780[(12)]);
var inst_11719 = (inst_11717 < inst_11716);
var inst_11720 = inst_11719;
var state_11780__$1 = state_11780;
if(cljs.core.truth_(inst_11720)){
var statearr_11867_13209 = state_11780__$1;
(statearr_11867_13209[(1)] = (27));

} else {
var statearr_11868_13210 = state_11780__$1;
(statearr_11868_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (34))){
var state_11780__$1 = state_11780;
var statearr_11869_13211 = state_11780__$1;
(statearr_11869_13211[(2)] = null);

(statearr_11869_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (17))){
var state_11780__$1 = state_11780;
var statearr_11870_13212 = state_11780__$1;
(statearr_11870_13212[(2)] = null);

(statearr_11870_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (3))){
var inst_11778 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11780__$1,inst_11778);
} else {
if((state_val_11781 === (12))){
var inst_11701 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
var statearr_11871_13213 = state_11780__$1;
(statearr_11871_13213[(2)] = inst_11701);

(statearr_11871_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (2))){
var state_11780__$1 = state_11780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11780__$1,(4),ch);
} else {
if((state_val_11781 === (23))){
var state_11780__$1 = state_11780;
var statearr_11872_13214 = state_11780__$1;
(statearr_11872_13214[(2)] = null);

(statearr_11872_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (35))){
var inst_11755 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
var statearr_11873_13215 = state_11780__$1;
(statearr_11873_13215[(2)] = inst_11755);

(statearr_11873_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (19))){
var inst_11673 = (state_11780[(7)]);
var inst_11677 = cljs.core.chunk_first(inst_11673);
var inst_11678 = cljs.core.chunk_rest(inst_11673);
var inst_11679 = cljs.core.count(inst_11677);
var inst_11619 = inst_11678;
var inst_11620 = inst_11677;
var inst_11621 = inst_11679;
var inst_11622 = (0);
var state_11780__$1 = (function (){var statearr_11874 = state_11780;
(statearr_11874[(13)] = inst_11619);

(statearr_11874[(15)] = inst_11620);

(statearr_11874[(16)] = inst_11622);

(statearr_11874[(17)] = inst_11621);

return statearr_11874;
})();
var statearr_11875_13216 = state_11780__$1;
(statearr_11875_13216[(2)] = null);

(statearr_11875_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (11))){
var inst_11619 = (state_11780[(13)]);
var inst_11673 = (state_11780[(7)]);
var inst_11673__$1 = cljs.core.seq(inst_11619);
var state_11780__$1 = (function (){var statearr_11876 = state_11780;
(statearr_11876[(7)] = inst_11673__$1);

return statearr_11876;
})();
if(inst_11673__$1){
var statearr_11877_13217 = state_11780__$1;
(statearr_11877_13217[(1)] = (16));

} else {
var statearr_11878_13218 = state_11780__$1;
(statearr_11878_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (9))){
var inst_11703 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
var statearr_11879_13219 = state_11780__$1;
(statearr_11879_13219[(2)] = inst_11703);

(statearr_11879_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (5))){
var inst_11617 = cljs.core.deref(cs);
var inst_11618 = cljs.core.seq(inst_11617);
var inst_11619 = inst_11618;
var inst_11620 = null;
var inst_11621 = (0);
var inst_11622 = (0);
var state_11780__$1 = (function (){var statearr_11880 = state_11780;
(statearr_11880[(13)] = inst_11619);

(statearr_11880[(15)] = inst_11620);

(statearr_11880[(16)] = inst_11622);

(statearr_11880[(17)] = inst_11621);

return statearr_11880;
})();
var statearr_11881_13220 = state_11780__$1;
(statearr_11881_13220[(2)] = null);

(statearr_11881_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (14))){
var state_11780__$1 = state_11780;
var statearr_11882_13221 = state_11780__$1;
(statearr_11882_13221[(2)] = null);

(statearr_11882_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (45))){
var inst_11770 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
var statearr_11883_13222 = state_11780__$1;
(statearr_11883_13222[(2)] = inst_11770);

(statearr_11883_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (26))){
var inst_11706 = (state_11780[(27)]);
var inst_11759 = (state_11780[(2)]);
var inst_11760 = cljs.core.seq(inst_11706);
var state_11780__$1 = (function (){var statearr_11884 = state_11780;
(statearr_11884[(29)] = inst_11759);

return statearr_11884;
})();
if(inst_11760){
var statearr_11887_13223 = state_11780__$1;
(statearr_11887_13223[(1)] = (42));

} else {
var statearr_11888_13224 = state_11780__$1;
(statearr_11888_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (16))){
var inst_11673 = (state_11780[(7)]);
var inst_11675 = cljs.core.chunked_seq_QMARK_(inst_11673);
var state_11780__$1 = state_11780;
if(inst_11675){
var statearr_11892_13225 = state_11780__$1;
(statearr_11892_13225[(1)] = (19));

} else {
var statearr_11893_13226 = state_11780__$1;
(statearr_11893_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (38))){
var inst_11752 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
var statearr_11895_13227 = state_11780__$1;
(statearr_11895_13227[(2)] = inst_11752);

(statearr_11895_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (30))){
var state_11780__$1 = state_11780;
var statearr_11896_13228 = state_11780__$1;
(statearr_11896_13228[(2)] = null);

(statearr_11896_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (10))){
var inst_11620 = (state_11780[(15)]);
var inst_11622 = (state_11780[(16)]);
var inst_11630 = cljs.core._nth(inst_11620,inst_11622);
var inst_11662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11630,(0),null);
var inst_11663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11630,(1),null);
var state_11780__$1 = (function (){var statearr_11900 = state_11780;
(statearr_11900[(24)] = inst_11662);

return statearr_11900;
})();
if(cljs.core.truth_(inst_11663)){
var statearr_11901_13229 = state_11780__$1;
(statearr_11901_13229[(1)] = (13));

} else {
var statearr_11902_13230 = state_11780__$1;
(statearr_11902_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (18))){
var inst_11699 = (state_11780[(2)]);
var state_11780__$1 = state_11780;
var statearr_11903_13231 = state_11780__$1;
(statearr_11903_13231[(2)] = inst_11699);

(statearr_11903_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (42))){
var state_11780__$1 = state_11780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11780__$1,(45),dchan);
} else {
if((state_val_11781 === (37))){
var inst_11732 = (state_11780[(23)]);
var inst_11610 = (state_11780[(10)]);
var inst_11742 = (state_11780[(22)]);
var inst_11742__$1 = cljs.core.first(inst_11732);
var inst_11743 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11742__$1,inst_11610,done);
var state_11780__$1 = (function (){var statearr_11907 = state_11780;
(statearr_11907[(22)] = inst_11742__$1);

return statearr_11907;
})();
if(cljs.core.truth_(inst_11743)){
var statearr_11908_13232 = state_11780__$1;
(statearr_11908_13232[(1)] = (39));

} else {
var statearr_11909_13233 = state_11780__$1;
(statearr_11909_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11781 === (8))){
var inst_11622 = (state_11780[(16)]);
var inst_11621 = (state_11780[(17)]);
var inst_11624 = (inst_11622 < inst_11621);
var inst_11625 = inst_11624;
var state_11780__$1 = state_11780;
if(cljs.core.truth_(inst_11625)){
var statearr_11911_13234 = state_11780__$1;
(statearr_11911_13234[(1)] = (10));

} else {
var statearr_11912_13235 = state_11780__$1;
(statearr_11912_13235[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10929__auto__ = null;
var cljs$core$async$mult_$_state_machine__10929__auto____0 = (function (){
var statearr_11913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11913[(0)] = cljs$core$async$mult_$_state_machine__10929__auto__);

(statearr_11913[(1)] = (1));

return statearr_11913;
});
var cljs$core$async$mult_$_state_machine__10929__auto____1 = (function (state_11780){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11780);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11914){var ex__10932__auto__ = e11914;
var statearr_11915_13236 = state_11780;
(statearr_11915_13236[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11780[(4)]))){
var statearr_11916_13237 = state_11780;
(statearr_11916_13237[(1)] = cljs.core.first((state_11780[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11780;
state_11780 = G__13238;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10929__auto__ = function(state_11780){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10929__auto____1.call(this,state_11780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10929__auto____0;
cljs$core$async$mult_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10929__auto____1;
return cljs$core$async$mult_$_state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11918 = f__10977__auto__();
(statearr_11918[(6)] = c__10976__auto___13181);

return statearr_11918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var G__11920 = arguments.length;
switch (G__11920) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13240 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13240(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13241 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13241(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13242 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13242(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13243 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13243(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13244 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13244(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13245 = arguments.length;
var i__4737__auto___13246 = (0);
while(true){
if((i__4737__auto___13246 < len__4736__auto___13245)){
args__4742__auto__.push((arguments[i__4737__auto___13246]));

var G__13247 = (i__4737__auto___13246 + (1));
i__4737__auto___13246 = G__13247;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11937){
var map__11938 = p__11937;
var map__11938__$1 = (((((!((map__11938 == null))))?(((((map__11938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11938):map__11938);
var opts = map__11938__$1;
var statearr_11940_13248 = state;
(statearr_11940_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11941_13249 = state;
(statearr_11941_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11942_13250 = state;
(statearr_11942_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11933){
var G__11934 = cljs.core.first(seq11933);
var seq11933__$1 = cljs.core.next(seq11933);
var G__11935 = cljs.core.first(seq11933__$1);
var seq11933__$2 = cljs.core.next(seq11933__$1);
var G__11936 = cljs.core.first(seq11933__$2);
var seq11933__$3 = cljs.core.next(seq11933__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11934,G__11935,G__11936,seq11933__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11943 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11944){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11944 = meta11944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11945,meta11944__$1){
var self__ = this;
var _11945__$1 = this;
return (new cljs.core.async.t_cljs$core$async11943(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11944__$1));
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11945){
var self__ = this;
var _11945__$1 = this;
return self__.meta11944;
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11944","meta11944",927701235,null)], null);
}));

(cljs.core.async.t_cljs$core$async11943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11943");

(cljs.core.async.t_cljs$core$async11943.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11943.
 */
cljs.core.async.__GT_t_cljs$core$async11943 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11943(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11944){
return (new cljs.core.async.t_cljs$core$async11943(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11944));
});

}

return (new cljs.core.async.t_cljs$core$async11943(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10976__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12053){
var state_val_12054 = (state_12053[(1)]);
if((state_val_12054 === (7))){
var inst_11966 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
var statearr_12056_13252 = state_12053__$1;
(statearr_12056_13252[(2)] = inst_11966);

(statearr_12056_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (20))){
var inst_11978 = (state_12053[(7)]);
var state_12053__$1 = state_12053;
var statearr_12057_13253 = state_12053__$1;
(statearr_12057_13253[(2)] = inst_11978);

(statearr_12057_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (27))){
var state_12053__$1 = state_12053;
var statearr_12058_13254 = state_12053__$1;
(statearr_12058_13254[(2)] = null);

(statearr_12058_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (1))){
var inst_11953 = (state_12053[(8)]);
var inst_11953__$1 = calc_state();
var inst_11955 = (inst_11953__$1 == null);
var inst_11956 = cljs.core.not(inst_11955);
var state_12053__$1 = (function (){var statearr_12059 = state_12053;
(statearr_12059[(8)] = inst_11953__$1);

return statearr_12059;
})();
if(inst_11956){
var statearr_12060_13255 = state_12053__$1;
(statearr_12060_13255[(1)] = (2));

} else {
var statearr_12061_13256 = state_12053__$1;
(statearr_12061_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (24))){
var inst_12011 = (state_12053[(9)]);
var inst_12026 = (state_12053[(10)]);
var inst_12002 = (state_12053[(11)]);
var inst_12026__$1 = (inst_12002.cljs$core$IFn$_invoke$arity$1 ? inst_12002.cljs$core$IFn$_invoke$arity$1(inst_12011) : inst_12002.call(null,inst_12011));
var state_12053__$1 = (function (){var statearr_12062 = state_12053;
(statearr_12062[(10)] = inst_12026__$1);

return statearr_12062;
})();
if(cljs.core.truth_(inst_12026__$1)){
var statearr_12063_13257 = state_12053__$1;
(statearr_12063_13257[(1)] = (29));

} else {
var statearr_12064_13258 = state_12053__$1;
(statearr_12064_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (4))){
var inst_11969 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
if(cljs.core.truth_(inst_11969)){
var statearr_12068_13259 = state_12053__$1;
(statearr_12068_13259[(1)] = (8));

} else {
var statearr_12069_13260 = state_12053__$1;
(statearr_12069_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (15))){
var inst_11996 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
if(cljs.core.truth_(inst_11996)){
var statearr_12070_13261 = state_12053__$1;
(statearr_12070_13261[(1)] = (19));

} else {
var statearr_12071_13262 = state_12053__$1;
(statearr_12071_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (21))){
var inst_12001 = (state_12053[(12)]);
var inst_12001__$1 = (state_12053[(2)]);
var inst_12002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12001__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12001__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12001__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12053__$1 = (function (){var statearr_12072 = state_12053;
(statearr_12072[(12)] = inst_12001__$1);

(statearr_12072[(11)] = inst_12002);

(statearr_12072[(13)] = inst_12003);

return statearr_12072;
})();
return cljs.core.async.ioc_alts_BANG_(state_12053__$1,(22),inst_12004);
} else {
if((state_val_12054 === (31))){
var inst_12035 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
if(cljs.core.truth_(inst_12035)){
var statearr_12073_13263 = state_12053__$1;
(statearr_12073_13263[(1)] = (32));

} else {
var statearr_12074_13264 = state_12053__$1;
(statearr_12074_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (32))){
var inst_12010 = (state_12053[(14)]);
var state_12053__$1 = state_12053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12053__$1,(35),out,inst_12010);
} else {
if((state_val_12054 === (33))){
var inst_12001 = (state_12053[(12)]);
var inst_11978 = inst_12001;
var state_12053__$1 = (function (){var statearr_12075 = state_12053;
(statearr_12075[(7)] = inst_11978);

return statearr_12075;
})();
var statearr_12076_13265 = state_12053__$1;
(statearr_12076_13265[(2)] = null);

(statearr_12076_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (13))){
var inst_11978 = (state_12053[(7)]);
var inst_11985 = inst_11978.cljs$lang$protocol_mask$partition0$;
var inst_11986 = (inst_11985 & (64));
var inst_11987 = inst_11978.cljs$core$ISeq$;
var inst_11988 = (cljs.core.PROTOCOL_SENTINEL === inst_11987);
var inst_11989 = ((inst_11986) || (inst_11988));
var state_12053__$1 = state_12053;
if(cljs.core.truth_(inst_11989)){
var statearr_12077_13266 = state_12053__$1;
(statearr_12077_13266[(1)] = (16));

} else {
var statearr_12078_13267 = state_12053__$1;
(statearr_12078_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (22))){
var inst_12011 = (state_12053[(9)]);
var inst_12010 = (state_12053[(14)]);
var inst_12009 = (state_12053[(2)]);
var inst_12010__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12009,(0),null);
var inst_12011__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12009,(1),null);
var inst_12012 = (inst_12010__$1 == null);
var inst_12013 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12011__$1,change);
var inst_12014 = ((inst_12012) || (inst_12013));
var state_12053__$1 = (function (){var statearr_12079 = state_12053;
(statearr_12079[(9)] = inst_12011__$1);

(statearr_12079[(14)] = inst_12010__$1);

return statearr_12079;
})();
if(cljs.core.truth_(inst_12014)){
var statearr_12080_13268 = state_12053__$1;
(statearr_12080_13268[(1)] = (23));

} else {
var statearr_12081_13269 = state_12053__$1;
(statearr_12081_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (36))){
var inst_12001 = (state_12053[(12)]);
var inst_11978 = inst_12001;
var state_12053__$1 = (function (){var statearr_12082 = state_12053;
(statearr_12082[(7)] = inst_11978);

return statearr_12082;
})();
var statearr_12083_13270 = state_12053__$1;
(statearr_12083_13270[(2)] = null);

(statearr_12083_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (29))){
var inst_12026 = (state_12053[(10)]);
var state_12053__$1 = state_12053;
var statearr_12084_13271 = state_12053__$1;
(statearr_12084_13271[(2)] = inst_12026);

(statearr_12084_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (6))){
var state_12053__$1 = state_12053;
var statearr_12089_13272 = state_12053__$1;
(statearr_12089_13272[(2)] = false);

(statearr_12089_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (28))){
var inst_12021 = (state_12053[(2)]);
var inst_12023 = calc_state();
var inst_11978 = inst_12023;
var state_12053__$1 = (function (){var statearr_12090 = state_12053;
(statearr_12090[(7)] = inst_11978);

(statearr_12090[(15)] = inst_12021);

return statearr_12090;
})();
var statearr_12091_13273 = state_12053__$1;
(statearr_12091_13273[(2)] = null);

(statearr_12091_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (25))){
var inst_12049 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
var statearr_12092_13274 = state_12053__$1;
(statearr_12092_13274[(2)] = inst_12049);

(statearr_12092_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (34))){
var inst_12047 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
var statearr_12093_13275 = state_12053__$1;
(statearr_12093_13275[(2)] = inst_12047);

(statearr_12093_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (17))){
var state_12053__$1 = state_12053;
var statearr_12094_13276 = state_12053__$1;
(statearr_12094_13276[(2)] = false);

(statearr_12094_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (3))){
var state_12053__$1 = state_12053;
var statearr_12095_13277 = state_12053__$1;
(statearr_12095_13277[(2)] = false);

(statearr_12095_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (12))){
var inst_12051 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12053__$1,inst_12051);
} else {
if((state_val_12054 === (2))){
var inst_11953 = (state_12053[(8)]);
var inst_11958 = inst_11953.cljs$lang$protocol_mask$partition0$;
var inst_11959 = (inst_11958 & (64));
var inst_11960 = inst_11953.cljs$core$ISeq$;
var inst_11961 = (cljs.core.PROTOCOL_SENTINEL === inst_11960);
var inst_11962 = ((inst_11959) || (inst_11961));
var state_12053__$1 = state_12053;
if(cljs.core.truth_(inst_11962)){
var statearr_12096_13278 = state_12053__$1;
(statearr_12096_13278[(1)] = (5));

} else {
var statearr_12097_13279 = state_12053__$1;
(statearr_12097_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (23))){
var inst_12010 = (state_12053[(14)]);
var inst_12016 = (inst_12010 == null);
var state_12053__$1 = state_12053;
if(cljs.core.truth_(inst_12016)){
var statearr_12098_13280 = state_12053__$1;
(statearr_12098_13280[(1)] = (26));

} else {
var statearr_12099_13281 = state_12053__$1;
(statearr_12099_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (35))){
var inst_12038 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
if(cljs.core.truth_(inst_12038)){
var statearr_12100_13282 = state_12053__$1;
(statearr_12100_13282[(1)] = (36));

} else {
var statearr_12101_13283 = state_12053__$1;
(statearr_12101_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (19))){
var inst_11978 = (state_12053[(7)]);
var inst_11998 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11978);
var state_12053__$1 = state_12053;
var statearr_12102_13284 = state_12053__$1;
(statearr_12102_13284[(2)] = inst_11998);

(statearr_12102_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (11))){
var inst_11978 = (state_12053[(7)]);
var inst_11982 = (inst_11978 == null);
var inst_11983 = cljs.core.not(inst_11982);
var state_12053__$1 = state_12053;
if(inst_11983){
var statearr_12103_13285 = state_12053__$1;
(statearr_12103_13285[(1)] = (13));

} else {
var statearr_12104_13286 = state_12053__$1;
(statearr_12104_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (9))){
var inst_11953 = (state_12053[(8)]);
var state_12053__$1 = state_12053;
var statearr_12105_13287 = state_12053__$1;
(statearr_12105_13287[(2)] = inst_11953);

(statearr_12105_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (5))){
var state_12053__$1 = state_12053;
var statearr_12106_13288 = state_12053__$1;
(statearr_12106_13288[(2)] = true);

(statearr_12106_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (14))){
var state_12053__$1 = state_12053;
var statearr_12107_13289 = state_12053__$1;
(statearr_12107_13289[(2)] = false);

(statearr_12107_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (26))){
var inst_12011 = (state_12053[(9)]);
var inst_12018 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12011);
var state_12053__$1 = state_12053;
var statearr_12111_13290 = state_12053__$1;
(statearr_12111_13290[(2)] = inst_12018);

(statearr_12111_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (16))){
var state_12053__$1 = state_12053;
var statearr_12112_13291 = state_12053__$1;
(statearr_12112_13291[(2)] = true);

(statearr_12112_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (38))){
var inst_12043 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
var statearr_12113_13292 = state_12053__$1;
(statearr_12113_13292[(2)] = inst_12043);

(statearr_12113_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (30))){
var inst_12011 = (state_12053[(9)]);
var inst_12002 = (state_12053[(11)]);
var inst_12003 = (state_12053[(13)]);
var inst_12030 = cljs.core.empty_QMARK_(inst_12002);
var inst_12031 = (inst_12003.cljs$core$IFn$_invoke$arity$1 ? inst_12003.cljs$core$IFn$_invoke$arity$1(inst_12011) : inst_12003.call(null,inst_12011));
var inst_12032 = cljs.core.not(inst_12031);
var inst_12033 = ((inst_12030) && (inst_12032));
var state_12053__$1 = state_12053;
var statearr_12114_13293 = state_12053__$1;
(statearr_12114_13293[(2)] = inst_12033);

(statearr_12114_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (10))){
var inst_11953 = (state_12053[(8)]);
var inst_11974 = (state_12053[(2)]);
var inst_11975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11974,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11974,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11974,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11978 = inst_11953;
var state_12053__$1 = (function (){var statearr_12115 = state_12053;
(statearr_12115[(7)] = inst_11978);

(statearr_12115[(16)] = inst_11975);

(statearr_12115[(17)] = inst_11977);

(statearr_12115[(18)] = inst_11976);

return statearr_12115;
})();
var statearr_12116_13294 = state_12053__$1;
(statearr_12116_13294[(2)] = null);

(statearr_12116_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (18))){
var inst_11993 = (state_12053[(2)]);
var state_12053__$1 = state_12053;
var statearr_12117_13295 = state_12053__$1;
(statearr_12117_13295[(2)] = inst_11993);

(statearr_12117_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (37))){
var state_12053__$1 = state_12053;
var statearr_12118_13296 = state_12053__$1;
(statearr_12118_13296[(2)] = null);

(statearr_12118_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12054 === (8))){
var inst_11953 = (state_12053[(8)]);
var inst_11971 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11953);
var state_12053__$1 = state_12053;
var statearr_12119_13297 = state_12053__$1;
(statearr_12119_13297[(2)] = inst_11971);

(statearr_12119_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10929__auto__ = null;
var cljs$core$async$mix_$_state_machine__10929__auto____0 = (function (){
var statearr_12120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12120[(0)] = cljs$core$async$mix_$_state_machine__10929__auto__);

(statearr_12120[(1)] = (1));

return statearr_12120;
});
var cljs$core$async$mix_$_state_machine__10929__auto____1 = (function (state_12053){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12053);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12121){var ex__10932__auto__ = e12121;
var statearr_12122_13298 = state_12053;
(statearr_12122_13298[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12053[(4)]))){
var statearr_12123_13299 = state_12053;
(statearr_12123_13299[(1)] = cljs.core.first((state_12053[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12053;
state_12053 = G__13300;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10929__auto__ = function(state_12053){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10929__auto____1.call(this,state_12053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10929__auto____0;
cljs$core$async$mix_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10929__auto____1;
return cljs$core$async$mix_$_state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12124 = f__10977__auto__();
(statearr_12124[(6)] = c__10976__auto___13251);

return statearr_12124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13301 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13301(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13302 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13302(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13303 = (function() {
var G__13304 = null;
var G__13304__1 = (function (p){
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
var G__13304__2 = (function (p,v){
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
G__13304 = function(p,v){
switch(arguments.length){
case 1:
return G__13304__1.call(this,p);
case 2:
return G__13304__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13304.cljs$core$IFn$_invoke$arity$1 = G__13304__1;
G__13304.cljs$core$IFn$_invoke$arity$2 = G__13304__2;
return G__13304;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12140 = arguments.length;
switch (G__12140) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13303(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13303(p,v);
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
var G__12144 = arguments.length;
switch (G__12144) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12142_SHARP_){
if(cljs.core.truth_((p1__12142_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12142_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12142_SHARP_.call(null,topic)))){
return p1__12142_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12142_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12145 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12146){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12146 = meta12146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12147,meta12146__$1){
var self__ = this;
var _12147__$1 = this;
return (new cljs.core.async.t_cljs$core$async12145(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12146__$1));
}));

(cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12147){
var self__ = this;
var _12147__$1 = this;
return self__.meta12146;
}));

(cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12146","meta12146",-1832691103,null)], null);
}));

(cljs.core.async.t_cljs$core$async12145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12145");

(cljs.core.async.t_cljs$core$async12145.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12145.
 */
cljs.core.async.__GT_t_cljs$core$async12145 = (function cljs$core$async$__GT_t_cljs$core$async12145(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12146){
return (new cljs.core.async.t_cljs$core$async12145(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12146));
});

}

return (new cljs.core.async.t_cljs$core$async12145(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10976__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12253){
var state_val_12254 = (state_12253[(1)]);
if((state_val_12254 === (7))){
var inst_12249 = (state_12253[(2)]);
var state_12253__$1 = state_12253;
var statearr_12255_13308 = state_12253__$1;
(statearr_12255_13308[(2)] = inst_12249);

(statearr_12255_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (20))){
var state_12253__$1 = state_12253;
var statearr_12256_13309 = state_12253__$1;
(statearr_12256_13309[(2)] = null);

(statearr_12256_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (1))){
var state_12253__$1 = state_12253;
var statearr_12257_13310 = state_12253__$1;
(statearr_12257_13310[(2)] = null);

(statearr_12257_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (24))){
var inst_12210 = (state_12253[(7)]);
var inst_12241 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12210);
var state_12253__$1 = state_12253;
var statearr_12258_13311 = state_12253__$1;
(statearr_12258_13311[(2)] = inst_12241);

(statearr_12258_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (4))){
var inst_12162 = (state_12253[(8)]);
var inst_12162__$1 = (state_12253[(2)]);
var inst_12163 = (inst_12162__$1 == null);
var state_12253__$1 = (function (){var statearr_12259 = state_12253;
(statearr_12259[(8)] = inst_12162__$1);

return statearr_12259;
})();
if(cljs.core.truth_(inst_12163)){
var statearr_12260_13312 = state_12253__$1;
(statearr_12260_13312[(1)] = (5));

} else {
var statearr_12261_13313 = state_12253__$1;
(statearr_12261_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (15))){
var inst_12204 = (state_12253[(2)]);
var state_12253__$1 = state_12253;
var statearr_12262_13314 = state_12253__$1;
(statearr_12262_13314[(2)] = inst_12204);

(statearr_12262_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (21))){
var inst_12246 = (state_12253[(2)]);
var state_12253__$1 = (function (){var statearr_12263 = state_12253;
(statearr_12263[(9)] = inst_12246);

return statearr_12263;
})();
var statearr_12264_13315 = state_12253__$1;
(statearr_12264_13315[(2)] = null);

(statearr_12264_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (13))){
var inst_12186 = (state_12253[(10)]);
var inst_12188 = cljs.core.chunked_seq_QMARK_(inst_12186);
var state_12253__$1 = state_12253;
if(inst_12188){
var statearr_12265_13316 = state_12253__$1;
(statearr_12265_13316[(1)] = (16));

} else {
var statearr_12266_13317 = state_12253__$1;
(statearr_12266_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (22))){
var inst_12238 = (state_12253[(2)]);
var state_12253__$1 = state_12253;
if(cljs.core.truth_(inst_12238)){
var statearr_12267_13318 = state_12253__$1;
(statearr_12267_13318[(1)] = (23));

} else {
var statearr_12268_13319 = state_12253__$1;
(statearr_12268_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (6))){
var inst_12212 = (state_12253[(11)]);
var inst_12210 = (state_12253[(7)]);
var inst_12162 = (state_12253[(8)]);
var inst_12210__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12162) : topic_fn.call(null,inst_12162));
var inst_12211 = cljs.core.deref(mults);
var inst_12212__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12211,inst_12210__$1);
var state_12253__$1 = (function (){var statearr_12269 = state_12253;
(statearr_12269[(11)] = inst_12212__$1);

(statearr_12269[(7)] = inst_12210__$1);

return statearr_12269;
})();
if(cljs.core.truth_(inst_12212__$1)){
var statearr_12270_13320 = state_12253__$1;
(statearr_12270_13320[(1)] = (19));

} else {
var statearr_12271_13321 = state_12253__$1;
(statearr_12271_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (25))){
var inst_12243 = (state_12253[(2)]);
var state_12253__$1 = state_12253;
var statearr_12272_13322 = state_12253__$1;
(statearr_12272_13322[(2)] = inst_12243);

(statearr_12272_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (17))){
var inst_12186 = (state_12253[(10)]);
var inst_12195 = cljs.core.first(inst_12186);
var inst_12196 = cljs.core.async.muxch_STAR_(inst_12195);
var inst_12197 = cljs.core.async.close_BANG_(inst_12196);
var inst_12198 = cljs.core.next(inst_12186);
var inst_12172 = inst_12198;
var inst_12173 = null;
var inst_12174 = (0);
var inst_12175 = (0);
var state_12253__$1 = (function (){var statearr_12288 = state_12253;
(statearr_12288[(12)] = inst_12173);

(statearr_12288[(13)] = inst_12174);

(statearr_12288[(14)] = inst_12172);

(statearr_12288[(15)] = inst_12197);

(statearr_12288[(16)] = inst_12175);

return statearr_12288;
})();
var statearr_12289_13323 = state_12253__$1;
(statearr_12289_13323[(2)] = null);

(statearr_12289_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (3))){
var inst_12251 = (state_12253[(2)]);
var state_12253__$1 = state_12253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12253__$1,inst_12251);
} else {
if((state_val_12254 === (12))){
var inst_12206 = (state_12253[(2)]);
var state_12253__$1 = state_12253;
var statearr_12290_13324 = state_12253__$1;
(statearr_12290_13324[(2)] = inst_12206);

(statearr_12290_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (2))){
var state_12253__$1 = state_12253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12253__$1,(4),ch);
} else {
if((state_val_12254 === (23))){
var state_12253__$1 = state_12253;
var statearr_12291_13325 = state_12253__$1;
(statearr_12291_13325[(2)] = null);

(statearr_12291_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (19))){
var inst_12212 = (state_12253[(11)]);
var inst_12162 = (state_12253[(8)]);
var inst_12236 = cljs.core.async.muxch_STAR_(inst_12212);
var state_12253__$1 = state_12253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12253__$1,(22),inst_12236,inst_12162);
} else {
if((state_val_12254 === (11))){
var inst_12186 = (state_12253[(10)]);
var inst_12172 = (state_12253[(14)]);
var inst_12186__$1 = cljs.core.seq(inst_12172);
var state_12253__$1 = (function (){var statearr_12292 = state_12253;
(statearr_12292[(10)] = inst_12186__$1);

return statearr_12292;
})();
if(inst_12186__$1){
var statearr_12293_13326 = state_12253__$1;
(statearr_12293_13326[(1)] = (13));

} else {
var statearr_12294_13327 = state_12253__$1;
(statearr_12294_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (9))){
var inst_12208 = (state_12253[(2)]);
var state_12253__$1 = state_12253;
var statearr_12295_13328 = state_12253__$1;
(statearr_12295_13328[(2)] = inst_12208);

(statearr_12295_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (5))){
var inst_12169 = cljs.core.deref(mults);
var inst_12170 = cljs.core.vals(inst_12169);
var inst_12171 = cljs.core.seq(inst_12170);
var inst_12172 = inst_12171;
var inst_12173 = null;
var inst_12174 = (0);
var inst_12175 = (0);
var state_12253__$1 = (function (){var statearr_12296 = state_12253;
(statearr_12296[(12)] = inst_12173);

(statearr_12296[(13)] = inst_12174);

(statearr_12296[(14)] = inst_12172);

(statearr_12296[(16)] = inst_12175);

return statearr_12296;
})();
var statearr_12297_13329 = state_12253__$1;
(statearr_12297_13329[(2)] = null);

(statearr_12297_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (14))){
var state_12253__$1 = state_12253;
var statearr_12301_13330 = state_12253__$1;
(statearr_12301_13330[(2)] = null);

(statearr_12301_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (16))){
var inst_12186 = (state_12253[(10)]);
var inst_12190 = cljs.core.chunk_first(inst_12186);
var inst_12191 = cljs.core.chunk_rest(inst_12186);
var inst_12192 = cljs.core.count(inst_12190);
var inst_12172 = inst_12191;
var inst_12173 = inst_12190;
var inst_12174 = inst_12192;
var inst_12175 = (0);
var state_12253__$1 = (function (){var statearr_12302 = state_12253;
(statearr_12302[(12)] = inst_12173);

(statearr_12302[(13)] = inst_12174);

(statearr_12302[(14)] = inst_12172);

(statearr_12302[(16)] = inst_12175);

return statearr_12302;
})();
var statearr_12303_13331 = state_12253__$1;
(statearr_12303_13331[(2)] = null);

(statearr_12303_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (10))){
var inst_12173 = (state_12253[(12)]);
var inst_12174 = (state_12253[(13)]);
var inst_12172 = (state_12253[(14)]);
var inst_12175 = (state_12253[(16)]);
var inst_12180 = cljs.core._nth(inst_12173,inst_12175);
var inst_12181 = cljs.core.async.muxch_STAR_(inst_12180);
var inst_12182 = cljs.core.async.close_BANG_(inst_12181);
var inst_12183 = (inst_12175 + (1));
var tmp12298 = inst_12173;
var tmp12299 = inst_12174;
var tmp12300 = inst_12172;
var inst_12172__$1 = tmp12300;
var inst_12173__$1 = tmp12298;
var inst_12174__$1 = tmp12299;
var inst_12175__$1 = inst_12183;
var state_12253__$1 = (function (){var statearr_12304 = state_12253;
(statearr_12304[(17)] = inst_12182);

(statearr_12304[(12)] = inst_12173__$1);

(statearr_12304[(13)] = inst_12174__$1);

(statearr_12304[(14)] = inst_12172__$1);

(statearr_12304[(16)] = inst_12175__$1);

return statearr_12304;
})();
var statearr_12305_13332 = state_12253__$1;
(statearr_12305_13332[(2)] = null);

(statearr_12305_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (18))){
var inst_12201 = (state_12253[(2)]);
var state_12253__$1 = state_12253;
var statearr_12306_13333 = state_12253__$1;
(statearr_12306_13333[(2)] = inst_12201);

(statearr_12306_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12254 === (8))){
var inst_12174 = (state_12253[(13)]);
var inst_12175 = (state_12253[(16)]);
var inst_12177 = (inst_12175 < inst_12174);
var inst_12178 = inst_12177;
var state_12253__$1 = state_12253;
if(cljs.core.truth_(inst_12178)){
var statearr_12307_13334 = state_12253__$1;
(statearr_12307_13334[(1)] = (10));

} else {
var statearr_12308_13335 = state_12253__$1;
(statearr_12308_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12326[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12326[(1)] = (1));

return statearr_12326;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12253){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12253);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12327){var ex__10932__auto__ = e12327;
var statearr_12328_13336 = state_12253;
(statearr_12328_13336[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12253[(4)]))){
var statearr_12329_13337 = state_12253;
(statearr_12329_13337[(1)] = cljs.core.first((state_12253[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12253;
state_12253 = G__13338;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12330 = f__10977__auto__();
(statearr_12330[(6)] = c__10976__auto___13307);

return statearr_12330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var G__12332 = arguments.length;
switch (G__12332) {
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
var G__12334 = arguments.length;
switch (G__12334) {
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
var G__12339 = arguments.length;
switch (G__12339) {
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
var c__10976__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12399){
var state_val_12400 = (state_12399[(1)]);
if((state_val_12400 === (7))){
var state_12399__$1 = state_12399;
var statearr_12401_13343 = state_12399__$1;
(statearr_12401_13343[(2)] = null);

(statearr_12401_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (1))){
var state_12399__$1 = state_12399;
var statearr_12402_13344 = state_12399__$1;
(statearr_12402_13344[(2)] = null);

(statearr_12402_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (4))){
var inst_12343 = (state_12399[(7)]);
var inst_12342 = (state_12399[(8)]);
var inst_12345 = (inst_12343 < inst_12342);
var state_12399__$1 = state_12399;
if(cljs.core.truth_(inst_12345)){
var statearr_12403_13345 = state_12399__$1;
(statearr_12403_13345[(1)] = (6));

} else {
var statearr_12404_13346 = state_12399__$1;
(statearr_12404_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (15))){
var inst_12368 = (state_12399[(9)]);
var inst_12373 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12368);
var state_12399__$1 = state_12399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12399__$1,(17),out,inst_12373);
} else {
if((state_val_12400 === (13))){
var inst_12368 = (state_12399[(9)]);
var inst_12368__$1 = (state_12399[(2)]);
var inst_12369 = cljs.core.some(cljs.core.nil_QMARK_,inst_12368__$1);
var state_12399__$1 = (function (){var statearr_12405 = state_12399;
(statearr_12405[(9)] = inst_12368__$1);

return statearr_12405;
})();
if(cljs.core.truth_(inst_12369)){
var statearr_12406_13347 = state_12399__$1;
(statearr_12406_13347[(1)] = (14));

} else {
var statearr_12407_13348 = state_12399__$1;
(statearr_12407_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (6))){
var state_12399__$1 = state_12399;
var statearr_12408_13349 = state_12399__$1;
(statearr_12408_13349[(2)] = null);

(statearr_12408_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (17))){
var inst_12375 = (state_12399[(2)]);
var state_12399__$1 = (function (){var statearr_12410 = state_12399;
(statearr_12410[(10)] = inst_12375);

return statearr_12410;
})();
var statearr_12411_13350 = state_12399__$1;
(statearr_12411_13350[(2)] = null);

(statearr_12411_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (3))){
var inst_12380 = (state_12399[(2)]);
var state_12399__$1 = state_12399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12399__$1,inst_12380);
} else {
if((state_val_12400 === (12))){
var _ = (function (){var statearr_12412 = state_12399;
(statearr_12412[(4)] = cljs.core.rest((state_12399[(4)])));

return statearr_12412;
})();
var state_12399__$1 = state_12399;
var ex12409 = (state_12399__$1[(2)]);
var statearr_12413_13351 = state_12399__$1;
(statearr_12413_13351[(5)] = ex12409);


if((ex12409 instanceof Object)){
var statearr_12423_13352 = state_12399__$1;
(statearr_12423_13352[(1)] = (11));

(statearr_12423_13352[(5)] = null);

} else {
throw ex12409;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (2))){
var inst_12341 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12342 = cnt;
var inst_12343 = (0);
var state_12399__$1 = (function (){var statearr_12424 = state_12399;
(statearr_12424[(7)] = inst_12343);

(statearr_12424[(8)] = inst_12342);

(statearr_12424[(11)] = inst_12341);

return statearr_12424;
})();
var statearr_12425_13353 = state_12399__$1;
(statearr_12425_13353[(2)] = null);

(statearr_12425_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (11))){
var inst_12347 = (state_12399[(2)]);
var inst_12348 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12399__$1 = (function (){var statearr_12426 = state_12399;
(statearr_12426[(12)] = inst_12347);

return statearr_12426;
})();
var statearr_12427_13354 = state_12399__$1;
(statearr_12427_13354[(2)] = inst_12348);

(statearr_12427_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (9))){
var inst_12343 = (state_12399[(7)]);
var _ = (function (){var statearr_12428 = state_12399;
(statearr_12428[(4)] = cljs.core.cons((12),(state_12399[(4)])));

return statearr_12428;
})();
var inst_12354 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12343) : chs__$1.call(null,inst_12343));
var inst_12355 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12343) : done.call(null,inst_12343));
var inst_12356 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12354,inst_12355);
var ___$1 = (function (){var statearr_12429 = state_12399;
(statearr_12429[(4)] = cljs.core.rest((state_12399[(4)])));

return statearr_12429;
})();
var state_12399__$1 = state_12399;
var statearr_12430_13355 = state_12399__$1;
(statearr_12430_13355[(2)] = inst_12356);

(statearr_12430_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (5))){
var inst_12366 = (state_12399[(2)]);
var state_12399__$1 = (function (){var statearr_12431 = state_12399;
(statearr_12431[(13)] = inst_12366);

return statearr_12431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12399__$1,(13),dchan);
} else {
if((state_val_12400 === (14))){
var inst_12371 = cljs.core.async.close_BANG_(out);
var state_12399__$1 = state_12399;
var statearr_12432_13356 = state_12399__$1;
(statearr_12432_13356[(2)] = inst_12371);

(statearr_12432_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (16))){
var inst_12378 = (state_12399[(2)]);
var state_12399__$1 = state_12399;
var statearr_12433_13357 = state_12399__$1;
(statearr_12433_13357[(2)] = inst_12378);

(statearr_12433_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (10))){
var inst_12343 = (state_12399[(7)]);
var inst_12359 = (state_12399[(2)]);
var inst_12360 = (inst_12343 + (1));
var inst_12343__$1 = inst_12360;
var state_12399__$1 = (function (){var statearr_12434 = state_12399;
(statearr_12434[(7)] = inst_12343__$1);

(statearr_12434[(14)] = inst_12359);

return statearr_12434;
})();
var statearr_12435_13358 = state_12399__$1;
(statearr_12435_13358[(2)] = null);

(statearr_12435_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12400 === (8))){
var inst_12364 = (state_12399[(2)]);
var state_12399__$1 = state_12399;
var statearr_12436_13359 = state_12399__$1;
(statearr_12436_13359[(2)] = inst_12364);

(statearr_12436_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12437[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12437[(1)] = (1));

return statearr_12437;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12399){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12399);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12438){var ex__10932__auto__ = e12438;
var statearr_12439_13360 = state_12399;
(statearr_12439_13360[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12399[(4)]))){
var statearr_12440_13361 = state_12399;
(statearr_12440_13361[(1)] = cljs.core.first((state_12399[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12399;
state_12399 = G__13362;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12441 = f__10977__auto__();
(statearr_12441[(6)] = c__10976__auto___13342);

return statearr_12441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var G__12444 = arguments.length;
switch (G__12444) {
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
var c__10976__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12476){
var state_val_12477 = (state_12476[(1)]);
if((state_val_12477 === (7))){
var inst_12455 = (state_12476[(7)]);
var inst_12456 = (state_12476[(8)]);
var inst_12455__$1 = (state_12476[(2)]);
var inst_12456__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12455__$1,(0),null);
var inst_12457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12455__$1,(1),null);
var inst_12458 = (inst_12456__$1 == null);
var state_12476__$1 = (function (){var statearr_12478 = state_12476;
(statearr_12478[(7)] = inst_12455__$1);

(statearr_12478[(8)] = inst_12456__$1);

(statearr_12478[(9)] = inst_12457);

return statearr_12478;
})();
if(cljs.core.truth_(inst_12458)){
var statearr_12479_13365 = state_12476__$1;
(statearr_12479_13365[(1)] = (8));

} else {
var statearr_12480_13366 = state_12476__$1;
(statearr_12480_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (1))){
var inst_12445 = cljs.core.vec(chs);
var inst_12446 = inst_12445;
var state_12476__$1 = (function (){var statearr_12481 = state_12476;
(statearr_12481[(10)] = inst_12446);

return statearr_12481;
})();
var statearr_12482_13367 = state_12476__$1;
(statearr_12482_13367[(2)] = null);

(statearr_12482_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (4))){
var inst_12446 = (state_12476[(10)]);
var state_12476__$1 = state_12476;
return cljs.core.async.ioc_alts_BANG_(state_12476__$1,(7),inst_12446);
} else {
if((state_val_12477 === (6))){
var inst_12472 = (state_12476[(2)]);
var state_12476__$1 = state_12476;
var statearr_12483_13368 = state_12476__$1;
(statearr_12483_13368[(2)] = inst_12472);

(statearr_12483_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (3))){
var inst_12474 = (state_12476[(2)]);
var state_12476__$1 = state_12476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12476__$1,inst_12474);
} else {
if((state_val_12477 === (2))){
var inst_12446 = (state_12476[(10)]);
var inst_12448 = cljs.core.count(inst_12446);
var inst_12449 = (inst_12448 > (0));
var state_12476__$1 = state_12476;
if(cljs.core.truth_(inst_12449)){
var statearr_12485_13369 = state_12476__$1;
(statearr_12485_13369[(1)] = (4));

} else {
var statearr_12486_13370 = state_12476__$1;
(statearr_12486_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (11))){
var inst_12446 = (state_12476[(10)]);
var inst_12465 = (state_12476[(2)]);
var tmp12484 = inst_12446;
var inst_12446__$1 = tmp12484;
var state_12476__$1 = (function (){var statearr_12487 = state_12476;
(statearr_12487[(10)] = inst_12446__$1);

(statearr_12487[(11)] = inst_12465);

return statearr_12487;
})();
var statearr_12488_13371 = state_12476__$1;
(statearr_12488_13371[(2)] = null);

(statearr_12488_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (9))){
var inst_12456 = (state_12476[(8)]);
var state_12476__$1 = state_12476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12476__$1,(11),out,inst_12456);
} else {
if((state_val_12477 === (5))){
var inst_12470 = cljs.core.async.close_BANG_(out);
var state_12476__$1 = state_12476;
var statearr_12492_13372 = state_12476__$1;
(statearr_12492_13372[(2)] = inst_12470);

(statearr_12492_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (10))){
var inst_12468 = (state_12476[(2)]);
var state_12476__$1 = state_12476;
var statearr_12493_13373 = state_12476__$1;
(statearr_12493_13373[(2)] = inst_12468);

(statearr_12493_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (8))){
var inst_12455 = (state_12476[(7)]);
var inst_12456 = (state_12476[(8)]);
var inst_12446 = (state_12476[(10)]);
var inst_12457 = (state_12476[(9)]);
var inst_12460 = (function (){var cs = inst_12446;
var vec__12451 = inst_12455;
var v = inst_12456;
var c = inst_12457;
return (function (p1__12442_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12442_SHARP_);
});
})();
var inst_12461 = cljs.core.filterv(inst_12460,inst_12446);
var inst_12446__$1 = inst_12461;
var state_12476__$1 = (function (){var statearr_12499 = state_12476;
(statearr_12499[(10)] = inst_12446__$1);

return statearr_12499;
})();
var statearr_12500_13374 = state_12476__$1;
(statearr_12500_13374[(2)] = null);

(statearr_12500_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12502[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12502[(1)] = (1));

return statearr_12502;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12476){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12476);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12503){var ex__10932__auto__ = e12503;
var statearr_12504_13375 = state_12476;
(statearr_12504_13375[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12476[(4)]))){
var statearr_12505_13376 = state_12476;
(statearr_12505_13376[(1)] = cljs.core.first((state_12476[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12476;
state_12476 = G__13377;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12507 = f__10977__auto__();
(statearr_12507[(6)] = c__10976__auto___13364);

return statearr_12507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var G__12511 = arguments.length;
switch (G__12511) {
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
var c__10976__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12538){
var state_val_12539 = (state_12538[(1)]);
if((state_val_12539 === (7))){
var inst_12517 = (state_12538[(7)]);
var inst_12517__$1 = (state_12538[(2)]);
var inst_12520 = (inst_12517__$1 == null);
var inst_12521 = cljs.core.not(inst_12520);
var state_12538__$1 = (function (){var statearr_12575 = state_12538;
(statearr_12575[(7)] = inst_12517__$1);

return statearr_12575;
})();
if(inst_12521){
var statearr_12581_13380 = state_12538__$1;
(statearr_12581_13380[(1)] = (8));

} else {
var statearr_12583_13381 = state_12538__$1;
(statearr_12583_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (1))){
var inst_12512 = (0);
var state_12538__$1 = (function (){var statearr_12590 = state_12538;
(statearr_12590[(8)] = inst_12512);

return statearr_12590;
})();
var statearr_12591_13382 = state_12538__$1;
(statearr_12591_13382[(2)] = null);

(statearr_12591_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (4))){
var state_12538__$1 = state_12538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12538__$1,(7),ch);
} else {
if((state_val_12539 === (6))){
var inst_12533 = (state_12538[(2)]);
var state_12538__$1 = state_12538;
var statearr_12597_13383 = state_12538__$1;
(statearr_12597_13383[(2)] = inst_12533);

(statearr_12597_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (3))){
var inst_12535 = (state_12538[(2)]);
var inst_12536 = cljs.core.async.close_BANG_(out);
var state_12538__$1 = (function (){var statearr_12599 = state_12538;
(statearr_12599[(9)] = inst_12535);

return statearr_12599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12538__$1,inst_12536);
} else {
if((state_val_12539 === (2))){
var inst_12512 = (state_12538[(8)]);
var inst_12514 = (inst_12512 < n);
var state_12538__$1 = state_12538;
if(cljs.core.truth_(inst_12514)){
var statearr_12600_13384 = state_12538__$1;
(statearr_12600_13384[(1)] = (4));

} else {
var statearr_12601_13385 = state_12538__$1;
(statearr_12601_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (11))){
var inst_12512 = (state_12538[(8)]);
var inst_12524 = (state_12538[(2)]);
var inst_12525 = (inst_12512 + (1));
var inst_12512__$1 = inst_12525;
var state_12538__$1 = (function (){var statearr_12603 = state_12538;
(statearr_12603[(10)] = inst_12524);

(statearr_12603[(8)] = inst_12512__$1);

return statearr_12603;
})();
var statearr_12605_13386 = state_12538__$1;
(statearr_12605_13386[(2)] = null);

(statearr_12605_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (9))){
var state_12538__$1 = state_12538;
var statearr_12608_13387 = state_12538__$1;
(statearr_12608_13387[(2)] = null);

(statearr_12608_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (5))){
var state_12538__$1 = state_12538;
var statearr_12609_13388 = state_12538__$1;
(statearr_12609_13388[(2)] = null);

(statearr_12609_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (10))){
var inst_12529 = (state_12538[(2)]);
var state_12538__$1 = state_12538;
var statearr_12610_13389 = state_12538__$1;
(statearr_12610_13389[(2)] = inst_12529);

(statearr_12610_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (8))){
var inst_12517 = (state_12538[(7)]);
var state_12538__$1 = state_12538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12538__$1,(11),out,inst_12517);
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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12611[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12611[(1)] = (1));

return statearr_12611;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12538){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12538);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12612){var ex__10932__auto__ = e12612;
var statearr_12613_13390 = state_12538;
(statearr_12613_13390[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12538[(4)]))){
var statearr_12614_13391 = state_12538;
(statearr_12614_13391[(1)] = cljs.core.first((state_12538[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12538;
state_12538 = G__13392;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12615 = f__10977__auto__();
(statearr_12615[(6)] = c__10976__auto___13379);

return statearr_12615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12633 = (function (f,ch,meta12634){
this.f = f;
this.ch = ch;
this.meta12634 = meta12634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12635,meta12634__$1){
var self__ = this;
var _12635__$1 = this;
return (new cljs.core.async.t_cljs$core$async12633(self__.f,self__.ch,meta12634__$1));
}));

(cljs.core.async.t_cljs$core$async12633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12635){
var self__ = this;
var _12635__$1 = this;
return self__.meta12634;
}));

(cljs.core.async.t_cljs$core$async12633.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12633.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12633.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12639 = (function (f,ch,meta12634,_,fn1,meta12640){
this.f = f;
this.ch = ch;
this.meta12634 = meta12634;
this._ = _;
this.fn1 = fn1;
this.meta12640 = meta12640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12641,meta12640__$1){
var self__ = this;
var _12641__$1 = this;
return (new cljs.core.async.t_cljs$core$async12639(self__.f,self__.ch,self__.meta12634,self__._,self__.fn1,meta12640__$1));
}));

(cljs.core.async.t_cljs$core$async12639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12641){
var self__ = this;
var _12641__$1 = this;
return self__.meta12640;
}));

(cljs.core.async.t_cljs$core$async12639.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12639.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12617_SHARP_){
var G__12646 = (((p1__12617_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12617_SHARP_) : self__.f.call(null,p1__12617_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12646) : f1.call(null,G__12646));
});
}));

(cljs.core.async.t_cljs$core$async12639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12634","meta12634",-1044350968,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12633","cljs.core.async/t_cljs$core$async12633",-2101556161,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12640","meta12640",-1532402072,null)], null);
}));

(cljs.core.async.t_cljs$core$async12639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12639");

(cljs.core.async.t_cljs$core$async12639.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12639.
 */
cljs.core.async.__GT_t_cljs$core$async12639 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12639(f__$1,ch__$1,meta12634__$1,___$2,fn1__$1,meta12640){
return (new cljs.core.async.t_cljs$core$async12639(f__$1,ch__$1,meta12634__$1,___$2,fn1__$1,meta12640));
});

}

return (new cljs.core.async.t_cljs$core$async12639(self__.f,self__.ch,self__.meta12634,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12649 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12649) : self__.f.call(null,G__12649));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12633.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12634","meta12634",-1044350968,null)], null);
}));

(cljs.core.async.t_cljs$core$async12633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12633");

(cljs.core.async.t_cljs$core$async12633.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12633.
 */
cljs.core.async.__GT_t_cljs$core$async12633 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12633(f__$1,ch__$1,meta12634){
return (new cljs.core.async.t_cljs$core$async12633(f__$1,ch__$1,meta12634));
});

}

return (new cljs.core.async.t_cljs$core$async12633(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12657 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12657 = (function (f,ch,meta12658){
this.f = f;
this.ch = ch;
this.meta12658 = meta12658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12659,meta12658__$1){
var self__ = this;
var _12659__$1 = this;
return (new cljs.core.async.t_cljs$core$async12657(self__.f,self__.ch,meta12658__$1));
}));

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12659){
var self__ = this;
var _12659__$1 = this;
return self__.meta12658;
}));

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12658","meta12658",363659380,null)], null);
}));

(cljs.core.async.t_cljs$core$async12657.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12657");

(cljs.core.async.t_cljs$core$async12657.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12657");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12657.
 */
cljs.core.async.__GT_t_cljs$core$async12657 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12657(f__$1,ch__$1,meta12658){
return (new cljs.core.async.t_cljs$core$async12657(f__$1,ch__$1,meta12658));
});

}

return (new cljs.core.async.t_cljs$core$async12657(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12660 = (function (p,ch,meta12661){
this.p = p;
this.ch = ch;
this.meta12661 = meta12661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12662,meta12661__$1){
var self__ = this;
var _12662__$1 = this;
return (new cljs.core.async.t_cljs$core$async12660(self__.p,self__.ch,meta12661__$1));
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12662){
var self__ = this;
var _12662__$1 = this;
return self__.meta12661;
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12661","meta12661",-302234611,null)], null);
}));

(cljs.core.async.t_cljs$core$async12660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12660");

(cljs.core.async.t_cljs$core$async12660.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12660.
 */
cljs.core.async.__GT_t_cljs$core$async12660 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12660(p__$1,ch__$1,meta12661){
return (new cljs.core.async.t_cljs$core$async12660(p__$1,ch__$1,meta12661));
});

}

return (new cljs.core.async.t_cljs$core$async12660(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12664 = arguments.length;
switch (G__12664) {
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
var c__10976__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12685){
var state_val_12686 = (state_12685[(1)]);
if((state_val_12686 === (7))){
var inst_12681 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12687_13395 = state_12685__$1;
(statearr_12687_13395[(2)] = inst_12681);

(statearr_12687_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (1))){
var state_12685__$1 = state_12685;
var statearr_12688_13396 = state_12685__$1;
(statearr_12688_13396[(2)] = null);

(statearr_12688_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (4))){
var inst_12667 = (state_12685[(7)]);
var inst_12667__$1 = (state_12685[(2)]);
var inst_12668 = (inst_12667__$1 == null);
var state_12685__$1 = (function (){var statearr_12689 = state_12685;
(statearr_12689[(7)] = inst_12667__$1);

return statearr_12689;
})();
if(cljs.core.truth_(inst_12668)){
var statearr_12690_13397 = state_12685__$1;
(statearr_12690_13397[(1)] = (5));

} else {
var statearr_12691_13398 = state_12685__$1;
(statearr_12691_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (6))){
var inst_12667 = (state_12685[(7)]);
var inst_12672 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12667) : p.call(null,inst_12667));
var state_12685__$1 = state_12685;
if(cljs.core.truth_(inst_12672)){
var statearr_12692_13399 = state_12685__$1;
(statearr_12692_13399[(1)] = (8));

} else {
var statearr_12693_13400 = state_12685__$1;
(statearr_12693_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (3))){
var inst_12683 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12685__$1,inst_12683);
} else {
if((state_val_12686 === (2))){
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12685__$1,(4),ch);
} else {
if((state_val_12686 === (11))){
var inst_12675 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12694_13401 = state_12685__$1;
(statearr_12694_13401[(2)] = inst_12675);

(statearr_12694_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (9))){
var state_12685__$1 = state_12685;
var statearr_12695_13402 = state_12685__$1;
(statearr_12695_13402[(2)] = null);

(statearr_12695_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (5))){
var inst_12670 = cljs.core.async.close_BANG_(out);
var state_12685__$1 = state_12685;
var statearr_12696_13403 = state_12685__$1;
(statearr_12696_13403[(2)] = inst_12670);

(statearr_12696_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (10))){
var inst_12678 = (state_12685[(2)]);
var state_12685__$1 = (function (){var statearr_12697 = state_12685;
(statearr_12697[(8)] = inst_12678);

return statearr_12697;
})();
var statearr_12698_13404 = state_12685__$1;
(statearr_12698_13404[(2)] = null);

(statearr_12698_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (8))){
var inst_12667 = (state_12685[(7)]);
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12685__$1,(11),out,inst_12667);
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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12699 = [null,null,null,null,null,null,null,null,null];
(statearr_12699[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12699[(1)] = (1));

return statearr_12699;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12685){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12685);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12700){var ex__10932__auto__ = e12700;
var statearr_12701_13405 = state_12685;
(statearr_12701_13405[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12685[(4)]))){
var statearr_12702_13406 = state_12685;
(statearr_12702_13406[(1)] = cljs.core.first((state_12685[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12685;
state_12685 = G__13407;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12703 = f__10977__auto__();
(statearr_12703[(6)] = c__10976__auto___13394);

return statearr_12703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12705 = arguments.length;
switch (G__12705) {
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
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12767){
var state_val_12768 = (state_12767[(1)]);
if((state_val_12768 === (7))){
var inst_12763 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12769_13409 = state_12767__$1;
(statearr_12769_13409[(2)] = inst_12763);

(statearr_12769_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (20))){
var inst_12733 = (state_12767[(7)]);
var inst_12744 = (state_12767[(2)]);
var inst_12745 = cljs.core.next(inst_12733);
var inst_12719 = inst_12745;
var inst_12720 = null;
var inst_12721 = (0);
var inst_12722 = (0);
var state_12767__$1 = (function (){var statearr_12770 = state_12767;
(statearr_12770[(8)] = inst_12722);

(statearr_12770[(9)] = inst_12721);

(statearr_12770[(10)] = inst_12719);

(statearr_12770[(11)] = inst_12720);

(statearr_12770[(12)] = inst_12744);

return statearr_12770;
})();
var statearr_12771_13410 = state_12767__$1;
(statearr_12771_13410[(2)] = null);

(statearr_12771_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (1))){
var state_12767__$1 = state_12767;
var statearr_12772_13411 = state_12767__$1;
(statearr_12772_13411[(2)] = null);

(statearr_12772_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (4))){
var inst_12708 = (state_12767[(13)]);
var inst_12708__$1 = (state_12767[(2)]);
var inst_12709 = (inst_12708__$1 == null);
var state_12767__$1 = (function (){var statearr_12773 = state_12767;
(statearr_12773[(13)] = inst_12708__$1);

return statearr_12773;
})();
if(cljs.core.truth_(inst_12709)){
var statearr_12774_13412 = state_12767__$1;
(statearr_12774_13412[(1)] = (5));

} else {
var statearr_12775_13413 = state_12767__$1;
(statearr_12775_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (15))){
var state_12767__$1 = state_12767;
var statearr_12779_13414 = state_12767__$1;
(statearr_12779_13414[(2)] = null);

(statearr_12779_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (21))){
var state_12767__$1 = state_12767;
var statearr_12780_13415 = state_12767__$1;
(statearr_12780_13415[(2)] = null);

(statearr_12780_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (13))){
var inst_12722 = (state_12767[(8)]);
var inst_12721 = (state_12767[(9)]);
var inst_12719 = (state_12767[(10)]);
var inst_12720 = (state_12767[(11)]);
var inst_12729 = (state_12767[(2)]);
var inst_12730 = (inst_12722 + (1));
var tmp12776 = inst_12721;
var tmp12777 = inst_12719;
var tmp12778 = inst_12720;
var inst_12719__$1 = tmp12777;
var inst_12720__$1 = tmp12778;
var inst_12721__$1 = tmp12776;
var inst_12722__$1 = inst_12730;
var state_12767__$1 = (function (){var statearr_12781 = state_12767;
(statearr_12781[(8)] = inst_12722__$1);

(statearr_12781[(9)] = inst_12721__$1);

(statearr_12781[(10)] = inst_12719__$1);

(statearr_12781[(14)] = inst_12729);

(statearr_12781[(11)] = inst_12720__$1);

return statearr_12781;
})();
var statearr_12782_13416 = state_12767__$1;
(statearr_12782_13416[(2)] = null);

(statearr_12782_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (22))){
var state_12767__$1 = state_12767;
var statearr_12783_13417 = state_12767__$1;
(statearr_12783_13417[(2)] = null);

(statearr_12783_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (6))){
var inst_12708 = (state_12767[(13)]);
var inst_12717 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12708) : f.call(null,inst_12708));
var inst_12718 = cljs.core.seq(inst_12717);
var inst_12719 = inst_12718;
var inst_12720 = null;
var inst_12721 = (0);
var inst_12722 = (0);
var state_12767__$1 = (function (){var statearr_12784 = state_12767;
(statearr_12784[(8)] = inst_12722);

(statearr_12784[(9)] = inst_12721);

(statearr_12784[(10)] = inst_12719);

(statearr_12784[(11)] = inst_12720);

return statearr_12784;
})();
var statearr_12785_13418 = state_12767__$1;
(statearr_12785_13418[(2)] = null);

(statearr_12785_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (17))){
var inst_12733 = (state_12767[(7)]);
var inst_12737 = cljs.core.chunk_first(inst_12733);
var inst_12738 = cljs.core.chunk_rest(inst_12733);
var inst_12739 = cljs.core.count(inst_12737);
var inst_12719 = inst_12738;
var inst_12720 = inst_12737;
var inst_12721 = inst_12739;
var inst_12722 = (0);
var state_12767__$1 = (function (){var statearr_12786 = state_12767;
(statearr_12786[(8)] = inst_12722);

(statearr_12786[(9)] = inst_12721);

(statearr_12786[(10)] = inst_12719);

(statearr_12786[(11)] = inst_12720);

return statearr_12786;
})();
var statearr_12787_13419 = state_12767__$1;
(statearr_12787_13419[(2)] = null);

(statearr_12787_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (3))){
var inst_12765 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12767__$1,inst_12765);
} else {
if((state_val_12768 === (12))){
var inst_12753 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12788_13420 = state_12767__$1;
(statearr_12788_13420[(2)] = inst_12753);

(statearr_12788_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (2))){
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12767__$1,(4),in$);
} else {
if((state_val_12768 === (23))){
var inst_12761 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12789_13421 = state_12767__$1;
(statearr_12789_13421[(2)] = inst_12761);

(statearr_12789_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (19))){
var inst_12748 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12790_13422 = state_12767__$1;
(statearr_12790_13422[(2)] = inst_12748);

(statearr_12790_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (11))){
var inst_12719 = (state_12767[(10)]);
var inst_12733 = (state_12767[(7)]);
var inst_12733__$1 = cljs.core.seq(inst_12719);
var state_12767__$1 = (function (){var statearr_12791 = state_12767;
(statearr_12791[(7)] = inst_12733__$1);

return statearr_12791;
})();
if(inst_12733__$1){
var statearr_12792_13423 = state_12767__$1;
(statearr_12792_13423[(1)] = (14));

} else {
var statearr_12793_13424 = state_12767__$1;
(statearr_12793_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (9))){
var inst_12755 = (state_12767[(2)]);
var inst_12756 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12767__$1 = (function (){var statearr_12794 = state_12767;
(statearr_12794[(15)] = inst_12755);

return statearr_12794;
})();
if(cljs.core.truth_(inst_12756)){
var statearr_12795_13425 = state_12767__$1;
(statearr_12795_13425[(1)] = (21));

} else {
var statearr_12796_13426 = state_12767__$1;
(statearr_12796_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (5))){
var inst_12711 = cljs.core.async.close_BANG_(out);
var state_12767__$1 = state_12767;
var statearr_12797_13427 = state_12767__$1;
(statearr_12797_13427[(2)] = inst_12711);

(statearr_12797_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (14))){
var inst_12733 = (state_12767[(7)]);
var inst_12735 = cljs.core.chunked_seq_QMARK_(inst_12733);
var state_12767__$1 = state_12767;
if(inst_12735){
var statearr_12798_13428 = state_12767__$1;
(statearr_12798_13428[(1)] = (17));

} else {
var statearr_12799_13429 = state_12767__$1;
(statearr_12799_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (16))){
var inst_12751 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12800_13430 = state_12767__$1;
(statearr_12800_13430[(2)] = inst_12751);

(statearr_12800_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (10))){
var inst_12722 = (state_12767[(8)]);
var inst_12720 = (state_12767[(11)]);
var inst_12727 = cljs.core._nth(inst_12720,inst_12722);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12767__$1,(13),out,inst_12727);
} else {
if((state_val_12768 === (18))){
var inst_12733 = (state_12767[(7)]);
var inst_12742 = cljs.core.first(inst_12733);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12767__$1,(20),out,inst_12742);
} else {
if((state_val_12768 === (8))){
var inst_12722 = (state_12767[(8)]);
var inst_12721 = (state_12767[(9)]);
var inst_12724 = (inst_12722 < inst_12721);
var inst_12725 = inst_12724;
var state_12767__$1 = state_12767;
if(cljs.core.truth_(inst_12725)){
var statearr_12801_13431 = state_12767__$1;
(statearr_12801_13431[(1)] = (10));

} else {
var statearr_12802_13432 = state_12767__$1;
(statearr_12802_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_12803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12803[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__);

(statearr_12803[(1)] = (1));

return statearr_12803;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____1 = (function (state_12767){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12767);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12804){var ex__10932__auto__ = e12804;
var statearr_12805_13433 = state_12767;
(statearr_12805_13433[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12767[(4)]))){
var statearr_12806_13434 = state_12767;
(statearr_12806_13434[(1)] = cljs.core.first((state_12767[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12767;
state_12767 = G__13435;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__ = function(state_12767){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____1.call(this,state_12767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12807 = f__10977__auto__();
(statearr_12807[(6)] = c__10976__auto__);

return statearr_12807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12809 = arguments.length;
switch (G__12809) {
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
var G__12811 = arguments.length;
switch (G__12811) {
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
var G__12813 = arguments.length;
switch (G__12813) {
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
var c__10976__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12837){
var state_val_12838 = (state_12837[(1)]);
if((state_val_12838 === (7))){
var inst_12832 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
var statearr_12839_13440 = state_12837__$1;
(statearr_12839_13440[(2)] = inst_12832);

(statearr_12839_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (1))){
var inst_12814 = null;
var state_12837__$1 = (function (){var statearr_12840 = state_12837;
(statearr_12840[(7)] = inst_12814);

return statearr_12840;
})();
var statearr_12841_13441 = state_12837__$1;
(statearr_12841_13441[(2)] = null);

(statearr_12841_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (4))){
var inst_12817 = (state_12837[(8)]);
var inst_12817__$1 = (state_12837[(2)]);
var inst_12818 = (inst_12817__$1 == null);
var inst_12819 = cljs.core.not(inst_12818);
var state_12837__$1 = (function (){var statearr_12842 = state_12837;
(statearr_12842[(8)] = inst_12817__$1);

return statearr_12842;
})();
if(inst_12819){
var statearr_12843_13442 = state_12837__$1;
(statearr_12843_13442[(1)] = (5));

} else {
var statearr_12844_13443 = state_12837__$1;
(statearr_12844_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (6))){
var state_12837__$1 = state_12837;
var statearr_12845_13444 = state_12837__$1;
(statearr_12845_13444[(2)] = null);

(statearr_12845_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (3))){
var inst_12834 = (state_12837[(2)]);
var inst_12835 = cljs.core.async.close_BANG_(out);
var state_12837__$1 = (function (){var statearr_12846 = state_12837;
(statearr_12846[(9)] = inst_12834);

return statearr_12846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12837__$1,inst_12835);
} else {
if((state_val_12838 === (2))){
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12837__$1,(4),ch);
} else {
if((state_val_12838 === (11))){
var inst_12817 = (state_12837[(8)]);
var inst_12826 = (state_12837[(2)]);
var inst_12814 = inst_12817;
var state_12837__$1 = (function (){var statearr_12847 = state_12837;
(statearr_12847[(10)] = inst_12826);

(statearr_12847[(7)] = inst_12814);

return statearr_12847;
})();
var statearr_12848_13445 = state_12837__$1;
(statearr_12848_13445[(2)] = null);

(statearr_12848_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (9))){
var inst_12817 = (state_12837[(8)]);
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12837__$1,(11),out,inst_12817);
} else {
if((state_val_12838 === (5))){
var inst_12817 = (state_12837[(8)]);
var inst_12814 = (state_12837[(7)]);
var inst_12821 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12817,inst_12814);
var state_12837__$1 = state_12837;
if(inst_12821){
var statearr_12850_13446 = state_12837__$1;
(statearr_12850_13446[(1)] = (8));

} else {
var statearr_12851_13447 = state_12837__$1;
(statearr_12851_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (10))){
var inst_12829 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
var statearr_12852_13448 = state_12837__$1;
(statearr_12852_13448[(2)] = inst_12829);

(statearr_12852_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (8))){
var inst_12814 = (state_12837[(7)]);
var tmp12849 = inst_12814;
var inst_12814__$1 = tmp12849;
var state_12837__$1 = (function (){var statearr_12853 = state_12837;
(statearr_12853[(7)] = inst_12814__$1);

return statearr_12853;
})();
var statearr_12854_13449 = state_12837__$1;
(statearr_12854_13449[(2)] = null);

(statearr_12854_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12855[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12855[(1)] = (1));

return statearr_12855;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12837){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12837);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12856){var ex__10932__auto__ = e12856;
var statearr_12857_13450 = state_12837;
(statearr_12857_13450[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12837[(4)]))){
var statearr_12858_13451 = state_12837;
(statearr_12858_13451[(1)] = cljs.core.first((state_12837[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12837;
state_12837 = G__13452;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12859 = f__10977__auto__();
(statearr_12859[(6)] = c__10976__auto___13439);

return statearr_12859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12861 = arguments.length;
switch (G__12861) {
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
var c__10976__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12899){
var state_val_12900 = (state_12899[(1)]);
if((state_val_12900 === (7))){
var inst_12895 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12901_13455 = state_12899__$1;
(statearr_12901_13455[(2)] = inst_12895);

(statearr_12901_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (1))){
var inst_12862 = (new Array(n));
var inst_12863 = inst_12862;
var inst_12864 = (0);
var state_12899__$1 = (function (){var statearr_12902 = state_12899;
(statearr_12902[(7)] = inst_12864);

(statearr_12902[(8)] = inst_12863);

return statearr_12902;
})();
var statearr_12903_13456 = state_12899__$1;
(statearr_12903_13456[(2)] = null);

(statearr_12903_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (4))){
var inst_12867 = (state_12899[(9)]);
var inst_12867__$1 = (state_12899[(2)]);
var inst_12868 = (inst_12867__$1 == null);
var inst_12869 = cljs.core.not(inst_12868);
var state_12899__$1 = (function (){var statearr_12904 = state_12899;
(statearr_12904[(9)] = inst_12867__$1);

return statearr_12904;
})();
if(inst_12869){
var statearr_12905_13457 = state_12899__$1;
(statearr_12905_13457[(1)] = (5));

} else {
var statearr_12906_13458 = state_12899__$1;
(statearr_12906_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (15))){
var inst_12889 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12907_13459 = state_12899__$1;
(statearr_12907_13459[(2)] = inst_12889);

(statearr_12907_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (13))){
var state_12899__$1 = state_12899;
var statearr_12908_13460 = state_12899__$1;
(statearr_12908_13460[(2)] = null);

(statearr_12908_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (6))){
var inst_12864 = (state_12899[(7)]);
var inst_12885 = (inst_12864 > (0));
var state_12899__$1 = state_12899;
if(cljs.core.truth_(inst_12885)){
var statearr_12909_13461 = state_12899__$1;
(statearr_12909_13461[(1)] = (12));

} else {
var statearr_12910_13462 = state_12899__$1;
(statearr_12910_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (3))){
var inst_12897 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12899__$1,inst_12897);
} else {
if((state_val_12900 === (12))){
var inst_12863 = (state_12899[(8)]);
var inst_12887 = cljs.core.vec(inst_12863);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12899__$1,(15),out,inst_12887);
} else {
if((state_val_12900 === (2))){
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12899__$1,(4),ch);
} else {
if((state_val_12900 === (11))){
var inst_12879 = (state_12899[(2)]);
var inst_12880 = (new Array(n));
var inst_12863 = inst_12880;
var inst_12864 = (0);
var state_12899__$1 = (function (){var statearr_12911 = state_12899;
(statearr_12911[(10)] = inst_12879);

(statearr_12911[(7)] = inst_12864);

(statearr_12911[(8)] = inst_12863);

return statearr_12911;
})();
var statearr_12912_13463 = state_12899__$1;
(statearr_12912_13463[(2)] = null);

(statearr_12912_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (9))){
var inst_12863 = (state_12899[(8)]);
var inst_12877 = cljs.core.vec(inst_12863);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12899__$1,(11),out,inst_12877);
} else {
if((state_val_12900 === (5))){
var inst_12864 = (state_12899[(7)]);
var inst_12867 = (state_12899[(9)]);
var inst_12863 = (state_12899[(8)]);
var inst_12872 = (state_12899[(11)]);
var inst_12871 = (inst_12863[inst_12864] = inst_12867);
var inst_12872__$1 = (inst_12864 + (1));
var inst_12873 = (inst_12872__$1 < n);
var state_12899__$1 = (function (){var statearr_12913 = state_12899;
(statearr_12913[(12)] = inst_12871);

(statearr_12913[(11)] = inst_12872__$1);

return statearr_12913;
})();
if(cljs.core.truth_(inst_12873)){
var statearr_12914_13464 = state_12899__$1;
(statearr_12914_13464[(1)] = (8));

} else {
var statearr_12915_13465 = state_12899__$1;
(statearr_12915_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (14))){
var inst_12892 = (state_12899[(2)]);
var inst_12893 = cljs.core.async.close_BANG_(out);
var state_12899__$1 = (function (){var statearr_12917 = state_12899;
(statearr_12917[(13)] = inst_12892);

return statearr_12917;
})();
var statearr_12918_13466 = state_12899__$1;
(statearr_12918_13466[(2)] = inst_12893);

(statearr_12918_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (10))){
var inst_12883 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12919_13467 = state_12899__$1;
(statearr_12919_13467[(2)] = inst_12883);

(statearr_12919_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (8))){
var inst_12863 = (state_12899[(8)]);
var inst_12872 = (state_12899[(11)]);
var tmp12916 = inst_12863;
var inst_12863__$1 = tmp12916;
var inst_12864 = inst_12872;
var state_12899__$1 = (function (){var statearr_12920 = state_12899;
(statearr_12920[(7)] = inst_12864);

(statearr_12920[(8)] = inst_12863__$1);

return statearr_12920;
})();
var statearr_12921_13468 = state_12899__$1;
(statearr_12921_13468[(2)] = null);

(statearr_12921_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12922[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12922[(1)] = (1));

return statearr_12922;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12899){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12899);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12923){var ex__10932__auto__ = e12923;
var statearr_12924_13469 = state_12899;
(statearr_12924_13469[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12899[(4)]))){
var statearr_12925_13470 = state_12899;
(statearr_12925_13470[(1)] = cljs.core.first((state_12899[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12899;
state_12899 = G__13471;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12926 = f__10977__auto__();
(statearr_12926[(6)] = c__10976__auto___13454);

return statearr_12926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12928 = arguments.length;
switch (G__12928) {
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
var c__10976__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10928__auto__ = (function (state_12971){
var state_val_12972 = (state_12971[(1)]);
if((state_val_12972 === (7))){
var inst_12966 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_12973_13474 = state_12971__$1;
(statearr_12973_13474[(2)] = inst_12966);

(statearr_12973_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (1))){
var inst_12929 = [];
var inst_12930 = inst_12929;
var inst_12931 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12971__$1 = (function (){var statearr_12974 = state_12971;
(statearr_12974[(7)] = inst_12931);

(statearr_12974[(8)] = inst_12930);

return statearr_12974;
})();
var statearr_12975_13475 = state_12971__$1;
(statearr_12975_13475[(2)] = null);

(statearr_12975_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (4))){
var inst_12934 = (state_12971[(9)]);
var inst_12934__$1 = (state_12971[(2)]);
var inst_12935 = (inst_12934__$1 == null);
var inst_12936 = cljs.core.not(inst_12935);
var state_12971__$1 = (function (){var statearr_12976 = state_12971;
(statearr_12976[(9)] = inst_12934__$1);

return statearr_12976;
})();
if(inst_12936){
var statearr_12977_13476 = state_12971__$1;
(statearr_12977_13476[(1)] = (5));

} else {
var statearr_12978_13477 = state_12971__$1;
(statearr_12978_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (15))){
var inst_12960 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_12979_13478 = state_12971__$1;
(statearr_12979_13478[(2)] = inst_12960);

(statearr_12979_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (13))){
var state_12971__$1 = state_12971;
var statearr_12980_13479 = state_12971__$1;
(statearr_12980_13479[(2)] = null);

(statearr_12980_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (6))){
var inst_12930 = (state_12971[(8)]);
var inst_12955 = inst_12930.length;
var inst_12956 = (inst_12955 > (0));
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12956)){
var statearr_12981_13480 = state_12971__$1;
(statearr_12981_13480[(1)] = (12));

} else {
var statearr_12982_13481 = state_12971__$1;
(statearr_12982_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (3))){
var inst_12968 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12971__$1,inst_12968);
} else {
if((state_val_12972 === (12))){
var inst_12930 = (state_12971[(8)]);
var inst_12958 = cljs.core.vec(inst_12930);
var state_12971__$1 = state_12971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12971__$1,(15),out,inst_12958);
} else {
if((state_val_12972 === (2))){
var state_12971__$1 = state_12971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12971__$1,(4),ch);
} else {
if((state_val_12972 === (11))){
var inst_12938 = (state_12971[(10)]);
var inst_12934 = (state_12971[(9)]);
var inst_12948 = (state_12971[(2)]);
var inst_12949 = [];
var inst_12950 = inst_12949.push(inst_12934);
var inst_12930 = inst_12949;
var inst_12931 = inst_12938;
var state_12971__$1 = (function (){var statearr_12983 = state_12971;
(statearr_12983[(11)] = inst_12950);

(statearr_12983[(12)] = inst_12948);

(statearr_12983[(7)] = inst_12931);

(statearr_12983[(8)] = inst_12930);

return statearr_12983;
})();
var statearr_12984_13482 = state_12971__$1;
(statearr_12984_13482[(2)] = null);

(statearr_12984_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (9))){
var inst_12930 = (state_12971[(8)]);
var inst_12946 = cljs.core.vec(inst_12930);
var state_12971__$1 = state_12971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12971__$1,(11),out,inst_12946);
} else {
if((state_val_12972 === (5))){
var inst_12938 = (state_12971[(10)]);
var inst_12931 = (state_12971[(7)]);
var inst_12934 = (state_12971[(9)]);
var inst_12938__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12934) : f.call(null,inst_12934));
var inst_12939 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12938__$1,inst_12931);
var inst_12940 = cljs.core.keyword_identical_QMARK_(inst_12931,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12941 = ((inst_12939) || (inst_12940));
var state_12971__$1 = (function (){var statearr_12985 = state_12971;
(statearr_12985[(10)] = inst_12938__$1);

return statearr_12985;
})();
if(cljs.core.truth_(inst_12941)){
var statearr_12986_13483 = state_12971__$1;
(statearr_12986_13483[(1)] = (8));

} else {
var statearr_12987_13484 = state_12971__$1;
(statearr_12987_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (14))){
var inst_12963 = (state_12971[(2)]);
var inst_12964 = cljs.core.async.close_BANG_(out);
var state_12971__$1 = (function (){var statearr_12989 = state_12971;
(statearr_12989[(13)] = inst_12963);

return statearr_12989;
})();
var statearr_12990_13485 = state_12971__$1;
(statearr_12990_13485[(2)] = inst_12964);

(statearr_12990_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (10))){
var inst_12953 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_12991_13486 = state_12971__$1;
(statearr_12991_13486[(2)] = inst_12953);

(statearr_12991_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (8))){
var inst_12938 = (state_12971[(10)]);
var inst_12934 = (state_12971[(9)]);
var inst_12930 = (state_12971[(8)]);
var inst_12943 = inst_12930.push(inst_12934);
var tmp12988 = inst_12930;
var inst_12930__$1 = tmp12988;
var inst_12931 = inst_12938;
var state_12971__$1 = (function (){var statearr_12992 = state_12971;
(statearr_12992[(7)] = inst_12931);

(statearr_12992[(14)] = inst_12943);

(statearr_12992[(8)] = inst_12930__$1);

return statearr_12992;
})();
var statearr_12993_13487 = state_12971__$1;
(statearr_12993_13487[(2)] = null);

(statearr_12993_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12994[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12994[(1)] = (1));

return statearr_12994;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12971){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12971);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12995){var ex__10932__auto__ = e12995;
var statearr_12996_13488 = state_12971;
(statearr_12996_13488[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12971[(4)]))){
var statearr_12997_13489 = state_12971;
(statearr_12997_13489[(1)] = cljs.core.first((state_12971[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12971;
state_12971 = G__13490;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12998 = f__10977__auto__();
(statearr_12998[(6)] = c__10976__auto___13473);

return statearr_12998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
