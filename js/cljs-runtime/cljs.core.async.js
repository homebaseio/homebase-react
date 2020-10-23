goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11045 = arguments.length;
switch (G__11045) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11046 = (function (f,blockable,meta11047){
this.f = f;
this.blockable = blockable;
this.meta11047 = meta11047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11048,meta11047__$1){
var self__ = this;
var _11048__$1 = this;
return (new cljs.core.async.t_cljs$core$async11046(self__.f,self__.blockable,meta11047__$1));
}));

(cljs.core.async.t_cljs$core$async11046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11048){
var self__ = this;
var _11048__$1 = this;
return self__.meta11047;
}));

(cljs.core.async.t_cljs$core$async11046.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11046.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11047","meta11047",1863457159,null)], null);
}));

(cljs.core.async.t_cljs$core$async11046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11046");

(cljs.core.async.t_cljs$core$async11046.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11046.
 */
cljs.core.async.__GT_t_cljs$core$async11046 = (function cljs$core$async$__GT_t_cljs$core$async11046(f__$1,blockable__$1,meta11047){
return (new cljs.core.async.t_cljs$core$async11046(f__$1,blockable__$1,meta11047));
});

}

return (new cljs.core.async.t_cljs$core$async11046(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11051 = arguments.length;
switch (G__11051) {
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
var G__11057 = arguments.length;
switch (G__11057) {
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
var G__11060 = arguments.length;
switch (G__11060) {
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
var val_13030 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13030) : fn1.call(null,val_13030));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13030) : fn1.call(null,val_13030));
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
var G__11062 = arguments.length;
switch (G__11062) {
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
var n__4613__auto___13032 = n;
var x_13033 = (0);
while(true){
if((x_13033 < n__4613__auto___13032)){
(a[x_13033] = x_13033);

var G__13034 = (x_13033 + (1));
x_13033 = G__13034;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11067 = (function (flag,meta11068){
this.flag = flag;
this.meta11068 = meta11068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11069,meta11068__$1){
var self__ = this;
var _11069__$1 = this;
return (new cljs.core.async.t_cljs$core$async11067(self__.flag,meta11068__$1));
}));

(cljs.core.async.t_cljs$core$async11067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11069){
var self__ = this;
var _11069__$1 = this;
return self__.meta11068;
}));

(cljs.core.async.t_cljs$core$async11067.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11068","meta11068",1956610580,null)], null);
}));

(cljs.core.async.t_cljs$core$async11067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11067");

(cljs.core.async.t_cljs$core$async11067.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11067.
 */
cljs.core.async.__GT_t_cljs$core$async11067 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11067(flag__$1,meta11068){
return (new cljs.core.async.t_cljs$core$async11067(flag__$1,meta11068));
});

}

return (new cljs.core.async.t_cljs$core$async11067(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11070 = (function (flag,cb,meta11071){
this.flag = flag;
this.cb = cb;
this.meta11071 = meta11071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11072,meta11071__$1){
var self__ = this;
var _11072__$1 = this;
return (new cljs.core.async.t_cljs$core$async11070(self__.flag,self__.cb,meta11071__$1));
}));

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11072){
var self__ = this;
var _11072__$1 = this;
return self__.meta11071;
}));

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11071","meta11071",-1547856958,null)], null);
}));

(cljs.core.async.t_cljs$core$async11070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11070");

(cljs.core.async.t_cljs$core$async11070.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11070.
 */
cljs.core.async.__GT_t_cljs$core$async11070 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11070(flag__$1,cb__$1,meta11071){
return (new cljs.core.async.t_cljs$core$async11070(flag__$1,cb__$1,meta11071));
});

}

