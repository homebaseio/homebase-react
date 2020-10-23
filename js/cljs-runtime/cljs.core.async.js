goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11001 = arguments.length;
switch (G__11001) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11002 = (function (f,blockable,meta11003){
this.f = f;
this.blockable = blockable;
this.meta11003 = meta11003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11004,meta11003__$1){
var self__ = this;
var _11004__$1 = this;
return (new cljs.core.async.t_cljs$core$async11002(self__.f,self__.blockable,meta11003__$1));
}));

(cljs.core.async.t_cljs$core$async11002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11004){
var self__ = this;
var _11004__$1 = this;
return self__.meta11003;
}));

(cljs.core.async.t_cljs$core$async11002.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11003","meta11003",-1996093940,null)], null);
}));

(cljs.core.async.t_cljs$core$async11002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11002");

(cljs.core.async.t_cljs$core$async11002.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11002.
 */
cljs.core.async.__GT_t_cljs$core$async11002 = (function cljs$core$async$__GT_t_cljs$core$async11002(f__$1,blockable__$1,meta11003){
return (new cljs.core.async.t_cljs$core$async11002(f__$1,blockable__$1,meta11003));
});

}

return (new cljs.core.async.t_cljs$core$async11002(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11007 = arguments.length;
switch (G__11007) {
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
var G__11009 = arguments.length;
switch (G__11009) {
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
var G__11011 = arguments.length;
switch (G__11011) {
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
var val_12698 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12698) : fn1.call(null,val_12698));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12698) : fn1.call(null,val_12698));
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
var G__11017 = arguments.length;
switch (G__11017) {
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
var n__4613__auto___12720 = n;
var x_12721 = (0);
while(true){
if((x_12721 < n__4613__auto___12720)){
(a[x_12721] = x_12721);

var G__12722 = (x_12721 + (1));
x_12721 = G__12722;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11021 = (function (flag,meta11022){
this.flag = flag;
this.meta11022 = meta11022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11023,meta11022__$1){
var self__ = this;
var _11023__$1 = this;
return (new cljs.core.async.t_cljs$core$async11021(self__.flag,meta11022__$1));
}));

(cljs.core.async.t_cljs$core$async11021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11023){
var self__ = this;
var _11023__$1 = this;
return self__.meta11022;
}));

(cljs.core.async.t_cljs$core$async11021.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11021.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11022","meta11022",1486179028,null)], null);
}));

(cljs.core.async.t_cljs$core$async11021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11021");

(cljs.core.async.t_cljs$core$async11021.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11021.
 */
cljs.core.async.__GT_t_cljs$core$async11021 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11021(flag__$1,meta11022){
return (new cljs.core.async.t_cljs$core$async11021(flag__$1,meta11022));
});

}

return (new cljs.core.async.t_cljs$core$async11021(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11025 = (function (flag,cb,meta11026){
this.flag = flag;
this.cb = cb;
this.meta11026 = meta11026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11027,meta11026__$1){
var self__ = this;
var _11027__$1 = this;
return (new cljs.core.async.t_cljs$core$async11025(self__.flag,self__.cb,meta11026__$1));
}));

(cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11027){
var self__ = this;
var _11027__$1 = this;
return self__.meta11026;
}));

(cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11026","meta11026",1875005482,null)], null);
}));

(cljs.core.async.t_cljs$core$async11025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11025");

(cljs.core.async.t_cljs$core$async11025.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11025.
 */
cljs.core.async.__GT_t_cljs$core$async11025 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11025(flag__$1,cb__$1,meta11026){
return (new cljs.core.async.t_cljs$core$async11025(flag__$1,cb__$1,meta11026));
});

}

