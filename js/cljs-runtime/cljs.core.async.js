goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11165 = arguments.length;
switch (G__11165) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11166 = (function (f,blockable,meta11167){
this.f = f;
this.blockable = blockable;
this.meta11167 = meta11167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11168,meta11167__$1){
var self__ = this;
var _11168__$1 = this;
return (new cljs.core.async.t_cljs$core$async11166(self__.f,self__.blockable,meta11167__$1));
}));

(cljs.core.async.t_cljs$core$async11166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11168){
var self__ = this;
var _11168__$1 = this;
return self__.meta11167;
}));

(cljs.core.async.t_cljs$core$async11166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11167","meta11167",1472212360,null)], null);
}));

(cljs.core.async.t_cljs$core$async11166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11166");

(cljs.core.async.t_cljs$core$async11166.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11166.
 */
cljs.core.async.__GT_t_cljs$core$async11166 = (function cljs$core$async$__GT_t_cljs$core$async11166(f__$1,blockable__$1,meta11167){
return (new cljs.core.async.t_cljs$core$async11166(f__$1,blockable__$1,meta11167));
});

}

return (new cljs.core.async.t_cljs$core$async11166(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11178 = arguments.length;
switch (G__11178) {
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
var G__11184 = arguments.length;
switch (G__11184) {
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
var G__11187 = arguments.length;
switch (G__11187) {
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
var G__11201 = arguments.length;
switch (G__11201) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11215 = (function (flag,meta11216){
this.flag = flag;
this.meta11216 = meta11216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11217,meta11216__$1){
var self__ = this;
var _11217__$1 = this;
return (new cljs.core.async.t_cljs$core$async11215(self__.flag,meta11216__$1));
}));

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11217){
var self__ = this;
var _11217__$1 = this;
return self__.meta11216;
}));

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11216","meta11216",1909587063,null)], null);
}));

(cljs.core.async.t_cljs$core$async11215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11215");

(cljs.core.async.t_cljs$core$async11215.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11215.
 */
cljs.core.async.__GT_t_cljs$core$async11215 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11215(flag__$1,meta11216){
return (new cljs.core.async.t_cljs$core$async11215(flag__$1,meta11216));
});

}

