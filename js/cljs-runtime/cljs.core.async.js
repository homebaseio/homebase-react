goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10724 = arguments.length;
switch (G__10724) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10725 = (function (f,blockable,meta10726){
this.f = f;
this.blockable = blockable;
this.meta10726 = meta10726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10727,meta10726__$1){
var self__ = this;
var _10727__$1 = this;
return (new cljs.core.async.t_cljs$core$async10725(self__.f,self__.blockable,meta10726__$1));
}));

(cljs.core.async.t_cljs$core$async10725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10727){
var self__ = this;
var _10727__$1 = this;
return self__.meta10726;
}));

(cljs.core.async.t_cljs$core$async10725.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10725.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10726","meta10726",812959034,null)], null);
}));

(cljs.core.async.t_cljs$core$async10725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10725");

(cljs.core.async.t_cljs$core$async10725.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10725.
 */
cljs.core.async.__GT_t_cljs$core$async10725 = (function cljs$core$async$__GT_t_cljs$core$async10725(f__$1,blockable__$1,meta10726){
return (new cljs.core.async.t_cljs$core$async10725(f__$1,blockable__$1,meta10726));
});

}

return (new cljs.core.async.t_cljs$core$async10725(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10734 = arguments.length;
switch (G__10734) {
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
var G__10741 = arguments.length;
switch (G__10741) {
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
var G__10743 = arguments.length;
switch (G__10743) {
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
var val_12701 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12701) : fn1.call(null,val_12701));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12701) : fn1.call(null,val_12701));
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
var G__10760 = arguments.length;
switch (G__10760) {
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
var n__4613__auto___12706 = n;
var x_12707 = (0);
while(true){
if((x_12707 < n__4613__auto___12706)){
(a[x_12707] = x_12707);

var G__12708 = (x_12707 + (1));
x_12707 = G__12708;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10775 = (function (flag,meta10776){
this.flag = flag;
this.meta10776 = meta10776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10777,meta10776__$1){
var self__ = this;
var _10777__$1 = this;
return (new cljs.core.async.t_cljs$core$async10775(self__.flag,meta10776__$1));
}));

(cljs.core.async.t_cljs$core$async10775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10777){
var self__ = this;
var _10777__$1 = this;
return self__.meta10776;
}));

(cljs.core.async.t_cljs$core$async10775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10776","meta10776",1567093058,null)], null);
}));

(cljs.core.async.t_cljs$core$async10775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10775");

(cljs.core.async.t_cljs$core$async10775.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10775.
 */
cljs.core.async.__GT_t_cljs$core$async10775 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10775(flag__$1,meta10776){
return (new cljs.core.async.t_cljs$core$async10775(flag__$1,meta10776));
});

}

return (new cljs.core.async.t_cljs$core$async10775(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10796 = (function (flag,cb,meta10797){
this.flag = flag;
this.cb = cb;
this.meta10797 = meta10797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10798,meta10797__$1){
var self__ = this;
var _10798__$1 = this;
return (new cljs.core.async.t_cljs$core$async10796(self__.flag,self__.cb,meta10797__$1));
}));

(cljs.core.async.t_cljs$core$async10796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10798){
var self__ = this;
var _10798__$1 = this;
return self__.meta10797;
}));

(cljs.core.async.t_cljs$core$async10796.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10796.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10797","meta10797",-999291810,null)], null);
}));

(cljs.core.async.t_cljs$core$async10796.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10796");

(cljs.core.async.t_cljs$core$async10796.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10796");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10796.
 */
cljs.core.async.__GT_t_cljs$core$async10796 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10796(flag__$1,cb__$1,meta10797){
return (new cljs.core.async.t_cljs$core$async10796(flag__$1,cb__$1,meta10797));
});

}