return (new cljs.core.async.t_cljs$core$async11070(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11074_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11076) : fret.call(null,G__11076));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11075_SHARP_){
var G__11077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11075_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11077) : fret.call(null,G__11077));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11080){
var map__11084 = p__11080;
var map__11084__$1 = (((((!((map__11084 == null))))?(((((map__11084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11084):map__11084);
var opts = map__11084__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11078){
var G__11079 = cljs.core.first(seq11078);
var seq11078__$1 = cljs.core.next(seq11078);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11079,seq11078__$1);
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
var G__11087 = arguments.length;
switch (G__11087) {
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
var c__10978__auto___13040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_11125){
var state_val_11140 = (state_11125[(1)]);
if((state_val_11140 === (7))){
var inst_11119 = (state_11125[(2)]);
var state_11125__$1 = state_11125;
var statearr_11154_13041 = state_11125__$1;
(statearr_11154_13041[(2)] = inst_11119);

(statearr_11154_13041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (1))){
var state_11125__$1 = state_11125;
var statearr_11155_13042 = state_11125__$1;
(statearr_11155_13042[(2)] = null);

(statearr_11155_13042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (4))){
var inst_11094 = (state_11125[(7)]);
var inst_11094__$1 = (state_11125[(2)]);
var inst_11099 = (inst_11094__$1 == null);
var state_11125__$1 = (function (){var statearr_11156 = state_11125;
(statearr_11156[(7)] = inst_11094__$1);

return statearr_11156;
})();
if(cljs.core.truth_(inst_11099)){
var statearr_11157_13043 = state_11125__$1;
(statearr_11157_13043[(1)] = (5));

} else {
var statearr_11158_13044 = state_11125__$1;
(statearr_11158_13044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (13))){
var state_11125__$1 = state_11125;
var statearr_11159_13045 = state_11125__$1;
(statearr_11159_13045[(2)] = null);

(statearr_11159_13045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (6))){
var inst_11094 = (state_11125[(7)]);
var state_11125__$1 = state_11125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11125__$1,(11),to,inst_11094);
} else {
if((state_val_11140 === (3))){
var inst_11121 = (state_11125[(2)]);
var state_11125__$1 = state_11125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11125__$1,inst_11121);
} else {
if((state_val_11140 === (12))){
var state_11125__$1 = state_11125;
var statearr_11160_13046 = state_11125__$1;
(statearr_11160_13046[(2)] = null);

(statearr_11160_13046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (2))){
var state_11125__$1 = state_11125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11125__$1,(4),from);
} else {
if((state_val_11140 === (11))){
var inst_11112 = (state_11125[(2)]);
var state_11125__$1 = state_11125;
if(cljs.core.truth_(inst_11112)){
var statearr_11161_13047 = state_11125__$1;
(statearr_11161_13047[(1)] = (12));

} else {
var statearr_11162_13048 = state_11125__$1;
(statearr_11162_13048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (9))){
var state_11125__$1 = state_11125;
var statearr_11163_13049 = state_11125__$1;
(statearr_11163_13049[(2)] = null);

(statearr_11163_13049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (5))){
var state_11125__$1 = state_11125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11164_13050 = state_11125__$1;
(statearr_11164_13050[(1)] = (8));

} else {
var statearr_11165_13051 = state_11125__$1;
(statearr_11165_13051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (14))){
var inst_11117 = (state_11125[(2)]);
var state_11125__$1 = state_11125;
var statearr_11166_13052 = state_11125__$1;
(statearr_11166_13052[(2)] = inst_11117);

(statearr_11166_13052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (10))){
var inst_11109 = (state_11125[(2)]);
var state_11125__$1 = state_11125;
var statearr_11167_13053 = state_11125__$1;
(statearr_11167_13053[(2)] = inst_11109);

(statearr_11167_13053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (8))){
var inst_11106 = cljs.core.async.close_BANG_(to);
var state_11125__$1 = state_11125;
var statearr_11168_13054 = state_11125__$1;
(statearr_11168_13054[(2)] = inst_11106);

(statearr_11168_13054[(1)] = (10));


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
var statearr_11169 = [null,null,null,null,null,null,null,null];
(statearr_11169[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_11169[(1)] = (1));

return statearr_11169;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_11125){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11125);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11170){var ex__10932__auto__ = e11170;
var statearr_11171_13055 = state_11125;
(statearr_11171_13055[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11125[(4)]))){
var statearr_11172_13056 = state_11125;
(statearr_11172_13056[(1)] = cljs.core.first((state_11125[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13057 = state_11125;
state_11125 = G__13057;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_11125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_11125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11173 = f__10979__auto__();
(statearr_11173[(6)] = c__10978__auto___13040);

return statearr_11173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var process = (function (p__11178){
var vec__11179 = p__11178;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11179,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11179,(1),null);
var job = vec__11179;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10978__auto___13058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_11186){
var state_val_11187 = (state_11186[(1)]);
if((state_val_11187 === (1))){
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11186__$1,(2),res,v);
} else {
if((state_val_11187 === (2))){
var inst_11183 = (state_11186[(2)]);
var inst_11184 = cljs.core.async.close_BANG_(res);
var state_11186__$1 = (function (){var statearr_11188 = state_11186;
(statearr_11188[(7)] = inst_11183);

return statearr_11188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11186__$1,inst_11184);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11189 = [null,null,null,null,null,null,null,null];
(statearr_11189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11189[(1)] = (1));

return statearr_11189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11186){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11186);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11190){var ex__10932__auto__ = e11190;
var statearr_11191_13059 = state_11186;
(statearr_11191_13059[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11186[(4)]))){
var statearr_11192_13060 = state_11186;
(statearr_11192_13060[(1)] = cljs.core.first((state_11186[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13061 = state_11186;
state_11186 = G__13061;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11195 = f__10979__auto__();
(statearr_11195[(6)] = c__10978__auto___13058);

return statearr_11195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11196){
var vec__11197 = p__11196;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11197,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11197,(1),null);
var job = vec__11197;
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
var G__11200_13064 = type;
var G__11200_13065__$1 = (((G__11200_13064 instanceof cljs.core.Keyword))?G__11200_13064.fqn:null);
switch (G__11200_13065__$1) {
case "compute":
var c__10978__auto___13067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__10978__auto___13067,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = ((function (__13063,c__10978__auto___13067,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11221){
var state_val_11222 = (state_11221[(1)]);
if((state_val_11222 === (1))){
var state_11221__$1 = state_11221;
var statearr_11223_13068 = state_11221__$1;
(statearr_11223_13068[(2)] = null);

(statearr_11223_13068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11222 === (2))){
var state_11221__$1 = state_11221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11221__$1,(4),jobs);
} else {
if((state_val_11222 === (3))){
var inst_11219 = (state_11221[(2)]);
var state_11221__$1 = state_11221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11221__$1,inst_11219);
} else {
if((state_val_11222 === (4))){
var inst_11211 = (state_11221[(2)]);
var inst_11212 = process(inst_11211);
var state_11221__$1 = state_11221;
if(cljs.core.truth_(inst_11212)){
var statearr_11224_13069 = state_11221__$1;
(statearr_11224_13069[(1)] = (5));

} else {
var statearr_11225_13070 = state_11221__$1;
(statearr_11225_13070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11222 === (5))){
var state_11221__$1 = state_11221;
var statearr_11226_13071 = state_11221__$1;
(statearr_11226_13071[(2)] = null);

(statearr_11226_13071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11222 === (6))){
var state_11221__$1 = state_11221;
var statearr_11227_13072 = state_11221__$1;
(statearr_11227_13072[(2)] = null);

(statearr_11227_13072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11222 === (7))){
var inst_11217 = (state_11221[(2)]);
var state_11221__$1 = state_11221;
var statearr_11228_13073 = state_11221__$1;
(statearr_11228_13073[(2)] = inst_11217);

(statearr_11228_13073[(1)] = (3));


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
});})(__13063,c__10978__auto___13067,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10928__auto__,c__10978__auto___13067,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11231 = [null,null,null,null,null,null,null];
(statearr_11231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11231[(1)] = (1));

return statearr_11231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11221){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11221);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11234){var ex__10932__auto__ = e11234;
var statearr_11235_13074 = state_11221;
(statearr_11235_13074[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11221[(4)]))){
var statearr_11238_13075 = state_11221;
(statearr_11238_13075[(1)] = cljs.core.first((state_11221[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13076 = state_11221;
state_11221 = G__13076;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
;})(__13063,switch__10928__auto__,c__10978__auto___13067,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__10980__auto__ = (function (){var statearr_11239 = f__10979__auto__();
(statearr_11239[(6)] = c__10978__auto___13067);

return statearr_11239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
});})(__13063,c__10978__auto___13067,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
case "async":
var c__10978__auto___13077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__10978__auto___13077,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = ((function (__13063,c__10978__auto___13077,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11252){
var state_val_11253 = (state_11252[(1)]);
if((state_val_11253 === (1))){
var state_11252__$1 = state_11252;
var statearr_11254_13078 = state_11252__$1;
(statearr_11254_13078[(2)] = null);

(statearr_11254_13078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (2))){
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11252__$1,(4),jobs);
} else {
if((state_val_11253 === (3))){
var inst_11250 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11252__$1,inst_11250);
} else {
if((state_val_11253 === (4))){
var inst_11242 = (state_11252[(2)]);
var inst_11243 = async(inst_11242);
var state_11252__$1 = state_11252;
if(cljs.core.truth_(inst_11243)){
var statearr_11255_13079 = state_11252__$1;
(statearr_11255_13079[(1)] = (5));

} else {
var statearr_11256_13080 = state_11252__$1;
(statearr_11256_13080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (5))){
var state_11252__$1 = state_11252;
var statearr_11257_13081 = state_11252__$1;
(statearr_11257_13081[(2)] = null);

(statearr_11257_13081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (6))){
var state_11252__$1 = state_11252;
var statearr_11258_13082 = state_11252__$1;
(statearr_11258_13082[(2)] = null);

(statearr_11258_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (7))){
var inst_11248 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11259_13083 = state_11252__$1;
(statearr_11259_13083[(2)] = inst_11248);

(statearr_11259_13083[(1)] = (3));


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
});})(__13063,c__10978__auto___13077,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10928__auto__,c__10978__auto___13077,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11260 = [null,null,null,null,null,null,null];
(statearr_11260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11260[(1)] = (1));

return statearr_11260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11252){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11252);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11261){var ex__10932__auto__ = e11261;
var statearr_11262_13084 = state_11252;
(statearr_11262_13084[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11252[(4)]))){
var statearr_11263_13085 = state_11252;
(statearr_11263_13085[(1)] = cljs.core.first((state_11252[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13086 = state_11252;
state_11252 = G__13086;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
;})(__13063,switch__10928__auto__,c__10978__auto___13077,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__10980__auto__ = (function (){var statearr_11264 = f__10979__auto__();
(statearr_11264[(6)] = c__10978__auto___13077);

return statearr_11264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
});})(__13063,c__10978__auto___13077,G__11200_13064,G__11200_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11200_13065__$1)].join('')));

}

var G__13087 = (__13063 + (1));
__13063 = G__13087;
continue;
} else {
}
break;
}

var c__10978__auto___13088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_11286){
var state_val_11287 = (state_11286[(1)]);
if((state_val_11287 === (7))){
var inst_11282 = (state_11286[(2)]);
var state_11286__$1 = state_11286;
var statearr_11288_13089 = state_11286__$1;
(statearr_11288_13089[(2)] = inst_11282);

(statearr_11288_13089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (1))){
var state_11286__$1 = state_11286;
var statearr_11289_13090 = state_11286__$1;
(statearr_11289_13090[(2)] = null);

(statearr_11289_13090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (4))){
var inst_11267 = (state_11286[(7)]);
var inst_11267__$1 = (state_11286[(2)]);
var inst_11268 = (inst_11267__$1 == null);
var state_11286__$1 = (function (){var statearr_11290 = state_11286;
(statearr_11290[(7)] = inst_11267__$1);

return statearr_11290;
})();
if(cljs.core.truth_(inst_11268)){
var statearr_11291_13091 = state_11286__$1;
(statearr_11291_13091[(1)] = (5));

} else {
var statearr_11292_13092 = state_11286__$1;
(statearr_11292_13092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (6))){
var inst_11267 = (state_11286[(7)]);
var inst_11272 = (state_11286[(8)]);
var inst_11272__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11273 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11274 = [inst_11267,inst_11272__$1];
var inst_11275 = (new cljs.core.PersistentVector(null,2,(5),inst_11273,inst_11274,null));
var state_11286__$1 = (function (){var statearr_11293 = state_11286;
(statearr_11293[(8)] = inst_11272__$1);

return statearr_11293;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11286__$1,(8),jobs,inst_11275);
} else {
if((state_val_11287 === (3))){
var inst_11284 = (state_11286[(2)]);
var state_11286__$1 = state_11286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11286__$1,inst_11284);
} else {
if((state_val_11287 === (2))){
var state_11286__$1 = state_11286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11286__$1,(4),from);
} else {
if((state_val_11287 === (9))){
var inst_11279 = (state_11286[(2)]);
var state_11286__$1 = (function (){var statearr_11294 = state_11286;
(statearr_11294[(9)] = inst_11279);

return statearr_11294;
})();
var statearr_11295_13093 = state_11286__$1;
(statearr_11295_13093[(2)] = null);

(statearr_11295_13093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (5))){
var inst_11270 = cljs.core.async.close_BANG_(jobs);
var state_11286__$1 = state_11286;
var statearr_11296_13094 = state_11286__$1;
(statearr_11296_13094[(2)] = inst_11270);

(statearr_11296_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (8))){
var inst_11272 = (state_11286[(8)]);
var inst_11277 = (state_11286[(2)]);
var state_11286__$1 = (function (){var statearr_11297 = state_11286;
(statearr_11297[(10)] = inst_11277);

return statearr_11297;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11286__$1,(9),results,inst_11272);
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
var statearr_11298 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11298[(1)] = (1));

return statearr_11298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11286){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11286);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11299){var ex__10932__auto__ = e11299;
var statearr_11300_13095 = state_11286;
(statearr_11300_13095[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11286[(4)]))){
var statearr_11301_13096 = state_11286;
(statearr_11301_13096[(1)] = cljs.core.first((state_11286[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11286;
state_11286 = G__13097;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11302 = f__10979__auto__();
(statearr_11302[(6)] = c__10978__auto___13088);

return statearr_11302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_11340){
var state_val_11341 = (state_11340[(1)]);
if((state_val_11341 === (7))){
var inst_11336 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
var statearr_11342_13098 = state_11340__$1;
(statearr_11342_13098[(2)] = inst_11336);

(statearr_11342_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (20))){
var state_11340__$1 = state_11340;
var statearr_11343_13099 = state_11340__$1;
(statearr_11343_13099[(2)] = null);

(statearr_11343_13099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (1))){
var state_11340__$1 = state_11340;
var statearr_11344_13100 = state_11340__$1;
(statearr_11344_13100[(2)] = null);

(statearr_11344_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (4))){
var inst_11305 = (state_11340[(7)]);
var inst_11305__$1 = (state_11340[(2)]);
var inst_11306 = (inst_11305__$1 == null);
var state_11340__$1 = (function (){var statearr_11345 = state_11340;
(statearr_11345[(7)] = inst_11305__$1);

return statearr_11345;
})();
if(cljs.core.truth_(inst_11306)){
var statearr_11346_13101 = state_11340__$1;
(statearr_11346_13101[(1)] = (5));

} else {
var statearr_11347_13102 = state_11340__$1;
(statearr_11347_13102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (15))){
var inst_11318 = (state_11340[(8)]);
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11340__$1,(18),to,inst_11318);
} else {
if((state_val_11341 === (21))){
var inst_11331 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
var statearr_11348_13103 = state_11340__$1;
(statearr_11348_13103[(2)] = inst_11331);

(statearr_11348_13103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (13))){
var inst_11333 = (state_11340[(2)]);
var state_11340__$1 = (function (){var statearr_11349 = state_11340;
(statearr_11349[(9)] = inst_11333);

return statearr_11349;
})();
var statearr_11350_13104 = state_11340__$1;
(statearr_11350_13104[(2)] = null);

(statearr_11350_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (6))){
var inst_11305 = (state_11340[(7)]);
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11340__$1,(11),inst_11305);
} else {
if((state_val_11341 === (17))){
var inst_11326 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
if(cljs.core.truth_(inst_11326)){
var statearr_11354_13105 = state_11340__$1;
(statearr_11354_13105[(1)] = (19));

} else {
var statearr_11358_13106 = state_11340__$1;
(statearr_11358_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (3))){
var inst_11338 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11340__$1,inst_11338);
} else {
if((state_val_11341 === (12))){
var inst_11315 = (state_11340[(10)]);
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11340__$1,(14),inst_11315);
} else {
if((state_val_11341 === (2))){
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11340__$1,(4),results);
} else {
if((state_val_11341 === (19))){
var state_11340__$1 = state_11340;
var statearr_11359_13107 = state_11340__$1;
(statearr_11359_13107[(2)] = null);

(statearr_11359_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (11))){
var inst_11315 = (state_11340[(2)]);
var state_11340__$1 = (function (){var statearr_11360 = state_11340;
(statearr_11360[(10)] = inst_11315);

return statearr_11360;
})();
var statearr_11361_13108 = state_11340__$1;
(statearr_11361_13108[(2)] = null);

(statearr_11361_13108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (9))){
var state_11340__$1 = state_11340;
var statearr_11362_13109 = state_11340__$1;
(statearr_11362_13109[(2)] = null);

(statearr_11362_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (5))){
var state_11340__$1 = state_11340;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11363_13110 = state_11340__$1;
(statearr_11363_13110[(1)] = (8));

} else {
var statearr_11364_13111 = state_11340__$1;
(statearr_11364_13111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (14))){
var inst_11318 = (state_11340[(8)]);
var inst_11318__$1 = (state_11340[(2)]);
var inst_11319 = (inst_11318__$1 == null);
var inst_11320 = cljs.core.not(inst_11319);
var state_11340__$1 = (function (){var statearr_11365 = state_11340;
(statearr_11365[(8)] = inst_11318__$1);

return statearr_11365;
})();
if(inst_11320){
var statearr_11366_13112 = state_11340__$1;
(statearr_11366_13112[(1)] = (15));

} else {
var statearr_11367_13113 = state_11340__$1;
(statearr_11367_13113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (16))){
var state_11340__$1 = state_11340;
var statearr_11368_13114 = state_11340__$1;
(statearr_11368_13114[(2)] = false);

(statearr_11368_13114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (10))){
var inst_11312 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
var statearr_11369_13115 = state_11340__$1;
(statearr_11369_13115[(2)] = inst_11312);

(statearr_11369_13115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (18))){
var inst_11323 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
var statearr_11370_13116 = state_11340__$1;
(statearr_11370_13116[(2)] = inst_11323);

(statearr_11370_13116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (8))){
var inst_11309 = cljs.core.async.close_BANG_(to);
var state_11340__$1 = state_11340;
var statearr_11371_13117 = state_11340__$1;
(statearr_11371_13117[(2)] = inst_11309);

(statearr_11371_13117[(1)] = (10));


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
var statearr_11372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11372[(1)] = (1));

return statearr_11372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11340){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11340);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11373){var ex__10932__auto__ = e11373;
var statearr_11374_13118 = state_11340;
(statearr_11374_13118[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11340[(4)]))){
var statearr_11375_13119 = state_11340;
(statearr_11375_13119[(1)] = cljs.core.first((state_11340[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11340;
state_11340 = G__13120;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11376 = f__10979__auto__();
(statearr_11376[(6)] = c__10978__auto__);

return statearr_11376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
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
var G__11378 = arguments.length;
switch (G__11378) {
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
var G__11380 = arguments.length;
switch (G__11380) {
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
var G__11386 = arguments.length;
switch (G__11386) {
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
var c__10978__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_11412){
var state_val_11413 = (state_11412[(1)]);
if((state_val_11413 === (7))){
var inst_11408 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
var statearr_11415_13125 = state_11412__$1;
(statearr_11415_13125[(2)] = inst_11408);

(statearr_11415_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (1))){
var state_11412__$1 = state_11412;
var statearr_11416_13126 = state_11412__$1;
(statearr_11416_13126[(2)] = null);

(statearr_11416_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (4))){
var inst_11389 = (state_11412[(7)]);
var inst_11389__$1 = (state_11412[(2)]);
var inst_11390 = (inst_11389__$1 == null);
var state_11412__$1 = (function (){var statearr_11417 = state_11412;
(statearr_11417[(7)] = inst_11389__$1);

return statearr_11417;
})();
if(cljs.core.truth_(inst_11390)){
var statearr_11418_13127 = state_11412__$1;
(statearr_11418_13127[(1)] = (5));

} else {
var statearr_11419_13128 = state_11412__$1;
(statearr_11419_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (13))){
var state_11412__$1 = state_11412;
var statearr_11420_13129 = state_11412__$1;
(statearr_11420_13129[(2)] = null);

(statearr_11420_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (6))){
var inst_11389 = (state_11412[(7)]);
var inst_11395 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11389) : p.call(null,inst_11389));
var state_11412__$1 = state_11412;
if(cljs.core.truth_(inst_11395)){
var statearr_11421_13130 = state_11412__$1;
(statearr_11421_13130[(1)] = (9));

} else {
var statearr_11422_13131 = state_11412__$1;
(statearr_11422_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (3))){
var inst_11410 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11412__$1,inst_11410);
} else {
if((state_val_11413 === (12))){
var state_11412__$1 = state_11412;
var statearr_11423_13132 = state_11412__$1;
(statearr_11423_13132[(2)] = null);

(statearr_11423_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (2))){
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11412__$1,(4),ch);
} else {
if((state_val_11413 === (11))){
var inst_11389 = (state_11412[(7)]);
var inst_11399 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11412__$1,(8),inst_11399,inst_11389);
} else {
if((state_val_11413 === (9))){
var state_11412__$1 = state_11412;
var statearr_11424_13133 = state_11412__$1;
(statearr_11424_13133[(2)] = tc);

(statearr_11424_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (5))){
var inst_11392 = cljs.core.async.close_BANG_(tc);
var inst_11393 = cljs.core.async.close_BANG_(fc);
var state_11412__$1 = (function (){var statearr_11426 = state_11412;
(statearr_11426[(8)] = inst_11392);

return statearr_11426;
})();
var statearr_11427_13134 = state_11412__$1;
(statearr_11427_13134[(2)] = inst_11393);

(statearr_11427_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (14))){
var inst_11406 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
var statearr_11428_13135 = state_11412__$1;
(statearr_11428_13135[(2)] = inst_11406);

(statearr_11428_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (10))){
var state_11412__$1 = state_11412;
var statearr_11429_13136 = state_11412__$1;
(statearr_11429_13136[(2)] = fc);

(statearr_11429_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (8))){
var inst_11401 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
if(cljs.core.truth_(inst_11401)){
var statearr_11430_13137 = state_11412__$1;
(statearr_11430_13137[(1)] = (12));

} else {
var statearr_11431_13138 = state_11412__$1;
(statearr_11431_13138[(1)] = (13));

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
var statearr_11432 = [null,null,null,null,null,null,null,null,null];
(statearr_11432[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_11432[(1)] = (1));

return statearr_11432;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_11412){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11412);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11435){var ex__10932__auto__ = e11435;
var statearr_11436_13139 = state_11412;
(statearr_11436_13139[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11412[(4)]))){
var statearr_11437_13140 = state_11412;
(statearr_11437_13140[(1)] = cljs.core.first((state_11412[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11412;
state_11412 = G__13141;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_11412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_11412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11439 = f__10979__auto__();
(statearr_11439[(6)] = c__10978__auto___13124);

return statearr_11439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_11463){
var state_val_11464 = (state_11463[(1)]);
if((state_val_11464 === (7))){
var inst_11459 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11467_13142 = state_11463__$1;
(statearr_11467_13142[(2)] = inst_11459);

(statearr_11467_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (1))){
var inst_11442 = init;
var inst_11443 = inst_11442;
var state_11463__$1 = (function (){var statearr_11468 = state_11463;
(statearr_11468[(7)] = inst_11443);

return statearr_11468;
})();
var statearr_11469_13143 = state_11463__$1;
(statearr_11469_13143[(2)] = null);

(statearr_11469_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (4))){
var inst_11446 = (state_11463[(8)]);
var inst_11446__$1 = (state_11463[(2)]);
var inst_11447 = (inst_11446__$1 == null);
var state_11463__$1 = (function (){var statearr_11470 = state_11463;
(statearr_11470[(8)] = inst_11446__$1);

return statearr_11470;
})();
if(cljs.core.truth_(inst_11447)){
var statearr_11471_13144 = state_11463__$1;
(statearr_11471_13144[(1)] = (5));

} else {
var statearr_11472_13145 = state_11463__$1;
(statearr_11472_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (6))){
var inst_11450 = (state_11463[(9)]);
var inst_11443 = (state_11463[(7)]);
var inst_11446 = (state_11463[(8)]);
var inst_11450__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11443,inst_11446) : f.call(null,inst_11443,inst_11446));
var inst_11451 = cljs.core.reduced_QMARK_(inst_11450__$1);
var state_11463__$1 = (function (){var statearr_11476 = state_11463;
(statearr_11476[(9)] = inst_11450__$1);

return statearr_11476;
})();
if(inst_11451){
var statearr_11477_13146 = state_11463__$1;
(statearr_11477_13146[(1)] = (8));

} else {
var statearr_11478_13147 = state_11463__$1;
(statearr_11478_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (3))){
var inst_11461 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11463__$1,inst_11461);
} else {
if((state_val_11464 === (2))){
var state_11463__$1 = state_11463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11463__$1,(4),ch);
} else {
if((state_val_11464 === (9))){
var inst_11450 = (state_11463[(9)]);
var inst_11443 = inst_11450;
var state_11463__$1 = (function (){var statearr_11479 = state_11463;
(statearr_11479[(7)] = inst_11443);

return statearr_11479;
})();
var statearr_11480_13148 = state_11463__$1;
(statearr_11480_13148[(2)] = null);

(statearr_11480_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (5))){
var inst_11443 = (state_11463[(7)]);
var state_11463__$1 = state_11463;
var statearr_11481_13149 = state_11463__$1;
(statearr_11481_13149[(2)] = inst_11443);

(statearr_11481_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (10))){
var inst_11457 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11482_13150 = state_11463__$1;
(statearr_11482_13150[(2)] = inst_11457);

(statearr_11482_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (8))){
var inst_11450 = (state_11463[(9)]);
var inst_11453 = cljs.core.deref(inst_11450);
var state_11463__$1 = state_11463;
var statearr_11483_13151 = state_11463__$1;
(statearr_11483_13151[(2)] = inst_11453);

(statearr_11483_13151[(1)] = (10));


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
var statearr_11484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11484[(0)] = cljs$core$async$reduce_$_state_machine__10929__auto__);

(statearr_11484[(1)] = (1));

return statearr_11484;
});
var cljs$core$async$reduce_$_state_machine__10929__auto____1 = (function (state_11463){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11463);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11489){var ex__10932__auto__ = e11489;
var statearr_11490_13152 = state_11463;
(statearr_11490_13152[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11463[(4)]))){
var statearr_11491_13153 = state_11463;
(statearr_11491_13153[(1)] = cljs.core.first((state_11463[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11463;
state_11463 = G__13154;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10929__auto__ = function(state_11463){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10929__auto____1.call(this,state_11463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10929__auto____0;
cljs$core$async$reduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10929__auto____1;
return cljs$core$async$reduce_$_state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11500 = f__10979__auto__();
(statearr_11500[(6)] = c__10978__auto__);

return statearr_11500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_11509){
var state_val_11510 = (state_11509[(1)]);
if((state_val_11510 === (1))){
var inst_11504 = cljs.core.async.reduce(f__$1,init,ch);
var state_11509__$1 = state_11509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11509__$1,(2),inst_11504);
} else {
if((state_val_11510 === (2))){
var inst_11506 = (state_11509[(2)]);
var inst_11507 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11506) : f__$1.call(null,inst_11506));
var state_11509__$1 = state_11509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11509__$1,inst_11507);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10929__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10929__auto____0 = (function (){
var statearr_11511 = [null,null,null,null,null,null,null];
(statearr_11511[(0)] = cljs$core$async$transduce_$_state_machine__10929__auto__);

(statearr_11511[(1)] = (1));

return statearr_11511;
});
var cljs$core$async$transduce_$_state_machine__10929__auto____1 = (function (state_11509){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11509);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11512){var ex__10932__auto__ = e11512;
var statearr_11513_13155 = state_11509;
(statearr_11513_13155[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11509[(4)]))){
var statearr_11516_13156 = state_11509;
(statearr_11516_13156[(1)] = cljs.core.first((state_11509[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11509;
state_11509 = G__13157;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10929__auto__ = function(state_11509){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10929__auto____1.call(this,state_11509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10929__auto____0;
cljs$core$async$transduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10929__auto____1;
return cljs$core$async$transduce_$_state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11519 = f__10979__auto__();
(statearr_11519[(6)] = c__10978__auto__);

return statearr_11519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
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
var G__11523 = arguments.length;
switch (G__11523) {
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
var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_11551){
var state_val_11552 = (state_11551[(1)]);
if((state_val_11552 === (7))){
var inst_11533 = (state_11551[(2)]);
var state_11551__$1 = state_11551;
var statearr_11555_13159 = state_11551__$1;
(statearr_11555_13159[(2)] = inst_11533);

(statearr_11555_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (1))){
var inst_11527 = cljs.core.seq(coll);
var inst_11528 = inst_11527;
var state_11551__$1 = (function (){var statearr_11556 = state_11551;
(statearr_11556[(7)] = inst_11528);

return statearr_11556;
})();
var statearr_11557_13160 = state_11551__$1;
(statearr_11557_13160[(2)] = null);

(statearr_11557_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (4))){
var inst_11528 = (state_11551[(7)]);
var inst_11531 = cljs.core.first(inst_11528);
var state_11551__$1 = state_11551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11551__$1,(7),ch,inst_11531);
} else {
if((state_val_11552 === (13))){
var inst_11545 = (state_11551[(2)]);
var state_11551__$1 = state_11551;
var statearr_11558_13161 = state_11551__$1;
(statearr_11558_13161[(2)] = inst_11545);

(statearr_11558_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (6))){
var inst_11536 = (state_11551[(2)]);
var state_11551__$1 = state_11551;
if(cljs.core.truth_(inst_11536)){
var statearr_11560_13162 = state_11551__$1;
(statearr_11560_13162[(1)] = (8));

} else {
var statearr_11561_13163 = state_11551__$1;
(statearr_11561_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (3))){
var inst_11549 = (state_11551[(2)]);
var state_11551__$1 = state_11551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11551__$1,inst_11549);
} else {
if((state_val_11552 === (12))){
var state_11551__$1 = state_11551;
var statearr_11562_13164 = state_11551__$1;
(statearr_11562_13164[(2)] = null);

(statearr_11562_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (2))){
var inst_11528 = (state_11551[(7)]);
var state_11551__$1 = state_11551;
if(cljs.core.truth_(inst_11528)){
var statearr_11564_13165 = state_11551__$1;
(statearr_11564_13165[(1)] = (4));

} else {
var statearr_11565_13166 = state_11551__$1;
(statearr_11565_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (11))){
var inst_11542 = cljs.core.async.close_BANG_(ch);
var state_11551__$1 = state_11551;
var statearr_11566_13167 = state_11551__$1;
(statearr_11566_13167[(2)] = inst_11542);

(statearr_11566_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (9))){
var state_11551__$1 = state_11551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11567_13168 = state_11551__$1;
(statearr_11567_13168[(1)] = (11));

} else {
var statearr_11568_13169 = state_11551__$1;
(statearr_11568_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (5))){
var inst_11528 = (state_11551[(7)]);
var state_11551__$1 = state_11551;
var statearr_11569_13170 = state_11551__$1;
(statearr_11569_13170[(2)] = inst_11528);

(statearr_11569_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (10))){
var inst_11547 = (state_11551[(2)]);
var state_11551__$1 = state_11551;
var statearr_11570_13171 = state_11551__$1;
(statearr_11570_13171[(2)] = inst_11547);

(statearr_11570_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11552 === (8))){
var inst_11528 = (state_11551[(7)]);
var inst_11538 = cljs.core.next(inst_11528);
var inst_11528__$1 = inst_11538;
var state_11551__$1 = (function (){var statearr_11571 = state_11551;
(statearr_11571[(7)] = inst_11528__$1);

return statearr_11571;
})();
var statearr_11572_13172 = state_11551__$1;
(statearr_11572_13172[(2)] = null);

(statearr_11572_13172[(1)] = (2));


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
var statearr_11573 = [null,null,null,null,null,null,null,null];
(statearr_11573[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_11573[(1)] = (1));

return statearr_11573;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_11551){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11551);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11574){var ex__10932__auto__ = e11574;
var statearr_11575_13173 = state_11551;
(statearr_11575_13173[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11551[(4)]))){
var statearr_11576_13174 = state_11551;
(statearr_11576_13174[(1)] = cljs.core.first((state_11551[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11551;
state_11551 = G__13175;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_11551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_11551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11577 = f__10979__auto__();
(statearr_11577[(6)] = c__10978__auto__);

return statearr_11577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
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
var G__11582 = arguments.length;
switch (G__11582) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11588 = (function (ch,cs,meta11589){
this.ch = ch;
this.cs = cs;
this.meta11589 = meta11589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11590,meta11589__$1){
var self__ = this;
var _11590__$1 = this;
return (new cljs.core.async.t_cljs$core$async11588(self__.ch,self__.cs,meta11589__$1));
}));

(cljs.core.async.t_cljs$core$async11588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11590){
var self__ = this;
var _11590__$1 = this;
return self__.meta11589;
}));

(cljs.core.async.t_cljs$core$async11588.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11588.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11588.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11588.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11588.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11589","meta11589",517935387,null)], null);
}));

(cljs.core.async.t_cljs$core$async11588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11588");

(cljs.core.async.t_cljs$core$async11588.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11588.
 */
cljs.core.async.__GT_t_cljs$core$async11588 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11588(ch__$1,cs__$1,meta11589){
return (new cljs.core.async.t_cljs$core$async11588(ch__$1,cs__$1,meta11589));
});

}

return (new cljs.core.async.t_cljs$core$async11588(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10978__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_11735){
var state_val_11736 = (state_11735[(1)]);
if((state_val_11736 === (7))){
var inst_11731 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11737_13182 = state_11735__$1;
(statearr_11737_13182[(2)] = inst_11731);

(statearr_11737_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (20))){
var inst_11636 = (state_11735[(7)]);
var inst_11648 = cljs.core.first(inst_11636);
var inst_11649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11648,(0),null);
var inst_11650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11648,(1),null);
var state_11735__$1 = (function (){var statearr_11738 = state_11735;
(statearr_11738[(8)] = inst_11649);

return statearr_11738;
})();
if(cljs.core.truth_(inst_11650)){
var statearr_11739_13183 = state_11735__$1;
(statearr_11739_13183[(1)] = (22));

} else {
var statearr_11740_13184 = state_11735__$1;
(statearr_11740_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (27))){
var inst_11680 = (state_11735[(9)]);
var inst_11597 = (state_11735[(10)]);
var inst_11685 = (state_11735[(11)]);
var inst_11678 = (state_11735[(12)]);
var inst_11685__$1 = cljs.core._nth(inst_11678,inst_11680);
var inst_11686 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11685__$1,inst_11597,done);
var state_11735__$1 = (function (){var statearr_11743 = state_11735;
(statearr_11743[(11)] = inst_11685__$1);

return statearr_11743;
})();
if(cljs.core.truth_(inst_11686)){
var statearr_11744_13185 = state_11735__$1;
(statearr_11744_13185[(1)] = (30));

} else {
var statearr_11745_13186 = state_11735__$1;
(statearr_11745_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (1))){
var state_11735__$1 = state_11735;
var statearr_11746_13187 = state_11735__$1;
(statearr_11746_13187[(2)] = null);

(statearr_11746_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (24))){
var inst_11636 = (state_11735[(7)]);
var inst_11655 = (state_11735[(2)]);
var inst_11656 = cljs.core.next(inst_11636);
var inst_11610 = inst_11656;
var inst_11611 = null;
var inst_11612 = (0);
var inst_11613 = (0);
var state_11735__$1 = (function (){var statearr_11747 = state_11735;
(statearr_11747[(13)] = inst_11611);

(statearr_11747[(14)] = inst_11655);

(statearr_11747[(15)] = inst_11613);

(statearr_11747[(16)] = inst_11610);

(statearr_11747[(17)] = inst_11612);

return statearr_11747;
})();
var statearr_11748_13188 = state_11735__$1;
(statearr_11748_13188[(2)] = null);

(statearr_11748_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (39))){
var state_11735__$1 = state_11735;
var statearr_11752_13189 = state_11735__$1;
(statearr_11752_13189[(2)] = null);

(statearr_11752_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (4))){
var inst_11597 = (state_11735[(10)]);
var inst_11597__$1 = (state_11735[(2)]);
var inst_11602 = (inst_11597__$1 == null);
var state_11735__$1 = (function (){var statearr_11753 = state_11735;
(statearr_11753[(10)] = inst_11597__$1);

return statearr_11753;
})();
if(cljs.core.truth_(inst_11602)){
var statearr_11754_13190 = state_11735__$1;
(statearr_11754_13190[(1)] = (5));

} else {
var statearr_11755_13191 = state_11735__$1;
(statearr_11755_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (15))){
var inst_11611 = (state_11735[(13)]);
var inst_11613 = (state_11735[(15)]);
var inst_11610 = (state_11735[(16)]);
var inst_11612 = (state_11735[(17)]);
var inst_11632 = (state_11735[(2)]);
var inst_11633 = (inst_11613 + (1));
var tmp11749 = inst_11611;
var tmp11750 = inst_11610;
var tmp11751 = inst_11612;
var inst_11610__$1 = tmp11750;
var inst_11611__$1 = tmp11749;
var inst_11612__$1 = tmp11751;
var inst_11613__$1 = inst_11633;
var state_11735__$1 = (function (){var statearr_11756 = state_11735;
(statearr_11756[(13)] = inst_11611__$1);

(statearr_11756[(15)] = inst_11613__$1);

(statearr_11756[(16)] = inst_11610__$1);

(statearr_11756[(18)] = inst_11632);

(statearr_11756[(17)] = inst_11612__$1);

return statearr_11756;
})();
var statearr_11757_13192 = state_11735__$1;
(statearr_11757_13192[(2)] = null);

(statearr_11757_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (21))){
var inst_11659 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11761_13193 = state_11735__$1;
(statearr_11761_13193[(2)] = inst_11659);

(statearr_11761_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (31))){
var inst_11685 = (state_11735[(11)]);
var inst_11689 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11685);
var state_11735__$1 = state_11735;
var statearr_11762_13194 = state_11735__$1;
(statearr_11762_13194[(2)] = inst_11689);

(statearr_11762_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (32))){
var inst_11680 = (state_11735[(9)]);
var inst_11677 = (state_11735[(19)]);
var inst_11678 = (state_11735[(12)]);
var inst_11679 = (state_11735[(20)]);
var inst_11691 = (state_11735[(2)]);
var inst_11692 = (inst_11680 + (1));
var tmp11758 = inst_11677;
var tmp11759 = inst_11678;
var tmp11760 = inst_11679;
var inst_11677__$1 = tmp11758;
var inst_11678__$1 = tmp11759;
var inst_11679__$1 = tmp11760;
var inst_11680__$1 = inst_11692;
var state_11735__$1 = (function (){var statearr_11774 = state_11735;
(statearr_11774[(9)] = inst_11680__$1);

(statearr_11774[(21)] = inst_11691);

(statearr_11774[(19)] = inst_11677__$1);

(statearr_11774[(12)] = inst_11678__$1);

(statearr_11774[(20)] = inst_11679__$1);

return statearr_11774;
})();
var statearr_11775_13195 = state_11735__$1;
(statearr_11775_13195[(2)] = null);

(statearr_11775_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (40))){
var inst_11704 = (state_11735[(22)]);
var inst_11708 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11704);
var state_11735__$1 = state_11735;
var statearr_11776_13196 = state_11735__$1;
(statearr_11776_13196[(2)] = inst_11708);

(statearr_11776_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (33))){
var inst_11695 = (state_11735[(23)]);
var inst_11697 = cljs.core.chunked_seq_QMARK_(inst_11695);
var state_11735__$1 = state_11735;
if(inst_11697){
var statearr_11777_13197 = state_11735__$1;
(statearr_11777_13197[(1)] = (36));

} else {
var statearr_11778_13198 = state_11735__$1;
(statearr_11778_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (13))){
var inst_11626 = (state_11735[(24)]);
var inst_11629 = cljs.core.async.close_BANG_(inst_11626);
var state_11735__$1 = state_11735;
var statearr_11779_13199 = state_11735__$1;
(statearr_11779_13199[(2)] = inst_11629);

(statearr_11779_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (22))){
var inst_11649 = (state_11735[(8)]);
var inst_11652 = cljs.core.async.close_BANG_(inst_11649);
var state_11735__$1 = state_11735;
var statearr_11780_13200 = state_11735__$1;
(statearr_11780_13200[(2)] = inst_11652);

(statearr_11780_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (36))){
var inst_11695 = (state_11735[(23)]);
var inst_11699 = cljs.core.chunk_first(inst_11695);
var inst_11700 = cljs.core.chunk_rest(inst_11695);
var inst_11701 = cljs.core.count(inst_11699);
var inst_11677 = inst_11700;
var inst_11678 = inst_11699;
var inst_11679 = inst_11701;
var inst_11680 = (0);
var state_11735__$1 = (function (){var statearr_11781 = state_11735;
(statearr_11781[(9)] = inst_11680);

(statearr_11781[(19)] = inst_11677);

(statearr_11781[(12)] = inst_11678);

(statearr_11781[(20)] = inst_11679);

return statearr_11781;
})();
var statearr_11782_13201 = state_11735__$1;
(statearr_11782_13201[(2)] = null);

(statearr_11782_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (41))){
var inst_11695 = (state_11735[(23)]);
var inst_11710 = (state_11735[(2)]);
var inst_11711 = cljs.core.next(inst_11695);
var inst_11677 = inst_11711;
var inst_11678 = null;
var inst_11679 = (0);
var inst_11680 = (0);
var state_11735__$1 = (function (){var statearr_11783 = state_11735;
(statearr_11783[(25)] = inst_11710);

(statearr_11783[(9)] = inst_11680);

(statearr_11783[(19)] = inst_11677);

(statearr_11783[(12)] = inst_11678);

(statearr_11783[(20)] = inst_11679);

return statearr_11783;
})();
var statearr_11784_13202 = state_11735__$1;
(statearr_11784_13202[(2)] = null);

(statearr_11784_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (43))){
var state_11735__$1 = state_11735;
var statearr_11785_13203 = state_11735__$1;
(statearr_11785_13203[(2)] = null);

(statearr_11785_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (29))){
var inst_11719 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11786_13204 = state_11735__$1;
(statearr_11786_13204[(2)] = inst_11719);

(statearr_11786_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (44))){
var inst_11728 = (state_11735[(2)]);
var state_11735__$1 = (function (){var statearr_11787 = state_11735;
(statearr_11787[(26)] = inst_11728);

return statearr_11787;
})();
var statearr_11788_13205 = state_11735__$1;
(statearr_11788_13205[(2)] = null);

(statearr_11788_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (6))){
var inst_11669 = (state_11735[(27)]);
var inst_11668 = cljs.core.deref(cs);
var inst_11669__$1 = cljs.core.keys(inst_11668);
var inst_11670 = cljs.core.count(inst_11669__$1);
var inst_11671 = cljs.core.reset_BANG_(dctr,inst_11670);
var inst_11676 = cljs.core.seq(inst_11669__$1);
var inst_11677 = inst_11676;
var inst_11678 = null;
var inst_11679 = (0);
var inst_11680 = (0);
var state_11735__$1 = (function (){var statearr_11789 = state_11735;
(statearr_11789[(9)] = inst_11680);

(statearr_11789[(28)] = inst_11671);

(statearr_11789[(27)] = inst_11669__$1);

(statearr_11789[(19)] = inst_11677);

(statearr_11789[(12)] = inst_11678);

(statearr_11789[(20)] = inst_11679);

return statearr_11789;
})();
var statearr_11790_13206 = state_11735__$1;
(statearr_11790_13206[(2)] = null);

(statearr_11790_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (28))){
var inst_11677 = (state_11735[(19)]);
var inst_11695 = (state_11735[(23)]);
var inst_11695__$1 = cljs.core.seq(inst_11677);
var state_11735__$1 = (function (){var statearr_11791 = state_11735;
(statearr_11791[(23)] = inst_11695__$1);

return statearr_11791;
})();
if(inst_11695__$1){
var statearr_11792_13207 = state_11735__$1;
(statearr_11792_13207[(1)] = (33));

} else {
var statearr_11793_13208 = state_11735__$1;
(statearr_11793_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (25))){
var inst_11680 = (state_11735[(9)]);
var inst_11679 = (state_11735[(20)]);
var inst_11682 = (inst_11680 < inst_11679);
var inst_11683 = inst_11682;
var state_11735__$1 = state_11735;
if(cljs.core.truth_(inst_11683)){
var statearr_11794_13209 = state_11735__$1;
(statearr_11794_13209[(1)] = (27));

} else {
var statearr_11795_13210 = state_11735__$1;
(statearr_11795_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (34))){
var state_11735__$1 = state_11735;
var statearr_11820_13211 = state_11735__$1;
(statearr_11820_13211[(2)] = null);

(statearr_11820_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (17))){
var state_11735__$1 = state_11735;
var statearr_11822_13212 = state_11735__$1;
(statearr_11822_13212[(2)] = null);

(statearr_11822_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (3))){
var inst_11733 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11735__$1,inst_11733);
} else {
if((state_val_11736 === (12))){
var inst_11664 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11824_13213 = state_11735__$1;
(statearr_11824_13213[(2)] = inst_11664);

(statearr_11824_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (2))){
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11735__$1,(4),ch);
} else {
if((state_val_11736 === (23))){
var state_11735__$1 = state_11735;
var statearr_11825_13214 = state_11735__$1;
(statearr_11825_13214[(2)] = null);

(statearr_11825_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (35))){
var inst_11717 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11826_13215 = state_11735__$1;
(statearr_11826_13215[(2)] = inst_11717);

(statearr_11826_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (19))){
var inst_11636 = (state_11735[(7)]);
var inst_11640 = cljs.core.chunk_first(inst_11636);
var inst_11641 = cljs.core.chunk_rest(inst_11636);
var inst_11642 = cljs.core.count(inst_11640);
var inst_11610 = inst_11641;
var inst_11611 = inst_11640;
var inst_11612 = inst_11642;
var inst_11613 = (0);
var state_11735__$1 = (function (){var statearr_11827 = state_11735;
(statearr_11827[(13)] = inst_11611);

(statearr_11827[(15)] = inst_11613);

(statearr_11827[(16)] = inst_11610);

(statearr_11827[(17)] = inst_11612);

return statearr_11827;
})();
var statearr_11828_13216 = state_11735__$1;
(statearr_11828_13216[(2)] = null);

(statearr_11828_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (11))){
var inst_11610 = (state_11735[(16)]);
var inst_11636 = (state_11735[(7)]);
var inst_11636__$1 = cljs.core.seq(inst_11610);
var state_11735__$1 = (function (){var statearr_11837 = state_11735;
(statearr_11837[(7)] = inst_11636__$1);

return statearr_11837;
})();
if(inst_11636__$1){
var statearr_11838_13217 = state_11735__$1;
(statearr_11838_13217[(1)] = (16));

} else {
var statearr_11839_13218 = state_11735__$1;
(statearr_11839_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (9))){
var inst_11666 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11840_13219 = state_11735__$1;
(statearr_11840_13219[(2)] = inst_11666);

(statearr_11840_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (5))){
var inst_11608 = cljs.core.deref(cs);
var inst_11609 = cljs.core.seq(inst_11608);
var inst_11610 = inst_11609;
var inst_11611 = null;
var inst_11612 = (0);
var inst_11613 = (0);
var state_11735__$1 = (function (){var statearr_11841 = state_11735;
(statearr_11841[(13)] = inst_11611);

(statearr_11841[(15)] = inst_11613);

(statearr_11841[(16)] = inst_11610);

(statearr_11841[(17)] = inst_11612);

return statearr_11841;
})();
var statearr_11842_13220 = state_11735__$1;
(statearr_11842_13220[(2)] = null);

(statearr_11842_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (14))){
var state_11735__$1 = state_11735;
var statearr_11847_13221 = state_11735__$1;
(statearr_11847_13221[(2)] = null);

(statearr_11847_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (45))){
var inst_11725 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11848_13222 = state_11735__$1;
(statearr_11848_13222[(2)] = inst_11725);

(statearr_11848_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (26))){
var inst_11669 = (state_11735[(27)]);
var inst_11721 = (state_11735[(2)]);
var inst_11722 = cljs.core.seq(inst_11669);
var state_11735__$1 = (function (){var statearr_11857 = state_11735;
(statearr_11857[(29)] = inst_11721);

return statearr_11857;
})();
if(inst_11722){
var statearr_11858_13223 = state_11735__$1;
(statearr_11858_13223[(1)] = (42));

} else {
var statearr_11859_13224 = state_11735__$1;
(statearr_11859_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (16))){
var inst_11636 = (state_11735[(7)]);
var inst_11638 = cljs.core.chunked_seq_QMARK_(inst_11636);
var state_11735__$1 = state_11735;
if(inst_11638){
var statearr_11860_13225 = state_11735__$1;
(statearr_11860_13225[(1)] = (19));

} else {
var statearr_11861_13226 = state_11735__$1;
(statearr_11861_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (38))){
var inst_11714 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11862_13227 = state_11735__$1;
(statearr_11862_13227[(2)] = inst_11714);

(statearr_11862_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (30))){
var state_11735__$1 = state_11735;
var statearr_11863_13228 = state_11735__$1;
(statearr_11863_13228[(2)] = null);

(statearr_11863_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (10))){
var inst_11611 = (state_11735[(13)]);
var inst_11613 = (state_11735[(15)]);
var inst_11625 = cljs.core._nth(inst_11611,inst_11613);
var inst_11626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11625,(0),null);
var inst_11627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11625,(1),null);
var state_11735__$1 = (function (){var statearr_11864 = state_11735;
(statearr_11864[(24)] = inst_11626);

return statearr_11864;
})();
if(cljs.core.truth_(inst_11627)){
var statearr_11865_13229 = state_11735__$1;
(statearr_11865_13229[(1)] = (13));

} else {
var statearr_11866_13230 = state_11735__$1;
(statearr_11866_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (18))){
var inst_11662 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11867_13231 = state_11735__$1;
(statearr_11867_13231[(2)] = inst_11662);

(statearr_11867_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (42))){
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11735__$1,(45),dchan);
} else {
if((state_val_11736 === (37))){
var inst_11704 = (state_11735[(22)]);
var inst_11597 = (state_11735[(10)]);
var inst_11695 = (state_11735[(23)]);
var inst_11704__$1 = cljs.core.first(inst_11695);
var inst_11705 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11704__$1,inst_11597,done);
var state_11735__$1 = (function (){var statearr_11868 = state_11735;
(statearr_11868[(22)] = inst_11704__$1);

return statearr_11868;
})();
if(cljs.core.truth_(inst_11705)){
var statearr_11870_13232 = state_11735__$1;
(statearr_11870_13232[(1)] = (39));

} else {
var statearr_11871_13233 = state_11735__$1;
(statearr_11871_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (8))){
var inst_11613 = (state_11735[(15)]);
var inst_11612 = (state_11735[(17)]);
var inst_11615 = (inst_11613 < inst_11612);
var inst_11616 = inst_11615;
var state_11735__$1 = state_11735;
if(cljs.core.truth_(inst_11616)){
var statearr_11872_13234 = state_11735__$1;
(statearr_11872_13234[(1)] = (10));

} else {
var statearr_11873_13235 = state_11735__$1;
(statearr_11873_13235[(1)] = (11));

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
var statearr_11885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11885[(0)] = cljs$core$async$mult_$_state_machine__10929__auto__);

(statearr_11885[(1)] = (1));

return statearr_11885;
});
var cljs$core$async$mult_$_state_machine__10929__auto____1 = (function (state_11735){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11735);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11886){var ex__10932__auto__ = e11886;
var statearr_11887_13236 = state_11735;
(statearr_11887_13236[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11735[(4)]))){
var statearr_11888_13237 = state_11735;
(statearr_11888_13237[(1)] = cljs.core.first((state_11735[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11735;
state_11735 = G__13238;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10929__auto__ = function(state_11735){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10929__auto____1.call(this,state_11735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10929__auto____0;
cljs$core$async$mult_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10929__auto____1;
return cljs$core$async$mult_$_state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11889 = f__10979__auto__();
(statearr_11889[(6)] = c__10978__auto___13181);

return statearr_11889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var G__11895 = arguments.length;
switch (G__11895) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11911){
var map__11912 = p__11911;
var map__11912__$1 = (((((!((map__11912 == null))))?(((((map__11912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11912):map__11912);
var opts = map__11912__$1;
var statearr_11914_13248 = state;
(statearr_11914_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11915_13249 = state;
(statearr_11915_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11916_13250 = state;
(statearr_11916_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11905){
var G__11906 = cljs.core.first(seq11905);
var seq11905__$1 = cljs.core.next(seq11905);
var G__11907 = cljs.core.first(seq11905__$1);
var seq11905__$2 = cljs.core.next(seq11905__$1);
var G__11908 = cljs.core.first(seq11905__$2);
var seq11905__$3 = cljs.core.next(seq11905__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11906,G__11907,G__11908,seq11905__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11917 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11918){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11918 = meta11918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11919,meta11918__$1){
var self__ = this;
var _11919__$1 = this;
return (new cljs.core.async.t_cljs$core$async11917(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11918__$1));
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11919){
var self__ = this;
var _11919__$1 = this;
return self__.meta11918;
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11918","meta11918",1781871490,null)], null);
}));

(cljs.core.async.t_cljs$core$async11917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11917");

(cljs.core.async.t_cljs$core$async11917.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11917.
 */
cljs.core.async.__GT_t_cljs$core$async11917 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11917(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11918){
return (new cljs.core.async.t_cljs$core$async11917(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11918));
});

}

return (new cljs.core.async.t_cljs$core$async11917(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10978__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12043){
var state_val_12044 = (state_12043[(1)]);
if((state_val_12044 === (7))){
var inst_11955 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
var statearr_12049_13252 = state_12043__$1;
(statearr_12049_13252[(2)] = inst_11955);

(statearr_12049_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (20))){
var inst_11967 = (state_12043[(7)]);
var state_12043__$1 = state_12043;
var statearr_12050_13253 = state_12043__$1;
(statearr_12050_13253[(2)] = inst_11967);

(statearr_12050_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (27))){
var state_12043__$1 = state_12043;
var statearr_12051_13254 = state_12043__$1;
(statearr_12051_13254[(2)] = null);

(statearr_12051_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (1))){
var inst_11938 = (state_12043[(8)]);
var inst_11938__$1 = calc_state();
var inst_11940 = (inst_11938__$1 == null);
var inst_11941 = cljs.core.not(inst_11940);
var state_12043__$1 = (function (){var statearr_12052 = state_12043;
(statearr_12052[(8)] = inst_11938__$1);

return statearr_12052;
})();
if(inst_11941){
var statearr_12053_13255 = state_12043__$1;
(statearr_12053_13255[(1)] = (2));

} else {
var statearr_12054_13256 = state_12043__$1;
(statearr_12054_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (24))){
var inst_11991 = (state_12043[(9)]);
var inst_12014 = (state_12043[(10)]);
var inst_12000 = (state_12043[(11)]);
var inst_12014__$1 = (inst_11991.cljs$core$IFn$_invoke$arity$1 ? inst_11991.cljs$core$IFn$_invoke$arity$1(inst_12000) : inst_11991.call(null,inst_12000));
var state_12043__$1 = (function (){var statearr_12056 = state_12043;
(statearr_12056[(10)] = inst_12014__$1);

return statearr_12056;
})();
if(cljs.core.truth_(inst_12014__$1)){
var statearr_12058_13257 = state_12043__$1;
(statearr_12058_13257[(1)] = (29));

} else {
var statearr_12060_13258 = state_12043__$1;
(statearr_12060_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (4))){
var inst_11958 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
if(cljs.core.truth_(inst_11958)){
var statearr_12062_13259 = state_12043__$1;
(statearr_12062_13259[(1)] = (8));

} else {
var statearr_12063_13260 = state_12043__$1;
(statearr_12063_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (15))){
var inst_11985 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
if(cljs.core.truth_(inst_11985)){
var statearr_12064_13261 = state_12043__$1;
(statearr_12064_13261[(1)] = (19));

} else {
var statearr_12065_13262 = state_12043__$1;
(statearr_12065_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (21))){
var inst_11990 = (state_12043[(12)]);
var inst_11990__$1 = (state_12043[(2)]);
var inst_11991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11990__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11990__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11990__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12043__$1 = (function (){var statearr_12066 = state_12043;
(statearr_12066[(9)] = inst_11991);

(statearr_12066[(13)] = inst_11992);

(statearr_12066[(12)] = inst_11990__$1);

return statearr_12066;
})();
return cljs.core.async.ioc_alts_BANG_(state_12043__$1,(22),inst_11993);
} else {
if((state_val_12044 === (31))){
var inst_12022 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
if(cljs.core.truth_(inst_12022)){
var statearr_12067_13263 = state_12043__$1;
(statearr_12067_13263[(1)] = (32));

} else {
var statearr_12068_13264 = state_12043__$1;
(statearr_12068_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (32))){
var inst_11999 = (state_12043[(14)]);
var state_12043__$1 = state_12043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12043__$1,(35),out,inst_11999);
} else {
if((state_val_12044 === (33))){
var inst_11990 = (state_12043[(12)]);
var inst_11967 = inst_11990;
var state_12043__$1 = (function (){var statearr_12069 = state_12043;
(statearr_12069[(7)] = inst_11967);

return statearr_12069;
})();
var statearr_12070_13265 = state_12043__$1;
(statearr_12070_13265[(2)] = null);

(statearr_12070_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (13))){
var inst_11967 = (state_12043[(7)]);
var inst_11974 = inst_11967.cljs$lang$protocol_mask$partition0$;
var inst_11975 = (inst_11974 & (64));
var inst_11976 = inst_11967.cljs$core$ISeq$;
var inst_11977 = (cljs.core.PROTOCOL_SENTINEL === inst_11976);
var inst_11978 = ((inst_11975) || (inst_11977));
var state_12043__$1 = state_12043;
if(cljs.core.truth_(inst_11978)){
var statearr_12071_13266 = state_12043__$1;
(statearr_12071_13266[(1)] = (16));

} else {
var statearr_12072_13267 = state_12043__$1;
(statearr_12072_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (22))){
var inst_11999 = (state_12043[(14)]);
var inst_12000 = (state_12043[(11)]);
var inst_11998 = (state_12043[(2)]);
var inst_11999__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11998,(0),null);
var inst_12000__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11998,(1),null);
var inst_12001 = (inst_11999__$1 == null);
var inst_12002 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12000__$1,change);
var inst_12003 = ((inst_12001) || (inst_12002));
var state_12043__$1 = (function (){var statearr_12073 = state_12043;
(statearr_12073[(14)] = inst_11999__$1);

(statearr_12073[(11)] = inst_12000__$1);

return statearr_12073;
})();
if(cljs.core.truth_(inst_12003)){
var statearr_12074_13268 = state_12043__$1;
(statearr_12074_13268[(1)] = (23));

} else {
var statearr_12075_13269 = state_12043__$1;
(statearr_12075_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (36))){
var inst_11990 = (state_12043[(12)]);
var inst_11967 = inst_11990;
var state_12043__$1 = (function (){var statearr_12076 = state_12043;
(statearr_12076[(7)] = inst_11967);

return statearr_12076;
})();
var statearr_12077_13270 = state_12043__$1;
(statearr_12077_13270[(2)] = null);

(statearr_12077_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (29))){
var inst_12014 = (state_12043[(10)]);
var state_12043__$1 = state_12043;
var statearr_12078_13271 = state_12043__$1;
(statearr_12078_13271[(2)] = inst_12014);

(statearr_12078_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (6))){
var state_12043__$1 = state_12043;
var statearr_12079_13272 = state_12043__$1;
(statearr_12079_13272[(2)] = false);

(statearr_12079_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (28))){
var inst_12010 = (state_12043[(2)]);
var inst_12011 = calc_state();
var inst_11967 = inst_12011;
var state_12043__$1 = (function (){var statearr_12080 = state_12043;
(statearr_12080[(7)] = inst_11967);

(statearr_12080[(15)] = inst_12010);

return statearr_12080;
})();
var statearr_12081_13273 = state_12043__$1;
(statearr_12081_13273[(2)] = null);

(statearr_12081_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (25))){
var inst_12036 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
var statearr_12082_13274 = state_12043__$1;
(statearr_12082_13274[(2)] = inst_12036);

(statearr_12082_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (34))){
var inst_12034 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
var statearr_12083_13275 = state_12043__$1;
(statearr_12083_13275[(2)] = inst_12034);

(statearr_12083_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (17))){
var state_12043__$1 = state_12043;
var statearr_12084_13276 = state_12043__$1;
(statearr_12084_13276[(2)] = false);

(statearr_12084_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (3))){
var state_12043__$1 = state_12043;
var statearr_12085_13277 = state_12043__$1;
(statearr_12085_13277[(2)] = false);

(statearr_12085_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (12))){
var inst_12038 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12043__$1,inst_12038);
} else {
if((state_val_12044 === (2))){
var inst_11938 = (state_12043[(8)]);
var inst_11947 = inst_11938.cljs$lang$protocol_mask$partition0$;
var inst_11948 = (inst_11947 & (64));
var inst_11949 = inst_11938.cljs$core$ISeq$;
var inst_11950 = (cljs.core.PROTOCOL_SENTINEL === inst_11949);
var inst_11951 = ((inst_11948) || (inst_11950));
var state_12043__$1 = state_12043;
if(cljs.core.truth_(inst_11951)){
var statearr_12086_13278 = state_12043__$1;
(statearr_12086_13278[(1)] = (5));

} else {
var statearr_12087_13279 = state_12043__$1;
(statearr_12087_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (23))){
var inst_11999 = (state_12043[(14)]);
var inst_12005 = (inst_11999 == null);
var state_12043__$1 = state_12043;
if(cljs.core.truth_(inst_12005)){
var statearr_12089_13280 = state_12043__$1;
(statearr_12089_13280[(1)] = (26));

} else {
var statearr_12090_13281 = state_12043__$1;
(statearr_12090_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (35))){
var inst_12025 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
if(cljs.core.truth_(inst_12025)){
var statearr_12091_13282 = state_12043__$1;
(statearr_12091_13282[(1)] = (36));

} else {
var statearr_12093_13283 = state_12043__$1;
(statearr_12093_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (19))){
var inst_11967 = (state_12043[(7)]);
var inst_11987 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11967);
var state_12043__$1 = state_12043;
var statearr_12094_13284 = state_12043__$1;
(statearr_12094_13284[(2)] = inst_11987);

(statearr_12094_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (11))){
var inst_11967 = (state_12043[(7)]);
var inst_11971 = (inst_11967 == null);
var inst_11972 = cljs.core.not(inst_11971);
var state_12043__$1 = state_12043;
if(inst_11972){
var statearr_12095_13285 = state_12043__$1;
(statearr_12095_13285[(1)] = (13));

} else {
var statearr_12096_13286 = state_12043__$1;
(statearr_12096_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (9))){
var inst_11938 = (state_12043[(8)]);
var state_12043__$1 = state_12043;
var statearr_12097_13287 = state_12043__$1;
(statearr_12097_13287[(2)] = inst_11938);

(statearr_12097_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (5))){
var state_12043__$1 = state_12043;
var statearr_12098_13288 = state_12043__$1;
(statearr_12098_13288[(2)] = true);

(statearr_12098_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (14))){
var state_12043__$1 = state_12043;
var statearr_12099_13289 = state_12043__$1;
(statearr_12099_13289[(2)] = false);

(statearr_12099_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (26))){
var inst_12000 = (state_12043[(11)]);
var inst_12007 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12000);
var state_12043__$1 = state_12043;
var statearr_12102_13290 = state_12043__$1;
(statearr_12102_13290[(2)] = inst_12007);

(statearr_12102_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (16))){
var state_12043__$1 = state_12043;
var statearr_12103_13291 = state_12043__$1;
(statearr_12103_13291[(2)] = true);

(statearr_12103_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (38))){
var inst_12030 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
var statearr_12104_13292 = state_12043__$1;
(statearr_12104_13292[(2)] = inst_12030);

(statearr_12104_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (30))){
var inst_11991 = (state_12043[(9)]);
var inst_11992 = (state_12043[(13)]);
var inst_12000 = (state_12043[(11)]);
var inst_12017 = cljs.core.empty_QMARK_(inst_11991);
var inst_12018 = (inst_11992.cljs$core$IFn$_invoke$arity$1 ? inst_11992.cljs$core$IFn$_invoke$arity$1(inst_12000) : inst_11992.call(null,inst_12000));
var inst_12019 = cljs.core.not(inst_12018);
var inst_12020 = ((inst_12017) && (inst_12019));
var state_12043__$1 = state_12043;
var statearr_12105_13293 = state_12043__$1;
(statearr_12105_13293[(2)] = inst_12020);

(statearr_12105_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (10))){
var inst_11938 = (state_12043[(8)]);
var inst_11963 = (state_12043[(2)]);
var inst_11964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11963,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11963,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11963,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11967 = inst_11938;
var state_12043__$1 = (function (){var statearr_12106 = state_12043;
(statearr_12106[(16)] = inst_11964);

(statearr_12106[(7)] = inst_11967);

(statearr_12106[(17)] = inst_11966);

(statearr_12106[(18)] = inst_11965);

return statearr_12106;
})();
var statearr_12107_13294 = state_12043__$1;
(statearr_12107_13294[(2)] = null);

(statearr_12107_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (18))){
var inst_11982 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
var statearr_12108_13295 = state_12043__$1;
(statearr_12108_13295[(2)] = inst_11982);

(statearr_12108_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (37))){
var state_12043__$1 = state_12043;
var statearr_12109_13296 = state_12043__$1;
(statearr_12109_13296[(2)] = null);

(statearr_12109_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (8))){
var inst_11938 = (state_12043[(8)]);
var inst_11960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11938);
var state_12043__$1 = state_12043;
var statearr_12110_13297 = state_12043__$1;
(statearr_12110_13297[(2)] = inst_11960);

(statearr_12110_13297[(1)] = (10));


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
var statearr_12111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12111[(0)] = cljs$core$async$mix_$_state_machine__10929__auto__);

(statearr_12111[(1)] = (1));

return statearr_12111;
});
var cljs$core$async$mix_$_state_machine__10929__auto____1 = (function (state_12043){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12043);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12112){var ex__10932__auto__ = e12112;
var statearr_12113_13298 = state_12043;
(statearr_12113_13298[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12043[(4)]))){
var statearr_12114_13299 = state_12043;
(statearr_12114_13299[(1)] = cljs.core.first((state_12043[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12043;
state_12043 = G__13300;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10929__auto__ = function(state_12043){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10929__auto____1.call(this,state_12043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10929__auto____0;
cljs$core$async$mix_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10929__auto____1;
return cljs$core$async$mix_$_state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12115 = f__10979__auto__();
(statearr_12115[(6)] = c__10978__auto___13251);

return statearr_12115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var G__12121 = arguments.length;
switch (G__12121) {
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
var G__12131 = arguments.length;
switch (G__12131) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12124_SHARP_){
if(cljs.core.truth_((p1__12124_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12124_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12124_SHARP_.call(null,topic)))){
return p1__12124_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12124_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12133 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12134){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12134 = meta12134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12135,meta12134__$1){
var self__ = this;
var _12135__$1 = this;
return (new cljs.core.async.t_cljs$core$async12133(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12134__$1));
}));

(cljs.core.async.t_cljs$core$async12133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12135){
var self__ = this;
var _12135__$1 = this;
return self__.meta12134;
}));

(cljs.core.async.t_cljs$core$async12133.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12133.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12133.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12133.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12134","meta12134",-152590816,null)], null);
}));

(cljs.core.async.t_cljs$core$async12133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12133");

(cljs.core.async.t_cljs$core$async12133.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12133.
 */
cljs.core.async.__GT_t_cljs$core$async12133 = (function cljs$core$async$__GT_t_cljs$core$async12133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12134){
return (new cljs.core.async.t_cljs$core$async12133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12134));
});

}

return (new cljs.core.async.t_cljs$core$async12133(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10978__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12240){
var state_val_12241 = (state_12240[(1)]);
if((state_val_12241 === (7))){
var inst_12236 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
var statearr_12246_13308 = state_12240__$1;
(statearr_12246_13308[(2)] = inst_12236);

(statearr_12246_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (20))){
var state_12240__$1 = state_12240;
var statearr_12248_13309 = state_12240__$1;
(statearr_12248_13309[(2)] = null);

(statearr_12248_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (1))){
var state_12240__$1 = state_12240;
var statearr_12254_13310 = state_12240__$1;
(statearr_12254_13310[(2)] = null);

(statearr_12254_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (24))){
var inst_12219 = (state_12240[(7)]);
var inst_12228 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12219);
var state_12240__$1 = state_12240;
var statearr_12255_13311 = state_12240__$1;
(statearr_12255_13311[(2)] = inst_12228);

(statearr_12255_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (4))){
var inst_12166 = (state_12240[(8)]);
var inst_12166__$1 = (state_12240[(2)]);
var inst_12172 = (inst_12166__$1 == null);
var state_12240__$1 = (function (){var statearr_12271 = state_12240;
(statearr_12271[(8)] = inst_12166__$1);

return statearr_12271;
})();
if(cljs.core.truth_(inst_12172)){
var statearr_12272_13312 = state_12240__$1;
(statearr_12272_13312[(1)] = (5));

} else {
var statearr_12273_13313 = state_12240__$1;
(statearr_12273_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (15))){
var inst_12213 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
var statearr_12277_13314 = state_12240__$1;
(statearr_12277_13314[(2)] = inst_12213);

(statearr_12277_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (21))){
var inst_12233 = (state_12240[(2)]);
var state_12240__$1 = (function (){var statearr_12278 = state_12240;
(statearr_12278[(9)] = inst_12233);

return statearr_12278;
})();
var statearr_12279_13315 = state_12240__$1;
(statearr_12279_13315[(2)] = null);

(statearr_12279_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (13))){
var inst_12195 = (state_12240[(10)]);
var inst_12197 = cljs.core.chunked_seq_QMARK_(inst_12195);
var state_12240__$1 = state_12240;
if(inst_12197){
var statearr_12280_13316 = state_12240__$1;
(statearr_12280_13316[(1)] = (16));

} else {
var statearr_12281_13317 = state_12240__$1;
(statearr_12281_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (22))){
var inst_12225 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
if(cljs.core.truth_(inst_12225)){
var statearr_12282_13318 = state_12240__$1;
(statearr_12282_13318[(1)] = (23));

} else {
var statearr_12283_13319 = state_12240__$1;
(statearr_12283_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (6))){
var inst_12221 = (state_12240[(11)]);
var inst_12166 = (state_12240[(8)]);
var inst_12219 = (state_12240[(7)]);
var inst_12219__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12166) : topic_fn.call(null,inst_12166));
var inst_12220 = cljs.core.deref(mults);
var inst_12221__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12220,inst_12219__$1);
var state_12240__$1 = (function (){var statearr_12284 = state_12240;
(statearr_12284[(11)] = inst_12221__$1);

(statearr_12284[(7)] = inst_12219__$1);

return statearr_12284;
})();
if(cljs.core.truth_(inst_12221__$1)){
var statearr_12285_13320 = state_12240__$1;
(statearr_12285_13320[(1)] = (19));

} else {
var statearr_12286_13321 = state_12240__$1;
(statearr_12286_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (25))){
var inst_12230 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
var statearr_12287_13322 = state_12240__$1;
(statearr_12287_13322[(2)] = inst_12230);

(statearr_12287_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (17))){
var inst_12195 = (state_12240[(10)]);
var inst_12204 = cljs.core.first(inst_12195);
var inst_12205 = cljs.core.async.muxch_STAR_(inst_12204);
var inst_12206 = cljs.core.async.close_BANG_(inst_12205);
var inst_12207 = cljs.core.next(inst_12195);
var inst_12181 = inst_12207;
var inst_12182 = null;
var inst_12183 = (0);
var inst_12184 = (0);
var state_12240__$1 = (function (){var statearr_12289 = state_12240;
(statearr_12289[(12)] = inst_12182);

(statearr_12289[(13)] = inst_12181);

(statearr_12289[(14)] = inst_12183);

(statearr_12289[(15)] = inst_12206);

(statearr_12289[(16)] = inst_12184);

return statearr_12289;
})();
var statearr_12290_13323 = state_12240__$1;
(statearr_12290_13323[(2)] = null);

(statearr_12290_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (3))){
var inst_12238 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12240__$1,inst_12238);
} else {
if((state_val_12241 === (12))){
var inst_12215 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
var statearr_12291_13324 = state_12240__$1;
(statearr_12291_13324[(2)] = inst_12215);

(statearr_12291_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (2))){
var state_12240__$1 = state_12240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12240__$1,(4),ch);
} else {
if((state_val_12241 === (23))){
var state_12240__$1 = state_12240;
var statearr_12319_13325 = state_12240__$1;
(statearr_12319_13325[(2)] = null);

(statearr_12319_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (19))){
var inst_12221 = (state_12240[(11)]);
var inst_12166 = (state_12240[(8)]);
var inst_12223 = cljs.core.async.muxch_STAR_(inst_12221);
var state_12240__$1 = state_12240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12240__$1,(22),inst_12223,inst_12166);
} else {
if((state_val_12241 === (11))){
var inst_12181 = (state_12240[(13)]);
var inst_12195 = (state_12240[(10)]);
var inst_12195__$1 = cljs.core.seq(inst_12181);
var state_12240__$1 = (function (){var statearr_12320 = state_12240;
(statearr_12320[(10)] = inst_12195__$1);

return statearr_12320;
})();
if(inst_12195__$1){
var statearr_12321_13326 = state_12240__$1;
(statearr_12321_13326[(1)] = (13));

} else {
var statearr_12322_13327 = state_12240__$1;
(statearr_12322_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (9))){
var inst_12217 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
var statearr_12323_13328 = state_12240__$1;
(statearr_12323_13328[(2)] = inst_12217);

(statearr_12323_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (5))){
var inst_12178 = cljs.core.deref(mults);
var inst_12179 = cljs.core.vals(inst_12178);
var inst_12180 = cljs.core.seq(inst_12179);
var inst_12181 = inst_12180;
var inst_12182 = null;
var inst_12183 = (0);
var inst_12184 = (0);
var state_12240__$1 = (function (){var statearr_12324 = state_12240;
(statearr_12324[(12)] = inst_12182);

(statearr_12324[(13)] = inst_12181);

(statearr_12324[(14)] = inst_12183);

(statearr_12324[(16)] = inst_12184);

return statearr_12324;
})();
var statearr_12325_13329 = state_12240__$1;
(statearr_12325_13329[(2)] = null);

(statearr_12325_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (14))){
var state_12240__$1 = state_12240;
var statearr_12329_13330 = state_12240__$1;
(statearr_12329_13330[(2)] = null);

(statearr_12329_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (16))){
var inst_12195 = (state_12240[(10)]);
var inst_12199 = cljs.core.chunk_first(inst_12195);
var inst_12200 = cljs.core.chunk_rest(inst_12195);
var inst_12201 = cljs.core.count(inst_12199);
var inst_12181 = inst_12200;
var inst_12182 = inst_12199;
var inst_12183 = inst_12201;
var inst_12184 = (0);
var state_12240__$1 = (function (){var statearr_12330 = state_12240;
(statearr_12330[(12)] = inst_12182);

(statearr_12330[(13)] = inst_12181);

(statearr_12330[(14)] = inst_12183);

(statearr_12330[(16)] = inst_12184);

return statearr_12330;
})();
var statearr_12331_13331 = state_12240__$1;
(statearr_12331_13331[(2)] = null);

(statearr_12331_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (10))){
var inst_12182 = (state_12240[(12)]);
var inst_12181 = (state_12240[(13)]);
var inst_12183 = (state_12240[(14)]);
var inst_12184 = (state_12240[(16)]);
var inst_12189 = cljs.core._nth(inst_12182,inst_12184);
var inst_12190 = cljs.core.async.muxch_STAR_(inst_12189);
var inst_12191 = cljs.core.async.close_BANG_(inst_12190);
var inst_12192 = (inst_12184 + (1));
var tmp12326 = inst_12182;
var tmp12327 = inst_12181;
var tmp12328 = inst_12183;
var inst_12181__$1 = tmp12327;
var inst_12182__$1 = tmp12326;
var inst_12183__$1 = tmp12328;
var inst_12184__$1 = inst_12192;
var state_12240__$1 = (function (){var statearr_12332 = state_12240;
(statearr_12332[(12)] = inst_12182__$1);

(statearr_12332[(13)] = inst_12181__$1);

(statearr_12332[(17)] = inst_12191);

(statearr_12332[(14)] = inst_12183__$1);

(statearr_12332[(16)] = inst_12184__$1);

return statearr_12332;
})();
var statearr_12333_13332 = state_12240__$1;
(statearr_12333_13332[(2)] = null);

(statearr_12333_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (18))){
var inst_12210 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
var statearr_12334_13333 = state_12240__$1;
(statearr_12334_13333[(2)] = inst_12210);

(statearr_12334_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (8))){
var inst_12183 = (state_12240[(14)]);
var inst_12184 = (state_12240[(16)]);
var inst_12186 = (inst_12184 < inst_12183);
var inst_12187 = inst_12186;
var state_12240__$1 = state_12240;
if(cljs.core.truth_(inst_12187)){
var statearr_12335_13334 = state_12240__$1;
(statearr_12335_13334[(1)] = (10));

} else {
var statearr_12336_13335 = state_12240__$1;
(statearr_12336_13335[(1)] = (11));

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
var statearr_12355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12355[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12355[(1)] = (1));

return statearr_12355;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12240){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12240);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12356){var ex__10932__auto__ = e12356;
var statearr_12357_13336 = state_12240;
(statearr_12357_13336[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12240[(4)]))){
var statearr_12358_13337 = state_12240;
(statearr_12358_13337[(1)] = cljs.core.first((state_12240[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12240;
state_12240 = G__13338;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12359 = f__10979__auto__();
(statearr_12359[(6)] = c__10978__auto___13307);

return statearr_12359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var G__12361 = arguments.length;
switch (G__12361) {
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
var G__12363 = arguments.length;
switch (G__12363) {
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
var G__12365 = arguments.length;
switch (G__12365) {
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
var c__10978__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12408){
var state_val_12409 = (state_12408[(1)]);
if((state_val_12409 === (7))){
var state_12408__$1 = state_12408;
var statearr_12410_13343 = state_12408__$1;
(statearr_12410_13343[(2)] = null);

(statearr_12410_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (1))){
var state_12408__$1 = state_12408;
var statearr_12411_13344 = state_12408__$1;
(statearr_12411_13344[(2)] = null);

(statearr_12411_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (4))){
var inst_12369 = (state_12408[(7)]);
var inst_12368 = (state_12408[(8)]);
var inst_12371 = (inst_12369 < inst_12368);
var state_12408__$1 = state_12408;
if(cljs.core.truth_(inst_12371)){
var statearr_12412_13345 = state_12408__$1;
(statearr_12412_13345[(1)] = (6));

} else {
var statearr_12413_13346 = state_12408__$1;
(statearr_12413_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (15))){
var inst_12394 = (state_12408[(9)]);
var inst_12399 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12394);
var state_12408__$1 = state_12408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12408__$1,(17),out,inst_12399);
} else {
if((state_val_12409 === (13))){
var inst_12394 = (state_12408[(9)]);
var inst_12394__$1 = (state_12408[(2)]);
var inst_12395 = cljs.core.some(cljs.core.nil_QMARK_,inst_12394__$1);
var state_12408__$1 = (function (){var statearr_12414 = state_12408;
(statearr_12414[(9)] = inst_12394__$1);

return statearr_12414;
})();
if(cljs.core.truth_(inst_12395)){
var statearr_12415_13347 = state_12408__$1;
(statearr_12415_13347[(1)] = (14));

} else {
var statearr_12416_13348 = state_12408__$1;
(statearr_12416_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (6))){
var state_12408__$1 = state_12408;
var statearr_12417_13349 = state_12408__$1;
(statearr_12417_13349[(2)] = null);

(statearr_12417_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (17))){
var inst_12401 = (state_12408[(2)]);
var state_12408__$1 = (function (){var statearr_12419 = state_12408;
(statearr_12419[(10)] = inst_12401);

return statearr_12419;
})();
var statearr_12420_13350 = state_12408__$1;
(statearr_12420_13350[(2)] = null);

(statearr_12420_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (3))){
var inst_12406 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12408__$1,inst_12406);
} else {
if((state_val_12409 === (12))){
var _ = (function (){var statearr_12421 = state_12408;
(statearr_12421[(4)] = cljs.core.rest((state_12408[(4)])));

return statearr_12421;
})();
var state_12408__$1 = state_12408;
var ex12418 = (state_12408__$1[(2)]);
var statearr_12422_13351 = state_12408__$1;
(statearr_12422_13351[(5)] = ex12418);


if((ex12418 instanceof Object)){
var statearr_12423_13352 = state_12408__$1;
(statearr_12423_13352[(1)] = (11));

(statearr_12423_13352[(5)] = null);

} else {
throw ex12418;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (2))){
var inst_12367 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12368 = cnt;
var inst_12369 = (0);
var state_12408__$1 = (function (){var statearr_12424 = state_12408;
(statearr_12424[(7)] = inst_12369);

(statearr_12424[(11)] = inst_12367);

(statearr_12424[(8)] = inst_12368);

return statearr_12424;
})();
var statearr_12425_13353 = state_12408__$1;
(statearr_12425_13353[(2)] = null);

(statearr_12425_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (11))){
var inst_12373 = (state_12408[(2)]);
var inst_12374 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12408__$1 = (function (){var statearr_12426 = state_12408;
(statearr_12426[(12)] = inst_12373);

return statearr_12426;
})();
var statearr_12427_13354 = state_12408__$1;
(statearr_12427_13354[(2)] = inst_12374);

(statearr_12427_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (9))){
var inst_12369 = (state_12408[(7)]);
var _ = (function (){var statearr_12428 = state_12408;
(statearr_12428[(4)] = cljs.core.cons((12),(state_12408[(4)])));

return statearr_12428;
})();
var inst_12380 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12369) : chs__$1.call(null,inst_12369));
var inst_12381 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12369) : done.call(null,inst_12369));
var inst_12382 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12380,inst_12381);
var ___$1 = (function (){var statearr_12429 = state_12408;
(statearr_12429[(4)] = cljs.core.rest((state_12408[(4)])));

return statearr_12429;
})();
var state_12408__$1 = state_12408;
var statearr_12430_13355 = state_12408__$1;
(statearr_12430_13355[(2)] = inst_12382);

(statearr_12430_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (5))){
var inst_12392 = (state_12408[(2)]);
var state_12408__$1 = (function (){var statearr_12431 = state_12408;
(statearr_12431[(13)] = inst_12392);

return statearr_12431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12408__$1,(13),dchan);
} else {
if((state_val_12409 === (14))){
var inst_12397 = cljs.core.async.close_BANG_(out);
var state_12408__$1 = state_12408;
var statearr_12434_13356 = state_12408__$1;
(statearr_12434_13356[(2)] = inst_12397);

(statearr_12434_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (16))){
var inst_12404 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
var statearr_12435_13357 = state_12408__$1;
(statearr_12435_13357[(2)] = inst_12404);

(statearr_12435_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (10))){
var inst_12369 = (state_12408[(7)]);
var inst_12385 = (state_12408[(2)]);
var inst_12386 = (inst_12369 + (1));
var inst_12369__$1 = inst_12386;
var state_12408__$1 = (function (){var statearr_12436 = state_12408;
(statearr_12436[(7)] = inst_12369__$1);

(statearr_12436[(14)] = inst_12385);

return statearr_12436;
})();
var statearr_12437_13358 = state_12408__$1;
(statearr_12437_13358[(2)] = null);

(statearr_12437_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (8))){
var inst_12390 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
var statearr_12438_13359 = state_12408__$1;
(statearr_12438_13359[(2)] = inst_12390);

(statearr_12438_13359[(1)] = (5));


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
var statearr_12439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12439[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12439[(1)] = (1));

return statearr_12439;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12408){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12408);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12440){var ex__10932__auto__ = e12440;
var statearr_12441_13360 = state_12408;
(statearr_12441_13360[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12408[(4)]))){
var statearr_12442_13361 = state_12408;
(statearr_12442_13361[(1)] = cljs.core.first((state_12408[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12408;
state_12408 = G__13362;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12443 = f__10979__auto__();
(statearr_12443[(6)] = c__10978__auto___13342);

return statearr_12443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var G__12446 = arguments.length;
switch (G__12446) {
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
var c__10978__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12487){
var state_val_12488 = (state_12487[(1)]);
if((state_val_12488 === (7))){
var inst_12460 = (state_12487[(7)]);
var inst_12461 = (state_12487[(8)]);
var inst_12460__$1 = (state_12487[(2)]);
var inst_12461__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12460__$1,(0),null);
var inst_12462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12460__$1,(1),null);
var inst_12463 = (inst_12461__$1 == null);
var state_12487__$1 = (function (){var statearr_12489 = state_12487;
(statearr_12489[(7)] = inst_12460__$1);

(statearr_12489[(8)] = inst_12461__$1);

(statearr_12489[(9)] = inst_12462);

return statearr_12489;
})();
if(cljs.core.truth_(inst_12463)){
var statearr_12490_13365 = state_12487__$1;
(statearr_12490_13365[(1)] = (8));

} else {
var statearr_12491_13366 = state_12487__$1;
(statearr_12491_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12488 === (1))){
var inst_12447 = cljs.core.vec(chs);
var inst_12448 = inst_12447;
var state_12487__$1 = (function (){var statearr_12492 = state_12487;
(statearr_12492[(10)] = inst_12448);

return statearr_12492;
})();
var statearr_12493_13367 = state_12487__$1;
(statearr_12493_13367[(2)] = null);

(statearr_12493_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12488 === (4))){
var inst_12448 = (state_12487[(10)]);
var state_12487__$1 = state_12487;
return cljs.core.async.ioc_alts_BANG_(state_12487__$1,(7),inst_12448);
} else {
if((state_val_12488 === (6))){
var inst_12483 = (state_12487[(2)]);
var state_12487__$1 = state_12487;
var statearr_12494_13368 = state_12487__$1;
(statearr_12494_13368[(2)] = inst_12483);

(statearr_12494_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12488 === (3))){
var inst_12485 = (state_12487[(2)]);
var state_12487__$1 = state_12487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12487__$1,inst_12485);
} else {
if((state_val_12488 === (2))){
var inst_12448 = (state_12487[(10)]);
var inst_12450 = cljs.core.count(inst_12448);
var inst_12451 = (inst_12450 > (0));
var state_12487__$1 = state_12487;
if(cljs.core.truth_(inst_12451)){
var statearr_12496_13369 = state_12487__$1;
(statearr_12496_13369[(1)] = (4));

} else {
var statearr_12497_13370 = state_12487__$1;
(statearr_12497_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12488 === (11))){
var inst_12448 = (state_12487[(10)]);
var inst_12476 = (state_12487[(2)]);
var tmp12495 = inst_12448;
var inst_12448__$1 = tmp12495;
var state_12487__$1 = (function (){var statearr_12498 = state_12487;
(statearr_12498[(11)] = inst_12476);

(statearr_12498[(10)] = inst_12448__$1);

return statearr_12498;
})();
var statearr_12499_13371 = state_12487__$1;
(statearr_12499_13371[(2)] = null);

(statearr_12499_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12488 === (9))){
var inst_12461 = (state_12487[(8)]);
var state_12487__$1 = state_12487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12487__$1,(11),out,inst_12461);
} else {
if((state_val_12488 === (5))){
var inst_12481 = cljs.core.async.close_BANG_(out);
var state_12487__$1 = state_12487;
var statearr_12500_13372 = state_12487__$1;
(statearr_12500_13372[(2)] = inst_12481);

(statearr_12500_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12488 === (10))){
var inst_12479 = (state_12487[(2)]);
var state_12487__$1 = state_12487;
var statearr_12501_13373 = state_12487__$1;
(statearr_12501_13373[(2)] = inst_12479);

(statearr_12501_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12488 === (8))){
var inst_12460 = (state_12487[(7)]);
var inst_12461 = (state_12487[(8)]);
var inst_12462 = (state_12487[(9)]);
var inst_12448 = (state_12487[(10)]);
var inst_12471 = (function (){var cs = inst_12448;
var vec__12456 = inst_12460;
var v = inst_12461;
var c = inst_12462;
return (function (p1__12444_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12444_SHARP_);
});
})();
var inst_12472 = cljs.core.filterv(inst_12471,inst_12448);
var inst_12448__$1 = inst_12472;
var state_12487__$1 = (function (){var statearr_12502 = state_12487;
(statearr_12502[(10)] = inst_12448__$1);

return statearr_12502;
})();
var statearr_12503_13374 = state_12487__$1;
(statearr_12503_13374[(2)] = null);

(statearr_12503_13374[(1)] = (2));


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
var statearr_12504 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12504[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12504[(1)] = (1));

return statearr_12504;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12487){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12487);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12505){var ex__10932__auto__ = e12505;
var statearr_12506_13375 = state_12487;
(statearr_12506_13375[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12487[(4)]))){
var statearr_12507_13376 = state_12487;
(statearr_12507_13376[(1)] = cljs.core.first((state_12487[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12487;
state_12487 = G__13377;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12508 = f__10979__auto__();
(statearr_12508[(6)] = c__10978__auto___13364);

return statearr_12508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var G__12510 = arguments.length;
switch (G__12510) {
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
var c__10978__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12544){
var state_val_12545 = (state_12544[(1)]);
if((state_val_12545 === (7))){
var inst_12526 = (state_12544[(7)]);
var inst_12526__$1 = (state_12544[(2)]);
var inst_12527 = (inst_12526__$1 == null);
var inst_12528 = cljs.core.not(inst_12527);
var state_12544__$1 = (function (){var statearr_12546 = state_12544;
(statearr_12546[(7)] = inst_12526__$1);

return statearr_12546;
})();
if(inst_12528){
var statearr_12547_13380 = state_12544__$1;
(statearr_12547_13380[(1)] = (8));

} else {
var statearr_12548_13381 = state_12544__$1;
(statearr_12548_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (1))){
var inst_12521 = (0);
var state_12544__$1 = (function (){var statearr_12549 = state_12544;
(statearr_12549[(8)] = inst_12521);

return statearr_12549;
})();
var statearr_12550_13382 = state_12544__$1;
(statearr_12550_13382[(2)] = null);

(statearr_12550_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (4))){
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12544__$1,(7),ch);
} else {
if((state_val_12545 === (6))){
var inst_12539 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12551_13383 = state_12544__$1;
(statearr_12551_13383[(2)] = inst_12539);

(statearr_12551_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (3))){
var inst_12541 = (state_12544[(2)]);
var inst_12542 = cljs.core.async.close_BANG_(out);
var state_12544__$1 = (function (){var statearr_12552 = state_12544;
(statearr_12552[(9)] = inst_12541);

return statearr_12552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12544__$1,inst_12542);
} else {
if((state_val_12545 === (2))){
var inst_12521 = (state_12544[(8)]);
var inst_12523 = (inst_12521 < n);
var state_12544__$1 = state_12544;
if(cljs.core.truth_(inst_12523)){
var statearr_12553_13384 = state_12544__$1;
(statearr_12553_13384[(1)] = (4));

} else {
var statearr_12554_13385 = state_12544__$1;
(statearr_12554_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (11))){
var inst_12521 = (state_12544[(8)]);
var inst_12531 = (state_12544[(2)]);
var inst_12532 = (inst_12521 + (1));
var inst_12521__$1 = inst_12532;
var state_12544__$1 = (function (){var statearr_12555 = state_12544;
(statearr_12555[(10)] = inst_12531);

(statearr_12555[(8)] = inst_12521__$1);

return statearr_12555;
})();
var statearr_12556_13386 = state_12544__$1;
(statearr_12556_13386[(2)] = null);

(statearr_12556_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (9))){
var state_12544__$1 = state_12544;
var statearr_12557_13387 = state_12544__$1;
(statearr_12557_13387[(2)] = null);

(statearr_12557_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (5))){
var state_12544__$1 = state_12544;
var statearr_12558_13388 = state_12544__$1;
(statearr_12558_13388[(2)] = null);

(statearr_12558_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (10))){
var inst_12536 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12559_13389 = state_12544__$1;
(statearr_12559_13389[(2)] = inst_12536);

(statearr_12559_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (8))){
var inst_12526 = (state_12544[(7)]);
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12544__$1,(11),out,inst_12526);
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
var statearr_12560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12560[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12560[(1)] = (1));

return statearr_12560;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12544){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12544);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12561){var ex__10932__auto__ = e12561;
var statearr_12562_13390 = state_12544;
(statearr_12562_13390[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12544[(4)]))){
var statearr_12563_13391 = state_12544;
(statearr_12563_13391[(1)] = cljs.core.first((state_12544[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12544;
state_12544 = G__13392;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12564 = f__10979__auto__();
(statearr_12564[(6)] = c__10978__auto___13379);

return statearr_12564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12614 = (function (f,ch,meta12615){
this.f = f;
this.ch = ch;
this.meta12615 = meta12615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12616,meta12615__$1){
var self__ = this;
var _12616__$1 = this;
return (new cljs.core.async.t_cljs$core$async12614(self__.f,self__.ch,meta12615__$1));
}));

(cljs.core.async.t_cljs$core$async12614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12616){
var self__ = this;
var _12616__$1 = this;
return self__.meta12615;
}));

(cljs.core.async.t_cljs$core$async12614.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12614.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12628 = (function (f,ch,meta12615,_,fn1,meta12629){
this.f = f;
this.ch = ch;
this.meta12615 = meta12615;
this._ = _;
this.fn1 = fn1;
this.meta12629 = meta12629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12630,meta12629__$1){
var self__ = this;
var _12630__$1 = this;
return (new cljs.core.async.t_cljs$core$async12628(self__.f,self__.ch,self__.meta12615,self__._,self__.fn1,meta12629__$1));
}));

(cljs.core.async.t_cljs$core$async12628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12630){
var self__ = this;
var _12630__$1 = this;
return self__.meta12629;
}));

(cljs.core.async.t_cljs$core$async12628.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12628.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12628.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12628.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12565_SHARP_){
var G__12631 = (((p1__12565_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12565_SHARP_) : self__.f.call(null,p1__12565_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12631) : f1.call(null,G__12631));
});
}));

(cljs.core.async.t_cljs$core$async12628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12615","meta12615",-1009740825,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12614","cljs.core.async/t_cljs$core$async12614",-1576917307,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12629","meta12629",840134748,null)], null);
}));

(cljs.core.async.t_cljs$core$async12628.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12628");

(cljs.core.async.t_cljs$core$async12628.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12628");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12628.
 */
cljs.core.async.__GT_t_cljs$core$async12628 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12628(f__$1,ch__$1,meta12615__$1,___$2,fn1__$1,meta12629){
return (new cljs.core.async.t_cljs$core$async12628(f__$1,ch__$1,meta12615__$1,___$2,fn1__$1,meta12629));
});

}

return (new cljs.core.async.t_cljs$core$async12628(self__.f,self__.ch,self__.meta12615,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12632 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12632) : self__.f.call(null,G__12632));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12614.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12615","meta12615",-1009740825,null)], null);
}));

(cljs.core.async.t_cljs$core$async12614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12614");

(cljs.core.async.t_cljs$core$async12614.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12614.
 */
cljs.core.async.__GT_t_cljs$core$async12614 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12614(f__$1,ch__$1,meta12615){
return (new cljs.core.async.t_cljs$core$async12614(f__$1,ch__$1,meta12615));
});

}

return (new cljs.core.async.t_cljs$core$async12614(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12641 = (function (f,ch,meta12642){
this.f = f;
this.ch = ch;
this.meta12642 = meta12642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12643,meta12642__$1){
var self__ = this;
var _12643__$1 = this;
return (new cljs.core.async.t_cljs$core$async12641(self__.f,self__.ch,meta12642__$1));
}));

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12643){
var self__ = this;
var _12643__$1 = this;
return self__.meta12642;
}));

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12642","meta12642",589139391,null)], null);
}));

(cljs.core.async.t_cljs$core$async12641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12641");

(cljs.core.async.t_cljs$core$async12641.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12641.
 */
cljs.core.async.__GT_t_cljs$core$async12641 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12641(f__$1,ch__$1,meta12642){
return (new cljs.core.async.t_cljs$core$async12641(f__$1,ch__$1,meta12642));
});

}

return (new cljs.core.async.t_cljs$core$async12641(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12648 = (function (p,ch,meta12649){
this.p = p;
this.ch = ch;
this.meta12649 = meta12649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12650,meta12649__$1){
var self__ = this;
var _12650__$1 = this;
return (new cljs.core.async.t_cljs$core$async12648(self__.p,self__.ch,meta12649__$1));
}));

(cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12650){
var self__ = this;
var _12650__$1 = this;
return self__.meta12649;
}));

(cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12649","meta12649",-1941992177,null)], null);
}));

(cljs.core.async.t_cljs$core$async12648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12648");

(cljs.core.async.t_cljs$core$async12648.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12648.
 */
cljs.core.async.__GT_t_cljs$core$async12648 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12648(p__$1,ch__$1,meta12649){
return (new cljs.core.async.t_cljs$core$async12648(p__$1,ch__$1,meta12649));
});

}

return (new cljs.core.async.t_cljs$core$async12648(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12654 = arguments.length;
switch (G__12654) {
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
var c__10978__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12685){
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
var inst_12659 = (state_12685[(7)]);
var inst_12659__$1 = (state_12685[(2)]);
var inst_12660 = (inst_12659__$1 == null);
var state_12685__$1 = (function (){var statearr_12689 = state_12685;
(statearr_12689[(7)] = inst_12659__$1);

return statearr_12689;
})();
if(cljs.core.truth_(inst_12660)){
var statearr_12690_13397 = state_12685__$1;
(statearr_12690_13397[(1)] = (5));

} else {
var statearr_12691_13398 = state_12685__$1;
(statearr_12691_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (6))){
var inst_12659 = (state_12685[(7)]);
var inst_12664 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12659) : p.call(null,inst_12659));
var state_12685__$1 = state_12685;
if(cljs.core.truth_(inst_12664)){
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
var inst_12662 = cljs.core.async.close_BANG_(out);
var state_12685__$1 = state_12685;
var statearr_12696_13403 = state_12685__$1;
(statearr_12696_13403[(2)] = inst_12662);

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
var inst_12659 = (state_12685[(7)]);
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12685__$1,(11),out,inst_12659);
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
var state__10980__auto__ = (function (){var statearr_12703 = f__10979__auto__();
(statearr_12703[(6)] = c__10978__auto___13394);

return statearr_12703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12767){
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
var state__10980__auto__ = (function (){var statearr_12808 = f__10979__auto__();
(statearr_12808[(6)] = c__10978__auto__);

return statearr_12808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12810 = arguments.length;
switch (G__12810) {
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
var G__12812 = arguments.length;
switch (G__12812) {
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
var G__12823 = arguments.length;
switch (G__12823) {
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
var c__10978__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12861){
var state_val_12862 = (state_12861[(1)]);
if((state_val_12862 === (7))){
var inst_12856 = (state_12861[(2)]);
var state_12861__$1 = state_12861;
var statearr_12863_13440 = state_12861__$1;
(statearr_12863_13440[(2)] = inst_12856);

(statearr_12863_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (1))){
var inst_12833 = null;
var state_12861__$1 = (function (){var statearr_12864 = state_12861;
(statearr_12864[(7)] = inst_12833);

return statearr_12864;
})();
var statearr_12865_13441 = state_12861__$1;
(statearr_12865_13441[(2)] = null);

(statearr_12865_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (4))){
var inst_12836 = (state_12861[(8)]);
var inst_12836__$1 = (state_12861[(2)]);
var inst_12838 = (inst_12836__$1 == null);
var inst_12839 = cljs.core.not(inst_12838);
var state_12861__$1 = (function (){var statearr_12866 = state_12861;
(statearr_12866[(8)] = inst_12836__$1);

return statearr_12866;
})();
if(inst_12839){
var statearr_12867_13442 = state_12861__$1;
(statearr_12867_13442[(1)] = (5));

} else {
var statearr_12868_13443 = state_12861__$1;
(statearr_12868_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (6))){
var state_12861__$1 = state_12861;
var statearr_12869_13444 = state_12861__$1;
(statearr_12869_13444[(2)] = null);

(statearr_12869_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (3))){
var inst_12858 = (state_12861[(2)]);
var inst_12859 = cljs.core.async.close_BANG_(out);
var state_12861__$1 = (function (){var statearr_12870 = state_12861;
(statearr_12870[(9)] = inst_12858);

return statearr_12870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12861__$1,inst_12859);
} else {
if((state_val_12862 === (2))){
var state_12861__$1 = state_12861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12861__$1,(4),ch);
} else {
if((state_val_12862 === (11))){
var inst_12836 = (state_12861[(8)]);
var inst_12850 = (state_12861[(2)]);
var inst_12833 = inst_12836;
var state_12861__$1 = (function (){var statearr_12873 = state_12861;
(statearr_12873[(10)] = inst_12850);

(statearr_12873[(7)] = inst_12833);

return statearr_12873;
})();
var statearr_12874_13445 = state_12861__$1;
(statearr_12874_13445[(2)] = null);

(statearr_12874_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (9))){
var inst_12836 = (state_12861[(8)]);
var state_12861__$1 = state_12861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12861__$1,(11),out,inst_12836);
} else {
if((state_val_12862 === (5))){
var inst_12836 = (state_12861[(8)]);
var inst_12833 = (state_12861[(7)]);
var inst_12845 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12836,inst_12833);
var state_12861__$1 = state_12861;
if(inst_12845){
var statearr_12878_13446 = state_12861__$1;
(statearr_12878_13446[(1)] = (8));

} else {
var statearr_12879_13447 = state_12861__$1;
(statearr_12879_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (10))){
var inst_12853 = (state_12861[(2)]);
var state_12861__$1 = state_12861;
var statearr_12880_13448 = state_12861__$1;
(statearr_12880_13448[(2)] = inst_12853);

(statearr_12880_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (8))){
var inst_12833 = (state_12861[(7)]);
var tmp12877 = inst_12833;
var inst_12833__$1 = tmp12877;
var state_12861__$1 = (function (){var statearr_12881 = state_12861;
(statearr_12881[(7)] = inst_12833__$1);

return statearr_12881;
})();
var statearr_12882_13449 = state_12861__$1;
(statearr_12882_13449[(2)] = null);

(statearr_12882_13449[(1)] = (2));


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
var statearr_12883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12883[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12883[(1)] = (1));

return statearr_12883;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12861){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12861);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12884){var ex__10932__auto__ = e12884;
var statearr_12885_13450 = state_12861;
(statearr_12885_13450[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12861[(4)]))){
var statearr_12886_13451 = state_12861;
(statearr_12886_13451[(1)] = cljs.core.first((state_12861[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12861;
state_12861 = G__13452;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12887 = f__10979__auto__();
(statearr_12887[(6)] = c__10978__auto___13439);

return statearr_12887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12889 = arguments.length;
switch (G__12889) {
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
var c__10978__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12927){
var state_val_12928 = (state_12927[(1)]);
if((state_val_12928 === (7))){
var inst_12923 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12929_13455 = state_12927__$1;
(statearr_12929_13455[(2)] = inst_12923);

(statearr_12929_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (1))){
var inst_12890 = (new Array(n));
var inst_12891 = inst_12890;
var inst_12892 = (0);
var state_12927__$1 = (function (){var statearr_12930 = state_12927;
(statearr_12930[(7)] = inst_12891);

(statearr_12930[(8)] = inst_12892);

return statearr_12930;
})();
var statearr_12931_13456 = state_12927__$1;
(statearr_12931_13456[(2)] = null);

(statearr_12931_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (4))){
var inst_12895 = (state_12927[(9)]);
var inst_12895__$1 = (state_12927[(2)]);
var inst_12896 = (inst_12895__$1 == null);
var inst_12897 = cljs.core.not(inst_12896);
var state_12927__$1 = (function (){var statearr_12932 = state_12927;
(statearr_12932[(9)] = inst_12895__$1);

return statearr_12932;
})();
if(inst_12897){
var statearr_12933_13457 = state_12927__$1;
(statearr_12933_13457[(1)] = (5));

} else {
var statearr_12934_13458 = state_12927__$1;
(statearr_12934_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (15))){
var inst_12917 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12935_13459 = state_12927__$1;
(statearr_12935_13459[(2)] = inst_12917);

(statearr_12935_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (13))){
var state_12927__$1 = state_12927;
var statearr_12936_13460 = state_12927__$1;
(statearr_12936_13460[(2)] = null);

(statearr_12936_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (6))){
var inst_12892 = (state_12927[(8)]);
var inst_12913 = (inst_12892 > (0));
var state_12927__$1 = state_12927;
if(cljs.core.truth_(inst_12913)){
var statearr_12937_13461 = state_12927__$1;
(statearr_12937_13461[(1)] = (12));

} else {
var statearr_12938_13462 = state_12927__$1;
(statearr_12938_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (3))){
var inst_12925 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12927__$1,inst_12925);
} else {
if((state_val_12928 === (12))){
var inst_12891 = (state_12927[(7)]);
var inst_12915 = cljs.core.vec(inst_12891);
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12927__$1,(15),out,inst_12915);
} else {
if((state_val_12928 === (2))){
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12927__$1,(4),ch);
} else {
if((state_val_12928 === (11))){
var inst_12907 = (state_12927[(2)]);
var inst_12908 = (new Array(n));
var inst_12891 = inst_12908;
var inst_12892 = (0);
var state_12927__$1 = (function (){var statearr_12939 = state_12927;
(statearr_12939[(7)] = inst_12891);

(statearr_12939[(8)] = inst_12892);

(statearr_12939[(10)] = inst_12907);

return statearr_12939;
})();
var statearr_12940_13463 = state_12927__$1;
(statearr_12940_13463[(2)] = null);

(statearr_12940_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (9))){
var inst_12891 = (state_12927[(7)]);
var inst_12905 = cljs.core.vec(inst_12891);
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12927__$1,(11),out,inst_12905);
} else {
if((state_val_12928 === (5))){
var inst_12900 = (state_12927[(11)]);
var inst_12895 = (state_12927[(9)]);
var inst_12891 = (state_12927[(7)]);
var inst_12892 = (state_12927[(8)]);
var inst_12899 = (inst_12891[inst_12892] = inst_12895);
var inst_12900__$1 = (inst_12892 + (1));
var inst_12901 = (inst_12900__$1 < n);
var state_12927__$1 = (function (){var statearr_12941 = state_12927;
(statearr_12941[(11)] = inst_12900__$1);

(statearr_12941[(12)] = inst_12899);

return statearr_12941;
})();
if(cljs.core.truth_(inst_12901)){
var statearr_12942_13464 = state_12927__$1;
(statearr_12942_13464[(1)] = (8));

} else {
var statearr_12943_13465 = state_12927__$1;
(statearr_12943_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (14))){
var inst_12920 = (state_12927[(2)]);
var inst_12921 = cljs.core.async.close_BANG_(out);
var state_12927__$1 = (function (){var statearr_12945 = state_12927;
(statearr_12945[(13)] = inst_12920);

return statearr_12945;
})();
var statearr_12946_13466 = state_12927__$1;
(statearr_12946_13466[(2)] = inst_12921);

(statearr_12946_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (10))){
var inst_12911 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12947_13467 = state_12927__$1;
(statearr_12947_13467[(2)] = inst_12911);

(statearr_12947_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (8))){
var inst_12900 = (state_12927[(11)]);
var inst_12891 = (state_12927[(7)]);
var tmp12944 = inst_12891;
var inst_12891__$1 = tmp12944;
var inst_12892 = inst_12900;
var state_12927__$1 = (function (){var statearr_12948 = state_12927;
(statearr_12948[(7)] = inst_12891__$1);

(statearr_12948[(8)] = inst_12892);

return statearr_12948;
})();
var statearr_12949_13468 = state_12927__$1;
(statearr_12949_13468[(2)] = null);

(statearr_12949_13468[(1)] = (2));


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
var statearr_12950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12950[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12950[(1)] = (1));

return statearr_12950;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12927){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12927);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12951){var ex__10932__auto__ = e12951;
var statearr_12952_13469 = state_12927;
(statearr_12952_13469[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12927[(4)]))){
var statearr_12953_13470 = state_12927;
(statearr_12953_13470[(1)] = cljs.core.first((state_12927[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12927;
state_12927 = G__13471;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12954 = f__10979__auto__();
(statearr_12954[(6)] = c__10978__auto___13454);

return statearr_12954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12956 = arguments.length;
switch (G__12956) {
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
var c__10978__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10928__auto__ = (function (state_12998){
var state_val_12999 = (state_12998[(1)]);
if((state_val_12999 === (7))){
var inst_12994 = (state_12998[(2)]);
var state_12998__$1 = state_12998;
var statearr_13000_13474 = state_12998__$1;
(statearr_13000_13474[(2)] = inst_12994);

(statearr_13000_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (1))){
var inst_12957 = [];
var inst_12958 = inst_12957;
var inst_12959 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12998__$1 = (function (){var statearr_13001 = state_12998;
(statearr_13001[(7)] = inst_12959);

(statearr_13001[(8)] = inst_12958);

return statearr_13001;
})();
var statearr_13002_13475 = state_12998__$1;
(statearr_13002_13475[(2)] = null);

(statearr_13002_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (4))){
var inst_12962 = (state_12998[(9)]);
var inst_12962__$1 = (state_12998[(2)]);
var inst_12963 = (inst_12962__$1 == null);
var inst_12964 = cljs.core.not(inst_12963);
var state_12998__$1 = (function (){var statearr_13003 = state_12998;
(statearr_13003[(9)] = inst_12962__$1);

return statearr_13003;
})();
if(inst_12964){
var statearr_13004_13476 = state_12998__$1;
(statearr_13004_13476[(1)] = (5));

} else {
var statearr_13005_13477 = state_12998__$1;
(statearr_13005_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (15))){
var inst_12988 = (state_12998[(2)]);
var state_12998__$1 = state_12998;
var statearr_13006_13478 = state_12998__$1;
(statearr_13006_13478[(2)] = inst_12988);

(statearr_13006_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (13))){
var state_12998__$1 = state_12998;
var statearr_13007_13479 = state_12998__$1;
(statearr_13007_13479[(2)] = null);

(statearr_13007_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (6))){
var inst_12958 = (state_12998[(8)]);
var inst_12983 = inst_12958.length;
var inst_12984 = (inst_12983 > (0));
var state_12998__$1 = state_12998;
if(cljs.core.truth_(inst_12984)){
var statearr_13008_13480 = state_12998__$1;
(statearr_13008_13480[(1)] = (12));

} else {
var statearr_13009_13481 = state_12998__$1;
(statearr_13009_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (3))){
var inst_12996 = (state_12998[(2)]);
var state_12998__$1 = state_12998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12998__$1,inst_12996);
} else {
if((state_val_12999 === (12))){
var inst_12958 = (state_12998[(8)]);
var inst_12986 = cljs.core.vec(inst_12958);
var state_12998__$1 = state_12998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12998__$1,(15),out,inst_12986);
} else {
if((state_val_12999 === (2))){
var state_12998__$1 = state_12998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12998__$1,(4),ch);
} else {
if((state_val_12999 === (11))){
var inst_12966 = (state_12998[(10)]);
var inst_12962 = (state_12998[(9)]);
var inst_12976 = (state_12998[(2)]);
var inst_12977 = [];
var inst_12978 = inst_12977.push(inst_12962);
var inst_12958 = inst_12977;
var inst_12959 = inst_12966;
var state_12998__$1 = (function (){var statearr_13010 = state_12998;
(statearr_13010[(7)] = inst_12959);

(statearr_13010[(11)] = inst_12978);

(statearr_13010[(8)] = inst_12958);

(statearr_13010[(12)] = inst_12976);

return statearr_13010;
})();
var statearr_13011_13482 = state_12998__$1;
(statearr_13011_13482[(2)] = null);

(statearr_13011_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (9))){
var inst_12958 = (state_12998[(8)]);
var inst_12974 = cljs.core.vec(inst_12958);
var state_12998__$1 = state_12998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12998__$1,(11),out,inst_12974);
} else {
if((state_val_12999 === (5))){
var inst_12966 = (state_12998[(10)]);
var inst_12959 = (state_12998[(7)]);
var inst_12962 = (state_12998[(9)]);
var inst_12966__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12962) : f.call(null,inst_12962));
var inst_12967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12966__$1,inst_12959);
var inst_12968 = cljs.core.keyword_identical_QMARK_(inst_12959,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12969 = ((inst_12967) || (inst_12968));
var state_12998__$1 = (function (){var statearr_13012 = state_12998;
(statearr_13012[(10)] = inst_12966__$1);

return statearr_13012;
})();
if(cljs.core.truth_(inst_12969)){
var statearr_13013_13483 = state_12998__$1;
(statearr_13013_13483[(1)] = (8));

} else {
var statearr_13014_13484 = state_12998__$1;
(statearr_13014_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (14))){
var inst_12991 = (state_12998[(2)]);
var inst_12992 = cljs.core.async.close_BANG_(out);
var state_12998__$1 = (function (){var statearr_13016 = state_12998;
(statearr_13016[(13)] = inst_12991);

return statearr_13016;
})();
var statearr_13017_13485 = state_12998__$1;
(statearr_13017_13485[(2)] = inst_12992);

(statearr_13017_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (10))){
var inst_12981 = (state_12998[(2)]);
var state_12998__$1 = state_12998;
var statearr_13018_13486 = state_12998__$1;
(statearr_13018_13486[(2)] = inst_12981);

(statearr_13018_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (8))){
var inst_12966 = (state_12998[(10)]);
var inst_12962 = (state_12998[(9)]);
var inst_12958 = (state_12998[(8)]);
var inst_12971 = inst_12958.push(inst_12962);
var tmp13015 = inst_12958;
var inst_12958__$1 = tmp13015;
var inst_12959 = inst_12966;
var state_12998__$1 = (function (){var statearr_13019 = state_12998;
(statearr_13019[(7)] = inst_12959);

(statearr_13019[(8)] = inst_12958__$1);

(statearr_13019[(14)] = inst_12971);

return statearr_13019;
})();
var statearr_13020_13487 = state_12998__$1;
(statearr_13020_13487[(2)] = null);

(statearr_13020_13487[(1)] = (2));


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
var statearr_13021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13021[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_13021[(1)] = (1));

return statearr_13021;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12998){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12998);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e13022){var ex__10932__auto__ = e13022;
var statearr_13023_13488 = state_12998;
(statearr_13023_13488[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12998[(4)]))){
var statearr_13024_13489 = state_12998;
(statearr_13024_13489[(1)] = cljs.core.first((state_12998[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12998;
state_12998 = G__13490;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_13025 = f__10979__auto__();
(statearr_13025[(6)] = c__10978__auto___13473);

return statearr_13025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