return (new cljs.core.async.t_cljs$core$async11215(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11238 = (function (flag,cb,meta11239){
this.flag = flag;
this.cb = cb;
this.meta11239 = meta11239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11240,meta11239__$1){
var self__ = this;
var _11240__$1 = this;
return (new cljs.core.async.t_cljs$core$async11238(self__.flag,self__.cb,meta11239__$1));
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11240){
var self__ = this;
var _11240__$1 = this;
return self__.meta11239;
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11239","meta11239",1771334451,null)], null);
}));

(cljs.core.async.t_cljs$core$async11238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11238");

(cljs.core.async.t_cljs$core$async11238.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11238.
 */
cljs.core.async.__GT_t_cljs$core$async11238 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11238(flag__$1,cb__$1,meta11239){
return (new cljs.core.async.t_cljs$core$async11238(flag__$1,cb__$1,meta11239));
});

}

return (new cljs.core.async.t_cljs$core$async11238(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11245_SHARP_){
var G__11247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11245_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11247) : fret.call(null,G__11247));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11246_SHARP_){
var G__11248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11246_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11248) : fret.call(null,G__11248));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11256){
var map__11257 = p__11256;
var map__11257__$1 = (((((!((map__11257 == null))))?(((((map__11257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11257):map__11257);
var opts = map__11257__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11251){
var G__11252 = cljs.core.first(seq11251);
var seq11251__$1 = cljs.core.next(seq11251);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11252,seq11251__$1);
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
var G__11265 = arguments.length;
switch (G__11265) {
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
var c__11075__auto___13040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_11325){
var state_val_11326 = (state_11325[(1)]);
if((state_val_11326 === (7))){
var inst_11321 = (state_11325[(2)]);
var state_11325__$1 = state_11325;
var statearr_11330_13041 = state_11325__$1;
(statearr_11330_13041[(2)] = inst_11321);

(statearr_11330_13041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (1))){
var state_11325__$1 = state_11325;
var statearr_11331_13042 = state_11325__$1;
(statearr_11331_13042[(2)] = null);

(statearr_11331_13042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (4))){
var inst_11304 = (state_11325[(7)]);
var inst_11304__$1 = (state_11325[(2)]);
var inst_11305 = (inst_11304__$1 == null);
var state_11325__$1 = (function (){var statearr_11332 = state_11325;
(statearr_11332[(7)] = inst_11304__$1);

return statearr_11332;
})();
if(cljs.core.truth_(inst_11305)){
var statearr_11333_13043 = state_11325__$1;
(statearr_11333_13043[(1)] = (5));

} else {
var statearr_11334_13044 = state_11325__$1;
(statearr_11334_13044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (13))){
var state_11325__$1 = state_11325;
var statearr_11335_13045 = state_11325__$1;
(statearr_11335_13045[(2)] = null);

(statearr_11335_13045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (6))){
var inst_11304 = (state_11325[(7)]);
var state_11325__$1 = state_11325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11325__$1,(11),to,inst_11304);
} else {
if((state_val_11326 === (3))){
var inst_11323 = (state_11325[(2)]);
var state_11325__$1 = state_11325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11325__$1,inst_11323);
} else {
if((state_val_11326 === (12))){
var state_11325__$1 = state_11325;
var statearr_11336_13046 = state_11325__$1;
(statearr_11336_13046[(2)] = null);

(statearr_11336_13046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (2))){
var state_11325__$1 = state_11325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11325__$1,(4),from);
} else {
if((state_val_11326 === (11))){
var inst_11314 = (state_11325[(2)]);
var state_11325__$1 = state_11325;
if(cljs.core.truth_(inst_11314)){
var statearr_11346_13047 = state_11325__$1;
(statearr_11346_13047[(1)] = (12));

} else {
var statearr_11347_13048 = state_11325__$1;
(statearr_11347_13048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (9))){
var state_11325__$1 = state_11325;
var statearr_11348_13049 = state_11325__$1;
(statearr_11348_13049[(2)] = null);

(statearr_11348_13049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (5))){
var state_11325__$1 = state_11325;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11349_13050 = state_11325__$1;
(statearr_11349_13050[(1)] = (8));

} else {
var statearr_11350_13051 = state_11325__$1;
(statearr_11350_13051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (14))){
var inst_11319 = (state_11325[(2)]);
var state_11325__$1 = state_11325;
var statearr_11351_13052 = state_11325__$1;
(statearr_11351_13052[(2)] = inst_11319);

(statearr_11351_13052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (10))){
var inst_11311 = (state_11325[(2)]);
var state_11325__$1 = state_11325;
var statearr_11352_13053 = state_11325__$1;
(statearr_11352_13053[(2)] = inst_11311);

(statearr_11352_13053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (8))){
var inst_11308 = cljs.core.async.close_BANG_(to);
var state_11325__$1 = state_11325;
var statearr_11353_13054 = state_11325__$1;
(statearr_11353_13054[(2)] = inst_11308);

(statearr_11353_13054[(1)] = (10));


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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_11354 = [null,null,null,null,null,null,null,null];
(statearr_11354[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_11354[(1)] = (1));

return statearr_11354;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_11325){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11325);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11355){var ex__10954__auto__ = e11355;
var statearr_11356_13055 = state_11325;
(statearr_11356_13055[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11325[(4)]))){
var statearr_11357_13056 = state_11325;
(statearr_11357_13056[(1)] = cljs.core.first((state_11325[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13057 = state_11325;
state_11325 = G__13057;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_11325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_11325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_11358 = f__11076__auto__();
(statearr_11358[(6)] = c__11075__auto___13040);

return statearr_11358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var process = (function (p__11369){
var vec__11370 = p__11369;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11370,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11370,(1),null);
var job = vec__11370;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11075__auto___13058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_11377){
var state_val_11378 = (state_11377[(1)]);
if((state_val_11378 === (1))){
var state_11377__$1 = state_11377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11377__$1,(2),res,v);
} else {
if((state_val_11378 === (2))){
var inst_11374 = (state_11377[(2)]);
var inst_11375 = cljs.core.async.close_BANG_(res);
var state_11377__$1 = (function (){var statearr_11379 = state_11377;
(statearr_11379[(7)] = inst_11374);

return statearr_11379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11377__$1,inst_11375);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0 = (function (){
var statearr_11380 = [null,null,null,null,null,null,null,null];
(statearr_11380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__);

(statearr_11380[(1)] = (1));

return statearr_11380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1 = (function (state_11377){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11377);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11381){var ex__10954__auto__ = e11381;
var statearr_11382_13059 = state_11377;
(statearr_11382_13059[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11377[(4)]))){
var statearr_11383_13060 = state_11377;
(statearr_11383_13060[(1)] = cljs.core.first((state_11377[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13061 = state_11377;
state_11377 = G__13061;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = function(state_11377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1.call(this,state_11377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_11384 = f__11076__auto__();
(statearr_11384[(6)] = c__11075__auto___13058);

return statearr_11384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11385){
var vec__11386 = p__11385;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11386,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11386,(1),null);
var job = vec__11386;
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
var G__11389_13064 = type;
var G__11389_13065__$1 = (((G__11389_13064 instanceof cljs.core.Keyword))?G__11389_13064.fqn:null);
switch (G__11389_13065__$1) {
case "compute":
var c__11075__auto___13067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__11075__auto___13067,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = ((function (__13063,c__11075__auto___13067,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11413){
var state_val_11414 = (state_11413[(1)]);
if((state_val_11414 === (1))){
var state_11413__$1 = state_11413;
var statearr_11415_13068 = state_11413__$1;
(statearr_11415_13068[(2)] = null);

(statearr_11415_13068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (2))){
var state_11413__$1 = state_11413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11413__$1,(4),jobs);
} else {
if((state_val_11414 === (3))){
var inst_11411 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11413__$1,inst_11411);
} else {
if((state_val_11414 === (4))){
var inst_11392 = (state_11413[(2)]);
var inst_11393 = process(inst_11392);
var state_11413__$1 = state_11413;
if(cljs.core.truth_(inst_11393)){
var statearr_11416_13069 = state_11413__$1;
(statearr_11416_13069[(1)] = (5));

} else {
var statearr_11417_13070 = state_11413__$1;
(statearr_11417_13070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (5))){
var state_11413__$1 = state_11413;
var statearr_11418_13071 = state_11413__$1;
(statearr_11418_13071[(2)] = null);

(statearr_11418_13071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (6))){
var state_11413__$1 = state_11413;
var statearr_11419_13072 = state_11413__$1;
(statearr_11419_13072[(2)] = null);

(statearr_11419_13072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (7))){
var inst_11409 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
var statearr_11420_13073 = state_11413__$1;
(statearr_11420_13073[(2)] = inst_11409);

(statearr_11420_13073[(1)] = (3));


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
});})(__13063,c__11075__auto___13067,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10950__auto__,c__11075__auto___13067,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0 = (function (){
var statearr_11421 = [null,null,null,null,null,null,null];
(statearr_11421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__);

(statearr_11421[(1)] = (1));

return statearr_11421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1 = (function (state_11413){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11413);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11422){var ex__10954__auto__ = e11422;
var statearr_11423_13074 = state_11413;
(statearr_11423_13074[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11413[(4)]))){
var statearr_11424_13075 = state_11413;
(statearr_11424_13075[(1)] = cljs.core.first((state_11413[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13076 = state_11413;
state_11413 = G__13076;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = function(state_11413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1.call(this,state_11413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__;
})()
;})(__13063,switch__10950__auto__,c__11075__auto___13067,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__11077__auto__ = (function (){var statearr_11425 = f__11076__auto__();
(statearr_11425[(6)] = c__11075__auto___13067);

return statearr_11425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
});})(__13063,c__11075__auto___13067,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
case "async":
var c__11075__auto___13077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__11075__auto___13077,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = ((function (__13063,c__11075__auto___13077,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11438){
var state_val_11439 = (state_11438[(1)]);
if((state_val_11439 === (1))){
var state_11438__$1 = state_11438;
var statearr_11440_13078 = state_11438__$1;
(statearr_11440_13078[(2)] = null);

(statearr_11440_13078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (2))){
var state_11438__$1 = state_11438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11438__$1,(4),jobs);
} else {
if((state_val_11439 === (3))){
var inst_11436 = (state_11438[(2)]);
var state_11438__$1 = state_11438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11438__$1,inst_11436);
} else {
if((state_val_11439 === (4))){
var inst_11428 = (state_11438[(2)]);
var inst_11429 = async(inst_11428);
var state_11438__$1 = state_11438;
if(cljs.core.truth_(inst_11429)){
var statearr_11441_13079 = state_11438__$1;
(statearr_11441_13079[(1)] = (5));

} else {
var statearr_11442_13080 = state_11438__$1;
(statearr_11442_13080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (5))){
var state_11438__$1 = state_11438;
var statearr_11443_13081 = state_11438__$1;
(statearr_11443_13081[(2)] = null);

(statearr_11443_13081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (6))){
var state_11438__$1 = state_11438;
var statearr_11444_13082 = state_11438__$1;
(statearr_11444_13082[(2)] = null);

(statearr_11444_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (7))){
var inst_11434 = (state_11438[(2)]);
var state_11438__$1 = state_11438;
var statearr_11451_13083 = state_11438__$1;
(statearr_11451_13083[(2)] = inst_11434);

(statearr_11451_13083[(1)] = (3));


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
});})(__13063,c__11075__auto___13077,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10950__auto__,c__11075__auto___13077,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0 = (function (){
var statearr_11452 = [null,null,null,null,null,null,null];
(statearr_11452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__);

(statearr_11452[(1)] = (1));

return statearr_11452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1 = (function (state_11438){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11438);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11453){var ex__10954__auto__ = e11453;
var statearr_11454_13084 = state_11438;
(statearr_11454_13084[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11438[(4)]))){
var statearr_11455_13085 = state_11438;
(statearr_11455_13085[(1)] = cljs.core.first((state_11438[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13086 = state_11438;
state_11438 = G__13086;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = function(state_11438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1.call(this,state_11438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__;
})()
;})(__13063,switch__10950__auto__,c__11075__auto___13077,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__11077__auto__ = (function (){var statearr_11456 = f__11076__auto__();
(statearr_11456[(6)] = c__11075__auto___13077);

return statearr_11456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
});})(__13063,c__11075__auto___13077,G__11389_13064,G__11389_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11389_13065__$1)].join('')));

}

var G__13087 = (__13063 + (1));
__13063 = G__13087;
continue;
} else {
}
break;
}

var c__11075__auto___13088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_11478){
var state_val_11479 = (state_11478[(1)]);
if((state_val_11479 === (7))){
var inst_11474 = (state_11478[(2)]);
var state_11478__$1 = state_11478;
var statearr_11480_13089 = state_11478__$1;
(statearr_11480_13089[(2)] = inst_11474);

(statearr_11480_13089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11479 === (1))){
var state_11478__$1 = state_11478;
var statearr_11481_13090 = state_11478__$1;
(statearr_11481_13090[(2)] = null);

(statearr_11481_13090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11479 === (4))){
var inst_11459 = (state_11478[(7)]);
var inst_11459__$1 = (state_11478[(2)]);
var inst_11460 = (inst_11459__$1 == null);
var state_11478__$1 = (function (){var statearr_11482 = state_11478;
(statearr_11482[(7)] = inst_11459__$1);

return statearr_11482;
})();
if(cljs.core.truth_(inst_11460)){
var statearr_11483_13091 = state_11478__$1;
(statearr_11483_13091[(1)] = (5));

} else {
var statearr_11484_13092 = state_11478__$1;
(statearr_11484_13092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11479 === (6))){
var inst_11459 = (state_11478[(7)]);
var inst_11464 = (state_11478[(8)]);
var inst_11464__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11466 = [inst_11459,inst_11464__$1];
var inst_11467 = (new cljs.core.PersistentVector(null,2,(5),inst_11465,inst_11466,null));
var state_11478__$1 = (function (){var statearr_11485 = state_11478;
(statearr_11485[(8)] = inst_11464__$1);

return statearr_11485;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11478__$1,(8),jobs,inst_11467);
} else {
if((state_val_11479 === (3))){
var inst_11476 = (state_11478[(2)]);
var state_11478__$1 = state_11478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11478__$1,inst_11476);
} else {
if((state_val_11479 === (2))){
var state_11478__$1 = state_11478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11478__$1,(4),from);
} else {
if((state_val_11479 === (9))){
var inst_11471 = (state_11478[(2)]);
var state_11478__$1 = (function (){var statearr_11486 = state_11478;
(statearr_11486[(9)] = inst_11471);

return statearr_11486;
})();
var statearr_11487_13093 = state_11478__$1;
(statearr_11487_13093[(2)] = null);

(statearr_11487_13093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11479 === (5))){
var inst_11462 = cljs.core.async.close_BANG_(jobs);
var state_11478__$1 = state_11478;
var statearr_11488_13094 = state_11478__$1;
(statearr_11488_13094[(2)] = inst_11462);

(statearr_11488_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11479 === (8))){
var inst_11464 = (state_11478[(8)]);
var inst_11469 = (state_11478[(2)]);
var state_11478__$1 = (function (){var statearr_11489 = state_11478;
(statearr_11489[(10)] = inst_11469);

return statearr_11489;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11478__$1,(9),results,inst_11464);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0 = (function (){
var statearr_11490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__);

(statearr_11490[(1)] = (1));

return statearr_11490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1 = (function (state_11478){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11478);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11491){var ex__10954__auto__ = e11491;
var statearr_11492_13095 = state_11478;
(statearr_11492_13095[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11478[(4)]))){
var statearr_11493_13096 = state_11478;
(statearr_11493_13096[(1)] = cljs.core.first((state_11478[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11478;
state_11478 = G__13097;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = function(state_11478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1.call(this,state_11478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_11494 = f__11076__auto__();
(statearr_11494[(6)] = c__11075__auto___13088);

return statearr_11494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
}));


var c__11075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_11534){
var state_val_11535 = (state_11534[(1)]);
if((state_val_11535 === (7))){
var inst_11530 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
var statearr_11536_13098 = state_11534__$1;
(statearr_11536_13098[(2)] = inst_11530);

(statearr_11536_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (20))){
var state_11534__$1 = state_11534;
var statearr_11537_13099 = state_11534__$1;
(statearr_11537_13099[(2)] = null);

(statearr_11537_13099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (1))){
var state_11534__$1 = state_11534;
var statearr_11538_13100 = state_11534__$1;
(statearr_11538_13100[(2)] = null);

(statearr_11538_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (4))){
var inst_11497 = (state_11534[(7)]);
var inst_11497__$1 = (state_11534[(2)]);
var inst_11498 = (inst_11497__$1 == null);
var state_11534__$1 = (function (){var statearr_11539 = state_11534;
(statearr_11539[(7)] = inst_11497__$1);

return statearr_11539;
})();
if(cljs.core.truth_(inst_11498)){
var statearr_11540_13101 = state_11534__$1;
(statearr_11540_13101[(1)] = (5));

} else {
var statearr_11541_13102 = state_11534__$1;
(statearr_11541_13102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (15))){
var inst_11511 = (state_11534[(8)]);
var state_11534__$1 = state_11534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11534__$1,(18),to,inst_11511);
} else {
if((state_val_11535 === (21))){
var inst_11525 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
var statearr_11542_13103 = state_11534__$1;
(statearr_11542_13103[(2)] = inst_11525);

(statearr_11542_13103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (13))){
var inst_11527 = (state_11534[(2)]);
var state_11534__$1 = (function (){var statearr_11543 = state_11534;
(statearr_11543[(9)] = inst_11527);

return statearr_11543;
})();
var statearr_11544_13104 = state_11534__$1;
(statearr_11544_13104[(2)] = null);

(statearr_11544_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (6))){
var inst_11497 = (state_11534[(7)]);
var state_11534__$1 = state_11534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11534__$1,(11),inst_11497);
} else {
if((state_val_11535 === (17))){
var inst_11520 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
if(cljs.core.truth_(inst_11520)){
var statearr_11545_13105 = state_11534__$1;
(statearr_11545_13105[(1)] = (19));

} else {
var statearr_11546_13106 = state_11534__$1;
(statearr_11546_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (3))){
var inst_11532 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11534__$1,inst_11532);
} else {
if((state_val_11535 === (12))){
var inst_11507 = (state_11534[(10)]);
var state_11534__$1 = state_11534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11534__$1,(14),inst_11507);
} else {
if((state_val_11535 === (2))){
var state_11534__$1 = state_11534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11534__$1,(4),results);
} else {
if((state_val_11535 === (19))){
var state_11534__$1 = state_11534;
var statearr_11547_13107 = state_11534__$1;
(statearr_11547_13107[(2)] = null);

(statearr_11547_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (11))){
var inst_11507 = (state_11534[(2)]);
var state_11534__$1 = (function (){var statearr_11548 = state_11534;
(statearr_11548[(10)] = inst_11507);

return statearr_11548;
})();
var statearr_11549_13108 = state_11534__$1;
(statearr_11549_13108[(2)] = null);

(statearr_11549_13108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (9))){
var state_11534__$1 = state_11534;
var statearr_11550_13109 = state_11534__$1;
(statearr_11550_13109[(2)] = null);

(statearr_11550_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (5))){
var state_11534__$1 = state_11534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11551_13110 = state_11534__$1;
(statearr_11551_13110[(1)] = (8));

} else {
var statearr_11552_13111 = state_11534__$1;
(statearr_11552_13111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (14))){
var inst_11511 = (state_11534[(8)]);
var inst_11511__$1 = (state_11534[(2)]);
var inst_11513 = (inst_11511__$1 == null);
var inst_11514 = cljs.core.not(inst_11513);
var state_11534__$1 = (function (){var statearr_11553 = state_11534;
(statearr_11553[(8)] = inst_11511__$1);

return statearr_11553;
})();
if(inst_11514){
var statearr_11554_13112 = state_11534__$1;
(statearr_11554_13112[(1)] = (15));

} else {
var statearr_11555_13113 = state_11534__$1;
(statearr_11555_13113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (16))){
var state_11534__$1 = state_11534;
var statearr_11556_13114 = state_11534__$1;
(statearr_11556_13114[(2)] = false);

(statearr_11556_13114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (10))){
var inst_11504 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
var statearr_11557_13115 = state_11534__$1;
(statearr_11557_13115[(2)] = inst_11504);

(statearr_11557_13115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (18))){
var inst_11517 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
var statearr_11558_13116 = state_11534__$1;
(statearr_11558_13116[(2)] = inst_11517);

(statearr_11558_13116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (8))){
var inst_11501 = cljs.core.async.close_BANG_(to);
var state_11534__$1 = state_11534;
var statearr_11559_13117 = state_11534__$1;
(statearr_11559_13117[(2)] = inst_11501);

(statearr_11559_13117[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0 = (function (){
var statearr_11560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__);

(statearr_11560[(1)] = (1));

return statearr_11560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1 = (function (state_11534){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11534);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11563){var ex__10954__auto__ = e11563;
var statearr_11564_13118 = state_11534;
(statearr_11564_13118[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11534[(4)]))){
var statearr_11565_13119 = state_11534;
(statearr_11565_13119[(1)] = cljs.core.first((state_11534[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11534;
state_11534 = G__13120;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__ = function(state_11534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1.call(this,state_11534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_11566 = f__11076__auto__();
(statearr_11566[(6)] = c__11075__auto__);

return statearr_11566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
}));

return c__11075__auto__;
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
var G__11568 = arguments.length;
switch (G__11568) {
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
var G__11571 = arguments.length;
switch (G__11571) {
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
var G__11573 = arguments.length;
switch (G__11573) {
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
var c__11075__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_11599){
var state_val_11600 = (state_11599[(1)]);
if((state_val_11600 === (7))){
var inst_11595 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11601_13125 = state_11599__$1;
(statearr_11601_13125[(2)] = inst_11595);

(statearr_11601_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (1))){
var state_11599__$1 = state_11599;
var statearr_11602_13126 = state_11599__$1;
(statearr_11602_13126[(2)] = null);

(statearr_11602_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (4))){
var inst_11576 = (state_11599[(7)]);
var inst_11576__$1 = (state_11599[(2)]);
var inst_11577 = (inst_11576__$1 == null);
var state_11599__$1 = (function (){var statearr_11604 = state_11599;
(statearr_11604[(7)] = inst_11576__$1);

return statearr_11604;
})();
if(cljs.core.truth_(inst_11577)){
var statearr_11606_13127 = state_11599__$1;
(statearr_11606_13127[(1)] = (5));

} else {
var statearr_11607_13128 = state_11599__$1;
(statearr_11607_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (13))){
var state_11599__$1 = state_11599;
var statearr_11608_13129 = state_11599__$1;
(statearr_11608_13129[(2)] = null);

(statearr_11608_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (6))){
var inst_11576 = (state_11599[(7)]);
var inst_11582 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11576) : p.call(null,inst_11576));
var state_11599__$1 = state_11599;
if(cljs.core.truth_(inst_11582)){
var statearr_11609_13130 = state_11599__$1;
(statearr_11609_13130[(1)] = (9));

} else {
var statearr_11613_13131 = state_11599__$1;
(statearr_11613_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (3))){
var inst_11597 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11599__$1,inst_11597);
} else {
if((state_val_11600 === (12))){
var state_11599__$1 = state_11599;
var statearr_11614_13132 = state_11599__$1;
(statearr_11614_13132[(2)] = null);

(statearr_11614_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (2))){
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11599__$1,(4),ch);
} else {
if((state_val_11600 === (11))){
var inst_11576 = (state_11599[(7)]);
var inst_11586 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11599__$1,(8),inst_11586,inst_11576);
} else {
if((state_val_11600 === (9))){
var state_11599__$1 = state_11599;
var statearr_11615_13133 = state_11599__$1;
(statearr_11615_13133[(2)] = tc);

(statearr_11615_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (5))){
var inst_11579 = cljs.core.async.close_BANG_(tc);
var inst_11580 = cljs.core.async.close_BANG_(fc);
var state_11599__$1 = (function (){var statearr_11616 = state_11599;
(statearr_11616[(8)] = inst_11579);

return statearr_11616;
})();
var statearr_11617_13134 = state_11599__$1;
(statearr_11617_13134[(2)] = inst_11580);

(statearr_11617_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (14))){
var inst_11593 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11618_13135 = state_11599__$1;
(statearr_11618_13135[(2)] = inst_11593);

(statearr_11618_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (10))){
var state_11599__$1 = state_11599;
var statearr_11619_13136 = state_11599__$1;
(statearr_11619_13136[(2)] = fc);

(statearr_11619_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (8))){
var inst_11588 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
if(cljs.core.truth_(inst_11588)){
var statearr_11620_13137 = state_11599__$1;
(statearr_11620_13137[(1)] = (12));

} else {
var statearr_11621_13138 = state_11599__$1;
(statearr_11621_13138[(1)] = (13));

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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_11622 = [null,null,null,null,null,null,null,null,null];
(statearr_11622[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_11622[(1)] = (1));

return statearr_11622;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_11599){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11599);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11623){var ex__10954__auto__ = e11623;
var statearr_11624_13139 = state_11599;
(statearr_11624_13139[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11599[(4)]))){
var statearr_11625_13140 = state_11599;
(statearr_11625_13140[(1)] = cljs.core.first((state_11599[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11599;
state_11599 = G__13141;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_11599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_11599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_11626 = f__11076__auto__();
(statearr_11626[(6)] = c__11075__auto___13124);

return statearr_11626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var c__11075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_11664){
var state_val_11665 = (state_11664[(1)]);
if((state_val_11665 === (7))){
var inst_11660 = (state_11664[(2)]);
var state_11664__$1 = state_11664;
var statearr_11666_13142 = state_11664__$1;
(statearr_11666_13142[(2)] = inst_11660);

(statearr_11666_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (1))){
var inst_11627 = init;
var inst_11628 = inst_11627;
var state_11664__$1 = (function (){var statearr_11667 = state_11664;
(statearr_11667[(7)] = inst_11628);

return statearr_11667;
})();
var statearr_11668_13143 = state_11664__$1;
(statearr_11668_13143[(2)] = null);

(statearr_11668_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (4))){
var inst_11647 = (state_11664[(8)]);
var inst_11647__$1 = (state_11664[(2)]);
var inst_11648 = (inst_11647__$1 == null);
var state_11664__$1 = (function (){var statearr_11669 = state_11664;
(statearr_11669[(8)] = inst_11647__$1);

return statearr_11669;
})();
if(cljs.core.truth_(inst_11648)){
var statearr_11670_13144 = state_11664__$1;
(statearr_11670_13144[(1)] = (5));

} else {
var statearr_11671_13145 = state_11664__$1;
(statearr_11671_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (6))){
var inst_11628 = (state_11664[(7)]);
var inst_11647 = (state_11664[(8)]);
var inst_11651 = (state_11664[(9)]);
var inst_11651__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11628,inst_11647) : f.call(null,inst_11628,inst_11647));
var inst_11652 = cljs.core.reduced_QMARK_(inst_11651__$1);
var state_11664__$1 = (function (){var statearr_11672 = state_11664;
(statearr_11672[(9)] = inst_11651__$1);

return statearr_11672;
})();
if(inst_11652){
var statearr_11673_13146 = state_11664__$1;
(statearr_11673_13146[(1)] = (8));

} else {
var statearr_11674_13147 = state_11664__$1;
(statearr_11674_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (3))){
var inst_11662 = (state_11664[(2)]);
var state_11664__$1 = state_11664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11664__$1,inst_11662);
} else {
if((state_val_11665 === (2))){
var state_11664__$1 = state_11664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11664__$1,(4),ch);
} else {
if((state_val_11665 === (9))){
var inst_11651 = (state_11664[(9)]);
var inst_11628 = inst_11651;
var state_11664__$1 = (function (){var statearr_11675 = state_11664;
(statearr_11675[(7)] = inst_11628);

return statearr_11675;
})();
var statearr_11676_13148 = state_11664__$1;
(statearr_11676_13148[(2)] = null);

(statearr_11676_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (5))){
var inst_11628 = (state_11664[(7)]);
var state_11664__$1 = state_11664;
var statearr_11677_13149 = state_11664__$1;
(statearr_11677_13149[(2)] = inst_11628);

(statearr_11677_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (10))){
var inst_11658 = (state_11664[(2)]);
var state_11664__$1 = state_11664;
var statearr_11678_13150 = state_11664__$1;
(statearr_11678_13150[(2)] = inst_11658);

(statearr_11678_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (8))){
var inst_11651 = (state_11664[(9)]);
var inst_11654 = cljs.core.deref(inst_11651);
var state_11664__$1 = state_11664;
var statearr_11679_13151 = state_11664__$1;
(statearr_11679_13151[(2)] = inst_11654);

(statearr_11679_13151[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10951__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10951__auto____0 = (function (){
var statearr_11694 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11694[(0)] = cljs$core$async$reduce_$_state_machine__10951__auto__);

(statearr_11694[(1)] = (1));

return statearr_11694;
});
var cljs$core$async$reduce_$_state_machine__10951__auto____1 = (function (state_11664){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11664);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11695){var ex__10954__auto__ = e11695;
var statearr_11696_13152 = state_11664;
(statearr_11696_13152[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11664[(4)]))){
var statearr_11697_13153 = state_11664;
(statearr_11697_13153[(1)] = cljs.core.first((state_11664[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11664;
state_11664 = G__13154;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10951__auto__ = function(state_11664){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10951__auto____1.call(this,state_11664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10951__auto____0;
cljs$core$async$reduce_$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10951__auto____1;
return cljs$core$async$reduce_$_state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_11698 = f__11076__auto__();
(statearr_11698[(6)] = c__11075__auto__);

return statearr_11698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
}));

return c__11075__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__11075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_11704){
var state_val_11705 = (state_11704[(1)]);
if((state_val_11705 === (1))){
var inst_11699 = cljs.core.async.reduce(f__$1,init,ch);
var state_11704__$1 = state_11704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11704__$1,(2),inst_11699);
} else {
if((state_val_11705 === (2))){
var inst_11701 = (state_11704[(2)]);
var inst_11702 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11701) : f__$1.call(null,inst_11701));
var state_11704__$1 = state_11704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11704__$1,inst_11702);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10951__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10951__auto____0 = (function (){
var statearr_11706 = [null,null,null,null,null,null,null];
(statearr_11706[(0)] = cljs$core$async$transduce_$_state_machine__10951__auto__);

(statearr_11706[(1)] = (1));

return statearr_11706;
});
var cljs$core$async$transduce_$_state_machine__10951__auto____1 = (function (state_11704){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11704);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11707){var ex__10954__auto__ = e11707;
var statearr_11708_13155 = state_11704;
(statearr_11708_13155[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11704[(4)]))){
var statearr_11709_13156 = state_11704;
(statearr_11709_13156[(1)] = cljs.core.first((state_11704[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11704;
state_11704 = G__13157;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10951__auto__ = function(state_11704){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10951__auto____1.call(this,state_11704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10951__auto____0;
cljs$core$async$transduce_$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10951__auto____1;
return cljs$core$async$transduce_$_state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_11710 = f__11076__auto__();
(statearr_11710[(6)] = c__11075__auto__);

return statearr_11710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
}));

return c__11075__auto__;
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
var G__11712 = arguments.length;
switch (G__11712) {
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
var c__11075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_11765){
var state_val_11766 = (state_11765[(1)]);
if((state_val_11766 === (7))){
var inst_11747 = (state_11765[(2)]);
var state_11765__$1 = state_11765;
var statearr_11770_13159 = state_11765__$1;
(statearr_11770_13159[(2)] = inst_11747);

(statearr_11770_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (1))){
var inst_11728 = cljs.core.seq(coll);
var inst_11730 = inst_11728;
var state_11765__$1 = (function (){var statearr_11771 = state_11765;
(statearr_11771[(7)] = inst_11730);

return statearr_11771;
})();
var statearr_11772_13160 = state_11765__$1;
(statearr_11772_13160[(2)] = null);

(statearr_11772_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (4))){
var inst_11730 = (state_11765[(7)]);
var inst_11745 = cljs.core.first(inst_11730);
var state_11765__$1 = state_11765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11765__$1,(7),ch,inst_11745);
} else {
if((state_val_11766 === (13))){
var inst_11759 = (state_11765[(2)]);
var state_11765__$1 = state_11765;
var statearr_11774_13161 = state_11765__$1;
(statearr_11774_13161[(2)] = inst_11759);

(statearr_11774_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (6))){
var inst_11750 = (state_11765[(2)]);
var state_11765__$1 = state_11765;
if(cljs.core.truth_(inst_11750)){
var statearr_11775_13162 = state_11765__$1;
(statearr_11775_13162[(1)] = (8));

} else {
var statearr_11776_13163 = state_11765__$1;
(statearr_11776_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (3))){
var inst_11763 = (state_11765[(2)]);
var state_11765__$1 = state_11765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11765__$1,inst_11763);
} else {
if((state_val_11766 === (12))){
var state_11765__$1 = state_11765;
var statearr_11777_13164 = state_11765__$1;
(statearr_11777_13164[(2)] = null);

(statearr_11777_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (2))){
var inst_11730 = (state_11765[(7)]);
var state_11765__$1 = state_11765;
if(cljs.core.truth_(inst_11730)){
var statearr_11778_13165 = state_11765__$1;
(statearr_11778_13165[(1)] = (4));

} else {
var statearr_11779_13166 = state_11765__$1;
(statearr_11779_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (11))){
var inst_11756 = cljs.core.async.close_BANG_(ch);
var state_11765__$1 = state_11765;
var statearr_11780_13167 = state_11765__$1;
(statearr_11780_13167[(2)] = inst_11756);

(statearr_11780_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (9))){
var state_11765__$1 = state_11765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11781_13168 = state_11765__$1;
(statearr_11781_13168[(1)] = (11));

} else {
var statearr_11783_13169 = state_11765__$1;
(statearr_11783_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (5))){
var inst_11730 = (state_11765[(7)]);
var state_11765__$1 = state_11765;
var statearr_11787_13170 = state_11765__$1;
(statearr_11787_13170[(2)] = inst_11730);

(statearr_11787_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (10))){
var inst_11761 = (state_11765[(2)]);
var state_11765__$1 = state_11765;
var statearr_11788_13171 = state_11765__$1;
(statearr_11788_13171[(2)] = inst_11761);

(statearr_11788_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (8))){
var inst_11730 = (state_11765[(7)]);
var inst_11752 = cljs.core.next(inst_11730);
var inst_11730__$1 = inst_11752;
var state_11765__$1 = (function (){var statearr_11789 = state_11765;
(statearr_11789[(7)] = inst_11730__$1);

return statearr_11789;
})();
var statearr_11790_13172 = state_11765__$1;
(statearr_11790_13172[(2)] = null);

(statearr_11790_13172[(1)] = (2));


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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_11791 = [null,null,null,null,null,null,null,null];
(statearr_11791[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_11791[(1)] = (1));

return statearr_11791;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_11765){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11765);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e11792){var ex__10954__auto__ = e11792;
var statearr_11793_13173 = state_11765;
(statearr_11793_13173[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11765[(4)]))){
var statearr_11794_13174 = state_11765;
(statearr_11794_13174[(1)] = cljs.core.first((state_11765[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11765;
state_11765 = G__13175;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_11765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_11765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_11795 = f__11076__auto__();
(statearr_11795[(6)] = c__11075__auto__);

return statearr_11795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
}));

return c__11075__auto__;
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
var G__11797 = arguments.length;
switch (G__11797) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11821 = (function (ch,cs,meta11822){
this.ch = ch;
this.cs = cs;
this.meta11822 = meta11822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11823,meta11822__$1){
var self__ = this;
var _11823__$1 = this;
return (new cljs.core.async.t_cljs$core$async11821(self__.ch,self__.cs,meta11822__$1));
}));

(cljs.core.async.t_cljs$core$async11821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11823){
var self__ = this;
var _11823__$1 = this;
return self__.meta11822;
}));

(cljs.core.async.t_cljs$core$async11821.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11821.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11821.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11821.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11821.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11821.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11822","meta11822",-1205699496,null)], null);
}));

(cljs.core.async.t_cljs$core$async11821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11821");

(cljs.core.async.t_cljs$core$async11821.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11821.
 */
cljs.core.async.__GT_t_cljs$core$async11821 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11821(ch__$1,cs__$1,meta11822){
return (new cljs.core.async.t_cljs$core$async11821(ch__$1,cs__$1,meta11822));
});

}

return (new cljs.core.async.t_cljs$core$async11821(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11075__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_11974){
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
var inst_11866 = (state_11974[(7)]);
var inst_11881 = cljs.core.first(inst_11866);
var inst_11882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11881,(0),null);
var inst_11883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11881,(1),null);
var state_11974__$1 = (function (){var statearr_11977 = state_11974;
(statearr_11977[(8)] = inst_11882);

return statearr_11977;
})();
if(cljs.core.truth_(inst_11883)){
var statearr_11978_13183 = state_11974__$1;
(statearr_11978_13183[(1)] = (22));

} else {
var statearr_11979_13184 = state_11974__$1;
(statearr_11979_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (27))){
var inst_11916 = (state_11974[(9)]);
var inst_11829 = (state_11974[(10)]);
var inst_11914 = (state_11974[(11)]);
var inst_11921 = (state_11974[(12)]);
var inst_11921__$1 = cljs.core._nth(inst_11914,inst_11916);
var inst_11922 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11921__$1,inst_11829,done);
var state_11974__$1 = (function (){var statearr_11980 = state_11974;
(statearr_11980[(12)] = inst_11921__$1);

return statearr_11980;
})();
if(cljs.core.truth_(inst_11922)){
var statearr_11981_13185 = state_11974__$1;
(statearr_11981_13185[(1)] = (30));

} else {
var statearr_11982_13186 = state_11974__$1;
(statearr_11982_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (1))){
var state_11974__$1 = state_11974;
var statearr_11983_13187 = state_11974__$1;
(statearr_11983_13187[(2)] = null);

(statearr_11983_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (24))){
var inst_11866 = (state_11974[(7)]);
var inst_11891 = (state_11974[(2)]);
var inst_11892 = cljs.core.next(inst_11866);
var inst_11838 = inst_11892;
var inst_11839 = null;
var inst_11840 = (0);
var inst_11841 = (0);
var state_11974__$1 = (function (){var statearr_11984 = state_11974;
(statearr_11984[(13)] = inst_11891);

(statearr_11984[(14)] = inst_11840);

(statearr_11984[(15)] = inst_11838);

(statearr_11984[(16)] = inst_11839);

(statearr_11984[(17)] = inst_11841);

return statearr_11984;
})();
var statearr_11985_13188 = state_11974__$1;
(statearr_11985_13188[(2)] = null);

(statearr_11985_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (39))){
var state_11974__$1 = state_11974;
var statearr_11989_13189 = state_11974__$1;
(statearr_11989_13189[(2)] = null);

(statearr_11989_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (4))){
var inst_11829 = (state_11974[(10)]);
var inst_11829__$1 = (state_11974[(2)]);
var inst_11830 = (inst_11829__$1 == null);
var state_11974__$1 = (function (){var statearr_11990 = state_11974;
(statearr_11990[(10)] = inst_11829__$1);

return statearr_11990;
})();
if(cljs.core.truth_(inst_11830)){
var statearr_11991_13190 = state_11974__$1;
(statearr_11991_13190[(1)] = (5));

} else {
var statearr_11992_13191 = state_11974__$1;
(statearr_11992_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (15))){
var inst_11840 = (state_11974[(14)]);
var inst_11838 = (state_11974[(15)]);
var inst_11839 = (state_11974[(16)]);
var inst_11841 = (state_11974[(17)]);
var inst_11862 = (state_11974[(2)]);
var inst_11863 = (inst_11841 + (1));
var tmp11986 = inst_11840;
var tmp11987 = inst_11838;
var tmp11988 = inst_11839;
var inst_11838__$1 = tmp11987;
var inst_11839__$1 = tmp11988;
var inst_11840__$1 = tmp11986;
var inst_11841__$1 = inst_11863;
var state_11974__$1 = (function (){var statearr_11993 = state_11974;
(statearr_11993[(18)] = inst_11862);

(statearr_11993[(14)] = inst_11840__$1);

(statearr_11993[(15)] = inst_11838__$1);

(statearr_11993[(16)] = inst_11839__$1);

(statearr_11993[(17)] = inst_11841__$1);

return statearr_11993;
})();
var statearr_11994_13192 = state_11974__$1;
(statearr_11994_13192[(2)] = null);

(statearr_11994_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (21))){
var inst_11895 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_11998_13193 = state_11974__$1;
(statearr_11998_13193[(2)] = inst_11895);

(statearr_11998_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (31))){
var inst_11921 = (state_11974[(12)]);
var inst_11925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11921);
var state_11974__$1 = state_11974;
var statearr_11999_13194 = state_11974__$1;
(statearr_11999_13194[(2)] = inst_11925);

(statearr_11999_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (32))){
var inst_11916 = (state_11974[(9)]);
var inst_11915 = (state_11974[(19)]);
var inst_11914 = (state_11974[(11)]);
var inst_11913 = (state_11974[(20)]);
var inst_11927 = (state_11974[(2)]);
var inst_11928 = (inst_11916 + (1));
var tmp11995 = inst_11915;
var tmp11996 = inst_11914;
var tmp11997 = inst_11913;
var inst_11913__$1 = tmp11997;
var inst_11914__$1 = tmp11996;
var inst_11915__$1 = tmp11995;
var inst_11916__$1 = inst_11928;
var state_11974__$1 = (function (){var statearr_12000 = state_11974;
(statearr_12000[(9)] = inst_11916__$1);

(statearr_12000[(19)] = inst_11915__$1);

(statearr_12000[(21)] = inst_11927);

(statearr_12000[(11)] = inst_11914__$1);

(statearr_12000[(20)] = inst_11913__$1);

return statearr_12000;
})();
var statearr_12001_13195 = state_11974__$1;
(statearr_12001_13195[(2)] = null);

(statearr_12001_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (40))){
var inst_11940 = (state_11974[(22)]);
var inst_11944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11940);
var state_11974__$1 = state_11974;
var statearr_12002_13196 = state_11974__$1;
(statearr_12002_13196[(2)] = inst_11944);

(statearr_12002_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (33))){
var inst_11931 = (state_11974[(23)]);
var inst_11933 = cljs.core.chunked_seq_QMARK_(inst_11931);
var state_11974__$1 = state_11974;
if(inst_11933){
var statearr_12003_13197 = state_11974__$1;
(statearr_12003_13197[(1)] = (36));

} else {
var statearr_12004_13198 = state_11974__$1;
(statearr_12004_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (13))){
var inst_11856 = (state_11974[(24)]);
var inst_11859 = cljs.core.async.close_BANG_(inst_11856);
var state_11974__$1 = state_11974;
var statearr_12005_13199 = state_11974__$1;
(statearr_12005_13199[(2)] = inst_11859);

(statearr_12005_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (22))){
var inst_11882 = (state_11974[(8)]);
var inst_11888 = cljs.core.async.close_BANG_(inst_11882);
var state_11974__$1 = state_11974;
var statearr_12006_13200 = state_11974__$1;
(statearr_12006_13200[(2)] = inst_11888);

(statearr_12006_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (36))){
var inst_11931 = (state_11974[(23)]);
var inst_11935 = cljs.core.chunk_first(inst_11931);
var inst_11936 = cljs.core.chunk_rest(inst_11931);
var inst_11937 = cljs.core.count(inst_11935);
var inst_11913 = inst_11936;
var inst_11914 = inst_11935;
var inst_11915 = inst_11937;
var inst_11916 = (0);
var state_11974__$1 = (function (){var statearr_12007 = state_11974;
(statearr_12007[(9)] = inst_11916);

(statearr_12007[(19)] = inst_11915);

(statearr_12007[(11)] = inst_11914);

(statearr_12007[(20)] = inst_11913);

return statearr_12007;
})();
var statearr_12008_13201 = state_11974__$1;
(statearr_12008_13201[(2)] = null);

(statearr_12008_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (41))){
var inst_11931 = (state_11974[(23)]);
var inst_11946 = (state_11974[(2)]);
var inst_11947 = cljs.core.next(inst_11931);
var inst_11913 = inst_11947;
var inst_11914 = null;
var inst_11915 = (0);
var inst_11916 = (0);
var state_11974__$1 = (function (){var statearr_12009 = state_11974;
(statearr_12009[(9)] = inst_11916);

(statearr_12009[(19)] = inst_11915);

(statearr_12009[(25)] = inst_11946);

(statearr_12009[(11)] = inst_11914);

(statearr_12009[(20)] = inst_11913);

return statearr_12009;
})();
var statearr_12010_13202 = state_11974__$1;
(statearr_12010_13202[(2)] = null);

(statearr_12010_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (43))){
var state_11974__$1 = state_11974;
var statearr_12011_13203 = state_11974__$1;
(statearr_12011_13203[(2)] = null);

(statearr_12011_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (29))){
var inst_11955 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12012_13204 = state_11974__$1;
(statearr_12012_13204[(2)] = inst_11955);

(statearr_12012_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (44))){
var inst_11967 = (state_11974[(2)]);
var state_11974__$1 = (function (){var statearr_12013 = state_11974;
(statearr_12013[(26)] = inst_11967);

return statearr_12013;
})();
var statearr_12014_13205 = state_11974__$1;
(statearr_12014_13205[(2)] = null);

(statearr_12014_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (6))){
var inst_11905 = (state_11974[(27)]);
var inst_11904 = cljs.core.deref(cs);
var inst_11905__$1 = cljs.core.keys(inst_11904);
var inst_11906 = cljs.core.count(inst_11905__$1);
var inst_11907 = cljs.core.reset_BANG_(dctr,inst_11906);
var inst_11912 = cljs.core.seq(inst_11905__$1);
var inst_11913 = inst_11912;
var inst_11914 = null;
var inst_11915 = (0);
var inst_11916 = (0);
var state_11974__$1 = (function (){var statearr_12015 = state_11974;
(statearr_12015[(28)] = inst_11907);

(statearr_12015[(9)] = inst_11916);

(statearr_12015[(19)] = inst_11915);

(statearr_12015[(11)] = inst_11914);

(statearr_12015[(20)] = inst_11913);

(statearr_12015[(27)] = inst_11905__$1);

return statearr_12015;
})();
var statearr_12016_13206 = state_11974__$1;
(statearr_12016_13206[(2)] = null);

(statearr_12016_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (28))){
var inst_11931 = (state_11974[(23)]);
var inst_11913 = (state_11974[(20)]);
var inst_11931__$1 = cljs.core.seq(inst_11913);
var state_11974__$1 = (function (){var statearr_12017 = state_11974;
(statearr_12017[(23)] = inst_11931__$1);

return statearr_12017;
})();
if(inst_11931__$1){
var statearr_12018_13207 = state_11974__$1;
(statearr_12018_13207[(1)] = (33));

} else {
var statearr_12019_13208 = state_11974__$1;
(statearr_12019_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (25))){
var inst_11916 = (state_11974[(9)]);
var inst_11915 = (state_11974[(19)]);
var inst_11918 = (inst_11916 < inst_11915);
var inst_11919 = inst_11918;
var state_11974__$1 = state_11974;
if(cljs.core.truth_(inst_11919)){
var statearr_12020_13209 = state_11974__$1;
(statearr_12020_13209[(1)] = (27));

} else {
var statearr_12021_13210 = state_11974__$1;
(statearr_12021_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (34))){
var state_11974__$1 = state_11974;
var statearr_12022_13211 = state_11974__$1;
(statearr_12022_13211[(2)] = null);

(statearr_12022_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (17))){
var state_11974__$1 = state_11974;
var statearr_12023_13212 = state_11974__$1;
(statearr_12023_13212[(2)] = null);

(statearr_12023_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (3))){
var inst_11972 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11974__$1,inst_11972);
} else {
if((state_val_11975 === (12))){
var inst_11900 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12024_13213 = state_11974__$1;
(statearr_12024_13213[(2)] = inst_11900);

(statearr_12024_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (2))){
var state_11974__$1 = state_11974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11974__$1,(4),ch);
} else {
if((state_val_11975 === (23))){
var state_11974__$1 = state_11974;
var statearr_12025_13214 = state_11974__$1;
(statearr_12025_13214[(2)] = null);

(statearr_12025_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (35))){
var inst_11953 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12026_13215 = state_11974__$1;
(statearr_12026_13215[(2)] = inst_11953);

(statearr_12026_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (19))){
var inst_11866 = (state_11974[(7)]);
var inst_11870 = cljs.core.chunk_first(inst_11866);
var inst_11871 = cljs.core.chunk_rest(inst_11866);
var inst_11872 = cljs.core.count(inst_11870);
var inst_11838 = inst_11871;
var inst_11839 = inst_11870;
var inst_11840 = inst_11872;
var inst_11841 = (0);
var state_11974__$1 = (function (){var statearr_12027 = state_11974;
(statearr_12027[(14)] = inst_11840);

(statearr_12027[(15)] = inst_11838);

(statearr_12027[(16)] = inst_11839);

(statearr_12027[(17)] = inst_11841);

return statearr_12027;
})();
var statearr_12028_13216 = state_11974__$1;
(statearr_12028_13216[(2)] = null);

(statearr_12028_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (11))){
var inst_11866 = (state_11974[(7)]);
var inst_11838 = (state_11974[(15)]);
var inst_11866__$1 = cljs.core.seq(inst_11838);
var state_11974__$1 = (function (){var statearr_12029 = state_11974;
(statearr_12029[(7)] = inst_11866__$1);

return statearr_12029;
})();
if(inst_11866__$1){
var statearr_12030_13217 = state_11974__$1;
(statearr_12030_13217[(1)] = (16));

} else {
var statearr_12031_13218 = state_11974__$1;
(statearr_12031_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (9))){
var inst_11902 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12032_13219 = state_11974__$1;
(statearr_12032_13219[(2)] = inst_11902);

(statearr_12032_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (5))){
var inst_11836 = cljs.core.deref(cs);
var inst_11837 = cljs.core.seq(inst_11836);
var inst_11838 = inst_11837;
var inst_11839 = null;
var inst_11840 = (0);
var inst_11841 = (0);
var state_11974__$1 = (function (){var statearr_12033 = state_11974;
(statearr_12033[(14)] = inst_11840);

(statearr_12033[(15)] = inst_11838);

(statearr_12033[(16)] = inst_11839);

(statearr_12033[(17)] = inst_11841);

return statearr_12033;
})();
var statearr_12034_13220 = state_11974__$1;
(statearr_12034_13220[(2)] = null);

(statearr_12034_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (14))){
var state_11974__$1 = state_11974;
var statearr_12035_13221 = state_11974__$1;
(statearr_12035_13221[(2)] = null);

(statearr_12035_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (45))){
var inst_11964 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12036_13222 = state_11974__$1;
(statearr_12036_13222[(2)] = inst_11964);

(statearr_12036_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (26))){
var inst_11905 = (state_11974[(27)]);
var inst_11957 = (state_11974[(2)]);
var inst_11958 = cljs.core.seq(inst_11905);
var state_11974__$1 = (function (){var statearr_12037 = state_11974;
(statearr_12037[(29)] = inst_11957);

return statearr_12037;
})();
if(inst_11958){
var statearr_12038_13223 = state_11974__$1;
(statearr_12038_13223[(1)] = (42));

} else {
var statearr_12039_13224 = state_11974__$1;
(statearr_12039_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (16))){
var inst_11866 = (state_11974[(7)]);
var inst_11868 = cljs.core.chunked_seq_QMARK_(inst_11866);
var state_11974__$1 = state_11974;
if(inst_11868){
var statearr_12040_13225 = state_11974__$1;
(statearr_12040_13225[(1)] = (19));

} else {
var statearr_12041_13226 = state_11974__$1;
(statearr_12041_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (38))){
var inst_11950 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12042_13227 = state_11974__$1;
(statearr_12042_13227[(2)] = inst_11950);

(statearr_12042_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (30))){
var state_11974__$1 = state_11974;
var statearr_12043_13228 = state_11974__$1;
(statearr_12043_13228[(2)] = null);

(statearr_12043_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (10))){
var inst_11839 = (state_11974[(16)]);
var inst_11841 = (state_11974[(17)]);
var inst_11852 = cljs.core._nth(inst_11839,inst_11841);
var inst_11856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11852,(0),null);
var inst_11857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11852,(1),null);
var state_11974__$1 = (function (){var statearr_12044 = state_11974;
(statearr_12044[(24)] = inst_11856);

return statearr_12044;
})();
if(cljs.core.truth_(inst_11857)){
var statearr_12045_13229 = state_11974__$1;
(statearr_12045_13229[(1)] = (13));

} else {
var statearr_12046_13230 = state_11974__$1;
(statearr_12046_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (18))){
var inst_11898 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_12047_13231 = state_11974__$1;
(statearr_12047_13231[(2)] = inst_11898);

(statearr_12047_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (42))){
var state_11974__$1 = state_11974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11974__$1,(45),dchan);
} else {
if((state_val_11975 === (37))){
var inst_11940 = (state_11974[(22)]);
var inst_11829 = (state_11974[(10)]);
var inst_11931 = (state_11974[(23)]);
var inst_11940__$1 = cljs.core.first(inst_11931);
var inst_11941 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11940__$1,inst_11829,done);
var state_11974__$1 = (function (){var statearr_12048 = state_11974;
(statearr_12048[(22)] = inst_11940__$1);

return statearr_12048;
})();
if(cljs.core.truth_(inst_11941)){
var statearr_12049_13232 = state_11974__$1;
(statearr_12049_13232[(1)] = (39));

} else {
var statearr_12050_13233 = state_11974__$1;
(statearr_12050_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (8))){
var inst_11840 = (state_11974[(14)]);
var inst_11841 = (state_11974[(17)]);
var inst_11845 = (inst_11841 < inst_11840);
var inst_11846 = inst_11845;
var state_11974__$1 = state_11974;
if(cljs.core.truth_(inst_11846)){
var statearr_12051_13234 = state_11974__$1;
(statearr_12051_13234[(1)] = (10));

} else {
var statearr_12052_13235 = state_11974__$1;
(statearr_12052_13235[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10951__auto__ = null;
var cljs$core$async$mult_$_state_machine__10951__auto____0 = (function (){
var statearr_12053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12053[(0)] = cljs$core$async$mult_$_state_machine__10951__auto__);

(statearr_12053[(1)] = (1));

return statearr_12053;
});
var cljs$core$async$mult_$_state_machine__10951__auto____1 = (function (state_11974){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_11974);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12054){var ex__10954__auto__ = e12054;
var statearr_12055_13236 = state_11974;
(statearr_12055_13236[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_11974[(4)]))){
var statearr_12056_13237 = state_11974;
(statearr_12056_13237[(1)] = cljs.core.first((state_11974[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11974;
state_11974 = G__13238;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10951__auto__ = function(state_11974){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10951__auto____1.call(this,state_11974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10951__auto____0;
cljs$core$async$mult_$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10951__auto____1;
return cljs$core$async$mult_$_state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12057 = f__11076__auto__();
(statearr_12057[(6)] = c__11075__auto___13181);

return statearr_12057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var G__12059 = arguments.length;
switch (G__12059) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12068){
var map__12069 = p__12068;
var map__12069__$1 = (((((!((map__12069 == null))))?(((((map__12069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12069):map__12069);
var opts = map__12069__$1;
var statearr_12071_13248 = state;
(statearr_12071_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12073_13249 = state;
(statearr_12073_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12075_13250 = state;
(statearr_12075_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12064){
var G__12065 = cljs.core.first(seq12064);
var seq12064__$1 = cljs.core.next(seq12064);
var G__12066 = cljs.core.first(seq12064__$1);
var seq12064__$2 = cljs.core.next(seq12064__$1);
var G__12067 = cljs.core.first(seq12064__$2);
var seq12064__$3 = cljs.core.next(seq12064__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12065,G__12066,G__12067,seq12064__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12087 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12087 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12088){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12088 = meta12088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12089,meta12088__$1){
var self__ = this;
var _12089__$1 = this;
return (new cljs.core.async.t_cljs$core$async12087(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12088__$1));
}));

(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12089){
var self__ = this;
var _12089__$1 = this;
return self__.meta12088;
}));

(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12088","meta12088",692985727,null)], null);
}));

(cljs.core.async.t_cljs$core$async12087.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12087");

(cljs.core.async.t_cljs$core$async12087.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12087");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12087.
 */
cljs.core.async.__GT_t_cljs$core$async12087 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12087(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12088){
return (new cljs.core.async.t_cljs$core$async12087(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12088));
});

}

return (new cljs.core.async.t_cljs$core$async12087(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11075__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12192){
var state_val_12193 = (state_12192[(1)]);
if((state_val_12193 === (7))){
var inst_12107 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
var statearr_12194_13252 = state_12192__$1;
(statearr_12194_13252[(2)] = inst_12107);

(statearr_12194_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (20))){
var inst_12119 = (state_12192[(7)]);
var state_12192__$1 = state_12192;
var statearr_12195_13253 = state_12192__$1;
(statearr_12195_13253[(2)] = inst_12119);

(statearr_12195_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (27))){
var state_12192__$1 = state_12192;
var statearr_12196_13254 = state_12192__$1;
(statearr_12196_13254[(2)] = null);

(statearr_12196_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (1))){
var inst_12094 = (state_12192[(8)]);
var inst_12094__$1 = calc_state();
var inst_12096 = (inst_12094__$1 == null);
var inst_12097 = cljs.core.not(inst_12096);
var state_12192__$1 = (function (){var statearr_12197 = state_12192;
(statearr_12197[(8)] = inst_12094__$1);

return statearr_12197;
})();
if(inst_12097){
var statearr_12198_13255 = state_12192__$1;
(statearr_12198_13255[(1)] = (2));

} else {
var statearr_12199_13256 = state_12192__$1;
(statearr_12199_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (24))){
var inst_12143 = (state_12192[(9)]);
var inst_12152 = (state_12192[(10)]);
var inst_12166 = (state_12192[(11)]);
var inst_12166__$1 = (inst_12143.cljs$core$IFn$_invoke$arity$1 ? inst_12143.cljs$core$IFn$_invoke$arity$1(inst_12152) : inst_12143.call(null,inst_12152));
var state_12192__$1 = (function (){var statearr_12200 = state_12192;
(statearr_12200[(11)] = inst_12166__$1);

return statearr_12200;
})();
if(cljs.core.truth_(inst_12166__$1)){
var statearr_12201_13257 = state_12192__$1;
(statearr_12201_13257[(1)] = (29));

} else {
var statearr_12202_13258 = state_12192__$1;
(statearr_12202_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (4))){
var inst_12110 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
if(cljs.core.truth_(inst_12110)){
var statearr_12203_13259 = state_12192__$1;
(statearr_12203_13259[(1)] = (8));

} else {
var statearr_12204_13260 = state_12192__$1;
(statearr_12204_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (15))){
var inst_12137 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
if(cljs.core.truth_(inst_12137)){
var statearr_12205_13261 = state_12192__$1;
(statearr_12205_13261[(1)] = (19));

} else {
var statearr_12206_13262 = state_12192__$1;
(statearr_12206_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (21))){
var inst_12142 = (state_12192[(12)]);
var inst_12142__$1 = (state_12192[(2)]);
var inst_12143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12142__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12142__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12142__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12192__$1 = (function (){var statearr_12210 = state_12192;
(statearr_12210[(9)] = inst_12143);

(statearr_12210[(12)] = inst_12142__$1);

(statearr_12210[(13)] = inst_12144);

return statearr_12210;
})();
return cljs.core.async.ioc_alts_BANG_(state_12192__$1,(22),inst_12145);
} else {
if((state_val_12193 === (31))){
var inst_12174 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
if(cljs.core.truth_(inst_12174)){
var statearr_12211_13263 = state_12192__$1;
(statearr_12211_13263[(1)] = (32));

} else {
var statearr_12212_13264 = state_12192__$1;
(statearr_12212_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (32))){
var inst_12151 = (state_12192[(14)]);
var state_12192__$1 = state_12192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12192__$1,(35),out,inst_12151);
} else {
if((state_val_12193 === (33))){
var inst_12142 = (state_12192[(12)]);
var inst_12119 = inst_12142;
var state_12192__$1 = (function (){var statearr_12213 = state_12192;
(statearr_12213[(7)] = inst_12119);

return statearr_12213;
})();
var statearr_12214_13265 = state_12192__$1;
(statearr_12214_13265[(2)] = null);

(statearr_12214_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (13))){
var inst_12119 = (state_12192[(7)]);
var inst_12126 = inst_12119.cljs$lang$protocol_mask$partition0$;
var inst_12127 = (inst_12126 & (64));
var inst_12128 = inst_12119.cljs$core$ISeq$;
var inst_12129 = (cljs.core.PROTOCOL_SENTINEL === inst_12128);
var inst_12130 = ((inst_12127) || (inst_12129));
var state_12192__$1 = state_12192;
if(cljs.core.truth_(inst_12130)){
var statearr_12222_13266 = state_12192__$1;
(statearr_12222_13266[(1)] = (16));

} else {
var statearr_12223_13267 = state_12192__$1;
(statearr_12223_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (22))){
var inst_12152 = (state_12192[(10)]);
var inst_12151 = (state_12192[(14)]);
var inst_12150 = (state_12192[(2)]);
var inst_12151__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12150,(0),null);
var inst_12152__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12150,(1),null);
var inst_12153 = (inst_12151__$1 == null);
var inst_12154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12152__$1,change);
var inst_12155 = ((inst_12153) || (inst_12154));
var state_12192__$1 = (function (){var statearr_12224 = state_12192;
(statearr_12224[(10)] = inst_12152__$1);

(statearr_12224[(14)] = inst_12151__$1);

return statearr_12224;
})();
if(cljs.core.truth_(inst_12155)){
var statearr_12225_13268 = state_12192__$1;
(statearr_12225_13268[(1)] = (23));

} else {
var statearr_12226_13269 = state_12192__$1;
(statearr_12226_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (36))){
var inst_12142 = (state_12192[(12)]);
var inst_12119 = inst_12142;
var state_12192__$1 = (function (){var statearr_12227 = state_12192;
(statearr_12227[(7)] = inst_12119);

return statearr_12227;
})();
var statearr_12228_13270 = state_12192__$1;
(statearr_12228_13270[(2)] = null);

(statearr_12228_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (29))){
var inst_12166 = (state_12192[(11)]);
var state_12192__$1 = state_12192;
var statearr_12229_13271 = state_12192__$1;
(statearr_12229_13271[(2)] = inst_12166);

(statearr_12229_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (6))){
var state_12192__$1 = state_12192;
var statearr_12230_13272 = state_12192__$1;
(statearr_12230_13272[(2)] = false);

(statearr_12230_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (28))){
var inst_12162 = (state_12192[(2)]);
var inst_12163 = calc_state();
var inst_12119 = inst_12163;
var state_12192__$1 = (function (){var statearr_12231 = state_12192;
(statearr_12231[(7)] = inst_12119);

(statearr_12231[(15)] = inst_12162);

return statearr_12231;
})();
var statearr_12232_13273 = state_12192__$1;
(statearr_12232_13273[(2)] = null);

(statearr_12232_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (25))){
var inst_12188 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
var statearr_12233_13274 = state_12192__$1;
(statearr_12233_13274[(2)] = inst_12188);

(statearr_12233_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (34))){
var inst_12186 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
var statearr_12234_13275 = state_12192__$1;
(statearr_12234_13275[(2)] = inst_12186);

(statearr_12234_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (17))){
var state_12192__$1 = state_12192;
var statearr_12235_13276 = state_12192__$1;
(statearr_12235_13276[(2)] = false);

(statearr_12235_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (3))){
var state_12192__$1 = state_12192;
var statearr_12236_13277 = state_12192__$1;
(statearr_12236_13277[(2)] = false);

(statearr_12236_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (12))){
var inst_12190 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12192__$1,inst_12190);
} else {
if((state_val_12193 === (2))){
var inst_12094 = (state_12192[(8)]);
var inst_12099 = inst_12094.cljs$lang$protocol_mask$partition0$;
var inst_12100 = (inst_12099 & (64));
var inst_12101 = inst_12094.cljs$core$ISeq$;
var inst_12102 = (cljs.core.PROTOCOL_SENTINEL === inst_12101);
var inst_12103 = ((inst_12100) || (inst_12102));
var state_12192__$1 = state_12192;
if(cljs.core.truth_(inst_12103)){
var statearr_12237_13278 = state_12192__$1;
(statearr_12237_13278[(1)] = (5));

} else {
var statearr_12238_13279 = state_12192__$1;
(statearr_12238_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (23))){
var inst_12151 = (state_12192[(14)]);
var inst_12157 = (inst_12151 == null);
var state_12192__$1 = state_12192;
if(cljs.core.truth_(inst_12157)){
var statearr_12239_13280 = state_12192__$1;
(statearr_12239_13280[(1)] = (26));

} else {
var statearr_12240_13281 = state_12192__$1;
(statearr_12240_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (35))){
var inst_12177 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
if(cljs.core.truth_(inst_12177)){
var statearr_12241_13282 = state_12192__$1;
(statearr_12241_13282[(1)] = (36));

} else {
var statearr_12242_13283 = state_12192__$1;
(statearr_12242_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (19))){
var inst_12119 = (state_12192[(7)]);
var inst_12139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12119);
var state_12192__$1 = state_12192;
var statearr_12243_13284 = state_12192__$1;
(statearr_12243_13284[(2)] = inst_12139);

(statearr_12243_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (11))){
var inst_12119 = (state_12192[(7)]);
var inst_12123 = (inst_12119 == null);
var inst_12124 = cljs.core.not(inst_12123);
var state_12192__$1 = state_12192;
if(inst_12124){
var statearr_12244_13285 = state_12192__$1;
(statearr_12244_13285[(1)] = (13));

} else {
var statearr_12245_13286 = state_12192__$1;
(statearr_12245_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (9))){
var inst_12094 = (state_12192[(8)]);
var state_12192__$1 = state_12192;
var statearr_12246_13287 = state_12192__$1;
(statearr_12246_13287[(2)] = inst_12094);

(statearr_12246_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (5))){
var state_12192__$1 = state_12192;
var statearr_12247_13288 = state_12192__$1;
(statearr_12247_13288[(2)] = true);

(statearr_12247_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (14))){
var state_12192__$1 = state_12192;
var statearr_12252_13289 = state_12192__$1;
(statearr_12252_13289[(2)] = false);

(statearr_12252_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (26))){
var inst_12152 = (state_12192[(10)]);
var inst_12159 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12152);
var state_12192__$1 = state_12192;
var statearr_12260_13290 = state_12192__$1;
(statearr_12260_13290[(2)] = inst_12159);

(statearr_12260_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (16))){
var state_12192__$1 = state_12192;
var statearr_12264_13291 = state_12192__$1;
(statearr_12264_13291[(2)] = true);

(statearr_12264_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (38))){
var inst_12182 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
var statearr_12269_13292 = state_12192__$1;
(statearr_12269_13292[(2)] = inst_12182);

(statearr_12269_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (30))){
var inst_12143 = (state_12192[(9)]);
var inst_12152 = (state_12192[(10)]);
var inst_12144 = (state_12192[(13)]);
var inst_12169 = cljs.core.empty_QMARK_(inst_12143);
var inst_12170 = (inst_12144.cljs$core$IFn$_invoke$arity$1 ? inst_12144.cljs$core$IFn$_invoke$arity$1(inst_12152) : inst_12144.call(null,inst_12152));
var inst_12171 = cljs.core.not(inst_12170);
var inst_12172 = ((inst_12169) && (inst_12171));
var state_12192__$1 = state_12192;
var statearr_12275_13293 = state_12192__$1;
(statearr_12275_13293[(2)] = inst_12172);

(statearr_12275_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (10))){
var inst_12094 = (state_12192[(8)]);
var inst_12115 = (state_12192[(2)]);
var inst_12116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12115,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12115,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12115,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12119 = inst_12094;
var state_12192__$1 = (function (){var statearr_12287 = state_12192;
(statearr_12287[(16)] = inst_12116);

(statearr_12287[(17)] = inst_12117);

(statearr_12287[(18)] = inst_12118);

(statearr_12287[(7)] = inst_12119);

return statearr_12287;
})();
var statearr_12293_13294 = state_12192__$1;
(statearr_12293_13294[(2)] = null);

(statearr_12293_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (18))){
var inst_12134 = (state_12192[(2)]);
var state_12192__$1 = state_12192;
var statearr_12294_13295 = state_12192__$1;
(statearr_12294_13295[(2)] = inst_12134);

(statearr_12294_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (37))){
var state_12192__$1 = state_12192;
var statearr_12296_13296 = state_12192__$1;
(statearr_12296_13296[(2)] = null);

(statearr_12296_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12193 === (8))){
var inst_12094 = (state_12192[(8)]);
var inst_12112 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12094);
var state_12192__$1 = state_12192;
var statearr_12297_13297 = state_12192__$1;
(statearr_12297_13297[(2)] = inst_12112);

(statearr_12297_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10951__auto__ = null;
var cljs$core$async$mix_$_state_machine__10951__auto____0 = (function (){
var statearr_12300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12300[(0)] = cljs$core$async$mix_$_state_machine__10951__auto__);

(statearr_12300[(1)] = (1));

return statearr_12300;
});
var cljs$core$async$mix_$_state_machine__10951__auto____1 = (function (state_12192){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12192);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12303){var ex__10954__auto__ = e12303;
var statearr_12304_13298 = state_12192;
(statearr_12304_13298[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12192[(4)]))){
var statearr_12305_13299 = state_12192;
(statearr_12305_13299[(1)] = cljs.core.first((state_12192[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12192;
state_12192 = G__13300;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10951__auto__ = function(state_12192){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10951__auto____1.call(this,state_12192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10951__auto____0;
cljs$core$async$mix_$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10951__auto____1;
return cljs$core$async$mix_$_state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12306 = f__11076__auto__();
(statearr_12306[(6)] = c__11075__auto___13251);

return statearr_12306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var G__12311 = arguments.length;
switch (G__12311) {
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
var G__12320 = arguments.length;
switch (G__12320) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12318_SHARP_){
if(cljs.core.truth_((p1__12318_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12318_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12318_SHARP_.call(null,topic)))){
return p1__12318_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12318_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12324 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12325){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12325 = meta12325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12326,meta12325__$1){
var self__ = this;
var _12326__$1 = this;
return (new cljs.core.async.t_cljs$core$async12324(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12325__$1));
}));

(cljs.core.async.t_cljs$core$async12324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12326){
var self__ = this;
var _12326__$1 = this;
return self__.meta12325;
}));

(cljs.core.async.t_cljs$core$async12324.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12324.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12324.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12324.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12324.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12324.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12324.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12325","meta12325",1325754438,null)], null);
}));

(cljs.core.async.t_cljs$core$async12324.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12324");

(cljs.core.async.t_cljs$core$async12324.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12324");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12324.
 */
cljs.core.async.__GT_t_cljs$core$async12324 = (function cljs$core$async$__GT_t_cljs$core$async12324(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12325){
return (new cljs.core.async.t_cljs$core$async12324(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12325));
});

}

return (new cljs.core.async.t_cljs$core$async12324(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11075__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12398){
var state_val_12399 = (state_12398[(1)]);
if((state_val_12399 === (7))){
var inst_12394 = (state_12398[(2)]);
var state_12398__$1 = state_12398;
var statearr_12400_13308 = state_12398__$1;
(statearr_12400_13308[(2)] = inst_12394);

(statearr_12400_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (20))){
var state_12398__$1 = state_12398;
var statearr_12401_13309 = state_12398__$1;
(statearr_12401_13309[(2)] = null);

(statearr_12401_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (1))){
var state_12398__$1 = state_12398;
var statearr_12402_13310 = state_12398__$1;
(statearr_12402_13310[(2)] = null);

(statearr_12402_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (24))){
var inst_12377 = (state_12398[(7)]);
var inst_12386 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12377);
var state_12398__$1 = state_12398;
var statearr_12403_13311 = state_12398__$1;
(statearr_12403_13311[(2)] = inst_12386);

(statearr_12403_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (4))){
var inst_12329 = (state_12398[(8)]);
var inst_12329__$1 = (state_12398[(2)]);
var inst_12330 = (inst_12329__$1 == null);
var state_12398__$1 = (function (){var statearr_12404 = state_12398;
(statearr_12404[(8)] = inst_12329__$1);

return statearr_12404;
})();
if(cljs.core.truth_(inst_12330)){
var statearr_12406_13312 = state_12398__$1;
(statearr_12406_13312[(1)] = (5));

} else {
var statearr_12407_13313 = state_12398__$1;
(statearr_12407_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (15))){
var inst_12371 = (state_12398[(2)]);
var state_12398__$1 = state_12398;
var statearr_12408_13314 = state_12398__$1;
(statearr_12408_13314[(2)] = inst_12371);

(statearr_12408_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (21))){
var inst_12391 = (state_12398[(2)]);
var state_12398__$1 = (function (){var statearr_12409 = state_12398;
(statearr_12409[(9)] = inst_12391);

return statearr_12409;
})();
var statearr_12410_13315 = state_12398__$1;
(statearr_12410_13315[(2)] = null);

(statearr_12410_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (13))){
var inst_12353 = (state_12398[(10)]);
var inst_12355 = cljs.core.chunked_seq_QMARK_(inst_12353);
var state_12398__$1 = state_12398;
if(inst_12355){
var statearr_12413_13316 = state_12398__$1;
(statearr_12413_13316[(1)] = (16));

} else {
var statearr_12414_13317 = state_12398__$1;
(statearr_12414_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (22))){
var inst_12383 = (state_12398[(2)]);
var state_12398__$1 = state_12398;
if(cljs.core.truth_(inst_12383)){
var statearr_12416_13318 = state_12398__$1;
(statearr_12416_13318[(1)] = (23));

} else {
var statearr_12417_13319 = state_12398__$1;
(statearr_12417_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (6))){
var inst_12379 = (state_12398[(11)]);
var inst_12329 = (state_12398[(8)]);
var inst_12377 = (state_12398[(7)]);
var inst_12377__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12329) : topic_fn.call(null,inst_12329));
var inst_12378 = cljs.core.deref(mults);
var inst_12379__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12378,inst_12377__$1);
var state_12398__$1 = (function (){var statearr_12419 = state_12398;
(statearr_12419[(11)] = inst_12379__$1);

(statearr_12419[(7)] = inst_12377__$1);

return statearr_12419;
})();
if(cljs.core.truth_(inst_12379__$1)){
var statearr_12420_13320 = state_12398__$1;
(statearr_12420_13320[(1)] = (19));

} else {
var statearr_12421_13321 = state_12398__$1;
(statearr_12421_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (25))){
var inst_12388 = (state_12398[(2)]);
var state_12398__$1 = state_12398;
var statearr_12422_13322 = state_12398__$1;
(statearr_12422_13322[(2)] = inst_12388);

(statearr_12422_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (17))){
var inst_12353 = (state_12398[(10)]);
var inst_12362 = cljs.core.first(inst_12353);
var inst_12363 = cljs.core.async.muxch_STAR_(inst_12362);
var inst_12364 = cljs.core.async.close_BANG_(inst_12363);
var inst_12365 = cljs.core.next(inst_12353);
var inst_12339 = inst_12365;
var inst_12340 = null;
var inst_12341 = (0);
var inst_12342 = (0);
var state_12398__$1 = (function (){var statearr_12424 = state_12398;
(statearr_12424[(12)] = inst_12339);

(statearr_12424[(13)] = inst_12340);

(statearr_12424[(14)] = inst_12364);

(statearr_12424[(15)] = inst_12342);

(statearr_12424[(16)] = inst_12341);

return statearr_12424;
})();
var statearr_12426_13323 = state_12398__$1;
(statearr_12426_13323[(2)] = null);

(statearr_12426_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (3))){
var inst_12396 = (state_12398[(2)]);
var state_12398__$1 = state_12398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12398__$1,inst_12396);
} else {
if((state_val_12399 === (12))){
var inst_12373 = (state_12398[(2)]);
var state_12398__$1 = state_12398;
var statearr_12427_13324 = state_12398__$1;
(statearr_12427_13324[(2)] = inst_12373);

(statearr_12427_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (2))){
var state_12398__$1 = state_12398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12398__$1,(4),ch);
} else {
if((state_val_12399 === (23))){
var state_12398__$1 = state_12398;
var statearr_12428_13325 = state_12398__$1;
(statearr_12428_13325[(2)] = null);

(statearr_12428_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (19))){
var inst_12379 = (state_12398[(11)]);
var inst_12329 = (state_12398[(8)]);
var inst_12381 = cljs.core.async.muxch_STAR_(inst_12379);
var state_12398__$1 = state_12398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12398__$1,(22),inst_12381,inst_12329);
} else {
if((state_val_12399 === (11))){
var inst_12339 = (state_12398[(12)]);
var inst_12353 = (state_12398[(10)]);
var inst_12353__$1 = cljs.core.seq(inst_12339);
var state_12398__$1 = (function (){var statearr_12429 = state_12398;
(statearr_12429[(10)] = inst_12353__$1);

return statearr_12429;
})();
if(inst_12353__$1){
var statearr_12430_13326 = state_12398__$1;
(statearr_12430_13326[(1)] = (13));

} else {
var statearr_12431_13327 = state_12398__$1;
(statearr_12431_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (9))){
var inst_12375 = (state_12398[(2)]);
var state_12398__$1 = state_12398;
var statearr_12432_13328 = state_12398__$1;
(statearr_12432_13328[(2)] = inst_12375);

(statearr_12432_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (5))){
var inst_12336 = cljs.core.deref(mults);
var inst_12337 = cljs.core.vals(inst_12336);
var inst_12338 = cljs.core.seq(inst_12337);
var inst_12339 = inst_12338;
var inst_12340 = null;
var inst_12341 = (0);
var inst_12342 = (0);
var state_12398__$1 = (function (){var statearr_12433 = state_12398;
(statearr_12433[(12)] = inst_12339);

(statearr_12433[(13)] = inst_12340);

(statearr_12433[(15)] = inst_12342);

(statearr_12433[(16)] = inst_12341);

return statearr_12433;
})();
var statearr_12434_13329 = state_12398__$1;
(statearr_12434_13329[(2)] = null);

(statearr_12434_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (14))){
var state_12398__$1 = state_12398;
var statearr_12438_13330 = state_12398__$1;
(statearr_12438_13330[(2)] = null);

(statearr_12438_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (16))){
var inst_12353 = (state_12398[(10)]);
var inst_12357 = cljs.core.chunk_first(inst_12353);
var inst_12358 = cljs.core.chunk_rest(inst_12353);
var inst_12359 = cljs.core.count(inst_12357);
var inst_12339 = inst_12358;
var inst_12340 = inst_12357;
var inst_12341 = inst_12359;
var inst_12342 = (0);
var state_12398__$1 = (function (){var statearr_12439 = state_12398;
(statearr_12439[(12)] = inst_12339);

(statearr_12439[(13)] = inst_12340);

(statearr_12439[(15)] = inst_12342);

(statearr_12439[(16)] = inst_12341);

return statearr_12439;
})();
var statearr_12440_13331 = state_12398__$1;
(statearr_12440_13331[(2)] = null);

(statearr_12440_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (10))){
var inst_12339 = (state_12398[(12)]);
var inst_12340 = (state_12398[(13)]);
var inst_12342 = (state_12398[(15)]);
var inst_12341 = (state_12398[(16)]);
var inst_12347 = cljs.core._nth(inst_12340,inst_12342);
var inst_12348 = cljs.core.async.muxch_STAR_(inst_12347);
var inst_12349 = cljs.core.async.close_BANG_(inst_12348);
var inst_12350 = (inst_12342 + (1));
var tmp12435 = inst_12339;
var tmp12436 = inst_12340;
var tmp12437 = inst_12341;
var inst_12339__$1 = tmp12435;
var inst_12340__$1 = tmp12436;
var inst_12341__$1 = tmp12437;
var inst_12342__$1 = inst_12350;
var state_12398__$1 = (function (){var statearr_12441 = state_12398;
(statearr_12441[(12)] = inst_12339__$1);

(statearr_12441[(17)] = inst_12349);

(statearr_12441[(13)] = inst_12340__$1);

(statearr_12441[(15)] = inst_12342__$1);

(statearr_12441[(16)] = inst_12341__$1);

return statearr_12441;
})();
var statearr_12442_13332 = state_12398__$1;
(statearr_12442_13332[(2)] = null);

(statearr_12442_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (18))){
var inst_12368 = (state_12398[(2)]);
var state_12398__$1 = state_12398;
var statearr_12443_13333 = state_12398__$1;
(statearr_12443_13333[(2)] = inst_12368);

(statearr_12443_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12399 === (8))){
var inst_12342 = (state_12398[(15)]);
var inst_12341 = (state_12398[(16)]);
var inst_12344 = (inst_12342 < inst_12341);
var inst_12345 = inst_12344;
var state_12398__$1 = state_12398;
if(cljs.core.truth_(inst_12345)){
var statearr_12444_13334 = state_12398__$1;
(statearr_12444_13334[(1)] = (10));

} else {
var statearr_12445_13335 = state_12398__$1;
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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_12446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12446[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_12446[(1)] = (1));

return statearr_12446;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_12398){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12398);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12447){var ex__10954__auto__ = e12447;
var statearr_12448_13336 = state_12398;
(statearr_12448_13336[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12398[(4)]))){
var statearr_12449_13337 = state_12398;
(statearr_12449_13337[(1)] = cljs.core.first((state_12398[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12398;
state_12398 = G__13338;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_12398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_12398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12450 = f__11076__auto__();
(statearr_12450[(6)] = c__11075__auto___13307);

return statearr_12450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var G__12454 = arguments.length;
switch (G__12454) {
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
var G__12456 = arguments.length;
switch (G__12456) {
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
var c__11075__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12499){
var state_val_12500 = (state_12499[(1)]);
if((state_val_12500 === (7))){
var state_12499__$1 = state_12499;
var statearr_12502_13343 = state_12499__$1;
(statearr_12502_13343[(2)] = null);

(statearr_12502_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (1))){
var state_12499__$1 = state_12499;
var statearr_12503_13344 = state_12499__$1;
(statearr_12503_13344[(2)] = null);

(statearr_12503_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (4))){
var inst_12460 = (state_12499[(7)]);
var inst_12459 = (state_12499[(8)]);
var inst_12462 = (inst_12460 < inst_12459);
var state_12499__$1 = state_12499;
if(cljs.core.truth_(inst_12462)){
var statearr_12504_13345 = state_12499__$1;
(statearr_12504_13345[(1)] = (6));

} else {
var statearr_12505_13346 = state_12499__$1;
(statearr_12505_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (15))){
var inst_12485 = (state_12499[(9)]);
var inst_12490 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12485);
var state_12499__$1 = state_12499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12499__$1,(17),out,inst_12490);
} else {
if((state_val_12500 === (13))){
var inst_12485 = (state_12499[(9)]);
var inst_12485__$1 = (state_12499[(2)]);
var inst_12486 = cljs.core.some(cljs.core.nil_QMARK_,inst_12485__$1);
var state_12499__$1 = (function (){var statearr_12506 = state_12499;
(statearr_12506[(9)] = inst_12485__$1);

return statearr_12506;
})();
if(cljs.core.truth_(inst_12486)){
var statearr_12507_13347 = state_12499__$1;
(statearr_12507_13347[(1)] = (14));

} else {
var statearr_12508_13348 = state_12499__$1;
(statearr_12508_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (6))){
var state_12499__$1 = state_12499;
var statearr_12509_13349 = state_12499__$1;
(statearr_12509_13349[(2)] = null);

(statearr_12509_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (17))){
var inst_12492 = (state_12499[(2)]);
var state_12499__$1 = (function (){var statearr_12513 = state_12499;
(statearr_12513[(10)] = inst_12492);

return statearr_12513;
})();
var statearr_12514_13350 = state_12499__$1;
(statearr_12514_13350[(2)] = null);

(statearr_12514_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (3))){
var inst_12497 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12499__$1,inst_12497);
} else {
if((state_val_12500 === (12))){
var _ = (function (){var statearr_12515 = state_12499;
(statearr_12515[(4)] = cljs.core.rest((state_12499[(4)])));

return statearr_12515;
})();
var state_12499__$1 = state_12499;
var ex12512 = (state_12499__$1[(2)]);
var statearr_12516_13351 = state_12499__$1;
(statearr_12516_13351[(5)] = ex12512);


if((ex12512 instanceof Object)){
var statearr_12517_13352 = state_12499__$1;
(statearr_12517_13352[(1)] = (11));

(statearr_12517_13352[(5)] = null);

} else {
throw ex12512;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (2))){
var inst_12458 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12459 = cnt;
var inst_12460 = (0);
var state_12499__$1 = (function (){var statearr_12520 = state_12499;
(statearr_12520[(7)] = inst_12460);

(statearr_12520[(8)] = inst_12459);

(statearr_12520[(11)] = inst_12458);

return statearr_12520;
})();
var statearr_12521_13353 = state_12499__$1;
(statearr_12521_13353[(2)] = null);

(statearr_12521_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (11))){
var inst_12464 = (state_12499[(2)]);
var inst_12465 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12499__$1 = (function (){var statearr_12522 = state_12499;
(statearr_12522[(12)] = inst_12464);

return statearr_12522;
})();
var statearr_12523_13354 = state_12499__$1;
(statearr_12523_13354[(2)] = inst_12465);

(statearr_12523_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (9))){
var inst_12460 = (state_12499[(7)]);
var _ = (function (){var statearr_12524 = state_12499;
(statearr_12524[(4)] = cljs.core.cons((12),(state_12499[(4)])));

return statearr_12524;
})();
var inst_12471 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12460) : chs__$1.call(null,inst_12460));
var inst_12472 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12460) : done.call(null,inst_12460));
var inst_12473 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12471,inst_12472);
var ___$1 = (function (){var statearr_12525 = state_12499;
(statearr_12525[(4)] = cljs.core.rest((state_12499[(4)])));

return statearr_12525;
})();
var state_12499__$1 = state_12499;
var statearr_12526_13355 = state_12499__$1;
(statearr_12526_13355[(2)] = inst_12473);

(statearr_12526_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (5))){
var inst_12483 = (state_12499[(2)]);
var state_12499__$1 = (function (){var statearr_12527 = state_12499;
(statearr_12527[(13)] = inst_12483);

return statearr_12527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12499__$1,(13),dchan);
} else {
if((state_val_12500 === (14))){
var inst_12488 = cljs.core.async.close_BANG_(out);
var state_12499__$1 = state_12499;
var statearr_12528_13356 = state_12499__$1;
(statearr_12528_13356[(2)] = inst_12488);

(statearr_12528_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (16))){
var inst_12495 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12529_13357 = state_12499__$1;
(statearr_12529_13357[(2)] = inst_12495);

(statearr_12529_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (10))){
var inst_12460 = (state_12499[(7)]);
var inst_12476 = (state_12499[(2)]);
var inst_12477 = (inst_12460 + (1));
var inst_12460__$1 = inst_12477;
var state_12499__$1 = (function (){var statearr_12530 = state_12499;
(statearr_12530[(7)] = inst_12460__$1);

(statearr_12530[(14)] = inst_12476);

return statearr_12530;
})();
var statearr_12531_13358 = state_12499__$1;
(statearr_12531_13358[(2)] = null);

(statearr_12531_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (8))){
var inst_12481 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12532_13359 = state_12499__$1;
(statearr_12532_13359[(2)] = inst_12481);

(statearr_12532_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_12533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12533[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_12533[(1)] = (1));

return statearr_12533;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_12499){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12499);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12534){var ex__10954__auto__ = e12534;
var statearr_12535_13360 = state_12499;
(statearr_12535_13360[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12499[(4)]))){
var statearr_12536_13361 = state_12499;
(statearr_12536_13361[(1)] = cljs.core.first((state_12499[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12499;
state_12499 = G__13362;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_12499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_12499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12537 = f__11076__auto__();
(statearr_12537[(6)] = c__11075__auto___13342);

return statearr_12537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var G__12545 = arguments.length;
switch (G__12545) {
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
var c__11075__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12577){
var state_val_12578 = (state_12577[(1)]);
if((state_val_12578 === (7))){
var inst_12556 = (state_12577[(7)]);
var inst_12557 = (state_12577[(8)]);
var inst_12556__$1 = (state_12577[(2)]);
var inst_12557__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12556__$1,(0),null);
var inst_12558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12556__$1,(1),null);
var inst_12559 = (inst_12557__$1 == null);
var state_12577__$1 = (function (){var statearr_12579 = state_12577;
(statearr_12579[(7)] = inst_12556__$1);

(statearr_12579[(9)] = inst_12558);

(statearr_12579[(8)] = inst_12557__$1);

return statearr_12579;
})();
if(cljs.core.truth_(inst_12559)){
var statearr_12580_13365 = state_12577__$1;
(statearr_12580_13365[(1)] = (8));

} else {
var statearr_12581_13366 = state_12577__$1;
(statearr_12581_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12578 === (1))){
var inst_12546 = cljs.core.vec(chs);
var inst_12547 = inst_12546;
var state_12577__$1 = (function (){var statearr_12582 = state_12577;
(statearr_12582[(10)] = inst_12547);

return statearr_12582;
})();
var statearr_12583_13367 = state_12577__$1;
(statearr_12583_13367[(2)] = null);

(statearr_12583_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12578 === (4))){
var inst_12547 = (state_12577[(10)]);
var state_12577__$1 = state_12577;
return cljs.core.async.ioc_alts_BANG_(state_12577__$1,(7),inst_12547);
} else {
if((state_val_12578 === (6))){
var inst_12573 = (state_12577[(2)]);
var state_12577__$1 = state_12577;
var statearr_12584_13368 = state_12577__$1;
(statearr_12584_13368[(2)] = inst_12573);

(statearr_12584_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12578 === (3))){
var inst_12575 = (state_12577[(2)]);
var state_12577__$1 = state_12577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12577__$1,inst_12575);
} else {
if((state_val_12578 === (2))){
var inst_12547 = (state_12577[(10)]);
var inst_12549 = cljs.core.count(inst_12547);
var inst_12550 = (inst_12549 > (0));
var state_12577__$1 = state_12577;
if(cljs.core.truth_(inst_12550)){
var statearr_12586_13369 = state_12577__$1;
(statearr_12586_13369[(1)] = (4));

} else {
var statearr_12587_13370 = state_12577__$1;
(statearr_12587_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12578 === (11))){
var inst_12547 = (state_12577[(10)]);
var inst_12566 = (state_12577[(2)]);
var tmp12585 = inst_12547;
var inst_12547__$1 = tmp12585;
var state_12577__$1 = (function (){var statearr_12588 = state_12577;
(statearr_12588[(11)] = inst_12566);

(statearr_12588[(10)] = inst_12547__$1);

return statearr_12588;
})();
var statearr_12589_13371 = state_12577__$1;
(statearr_12589_13371[(2)] = null);

(statearr_12589_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12578 === (9))){
var inst_12557 = (state_12577[(8)]);
var state_12577__$1 = state_12577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12577__$1,(11),out,inst_12557);
} else {
if((state_val_12578 === (5))){
var inst_12571 = cljs.core.async.close_BANG_(out);
var state_12577__$1 = state_12577;
var statearr_12590_13372 = state_12577__$1;
(statearr_12590_13372[(2)] = inst_12571);

(statearr_12590_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12578 === (10))){
var inst_12569 = (state_12577[(2)]);
var state_12577__$1 = state_12577;
var statearr_12591_13373 = state_12577__$1;
(statearr_12591_13373[(2)] = inst_12569);

(statearr_12591_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12578 === (8))){
var inst_12556 = (state_12577[(7)]);
var inst_12547 = (state_12577[(10)]);
var inst_12558 = (state_12577[(9)]);
var inst_12557 = (state_12577[(8)]);
var inst_12561 = (function (){var cs = inst_12547;
var vec__12552 = inst_12556;
var v = inst_12557;
var c = inst_12558;
return (function (p1__12543_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12543_SHARP_);
});
})();
var inst_12562 = cljs.core.filterv(inst_12561,inst_12547);
var inst_12547__$1 = inst_12562;
var state_12577__$1 = (function (){var statearr_12592 = state_12577;
(statearr_12592[(10)] = inst_12547__$1);

return statearr_12592;
})();
var statearr_12593_13374 = state_12577__$1;
(statearr_12593_13374[(2)] = null);

(statearr_12593_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_12594 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12594[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_12594[(1)] = (1));

return statearr_12594;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_12577){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12577);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12595){var ex__10954__auto__ = e12595;
var statearr_12596_13375 = state_12577;
(statearr_12596_13375[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12577[(4)]))){
var statearr_12597_13376 = state_12577;
(statearr_12597_13376[(1)] = cljs.core.first((state_12577[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12577;
state_12577 = G__13377;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_12577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_12577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12598 = f__11076__auto__();
(statearr_12598[(6)] = c__11075__auto___13364);

return statearr_12598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var G__12600 = arguments.length;
switch (G__12600) {
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
var c__11075__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12626){
var state_val_12627 = (state_12626[(1)]);
if((state_val_12627 === (7))){
var inst_12608 = (state_12626[(7)]);
var inst_12608__$1 = (state_12626[(2)]);
var inst_12609 = (inst_12608__$1 == null);
var inst_12610 = cljs.core.not(inst_12609);
var state_12626__$1 = (function (){var statearr_12628 = state_12626;
(statearr_12628[(7)] = inst_12608__$1);

return statearr_12628;
})();
if(inst_12610){
var statearr_12629_13380 = state_12626__$1;
(statearr_12629_13380[(1)] = (8));

} else {
var statearr_12630_13381 = state_12626__$1;
(statearr_12630_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (1))){
var inst_12603 = (0);
var state_12626__$1 = (function (){var statearr_12632 = state_12626;
(statearr_12632[(8)] = inst_12603);

return statearr_12632;
})();
var statearr_12633_13382 = state_12626__$1;
(statearr_12633_13382[(2)] = null);

(statearr_12633_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (4))){
var state_12626__$1 = state_12626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12626__$1,(7),ch);
} else {
if((state_val_12627 === (6))){
var inst_12621 = (state_12626[(2)]);
var state_12626__$1 = state_12626;
var statearr_12634_13383 = state_12626__$1;
(statearr_12634_13383[(2)] = inst_12621);

(statearr_12634_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (3))){
var inst_12623 = (state_12626[(2)]);
var inst_12624 = cljs.core.async.close_BANG_(out);
var state_12626__$1 = (function (){var statearr_12635 = state_12626;
(statearr_12635[(9)] = inst_12623);

return statearr_12635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12626__$1,inst_12624);
} else {
if((state_val_12627 === (2))){
var inst_12603 = (state_12626[(8)]);
var inst_12605 = (inst_12603 < n);
var state_12626__$1 = state_12626;
if(cljs.core.truth_(inst_12605)){
var statearr_12636_13384 = state_12626__$1;
(statearr_12636_13384[(1)] = (4));

} else {
var statearr_12637_13385 = state_12626__$1;
(statearr_12637_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (11))){
var inst_12603 = (state_12626[(8)]);
var inst_12613 = (state_12626[(2)]);
var inst_12614 = (inst_12603 + (1));
var inst_12603__$1 = inst_12614;
var state_12626__$1 = (function (){var statearr_12638 = state_12626;
(statearr_12638[(10)] = inst_12613);

(statearr_12638[(8)] = inst_12603__$1);

return statearr_12638;
})();
var statearr_12639_13386 = state_12626__$1;
(statearr_12639_13386[(2)] = null);

(statearr_12639_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (9))){
var state_12626__$1 = state_12626;
var statearr_12640_13387 = state_12626__$1;
(statearr_12640_13387[(2)] = null);

(statearr_12640_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (5))){
var state_12626__$1 = state_12626;
var statearr_12641_13388 = state_12626__$1;
(statearr_12641_13388[(2)] = null);

(statearr_12641_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (10))){
var inst_12618 = (state_12626[(2)]);
var state_12626__$1 = state_12626;
var statearr_12642_13389 = state_12626__$1;
(statearr_12642_13389[(2)] = inst_12618);

(statearr_12642_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (8))){
var inst_12608 = (state_12626[(7)]);
var state_12626__$1 = state_12626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12626__$1,(11),out,inst_12608);
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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_12643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12643[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_12643[(1)] = (1));

return statearr_12643;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_12626){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12626);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12644){var ex__10954__auto__ = e12644;
var statearr_12645_13390 = state_12626;
(statearr_12645_13390[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12626[(4)]))){
var statearr_12646_13391 = state_12626;
(statearr_12646_13391[(1)] = cljs.core.first((state_12626[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12626;
state_12626 = G__13392;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_12626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_12626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12647 = f__11076__auto__();
(statearr_12647[(6)] = c__11075__auto___13379);

return statearr_12647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var c__11075__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12685){
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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_12699 = [null,null,null,null,null,null,null,null,null];
(statearr_12699[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_12699[(1)] = (1));

return statearr_12699;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_12685){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12685);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12700){var ex__10954__auto__ = e12700;
var statearr_12701_13405 = state_12685;
(statearr_12701_13405[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12685[(4)]))){
var statearr_12702_13406 = state_12685;
(statearr_12702_13406[(1)] = cljs.core.first((state_12685[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12685;
state_12685 = G__13407;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_12685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_12685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12703 = f__11076__auto__();
(statearr_12703[(6)] = c__11075__auto___13394);

return statearr_12703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var c__11075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12767){
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
var cljs$core$async$mapcat_STAR__$_state_machine__10951__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10951__auto____0 = (function (){
var statearr_12803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12803[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10951__auto__);

(statearr_12803[(1)] = (1));

return statearr_12803;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10951__auto____1 = (function (state_12767){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12767);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12804){var ex__10954__auto__ = e12804;
var statearr_12805_13433 = state_12767;
(statearr_12805_13433[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12767[(4)]))){
var statearr_12806_13434 = state_12767;
(statearr_12806_13434[(1)] = cljs.core.first((state_12767[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12767;
state_12767 = G__13435;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10951__auto__ = function(state_12767){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10951__auto____1.call(this,state_12767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10951__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10951__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12807 = f__11076__auto__();
(statearr_12807[(6)] = c__11075__auto__);

return statearr_12807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
}));

return c__11075__auto__;
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
var G__12814 = arguments.length;
switch (G__12814) {
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
var c__11075__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12845){
var state_val_12846 = (state_12845[(1)]);
if((state_val_12846 === (7))){
var inst_12840 = (state_12845[(2)]);
var state_12845__$1 = state_12845;
var statearr_12849_13440 = state_12845__$1;
(statearr_12849_13440[(2)] = inst_12840);

(statearr_12849_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12846 === (1))){
var inst_12822 = null;
var state_12845__$1 = (function (){var statearr_12850 = state_12845;
(statearr_12850[(7)] = inst_12822);

return statearr_12850;
})();
var statearr_12851_13441 = state_12845__$1;
(statearr_12851_13441[(2)] = null);

(statearr_12851_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12846 === (4))){
var inst_12825 = (state_12845[(8)]);
var inst_12825__$1 = (state_12845[(2)]);
var inst_12826 = (inst_12825__$1 == null);
var inst_12827 = cljs.core.not(inst_12826);
var state_12845__$1 = (function (){var statearr_12852 = state_12845;
(statearr_12852[(8)] = inst_12825__$1);

return statearr_12852;
})();
if(inst_12827){
var statearr_12853_13442 = state_12845__$1;
(statearr_12853_13442[(1)] = (5));

} else {
var statearr_12854_13443 = state_12845__$1;
(statearr_12854_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12846 === (6))){
var state_12845__$1 = state_12845;
var statearr_12855_13444 = state_12845__$1;
(statearr_12855_13444[(2)] = null);

(statearr_12855_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12846 === (3))){
var inst_12842 = (state_12845[(2)]);
var inst_12843 = cljs.core.async.close_BANG_(out);
var state_12845__$1 = (function (){var statearr_12856 = state_12845;
(statearr_12856[(9)] = inst_12842);

return statearr_12856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12845__$1,inst_12843);
} else {
if((state_val_12846 === (2))){
var state_12845__$1 = state_12845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12845__$1,(4),ch);
} else {
if((state_val_12846 === (11))){
var inst_12825 = (state_12845[(8)]);
var inst_12834 = (state_12845[(2)]);
var inst_12822 = inst_12825;
var state_12845__$1 = (function (){var statearr_12857 = state_12845;
(statearr_12857[(10)] = inst_12834);

(statearr_12857[(7)] = inst_12822);

return statearr_12857;
})();
var statearr_12858_13445 = state_12845__$1;
(statearr_12858_13445[(2)] = null);

(statearr_12858_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12846 === (9))){
var inst_12825 = (state_12845[(8)]);
var state_12845__$1 = state_12845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12845__$1,(11),out,inst_12825);
} else {
if((state_val_12846 === (5))){
var inst_12825 = (state_12845[(8)]);
var inst_12822 = (state_12845[(7)]);
var inst_12829 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12825,inst_12822);
var state_12845__$1 = state_12845;
if(inst_12829){
var statearr_12860_13446 = state_12845__$1;
(statearr_12860_13446[(1)] = (8));

} else {
var statearr_12861_13447 = state_12845__$1;
(statearr_12861_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12846 === (10))){
var inst_12837 = (state_12845[(2)]);
var state_12845__$1 = state_12845;
var statearr_12862_13448 = state_12845__$1;
(statearr_12862_13448[(2)] = inst_12837);

(statearr_12862_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12846 === (8))){
var inst_12822 = (state_12845[(7)]);
var tmp12859 = inst_12822;
var inst_12822__$1 = tmp12859;
var state_12845__$1 = (function (){var statearr_12863 = state_12845;
(statearr_12863[(7)] = inst_12822__$1);

return statearr_12863;
})();
var statearr_12864_13449 = state_12845__$1;
(statearr_12864_13449[(2)] = null);

(statearr_12864_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_12865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12865[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_12865[(1)] = (1));

return statearr_12865;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_12845){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12845);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12866){var ex__10954__auto__ = e12866;
var statearr_12867_13450 = state_12845;
(statearr_12867_13450[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12845[(4)]))){
var statearr_12868_13451 = state_12845;
(statearr_12868_13451[(1)] = cljs.core.first((state_12845[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12845;
state_12845 = G__13452;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_12845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_12845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12869 = f__11076__auto__();
(statearr_12869[(6)] = c__11075__auto___13439);

return statearr_12869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12871 = arguments.length;
switch (G__12871) {
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
var c__11075__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12918){
var state_val_12919 = (state_12918[(1)]);
if((state_val_12919 === (7))){
var inst_12914 = (state_12918[(2)]);
var state_12918__$1 = state_12918;
var statearr_12925_13455 = state_12918__$1;
(statearr_12925_13455[(2)] = inst_12914);

(statearr_12925_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (1))){
var inst_12877 = (new Array(n));
var inst_12878 = inst_12877;
var inst_12879 = (0);
var state_12918__$1 = (function (){var statearr_12926 = state_12918;
(statearr_12926[(7)] = inst_12879);

(statearr_12926[(8)] = inst_12878);

return statearr_12926;
})();
var statearr_12927_13456 = state_12918__$1;
(statearr_12927_13456[(2)] = null);

(statearr_12927_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (4))){
var inst_12882 = (state_12918[(9)]);
var inst_12882__$1 = (state_12918[(2)]);
var inst_12883 = (inst_12882__$1 == null);
var inst_12884 = cljs.core.not(inst_12883);
var state_12918__$1 = (function (){var statearr_12928 = state_12918;
(statearr_12928[(9)] = inst_12882__$1);

return statearr_12928;
})();
if(inst_12884){
var statearr_12929_13457 = state_12918__$1;
(statearr_12929_13457[(1)] = (5));

} else {
var statearr_12930_13458 = state_12918__$1;
(statearr_12930_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (15))){
var inst_12908 = (state_12918[(2)]);
var state_12918__$1 = state_12918;
var statearr_12931_13459 = state_12918__$1;
(statearr_12931_13459[(2)] = inst_12908);

(statearr_12931_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (13))){
var state_12918__$1 = state_12918;
var statearr_12932_13460 = state_12918__$1;
(statearr_12932_13460[(2)] = null);

(statearr_12932_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (6))){
var inst_12879 = (state_12918[(7)]);
var inst_12904 = (inst_12879 > (0));
var state_12918__$1 = state_12918;
if(cljs.core.truth_(inst_12904)){
var statearr_12933_13461 = state_12918__$1;
(statearr_12933_13461[(1)] = (12));

} else {
var statearr_12934_13462 = state_12918__$1;
(statearr_12934_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (3))){
var inst_12916 = (state_12918[(2)]);
var state_12918__$1 = state_12918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12918__$1,inst_12916);
} else {
if((state_val_12919 === (12))){
var inst_12878 = (state_12918[(8)]);
var inst_12906 = cljs.core.vec(inst_12878);
var state_12918__$1 = state_12918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12918__$1,(15),out,inst_12906);
} else {
if((state_val_12919 === (2))){
var state_12918__$1 = state_12918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12918__$1,(4),ch);
} else {
if((state_val_12919 === (11))){
var inst_12894 = (state_12918[(2)]);
var inst_12895 = (new Array(n));
var inst_12878 = inst_12895;
var inst_12879 = (0);
var state_12918__$1 = (function (){var statearr_12938 = state_12918;
(statearr_12938[(7)] = inst_12879);

(statearr_12938[(8)] = inst_12878);

(statearr_12938[(10)] = inst_12894);

return statearr_12938;
})();
var statearr_12939_13463 = state_12918__$1;
(statearr_12939_13463[(2)] = null);

(statearr_12939_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (9))){
var inst_12878 = (state_12918[(8)]);
var inst_12892 = cljs.core.vec(inst_12878);
var state_12918__$1 = state_12918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12918__$1,(11),out,inst_12892);
} else {
if((state_val_12919 === (5))){
var inst_12879 = (state_12918[(7)]);
var inst_12882 = (state_12918[(9)]);
var inst_12887 = (state_12918[(11)]);
var inst_12878 = (state_12918[(8)]);
var inst_12886 = (inst_12878[inst_12879] = inst_12882);
var inst_12887__$1 = (inst_12879 + (1));
var inst_12888 = (inst_12887__$1 < n);
var state_12918__$1 = (function (){var statearr_12940 = state_12918;
(statearr_12940[(11)] = inst_12887__$1);

(statearr_12940[(12)] = inst_12886);

return statearr_12940;
})();
if(cljs.core.truth_(inst_12888)){
var statearr_12941_13464 = state_12918__$1;
(statearr_12941_13464[(1)] = (8));

} else {
var statearr_12942_13465 = state_12918__$1;
(statearr_12942_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (14))){
var inst_12911 = (state_12918[(2)]);
var inst_12912 = cljs.core.async.close_BANG_(out);
var state_12918__$1 = (function (){var statearr_12944 = state_12918;
(statearr_12944[(13)] = inst_12911);

return statearr_12944;
})();
var statearr_12945_13466 = state_12918__$1;
(statearr_12945_13466[(2)] = inst_12912);

(statearr_12945_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (10))){
var inst_12898 = (state_12918[(2)]);
var state_12918__$1 = state_12918;
var statearr_12946_13467 = state_12918__$1;
(statearr_12946_13467[(2)] = inst_12898);

(statearr_12946_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (8))){
var inst_12887 = (state_12918[(11)]);
var inst_12878 = (state_12918[(8)]);
var tmp12943 = inst_12878;
var inst_12878__$1 = tmp12943;
var inst_12879 = inst_12887;
var state_12918__$1 = (function (){var statearr_12947 = state_12918;
(statearr_12947[(7)] = inst_12879);

(statearr_12947[(8)] = inst_12878__$1);

return statearr_12947;
})();
var statearr_12948_13468 = state_12918__$1;
(statearr_12948_13468[(2)] = null);

(statearr_12948_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_12950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12950[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_12950[(1)] = (1));

return statearr_12950;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_12918){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12918);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e12951){var ex__10954__auto__ = e12951;
var statearr_12952_13469 = state_12918;
(statearr_12952_13469[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12918[(4)]))){
var statearr_12953_13470 = state_12918;
(statearr_12953_13470[(1)] = cljs.core.first((state_12918[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12918;
state_12918 = G__13471;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_12918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_12918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_12954 = f__11076__auto__();
(statearr_12954[(6)] = c__11075__auto___13454);

return statearr_12954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
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
var c__11075__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11076__auto__ = (function (){var switch__10950__auto__ = (function (state_12998){
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
var cljs$core$async$state_machine__10951__auto__ = null;
var cljs$core$async$state_machine__10951__auto____0 = (function (){
var statearr_13021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13021[(0)] = cljs$core$async$state_machine__10951__auto__);

(statearr_13021[(1)] = (1));

return statearr_13021;
});
var cljs$core$async$state_machine__10951__auto____1 = (function (state_12998){
while(true){
var ret_value__10952__auto__ = (function (){try{while(true){
var result__10953__auto__ = switch__10950__auto__(state_12998);
if(cljs.core.keyword_identical_QMARK_(result__10953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10953__auto__;
}
break;
}
}catch (e13022){var ex__10954__auto__ = e13022;
var statearr_13023_13488 = state_12998;
(statearr_13023_13488[(2)] = ex__10954__auto__);


if(cljs.core.seq((state_12998[(4)]))){
var statearr_13024_13489 = state_12998;
(statearr_13024_13489[(1)] = cljs.core.first((state_12998[(4)])));

} else {
throw ex__10954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12998;
state_12998 = G__13490;
continue;
} else {
return ret_value__10952__auto__;
}
break;
}
});
cljs$core$async$state_machine__10951__auto__ = function(state_12998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10951__auto____1.call(this,state_12998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10951__auto____0;
cljs$core$async$state_machine__10951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10951__auto____1;
return cljs$core$async$state_machine__10951__auto__;
})()
})();
var state__11077__auto__ = (function (){var statearr_13025 = f__11076__auto__();
(statearr_13025[(6)] = c__11075__auto___13473);

return statearr_13025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11077__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