return (new cljs.core.async.t_cljs$core$async10796(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10799_SHARP_){
var G__10801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10799_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10801) : fret.call(null,G__10801));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10800_SHARP_){
var G__10802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10800_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10802) : fret.call(null,G__10802));
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
var G__12711 = (i + (1));
i = G__12711;
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
var len__4736__auto___12712 = arguments.length;
var i__4737__auto___12713 = (0);
while(true){
if((i__4737__auto___12713 < len__4736__auto___12712)){
args__4742__auto__.push((arguments[i__4737__auto___12713]));

var G__12714 = (i__4737__auto___12713 + (1));
i__4737__auto___12713 = G__12714;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10814){
var map__10815 = p__10814;
var map__10815__$1 = (((((!((map__10815 == null))))?(((((map__10815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10815):map__10815);
var opts = map__10815__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10809){
var G__10810 = cljs.core.first(seq10809);
var seq10809__$1 = cljs.core.next(seq10809);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10810,seq10809__$1);
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
var G__10826 = arguments.length;
switch (G__10826) {
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
var c__10656__auto___12716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_10858){
var state_val_10860 = (state_10858[(1)]);
if((state_val_10860 === (7))){
var inst_10853 = (state_10858[(2)]);
var state_10858__$1 = state_10858;
var statearr_10867_12717 = state_10858__$1;
(statearr_10867_12717[(2)] = inst_10853);

(statearr_10867_12717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (1))){
var state_10858__$1 = state_10858;
var statearr_10868_12722 = state_10858__$1;
(statearr_10868_12722[(2)] = null);

(statearr_10868_12722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (4))){
var inst_10830 = (state_10858[(7)]);
var inst_10830__$1 = (state_10858[(2)]);
var inst_10832 = (inst_10830__$1 == null);
var state_10858__$1 = (function (){var statearr_10869 = state_10858;
(statearr_10869[(7)] = inst_10830__$1);

return statearr_10869;
})();
if(cljs.core.truth_(inst_10832)){
var statearr_10870_12727 = state_10858__$1;
(statearr_10870_12727[(1)] = (5));

} else {
var statearr_10871_12728 = state_10858__$1;
(statearr_10871_12728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (13))){
var state_10858__$1 = state_10858;
var statearr_10872_12729 = state_10858__$1;
(statearr_10872_12729[(2)] = null);

(statearr_10872_12729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (6))){
var inst_10830 = (state_10858[(7)]);
var state_10858__$1 = state_10858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10858__$1,(11),to,inst_10830);
} else {
if((state_val_10860 === (3))){
var inst_10856 = (state_10858[(2)]);
var state_10858__$1 = state_10858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10858__$1,inst_10856);
} else {
if((state_val_10860 === (12))){
var state_10858__$1 = state_10858;
var statearr_10873_12734 = state_10858__$1;
(statearr_10873_12734[(2)] = null);

(statearr_10873_12734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (2))){
var state_10858__$1 = state_10858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10858__$1,(4),from);
} else {
if((state_val_10860 === (11))){
var inst_10842 = (state_10858[(2)]);
var state_10858__$1 = state_10858;
if(cljs.core.truth_(inst_10842)){
var statearr_10874_12735 = state_10858__$1;
(statearr_10874_12735[(1)] = (12));

} else {
var statearr_10875_12736 = state_10858__$1;
(statearr_10875_12736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (9))){
var state_10858__$1 = state_10858;
var statearr_10876_12737 = state_10858__$1;
(statearr_10876_12737[(2)] = null);

(statearr_10876_12737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (5))){
var state_10858__$1 = state_10858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10877_12738 = state_10858__$1;
(statearr_10877_12738[(1)] = (8));

} else {
var statearr_10878_12739 = state_10858__$1;
(statearr_10878_12739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (14))){
var inst_10851 = (state_10858[(2)]);
var state_10858__$1 = state_10858;
var statearr_10879_12740 = state_10858__$1;
(statearr_10879_12740[(2)] = inst_10851);

(statearr_10879_12740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (10))){
var inst_10839 = (state_10858[(2)]);
var state_10858__$1 = state_10858;
var statearr_10880_12741 = state_10858__$1;
(statearr_10880_12741[(2)] = inst_10839);

(statearr_10880_12741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10860 === (8))){
var inst_10835 = cljs.core.async.close_BANG_(to);
var state_10858__$1 = state_10858;
var statearr_10881_12742 = state_10858__$1;
(statearr_10881_12742[(2)] = inst_10835);

(statearr_10881_12742[(1)] = (10));


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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_10884 = [null,null,null,null,null,null,null,null];
(statearr_10884[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_10884[(1)] = (1));

return statearr_10884;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_10858){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_10858);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e10885){var ex__10552__auto__ = e10885;
var statearr_10886_12743 = state_10858;
(statearr_10886_12743[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_10858[(4)]))){
var statearr_10889_12744 = state_10858;
(statearr_10889_12744[(1)] = cljs.core.first((state_10858[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12745 = state_10858;
state_10858 = G__12745;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_10858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_10858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_10891 = f__10657__auto__();
(statearr_10891[(6)] = c__10656__auto___12716);

return statearr_10891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
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
var process = (function (p__10896){
var vec__10897 = p__10896;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10897,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10897,(1),null);
var job = vec__10897;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10656__auto___12746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_10906){
var state_val_10907 = (state_10906[(1)]);
if((state_val_10907 === (1))){
var state_10906__$1 = state_10906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10906__$1,(2),res,v);
} else {
if((state_val_10907 === (2))){
var inst_10903 = (state_10906[(2)]);
var inst_10904 = cljs.core.async.close_BANG_(res);
var state_10906__$1 = (function (){var statearr_10908 = state_10906;
(statearr_10908[(7)] = inst_10903);

return statearr_10908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10906__$1,inst_10904);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0 = (function (){
var statearr_10909 = [null,null,null,null,null,null,null,null];
(statearr_10909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__);

(statearr_10909[(1)] = (1));

return statearr_10909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1 = (function (state_10906){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_10906);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e10910){var ex__10552__auto__ = e10910;
var statearr_10911_12747 = state_10906;
(statearr_10911_12747[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_10906[(4)]))){
var statearr_10912_12748 = state_10906;
(statearr_10912_12748[(1)] = cljs.core.first((state_10906[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12749 = state_10906;
state_10906 = G__12749;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = function(state_10906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1.call(this,state_10906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_10913 = f__10657__auto__();
(statearr_10913[(6)] = c__10656__auto___12746);

return statearr_10913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__10914){
var vec__10915 = p__10914;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10915,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10915,(1),null);
var job = vec__10915;
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
var n__4613__auto___12750 = n;
var __12751 = (0);
while(true){
if((__12751 < n__4613__auto___12750)){
var G__10918_12752 = type;
var G__10918_12753__$1 = (((G__10918_12752 instanceof cljs.core.Keyword))?G__10918_12752.fqn:null);
switch (G__10918_12753__$1) {
case "compute":
var c__10656__auto___12755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12751,c__10656__auto___12755,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async){
return (function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = ((function (__12751,c__10656__auto___12755,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async){
return (function (state_10931){
var state_val_10932 = (state_10931[(1)]);
if((state_val_10932 === (1))){
var state_10931__$1 = state_10931;
var statearr_10933_12767 = state_10931__$1;
(statearr_10933_12767[(2)] = null);

(statearr_10933_12767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (2))){
var state_10931__$1 = state_10931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10931__$1,(4),jobs);
} else {
if((state_val_10932 === (3))){
var inst_10929 = (state_10931[(2)]);
var state_10931__$1 = state_10931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10931__$1,inst_10929);
} else {
if((state_val_10932 === (4))){
var inst_10921 = (state_10931[(2)]);
var inst_10922 = process(inst_10921);
var state_10931__$1 = state_10931;
if(cljs.core.truth_(inst_10922)){
var statearr_10934_12768 = state_10931__$1;
(statearr_10934_12768[(1)] = (5));

} else {
var statearr_10935_12769 = state_10931__$1;
(statearr_10935_12769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (5))){
var state_10931__$1 = state_10931;
var statearr_10936_12770 = state_10931__$1;
(statearr_10936_12770[(2)] = null);

(statearr_10936_12770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (6))){
var state_10931__$1 = state_10931;
var statearr_10939_12771 = state_10931__$1;
(statearr_10939_12771[(2)] = null);

(statearr_10939_12771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (7))){
var inst_10927 = (state_10931[(2)]);
var state_10931__$1 = state_10931;
var statearr_10941_12772 = state_10931__$1;
(statearr_10941_12772[(2)] = inst_10927);

(statearr_10941_12772[(1)] = (3));


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
});})(__12751,c__10656__auto___12755,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async))
;
return ((function (__12751,switch__10548__auto__,c__10656__auto___12755,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0 = (function (){
var statearr_10943 = [null,null,null,null,null,null,null];
(statearr_10943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__);

(statearr_10943[(1)] = (1));

return statearr_10943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1 = (function (state_10931){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_10931);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e10944){var ex__10552__auto__ = e10944;
var statearr_10945_12773 = state_10931;
(statearr_10945_12773[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_10931[(4)]))){
var statearr_10946_12774 = state_10931;
(statearr_10946_12774[(1)] = cljs.core.first((state_10931[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12775 = state_10931;
state_10931 = G__12775;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = function(state_10931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1.call(this,state_10931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__;
})()
;})(__12751,switch__10548__auto__,c__10656__auto___12755,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async))
})();
var state__10658__auto__ = (function (){var statearr_10947 = f__10657__auto__();
(statearr_10947[(6)] = c__10656__auto___12755);

return statearr_10947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
});})(__12751,c__10656__auto___12755,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async))
);


break;
case "async":
var c__10656__auto___12776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12751,c__10656__auto___12776,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async){
return (function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = ((function (__12751,c__10656__auto___12776,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async){
return (function (state_10964){
var state_val_10965 = (state_10964[(1)]);
if((state_val_10965 === (1))){
var state_10964__$1 = state_10964;
var statearr_10970_12777 = state_10964__$1;
(statearr_10970_12777[(2)] = null);

(statearr_10970_12777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (2))){
var state_10964__$1 = state_10964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10964__$1,(4),jobs);
} else {
if((state_val_10965 === (3))){
var inst_10958 = (state_10964[(2)]);
var state_10964__$1 = state_10964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10964__$1,inst_10958);
} else {
if((state_val_10965 === (4))){
var inst_10950 = (state_10964[(2)]);
var inst_10951 = async(inst_10950);
var state_10964__$1 = state_10964;
if(cljs.core.truth_(inst_10951)){
var statearr_10975_12778 = state_10964__$1;
(statearr_10975_12778[(1)] = (5));

} else {
var statearr_10976_12779 = state_10964__$1;
(statearr_10976_12779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (5))){
var state_10964__$1 = state_10964;
var statearr_10977_12780 = state_10964__$1;
(statearr_10977_12780[(2)] = null);

(statearr_10977_12780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (6))){
var state_10964__$1 = state_10964;
var statearr_10978_12790 = state_10964__$1;
(statearr_10978_12790[(2)] = null);

(statearr_10978_12790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (7))){
var inst_10956 = (state_10964[(2)]);
var state_10964__$1 = state_10964;
var statearr_10979_12791 = state_10964__$1;
(statearr_10979_12791[(2)] = inst_10956);

(statearr_10979_12791[(1)] = (3));


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
});})(__12751,c__10656__auto___12776,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async))
;
return ((function (__12751,switch__10548__auto__,c__10656__auto___12776,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0 = (function (){
var statearr_10980 = [null,null,null,null,null,null,null];
(statearr_10980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__);

(statearr_10980[(1)] = (1));

return statearr_10980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1 = (function (state_10964){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_10964);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e10981){var ex__10552__auto__ = e10981;
var statearr_10982_12796 = state_10964;
(statearr_10982_12796[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_10964[(4)]))){
var statearr_10983_12797 = state_10964;
(statearr_10983_12797[(1)] = cljs.core.first((state_10964[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12798 = state_10964;
state_10964 = G__12798;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = function(state_10964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1.call(this,state_10964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__;
})()
;})(__12751,switch__10548__auto__,c__10656__auto___12776,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async))
})();
var state__10658__auto__ = (function (){var statearr_10984 = f__10657__auto__();
(statearr_10984[(6)] = c__10656__auto___12776);

return statearr_10984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
});})(__12751,c__10656__auto___12776,G__10918_12752,G__10918_12753__$1,n__4613__auto___12750,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10918_12753__$1)].join('')));

}

var G__12799 = (__12751 + (1));
__12751 = G__12799;
continue;
} else {
}
break;
}

var c__10656__auto___12800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_11006){
var state_val_11007 = (state_11006[(1)]);
if((state_val_11007 === (7))){
var inst_11002 = (state_11006[(2)]);
var state_11006__$1 = state_11006;
var statearr_11012_12801 = state_11006__$1;
(statearr_11012_12801[(2)] = inst_11002);

(statearr_11012_12801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11007 === (1))){
var state_11006__$1 = state_11006;
var statearr_11013_12802 = state_11006__$1;
(statearr_11013_12802[(2)] = null);

(statearr_11013_12802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11007 === (4))){
var inst_10987 = (state_11006[(7)]);
var inst_10987__$1 = (state_11006[(2)]);
var inst_10988 = (inst_10987__$1 == null);
var state_11006__$1 = (function (){var statearr_11014 = state_11006;
(statearr_11014[(7)] = inst_10987__$1);

return statearr_11014;
})();
if(cljs.core.truth_(inst_10988)){
var statearr_11015_12803 = state_11006__$1;
(statearr_11015_12803[(1)] = (5));

} else {
var statearr_11016_12804 = state_11006__$1;
(statearr_11016_12804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11007 === (6))){
var inst_10987 = (state_11006[(7)]);
var inst_10992 = (state_11006[(8)]);
var inst_10992__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10993 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10994 = [inst_10987,inst_10992__$1];
var inst_10995 = (new cljs.core.PersistentVector(null,2,(5),inst_10993,inst_10994,null));
var state_11006__$1 = (function (){var statearr_11018 = state_11006;
(statearr_11018[(8)] = inst_10992__$1);

return statearr_11018;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11006__$1,(8),jobs,inst_10995);
} else {
if((state_val_11007 === (3))){
var inst_11004 = (state_11006[(2)]);
var state_11006__$1 = state_11006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11006__$1,inst_11004);
} else {
if((state_val_11007 === (2))){
var state_11006__$1 = state_11006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11006__$1,(4),from);
} else {
if((state_val_11007 === (9))){
var inst_10999 = (state_11006[(2)]);
var state_11006__$1 = (function (){var statearr_11022 = state_11006;
(statearr_11022[(9)] = inst_10999);

return statearr_11022;
})();
var statearr_11023_12806 = state_11006__$1;
(statearr_11023_12806[(2)] = null);

(statearr_11023_12806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11007 === (5))){
var inst_10990 = cljs.core.async.close_BANG_(jobs);
var state_11006__$1 = state_11006;
var statearr_11024_12818 = state_11006__$1;
(statearr_11024_12818[(2)] = inst_10990);

(statearr_11024_12818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11007 === (8))){
var inst_10992 = (state_11006[(8)]);
var inst_10997 = (state_11006[(2)]);
var state_11006__$1 = (function (){var statearr_11025 = state_11006;
(statearr_11025[(10)] = inst_10997);

return statearr_11025;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11006__$1,(9),results,inst_10992);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0 = (function (){
var statearr_11026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__);

(statearr_11026[(1)] = (1));

return statearr_11026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1 = (function (state_11006){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_11006);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e11027){var ex__10552__auto__ = e11027;
var statearr_11028_12822 = state_11006;
(statearr_11028_12822[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_11006[(4)]))){
var statearr_11029_12823 = state_11006;
(statearr_11029_12823[(1)] = cljs.core.first((state_11006[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12824 = state_11006;
state_11006 = G__12824;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = function(state_11006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1.call(this,state_11006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_11030 = f__10657__auto__();
(statearr_11030[(6)] = c__10656__auto___12800);

return statearr_11030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));


var c__10656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_11068){
var state_val_11069 = (state_11068[(1)]);
if((state_val_11069 === (7))){
var inst_11064 = (state_11068[(2)]);
var state_11068__$1 = state_11068;
var statearr_11070_12826 = state_11068__$1;
(statearr_11070_12826[(2)] = inst_11064);

(statearr_11070_12826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (20))){
var state_11068__$1 = state_11068;
var statearr_11071_12827 = state_11068__$1;
(statearr_11071_12827[(2)] = null);

(statearr_11071_12827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (1))){
var state_11068__$1 = state_11068;
var statearr_11072_12828 = state_11068__$1;
(statearr_11072_12828[(2)] = null);

(statearr_11072_12828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (4))){
var inst_11033 = (state_11068[(7)]);
var inst_11033__$1 = (state_11068[(2)]);
var inst_11034 = (inst_11033__$1 == null);
var state_11068__$1 = (function (){var statearr_11073 = state_11068;
(statearr_11073[(7)] = inst_11033__$1);

return statearr_11073;
})();
if(cljs.core.truth_(inst_11034)){
var statearr_11074_12829 = state_11068__$1;
(statearr_11074_12829[(1)] = (5));

} else {
var statearr_11075_12830 = state_11068__$1;
(statearr_11075_12830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (15))){
var inst_11046 = (state_11068[(8)]);
var state_11068__$1 = state_11068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11068__$1,(18),to,inst_11046);
} else {
if((state_val_11069 === (21))){
var inst_11059 = (state_11068[(2)]);
var state_11068__$1 = state_11068;
var statearr_11076_12833 = state_11068__$1;
(statearr_11076_12833[(2)] = inst_11059);

(statearr_11076_12833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (13))){
var inst_11061 = (state_11068[(2)]);
var state_11068__$1 = (function (){var statearr_11077 = state_11068;
(statearr_11077[(9)] = inst_11061);

return statearr_11077;
})();
var statearr_11078_12834 = state_11068__$1;
(statearr_11078_12834[(2)] = null);

(statearr_11078_12834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (6))){
var inst_11033 = (state_11068[(7)]);
var state_11068__$1 = state_11068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11068__$1,(11),inst_11033);
} else {
if((state_val_11069 === (17))){
var inst_11054 = (state_11068[(2)]);
var state_11068__$1 = state_11068;
if(cljs.core.truth_(inst_11054)){
var statearr_11079_12850 = state_11068__$1;
(statearr_11079_12850[(1)] = (19));

} else {
var statearr_11080_12851 = state_11068__$1;
(statearr_11080_12851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (3))){
var inst_11066 = (state_11068[(2)]);
var state_11068__$1 = state_11068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11068__$1,inst_11066);
} else {
if((state_val_11069 === (12))){
var inst_11043 = (state_11068[(10)]);
var state_11068__$1 = state_11068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11068__$1,(14),inst_11043);
} else {
if((state_val_11069 === (2))){
var state_11068__$1 = state_11068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11068__$1,(4),results);
} else {
if((state_val_11069 === (19))){
var state_11068__$1 = state_11068;
var statearr_11081_12852 = state_11068__$1;
(statearr_11081_12852[(2)] = null);

(statearr_11081_12852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (11))){
var inst_11043 = (state_11068[(2)]);
var state_11068__$1 = (function (){var statearr_11082 = state_11068;
(statearr_11082[(10)] = inst_11043);

return statearr_11082;
})();
var statearr_11083_12853 = state_11068__$1;
(statearr_11083_12853[(2)] = null);

(statearr_11083_12853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (9))){
var state_11068__$1 = state_11068;
var statearr_11084_12854 = state_11068__$1;
(statearr_11084_12854[(2)] = null);

(statearr_11084_12854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (5))){
var state_11068__$1 = state_11068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11085_12855 = state_11068__$1;
(statearr_11085_12855[(1)] = (8));

} else {
var statearr_11086_12856 = state_11068__$1;
(statearr_11086_12856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (14))){
var inst_11046 = (state_11068[(8)]);
var inst_11046__$1 = (state_11068[(2)]);
var inst_11047 = (inst_11046__$1 == null);
var inst_11048 = cljs.core.not(inst_11047);
var state_11068__$1 = (function (){var statearr_11090 = state_11068;
(statearr_11090[(8)] = inst_11046__$1);

return statearr_11090;
})();
if(inst_11048){
var statearr_11092_12857 = state_11068__$1;
(statearr_11092_12857[(1)] = (15));

} else {
var statearr_11093_12858 = state_11068__$1;
(statearr_11093_12858[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (16))){
var state_11068__$1 = state_11068;
var statearr_11094_12863 = state_11068__$1;
(statearr_11094_12863[(2)] = false);

(statearr_11094_12863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (10))){
var inst_11040 = (state_11068[(2)]);
var state_11068__$1 = state_11068;
var statearr_11095_12864 = state_11068__$1;
(statearr_11095_12864[(2)] = inst_11040);

(statearr_11095_12864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (18))){
var inst_11051 = (state_11068[(2)]);
var state_11068__$1 = state_11068;
var statearr_11096_12865 = state_11068__$1;
(statearr_11096_12865[(2)] = inst_11051);

(statearr_11096_12865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (8))){
var inst_11037 = cljs.core.async.close_BANG_(to);
var state_11068__$1 = state_11068;
var statearr_11097_12866 = state_11068__$1;
(statearr_11097_12866[(2)] = inst_11037);

(statearr_11097_12866[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0 = (function (){
var statearr_11098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__);

(statearr_11098[(1)] = (1));

return statearr_11098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1 = (function (state_11068){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_11068);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e11099){var ex__10552__auto__ = e11099;
var statearr_11100_12867 = state_11068;
(statearr_11100_12867[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_11068[(4)]))){
var statearr_11101_12868 = state_11068;
(statearr_11101_12868[(1)] = cljs.core.first((state_11068[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12869 = state_11068;
state_11068 = G__12869;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__ = function(state_11068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1.call(this,state_11068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_11102 = f__10657__auto__();
(statearr_11102[(6)] = c__10656__auto__);

return statearr_11102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));

return c__10656__auto__;
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
var G__11104 = arguments.length;
switch (G__11104) {
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
var G__11107 = arguments.length;
switch (G__11107) {
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
var G__11109 = arguments.length;
switch (G__11109) {
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
var c__10656__auto___12875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_11135){
var state_val_11136 = (state_11135[(1)]);
if((state_val_11136 === (7))){
var inst_11131 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11138_12876 = state_11135__$1;
(statearr_11138_12876[(2)] = inst_11131);

(statearr_11138_12876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (1))){
var state_11135__$1 = state_11135;
var statearr_11139_12877 = state_11135__$1;
(statearr_11139_12877[(2)] = null);

(statearr_11139_12877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (4))){
var inst_11112 = (state_11135[(7)]);
var inst_11112__$1 = (state_11135[(2)]);
var inst_11113 = (inst_11112__$1 == null);
var state_11135__$1 = (function (){var statearr_11141 = state_11135;
(statearr_11141[(7)] = inst_11112__$1);

return statearr_11141;
})();
if(cljs.core.truth_(inst_11113)){
var statearr_11143_12878 = state_11135__$1;
(statearr_11143_12878[(1)] = (5));

} else {
var statearr_11145_12879 = state_11135__$1;
(statearr_11145_12879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (13))){
var state_11135__$1 = state_11135;
var statearr_11147_12880 = state_11135__$1;
(statearr_11147_12880[(2)] = null);

(statearr_11147_12880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (6))){
var inst_11112 = (state_11135[(7)]);
var inst_11118 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11112) : p.call(null,inst_11112));
var state_11135__$1 = state_11135;
if(cljs.core.truth_(inst_11118)){
var statearr_11149_12881 = state_11135__$1;
(statearr_11149_12881[(1)] = (9));

} else {
var statearr_11150_12882 = state_11135__$1;
(statearr_11150_12882[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (3))){
var inst_11133 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11135__$1,inst_11133);
} else {
if((state_val_11136 === (12))){
var state_11135__$1 = state_11135;
var statearr_11154_12883 = state_11135__$1;
(statearr_11154_12883[(2)] = null);

(statearr_11154_12883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (2))){
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11135__$1,(4),ch);
} else {
if((state_val_11136 === (11))){
var inst_11112 = (state_11135[(7)]);
var inst_11122 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11135__$1,(8),inst_11122,inst_11112);
} else {
if((state_val_11136 === (9))){
var state_11135__$1 = state_11135;
var statearr_11155_12884 = state_11135__$1;
(statearr_11155_12884[(2)] = tc);

(statearr_11155_12884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (5))){
var inst_11115 = cljs.core.async.close_BANG_(tc);
var inst_11116 = cljs.core.async.close_BANG_(fc);
var state_11135__$1 = (function (){var statearr_11156 = state_11135;
(statearr_11156[(8)] = inst_11115);

return statearr_11156;
})();
var statearr_11167_12885 = state_11135__$1;
(statearr_11167_12885[(2)] = inst_11116);

(statearr_11167_12885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (14))){
var inst_11129 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11168_12886 = state_11135__$1;
(statearr_11168_12886[(2)] = inst_11129);

(statearr_11168_12886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (10))){
var state_11135__$1 = state_11135;
var statearr_11169_12887 = state_11135__$1;
(statearr_11169_12887[(2)] = fc);

(statearr_11169_12887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (8))){
var inst_11124 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
if(cljs.core.truth_(inst_11124)){
var statearr_11170_12888 = state_11135__$1;
(statearr_11170_12888[(1)] = (12));

} else {
var statearr_11171_12889 = state_11135__$1;
(statearr_11171_12889[(1)] = (13));

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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_11172 = [null,null,null,null,null,null,null,null,null];
(statearr_11172[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_11172[(1)] = (1));

return statearr_11172;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_11135){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_11135);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e11174){var ex__10552__auto__ = e11174;
var statearr_11175_12890 = state_11135;
(statearr_11175_12890[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_11135[(4)]))){
var statearr_11176_12891 = state_11135;
(statearr_11176_12891[(1)] = cljs.core.first((state_11135[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12892 = state_11135;
state_11135 = G__12892;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_11135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_11135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_11179 = f__10657__auto__();
(statearr_11179[(6)] = c__10656__auto___12875);

return statearr_11179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
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
var c__10656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_11205){
var state_val_11206 = (state_11205[(1)]);
if((state_val_11206 === (7))){
var inst_11200 = (state_11205[(2)]);
var state_11205__$1 = state_11205;
var statearr_11220_12893 = state_11205__$1;
(statearr_11220_12893[(2)] = inst_11200);

(statearr_11220_12893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (1))){
var inst_11182 = init;
var inst_11183 = inst_11182;
var state_11205__$1 = (function (){var statearr_11223 = state_11205;
(statearr_11223[(7)] = inst_11183);

return statearr_11223;
})();
var statearr_11224_12894 = state_11205__$1;
(statearr_11224_12894[(2)] = null);

(statearr_11224_12894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (4))){
var inst_11186 = (state_11205[(8)]);
var inst_11186__$1 = (state_11205[(2)]);
var inst_11187 = (inst_11186__$1 == null);
var state_11205__$1 = (function (){var statearr_11227 = state_11205;
(statearr_11227[(8)] = inst_11186__$1);

return statearr_11227;
})();
if(cljs.core.truth_(inst_11187)){
var statearr_11228_12895 = state_11205__$1;
(statearr_11228_12895[(1)] = (5));

} else {
var statearr_11229_12896 = state_11205__$1;
(statearr_11229_12896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (6))){
var inst_11186 = (state_11205[(8)]);
var inst_11183 = (state_11205[(7)]);
var inst_11191 = (state_11205[(9)]);
var inst_11191__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11183,inst_11186) : f.call(null,inst_11183,inst_11186));
var inst_11192 = cljs.core.reduced_QMARK_(inst_11191__$1);
var state_11205__$1 = (function (){var statearr_11230 = state_11205;
(statearr_11230[(9)] = inst_11191__$1);

return statearr_11230;
})();
if(inst_11192){
var statearr_11231_12897 = state_11205__$1;
(statearr_11231_12897[(1)] = (8));

} else {
var statearr_11232_12898 = state_11205__$1;
(statearr_11232_12898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (3))){
var inst_11202 = (state_11205[(2)]);
var state_11205__$1 = state_11205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11205__$1,inst_11202);
} else {
if((state_val_11206 === (2))){
var state_11205__$1 = state_11205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11205__$1,(4),ch);
} else {
if((state_val_11206 === (9))){
var inst_11191 = (state_11205[(9)]);
var inst_11183 = inst_11191;
var state_11205__$1 = (function (){var statearr_11235 = state_11205;
(statearr_11235[(7)] = inst_11183);

return statearr_11235;
})();
var statearr_11237_12901 = state_11205__$1;
(statearr_11237_12901[(2)] = null);

(statearr_11237_12901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (5))){
var inst_11183 = (state_11205[(7)]);
var state_11205__$1 = state_11205;
var statearr_11240_12902 = state_11205__$1;
(statearr_11240_12902[(2)] = inst_11183);

(statearr_11240_12902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (10))){
var inst_11198 = (state_11205[(2)]);
var state_11205__$1 = state_11205;
var statearr_11241_12903 = state_11205__$1;
(statearr_11241_12903[(2)] = inst_11198);

(statearr_11241_12903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (8))){
var inst_11191 = (state_11205[(9)]);
var inst_11194 = cljs.core.deref(inst_11191);
var state_11205__$1 = state_11205;
var statearr_11242_12904 = state_11205__$1;
(statearr_11242_12904[(2)] = inst_11194);

(statearr_11242_12904[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10549__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10549__auto____0 = (function (){
var statearr_11244 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11244[(0)] = cljs$core$async$reduce_$_state_machine__10549__auto__);

(statearr_11244[(1)] = (1));

return statearr_11244;
});
var cljs$core$async$reduce_$_state_machine__10549__auto____1 = (function (state_11205){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_11205);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e11245){var ex__10552__auto__ = e11245;
var statearr_11247_12905 = state_11205;
(statearr_11247_12905[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_11205[(4)]))){
var statearr_11249_12906 = state_11205;
(statearr_11249_12906[(1)] = cljs.core.first((state_11205[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12907 = state_11205;
state_11205 = G__12907;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10549__auto__ = function(state_11205){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10549__auto____1.call(this,state_11205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10549__auto____0;
cljs$core$async$reduce_$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10549__auto____1;
return cljs$core$async$reduce_$_state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_11252 = f__10657__auto__();
(statearr_11252[(6)] = c__10656__auto__);

return statearr_11252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));

return c__10656__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_11261){
var state_val_11262 = (state_11261[(1)]);
if((state_val_11262 === (1))){
var inst_11254 = cljs.core.async.reduce(f__$1,init,ch);
var state_11261__$1 = state_11261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11261__$1,(2),inst_11254);
} else {
if((state_val_11262 === (2))){
var inst_11257 = (state_11261[(2)]);
var inst_11259 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11257) : f__$1.call(null,inst_11257));
var state_11261__$1 = state_11261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11261__$1,inst_11259);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10549__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10549__auto____0 = (function (){
var statearr_11266 = [null,null,null,null,null,null,null];
(statearr_11266[(0)] = cljs$core$async$transduce_$_state_machine__10549__auto__);

(statearr_11266[(1)] = (1));

return statearr_11266;
});
var cljs$core$async$transduce_$_state_machine__10549__auto____1 = (function (state_11261){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_11261);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e11274){var ex__10552__auto__ = e11274;
var statearr_11275_12908 = state_11261;
(statearr_11275_12908[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_11261[(4)]))){
var statearr_11277_12909 = state_11261;
(statearr_11277_12909[(1)] = cljs.core.first((state_11261[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12910 = state_11261;
state_11261 = G__12910;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10549__auto__ = function(state_11261){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10549__auto____1.call(this,state_11261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10549__auto____0;
cljs$core$async$transduce_$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10549__auto____1;
return cljs$core$async$transduce_$_state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_11279 = f__10657__auto__();
(statearr_11279[(6)] = c__10656__auto__);

return statearr_11279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));

return c__10656__auto__;
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
var G__11294 = arguments.length;
switch (G__11294) {
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
var c__10656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_11323){
var state_val_11324 = (state_11323[(1)]);
if((state_val_11324 === (7))){
var inst_11305 = (state_11323[(2)]);
var state_11323__$1 = state_11323;
var statearr_11325_12916 = state_11323__$1;
(statearr_11325_12916[(2)] = inst_11305);

(statearr_11325_12916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (1))){
var inst_11295 = cljs.core.seq(coll);
var inst_11296 = inst_11295;
var state_11323__$1 = (function (){var statearr_11326 = state_11323;
(statearr_11326[(7)] = inst_11296);

return statearr_11326;
})();
var statearr_11327_12917 = state_11323__$1;
(statearr_11327_12917[(2)] = null);

(statearr_11327_12917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (4))){
var inst_11296 = (state_11323[(7)]);
var inst_11303 = cljs.core.first(inst_11296);
var state_11323__$1 = state_11323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11323__$1,(7),ch,inst_11303);
} else {
if((state_val_11324 === (13))){
var inst_11317 = (state_11323[(2)]);
var state_11323__$1 = state_11323;
var statearr_11329_12918 = state_11323__$1;
(statearr_11329_12918[(2)] = inst_11317);

(statearr_11329_12918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (6))){
var inst_11308 = (state_11323[(2)]);
var state_11323__$1 = state_11323;
if(cljs.core.truth_(inst_11308)){
var statearr_11330_12919 = state_11323__$1;
(statearr_11330_12919[(1)] = (8));

} else {
var statearr_11331_12920 = state_11323__$1;
(statearr_11331_12920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (3))){
var inst_11321 = (state_11323[(2)]);
var state_11323__$1 = state_11323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11323__$1,inst_11321);
} else {
if((state_val_11324 === (12))){
var state_11323__$1 = state_11323;
var statearr_11333_12921 = state_11323__$1;
(statearr_11333_12921[(2)] = null);

(statearr_11333_12921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (2))){
var inst_11296 = (state_11323[(7)]);
var state_11323__$1 = state_11323;
if(cljs.core.truth_(inst_11296)){
var statearr_11334_12925 = state_11323__$1;
(statearr_11334_12925[(1)] = (4));

} else {
var statearr_11335_12926 = state_11323__$1;
(statearr_11335_12926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (11))){
var inst_11314 = cljs.core.async.close_BANG_(ch);
var state_11323__$1 = state_11323;
var statearr_11336_12927 = state_11323__$1;
(statearr_11336_12927[(2)] = inst_11314);

(statearr_11336_12927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (9))){
var state_11323__$1 = state_11323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11337_12928 = state_11323__$1;
(statearr_11337_12928[(1)] = (11));

} else {
var statearr_11338_12929 = state_11323__$1;
(statearr_11338_12929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (5))){
var inst_11296 = (state_11323[(7)]);
var state_11323__$1 = state_11323;
var statearr_11339_12930 = state_11323__$1;
(statearr_11339_12930[(2)] = inst_11296);

(statearr_11339_12930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (10))){
var inst_11319 = (state_11323[(2)]);
var state_11323__$1 = state_11323;
var statearr_11348_12931 = state_11323__$1;
(statearr_11348_12931[(2)] = inst_11319);

(statearr_11348_12931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11324 === (8))){
var inst_11296 = (state_11323[(7)]);
var inst_11310 = cljs.core.next(inst_11296);
var inst_11296__$1 = inst_11310;
var state_11323__$1 = (function (){var statearr_11353 = state_11323;
(statearr_11353[(7)] = inst_11296__$1);

return statearr_11353;
})();
var statearr_11354_12933 = state_11323__$1;
(statearr_11354_12933[(2)] = null);

(statearr_11354_12933[(1)] = (2));


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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_11355 = [null,null,null,null,null,null,null,null];
(statearr_11355[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_11355[(1)] = (1));

return statearr_11355;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_11323){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_11323);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e11356){var ex__10552__auto__ = e11356;
var statearr_11357_12934 = state_11323;
(statearr_11357_12934[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_11323[(4)]))){
var statearr_11358_12935 = state_11323;
(statearr_11358_12935[(1)] = cljs.core.first((state_11323[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12940 = state_11323;
state_11323 = G__12940;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_11323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_11323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_11362 = f__10657__auto__();
(statearr_11362[(6)] = c__10656__auto__);

return statearr_11362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));

return c__10656__auto__;
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
var G__11365 = arguments.length;
switch (G__11365) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12942 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12942(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12944 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12944(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12948 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12948(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12952 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12952(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11385 = (function (ch,cs,meta11386){
this.ch = ch;
this.cs = cs;
this.meta11386 = meta11386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11387,meta11386__$1){
var self__ = this;
var _11387__$1 = this;
return (new cljs.core.async.t_cljs$core$async11385(self__.ch,self__.cs,meta11386__$1));
}));

(cljs.core.async.t_cljs$core$async11385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11387){
var self__ = this;
var _11387__$1 = this;
return self__.meta11386;
}));

(cljs.core.async.t_cljs$core$async11385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11385.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11385.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11385.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11385.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11386","meta11386",-226896391,null)], null);
}));

(cljs.core.async.t_cljs$core$async11385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11385");

(cljs.core.async.t_cljs$core$async11385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11385.
 */
cljs.core.async.__GT_t_cljs$core$async11385 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11385(ch__$1,cs__$1,meta11386){
return (new cljs.core.async.t_cljs$core$async11385(ch__$1,cs__$1,meta11386));
});

}

return (new cljs.core.async.t_cljs$core$async11385(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10656__auto___12959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_11531){
var state_val_11532 = (state_11531[(1)]);
if((state_val_11532 === (7))){
var inst_11527 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
var statearr_11537_12961 = state_11531__$1;
(statearr_11537_12961[(2)] = inst_11527);

(statearr_11537_12961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (20))){
var inst_11428 = (state_11531[(7)]);
var inst_11440 = cljs.core.first(inst_11428);
var inst_11441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11440,(0),null);
var inst_11442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11440,(1),null);
var state_11531__$1 = (function (){var statearr_11538 = state_11531;
(statearr_11538[(8)] = inst_11441);

return statearr_11538;
})();
if(cljs.core.truth_(inst_11442)){
var statearr_11539_12964 = state_11531__$1;
(statearr_11539_12964[(1)] = (22));

} else {
var statearr_11540_12965 = state_11531__$1;
(statearr_11540_12965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (27))){
var inst_11472 = (state_11531[(9)]);
var inst_11470 = (state_11531[(10)]);
var inst_11477 = (state_11531[(11)]);
var inst_11397 = (state_11531[(12)]);
var inst_11477__$1 = cljs.core._nth(inst_11470,inst_11472);
var inst_11478 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11477__$1,inst_11397,done);
var state_11531__$1 = (function (){var statearr_11541 = state_11531;
(statearr_11541[(11)] = inst_11477__$1);

return statearr_11541;
})();
if(cljs.core.truth_(inst_11478)){
var statearr_11542_12968 = state_11531__$1;
(statearr_11542_12968[(1)] = (30));

} else {
var statearr_11543_12970 = state_11531__$1;
(statearr_11543_12970[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (1))){
var state_11531__$1 = state_11531;
var statearr_11544_12971 = state_11531__$1;
(statearr_11544_12971[(2)] = null);

(statearr_11544_12971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (24))){
var inst_11428 = (state_11531[(7)]);
var inst_11447 = (state_11531[(2)]);
var inst_11448 = cljs.core.next(inst_11428);
var inst_11406 = inst_11448;
var inst_11407 = null;
var inst_11408 = (0);
var inst_11409 = (0);
var state_11531__$1 = (function (){var statearr_11545 = state_11531;
(statearr_11545[(13)] = inst_11447);

(statearr_11545[(14)] = inst_11406);

(statearr_11545[(15)] = inst_11407);

(statearr_11545[(16)] = inst_11408);

(statearr_11545[(17)] = inst_11409);

return statearr_11545;
})();
var statearr_11546_12972 = state_11531__$1;
(statearr_11546_12972[(2)] = null);

(statearr_11546_12972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (39))){
var state_11531__$1 = state_11531;
var statearr_11550_12974 = state_11531__$1;
(statearr_11550_12974[(2)] = null);

(statearr_11550_12974[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (4))){
var inst_11397 = (state_11531[(12)]);
var inst_11397__$1 = (state_11531[(2)]);
var inst_11398 = (inst_11397__$1 == null);
var state_11531__$1 = (function (){var statearr_11551 = state_11531;
(statearr_11551[(12)] = inst_11397__$1);

return statearr_11551;
})();
if(cljs.core.truth_(inst_11398)){
var statearr_11552_12977 = state_11531__$1;
(statearr_11552_12977[(1)] = (5));

} else {
var statearr_11553_12982 = state_11531__$1;
(statearr_11553_12982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (15))){
var inst_11406 = (state_11531[(14)]);
var inst_11407 = (state_11531[(15)]);
var inst_11408 = (state_11531[(16)]);
var inst_11409 = (state_11531[(17)]);
var inst_11424 = (state_11531[(2)]);
var inst_11425 = (inst_11409 + (1));
var tmp11547 = inst_11406;
var tmp11548 = inst_11407;
var tmp11549 = inst_11408;
var inst_11406__$1 = tmp11547;
var inst_11407__$1 = tmp11548;
var inst_11408__$1 = tmp11549;
var inst_11409__$1 = inst_11425;
var state_11531__$1 = (function (){var statearr_11554 = state_11531;
(statearr_11554[(14)] = inst_11406__$1);

(statearr_11554[(18)] = inst_11424);

(statearr_11554[(15)] = inst_11407__$1);

(statearr_11554[(16)] = inst_11408__$1);

(statearr_11554[(17)] = inst_11409__$1);

return statearr_11554;
})();
var statearr_11555_12986 = state_11531__$1;
(statearr_11555_12986[(2)] = null);

(statearr_11555_12986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (21))){
var inst_11451 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
var statearr_11559_12987 = state_11531__$1;
(statearr_11559_12987[(2)] = inst_11451);

(statearr_11559_12987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (31))){
var inst_11477 = (state_11531[(11)]);
var inst_11481 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11477);
var state_11531__$1 = state_11531;
var statearr_11560_12988 = state_11531__$1;
(statearr_11560_12988[(2)] = inst_11481);

(statearr_11560_12988[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (32))){
var inst_11469 = (state_11531[(19)]);
var inst_11472 = (state_11531[(9)]);
var inst_11471 = (state_11531[(20)]);
var inst_11470 = (state_11531[(10)]);
var inst_11483 = (state_11531[(2)]);
var inst_11484 = (inst_11472 + (1));
var tmp11556 = inst_11469;
var tmp11557 = inst_11471;
var tmp11558 = inst_11470;
var inst_11469__$1 = tmp11556;
var inst_11470__$1 = tmp11558;
var inst_11471__$1 = tmp11557;
var inst_11472__$1 = inst_11484;
var state_11531__$1 = (function (){var statearr_11561 = state_11531;
(statearr_11561[(19)] = inst_11469__$1);

(statearr_11561[(9)] = inst_11472__$1);

(statearr_11561[(20)] = inst_11471__$1);

(statearr_11561[(21)] = inst_11483);

(statearr_11561[(10)] = inst_11470__$1);

return statearr_11561;
})();
var statearr_11562_12989 = state_11531__$1;
(statearr_11562_12989[(2)] = null);

(statearr_11562_12989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (40))){
var inst_11500 = (state_11531[(22)]);
var inst_11504 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11500);
var state_11531__$1 = state_11531;
var statearr_11563_12990 = state_11531__$1;
(statearr_11563_12990[(2)] = inst_11504);

(statearr_11563_12990[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (33))){
var inst_11487 = (state_11531[(23)]);
var inst_11493 = cljs.core.chunked_seq_QMARK_(inst_11487);
var state_11531__$1 = state_11531;
if(inst_11493){
var statearr_11566_12991 = state_11531__$1;
(statearr_11566_12991[(1)] = (36));

} else {
var statearr_11567_12992 = state_11531__$1;
(statearr_11567_12992[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (13))){
var inst_11418 = (state_11531[(24)]);
var inst_11421 = cljs.core.async.close_BANG_(inst_11418);
var state_11531__$1 = state_11531;
var statearr_11568_12993 = state_11531__$1;
(statearr_11568_12993[(2)] = inst_11421);

(statearr_11568_12993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (22))){
var inst_11441 = (state_11531[(8)]);
var inst_11444 = cljs.core.async.close_BANG_(inst_11441);
var state_11531__$1 = state_11531;
var statearr_11569_12994 = state_11531__$1;
(statearr_11569_12994[(2)] = inst_11444);

(statearr_11569_12994[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (36))){
var inst_11487 = (state_11531[(23)]);
var inst_11495 = cljs.core.chunk_first(inst_11487);
var inst_11496 = cljs.core.chunk_rest(inst_11487);
var inst_11497 = cljs.core.count(inst_11495);
var inst_11469 = inst_11496;
var inst_11470 = inst_11495;
var inst_11471 = inst_11497;
var inst_11472 = (0);
var state_11531__$1 = (function (){var statearr_11570 = state_11531;
(statearr_11570[(19)] = inst_11469);

(statearr_11570[(9)] = inst_11472);

(statearr_11570[(20)] = inst_11471);

(statearr_11570[(10)] = inst_11470);

return statearr_11570;
})();
var statearr_11571_12995 = state_11531__$1;
(statearr_11571_12995[(2)] = null);

(statearr_11571_12995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (41))){
var inst_11487 = (state_11531[(23)]);
var inst_11506 = (state_11531[(2)]);
var inst_11507 = cljs.core.next(inst_11487);
var inst_11469 = inst_11507;
var inst_11470 = null;
var inst_11471 = (0);
var inst_11472 = (0);
var state_11531__$1 = (function (){var statearr_11572 = state_11531;
(statearr_11572[(19)] = inst_11469);

(statearr_11572[(9)] = inst_11472);

(statearr_11572[(20)] = inst_11471);

(statearr_11572[(10)] = inst_11470);

(statearr_11572[(25)] = inst_11506);

return statearr_11572;
})();
var statearr_11573_12996 = state_11531__$1;
(statearr_11573_12996[(2)] = null);

(statearr_11573_12996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (43))){
var state_11531__$1 = state_11531;
var statearr_11574_12997 = state_11531__$1;
(statearr_11574_12997[(2)] = null);

(statearr_11574_12997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (29))){
var inst_11515 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
var statearr_11575_12998 = state_11531__$1;
(statearr_11575_12998[(2)] = inst_11515);

(statearr_11575_12998[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (44))){
var inst_11524 = (state_11531[(2)]);
var state_11531__$1 = (function (){var statearr_11576 = state_11531;
(statearr_11576[(26)] = inst_11524);

return statearr_11576;
})();
var statearr_11577_12999 = state_11531__$1;
(statearr_11577_12999[(2)] = null);

(statearr_11577_12999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (6))){
var inst_11461 = (state_11531[(27)]);
var inst_11460 = cljs.core.deref(cs);
var inst_11461__$1 = cljs.core.keys(inst_11460);
var inst_11462 = cljs.core.count(inst_11461__$1);
var inst_11463 = cljs.core.reset_BANG_(dctr,inst_11462);
var inst_11468 = cljs.core.seq(inst_11461__$1);
var inst_11469 = inst_11468;
var inst_11470 = null;
var inst_11471 = (0);
var inst_11472 = (0);
var state_11531__$1 = (function (){var statearr_11579 = state_11531;
(statearr_11579[(19)] = inst_11469);

(statearr_11579[(9)] = inst_11472);

(statearr_11579[(20)] = inst_11471);

(statearr_11579[(10)] = inst_11470);

(statearr_11579[(28)] = inst_11463);

(statearr_11579[(27)] = inst_11461__$1);

return statearr_11579;
})();
var statearr_11580_13000 = state_11531__$1;
(statearr_11580_13000[(2)] = null);

(statearr_11580_13000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (28))){
var inst_11469 = (state_11531[(19)]);
var inst_11487 = (state_11531[(23)]);
var inst_11487__$1 = cljs.core.seq(inst_11469);
var state_11531__$1 = (function (){var statearr_11581 = state_11531;
(statearr_11581[(23)] = inst_11487__$1);

return statearr_11581;
})();
if(inst_11487__$1){
var statearr_11582_13009 = state_11531__$1;
(statearr_11582_13009[(1)] = (33));

} else {
var statearr_11583_13010 = state_11531__$1;
(statearr_11583_13010[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (25))){
var inst_11472 = (state_11531[(9)]);
var inst_11471 = (state_11531[(20)]);
var inst_11474 = (inst_11472 < inst_11471);
var inst_11475 = inst_11474;
var state_11531__$1 = state_11531;
if(cljs.core.truth_(inst_11475)){
var statearr_11584_13013 = state_11531__$1;
(statearr_11584_13013[(1)] = (27));

} else {
var statearr_11585_13016 = state_11531__$1;
(statearr_11585_13016[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (34))){
var state_11531__$1 = state_11531;
var statearr_11595_13018 = state_11531__$1;
(statearr_11595_13018[(2)] = null);

(statearr_11595_13018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (17))){
var state_11531__$1 = state_11531;
var statearr_11596_13019 = state_11531__$1;
(statearr_11596_13019[(2)] = null);

(statearr_11596_13019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (3))){
var inst_11529 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11531__$1,inst_11529);
} else {
if((state_val_11532 === (12))){
var inst_11456 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
var statearr_11597_13024 = state_11531__$1;
(statearr_11597_13024[(2)] = inst_11456);

(statearr_11597_13024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (2))){
var state_11531__$1 = state_11531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11531__$1,(4),ch);
} else {
if((state_val_11532 === (23))){
var state_11531__$1 = state_11531;
var statearr_11598_13029 = state_11531__$1;
(statearr_11598_13029[(2)] = null);

(statearr_11598_13029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (35))){
var inst_11513 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
var statearr_11599_13034 = state_11531__$1;
(statearr_11599_13034[(2)] = inst_11513);

(statearr_11599_13034[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (19))){
var inst_11428 = (state_11531[(7)]);
var inst_11432 = cljs.core.chunk_first(inst_11428);
var inst_11433 = cljs.core.chunk_rest(inst_11428);
var inst_11434 = cljs.core.count(inst_11432);
var inst_11406 = inst_11433;
var inst_11407 = inst_11432;
var inst_11408 = inst_11434;
var inst_11409 = (0);
var state_11531__$1 = (function (){var statearr_11600 = state_11531;
(statearr_11600[(14)] = inst_11406);

(statearr_11600[(15)] = inst_11407);

(statearr_11600[(16)] = inst_11408);

(statearr_11600[(17)] = inst_11409);

return statearr_11600;
})();
var statearr_11601_13035 = state_11531__$1;
(statearr_11601_13035[(2)] = null);

(statearr_11601_13035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (11))){
var inst_11406 = (state_11531[(14)]);
var inst_11428 = (state_11531[(7)]);
var inst_11428__$1 = cljs.core.seq(inst_11406);
var state_11531__$1 = (function (){var statearr_11602 = state_11531;
(statearr_11602[(7)] = inst_11428__$1);

return statearr_11602;
})();
if(inst_11428__$1){
var statearr_11603_13036 = state_11531__$1;
(statearr_11603_13036[(1)] = (16));

} else {
var statearr_11604_13037 = state_11531__$1;
(statearr_11604_13037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (9))){
var inst_11458 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
var statearr_11605_13038 = state_11531__$1;
(statearr_11605_13038[(2)] = inst_11458);

(statearr_11605_13038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (5))){
var inst_11404 = cljs.core.deref(cs);
var inst_11405 = cljs.core.seq(inst_11404);
var inst_11406 = inst_11405;
var inst_11407 = null;
var inst_11408 = (0);
var inst_11409 = (0);
var state_11531__$1 = (function (){var statearr_11606 = state_11531;
(statearr_11606[(14)] = inst_11406);

(statearr_11606[(15)] = inst_11407);

(statearr_11606[(16)] = inst_11408);

(statearr_11606[(17)] = inst_11409);

return statearr_11606;
})();
var statearr_11607_13039 = state_11531__$1;
(statearr_11607_13039[(2)] = null);

(statearr_11607_13039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (14))){
var state_11531__$1 = state_11531;
var statearr_11608_13040 = state_11531__$1;
(statearr_11608_13040[(2)] = null);

(statearr_11608_13040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (45))){
var inst_11521 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
var statearr_11609_13041 = state_11531__$1;
(statearr_11609_13041[(2)] = inst_11521);

(statearr_11609_13041[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (26))){
var inst_11461 = (state_11531[(27)]);
var inst_11517 = (state_11531[(2)]);
var inst_11518 = cljs.core.seq(inst_11461);
var state_11531__$1 = (function (){var statearr_11610 = state_11531;
(statearr_11610[(29)] = inst_11517);

return statearr_11610;
})();
if(inst_11518){
var statearr_11611_13042 = state_11531__$1;
(statearr_11611_13042[(1)] = (42));

} else {
var statearr_11612_13043 = state_11531__$1;
(statearr_11612_13043[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (16))){
var inst_11428 = (state_11531[(7)]);
var inst_11430 = cljs.core.chunked_seq_QMARK_(inst_11428);
var state_11531__$1 = state_11531;
if(inst_11430){
var statearr_11613_13044 = state_11531__$1;
(statearr_11613_13044[(1)] = (19));

} else {
var statearr_11614_13045 = state_11531__$1;
(statearr_11614_13045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (38))){
var inst_11510 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
var statearr_11615_13046 = state_11531__$1;
(statearr_11615_13046[(2)] = inst_11510);

(statearr_11615_13046[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (30))){
var state_11531__$1 = state_11531;
var statearr_11616_13047 = state_11531__$1;
(statearr_11616_13047[(2)] = null);

(statearr_11616_13047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (10))){
var inst_11407 = (state_11531[(15)]);
var inst_11409 = (state_11531[(17)]);
var inst_11417 = cljs.core._nth(inst_11407,inst_11409);
var inst_11418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11417,(0),null);
var inst_11419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11417,(1),null);
var state_11531__$1 = (function (){var statearr_11617 = state_11531;
(statearr_11617[(24)] = inst_11418);

return statearr_11617;
})();
if(cljs.core.truth_(inst_11419)){
var statearr_11618_13048 = state_11531__$1;
(statearr_11618_13048[(1)] = (13));

} else {
var statearr_11627_13049 = state_11531__$1;
(statearr_11627_13049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (18))){
var inst_11454 = (state_11531[(2)]);
var state_11531__$1 = state_11531;
var statearr_11628_13050 = state_11531__$1;
(statearr_11628_13050[(2)] = inst_11454);

(statearr_11628_13050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (42))){
var state_11531__$1 = state_11531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11531__$1,(45),dchan);
} else {
if((state_val_11532 === (37))){
var inst_11487 = (state_11531[(23)]);
var inst_11500 = (state_11531[(22)]);
var inst_11397 = (state_11531[(12)]);
var inst_11500__$1 = cljs.core.first(inst_11487);
var inst_11501 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11500__$1,inst_11397,done);
var state_11531__$1 = (function (){var statearr_11629 = state_11531;
(statearr_11629[(22)] = inst_11500__$1);

return statearr_11629;
})();
if(cljs.core.truth_(inst_11501)){
var statearr_11630_13051 = state_11531__$1;
(statearr_11630_13051[(1)] = (39));

} else {
var statearr_11631_13052 = state_11531__$1;
(statearr_11631_13052[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11532 === (8))){
var inst_11408 = (state_11531[(16)]);
var inst_11409 = (state_11531[(17)]);
var inst_11411 = (inst_11409 < inst_11408);
var inst_11412 = inst_11411;
var state_11531__$1 = state_11531;
if(cljs.core.truth_(inst_11412)){
var statearr_11632_13056 = state_11531__$1;
(statearr_11632_13056[(1)] = (10));

} else {
var statearr_11633_13057 = state_11531__$1;
(statearr_11633_13057[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10549__auto__ = null;
var cljs$core$async$mult_$_state_machine__10549__auto____0 = (function (){
var statearr_11634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11634[(0)] = cljs$core$async$mult_$_state_machine__10549__auto__);

(statearr_11634[(1)] = (1));

return statearr_11634;
});
var cljs$core$async$mult_$_state_machine__10549__auto____1 = (function (state_11531){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_11531);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e11635){var ex__10552__auto__ = e11635;
var statearr_11636_13058 = state_11531;
(statearr_11636_13058[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_11531[(4)]))){
var statearr_11637_13059 = state_11531;
(statearr_11637_13059[(1)] = cljs.core.first((state_11531[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13060 = state_11531;
state_11531 = G__13060;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10549__auto__ = function(state_11531){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10549__auto____1.call(this,state_11531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10549__auto____0;
cljs$core$async$mult_$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10549__auto____1;
return cljs$core$async$mult_$_state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_11638 = f__10657__auto__();
(statearr_11638[(6)] = c__10656__auto___12959);

return statearr_11638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
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
var G__11640 = arguments.length;
switch (G__11640) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13062 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13062(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13063 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13063(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13064 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13064(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13065 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13065(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13066 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13066(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13068 = arguments.length;
var i__4737__auto___13069 = (0);
while(true){
if((i__4737__auto___13069 < len__4736__auto___13068)){
args__4742__auto__.push((arguments[i__4737__auto___13069]));

var G__13070 = (i__4737__auto___13069 + (1));
i__4737__auto___13069 = G__13070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11653){
var map__11654 = p__11653;
var map__11654__$1 = (((((!((map__11654 == null))))?(((((map__11654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11654):map__11654);
var opts = map__11654__$1;
var statearr_11656_13071 = state;
(statearr_11656_13071[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11657_13072 = state;
(statearr_11657_13072[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11658_13073 = state;
(statearr_11658_13073[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11648){
var G__11649 = cljs.core.first(seq11648);
var seq11648__$1 = cljs.core.next(seq11648);
var G__11650 = cljs.core.first(seq11648__$1);
var seq11648__$2 = cljs.core.next(seq11648__$1);
var G__11651 = cljs.core.first(seq11648__$2);
var seq11648__$3 = cljs.core.next(seq11648__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11649,G__11650,G__11651,seq11648__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11664 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11665){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11665 = meta11665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11666,meta11665__$1){
var self__ = this;
var _11666__$1 = this;
return (new cljs.core.async.t_cljs$core$async11664(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11665__$1));
}));

(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11666){
var self__ = this;
var _11666__$1 = this;
return self__.meta11665;
}));

(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11664.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11665","meta11665",1661860376,null)], null);
}));

(cljs.core.async.t_cljs$core$async11664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11664");

(cljs.core.async.t_cljs$core$async11664.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11664.
 */
cljs.core.async.__GT_t_cljs$core$async11664 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11664(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11665){
return (new cljs.core.async.t_cljs$core$async11664(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11665));
});

}

return (new cljs.core.async.t_cljs$core$async11664(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10656__auto___13086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_11777){
var state_val_11778 = (state_11777[(1)]);
if((state_val_11778 === (7))){
var inst_11690 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11779_13088 = state_11777__$1;
(statearr_11779_13088[(2)] = inst_11690);

(statearr_11779_13088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (20))){
var inst_11702 = (state_11777[(7)]);
var state_11777__$1 = state_11777;
var statearr_11780_13089 = state_11777__$1;
(statearr_11780_13089[(2)] = inst_11702);

(statearr_11780_13089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (27))){
var state_11777__$1 = state_11777;
var statearr_11781_13090 = state_11777__$1;
(statearr_11781_13090[(2)] = null);

(statearr_11781_13090[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (1))){
var inst_11670 = (state_11777[(8)]);
var inst_11670__$1 = calc_state();
var inst_11679 = (inst_11670__$1 == null);
var inst_11680 = cljs.core.not(inst_11679);
var state_11777__$1 = (function (){var statearr_11782 = state_11777;
(statearr_11782[(8)] = inst_11670__$1);

return statearr_11782;
})();
if(inst_11680){
var statearr_11783_13091 = state_11777__$1;
(statearr_11783_13091[(1)] = (2));

} else {
var statearr_11784_13092 = state_11777__$1;
(statearr_11784_13092[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (24))){
var inst_11735 = (state_11777[(9)]);
var inst_11749 = (state_11777[(10)]);
var inst_11726 = (state_11777[(11)]);
var inst_11749__$1 = (inst_11726.cljs$core$IFn$_invoke$arity$1 ? inst_11726.cljs$core$IFn$_invoke$arity$1(inst_11735) : inst_11726.call(null,inst_11735));
var state_11777__$1 = (function (){var statearr_11785 = state_11777;
(statearr_11785[(10)] = inst_11749__$1);

return statearr_11785;
})();
if(cljs.core.truth_(inst_11749__$1)){
var statearr_11786_13093 = state_11777__$1;
(statearr_11786_13093[(1)] = (29));

} else {
var statearr_11787_13094 = state_11777__$1;
(statearr_11787_13094[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (4))){
var inst_11693 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11693)){
var statearr_11788_13095 = state_11777__$1;
(statearr_11788_13095[(1)] = (8));

} else {
var statearr_11789_13096 = state_11777__$1;
(statearr_11789_13096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (15))){
var inst_11720 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11720)){
var statearr_11790_13097 = state_11777__$1;
(statearr_11790_13097[(1)] = (19));

} else {
var statearr_11791_13098 = state_11777__$1;
(statearr_11791_13098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (21))){
var inst_11725 = (state_11777[(12)]);
var inst_11725__$1 = (state_11777[(2)]);
var inst_11726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11725__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11725__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11725__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11777__$1 = (function (){var statearr_11792 = state_11777;
(statearr_11792[(12)] = inst_11725__$1);

(statearr_11792[(11)] = inst_11726);

(statearr_11792[(13)] = inst_11727);

return statearr_11792;
})();
return cljs.core.async.ioc_alts_BANG_(state_11777__$1,(22),inst_11728);
} else {
if((state_val_11778 === (31))){
var inst_11757 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11757)){
var statearr_11793_13099 = state_11777__$1;
(statearr_11793_13099[(1)] = (32));

} else {
var statearr_11794_13100 = state_11777__$1;
(statearr_11794_13100[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (32))){
var inst_11734 = (state_11777[(14)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11777__$1,(35),out,inst_11734);
} else {
if((state_val_11778 === (33))){
var inst_11725 = (state_11777[(12)]);
var inst_11702 = inst_11725;
var state_11777__$1 = (function (){var statearr_11795 = state_11777;
(statearr_11795[(7)] = inst_11702);

return statearr_11795;
})();
var statearr_11796_13101 = state_11777__$1;
(statearr_11796_13101[(2)] = null);

(statearr_11796_13101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (13))){
var inst_11702 = (state_11777[(7)]);
var inst_11709 = inst_11702.cljs$lang$protocol_mask$partition0$;
var inst_11710 = (inst_11709 & (64));
var inst_11711 = inst_11702.cljs$core$ISeq$;
var inst_11712 = (cljs.core.PROTOCOL_SENTINEL === inst_11711);
var inst_11713 = ((inst_11710) || (inst_11712));
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11713)){
var statearr_11797_13102 = state_11777__$1;
(statearr_11797_13102[(1)] = (16));

} else {
var statearr_11798_13103 = state_11777__$1;
(statearr_11798_13103[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (22))){
var inst_11735 = (state_11777[(9)]);
var inst_11734 = (state_11777[(14)]);
var inst_11733 = (state_11777[(2)]);
var inst_11734__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11733,(0),null);
var inst_11735__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11733,(1),null);
var inst_11736 = (inst_11734__$1 == null);
var inst_11737 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11735__$1,change);
var inst_11738 = ((inst_11736) || (inst_11737));
var state_11777__$1 = (function (){var statearr_11799 = state_11777;
(statearr_11799[(9)] = inst_11735__$1);

(statearr_11799[(14)] = inst_11734__$1);

return statearr_11799;
})();
if(cljs.core.truth_(inst_11738)){
var statearr_11800_13107 = state_11777__$1;
(statearr_11800_13107[(1)] = (23));

} else {
var statearr_11801_13108 = state_11777__$1;
(statearr_11801_13108[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (36))){
var inst_11725 = (state_11777[(12)]);
var inst_11702 = inst_11725;
var state_11777__$1 = (function (){var statearr_11802 = state_11777;
(statearr_11802[(7)] = inst_11702);

return statearr_11802;
})();
var statearr_11803_13109 = state_11777__$1;
(statearr_11803_13109[(2)] = null);

(statearr_11803_13109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (29))){
var inst_11749 = (state_11777[(10)]);
var state_11777__$1 = state_11777;
var statearr_11804_13113 = state_11777__$1;
(statearr_11804_13113[(2)] = inst_11749);

(statearr_11804_13113[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (6))){
var state_11777__$1 = state_11777;
var statearr_11805_13114 = state_11777__$1;
(statearr_11805_13114[(2)] = false);

(statearr_11805_13114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (28))){
var inst_11745 = (state_11777[(2)]);
var inst_11746 = calc_state();
var inst_11702 = inst_11746;
var state_11777__$1 = (function (){var statearr_11807 = state_11777;
(statearr_11807[(7)] = inst_11702);

(statearr_11807[(15)] = inst_11745);

return statearr_11807;
})();
var statearr_11808_13115 = state_11777__$1;
(statearr_11808_13115[(2)] = null);

(statearr_11808_13115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (25))){
var inst_11773 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11809_13119 = state_11777__$1;
(statearr_11809_13119[(2)] = inst_11773);

(statearr_11809_13119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (34))){
var inst_11771 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11810_13120 = state_11777__$1;
(statearr_11810_13120[(2)] = inst_11771);

(statearr_11810_13120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (17))){
var state_11777__$1 = state_11777;
var statearr_11811_13121 = state_11777__$1;
(statearr_11811_13121[(2)] = false);

(statearr_11811_13121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (3))){
var state_11777__$1 = state_11777;
var statearr_11812_13122 = state_11777__$1;
(statearr_11812_13122[(2)] = false);

(statearr_11812_13122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (12))){
var inst_11775 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11777__$1,inst_11775);
} else {
if((state_val_11778 === (2))){
var inst_11670 = (state_11777[(8)]);
var inst_11682 = inst_11670.cljs$lang$protocol_mask$partition0$;
var inst_11683 = (inst_11682 & (64));
var inst_11684 = inst_11670.cljs$core$ISeq$;
var inst_11685 = (cljs.core.PROTOCOL_SENTINEL === inst_11684);
var inst_11686 = ((inst_11683) || (inst_11685));
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11686)){
var statearr_11813_13123 = state_11777__$1;
(statearr_11813_13123[(1)] = (5));

} else {
var statearr_11814_13124 = state_11777__$1;
(statearr_11814_13124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (23))){
var inst_11734 = (state_11777[(14)]);
var inst_11740 = (inst_11734 == null);
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11740)){
var statearr_11815_13125 = state_11777__$1;
(statearr_11815_13125[(1)] = (26));

} else {
var statearr_11816_13126 = state_11777__$1;
(statearr_11816_13126[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (35))){
var inst_11760 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11760)){
var statearr_11817_13127 = state_11777__$1;
(statearr_11817_13127[(1)] = (36));

} else {
var statearr_11818_13128 = state_11777__$1;
(statearr_11818_13128[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (19))){
var inst_11702 = (state_11777[(7)]);
var inst_11722 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11702);
var state_11777__$1 = state_11777;
var statearr_11819_13129 = state_11777__$1;
(statearr_11819_13129[(2)] = inst_11722);

(statearr_11819_13129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (11))){
var inst_11702 = (state_11777[(7)]);
var inst_11706 = (inst_11702 == null);
var inst_11707 = cljs.core.not(inst_11706);
var state_11777__$1 = state_11777;
if(inst_11707){
var statearr_11820_13130 = state_11777__$1;
(statearr_11820_13130[(1)] = (13));

} else {
var statearr_11821_13131 = state_11777__$1;
(statearr_11821_13131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (9))){
var inst_11670 = (state_11777[(8)]);
var state_11777__$1 = state_11777;
var statearr_11822_13132 = state_11777__$1;
(statearr_11822_13132[(2)] = inst_11670);

(statearr_11822_13132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (5))){
var state_11777__$1 = state_11777;
var statearr_11823_13133 = state_11777__$1;
(statearr_11823_13133[(2)] = true);

(statearr_11823_13133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (14))){
var state_11777__$1 = state_11777;
var statearr_11824_13134 = state_11777__$1;
(statearr_11824_13134[(2)] = false);

(statearr_11824_13134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (26))){
var inst_11735 = (state_11777[(9)]);
var inst_11742 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11735);
var state_11777__$1 = state_11777;
var statearr_11825_13135 = state_11777__$1;
(statearr_11825_13135[(2)] = inst_11742);

(statearr_11825_13135[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (16))){
var state_11777__$1 = state_11777;
var statearr_11826_13136 = state_11777__$1;
(statearr_11826_13136[(2)] = true);

(statearr_11826_13136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (38))){
var inst_11767 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11827_13137 = state_11777__$1;
(statearr_11827_13137[(2)] = inst_11767);

(statearr_11827_13137[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (30))){
var inst_11735 = (state_11777[(9)]);
var inst_11726 = (state_11777[(11)]);
var inst_11727 = (state_11777[(13)]);
var inst_11752 = cljs.core.empty_QMARK_(inst_11726);
var inst_11753 = (inst_11727.cljs$core$IFn$_invoke$arity$1 ? inst_11727.cljs$core$IFn$_invoke$arity$1(inst_11735) : inst_11727.call(null,inst_11735));
var inst_11754 = cljs.core.not(inst_11753);
var inst_11755 = ((inst_11752) && (inst_11754));
var state_11777__$1 = state_11777;
var statearr_11828_13142 = state_11777__$1;
(statearr_11828_13142[(2)] = inst_11755);

(statearr_11828_13142[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (10))){
var inst_11670 = (state_11777[(8)]);
var inst_11698 = (state_11777[(2)]);
var inst_11699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11698,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11698,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11698,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11702 = inst_11670;
var state_11777__$1 = (function (){var statearr_11829 = state_11777;
(statearr_11829[(16)] = inst_11701);

(statearr_11829[(17)] = inst_11699);

(statearr_11829[(7)] = inst_11702);

(statearr_11829[(18)] = inst_11700);

return statearr_11829;
})();
var statearr_11830_13144 = state_11777__$1;
(statearr_11830_13144[(2)] = null);

(statearr_11830_13144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (18))){
var inst_11717 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11831_13145 = state_11777__$1;
(statearr_11831_13145[(2)] = inst_11717);

(statearr_11831_13145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (37))){
var state_11777__$1 = state_11777;
var statearr_11832_13148 = state_11777__$1;
(statearr_11832_13148[(2)] = null);

(statearr_11832_13148[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (8))){
var inst_11670 = (state_11777[(8)]);
var inst_11695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11670);
var state_11777__$1 = state_11777;
var statearr_11833_13150 = state_11777__$1;
(statearr_11833_13150[(2)] = inst_11695);

(statearr_11833_13150[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10549__auto__ = null;
var cljs$core$async$mix_$_state_machine__10549__auto____0 = (function (){
var statearr_11834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11834[(0)] = cljs$core$async$mix_$_state_machine__10549__auto__);

(statearr_11834[(1)] = (1));

return statearr_11834;
});
var cljs$core$async$mix_$_state_machine__10549__auto____1 = (function (state_11777){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_11777);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e11835){var ex__10552__auto__ = e11835;
var statearr_11836_13154 = state_11777;
(statearr_11836_13154[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_11777[(4)]))){
var statearr_11837_13155 = state_11777;
(statearr_11837_13155[(1)] = cljs.core.first((state_11777[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13156 = state_11777;
state_11777 = G__13156;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10549__auto__ = function(state_11777){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10549__auto____1.call(this,state_11777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10549__auto____0;
cljs$core$async$mix_$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10549__auto____1;
return cljs$core$async$mix_$_state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_11838 = f__10657__auto__();
(statearr_11838[(6)] = c__10656__auto___13086);

return statearr_11838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13160 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13160(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13170 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13170(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13171 = (function() {
var G__13172 = null;
var G__13172__1 = (function (p){
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
var G__13172__2 = (function (p,v){
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
G__13172 = function(p,v){
switch(arguments.length){
case 1:
return G__13172__1.call(this,p);
case 2:
return G__13172__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13172.cljs$core$IFn$_invoke$arity$1 = G__13172__1;
G__13172.cljs$core$IFn$_invoke$arity$2 = G__13172__2;
return G__13172;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11842 = arguments.length;
switch (G__11842) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13171(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13171(p,v);
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
var G__11847 = arguments.length;
switch (G__11847) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11843_SHARP_){
if(cljs.core.truth_((p1__11843_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11843_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11843_SHARP_.call(null,topic)))){
return p1__11843_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11843_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11848 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11849){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11849 = meta11849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11850,meta11849__$1){
var self__ = this;
var _11850__$1 = this;
return (new cljs.core.async.t_cljs$core$async11848(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11849__$1));
}));

(cljs.core.async.t_cljs$core$async11848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11850){
var self__ = this;
var _11850__$1 = this;
return self__.meta11849;
}));

(cljs.core.async.t_cljs$core$async11848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11848.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11848.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11848.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11849","meta11849",1031177573,null)], null);
}));

(cljs.core.async.t_cljs$core$async11848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11848");

(cljs.core.async.t_cljs$core$async11848.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11848.
 */
cljs.core.async.__GT_t_cljs$core$async11848 = (function cljs$core$async$__GT_t_cljs$core$async11848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11849){
return (new cljs.core.async.t_cljs$core$async11848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11849));
});

}

return (new cljs.core.async.t_cljs$core$async11848(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10656__auto___13179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_11922){
var state_val_11923 = (state_11922[(1)]);
if((state_val_11923 === (7))){
var inst_11918 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11925_13180 = state_11922__$1;
(statearr_11925_13180[(2)] = inst_11918);

(statearr_11925_13180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (20))){
var state_11922__$1 = state_11922;
var statearr_11926_13181 = state_11922__$1;
(statearr_11926_13181[(2)] = null);

(statearr_11926_13181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (1))){
var state_11922__$1 = state_11922;
var statearr_11929_13182 = state_11922__$1;
(statearr_11929_13182[(2)] = null);

(statearr_11929_13182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (24))){
var inst_11901 = (state_11922[(7)]);
var inst_11910 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11901);
var state_11922__$1 = state_11922;
var statearr_11930_13183 = state_11922__$1;
(statearr_11930_13183[(2)] = inst_11910);

(statearr_11930_13183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (4))){
var inst_11853 = (state_11922[(8)]);
var inst_11853__$1 = (state_11922[(2)]);
var inst_11854 = (inst_11853__$1 == null);
var state_11922__$1 = (function (){var statearr_11933 = state_11922;
(statearr_11933[(8)] = inst_11853__$1);

return statearr_11933;
})();
if(cljs.core.truth_(inst_11854)){
var statearr_11935_13184 = state_11922__$1;
(statearr_11935_13184[(1)] = (5));

} else {
var statearr_11936_13185 = state_11922__$1;
(statearr_11936_13185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (15))){
var inst_11895 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11937_13186 = state_11922__$1;
(statearr_11937_13186[(2)] = inst_11895);

(statearr_11937_13186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (21))){
var inst_11915 = (state_11922[(2)]);
var state_11922__$1 = (function (){var statearr_11938 = state_11922;
(statearr_11938[(9)] = inst_11915);

return statearr_11938;
})();
var statearr_11939_13187 = state_11922__$1;
(statearr_11939_13187[(2)] = null);

(statearr_11939_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (13))){
var inst_11877 = (state_11922[(10)]);
var inst_11879 = cljs.core.chunked_seq_QMARK_(inst_11877);
var state_11922__$1 = state_11922;
if(inst_11879){
var statearr_11940_13189 = state_11922__$1;
(statearr_11940_13189[(1)] = (16));

} else {
var statearr_11941_13190 = state_11922__$1;
(statearr_11941_13190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (22))){
var inst_11907 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
if(cljs.core.truth_(inst_11907)){
var statearr_11942_13191 = state_11922__$1;
(statearr_11942_13191[(1)] = (23));

} else {
var statearr_11943_13192 = state_11922__$1;
(statearr_11943_13192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (6))){
var inst_11903 = (state_11922[(11)]);
var inst_11853 = (state_11922[(8)]);
var inst_11901 = (state_11922[(7)]);
var inst_11901__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11853) : topic_fn.call(null,inst_11853));
var inst_11902 = cljs.core.deref(mults);
var inst_11903__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11902,inst_11901__$1);
var state_11922__$1 = (function (){var statearr_11944 = state_11922;
(statearr_11944[(11)] = inst_11903__$1);

(statearr_11944[(7)] = inst_11901__$1);

return statearr_11944;
})();
if(cljs.core.truth_(inst_11903__$1)){
var statearr_11945_13196 = state_11922__$1;
(statearr_11945_13196[(1)] = (19));

} else {
var statearr_11946_13197 = state_11922__$1;
(statearr_11946_13197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (25))){
var inst_11912 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11947_13206 = state_11922__$1;
(statearr_11947_13206[(2)] = inst_11912);

(statearr_11947_13206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (17))){
var inst_11877 = (state_11922[(10)]);
var inst_11886 = cljs.core.first(inst_11877);
var inst_11887 = cljs.core.async.muxch_STAR_(inst_11886);
var inst_11888 = cljs.core.async.close_BANG_(inst_11887);
var inst_11889 = cljs.core.next(inst_11877);
var inst_11863 = inst_11889;
var inst_11864 = null;
var inst_11865 = (0);
var inst_11866 = (0);
var state_11922__$1 = (function (){var statearr_11948 = state_11922;
(statearr_11948[(12)] = inst_11888);

(statearr_11948[(13)] = inst_11865);

(statearr_11948[(14)] = inst_11866);

(statearr_11948[(15)] = inst_11864);

(statearr_11948[(16)] = inst_11863);

return statearr_11948;
})();
var statearr_11949_13208 = state_11922__$1;
(statearr_11949_13208[(2)] = null);

(statearr_11949_13208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (3))){
var inst_11920 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11922__$1,inst_11920);
} else {
if((state_val_11923 === (12))){
var inst_11897 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11950_13209 = state_11922__$1;
(statearr_11950_13209[(2)] = inst_11897);

(statearr_11950_13209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (2))){
var state_11922__$1 = state_11922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11922__$1,(4),ch);
} else {
if((state_val_11923 === (23))){
var state_11922__$1 = state_11922;
var statearr_11951_13211 = state_11922__$1;
(statearr_11951_13211[(2)] = null);

(statearr_11951_13211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (19))){
var inst_11903 = (state_11922[(11)]);
var inst_11853 = (state_11922[(8)]);
var inst_11905 = cljs.core.async.muxch_STAR_(inst_11903);
var state_11922__$1 = state_11922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11922__$1,(22),inst_11905,inst_11853);
} else {
if((state_val_11923 === (11))){
var inst_11877 = (state_11922[(10)]);
var inst_11863 = (state_11922[(16)]);
var inst_11877__$1 = cljs.core.seq(inst_11863);
var state_11922__$1 = (function (){var statearr_11952 = state_11922;
(statearr_11952[(10)] = inst_11877__$1);

return statearr_11952;
})();
if(inst_11877__$1){
var statearr_11953_13212 = state_11922__$1;
(statearr_11953_13212[(1)] = (13));

} else {
var statearr_11954_13213 = state_11922__$1;
(statearr_11954_13213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (9))){
var inst_11899 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11955_13217 = state_11922__$1;
(statearr_11955_13217[(2)] = inst_11899);

(statearr_11955_13217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (5))){
var inst_11860 = cljs.core.deref(mults);
var inst_11861 = cljs.core.vals(inst_11860);
var inst_11862 = cljs.core.seq(inst_11861);
var inst_11863 = inst_11862;
var inst_11864 = null;
var inst_11865 = (0);
var inst_11866 = (0);
var state_11922__$1 = (function (){var statearr_11956 = state_11922;
(statearr_11956[(13)] = inst_11865);

(statearr_11956[(14)] = inst_11866);

(statearr_11956[(15)] = inst_11864);

(statearr_11956[(16)] = inst_11863);

return statearr_11956;
})();
var statearr_11957_13218 = state_11922__$1;
(statearr_11957_13218[(2)] = null);

(statearr_11957_13218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (14))){
var state_11922__$1 = state_11922;
var statearr_11961_13219 = state_11922__$1;
(statearr_11961_13219[(2)] = null);

(statearr_11961_13219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (16))){
var inst_11877 = (state_11922[(10)]);
var inst_11881 = cljs.core.chunk_first(inst_11877);
var inst_11882 = cljs.core.chunk_rest(inst_11877);
var inst_11883 = cljs.core.count(inst_11881);
var inst_11863 = inst_11882;
var inst_11864 = inst_11881;
var inst_11865 = inst_11883;
var inst_11866 = (0);
var state_11922__$1 = (function (){var statearr_11964 = state_11922;
(statearr_11964[(13)] = inst_11865);

(statearr_11964[(14)] = inst_11866);

(statearr_11964[(15)] = inst_11864);

(statearr_11964[(16)] = inst_11863);

return statearr_11964;
})();
var statearr_11965_13224 = state_11922__$1;
(statearr_11965_13224[(2)] = null);

(statearr_11965_13224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (10))){
var inst_11865 = (state_11922[(13)]);
var inst_11866 = (state_11922[(14)]);
var inst_11864 = (state_11922[(15)]);
var inst_11863 = (state_11922[(16)]);
var inst_11871 = cljs.core._nth(inst_11864,inst_11866);
var inst_11872 = cljs.core.async.muxch_STAR_(inst_11871);
var inst_11873 = cljs.core.async.close_BANG_(inst_11872);
var inst_11874 = (inst_11866 + (1));
var tmp11958 = inst_11865;
var tmp11959 = inst_11864;
var tmp11960 = inst_11863;
var inst_11863__$1 = tmp11960;
var inst_11864__$1 = tmp11959;
var inst_11865__$1 = tmp11958;
var inst_11866__$1 = inst_11874;
var state_11922__$1 = (function (){var statearr_11966 = state_11922;
(statearr_11966[(13)] = inst_11865__$1);

(statearr_11966[(14)] = inst_11866__$1);

(statearr_11966[(15)] = inst_11864__$1);

(statearr_11966[(17)] = inst_11873);

(statearr_11966[(16)] = inst_11863__$1);

return statearr_11966;
})();
var statearr_11967_13242 = state_11922__$1;
(statearr_11967_13242[(2)] = null);

(statearr_11967_13242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (18))){
var inst_11892 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11968_13273 = state_11922__$1;
(statearr_11968_13273[(2)] = inst_11892);

(statearr_11968_13273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11923 === (8))){
var inst_11865 = (state_11922[(13)]);
var inst_11866 = (state_11922[(14)]);
var inst_11868 = (inst_11866 < inst_11865);
var inst_11869 = inst_11868;
var state_11922__$1 = state_11922;
if(cljs.core.truth_(inst_11869)){
var statearr_11969_13274 = state_11922__$1;
(statearr_11969_13274[(1)] = (10));

} else {
var statearr_11970_13275 = state_11922__$1;
(statearr_11970_13275[(1)] = (11));

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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_11971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11971[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_11971[(1)] = (1));

return statearr_11971;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_11922){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_11922);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e11972){var ex__10552__auto__ = e11972;
var statearr_11973_13276 = state_11922;
(statearr_11973_13276[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_11922[(4)]))){
var statearr_11974_13277 = state_11922;
(statearr_11974_13277[(1)] = cljs.core.first((state_11922[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13278 = state_11922;
state_11922 = G__13278;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_11922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_11922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_11975 = f__10657__auto__();
(statearr_11975[(6)] = c__10656__auto___13179);

return statearr_11975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
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
var G__11977 = arguments.length;
switch (G__11977) {
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
var G__11979 = arguments.length;
switch (G__11979) {
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
var G__11981 = arguments.length;
switch (G__11981) {
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
var c__10656__auto___13294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_12025){
var state_val_12026 = (state_12025[(1)]);
if((state_val_12026 === (7))){
var state_12025__$1 = state_12025;
var statearr_12027_13295 = state_12025__$1;
(statearr_12027_13295[(2)] = null);

(statearr_12027_13295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (1))){
var state_12025__$1 = state_12025;
var statearr_12028_13296 = state_12025__$1;
(statearr_12028_13296[(2)] = null);

(statearr_12028_13296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (4))){
var inst_11985 = (state_12025[(7)]);
var inst_11984 = (state_12025[(8)]);
var inst_11987 = (inst_11985 < inst_11984);
var state_12025__$1 = state_12025;
if(cljs.core.truth_(inst_11987)){
var statearr_12029_13297 = state_12025__$1;
(statearr_12029_13297[(1)] = (6));

} else {
var statearr_12030_13298 = state_12025__$1;
(statearr_12030_13298[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (15))){
var inst_12011 = (state_12025[(9)]);
var inst_12016 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12011);
var state_12025__$1 = state_12025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12025__$1,(17),out,inst_12016);
} else {
if((state_val_12026 === (13))){
var inst_12011 = (state_12025[(9)]);
var inst_12011__$1 = (state_12025[(2)]);
var inst_12012 = cljs.core.some(cljs.core.nil_QMARK_,inst_12011__$1);
var state_12025__$1 = (function (){var statearr_12031 = state_12025;
(statearr_12031[(9)] = inst_12011__$1);

return statearr_12031;
})();
if(cljs.core.truth_(inst_12012)){
var statearr_12032_13299 = state_12025__$1;
(statearr_12032_13299[(1)] = (14));

} else {
var statearr_12033_13300 = state_12025__$1;
(statearr_12033_13300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (6))){
var state_12025__$1 = state_12025;
var statearr_12034_13301 = state_12025__$1;
(statearr_12034_13301[(2)] = null);

(statearr_12034_13301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (17))){
var inst_12018 = (state_12025[(2)]);
var state_12025__$1 = (function (){var statearr_12046 = state_12025;
(statearr_12046[(10)] = inst_12018);

return statearr_12046;
})();
var statearr_12047_13302 = state_12025__$1;
(statearr_12047_13302[(2)] = null);

(statearr_12047_13302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (3))){
var inst_12023 = (state_12025[(2)]);
var state_12025__$1 = state_12025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12025__$1,inst_12023);
} else {
if((state_val_12026 === (12))){
var _ = (function (){var statearr_12049 = state_12025;
(statearr_12049[(4)] = cljs.core.rest((state_12025[(4)])));

return statearr_12049;
})();
var state_12025__$1 = state_12025;
var ex12043 = (state_12025__$1[(2)]);
var statearr_12050_13303 = state_12025__$1;
(statearr_12050_13303[(5)] = ex12043);


if((ex12043 instanceof Object)){
var statearr_12051_13304 = state_12025__$1;
(statearr_12051_13304[(1)] = (11));

(statearr_12051_13304[(5)] = null);

} else {
throw ex12043;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (2))){
var inst_11983 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11984 = cnt;
var inst_11985 = (0);
var state_12025__$1 = (function (){var statearr_12052 = state_12025;
(statearr_12052[(7)] = inst_11985);

(statearr_12052[(8)] = inst_11984);

(statearr_12052[(11)] = inst_11983);

return statearr_12052;
})();
var statearr_12053_13305 = state_12025__$1;
(statearr_12053_13305[(2)] = null);

(statearr_12053_13305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (11))){
var inst_11989 = (state_12025[(2)]);
var inst_11991 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12025__$1 = (function (){var statearr_12055 = state_12025;
(statearr_12055[(12)] = inst_11989);

return statearr_12055;
})();
var statearr_12056_13306 = state_12025__$1;
(statearr_12056_13306[(2)] = inst_11991);

(statearr_12056_13306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (9))){
var inst_11985 = (state_12025[(7)]);
var _ = (function (){var statearr_12058 = state_12025;
(statearr_12058[(4)] = cljs.core.cons((12),(state_12025[(4)])));

return statearr_12058;
})();
var inst_11997 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11985) : chs__$1.call(null,inst_11985));
var inst_11998 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11985) : done.call(null,inst_11985));
var inst_11999 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11997,inst_11998);
var ___$1 = (function (){var statearr_12059 = state_12025;
(statearr_12059[(4)] = cljs.core.rest((state_12025[(4)])));

return statearr_12059;
})();
var state_12025__$1 = state_12025;
var statearr_12060_13308 = state_12025__$1;
(statearr_12060_13308[(2)] = inst_11999);

(statearr_12060_13308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (5))){
var inst_12009 = (state_12025[(2)]);
var state_12025__$1 = (function (){var statearr_12061 = state_12025;
(statearr_12061[(13)] = inst_12009);

return statearr_12061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12025__$1,(13),dchan);
} else {
if((state_val_12026 === (14))){
var inst_12014 = cljs.core.async.close_BANG_(out);
var state_12025__$1 = state_12025;
var statearr_12062_13309 = state_12025__$1;
(statearr_12062_13309[(2)] = inst_12014);

(statearr_12062_13309[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (16))){
var inst_12021 = (state_12025[(2)]);
var state_12025__$1 = state_12025;
var statearr_12063_13310 = state_12025__$1;
(statearr_12063_13310[(2)] = inst_12021);

(statearr_12063_13310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (10))){
var inst_11985 = (state_12025[(7)]);
var inst_12002 = (state_12025[(2)]);
var inst_12003 = (inst_11985 + (1));
var inst_11985__$1 = inst_12003;
var state_12025__$1 = (function (){var statearr_12064 = state_12025;
(statearr_12064[(7)] = inst_11985__$1);

(statearr_12064[(14)] = inst_12002);

return statearr_12064;
})();
var statearr_12065_13314 = state_12025__$1;
(statearr_12065_13314[(2)] = null);

(statearr_12065_13314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12026 === (8))){
var inst_12007 = (state_12025[(2)]);
var state_12025__$1 = state_12025;
var statearr_12066_13315 = state_12025__$1;
(statearr_12066_13315[(2)] = inst_12007);

(statearr_12066_13315[(1)] = (5));


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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_12079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12079[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_12079[(1)] = (1));

return statearr_12079;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_12025){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_12025);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e12080){var ex__10552__auto__ = e12080;
var statearr_12081_13317 = state_12025;
(statearr_12081_13317[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_12025[(4)]))){
var statearr_12082_13318 = state_12025;
(statearr_12082_13318[(1)] = cljs.core.first((state_12025[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13319 = state_12025;
state_12025 = G__13319;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_12025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_12025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_12083 = f__10657__auto__();
(statearr_12083[(6)] = c__10656__auto___13294);

return statearr_12083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
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
var G__12088 = arguments.length;
switch (G__12088) {
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
var c__10656__auto___13322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_12121){
var state_val_12122 = (state_12121[(1)]);
if((state_val_12122 === (7))){
var inst_12100 = (state_12121[(7)]);
var inst_12101 = (state_12121[(8)]);
var inst_12100__$1 = (state_12121[(2)]);
var inst_12101__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12100__$1,(0),null);
var inst_12102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12100__$1,(1),null);
var inst_12103 = (inst_12101__$1 == null);
var state_12121__$1 = (function (){var statearr_12136 = state_12121;
(statearr_12136[(7)] = inst_12100__$1);

(statearr_12136[(8)] = inst_12101__$1);

(statearr_12136[(9)] = inst_12102);

return statearr_12136;
})();
if(cljs.core.truth_(inst_12103)){
var statearr_12140_13323 = state_12121__$1;
(statearr_12140_13323[(1)] = (8));

} else {
var statearr_12142_13324 = state_12121__$1;
(statearr_12142_13324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12122 === (1))){
var inst_12090 = cljs.core.vec(chs);
var inst_12091 = inst_12090;
var state_12121__$1 = (function (){var statearr_12144 = state_12121;
(statearr_12144[(10)] = inst_12091);

return statearr_12144;
})();
var statearr_12146_13325 = state_12121__$1;
(statearr_12146_13325[(2)] = null);

(statearr_12146_13325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12122 === (4))){
var inst_12091 = (state_12121[(10)]);
var state_12121__$1 = state_12121;
return cljs.core.async.ioc_alts_BANG_(state_12121__$1,(7),inst_12091);
} else {
if((state_val_12122 === (6))){
var inst_12117 = (state_12121[(2)]);
var state_12121__$1 = state_12121;
var statearr_12152_13326 = state_12121__$1;
(statearr_12152_13326[(2)] = inst_12117);

(statearr_12152_13326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12122 === (3))){
var inst_12119 = (state_12121[(2)]);
var state_12121__$1 = state_12121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12121__$1,inst_12119);
} else {
if((state_val_12122 === (2))){
var inst_12091 = (state_12121[(10)]);
var inst_12093 = cljs.core.count(inst_12091);
var inst_12094 = (inst_12093 > (0));
var state_12121__$1 = state_12121;
if(cljs.core.truth_(inst_12094)){
var statearr_12154_13327 = state_12121__$1;
(statearr_12154_13327[(1)] = (4));

} else {
var statearr_12155_13328 = state_12121__$1;
(statearr_12155_13328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12122 === (11))){
var inst_12091 = (state_12121[(10)]);
var inst_12110 = (state_12121[(2)]);
var tmp12153 = inst_12091;
var inst_12091__$1 = tmp12153;
var state_12121__$1 = (function (){var statearr_12156 = state_12121;
(statearr_12156[(11)] = inst_12110);

(statearr_12156[(10)] = inst_12091__$1);

return statearr_12156;
})();
var statearr_12157_13329 = state_12121__$1;
(statearr_12157_13329[(2)] = null);

(statearr_12157_13329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12122 === (9))){
var inst_12101 = (state_12121[(8)]);
var state_12121__$1 = state_12121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12121__$1,(11),out,inst_12101);
} else {
if((state_val_12122 === (5))){
var inst_12115 = cljs.core.async.close_BANG_(out);
var state_12121__$1 = state_12121;
var statearr_12160_13330 = state_12121__$1;
(statearr_12160_13330[(2)] = inst_12115);

(statearr_12160_13330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12122 === (10))){
var inst_12113 = (state_12121[(2)]);
var state_12121__$1 = state_12121;
var statearr_12161_13331 = state_12121__$1;
(statearr_12161_13331[(2)] = inst_12113);

(statearr_12161_13331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12122 === (8))){
var inst_12100 = (state_12121[(7)]);
var inst_12091 = (state_12121[(10)]);
var inst_12101 = (state_12121[(8)]);
var inst_12102 = (state_12121[(9)]);
var inst_12105 = (function (){var cs = inst_12091;
var vec__12096 = inst_12100;
var v = inst_12101;
var c = inst_12102;
return (function (p1__12086_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12086_SHARP_);
});
})();
var inst_12106 = cljs.core.filterv(inst_12105,inst_12091);
var inst_12091__$1 = inst_12106;
var state_12121__$1 = (function (){var statearr_12166 = state_12121;
(statearr_12166[(10)] = inst_12091__$1);

return statearr_12166;
})();
var statearr_12168_13332 = state_12121__$1;
(statearr_12168_13332[(2)] = null);

(statearr_12168_13332[(1)] = (2));


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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_12169 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12169[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_12169[(1)] = (1));

return statearr_12169;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_12121){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_12121);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e12170){var ex__10552__auto__ = e12170;
var statearr_12171_13333 = state_12121;
(statearr_12171_13333[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_12121[(4)]))){
var statearr_12172_13334 = state_12121;
(statearr_12172_13334[(1)] = cljs.core.first((state_12121[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13335 = state_12121;
state_12121 = G__13335;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_12121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_12121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_12173 = f__10657__auto__();
(statearr_12173[(6)] = c__10656__auto___13322);

return statearr_12173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
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
var G__12176 = arguments.length;
switch (G__12176) {
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
var c__10656__auto___13338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_12202){
var state_val_12203 = (state_12202[(1)]);
if((state_val_12203 === (7))){
var inst_12184 = (state_12202[(7)]);
var inst_12184__$1 = (state_12202[(2)]);
var inst_12185 = (inst_12184__$1 == null);
var inst_12186 = cljs.core.not(inst_12185);
var state_12202__$1 = (function (){var statearr_12204 = state_12202;
(statearr_12204[(7)] = inst_12184__$1);

return statearr_12204;
})();
if(inst_12186){
var statearr_12205_13339 = state_12202__$1;
(statearr_12205_13339[(1)] = (8));

} else {
var statearr_12206_13340 = state_12202__$1;
(statearr_12206_13340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12203 === (1))){
var inst_12179 = (0);
var state_12202__$1 = (function (){var statearr_12207 = state_12202;
(statearr_12207[(8)] = inst_12179);

return statearr_12207;
})();
var statearr_12208_13341 = state_12202__$1;
(statearr_12208_13341[(2)] = null);

(statearr_12208_13341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12203 === (4))){
var state_12202__$1 = state_12202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12202__$1,(7),ch);
} else {
if((state_val_12203 === (6))){
var inst_12197 = (state_12202[(2)]);
var state_12202__$1 = state_12202;
var statearr_12213_13342 = state_12202__$1;
(statearr_12213_13342[(2)] = inst_12197);

(statearr_12213_13342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12203 === (3))){
var inst_12199 = (state_12202[(2)]);
var inst_12200 = cljs.core.async.close_BANG_(out);
var state_12202__$1 = (function (){var statearr_12222 = state_12202;
(statearr_12222[(9)] = inst_12199);

return statearr_12222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12202__$1,inst_12200);
} else {
if((state_val_12203 === (2))){
var inst_12179 = (state_12202[(8)]);
var inst_12181 = (inst_12179 < n);
var state_12202__$1 = state_12202;
if(cljs.core.truth_(inst_12181)){
var statearr_12223_13343 = state_12202__$1;
(statearr_12223_13343[(1)] = (4));

} else {
var statearr_12224_13344 = state_12202__$1;
(statearr_12224_13344[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12203 === (11))){
var inst_12179 = (state_12202[(8)]);
var inst_12189 = (state_12202[(2)]);
var inst_12190 = (inst_12179 + (1));
var inst_12179__$1 = inst_12190;
var state_12202__$1 = (function (){var statearr_12225 = state_12202;
(statearr_12225[(8)] = inst_12179__$1);

(statearr_12225[(10)] = inst_12189);

return statearr_12225;
})();
var statearr_12226_13345 = state_12202__$1;
(statearr_12226_13345[(2)] = null);

(statearr_12226_13345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12203 === (9))){
var state_12202__$1 = state_12202;
var statearr_12227_13346 = state_12202__$1;
(statearr_12227_13346[(2)] = null);

(statearr_12227_13346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12203 === (5))){
var state_12202__$1 = state_12202;
var statearr_12228_13348 = state_12202__$1;
(statearr_12228_13348[(2)] = null);

(statearr_12228_13348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12203 === (10))){
var inst_12194 = (state_12202[(2)]);
var state_12202__$1 = state_12202;
var statearr_12229_13349 = state_12202__$1;
(statearr_12229_13349[(2)] = inst_12194);

(statearr_12229_13349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12203 === (8))){
var inst_12184 = (state_12202[(7)]);
var state_12202__$1 = state_12202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12202__$1,(11),out,inst_12184);
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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_12230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12230[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_12230[(1)] = (1));

return statearr_12230;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_12202){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_12202);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e12231){var ex__10552__auto__ = e12231;
var statearr_12232_13350 = state_12202;
(statearr_12232_13350[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_12202[(4)]))){
var statearr_12233_13351 = state_12202;
(statearr_12233_13351[(1)] = cljs.core.first((state_12202[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13352 = state_12202;
state_12202 = G__13352;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_12202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_12202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_12234 = f__10657__auto__();
(statearr_12234[(6)] = c__10656__auto___13338);

return statearr_12234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12236 = (function (f,ch,meta12237){
this.f = f;
this.ch = ch;
this.meta12237 = meta12237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12238,meta12237__$1){
var self__ = this;
var _12238__$1 = this;
return (new cljs.core.async.t_cljs$core$async12236(self__.f,self__.ch,meta12237__$1));
}));

(cljs.core.async.t_cljs$core$async12236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12238){
var self__ = this;
var _12238__$1 = this;
return self__.meta12237;
}));

(cljs.core.async.t_cljs$core$async12236.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12236.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12236.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12249 = (function (f,ch,meta12237,_,fn1,meta12250){
this.f = f;
this.ch = ch;
this.meta12237 = meta12237;
this._ = _;
this.fn1 = fn1;
this.meta12250 = meta12250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12251,meta12250__$1){
var self__ = this;
var _12251__$1 = this;
return (new cljs.core.async.t_cljs$core$async12249(self__.f,self__.ch,self__.meta12237,self__._,self__.fn1,meta12250__$1));
}));

(cljs.core.async.t_cljs$core$async12249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12251){
var self__ = this;
var _12251__$1 = this;
return self__.meta12250;
}));

(cljs.core.async.t_cljs$core$async12249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12235_SHARP_){
var G__12252 = (((p1__12235_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12235_SHARP_) : self__.f.call(null,p1__12235_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12252) : f1.call(null,G__12252));
});
}));

(cljs.core.async.t_cljs$core$async12249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12237","meta12237",-815572275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12236","cljs.core.async/t_cljs$core$async12236",-1677686340,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12250","meta12250",-1607884482,null)], null);
}));

(cljs.core.async.t_cljs$core$async12249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12249");

(cljs.core.async.t_cljs$core$async12249.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12249.
 */
cljs.core.async.__GT_t_cljs$core$async12249 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12249(f__$1,ch__$1,meta12237__$1,___$2,fn1__$1,meta12250){
return (new cljs.core.async.t_cljs$core$async12249(f__$1,ch__$1,meta12237__$1,___$2,fn1__$1,meta12250));
});

}

return (new cljs.core.async.t_cljs$core$async12249(self__.f,self__.ch,self__.meta12237,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12254 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12254) : self__.f.call(null,G__12254));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12236.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12237","meta12237",-815572275,null)], null);
}));

(cljs.core.async.t_cljs$core$async12236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12236");

(cljs.core.async.t_cljs$core$async12236.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12236.
 */
cljs.core.async.__GT_t_cljs$core$async12236 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12236(f__$1,ch__$1,meta12237){
return (new cljs.core.async.t_cljs$core$async12236(f__$1,ch__$1,meta12237));
});

}

return (new cljs.core.async.t_cljs$core$async12236(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12258 = (function (f,ch,meta12259){
this.f = f;
this.ch = ch;
this.meta12259 = meta12259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12260,meta12259__$1){
var self__ = this;
var _12260__$1 = this;
return (new cljs.core.async.t_cljs$core$async12258(self__.f,self__.ch,meta12259__$1));
}));

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12260){
var self__ = this;
var _12260__$1 = this;
return self__.meta12259;
}));

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12259","meta12259",-856831041,null)], null);
}));

(cljs.core.async.t_cljs$core$async12258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12258");

(cljs.core.async.t_cljs$core$async12258.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12258.
 */
cljs.core.async.__GT_t_cljs$core$async12258 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12258(f__$1,ch__$1,meta12259){
return (new cljs.core.async.t_cljs$core$async12258(f__$1,ch__$1,meta12259));
});

}

return (new cljs.core.async.t_cljs$core$async12258(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12261 = (function (p,ch,meta12262){
this.p = p;
this.ch = ch;
this.meta12262 = meta12262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12263,meta12262__$1){
var self__ = this;
var _12263__$1 = this;
return (new cljs.core.async.t_cljs$core$async12261(self__.p,self__.ch,meta12262__$1));
}));

(cljs.core.async.t_cljs$core$async12261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12263){
var self__ = this;
var _12263__$1 = this;
return self__.meta12262;
}));

(cljs.core.async.t_cljs$core$async12261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12262","meta12262",-796161787,null)], null);
}));

(cljs.core.async.t_cljs$core$async12261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12261");

(cljs.core.async.t_cljs$core$async12261.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12261.
 */
cljs.core.async.__GT_t_cljs$core$async12261 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12261(p__$1,ch__$1,meta12262){
return (new cljs.core.async.t_cljs$core$async12261(p__$1,ch__$1,meta12262));
});

}

return (new cljs.core.async.t_cljs$core$async12261(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12266 = arguments.length;
switch (G__12266) {
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
var c__10656__auto___13354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_12291){
var state_val_12292 = (state_12291[(1)]);
if((state_val_12292 === (7))){
var inst_12287 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12293_13355 = state_12291__$1;
(statearr_12293_13355[(2)] = inst_12287);

(statearr_12293_13355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (1))){
var state_12291__$1 = state_12291;
var statearr_12294_13356 = state_12291__$1;
(statearr_12294_13356[(2)] = null);

(statearr_12294_13356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (4))){
var inst_12269 = (state_12291[(7)]);
var inst_12269__$1 = (state_12291[(2)]);
var inst_12270 = (inst_12269__$1 == null);
var state_12291__$1 = (function (){var statearr_12295 = state_12291;
(statearr_12295[(7)] = inst_12269__$1);

return statearr_12295;
})();
if(cljs.core.truth_(inst_12270)){
var statearr_12296_13357 = state_12291__$1;
(statearr_12296_13357[(1)] = (5));

} else {
var statearr_12297_13358 = state_12291__$1;
(statearr_12297_13358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (6))){
var inst_12269 = (state_12291[(7)]);
var inst_12274 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12269) : p.call(null,inst_12269));
var state_12291__$1 = state_12291;
if(cljs.core.truth_(inst_12274)){
var statearr_12298_13360 = state_12291__$1;
(statearr_12298_13360[(1)] = (8));

} else {
var statearr_12299_13361 = state_12291__$1;
(statearr_12299_13361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (3))){
var inst_12289 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12291__$1,inst_12289);
} else {
if((state_val_12292 === (2))){
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12291__$1,(4),ch);
} else {
if((state_val_12292 === (11))){
var inst_12277 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12300_13363 = state_12291__$1;
(statearr_12300_13363[(2)] = inst_12277);

(statearr_12300_13363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (9))){
var state_12291__$1 = state_12291;
var statearr_12301_13364 = state_12291__$1;
(statearr_12301_13364[(2)] = null);

(statearr_12301_13364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (5))){
var inst_12272 = cljs.core.async.close_BANG_(out);
var state_12291__$1 = state_12291;
var statearr_12302_13365 = state_12291__$1;
(statearr_12302_13365[(2)] = inst_12272);

(statearr_12302_13365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (10))){
var inst_12284 = (state_12291[(2)]);
var state_12291__$1 = (function (){var statearr_12303 = state_12291;
(statearr_12303[(8)] = inst_12284);

return statearr_12303;
})();
var statearr_12304_13366 = state_12291__$1;
(statearr_12304_13366[(2)] = null);

(statearr_12304_13366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (8))){
var inst_12269 = (state_12291[(7)]);
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12291__$1,(11),out,inst_12269);
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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_12305 = [null,null,null,null,null,null,null,null,null];
(statearr_12305[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_12305[(1)] = (1));

return statearr_12305;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_12291){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_12291);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e12306){var ex__10552__auto__ = e12306;
var statearr_12307_13367 = state_12291;
(statearr_12307_13367[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_12291[(4)]))){
var statearr_12308_13368 = state_12291;
(statearr_12308_13368[(1)] = cljs.core.first((state_12291[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13369 = state_12291;
state_12291 = G__13369;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_12291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_12291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_12309 = f__10657__auto__();
(statearr_12309[(6)] = c__10656__auto___13354);

return statearr_12309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12311 = arguments.length;
switch (G__12311) {
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
var c__10656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_12376){
var state_val_12377 = (state_12376[(1)]);
if((state_val_12377 === (7))){
var inst_12372 = (state_12376[(2)]);
var state_12376__$1 = state_12376;
var statearr_12378_13373 = state_12376__$1;
(statearr_12378_13373[(2)] = inst_12372);

(statearr_12378_13373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (20))){
var inst_12342 = (state_12376[(7)]);
var inst_12353 = (state_12376[(2)]);
var inst_12354 = cljs.core.next(inst_12342);
var inst_12328 = inst_12354;
var inst_12329 = null;
var inst_12330 = (0);
var inst_12331 = (0);
var state_12376__$1 = (function (){var statearr_12379 = state_12376;
(statearr_12379[(8)] = inst_12329);

(statearr_12379[(9)] = inst_12328);

(statearr_12379[(10)] = inst_12331);

(statearr_12379[(11)] = inst_12353);

(statearr_12379[(12)] = inst_12330);

return statearr_12379;
})();
var statearr_12380_13375 = state_12376__$1;
(statearr_12380_13375[(2)] = null);

(statearr_12380_13375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (1))){
var state_12376__$1 = state_12376;
var statearr_12381_13376 = state_12376__$1;
(statearr_12381_13376[(2)] = null);

(statearr_12381_13376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (4))){
var inst_12317 = (state_12376[(13)]);
var inst_12317__$1 = (state_12376[(2)]);
var inst_12318 = (inst_12317__$1 == null);
var state_12376__$1 = (function (){var statearr_12382 = state_12376;
(statearr_12382[(13)] = inst_12317__$1);

return statearr_12382;
})();
if(cljs.core.truth_(inst_12318)){
var statearr_12383_13378 = state_12376__$1;
(statearr_12383_13378[(1)] = (5));

} else {
var statearr_12384_13379 = state_12376__$1;
(statearr_12384_13379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (15))){
var state_12376__$1 = state_12376;
var statearr_12388_13380 = state_12376__$1;
(statearr_12388_13380[(2)] = null);

(statearr_12388_13380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (21))){
var state_12376__$1 = state_12376;
var statearr_12401_13381 = state_12376__$1;
(statearr_12401_13381[(2)] = null);

(statearr_12401_13381[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (13))){
var inst_12329 = (state_12376[(8)]);
var inst_12328 = (state_12376[(9)]);
var inst_12331 = (state_12376[(10)]);
var inst_12330 = (state_12376[(12)]);
var inst_12338 = (state_12376[(2)]);
var inst_12339 = (inst_12331 + (1));
var tmp12385 = inst_12329;
var tmp12386 = inst_12328;
var tmp12387 = inst_12330;
var inst_12328__$1 = tmp12386;
var inst_12329__$1 = tmp12385;
var inst_12330__$1 = tmp12387;
var inst_12331__$1 = inst_12339;
var state_12376__$1 = (function (){var statearr_12402 = state_12376;
(statearr_12402[(8)] = inst_12329__$1);

(statearr_12402[(9)] = inst_12328__$1);

(statearr_12402[(14)] = inst_12338);

(statearr_12402[(10)] = inst_12331__$1);

(statearr_12402[(12)] = inst_12330__$1);

return statearr_12402;
})();
var statearr_12403_13382 = state_12376__$1;
(statearr_12403_13382[(2)] = null);

(statearr_12403_13382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (22))){
var state_12376__$1 = state_12376;
var statearr_12407_13383 = state_12376__$1;
(statearr_12407_13383[(2)] = null);

(statearr_12407_13383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (6))){
var inst_12317 = (state_12376[(13)]);
var inst_12326 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12317) : f.call(null,inst_12317));
var inst_12327 = cljs.core.seq(inst_12326);
var inst_12328 = inst_12327;
var inst_12329 = null;
var inst_12330 = (0);
var inst_12331 = (0);
var state_12376__$1 = (function (){var statearr_12408 = state_12376;
(statearr_12408[(8)] = inst_12329);

(statearr_12408[(9)] = inst_12328);

(statearr_12408[(10)] = inst_12331);

(statearr_12408[(12)] = inst_12330);

return statearr_12408;
})();
var statearr_12409_13384 = state_12376__$1;
(statearr_12409_13384[(2)] = null);

(statearr_12409_13384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (17))){
var inst_12342 = (state_12376[(7)]);
var inst_12346 = cljs.core.chunk_first(inst_12342);
var inst_12347 = cljs.core.chunk_rest(inst_12342);
var inst_12348 = cljs.core.count(inst_12346);
var inst_12328 = inst_12347;
var inst_12329 = inst_12346;
var inst_12330 = inst_12348;
var inst_12331 = (0);
var state_12376__$1 = (function (){var statearr_12410 = state_12376;
(statearr_12410[(8)] = inst_12329);

(statearr_12410[(9)] = inst_12328);

(statearr_12410[(10)] = inst_12331);

(statearr_12410[(12)] = inst_12330);

return statearr_12410;
})();
var statearr_12411_13385 = state_12376__$1;
(statearr_12411_13385[(2)] = null);

(statearr_12411_13385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (3))){
var inst_12374 = (state_12376[(2)]);
var state_12376__$1 = state_12376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12376__$1,inst_12374);
} else {
if((state_val_12377 === (12))){
var inst_12362 = (state_12376[(2)]);
var state_12376__$1 = state_12376;
var statearr_12412_13386 = state_12376__$1;
(statearr_12412_13386[(2)] = inst_12362);

(statearr_12412_13386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (2))){
var state_12376__$1 = state_12376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12376__$1,(4),in$);
} else {
if((state_val_12377 === (23))){
var inst_12370 = (state_12376[(2)]);
var state_12376__$1 = state_12376;
var statearr_12413_13387 = state_12376__$1;
(statearr_12413_13387[(2)] = inst_12370);

(statearr_12413_13387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (19))){
var inst_12357 = (state_12376[(2)]);
var state_12376__$1 = state_12376;
var statearr_12414_13388 = state_12376__$1;
(statearr_12414_13388[(2)] = inst_12357);

(statearr_12414_13388[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (11))){
var inst_12328 = (state_12376[(9)]);
var inst_12342 = (state_12376[(7)]);
var inst_12342__$1 = cljs.core.seq(inst_12328);
var state_12376__$1 = (function (){var statearr_12415 = state_12376;
(statearr_12415[(7)] = inst_12342__$1);

return statearr_12415;
})();
if(inst_12342__$1){
var statearr_12416_13389 = state_12376__$1;
(statearr_12416_13389[(1)] = (14));

} else {
var statearr_12417_13390 = state_12376__$1;
(statearr_12417_13390[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (9))){
var inst_12364 = (state_12376[(2)]);
var inst_12365 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12376__$1 = (function (){var statearr_12418 = state_12376;
(statearr_12418[(15)] = inst_12364);

return statearr_12418;
})();
if(cljs.core.truth_(inst_12365)){
var statearr_12419_13391 = state_12376__$1;
(statearr_12419_13391[(1)] = (21));

} else {
var statearr_12420_13392 = state_12376__$1;
(statearr_12420_13392[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (5))){
var inst_12320 = cljs.core.async.close_BANG_(out);
var state_12376__$1 = state_12376;
var statearr_12421_13393 = state_12376__$1;
(statearr_12421_13393[(2)] = inst_12320);

(statearr_12421_13393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (14))){
var inst_12342 = (state_12376[(7)]);
var inst_12344 = cljs.core.chunked_seq_QMARK_(inst_12342);
var state_12376__$1 = state_12376;
if(inst_12344){
var statearr_12422_13395 = state_12376__$1;
(statearr_12422_13395[(1)] = (17));

} else {
var statearr_12423_13396 = state_12376__$1;
(statearr_12423_13396[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (16))){
var inst_12360 = (state_12376[(2)]);
var state_12376__$1 = state_12376;
var statearr_12424_13397 = state_12376__$1;
(statearr_12424_13397[(2)] = inst_12360);

(statearr_12424_13397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12377 === (10))){
var inst_12329 = (state_12376[(8)]);
var inst_12331 = (state_12376[(10)]);
var inst_12336 = cljs.core._nth(inst_12329,inst_12331);
var state_12376__$1 = state_12376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12376__$1,(13),out,inst_12336);
} else {
if((state_val_12377 === (18))){
var inst_12342 = (state_12376[(7)]);
var inst_12351 = cljs.core.first(inst_12342);
var state_12376__$1 = state_12376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12376__$1,(20),out,inst_12351);
} else {
if((state_val_12377 === (8))){
var inst_12331 = (state_12376[(10)]);
var inst_12330 = (state_12376[(12)]);
var inst_12333 = (inst_12331 < inst_12330);
var inst_12334 = inst_12333;
var state_12376__$1 = state_12376;
if(cljs.core.truth_(inst_12334)){
var statearr_12425_13399 = state_12376__$1;
(statearr_12425_13399[(1)] = (10));

} else {
var statearr_12426_13400 = state_12376__$1;
(statearr_12426_13400[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10549__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10549__auto____0 = (function (){
var statearr_12427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12427[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10549__auto__);

(statearr_12427[(1)] = (1));

return statearr_12427;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10549__auto____1 = (function (state_12376){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_12376);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e12428){var ex__10552__auto__ = e12428;
var statearr_12429_13402 = state_12376;
(statearr_12429_13402[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_12376[(4)]))){
var statearr_12438_13403 = state_12376;
(statearr_12438_13403[(1)] = cljs.core.first((state_12376[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13405 = state_12376;
state_12376 = G__13405;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10549__auto__ = function(state_12376){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10549__auto____1.call(this,state_12376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10549__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10549__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_12439 = f__10657__auto__();
(statearr_12439[(6)] = c__10656__auto__);

return statearr_12439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));

return c__10656__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12441 = arguments.length;
switch (G__12441) {
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
var G__12443 = arguments.length;
switch (G__12443) {
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
var G__12450 = arguments.length;
switch (G__12450) {
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
var c__10656__auto___13410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_12474){
var state_val_12475 = (state_12474[(1)]);
if((state_val_12475 === (7))){
var inst_12469 = (state_12474[(2)]);
var state_12474__$1 = state_12474;
var statearr_12476_13411 = state_12474__$1;
(statearr_12476_13411[(2)] = inst_12469);

(statearr_12476_13411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (1))){
var inst_12451 = null;
var state_12474__$1 = (function (){var statearr_12477 = state_12474;
(statearr_12477[(7)] = inst_12451);

return statearr_12477;
})();
var statearr_12478_13412 = state_12474__$1;
(statearr_12478_13412[(2)] = null);

(statearr_12478_13412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (4))){
var inst_12454 = (state_12474[(8)]);
var inst_12454__$1 = (state_12474[(2)]);
var inst_12455 = (inst_12454__$1 == null);
var inst_12456 = cljs.core.not(inst_12455);
var state_12474__$1 = (function (){var statearr_12479 = state_12474;
(statearr_12479[(8)] = inst_12454__$1);

return statearr_12479;
})();
if(inst_12456){
var statearr_12480_13413 = state_12474__$1;
(statearr_12480_13413[(1)] = (5));

} else {
var statearr_12481_13414 = state_12474__$1;
(statearr_12481_13414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (6))){
var state_12474__$1 = state_12474;
var statearr_12482_13415 = state_12474__$1;
(statearr_12482_13415[(2)] = null);

(statearr_12482_13415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (3))){
var inst_12471 = (state_12474[(2)]);
var inst_12472 = cljs.core.async.close_BANG_(out);
var state_12474__$1 = (function (){var statearr_12483 = state_12474;
(statearr_12483[(9)] = inst_12471);

return statearr_12483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12474__$1,inst_12472);
} else {
if((state_val_12475 === (2))){
var state_12474__$1 = state_12474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12474__$1,(4),ch);
} else {
if((state_val_12475 === (11))){
var inst_12454 = (state_12474[(8)]);
var inst_12463 = (state_12474[(2)]);
var inst_12451 = inst_12454;
var state_12474__$1 = (function (){var statearr_12487 = state_12474;
(statearr_12487[(7)] = inst_12451);

(statearr_12487[(10)] = inst_12463);

return statearr_12487;
})();
var statearr_12488_13416 = state_12474__$1;
(statearr_12488_13416[(2)] = null);

(statearr_12488_13416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (9))){
var inst_12454 = (state_12474[(8)]);
var state_12474__$1 = state_12474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12474__$1,(11),out,inst_12454);
} else {
if((state_val_12475 === (5))){
var inst_12451 = (state_12474[(7)]);
var inst_12454 = (state_12474[(8)]);
var inst_12458 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12454,inst_12451);
var state_12474__$1 = state_12474;
if(inst_12458){
var statearr_12490_13417 = state_12474__$1;
(statearr_12490_13417[(1)] = (8));

} else {
var statearr_12491_13418 = state_12474__$1;
(statearr_12491_13418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (10))){
var inst_12466 = (state_12474[(2)]);
var state_12474__$1 = state_12474;
var statearr_12492_13419 = state_12474__$1;
(statearr_12492_13419[(2)] = inst_12466);

(statearr_12492_13419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (8))){
var inst_12451 = (state_12474[(7)]);
var tmp12489 = inst_12451;
var inst_12451__$1 = tmp12489;
var state_12474__$1 = (function (){var statearr_12493 = state_12474;
(statearr_12493[(7)] = inst_12451__$1);

return statearr_12493;
})();
var statearr_12494_13421 = state_12474__$1;
(statearr_12494_13421[(2)] = null);

(statearr_12494_13421[(1)] = (2));


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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_12495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12495[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_12495[(1)] = (1));

return statearr_12495;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_12474){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_12474);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e12496){var ex__10552__auto__ = e12496;
var statearr_12497_13422 = state_12474;
(statearr_12497_13422[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_12474[(4)]))){
var statearr_12498_13423 = state_12474;
(statearr_12498_13423[(1)] = cljs.core.first((state_12474[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13424 = state_12474;
state_12474 = G__13424;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_12474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_12474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_12499 = f__10657__auto__();
(statearr_12499[(6)] = c__10656__auto___13410);

return statearr_12499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12501 = arguments.length;
switch (G__12501) {
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
var c__10656__auto___13426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_12543){
var state_val_12544 = (state_12543[(1)]);
if((state_val_12544 === (7))){
var inst_12539 = (state_12543[(2)]);
var state_12543__$1 = state_12543;
var statearr_12545_13427 = state_12543__$1;
(statearr_12545_13427[(2)] = inst_12539);

(statearr_12545_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (1))){
var inst_12506 = (new Array(n));
var inst_12507 = inst_12506;
var inst_12508 = (0);
var state_12543__$1 = (function (){var statearr_12546 = state_12543;
(statearr_12546[(7)] = inst_12507);

(statearr_12546[(8)] = inst_12508);

return statearr_12546;
})();
var statearr_12547_13428 = state_12543__$1;
(statearr_12547_13428[(2)] = null);

(statearr_12547_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (4))){
var inst_12511 = (state_12543[(9)]);
var inst_12511__$1 = (state_12543[(2)]);
var inst_12512 = (inst_12511__$1 == null);
var inst_12513 = cljs.core.not(inst_12512);
var state_12543__$1 = (function (){var statearr_12549 = state_12543;
(statearr_12549[(9)] = inst_12511__$1);

return statearr_12549;
})();
if(inst_12513){
var statearr_12550_13429 = state_12543__$1;
(statearr_12550_13429[(1)] = (5));

} else {
var statearr_12551_13430 = state_12543__$1;
(statearr_12551_13430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (15))){
var inst_12533 = (state_12543[(2)]);
var state_12543__$1 = state_12543;
var statearr_12552_13431 = state_12543__$1;
(statearr_12552_13431[(2)] = inst_12533);

(statearr_12552_13431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (13))){
var state_12543__$1 = state_12543;
var statearr_12553_13432 = state_12543__$1;
(statearr_12553_13432[(2)] = null);

(statearr_12553_13432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (6))){
var inst_12508 = (state_12543[(8)]);
var inst_12529 = (inst_12508 > (0));
var state_12543__$1 = state_12543;
if(cljs.core.truth_(inst_12529)){
var statearr_12554_13433 = state_12543__$1;
(statearr_12554_13433[(1)] = (12));

} else {
var statearr_12555_13434 = state_12543__$1;
(statearr_12555_13434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (3))){
var inst_12541 = (state_12543[(2)]);
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12543__$1,inst_12541);
} else {
if((state_val_12544 === (12))){
var inst_12507 = (state_12543[(7)]);
var inst_12531 = cljs.core.vec(inst_12507);
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12543__$1,(15),out,inst_12531);
} else {
if((state_val_12544 === (2))){
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12543__$1,(4),ch);
} else {
if((state_val_12544 === (11))){
var inst_12523 = (state_12543[(2)]);
var inst_12524 = (new Array(n));
var inst_12507 = inst_12524;
var inst_12508 = (0);
var state_12543__$1 = (function (){var statearr_12556 = state_12543;
(statearr_12556[(7)] = inst_12507);

(statearr_12556[(10)] = inst_12523);

(statearr_12556[(8)] = inst_12508);

return statearr_12556;
})();
var statearr_12557_13435 = state_12543__$1;
(statearr_12557_13435[(2)] = null);

(statearr_12557_13435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (9))){
var inst_12507 = (state_12543[(7)]);
var inst_12521 = cljs.core.vec(inst_12507);
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12543__$1,(11),out,inst_12521);
} else {
if((state_val_12544 === (5))){
var inst_12511 = (state_12543[(9)]);
var inst_12516 = (state_12543[(11)]);
var inst_12507 = (state_12543[(7)]);
var inst_12508 = (state_12543[(8)]);
var inst_12515 = (inst_12507[inst_12508] = inst_12511);
var inst_12516__$1 = (inst_12508 + (1));
var inst_12517 = (inst_12516__$1 < n);
var state_12543__$1 = (function (){var statearr_12558 = state_12543;
(statearr_12558[(11)] = inst_12516__$1);

(statearr_12558[(12)] = inst_12515);

return statearr_12558;
})();
if(cljs.core.truth_(inst_12517)){
var statearr_12559_13436 = state_12543__$1;
(statearr_12559_13436[(1)] = (8));

} else {
var statearr_12560_13437 = state_12543__$1;
(statearr_12560_13437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (14))){
var inst_12536 = (state_12543[(2)]);
var inst_12537 = cljs.core.async.close_BANG_(out);
var state_12543__$1 = (function (){var statearr_12562 = state_12543;
(statearr_12562[(13)] = inst_12536);

return statearr_12562;
})();
var statearr_12563_13438 = state_12543__$1;
(statearr_12563_13438[(2)] = inst_12537);

(statearr_12563_13438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (10))){
var inst_12527 = (state_12543[(2)]);
var state_12543__$1 = state_12543;
var statearr_12564_13439 = state_12543__$1;
(statearr_12564_13439[(2)] = inst_12527);

(statearr_12564_13439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (8))){
var inst_12516 = (state_12543[(11)]);
var inst_12507 = (state_12543[(7)]);
var tmp12561 = inst_12507;
var inst_12507__$1 = tmp12561;
var inst_12508 = inst_12516;
var state_12543__$1 = (function (){var statearr_12565 = state_12543;
(statearr_12565[(7)] = inst_12507__$1);

(statearr_12565[(8)] = inst_12508);

return statearr_12565;
})();
var statearr_12566_13440 = state_12543__$1;
(statearr_12566_13440[(2)] = null);

(statearr_12566_13440[(1)] = (2));


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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_12567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12567[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_12567[(1)] = (1));

return statearr_12567;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_12543){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_12543);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e12572){var ex__10552__auto__ = e12572;
var statearr_12573_13441 = state_12543;
(statearr_12573_13441[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_12543[(4)]))){
var statearr_12574_13442 = state_12543;
(statearr_12574_13442[(1)] = cljs.core.first((state_12543[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13443 = state_12543;
state_12543 = G__13443;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_12543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_12543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_12579 = f__10657__auto__();
(statearr_12579[(6)] = c__10656__auto___13426);

return statearr_12579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12585 = arguments.length;
switch (G__12585) {
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
var c__10656__auto___13445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10657__auto__ = (function (){var switch__10548__auto__ = (function (state_12632){
var state_val_12633 = (state_12632[(1)]);
if((state_val_12633 === (7))){
var inst_12628 = (state_12632[(2)]);
var state_12632__$1 = state_12632;
var statearr_12634_13446 = state_12632__$1;
(statearr_12634_13446[(2)] = inst_12628);

(statearr_12634_13446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (1))){
var inst_12588 = [];
var inst_12589 = inst_12588;
var inst_12590 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12632__$1 = (function (){var statearr_12635 = state_12632;
(statearr_12635[(7)] = inst_12590);

(statearr_12635[(8)] = inst_12589);

return statearr_12635;
})();
var statearr_12638_13447 = state_12632__$1;
(statearr_12638_13447[(2)] = null);

(statearr_12638_13447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (4))){
var inst_12595 = (state_12632[(9)]);
var inst_12595__$1 = (state_12632[(2)]);
var inst_12596 = (inst_12595__$1 == null);
var inst_12597 = cljs.core.not(inst_12596);
var state_12632__$1 = (function (){var statearr_12645 = state_12632;
(statearr_12645[(9)] = inst_12595__$1);

return statearr_12645;
})();
if(inst_12597){
var statearr_12646_13448 = state_12632__$1;
(statearr_12646_13448[(1)] = (5));

} else {
var statearr_12647_13449 = state_12632__$1;
(statearr_12647_13449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (15))){
var inst_12622 = (state_12632[(2)]);
var state_12632__$1 = state_12632;
var statearr_12648_13450 = state_12632__$1;
(statearr_12648_13450[(2)] = inst_12622);

(statearr_12648_13450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (13))){
var state_12632__$1 = state_12632;
var statearr_12649_13451 = state_12632__$1;
(statearr_12649_13451[(2)] = null);

(statearr_12649_13451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (6))){
var inst_12589 = (state_12632[(8)]);
var inst_12617 = inst_12589.length;
var inst_12618 = (inst_12617 > (0));
var state_12632__$1 = state_12632;
if(cljs.core.truth_(inst_12618)){
var statearr_12650_13452 = state_12632__$1;
(statearr_12650_13452[(1)] = (12));

} else {
var statearr_12651_13453 = state_12632__$1;
(statearr_12651_13453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (3))){
var inst_12630 = (state_12632[(2)]);
var state_12632__$1 = state_12632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12632__$1,inst_12630);
} else {
if((state_val_12633 === (12))){
var inst_12589 = (state_12632[(8)]);
var inst_12620 = cljs.core.vec(inst_12589);
var state_12632__$1 = state_12632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12632__$1,(15),out,inst_12620);
} else {
if((state_val_12633 === (2))){
var state_12632__$1 = state_12632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12632__$1,(4),ch);
} else {
if((state_val_12633 === (11))){
var inst_12595 = (state_12632[(9)]);
var inst_12599 = (state_12632[(10)]);
var inst_12610 = (state_12632[(2)]);
var inst_12611 = [];
var inst_12612 = inst_12611.push(inst_12595);
var inst_12589 = inst_12611;
var inst_12590 = inst_12599;
var state_12632__$1 = (function (){var statearr_12664 = state_12632;
(statearr_12664[(7)] = inst_12590);

(statearr_12664[(11)] = inst_12612);

(statearr_12664[(8)] = inst_12589);

(statearr_12664[(12)] = inst_12610);

return statearr_12664;
})();
var statearr_12667_13454 = state_12632__$1;
(statearr_12667_13454[(2)] = null);

(statearr_12667_13454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (9))){
var inst_12589 = (state_12632[(8)]);
var inst_12608 = cljs.core.vec(inst_12589);
var state_12632__$1 = state_12632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12632__$1,(11),out,inst_12608);
} else {
if((state_val_12633 === (5))){
var inst_12595 = (state_12632[(9)]);
var inst_12590 = (state_12632[(7)]);
var inst_12599 = (state_12632[(10)]);
var inst_12599__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12595) : f.call(null,inst_12595));
var inst_12601 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12599__$1,inst_12590);
var inst_12602 = cljs.core.keyword_identical_QMARK_(inst_12590,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12603 = ((inst_12601) || (inst_12602));
var state_12632__$1 = (function (){var statearr_12671 = state_12632;
(statearr_12671[(10)] = inst_12599__$1);

return statearr_12671;
})();
if(cljs.core.truth_(inst_12603)){
var statearr_12672_13455 = state_12632__$1;
(statearr_12672_13455[(1)] = (8));

} else {
var statearr_12673_13456 = state_12632__$1;
(statearr_12673_13456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (14))){
var inst_12625 = (state_12632[(2)]);
var inst_12626 = cljs.core.async.close_BANG_(out);
var state_12632__$1 = (function (){var statearr_12678 = state_12632;
(statearr_12678[(13)] = inst_12625);

return statearr_12678;
})();
var statearr_12679_13457 = state_12632__$1;
(statearr_12679_13457[(2)] = inst_12626);

(statearr_12679_13457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (10))){
var inst_12615 = (state_12632[(2)]);
var state_12632__$1 = state_12632;
var statearr_12680_13458 = state_12632__$1;
(statearr_12680_13458[(2)] = inst_12615);

(statearr_12680_13458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (8))){
var inst_12595 = (state_12632[(9)]);
var inst_12599 = (state_12632[(10)]);
var inst_12589 = (state_12632[(8)]);
var inst_12605 = inst_12589.push(inst_12595);
var tmp12676 = inst_12589;
var inst_12589__$1 = tmp12676;
var inst_12590 = inst_12599;
var state_12632__$1 = (function (){var statearr_12683 = state_12632;
(statearr_12683[(7)] = inst_12590);

(statearr_12683[(14)] = inst_12605);

(statearr_12683[(8)] = inst_12589__$1);

return statearr_12683;
})();
var statearr_12684_13459 = state_12632__$1;
(statearr_12684_13459[(2)] = null);

(statearr_12684_13459[(1)] = (2));


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
var cljs$core$async$state_machine__10549__auto__ = null;
var cljs$core$async$state_machine__10549__auto____0 = (function (){
var statearr_12685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12685[(0)] = cljs$core$async$state_machine__10549__auto__);

(statearr_12685[(1)] = (1));

return statearr_12685;
});
var cljs$core$async$state_machine__10549__auto____1 = (function (state_12632){
while(true){
var ret_value__10550__auto__ = (function (){try{while(true){
var result__10551__auto__ = switch__10548__auto__(state_12632);
if(cljs.core.keyword_identical_QMARK_(result__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10551__auto__;
}
break;
}
}catch (e12687){var ex__10552__auto__ = e12687;
var statearr_12688_13460 = state_12632;
(statearr_12688_13460[(2)] = ex__10552__auto__);


if(cljs.core.seq((state_12632[(4)]))){
var statearr_12689_13461 = state_12632;
(statearr_12689_13461[(1)] = cljs.core.first((state_12632[(4)])));

} else {
throw ex__10552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13462 = state_12632;
state_12632 = G__13462;
continue;
} else {
return ret_value__10550__auto__;
}
break;
}
});
cljs$core$async$state_machine__10549__auto__ = function(state_12632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10549__auto____1.call(this,state_12632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10549__auto____0;
cljs$core$async$state_machine__10549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10549__auto____1;
return cljs$core$async$state_machine__10549__auto__;
})()
})();
var state__10658__auto__ = (function (){var statearr_12691 = f__10657__auto__();
(statearr_12691[(6)] = c__10656__auto___13445);

return statearr_12691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10658__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
