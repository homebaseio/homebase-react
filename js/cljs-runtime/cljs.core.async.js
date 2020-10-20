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
var G__11063 = arguments.length;
switch (G__11063) {
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
var G__11066 = arguments.length;
switch (G__11066) {
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
var G__11084 = arguments.length;
switch (G__11084) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11110 = (function (flag,meta11111){
this.flag = flag;
this.meta11111 = meta11111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11112,meta11111__$1){
var self__ = this;
var _11112__$1 = this;
return (new cljs.core.async.t_cljs$core$async11110(self__.flag,meta11111__$1));
}));

(cljs.core.async.t_cljs$core$async11110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11112){
var self__ = this;
var _11112__$1 = this;
return self__.meta11111;
}));

(cljs.core.async.t_cljs$core$async11110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11111","meta11111",1655595393,null)], null);
}));

(cljs.core.async.t_cljs$core$async11110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11110");

(cljs.core.async.t_cljs$core$async11110.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11110.
 */
cljs.core.async.__GT_t_cljs$core$async11110 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11110(flag__$1,meta11111){
return (new cljs.core.async.t_cljs$core$async11110(flag__$1,meta11111));
});

}

return (new cljs.core.async.t_cljs$core$async11110(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11117 = (function (flag,cb,meta11118){
this.flag = flag;
this.cb = cb;
this.meta11118 = meta11118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11119,meta11118__$1){
var self__ = this;
var _11119__$1 = this;
return (new cljs.core.async.t_cljs$core$async11117(self__.flag,self__.cb,meta11118__$1));
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11119){
var self__ = this;
var _11119__$1 = this;
return self__.meta11118;
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11118","meta11118",-898052322,null)], null);
}));

(cljs.core.async.t_cljs$core$async11117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11117");

(cljs.core.async.t_cljs$core$async11117.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11117.
 */
cljs.core.async.__GT_t_cljs$core$async11117 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11117(flag__$1,cb__$1,meta11118){
return (new cljs.core.async.t_cljs$core$async11117(flag__$1,cb__$1,meta11118));
});

}

return (new cljs.core.async.t_cljs$core$async11117(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11126_SHARP_){
var G__11134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11126_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11134) : fret.call(null,G__11134));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11127_SHARP_){
var G__11135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11127_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11135) : fret.call(null,G__11135));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11150){
var map__11151 = p__11150;
var map__11151__$1 = (((((!((map__11151 == null))))?(((((map__11151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11151):map__11151);
var opts = map__11151__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11136){
var G__11137 = cljs.core.first(seq11136);
var seq11136__$1 = cljs.core.next(seq11136);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11137,seq11136__$1);
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
var G__11158 = arguments.length;
switch (G__11158) {
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
var c__10973__auto___13040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_11191){
var state_val_11192 = (state_11191[(1)]);
if((state_val_11192 === (7))){
var inst_11180 = (state_11191[(2)]);
var state_11191__$1 = state_11191;
var statearr_11194_13041 = state_11191__$1;
(statearr_11194_13041[(2)] = inst_11180);

(statearr_11194_13041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (1))){
var state_11191__$1 = state_11191;
var statearr_11195_13042 = state_11191__$1;
(statearr_11195_13042[(2)] = null);

(statearr_11195_13042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (4))){
var inst_11162 = (state_11191[(7)]);
var inst_11162__$1 = (state_11191[(2)]);
var inst_11164 = (inst_11162__$1 == null);
var state_11191__$1 = (function (){var statearr_11198 = state_11191;
(statearr_11198[(7)] = inst_11162__$1);

return statearr_11198;
})();
if(cljs.core.truth_(inst_11164)){
var statearr_11199_13043 = state_11191__$1;
(statearr_11199_13043[(1)] = (5));

} else {
var statearr_11200_13044 = state_11191__$1;
(statearr_11200_13044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (13))){
var state_11191__$1 = state_11191;
var statearr_11201_13045 = state_11191__$1;
(statearr_11201_13045[(2)] = null);

(statearr_11201_13045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (6))){
var inst_11162 = (state_11191[(7)]);
var state_11191__$1 = state_11191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11191__$1,(11),to,inst_11162);
} else {
if((state_val_11192 === (3))){
var inst_11182 = (state_11191[(2)]);
var state_11191__$1 = state_11191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11191__$1,inst_11182);
} else {
if((state_val_11192 === (12))){
var state_11191__$1 = state_11191;
var statearr_11214_13046 = state_11191__$1;
(statearr_11214_13046[(2)] = null);

(statearr_11214_13046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (2))){
var state_11191__$1 = state_11191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11191__$1,(4),from);
} else {
if((state_val_11192 === (11))){
var inst_11173 = (state_11191[(2)]);
var state_11191__$1 = state_11191;
if(cljs.core.truth_(inst_11173)){
var statearr_11215_13047 = state_11191__$1;
(statearr_11215_13047[(1)] = (12));

} else {
var statearr_11216_13048 = state_11191__$1;
(statearr_11216_13048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (9))){
var state_11191__$1 = state_11191;
var statearr_11217_13049 = state_11191__$1;
(statearr_11217_13049[(2)] = null);

(statearr_11217_13049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (5))){
var state_11191__$1 = state_11191;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11218_13050 = state_11191__$1;
(statearr_11218_13050[(1)] = (8));

} else {
var statearr_11219_13051 = state_11191__$1;
(statearr_11219_13051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (14))){
var inst_11178 = (state_11191[(2)]);
var state_11191__$1 = state_11191;
var statearr_11220_13052 = state_11191__$1;
(statearr_11220_13052[(2)] = inst_11178);

(statearr_11220_13052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (10))){
var inst_11170 = (state_11191[(2)]);
var state_11191__$1 = state_11191;
var statearr_11223_13053 = state_11191__$1;
(statearr_11223_13053[(2)] = inst_11170);

(statearr_11223_13053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11192 === (8))){
var inst_11167 = cljs.core.async.close_BANG_(to);
var state_11191__$1 = state_11191;
var statearr_11225_13054 = state_11191__$1;
(statearr_11225_13054[(2)] = inst_11167);

(statearr_11225_13054[(1)] = (10));


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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_11226 = [null,null,null,null,null,null,null,null];
(statearr_11226[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_11226[(1)] = (1));

return statearr_11226;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_11191){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11191);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11227){var ex__10915__auto__ = e11227;
var statearr_11228_13055 = state_11191;
(statearr_11228_13055[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11191[(4)]))){
var statearr_11229_13056 = state_11191;
(statearr_11229_13056[(1)] = cljs.core.first((state_11191[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13057 = state_11191;
state_11191 = G__13057;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_11191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_11191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11232 = f__10974__auto__();
(statearr_11232[(6)] = c__10973__auto___13040);

return statearr_11232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var process = (function (p__11239){
var vec__11240 = p__11239;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11240,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11240,(1),null);
var job = vec__11240;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10973__auto___13058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_11247){
var state_val_11248 = (state_11247[(1)]);
if((state_val_11248 === (1))){
var state_11247__$1 = state_11247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11247__$1,(2),res,v);
} else {
if((state_val_11248 === (2))){
var inst_11244 = (state_11247[(2)]);
var inst_11245 = cljs.core.async.close_BANG_(res);
var state_11247__$1 = (function (){var statearr_11249 = state_11247;
(statearr_11249[(7)] = inst_11244);

return statearr_11249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11247__$1,inst_11245);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0 = (function (){
var statearr_11255 = [null,null,null,null,null,null,null,null];
(statearr_11255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__);

(statearr_11255[(1)] = (1));

return statearr_11255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1 = (function (state_11247){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11247);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11256){var ex__10915__auto__ = e11256;
var statearr_11257_13059 = state_11247;
(statearr_11257_13059[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11247[(4)]))){
var statearr_11258_13060 = state_11247;
(statearr_11258_13060[(1)] = cljs.core.first((state_11247[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13061 = state_11247;
state_11247 = G__13061;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = function(state_11247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1.call(this,state_11247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11259 = f__10974__auto__();
(statearr_11259[(6)] = c__10973__auto___13058);

return statearr_11259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11260){
var vec__11261 = p__11260;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,(1),null);
var job = vec__11261;
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
var G__11264_13064 = type;
var G__11264_13065__$1 = (((G__11264_13064 instanceof cljs.core.Keyword))?G__11264_13064.fqn:null);
switch (G__11264_13065__$1) {
case "compute":
var c__10973__auto___13067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__10973__auto___13067,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = ((function (__13063,c__10973__auto___13067,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11277){
var state_val_11278 = (state_11277[(1)]);
if((state_val_11278 === (1))){
var state_11277__$1 = state_11277;
var statearr_11279_13068 = state_11277__$1;
(statearr_11279_13068[(2)] = null);

(statearr_11279_13068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (2))){
var state_11277__$1 = state_11277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11277__$1,(4),jobs);
} else {
if((state_val_11278 === (3))){
var inst_11275 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11277__$1,inst_11275);
} else {
if((state_val_11278 === (4))){
var inst_11267 = (state_11277[(2)]);
var inst_11268 = process(inst_11267);
var state_11277__$1 = state_11277;
if(cljs.core.truth_(inst_11268)){
var statearr_11280_13069 = state_11277__$1;
(statearr_11280_13069[(1)] = (5));

} else {
var statearr_11281_13070 = state_11277__$1;
(statearr_11281_13070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (5))){
var state_11277__$1 = state_11277;
var statearr_11282_13071 = state_11277__$1;
(statearr_11282_13071[(2)] = null);

(statearr_11282_13071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (6))){
var state_11277__$1 = state_11277;
var statearr_11283_13072 = state_11277__$1;
(statearr_11283_13072[(2)] = null);

(statearr_11283_13072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (7))){
var inst_11273 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11284_13073 = state_11277__$1;
(statearr_11284_13073[(2)] = inst_11273);

(statearr_11284_13073[(1)] = (3));


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
});})(__13063,c__10973__auto___13067,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10911__auto__,c__10973__auto___13067,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0 = (function (){
var statearr_11285 = [null,null,null,null,null,null,null];
(statearr_11285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__);

(statearr_11285[(1)] = (1));

return statearr_11285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1 = (function (state_11277){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11277);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11286){var ex__10915__auto__ = e11286;
var statearr_11287_13074 = state_11277;
(statearr_11287_13074[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11277[(4)]))){
var statearr_11288_13075 = state_11277;
(statearr_11288_13075[(1)] = cljs.core.first((state_11277[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13076 = state_11277;
state_11277 = G__13076;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = function(state_11277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1.call(this,state_11277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__;
})()
;})(__13063,switch__10911__auto__,c__10973__auto___13067,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__10975__auto__ = (function (){var statearr_11289 = f__10974__auto__();
(statearr_11289[(6)] = c__10973__auto___13067);

return statearr_11289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
});})(__13063,c__10973__auto___13067,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
case "async":
var c__10973__auto___13077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__10973__auto___13077,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = ((function (__13063,c__10973__auto___13077,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11302){
var state_val_11303 = (state_11302[(1)]);
if((state_val_11303 === (1))){
var state_11302__$1 = state_11302;
var statearr_11304_13078 = state_11302__$1;
(statearr_11304_13078[(2)] = null);

(statearr_11304_13078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (2))){
var state_11302__$1 = state_11302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11302__$1,(4),jobs);
} else {
if((state_val_11303 === (3))){
var inst_11300 = (state_11302[(2)]);
var state_11302__$1 = state_11302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11302__$1,inst_11300);
} else {
if((state_val_11303 === (4))){
var inst_11292 = (state_11302[(2)]);
var inst_11293 = async(inst_11292);
var state_11302__$1 = state_11302;
if(cljs.core.truth_(inst_11293)){
var statearr_11305_13079 = state_11302__$1;
(statearr_11305_13079[(1)] = (5));

} else {
var statearr_11306_13080 = state_11302__$1;
(statearr_11306_13080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (5))){
var state_11302__$1 = state_11302;
var statearr_11307_13081 = state_11302__$1;
(statearr_11307_13081[(2)] = null);

(statearr_11307_13081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (6))){
var state_11302__$1 = state_11302;
var statearr_11308_13082 = state_11302__$1;
(statearr_11308_13082[(2)] = null);

(statearr_11308_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (7))){
var inst_11298 = (state_11302[(2)]);
var state_11302__$1 = state_11302;
var statearr_11309_13083 = state_11302__$1;
(statearr_11309_13083[(2)] = inst_11298);

(statearr_11309_13083[(1)] = (3));


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
});})(__13063,c__10973__auto___13077,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10911__auto__,c__10973__auto___13077,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0 = (function (){
var statearr_11310 = [null,null,null,null,null,null,null];
(statearr_11310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__);

(statearr_11310[(1)] = (1));

return statearr_11310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1 = (function (state_11302){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11302);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11311){var ex__10915__auto__ = e11311;
var statearr_11312_13084 = state_11302;
(statearr_11312_13084[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11302[(4)]))){
var statearr_11313_13085 = state_11302;
(statearr_11313_13085[(1)] = cljs.core.first((state_11302[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13086 = state_11302;
state_11302 = G__13086;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = function(state_11302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1.call(this,state_11302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__;
})()
;})(__13063,switch__10911__auto__,c__10973__auto___13077,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__10975__auto__ = (function (){var statearr_11317 = f__10974__auto__();
(statearr_11317[(6)] = c__10973__auto___13077);

return statearr_11317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
});})(__13063,c__10973__auto___13077,G__11264_13064,G__11264_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11264_13065__$1)].join('')));

}

var G__13087 = (__13063 + (1));
__13063 = G__13087;
continue;
} else {
}
break;
}

var c__10973__auto___13088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_11339){
var state_val_11340 = (state_11339[(1)]);
if((state_val_11340 === (7))){
var inst_11335 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
var statearr_11342_13089 = state_11339__$1;
(statearr_11342_13089[(2)] = inst_11335);

(statearr_11342_13089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (1))){
var state_11339__$1 = state_11339;
var statearr_11343_13090 = state_11339__$1;
(statearr_11343_13090[(2)] = null);

(statearr_11343_13090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (4))){
var inst_11320 = (state_11339[(7)]);
var inst_11320__$1 = (state_11339[(2)]);
var inst_11321 = (inst_11320__$1 == null);
var state_11339__$1 = (function (){var statearr_11344 = state_11339;
(statearr_11344[(7)] = inst_11320__$1);

return statearr_11344;
})();
if(cljs.core.truth_(inst_11321)){
var statearr_11345_13091 = state_11339__$1;
(statearr_11345_13091[(1)] = (5));

} else {
var statearr_11346_13092 = state_11339__$1;
(statearr_11346_13092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (6))){
var inst_11320 = (state_11339[(7)]);
var inst_11325 = (state_11339[(8)]);
var inst_11325__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11327 = [inst_11320,inst_11325__$1];
var inst_11328 = (new cljs.core.PersistentVector(null,2,(5),inst_11326,inst_11327,null));
var state_11339__$1 = (function (){var statearr_11347 = state_11339;
(statearr_11347[(8)] = inst_11325__$1);

return statearr_11347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11339__$1,(8),jobs,inst_11328);
} else {
if((state_val_11340 === (3))){
var inst_11337 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11339__$1,inst_11337);
} else {
if((state_val_11340 === (2))){
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11339__$1,(4),from);
} else {
if((state_val_11340 === (9))){
var inst_11332 = (state_11339[(2)]);
var state_11339__$1 = (function (){var statearr_11348 = state_11339;
(statearr_11348[(9)] = inst_11332);

return statearr_11348;
})();
var statearr_11349_13093 = state_11339__$1;
(statearr_11349_13093[(2)] = null);

(statearr_11349_13093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (5))){
var inst_11323 = cljs.core.async.close_BANG_(jobs);
var state_11339__$1 = state_11339;
var statearr_11350_13094 = state_11339__$1;
(statearr_11350_13094[(2)] = inst_11323);

(statearr_11350_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (8))){
var inst_11325 = (state_11339[(8)]);
var inst_11330 = (state_11339[(2)]);
var state_11339__$1 = (function (){var statearr_11351 = state_11339;
(statearr_11351[(10)] = inst_11330);

return statearr_11351;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11339__$1,(9),results,inst_11325);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0 = (function (){
var statearr_11352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__);

(statearr_11352[(1)] = (1));

return statearr_11352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1 = (function (state_11339){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11339);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11353){var ex__10915__auto__ = e11353;
var statearr_11354_13095 = state_11339;
(statearr_11354_13095[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11339[(4)]))){
var statearr_11355_13096 = state_11339;
(statearr_11355_13096[(1)] = cljs.core.first((state_11339[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11339;
state_11339 = G__13097;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = function(state_11339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1.call(this,state_11339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11356 = f__10974__auto__();
(statearr_11356[(6)] = c__10973__auto___13088);

return statearr_11356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_11394){
var state_val_11395 = (state_11394[(1)]);
if((state_val_11395 === (7))){
var inst_11390 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11396_13098 = state_11394__$1;
(statearr_11396_13098[(2)] = inst_11390);

(statearr_11396_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (20))){
var state_11394__$1 = state_11394;
var statearr_11400_13099 = state_11394__$1;
(statearr_11400_13099[(2)] = null);

(statearr_11400_13099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (1))){
var state_11394__$1 = state_11394;
var statearr_11401_13100 = state_11394__$1;
(statearr_11401_13100[(2)] = null);

(statearr_11401_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (4))){
var inst_11359 = (state_11394[(7)]);
var inst_11359__$1 = (state_11394[(2)]);
var inst_11360 = (inst_11359__$1 == null);
var state_11394__$1 = (function (){var statearr_11402 = state_11394;
(statearr_11402[(7)] = inst_11359__$1);

return statearr_11402;
})();
if(cljs.core.truth_(inst_11360)){
var statearr_11403_13101 = state_11394__$1;
(statearr_11403_13101[(1)] = (5));

} else {
var statearr_11404_13102 = state_11394__$1;
(statearr_11404_13102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (15))){
var inst_11372 = (state_11394[(8)]);
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11394__$1,(18),to,inst_11372);
} else {
if((state_val_11395 === (21))){
var inst_11385 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11405_13103 = state_11394__$1;
(statearr_11405_13103[(2)] = inst_11385);

(statearr_11405_13103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (13))){
var inst_11387 = (state_11394[(2)]);
var state_11394__$1 = (function (){var statearr_11406 = state_11394;
(statearr_11406[(9)] = inst_11387);

return statearr_11406;
})();
var statearr_11407_13104 = state_11394__$1;
(statearr_11407_13104[(2)] = null);

(statearr_11407_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (6))){
var inst_11359 = (state_11394[(7)]);
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11394__$1,(11),inst_11359);
} else {
if((state_val_11395 === (17))){
var inst_11380 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
if(cljs.core.truth_(inst_11380)){
var statearr_11408_13105 = state_11394__$1;
(statearr_11408_13105[(1)] = (19));

} else {
var statearr_11409_13106 = state_11394__$1;
(statearr_11409_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (3))){
var inst_11392 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11394__$1,inst_11392);
} else {
if((state_val_11395 === (12))){
var inst_11369 = (state_11394[(10)]);
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11394__$1,(14),inst_11369);
} else {
if((state_val_11395 === (2))){
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11394__$1,(4),results);
} else {
if((state_val_11395 === (19))){
var state_11394__$1 = state_11394;
var statearr_11410_13107 = state_11394__$1;
(statearr_11410_13107[(2)] = null);

(statearr_11410_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (11))){
var inst_11369 = (state_11394[(2)]);
var state_11394__$1 = (function (){var statearr_11411 = state_11394;
(statearr_11411[(10)] = inst_11369);

return statearr_11411;
})();
var statearr_11412_13108 = state_11394__$1;
(statearr_11412_13108[(2)] = null);

(statearr_11412_13108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (9))){
var state_11394__$1 = state_11394;
var statearr_11413_13109 = state_11394__$1;
(statearr_11413_13109[(2)] = null);

(statearr_11413_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (5))){
var state_11394__$1 = state_11394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11414_13110 = state_11394__$1;
(statearr_11414_13110[(1)] = (8));

} else {
var statearr_11415_13111 = state_11394__$1;
(statearr_11415_13111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (14))){
var inst_11372 = (state_11394[(8)]);
var inst_11372__$1 = (state_11394[(2)]);
var inst_11373 = (inst_11372__$1 == null);
var inst_11374 = cljs.core.not(inst_11373);
var state_11394__$1 = (function (){var statearr_11416 = state_11394;
(statearr_11416[(8)] = inst_11372__$1);

return statearr_11416;
})();
if(inst_11374){
var statearr_11417_13112 = state_11394__$1;
(statearr_11417_13112[(1)] = (15));

} else {
var statearr_11418_13113 = state_11394__$1;
(statearr_11418_13113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (16))){
var state_11394__$1 = state_11394;
var statearr_11419_13114 = state_11394__$1;
(statearr_11419_13114[(2)] = false);

(statearr_11419_13114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (10))){
var inst_11366 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11420_13115 = state_11394__$1;
(statearr_11420_13115[(2)] = inst_11366);

(statearr_11420_13115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (18))){
var inst_11377 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11421_13116 = state_11394__$1;
(statearr_11421_13116[(2)] = inst_11377);

(statearr_11421_13116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (8))){
var inst_11363 = cljs.core.async.close_BANG_(to);
var state_11394__$1 = state_11394;
var statearr_11422_13117 = state_11394__$1;
(statearr_11422_13117[(2)] = inst_11363);

(statearr_11422_13117[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0 = (function (){
var statearr_11423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__);

(statearr_11423[(1)] = (1));

return statearr_11423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1 = (function (state_11394){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11394);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11424){var ex__10915__auto__ = e11424;
var statearr_11425_13118 = state_11394;
(statearr_11425_13118[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11394[(4)]))){
var statearr_11426_13119 = state_11394;
(statearr_11426_13119[(1)] = cljs.core.first((state_11394[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11394;
state_11394 = G__13120;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__ = function(state_11394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1.call(this,state_11394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11427 = f__10974__auto__();
(statearr_11427[(6)] = c__10973__auto__);

return statearr_11427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
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
var G__11430 = arguments.length;
switch (G__11430) {
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
var G__11432 = arguments.length;
switch (G__11432) {
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
var G__11446 = arguments.length;
switch (G__11446) {
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
var c__10973__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_11472){
var state_val_11473 = (state_11472[(1)]);
if((state_val_11473 === (7))){
var inst_11468 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
var statearr_11474_13125 = state_11472__$1;
(statearr_11474_13125[(2)] = inst_11468);

(statearr_11474_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (1))){
var state_11472__$1 = state_11472;
var statearr_11475_13126 = state_11472__$1;
(statearr_11475_13126[(2)] = null);

(statearr_11475_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (4))){
var inst_11449 = (state_11472[(7)]);
var inst_11449__$1 = (state_11472[(2)]);
var inst_11450 = (inst_11449__$1 == null);
var state_11472__$1 = (function (){var statearr_11476 = state_11472;
(statearr_11476[(7)] = inst_11449__$1);

return statearr_11476;
})();
if(cljs.core.truth_(inst_11450)){
var statearr_11477_13127 = state_11472__$1;
(statearr_11477_13127[(1)] = (5));

} else {
var statearr_11478_13128 = state_11472__$1;
(statearr_11478_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (13))){
var state_11472__$1 = state_11472;
var statearr_11479_13129 = state_11472__$1;
(statearr_11479_13129[(2)] = null);

(statearr_11479_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (6))){
var inst_11449 = (state_11472[(7)]);
var inst_11455 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11449) : p.call(null,inst_11449));
var state_11472__$1 = state_11472;
if(cljs.core.truth_(inst_11455)){
var statearr_11480_13130 = state_11472__$1;
(statearr_11480_13130[(1)] = (9));

} else {
var statearr_11481_13131 = state_11472__$1;
(statearr_11481_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (3))){
var inst_11470 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11472__$1,inst_11470);
} else {
if((state_val_11473 === (12))){
var state_11472__$1 = state_11472;
var statearr_11482_13132 = state_11472__$1;
(statearr_11482_13132[(2)] = null);

(statearr_11482_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (2))){
var state_11472__$1 = state_11472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11472__$1,(4),ch);
} else {
if((state_val_11473 === (11))){
var inst_11449 = (state_11472[(7)]);
var inst_11459 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11472__$1,(8),inst_11459,inst_11449);
} else {
if((state_val_11473 === (9))){
var state_11472__$1 = state_11472;
var statearr_11485_13133 = state_11472__$1;
(statearr_11485_13133[(2)] = tc);

(statearr_11485_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (5))){
var inst_11452 = cljs.core.async.close_BANG_(tc);
var inst_11453 = cljs.core.async.close_BANG_(fc);
var state_11472__$1 = (function (){var statearr_11486 = state_11472;
(statearr_11486[(8)] = inst_11452);

return statearr_11486;
})();
var statearr_11487_13134 = state_11472__$1;
(statearr_11487_13134[(2)] = inst_11453);

(statearr_11487_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (14))){
var inst_11466 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
var statearr_11488_13135 = state_11472__$1;
(statearr_11488_13135[(2)] = inst_11466);

(statearr_11488_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (10))){
var state_11472__$1 = state_11472;
var statearr_11489_13136 = state_11472__$1;
(statearr_11489_13136[(2)] = fc);

(statearr_11489_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (8))){
var inst_11461 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
if(cljs.core.truth_(inst_11461)){
var statearr_11490_13137 = state_11472__$1;
(statearr_11490_13137[(1)] = (12));

} else {
var statearr_11491_13138 = state_11472__$1;
(statearr_11491_13138[(1)] = (13));

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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_11492 = [null,null,null,null,null,null,null,null,null];
(statearr_11492[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_11492[(1)] = (1));

return statearr_11492;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_11472){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11472);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11493){var ex__10915__auto__ = e11493;
var statearr_11494_13139 = state_11472;
(statearr_11494_13139[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11472[(4)]))){
var statearr_11495_13140 = state_11472;
(statearr_11495_13140[(1)] = cljs.core.first((state_11472[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11472;
state_11472 = G__13141;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_11472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_11472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11496 = f__10974__auto__();
(statearr_11496[(6)] = c__10973__auto___13124);

return statearr_11496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_11518){
var state_val_11519 = (state_11518[(1)]);
if((state_val_11519 === (7))){
var inst_11514 = (state_11518[(2)]);
var state_11518__$1 = state_11518;
var statearr_11546_13142 = state_11518__$1;
(statearr_11546_13142[(2)] = inst_11514);

(statearr_11546_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11519 === (1))){
var inst_11497 = init;
var inst_11498 = inst_11497;
var state_11518__$1 = (function (){var statearr_11547 = state_11518;
(statearr_11547[(7)] = inst_11498);

return statearr_11547;
})();
var statearr_11548_13143 = state_11518__$1;
(statearr_11548_13143[(2)] = null);

(statearr_11548_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11519 === (4))){
var inst_11501 = (state_11518[(8)]);
var inst_11501__$1 = (state_11518[(2)]);
var inst_11502 = (inst_11501__$1 == null);
var state_11518__$1 = (function (){var statearr_11549 = state_11518;
(statearr_11549[(8)] = inst_11501__$1);

return statearr_11549;
})();
if(cljs.core.truth_(inst_11502)){
var statearr_11550_13144 = state_11518__$1;
(statearr_11550_13144[(1)] = (5));

} else {
var statearr_11551_13145 = state_11518__$1;
(statearr_11551_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11519 === (6))){
var inst_11501 = (state_11518[(8)]);
var inst_11505 = (state_11518[(9)]);
var inst_11498 = (state_11518[(7)]);
var inst_11505__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11498,inst_11501) : f.call(null,inst_11498,inst_11501));
var inst_11506 = cljs.core.reduced_QMARK_(inst_11505__$1);
var state_11518__$1 = (function (){var statearr_11552 = state_11518;
(statearr_11552[(9)] = inst_11505__$1);

return statearr_11552;
})();
if(inst_11506){
var statearr_11553_13146 = state_11518__$1;
(statearr_11553_13146[(1)] = (8));

} else {
var statearr_11554_13147 = state_11518__$1;
(statearr_11554_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11519 === (3))){
var inst_11516 = (state_11518[(2)]);
var state_11518__$1 = state_11518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11518__$1,inst_11516);
} else {
if((state_val_11519 === (2))){
var state_11518__$1 = state_11518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11518__$1,(4),ch);
} else {
if((state_val_11519 === (9))){
var inst_11505 = (state_11518[(9)]);
var inst_11498 = inst_11505;
var state_11518__$1 = (function (){var statearr_11555 = state_11518;
(statearr_11555[(7)] = inst_11498);

return statearr_11555;
})();
var statearr_11556_13148 = state_11518__$1;
(statearr_11556_13148[(2)] = null);

(statearr_11556_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11519 === (5))){
var inst_11498 = (state_11518[(7)]);
var state_11518__$1 = state_11518;
var statearr_11557_13149 = state_11518__$1;
(statearr_11557_13149[(2)] = inst_11498);

(statearr_11557_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11519 === (10))){
var inst_11512 = (state_11518[(2)]);
var state_11518__$1 = state_11518;
var statearr_11558_13150 = state_11518__$1;
(statearr_11558_13150[(2)] = inst_11512);

(statearr_11558_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11519 === (8))){
var inst_11505 = (state_11518[(9)]);
var inst_11508 = cljs.core.deref(inst_11505);
var state_11518__$1 = state_11518;
var statearr_11559_13151 = state_11518__$1;
(statearr_11559_13151[(2)] = inst_11508);

(statearr_11559_13151[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10912__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10912__auto____0 = (function (){
var statearr_11562 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11562[(0)] = cljs$core$async$reduce_$_state_machine__10912__auto__);

(statearr_11562[(1)] = (1));

return statearr_11562;
});
var cljs$core$async$reduce_$_state_machine__10912__auto____1 = (function (state_11518){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11518);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11566){var ex__10915__auto__ = e11566;
var statearr_11567_13152 = state_11518;
(statearr_11567_13152[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11518[(4)]))){
var statearr_11568_13153 = state_11518;
(statearr_11568_13153[(1)] = cljs.core.first((state_11518[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11518;
state_11518 = G__13154;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10912__auto__ = function(state_11518){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10912__auto____1.call(this,state_11518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10912__auto____0;
cljs$core$async$reduce_$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10912__auto____1;
return cljs$core$async$reduce_$_state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11571 = f__10974__auto__();
(statearr_11571[(6)] = c__10973__auto__);

return statearr_11571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_11579){
var state_val_11580 = (state_11579[(1)]);
if((state_val_11580 === (1))){
var inst_11574 = cljs.core.async.reduce(f__$1,init,ch);
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11579__$1,(2),inst_11574);
} else {
if((state_val_11580 === (2))){
var inst_11576 = (state_11579[(2)]);
var inst_11577 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11576) : f__$1.call(null,inst_11576));
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11579__$1,inst_11577);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10912__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10912__auto____0 = (function (){
var statearr_11581 = [null,null,null,null,null,null,null];
(statearr_11581[(0)] = cljs$core$async$transduce_$_state_machine__10912__auto__);

(statearr_11581[(1)] = (1));

return statearr_11581;
});
var cljs$core$async$transduce_$_state_machine__10912__auto____1 = (function (state_11579){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11579);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11582){var ex__10915__auto__ = e11582;
var statearr_11583_13155 = state_11579;
(statearr_11583_13155[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11579[(4)]))){
var statearr_11584_13156 = state_11579;
(statearr_11584_13156[(1)] = cljs.core.first((state_11579[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11579;
state_11579 = G__13157;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10912__auto__ = function(state_11579){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10912__auto____1.call(this,state_11579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10912__auto____0;
cljs$core$async$transduce_$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10912__auto____1;
return cljs$core$async$transduce_$_state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11585 = f__10974__auto__();
(statearr_11585[(6)] = c__10973__auto__);

return statearr_11585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
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
var G__11587 = arguments.length;
switch (G__11587) {
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
var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_11614){
var state_val_11615 = (state_11614[(1)]);
if((state_val_11615 === (7))){
var inst_11596 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
var statearr_11617_13159 = state_11614__$1;
(statearr_11617_13159[(2)] = inst_11596);

(statearr_11617_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (1))){
var inst_11590 = cljs.core.seq(coll);
var inst_11591 = inst_11590;
var state_11614__$1 = (function (){var statearr_11620 = state_11614;
(statearr_11620[(7)] = inst_11591);

return statearr_11620;
})();
var statearr_11621_13160 = state_11614__$1;
(statearr_11621_13160[(2)] = null);

(statearr_11621_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (4))){
var inst_11591 = (state_11614[(7)]);
var inst_11594 = cljs.core.first(inst_11591);
var state_11614__$1 = state_11614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11614__$1,(7),ch,inst_11594);
} else {
if((state_val_11615 === (13))){
var inst_11608 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
var statearr_11623_13161 = state_11614__$1;
(statearr_11623_13161[(2)] = inst_11608);

(statearr_11623_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (6))){
var inst_11599 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
if(cljs.core.truth_(inst_11599)){
var statearr_11626_13162 = state_11614__$1;
(statearr_11626_13162[(1)] = (8));

} else {
var statearr_11627_13163 = state_11614__$1;
(statearr_11627_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (3))){
var inst_11612 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11614__$1,inst_11612);
} else {
if((state_val_11615 === (12))){
var state_11614__$1 = state_11614;
var statearr_11628_13164 = state_11614__$1;
(statearr_11628_13164[(2)] = null);

(statearr_11628_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (2))){
var inst_11591 = (state_11614[(7)]);
var state_11614__$1 = state_11614;
if(cljs.core.truth_(inst_11591)){
var statearr_11629_13165 = state_11614__$1;
(statearr_11629_13165[(1)] = (4));

} else {
var statearr_11630_13166 = state_11614__$1;
(statearr_11630_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (11))){
var inst_11605 = cljs.core.async.close_BANG_(ch);
var state_11614__$1 = state_11614;
var statearr_11645_13167 = state_11614__$1;
(statearr_11645_13167[(2)] = inst_11605);

(statearr_11645_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (9))){
var state_11614__$1 = state_11614;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11646_13168 = state_11614__$1;
(statearr_11646_13168[(1)] = (11));

} else {
var statearr_11647_13169 = state_11614__$1;
(statearr_11647_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (5))){
var inst_11591 = (state_11614[(7)]);
var state_11614__$1 = state_11614;
var statearr_11648_13170 = state_11614__$1;
(statearr_11648_13170[(2)] = inst_11591);

(statearr_11648_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (10))){
var inst_11610 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
var statearr_11649_13171 = state_11614__$1;
(statearr_11649_13171[(2)] = inst_11610);

(statearr_11649_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (8))){
var inst_11591 = (state_11614[(7)]);
var inst_11601 = cljs.core.next(inst_11591);
var inst_11591__$1 = inst_11601;
var state_11614__$1 = (function (){var statearr_11651 = state_11614;
(statearr_11651[(7)] = inst_11591__$1);

return statearr_11651;
})();
var statearr_11652_13172 = state_11614__$1;
(statearr_11652_13172[(2)] = null);

(statearr_11652_13172[(1)] = (2));


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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_11653 = [null,null,null,null,null,null,null,null];
(statearr_11653[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_11653[(1)] = (1));

return statearr_11653;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_11614){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11614);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e11654){var ex__10915__auto__ = e11654;
var statearr_11655_13173 = state_11614;
(statearr_11655_13173[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11614[(4)]))){
var statearr_11656_13174 = state_11614;
(statearr_11656_13174[(1)] = cljs.core.first((state_11614[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11614;
state_11614 = G__13175;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_11614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_11614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11657 = f__10974__auto__();
(statearr_11657[(6)] = c__10973__auto__);

return statearr_11657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
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
var G__11669 = arguments.length;
switch (G__11669) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11713 = (function (ch,cs,meta11714){
this.ch = ch;
this.cs = cs;
this.meta11714 = meta11714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11715,meta11714__$1){
var self__ = this;
var _11715__$1 = this;
return (new cljs.core.async.t_cljs$core$async11713(self__.ch,self__.cs,meta11714__$1));
}));

(cljs.core.async.t_cljs$core$async11713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11715){
var self__ = this;
var _11715__$1 = this;
return self__.meta11714;
}));

(cljs.core.async.t_cljs$core$async11713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11713.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11713.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11713.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11713.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11714","meta11714",1577212427,null)], null);
}));

(cljs.core.async.t_cljs$core$async11713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11713");

(cljs.core.async.t_cljs$core$async11713.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11713.
 */
cljs.core.async.__GT_t_cljs$core$async11713 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11713(ch__$1,cs__$1,meta11714){
return (new cljs.core.async.t_cljs$core$async11713(ch__$1,cs__$1,meta11714));
});

}

return (new cljs.core.async.t_cljs$core$async11713(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10973__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_11859){
var state_val_11860 = (state_11859[(1)]);
if((state_val_11860 === (7))){
var inst_11855 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
var statearr_11861_13182 = state_11859__$1;
(statearr_11861_13182[(2)] = inst_11855);

(statearr_11861_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (20))){
var inst_11757 = (state_11859[(7)]);
var inst_11769 = cljs.core.first(inst_11757);
var inst_11770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11769,(0),null);
var inst_11771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11769,(1),null);
var state_11859__$1 = (function (){var statearr_11862 = state_11859;
(statearr_11862[(8)] = inst_11770);

return statearr_11862;
})();
if(cljs.core.truth_(inst_11771)){
var statearr_11863_13183 = state_11859__$1;
(statearr_11863_13183[(1)] = (22));

} else {
var statearr_11864_13184 = state_11859__$1;
(statearr_11864_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (27))){
var inst_11806 = (state_11859[(9)]);
var inst_11718 = (state_11859[(10)]);
var inst_11801 = (state_11859[(11)]);
var inst_11799 = (state_11859[(12)]);
var inst_11806__$1 = cljs.core._nth(inst_11799,inst_11801);
var inst_11807 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11806__$1,inst_11718,done);
var state_11859__$1 = (function (){var statearr_11865 = state_11859;
(statearr_11865[(9)] = inst_11806__$1);

return statearr_11865;
})();
if(cljs.core.truth_(inst_11807)){
var statearr_11866_13185 = state_11859__$1;
(statearr_11866_13185[(1)] = (30));

} else {
var statearr_11867_13186 = state_11859__$1;
(statearr_11867_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (1))){
var state_11859__$1 = state_11859;
var statearr_11868_13187 = state_11859__$1;
(statearr_11868_13187[(2)] = null);

(statearr_11868_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (24))){
var inst_11757 = (state_11859[(7)]);
var inst_11776 = (state_11859[(2)]);
var inst_11777 = cljs.core.next(inst_11757);
var inst_11735 = inst_11777;
var inst_11736 = null;
var inst_11737 = (0);
var inst_11738 = (0);
var state_11859__$1 = (function (){var statearr_11869 = state_11859;
(statearr_11869[(13)] = inst_11735);

(statearr_11869[(14)] = inst_11737);

(statearr_11869[(15)] = inst_11736);

(statearr_11869[(16)] = inst_11738);

(statearr_11869[(17)] = inst_11776);

return statearr_11869;
})();
var statearr_11870_13188 = state_11859__$1;
(statearr_11870_13188[(2)] = null);

(statearr_11870_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (39))){
var state_11859__$1 = state_11859;
var statearr_11874_13189 = state_11859__$1;
(statearr_11874_13189[(2)] = null);

(statearr_11874_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (4))){
var inst_11718 = (state_11859[(10)]);
var inst_11718__$1 = (state_11859[(2)]);
var inst_11719 = (inst_11718__$1 == null);
var state_11859__$1 = (function (){var statearr_11875 = state_11859;
(statearr_11875[(10)] = inst_11718__$1);

return statearr_11875;
})();
if(cljs.core.truth_(inst_11719)){
var statearr_11876_13190 = state_11859__$1;
(statearr_11876_13190[(1)] = (5));

} else {
var statearr_11877_13191 = state_11859__$1;
(statearr_11877_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (15))){
var inst_11735 = (state_11859[(13)]);
var inst_11737 = (state_11859[(14)]);
var inst_11736 = (state_11859[(15)]);
var inst_11738 = (state_11859[(16)]);
var inst_11753 = (state_11859[(2)]);
var inst_11754 = (inst_11738 + (1));
var tmp11871 = inst_11735;
var tmp11872 = inst_11737;
var tmp11873 = inst_11736;
var inst_11735__$1 = tmp11871;
var inst_11736__$1 = tmp11873;
var inst_11737__$1 = tmp11872;
var inst_11738__$1 = inst_11754;
var state_11859__$1 = (function (){var statearr_11878 = state_11859;
(statearr_11878[(13)] = inst_11735__$1);

(statearr_11878[(14)] = inst_11737__$1);

(statearr_11878[(15)] = inst_11736__$1);

(statearr_11878[(16)] = inst_11738__$1);

(statearr_11878[(18)] = inst_11753);

return statearr_11878;
})();
var statearr_11879_13192 = state_11859__$1;
(statearr_11879_13192[(2)] = null);

(statearr_11879_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (21))){
var inst_11780 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
var statearr_11883_13193 = state_11859__$1;
(statearr_11883_13193[(2)] = inst_11780);

(statearr_11883_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (31))){
var inst_11806 = (state_11859[(9)]);
var inst_11810 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11806);
var state_11859__$1 = state_11859;
var statearr_11884_13194 = state_11859__$1;
(statearr_11884_13194[(2)] = inst_11810);

(statearr_11884_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (32))){
var inst_11801 = (state_11859[(11)]);
var inst_11799 = (state_11859[(12)]);
var inst_11800 = (state_11859[(19)]);
var inst_11798 = (state_11859[(20)]);
var inst_11812 = (state_11859[(2)]);
var inst_11813 = (inst_11801 + (1));
var tmp11880 = inst_11799;
var tmp11881 = inst_11800;
var tmp11882 = inst_11798;
var inst_11798__$1 = tmp11882;
var inst_11799__$1 = tmp11880;
var inst_11800__$1 = tmp11881;
var inst_11801__$1 = inst_11813;
var state_11859__$1 = (function (){var statearr_11890 = state_11859;
(statearr_11890[(21)] = inst_11812);

(statearr_11890[(11)] = inst_11801__$1);

(statearr_11890[(12)] = inst_11799__$1);

(statearr_11890[(19)] = inst_11800__$1);

(statearr_11890[(20)] = inst_11798__$1);

return statearr_11890;
})();
var statearr_11891_13195 = state_11859__$1;
(statearr_11891_13195[(2)] = null);

(statearr_11891_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (40))){
var inst_11825 = (state_11859[(22)]);
var inst_11829 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11825);
var state_11859__$1 = state_11859;
var statearr_11892_13196 = state_11859__$1;
(statearr_11892_13196[(2)] = inst_11829);

(statearr_11892_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (33))){
var inst_11816 = (state_11859[(23)]);
var inst_11818 = cljs.core.chunked_seq_QMARK_(inst_11816);
var state_11859__$1 = state_11859;
if(inst_11818){
var statearr_11894_13197 = state_11859__$1;
(statearr_11894_13197[(1)] = (36));

} else {
var statearr_11895_13198 = state_11859__$1;
(statearr_11895_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (13))){
var inst_11747 = (state_11859[(24)]);
var inst_11750 = cljs.core.async.close_BANG_(inst_11747);
var state_11859__$1 = state_11859;
var statearr_11896_13199 = state_11859__$1;
(statearr_11896_13199[(2)] = inst_11750);

(statearr_11896_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (22))){
var inst_11770 = (state_11859[(8)]);
var inst_11773 = cljs.core.async.close_BANG_(inst_11770);
var state_11859__$1 = state_11859;
var statearr_11897_13200 = state_11859__$1;
(statearr_11897_13200[(2)] = inst_11773);

(statearr_11897_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (36))){
var inst_11816 = (state_11859[(23)]);
var inst_11820 = cljs.core.chunk_first(inst_11816);
var inst_11821 = cljs.core.chunk_rest(inst_11816);
var inst_11822 = cljs.core.count(inst_11820);
var inst_11798 = inst_11821;
var inst_11799 = inst_11820;
var inst_11800 = inst_11822;
var inst_11801 = (0);
var state_11859__$1 = (function (){var statearr_11899 = state_11859;
(statearr_11899[(11)] = inst_11801);

(statearr_11899[(12)] = inst_11799);

(statearr_11899[(19)] = inst_11800);

(statearr_11899[(20)] = inst_11798);

return statearr_11899;
})();
var statearr_11900_13201 = state_11859__$1;
(statearr_11900_13201[(2)] = null);

(statearr_11900_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (41))){
var inst_11816 = (state_11859[(23)]);
var inst_11831 = (state_11859[(2)]);
var inst_11832 = cljs.core.next(inst_11816);
var inst_11798 = inst_11832;
var inst_11799 = null;
var inst_11800 = (0);
var inst_11801 = (0);
var state_11859__$1 = (function (){var statearr_11901 = state_11859;
(statearr_11901[(11)] = inst_11801);

(statearr_11901[(12)] = inst_11799);

(statearr_11901[(19)] = inst_11800);

(statearr_11901[(25)] = inst_11831);

(statearr_11901[(20)] = inst_11798);

return statearr_11901;
})();
var statearr_11902_13202 = state_11859__$1;
(statearr_11902_13202[(2)] = null);

(statearr_11902_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (43))){
var state_11859__$1 = state_11859;
var statearr_11903_13203 = state_11859__$1;
(statearr_11903_13203[(2)] = null);

(statearr_11903_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (29))){
var inst_11840 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
var statearr_11904_13204 = state_11859__$1;
(statearr_11904_13204[(2)] = inst_11840);

(statearr_11904_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (44))){
var inst_11852 = (state_11859[(2)]);
var state_11859__$1 = (function (){var statearr_11917 = state_11859;
(statearr_11917[(26)] = inst_11852);

return statearr_11917;
})();
var statearr_11919_13205 = state_11859__$1;
(statearr_11919_13205[(2)] = null);

(statearr_11919_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (6))){
var inst_11790 = (state_11859[(27)]);
var inst_11789 = cljs.core.deref(cs);
var inst_11790__$1 = cljs.core.keys(inst_11789);
var inst_11791 = cljs.core.count(inst_11790__$1);
var inst_11792 = cljs.core.reset_BANG_(dctr,inst_11791);
var inst_11797 = cljs.core.seq(inst_11790__$1);
var inst_11798 = inst_11797;
var inst_11799 = null;
var inst_11800 = (0);
var inst_11801 = (0);
var state_11859__$1 = (function (){var statearr_11922 = state_11859;
(statearr_11922[(11)] = inst_11801);

(statearr_11922[(28)] = inst_11792);

(statearr_11922[(12)] = inst_11799);

(statearr_11922[(19)] = inst_11800);

(statearr_11922[(20)] = inst_11798);

(statearr_11922[(27)] = inst_11790__$1);

return statearr_11922;
})();
var statearr_11925_13206 = state_11859__$1;
(statearr_11925_13206[(2)] = null);

(statearr_11925_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (28))){
var inst_11816 = (state_11859[(23)]);
var inst_11798 = (state_11859[(20)]);
var inst_11816__$1 = cljs.core.seq(inst_11798);
var state_11859__$1 = (function (){var statearr_11927 = state_11859;
(statearr_11927[(23)] = inst_11816__$1);

return statearr_11927;
})();
if(inst_11816__$1){
var statearr_11928_13207 = state_11859__$1;
(statearr_11928_13207[(1)] = (33));

} else {
var statearr_11929_13208 = state_11859__$1;
(statearr_11929_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (25))){
var inst_11801 = (state_11859[(11)]);
var inst_11800 = (state_11859[(19)]);
var inst_11803 = (inst_11801 < inst_11800);
var inst_11804 = inst_11803;
var state_11859__$1 = state_11859;
if(cljs.core.truth_(inst_11804)){
var statearr_11930_13209 = state_11859__$1;
(statearr_11930_13209[(1)] = (27));

} else {
var statearr_11931_13210 = state_11859__$1;
(statearr_11931_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (34))){
var state_11859__$1 = state_11859;
var statearr_11948_13211 = state_11859__$1;
(statearr_11948_13211[(2)] = null);

(statearr_11948_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (17))){
var state_11859__$1 = state_11859;
var statearr_11949_13212 = state_11859__$1;
(statearr_11949_13212[(2)] = null);

(statearr_11949_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (3))){
var inst_11857 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11859__$1,inst_11857);
} else {
if((state_val_11860 === (12))){
var inst_11785 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
var statearr_11950_13213 = state_11859__$1;
(statearr_11950_13213[(2)] = inst_11785);

(statearr_11950_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (2))){
var state_11859__$1 = state_11859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11859__$1,(4),ch);
} else {
if((state_val_11860 === (23))){
var state_11859__$1 = state_11859;
var statearr_11951_13214 = state_11859__$1;
(statearr_11951_13214[(2)] = null);

(statearr_11951_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (35))){
var inst_11838 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
var statearr_11952_13215 = state_11859__$1;
(statearr_11952_13215[(2)] = inst_11838);

(statearr_11952_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (19))){
var inst_11757 = (state_11859[(7)]);
var inst_11761 = cljs.core.chunk_first(inst_11757);
var inst_11762 = cljs.core.chunk_rest(inst_11757);
var inst_11763 = cljs.core.count(inst_11761);
var inst_11735 = inst_11762;
var inst_11736 = inst_11761;
var inst_11737 = inst_11763;
var inst_11738 = (0);
var state_11859__$1 = (function (){var statearr_11953 = state_11859;
(statearr_11953[(13)] = inst_11735);

(statearr_11953[(14)] = inst_11737);

(statearr_11953[(15)] = inst_11736);

(statearr_11953[(16)] = inst_11738);

return statearr_11953;
})();
var statearr_11954_13216 = state_11859__$1;
(statearr_11954_13216[(2)] = null);

(statearr_11954_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (11))){
var inst_11735 = (state_11859[(13)]);
var inst_11757 = (state_11859[(7)]);
var inst_11757__$1 = cljs.core.seq(inst_11735);
var state_11859__$1 = (function (){var statearr_11955 = state_11859;
(statearr_11955[(7)] = inst_11757__$1);

return statearr_11955;
})();
if(inst_11757__$1){
var statearr_11956_13217 = state_11859__$1;
(statearr_11956_13217[(1)] = (16));

} else {
var statearr_11957_13218 = state_11859__$1;
(statearr_11957_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (9))){
var inst_11787 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
var statearr_11958_13219 = state_11859__$1;
(statearr_11958_13219[(2)] = inst_11787);

(statearr_11958_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (5))){
var inst_11725 = cljs.core.deref(cs);
var inst_11726 = cljs.core.seq(inst_11725);
var inst_11735 = inst_11726;
var inst_11736 = null;
var inst_11737 = (0);
var inst_11738 = (0);
var state_11859__$1 = (function (){var statearr_11959 = state_11859;
(statearr_11959[(13)] = inst_11735);

(statearr_11959[(14)] = inst_11737);

(statearr_11959[(15)] = inst_11736);

(statearr_11959[(16)] = inst_11738);

return statearr_11959;
})();
var statearr_11960_13220 = state_11859__$1;
(statearr_11960_13220[(2)] = null);

(statearr_11960_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (14))){
var state_11859__$1 = state_11859;
var statearr_11961_13221 = state_11859__$1;
(statearr_11961_13221[(2)] = null);

(statearr_11961_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (45))){
var inst_11849 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
var statearr_11965_13222 = state_11859__$1;
(statearr_11965_13222[(2)] = inst_11849);

(statearr_11965_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (26))){
var inst_11790 = (state_11859[(27)]);
var inst_11842 = (state_11859[(2)]);
var inst_11843 = cljs.core.seq(inst_11790);
var state_11859__$1 = (function (){var statearr_11968 = state_11859;
(statearr_11968[(29)] = inst_11842);

return statearr_11968;
})();
if(inst_11843){
var statearr_11972_13223 = state_11859__$1;
(statearr_11972_13223[(1)] = (42));

} else {
var statearr_11973_13224 = state_11859__$1;
(statearr_11973_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (16))){
var inst_11757 = (state_11859[(7)]);
var inst_11759 = cljs.core.chunked_seq_QMARK_(inst_11757);
var state_11859__$1 = state_11859;
if(inst_11759){
var statearr_11976_13225 = state_11859__$1;
(statearr_11976_13225[(1)] = (19));

} else {
var statearr_11977_13226 = state_11859__$1;
(statearr_11977_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (38))){
var inst_11835 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
var statearr_11978_13227 = state_11859__$1;
(statearr_11978_13227[(2)] = inst_11835);

(statearr_11978_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (30))){
var state_11859__$1 = state_11859;
var statearr_11979_13228 = state_11859__$1;
(statearr_11979_13228[(2)] = null);

(statearr_11979_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (10))){
var inst_11736 = (state_11859[(15)]);
var inst_11738 = (state_11859[(16)]);
var inst_11746 = cljs.core._nth(inst_11736,inst_11738);
var inst_11747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11746,(0),null);
var inst_11748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11746,(1),null);
var state_11859__$1 = (function (){var statearr_11980 = state_11859;
(statearr_11980[(24)] = inst_11747);

return statearr_11980;
})();
if(cljs.core.truth_(inst_11748)){
var statearr_11981_13229 = state_11859__$1;
(statearr_11981_13229[(1)] = (13));

} else {
var statearr_11982_13230 = state_11859__$1;
(statearr_11982_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (18))){
var inst_11783 = (state_11859[(2)]);
var state_11859__$1 = state_11859;
var statearr_11983_13231 = state_11859__$1;
(statearr_11983_13231[(2)] = inst_11783);

(statearr_11983_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (42))){
var state_11859__$1 = state_11859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11859__$1,(45),dchan);
} else {
if((state_val_11860 === (37))){
var inst_11718 = (state_11859[(10)]);
var inst_11825 = (state_11859[(22)]);
var inst_11816 = (state_11859[(23)]);
var inst_11825__$1 = cljs.core.first(inst_11816);
var inst_11826 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11825__$1,inst_11718,done);
var state_11859__$1 = (function (){var statearr_11984 = state_11859;
(statearr_11984[(22)] = inst_11825__$1);

return statearr_11984;
})();
if(cljs.core.truth_(inst_11826)){
var statearr_11987_13232 = state_11859__$1;
(statearr_11987_13232[(1)] = (39));

} else {
var statearr_11989_13233 = state_11859__$1;
(statearr_11989_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11860 === (8))){
var inst_11737 = (state_11859[(14)]);
var inst_11738 = (state_11859[(16)]);
var inst_11740 = (inst_11738 < inst_11737);
var inst_11741 = inst_11740;
var state_11859__$1 = state_11859;
if(cljs.core.truth_(inst_11741)){
var statearr_11990_13234 = state_11859__$1;
(statearr_11990_13234[(1)] = (10));

} else {
var statearr_11991_13235 = state_11859__$1;
(statearr_11991_13235[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10912__auto__ = null;
var cljs$core$async$mult_$_state_machine__10912__auto____0 = (function (){
var statearr_12004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12004[(0)] = cljs$core$async$mult_$_state_machine__10912__auto__);

(statearr_12004[(1)] = (1));

return statearr_12004;
});
var cljs$core$async$mult_$_state_machine__10912__auto____1 = (function (state_11859){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_11859);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12005){var ex__10915__auto__ = e12005;
var statearr_12010_13236 = state_11859;
(statearr_12010_13236[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_11859[(4)]))){
var statearr_12011_13237 = state_11859;
(statearr_12011_13237[(1)] = cljs.core.first((state_11859[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11859;
state_11859 = G__13238;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10912__auto__ = function(state_11859){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10912__auto____1.call(this,state_11859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10912__auto____0;
cljs$core$async$mult_$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10912__auto____1;
return cljs$core$async$mult_$_state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12012 = f__10974__auto__();
(statearr_12012[(6)] = c__10973__auto___13181);

return statearr_12012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var G__12026 = arguments.length;
switch (G__12026) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12064){
var map__12065 = p__12064;
var map__12065__$1 = (((((!((map__12065 == null))))?(((((map__12065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12065):map__12065);
var opts = map__12065__$1;
var statearr_12067_13248 = state;
(statearr_12067_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12068_13249 = state;
(statearr_12068_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12069_13250 = state;
(statearr_12069_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12060){
var G__12061 = cljs.core.first(seq12060);
var seq12060__$1 = cljs.core.next(seq12060);
var G__12062 = cljs.core.first(seq12060__$1);
var seq12060__$2 = cljs.core.next(seq12060__$1);
var G__12063 = cljs.core.first(seq12060__$2);
var seq12060__$3 = cljs.core.next(seq12060__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12061,G__12062,G__12063,seq12060__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12070 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12071){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12071 = meta12071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12072,meta12071__$1){
var self__ = this;
var _12072__$1 = this;
return (new cljs.core.async.t_cljs$core$async12070(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12071__$1));
}));

(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12072){
var self__ = this;
var _12072__$1 = this;
return self__.meta12071;
}));

(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12070.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12071","meta12071",1638530452,null)], null);
}));

(cljs.core.async.t_cljs$core$async12070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12070");

(cljs.core.async.t_cljs$core$async12070.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12070.
 */
cljs.core.async.__GT_t_cljs$core$async12070 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12070(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12071){
return (new cljs.core.async.t_cljs$core$async12070(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12071));
});

}

return (new cljs.core.async.t_cljs$core$async12070(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10973__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12178){
var state_val_12179 = (state_12178[(1)]);
if((state_val_12179 === (7))){
var inst_12093 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
var statearr_12180_13252 = state_12178__$1;
(statearr_12180_13252[(2)] = inst_12093);

(statearr_12180_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (20))){
var inst_12105 = (state_12178[(7)]);
var state_12178__$1 = state_12178;
var statearr_12181_13253 = state_12178__$1;
(statearr_12181_13253[(2)] = inst_12105);

(statearr_12181_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (27))){
var state_12178__$1 = state_12178;
var statearr_12182_13254 = state_12178__$1;
(statearr_12182_13254[(2)] = null);

(statearr_12182_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (1))){
var inst_12080 = (state_12178[(8)]);
var inst_12080__$1 = calc_state();
var inst_12082 = (inst_12080__$1 == null);
var inst_12083 = cljs.core.not(inst_12082);
var state_12178__$1 = (function (){var statearr_12183 = state_12178;
(statearr_12183[(8)] = inst_12080__$1);

return statearr_12183;
})();
if(inst_12083){
var statearr_12184_13255 = state_12178__$1;
(statearr_12184_13255[(1)] = (2));

} else {
var statearr_12185_13256 = state_12178__$1;
(statearr_12185_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (24))){
var inst_12138 = (state_12178[(9)]);
var inst_12152 = (state_12178[(10)]);
var inst_12129 = (state_12178[(11)]);
var inst_12152__$1 = (inst_12129.cljs$core$IFn$_invoke$arity$1 ? inst_12129.cljs$core$IFn$_invoke$arity$1(inst_12138) : inst_12129.call(null,inst_12138));
var state_12178__$1 = (function (){var statearr_12186 = state_12178;
(statearr_12186[(10)] = inst_12152__$1);

return statearr_12186;
})();
if(cljs.core.truth_(inst_12152__$1)){
var statearr_12187_13257 = state_12178__$1;
(statearr_12187_13257[(1)] = (29));

} else {
var statearr_12188_13258 = state_12178__$1;
(statearr_12188_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (4))){
var inst_12096 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
if(cljs.core.truth_(inst_12096)){
var statearr_12189_13259 = state_12178__$1;
(statearr_12189_13259[(1)] = (8));

} else {
var statearr_12190_13260 = state_12178__$1;
(statearr_12190_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (15))){
var inst_12123 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
if(cljs.core.truth_(inst_12123)){
var statearr_12191_13261 = state_12178__$1;
(statearr_12191_13261[(1)] = (19));

} else {
var statearr_12192_13262 = state_12178__$1;
(statearr_12192_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (21))){
var inst_12128 = (state_12178[(12)]);
var inst_12128__$1 = (state_12178[(2)]);
var inst_12129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12128__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12128__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12128__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12178__$1 = (function (){var statearr_12193 = state_12178;
(statearr_12193[(12)] = inst_12128__$1);

(statearr_12193[(11)] = inst_12129);

(statearr_12193[(13)] = inst_12130);

return statearr_12193;
})();
return cljs.core.async.ioc_alts_BANG_(state_12178__$1,(22),inst_12131);
} else {
if((state_val_12179 === (31))){
var inst_12160 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
if(cljs.core.truth_(inst_12160)){
var statearr_12194_13263 = state_12178__$1;
(statearr_12194_13263[(1)] = (32));

} else {
var statearr_12195_13264 = state_12178__$1;
(statearr_12195_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (32))){
var inst_12137 = (state_12178[(14)]);
var state_12178__$1 = state_12178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12178__$1,(35),out,inst_12137);
} else {
if((state_val_12179 === (33))){
var inst_12128 = (state_12178[(12)]);
var inst_12105 = inst_12128;
var state_12178__$1 = (function (){var statearr_12196 = state_12178;
(statearr_12196[(7)] = inst_12105);

return statearr_12196;
})();
var statearr_12197_13265 = state_12178__$1;
(statearr_12197_13265[(2)] = null);

(statearr_12197_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (13))){
var inst_12105 = (state_12178[(7)]);
var inst_12112 = inst_12105.cljs$lang$protocol_mask$partition0$;
var inst_12113 = (inst_12112 & (64));
var inst_12114 = inst_12105.cljs$core$ISeq$;
var inst_12115 = (cljs.core.PROTOCOL_SENTINEL === inst_12114);
var inst_12116 = ((inst_12113) || (inst_12115));
var state_12178__$1 = state_12178;
if(cljs.core.truth_(inst_12116)){
var statearr_12198_13266 = state_12178__$1;
(statearr_12198_13266[(1)] = (16));

} else {
var statearr_12199_13267 = state_12178__$1;
(statearr_12199_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (22))){
var inst_12138 = (state_12178[(9)]);
var inst_12137 = (state_12178[(14)]);
var inst_12136 = (state_12178[(2)]);
var inst_12137__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12136,(0),null);
var inst_12138__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12136,(1),null);
var inst_12139 = (inst_12137__$1 == null);
var inst_12140 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12138__$1,change);
var inst_12141 = ((inst_12139) || (inst_12140));
var state_12178__$1 = (function (){var statearr_12201 = state_12178;
(statearr_12201[(9)] = inst_12138__$1);

(statearr_12201[(14)] = inst_12137__$1);

return statearr_12201;
})();
if(cljs.core.truth_(inst_12141)){
var statearr_12202_13268 = state_12178__$1;
(statearr_12202_13268[(1)] = (23));

} else {
var statearr_12203_13269 = state_12178__$1;
(statearr_12203_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (36))){
var inst_12128 = (state_12178[(12)]);
var inst_12105 = inst_12128;
var state_12178__$1 = (function (){var statearr_12204 = state_12178;
(statearr_12204[(7)] = inst_12105);

return statearr_12204;
})();
var statearr_12206_13270 = state_12178__$1;
(statearr_12206_13270[(2)] = null);

(statearr_12206_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (29))){
var inst_12152 = (state_12178[(10)]);
var state_12178__$1 = state_12178;
var statearr_12208_13271 = state_12178__$1;
(statearr_12208_13271[(2)] = inst_12152);

(statearr_12208_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (6))){
var state_12178__$1 = state_12178;
var statearr_12209_13272 = state_12178__$1;
(statearr_12209_13272[(2)] = false);

(statearr_12209_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (28))){
var inst_12148 = (state_12178[(2)]);
var inst_12149 = calc_state();
var inst_12105 = inst_12149;
var state_12178__$1 = (function (){var statearr_12210 = state_12178;
(statearr_12210[(15)] = inst_12148);

(statearr_12210[(7)] = inst_12105);

return statearr_12210;
})();
var statearr_12211_13273 = state_12178__$1;
(statearr_12211_13273[(2)] = null);

(statearr_12211_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (25))){
var inst_12174 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
var statearr_12212_13274 = state_12178__$1;
(statearr_12212_13274[(2)] = inst_12174);

(statearr_12212_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (34))){
var inst_12172 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
var statearr_12213_13275 = state_12178__$1;
(statearr_12213_13275[(2)] = inst_12172);

(statearr_12213_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (17))){
var state_12178__$1 = state_12178;
var statearr_12214_13276 = state_12178__$1;
(statearr_12214_13276[(2)] = false);

(statearr_12214_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (3))){
var state_12178__$1 = state_12178;
var statearr_12215_13277 = state_12178__$1;
(statearr_12215_13277[(2)] = false);

(statearr_12215_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (12))){
var inst_12176 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12178__$1,inst_12176);
} else {
if((state_val_12179 === (2))){
var inst_12080 = (state_12178[(8)]);
var inst_12085 = inst_12080.cljs$lang$protocol_mask$partition0$;
var inst_12086 = (inst_12085 & (64));
var inst_12087 = inst_12080.cljs$core$ISeq$;
var inst_12088 = (cljs.core.PROTOCOL_SENTINEL === inst_12087);
var inst_12089 = ((inst_12086) || (inst_12088));
var state_12178__$1 = state_12178;
if(cljs.core.truth_(inst_12089)){
var statearr_12216_13278 = state_12178__$1;
(statearr_12216_13278[(1)] = (5));

} else {
var statearr_12217_13279 = state_12178__$1;
(statearr_12217_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (23))){
var inst_12137 = (state_12178[(14)]);
var inst_12143 = (inst_12137 == null);
var state_12178__$1 = state_12178;
if(cljs.core.truth_(inst_12143)){
var statearr_12218_13280 = state_12178__$1;
(statearr_12218_13280[(1)] = (26));

} else {
var statearr_12219_13281 = state_12178__$1;
(statearr_12219_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (35))){
var inst_12163 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
if(cljs.core.truth_(inst_12163)){
var statearr_12220_13282 = state_12178__$1;
(statearr_12220_13282[(1)] = (36));

} else {
var statearr_12221_13283 = state_12178__$1;
(statearr_12221_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (19))){
var inst_12105 = (state_12178[(7)]);
var inst_12125 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12105);
var state_12178__$1 = state_12178;
var statearr_12222_13284 = state_12178__$1;
(statearr_12222_13284[(2)] = inst_12125);

(statearr_12222_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (11))){
var inst_12105 = (state_12178[(7)]);
var inst_12109 = (inst_12105 == null);
var inst_12110 = cljs.core.not(inst_12109);
var state_12178__$1 = state_12178;
if(inst_12110){
var statearr_12223_13285 = state_12178__$1;
(statearr_12223_13285[(1)] = (13));

} else {
var statearr_12224_13286 = state_12178__$1;
(statearr_12224_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (9))){
var inst_12080 = (state_12178[(8)]);
var state_12178__$1 = state_12178;
var statearr_12225_13287 = state_12178__$1;
(statearr_12225_13287[(2)] = inst_12080);

(statearr_12225_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (5))){
var state_12178__$1 = state_12178;
var statearr_12226_13288 = state_12178__$1;
(statearr_12226_13288[(2)] = true);

(statearr_12226_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (14))){
var state_12178__$1 = state_12178;
var statearr_12227_13289 = state_12178__$1;
(statearr_12227_13289[(2)] = false);

(statearr_12227_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (26))){
var inst_12138 = (state_12178[(9)]);
var inst_12145 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12138);
var state_12178__$1 = state_12178;
var statearr_12228_13290 = state_12178__$1;
(statearr_12228_13290[(2)] = inst_12145);

(statearr_12228_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (16))){
var state_12178__$1 = state_12178;
var statearr_12229_13291 = state_12178__$1;
(statearr_12229_13291[(2)] = true);

(statearr_12229_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (38))){
var inst_12168 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
var statearr_12230_13292 = state_12178__$1;
(statearr_12230_13292[(2)] = inst_12168);

(statearr_12230_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (30))){
var inst_12138 = (state_12178[(9)]);
var inst_12129 = (state_12178[(11)]);
var inst_12130 = (state_12178[(13)]);
var inst_12155 = cljs.core.empty_QMARK_(inst_12129);
var inst_12156 = (inst_12130.cljs$core$IFn$_invoke$arity$1 ? inst_12130.cljs$core$IFn$_invoke$arity$1(inst_12138) : inst_12130.call(null,inst_12138));
var inst_12157 = cljs.core.not(inst_12156);
var inst_12158 = ((inst_12155) && (inst_12157));
var state_12178__$1 = state_12178;
var statearr_12232_13293 = state_12178__$1;
(statearr_12232_13293[(2)] = inst_12158);

(statearr_12232_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (10))){
var inst_12080 = (state_12178[(8)]);
var inst_12101 = (state_12178[(2)]);
var inst_12102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12101,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12101,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12101,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12105 = inst_12080;
var state_12178__$1 = (function (){var statearr_12234 = state_12178;
(statearr_12234[(16)] = inst_12103);

(statearr_12234[(7)] = inst_12105);

(statearr_12234[(17)] = inst_12104);

(statearr_12234[(18)] = inst_12102);

return statearr_12234;
})();
var statearr_12235_13294 = state_12178__$1;
(statearr_12235_13294[(2)] = null);

(statearr_12235_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (18))){
var inst_12120 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
var statearr_12237_13295 = state_12178__$1;
(statearr_12237_13295[(2)] = inst_12120);

(statearr_12237_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (37))){
var state_12178__$1 = state_12178;
var statearr_12238_13296 = state_12178__$1;
(statearr_12238_13296[(2)] = null);

(statearr_12238_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (8))){
var inst_12080 = (state_12178[(8)]);
var inst_12098 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12080);
var state_12178__$1 = state_12178;
var statearr_12239_13297 = state_12178__$1;
(statearr_12239_13297[(2)] = inst_12098);

(statearr_12239_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10912__auto__ = null;
var cljs$core$async$mix_$_state_machine__10912__auto____0 = (function (){
var statearr_12242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12242[(0)] = cljs$core$async$mix_$_state_machine__10912__auto__);

(statearr_12242[(1)] = (1));

return statearr_12242;
});
var cljs$core$async$mix_$_state_machine__10912__auto____1 = (function (state_12178){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12178);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12243){var ex__10915__auto__ = e12243;
var statearr_12244_13298 = state_12178;
(statearr_12244_13298[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12178[(4)]))){
var statearr_12245_13299 = state_12178;
(statearr_12245_13299[(1)] = cljs.core.first((state_12178[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12178;
state_12178 = G__13300;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10912__auto__ = function(state_12178){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10912__auto____1.call(this,state_12178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10912__auto____0;
cljs$core$async$mix_$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10912__auto____1;
return cljs$core$async$mix_$_state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12246 = f__10974__auto__();
(statearr_12246[(6)] = c__10973__auto___13251);

return statearr_12246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var G__12257 = arguments.length;
switch (G__12257) {
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
var G__12267 = arguments.length;
switch (G__12267) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12265_SHARP_){
if(cljs.core.truth_((p1__12265_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12265_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12265_SHARP_.call(null,topic)))){
return p1__12265_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12265_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12272 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12273){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12273 = meta12273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12274,meta12273__$1){
var self__ = this;
var _12274__$1 = this;
return (new cljs.core.async.t_cljs$core$async12272(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12273__$1));
}));

(cljs.core.async.t_cljs$core$async12272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12274){
var self__ = this;
var _12274__$1 = this;
return self__.meta12273;
}));

(cljs.core.async.t_cljs$core$async12272.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12272.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12272.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12272.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12272.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12272.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12273","meta12273",780824243,null)], null);
}));

(cljs.core.async.t_cljs$core$async12272.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12272");

(cljs.core.async.t_cljs$core$async12272.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12272");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12272.
 */
cljs.core.async.__GT_t_cljs$core$async12272 = (function cljs$core$async$__GT_t_cljs$core$async12272(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12273){
return (new cljs.core.async.t_cljs$core$async12272(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12273));
});

}

return (new cljs.core.async.t_cljs$core$async12272(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10973__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12356){
var state_val_12357 = (state_12356[(1)]);
if((state_val_12357 === (7))){
var inst_12352 = (state_12356[(2)]);
var state_12356__$1 = state_12356;
var statearr_12358_13308 = state_12356__$1;
(statearr_12358_13308[(2)] = inst_12352);

(statearr_12358_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (20))){
var state_12356__$1 = state_12356;
var statearr_12359_13309 = state_12356__$1;
(statearr_12359_13309[(2)] = null);

(statearr_12359_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (1))){
var state_12356__$1 = state_12356;
var statearr_12360_13310 = state_12356__$1;
(statearr_12360_13310[(2)] = null);

(statearr_12360_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (24))){
var inst_12335 = (state_12356[(7)]);
var inst_12344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12335);
var state_12356__$1 = state_12356;
var statearr_12361_13311 = state_12356__$1;
(statearr_12361_13311[(2)] = inst_12344);

(statearr_12361_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (4))){
var inst_12287 = (state_12356[(8)]);
var inst_12287__$1 = (state_12356[(2)]);
var inst_12288 = (inst_12287__$1 == null);
var state_12356__$1 = (function (){var statearr_12362 = state_12356;
(statearr_12362[(8)] = inst_12287__$1);

return statearr_12362;
})();
if(cljs.core.truth_(inst_12288)){
var statearr_12363_13312 = state_12356__$1;
(statearr_12363_13312[(1)] = (5));

} else {
var statearr_12364_13313 = state_12356__$1;
(statearr_12364_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (15))){
var inst_12329 = (state_12356[(2)]);
var state_12356__$1 = state_12356;
var statearr_12365_13314 = state_12356__$1;
(statearr_12365_13314[(2)] = inst_12329);

(statearr_12365_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (21))){
var inst_12349 = (state_12356[(2)]);
var state_12356__$1 = (function (){var statearr_12370 = state_12356;
(statearr_12370[(9)] = inst_12349);

return statearr_12370;
})();
var statearr_12371_13315 = state_12356__$1;
(statearr_12371_13315[(2)] = null);

(statearr_12371_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (13))){
var inst_12311 = (state_12356[(10)]);
var inst_12313 = cljs.core.chunked_seq_QMARK_(inst_12311);
var state_12356__$1 = state_12356;
if(inst_12313){
var statearr_12381_13316 = state_12356__$1;
(statearr_12381_13316[(1)] = (16));

} else {
var statearr_12383_13317 = state_12356__$1;
(statearr_12383_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (22))){
var inst_12341 = (state_12356[(2)]);
var state_12356__$1 = state_12356;
if(cljs.core.truth_(inst_12341)){
var statearr_12390_13318 = state_12356__$1;
(statearr_12390_13318[(1)] = (23));

} else {
var statearr_12392_13319 = state_12356__$1;
(statearr_12392_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (6))){
var inst_12335 = (state_12356[(7)]);
var inst_12287 = (state_12356[(8)]);
var inst_12337 = (state_12356[(11)]);
var inst_12335__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12287) : topic_fn.call(null,inst_12287));
var inst_12336 = cljs.core.deref(mults);
var inst_12337__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12336,inst_12335__$1);
var state_12356__$1 = (function (){var statearr_12397 = state_12356;
(statearr_12397[(7)] = inst_12335__$1);

(statearr_12397[(11)] = inst_12337__$1);

return statearr_12397;
})();
if(cljs.core.truth_(inst_12337__$1)){
var statearr_12399_13320 = state_12356__$1;
(statearr_12399_13320[(1)] = (19));

} else {
var statearr_12400_13321 = state_12356__$1;
(statearr_12400_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (25))){
var inst_12346 = (state_12356[(2)]);
var state_12356__$1 = state_12356;
var statearr_12401_13322 = state_12356__$1;
(statearr_12401_13322[(2)] = inst_12346);

(statearr_12401_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (17))){
var inst_12311 = (state_12356[(10)]);
var inst_12320 = cljs.core.first(inst_12311);
var inst_12321 = cljs.core.async.muxch_STAR_(inst_12320);
var inst_12322 = cljs.core.async.close_BANG_(inst_12321);
var inst_12323 = cljs.core.next(inst_12311);
var inst_12297 = inst_12323;
var inst_12298 = null;
var inst_12299 = (0);
var inst_12300 = (0);
var state_12356__$1 = (function (){var statearr_12403 = state_12356;
(statearr_12403[(12)] = inst_12299);

(statearr_12403[(13)] = inst_12300);

(statearr_12403[(14)] = inst_12298);

(statearr_12403[(15)] = inst_12297);

(statearr_12403[(16)] = inst_12322);

return statearr_12403;
})();
var statearr_12406_13323 = state_12356__$1;
(statearr_12406_13323[(2)] = null);

(statearr_12406_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (3))){
var inst_12354 = (state_12356[(2)]);
var state_12356__$1 = state_12356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12356__$1,inst_12354);
} else {
if((state_val_12357 === (12))){
var inst_12331 = (state_12356[(2)]);
var state_12356__$1 = state_12356;
var statearr_12408_13324 = state_12356__$1;
(statearr_12408_13324[(2)] = inst_12331);

(statearr_12408_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (2))){
var state_12356__$1 = state_12356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12356__$1,(4),ch);
} else {
if((state_val_12357 === (23))){
var state_12356__$1 = state_12356;
var statearr_12409_13325 = state_12356__$1;
(statearr_12409_13325[(2)] = null);

(statearr_12409_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (19))){
var inst_12287 = (state_12356[(8)]);
var inst_12337 = (state_12356[(11)]);
var inst_12339 = cljs.core.async.muxch_STAR_(inst_12337);
var state_12356__$1 = state_12356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12356__$1,(22),inst_12339,inst_12287);
} else {
if((state_val_12357 === (11))){
var inst_12311 = (state_12356[(10)]);
var inst_12297 = (state_12356[(15)]);
var inst_12311__$1 = cljs.core.seq(inst_12297);
var state_12356__$1 = (function (){var statearr_12410 = state_12356;
(statearr_12410[(10)] = inst_12311__$1);

return statearr_12410;
})();
if(inst_12311__$1){
var statearr_12411_13326 = state_12356__$1;
(statearr_12411_13326[(1)] = (13));

} else {
var statearr_12412_13327 = state_12356__$1;
(statearr_12412_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (9))){
var inst_12333 = (state_12356[(2)]);
var state_12356__$1 = state_12356;
var statearr_12413_13328 = state_12356__$1;
(statearr_12413_13328[(2)] = inst_12333);

(statearr_12413_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (5))){
var inst_12294 = cljs.core.deref(mults);
var inst_12295 = cljs.core.vals(inst_12294);
var inst_12296 = cljs.core.seq(inst_12295);
var inst_12297 = inst_12296;
var inst_12298 = null;
var inst_12299 = (0);
var inst_12300 = (0);
var state_12356__$1 = (function (){var statearr_12414 = state_12356;
(statearr_12414[(12)] = inst_12299);

(statearr_12414[(13)] = inst_12300);

(statearr_12414[(14)] = inst_12298);

(statearr_12414[(15)] = inst_12297);

return statearr_12414;
})();
var statearr_12416_13329 = state_12356__$1;
(statearr_12416_13329[(2)] = null);

(statearr_12416_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (14))){
var state_12356__$1 = state_12356;
var statearr_12422_13330 = state_12356__$1;
(statearr_12422_13330[(2)] = null);

(statearr_12422_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (16))){
var inst_12311 = (state_12356[(10)]);
var inst_12315 = cljs.core.chunk_first(inst_12311);
var inst_12316 = cljs.core.chunk_rest(inst_12311);
var inst_12317 = cljs.core.count(inst_12315);
var inst_12297 = inst_12316;
var inst_12298 = inst_12315;
var inst_12299 = inst_12317;
var inst_12300 = (0);
var state_12356__$1 = (function (){var statearr_12427 = state_12356;
(statearr_12427[(12)] = inst_12299);

(statearr_12427[(13)] = inst_12300);

(statearr_12427[(14)] = inst_12298);

(statearr_12427[(15)] = inst_12297);

return statearr_12427;
})();
var statearr_12428_13331 = state_12356__$1;
(statearr_12428_13331[(2)] = null);

(statearr_12428_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (10))){
var inst_12299 = (state_12356[(12)]);
var inst_12300 = (state_12356[(13)]);
var inst_12298 = (state_12356[(14)]);
var inst_12297 = (state_12356[(15)]);
var inst_12305 = cljs.core._nth(inst_12298,inst_12300);
var inst_12306 = cljs.core.async.muxch_STAR_(inst_12305);
var inst_12307 = cljs.core.async.close_BANG_(inst_12306);
var inst_12308 = (inst_12300 + (1));
var tmp12417 = inst_12299;
var tmp12418 = inst_12298;
var tmp12419 = inst_12297;
var inst_12297__$1 = tmp12419;
var inst_12298__$1 = tmp12418;
var inst_12299__$1 = tmp12417;
var inst_12300__$1 = inst_12308;
var state_12356__$1 = (function (){var statearr_12430 = state_12356;
(statearr_12430[(12)] = inst_12299__$1);

(statearr_12430[(17)] = inst_12307);

(statearr_12430[(13)] = inst_12300__$1);

(statearr_12430[(14)] = inst_12298__$1);

(statearr_12430[(15)] = inst_12297__$1);

return statearr_12430;
})();
var statearr_12432_13332 = state_12356__$1;
(statearr_12432_13332[(2)] = null);

(statearr_12432_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (18))){
var inst_12326 = (state_12356[(2)]);
var state_12356__$1 = state_12356;
var statearr_12443_13333 = state_12356__$1;
(statearr_12443_13333[(2)] = inst_12326);

(statearr_12443_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12357 === (8))){
var inst_12299 = (state_12356[(12)]);
var inst_12300 = (state_12356[(13)]);
var inst_12302 = (inst_12300 < inst_12299);
var inst_12303 = inst_12302;
var state_12356__$1 = state_12356;
if(cljs.core.truth_(inst_12303)){
var statearr_12444_13334 = state_12356__$1;
(statearr_12444_13334[(1)] = (10));

} else {
var statearr_12445_13335 = state_12356__$1;
(statearr_12445_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_12446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12446[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_12446[(1)] = (1));

return statearr_12446;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_12356){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12356);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12447){var ex__10915__auto__ = e12447;
var statearr_12448_13336 = state_12356;
(statearr_12448_13336[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12356[(4)]))){
var statearr_12449_13337 = state_12356;
(statearr_12449_13337[(1)] = cljs.core.first((state_12356[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12356;
state_12356 = G__13338;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_12356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_12356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12450 = f__10974__auto__();
(statearr_12450[(6)] = c__10973__auto___13307);

return statearr_12450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var G__12452 = arguments.length;
switch (G__12452) {
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
var G__12455 = arguments.length;
switch (G__12455) {
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
var G__12457 = arguments.length;
switch (G__12457) {
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
var c__10973__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12502){
var state_val_12503 = (state_12502[(1)]);
if((state_val_12503 === (7))){
var state_12502__$1 = state_12502;
var statearr_12504_13343 = state_12502__$1;
(statearr_12504_13343[(2)] = null);

(statearr_12504_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (1))){
var state_12502__$1 = state_12502;
var statearr_12505_13344 = state_12502__$1;
(statearr_12505_13344[(2)] = null);

(statearr_12505_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (4))){
var inst_12460 = (state_12502[(7)]);
var inst_12461 = (state_12502[(8)]);
var inst_12463 = (inst_12461 < inst_12460);
var state_12502__$1 = state_12502;
if(cljs.core.truth_(inst_12463)){
var statearr_12506_13345 = state_12502__$1;
(statearr_12506_13345[(1)] = (6));

} else {
var statearr_12507_13346 = state_12502__$1;
(statearr_12507_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (15))){
var inst_12488 = (state_12502[(9)]);
var inst_12493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12488);
var state_12502__$1 = state_12502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12502__$1,(17),out,inst_12493);
} else {
if((state_val_12503 === (13))){
var inst_12488 = (state_12502[(9)]);
var inst_12488__$1 = (state_12502[(2)]);
var inst_12489 = cljs.core.some(cljs.core.nil_QMARK_,inst_12488__$1);
var state_12502__$1 = (function (){var statearr_12508 = state_12502;
(statearr_12508[(9)] = inst_12488__$1);

return statearr_12508;
})();
if(cljs.core.truth_(inst_12489)){
var statearr_12509_13347 = state_12502__$1;
(statearr_12509_13347[(1)] = (14));

} else {
var statearr_12510_13348 = state_12502__$1;
(statearr_12510_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (6))){
var state_12502__$1 = state_12502;
var statearr_12511_13349 = state_12502__$1;
(statearr_12511_13349[(2)] = null);

(statearr_12511_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (17))){
var inst_12495 = (state_12502[(2)]);
var state_12502__$1 = (function (){var statearr_12516 = state_12502;
(statearr_12516[(10)] = inst_12495);

return statearr_12516;
})();
var statearr_12517_13350 = state_12502__$1;
(statearr_12517_13350[(2)] = null);

(statearr_12517_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (3))){
var inst_12500 = (state_12502[(2)]);
var state_12502__$1 = state_12502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12502__$1,inst_12500);
} else {
if((state_val_12503 === (12))){
var _ = (function (){var statearr_12518 = state_12502;
(statearr_12518[(4)] = cljs.core.rest((state_12502[(4)])));

return statearr_12518;
})();
var state_12502__$1 = state_12502;
var ex12515 = (state_12502__$1[(2)]);
var statearr_12519_13351 = state_12502__$1;
(statearr_12519_13351[(5)] = ex12515);


if((ex12515 instanceof Object)){
var statearr_12520_13352 = state_12502__$1;
(statearr_12520_13352[(1)] = (11));

(statearr_12520_13352[(5)] = null);

} else {
throw ex12515;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (2))){
var inst_12459 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12460 = cnt;
var inst_12461 = (0);
var state_12502__$1 = (function (){var statearr_12521 = state_12502;
(statearr_12521[(7)] = inst_12460);

(statearr_12521[(8)] = inst_12461);

(statearr_12521[(11)] = inst_12459);

return statearr_12521;
})();
var statearr_12522_13353 = state_12502__$1;
(statearr_12522_13353[(2)] = null);

(statearr_12522_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (11))){
var inst_12465 = (state_12502[(2)]);
var inst_12466 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12502__$1 = (function (){var statearr_12523 = state_12502;
(statearr_12523[(12)] = inst_12465);

return statearr_12523;
})();
var statearr_12524_13354 = state_12502__$1;
(statearr_12524_13354[(2)] = inst_12466);

(statearr_12524_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (9))){
var inst_12461 = (state_12502[(8)]);
var _ = (function (){var statearr_12525 = state_12502;
(statearr_12525[(4)] = cljs.core.cons((12),(state_12502[(4)])));

return statearr_12525;
})();
var inst_12474 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12461) : chs__$1.call(null,inst_12461));
var inst_12475 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12461) : done.call(null,inst_12461));
var inst_12476 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12474,inst_12475);
var ___$1 = (function (){var statearr_12532 = state_12502;
(statearr_12532[(4)] = cljs.core.rest((state_12502[(4)])));

return statearr_12532;
})();
var state_12502__$1 = state_12502;
var statearr_12533_13355 = state_12502__$1;
(statearr_12533_13355[(2)] = inst_12476);

(statearr_12533_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (5))){
var inst_12486 = (state_12502[(2)]);
var state_12502__$1 = (function (){var statearr_12534 = state_12502;
(statearr_12534[(13)] = inst_12486);

return statearr_12534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12502__$1,(13),dchan);
} else {
if((state_val_12503 === (14))){
var inst_12491 = cljs.core.async.close_BANG_(out);
var state_12502__$1 = state_12502;
var statearr_12535_13356 = state_12502__$1;
(statearr_12535_13356[(2)] = inst_12491);

(statearr_12535_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (16))){
var inst_12498 = (state_12502[(2)]);
var state_12502__$1 = state_12502;
var statearr_12536_13357 = state_12502__$1;
(statearr_12536_13357[(2)] = inst_12498);

(statearr_12536_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (10))){
var inst_12461 = (state_12502[(8)]);
var inst_12479 = (state_12502[(2)]);
var inst_12480 = (inst_12461 + (1));
var inst_12461__$1 = inst_12480;
var state_12502__$1 = (function (){var statearr_12537 = state_12502;
(statearr_12537[(8)] = inst_12461__$1);

(statearr_12537[(14)] = inst_12479);

return statearr_12537;
})();
var statearr_12538_13358 = state_12502__$1;
(statearr_12538_13358[(2)] = null);

(statearr_12538_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (8))){
var inst_12484 = (state_12502[(2)]);
var state_12502__$1 = state_12502;
var statearr_12539_13359 = state_12502__$1;
(statearr_12539_13359[(2)] = inst_12484);

(statearr_12539_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_12540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12540[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_12540[(1)] = (1));

return statearr_12540;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_12502){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12502);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12541){var ex__10915__auto__ = e12541;
var statearr_12542_13360 = state_12502;
(statearr_12542_13360[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12502[(4)]))){
var statearr_12543_13361 = state_12502;
(statearr_12543_13361[(1)] = cljs.core.first((state_12502[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12502;
state_12502 = G__13362;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_12502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_12502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12544 = f__10974__auto__();
(statearr_12544[(6)] = c__10973__auto___13342);

return statearr_12544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var G__12547 = arguments.length;
switch (G__12547) {
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
var c__10973__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12580){
var state_val_12581 = (state_12580[(1)]);
if((state_val_12581 === (7))){
var inst_12559 = (state_12580[(7)]);
var inst_12560 = (state_12580[(8)]);
var inst_12559__$1 = (state_12580[(2)]);
var inst_12560__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12559__$1,(0),null);
var inst_12561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12559__$1,(1),null);
var inst_12562 = (inst_12560__$1 == null);
var state_12580__$1 = (function (){var statearr_12582 = state_12580;
(statearr_12582[(7)] = inst_12559__$1);

(statearr_12582[(9)] = inst_12561);

(statearr_12582[(8)] = inst_12560__$1);

return statearr_12582;
})();
if(cljs.core.truth_(inst_12562)){
var statearr_12583_13365 = state_12580__$1;
(statearr_12583_13365[(1)] = (8));

} else {
var statearr_12584_13366 = state_12580__$1;
(statearr_12584_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (1))){
var inst_12549 = cljs.core.vec(chs);
var inst_12550 = inst_12549;
var state_12580__$1 = (function (){var statearr_12585 = state_12580;
(statearr_12585[(10)] = inst_12550);

return statearr_12585;
})();
var statearr_12586_13367 = state_12580__$1;
(statearr_12586_13367[(2)] = null);

(statearr_12586_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (4))){
var inst_12550 = (state_12580[(10)]);
var state_12580__$1 = state_12580;
return cljs.core.async.ioc_alts_BANG_(state_12580__$1,(7),inst_12550);
} else {
if((state_val_12581 === (6))){
var inst_12576 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
var statearr_12587_13368 = state_12580__$1;
(statearr_12587_13368[(2)] = inst_12576);

(statearr_12587_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (3))){
var inst_12578 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12580__$1,inst_12578);
} else {
if((state_val_12581 === (2))){
var inst_12550 = (state_12580[(10)]);
var inst_12552 = cljs.core.count(inst_12550);
var inst_12553 = (inst_12552 > (0));
var state_12580__$1 = state_12580;
if(cljs.core.truth_(inst_12553)){
var statearr_12589_13369 = state_12580__$1;
(statearr_12589_13369[(1)] = (4));

} else {
var statearr_12590_13370 = state_12580__$1;
(statearr_12590_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (11))){
var inst_12550 = (state_12580[(10)]);
var inst_12569 = (state_12580[(2)]);
var tmp12588 = inst_12550;
var inst_12550__$1 = tmp12588;
var state_12580__$1 = (function (){var statearr_12591 = state_12580;
(statearr_12591[(10)] = inst_12550__$1);

(statearr_12591[(11)] = inst_12569);

return statearr_12591;
})();
var statearr_12592_13371 = state_12580__$1;
(statearr_12592_13371[(2)] = null);

(statearr_12592_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (9))){
var inst_12560 = (state_12580[(8)]);
var state_12580__$1 = state_12580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12580__$1,(11),out,inst_12560);
} else {
if((state_val_12581 === (5))){
var inst_12574 = cljs.core.async.close_BANG_(out);
var state_12580__$1 = state_12580;
var statearr_12593_13372 = state_12580__$1;
(statearr_12593_13372[(2)] = inst_12574);

(statearr_12593_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (10))){
var inst_12572 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
var statearr_12594_13373 = state_12580__$1;
(statearr_12594_13373[(2)] = inst_12572);

(statearr_12594_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (8))){
var inst_12550 = (state_12580[(10)]);
var inst_12559 = (state_12580[(7)]);
var inst_12561 = (state_12580[(9)]);
var inst_12560 = (state_12580[(8)]);
var inst_12564 = (function (){var cs = inst_12550;
var vec__12555 = inst_12559;
var v = inst_12560;
var c = inst_12561;
return (function (p1__12545_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12545_SHARP_);
});
})();
var inst_12565 = cljs.core.filterv(inst_12564,inst_12550);
var inst_12550__$1 = inst_12565;
var state_12580__$1 = (function (){var statearr_12595 = state_12580;
(statearr_12595[(10)] = inst_12550__$1);

return statearr_12595;
})();
var statearr_12596_13374 = state_12580__$1;
(statearr_12596_13374[(2)] = null);

(statearr_12596_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_12597 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12597[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_12597[(1)] = (1));

return statearr_12597;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_12580){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12580);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12598){var ex__10915__auto__ = e12598;
var statearr_12599_13375 = state_12580;
(statearr_12599_13375[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12580[(4)]))){
var statearr_12600_13376 = state_12580;
(statearr_12600_13376[(1)] = cljs.core.first((state_12580[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12580;
state_12580 = G__13377;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_12580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_12580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12601 = f__10974__auto__();
(statearr_12601[(6)] = c__10973__auto___13364);

return statearr_12601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var G__12603 = arguments.length;
switch (G__12603) {
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
var c__10973__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12627){
var state_val_12628 = (state_12627[(1)]);
if((state_val_12628 === (7))){
var inst_12609 = (state_12627[(7)]);
var inst_12609__$1 = (state_12627[(2)]);
var inst_12610 = (inst_12609__$1 == null);
var inst_12611 = cljs.core.not(inst_12610);
var state_12627__$1 = (function (){var statearr_12629 = state_12627;
(statearr_12629[(7)] = inst_12609__$1);

return statearr_12629;
})();
if(inst_12611){
var statearr_12630_13380 = state_12627__$1;
(statearr_12630_13380[(1)] = (8));

} else {
var statearr_12631_13381 = state_12627__$1;
(statearr_12631_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (1))){
var inst_12604 = (0);
var state_12627__$1 = (function (){var statearr_12632 = state_12627;
(statearr_12632[(8)] = inst_12604);

return statearr_12632;
})();
var statearr_12633_13382 = state_12627__$1;
(statearr_12633_13382[(2)] = null);

(statearr_12633_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (4))){
var state_12627__$1 = state_12627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12627__$1,(7),ch);
} else {
if((state_val_12628 === (6))){
var inst_12622 = (state_12627[(2)]);
var state_12627__$1 = state_12627;
var statearr_12634_13383 = state_12627__$1;
(statearr_12634_13383[(2)] = inst_12622);

(statearr_12634_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (3))){
var inst_12624 = (state_12627[(2)]);
var inst_12625 = cljs.core.async.close_BANG_(out);
var state_12627__$1 = (function (){var statearr_12635 = state_12627;
(statearr_12635[(9)] = inst_12624);

return statearr_12635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12627__$1,inst_12625);
} else {
if((state_val_12628 === (2))){
var inst_12604 = (state_12627[(8)]);
var inst_12606 = (inst_12604 < n);
var state_12627__$1 = state_12627;
if(cljs.core.truth_(inst_12606)){
var statearr_12636_13384 = state_12627__$1;
(statearr_12636_13384[(1)] = (4));

} else {
var statearr_12637_13385 = state_12627__$1;
(statearr_12637_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (11))){
var inst_12604 = (state_12627[(8)]);
var inst_12614 = (state_12627[(2)]);
var inst_12615 = (inst_12604 + (1));
var inst_12604__$1 = inst_12615;
var state_12627__$1 = (function (){var statearr_12638 = state_12627;
(statearr_12638[(10)] = inst_12614);

(statearr_12638[(8)] = inst_12604__$1);

return statearr_12638;
})();
var statearr_12639_13386 = state_12627__$1;
(statearr_12639_13386[(2)] = null);

(statearr_12639_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (9))){
var state_12627__$1 = state_12627;
var statearr_12640_13387 = state_12627__$1;
(statearr_12640_13387[(2)] = null);

(statearr_12640_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (5))){
var state_12627__$1 = state_12627;
var statearr_12641_13388 = state_12627__$1;
(statearr_12641_13388[(2)] = null);

(statearr_12641_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (10))){
var inst_12619 = (state_12627[(2)]);
var state_12627__$1 = state_12627;
var statearr_12642_13389 = state_12627__$1;
(statearr_12642_13389[(2)] = inst_12619);

(statearr_12642_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (8))){
var inst_12609 = (state_12627[(7)]);
var state_12627__$1 = state_12627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12627__$1,(11),out,inst_12609);
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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_12643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12643[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_12643[(1)] = (1));

return statearr_12643;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_12627){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12627);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12644){var ex__10915__auto__ = e12644;
var statearr_12645_13390 = state_12627;
(statearr_12645_13390[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12627[(4)]))){
var statearr_12646_13391 = state_12627;
(statearr_12646_13391[(1)] = cljs.core.first((state_12627[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12627;
state_12627 = G__13392;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_12627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_12627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12647 = f__10974__auto__();
(statearr_12647[(6)] = c__10973__auto___13379);

return statearr_12647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12649 = (function (f,ch,meta12650){
this.f = f;
this.ch = ch;
this.meta12650 = meta12650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12651,meta12650__$1){
var self__ = this;
var _12651__$1 = this;
return (new cljs.core.async.t_cljs$core$async12649(self__.f,self__.ch,meta12650__$1));
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12651){
var self__ = this;
var _12651__$1 = this;
return self__.meta12650;
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12652 = (function (f,ch,meta12650,_,fn1,meta12653){
this.f = f;
this.ch = ch;
this.meta12650 = meta12650;
this._ = _;
this.fn1 = fn1;
this.meta12653 = meta12653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12654,meta12653__$1){
var self__ = this;
var _12654__$1 = this;
return (new cljs.core.async.t_cljs$core$async12652(self__.f,self__.ch,self__.meta12650,self__._,self__.fn1,meta12653__$1));
}));

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12654){
var self__ = this;
var _12654__$1 = this;
return self__.meta12653;
}));

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12648_SHARP_){
var G__12655 = (((p1__12648_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12648_SHARP_) : self__.f.call(null,p1__12648_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12655) : f1.call(null,G__12655));
});
}));

(cljs.core.async.t_cljs$core$async12652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12650","meta12650",-1105755866,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12649","cljs.core.async/t_cljs$core$async12649",1369530664,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12653","meta12653",-1936240358,null)], null);
}));

(cljs.core.async.t_cljs$core$async12652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12652");

(cljs.core.async.t_cljs$core$async12652.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12652.
 */
cljs.core.async.__GT_t_cljs$core$async12652 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12652(f__$1,ch__$1,meta12650__$1,___$2,fn1__$1,meta12653){
return (new cljs.core.async.t_cljs$core$async12652(f__$1,ch__$1,meta12650__$1,___$2,fn1__$1,meta12653));
});

}

return (new cljs.core.async.t_cljs$core$async12652(self__.f,self__.ch,self__.meta12650,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12656 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12656) : self__.f.call(null,G__12656));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12650","meta12650",-1105755866,null)], null);
}));

(cljs.core.async.t_cljs$core$async12649.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12649");

(cljs.core.async.t_cljs$core$async12649.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12649");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12649.
 */
cljs.core.async.__GT_t_cljs$core$async12649 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12649(f__$1,ch__$1,meta12650){
return (new cljs.core.async.t_cljs$core$async12649(f__$1,ch__$1,meta12650));
});

}

return (new cljs.core.async.t_cljs$core$async12649(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10973__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12685){
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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_12699 = [null,null,null,null,null,null,null,null,null];
(statearr_12699[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_12699[(1)] = (1));

return statearr_12699;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_12685){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12685);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12700){var ex__10915__auto__ = e12700;
var statearr_12701_13405 = state_12685;
(statearr_12701_13405[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12685[(4)]))){
var statearr_12702_13406 = state_12685;
(statearr_12702_13406[(1)] = cljs.core.first((state_12685[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12685;
state_12685 = G__13407;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_12685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_12685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12703 = f__10974__auto__();
(statearr_12703[(6)] = c__10973__auto___13394);

return statearr_12703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12768){
var state_val_12769 = (state_12768[(1)]);
if((state_val_12769 === (7))){
var inst_12764 = (state_12768[(2)]);
var state_12768__$1 = state_12768;
var statearr_12770_13409 = state_12768__$1;
(statearr_12770_13409[(2)] = inst_12764);

(statearr_12770_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (20))){
var inst_12734 = (state_12768[(7)]);
var inst_12745 = (state_12768[(2)]);
var inst_12746 = cljs.core.next(inst_12734);
var inst_12720 = inst_12746;
var inst_12721 = null;
var inst_12722 = (0);
var inst_12723 = (0);
var state_12768__$1 = (function (){var statearr_12771 = state_12768;
(statearr_12771[(8)] = inst_12722);

(statearr_12771[(9)] = inst_12745);

(statearr_12771[(10)] = inst_12721);

(statearr_12771[(11)] = inst_12723);

(statearr_12771[(12)] = inst_12720);

return statearr_12771;
})();
var statearr_12772_13410 = state_12768__$1;
(statearr_12772_13410[(2)] = null);

(statearr_12772_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (1))){
var state_12768__$1 = state_12768;
var statearr_12773_13411 = state_12768__$1;
(statearr_12773_13411[(2)] = null);

(statearr_12773_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (4))){
var inst_12709 = (state_12768[(13)]);
var inst_12709__$1 = (state_12768[(2)]);
var inst_12710 = (inst_12709__$1 == null);
var state_12768__$1 = (function (){var statearr_12774 = state_12768;
(statearr_12774[(13)] = inst_12709__$1);

return statearr_12774;
})();
if(cljs.core.truth_(inst_12710)){
var statearr_12775_13412 = state_12768__$1;
(statearr_12775_13412[(1)] = (5));

} else {
var statearr_12785_13413 = state_12768__$1;
(statearr_12785_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (15))){
var state_12768__$1 = state_12768;
var statearr_12789_13414 = state_12768__$1;
(statearr_12789_13414[(2)] = null);

(statearr_12789_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (21))){
var state_12768__$1 = state_12768;
var statearr_12790_13415 = state_12768__$1;
(statearr_12790_13415[(2)] = null);

(statearr_12790_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (13))){
var inst_12722 = (state_12768[(8)]);
var inst_12721 = (state_12768[(10)]);
var inst_12723 = (state_12768[(11)]);
var inst_12720 = (state_12768[(12)]);
var inst_12730 = (state_12768[(2)]);
var inst_12731 = (inst_12723 + (1));
var tmp12786 = inst_12722;
var tmp12787 = inst_12721;
var tmp12788 = inst_12720;
var inst_12720__$1 = tmp12788;
var inst_12721__$1 = tmp12787;
var inst_12722__$1 = tmp12786;
var inst_12723__$1 = inst_12731;
var state_12768__$1 = (function (){var statearr_12796 = state_12768;
(statearr_12796[(8)] = inst_12722__$1);

(statearr_12796[(10)] = inst_12721__$1);

(statearr_12796[(14)] = inst_12730);

(statearr_12796[(11)] = inst_12723__$1);

(statearr_12796[(12)] = inst_12720__$1);

return statearr_12796;
})();
var statearr_12797_13416 = state_12768__$1;
(statearr_12797_13416[(2)] = null);

(statearr_12797_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (22))){
var state_12768__$1 = state_12768;
var statearr_12802_13417 = state_12768__$1;
(statearr_12802_13417[(2)] = null);

(statearr_12802_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (6))){
var inst_12709 = (state_12768[(13)]);
var inst_12718 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12709) : f.call(null,inst_12709));
var inst_12719 = cljs.core.seq(inst_12718);
var inst_12720 = inst_12719;
var inst_12721 = null;
var inst_12722 = (0);
var inst_12723 = (0);
var state_12768__$1 = (function (){var statearr_12808 = state_12768;
(statearr_12808[(8)] = inst_12722);

(statearr_12808[(10)] = inst_12721);

(statearr_12808[(11)] = inst_12723);

(statearr_12808[(12)] = inst_12720);

return statearr_12808;
})();
var statearr_12809_13418 = state_12768__$1;
(statearr_12809_13418[(2)] = null);

(statearr_12809_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (17))){
var inst_12734 = (state_12768[(7)]);
var inst_12738 = cljs.core.chunk_first(inst_12734);
var inst_12739 = cljs.core.chunk_rest(inst_12734);
var inst_12740 = cljs.core.count(inst_12738);
var inst_12720 = inst_12739;
var inst_12721 = inst_12738;
var inst_12722 = inst_12740;
var inst_12723 = (0);
var state_12768__$1 = (function (){var statearr_12814 = state_12768;
(statearr_12814[(8)] = inst_12722);

(statearr_12814[(10)] = inst_12721);

(statearr_12814[(11)] = inst_12723);

(statearr_12814[(12)] = inst_12720);

return statearr_12814;
})();
var statearr_12815_13419 = state_12768__$1;
(statearr_12815_13419[(2)] = null);

(statearr_12815_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (3))){
var inst_12766 = (state_12768[(2)]);
var state_12768__$1 = state_12768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12768__$1,inst_12766);
} else {
if((state_val_12769 === (12))){
var inst_12754 = (state_12768[(2)]);
var state_12768__$1 = state_12768;
var statearr_12816_13420 = state_12768__$1;
(statearr_12816_13420[(2)] = inst_12754);

(statearr_12816_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (2))){
var state_12768__$1 = state_12768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12768__$1,(4),in$);
} else {
if((state_val_12769 === (23))){
var inst_12762 = (state_12768[(2)]);
var state_12768__$1 = state_12768;
var statearr_12817_13421 = state_12768__$1;
(statearr_12817_13421[(2)] = inst_12762);

(statearr_12817_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (19))){
var inst_12749 = (state_12768[(2)]);
var state_12768__$1 = state_12768;
var statearr_12818_13422 = state_12768__$1;
(statearr_12818_13422[(2)] = inst_12749);

(statearr_12818_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (11))){
var inst_12734 = (state_12768[(7)]);
var inst_12720 = (state_12768[(12)]);
var inst_12734__$1 = cljs.core.seq(inst_12720);
var state_12768__$1 = (function (){var statearr_12819 = state_12768;
(statearr_12819[(7)] = inst_12734__$1);

return statearr_12819;
})();
if(inst_12734__$1){
var statearr_12820_13423 = state_12768__$1;
(statearr_12820_13423[(1)] = (14));

} else {
var statearr_12821_13424 = state_12768__$1;
(statearr_12821_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (9))){
var inst_12756 = (state_12768[(2)]);
var inst_12757 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12768__$1 = (function (){var statearr_12822 = state_12768;
(statearr_12822[(15)] = inst_12756);

return statearr_12822;
})();
if(cljs.core.truth_(inst_12757)){
var statearr_12823_13425 = state_12768__$1;
(statearr_12823_13425[(1)] = (21));

} else {
var statearr_12824_13426 = state_12768__$1;
(statearr_12824_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (5))){
var inst_12712 = cljs.core.async.close_BANG_(out);
var state_12768__$1 = state_12768;
var statearr_12825_13427 = state_12768__$1;
(statearr_12825_13427[(2)] = inst_12712);

(statearr_12825_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (14))){
var inst_12734 = (state_12768[(7)]);
var inst_12736 = cljs.core.chunked_seq_QMARK_(inst_12734);
var state_12768__$1 = state_12768;
if(inst_12736){
var statearr_12826_13428 = state_12768__$1;
(statearr_12826_13428[(1)] = (17));

} else {
var statearr_12827_13429 = state_12768__$1;
(statearr_12827_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (16))){
var inst_12752 = (state_12768[(2)]);
var state_12768__$1 = state_12768;
var statearr_12828_13430 = state_12768__$1;
(statearr_12828_13430[(2)] = inst_12752);

(statearr_12828_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12769 === (10))){
var inst_12721 = (state_12768[(10)]);
var inst_12723 = (state_12768[(11)]);
var inst_12728 = cljs.core._nth(inst_12721,inst_12723);
var state_12768__$1 = state_12768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12768__$1,(13),out,inst_12728);
} else {
if((state_val_12769 === (18))){
var inst_12734 = (state_12768[(7)]);
var inst_12743 = cljs.core.first(inst_12734);
var state_12768__$1 = state_12768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12768__$1,(20),out,inst_12743);
} else {
if((state_val_12769 === (8))){
var inst_12722 = (state_12768[(8)]);
var inst_12723 = (state_12768[(11)]);
var inst_12725 = (inst_12723 < inst_12722);
var inst_12726 = inst_12725;
var state_12768__$1 = state_12768;
if(cljs.core.truth_(inst_12726)){
var statearr_12829_13431 = state_12768__$1;
(statearr_12829_13431[(1)] = (10));

} else {
var statearr_12830_13432 = state_12768__$1;
(statearr_12830_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10912__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10912__auto____0 = (function (){
var statearr_12831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12831[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10912__auto__);

(statearr_12831[(1)] = (1));

return statearr_12831;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10912__auto____1 = (function (state_12768){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12768);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12832){var ex__10915__auto__ = e12832;
var statearr_12833_13433 = state_12768;
(statearr_12833_13433[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12768[(4)]))){
var statearr_12834_13434 = state_12768;
(statearr_12834_13434[(1)] = cljs.core.first((state_12768[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12768;
state_12768 = G__13435;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10912__auto__ = function(state_12768){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10912__auto____1.call(this,state_12768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10912__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10912__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12835 = f__10974__auto__();
(statearr_12835[(6)] = c__10973__auto__);

return statearr_12835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12837 = arguments.length;
switch (G__12837) {
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
var G__12839 = arguments.length;
switch (G__12839) {
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
var G__12841 = arguments.length;
switch (G__12841) {
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
var c__10973__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12865){
var state_val_12866 = (state_12865[(1)]);
if((state_val_12866 === (7))){
var inst_12860 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
var statearr_12867_13440 = state_12865__$1;
(statearr_12867_13440[(2)] = inst_12860);

(statearr_12867_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (1))){
var inst_12842 = null;
var state_12865__$1 = (function (){var statearr_12868 = state_12865;
(statearr_12868[(7)] = inst_12842);

return statearr_12868;
})();
var statearr_12869_13441 = state_12865__$1;
(statearr_12869_13441[(2)] = null);

(statearr_12869_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (4))){
var inst_12845 = (state_12865[(8)]);
var inst_12845__$1 = (state_12865[(2)]);
var inst_12846 = (inst_12845__$1 == null);
var inst_12847 = cljs.core.not(inst_12846);
var state_12865__$1 = (function (){var statearr_12870 = state_12865;
(statearr_12870[(8)] = inst_12845__$1);

return statearr_12870;
})();
if(inst_12847){
var statearr_12871_13442 = state_12865__$1;
(statearr_12871_13442[(1)] = (5));

} else {
var statearr_12872_13443 = state_12865__$1;
(statearr_12872_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (6))){
var state_12865__$1 = state_12865;
var statearr_12873_13444 = state_12865__$1;
(statearr_12873_13444[(2)] = null);

(statearr_12873_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (3))){
var inst_12862 = (state_12865[(2)]);
var inst_12863 = cljs.core.async.close_BANG_(out);
var state_12865__$1 = (function (){var statearr_12874 = state_12865;
(statearr_12874[(9)] = inst_12862);

return statearr_12874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12865__$1,inst_12863);
} else {
if((state_val_12866 === (2))){
var state_12865__$1 = state_12865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12865__$1,(4),ch);
} else {
if((state_val_12866 === (11))){
var inst_12845 = (state_12865[(8)]);
var inst_12854 = (state_12865[(2)]);
var inst_12842 = inst_12845;
var state_12865__$1 = (function (){var statearr_12875 = state_12865;
(statearr_12875[(10)] = inst_12854);

(statearr_12875[(7)] = inst_12842);

return statearr_12875;
})();
var statearr_12876_13445 = state_12865__$1;
(statearr_12876_13445[(2)] = null);

(statearr_12876_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (9))){
var inst_12845 = (state_12865[(8)]);
var state_12865__$1 = state_12865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12865__$1,(11),out,inst_12845);
} else {
if((state_val_12866 === (5))){
var inst_12845 = (state_12865[(8)]);
var inst_12842 = (state_12865[(7)]);
var inst_12849 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12845,inst_12842);
var state_12865__$1 = state_12865;
if(inst_12849){
var statearr_12878_13446 = state_12865__$1;
(statearr_12878_13446[(1)] = (8));

} else {
var statearr_12879_13447 = state_12865__$1;
(statearr_12879_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (10))){
var inst_12857 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
var statearr_12880_13448 = state_12865__$1;
(statearr_12880_13448[(2)] = inst_12857);

(statearr_12880_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (8))){
var inst_12842 = (state_12865[(7)]);
var tmp12877 = inst_12842;
var inst_12842__$1 = tmp12877;
var state_12865__$1 = (function (){var statearr_12881 = state_12865;
(statearr_12881[(7)] = inst_12842__$1);

return statearr_12881;
})();
var statearr_12882_13449 = state_12865__$1;
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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_12883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12883[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_12883[(1)] = (1));

return statearr_12883;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_12865){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12865);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12884){var ex__10915__auto__ = e12884;
var statearr_12885_13450 = state_12865;
(statearr_12885_13450[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12865[(4)]))){
var statearr_12886_13451 = state_12865;
(statearr_12886_13451[(1)] = cljs.core.first((state_12865[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12865;
state_12865 = G__13452;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_12865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_12865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12887 = f__10974__auto__();
(statearr_12887[(6)] = c__10973__auto___13439);

return statearr_12887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var c__10973__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12927){
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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_12950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12950[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_12950[(1)] = (1));

return statearr_12950;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_12927){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12927);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e12951){var ex__10915__auto__ = e12951;
var statearr_12952_13469 = state_12927;
(statearr_12952_13469[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12927[(4)]))){
var statearr_12953_13470 = state_12927;
(statearr_12953_13470[(1)] = cljs.core.first((state_12927[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12927;
state_12927 = G__13471;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_12927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_12927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12954 = f__10974__auto__();
(statearr_12954[(6)] = c__10973__auto___13454);

return statearr_12954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
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
var c__10973__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10911__auto__ = (function (state_12998){
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
var cljs$core$async$state_machine__10912__auto__ = null;
var cljs$core$async$state_machine__10912__auto____0 = (function (){
var statearr_13021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13021[(0)] = cljs$core$async$state_machine__10912__auto__);

(statearr_13021[(1)] = (1));

return statearr_13021;
});
var cljs$core$async$state_machine__10912__auto____1 = (function (state_12998){
while(true){
var ret_value__10913__auto__ = (function (){try{while(true){
var result__10914__auto__ = switch__10911__auto__(state_12998);
if(cljs.core.keyword_identical_QMARK_(result__10914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10914__auto__;
}
break;
}
}catch (e13022){var ex__10915__auto__ = e13022;
var statearr_13023_13488 = state_12998;
(statearr_13023_13488[(2)] = ex__10915__auto__);


if(cljs.core.seq((state_12998[(4)]))){
var statearr_13024_13489 = state_12998;
(statearr_13024_13489[(1)] = cljs.core.first((state_12998[(4)])));

} else {
throw ex__10915__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12998;
state_12998 = G__13490;
continue;
} else {
return ret_value__10913__auto__;
}
break;
}
});
cljs$core$async$state_machine__10912__auto__ = function(state_12998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10912__auto____1.call(this,state_12998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10912__auto____0;
cljs$core$async$state_machine__10912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10912__auto____1;
return cljs$core$async$state_machine__10912__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_13025 = f__10974__auto__();
(statearr_13025[(6)] = c__10973__auto___13473);

return statearr_13025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
