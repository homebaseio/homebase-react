goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11130 = arguments.length;
switch (G__11130) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11131 = (function (f,blockable,meta11132){
this.f = f;
this.blockable = blockable;
this.meta11132 = meta11132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11133,meta11132__$1){
var self__ = this;
var _11133__$1 = this;
return (new cljs.core.async.t_cljs$core$async11131(self__.f,self__.blockable,meta11132__$1));
}));

(cljs.core.async.t_cljs$core$async11131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11133){
var self__ = this;
var _11133__$1 = this;
return self__.meta11132;
}));

(cljs.core.async.t_cljs$core$async11131.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11132","meta11132",1666895633,null)], null);
}));

(cljs.core.async.t_cljs$core$async11131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11131");

(cljs.core.async.t_cljs$core$async11131.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11131.
 */
cljs.core.async.__GT_t_cljs$core$async11131 = (function cljs$core$async$__GT_t_cljs$core$async11131(f__$1,blockable__$1,meta11132){
return (new cljs.core.async.t_cljs$core$async11131(f__$1,blockable__$1,meta11132));
});

}

return (new cljs.core.async.t_cljs$core$async11131(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11137 = arguments.length;
switch (G__11137) {
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
var G__11139 = arguments.length;
switch (G__11139) {
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
var G__11141 = arguments.length;
switch (G__11141) {
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
var G__11145 = arguments.length;
switch (G__11145) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11147 = (function (flag,meta11148){
this.flag = flag;
this.meta11148 = meta11148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11149,meta11148__$1){
var self__ = this;
var _11149__$1 = this;
return (new cljs.core.async.t_cljs$core$async11147(self__.flag,meta11148__$1));
}));

(cljs.core.async.t_cljs$core$async11147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11149){
var self__ = this;
var _11149__$1 = this;
return self__.meta11148;
}));

(cljs.core.async.t_cljs$core$async11147.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11148","meta11148",-1791595801,null)], null);
}));

(cljs.core.async.t_cljs$core$async11147.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11147");

(cljs.core.async.t_cljs$core$async11147.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11147");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11147.
 */
cljs.core.async.__GT_t_cljs$core$async11147 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11147(flag__$1,meta11148){
return (new cljs.core.async.t_cljs$core$async11147(flag__$1,meta11148));
});

}

return (new cljs.core.async.t_cljs$core$async11147(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11150 = (function (flag,cb,meta11151){
this.flag = flag;
this.cb = cb;
this.meta11151 = meta11151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11152,meta11151__$1){
var self__ = this;
var _11152__$1 = this;
return (new cljs.core.async.t_cljs$core$async11150(self__.flag,self__.cb,meta11151__$1));
}));

(cljs.core.async.t_cljs$core$async11150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11152){
var self__ = this;
var _11152__$1 = this;
return self__.meta11151;
}));

(cljs.core.async.t_cljs$core$async11150.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11150.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11151","meta11151",1031912956,null)], null);
}));

(cljs.core.async.t_cljs$core$async11150.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11150");

(cljs.core.async.t_cljs$core$async11150.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11150");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11150.
 */
cljs.core.async.__GT_t_cljs$core$async11150 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11150(flag__$1,cb__$1,meta11151){
return (new cljs.core.async.t_cljs$core$async11150(flag__$1,cb__$1,meta11151));
});

}