return (new cljs.core.async.t_cljs$core$async11025(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11028_SHARP_){
var G__11032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11028_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11032) : fret.call(null,G__11032));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11029_SHARP_){
var G__11033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11029_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11033) : fret.call(null,G__11033));
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
var G__12735 = (i + (1));
i = G__12735;
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
var len__4736__auto___12736 = arguments.length;
var i__4737__auto___12737 = (0);
while(true){
if((i__4737__auto___12737 < len__4736__auto___12736)){
args__4742__auto__.push((arguments[i__4737__auto___12737]));

var G__12738 = (i__4737__auto___12737 + (1));
i__4737__auto___12737 = G__12738;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11041){
var map__11042 = p__11041;
var map__11042__$1 = (((((!((map__11042 == null))))?(((((map__11042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11042):map__11042);
var opts = map__11042__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11037){
var G__11038 = cljs.core.first(seq11037);
var seq11037__$1 = cljs.core.next(seq11037);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11038,seq11037__$1);
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
var G__11051 = arguments.length;
switch (G__11051) {
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
var c__10915__auto___12753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11084){
var state_val_11085 = (state_11084[(1)]);
if((state_val_11085 === (7))){
var inst_11078 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
var statearr_11087_12754 = state_11084__$1;
(statearr_11087_12754[(2)] = inst_11078);

(statearr_11087_12754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (1))){
var state_11084__$1 = state_11084;
var statearr_11088_12757 = state_11084__$1;
(statearr_11088_12757[(2)] = null);

(statearr_11088_12757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (4))){
var inst_11061 = (state_11084[(7)]);
var inst_11061__$1 = (state_11084[(2)]);
var inst_11062 = (inst_11061__$1 == null);
var state_11084__$1 = (function (){var statearr_11089 = state_11084;
(statearr_11089[(7)] = inst_11061__$1);

return statearr_11089;
})();
if(cljs.core.truth_(inst_11062)){
var statearr_11090_12758 = state_11084__$1;
(statearr_11090_12758[(1)] = (5));

} else {
var statearr_11091_12759 = state_11084__$1;
(statearr_11091_12759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (13))){
var state_11084__$1 = state_11084;
var statearr_11092_12762 = state_11084__$1;
(statearr_11092_12762[(2)] = null);

(statearr_11092_12762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (6))){
var inst_11061 = (state_11084[(7)]);
var state_11084__$1 = state_11084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11084__$1,(11),to,inst_11061);
} else {
if((state_val_11085 === (3))){
var inst_11082 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11084__$1,inst_11082);
} else {
if((state_val_11085 === (12))){
var state_11084__$1 = state_11084;
var statearr_11093_12767 = state_11084__$1;
(statearr_11093_12767[(2)] = null);

(statearr_11093_12767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (2))){
var state_11084__$1 = state_11084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11084__$1,(4),from);
} else {
if((state_val_11085 === (11))){
var inst_11071 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
if(cljs.core.truth_(inst_11071)){
var statearr_11095_12776 = state_11084__$1;
(statearr_11095_12776[(1)] = (12));

} else {
var statearr_11097_12777 = state_11084__$1;
(statearr_11097_12777[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (9))){
var state_11084__$1 = state_11084;
var statearr_11098_12779 = state_11084__$1;
(statearr_11098_12779[(2)] = null);

(statearr_11098_12779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (5))){
var state_11084__$1 = state_11084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11099_12780 = state_11084__$1;
(statearr_11099_12780[(1)] = (8));

} else {
var statearr_11100_12781 = state_11084__$1;
(statearr_11100_12781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (14))){
var inst_11076 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
var statearr_11101_12782 = state_11084__$1;
(statearr_11101_12782[(2)] = inst_11076);

(statearr_11101_12782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (10))){
var inst_11068 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
var statearr_11102_12783 = state_11084__$1;
(statearr_11102_12783[(2)] = inst_11068);

(statearr_11102_12783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (8))){
var inst_11065 = cljs.core.async.close_BANG_(to);
var state_11084__$1 = state_11084;
var statearr_11103_12784 = state_11084__$1;
(statearr_11103_12784[(2)] = inst_11065);

(statearr_11103_12784[(1)] = (10));


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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_11105 = [null,null,null,null,null,null,null,null];
(statearr_11105[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_11105[(1)] = (1));

return statearr_11105;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_11084){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11084);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11106){var ex__10776__auto__ = e11106;
var statearr_11107_12789 = state_11084;
(statearr_11107_12789[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11084[(4)]))){
var statearr_11109_12790 = state_11084;
(statearr_11109_12790[(1)] = cljs.core.first((state_11084[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12791 = state_11084;
state_11084 = G__12791;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_11084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_11084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11110 = f__10916__auto__();
(statearr_11110[(6)] = c__10915__auto___12753);

return statearr_11110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
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
var process = (function (p__11111){
var vec__11115 = p__11111;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(1),null);
var job = vec__11115;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10915__auto___12803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11125){
var state_val_11126 = (state_11125[(1)]);
if((state_val_11126 === (1))){
var state_11125__$1 = state_11125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11125__$1,(2),res,v);
} else {
if((state_val_11126 === (2))){
var inst_11122 = (state_11125[(2)]);
var inst_11123 = cljs.core.async.close_BANG_(res);
var state_11125__$1 = (function (){var statearr_11127 = state_11125;
(statearr_11127[(7)] = inst_11122);

return statearr_11127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11125__$1,inst_11123);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0 = (function (){
var statearr_11128 = [null,null,null,null,null,null,null,null];
(statearr_11128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__);

(statearr_11128[(1)] = (1));

return statearr_11128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1 = (function (state_11125){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11125);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11129){var ex__10776__auto__ = e11129;
var statearr_11130_12804 = state_11125;
(statearr_11130_12804[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11125[(4)]))){
var statearr_11133_12805 = state_11125;
(statearr_11133_12805[(1)] = cljs.core.first((state_11125[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12806 = state_11125;
state_11125 = G__12806;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = function(state_11125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1.call(this,state_11125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11134 = f__10916__auto__();
(statearr_11134[(6)] = c__10915__auto___12803);

return statearr_11134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11135){
var vec__11136 = p__11135;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(1),null);
var job = vec__11136;
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
var n__4613__auto___12807 = n;
var __12808 = (0);
while(true){
if((__12808 < n__4613__auto___12807)){
var G__11140_12809 = type;
var G__11140_12810__$1 = (((G__11140_12809 instanceof cljs.core.Keyword))?G__11140_12809.fqn:null);
switch (G__11140_12810__$1) {
case "compute":
var c__10915__auto___12812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12808,c__10915__auto___12812,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async){
return (function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = ((function (__12808,c__10915__auto___12812,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async){
return (function (state_11153){
var state_val_11154 = (state_11153[(1)]);
if((state_val_11154 === (1))){
var state_11153__$1 = state_11153;
var statearr_11155_12813 = state_11153__$1;
(statearr_11155_12813[(2)] = null);

(statearr_11155_12813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (2))){
var state_11153__$1 = state_11153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11153__$1,(4),jobs);
} else {
if((state_val_11154 === (3))){
var inst_11151 = (state_11153[(2)]);
var state_11153__$1 = state_11153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11153__$1,inst_11151);
} else {
if((state_val_11154 === (4))){
var inst_11143 = (state_11153[(2)]);
var inst_11144 = process(inst_11143);
var state_11153__$1 = state_11153;
if(cljs.core.truth_(inst_11144)){
var statearr_11156_12814 = state_11153__$1;
(statearr_11156_12814[(1)] = (5));

} else {
var statearr_11157_12815 = state_11153__$1;
(statearr_11157_12815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (5))){
var state_11153__$1 = state_11153;
var statearr_11158_12816 = state_11153__$1;
(statearr_11158_12816[(2)] = null);

(statearr_11158_12816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (6))){
var state_11153__$1 = state_11153;
var statearr_11159_12817 = state_11153__$1;
(statearr_11159_12817[(2)] = null);

(statearr_11159_12817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (7))){
var inst_11149 = (state_11153[(2)]);
var state_11153__$1 = state_11153;
var statearr_11160_12818 = state_11153__$1;
(statearr_11160_12818[(2)] = inst_11149);

(statearr_11160_12818[(1)] = (3));


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
});})(__12808,c__10915__auto___12812,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async))
;
return ((function (__12808,switch__10772__auto__,c__10915__auto___12812,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0 = (function (){
var statearr_11161 = [null,null,null,null,null,null,null];
(statearr_11161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__);

(statearr_11161[(1)] = (1));

return statearr_11161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1 = (function (state_11153){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11153);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11163){var ex__10776__auto__ = e11163;
var statearr_11164_12819 = state_11153;
(statearr_11164_12819[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11153[(4)]))){
var statearr_11165_12820 = state_11153;
(statearr_11165_12820[(1)] = cljs.core.first((state_11153[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12821 = state_11153;
state_11153 = G__12821;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = function(state_11153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1.call(this,state_11153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__;
})()
;})(__12808,switch__10772__auto__,c__10915__auto___12812,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async))
})();
var state__10917__auto__ = (function (){var statearr_11175 = f__10916__auto__();
(statearr_11175[(6)] = c__10915__auto___12812);

return statearr_11175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
});})(__12808,c__10915__auto___12812,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async))
);


break;
case "async":
var c__10915__auto___12822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12808,c__10915__auto___12822,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async){
return (function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = ((function (__12808,c__10915__auto___12822,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async){
return (function (state_11188){
var state_val_11189 = (state_11188[(1)]);
if((state_val_11189 === (1))){
var state_11188__$1 = state_11188;
var statearr_11190_12823 = state_11188__$1;
(statearr_11190_12823[(2)] = null);

(statearr_11190_12823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (2))){
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11188__$1,(4),jobs);
} else {
if((state_val_11189 === (3))){
var inst_11186 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11188__$1,inst_11186);
} else {
if((state_val_11189 === (4))){
var inst_11178 = (state_11188[(2)]);
var inst_11179 = async(inst_11178);
var state_11188__$1 = state_11188;
if(cljs.core.truth_(inst_11179)){
var statearr_11191_12829 = state_11188__$1;
(statearr_11191_12829[(1)] = (5));

} else {
var statearr_11192_12830 = state_11188__$1;
(statearr_11192_12830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (5))){
var state_11188__$1 = state_11188;
var statearr_11193_12831 = state_11188__$1;
(statearr_11193_12831[(2)] = null);

(statearr_11193_12831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (6))){
var state_11188__$1 = state_11188;
var statearr_11195_12832 = state_11188__$1;
(statearr_11195_12832[(2)] = null);

(statearr_11195_12832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (7))){
var inst_11184 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11198_12833 = state_11188__$1;
(statearr_11198_12833[(2)] = inst_11184);

(statearr_11198_12833[(1)] = (3));


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
});})(__12808,c__10915__auto___12822,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async))
;
return ((function (__12808,switch__10772__auto__,c__10915__auto___12822,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0 = (function (){
var statearr_11199 = [null,null,null,null,null,null,null];
(statearr_11199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__);

(statearr_11199[(1)] = (1));

return statearr_11199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1 = (function (state_11188){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11188);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11200){var ex__10776__auto__ = e11200;
var statearr_11201_12834 = state_11188;
(statearr_11201_12834[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11188[(4)]))){
var statearr_11202_12835 = state_11188;
(statearr_11202_12835[(1)] = cljs.core.first((state_11188[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12836 = state_11188;
state_11188 = G__12836;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = function(state_11188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1.call(this,state_11188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__;
})()
;})(__12808,switch__10772__auto__,c__10915__auto___12822,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async))
})();
var state__10917__auto__ = (function (){var statearr_11203 = f__10916__auto__();
(statearr_11203[(6)] = c__10915__auto___12822);

return statearr_11203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
});})(__12808,c__10915__auto___12822,G__11140_12809,G__11140_12810__$1,n__4613__auto___12807,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11140_12810__$1)].join('')));

}

var G__12837 = (__12808 + (1));
__12808 = G__12837;
continue;
} else {
}
break;
}

var c__10915__auto___12838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11225){
var state_val_11226 = (state_11225[(1)]);
if((state_val_11226 === (7))){
var inst_11221 = (state_11225[(2)]);
var state_11225__$1 = state_11225;
var statearr_11239_12839 = state_11225__$1;
(statearr_11239_12839[(2)] = inst_11221);

(statearr_11239_12839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (1))){
var state_11225__$1 = state_11225;
var statearr_11240_12840 = state_11225__$1;
(statearr_11240_12840[(2)] = null);

(statearr_11240_12840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (4))){
var inst_11206 = (state_11225[(7)]);
var inst_11206__$1 = (state_11225[(2)]);
var inst_11207 = (inst_11206__$1 == null);
var state_11225__$1 = (function (){var statearr_11241 = state_11225;
(statearr_11241[(7)] = inst_11206__$1);

return statearr_11241;
})();
if(cljs.core.truth_(inst_11207)){
var statearr_11242_12841 = state_11225__$1;
(statearr_11242_12841[(1)] = (5));

} else {
var statearr_11243_12842 = state_11225__$1;
(statearr_11243_12842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (6))){
var inst_11206 = (state_11225[(7)]);
var inst_11211 = (state_11225[(8)]);
var inst_11211__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11212 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11213 = [inst_11206,inst_11211__$1];
var inst_11214 = (new cljs.core.PersistentVector(null,2,(5),inst_11212,inst_11213,null));
var state_11225__$1 = (function (){var statearr_11244 = state_11225;
(statearr_11244[(8)] = inst_11211__$1);

return statearr_11244;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11225__$1,(8),jobs,inst_11214);
} else {
if((state_val_11226 === (3))){
var inst_11223 = (state_11225[(2)]);
var state_11225__$1 = state_11225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11225__$1,inst_11223);
} else {
if((state_val_11226 === (2))){
var state_11225__$1 = state_11225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11225__$1,(4),from);
} else {
if((state_val_11226 === (9))){
var inst_11218 = (state_11225[(2)]);
var state_11225__$1 = (function (){var statearr_11245 = state_11225;
(statearr_11245[(9)] = inst_11218);

return statearr_11245;
})();
var statearr_11246_12844 = state_11225__$1;
(statearr_11246_12844[(2)] = null);

(statearr_11246_12844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (5))){
var inst_11209 = cljs.core.async.close_BANG_(jobs);
var state_11225__$1 = state_11225;
var statearr_11250_12845 = state_11225__$1;
(statearr_11250_12845[(2)] = inst_11209);

(statearr_11250_12845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11226 === (8))){
var inst_11211 = (state_11225[(8)]);
var inst_11216 = (state_11225[(2)]);
var state_11225__$1 = (function (){var statearr_11251 = state_11225;
(statearr_11251[(10)] = inst_11216);

return statearr_11251;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11225__$1,(9),results,inst_11211);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0 = (function (){
var statearr_11252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__);

(statearr_11252[(1)] = (1));

return statearr_11252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1 = (function (state_11225){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11225);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11253){var ex__10776__auto__ = e11253;
var statearr_11254_12846 = state_11225;
(statearr_11254_12846[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11225[(4)]))){
var statearr_11255_12847 = state_11225;
(statearr_11255_12847[(1)] = cljs.core.first((state_11225[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12848 = state_11225;
state_11225 = G__12848;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = function(state_11225){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1.call(this,state_11225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11256 = f__10916__auto__();
(statearr_11256[(6)] = c__10915__auto___12838);

return statearr_11256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));


var c__10915__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11298){
var state_val_11299 = (state_11298[(1)]);
if((state_val_11299 === (7))){
var inst_11294 = (state_11298[(2)]);
var state_11298__$1 = state_11298;
var statearr_11303_12849 = state_11298__$1;
(statearr_11303_12849[(2)] = inst_11294);

(statearr_11303_12849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (20))){
var state_11298__$1 = state_11298;
var statearr_11304_12850 = state_11298__$1;
(statearr_11304_12850[(2)] = null);

(statearr_11304_12850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (1))){
var state_11298__$1 = state_11298;
var statearr_11305_12851 = state_11298__$1;
(statearr_11305_12851[(2)] = null);

(statearr_11305_12851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (4))){
var inst_11259 = (state_11298[(7)]);
var inst_11259__$1 = (state_11298[(2)]);
var inst_11262 = (inst_11259__$1 == null);
var state_11298__$1 = (function (){var statearr_11306 = state_11298;
(statearr_11306[(7)] = inst_11259__$1);

return statearr_11306;
})();
if(cljs.core.truth_(inst_11262)){
var statearr_11307_12852 = state_11298__$1;
(statearr_11307_12852[(1)] = (5));

} else {
var statearr_11308_12853 = state_11298__$1;
(statearr_11308_12853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (15))){
var inst_11276 = (state_11298[(8)]);
var state_11298__$1 = state_11298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11298__$1,(18),to,inst_11276);
} else {
if((state_val_11299 === (21))){
var inst_11289 = (state_11298[(2)]);
var state_11298__$1 = state_11298;
var statearr_11309_12854 = state_11298__$1;
(statearr_11309_12854[(2)] = inst_11289);

(statearr_11309_12854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (13))){
var inst_11291 = (state_11298[(2)]);
var state_11298__$1 = (function (){var statearr_11310 = state_11298;
(statearr_11310[(9)] = inst_11291);

return statearr_11310;
})();
var statearr_11311_12855 = state_11298__$1;
(statearr_11311_12855[(2)] = null);

(statearr_11311_12855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (6))){
var inst_11259 = (state_11298[(7)]);
var state_11298__$1 = state_11298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11298__$1,(11),inst_11259);
} else {
if((state_val_11299 === (17))){
var inst_11284 = (state_11298[(2)]);
var state_11298__$1 = state_11298;
if(cljs.core.truth_(inst_11284)){
var statearr_11312_12856 = state_11298__$1;
(statearr_11312_12856[(1)] = (19));

} else {
var statearr_11313_12857 = state_11298__$1;
(statearr_11313_12857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (3))){
var inst_11296 = (state_11298[(2)]);
var state_11298__$1 = state_11298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11298__$1,inst_11296);
} else {
if((state_val_11299 === (12))){
var inst_11273 = (state_11298[(10)]);
var state_11298__$1 = state_11298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11298__$1,(14),inst_11273);
} else {
if((state_val_11299 === (2))){
var state_11298__$1 = state_11298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11298__$1,(4),results);
} else {
if((state_val_11299 === (19))){
var state_11298__$1 = state_11298;
var statearr_11314_12860 = state_11298__$1;
(statearr_11314_12860[(2)] = null);

(statearr_11314_12860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (11))){
var inst_11273 = (state_11298[(2)]);
var state_11298__$1 = (function (){var statearr_11315 = state_11298;
(statearr_11315[(10)] = inst_11273);

return statearr_11315;
})();
var statearr_11316_12861 = state_11298__$1;
(statearr_11316_12861[(2)] = null);

(statearr_11316_12861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (9))){
var state_11298__$1 = state_11298;
var statearr_11317_12862 = state_11298__$1;
(statearr_11317_12862[(2)] = null);

(statearr_11317_12862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (5))){
var state_11298__$1 = state_11298;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11318_12863 = state_11298__$1;
(statearr_11318_12863[(1)] = (8));

} else {
var statearr_11319_12864 = state_11298__$1;
(statearr_11319_12864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (14))){
var inst_11276 = (state_11298[(8)]);
var inst_11276__$1 = (state_11298[(2)]);
var inst_11277 = (inst_11276__$1 == null);
var inst_11278 = cljs.core.not(inst_11277);
var state_11298__$1 = (function (){var statearr_11325 = state_11298;
(statearr_11325[(8)] = inst_11276__$1);

return statearr_11325;
})();
if(inst_11278){
var statearr_11326_12865 = state_11298__$1;
(statearr_11326_12865[(1)] = (15));

} else {
var statearr_11328_12866 = state_11298__$1;
(statearr_11328_12866[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (16))){
var state_11298__$1 = state_11298;
var statearr_11333_12867 = state_11298__$1;
(statearr_11333_12867[(2)] = false);

(statearr_11333_12867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (10))){
var inst_11270 = (state_11298[(2)]);
var state_11298__$1 = state_11298;
var statearr_11335_12868 = state_11298__$1;
(statearr_11335_12868[(2)] = inst_11270);

(statearr_11335_12868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (18))){
var inst_11281 = (state_11298[(2)]);
var state_11298__$1 = state_11298;
var statearr_11340_12869 = state_11298__$1;
(statearr_11340_12869[(2)] = inst_11281);

(statearr_11340_12869[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11299 === (8))){
var inst_11267 = cljs.core.async.close_BANG_(to);
var state_11298__$1 = state_11298;
var statearr_11343_12870 = state_11298__$1;
(statearr_11343_12870[(2)] = inst_11267);

(statearr_11343_12870[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0 = (function (){
var statearr_11344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__);

(statearr_11344[(1)] = (1));

return statearr_11344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1 = (function (state_11298){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11298);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11345){var ex__10776__auto__ = e11345;
var statearr_11346_12871 = state_11298;
(statearr_11346_12871[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11298[(4)]))){
var statearr_11347_12872 = state_11298;
(statearr_11347_12872[(1)] = cljs.core.first((state_11298[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12873 = state_11298;
state_11298 = G__12873;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__ = function(state_11298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1.call(this,state_11298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11348 = f__10916__auto__();
(statearr_11348[(6)] = c__10915__auto__);

return statearr_11348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));

return c__10915__auto__;
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
var G__11350 = arguments.length;
switch (G__11350) {
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
var G__11352 = arguments.length;
switch (G__11352) {
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
var G__11356 = arguments.length;
switch (G__11356) {
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
var c__10915__auto___12882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11387){
var state_val_11388 = (state_11387[(1)]);
if((state_val_11388 === (7))){
var inst_11383 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
var statearr_11389_12883 = state_11387__$1;
(statearr_11389_12883[(2)] = inst_11383);

(statearr_11389_12883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (1))){
var state_11387__$1 = state_11387;
var statearr_11390_12884 = state_11387__$1;
(statearr_11390_12884[(2)] = null);

(statearr_11390_12884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (4))){
var inst_11363 = (state_11387[(7)]);
var inst_11363__$1 = (state_11387[(2)]);
var inst_11364 = (inst_11363__$1 == null);
var state_11387__$1 = (function (){var statearr_11391 = state_11387;
(statearr_11391[(7)] = inst_11363__$1);

return statearr_11391;
})();
if(cljs.core.truth_(inst_11364)){
var statearr_11393_12885 = state_11387__$1;
(statearr_11393_12885[(1)] = (5));

} else {
var statearr_11394_12886 = state_11387__$1;
(statearr_11394_12886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (13))){
var state_11387__$1 = state_11387;
var statearr_11395_12887 = state_11387__$1;
(statearr_11395_12887[(2)] = null);

(statearr_11395_12887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (6))){
var inst_11363 = (state_11387[(7)]);
var inst_11369 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11363) : p.call(null,inst_11363));
var state_11387__$1 = state_11387;
if(cljs.core.truth_(inst_11369)){
var statearr_11396_12888 = state_11387__$1;
(statearr_11396_12888[(1)] = (9));

} else {
var statearr_11397_12889 = state_11387__$1;
(statearr_11397_12889[(1)] = (10));

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
var statearr_11398_12890 = state_11387__$1;
(statearr_11398_12890[(2)] = null);

(statearr_11398_12890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (2))){
var state_11387__$1 = state_11387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11387__$1,(4),ch);
} else {
if((state_val_11388 === (11))){
var inst_11363 = (state_11387[(7)]);
var inst_11373 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11387__$1,(8),inst_11373,inst_11363);
} else {
if((state_val_11388 === (9))){
var state_11387__$1 = state_11387;
var statearr_11401_12891 = state_11387__$1;
(statearr_11401_12891[(2)] = tc);

(statearr_11401_12891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (5))){
var inst_11366 = cljs.core.async.close_BANG_(tc);
var inst_11367 = cljs.core.async.close_BANG_(fc);
var state_11387__$1 = (function (){var statearr_11402 = state_11387;
(statearr_11402[(8)] = inst_11366);

return statearr_11402;
})();
var statearr_11403_12892 = state_11387__$1;
(statearr_11403_12892[(2)] = inst_11367);

(statearr_11403_12892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (14))){
var inst_11381 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
var statearr_11404_12893 = state_11387__$1;
(statearr_11404_12893[(2)] = inst_11381);

(statearr_11404_12893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (10))){
var state_11387__$1 = state_11387;
var statearr_11405_12894 = state_11387__$1;
(statearr_11405_12894[(2)] = fc);

(statearr_11405_12894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (8))){
var inst_11375 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
if(cljs.core.truth_(inst_11375)){
var statearr_11406_12895 = state_11387__$1;
(statearr_11406_12895[(1)] = (12));

} else {
var statearr_11407_12896 = state_11387__$1;
(statearr_11407_12896[(1)] = (13));

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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_11408 = [null,null,null,null,null,null,null,null,null];
(statearr_11408[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_11408[(1)] = (1));

return statearr_11408;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_11387){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11387);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11409){var ex__10776__auto__ = e11409;
var statearr_11410_12905 = state_11387;
(statearr_11410_12905[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11387[(4)]))){
var statearr_11411_12906 = state_11387;
(statearr_11411_12906[(1)] = cljs.core.first((state_11387[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12907 = state_11387;
state_11387 = G__12907;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_11387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_11387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11412 = f__10916__auto__();
(statearr_11412[(6)] = c__10915__auto___12882);

return statearr_11412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
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
var c__10915__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11434){
var state_val_11435 = (state_11434[(1)]);
if((state_val_11435 === (7))){
var inst_11430 = (state_11434[(2)]);
var state_11434__$1 = state_11434;
var statearr_11436_12908 = state_11434__$1;
(statearr_11436_12908[(2)] = inst_11430);

(statearr_11436_12908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (1))){
var inst_11413 = init;
var inst_11414 = inst_11413;
var state_11434__$1 = (function (){var statearr_11437 = state_11434;
(statearr_11437[(7)] = inst_11414);

return statearr_11437;
})();
var statearr_11438_12909 = state_11434__$1;
(statearr_11438_12909[(2)] = null);

(statearr_11438_12909[(1)] = (2));


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
var statearr_11440_12910 = state_11434__$1;
(statearr_11440_12910[(1)] = (5));

} else {
var statearr_11441_12911 = state_11434__$1;
(statearr_11441_12911[(1)] = (6));

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
var statearr_11445_12912 = state_11434__$1;
(statearr_11445_12912[(1)] = (8));

} else {
var statearr_11446_12913 = state_11434__$1;
(statearr_11446_12913[(1)] = (9));

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
var state_11434__$1 = (function (){var statearr_11451 = state_11434;
(statearr_11451[(7)] = inst_11414);

return statearr_11451;
})();
var statearr_11452_12914 = state_11434__$1;
(statearr_11452_12914[(2)] = null);

(statearr_11452_12914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (5))){
var inst_11414 = (state_11434[(7)]);
var state_11434__$1 = state_11434;
var statearr_11453_12915 = state_11434__$1;
(statearr_11453_12915[(2)] = inst_11414);

(statearr_11453_12915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (10))){
var inst_11428 = (state_11434[(2)]);
var state_11434__$1 = state_11434;
var statearr_11454_12916 = state_11434__$1;
(statearr_11454_12916[(2)] = inst_11428);

(statearr_11454_12916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (8))){
var inst_11421 = (state_11434[(9)]);
var inst_11424 = cljs.core.deref(inst_11421);
var state_11434__$1 = state_11434;
var statearr_11455_12917 = state_11434__$1;
(statearr_11455_12917[(2)] = inst_11424);

(statearr_11455_12917[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10773__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10773__auto____0 = (function (){
var statearr_11456 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11456[(0)] = cljs$core$async$reduce_$_state_machine__10773__auto__);

(statearr_11456[(1)] = (1));

return statearr_11456;
});
var cljs$core$async$reduce_$_state_machine__10773__auto____1 = (function (state_11434){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11434);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11457){var ex__10776__auto__ = e11457;
var statearr_11458_12924 = state_11434;
(statearr_11458_12924[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11434[(4)]))){
var statearr_11459_12925 = state_11434;
(statearr_11459_12925[(1)] = cljs.core.first((state_11434[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12926 = state_11434;
state_11434 = G__12926;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10773__auto__ = function(state_11434){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10773__auto____1.call(this,state_11434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10773__auto____0;
cljs$core$async$reduce_$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10773__auto____1;
return cljs$core$async$reduce_$_state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11460 = f__10916__auto__();
(statearr_11460[(6)] = c__10915__auto__);

return statearr_11460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));

return c__10915__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10915__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11468){
var state_val_11469 = (state_11468[(1)]);
if((state_val_11469 === (1))){
var inst_11461 = cljs.core.async.reduce(f__$1,init,ch);
var state_11468__$1 = state_11468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11468__$1,(2),inst_11461);
} else {
if((state_val_11469 === (2))){
var inst_11463 = (state_11468[(2)]);
var inst_11466 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11463) : f__$1.call(null,inst_11463));
var state_11468__$1 = state_11468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11468__$1,inst_11466);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10773__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10773__auto____0 = (function (){
var statearr_11474 = [null,null,null,null,null,null,null];
(statearr_11474[(0)] = cljs$core$async$transduce_$_state_machine__10773__auto__);

(statearr_11474[(1)] = (1));

return statearr_11474;
});
var cljs$core$async$transduce_$_state_machine__10773__auto____1 = (function (state_11468){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11468);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11475){var ex__10776__auto__ = e11475;
var statearr_11476_12927 = state_11468;
(statearr_11476_12927[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11468[(4)]))){
var statearr_11477_12928 = state_11468;
(statearr_11477_12928[(1)] = cljs.core.first((state_11468[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12929 = state_11468;
state_11468 = G__12929;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10773__auto__ = function(state_11468){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10773__auto____1.call(this,state_11468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10773__auto____0;
cljs$core$async$transduce_$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10773__auto____1;
return cljs$core$async$transduce_$_state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11478 = f__10916__auto__();
(statearr_11478[(6)] = c__10915__auto__);

return statearr_11478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));

return c__10915__auto__;
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
var G__11480 = arguments.length;
switch (G__11480) {
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
var c__10915__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11505){
var state_val_11506 = (state_11505[(1)]);
if((state_val_11506 === (7))){
var inst_11487 = (state_11505[(2)]);
var state_11505__$1 = state_11505;
var statearr_11507_12939 = state_11505__$1;
(statearr_11507_12939[(2)] = inst_11487);

(statearr_11507_12939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (1))){
var inst_11481 = cljs.core.seq(coll);
var inst_11482 = inst_11481;
var state_11505__$1 = (function (){var statearr_11508 = state_11505;
(statearr_11508[(7)] = inst_11482);

return statearr_11508;
})();
var statearr_11509_12940 = state_11505__$1;
(statearr_11509_12940[(2)] = null);

(statearr_11509_12940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (4))){
var inst_11482 = (state_11505[(7)]);
var inst_11485 = cljs.core.first(inst_11482);
var state_11505__$1 = state_11505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11505__$1,(7),ch,inst_11485);
} else {
if((state_val_11506 === (13))){
var inst_11499 = (state_11505[(2)]);
var state_11505__$1 = state_11505;
var statearr_11510_12941 = state_11505__$1;
(statearr_11510_12941[(2)] = inst_11499);

(statearr_11510_12941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (6))){
var inst_11490 = (state_11505[(2)]);
var state_11505__$1 = state_11505;
if(cljs.core.truth_(inst_11490)){
var statearr_11511_12942 = state_11505__$1;
(statearr_11511_12942[(1)] = (8));

} else {
var statearr_11512_12943 = state_11505__$1;
(statearr_11512_12943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (3))){
var inst_11503 = (state_11505[(2)]);
var state_11505__$1 = state_11505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11505__$1,inst_11503);
} else {
if((state_val_11506 === (12))){
var state_11505__$1 = state_11505;
var statearr_11513_12944 = state_11505__$1;
(statearr_11513_12944[(2)] = null);

(statearr_11513_12944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (2))){
var inst_11482 = (state_11505[(7)]);
var state_11505__$1 = state_11505;
if(cljs.core.truth_(inst_11482)){
var statearr_11514_12945 = state_11505__$1;
(statearr_11514_12945[(1)] = (4));

} else {
var statearr_11515_12946 = state_11505__$1;
(statearr_11515_12946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (11))){
var inst_11496 = cljs.core.async.close_BANG_(ch);
var state_11505__$1 = state_11505;
var statearr_11516_12947 = state_11505__$1;
(statearr_11516_12947[(2)] = inst_11496);

(statearr_11516_12947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (9))){
var state_11505__$1 = state_11505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11517_12948 = state_11505__$1;
(statearr_11517_12948[(1)] = (11));

} else {
var statearr_11518_12949 = state_11505__$1;
(statearr_11518_12949[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (5))){
var inst_11482 = (state_11505[(7)]);
var state_11505__$1 = state_11505;
var statearr_11519_12950 = state_11505__$1;
(statearr_11519_12950[(2)] = inst_11482);

(statearr_11519_12950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (10))){
var inst_11501 = (state_11505[(2)]);
var state_11505__$1 = state_11505;
var statearr_11520_12951 = state_11505__$1;
(statearr_11520_12951[(2)] = inst_11501);

(statearr_11520_12951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11506 === (8))){
var inst_11482 = (state_11505[(7)]);
var inst_11492 = cljs.core.next(inst_11482);
var inst_11482__$1 = inst_11492;
var state_11505__$1 = (function (){var statearr_11521 = state_11505;
(statearr_11521[(7)] = inst_11482__$1);

return statearr_11521;
})();
var statearr_11522_12952 = state_11505__$1;
(statearr_11522_12952[(2)] = null);

(statearr_11522_12952[(1)] = (2));


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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_11523 = [null,null,null,null,null,null,null,null];
(statearr_11523[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_11523[(1)] = (1));

return statearr_11523;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_11505){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11505);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11524){var ex__10776__auto__ = e11524;
var statearr_11525_12953 = state_11505;
(statearr_11525_12953[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11505[(4)]))){
var statearr_11526_12954 = state_11505;
(statearr_11526_12954[(1)] = cljs.core.first((state_11505[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12969 = state_11505;
state_11505 = G__12969;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_11505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_11505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11527 = f__10916__auto__();
(statearr_11527[(6)] = c__10915__auto__);

return statearr_11527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));

return c__10915__auto__;
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
var G__11535 = arguments.length;
switch (G__11535) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12971 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12971(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12975 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12975(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12983 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12983(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13002 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13002(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11540 = (function (ch,cs,meta11541){
this.ch = ch;
this.cs = cs;
this.meta11541 = meta11541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11542,meta11541__$1){
var self__ = this;
var _11542__$1 = this;
return (new cljs.core.async.t_cljs$core$async11540(self__.ch,self__.cs,meta11541__$1));
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11542){
var self__ = this;
var _11542__$1 = this;
return self__.meta11541;
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11541","meta11541",661674944,null)], null);
}));

(cljs.core.async.t_cljs$core$async11540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11540");

(cljs.core.async.t_cljs$core$async11540.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11540.
 */
cljs.core.async.__GT_t_cljs$core$async11540 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11540(ch__$1,cs__$1,meta11541){
return (new cljs.core.async.t_cljs$core$async11540(ch__$1,cs__$1,meta11541));
});

}

return (new cljs.core.async.t_cljs$core$async11540(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10915__auto___13031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11675){
var state_val_11676 = (state_11675[(1)]);
if((state_val_11676 === (7))){
var inst_11671 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
var statearr_11677_13032 = state_11675__$1;
(statearr_11677_13032[(2)] = inst_11671);

(statearr_11677_13032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (20))){
var inst_11576 = (state_11675[(7)]);
var inst_11588 = cljs.core.first(inst_11576);
var inst_11589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11588,(0),null);
var inst_11590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11588,(1),null);
var state_11675__$1 = (function (){var statearr_11678 = state_11675;
(statearr_11678[(8)] = inst_11589);

return statearr_11678;
})();
if(cljs.core.truth_(inst_11590)){
var statearr_11679_13036 = state_11675__$1;
(statearr_11679_13036[(1)] = (22));

} else {
var statearr_11680_13037 = state_11675__$1;
(statearr_11680_13037[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (27))){
var inst_11620 = (state_11675[(9)]);
var inst_11545 = (state_11675[(10)]);
var inst_11618 = (state_11675[(11)]);
var inst_11625 = (state_11675[(12)]);
var inst_11625__$1 = cljs.core._nth(inst_11618,inst_11620);
var inst_11626 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11625__$1,inst_11545,done);
var state_11675__$1 = (function (){var statearr_11682 = state_11675;
(statearr_11682[(12)] = inst_11625__$1);

return statearr_11682;
})();
if(cljs.core.truth_(inst_11626)){
var statearr_11683_13040 = state_11675__$1;
(statearr_11683_13040[(1)] = (30));

} else {
var statearr_11684_13041 = state_11675__$1;
(statearr_11684_13041[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (1))){
var state_11675__$1 = state_11675;
var statearr_11685_13043 = state_11675__$1;
(statearr_11685_13043[(2)] = null);

(statearr_11685_13043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (24))){
var inst_11576 = (state_11675[(7)]);
var inst_11595 = (state_11675[(2)]);
var inst_11596 = cljs.core.next(inst_11576);
var inst_11554 = inst_11596;
var inst_11555 = null;
var inst_11556 = (0);
var inst_11557 = (0);
var state_11675__$1 = (function (){var statearr_11686 = state_11675;
(statearr_11686[(13)] = inst_11556);

(statearr_11686[(14)] = inst_11557);

(statearr_11686[(15)] = inst_11595);

(statearr_11686[(16)] = inst_11554);

(statearr_11686[(17)] = inst_11555);

return statearr_11686;
})();
var statearr_11687_13046 = state_11675__$1;
(statearr_11687_13046[(2)] = null);

(statearr_11687_13046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (39))){
var state_11675__$1 = state_11675;
var statearr_11691_13048 = state_11675__$1;
(statearr_11691_13048[(2)] = null);

(statearr_11691_13048[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (4))){
var inst_11545 = (state_11675[(10)]);
var inst_11545__$1 = (state_11675[(2)]);
var inst_11546 = (inst_11545__$1 == null);
var state_11675__$1 = (function (){var statearr_11692 = state_11675;
(statearr_11692[(10)] = inst_11545__$1);

return statearr_11692;
})();
if(cljs.core.truth_(inst_11546)){
var statearr_11693_13049 = state_11675__$1;
(statearr_11693_13049[(1)] = (5));

} else {
var statearr_11694_13050 = state_11675__$1;
(statearr_11694_13050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (15))){
var inst_11556 = (state_11675[(13)]);
var inst_11557 = (state_11675[(14)]);
var inst_11554 = (state_11675[(16)]);
var inst_11555 = (state_11675[(17)]);
var inst_11572 = (state_11675[(2)]);
var inst_11573 = (inst_11557 + (1));
var tmp11688 = inst_11556;
var tmp11689 = inst_11554;
var tmp11690 = inst_11555;
var inst_11554__$1 = tmp11689;
var inst_11555__$1 = tmp11690;
var inst_11556__$1 = tmp11688;
var inst_11557__$1 = inst_11573;
var state_11675__$1 = (function (){var statearr_11695 = state_11675;
(statearr_11695[(13)] = inst_11556__$1);

(statearr_11695[(14)] = inst_11557__$1);

(statearr_11695[(18)] = inst_11572);

(statearr_11695[(16)] = inst_11554__$1);

(statearr_11695[(17)] = inst_11555__$1);

return statearr_11695;
})();
var statearr_11696_13060 = state_11675__$1;
(statearr_11696_13060[(2)] = null);

(statearr_11696_13060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (21))){
var inst_11599 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
var statearr_11700_13061 = state_11675__$1;
(statearr_11700_13061[(2)] = inst_11599);

(statearr_11700_13061[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (31))){
var inst_11625 = (state_11675[(12)]);
var inst_11629 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11625);
var state_11675__$1 = state_11675;
var statearr_11701_13062 = state_11675__$1;
(statearr_11701_13062[(2)] = inst_11629);

(statearr_11701_13062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (32))){
var inst_11617 = (state_11675[(19)]);
var inst_11619 = (state_11675[(20)]);
var inst_11620 = (state_11675[(9)]);
var inst_11618 = (state_11675[(11)]);
var inst_11631 = (state_11675[(2)]);
var inst_11632 = (inst_11620 + (1));
var tmp11697 = inst_11617;
var tmp11698 = inst_11619;
var tmp11699 = inst_11618;
var inst_11617__$1 = tmp11697;
var inst_11618__$1 = tmp11699;
var inst_11619__$1 = tmp11698;
var inst_11620__$1 = inst_11632;
var state_11675__$1 = (function (){var statearr_11702 = state_11675;
(statearr_11702[(19)] = inst_11617__$1);

(statearr_11702[(20)] = inst_11619__$1);

(statearr_11702[(9)] = inst_11620__$1);

(statearr_11702[(21)] = inst_11631);

(statearr_11702[(11)] = inst_11618__$1);

return statearr_11702;
})();
var statearr_11703_13063 = state_11675__$1;
(statearr_11703_13063[(2)] = null);

(statearr_11703_13063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (40))){
var inst_11644 = (state_11675[(22)]);
var inst_11648 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11644);
var state_11675__$1 = state_11675;
var statearr_11704_13064 = state_11675__$1;
(statearr_11704_13064[(2)] = inst_11648);

(statearr_11704_13064[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (33))){
var inst_11635 = (state_11675[(23)]);
var inst_11637 = cljs.core.chunked_seq_QMARK_(inst_11635);
var state_11675__$1 = state_11675;
if(inst_11637){
var statearr_11705_13065 = state_11675__$1;
(statearr_11705_13065[(1)] = (36));

} else {
var statearr_11706_13066 = state_11675__$1;
(statearr_11706_13066[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (13))){
var inst_11566 = (state_11675[(24)]);
var inst_11569 = cljs.core.async.close_BANG_(inst_11566);
var state_11675__$1 = state_11675;
var statearr_11707_13067 = state_11675__$1;
(statearr_11707_13067[(2)] = inst_11569);

(statearr_11707_13067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (22))){
var inst_11589 = (state_11675[(8)]);
var inst_11592 = cljs.core.async.close_BANG_(inst_11589);
var state_11675__$1 = state_11675;
var statearr_11708_13068 = state_11675__$1;
(statearr_11708_13068[(2)] = inst_11592);

(statearr_11708_13068[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (36))){
var inst_11635 = (state_11675[(23)]);
var inst_11639 = cljs.core.chunk_first(inst_11635);
var inst_11640 = cljs.core.chunk_rest(inst_11635);
var inst_11641 = cljs.core.count(inst_11639);
var inst_11617 = inst_11640;
var inst_11618 = inst_11639;
var inst_11619 = inst_11641;
var inst_11620 = (0);
var state_11675__$1 = (function (){var statearr_11709 = state_11675;
(statearr_11709[(19)] = inst_11617);

(statearr_11709[(20)] = inst_11619);

(statearr_11709[(9)] = inst_11620);

(statearr_11709[(11)] = inst_11618);

return statearr_11709;
})();
var statearr_11710_13069 = state_11675__$1;
(statearr_11710_13069[(2)] = null);

(statearr_11710_13069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (41))){
var inst_11635 = (state_11675[(23)]);
var inst_11650 = (state_11675[(2)]);
var inst_11651 = cljs.core.next(inst_11635);
var inst_11617 = inst_11651;
var inst_11618 = null;
var inst_11619 = (0);
var inst_11620 = (0);
var state_11675__$1 = (function (){var statearr_11711 = state_11675;
(statearr_11711[(19)] = inst_11617);

(statearr_11711[(20)] = inst_11619);

(statearr_11711[(9)] = inst_11620);

(statearr_11711[(11)] = inst_11618);

(statearr_11711[(25)] = inst_11650);

return statearr_11711;
})();
var statearr_11712_13070 = state_11675__$1;
(statearr_11712_13070[(2)] = null);

(statearr_11712_13070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (43))){
var state_11675__$1 = state_11675;
var statearr_11713_13071 = state_11675__$1;
(statearr_11713_13071[(2)] = null);

(statearr_11713_13071[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (29))){
var inst_11659 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
var statearr_11714_13072 = state_11675__$1;
(statearr_11714_13072[(2)] = inst_11659);

(statearr_11714_13072[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (44))){
var inst_11668 = (state_11675[(2)]);
var state_11675__$1 = (function (){var statearr_11715 = state_11675;
(statearr_11715[(26)] = inst_11668);

return statearr_11715;
})();
var statearr_11716_13073 = state_11675__$1;
(statearr_11716_13073[(2)] = null);

(statearr_11716_13073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (6))){
var inst_11609 = (state_11675[(27)]);
var inst_11608 = cljs.core.deref(cs);
var inst_11609__$1 = cljs.core.keys(inst_11608);
var inst_11610 = cljs.core.count(inst_11609__$1);
var inst_11611 = cljs.core.reset_BANG_(dctr,inst_11610);
var inst_11616 = cljs.core.seq(inst_11609__$1);
var inst_11617 = inst_11616;
var inst_11618 = null;
var inst_11619 = (0);
var inst_11620 = (0);
var state_11675__$1 = (function (){var statearr_11717 = state_11675;
(statearr_11717[(19)] = inst_11617);

(statearr_11717[(28)] = inst_11611);

(statearr_11717[(20)] = inst_11619);

(statearr_11717[(9)] = inst_11620);

(statearr_11717[(27)] = inst_11609__$1);

(statearr_11717[(11)] = inst_11618);

return statearr_11717;
})();
var statearr_11718_13074 = state_11675__$1;
(statearr_11718_13074[(2)] = null);

(statearr_11718_13074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (28))){
var inst_11617 = (state_11675[(19)]);
var inst_11635 = (state_11675[(23)]);
var inst_11635__$1 = cljs.core.seq(inst_11617);
var state_11675__$1 = (function (){var statearr_11719 = state_11675;
(statearr_11719[(23)] = inst_11635__$1);

return statearr_11719;
})();
if(inst_11635__$1){
var statearr_11720_13075 = state_11675__$1;
(statearr_11720_13075[(1)] = (33));

} else {
var statearr_11721_13076 = state_11675__$1;
(statearr_11721_13076[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (25))){
var inst_11619 = (state_11675[(20)]);
var inst_11620 = (state_11675[(9)]);
var inst_11622 = (inst_11620 < inst_11619);
var inst_11623 = inst_11622;
var state_11675__$1 = state_11675;
if(cljs.core.truth_(inst_11623)){
var statearr_11722_13077 = state_11675__$1;
(statearr_11722_13077[(1)] = (27));

} else {
var statearr_11723_13078 = state_11675__$1;
(statearr_11723_13078[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (34))){
var state_11675__$1 = state_11675;
var statearr_11724_13079 = state_11675__$1;
(statearr_11724_13079[(2)] = null);

(statearr_11724_13079[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (17))){
var state_11675__$1 = state_11675;
var statearr_11725_13080 = state_11675__$1;
(statearr_11725_13080[(2)] = null);

(statearr_11725_13080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (3))){
var inst_11673 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11675__$1,inst_11673);
} else {
if((state_val_11676 === (12))){
var inst_11604 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
var statearr_11726_13081 = state_11675__$1;
(statearr_11726_13081[(2)] = inst_11604);

(statearr_11726_13081[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (2))){
var state_11675__$1 = state_11675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11675__$1,(4),ch);
} else {
if((state_val_11676 === (23))){
var state_11675__$1 = state_11675;
var statearr_11727_13082 = state_11675__$1;
(statearr_11727_13082[(2)] = null);

(statearr_11727_13082[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (35))){
var inst_11657 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
var statearr_11728_13083 = state_11675__$1;
(statearr_11728_13083[(2)] = inst_11657);

(statearr_11728_13083[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (19))){
var inst_11576 = (state_11675[(7)]);
var inst_11580 = cljs.core.chunk_first(inst_11576);
var inst_11581 = cljs.core.chunk_rest(inst_11576);
var inst_11582 = cljs.core.count(inst_11580);
var inst_11554 = inst_11581;
var inst_11555 = inst_11580;
var inst_11556 = inst_11582;
var inst_11557 = (0);
var state_11675__$1 = (function (){var statearr_11729 = state_11675;
(statearr_11729[(13)] = inst_11556);

(statearr_11729[(14)] = inst_11557);

(statearr_11729[(16)] = inst_11554);

(statearr_11729[(17)] = inst_11555);

return statearr_11729;
})();
var statearr_11730_13084 = state_11675__$1;
(statearr_11730_13084[(2)] = null);

(statearr_11730_13084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (11))){
var inst_11554 = (state_11675[(16)]);
var inst_11576 = (state_11675[(7)]);
var inst_11576__$1 = cljs.core.seq(inst_11554);
var state_11675__$1 = (function (){var statearr_11731 = state_11675;
(statearr_11731[(7)] = inst_11576__$1);

return statearr_11731;
})();
if(inst_11576__$1){
var statearr_11732_13085 = state_11675__$1;
(statearr_11732_13085[(1)] = (16));

} else {
var statearr_11733_13086 = state_11675__$1;
(statearr_11733_13086[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (9))){
var inst_11606 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
var statearr_11734_13087 = state_11675__$1;
(statearr_11734_13087[(2)] = inst_11606);

(statearr_11734_13087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (5))){
var inst_11552 = cljs.core.deref(cs);
var inst_11553 = cljs.core.seq(inst_11552);
var inst_11554 = inst_11553;
var inst_11555 = null;
var inst_11556 = (0);
var inst_11557 = (0);
var state_11675__$1 = (function (){var statearr_11735 = state_11675;
(statearr_11735[(13)] = inst_11556);

(statearr_11735[(14)] = inst_11557);

(statearr_11735[(16)] = inst_11554);

(statearr_11735[(17)] = inst_11555);

return statearr_11735;
})();
var statearr_11736_13088 = state_11675__$1;
(statearr_11736_13088[(2)] = null);

(statearr_11736_13088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (14))){
var state_11675__$1 = state_11675;
var statearr_11737_13089 = state_11675__$1;
(statearr_11737_13089[(2)] = null);

(statearr_11737_13089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (45))){
var inst_11665 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
var statearr_11738_13090 = state_11675__$1;
(statearr_11738_13090[(2)] = inst_11665);

(statearr_11738_13090[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (26))){
var inst_11609 = (state_11675[(27)]);
var inst_11661 = (state_11675[(2)]);
var inst_11662 = cljs.core.seq(inst_11609);
var state_11675__$1 = (function (){var statearr_11740 = state_11675;
(statearr_11740[(29)] = inst_11661);

return statearr_11740;
})();
if(inst_11662){
var statearr_11741_13091 = state_11675__$1;
(statearr_11741_13091[(1)] = (42));

} else {
var statearr_11742_13092 = state_11675__$1;
(statearr_11742_13092[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (16))){
var inst_11576 = (state_11675[(7)]);
var inst_11578 = cljs.core.chunked_seq_QMARK_(inst_11576);
var state_11675__$1 = state_11675;
if(inst_11578){
var statearr_11743_13093 = state_11675__$1;
(statearr_11743_13093[(1)] = (19));

} else {
var statearr_11744_13094 = state_11675__$1;
(statearr_11744_13094[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (38))){
var inst_11654 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
var statearr_11745_13095 = state_11675__$1;
(statearr_11745_13095[(2)] = inst_11654);

(statearr_11745_13095[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (30))){
var state_11675__$1 = state_11675;
var statearr_11746_13096 = state_11675__$1;
(statearr_11746_13096[(2)] = null);

(statearr_11746_13096[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (10))){
var inst_11557 = (state_11675[(14)]);
var inst_11555 = (state_11675[(17)]);
var inst_11565 = cljs.core._nth(inst_11555,inst_11557);
var inst_11566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11565,(0),null);
var inst_11567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11565,(1),null);
var state_11675__$1 = (function (){var statearr_11747 = state_11675;
(statearr_11747[(24)] = inst_11566);

return statearr_11747;
})();
if(cljs.core.truth_(inst_11567)){
var statearr_11748_13097 = state_11675__$1;
(statearr_11748_13097[(1)] = (13));

} else {
var statearr_11749_13098 = state_11675__$1;
(statearr_11749_13098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (18))){
var inst_11602 = (state_11675[(2)]);
var state_11675__$1 = state_11675;
var statearr_11750_13099 = state_11675__$1;
(statearr_11750_13099[(2)] = inst_11602);

(statearr_11750_13099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (42))){
var state_11675__$1 = state_11675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11675__$1,(45),dchan);
} else {
if((state_val_11676 === (37))){
var inst_11545 = (state_11675[(10)]);
var inst_11644 = (state_11675[(22)]);
var inst_11635 = (state_11675[(23)]);
var inst_11644__$1 = cljs.core.first(inst_11635);
var inst_11645 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11644__$1,inst_11545,done);
var state_11675__$1 = (function (){var statearr_11751 = state_11675;
(statearr_11751[(22)] = inst_11644__$1);

return statearr_11751;
})();
if(cljs.core.truth_(inst_11645)){
var statearr_11752_13100 = state_11675__$1;
(statearr_11752_13100[(1)] = (39));

} else {
var statearr_11753_13101 = state_11675__$1;
(statearr_11753_13101[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11676 === (8))){
var inst_11556 = (state_11675[(13)]);
var inst_11557 = (state_11675[(14)]);
var inst_11559 = (inst_11557 < inst_11556);
var inst_11560 = inst_11559;
var state_11675__$1 = state_11675;
if(cljs.core.truth_(inst_11560)){
var statearr_11754_13102 = state_11675__$1;
(statearr_11754_13102[(1)] = (10));

} else {
var statearr_11755_13103 = state_11675__$1;
(statearr_11755_13103[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10773__auto__ = null;
var cljs$core$async$mult_$_state_machine__10773__auto____0 = (function (){
var statearr_11756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11756[(0)] = cljs$core$async$mult_$_state_machine__10773__auto__);

(statearr_11756[(1)] = (1));

return statearr_11756;
});
var cljs$core$async$mult_$_state_machine__10773__auto____1 = (function (state_11675){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11675);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11757){var ex__10776__auto__ = e11757;
var statearr_11758_13104 = state_11675;
(statearr_11758_13104[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11675[(4)]))){
var statearr_11759_13106 = state_11675;
(statearr_11759_13106[(1)] = cljs.core.first((state_11675[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13109 = state_11675;
state_11675 = G__13109;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10773__auto__ = function(state_11675){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10773__auto____1.call(this,state_11675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10773__auto____0;
cljs$core$async$mult_$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10773__auto____1;
return cljs$core$async$mult_$_state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11760 = f__10916__auto__();
(statearr_11760[(6)] = c__10915__auto___13031);

return statearr_11760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
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
var G__11762 = arguments.length;
switch (G__11762) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13111 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13111(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13112 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13112(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13113 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13113(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13114 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13114(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13115 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13115(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13116 = arguments.length;
var i__4737__auto___13117 = (0);
while(true){
if((i__4737__auto___13117 < len__4736__auto___13116)){
args__4742__auto__.push((arguments[i__4737__auto___13117]));

var G__13118 = (i__4737__auto___13117 + (1));
i__4737__auto___13117 = G__13118;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11769){
var map__11770 = p__11769;
var map__11770__$1 = (((((!((map__11770 == null))))?(((((map__11770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11770):map__11770);
var opts = map__11770__$1;
var statearr_11772_13120 = state;
(statearr_11772_13120[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11773_13121 = state;
(statearr_11773_13121[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11774_13122 = state;
(statearr_11774_13122[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11765){
var G__11766 = cljs.core.first(seq11765);
var seq11765__$1 = cljs.core.next(seq11765);
var G__11767 = cljs.core.first(seq11765__$1);
var seq11765__$2 = cljs.core.next(seq11765__$1);
var G__11768 = cljs.core.first(seq11765__$2);
var seq11765__$3 = cljs.core.next(seq11765__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11766,G__11767,G__11768,seq11765__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11779 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11780){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11780 = meta11780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11781,meta11780__$1){
var self__ = this;
var _11781__$1 = this;
return (new cljs.core.async.t_cljs$core$async11779(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11780__$1));
}));

(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11781){
var self__ = this;
var _11781__$1 = this;
return self__.meta11780;
}));

(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11779.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11780","meta11780",430838695,null)], null);
}));

(cljs.core.async.t_cljs$core$async11779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11779");

(cljs.core.async.t_cljs$core$async11779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11779.
 */
cljs.core.async.__GT_t_cljs$core$async11779 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11779(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11780){
return (new cljs.core.async.t_cljs$core$async11779(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11780));
});

}

return (new cljs.core.async.t_cljs$core$async11779(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10915__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_11884){
var state_val_11885 = (state_11884[(1)]);
if((state_val_11885 === (7))){
var inst_11799 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
var statearr_11886_13125 = state_11884__$1;
(statearr_11886_13125[(2)] = inst_11799);

(statearr_11886_13125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (20))){
var inst_11811 = (state_11884[(7)]);
var state_11884__$1 = state_11884;
var statearr_11887_13126 = state_11884__$1;
(statearr_11887_13126[(2)] = inst_11811);

(statearr_11887_13126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (27))){
var state_11884__$1 = state_11884;
var statearr_11888_13127 = state_11884__$1;
(statearr_11888_13127[(2)] = null);

(statearr_11888_13127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (1))){
var inst_11786 = (state_11884[(8)]);
var inst_11786__$1 = calc_state();
var inst_11788 = (inst_11786__$1 == null);
var inst_11789 = cljs.core.not(inst_11788);
var state_11884__$1 = (function (){var statearr_11889 = state_11884;
(statearr_11889[(8)] = inst_11786__$1);

return statearr_11889;
})();
if(inst_11789){
var statearr_11890_13128 = state_11884__$1;
(statearr_11890_13128[(1)] = (2));

} else {
var statearr_11891_13129 = state_11884__$1;
(statearr_11891_13129[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (24))){
var inst_11858 = (state_11884[(9)]);
var inst_11844 = (state_11884[(10)]);
var inst_11835 = (state_11884[(11)]);
var inst_11858__$1 = (inst_11835.cljs$core$IFn$_invoke$arity$1 ? inst_11835.cljs$core$IFn$_invoke$arity$1(inst_11844) : inst_11835.call(null,inst_11844));
var state_11884__$1 = (function (){var statearr_11892 = state_11884;
(statearr_11892[(9)] = inst_11858__$1);

return statearr_11892;
})();
if(cljs.core.truth_(inst_11858__$1)){
var statearr_11893_13130 = state_11884__$1;
(statearr_11893_13130[(1)] = (29));

} else {
var statearr_11894_13131 = state_11884__$1;
(statearr_11894_13131[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (4))){
var inst_11802 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
if(cljs.core.truth_(inst_11802)){
var statearr_11895_13133 = state_11884__$1;
(statearr_11895_13133[(1)] = (8));

} else {
var statearr_11897_13134 = state_11884__$1;
(statearr_11897_13134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (15))){
var inst_11829 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
if(cljs.core.truth_(inst_11829)){
var statearr_11898_13135 = state_11884__$1;
(statearr_11898_13135[(1)] = (19));

} else {
var statearr_11899_13137 = state_11884__$1;
(statearr_11899_13137[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (21))){
var inst_11834 = (state_11884[(12)]);
var inst_11834__$1 = (state_11884[(2)]);
var inst_11835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11884__$1 = (function (){var statearr_11900 = state_11884;
(statearr_11900[(12)] = inst_11834__$1);

(statearr_11900[(11)] = inst_11835);

(statearr_11900[(13)] = inst_11836);

return statearr_11900;
})();
return cljs.core.async.ioc_alts_BANG_(state_11884__$1,(22),inst_11837);
} else {
if((state_val_11885 === (31))){
var inst_11866 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
if(cljs.core.truth_(inst_11866)){
var statearr_11901_13138 = state_11884__$1;
(statearr_11901_13138[(1)] = (32));

} else {
var statearr_11902_13139 = state_11884__$1;
(statearr_11902_13139[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (32))){
var inst_11843 = (state_11884[(14)]);
var state_11884__$1 = state_11884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11884__$1,(35),out,inst_11843);
} else {
if((state_val_11885 === (33))){
var inst_11834 = (state_11884[(12)]);
var inst_11811 = inst_11834;
var state_11884__$1 = (function (){var statearr_11903 = state_11884;
(statearr_11903[(7)] = inst_11811);

return statearr_11903;
})();
var statearr_11904_13140 = state_11884__$1;
(statearr_11904_13140[(2)] = null);

(statearr_11904_13140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (13))){
var inst_11811 = (state_11884[(7)]);
var inst_11818 = inst_11811.cljs$lang$protocol_mask$partition0$;
var inst_11819 = (inst_11818 & (64));
var inst_11820 = inst_11811.cljs$core$ISeq$;
var inst_11821 = (cljs.core.PROTOCOL_SENTINEL === inst_11820);
var inst_11822 = ((inst_11819) || (inst_11821));
var state_11884__$1 = state_11884;
if(cljs.core.truth_(inst_11822)){
var statearr_11905_13142 = state_11884__$1;
(statearr_11905_13142[(1)] = (16));

} else {
var statearr_11906_13144 = state_11884__$1;
(statearr_11906_13144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (22))){
var inst_11844 = (state_11884[(10)]);
var inst_11843 = (state_11884[(14)]);
var inst_11842 = (state_11884[(2)]);
var inst_11843__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11842,(0),null);
var inst_11844__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11842,(1),null);
var inst_11845 = (inst_11843__$1 == null);
var inst_11846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11844__$1,change);
var inst_11847 = ((inst_11845) || (inst_11846));
var state_11884__$1 = (function (){var statearr_11907 = state_11884;
(statearr_11907[(10)] = inst_11844__$1);

(statearr_11907[(14)] = inst_11843__$1);

return statearr_11907;
})();
if(cljs.core.truth_(inst_11847)){
var statearr_11908_13145 = state_11884__$1;
(statearr_11908_13145[(1)] = (23));

} else {
var statearr_11909_13146 = state_11884__$1;
(statearr_11909_13146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (36))){
var inst_11834 = (state_11884[(12)]);
var inst_11811 = inst_11834;
var state_11884__$1 = (function (){var statearr_11910 = state_11884;
(statearr_11910[(7)] = inst_11811);

return statearr_11910;
})();
var statearr_11911_13147 = state_11884__$1;
(statearr_11911_13147[(2)] = null);

(statearr_11911_13147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (29))){
var inst_11858 = (state_11884[(9)]);
var state_11884__$1 = state_11884;
var statearr_11912_13148 = state_11884__$1;
(statearr_11912_13148[(2)] = inst_11858);

(statearr_11912_13148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (6))){
var state_11884__$1 = state_11884;
var statearr_11913_13149 = state_11884__$1;
(statearr_11913_13149[(2)] = false);

(statearr_11913_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (28))){
var inst_11854 = (state_11884[(2)]);
var inst_11855 = calc_state();
var inst_11811 = inst_11855;
var state_11884__$1 = (function (){var statearr_11914 = state_11884;
(statearr_11914[(7)] = inst_11811);

(statearr_11914[(15)] = inst_11854);

return statearr_11914;
})();
var statearr_11915_13150 = state_11884__$1;
(statearr_11915_13150[(2)] = null);

(statearr_11915_13150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (25))){
var inst_11880 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
var statearr_11916_13151 = state_11884__$1;
(statearr_11916_13151[(2)] = inst_11880);

(statearr_11916_13151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (34))){
var inst_11878 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
var statearr_11917_13152 = state_11884__$1;
(statearr_11917_13152[(2)] = inst_11878);

(statearr_11917_13152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (17))){
var state_11884__$1 = state_11884;
var statearr_11918_13153 = state_11884__$1;
(statearr_11918_13153[(2)] = false);

(statearr_11918_13153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (3))){
var state_11884__$1 = state_11884;
var statearr_11921_13154 = state_11884__$1;
(statearr_11921_13154[(2)] = false);

(statearr_11921_13154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (12))){
var inst_11882 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11884__$1,inst_11882);
} else {
if((state_val_11885 === (2))){
var inst_11786 = (state_11884[(8)]);
var inst_11791 = inst_11786.cljs$lang$protocol_mask$partition0$;
var inst_11792 = (inst_11791 & (64));
var inst_11793 = inst_11786.cljs$core$ISeq$;
var inst_11794 = (cljs.core.PROTOCOL_SENTINEL === inst_11793);
var inst_11795 = ((inst_11792) || (inst_11794));
var state_11884__$1 = state_11884;
if(cljs.core.truth_(inst_11795)){
var statearr_11922_13155 = state_11884__$1;
(statearr_11922_13155[(1)] = (5));

} else {
var statearr_11923_13156 = state_11884__$1;
(statearr_11923_13156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (23))){
var inst_11843 = (state_11884[(14)]);
var inst_11849 = (inst_11843 == null);
var state_11884__$1 = state_11884;
if(cljs.core.truth_(inst_11849)){
var statearr_11924_13157 = state_11884__$1;
(statearr_11924_13157[(1)] = (26));

} else {
var statearr_11925_13158 = state_11884__$1;
(statearr_11925_13158[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (35))){
var inst_11869 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
if(cljs.core.truth_(inst_11869)){
var statearr_11926_13159 = state_11884__$1;
(statearr_11926_13159[(1)] = (36));

} else {
var statearr_11927_13160 = state_11884__$1;
(statearr_11927_13160[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (19))){
var inst_11811 = (state_11884[(7)]);
var inst_11831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11811);
var state_11884__$1 = state_11884;
var statearr_11928_13161 = state_11884__$1;
(statearr_11928_13161[(2)] = inst_11831);

(statearr_11928_13161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (11))){
var inst_11811 = (state_11884[(7)]);
var inst_11815 = (inst_11811 == null);
var inst_11816 = cljs.core.not(inst_11815);
var state_11884__$1 = state_11884;
if(inst_11816){
var statearr_11929_13162 = state_11884__$1;
(statearr_11929_13162[(1)] = (13));

} else {
var statearr_11930_13163 = state_11884__$1;
(statearr_11930_13163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (9))){
var inst_11786 = (state_11884[(8)]);
var state_11884__$1 = state_11884;
var statearr_11931_13164 = state_11884__$1;
(statearr_11931_13164[(2)] = inst_11786);

(statearr_11931_13164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (5))){
var state_11884__$1 = state_11884;
var statearr_11932_13165 = state_11884__$1;
(statearr_11932_13165[(2)] = true);

(statearr_11932_13165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (14))){
var state_11884__$1 = state_11884;
var statearr_11933_13166 = state_11884__$1;
(statearr_11933_13166[(2)] = false);

(statearr_11933_13166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (26))){
var inst_11844 = (state_11884[(10)]);
var inst_11851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11844);
var state_11884__$1 = state_11884;
var statearr_11934_13168 = state_11884__$1;
(statearr_11934_13168[(2)] = inst_11851);

(statearr_11934_13168[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (16))){
var state_11884__$1 = state_11884;
var statearr_11935_13169 = state_11884__$1;
(statearr_11935_13169[(2)] = true);

(statearr_11935_13169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (38))){
var inst_11874 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
var statearr_11937_13170 = state_11884__$1;
(statearr_11937_13170[(2)] = inst_11874);

(statearr_11937_13170[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (30))){
var inst_11844 = (state_11884[(10)]);
var inst_11835 = (state_11884[(11)]);
var inst_11836 = (state_11884[(13)]);
var inst_11861 = cljs.core.empty_QMARK_(inst_11835);
var inst_11862 = (inst_11836.cljs$core$IFn$_invoke$arity$1 ? inst_11836.cljs$core$IFn$_invoke$arity$1(inst_11844) : inst_11836.call(null,inst_11844));
var inst_11863 = cljs.core.not(inst_11862);
var inst_11864 = ((inst_11861) && (inst_11863));
var state_11884__$1 = state_11884;
var statearr_11938_13171 = state_11884__$1;
(statearr_11938_13171[(2)] = inst_11864);

(statearr_11938_13171[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (10))){
var inst_11786 = (state_11884[(8)]);
var inst_11807 = (state_11884[(2)]);
var inst_11808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11807,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11807,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11807,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11811 = inst_11786;
var state_11884__$1 = (function (){var statearr_11939 = state_11884;
(statearr_11939[(7)] = inst_11811);

(statearr_11939[(16)] = inst_11809);

(statearr_11939[(17)] = inst_11810);

(statearr_11939[(18)] = inst_11808);

return statearr_11939;
})();
var statearr_11940_13172 = state_11884__$1;
(statearr_11940_13172[(2)] = null);

(statearr_11940_13172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (18))){
var inst_11826 = (state_11884[(2)]);
var state_11884__$1 = state_11884;
var statearr_11941_13173 = state_11884__$1;
(statearr_11941_13173[(2)] = inst_11826);

(statearr_11941_13173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (37))){
var state_11884__$1 = state_11884;
var statearr_11942_13174 = state_11884__$1;
(statearr_11942_13174[(2)] = null);

(statearr_11942_13174[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11885 === (8))){
var inst_11786 = (state_11884[(8)]);
var inst_11804 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11786);
var state_11884__$1 = state_11884;
var statearr_11943_13175 = state_11884__$1;
(statearr_11943_13175[(2)] = inst_11804);

(statearr_11943_13175[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10773__auto__ = null;
var cljs$core$async$mix_$_state_machine__10773__auto____0 = (function (){
var statearr_11944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11944[(0)] = cljs$core$async$mix_$_state_machine__10773__auto__);

(statearr_11944[(1)] = (1));

return statearr_11944;
});
var cljs$core$async$mix_$_state_machine__10773__auto____1 = (function (state_11884){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_11884);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e11945){var ex__10776__auto__ = e11945;
var statearr_11946_13176 = state_11884;
(statearr_11946_13176[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_11884[(4)]))){
var statearr_11947_13177 = state_11884;
(statearr_11947_13177[(1)] = cljs.core.first((state_11884[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13178 = state_11884;
state_11884 = G__13178;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10773__auto__ = function(state_11884){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10773__auto____1.call(this,state_11884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10773__auto____0;
cljs$core$async$mix_$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10773__auto____1;
return cljs$core$async$mix_$_state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_11948 = f__10916__auto__();
(statearr_11948[(6)] = c__10915__auto___13124);

return statearr_11948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13179 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13179(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13180 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13180(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13182 = (function() {
var G__13183 = null;
var G__13183__1 = (function (p){
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
var G__13183__2 = (function (p,v){
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
G__13183 = function(p,v){
switch(arguments.length){
case 1:
return G__13183__1.call(this,p);
case 2:
return G__13183__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13183.cljs$core$IFn$_invoke$arity$1 = G__13183__1;
G__13183.cljs$core$IFn$_invoke$arity$2 = G__13183__2;
return G__13183;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11961 = arguments.length;
switch (G__11961) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13182(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13182(p,v);
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
var G__11964 = arguments.length;
switch (G__11964) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11962_SHARP_){
if(cljs.core.truth_((p1__11962_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11962_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11962_SHARP_.call(null,topic)))){
return p1__11962_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11962_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11965 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11966){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11966 = meta11966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11967,meta11966__$1){
var self__ = this;
var _11967__$1 = this;
return (new cljs.core.async.t_cljs$core$async11965(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11966__$1));
}));

(cljs.core.async.t_cljs$core$async11965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11967){
var self__ = this;
var _11967__$1 = this;
return self__.meta11966;
}));

(cljs.core.async.t_cljs$core$async11965.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11965.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11965.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11965.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11966","meta11966",-1340340183,null)], null);
}));

(cljs.core.async.t_cljs$core$async11965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11965");

(cljs.core.async.t_cljs$core$async11965.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11965.
 */
cljs.core.async.__GT_t_cljs$core$async11965 = (function cljs$core$async$__GT_t_cljs$core$async11965(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11966){
return (new cljs.core.async.t_cljs$core$async11965(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11966));
});

}

return (new cljs.core.async.t_cljs$core$async11965(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10915__auto___13192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_12042){
var state_val_12043 = (state_12042[(1)]);
if((state_val_12043 === (7))){
var inst_12038 = (state_12042[(2)]);
var state_12042__$1 = state_12042;
var statearr_12044_13193 = state_12042__$1;
(statearr_12044_13193[(2)] = inst_12038);

(statearr_12044_13193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (20))){
var state_12042__$1 = state_12042;
var statearr_12045_13194 = state_12042__$1;
(statearr_12045_13194[(2)] = null);

(statearr_12045_13194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (1))){
var state_12042__$1 = state_12042;
var statearr_12046_13195 = state_12042__$1;
(statearr_12046_13195[(2)] = null);

(statearr_12046_13195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (24))){
var inst_12021 = (state_12042[(7)]);
var inst_12030 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12021);
var state_12042__$1 = state_12042;
var statearr_12047_13196 = state_12042__$1;
(statearr_12047_13196[(2)] = inst_12030);

(statearr_12047_13196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (4))){
var inst_11972 = (state_12042[(8)]);
var inst_11972__$1 = (state_12042[(2)]);
var inst_11973 = (inst_11972__$1 == null);
var state_12042__$1 = (function (){var statearr_12050 = state_12042;
(statearr_12050[(8)] = inst_11972__$1);

return statearr_12050;
})();
if(cljs.core.truth_(inst_11973)){
var statearr_12051_13197 = state_12042__$1;
(statearr_12051_13197[(1)] = (5));

} else {
var statearr_12054_13198 = state_12042__$1;
(statearr_12054_13198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (15))){
var inst_12015 = (state_12042[(2)]);
var state_12042__$1 = state_12042;
var statearr_12055_13199 = state_12042__$1;
(statearr_12055_13199[(2)] = inst_12015);

(statearr_12055_13199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (21))){
var inst_12035 = (state_12042[(2)]);
var state_12042__$1 = (function (){var statearr_12057 = state_12042;
(statearr_12057[(9)] = inst_12035);

return statearr_12057;
})();
var statearr_12058_13200 = state_12042__$1;
(statearr_12058_13200[(2)] = null);

(statearr_12058_13200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (13))){
var inst_11996 = (state_12042[(10)]);
var inst_11998 = cljs.core.chunked_seq_QMARK_(inst_11996);
var state_12042__$1 = state_12042;
if(inst_11998){
var statearr_12059_13201 = state_12042__$1;
(statearr_12059_13201[(1)] = (16));

} else {
var statearr_12060_13202 = state_12042__$1;
(statearr_12060_13202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (22))){
var inst_12027 = (state_12042[(2)]);
var state_12042__$1 = state_12042;
if(cljs.core.truth_(inst_12027)){
var statearr_12061_13203 = state_12042__$1;
(statearr_12061_13203[(1)] = (23));

} else {
var statearr_12062_13204 = state_12042__$1;
(statearr_12062_13204[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (6))){
var inst_12023 = (state_12042[(11)]);
var inst_11972 = (state_12042[(8)]);
var inst_12021 = (state_12042[(7)]);
var inst_12021__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11972) : topic_fn.call(null,inst_11972));
var inst_12022 = cljs.core.deref(mults);
var inst_12023__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12022,inst_12021__$1);
var state_12042__$1 = (function (){var statearr_12063 = state_12042;
(statearr_12063[(11)] = inst_12023__$1);

(statearr_12063[(7)] = inst_12021__$1);

return statearr_12063;
})();
if(cljs.core.truth_(inst_12023__$1)){
var statearr_12064_13205 = state_12042__$1;
(statearr_12064_13205[(1)] = (19));

} else {
var statearr_12065_13206 = state_12042__$1;
(statearr_12065_13206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (25))){
var inst_12032 = (state_12042[(2)]);
var state_12042__$1 = state_12042;
var statearr_12066_13207 = state_12042__$1;
(statearr_12066_13207[(2)] = inst_12032);

(statearr_12066_13207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (17))){
var inst_11996 = (state_12042[(10)]);
var inst_12006 = cljs.core.first(inst_11996);
var inst_12007 = cljs.core.async.muxch_STAR_(inst_12006);
var inst_12008 = cljs.core.async.close_BANG_(inst_12007);
var inst_12009 = cljs.core.next(inst_11996);
var inst_11982 = inst_12009;
var inst_11983 = null;
var inst_11984 = (0);
var inst_11985 = (0);
var state_12042__$1 = (function (){var statearr_12067 = state_12042;
(statearr_12067[(12)] = inst_11985);

(statearr_12067[(13)] = inst_11982);

(statearr_12067[(14)] = inst_11984);

(statearr_12067[(15)] = inst_12008);

(statearr_12067[(16)] = inst_11983);

return statearr_12067;
})();
var statearr_12068_13209 = state_12042__$1;
(statearr_12068_13209[(2)] = null);

(statearr_12068_13209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (3))){
var inst_12040 = (state_12042[(2)]);
var state_12042__$1 = state_12042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12042__$1,inst_12040);
} else {
if((state_val_12043 === (12))){
var inst_12017 = (state_12042[(2)]);
var state_12042__$1 = state_12042;
var statearr_12069_13210 = state_12042__$1;
(statearr_12069_13210[(2)] = inst_12017);

(statearr_12069_13210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (2))){
var state_12042__$1 = state_12042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12042__$1,(4),ch);
} else {
if((state_val_12043 === (23))){
var state_12042__$1 = state_12042;
var statearr_12070_13211 = state_12042__$1;
(statearr_12070_13211[(2)] = null);

(statearr_12070_13211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (19))){
var inst_12023 = (state_12042[(11)]);
var inst_11972 = (state_12042[(8)]);
var inst_12025 = cljs.core.async.muxch_STAR_(inst_12023);
var state_12042__$1 = state_12042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12042__$1,(22),inst_12025,inst_11972);
} else {
if((state_val_12043 === (11))){
var inst_11982 = (state_12042[(13)]);
var inst_11996 = (state_12042[(10)]);
var inst_11996__$1 = cljs.core.seq(inst_11982);
var state_12042__$1 = (function (){var statearr_12071 = state_12042;
(statearr_12071[(10)] = inst_11996__$1);

return statearr_12071;
})();
if(inst_11996__$1){
var statearr_12072_13215 = state_12042__$1;
(statearr_12072_13215[(1)] = (13));

} else {
var statearr_12073_13216 = state_12042__$1;
(statearr_12073_13216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (9))){
var inst_12019 = (state_12042[(2)]);
var state_12042__$1 = state_12042;
var statearr_12074_13217 = state_12042__$1;
(statearr_12074_13217[(2)] = inst_12019);

(statearr_12074_13217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (5))){
var inst_11979 = cljs.core.deref(mults);
var inst_11980 = cljs.core.vals(inst_11979);
var inst_11981 = cljs.core.seq(inst_11980);
var inst_11982 = inst_11981;
var inst_11983 = null;
var inst_11984 = (0);
var inst_11985 = (0);
var state_12042__$1 = (function (){var statearr_12076 = state_12042;
(statearr_12076[(12)] = inst_11985);

(statearr_12076[(13)] = inst_11982);

(statearr_12076[(14)] = inst_11984);

(statearr_12076[(16)] = inst_11983);

return statearr_12076;
})();
var statearr_12077_13218 = state_12042__$1;
(statearr_12077_13218[(2)] = null);

(statearr_12077_13218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (14))){
var state_12042__$1 = state_12042;
var statearr_12081_13219 = state_12042__$1;
(statearr_12081_13219[(2)] = null);

(statearr_12081_13219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (16))){
var inst_11996 = (state_12042[(10)]);
var inst_12001 = cljs.core.chunk_first(inst_11996);
var inst_12002 = cljs.core.chunk_rest(inst_11996);
var inst_12003 = cljs.core.count(inst_12001);
var inst_11982 = inst_12002;
var inst_11983 = inst_12001;
var inst_11984 = inst_12003;
var inst_11985 = (0);
var state_12042__$1 = (function (){var statearr_12084 = state_12042;
(statearr_12084[(12)] = inst_11985);

(statearr_12084[(13)] = inst_11982);

(statearr_12084[(14)] = inst_11984);

(statearr_12084[(16)] = inst_11983);

return statearr_12084;
})();
var statearr_12085_13241 = state_12042__$1;
(statearr_12085_13241[(2)] = null);

(statearr_12085_13241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (10))){
var inst_11985 = (state_12042[(12)]);
var inst_11982 = (state_12042[(13)]);
var inst_11984 = (state_12042[(14)]);
var inst_11983 = (state_12042[(16)]);
var inst_11990 = cljs.core._nth(inst_11983,inst_11985);
var inst_11991 = cljs.core.async.muxch_STAR_(inst_11990);
var inst_11992 = cljs.core.async.close_BANG_(inst_11991);
var inst_11993 = (inst_11985 + (1));
var tmp12078 = inst_11982;
var tmp12079 = inst_11984;
var tmp12080 = inst_11983;
var inst_11982__$1 = tmp12078;
var inst_11983__$1 = tmp12080;
var inst_11984__$1 = tmp12079;
var inst_11985__$1 = inst_11993;
var state_12042__$1 = (function (){var statearr_12086 = state_12042;
(statearr_12086[(12)] = inst_11985__$1);

(statearr_12086[(17)] = inst_11992);

(statearr_12086[(13)] = inst_11982__$1);

(statearr_12086[(14)] = inst_11984__$1);

(statearr_12086[(16)] = inst_11983__$1);

return statearr_12086;
})();
var statearr_12087_13242 = state_12042__$1;
(statearr_12087_13242[(2)] = null);

(statearr_12087_13242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (18))){
var inst_12012 = (state_12042[(2)]);
var state_12042__$1 = state_12042;
var statearr_12088_13243 = state_12042__$1;
(statearr_12088_13243[(2)] = inst_12012);

(statearr_12088_13243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12043 === (8))){
var inst_11985 = (state_12042[(12)]);
var inst_11984 = (state_12042[(14)]);
var inst_11987 = (inst_11985 < inst_11984);
var inst_11988 = inst_11987;
var state_12042__$1 = state_12042;
if(cljs.core.truth_(inst_11988)){
var statearr_12089_13244 = state_12042__$1;
(statearr_12089_13244[(1)] = (10));

} else {
var statearr_12090_13245 = state_12042__$1;
(statearr_12090_13245[(1)] = (11));

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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_12091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12091[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_12091[(1)] = (1));

return statearr_12091;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_12042){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_12042);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e12092){var ex__10776__auto__ = e12092;
var statearr_12093_13246 = state_12042;
(statearr_12093_13246[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_12042[(4)]))){
var statearr_12094_13247 = state_12042;
(statearr_12094_13247[(1)] = cljs.core.first((state_12042[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13248 = state_12042;
state_12042 = G__13248;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_12042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_12042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_12095 = f__10916__auto__();
(statearr_12095[(6)] = c__10915__auto___13192);

return statearr_12095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
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
var G__12097 = arguments.length;
switch (G__12097) {
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
var G__12099 = arguments.length;
switch (G__12099) {
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
var G__12101 = arguments.length;
switch (G__12101) {
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
var c__10915__auto___13277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_12148){
var state_val_12149 = (state_12148[(1)]);
if((state_val_12149 === (7))){
var state_12148__$1 = state_12148;
var statearr_12150_13278 = state_12148__$1;
(statearr_12150_13278[(2)] = null);

(statearr_12150_13278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (1))){
var state_12148__$1 = state_12148;
var statearr_12151_13279 = state_12148__$1;
(statearr_12151_13279[(2)] = null);

(statearr_12151_13279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (4))){
var inst_12106 = (state_12148[(7)]);
var inst_12105 = (state_12148[(8)]);
var inst_12108 = (inst_12106 < inst_12105);
var state_12148__$1 = state_12148;
if(cljs.core.truth_(inst_12108)){
var statearr_12152_13280 = state_12148__$1;
(statearr_12152_13280[(1)] = (6));

} else {
var statearr_12153_13281 = state_12148__$1;
(statearr_12153_13281[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (15))){
var inst_12134 = (state_12148[(9)]);
var inst_12139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12134);
var state_12148__$1 = state_12148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12148__$1,(17),out,inst_12139);
} else {
if((state_val_12149 === (13))){
var inst_12134 = (state_12148[(9)]);
var inst_12134__$1 = (state_12148[(2)]);
var inst_12135 = cljs.core.some(cljs.core.nil_QMARK_,inst_12134__$1);
var state_12148__$1 = (function (){var statearr_12154 = state_12148;
(statearr_12154[(9)] = inst_12134__$1);

return statearr_12154;
})();
if(cljs.core.truth_(inst_12135)){
var statearr_12155_13282 = state_12148__$1;
(statearr_12155_13282[(1)] = (14));

} else {
var statearr_12156_13283 = state_12148__$1;
(statearr_12156_13283[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (6))){
var state_12148__$1 = state_12148;
var statearr_12157_13284 = state_12148__$1;
(statearr_12157_13284[(2)] = null);

(statearr_12157_13284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (17))){
var inst_12141 = (state_12148[(2)]);
var state_12148__$1 = (function (){var statearr_12159 = state_12148;
(statearr_12159[(10)] = inst_12141);

return statearr_12159;
})();
var statearr_12160_13285 = state_12148__$1;
(statearr_12160_13285[(2)] = null);

(statearr_12160_13285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (3))){
var inst_12146 = (state_12148[(2)]);
var state_12148__$1 = state_12148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12148__$1,inst_12146);
} else {
if((state_val_12149 === (12))){
var _ = (function (){var statearr_12161 = state_12148;
(statearr_12161[(4)] = cljs.core.rest((state_12148[(4)])));

return statearr_12161;
})();
var state_12148__$1 = state_12148;
var ex12158 = (state_12148__$1[(2)]);
var statearr_12162_13287 = state_12148__$1;
(statearr_12162_13287[(5)] = ex12158);


if((ex12158 instanceof Object)){
var statearr_12163_13288 = state_12148__$1;
(statearr_12163_13288[(1)] = (11));

(statearr_12163_13288[(5)] = null);

} else {
throw ex12158;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (2))){
var inst_12104 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12105 = cnt;
var inst_12106 = (0);
var state_12148__$1 = (function (){var statearr_12164 = state_12148;
(statearr_12164[(7)] = inst_12106);

(statearr_12164[(8)] = inst_12105);

(statearr_12164[(11)] = inst_12104);

return statearr_12164;
})();
var statearr_12166_13289 = state_12148__$1;
(statearr_12166_13289[(2)] = null);

(statearr_12166_13289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (11))){
var inst_12113 = (state_12148[(2)]);
var inst_12114 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12148__$1 = (function (){var statearr_12167 = state_12148;
(statearr_12167[(12)] = inst_12113);

return statearr_12167;
})();
var statearr_12168_13293 = state_12148__$1;
(statearr_12168_13293[(2)] = inst_12114);

(statearr_12168_13293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (9))){
var inst_12106 = (state_12148[(7)]);
var _ = (function (){var statearr_12169 = state_12148;
(statearr_12169[(4)] = cljs.core.cons((12),(state_12148[(4)])));

return statearr_12169;
})();
var inst_12120 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12106) : chs__$1.call(null,inst_12106));
var inst_12121 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12106) : done.call(null,inst_12106));
var inst_12122 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12120,inst_12121);
var ___$1 = (function (){var statearr_12170 = state_12148;
(statearr_12170[(4)] = cljs.core.rest((state_12148[(4)])));

return statearr_12170;
})();
var state_12148__$1 = state_12148;
var statearr_12171_13295 = state_12148__$1;
(statearr_12171_13295[(2)] = inst_12122);

(statearr_12171_13295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (5))){
var inst_12132 = (state_12148[(2)]);
var state_12148__$1 = (function (){var statearr_12172 = state_12148;
(statearr_12172[(13)] = inst_12132);

return statearr_12172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12148__$1,(13),dchan);
} else {
if((state_val_12149 === (14))){
var inst_12137 = cljs.core.async.close_BANG_(out);
var state_12148__$1 = state_12148;
var statearr_12173_13296 = state_12148__$1;
(statearr_12173_13296[(2)] = inst_12137);

(statearr_12173_13296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (16))){
var inst_12144 = (state_12148[(2)]);
var state_12148__$1 = state_12148;
var statearr_12174_13297 = state_12148__$1;
(statearr_12174_13297[(2)] = inst_12144);

(statearr_12174_13297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (10))){
var inst_12106 = (state_12148[(7)]);
var inst_12125 = (state_12148[(2)]);
var inst_12126 = (inst_12106 + (1));
var inst_12106__$1 = inst_12126;
var state_12148__$1 = (function (){var statearr_12175 = state_12148;
(statearr_12175[(7)] = inst_12106__$1);

(statearr_12175[(14)] = inst_12125);

return statearr_12175;
})();
var statearr_12176_13298 = state_12148__$1;
(statearr_12176_13298[(2)] = null);

(statearr_12176_13298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12149 === (8))){
var inst_12130 = (state_12148[(2)]);
var state_12148__$1 = state_12148;
var statearr_12177_13299 = state_12148__$1;
(statearr_12177_13299[(2)] = inst_12130);

(statearr_12177_13299[(1)] = (5));


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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_12178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12178[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_12178[(1)] = (1));

return statearr_12178;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_12148){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_12148);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e12179){var ex__10776__auto__ = e12179;
var statearr_12180_13300 = state_12148;
(statearr_12180_13300[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_12148[(4)]))){
var statearr_12181_13301 = state_12148;
(statearr_12181_13301[(1)] = cljs.core.first((state_12148[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13302 = state_12148;
state_12148 = G__13302;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_12148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_12148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_12182 = f__10916__auto__();
(statearr_12182[(6)] = c__10915__auto___13277);

return statearr_12182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
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
var G__12185 = arguments.length;
switch (G__12185) {
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
var c__10915__auto___13304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_12217){
var state_val_12218 = (state_12217[(1)]);
if((state_val_12218 === (7))){
var inst_12197 = (state_12217[(7)]);
var inst_12196 = (state_12217[(8)]);
var inst_12196__$1 = (state_12217[(2)]);
var inst_12197__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12196__$1,(0),null);
var inst_12198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12196__$1,(1),null);
var inst_12199 = (inst_12197__$1 == null);
var state_12217__$1 = (function (){var statearr_12219 = state_12217;
(statearr_12219[(7)] = inst_12197__$1);

(statearr_12219[(9)] = inst_12198);

(statearr_12219[(8)] = inst_12196__$1);

return statearr_12219;
})();
if(cljs.core.truth_(inst_12199)){
var statearr_12220_13305 = state_12217__$1;
(statearr_12220_13305[(1)] = (8));

} else {
var statearr_12221_13306 = state_12217__$1;
(statearr_12221_13306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (1))){
var inst_12186 = cljs.core.vec(chs);
var inst_12187 = inst_12186;
var state_12217__$1 = (function (){var statearr_12222 = state_12217;
(statearr_12222[(10)] = inst_12187);

return statearr_12222;
})();
var statearr_12223_13307 = state_12217__$1;
(statearr_12223_13307[(2)] = null);

(statearr_12223_13307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (4))){
var inst_12187 = (state_12217[(10)]);
var state_12217__$1 = state_12217;
return cljs.core.async.ioc_alts_BANG_(state_12217__$1,(7),inst_12187);
} else {
if((state_val_12218 === (6))){
var inst_12213 = (state_12217[(2)]);
var state_12217__$1 = state_12217;
var statearr_12224_13308 = state_12217__$1;
(statearr_12224_13308[(2)] = inst_12213);

(statearr_12224_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (3))){
var inst_12215 = (state_12217[(2)]);
var state_12217__$1 = state_12217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12217__$1,inst_12215);
} else {
if((state_val_12218 === (2))){
var inst_12187 = (state_12217[(10)]);
var inst_12189 = cljs.core.count(inst_12187);
var inst_12190 = (inst_12189 > (0));
var state_12217__$1 = state_12217;
if(cljs.core.truth_(inst_12190)){
var statearr_12226_13309 = state_12217__$1;
(statearr_12226_13309[(1)] = (4));

} else {
var statearr_12227_13310 = state_12217__$1;
(statearr_12227_13310[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (11))){
var inst_12187 = (state_12217[(10)]);
var inst_12206 = (state_12217[(2)]);
var tmp12225 = inst_12187;
var inst_12187__$1 = tmp12225;
var state_12217__$1 = (function (){var statearr_12228 = state_12217;
(statearr_12228[(10)] = inst_12187__$1);

(statearr_12228[(11)] = inst_12206);

return statearr_12228;
})();
var statearr_12229_13311 = state_12217__$1;
(statearr_12229_13311[(2)] = null);

(statearr_12229_13311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (9))){
var inst_12197 = (state_12217[(7)]);
var state_12217__$1 = state_12217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12217__$1,(11),out,inst_12197);
} else {
if((state_val_12218 === (5))){
var inst_12211 = cljs.core.async.close_BANG_(out);
var state_12217__$1 = state_12217;
var statearr_12230_13312 = state_12217__$1;
(statearr_12230_13312[(2)] = inst_12211);

(statearr_12230_13312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (10))){
var inst_12209 = (state_12217[(2)]);
var state_12217__$1 = state_12217;
var statearr_12231_13314 = state_12217__$1;
(statearr_12231_13314[(2)] = inst_12209);

(statearr_12231_13314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12218 === (8))){
var inst_12187 = (state_12217[(10)]);
var inst_12197 = (state_12217[(7)]);
var inst_12198 = (state_12217[(9)]);
var inst_12196 = (state_12217[(8)]);
var inst_12201 = (function (){var cs = inst_12187;
var vec__12192 = inst_12196;
var v = inst_12197;
var c = inst_12198;
return (function (p1__12183_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12183_SHARP_);
});
})();
var inst_12202 = cljs.core.filterv(inst_12201,inst_12187);
var inst_12187__$1 = inst_12202;
var state_12217__$1 = (function (){var statearr_12232 = state_12217;
(statearr_12232[(10)] = inst_12187__$1);

return statearr_12232;
})();
var statearr_12233_13318 = state_12217__$1;
(statearr_12233_13318[(2)] = null);

(statearr_12233_13318[(1)] = (2));


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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_12234 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12234[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_12234[(1)] = (1));

return statearr_12234;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_12217){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_12217);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e12235){var ex__10776__auto__ = e12235;
var statearr_12236_13323 = state_12217;
(statearr_12236_13323[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_12217[(4)]))){
var statearr_12237_13324 = state_12217;
(statearr_12237_13324[(1)] = cljs.core.first((state_12217[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13325 = state_12217;
state_12217 = G__13325;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_12217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_12217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_12238 = f__10916__auto__();
(statearr_12238[(6)] = c__10915__auto___13304);

return statearr_12238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
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
var G__12241 = arguments.length;
switch (G__12241) {
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
var c__10915__auto___13328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_12267){
var state_val_12268 = (state_12267[(1)]);
if((state_val_12268 === (7))){
var inst_12249 = (state_12267[(7)]);
var inst_12249__$1 = (state_12267[(2)]);
var inst_12250 = (inst_12249__$1 == null);
var inst_12251 = cljs.core.not(inst_12250);
var state_12267__$1 = (function (){var statearr_12269 = state_12267;
(statearr_12269[(7)] = inst_12249__$1);

return statearr_12269;
})();
if(inst_12251){
var statearr_12270_13329 = state_12267__$1;
(statearr_12270_13329[(1)] = (8));

} else {
var statearr_12271_13330 = state_12267__$1;
(statearr_12271_13330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (1))){
var inst_12244 = (0);
var state_12267__$1 = (function (){var statearr_12272 = state_12267;
(statearr_12272[(8)] = inst_12244);

return statearr_12272;
})();
var statearr_12273_13331 = state_12267__$1;
(statearr_12273_13331[(2)] = null);

(statearr_12273_13331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (4))){
var state_12267__$1 = state_12267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12267__$1,(7),ch);
} else {
if((state_val_12268 === (6))){
var inst_12262 = (state_12267[(2)]);
var state_12267__$1 = state_12267;
var statearr_12274_13332 = state_12267__$1;
(statearr_12274_13332[(2)] = inst_12262);

(statearr_12274_13332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (3))){
var inst_12264 = (state_12267[(2)]);
var inst_12265 = cljs.core.async.close_BANG_(out);
var state_12267__$1 = (function (){var statearr_12275 = state_12267;
(statearr_12275[(9)] = inst_12264);

return statearr_12275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12267__$1,inst_12265);
} else {
if((state_val_12268 === (2))){
var inst_12244 = (state_12267[(8)]);
var inst_12246 = (inst_12244 < n);
var state_12267__$1 = state_12267;
if(cljs.core.truth_(inst_12246)){
var statearr_12276_13333 = state_12267__$1;
(statearr_12276_13333[(1)] = (4));

} else {
var statearr_12277_13334 = state_12267__$1;
(statearr_12277_13334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (11))){
var inst_12244 = (state_12267[(8)]);
var inst_12254 = (state_12267[(2)]);
var inst_12255 = (inst_12244 + (1));
var inst_12244__$1 = inst_12255;
var state_12267__$1 = (function (){var statearr_12278 = state_12267;
(statearr_12278[(10)] = inst_12254);

(statearr_12278[(8)] = inst_12244__$1);

return statearr_12278;
})();
var statearr_12279_13335 = state_12267__$1;
(statearr_12279_13335[(2)] = null);

(statearr_12279_13335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (9))){
var state_12267__$1 = state_12267;
var statearr_12280_13336 = state_12267__$1;
(statearr_12280_13336[(2)] = null);

(statearr_12280_13336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (5))){
var state_12267__$1 = state_12267;
var statearr_12281_13337 = state_12267__$1;
(statearr_12281_13337[(2)] = null);

(statearr_12281_13337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (10))){
var inst_12259 = (state_12267[(2)]);
var state_12267__$1 = state_12267;
var statearr_12282_13338 = state_12267__$1;
(statearr_12282_13338[(2)] = inst_12259);

(statearr_12282_13338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (8))){
var inst_12249 = (state_12267[(7)]);
var state_12267__$1 = state_12267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12267__$1,(11),out,inst_12249);
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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_12283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12283[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_12283[(1)] = (1));

return statearr_12283;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_12267){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_12267);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e12284){var ex__10776__auto__ = e12284;
var statearr_12285_13339 = state_12267;
(statearr_12285_13339[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_12267[(4)]))){
var statearr_12286_13340 = state_12267;
(statearr_12286_13340[(1)] = cljs.core.first((state_12267[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13341 = state_12267;
state_12267 = G__13341;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_12267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_12267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_12287 = f__10916__auto__();
(statearr_12287[(6)] = c__10915__auto___13328);

return statearr_12287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12289 = (function (f,ch,meta12290){
this.f = f;
this.ch = ch;
this.meta12290 = meta12290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12291,meta12290__$1){
var self__ = this;
var _12291__$1 = this;
return (new cljs.core.async.t_cljs$core$async12289(self__.f,self__.ch,meta12290__$1));
}));

(cljs.core.async.t_cljs$core$async12289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12291){
var self__ = this;
var _12291__$1 = this;
return self__.meta12290;
}));

(cljs.core.async.t_cljs$core$async12289.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12289.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12289.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12289.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12289.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12292 = (function (f,ch,meta12290,_,fn1,meta12293){
this.f = f;
this.ch = ch;
this.meta12290 = meta12290;
this._ = _;
this.fn1 = fn1;
this.meta12293 = meta12293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12294,meta12293__$1){
var self__ = this;
var _12294__$1 = this;
return (new cljs.core.async.t_cljs$core$async12292(self__.f,self__.ch,self__.meta12290,self__._,self__.fn1,meta12293__$1));
}));

(cljs.core.async.t_cljs$core$async12292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12294){
var self__ = this;
var _12294__$1 = this;
return self__.meta12293;
}));

(cljs.core.async.t_cljs$core$async12292.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12288_SHARP_){
var G__12295 = (((p1__12288_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12288_SHARP_) : self__.f.call(null,p1__12288_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12295) : f1.call(null,G__12295));
});
}));

(cljs.core.async.t_cljs$core$async12292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12290","meta12290",-799115997,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12289","cljs.core.async/t_cljs$core$async12289",-416017727,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12293","meta12293",1175208941,null)], null);
}));

(cljs.core.async.t_cljs$core$async12292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12292");

(cljs.core.async.t_cljs$core$async12292.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12292.
 */
cljs.core.async.__GT_t_cljs$core$async12292 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12292(f__$1,ch__$1,meta12290__$1,___$2,fn1__$1,meta12293){
return (new cljs.core.async.t_cljs$core$async12292(f__$1,ch__$1,meta12290__$1,___$2,fn1__$1,meta12293));
});

}

return (new cljs.core.async.t_cljs$core$async12292(self__.f,self__.ch,self__.meta12290,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12297 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12297) : self__.f.call(null,G__12297));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12289.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12289.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12290","meta12290",-799115997,null)], null);
}));

(cljs.core.async.t_cljs$core$async12289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12289");

(cljs.core.async.t_cljs$core$async12289.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12289.
 */
cljs.core.async.__GT_t_cljs$core$async12289 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12289(f__$1,ch__$1,meta12290){
return (new cljs.core.async.t_cljs$core$async12289(f__$1,ch__$1,meta12290));
});

}

return (new cljs.core.async.t_cljs$core$async12289(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12298 = (function (f,ch,meta12299){
this.f = f;
this.ch = ch;
this.meta12299 = meta12299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12300,meta12299__$1){
var self__ = this;
var _12300__$1 = this;
return (new cljs.core.async.t_cljs$core$async12298(self__.f,self__.ch,meta12299__$1));
}));

(cljs.core.async.t_cljs$core$async12298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12300){
var self__ = this;
var _12300__$1 = this;
return self__.meta12299;
}));

(cljs.core.async.t_cljs$core$async12298.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12298.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12298.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12299","meta12299",1689038664,null)], null);
}));

(cljs.core.async.t_cljs$core$async12298.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12298");

(cljs.core.async.t_cljs$core$async12298.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12298");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12298.
 */
cljs.core.async.__GT_t_cljs$core$async12298 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12298(f__$1,ch__$1,meta12299){
return (new cljs.core.async.t_cljs$core$async12298(f__$1,ch__$1,meta12299));
});

}

return (new cljs.core.async.t_cljs$core$async12298(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12304 = (function (p,ch,meta12305){
this.p = p;
this.ch = ch;
this.meta12305 = meta12305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12306,meta12305__$1){
var self__ = this;
var _12306__$1 = this;
return (new cljs.core.async.t_cljs$core$async12304(self__.p,self__.ch,meta12305__$1));
}));

(cljs.core.async.t_cljs$core$async12304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12306){
var self__ = this;
var _12306__$1 = this;
return self__.meta12305;
}));

(cljs.core.async.t_cljs$core$async12304.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12304.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12304.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12304.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12305","meta12305",-1980067414,null)], null);
}));

(cljs.core.async.t_cljs$core$async12304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12304");

(cljs.core.async.t_cljs$core$async12304.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12304.
 */
cljs.core.async.__GT_t_cljs$core$async12304 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12304(p__$1,ch__$1,meta12305){
return (new cljs.core.async.t_cljs$core$async12304(p__$1,ch__$1,meta12305));
});

}

return (new cljs.core.async.t_cljs$core$async12304(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12308 = arguments.length;
switch (G__12308) {
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
var c__10915__auto___13354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_12329){
var state_val_12330 = (state_12329[(1)]);
if((state_val_12330 === (7))){
var inst_12325 = (state_12329[(2)]);
var state_12329__$1 = state_12329;
var statearr_12331_13355 = state_12329__$1;
(statearr_12331_13355[(2)] = inst_12325);

(statearr_12331_13355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (1))){
var state_12329__$1 = state_12329;
var statearr_12333_13356 = state_12329__$1;
(statearr_12333_13356[(2)] = null);

(statearr_12333_13356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (4))){
var inst_12311 = (state_12329[(7)]);
var inst_12311__$1 = (state_12329[(2)]);
var inst_12312 = (inst_12311__$1 == null);
var state_12329__$1 = (function (){var statearr_12334 = state_12329;
(statearr_12334[(7)] = inst_12311__$1);

return statearr_12334;
})();
if(cljs.core.truth_(inst_12312)){
var statearr_12335_13359 = state_12329__$1;
(statearr_12335_13359[(1)] = (5));

} else {
var statearr_12336_13360 = state_12329__$1;
(statearr_12336_13360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (6))){
var inst_12311 = (state_12329[(7)]);
var inst_12316 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12311) : p.call(null,inst_12311));
var state_12329__$1 = state_12329;
if(cljs.core.truth_(inst_12316)){
var statearr_12337_13361 = state_12329__$1;
(statearr_12337_13361[(1)] = (8));

} else {
var statearr_12338_13362 = state_12329__$1;
(statearr_12338_13362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (3))){
var inst_12327 = (state_12329[(2)]);
var state_12329__$1 = state_12329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12329__$1,inst_12327);
} else {
if((state_val_12330 === (2))){
var state_12329__$1 = state_12329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12329__$1,(4),ch);
} else {
if((state_val_12330 === (11))){
var inst_12319 = (state_12329[(2)]);
var state_12329__$1 = state_12329;
var statearr_12339_13363 = state_12329__$1;
(statearr_12339_13363[(2)] = inst_12319);

(statearr_12339_13363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (9))){
var state_12329__$1 = state_12329;
var statearr_12340_13364 = state_12329__$1;
(statearr_12340_13364[(2)] = null);

(statearr_12340_13364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (5))){
var inst_12314 = cljs.core.async.close_BANG_(out);
var state_12329__$1 = state_12329;
var statearr_12341_13365 = state_12329__$1;
(statearr_12341_13365[(2)] = inst_12314);

(statearr_12341_13365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (10))){
var inst_12322 = (state_12329[(2)]);
var state_12329__$1 = (function (){var statearr_12342 = state_12329;
(statearr_12342[(8)] = inst_12322);

return statearr_12342;
})();
var statearr_12343_13366 = state_12329__$1;
(statearr_12343_13366[(2)] = null);

(statearr_12343_13366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (8))){
var inst_12311 = (state_12329[(7)]);
var state_12329__$1 = state_12329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12329__$1,(11),out,inst_12311);
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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_12344 = [null,null,null,null,null,null,null,null,null];
(statearr_12344[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_12344[(1)] = (1));

return statearr_12344;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_12329){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_12329);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e12345){var ex__10776__auto__ = e12345;
var statearr_12346_13367 = state_12329;
(statearr_12346_13367[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_12329[(4)]))){
var statearr_12347_13368 = state_12329;
(statearr_12347_13368[(1)] = cljs.core.first((state_12329[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13369 = state_12329;
state_12329 = G__13369;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_12329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_12329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_12348 = f__10916__auto__();
(statearr_12348[(6)] = c__10915__auto___13354);

return statearr_12348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12350 = arguments.length;
switch (G__12350) {
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
var c__10915__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_12412){
var state_val_12413 = (state_12412[(1)]);
if((state_val_12413 === (7))){
var inst_12408 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12414_13371 = state_12412__$1;
(statearr_12414_13371[(2)] = inst_12408);

(statearr_12414_13371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (20))){
var inst_12378 = (state_12412[(7)]);
var inst_12389 = (state_12412[(2)]);
var inst_12390 = cljs.core.next(inst_12378);
var inst_12364 = inst_12390;
var inst_12365 = null;
var inst_12366 = (0);
var inst_12367 = (0);
var state_12412__$1 = (function (){var statearr_12427 = state_12412;
(statearr_12427[(8)] = inst_12389);

(statearr_12427[(9)] = inst_12364);

(statearr_12427[(10)] = inst_12367);

(statearr_12427[(11)] = inst_12366);

(statearr_12427[(12)] = inst_12365);

return statearr_12427;
})();
var statearr_12428_13374 = state_12412__$1;
(statearr_12428_13374[(2)] = null);

(statearr_12428_13374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (1))){
var state_12412__$1 = state_12412;
var statearr_12429_13375 = state_12412__$1;
(statearr_12429_13375[(2)] = null);

(statearr_12429_13375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (4))){
var inst_12353 = (state_12412[(13)]);
var inst_12353__$1 = (state_12412[(2)]);
var inst_12354 = (inst_12353__$1 == null);
var state_12412__$1 = (function (){var statearr_12430 = state_12412;
(statearr_12430[(13)] = inst_12353__$1);

return statearr_12430;
})();
if(cljs.core.truth_(inst_12354)){
var statearr_12431_13376 = state_12412__$1;
(statearr_12431_13376[(1)] = (5));

} else {
var statearr_12432_13377 = state_12412__$1;
(statearr_12432_13377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (15))){
var state_12412__$1 = state_12412;
var statearr_12436_13378 = state_12412__$1;
(statearr_12436_13378[(2)] = null);

(statearr_12436_13378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (21))){
var state_12412__$1 = state_12412;
var statearr_12437_13379 = state_12412__$1;
(statearr_12437_13379[(2)] = null);

(statearr_12437_13379[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (13))){
var inst_12364 = (state_12412[(9)]);
var inst_12367 = (state_12412[(10)]);
var inst_12366 = (state_12412[(11)]);
var inst_12365 = (state_12412[(12)]);
var inst_12374 = (state_12412[(2)]);
var inst_12375 = (inst_12367 + (1));
var tmp12433 = inst_12364;
var tmp12434 = inst_12366;
var tmp12435 = inst_12365;
var inst_12364__$1 = tmp12433;
var inst_12365__$1 = tmp12435;
var inst_12366__$1 = tmp12434;
var inst_12367__$1 = inst_12375;
var state_12412__$1 = (function (){var statearr_12438 = state_12412;
(statearr_12438[(14)] = inst_12374);

(statearr_12438[(9)] = inst_12364__$1);

(statearr_12438[(10)] = inst_12367__$1);

(statearr_12438[(11)] = inst_12366__$1);

(statearr_12438[(12)] = inst_12365__$1);

return statearr_12438;
})();
var statearr_12439_13380 = state_12412__$1;
(statearr_12439_13380[(2)] = null);

(statearr_12439_13380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (22))){
var state_12412__$1 = state_12412;
var statearr_12440_13381 = state_12412__$1;
(statearr_12440_13381[(2)] = null);

(statearr_12440_13381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (6))){
var inst_12353 = (state_12412[(13)]);
var inst_12362 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12353) : f.call(null,inst_12353));
var inst_12363 = cljs.core.seq(inst_12362);
var inst_12364 = inst_12363;
var inst_12365 = null;
var inst_12366 = (0);
var inst_12367 = (0);
var state_12412__$1 = (function (){var statearr_12441 = state_12412;
(statearr_12441[(9)] = inst_12364);

(statearr_12441[(10)] = inst_12367);

(statearr_12441[(11)] = inst_12366);

(statearr_12441[(12)] = inst_12365);

return statearr_12441;
})();
var statearr_12442_13382 = state_12412__$1;
(statearr_12442_13382[(2)] = null);

(statearr_12442_13382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (17))){
var inst_12378 = (state_12412[(7)]);
var inst_12382 = cljs.core.chunk_first(inst_12378);
var inst_12383 = cljs.core.chunk_rest(inst_12378);
var inst_12384 = cljs.core.count(inst_12382);
var inst_12364 = inst_12383;
var inst_12365 = inst_12382;
var inst_12366 = inst_12384;
var inst_12367 = (0);
var state_12412__$1 = (function (){var statearr_12443 = state_12412;
(statearr_12443[(9)] = inst_12364);

(statearr_12443[(10)] = inst_12367);

(statearr_12443[(11)] = inst_12366);

(statearr_12443[(12)] = inst_12365);

return statearr_12443;
})();
var statearr_12444_13383 = state_12412__$1;
(statearr_12444_13383[(2)] = null);

(statearr_12444_13383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (3))){
var inst_12410 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12412__$1,inst_12410);
} else {
if((state_val_12413 === (12))){
var inst_12398 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12445_13384 = state_12412__$1;
(statearr_12445_13384[(2)] = inst_12398);

(statearr_12445_13384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (2))){
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12412__$1,(4),in$);
} else {
if((state_val_12413 === (23))){
var inst_12406 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12446_13385 = state_12412__$1;
(statearr_12446_13385[(2)] = inst_12406);

(statearr_12446_13385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (19))){
var inst_12393 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12447_13386 = state_12412__$1;
(statearr_12447_13386[(2)] = inst_12393);

(statearr_12447_13386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (11))){
var inst_12364 = (state_12412[(9)]);
var inst_12378 = (state_12412[(7)]);
var inst_12378__$1 = cljs.core.seq(inst_12364);
var state_12412__$1 = (function (){var statearr_12448 = state_12412;
(statearr_12448[(7)] = inst_12378__$1);

return statearr_12448;
})();
if(inst_12378__$1){
var statearr_12449_13387 = state_12412__$1;
(statearr_12449_13387[(1)] = (14));

} else {
var statearr_12451_13388 = state_12412__$1;
(statearr_12451_13388[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (9))){
var inst_12400 = (state_12412[(2)]);
var inst_12401 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12412__$1 = (function (){var statearr_12453 = state_12412;
(statearr_12453[(15)] = inst_12400);

return statearr_12453;
})();
if(cljs.core.truth_(inst_12401)){
var statearr_12454_13392 = state_12412__$1;
(statearr_12454_13392[(1)] = (21));

} else {
var statearr_12455_13393 = state_12412__$1;
(statearr_12455_13393[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (5))){
var inst_12356 = cljs.core.async.close_BANG_(out);
var state_12412__$1 = state_12412;
var statearr_12456_13394 = state_12412__$1;
(statearr_12456_13394[(2)] = inst_12356);

(statearr_12456_13394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (14))){
var inst_12378 = (state_12412[(7)]);
var inst_12380 = cljs.core.chunked_seq_QMARK_(inst_12378);
var state_12412__$1 = state_12412;
if(inst_12380){
var statearr_12457_13395 = state_12412__$1;
(statearr_12457_13395[(1)] = (17));

} else {
var statearr_12458_13396 = state_12412__$1;
(statearr_12458_13396[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (16))){
var inst_12396 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12459_13397 = state_12412__$1;
(statearr_12459_13397[(2)] = inst_12396);

(statearr_12459_13397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (10))){
var inst_12367 = (state_12412[(10)]);
var inst_12365 = (state_12412[(12)]);
var inst_12372 = cljs.core._nth(inst_12365,inst_12367);
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12412__$1,(13),out,inst_12372);
} else {
if((state_val_12413 === (18))){
var inst_12378 = (state_12412[(7)]);
var inst_12387 = cljs.core.first(inst_12378);
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12412__$1,(20),out,inst_12387);
} else {
if((state_val_12413 === (8))){
var inst_12367 = (state_12412[(10)]);
var inst_12366 = (state_12412[(11)]);
var inst_12369 = (inst_12367 < inst_12366);
var inst_12370 = inst_12369;
var state_12412__$1 = state_12412;
if(cljs.core.truth_(inst_12370)){
var statearr_12460_13398 = state_12412__$1;
(statearr_12460_13398[(1)] = (10));

} else {
var statearr_12461_13399 = state_12412__$1;
(statearr_12461_13399[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10773__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10773__auto____0 = (function (){
var statearr_12462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12462[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10773__auto__);

(statearr_12462[(1)] = (1));

return statearr_12462;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10773__auto____1 = (function (state_12412){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_12412);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e12463){var ex__10776__auto__ = e12463;
var statearr_12464_13405 = state_12412;
(statearr_12464_13405[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_12412[(4)]))){
var statearr_12465_13406 = state_12412;
(statearr_12465_13406[(1)] = cljs.core.first((state_12412[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12412;
state_12412 = G__13407;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10773__auto__ = function(state_12412){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10773__auto____1.call(this,state_12412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10773__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10773__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_12466 = f__10916__auto__();
(statearr_12466[(6)] = c__10915__auto__);

return statearr_12466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));

return c__10915__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12468 = arguments.length;
switch (G__12468) {
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
var G__12470 = arguments.length;
switch (G__12470) {
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
var G__12472 = arguments.length;
switch (G__12472) {
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
var c__10915__auto___13411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_12499){
var state_val_12500 = (state_12499[(1)]);
if((state_val_12500 === (7))){
var inst_12494 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12501_13412 = state_12499__$1;
(statearr_12501_13412[(2)] = inst_12494);

(statearr_12501_13412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (1))){
var inst_12476 = null;
var state_12499__$1 = (function (){var statearr_12502 = state_12499;
(statearr_12502[(7)] = inst_12476);

return statearr_12502;
})();
var statearr_12503_13413 = state_12499__$1;
(statearr_12503_13413[(2)] = null);

(statearr_12503_13413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (4))){
var inst_12479 = (state_12499[(8)]);
var inst_12479__$1 = (state_12499[(2)]);
var inst_12480 = (inst_12479__$1 == null);
var inst_12481 = cljs.core.not(inst_12480);
var state_12499__$1 = (function (){var statearr_12508 = state_12499;
(statearr_12508[(8)] = inst_12479__$1);

return statearr_12508;
})();
if(inst_12481){
var statearr_12509_13414 = state_12499__$1;
(statearr_12509_13414[(1)] = (5));

} else {
var statearr_12512_13415 = state_12499__$1;
(statearr_12512_13415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (6))){
var state_12499__$1 = state_12499;
var statearr_12515_13416 = state_12499__$1;
(statearr_12515_13416[(2)] = null);

(statearr_12515_13416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (3))){
var inst_12496 = (state_12499[(2)]);
var inst_12497 = cljs.core.async.close_BANG_(out);
var state_12499__$1 = (function (){var statearr_12516 = state_12499;
(statearr_12516[(9)] = inst_12496);

return statearr_12516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12499__$1,inst_12497);
} else {
if((state_val_12500 === (2))){
var state_12499__$1 = state_12499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12499__$1,(4),ch);
} else {
if((state_val_12500 === (11))){
var inst_12479 = (state_12499[(8)]);
var inst_12488 = (state_12499[(2)]);
var inst_12476 = inst_12479;
var state_12499__$1 = (function (){var statearr_12517 = state_12499;
(statearr_12517[(10)] = inst_12488);

(statearr_12517[(7)] = inst_12476);

return statearr_12517;
})();
var statearr_12518_13417 = state_12499__$1;
(statearr_12518_13417[(2)] = null);

(statearr_12518_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (9))){
var inst_12479 = (state_12499[(8)]);
var state_12499__$1 = state_12499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12499__$1,(11),out,inst_12479);
} else {
if((state_val_12500 === (5))){
var inst_12479 = (state_12499[(8)]);
var inst_12476 = (state_12499[(7)]);
var inst_12483 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12479,inst_12476);
var state_12499__$1 = state_12499;
if(inst_12483){
var statearr_12520_13418 = state_12499__$1;
(statearr_12520_13418[(1)] = (8));

} else {
var statearr_12521_13419 = state_12499__$1;
(statearr_12521_13419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (10))){
var inst_12491 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12522_13420 = state_12499__$1;
(statearr_12522_13420[(2)] = inst_12491);

(statearr_12522_13420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (8))){
var inst_12476 = (state_12499[(7)]);
var tmp12519 = inst_12476;
var inst_12476__$1 = tmp12519;
var state_12499__$1 = (function (){var statearr_12523 = state_12499;
(statearr_12523[(7)] = inst_12476__$1);

return statearr_12523;
})();
var statearr_12524_13421 = state_12499__$1;
(statearr_12524_13421[(2)] = null);

(statearr_12524_13421[(1)] = (2));


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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_12525 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12525[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_12525[(1)] = (1));

return statearr_12525;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_12499){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_12499);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e12526){var ex__10776__auto__ = e12526;
var statearr_12527_13422 = state_12499;
(statearr_12527_13422[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_12499[(4)]))){
var statearr_12528_13423 = state_12499;
(statearr_12528_13423[(1)] = cljs.core.first((state_12499[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13424 = state_12499;
state_12499 = G__13424;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_12499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_12499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_12529 = f__10916__auto__();
(statearr_12529[(6)] = c__10915__auto___13411);

return statearr_12529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12531 = arguments.length;
switch (G__12531) {
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
var c__10915__auto___13426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_12574){
var state_val_12575 = (state_12574[(1)]);
if((state_val_12575 === (7))){
var inst_12570 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12579_13427 = state_12574__$1;
(statearr_12579_13427[(2)] = inst_12570);

(statearr_12579_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (1))){
var inst_12535 = (new Array(n));
var inst_12536 = inst_12535;
var inst_12537 = (0);
var state_12574__$1 = (function (){var statearr_12580 = state_12574;
(statearr_12580[(7)] = inst_12536);

(statearr_12580[(8)] = inst_12537);

return statearr_12580;
})();
var statearr_12581_13428 = state_12574__$1;
(statearr_12581_13428[(2)] = null);

(statearr_12581_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (4))){
var inst_12540 = (state_12574[(9)]);
var inst_12540__$1 = (state_12574[(2)]);
var inst_12541 = (inst_12540__$1 == null);
var inst_12542 = cljs.core.not(inst_12541);
var state_12574__$1 = (function (){var statearr_12585 = state_12574;
(statearr_12585[(9)] = inst_12540__$1);

return statearr_12585;
})();
if(inst_12542){
var statearr_12586_13429 = state_12574__$1;
(statearr_12586_13429[(1)] = (5));

} else {
var statearr_12587_13430 = state_12574__$1;
(statearr_12587_13430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (15))){
var inst_12562 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12589_13431 = state_12574__$1;
(statearr_12589_13431[(2)] = inst_12562);

(statearr_12589_13431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (13))){
var state_12574__$1 = state_12574;
var statearr_12591_13432 = state_12574__$1;
(statearr_12591_13432[(2)] = null);

(statearr_12591_13432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (6))){
var inst_12537 = (state_12574[(8)]);
var inst_12558 = (inst_12537 > (0));
var state_12574__$1 = state_12574;
if(cljs.core.truth_(inst_12558)){
var statearr_12594_13433 = state_12574__$1;
(statearr_12594_13433[(1)] = (12));

} else {
var statearr_12595_13434 = state_12574__$1;
(statearr_12595_13434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (3))){
var inst_12572 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12574__$1,inst_12572);
} else {
if((state_val_12575 === (12))){
var inst_12536 = (state_12574[(7)]);
var inst_12560 = cljs.core.vec(inst_12536);
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12574__$1,(15),out,inst_12560);
} else {
if((state_val_12575 === (2))){
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12574__$1,(4),ch);
} else {
if((state_val_12575 === (11))){
var inst_12552 = (state_12574[(2)]);
var inst_12553 = (new Array(n));
var inst_12536 = inst_12553;
var inst_12537 = (0);
var state_12574__$1 = (function (){var statearr_12601 = state_12574;
(statearr_12601[(10)] = inst_12552);

(statearr_12601[(7)] = inst_12536);

(statearr_12601[(8)] = inst_12537);

return statearr_12601;
})();
var statearr_12602_13435 = state_12574__$1;
(statearr_12602_13435[(2)] = null);

(statearr_12602_13435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (9))){
var inst_12536 = (state_12574[(7)]);
var inst_12550 = cljs.core.vec(inst_12536);
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12574__$1,(11),out,inst_12550);
} else {
if((state_val_12575 === (5))){
var inst_12545 = (state_12574[(11)]);
var inst_12536 = (state_12574[(7)]);
var inst_12537 = (state_12574[(8)]);
var inst_12540 = (state_12574[(9)]);
var inst_12544 = (inst_12536[inst_12537] = inst_12540);
var inst_12545__$1 = (inst_12537 + (1));
var inst_12546 = (inst_12545__$1 < n);
var state_12574__$1 = (function (){var statearr_12605 = state_12574;
(statearr_12605[(11)] = inst_12545__$1);

(statearr_12605[(12)] = inst_12544);

return statearr_12605;
})();
if(cljs.core.truth_(inst_12546)){
var statearr_12606_13436 = state_12574__$1;
(statearr_12606_13436[(1)] = (8));

} else {
var statearr_12607_13437 = state_12574__$1;
(statearr_12607_13437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (14))){
var inst_12565 = (state_12574[(2)]);
var inst_12568 = cljs.core.async.close_BANG_(out);
var state_12574__$1 = (function (){var statearr_12609 = state_12574;
(statearr_12609[(13)] = inst_12565);

return statearr_12609;
})();
var statearr_12610_13438 = state_12574__$1;
(statearr_12610_13438[(2)] = inst_12568);

(statearr_12610_13438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (10))){
var inst_12556 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12611_13439 = state_12574__$1;
(statearr_12611_13439[(2)] = inst_12556);

(statearr_12611_13439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (8))){
var inst_12545 = (state_12574[(11)]);
var inst_12536 = (state_12574[(7)]);
var tmp12608 = inst_12536;
var inst_12536__$1 = tmp12608;
var inst_12537 = inst_12545;
var state_12574__$1 = (function (){var statearr_12612 = state_12574;
(statearr_12612[(7)] = inst_12536__$1);

(statearr_12612[(8)] = inst_12537);

return statearr_12612;
})();
var statearr_12613_13440 = state_12574__$1;
(statearr_12613_13440[(2)] = null);

(statearr_12613_13440[(1)] = (2));


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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_12614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12614[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_12614[(1)] = (1));

return statearr_12614;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_12574){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_12574);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e12615){var ex__10776__auto__ = e12615;
var statearr_12616_13441 = state_12574;
(statearr_12616_13441[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_12574[(4)]))){
var statearr_12617_13442 = state_12574;
(statearr_12617_13442[(1)] = cljs.core.first((state_12574[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13443 = state_12574;
state_12574 = G__13443;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_12574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_12574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_12618 = f__10916__auto__();
(statearr_12618[(6)] = c__10915__auto___13426);

return statearr_12618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12620 = arguments.length;
switch (G__12620) {
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
var c__10915__auto___13445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10916__auto__ = (function (){var switch__10772__auto__ = (function (state_12662){
var state_val_12663 = (state_12662[(1)]);
if((state_val_12663 === (7))){
var inst_12658 = (state_12662[(2)]);
var state_12662__$1 = state_12662;
var statearr_12664_13446 = state_12662__$1;
(statearr_12664_13446[(2)] = inst_12658);

(statearr_12664_13446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (1))){
var inst_12621 = [];
var inst_12622 = inst_12621;
var inst_12623 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12662__$1 = (function (){var statearr_12665 = state_12662;
(statearr_12665[(7)] = inst_12623);

(statearr_12665[(8)] = inst_12622);

return statearr_12665;
})();
var statearr_12667_13447 = state_12662__$1;
(statearr_12667_13447[(2)] = null);

(statearr_12667_13447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (4))){
var inst_12626 = (state_12662[(9)]);
var inst_12626__$1 = (state_12662[(2)]);
var inst_12627 = (inst_12626__$1 == null);
var inst_12628 = cljs.core.not(inst_12627);
var state_12662__$1 = (function (){var statearr_12668 = state_12662;
(statearr_12668[(9)] = inst_12626__$1);

return statearr_12668;
})();
if(inst_12628){
var statearr_12670_13448 = state_12662__$1;
(statearr_12670_13448[(1)] = (5));

} else {
var statearr_12671_13449 = state_12662__$1;
(statearr_12671_13449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (15))){
var inst_12652 = (state_12662[(2)]);
var state_12662__$1 = state_12662;
var statearr_12672_13450 = state_12662__$1;
(statearr_12672_13450[(2)] = inst_12652);

(statearr_12672_13450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (13))){
var state_12662__$1 = state_12662;
var statearr_12673_13451 = state_12662__$1;
(statearr_12673_13451[(2)] = null);

(statearr_12673_13451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (6))){
var inst_12622 = (state_12662[(8)]);
var inst_12647 = inst_12622.length;
var inst_12648 = (inst_12647 > (0));
var state_12662__$1 = state_12662;
if(cljs.core.truth_(inst_12648)){
var statearr_12674_13452 = state_12662__$1;
(statearr_12674_13452[(1)] = (12));

} else {
var statearr_12675_13453 = state_12662__$1;
(statearr_12675_13453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (3))){
var inst_12660 = (state_12662[(2)]);
var state_12662__$1 = state_12662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12662__$1,inst_12660);
} else {
if((state_val_12663 === (12))){
var inst_12622 = (state_12662[(8)]);
var inst_12650 = cljs.core.vec(inst_12622);
var state_12662__$1 = state_12662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12662__$1,(15),out,inst_12650);
} else {
if((state_val_12663 === (2))){
var state_12662__$1 = state_12662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12662__$1,(4),ch);
} else {
if((state_val_12663 === (11))){
var inst_12630 = (state_12662[(10)]);
var inst_12626 = (state_12662[(9)]);
var inst_12640 = (state_12662[(2)]);
var inst_12641 = [];
var inst_12642 = inst_12641.push(inst_12626);
var inst_12622 = inst_12641;
var inst_12623 = inst_12630;
var state_12662__$1 = (function (){var statearr_12676 = state_12662;
(statearr_12676[(11)] = inst_12642);

(statearr_12676[(7)] = inst_12623);

(statearr_12676[(8)] = inst_12622);

(statearr_12676[(12)] = inst_12640);

return statearr_12676;
})();
var statearr_12677_13454 = state_12662__$1;
(statearr_12677_13454[(2)] = null);

(statearr_12677_13454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (9))){
var inst_12622 = (state_12662[(8)]);
var inst_12638 = cljs.core.vec(inst_12622);
var state_12662__$1 = state_12662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12662__$1,(11),out,inst_12638);
} else {
if((state_val_12663 === (5))){
var inst_12630 = (state_12662[(10)]);
var inst_12623 = (state_12662[(7)]);
var inst_12626 = (state_12662[(9)]);
var inst_12630__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12626) : f.call(null,inst_12626));
var inst_12631 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12630__$1,inst_12623);
var inst_12632 = cljs.core.keyword_identical_QMARK_(inst_12623,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12633 = ((inst_12631) || (inst_12632));
var state_12662__$1 = (function (){var statearr_12678 = state_12662;
(statearr_12678[(10)] = inst_12630__$1);

return statearr_12678;
})();
if(cljs.core.truth_(inst_12633)){
var statearr_12679_13455 = state_12662__$1;
(statearr_12679_13455[(1)] = (8));

} else {
var statearr_12680_13456 = state_12662__$1;
(statearr_12680_13456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (14))){
var inst_12655 = (state_12662[(2)]);
var inst_12656 = cljs.core.async.close_BANG_(out);
var state_12662__$1 = (function (){var statearr_12682 = state_12662;
(statearr_12682[(13)] = inst_12655);

return statearr_12682;
})();
var statearr_12683_13457 = state_12662__$1;
(statearr_12683_13457[(2)] = inst_12656);

(statearr_12683_13457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (10))){
var inst_12645 = (state_12662[(2)]);
var state_12662__$1 = state_12662;
var statearr_12684_13458 = state_12662__$1;
(statearr_12684_13458[(2)] = inst_12645);

(statearr_12684_13458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (8))){
var inst_12630 = (state_12662[(10)]);
var inst_12622 = (state_12662[(8)]);
var inst_12626 = (state_12662[(9)]);
var inst_12635 = inst_12622.push(inst_12626);
var tmp12681 = inst_12622;
var inst_12622__$1 = tmp12681;
var inst_12623 = inst_12630;
var state_12662__$1 = (function (){var statearr_12685 = state_12662;
(statearr_12685[(7)] = inst_12623);

(statearr_12685[(8)] = inst_12622__$1);

(statearr_12685[(14)] = inst_12635);

return statearr_12685;
})();
var statearr_12686_13459 = state_12662__$1;
(statearr_12686_13459[(2)] = null);

(statearr_12686_13459[(1)] = (2));


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
var cljs$core$async$state_machine__10773__auto__ = null;
var cljs$core$async$state_machine__10773__auto____0 = (function (){
var statearr_12687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12687[(0)] = cljs$core$async$state_machine__10773__auto__);

(statearr_12687[(1)] = (1));

return statearr_12687;
});
var cljs$core$async$state_machine__10773__auto____1 = (function (state_12662){
while(true){
var ret_value__10774__auto__ = (function (){try{while(true){
var result__10775__auto__ = switch__10772__auto__(state_12662);
if(cljs.core.keyword_identical_QMARK_(result__10775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10775__auto__;
}
break;
}
}catch (e12688){var ex__10776__auto__ = e12688;
var statearr_12689_13460 = state_12662;
(statearr_12689_13460[(2)] = ex__10776__auto__);


if(cljs.core.seq((state_12662[(4)]))){
var statearr_12690_13461 = state_12662;
(statearr_12690_13461[(1)] = cljs.core.first((state_12662[(4)])));

} else {
throw ex__10776__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13462 = state_12662;
state_12662 = G__13462;
continue;
} else {
return ret_value__10774__auto__;
}
break;
}
});
cljs$core$async$state_machine__10773__auto__ = function(state_12662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10773__auto____1.call(this,state_12662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10773__auto____0;
cljs$core$async$state_machine__10773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10773__auto____1;
return cljs$core$async$state_machine__10773__auto__;
})()
})();
var state__10917__auto__ = (function (){var statearr_12691 = f__10916__auto__();
(statearr_12691[(6)] = c__10915__auto___13445);

return statearr_12691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10917__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