return (new cljs.core.async.t_cljs$core$async11150(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11157_SHARP_){
var G__11159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11157_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11159) : fret.call(null,G__11159));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11158_SHARP_){
var G__11160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11158_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11160) : fret.call(null,G__11160));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11163){
var map__11164 = p__11163;
var map__11164__$1 = (((((!((map__11164 == null))))?(((((map__11164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11164):map__11164);
var opts = map__11164__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11161){
var G__11162 = cljs.core.first(seq11161);
var seq11161__$1 = cljs.core.next(seq11161);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11162,seq11161__$1);
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
var G__11168 = arguments.length;
switch (G__11168) {
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
var c__11067__auto___13040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_11206){
var state_val_11207 = (state_11206[(1)]);
if((state_val_11207 === (7))){
var inst_11202 = (state_11206[(2)]);
var state_11206__$1 = state_11206;
var statearr_11208_13041 = state_11206__$1;
(statearr_11208_13041[(2)] = inst_11202);

(statearr_11208_13041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (1))){
var state_11206__$1 = state_11206;
var statearr_11209_13042 = state_11206__$1;
(statearr_11209_13042[(2)] = null);

(statearr_11209_13042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (4))){
var inst_11185 = (state_11206[(7)]);
var inst_11185__$1 = (state_11206[(2)]);
var inst_11186 = (inst_11185__$1 == null);
var state_11206__$1 = (function (){var statearr_11210 = state_11206;
(statearr_11210[(7)] = inst_11185__$1);

return statearr_11210;
})();
if(cljs.core.truth_(inst_11186)){
var statearr_11211_13043 = state_11206__$1;
(statearr_11211_13043[(1)] = (5));

} else {
var statearr_11212_13044 = state_11206__$1;
(statearr_11212_13044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (13))){
var state_11206__$1 = state_11206;
var statearr_11213_13045 = state_11206__$1;
(statearr_11213_13045[(2)] = null);

(statearr_11213_13045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (6))){
var inst_11185 = (state_11206[(7)]);
var state_11206__$1 = state_11206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11206__$1,(11),to,inst_11185);
} else {
if((state_val_11207 === (3))){
var inst_11204 = (state_11206[(2)]);
var state_11206__$1 = state_11206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11206__$1,inst_11204);
} else {
if((state_val_11207 === (12))){
var state_11206__$1 = state_11206;
var statearr_11214_13046 = state_11206__$1;
(statearr_11214_13046[(2)] = null);

(statearr_11214_13046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (2))){
var state_11206__$1 = state_11206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11206__$1,(4),from);
} else {
if((state_val_11207 === (11))){
var inst_11195 = (state_11206[(2)]);
var state_11206__$1 = state_11206;
if(cljs.core.truth_(inst_11195)){
var statearr_11215_13047 = state_11206__$1;
(statearr_11215_13047[(1)] = (12));

} else {
var statearr_11216_13048 = state_11206__$1;
(statearr_11216_13048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (9))){
var state_11206__$1 = state_11206;
var statearr_11217_13049 = state_11206__$1;
(statearr_11217_13049[(2)] = null);

(statearr_11217_13049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (5))){
var state_11206__$1 = state_11206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11218_13050 = state_11206__$1;
(statearr_11218_13050[(1)] = (8));

} else {
var statearr_11219_13051 = state_11206__$1;
(statearr_11219_13051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (14))){
var inst_11200 = (state_11206[(2)]);
var state_11206__$1 = state_11206;
var statearr_11220_13052 = state_11206__$1;
(statearr_11220_13052[(2)] = inst_11200);

(statearr_11220_13052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (10))){
var inst_11192 = (state_11206[(2)]);
var state_11206__$1 = state_11206;
var statearr_11221_13053 = state_11206__$1;
(statearr_11221_13053[(2)] = inst_11192);

(statearr_11221_13053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (8))){
var inst_11189 = cljs.core.async.close_BANG_(to);
var state_11206__$1 = state_11206;
var statearr_11222_13054 = state_11206__$1;
(statearr_11222_13054[(2)] = inst_11189);

(statearr_11222_13054[(1)] = (10));


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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_11223 = [null,null,null,null,null,null,null,null];
(statearr_11223[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_11223[(1)] = (1));

return statearr_11223;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_11206){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11206);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11224){var ex__11011__auto__ = e11224;
var statearr_11225_13055 = state_11206;
(statearr_11225_13055[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11206[(4)]))){
var statearr_11226_13056 = state_11206;
(statearr_11226_13056[(1)] = cljs.core.first((state_11206[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13057 = state_11206;
state_11206 = G__13057;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_11206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_11206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_11227 = f__11068__auto__();
(statearr_11227[(6)] = c__11067__auto___13040);

return statearr_11227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
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
var process = (function (p__11228){
var vec__11231 = p__11228;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11231,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11231,(1),null);
var job = vec__11231;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11067__auto___13058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_11247){
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
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0 = (function (){
var statearr_11251 = [null,null,null,null,null,null,null,null];
(statearr_11251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__);

(statearr_11251[(1)] = (1));

return statearr_11251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1 = (function (state_11247){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11247);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11252){var ex__11011__auto__ = e11252;
var statearr_11253_13059 = state_11247;
(statearr_11253_13059[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11247[(4)]))){
var statearr_11254_13060 = state_11247;
(statearr_11254_13060[(1)] = cljs.core.first((state_11247[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13061 = state_11247;
state_11247 = G__13061;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = function(state_11247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1.call(this,state_11247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_11255 = f__11068__auto__();
(statearr_11255[(6)] = c__11067__auto___13058);

return statearr_11255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11256){
var vec__11259 = p__11256;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11259,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11259,(1),null);
var job = vec__11259;
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
var G__11263_13064 = type;
var G__11263_13065__$1 = (((G__11263_13064 instanceof cljs.core.Keyword))?G__11263_13064.fqn:null);
switch (G__11263_13065__$1) {
case "compute":
var c__11067__auto___13067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__11067__auto___13067,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = ((function (__13063,c__11067__auto___13067,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async){
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
});})(__13063,c__11067__auto___13067,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__11007__auto__,c__11067__auto___13067,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0 = (function (){
var statearr_11286 = [null,null,null,null,null,null,null];
(statearr_11286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__);

(statearr_11286[(1)] = (1));

return statearr_11286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1 = (function (state_11277){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11277);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11288){var ex__11011__auto__ = e11288;
var statearr_11289_13074 = state_11277;
(statearr_11289_13074[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11277[(4)]))){
var statearr_11291_13075 = state_11277;
(statearr_11291_13075[(1)] = cljs.core.first((state_11277[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13076 = state_11277;
state_11277 = G__13076;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = function(state_11277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1.call(this,state_11277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__;
})()
;})(__13063,switch__11007__auto__,c__11067__auto___13067,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__11069__auto__ = (function (){var statearr_11292 = f__11068__auto__();
(statearr_11292[(6)] = c__11067__auto___13067);

return statearr_11292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
});})(__13063,c__11067__auto___13067,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
case "async":
var c__11067__auto___13077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__11067__auto___13077,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = ((function (__13063,c__11067__auto___13077,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11305){
var state_val_11306 = (state_11305[(1)]);
if((state_val_11306 === (1))){
var state_11305__$1 = state_11305;
var statearr_11308_13078 = state_11305__$1;
(statearr_11308_13078[(2)] = null);

(statearr_11308_13078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (2))){
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11305__$1,(4),jobs);
} else {
if((state_val_11306 === (3))){
var inst_11303 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11305__$1,inst_11303);
} else {
if((state_val_11306 === (4))){
var inst_11295 = (state_11305[(2)]);
var inst_11296 = async(inst_11295);
var state_11305__$1 = state_11305;
if(cljs.core.truth_(inst_11296)){
var statearr_11311_13079 = state_11305__$1;
(statearr_11311_13079[(1)] = (5));

} else {
var statearr_11313_13080 = state_11305__$1;
(statearr_11313_13080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (5))){
var state_11305__$1 = state_11305;
var statearr_11314_13081 = state_11305__$1;
(statearr_11314_13081[(2)] = null);

(statearr_11314_13081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (6))){
var state_11305__$1 = state_11305;
var statearr_11315_13082 = state_11305__$1;
(statearr_11315_13082[(2)] = null);

(statearr_11315_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (7))){
var inst_11301 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
var statearr_11316_13083 = state_11305__$1;
(statearr_11316_13083[(2)] = inst_11301);

(statearr_11316_13083[(1)] = (3));


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
});})(__13063,c__11067__auto___13077,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__11007__auto__,c__11067__auto___13077,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0 = (function (){
var statearr_11317 = [null,null,null,null,null,null,null];
(statearr_11317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__);

(statearr_11317[(1)] = (1));

return statearr_11317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1 = (function (state_11305){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11305);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11318){var ex__11011__auto__ = e11318;
var statearr_11319_13084 = state_11305;
(statearr_11319_13084[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11305[(4)]))){
var statearr_11320_13085 = state_11305;
(statearr_11320_13085[(1)] = cljs.core.first((state_11305[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13086 = state_11305;
state_11305 = G__13086;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = function(state_11305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1.call(this,state_11305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__;
})()
;})(__13063,switch__11007__auto__,c__11067__auto___13077,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__11069__auto__ = (function (){var statearr_11321 = f__11068__auto__();
(statearr_11321[(6)] = c__11067__auto___13077);

return statearr_11321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
});})(__13063,c__11067__auto___13077,G__11263_13064,G__11263_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11263_13065__$1)].join('')));

}

var G__13087 = (__13063 + (1));
__13063 = G__13087;
continue;
} else {
}
break;
}

var c__11067__auto___13088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_11343){
var state_val_11344 = (state_11343[(1)]);
if((state_val_11344 === (7))){
var inst_11339 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
var statearr_11346_13089 = state_11343__$1;
(statearr_11346_13089[(2)] = inst_11339);

(statearr_11346_13089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (1))){
var state_11343__$1 = state_11343;
var statearr_11347_13090 = state_11343__$1;
(statearr_11347_13090[(2)] = null);

(statearr_11347_13090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (4))){
var inst_11324 = (state_11343[(7)]);
var inst_11324__$1 = (state_11343[(2)]);
var inst_11325 = (inst_11324__$1 == null);
var state_11343__$1 = (function (){var statearr_11348 = state_11343;
(statearr_11348[(7)] = inst_11324__$1);

return statearr_11348;
})();
if(cljs.core.truth_(inst_11325)){
var statearr_11349_13091 = state_11343__$1;
(statearr_11349_13091[(1)] = (5));

} else {
var statearr_11350_13092 = state_11343__$1;
(statearr_11350_13092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (6))){
var inst_11324 = (state_11343[(7)]);
var inst_11329 = (state_11343[(8)]);
var inst_11329__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11330 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11331 = [inst_11324,inst_11329__$1];
var inst_11332 = (new cljs.core.PersistentVector(null,2,(5),inst_11330,inst_11331,null));
var state_11343__$1 = (function (){var statearr_11351 = state_11343;
(statearr_11351[(8)] = inst_11329__$1);

return statearr_11351;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11343__$1,(8),jobs,inst_11332);
} else {
if((state_val_11344 === (3))){
var inst_11341 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11343__$1,inst_11341);
} else {
if((state_val_11344 === (2))){
var state_11343__$1 = state_11343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11343__$1,(4),from);
} else {
if((state_val_11344 === (9))){
var inst_11336 = (state_11343[(2)]);
var state_11343__$1 = (function (){var statearr_11352 = state_11343;
(statearr_11352[(9)] = inst_11336);

return statearr_11352;
})();
var statearr_11353_13093 = state_11343__$1;
(statearr_11353_13093[(2)] = null);

(statearr_11353_13093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (5))){
var inst_11327 = cljs.core.async.close_BANG_(jobs);
var state_11343__$1 = state_11343;
var statearr_11354_13094 = state_11343__$1;
(statearr_11354_13094[(2)] = inst_11327);

(statearr_11354_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (8))){
var inst_11329 = (state_11343[(8)]);
var inst_11334 = (state_11343[(2)]);
var state_11343__$1 = (function (){var statearr_11355 = state_11343;
(statearr_11355[(10)] = inst_11334);

return statearr_11355;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11343__$1,(9),results,inst_11329);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0 = (function (){
var statearr_11360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11360[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__);

(statearr_11360[(1)] = (1));

return statearr_11360;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1 = (function (state_11343){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11343);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11365){var ex__11011__auto__ = e11365;
var statearr_11366_13095 = state_11343;
(statearr_11366_13095[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11343[(4)]))){
var statearr_11367_13096 = state_11343;
(statearr_11367_13096[(1)] = cljs.core.first((state_11343[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11343;
state_11343 = G__13097;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = function(state_11343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1.call(this,state_11343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_11372 = f__11068__auto__();
(statearr_11372[(6)] = c__11067__auto___13088);

return statearr_11372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));


var c__11067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_11423){
var state_val_11424 = (state_11423[(1)]);
if((state_val_11424 === (7))){
var inst_11419 = (state_11423[(2)]);
var state_11423__$1 = state_11423;
var statearr_11430_13098 = state_11423__$1;
(statearr_11430_13098[(2)] = inst_11419);

(statearr_11430_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (20))){
var state_11423__$1 = state_11423;
var statearr_11431_13099 = state_11423__$1;
(statearr_11431_13099[(2)] = null);

(statearr_11431_13099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (1))){
var state_11423__$1 = state_11423;
var statearr_11433_13100 = state_11423__$1;
(statearr_11433_13100[(2)] = null);

(statearr_11433_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (4))){
var inst_11375 = (state_11423[(7)]);
var inst_11375__$1 = (state_11423[(2)]);
var inst_11376 = (inst_11375__$1 == null);
var state_11423__$1 = (function (){var statearr_11436 = state_11423;
(statearr_11436[(7)] = inst_11375__$1);

return statearr_11436;
})();
if(cljs.core.truth_(inst_11376)){
var statearr_11437_13101 = state_11423__$1;
(statearr_11437_13101[(1)] = (5));

} else {
var statearr_11438_13102 = state_11423__$1;
(statearr_11438_13102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (15))){
var inst_11401 = (state_11423[(8)]);
var state_11423__$1 = state_11423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11423__$1,(18),to,inst_11401);
} else {
if((state_val_11424 === (21))){
var inst_11414 = (state_11423[(2)]);
var state_11423__$1 = state_11423;
var statearr_11442_13103 = state_11423__$1;
(statearr_11442_13103[(2)] = inst_11414);

(statearr_11442_13103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (13))){
var inst_11416 = (state_11423[(2)]);
var state_11423__$1 = (function (){var statearr_11443 = state_11423;
(statearr_11443[(9)] = inst_11416);

return statearr_11443;
})();
var statearr_11444_13104 = state_11423__$1;
(statearr_11444_13104[(2)] = null);

(statearr_11444_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (6))){
var inst_11375 = (state_11423[(7)]);
var state_11423__$1 = state_11423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11423__$1,(11),inst_11375);
} else {
if((state_val_11424 === (17))){
var inst_11409 = (state_11423[(2)]);
var state_11423__$1 = state_11423;
if(cljs.core.truth_(inst_11409)){
var statearr_11447_13105 = state_11423__$1;
(statearr_11447_13105[(1)] = (19));

} else {
var statearr_11449_13106 = state_11423__$1;
(statearr_11449_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (3))){
var inst_11421 = (state_11423[(2)]);
var state_11423__$1 = state_11423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11423__$1,inst_11421);
} else {
if((state_val_11424 === (12))){
var inst_11390 = (state_11423[(10)]);
var state_11423__$1 = state_11423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11423__$1,(14),inst_11390);
} else {
if((state_val_11424 === (2))){
var state_11423__$1 = state_11423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11423__$1,(4),results);
} else {
if((state_val_11424 === (19))){
var state_11423__$1 = state_11423;
var statearr_11460_13107 = state_11423__$1;
(statearr_11460_13107[(2)] = null);

(statearr_11460_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (11))){
var inst_11390 = (state_11423[(2)]);
var state_11423__$1 = (function (){var statearr_11461 = state_11423;
(statearr_11461[(10)] = inst_11390);

return statearr_11461;
})();
var statearr_11462_13108 = state_11423__$1;
(statearr_11462_13108[(2)] = null);

(statearr_11462_13108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (9))){
var state_11423__$1 = state_11423;
var statearr_11463_13109 = state_11423__$1;
(statearr_11463_13109[(2)] = null);

(statearr_11463_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (5))){
var state_11423__$1 = state_11423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11464_13110 = state_11423__$1;
(statearr_11464_13110[(1)] = (8));

} else {
var statearr_11465_13111 = state_11423__$1;
(statearr_11465_13111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (14))){
var inst_11401 = (state_11423[(8)]);
var inst_11401__$1 = (state_11423[(2)]);
var inst_11402 = (inst_11401__$1 == null);
var inst_11403 = cljs.core.not(inst_11402);
var state_11423__$1 = (function (){var statearr_11468 = state_11423;
(statearr_11468[(8)] = inst_11401__$1);

return statearr_11468;
})();
if(inst_11403){
var statearr_11469_13112 = state_11423__$1;
(statearr_11469_13112[(1)] = (15));

} else {
var statearr_11470_13113 = state_11423__$1;
(statearr_11470_13113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (16))){
var state_11423__$1 = state_11423;
var statearr_11471_13114 = state_11423__$1;
(statearr_11471_13114[(2)] = false);

(statearr_11471_13114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (10))){
var inst_11387 = (state_11423[(2)]);
var state_11423__$1 = state_11423;
var statearr_11472_13115 = state_11423__$1;
(statearr_11472_13115[(2)] = inst_11387);

(statearr_11472_13115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (18))){
var inst_11406 = (state_11423[(2)]);
var state_11423__$1 = state_11423;
var statearr_11473_13116 = state_11423__$1;
(statearr_11473_13116[(2)] = inst_11406);

(statearr_11473_13116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11424 === (8))){
var inst_11379 = cljs.core.async.close_BANG_(to);
var state_11423__$1 = state_11423;
var statearr_11474_13117 = state_11423__$1;
(statearr_11474_13117[(2)] = inst_11379);

(statearr_11474_13117[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0 = (function (){
var statearr_11475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__);

(statearr_11475[(1)] = (1));

return statearr_11475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1 = (function (state_11423){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11423);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11476){var ex__11011__auto__ = e11476;
var statearr_11477_13118 = state_11423;
(statearr_11477_13118[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11423[(4)]))){
var statearr_11478_13119 = state_11423;
(statearr_11478_13119[(1)] = cljs.core.first((state_11423[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11423;
state_11423 = G__13120;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__ = function(state_11423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1.call(this,state_11423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_11479 = f__11068__auto__();
(statearr_11479[(6)] = c__11067__auto__);

return statearr_11479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));

return c__11067__auto__;
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
var G__11481 = arguments.length;
switch (G__11481) {
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
var G__11491 = arguments.length;
switch (G__11491) {
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
var G__11493 = arguments.length;
switch (G__11493) {
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
var c__11067__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_11532){
var state_val_11533 = (state_11532[(1)]);
if((state_val_11533 === (7))){
var inst_11528 = (state_11532[(2)]);
var state_11532__$1 = state_11532;
var statearr_11534_13125 = state_11532__$1;
(statearr_11534_13125[(2)] = inst_11528);

(statearr_11534_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (1))){
var state_11532__$1 = state_11532;
var statearr_11535_13126 = state_11532__$1;
(statearr_11535_13126[(2)] = null);

(statearr_11535_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (4))){
var inst_11496 = (state_11532[(7)]);
var inst_11496__$1 = (state_11532[(2)]);
var inst_11497 = (inst_11496__$1 == null);
var state_11532__$1 = (function (){var statearr_11536 = state_11532;
(statearr_11536[(7)] = inst_11496__$1);

return statearr_11536;
})();
if(cljs.core.truth_(inst_11497)){
var statearr_11537_13127 = state_11532__$1;
(statearr_11537_13127[(1)] = (5));

} else {
var statearr_11538_13128 = state_11532__$1;
(statearr_11538_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (13))){
var state_11532__$1 = state_11532;
var statearr_11539_13129 = state_11532__$1;
(statearr_11539_13129[(2)] = null);

(statearr_11539_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (6))){
var inst_11496 = (state_11532[(7)]);
var inst_11502 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11496) : p.call(null,inst_11496));
var state_11532__$1 = state_11532;
if(cljs.core.truth_(inst_11502)){
var statearr_11551_13130 = state_11532__$1;
(statearr_11551_13130[(1)] = (9));

} else {
var statearr_11552_13131 = state_11532__$1;
(statearr_11552_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (3))){
var inst_11530 = (state_11532[(2)]);
var state_11532__$1 = state_11532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11532__$1,inst_11530);
} else {
if((state_val_11533 === (12))){
var state_11532__$1 = state_11532;
var statearr_11553_13132 = state_11532__$1;
(statearr_11553_13132[(2)] = null);

(statearr_11553_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (2))){
var state_11532__$1 = state_11532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11532__$1,(4),ch);
} else {
if((state_val_11533 === (11))){
var inst_11496 = (state_11532[(7)]);
var inst_11519 = (state_11532[(2)]);
var state_11532__$1 = state_11532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11532__$1,(8),inst_11519,inst_11496);
} else {
if((state_val_11533 === (9))){
var state_11532__$1 = state_11532;
var statearr_11554_13133 = state_11532__$1;
(statearr_11554_13133[(2)] = tc);

(statearr_11554_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (5))){
var inst_11499 = cljs.core.async.close_BANG_(tc);
var inst_11500 = cljs.core.async.close_BANG_(fc);
var state_11532__$1 = (function (){var statearr_11555 = state_11532;
(statearr_11555[(8)] = inst_11499);

return statearr_11555;
})();
var statearr_11556_13134 = state_11532__$1;
(statearr_11556_13134[(2)] = inst_11500);

(statearr_11556_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (14))){
var inst_11526 = (state_11532[(2)]);
var state_11532__$1 = state_11532;
var statearr_11557_13135 = state_11532__$1;
(statearr_11557_13135[(2)] = inst_11526);

(statearr_11557_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (10))){
var state_11532__$1 = state_11532;
var statearr_11558_13136 = state_11532__$1;
(statearr_11558_13136[(2)] = fc);

(statearr_11558_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11533 === (8))){
var inst_11521 = (state_11532[(2)]);
var state_11532__$1 = state_11532;
if(cljs.core.truth_(inst_11521)){
var statearr_11559_13137 = state_11532__$1;
(statearr_11559_13137[(1)] = (12));

} else {
var statearr_11560_13138 = state_11532__$1;
(statearr_11560_13138[(1)] = (13));

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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_11561 = [null,null,null,null,null,null,null,null,null];
(statearr_11561[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_11561[(1)] = (1));

return statearr_11561;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_11532){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11532);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11562){var ex__11011__auto__ = e11562;
var statearr_11563_13139 = state_11532;
(statearr_11563_13139[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11532[(4)]))){
var statearr_11564_13140 = state_11532;
(statearr_11564_13140[(1)] = cljs.core.first((state_11532[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11532;
state_11532 = G__13141;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_11532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_11532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_11565 = f__11068__auto__();
(statearr_11565[(6)] = c__11067__auto___13124);

return statearr_11565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
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
var c__11067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_11587){
var state_val_11588 = (state_11587[(1)]);
if((state_val_11588 === (7))){
var inst_11583 = (state_11587[(2)]);
var state_11587__$1 = state_11587;
var statearr_11589_13142 = state_11587__$1;
(statearr_11589_13142[(2)] = inst_11583);

(statearr_11589_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (1))){
var inst_11566 = init;
var inst_11567 = inst_11566;
var state_11587__$1 = (function (){var statearr_11590 = state_11587;
(statearr_11590[(7)] = inst_11567);

return statearr_11590;
})();
var statearr_11591_13143 = state_11587__$1;
(statearr_11591_13143[(2)] = null);

(statearr_11591_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (4))){
var inst_11570 = (state_11587[(8)]);
var inst_11570__$1 = (state_11587[(2)]);
var inst_11571 = (inst_11570__$1 == null);
var state_11587__$1 = (function (){var statearr_11592 = state_11587;
(statearr_11592[(8)] = inst_11570__$1);

return statearr_11592;
})();
if(cljs.core.truth_(inst_11571)){
var statearr_11593_13144 = state_11587__$1;
(statearr_11593_13144[(1)] = (5));

} else {
var statearr_11607_13145 = state_11587__$1;
(statearr_11607_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (6))){
var inst_11570 = (state_11587[(8)]);
var inst_11567 = (state_11587[(7)]);
var inst_11574 = (state_11587[(9)]);
var inst_11574__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11567,inst_11570) : f.call(null,inst_11567,inst_11570));
var inst_11575 = cljs.core.reduced_QMARK_(inst_11574__$1);
var state_11587__$1 = (function (){var statearr_11608 = state_11587;
(statearr_11608[(9)] = inst_11574__$1);

return statearr_11608;
})();
if(inst_11575){
var statearr_11609_13146 = state_11587__$1;
(statearr_11609_13146[(1)] = (8));

} else {
var statearr_11610_13147 = state_11587__$1;
(statearr_11610_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (3))){
var inst_11585 = (state_11587[(2)]);
var state_11587__$1 = state_11587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11587__$1,inst_11585);
} else {
if((state_val_11588 === (2))){
var state_11587__$1 = state_11587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11587__$1,(4),ch);
} else {
if((state_val_11588 === (9))){
var inst_11574 = (state_11587[(9)]);
var inst_11567 = inst_11574;
var state_11587__$1 = (function (){var statearr_11611 = state_11587;
(statearr_11611[(7)] = inst_11567);

return statearr_11611;
})();
var statearr_11612_13148 = state_11587__$1;
(statearr_11612_13148[(2)] = null);

(statearr_11612_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (5))){
var inst_11567 = (state_11587[(7)]);
var state_11587__$1 = state_11587;
var statearr_11630_13149 = state_11587__$1;
(statearr_11630_13149[(2)] = inst_11567);

(statearr_11630_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (10))){
var inst_11581 = (state_11587[(2)]);
var state_11587__$1 = state_11587;
var statearr_11631_13150 = state_11587__$1;
(statearr_11631_13150[(2)] = inst_11581);

(statearr_11631_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (8))){
var inst_11574 = (state_11587[(9)]);
var inst_11577 = cljs.core.deref(inst_11574);
var state_11587__$1 = state_11587;
var statearr_11634_13151 = state_11587__$1;
(statearr_11634_13151[(2)] = inst_11577);

(statearr_11634_13151[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11008__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11008__auto____0 = (function (){
var statearr_11637 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11637[(0)] = cljs$core$async$reduce_$_state_machine__11008__auto__);

(statearr_11637[(1)] = (1));

return statearr_11637;
});
var cljs$core$async$reduce_$_state_machine__11008__auto____1 = (function (state_11587){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11587);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11638){var ex__11011__auto__ = e11638;
var statearr_11639_13152 = state_11587;
(statearr_11639_13152[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11587[(4)]))){
var statearr_11640_13153 = state_11587;
(statearr_11640_13153[(1)] = cljs.core.first((state_11587[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11587;
state_11587 = G__13154;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11008__auto__ = function(state_11587){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11008__auto____1.call(this,state_11587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11008__auto____0;
cljs$core$async$reduce_$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11008__auto____1;
return cljs$core$async$reduce_$_state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_11645 = f__11068__auto__();
(statearr_11645[(6)] = c__11067__auto__);

return statearr_11645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));

return c__11067__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__11067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_11654){
var state_val_11655 = (state_11654[(1)]);
if((state_val_11655 === (1))){
var inst_11649 = cljs.core.async.reduce(f__$1,init,ch);
var state_11654__$1 = state_11654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11654__$1,(2),inst_11649);
} else {
if((state_val_11655 === (2))){
var inst_11651 = (state_11654[(2)]);
var inst_11652 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11651) : f__$1.call(null,inst_11651));
var state_11654__$1 = state_11654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11654__$1,inst_11652);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11008__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11008__auto____0 = (function (){
var statearr_11664 = [null,null,null,null,null,null,null];
(statearr_11664[(0)] = cljs$core$async$transduce_$_state_machine__11008__auto__);

(statearr_11664[(1)] = (1));

return statearr_11664;
});
var cljs$core$async$transduce_$_state_machine__11008__auto____1 = (function (state_11654){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11654);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11665){var ex__11011__auto__ = e11665;
var statearr_11666_13155 = state_11654;
(statearr_11666_13155[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11654[(4)]))){
var statearr_11667_13156 = state_11654;
(statearr_11667_13156[(1)] = cljs.core.first((state_11654[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11654;
state_11654 = G__13157;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11008__auto__ = function(state_11654){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11008__auto____1.call(this,state_11654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11008__auto____0;
cljs$core$async$transduce_$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11008__auto____1;
return cljs$core$async$transduce_$_state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_11669 = f__11068__auto__();
(statearr_11669[(6)] = c__11067__auto__);

return statearr_11669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));

return c__11067__auto__;
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
var G__11671 = arguments.length;
switch (G__11671) {
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
var c__11067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_11697){
var state_val_11698 = (state_11697[(1)]);
if((state_val_11698 === (7))){
var inst_11679 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
var statearr_11699_13159 = state_11697__$1;
(statearr_11699_13159[(2)] = inst_11679);

(statearr_11699_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (1))){
var inst_11673 = cljs.core.seq(coll);
var inst_11674 = inst_11673;
var state_11697__$1 = (function (){var statearr_11700 = state_11697;
(statearr_11700[(7)] = inst_11674);

return statearr_11700;
})();
var statearr_11701_13160 = state_11697__$1;
(statearr_11701_13160[(2)] = null);

(statearr_11701_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (4))){
var inst_11674 = (state_11697[(7)]);
var inst_11677 = cljs.core.first(inst_11674);
var state_11697__$1 = state_11697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11697__$1,(7),ch,inst_11677);
} else {
if((state_val_11698 === (13))){
var inst_11691 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
var statearr_11702_13161 = state_11697__$1;
(statearr_11702_13161[(2)] = inst_11691);

(statearr_11702_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (6))){
var inst_11682 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
if(cljs.core.truth_(inst_11682)){
var statearr_11703_13162 = state_11697__$1;
(statearr_11703_13162[(1)] = (8));

} else {
var statearr_11704_13163 = state_11697__$1;
(statearr_11704_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (3))){
var inst_11695 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11697__$1,inst_11695);
} else {
if((state_val_11698 === (12))){
var state_11697__$1 = state_11697;
var statearr_11709_13164 = state_11697__$1;
(statearr_11709_13164[(2)] = null);

(statearr_11709_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (2))){
var inst_11674 = (state_11697[(7)]);
var state_11697__$1 = state_11697;
if(cljs.core.truth_(inst_11674)){
var statearr_11710_13165 = state_11697__$1;
(statearr_11710_13165[(1)] = (4));

} else {
var statearr_11711_13166 = state_11697__$1;
(statearr_11711_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (11))){
var inst_11688 = cljs.core.async.close_BANG_(ch);
var state_11697__$1 = state_11697;
var statearr_11712_13167 = state_11697__$1;
(statearr_11712_13167[(2)] = inst_11688);

(statearr_11712_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (9))){
var state_11697__$1 = state_11697;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11714_13168 = state_11697__$1;
(statearr_11714_13168[(1)] = (11));

} else {
var statearr_11715_13169 = state_11697__$1;
(statearr_11715_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (5))){
var inst_11674 = (state_11697[(7)]);
var state_11697__$1 = state_11697;
var statearr_11716_13170 = state_11697__$1;
(statearr_11716_13170[(2)] = inst_11674);

(statearr_11716_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (10))){
var inst_11693 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
var statearr_11717_13171 = state_11697__$1;
(statearr_11717_13171[(2)] = inst_11693);

(statearr_11717_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (8))){
var inst_11674 = (state_11697[(7)]);
var inst_11684 = cljs.core.next(inst_11674);
var inst_11674__$1 = inst_11684;
var state_11697__$1 = (function (){var statearr_11718 = state_11697;
(statearr_11718[(7)] = inst_11674__$1);

return statearr_11718;
})();
var statearr_11719_13172 = state_11697__$1;
(statearr_11719_13172[(2)] = null);

(statearr_11719_13172[(1)] = (2));


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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_11721 = [null,null,null,null,null,null,null,null];
(statearr_11721[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_11721[(1)] = (1));

return statearr_11721;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_11697){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11697);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e11723){var ex__11011__auto__ = e11723;
var statearr_11724_13173 = state_11697;
(statearr_11724_13173[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11697[(4)]))){
var statearr_11725_13174 = state_11697;
(statearr_11725_13174[(1)] = cljs.core.first((state_11697[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11697;
state_11697 = G__13175;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_11697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_11697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_11726 = f__11068__auto__();
(statearr_11726[(6)] = c__11067__auto__);

return statearr_11726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));

return c__11067__auto__;
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
var G__11739 = arguments.length;
switch (G__11739) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11793 = (function (ch,cs,meta11794){
this.ch = ch;
this.cs = cs;
this.meta11794 = meta11794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11795,meta11794__$1){
var self__ = this;
var _11795__$1 = this;
return (new cljs.core.async.t_cljs$core$async11793(self__.ch,self__.cs,meta11794__$1));
}));

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11795){
var self__ = this;
var _11795__$1 = this;
return self__.meta11794;
}));

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11794","meta11794",1907107238,null)], null);
}));

(cljs.core.async.t_cljs$core$async11793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11793");

(cljs.core.async.t_cljs$core$async11793.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11793.
 */
cljs.core.async.__GT_t_cljs$core$async11793 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11793(ch__$1,cs__$1,meta11794){
return (new cljs.core.async.t_cljs$core$async11793(ch__$1,cs__$1,meta11794));
});

}

return (new cljs.core.async.t_cljs$core$async11793(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11067__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_11974){
var state_val_11975 = (state_11974[(1)]);
if((state_val_11975 === (7))){
var inst_11970 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_11976_13182 = state_11974__$1;
(statearr_11976_13182[(2)] = inst_11970);

(statearr_11976_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (20))){
var inst_11875 = (state_11974[(7)]);
var inst_11887 = cljs.core.first(inst_11875);
var inst_11888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11887,(0),null);
var inst_11889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11887,(1),null);
var state_11974__$1 = (function (){var statearr_11977 = state_11974;
(statearr_11977[(8)] = inst_11888);

return statearr_11977;
})();
if(cljs.core.truth_(inst_11889)){
var statearr_11978_13183 = state_11974__$1;
(statearr_11978_13183[(1)] = (22));

} else {
var statearr_11979_13184 = state_11974__$1;
(statearr_11979_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (27))){
var inst_11917 = (state_11974[(9)]);
var inst_11919 = (state_11974[(10)]);
var inst_11835 = (state_11974[(11)]);
var inst_11924 = (state_11974[(12)]);
var inst_11924__$1 = cljs.core._nth(inst_11917,inst_11919);
var inst_11925 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11924__$1,inst_11835,done);
var state_11974__$1 = (function (){var statearr_11984 = state_11974;
(statearr_11984[(12)] = inst_11924__$1);

return statearr_11984;
})();
if(cljs.core.truth_(inst_11925)){
var statearr_11985_13185 = state_11974__$1;
(statearr_11985_13185[(1)] = (30));

} else {
var statearr_11986_13186 = state_11974__$1;
(statearr_11986_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (1))){
var state_11974__$1 = state_11974;
var statearr_11987_13187 = state_11974__$1;
(statearr_11987_13187[(2)] = null);

(statearr_11987_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (24))){
var inst_11875 = (state_11974[(7)]);
var inst_11894 = (state_11974[(2)]);
var inst_11895 = cljs.core.next(inst_11875);
var inst_11844 = inst_11895;
var inst_11845 = null;
var inst_11846 = (0);
var inst_11847 = (0);
var state_11974__$1 = (function (){var statearr_11988 = state_11974;
(statearr_11988[(13)] = inst_11845);

(statearr_11988[(14)] = inst_11844);

(statearr_11988[(15)] = inst_11847);

(statearr_11988[(16)] = inst_11846);

(statearr_11988[(17)] = inst_11894);

return statearr_11988;
})();
var statearr_11989_13188 = state_11974__$1;
(statearr_11989_13188[(2)] = null);

(statearr_11989_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (39))){
var state_11974__$1 = state_11974;
var statearr_11993_13189 = state_11974__$1;
(statearr_11993_13189[(2)] = null);

(statearr_11993_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (4))){
var inst_11835 = (state_11974[(11)]);
var inst_11835__$1 = (state_11974[(2)]);
var inst_11836 = (inst_11835__$1 == null);
var state_11974__$1 = (function (){var statearr_11994 = state_11974;
(statearr_11994[(11)] = inst_11835__$1);

return statearr_11994;
})();
if(cljs.core.truth_(inst_11836)){
var statearr_11995_13190 = state_11974__$1;
(statearr_11995_13190[(1)] = (5));

} else {
var statearr_11996_13191 = state_11974__$1;
(statearr_11996_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (15))){
var inst_11845 = (state_11974[(13)]);
var inst_11844 = (state_11974[(14)]);
var inst_11847 = (state_11974[(15)]);
var inst_11846 = (state_11974[(16)]);
var inst_11862 = (state_11974[(2)]);
var inst_11863 = (inst_11847 + (1));
var tmp11990 = inst_11845;
var tmp11991 = inst_11844;
var tmp11992 = inst_11846;
var inst_11844__$1 = tmp11991;
var inst_11845__$1 = tmp11990;
var inst_11846__$1 = tmp11992;
var inst_11847__$1 = inst_11863;
var state_11974__$1 = (function (){var statearr_11998 = state_11974;
(statearr_11998[(13)] = inst_11845__$1);

(statearr_11998[(14)] = inst_11844__$1);

(statearr_11998[(15)] = inst_11847__$1);

(statearr_11998[(18)] = inst_11862);

(statearr_11998[(16)] = inst_11846__$1);

return statearr_11998;
})();
var statearr_11999_13192 = state_11974__$1;
(statearr_11999_13192[(2)] = null);

(statearr_11999_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (21))){
var inst_11898 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12004_13193 = state_11974__$1;
(statearr_12004_13193[(2)] = inst_11898);

(statearr_12004_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (31))){
var inst_11924 = (state_11974[(12)]);
var inst_11928 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11924);
var state_11974__$1 = state_11974;
var statearr_12006_13194 = state_11974__$1;
(statearr_12006_13194[(2)] = inst_11928);

(statearr_12006_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (32))){
var inst_11918 = (state_11974[(19)]);
var inst_11916 = (state_11974[(20)]);
var inst_11917 = (state_11974[(9)]);
var inst_11919 = (state_11974[(10)]);
var inst_11930 = (state_11974[(2)]);
var inst_11931 = (inst_11919 + (1));
var tmp12001 = inst_11918;
var tmp12002 = inst_11916;
var tmp12003 = inst_11917;
var inst_11916__$1 = tmp12002;
var inst_11917__$1 = tmp12003;
var inst_11918__$1 = tmp12001;
var inst_11919__$1 = inst_11931;
var state_11974__$1 = (function (){var statearr_12015 = state_11974;
(statearr_12015[(19)] = inst_11918__$1);

(statearr_12015[(20)] = inst_11916__$1);

(statearr_12015[(21)] = inst_11930);

(statearr_12015[(9)] = inst_11917__$1);

(statearr_12015[(10)] = inst_11919__$1);

return statearr_12015;
})();
var statearr_12017_13195 = state_11974__$1;
(statearr_12017_13195[(2)] = null);

(statearr_12017_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (40))){
var inst_11943 = (state_11974[(22)]);
var inst_11947 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11943);
var state_11974__$1 = state_11974;
var statearr_12018_13196 = state_11974__$1;
(statearr_12018_13196[(2)] = inst_11947);

(statearr_12018_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (33))){
var inst_11934 = (state_11974[(23)]);
var inst_11936 = cljs.core.chunked_seq_QMARK_(inst_11934);
var state_11974__$1 = state_11974;
if(inst_11936){
var statearr_12020_13197 = state_11974__$1;
(statearr_12020_13197[(1)] = (36));

} else {
var statearr_12021_13198 = state_11974__$1;
(statearr_12021_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (13))){
var inst_11856 = (state_11974[(24)]);
var inst_11859 = cljs.core.async.close_BANG_(inst_11856);
var state_11974__$1 = state_11974;
var statearr_12023_13199 = state_11974__$1;
(statearr_12023_13199[(2)] = inst_11859);

(statearr_12023_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (22))){
var inst_11888 = (state_11974[(8)]);
var inst_11891 = cljs.core.async.close_BANG_(inst_11888);
var state_11974__$1 = state_11974;
var statearr_12027_13200 = state_11974__$1;
(statearr_12027_13200[(2)] = inst_11891);

(statearr_12027_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (36))){
var inst_11934 = (state_11974[(23)]);
var inst_11938 = cljs.core.chunk_first(inst_11934);
var inst_11939 = cljs.core.chunk_rest(inst_11934);
var inst_11940 = cljs.core.count(inst_11938);
var inst_11916 = inst_11939;
var inst_11917 = inst_11938;
var inst_11918 = inst_11940;
var inst_11919 = (0);
var state_11974__$1 = (function (){var statearr_12028 = state_11974;
(statearr_12028[(19)] = inst_11918);

(statearr_12028[(20)] = inst_11916);

(statearr_12028[(9)] = inst_11917);

(statearr_12028[(10)] = inst_11919);

return statearr_12028;
})();
var statearr_12029_13201 = state_11974__$1;
(statearr_12029_13201[(2)] = null);

(statearr_12029_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (41))){
var inst_11934 = (state_11974[(23)]);
var inst_11949 = (state_11974[(2)]);
var inst_11950 = cljs.core.next(inst_11934);
var inst_11916 = inst_11950;
var inst_11917 = null;
var inst_11918 = (0);
var inst_11919 = (0);
var state_11974__$1 = (function (){var statearr_12030 = state_11974;
(statearr_12030[(25)] = inst_11949);

(statearr_12030[(19)] = inst_11918);

(statearr_12030[(20)] = inst_11916);

(statearr_12030[(9)] = inst_11917);

(statearr_12030[(10)] = inst_11919);

return statearr_12030;
})();
var statearr_12031_13202 = state_11974__$1;
(statearr_12031_13202[(2)] = null);

(statearr_12031_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (43))){
var state_11974__$1 = state_11974;
var statearr_12045_13203 = state_11974__$1;
(statearr_12045_13203[(2)] = null);

(statearr_12045_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (29))){
var inst_11958 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12054_13204 = state_11974__$1;
(statearr_12054_13204[(2)] = inst_11958);

(statearr_12054_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (44))){
var inst_11967 = (state_11974[(2)]);
var state_11974__$1 = (function (){var statearr_12060 = state_11974;
(statearr_12060[(26)] = inst_11967);

return statearr_12060;
})();
var statearr_12064_13205 = state_11974__$1;
(statearr_12064_13205[(2)] = null);

(statearr_12064_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (6))){
var inst_11908 = (state_11974[(27)]);
var inst_11907 = cljs.core.deref(cs);
var inst_11908__$1 = cljs.core.keys(inst_11907);
var inst_11909 = cljs.core.count(inst_11908__$1);
var inst_11910 = cljs.core.reset_BANG_(dctr,inst_11909);
var inst_11915 = cljs.core.seq(inst_11908__$1);
var inst_11916 = inst_11915;
var inst_11917 = null;
var inst_11918 = (0);
var inst_11919 = (0);
var state_11974__$1 = (function (){var statearr_12077 = state_11974;
(statearr_12077[(19)] = inst_11918);

(statearr_12077[(20)] = inst_11916);

(statearr_12077[(9)] = inst_11917);

(statearr_12077[(27)] = inst_11908__$1);

(statearr_12077[(10)] = inst_11919);

(statearr_12077[(28)] = inst_11910);

return statearr_12077;
})();
var statearr_12083_13206 = state_11974__$1;
(statearr_12083_13206[(2)] = null);

(statearr_12083_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (28))){
var inst_11934 = (state_11974[(23)]);
var inst_11916 = (state_11974[(20)]);
var inst_11934__$1 = cljs.core.seq(inst_11916);
var state_11974__$1 = (function (){var statearr_12084 = state_11974;
(statearr_12084[(23)] = inst_11934__$1);

return statearr_12084;
})();
if(inst_11934__$1){
var statearr_12085_13207 = state_11974__$1;
(statearr_12085_13207[(1)] = (33));

} else {
var statearr_12086_13208 = state_11974__$1;
(statearr_12086_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (25))){
var inst_11918 = (state_11974[(19)]);
var inst_11919 = (state_11974[(10)]);
var inst_11921 = (inst_11919 < inst_11918);
var inst_11922 = inst_11921;
var state_11974__$1 = state_11974;
if(cljs.core.truth_(inst_11922)){
var statearr_12087_13209 = state_11974__$1;
(statearr_12087_13209[(1)] = (27));

} else {
var statearr_12089_13210 = state_11974__$1;
(statearr_12089_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (34))){
var state_11974__$1 = state_11974;
var statearr_12106_13211 = state_11974__$1;
(statearr_12106_13211[(2)] = null);

(statearr_12106_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (17))){
var state_11974__$1 = state_11974;
var statearr_12108_13212 = state_11974__$1;
(statearr_12108_13212[(2)] = null);

(statearr_12108_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (3))){
var inst_11972 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11974__$1,inst_11972);
} else {
if((state_val_11975 === (12))){
var inst_11903 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12109_13213 = state_11974__$1;
(statearr_12109_13213[(2)] = inst_11903);

(statearr_12109_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (2))){
var state_11974__$1 = state_11974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11974__$1,(4),ch);
} else {
if((state_val_11975 === (23))){
var state_11974__$1 = state_11974;
var statearr_12112_13214 = state_11974__$1;
(statearr_12112_13214[(2)] = null);

(statearr_12112_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (35))){
var inst_11956 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12114_13215 = state_11974__$1;
(statearr_12114_13215[(2)] = inst_11956);

(statearr_12114_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (19))){
var inst_11875 = (state_11974[(7)]);
var inst_11879 = cljs.core.chunk_first(inst_11875);
var inst_11880 = cljs.core.chunk_rest(inst_11875);
var inst_11881 = cljs.core.count(inst_11879);
var inst_11844 = inst_11880;
var inst_11845 = inst_11879;
var inst_11846 = inst_11881;
var inst_11847 = (0);
var state_11974__$1 = (function (){var statearr_12115 = state_11974;
(statearr_12115[(13)] = inst_11845);

(statearr_12115[(14)] = inst_11844);

(statearr_12115[(15)] = inst_11847);

(statearr_12115[(16)] = inst_11846);

return statearr_12115;
})();
var statearr_12117_13216 = state_11974__$1;
(statearr_12117_13216[(2)] = null);

(statearr_12117_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (11))){
var inst_11844 = (state_11974[(14)]);
var inst_11875 = (state_11974[(7)]);
var inst_11875__$1 = cljs.core.seq(inst_11844);
var state_11974__$1 = (function (){var statearr_12119 = state_11974;
(statearr_12119[(7)] = inst_11875__$1);

return statearr_12119;
})();
if(inst_11875__$1){
var statearr_12120_13217 = state_11974__$1;
(statearr_12120_13217[(1)] = (16));

} else {
var statearr_12121_13218 = state_11974__$1;
(statearr_12121_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (9))){
var inst_11905 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12123_13219 = state_11974__$1;
(statearr_12123_13219[(2)] = inst_11905);

(statearr_12123_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (5))){
var inst_11842 = cljs.core.deref(cs);
var inst_11843 = cljs.core.seq(inst_11842);
var inst_11844 = inst_11843;
var inst_11845 = null;
var inst_11846 = (0);
var inst_11847 = (0);
var state_11974__$1 = (function (){var statearr_12124 = state_11974;
(statearr_12124[(13)] = inst_11845);

(statearr_12124[(14)] = inst_11844);

(statearr_12124[(15)] = inst_11847);

(statearr_12124[(16)] = inst_11846);

return statearr_12124;
})();
var statearr_12125_13220 = state_11974__$1;
(statearr_12125_13220[(2)] = null);

(statearr_12125_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (14))){
var state_11974__$1 = state_11974;
var statearr_12126_13221 = state_11974__$1;
(statearr_12126_13221[(2)] = null);

(statearr_12126_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (45))){
var inst_11964 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12127_13222 = state_11974__$1;
(statearr_12127_13222[(2)] = inst_11964);

(statearr_12127_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (26))){
var inst_11908 = (state_11974[(27)]);
var inst_11960 = (state_11974[(2)]);
var inst_11961 = cljs.core.seq(inst_11908);
var state_11974__$1 = (function (){var statearr_12128 = state_11974;
(statearr_12128[(29)] = inst_11960);

return statearr_12128;
})();
if(inst_11961){
var statearr_12129_13223 = state_11974__$1;
(statearr_12129_13223[(1)] = (42));

} else {
var statearr_12130_13224 = state_11974__$1;
(statearr_12130_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (16))){
var inst_11875 = (state_11974[(7)]);
var inst_11877 = cljs.core.chunked_seq_QMARK_(inst_11875);
var state_11974__$1 = state_11974;
if(inst_11877){
var statearr_12131_13225 = state_11974__$1;
(statearr_12131_13225[(1)] = (19));

} else {
var statearr_12132_13226 = state_11974__$1;
(statearr_12132_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (38))){
var inst_11953 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12133_13227 = state_11974__$1;
(statearr_12133_13227[(2)] = inst_11953);

(statearr_12133_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (30))){
var state_11974__$1 = state_11974;
var statearr_12134_13228 = state_11974__$1;
(statearr_12134_13228[(2)] = null);

(statearr_12134_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (10))){
var inst_11845 = (state_11974[(13)]);
var inst_11847 = (state_11974[(15)]);
var inst_11855 = cljs.core._nth(inst_11845,inst_11847);
var inst_11856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11855,(0),null);
var inst_11857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11855,(1),null);
var state_11974__$1 = (function (){var statearr_12136 = state_11974;
(statearr_12136[(24)] = inst_11856);

return statearr_12136;
})();
if(cljs.core.truth_(inst_11857)){
var statearr_12137_13229 = state_11974__$1;
(statearr_12137_13229[(1)] = (13));

} else {
var statearr_12138_13230 = state_11974__$1;
(statearr_12138_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (18))){
var inst_11901 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12139_13231 = state_11974__$1;
(statearr_12139_13231[(2)] = inst_11901);

(statearr_12139_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (42))){
var state_11974__$1 = state_11974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11974__$1,(45),dchan);
} else {
if((state_val_11975 === (37))){
var inst_11934 = (state_11974[(23)]);
var inst_11943 = (state_11974[(22)]);
var inst_11835 = (state_11974[(11)]);
var inst_11943__$1 = cljs.core.first(inst_11934);
var inst_11944 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11943__$1,inst_11835,done);
var state_11974__$1 = (function (){var statearr_12140 = state_11974;
(statearr_12140[(22)] = inst_11943__$1);

return statearr_12140;
})();
if(cljs.core.truth_(inst_11944)){
var statearr_12141_13232 = state_11974__$1;
(statearr_12141_13232[(1)] = (39));

} else {
var statearr_12147_13233 = state_11974__$1;
(statearr_12147_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (8))){
var inst_11847 = (state_11974[(15)]);
var inst_11846 = (state_11974[(16)]);
var inst_11849 = (inst_11847 < inst_11846);
var inst_11850 = inst_11849;
var state_11974__$1 = state_11974;
if(cljs.core.truth_(inst_11850)){
var statearr_12148_13234 = state_11974__$1;
(statearr_12148_13234[(1)] = (10));

} else {
var statearr_12149_13235 = state_11974__$1;
(statearr_12149_13235[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11008__auto__ = null;
var cljs$core$async$mult_$_state_machine__11008__auto____0 = (function (){
var statearr_12151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12151[(0)] = cljs$core$async$mult_$_state_machine__11008__auto__);

(statearr_12151[(1)] = (1));

return statearr_12151;
});
var cljs$core$async$mult_$_state_machine__11008__auto____1 = (function (state_11974){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_11974);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12153){var ex__11011__auto__ = e12153;
var statearr_12154_13236 = state_11974;
(statearr_12154_13236[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_11974[(4)]))){
var statearr_12155_13237 = state_11974;
(statearr_12155_13237[(1)] = cljs.core.first((state_11974[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11974;
state_11974 = G__13238;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11008__auto__ = function(state_11974){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11008__auto____1.call(this,state_11974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11008__auto____0;
cljs$core$async$mult_$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11008__auto____1;
return cljs$core$async$mult_$_state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12157 = f__11068__auto__();
(statearr_12157[(6)] = c__11067__auto___13181);

return statearr_12157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
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
var G__12160 = arguments.length;
switch (G__12160) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12168){
var map__12169 = p__12168;
var map__12169__$1 = (((((!((map__12169 == null))))?(((((map__12169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12169):map__12169);
var opts = map__12169__$1;
var statearr_12171_13248 = state;
(statearr_12171_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12172_13249 = state;
(statearr_12172_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12173_13250 = state;
(statearr_12173_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12164){
var G__12165 = cljs.core.first(seq12164);
var seq12164__$1 = cljs.core.next(seq12164);
var G__12166 = cljs.core.first(seq12164__$1);
var seq12164__$2 = cljs.core.next(seq12164__$1);
var G__12167 = cljs.core.first(seq12164__$2);
var seq12164__$3 = cljs.core.next(seq12164__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12165,G__12166,G__12167,seq12164__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12174 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12175){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12175 = meta12175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12176,meta12175__$1){
var self__ = this;
var _12176__$1 = this;
return (new cljs.core.async.t_cljs$core$async12174(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12175__$1));
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12176){
var self__ = this;
var _12176__$1 = this;
return self__.meta12175;
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12175","meta12175",1259387442,null)], null);
}));

(cljs.core.async.t_cljs$core$async12174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12174");

(cljs.core.async.t_cljs$core$async12174.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12174.
 */
cljs.core.async.__GT_t_cljs$core$async12174 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12174(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12175){
return (new cljs.core.async.t_cljs$core$async12174(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12175));
});

}

return (new cljs.core.async.t_cljs$core$async12174(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11067__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12280){
var state_val_12281 = (state_12280[(1)]);
if((state_val_12281 === (7))){
var inst_12195 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12282_13252 = state_12280__$1;
(statearr_12282_13252[(2)] = inst_12195);

(statearr_12282_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (20))){
var inst_12207 = (state_12280[(7)]);
var state_12280__$1 = state_12280;
var statearr_12305_13253 = state_12280__$1;
(statearr_12305_13253[(2)] = inst_12207);

(statearr_12305_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (27))){
var state_12280__$1 = state_12280;
var statearr_12306_13254 = state_12280__$1;
(statearr_12306_13254[(2)] = null);

(statearr_12306_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (1))){
var inst_12182 = (state_12280[(8)]);
var inst_12182__$1 = calc_state();
var inst_12184 = (inst_12182__$1 == null);
var inst_12185 = cljs.core.not(inst_12184);
var state_12280__$1 = (function (){var statearr_12307 = state_12280;
(statearr_12307[(8)] = inst_12182__$1);

return statearr_12307;
})();
if(inst_12185){
var statearr_12308_13255 = state_12280__$1;
(statearr_12308_13255[(1)] = (2));

} else {
var statearr_12309_13256 = state_12280__$1;
(statearr_12309_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (24))){
var inst_12240 = (state_12280[(9)]);
var inst_12254 = (state_12280[(10)]);
var inst_12231 = (state_12280[(11)]);
var inst_12254__$1 = (inst_12231.cljs$core$IFn$_invoke$arity$1 ? inst_12231.cljs$core$IFn$_invoke$arity$1(inst_12240) : inst_12231.call(null,inst_12240));
var state_12280__$1 = (function (){var statearr_12310 = state_12280;
(statearr_12310[(10)] = inst_12254__$1);

return statearr_12310;
})();
if(cljs.core.truth_(inst_12254__$1)){
var statearr_12311_13257 = state_12280__$1;
(statearr_12311_13257[(1)] = (29));

} else {
var statearr_12312_13258 = state_12280__$1;
(statearr_12312_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (4))){
var inst_12198 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12198)){
var statearr_12315_13259 = state_12280__$1;
(statearr_12315_13259[(1)] = (8));

} else {
var statearr_12316_13260 = state_12280__$1;
(statearr_12316_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (15))){
var inst_12225 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12225)){
var statearr_12318_13261 = state_12280__$1;
(statearr_12318_13261[(1)] = (19));

} else {
var statearr_12319_13262 = state_12280__$1;
(statearr_12319_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (21))){
var inst_12230 = (state_12280[(12)]);
var inst_12230__$1 = (state_12280[(2)]);
var inst_12231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12230__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12230__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12230__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12280__$1 = (function (){var statearr_12320 = state_12280;
(statearr_12320[(13)] = inst_12232);

(statearr_12320[(12)] = inst_12230__$1);

(statearr_12320[(11)] = inst_12231);

return statearr_12320;
})();
return cljs.core.async.ioc_alts_BANG_(state_12280__$1,(22),inst_12233);
} else {
if((state_val_12281 === (31))){
var inst_12262 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12262)){
var statearr_12321_13263 = state_12280__$1;
(statearr_12321_13263[(1)] = (32));

} else {
var statearr_12322_13264 = state_12280__$1;
(statearr_12322_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (32))){
var inst_12239 = (state_12280[(14)]);
var state_12280__$1 = state_12280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12280__$1,(35),out,inst_12239);
} else {
if((state_val_12281 === (33))){
var inst_12230 = (state_12280[(12)]);
var inst_12207 = inst_12230;
var state_12280__$1 = (function (){var statearr_12323 = state_12280;
(statearr_12323[(7)] = inst_12207);

return statearr_12323;
})();
var statearr_12324_13265 = state_12280__$1;
(statearr_12324_13265[(2)] = null);

(statearr_12324_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (13))){
var inst_12207 = (state_12280[(7)]);
var inst_12214 = inst_12207.cljs$lang$protocol_mask$partition0$;
var inst_12215 = (inst_12214 & (64));
var inst_12216 = inst_12207.cljs$core$ISeq$;
var inst_12217 = (cljs.core.PROTOCOL_SENTINEL === inst_12216);
var inst_12218 = ((inst_12215) || (inst_12217));
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12218)){
var statearr_12326_13266 = state_12280__$1;
(statearr_12326_13266[(1)] = (16));

} else {
var statearr_12327_13267 = state_12280__$1;
(statearr_12327_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (22))){
var inst_12240 = (state_12280[(9)]);
var inst_12239 = (state_12280[(14)]);
var inst_12238 = (state_12280[(2)]);
var inst_12239__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12238,(0),null);
var inst_12240__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12238,(1),null);
var inst_12241 = (inst_12239__$1 == null);
var inst_12242 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12240__$1,change);
var inst_12243 = ((inst_12241) || (inst_12242));
var state_12280__$1 = (function (){var statearr_12328 = state_12280;
(statearr_12328[(9)] = inst_12240__$1);

(statearr_12328[(14)] = inst_12239__$1);

return statearr_12328;
})();
if(cljs.core.truth_(inst_12243)){
var statearr_12329_13268 = state_12280__$1;
(statearr_12329_13268[(1)] = (23));

} else {
var statearr_12330_13269 = state_12280__$1;
(statearr_12330_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (36))){
var inst_12230 = (state_12280[(12)]);
var inst_12207 = inst_12230;
var state_12280__$1 = (function (){var statearr_12331 = state_12280;
(statearr_12331[(7)] = inst_12207);

return statearr_12331;
})();
var statearr_12332_13270 = state_12280__$1;
(statearr_12332_13270[(2)] = null);

(statearr_12332_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (29))){
var inst_12254 = (state_12280[(10)]);
var state_12280__$1 = state_12280;
var statearr_12333_13271 = state_12280__$1;
(statearr_12333_13271[(2)] = inst_12254);

(statearr_12333_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (6))){
var state_12280__$1 = state_12280;
var statearr_12334_13272 = state_12280__$1;
(statearr_12334_13272[(2)] = false);

(statearr_12334_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (28))){
var inst_12250 = (state_12280[(2)]);
var inst_12251 = calc_state();
var inst_12207 = inst_12251;
var state_12280__$1 = (function (){var statearr_12335 = state_12280;
(statearr_12335[(15)] = inst_12250);

(statearr_12335[(7)] = inst_12207);

return statearr_12335;
})();
var statearr_12336_13273 = state_12280__$1;
(statearr_12336_13273[(2)] = null);

(statearr_12336_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (25))){
var inst_12276 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12337_13274 = state_12280__$1;
(statearr_12337_13274[(2)] = inst_12276);

(statearr_12337_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (34))){
var inst_12274 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12338_13275 = state_12280__$1;
(statearr_12338_13275[(2)] = inst_12274);

(statearr_12338_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (17))){
var state_12280__$1 = state_12280;
var statearr_12339_13276 = state_12280__$1;
(statearr_12339_13276[(2)] = false);

(statearr_12339_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (3))){
var state_12280__$1 = state_12280;
var statearr_12340_13277 = state_12280__$1;
(statearr_12340_13277[(2)] = false);

(statearr_12340_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (12))){
var inst_12278 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12280__$1,inst_12278);
} else {
if((state_val_12281 === (2))){
var inst_12182 = (state_12280[(8)]);
var inst_12187 = inst_12182.cljs$lang$protocol_mask$partition0$;
var inst_12188 = (inst_12187 & (64));
var inst_12189 = inst_12182.cljs$core$ISeq$;
var inst_12190 = (cljs.core.PROTOCOL_SENTINEL === inst_12189);
var inst_12191 = ((inst_12188) || (inst_12190));
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12191)){
var statearr_12341_13278 = state_12280__$1;
(statearr_12341_13278[(1)] = (5));

} else {
var statearr_12342_13279 = state_12280__$1;
(statearr_12342_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (23))){
var inst_12239 = (state_12280[(14)]);
var inst_12245 = (inst_12239 == null);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12245)){
var statearr_12343_13280 = state_12280__$1;
(statearr_12343_13280[(1)] = (26));

} else {
var statearr_12344_13281 = state_12280__$1;
(statearr_12344_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (35))){
var inst_12265 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12265)){
var statearr_12345_13282 = state_12280__$1;
(statearr_12345_13282[(1)] = (36));

} else {
var statearr_12346_13283 = state_12280__$1;
(statearr_12346_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (19))){
var inst_12207 = (state_12280[(7)]);
var inst_12227 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12207);
var state_12280__$1 = state_12280;
var statearr_12347_13284 = state_12280__$1;
(statearr_12347_13284[(2)] = inst_12227);

(statearr_12347_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (11))){
var inst_12207 = (state_12280[(7)]);
var inst_12211 = (inst_12207 == null);
var inst_12212 = cljs.core.not(inst_12211);
var state_12280__$1 = state_12280;
if(inst_12212){
var statearr_12348_13285 = state_12280__$1;
(statearr_12348_13285[(1)] = (13));

} else {
var statearr_12349_13286 = state_12280__$1;
(statearr_12349_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (9))){
var inst_12182 = (state_12280[(8)]);
var state_12280__$1 = state_12280;
var statearr_12350_13287 = state_12280__$1;
(statearr_12350_13287[(2)] = inst_12182);

(statearr_12350_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (5))){
var state_12280__$1 = state_12280;
var statearr_12351_13288 = state_12280__$1;
(statearr_12351_13288[(2)] = true);

(statearr_12351_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (14))){
var state_12280__$1 = state_12280;
var statearr_12352_13289 = state_12280__$1;
(statearr_12352_13289[(2)] = false);

(statearr_12352_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (26))){
var inst_12240 = (state_12280[(9)]);
var inst_12247 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12240);
var state_12280__$1 = state_12280;
var statearr_12353_13290 = state_12280__$1;
(statearr_12353_13290[(2)] = inst_12247);

(statearr_12353_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (16))){
var state_12280__$1 = state_12280;
var statearr_12354_13291 = state_12280__$1;
(statearr_12354_13291[(2)] = true);

(statearr_12354_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (38))){
var inst_12270 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12355_13292 = state_12280__$1;
(statearr_12355_13292[(2)] = inst_12270);

(statearr_12355_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (30))){
var inst_12240 = (state_12280[(9)]);
var inst_12232 = (state_12280[(13)]);
var inst_12231 = (state_12280[(11)]);
var inst_12257 = cljs.core.empty_QMARK_(inst_12231);
var inst_12258 = (inst_12232.cljs$core$IFn$_invoke$arity$1 ? inst_12232.cljs$core$IFn$_invoke$arity$1(inst_12240) : inst_12232.call(null,inst_12240));
var inst_12259 = cljs.core.not(inst_12258);
var inst_12260 = ((inst_12257) && (inst_12259));
var state_12280__$1 = state_12280;
var statearr_12356_13293 = state_12280__$1;
(statearr_12356_13293[(2)] = inst_12260);

(statearr_12356_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (10))){
var inst_12182 = (state_12280[(8)]);
var inst_12203 = (state_12280[(2)]);
var inst_12204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12203,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12203,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12203,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12207 = inst_12182;
var state_12280__$1 = (function (){var statearr_12357 = state_12280;
(statearr_12357[(16)] = inst_12204);

(statearr_12357[(17)] = inst_12206);

(statearr_12357[(18)] = inst_12205);

(statearr_12357[(7)] = inst_12207);

return statearr_12357;
})();
var statearr_12358_13294 = state_12280__$1;
(statearr_12358_13294[(2)] = null);

(statearr_12358_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (18))){
var inst_12222 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12359_13295 = state_12280__$1;
(statearr_12359_13295[(2)] = inst_12222);

(statearr_12359_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (37))){
var state_12280__$1 = state_12280;
var statearr_12360_13296 = state_12280__$1;
(statearr_12360_13296[(2)] = null);

(statearr_12360_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (8))){
var inst_12182 = (state_12280[(8)]);
var inst_12200 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12182);
var state_12280__$1 = state_12280;
var statearr_12361_13297 = state_12280__$1;
(statearr_12361_13297[(2)] = inst_12200);

(statearr_12361_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__11008__auto__ = null;
var cljs$core$async$mix_$_state_machine__11008__auto____0 = (function (){
var statearr_12362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12362[(0)] = cljs$core$async$mix_$_state_machine__11008__auto__);

(statearr_12362[(1)] = (1));

return statearr_12362;
});
var cljs$core$async$mix_$_state_machine__11008__auto____1 = (function (state_12280){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12280);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12363){var ex__11011__auto__ = e12363;
var statearr_12364_13298 = state_12280;
(statearr_12364_13298[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12280[(4)]))){
var statearr_12365_13299 = state_12280;
(statearr_12365_13299[(1)] = cljs.core.first((state_12280[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12280;
state_12280 = G__13300;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11008__auto__ = function(state_12280){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11008__auto____1.call(this,state_12280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11008__auto____0;
cljs$core$async$mix_$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11008__auto____1;
return cljs$core$async$mix_$_state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12366 = f__11068__auto__();
(statearr_12366[(6)] = c__11067__auto___13251);

return statearr_12366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
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
var G__12368 = arguments.length;
switch (G__12368) {
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
var G__12371 = arguments.length;
switch (G__12371) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12369_SHARP_){
if(cljs.core.truth_((p1__12369_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12369_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12369_SHARP_.call(null,topic)))){
return p1__12369_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12369_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12372 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12373){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12373 = meta12373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12374,meta12373__$1){
var self__ = this;
var _12374__$1 = this;
return (new cljs.core.async.t_cljs$core$async12372(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12373__$1));
}));

(cljs.core.async.t_cljs$core$async12372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12374){
var self__ = this;
var _12374__$1 = this;
return self__.meta12373;
}));

(cljs.core.async.t_cljs$core$async12372.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12372.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12372.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12372.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12373","meta12373",857053752,null)], null);
}));

(cljs.core.async.t_cljs$core$async12372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12372");

(cljs.core.async.t_cljs$core$async12372.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12372.
 */
cljs.core.async.__GT_t_cljs$core$async12372 = (function cljs$core$async$__GT_t_cljs$core$async12372(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12373){
return (new cljs.core.async.t_cljs$core$async12372(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12373));
});

}

return (new cljs.core.async.t_cljs$core$async12372(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11067__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12446){
var state_val_12447 = (state_12446[(1)]);
if((state_val_12447 === (7))){
var inst_12442 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
var statearr_12448_13308 = state_12446__$1;
(statearr_12448_13308[(2)] = inst_12442);

(statearr_12448_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (20))){
var state_12446__$1 = state_12446;
var statearr_12449_13309 = state_12446__$1;
(statearr_12449_13309[(2)] = null);

(statearr_12449_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (1))){
var state_12446__$1 = state_12446;
var statearr_12450_13310 = state_12446__$1;
(statearr_12450_13310[(2)] = null);

(statearr_12450_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (24))){
var inst_12425 = (state_12446[(7)]);
var inst_12434 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12425);
var state_12446__$1 = state_12446;
var statearr_12451_13311 = state_12446__$1;
(statearr_12451_13311[(2)] = inst_12434);

(statearr_12451_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (4))){
var inst_12377 = (state_12446[(8)]);
var inst_12377__$1 = (state_12446[(2)]);
var inst_12378 = (inst_12377__$1 == null);
var state_12446__$1 = (function (){var statearr_12452 = state_12446;
(statearr_12452[(8)] = inst_12377__$1);

return statearr_12452;
})();
if(cljs.core.truth_(inst_12378)){
var statearr_12453_13312 = state_12446__$1;
(statearr_12453_13312[(1)] = (5));

} else {
var statearr_12454_13313 = state_12446__$1;
(statearr_12454_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (15))){
var inst_12419 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
var statearr_12455_13314 = state_12446__$1;
(statearr_12455_13314[(2)] = inst_12419);

(statearr_12455_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (21))){
var inst_12439 = (state_12446[(2)]);
var state_12446__$1 = (function (){var statearr_12456 = state_12446;
(statearr_12456[(9)] = inst_12439);

return statearr_12456;
})();
var statearr_12457_13315 = state_12446__$1;
(statearr_12457_13315[(2)] = null);

(statearr_12457_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (13))){
var inst_12401 = (state_12446[(10)]);
var inst_12403 = cljs.core.chunked_seq_QMARK_(inst_12401);
var state_12446__$1 = state_12446;
if(inst_12403){
var statearr_12458_13316 = state_12446__$1;
(statearr_12458_13316[(1)] = (16));

} else {
var statearr_12459_13317 = state_12446__$1;
(statearr_12459_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (22))){
var inst_12431 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
if(cljs.core.truth_(inst_12431)){
var statearr_12460_13318 = state_12446__$1;
(statearr_12460_13318[(1)] = (23));

} else {
var statearr_12461_13319 = state_12446__$1;
(statearr_12461_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (6))){
var inst_12427 = (state_12446[(11)]);
var inst_12425 = (state_12446[(7)]);
var inst_12377 = (state_12446[(8)]);
var inst_12425__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12377) : topic_fn.call(null,inst_12377));
var inst_12426 = cljs.core.deref(mults);
var inst_12427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12426,inst_12425__$1);
var state_12446__$1 = (function (){var statearr_12462 = state_12446;
(statearr_12462[(11)] = inst_12427__$1);

(statearr_12462[(7)] = inst_12425__$1);

return statearr_12462;
})();
if(cljs.core.truth_(inst_12427__$1)){
var statearr_12463_13320 = state_12446__$1;
(statearr_12463_13320[(1)] = (19));

} else {
var statearr_12464_13321 = state_12446__$1;
(statearr_12464_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (25))){
var inst_12436 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
var statearr_12465_13322 = state_12446__$1;
(statearr_12465_13322[(2)] = inst_12436);

(statearr_12465_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (17))){
var inst_12401 = (state_12446[(10)]);
var inst_12410 = cljs.core.first(inst_12401);
var inst_12411 = cljs.core.async.muxch_STAR_(inst_12410);
var inst_12412 = cljs.core.async.close_BANG_(inst_12411);
var inst_12413 = cljs.core.next(inst_12401);
var inst_12387 = inst_12413;
var inst_12388 = null;
var inst_12389 = (0);
var inst_12390 = (0);
var state_12446__$1 = (function (){var statearr_12466 = state_12446;
(statearr_12466[(12)] = inst_12388);

(statearr_12466[(13)] = inst_12389);

(statearr_12466[(14)] = inst_12412);

(statearr_12466[(15)] = inst_12390);

(statearr_12466[(16)] = inst_12387);

return statearr_12466;
})();
var statearr_12467_13323 = state_12446__$1;
(statearr_12467_13323[(2)] = null);

(statearr_12467_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (3))){
var inst_12444 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12446__$1,inst_12444);
} else {
if((state_val_12447 === (12))){
var inst_12421 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
var statearr_12468_13324 = state_12446__$1;
(statearr_12468_13324[(2)] = inst_12421);

(statearr_12468_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (2))){
var state_12446__$1 = state_12446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12446__$1,(4),ch);
} else {
if((state_val_12447 === (23))){
var state_12446__$1 = state_12446;
var statearr_12469_13325 = state_12446__$1;
(statearr_12469_13325[(2)] = null);

(statearr_12469_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (19))){
var inst_12427 = (state_12446[(11)]);
var inst_12377 = (state_12446[(8)]);
var inst_12429 = cljs.core.async.muxch_STAR_(inst_12427);
var state_12446__$1 = state_12446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12446__$1,(22),inst_12429,inst_12377);
} else {
if((state_val_12447 === (11))){
var inst_12401 = (state_12446[(10)]);
var inst_12387 = (state_12446[(16)]);
var inst_12401__$1 = cljs.core.seq(inst_12387);
var state_12446__$1 = (function (){var statearr_12470 = state_12446;
(statearr_12470[(10)] = inst_12401__$1);

return statearr_12470;
})();
if(inst_12401__$1){
var statearr_12471_13326 = state_12446__$1;
(statearr_12471_13326[(1)] = (13));

} else {
var statearr_12472_13327 = state_12446__$1;
(statearr_12472_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (9))){
var inst_12423 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
var statearr_12473_13328 = state_12446__$1;
(statearr_12473_13328[(2)] = inst_12423);

(statearr_12473_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (5))){
var inst_12384 = cljs.core.deref(mults);
var inst_12385 = cljs.core.vals(inst_12384);
var inst_12386 = cljs.core.seq(inst_12385);
var inst_12387 = inst_12386;
var inst_12388 = null;
var inst_12389 = (0);
var inst_12390 = (0);
var state_12446__$1 = (function (){var statearr_12474 = state_12446;
(statearr_12474[(12)] = inst_12388);

(statearr_12474[(13)] = inst_12389);

(statearr_12474[(15)] = inst_12390);

(statearr_12474[(16)] = inst_12387);

return statearr_12474;
})();
var statearr_12475_13329 = state_12446__$1;
(statearr_12475_13329[(2)] = null);

(statearr_12475_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (14))){
var state_12446__$1 = state_12446;
var statearr_12479_13330 = state_12446__$1;
(statearr_12479_13330[(2)] = null);

(statearr_12479_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (16))){
var inst_12401 = (state_12446[(10)]);
var inst_12405 = cljs.core.chunk_first(inst_12401);
var inst_12406 = cljs.core.chunk_rest(inst_12401);
var inst_12407 = cljs.core.count(inst_12405);
var inst_12387 = inst_12406;
var inst_12388 = inst_12405;
var inst_12389 = inst_12407;
var inst_12390 = (0);
var state_12446__$1 = (function (){var statearr_12480 = state_12446;
(statearr_12480[(12)] = inst_12388);

(statearr_12480[(13)] = inst_12389);

(statearr_12480[(15)] = inst_12390);

(statearr_12480[(16)] = inst_12387);

return statearr_12480;
})();
var statearr_12481_13331 = state_12446__$1;
(statearr_12481_13331[(2)] = null);

(statearr_12481_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (10))){
var inst_12388 = (state_12446[(12)]);
var inst_12389 = (state_12446[(13)]);
var inst_12390 = (state_12446[(15)]);
var inst_12387 = (state_12446[(16)]);
var inst_12395 = cljs.core._nth(inst_12388,inst_12390);
var inst_12396 = cljs.core.async.muxch_STAR_(inst_12395);
var inst_12397 = cljs.core.async.close_BANG_(inst_12396);
var inst_12398 = (inst_12390 + (1));
var tmp12476 = inst_12388;
var tmp12477 = inst_12389;
var tmp12478 = inst_12387;
var inst_12387__$1 = tmp12478;
var inst_12388__$1 = tmp12476;
var inst_12389__$1 = tmp12477;
var inst_12390__$1 = inst_12398;
var state_12446__$1 = (function (){var statearr_12482 = state_12446;
(statearr_12482[(12)] = inst_12388__$1);

(statearr_12482[(13)] = inst_12389__$1);

(statearr_12482[(17)] = inst_12397);

(statearr_12482[(15)] = inst_12390__$1);

(statearr_12482[(16)] = inst_12387__$1);

return statearr_12482;
})();
var statearr_12483_13332 = state_12446__$1;
(statearr_12483_13332[(2)] = null);

(statearr_12483_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (18))){
var inst_12416 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
var statearr_12484_13333 = state_12446__$1;
(statearr_12484_13333[(2)] = inst_12416);

(statearr_12484_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (8))){
var inst_12389 = (state_12446[(13)]);
var inst_12390 = (state_12446[(15)]);
var inst_12392 = (inst_12390 < inst_12389);
var inst_12393 = inst_12392;
var state_12446__$1 = state_12446;
if(cljs.core.truth_(inst_12393)){
var statearr_12485_13334 = state_12446__$1;
(statearr_12485_13334[(1)] = (10));

} else {
var statearr_12486_13335 = state_12446__$1;
(statearr_12486_13335[(1)] = (11));

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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_12487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12487[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_12487[(1)] = (1));

return statearr_12487;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_12446){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12446);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12488){var ex__11011__auto__ = e12488;
var statearr_12489_13336 = state_12446;
(statearr_12489_13336[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12446[(4)]))){
var statearr_12490_13337 = state_12446;
(statearr_12490_13337[(1)] = cljs.core.first((state_12446[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12446;
state_12446 = G__13338;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_12446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_12446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12491 = f__11068__auto__();
(statearr_12491[(6)] = c__11067__auto___13307);

return statearr_12491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
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
var G__12493 = arguments.length;
switch (G__12493) {
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
var G__12495 = arguments.length;
switch (G__12495) {
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
var G__12497 = arguments.length;
switch (G__12497) {
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
var c__11067__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12540){
var state_val_12541 = (state_12540[(1)]);
if((state_val_12541 === (7))){
var state_12540__$1 = state_12540;
var statearr_12542_13343 = state_12540__$1;
(statearr_12542_13343[(2)] = null);

(statearr_12542_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (1))){
var state_12540__$1 = state_12540;
var statearr_12543_13344 = state_12540__$1;
(statearr_12543_13344[(2)] = null);

(statearr_12543_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (4))){
var inst_12500 = (state_12540[(7)]);
var inst_12501 = (state_12540[(8)]);
var inst_12503 = (inst_12501 < inst_12500);
var state_12540__$1 = state_12540;
if(cljs.core.truth_(inst_12503)){
var statearr_12544_13345 = state_12540__$1;
(statearr_12544_13345[(1)] = (6));

} else {
var statearr_12545_13346 = state_12540__$1;
(statearr_12545_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (15))){
var inst_12526 = (state_12540[(9)]);
var inst_12531 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12526);
var state_12540__$1 = state_12540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12540__$1,(17),out,inst_12531);
} else {
if((state_val_12541 === (13))){
var inst_12526 = (state_12540[(9)]);
var inst_12526__$1 = (state_12540[(2)]);
var inst_12527 = cljs.core.some(cljs.core.nil_QMARK_,inst_12526__$1);
var state_12540__$1 = (function (){var statearr_12546 = state_12540;
(statearr_12546[(9)] = inst_12526__$1);

return statearr_12546;
})();
if(cljs.core.truth_(inst_12527)){
var statearr_12547_13347 = state_12540__$1;
(statearr_12547_13347[(1)] = (14));

} else {
var statearr_12548_13348 = state_12540__$1;
(statearr_12548_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (6))){
var state_12540__$1 = state_12540;
var statearr_12549_13349 = state_12540__$1;
(statearr_12549_13349[(2)] = null);

(statearr_12549_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (17))){
var inst_12533 = (state_12540[(2)]);
var state_12540__$1 = (function (){var statearr_12551 = state_12540;
(statearr_12551[(10)] = inst_12533);

return statearr_12551;
})();
var statearr_12552_13350 = state_12540__$1;
(statearr_12552_13350[(2)] = null);

(statearr_12552_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (3))){
var inst_12538 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12540__$1,inst_12538);
} else {
if((state_val_12541 === (12))){
var _ = (function (){var statearr_12553 = state_12540;
(statearr_12553[(4)] = cljs.core.rest((state_12540[(4)])));

return statearr_12553;
})();
var state_12540__$1 = state_12540;
var ex12550 = (state_12540__$1[(2)]);
var statearr_12554_13351 = state_12540__$1;
(statearr_12554_13351[(5)] = ex12550);


if((ex12550 instanceof Object)){
var statearr_12555_13352 = state_12540__$1;
(statearr_12555_13352[(1)] = (11));

(statearr_12555_13352[(5)] = null);

} else {
throw ex12550;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (2))){
var inst_12499 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12500 = cnt;
var inst_12501 = (0);
var state_12540__$1 = (function (){var statearr_12556 = state_12540;
(statearr_12556[(7)] = inst_12500);

(statearr_12556[(8)] = inst_12501);

(statearr_12556[(11)] = inst_12499);

return statearr_12556;
})();
var statearr_12557_13353 = state_12540__$1;
(statearr_12557_13353[(2)] = null);

(statearr_12557_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (11))){
var inst_12505 = (state_12540[(2)]);
var inst_12506 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12540__$1 = (function (){var statearr_12558 = state_12540;
(statearr_12558[(12)] = inst_12505);

return statearr_12558;
})();
var statearr_12559_13354 = state_12540__$1;
(statearr_12559_13354[(2)] = inst_12506);

(statearr_12559_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (9))){
var inst_12501 = (state_12540[(8)]);
var _ = (function (){var statearr_12560 = state_12540;
(statearr_12560[(4)] = cljs.core.cons((12),(state_12540[(4)])));

return statearr_12560;
})();
var inst_12512 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12501) : chs__$1.call(null,inst_12501));
var inst_12513 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12501) : done.call(null,inst_12501));
var inst_12514 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12512,inst_12513);
var ___$1 = (function (){var statearr_12561 = state_12540;
(statearr_12561[(4)] = cljs.core.rest((state_12540[(4)])));

return statearr_12561;
})();
var state_12540__$1 = state_12540;
var statearr_12562_13355 = state_12540__$1;
(statearr_12562_13355[(2)] = inst_12514);

(statearr_12562_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (5))){
var inst_12524 = (state_12540[(2)]);
var state_12540__$1 = (function (){var statearr_12563 = state_12540;
(statearr_12563[(13)] = inst_12524);

return statearr_12563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12540__$1,(13),dchan);
} else {
if((state_val_12541 === (14))){
var inst_12529 = cljs.core.async.close_BANG_(out);
var state_12540__$1 = state_12540;
var statearr_12564_13356 = state_12540__$1;
(statearr_12564_13356[(2)] = inst_12529);

(statearr_12564_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (16))){
var inst_12536 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12565_13357 = state_12540__$1;
(statearr_12565_13357[(2)] = inst_12536);

(statearr_12565_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (10))){
var inst_12501 = (state_12540[(8)]);
var inst_12517 = (state_12540[(2)]);
var inst_12518 = (inst_12501 + (1));
var inst_12501__$1 = inst_12518;
var state_12540__$1 = (function (){var statearr_12566 = state_12540;
(statearr_12566[(8)] = inst_12501__$1);

(statearr_12566[(14)] = inst_12517);

return statearr_12566;
})();
var statearr_12567_13358 = state_12540__$1;
(statearr_12567_13358[(2)] = null);

(statearr_12567_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (8))){
var inst_12522 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12568_13359 = state_12540__$1;
(statearr_12568_13359[(2)] = inst_12522);

(statearr_12568_13359[(1)] = (5));


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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_12569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12569[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_12569[(1)] = (1));

return statearr_12569;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_12540){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12540);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12570){var ex__11011__auto__ = e12570;
var statearr_12571_13360 = state_12540;
(statearr_12571_13360[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12540[(4)]))){
var statearr_12572_13361 = state_12540;
(statearr_12572_13361[(1)] = cljs.core.first((state_12540[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12540;
state_12540 = G__13362;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_12540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_12540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12573 = f__11068__auto__();
(statearr_12573[(6)] = c__11067__auto___13342);

return statearr_12573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
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
var G__12576 = arguments.length;
switch (G__12576) {
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
var c__11067__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12608){
var state_val_12609 = (state_12608[(1)]);
if((state_val_12609 === (7))){
var inst_12587 = (state_12608[(7)]);
var inst_12588 = (state_12608[(8)]);
var inst_12587__$1 = (state_12608[(2)]);
var inst_12588__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12587__$1,(0),null);
var inst_12589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12587__$1,(1),null);
var inst_12590 = (inst_12588__$1 == null);
var state_12608__$1 = (function (){var statearr_12610 = state_12608;
(statearr_12610[(7)] = inst_12587__$1);

(statearr_12610[(8)] = inst_12588__$1);

(statearr_12610[(9)] = inst_12589);

return statearr_12610;
})();
if(cljs.core.truth_(inst_12590)){
var statearr_12611_13365 = state_12608__$1;
(statearr_12611_13365[(1)] = (8));

} else {
var statearr_12612_13366 = state_12608__$1;
(statearr_12612_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (1))){
var inst_12577 = cljs.core.vec(chs);
var inst_12578 = inst_12577;
var state_12608__$1 = (function (){var statearr_12613 = state_12608;
(statearr_12613[(10)] = inst_12578);

return statearr_12613;
})();
var statearr_12614_13367 = state_12608__$1;
(statearr_12614_13367[(2)] = null);

(statearr_12614_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (4))){
var inst_12578 = (state_12608[(10)]);
var state_12608__$1 = state_12608;
return cljs.core.async.ioc_alts_BANG_(state_12608__$1,(7),inst_12578);
} else {
if((state_val_12609 === (6))){
var inst_12604 = (state_12608[(2)]);
var state_12608__$1 = state_12608;
var statearr_12615_13368 = state_12608__$1;
(statearr_12615_13368[(2)] = inst_12604);

(statearr_12615_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (3))){
var inst_12606 = (state_12608[(2)]);
var state_12608__$1 = state_12608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12608__$1,inst_12606);
} else {
if((state_val_12609 === (2))){
var inst_12578 = (state_12608[(10)]);
var inst_12580 = cljs.core.count(inst_12578);
var inst_12581 = (inst_12580 > (0));
var state_12608__$1 = state_12608;
if(cljs.core.truth_(inst_12581)){
var statearr_12617_13369 = state_12608__$1;
(statearr_12617_13369[(1)] = (4));

} else {
var statearr_12618_13370 = state_12608__$1;
(statearr_12618_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (11))){
var inst_12578 = (state_12608[(10)]);
var inst_12597 = (state_12608[(2)]);
var tmp12616 = inst_12578;
var inst_12578__$1 = tmp12616;
var state_12608__$1 = (function (){var statearr_12619 = state_12608;
(statearr_12619[(11)] = inst_12597);

(statearr_12619[(10)] = inst_12578__$1);

return statearr_12619;
})();
var statearr_12620_13371 = state_12608__$1;
(statearr_12620_13371[(2)] = null);

(statearr_12620_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (9))){
var inst_12588 = (state_12608[(8)]);
var state_12608__$1 = state_12608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12608__$1,(11),out,inst_12588);
} else {
if((state_val_12609 === (5))){
var inst_12602 = cljs.core.async.close_BANG_(out);
var state_12608__$1 = state_12608;
var statearr_12621_13372 = state_12608__$1;
(statearr_12621_13372[(2)] = inst_12602);

(statearr_12621_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (10))){
var inst_12600 = (state_12608[(2)]);
var state_12608__$1 = state_12608;
var statearr_12622_13373 = state_12608__$1;
(statearr_12622_13373[(2)] = inst_12600);

(statearr_12622_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (8))){
var inst_12587 = (state_12608[(7)]);
var inst_12588 = (state_12608[(8)]);
var inst_12578 = (state_12608[(10)]);
var inst_12589 = (state_12608[(9)]);
var inst_12592 = (function (){var cs = inst_12578;
var vec__12583 = inst_12587;
var v = inst_12588;
var c = inst_12589;
return (function (p1__12574_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12574_SHARP_);
});
})();
var inst_12593 = cljs.core.filterv(inst_12592,inst_12578);
var inst_12578__$1 = inst_12593;
var state_12608__$1 = (function (){var statearr_12623 = state_12608;
(statearr_12623[(10)] = inst_12578__$1);

return statearr_12623;
})();
var statearr_12624_13374 = state_12608__$1;
(statearr_12624_13374[(2)] = null);

(statearr_12624_13374[(1)] = (2));


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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_12625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12625[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_12625[(1)] = (1));

return statearr_12625;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_12608){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12608);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12626){var ex__11011__auto__ = e12626;
var statearr_12627_13375 = state_12608;
(statearr_12627_13375[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12608[(4)]))){
var statearr_12628_13376 = state_12608;
(statearr_12628_13376[(1)] = cljs.core.first((state_12608[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12608;
state_12608 = G__13377;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_12608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_12608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12629 = f__11068__auto__();
(statearr_12629[(6)] = c__11067__auto___13364);

return statearr_12629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
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
var G__12631 = arguments.length;
switch (G__12631) {
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
var c__11067__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12655){
var state_val_12656 = (state_12655[(1)]);
if((state_val_12656 === (7))){
var inst_12637 = (state_12655[(7)]);
var inst_12637__$1 = (state_12655[(2)]);
var inst_12638 = (inst_12637__$1 == null);
var inst_12639 = cljs.core.not(inst_12638);
var state_12655__$1 = (function (){var statearr_12657 = state_12655;
(statearr_12657[(7)] = inst_12637__$1);

return statearr_12657;
})();
if(inst_12639){
var statearr_12658_13380 = state_12655__$1;
(statearr_12658_13380[(1)] = (8));

} else {
var statearr_12659_13381 = state_12655__$1;
(statearr_12659_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12656 === (1))){
var inst_12632 = (0);
var state_12655__$1 = (function (){var statearr_12660 = state_12655;
(statearr_12660[(8)] = inst_12632);

return statearr_12660;
})();
var statearr_12661_13382 = state_12655__$1;
(statearr_12661_13382[(2)] = null);

(statearr_12661_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12656 === (4))){
var state_12655__$1 = state_12655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12655__$1,(7),ch);
} else {
if((state_val_12656 === (6))){
var inst_12650 = (state_12655[(2)]);
var state_12655__$1 = state_12655;
var statearr_12662_13383 = state_12655__$1;
(statearr_12662_13383[(2)] = inst_12650);

(statearr_12662_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12656 === (3))){
var inst_12652 = (state_12655[(2)]);
var inst_12653 = cljs.core.async.close_BANG_(out);
var state_12655__$1 = (function (){var statearr_12663 = state_12655;
(statearr_12663[(9)] = inst_12652);

return statearr_12663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12655__$1,inst_12653);
} else {
if((state_val_12656 === (2))){
var inst_12632 = (state_12655[(8)]);
var inst_12634 = (inst_12632 < n);
var state_12655__$1 = state_12655;
if(cljs.core.truth_(inst_12634)){
var statearr_12664_13384 = state_12655__$1;
(statearr_12664_13384[(1)] = (4));

} else {
var statearr_12665_13385 = state_12655__$1;
(statearr_12665_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12656 === (11))){
var inst_12632 = (state_12655[(8)]);
var inst_12642 = (state_12655[(2)]);
var inst_12643 = (inst_12632 + (1));
var inst_12632__$1 = inst_12643;
var state_12655__$1 = (function (){var statearr_12666 = state_12655;
(statearr_12666[(10)] = inst_12642);

(statearr_12666[(8)] = inst_12632__$1);

return statearr_12666;
})();
var statearr_12667_13386 = state_12655__$1;
(statearr_12667_13386[(2)] = null);

(statearr_12667_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12656 === (9))){
var state_12655__$1 = state_12655;
var statearr_12668_13387 = state_12655__$1;
(statearr_12668_13387[(2)] = null);

(statearr_12668_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12656 === (5))){
var state_12655__$1 = state_12655;
var statearr_12669_13388 = state_12655__$1;
(statearr_12669_13388[(2)] = null);

(statearr_12669_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12656 === (10))){
var inst_12647 = (state_12655[(2)]);
var state_12655__$1 = state_12655;
var statearr_12670_13389 = state_12655__$1;
(statearr_12670_13389[(2)] = inst_12647);

(statearr_12670_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12656 === (8))){
var inst_12637 = (state_12655[(7)]);
var state_12655__$1 = state_12655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12655__$1,(11),out,inst_12637);
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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_12671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12671[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_12671[(1)] = (1));

return statearr_12671;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_12655){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12655);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12672){var ex__11011__auto__ = e12672;
var statearr_12673_13390 = state_12655;
(statearr_12673_13390[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12655[(4)]))){
var statearr_12674_13391 = state_12655;
(statearr_12674_13391[(1)] = cljs.core.first((state_12655[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12655;
state_12655 = G__13392;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_12655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_12655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12675 = f__11068__auto__();
(statearr_12675[(6)] = c__11067__auto___13379);

return statearr_12675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12677 = (function (f,ch,meta12678){
this.f = f;
this.ch = ch;
this.meta12678 = meta12678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12679,meta12678__$1){
var self__ = this;
var _12679__$1 = this;
return (new cljs.core.async.t_cljs$core$async12677(self__.f,self__.ch,meta12678__$1));
}));

(cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12679){
var self__ = this;
var _12679__$1 = this;
return self__.meta12678;
}));

(cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12680 = (function (f,ch,meta12678,_,fn1,meta12681){
this.f = f;
this.ch = ch;
this.meta12678 = meta12678;
this._ = _;
this.fn1 = fn1;
this.meta12681 = meta12681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12682,meta12681__$1){
var self__ = this;
var _12682__$1 = this;
return (new cljs.core.async.t_cljs$core$async12680(self__.f,self__.ch,self__.meta12678,self__._,self__.fn1,meta12681__$1));
}));

(cljs.core.async.t_cljs$core$async12680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12682){
var self__ = this;
var _12682__$1 = this;
return self__.meta12681;
}));

(cljs.core.async.t_cljs$core$async12680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12676_SHARP_){
var G__12683 = (((p1__12676_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12676_SHARP_) : self__.f.call(null,p1__12676_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12683) : f1.call(null,G__12683));
});
}));

(cljs.core.async.t_cljs$core$async12680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12678","meta12678",1586635829,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12677","cljs.core.async/t_cljs$core$async12677",-108980505,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12681","meta12681",-1856194023,null)], null);
}));

(cljs.core.async.t_cljs$core$async12680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12680");

(cljs.core.async.t_cljs$core$async12680.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12680.
 */
cljs.core.async.__GT_t_cljs$core$async12680 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12680(f__$1,ch__$1,meta12678__$1,___$2,fn1__$1,meta12681){
return (new cljs.core.async.t_cljs$core$async12680(f__$1,ch__$1,meta12678__$1,___$2,fn1__$1,meta12681));
});

}

return (new cljs.core.async.t_cljs$core$async12680(self__.f,self__.ch,self__.meta12678,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12684 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12684) : self__.f.call(null,G__12684));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12678","meta12678",1586635829,null)], null);
}));

(cljs.core.async.t_cljs$core$async12677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12677");

(cljs.core.async.t_cljs$core$async12677.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12677.
 */
cljs.core.async.__GT_t_cljs$core$async12677 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12677(f__$1,ch__$1,meta12678){
return (new cljs.core.async.t_cljs$core$async12677(f__$1,ch__$1,meta12678));
});

}

return (new cljs.core.async.t_cljs$core$async12677(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12685 = (function (f,ch,meta12686){
this.f = f;
this.ch = ch;
this.meta12686 = meta12686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12687,meta12686__$1){
var self__ = this;
var _12687__$1 = this;
return (new cljs.core.async.t_cljs$core$async12685(self__.f,self__.ch,meta12686__$1));
}));

(cljs.core.async.t_cljs$core$async12685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12687){
var self__ = this;
var _12687__$1 = this;
return self__.meta12686;
}));

(cljs.core.async.t_cljs$core$async12685.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12685.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12685.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12686","meta12686",-474584651,null)], null);
}));

(cljs.core.async.t_cljs$core$async12685.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12685");

(cljs.core.async.t_cljs$core$async12685.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12685");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12685.
 */
cljs.core.async.__GT_t_cljs$core$async12685 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12685(f__$1,ch__$1,meta12686){
return (new cljs.core.async.t_cljs$core$async12685(f__$1,ch__$1,meta12686));
});

}

return (new cljs.core.async.t_cljs$core$async12685(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12688 = (function (p,ch,meta12689){
this.p = p;
this.ch = ch;
this.meta12689 = meta12689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12690,meta12689__$1){
var self__ = this;
var _12690__$1 = this;
return (new cljs.core.async.t_cljs$core$async12688(self__.p,self__.ch,meta12689__$1));
}));

(cljs.core.async.t_cljs$core$async12688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12690){
var self__ = this;
var _12690__$1 = this;
return self__.meta12689;
}));

(cljs.core.async.t_cljs$core$async12688.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12688.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12688.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12688.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12689","meta12689",659646391,null)], null);
}));

(cljs.core.async.t_cljs$core$async12688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12688");

(cljs.core.async.t_cljs$core$async12688.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12688.
 */
cljs.core.async.__GT_t_cljs$core$async12688 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12688(p__$1,ch__$1,meta12689){
return (new cljs.core.async.t_cljs$core$async12688(p__$1,ch__$1,meta12689));
});

}

return (new cljs.core.async.t_cljs$core$async12688(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12692 = arguments.length;
switch (G__12692) {
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
var c__11067__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12713){
var state_val_12714 = (state_12713[(1)]);
if((state_val_12714 === (7))){
var inst_12709 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
var statearr_12715_13395 = state_12713__$1;
(statearr_12715_13395[(2)] = inst_12709);

(statearr_12715_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (1))){
var state_12713__$1 = state_12713;
var statearr_12716_13396 = state_12713__$1;
(statearr_12716_13396[(2)] = null);

(statearr_12716_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (4))){
var inst_12695 = (state_12713[(7)]);
var inst_12695__$1 = (state_12713[(2)]);
var inst_12696 = (inst_12695__$1 == null);
var state_12713__$1 = (function (){var statearr_12717 = state_12713;
(statearr_12717[(7)] = inst_12695__$1);

return statearr_12717;
})();
if(cljs.core.truth_(inst_12696)){
var statearr_12718_13397 = state_12713__$1;
(statearr_12718_13397[(1)] = (5));

} else {
var statearr_12719_13398 = state_12713__$1;
(statearr_12719_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (6))){
var inst_12695 = (state_12713[(7)]);
var inst_12700 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12695) : p.call(null,inst_12695));
var state_12713__$1 = state_12713;
if(cljs.core.truth_(inst_12700)){
var statearr_12720_13399 = state_12713__$1;
(statearr_12720_13399[(1)] = (8));

} else {
var statearr_12721_13400 = state_12713__$1;
(statearr_12721_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (3))){
var inst_12711 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12713__$1,inst_12711);
} else {
if((state_val_12714 === (2))){
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12713__$1,(4),ch);
} else {
if((state_val_12714 === (11))){
var inst_12703 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
var statearr_12722_13401 = state_12713__$1;
(statearr_12722_13401[(2)] = inst_12703);

(statearr_12722_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (9))){
var state_12713__$1 = state_12713;
var statearr_12723_13402 = state_12713__$1;
(statearr_12723_13402[(2)] = null);

(statearr_12723_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (5))){
var inst_12698 = cljs.core.async.close_BANG_(out);
var state_12713__$1 = state_12713;
var statearr_12724_13403 = state_12713__$1;
(statearr_12724_13403[(2)] = inst_12698);

(statearr_12724_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (10))){
var inst_12706 = (state_12713[(2)]);
var state_12713__$1 = (function (){var statearr_12725 = state_12713;
(statearr_12725[(8)] = inst_12706);

return statearr_12725;
})();
var statearr_12726_13404 = state_12713__$1;
(statearr_12726_13404[(2)] = null);

(statearr_12726_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (8))){
var inst_12695 = (state_12713[(7)]);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12713__$1,(11),out,inst_12695);
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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_12727 = [null,null,null,null,null,null,null,null,null];
(statearr_12727[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_12727[(1)] = (1));

return statearr_12727;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_12713){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12713);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12728){var ex__11011__auto__ = e12728;
var statearr_12729_13405 = state_12713;
(statearr_12729_13405[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12713[(4)]))){
var statearr_12730_13406 = state_12713;
(statearr_12730_13406[(1)] = cljs.core.first((state_12713[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12713;
state_12713 = G__13407;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_12713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_12713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12731 = f__11068__auto__();
(statearr_12731[(6)] = c__11067__auto___13394);

return statearr_12731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12733 = arguments.length;
switch (G__12733) {
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
var c__11067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12795){
var state_val_12796 = (state_12795[(1)]);
if((state_val_12796 === (7))){
var inst_12791 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
var statearr_12797_13409 = state_12795__$1;
(statearr_12797_13409[(2)] = inst_12791);

(statearr_12797_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (20))){
var inst_12761 = (state_12795[(7)]);
var inst_12772 = (state_12795[(2)]);
var inst_12773 = cljs.core.next(inst_12761);
var inst_12747 = inst_12773;
var inst_12748 = null;
var inst_12749 = (0);
var inst_12750 = (0);
var state_12795__$1 = (function (){var statearr_12798 = state_12795;
(statearr_12798[(8)] = inst_12750);

(statearr_12798[(9)] = inst_12772);

(statearr_12798[(10)] = inst_12748);

(statearr_12798[(11)] = inst_12749);

(statearr_12798[(12)] = inst_12747);

return statearr_12798;
})();
var statearr_12799_13410 = state_12795__$1;
(statearr_12799_13410[(2)] = null);

(statearr_12799_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (1))){
var state_12795__$1 = state_12795;
var statearr_12800_13411 = state_12795__$1;
(statearr_12800_13411[(2)] = null);

(statearr_12800_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (4))){
var inst_12736 = (state_12795[(13)]);
var inst_12736__$1 = (state_12795[(2)]);
var inst_12737 = (inst_12736__$1 == null);
var state_12795__$1 = (function (){var statearr_12801 = state_12795;
(statearr_12801[(13)] = inst_12736__$1);

return statearr_12801;
})();
if(cljs.core.truth_(inst_12737)){
var statearr_12802_13412 = state_12795__$1;
(statearr_12802_13412[(1)] = (5));

} else {
var statearr_12803_13413 = state_12795__$1;
(statearr_12803_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (15))){
var state_12795__$1 = state_12795;
var statearr_12807_13414 = state_12795__$1;
(statearr_12807_13414[(2)] = null);

(statearr_12807_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (21))){
var state_12795__$1 = state_12795;
var statearr_12808_13415 = state_12795__$1;
(statearr_12808_13415[(2)] = null);

(statearr_12808_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (13))){
var inst_12750 = (state_12795[(8)]);
var inst_12748 = (state_12795[(10)]);
var inst_12749 = (state_12795[(11)]);
var inst_12747 = (state_12795[(12)]);
var inst_12757 = (state_12795[(2)]);
var inst_12758 = (inst_12750 + (1));
var tmp12804 = inst_12748;
var tmp12805 = inst_12749;
var tmp12806 = inst_12747;
var inst_12747__$1 = tmp12806;
var inst_12748__$1 = tmp12804;
var inst_12749__$1 = tmp12805;
var inst_12750__$1 = inst_12758;
var state_12795__$1 = (function (){var statearr_12809 = state_12795;
(statearr_12809[(8)] = inst_12750__$1);

(statearr_12809[(14)] = inst_12757);

(statearr_12809[(10)] = inst_12748__$1);

(statearr_12809[(11)] = inst_12749__$1);

(statearr_12809[(12)] = inst_12747__$1);

return statearr_12809;
})();
var statearr_12810_13416 = state_12795__$1;
(statearr_12810_13416[(2)] = null);

(statearr_12810_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (22))){
var state_12795__$1 = state_12795;
var statearr_12811_13417 = state_12795__$1;
(statearr_12811_13417[(2)] = null);

(statearr_12811_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (6))){
var inst_12736 = (state_12795[(13)]);
var inst_12745 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12736) : f.call(null,inst_12736));
var inst_12746 = cljs.core.seq(inst_12745);
var inst_12747 = inst_12746;
var inst_12748 = null;
var inst_12749 = (0);
var inst_12750 = (0);
var state_12795__$1 = (function (){var statearr_12812 = state_12795;
(statearr_12812[(8)] = inst_12750);

(statearr_12812[(10)] = inst_12748);

(statearr_12812[(11)] = inst_12749);

(statearr_12812[(12)] = inst_12747);

return statearr_12812;
})();
var statearr_12813_13418 = state_12795__$1;
(statearr_12813_13418[(2)] = null);

(statearr_12813_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (17))){
var inst_12761 = (state_12795[(7)]);
var inst_12765 = cljs.core.chunk_first(inst_12761);
var inst_12766 = cljs.core.chunk_rest(inst_12761);
var inst_12767 = cljs.core.count(inst_12765);
var inst_12747 = inst_12766;
var inst_12748 = inst_12765;
var inst_12749 = inst_12767;
var inst_12750 = (0);
var state_12795__$1 = (function (){var statearr_12814 = state_12795;
(statearr_12814[(8)] = inst_12750);

(statearr_12814[(10)] = inst_12748);

(statearr_12814[(11)] = inst_12749);

(statearr_12814[(12)] = inst_12747);

return statearr_12814;
})();
var statearr_12815_13419 = state_12795__$1;
(statearr_12815_13419[(2)] = null);

(statearr_12815_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (3))){
var inst_12793 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12795__$1,inst_12793);
} else {
if((state_val_12796 === (12))){
var inst_12781 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
var statearr_12816_13420 = state_12795__$1;
(statearr_12816_13420[(2)] = inst_12781);

(statearr_12816_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (2))){
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12795__$1,(4),in$);
} else {
if((state_val_12796 === (23))){
var inst_12789 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
var statearr_12817_13421 = state_12795__$1;
(statearr_12817_13421[(2)] = inst_12789);

(statearr_12817_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (19))){
var inst_12776 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
var statearr_12818_13422 = state_12795__$1;
(statearr_12818_13422[(2)] = inst_12776);

(statearr_12818_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (11))){
var inst_12761 = (state_12795[(7)]);
var inst_12747 = (state_12795[(12)]);
var inst_12761__$1 = cljs.core.seq(inst_12747);
var state_12795__$1 = (function (){var statearr_12819 = state_12795;
(statearr_12819[(7)] = inst_12761__$1);

return statearr_12819;
})();
if(inst_12761__$1){
var statearr_12820_13423 = state_12795__$1;
(statearr_12820_13423[(1)] = (14));

} else {
var statearr_12821_13424 = state_12795__$1;
(statearr_12821_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (9))){
var inst_12783 = (state_12795[(2)]);
var inst_12784 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12795__$1 = (function (){var statearr_12822 = state_12795;
(statearr_12822[(15)] = inst_12783);

return statearr_12822;
})();
if(cljs.core.truth_(inst_12784)){
var statearr_12823_13425 = state_12795__$1;
(statearr_12823_13425[(1)] = (21));

} else {
var statearr_12824_13426 = state_12795__$1;
(statearr_12824_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (5))){
var inst_12739 = cljs.core.async.close_BANG_(out);
var state_12795__$1 = state_12795;
var statearr_12825_13427 = state_12795__$1;
(statearr_12825_13427[(2)] = inst_12739);

(statearr_12825_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (14))){
var inst_12761 = (state_12795[(7)]);
var inst_12763 = cljs.core.chunked_seq_QMARK_(inst_12761);
var state_12795__$1 = state_12795;
if(inst_12763){
var statearr_12826_13428 = state_12795__$1;
(statearr_12826_13428[(1)] = (17));

} else {
var statearr_12827_13429 = state_12795__$1;
(statearr_12827_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (16))){
var inst_12779 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
var statearr_12828_13430 = state_12795__$1;
(statearr_12828_13430[(2)] = inst_12779);

(statearr_12828_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (10))){
var inst_12750 = (state_12795[(8)]);
var inst_12748 = (state_12795[(10)]);
var inst_12755 = cljs.core._nth(inst_12748,inst_12750);
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12795__$1,(13),out,inst_12755);
} else {
if((state_val_12796 === (18))){
var inst_12761 = (state_12795[(7)]);
var inst_12770 = cljs.core.first(inst_12761);
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12795__$1,(20),out,inst_12770);
} else {
if((state_val_12796 === (8))){
var inst_12750 = (state_12795[(8)]);
var inst_12749 = (state_12795[(11)]);
var inst_12752 = (inst_12750 < inst_12749);
var inst_12753 = inst_12752;
var state_12795__$1 = state_12795;
if(cljs.core.truth_(inst_12753)){
var statearr_12829_13431 = state_12795__$1;
(statearr_12829_13431[(1)] = (10));

} else {
var statearr_12830_13432 = state_12795__$1;
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
var cljs$core$async$mapcat_STAR__$_state_machine__11008__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11008__auto____0 = (function (){
var statearr_12831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12831[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11008__auto__);

(statearr_12831[(1)] = (1));

return statearr_12831;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11008__auto____1 = (function (state_12795){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12795);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12832){var ex__11011__auto__ = e12832;
var statearr_12833_13433 = state_12795;
(statearr_12833_13433[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12795[(4)]))){
var statearr_12834_13434 = state_12795;
(statearr_12834_13434[(1)] = cljs.core.first((state_12795[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12795;
state_12795 = G__13435;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11008__auto__ = function(state_12795){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11008__auto____1.call(this,state_12795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11008__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11008__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12835 = f__11068__auto__();
(statearr_12835[(6)] = c__11067__auto__);

return statearr_12835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));

return c__11067__auto__;
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
var c__11067__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12865){
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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_12883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12883[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_12883[(1)] = (1));

return statearr_12883;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_12865){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12865);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12884){var ex__11011__auto__ = e12884;
var statearr_12885_13450 = state_12865;
(statearr_12885_13450[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12865[(4)]))){
var statearr_12886_13451 = state_12865;
(statearr_12886_13451[(1)] = cljs.core.first((state_12865[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12865;
state_12865 = G__13452;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_12865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_12865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12887 = f__11068__auto__();
(statearr_12887[(6)] = c__11067__auto___13439);

return statearr_12887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
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
var c__11067__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12927){
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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_12950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12950[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_12950[(1)] = (1));

return statearr_12950;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_12927){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12927);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e12951){var ex__11011__auto__ = e12951;
var statearr_12952_13469 = state_12927;
(statearr_12952_13469[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12927[(4)]))){
var statearr_12953_13470 = state_12927;
(statearr_12953_13470[(1)] = cljs.core.first((state_12927[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12927;
state_12927 = G__13471;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_12927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_12927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_12954 = f__11068__auto__();
(statearr_12954[(6)] = c__11067__auto___13454);

return statearr_12954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
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
var c__11067__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11068__auto__ = (function (){var switch__11007__auto__ = (function (state_12998){
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
var cljs$core$async$state_machine__11008__auto__ = null;
var cljs$core$async$state_machine__11008__auto____0 = (function (){
var statearr_13021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13021[(0)] = cljs$core$async$state_machine__11008__auto__);

(statearr_13021[(1)] = (1));

return statearr_13021;
});
var cljs$core$async$state_machine__11008__auto____1 = (function (state_12998){
while(true){
var ret_value__11009__auto__ = (function (){try{while(true){
var result__11010__auto__ = switch__11007__auto__(state_12998);
if(cljs.core.keyword_identical_QMARK_(result__11010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11010__auto__;
}
break;
}
}catch (e13022){var ex__11011__auto__ = e13022;
var statearr_13023_13488 = state_12998;
(statearr_13023_13488[(2)] = ex__11011__auto__);


if(cljs.core.seq((state_12998[(4)]))){
var statearr_13024_13489 = state_12998;
(statearr_13024_13489[(1)] = cljs.core.first((state_12998[(4)])));

} else {
throw ex__11011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12998;
state_12998 = G__13490;
continue;
} else {
return ret_value__11009__auto__;
}
break;
}
});
cljs$core$async$state_machine__11008__auto__ = function(state_12998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11008__auto____1.call(this,state_12998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11008__auto____0;
cljs$core$async$state_machine__11008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11008__auto____1;
return cljs$core$async$state_machine__11008__auto__;
})()
})();
var state__11069__auto__ = (function (){var statearr_13025 = f__11068__auto__();
(statearr_13025[(6)] = c__11067__auto___13473);

return statearr_13025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11069__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
