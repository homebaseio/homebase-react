goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10713 = arguments.length;
switch (G__10713) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10714 = (function (f,blockable,meta10715){
this.f = f;
this.blockable = blockable;
this.meta10715 = meta10715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10716,meta10715__$1){
var self__ = this;
var _10716__$1 = this;
return (new cljs.core.async.t_cljs$core$async10714(self__.f,self__.blockable,meta10715__$1));
}));

(cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10716){
var self__ = this;
var _10716__$1 = this;
return self__.meta10715;
}));

(cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10715","meta10715",-594021759,null)], null);
}));

(cljs.core.async.t_cljs$core$async10714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10714");

(cljs.core.async.t_cljs$core$async10714.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10714.
 */
cljs.core.async.__GT_t_cljs$core$async10714 = (function cljs$core$async$__GT_t_cljs$core$async10714(f__$1,blockable__$1,meta10715){
return (new cljs.core.async.t_cljs$core$async10714(f__$1,blockable__$1,meta10715));
});

}

return (new cljs.core.async.t_cljs$core$async10714(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10720 = arguments.length;
switch (G__10720) {
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
var G__10722 = arguments.length;
switch (G__10722) {
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
var G__10724 = arguments.length;
switch (G__10724) {
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
var val_12661 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12661) : fn1.call(null,val_12661));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12661) : fn1.call(null,val_12661));
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
var G__10726 = arguments.length;
switch (G__10726) {
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
var n__4613__auto___12674 = n;
var x_12675 = (0);
while(true){
if((x_12675 < n__4613__auto___12674)){
(a[x_12675] = x_12675);

var G__12676 = (x_12675 + (1));
x_12675 = G__12676;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10730 = (function (flag,meta10731){
this.flag = flag;
this.meta10731 = meta10731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10732,meta10731__$1){
var self__ = this;
var _10732__$1 = this;
return (new cljs.core.async.t_cljs$core$async10730(self__.flag,meta10731__$1));
}));

(cljs.core.async.t_cljs$core$async10730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10732){
var self__ = this;
var _10732__$1 = this;
return self__.meta10731;
}));

(cljs.core.async.t_cljs$core$async10730.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10731","meta10731",-1173270308,null)], null);
}));

(cljs.core.async.t_cljs$core$async10730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10730");

(cljs.core.async.t_cljs$core$async10730.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10730.
 */
cljs.core.async.__GT_t_cljs$core$async10730 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10730(flag__$1,meta10731){
return (new cljs.core.async.t_cljs$core$async10730(flag__$1,meta10731));
});

}

return (new cljs.core.async.t_cljs$core$async10730(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10733 = (function (flag,cb,meta10734){
this.flag = flag;
this.cb = cb;
this.meta10734 = meta10734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10735,meta10734__$1){
var self__ = this;
var _10735__$1 = this;
return (new cljs.core.async.t_cljs$core$async10733(self__.flag,self__.cb,meta10734__$1));
}));

(cljs.core.async.t_cljs$core$async10733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10735){
var self__ = this;
var _10735__$1 = this;
return self__.meta10734;
}));

(cljs.core.async.t_cljs$core$async10733.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10733.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10734","meta10734",-581752660,null)], null);
}));

(cljs.core.async.t_cljs$core$async10733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10733");

(cljs.core.async.t_cljs$core$async10733.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10733.
 */
cljs.core.async.__GT_t_cljs$core$async10733 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10733(flag__$1,cb__$1,meta10734){
return (new cljs.core.async.t_cljs$core$async10733(flag__$1,cb__$1,meta10734));
});

}

return (new cljs.core.async.t_cljs$core$async10733(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10742_SHARP_){
var G__10744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10742_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10744) : fret.call(null,G__10744));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10743_SHARP_){
var G__10745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10743_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10745) : fret.call(null,G__10745));
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
var G__12682 = (i + (1));
i = G__12682;
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
var len__4736__auto___12686 = arguments.length;
var i__4737__auto___12687 = (0);
while(true){
if((i__4737__auto___12687 < len__4736__auto___12686)){
args__4742__auto__.push((arguments[i__4737__auto___12687]));

var G__12688 = (i__4737__auto___12687 + (1));
i__4737__auto___12687 = G__12688;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10753){
var map__10754 = p__10753;
var map__10754__$1 = (((((!((map__10754 == null))))?(((((map__10754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10754):map__10754);
var opts = map__10754__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10746){
var G__10747 = cljs.core.first(seq10746);
var seq10746__$1 = cljs.core.next(seq10746);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10747,seq10746__$1);
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
var G__10757 = arguments.length;
switch (G__10757) {
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
var c__10636__auto___12697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_10781){
var state_val_10782 = (state_10781[(1)]);
if((state_val_10782 === (7))){
var inst_10777 = (state_10781[(2)]);
var state_10781__$1 = state_10781;
var statearr_10783_12700 = state_10781__$1;
(statearr_10783_12700[(2)] = inst_10777);

(statearr_10783_12700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (1))){
var state_10781__$1 = state_10781;
var statearr_10784_12701 = state_10781__$1;
(statearr_10784_12701[(2)] = null);

(statearr_10784_12701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (4))){
var inst_10760 = (state_10781[(7)]);
var inst_10760__$1 = (state_10781[(2)]);
var inst_10761 = (inst_10760__$1 == null);
var state_10781__$1 = (function (){var statearr_10785 = state_10781;
(statearr_10785[(7)] = inst_10760__$1);

return statearr_10785;
})();
if(cljs.core.truth_(inst_10761)){
var statearr_10786_12702 = state_10781__$1;
(statearr_10786_12702[(1)] = (5));

} else {
var statearr_10787_12703 = state_10781__$1;
(statearr_10787_12703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (13))){
var state_10781__$1 = state_10781;
var statearr_10788_12704 = state_10781__$1;
(statearr_10788_12704[(2)] = null);

(statearr_10788_12704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (6))){
var inst_10760 = (state_10781[(7)]);
var state_10781__$1 = state_10781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10781__$1,(11),to,inst_10760);
} else {
if((state_val_10782 === (3))){
var inst_10779 = (state_10781[(2)]);
var state_10781__$1 = state_10781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10781__$1,inst_10779);
} else {
if((state_val_10782 === (12))){
var state_10781__$1 = state_10781;
var statearr_10789_12705 = state_10781__$1;
(statearr_10789_12705[(2)] = null);

(statearr_10789_12705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (2))){
var state_10781__$1 = state_10781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10781__$1,(4),from);
} else {
if((state_val_10782 === (11))){
var inst_10770 = (state_10781[(2)]);
var state_10781__$1 = state_10781;
if(cljs.core.truth_(inst_10770)){
var statearr_10790_12706 = state_10781__$1;
(statearr_10790_12706[(1)] = (12));

} else {
var statearr_10791_12707 = state_10781__$1;
(statearr_10791_12707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (9))){
var state_10781__$1 = state_10781;
var statearr_10792_12708 = state_10781__$1;
(statearr_10792_12708[(2)] = null);

(statearr_10792_12708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (5))){
var state_10781__$1 = state_10781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10793_12709 = state_10781__$1;
(statearr_10793_12709[(1)] = (8));

} else {
var statearr_10794_12710 = state_10781__$1;
(statearr_10794_12710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (14))){
var inst_10775 = (state_10781[(2)]);
var state_10781__$1 = state_10781;
var statearr_10795_12711 = state_10781__$1;
(statearr_10795_12711[(2)] = inst_10775);

(statearr_10795_12711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (10))){
var inst_10767 = (state_10781[(2)]);
var state_10781__$1 = state_10781;
var statearr_10796_12712 = state_10781__$1;
(statearr_10796_12712[(2)] = inst_10767);

(statearr_10796_12712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10782 === (8))){
var inst_10764 = cljs.core.async.close_BANG_(to);
var state_10781__$1 = state_10781;
var statearr_10797_12713 = state_10781__$1;
(statearr_10797_12713[(2)] = inst_10764);

(statearr_10797_12713[(1)] = (10));


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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_10798 = [null,null,null,null,null,null,null,null];
(statearr_10798[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_10798[(1)] = (1));

return statearr_10798;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_10781){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_10781);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e10799){var ex__10549__auto__ = e10799;
var statearr_10800_12714 = state_10781;
(statearr_10800_12714[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_10781[(4)]))){
var statearr_10801_12715 = state_10781;
(statearr_10801_12715[(1)] = cljs.core.first((state_10781[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12716 = state_10781;
state_10781 = G__12716;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_10781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_10781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_10802 = f__10637__auto__();
(statearr_10802[(6)] = c__10636__auto___12697);

return statearr_10802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
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
var process = (function (p__10809){
var vec__10810 = p__10809;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10810,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10810,(1),null);
var job = vec__10810;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10636__auto___12717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_10817){
var state_val_10818 = (state_10817[(1)]);
if((state_val_10818 === (1))){
var state_10817__$1 = state_10817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10817__$1,(2),res,v);
} else {
if((state_val_10818 === (2))){
var inst_10814 = (state_10817[(2)]);
var inst_10815 = cljs.core.async.close_BANG_(res);
var state_10817__$1 = (function (){var statearr_10819 = state_10817;
(statearr_10819[(7)] = inst_10814);

return statearr_10819;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10817__$1,inst_10815);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_10820 = [null,null,null,null,null,null,null,null];
(statearr_10820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_10820[(1)] = (1));

return statearr_10820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_10817){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_10817);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e10821){var ex__10549__auto__ = e10821;
var statearr_10822_12725 = state_10817;
(statearr_10822_12725[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_10817[(4)]))){
var statearr_10823_12726 = state_10817;
(statearr_10823_12726[(1)] = cljs.core.first((state_10817[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12727 = state_10817;
state_10817 = G__12727;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_10817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_10817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_10824 = f__10637__auto__();
(statearr_10824[(6)] = c__10636__auto___12717);

return statearr_10824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__10825){
var vec__10826 = p__10825;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10826,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10826,(1),null);
var job = vec__10826;
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
var n__4613__auto___12728 = n;
var __12729 = (0);
while(true){
if((__12729 < n__4613__auto___12728)){
var G__10841_12730 = type;
var G__10841_12731__$1 = (((G__10841_12730 instanceof cljs.core.Keyword))?G__10841_12730.fqn:null);
switch (G__10841_12731__$1) {
case "compute":
var c__10636__auto___12733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12729,c__10636__auto___12733,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = ((function (__12729,c__10636__auto___12733,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function (state_10854){
var state_val_10855 = (state_10854[(1)]);
if((state_val_10855 === (1))){
var state_10854__$1 = state_10854;
var statearr_10856_12734 = state_10854__$1;
(statearr_10856_12734[(2)] = null);

(statearr_10856_12734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (2))){
var state_10854__$1 = state_10854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10854__$1,(4),jobs);
} else {
if((state_val_10855 === (3))){
var inst_10852 = (state_10854[(2)]);
var state_10854__$1 = state_10854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10854__$1,inst_10852);
} else {
if((state_val_10855 === (4))){
var inst_10844 = (state_10854[(2)]);
var inst_10845 = process(inst_10844);
var state_10854__$1 = state_10854;
if(cljs.core.truth_(inst_10845)){
var statearr_10857_12735 = state_10854__$1;
(statearr_10857_12735[(1)] = (5));

} else {
var statearr_10858_12736 = state_10854__$1;
(statearr_10858_12736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (5))){
var state_10854__$1 = state_10854;
var statearr_10859_12737 = state_10854__$1;
(statearr_10859_12737[(2)] = null);

(statearr_10859_12737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (6))){
var state_10854__$1 = state_10854;
var statearr_10860_12738 = state_10854__$1;
(statearr_10860_12738[(2)] = null);

(statearr_10860_12738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (7))){
var inst_10850 = (state_10854[(2)]);
var state_10854__$1 = state_10854;
var statearr_10861_12739 = state_10854__$1;
(statearr_10861_12739[(2)] = inst_10850);

(statearr_10861_12739[(1)] = (3));


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
});})(__12729,c__10636__auto___12733,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async))
;
return ((function (__12729,switch__10545__auto__,c__10636__auto___12733,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_10862 = [null,null,null,null,null,null,null];
(statearr_10862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_10862[(1)] = (1));

return statearr_10862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_10854){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_10854);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e10863){var ex__10549__auto__ = e10863;
var statearr_10864_12740 = state_10854;
(statearr_10864_12740[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_10854[(4)]))){
var statearr_10865_12741 = state_10854;
(statearr_10865_12741[(1)] = cljs.core.first((state_10854[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12744 = state_10854;
state_10854 = G__12744;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_10854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_10854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
;})(__12729,switch__10545__auto__,c__10636__auto___12733,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async))
})();
var state__10638__auto__ = (function (){var statearr_10866 = f__10637__auto__();
(statearr_10866[(6)] = c__10636__auto___12733);

return statearr_10866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
});})(__12729,c__10636__auto___12733,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async))
);


break;
case "async":
var c__10636__auto___12745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12729,c__10636__auto___12745,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = ((function (__12729,c__10636__auto___12745,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function (state_10879){
var state_val_10880 = (state_10879[(1)]);
if((state_val_10880 === (1))){
var state_10879__$1 = state_10879;
var statearr_10881_12746 = state_10879__$1;
(statearr_10881_12746[(2)] = null);

(statearr_10881_12746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10880 === (2))){
var state_10879__$1 = state_10879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10879__$1,(4),jobs);
} else {
if((state_val_10880 === (3))){
var inst_10877 = (state_10879[(2)]);
var state_10879__$1 = state_10879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10879__$1,inst_10877);
} else {
if((state_val_10880 === (4))){
var inst_10869 = (state_10879[(2)]);
var inst_10870 = async(inst_10869);
var state_10879__$1 = state_10879;
if(cljs.core.truth_(inst_10870)){
var statearr_10882_12747 = state_10879__$1;
(statearr_10882_12747[(1)] = (5));

} else {
var statearr_10883_12748 = state_10879__$1;
(statearr_10883_12748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10880 === (5))){
var state_10879__$1 = state_10879;
var statearr_10884_12749 = state_10879__$1;
(statearr_10884_12749[(2)] = null);

(statearr_10884_12749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10880 === (6))){
var state_10879__$1 = state_10879;
var statearr_10901_12750 = state_10879__$1;
(statearr_10901_12750[(2)] = null);

(statearr_10901_12750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10880 === (7))){
var inst_10875 = (state_10879[(2)]);
var state_10879__$1 = state_10879;
var statearr_10902_12751 = state_10879__$1;
(statearr_10902_12751[(2)] = inst_10875);

(statearr_10902_12751[(1)] = (3));


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
});})(__12729,c__10636__auto___12745,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async))
;
return ((function (__12729,switch__10545__auto__,c__10636__auto___12745,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_10903 = [null,null,null,null,null,null,null];
(statearr_10903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_10903[(1)] = (1));

return statearr_10903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_10879){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_10879);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e10904){var ex__10549__auto__ = e10904;
var statearr_10905_12752 = state_10879;
(statearr_10905_12752[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_10879[(4)]))){
var statearr_10906_12753 = state_10879;
(statearr_10906_12753[(1)] = cljs.core.first((state_10879[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12754 = state_10879;
state_10879 = G__12754;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_10879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_10879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
;})(__12729,switch__10545__auto__,c__10636__auto___12745,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async))
})();
var state__10638__auto__ = (function (){var statearr_10929 = f__10637__auto__();
(statearr_10929[(6)] = c__10636__auto___12745);

return statearr_10929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
});})(__12729,c__10636__auto___12745,G__10841_12730,G__10841_12731__$1,n__4613__auto___12728,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10841_12731__$1)].join('')));

}

var G__12755 = (__12729 + (1));
__12729 = G__12755;
continue;
} else {
}
break;
}

var c__10636__auto___12756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_10951){
var state_val_10952 = (state_10951[(1)]);
if((state_val_10952 === (7))){
var inst_10947 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_10953_12757 = state_10951__$1;
(statearr_10953_12757[(2)] = inst_10947);

(statearr_10953_12757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (1))){
var state_10951__$1 = state_10951;
var statearr_10954_12758 = state_10951__$1;
(statearr_10954_12758[(2)] = null);

(statearr_10954_12758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (4))){
var inst_10932 = (state_10951[(7)]);
var inst_10932__$1 = (state_10951[(2)]);
var inst_10933 = (inst_10932__$1 == null);
var state_10951__$1 = (function (){var statearr_10955 = state_10951;
(statearr_10955[(7)] = inst_10932__$1);

return statearr_10955;
})();
if(cljs.core.truth_(inst_10933)){
var statearr_10956_12759 = state_10951__$1;
(statearr_10956_12759[(1)] = (5));

} else {
var statearr_10957_12760 = state_10951__$1;
(statearr_10957_12760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (6))){
var inst_10937 = (state_10951[(8)]);
var inst_10932 = (state_10951[(7)]);
var inst_10937__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10939 = [inst_10932,inst_10937__$1];
var inst_10940 = (new cljs.core.PersistentVector(null,2,(5),inst_10938,inst_10939,null));
var state_10951__$1 = (function (){var statearr_10958 = state_10951;
(statearr_10958[(8)] = inst_10937__$1);

return statearr_10958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10951__$1,(8),jobs,inst_10940);
} else {
if((state_val_10952 === (3))){
var inst_10949 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10951__$1,inst_10949);
} else {
if((state_val_10952 === (2))){
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10951__$1,(4),from);
} else {
if((state_val_10952 === (9))){
var inst_10944 = (state_10951[(2)]);
var state_10951__$1 = (function (){var statearr_10959 = state_10951;
(statearr_10959[(9)] = inst_10944);

return statearr_10959;
})();
var statearr_10960_12769 = state_10951__$1;
(statearr_10960_12769[(2)] = null);

(statearr_10960_12769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (5))){
var inst_10935 = cljs.core.async.close_BANG_(jobs);
var state_10951__$1 = state_10951;
var statearr_10961_12770 = state_10951__$1;
(statearr_10961_12770[(2)] = inst_10935);

(statearr_10961_12770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (8))){
var inst_10937 = (state_10951[(8)]);
var inst_10942 = (state_10951[(2)]);
var state_10951__$1 = (function (){var statearr_10962 = state_10951;
(statearr_10962[(10)] = inst_10942);

return statearr_10962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10951__$1,(9),results,inst_10937);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_10963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_10963[(1)] = (1));

return statearr_10963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_10951){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_10951);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e10964){var ex__10549__auto__ = e10964;
var statearr_10965_12771 = state_10951;
(statearr_10965_12771[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_10951[(4)]))){
var statearr_10966_12772 = state_10951;
(statearr_10966_12772[(1)] = cljs.core.first((state_10951[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12773 = state_10951;
state_10951 = G__12773;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_10951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_10951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_10967 = f__10637__auto__();
(statearr_10967[(6)] = c__10636__auto___12756);

return statearr_10967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));


var c__10636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_11020){
var state_val_11021 = (state_11020[(1)]);
if((state_val_11021 === (7))){
var inst_11016 = (state_11020[(2)]);
var state_11020__$1 = state_11020;
var statearr_11022_12774 = state_11020__$1;
(statearr_11022_12774[(2)] = inst_11016);

(statearr_11022_12774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (20))){
var state_11020__$1 = state_11020;
var statearr_11023_12775 = state_11020__$1;
(statearr_11023_12775[(2)] = null);

(statearr_11023_12775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (1))){
var state_11020__$1 = state_11020;
var statearr_11024_12776 = state_11020__$1;
(statearr_11024_12776[(2)] = null);

(statearr_11024_12776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (4))){
var inst_10970 = (state_11020[(7)]);
var inst_10970__$1 = (state_11020[(2)]);
var inst_10971 = (inst_10970__$1 == null);
var state_11020__$1 = (function (){var statearr_11025 = state_11020;
(statearr_11025[(7)] = inst_10970__$1);

return statearr_11025;
})();
if(cljs.core.truth_(inst_10971)){
var statearr_11026_12777 = state_11020__$1;
(statearr_11026_12777[(1)] = (5));

} else {
var statearr_11027_12778 = state_11020__$1;
(statearr_11027_12778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (15))){
var inst_10998 = (state_11020[(8)]);
var state_11020__$1 = state_11020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11020__$1,(18),to,inst_10998);
} else {
if((state_val_11021 === (21))){
var inst_11011 = (state_11020[(2)]);
var state_11020__$1 = state_11020;
var statearr_11028_12779 = state_11020__$1;
(statearr_11028_12779[(2)] = inst_11011);

(statearr_11028_12779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (13))){
var inst_11013 = (state_11020[(2)]);
var state_11020__$1 = (function (){var statearr_11029 = state_11020;
(statearr_11029[(9)] = inst_11013);

return statearr_11029;
})();
var statearr_11030_12780 = state_11020__$1;
(statearr_11030_12780[(2)] = null);

(statearr_11030_12780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (6))){
var inst_10970 = (state_11020[(7)]);
var state_11020__$1 = state_11020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11020__$1,(11),inst_10970);
} else {
if((state_val_11021 === (17))){
var inst_11006 = (state_11020[(2)]);
var state_11020__$1 = state_11020;
if(cljs.core.truth_(inst_11006)){
var statearr_11031_12781 = state_11020__$1;
(statearr_11031_12781[(1)] = (19));

} else {
var statearr_11032_12782 = state_11020__$1;
(statearr_11032_12782[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (3))){
var inst_11018 = (state_11020[(2)]);
var state_11020__$1 = state_11020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11020__$1,inst_11018);
} else {
if((state_val_11021 === (12))){
var inst_10995 = (state_11020[(10)]);
var state_11020__$1 = state_11020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11020__$1,(14),inst_10995);
} else {
if((state_val_11021 === (2))){
var state_11020__$1 = state_11020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11020__$1,(4),results);
} else {
if((state_val_11021 === (19))){
var state_11020__$1 = state_11020;
var statearr_11051_12783 = state_11020__$1;
(statearr_11051_12783[(2)] = null);

(statearr_11051_12783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (11))){
var inst_10995 = (state_11020[(2)]);
var state_11020__$1 = (function (){var statearr_11052 = state_11020;
(statearr_11052[(10)] = inst_10995);

return statearr_11052;
})();
var statearr_11053_12784 = state_11020__$1;
(statearr_11053_12784[(2)] = null);

(statearr_11053_12784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (9))){
var state_11020__$1 = state_11020;
var statearr_11054_12785 = state_11020__$1;
(statearr_11054_12785[(2)] = null);

(statearr_11054_12785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (5))){
var state_11020__$1 = state_11020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11055_12786 = state_11020__$1;
(statearr_11055_12786[(1)] = (8));

} else {
var statearr_11056_12787 = state_11020__$1;
(statearr_11056_12787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (14))){
var inst_10998 = (state_11020[(8)]);
var inst_10998__$1 = (state_11020[(2)]);
var inst_10999 = (inst_10998__$1 == null);
var inst_11000 = cljs.core.not(inst_10999);
var state_11020__$1 = (function (){var statearr_11057 = state_11020;
(statearr_11057[(8)] = inst_10998__$1);

return statearr_11057;
})();
if(inst_11000){
var statearr_11058_12788 = state_11020__$1;
(statearr_11058_12788[(1)] = (15));

} else {
var statearr_11059_12789 = state_11020__$1;
(statearr_11059_12789[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (16))){
var state_11020__$1 = state_11020;
var statearr_11060_12790 = state_11020__$1;
(statearr_11060_12790[(2)] = false);

(statearr_11060_12790[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (10))){
var inst_10992 = (state_11020[(2)]);
var state_11020__$1 = state_11020;
var statearr_11061_12791 = state_11020__$1;
(statearr_11061_12791[(2)] = inst_10992);

(statearr_11061_12791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (18))){
var inst_11003 = (state_11020[(2)]);
var state_11020__$1 = state_11020;
var statearr_11062_12796 = state_11020__$1;
(statearr_11062_12796[(2)] = inst_11003);

(statearr_11062_12796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11021 === (8))){
var inst_10974 = cljs.core.async.close_BANG_(to);
var state_11020__$1 = state_11020;
var statearr_11063_12801 = state_11020__$1;
(statearr_11063_12801[(2)] = inst_10974);

(statearr_11063_12801[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_11064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_11064[(1)] = (1));

return statearr_11064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_11020){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_11020);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11065){var ex__10549__auto__ = e11065;
var statearr_11066_12806 = state_11020;
(statearr_11066_12806[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_11020[(4)]))){
var statearr_11067_12807 = state_11020;
(statearr_11067_12807[(1)] = cljs.core.first((state_11020[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12808 = state_11020;
state_11020 = G__12808;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_11020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_11020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_11078 = f__10637__auto__();
(statearr_11078[(6)] = c__10636__auto__);

return statearr_11078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));

return c__10636__auto__;
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
var G__11080 = arguments.length;
switch (G__11080) {
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
var G__11082 = arguments.length;
switch (G__11082) {
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
var G__11100 = arguments.length;
switch (G__11100) {
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
var c__10636__auto___12812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_11126){
var state_val_11127 = (state_11126[(1)]);
if((state_val_11127 === (7))){
var inst_11122 = (state_11126[(2)]);
var state_11126__$1 = state_11126;
var statearr_11128_12813 = state_11126__$1;
(statearr_11128_12813[(2)] = inst_11122);

(statearr_11128_12813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (1))){
var state_11126__$1 = state_11126;
var statearr_11129_12814 = state_11126__$1;
(statearr_11129_12814[(2)] = null);

(statearr_11129_12814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (4))){
var inst_11103 = (state_11126[(7)]);
var inst_11103__$1 = (state_11126[(2)]);
var inst_11104 = (inst_11103__$1 == null);
var state_11126__$1 = (function (){var statearr_11131 = state_11126;
(statearr_11131[(7)] = inst_11103__$1);

return statearr_11131;
})();
if(cljs.core.truth_(inst_11104)){
var statearr_11133_12815 = state_11126__$1;
(statearr_11133_12815[(1)] = (5));

} else {
var statearr_11135_12816 = state_11126__$1;
(statearr_11135_12816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (13))){
var state_11126__$1 = state_11126;
var statearr_11137_12817 = state_11126__$1;
(statearr_11137_12817[(2)] = null);

(statearr_11137_12817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (6))){
var inst_11103 = (state_11126[(7)]);
var inst_11109 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11103) : p.call(null,inst_11103));
var state_11126__$1 = state_11126;
if(cljs.core.truth_(inst_11109)){
var statearr_11138_12818 = state_11126__$1;
(statearr_11138_12818[(1)] = (9));

} else {
var statearr_11139_12819 = state_11126__$1;
(statearr_11139_12819[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (3))){
var inst_11124 = (state_11126[(2)]);
var state_11126__$1 = state_11126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11126__$1,inst_11124);
} else {
if((state_val_11127 === (12))){
var state_11126__$1 = state_11126;
var statearr_11140_12820 = state_11126__$1;
(statearr_11140_12820[(2)] = null);

(statearr_11140_12820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (2))){
var state_11126__$1 = state_11126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11126__$1,(4),ch);
} else {
if((state_val_11127 === (11))){
var inst_11103 = (state_11126[(7)]);
var inst_11113 = (state_11126[(2)]);
var state_11126__$1 = state_11126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11126__$1,(8),inst_11113,inst_11103);
} else {
if((state_val_11127 === (9))){
var state_11126__$1 = state_11126;
var statearr_11141_12821 = state_11126__$1;
(statearr_11141_12821[(2)] = tc);

(statearr_11141_12821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (5))){
var inst_11106 = cljs.core.async.close_BANG_(tc);
var inst_11107 = cljs.core.async.close_BANG_(fc);
var state_11126__$1 = (function (){var statearr_11142 = state_11126;
(statearr_11142[(8)] = inst_11106);

return statearr_11142;
})();
var statearr_11143_12822 = state_11126__$1;
(statearr_11143_12822[(2)] = inst_11107);

(statearr_11143_12822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (14))){
var inst_11120 = (state_11126[(2)]);
var state_11126__$1 = state_11126;
var statearr_11144_12823 = state_11126__$1;
(statearr_11144_12823[(2)] = inst_11120);

(statearr_11144_12823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (10))){
var state_11126__$1 = state_11126;
var statearr_11145_12824 = state_11126__$1;
(statearr_11145_12824[(2)] = fc);

(statearr_11145_12824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11127 === (8))){
var inst_11115 = (state_11126[(2)]);
var state_11126__$1 = state_11126;
if(cljs.core.truth_(inst_11115)){
var statearr_11146_12825 = state_11126__$1;
(statearr_11146_12825[(1)] = (12));

} else {
var statearr_11147_12826 = state_11126__$1;
(statearr_11147_12826[(1)] = (13));

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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_11148 = [null,null,null,null,null,null,null,null,null];
(statearr_11148[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_11148[(1)] = (1));

return statearr_11148;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_11126){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_11126);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11149){var ex__10549__auto__ = e11149;
var statearr_11150_12827 = state_11126;
(statearr_11150_12827[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_11126[(4)]))){
var statearr_11151_12828 = state_11126;
(statearr_11151_12828[(1)] = cljs.core.first((state_11126[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12829 = state_11126;
state_11126 = G__12829;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_11126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_11126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_11152 = f__10637__auto__();
(statearr_11152[(6)] = c__10636__auto___12812);

return statearr_11152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
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
var c__10636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_11174){
var state_val_11175 = (state_11174[(1)]);
if((state_val_11175 === (7))){
var inst_11170 = (state_11174[(2)]);
var state_11174__$1 = state_11174;
var statearr_11176_12841 = state_11174__$1;
(statearr_11176_12841[(2)] = inst_11170);

(statearr_11176_12841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11175 === (1))){
var inst_11153 = init;
var inst_11154 = inst_11153;
var state_11174__$1 = (function (){var statearr_11177 = state_11174;
(statearr_11177[(7)] = inst_11154);

return statearr_11177;
})();
var statearr_11178_12842 = state_11174__$1;
(statearr_11178_12842[(2)] = null);

(statearr_11178_12842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11175 === (4))){
var inst_11157 = (state_11174[(8)]);
var inst_11157__$1 = (state_11174[(2)]);
var inst_11158 = (inst_11157__$1 == null);
var state_11174__$1 = (function (){var statearr_11179 = state_11174;
(statearr_11179[(8)] = inst_11157__$1);

return statearr_11179;
})();
if(cljs.core.truth_(inst_11158)){
var statearr_11180_12843 = state_11174__$1;
(statearr_11180_12843[(1)] = (5));

} else {
var statearr_11181_12844 = state_11174__$1;
(statearr_11181_12844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11175 === (6))){
var inst_11157 = (state_11174[(8)]);
var inst_11154 = (state_11174[(7)]);
var inst_11161 = (state_11174[(9)]);
var inst_11161__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11154,inst_11157) : f.call(null,inst_11154,inst_11157));
var inst_11162 = cljs.core.reduced_QMARK_(inst_11161__$1);
var state_11174__$1 = (function (){var statearr_11182 = state_11174;
(statearr_11182[(9)] = inst_11161__$1);

return statearr_11182;
})();
if(inst_11162){
var statearr_11183_12845 = state_11174__$1;
(statearr_11183_12845[(1)] = (8));

} else {
var statearr_11184_12846 = state_11174__$1;
(statearr_11184_12846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11175 === (3))){
var inst_11172 = (state_11174[(2)]);
var state_11174__$1 = state_11174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11174__$1,inst_11172);
} else {
if((state_val_11175 === (2))){
var state_11174__$1 = state_11174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11174__$1,(4),ch);
} else {
if((state_val_11175 === (9))){
var inst_11161 = (state_11174[(9)]);
var inst_11154 = inst_11161;
var state_11174__$1 = (function (){var statearr_11185 = state_11174;
(statearr_11185[(7)] = inst_11154);

return statearr_11185;
})();
var statearr_11186_12847 = state_11174__$1;
(statearr_11186_12847[(2)] = null);

(statearr_11186_12847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11175 === (5))){
var inst_11154 = (state_11174[(7)]);
var state_11174__$1 = state_11174;
var statearr_11188_12848 = state_11174__$1;
(statearr_11188_12848[(2)] = inst_11154);

(statearr_11188_12848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11175 === (10))){
var inst_11168 = (state_11174[(2)]);
var state_11174__$1 = state_11174;
var statearr_11189_12849 = state_11174__$1;
(statearr_11189_12849[(2)] = inst_11168);

(statearr_11189_12849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11175 === (8))){
var inst_11161 = (state_11174[(9)]);
var inst_11164 = cljs.core.deref(inst_11161);
var state_11174__$1 = state_11174;
var statearr_11190_12850 = state_11174__$1;
(statearr_11190_12850[(2)] = inst_11164);

(statearr_11190_12850[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10546__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10546__auto____0 = (function (){
var statearr_11194 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11194[(0)] = cljs$core$async$reduce_$_state_machine__10546__auto__);

(statearr_11194[(1)] = (1));

return statearr_11194;
});
var cljs$core$async$reduce_$_state_machine__10546__auto____1 = (function (state_11174){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_11174);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11195){var ex__10549__auto__ = e11195;
var statearr_11196_12851 = state_11174;
(statearr_11196_12851[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_11174[(4)]))){
var statearr_11197_12852 = state_11174;
(statearr_11197_12852[(1)] = cljs.core.first((state_11174[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12853 = state_11174;
state_11174 = G__12853;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10546__auto__ = function(state_11174){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10546__auto____1.call(this,state_11174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10546__auto____0;
cljs$core$async$reduce_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10546__auto____1;
return cljs$core$async$reduce_$_state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_11198 = f__10637__auto__();
(statearr_11198[(6)] = c__10636__auto__);

return statearr_11198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));

return c__10636__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_11204){
var state_val_11205 = (state_11204[(1)]);
if((state_val_11205 === (1))){
var inst_11199 = cljs.core.async.reduce(f__$1,init,ch);
var state_11204__$1 = state_11204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11204__$1,(2),inst_11199);
} else {
if((state_val_11205 === (2))){
var inst_11201 = (state_11204[(2)]);
var inst_11202 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11201) : f__$1.call(null,inst_11201));
var state_11204__$1 = state_11204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11204__$1,inst_11202);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10546__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10546__auto____0 = (function (){
var statearr_11206 = [null,null,null,null,null,null,null];
(statearr_11206[(0)] = cljs$core$async$transduce_$_state_machine__10546__auto__);

(statearr_11206[(1)] = (1));

return statearr_11206;
});
var cljs$core$async$transduce_$_state_machine__10546__auto____1 = (function (state_11204){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_11204);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11207){var ex__10549__auto__ = e11207;
var statearr_11220_12867 = state_11204;
(statearr_11220_12867[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_11204[(4)]))){
var statearr_11222_12868 = state_11204;
(statearr_11222_12868[(1)] = cljs.core.first((state_11204[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12869 = state_11204;
state_11204 = G__12869;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10546__auto__ = function(state_11204){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10546__auto____1.call(this,state_11204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10546__auto____0;
cljs$core$async$transduce_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10546__auto____1;
return cljs$core$async$transduce_$_state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_11225 = f__10637__auto__();
(statearr_11225[(6)] = c__10636__auto__);

return statearr_11225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));

return c__10636__auto__;
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
var G__11227 = arguments.length;
switch (G__11227) {
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
var c__10636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_11255){
var state_val_11256 = (state_11255[(1)]);
if((state_val_11256 === (7))){
var inst_11236 = (state_11255[(2)]);
var state_11255__$1 = state_11255;
var statearr_11259_12871 = state_11255__$1;
(statearr_11259_12871[(2)] = inst_11236);

(statearr_11259_12871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (1))){
var inst_11229 = cljs.core.seq(coll);
var inst_11230 = inst_11229;
var state_11255__$1 = (function (){var statearr_11260 = state_11255;
(statearr_11260[(7)] = inst_11230);

return statearr_11260;
})();
var statearr_11261_12872 = state_11255__$1;
(statearr_11261_12872[(2)] = null);

(statearr_11261_12872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (4))){
var inst_11230 = (state_11255[(7)]);
var inst_11234 = cljs.core.first(inst_11230);
var state_11255__$1 = state_11255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11255__$1,(7),ch,inst_11234);
} else {
if((state_val_11256 === (13))){
var inst_11249 = (state_11255[(2)]);
var state_11255__$1 = state_11255;
var statearr_11273_12873 = state_11255__$1;
(statearr_11273_12873[(2)] = inst_11249);

(statearr_11273_12873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (6))){
var inst_11239 = (state_11255[(2)]);
var state_11255__$1 = state_11255;
if(cljs.core.truth_(inst_11239)){
var statearr_11276_12874 = state_11255__$1;
(statearr_11276_12874[(1)] = (8));

} else {
var statearr_11278_12875 = state_11255__$1;
(statearr_11278_12875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (3))){
var inst_11253 = (state_11255[(2)]);
var state_11255__$1 = state_11255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11255__$1,inst_11253);
} else {
if((state_val_11256 === (12))){
var state_11255__$1 = state_11255;
var statearr_11279_12876 = state_11255__$1;
(statearr_11279_12876[(2)] = null);

(statearr_11279_12876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (2))){
var inst_11230 = (state_11255[(7)]);
var state_11255__$1 = state_11255;
if(cljs.core.truth_(inst_11230)){
var statearr_11280_12877 = state_11255__$1;
(statearr_11280_12877[(1)] = (4));

} else {
var statearr_11281_12878 = state_11255__$1;
(statearr_11281_12878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (11))){
var inst_11245 = cljs.core.async.close_BANG_(ch);
var state_11255__$1 = state_11255;
var statearr_11283_12879 = state_11255__$1;
(statearr_11283_12879[(2)] = inst_11245);

(statearr_11283_12879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (9))){
var state_11255__$1 = state_11255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11285_12880 = state_11255__$1;
(statearr_11285_12880[(1)] = (11));

} else {
var statearr_11287_12881 = state_11255__$1;
(statearr_11287_12881[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (5))){
var inst_11230 = (state_11255[(7)]);
var state_11255__$1 = state_11255;
var statearr_11290_12882 = state_11255__$1;
(statearr_11290_12882[(2)] = inst_11230);

(statearr_11290_12882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (10))){
var inst_11251 = (state_11255[(2)]);
var state_11255__$1 = state_11255;
var statearr_11291_12883 = state_11255__$1;
(statearr_11291_12883[(2)] = inst_11251);

(statearr_11291_12883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11256 === (8))){
var inst_11230 = (state_11255[(7)]);
var inst_11241 = cljs.core.next(inst_11230);
var inst_11230__$1 = inst_11241;
var state_11255__$1 = (function (){var statearr_11292 = state_11255;
(statearr_11292[(7)] = inst_11230__$1);

return statearr_11292;
})();
var statearr_11293_12884 = state_11255__$1;
(statearr_11293_12884[(2)] = null);

(statearr_11293_12884[(1)] = (2));


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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_11294 = [null,null,null,null,null,null,null,null];
(statearr_11294[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_11294[(1)] = (1));

return statearr_11294;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_11255){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_11255);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11295){var ex__10549__auto__ = e11295;
var statearr_11296_12886 = state_11255;
(statearr_11296_12886[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_11255[(4)]))){
var statearr_11298_12887 = state_11255;
(statearr_11298_12887[(1)] = cljs.core.first((state_11255[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12888 = state_11255;
state_11255 = G__12888;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_11255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_11255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_11303 = f__10637__auto__();
(statearr_11303[(6)] = c__10636__auto__);

return statearr_11303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));

return c__10636__auto__;
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
var G__11305 = arguments.length;
switch (G__11305) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12890 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12890(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12891 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12891(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12892 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12892(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12893 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12893(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11317 = (function (ch,cs,meta11318){
this.ch = ch;
this.cs = cs;
this.meta11318 = meta11318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11319,meta11318__$1){
var self__ = this;
var _11319__$1 = this;
return (new cljs.core.async.t_cljs$core$async11317(self__.ch,self__.cs,meta11318__$1));
}));

(cljs.core.async.t_cljs$core$async11317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11319){
var self__ = this;
var _11319__$1 = this;
return self__.meta11318;
}));

(cljs.core.async.t_cljs$core$async11317.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11317.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11317.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11317.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11317.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11318","meta11318",-168052714,null)], null);
}));

(cljs.core.async.t_cljs$core$async11317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11317");

(cljs.core.async.t_cljs$core$async11317.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11317.
 */
cljs.core.async.__GT_t_cljs$core$async11317 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11317(ch__$1,cs__$1,meta11318){
return (new cljs.core.async.t_cljs$core$async11317(ch__$1,cs__$1,meta11318));
});

}

return (new cljs.core.async.t_cljs$core$async11317(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10636__auto___12909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_11456){
var state_val_11457 = (state_11456[(1)]);
if((state_val_11457 === (7))){
var inst_11451 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11458_12910 = state_11456__$1;
(statearr_11458_12910[(2)] = inst_11451);

(statearr_11458_12910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (20))){
var inst_11353 = (state_11456[(7)]);
var inst_11365 = cljs.core.first(inst_11353);
var inst_11366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11365,(0),null);
var inst_11367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11365,(1),null);
var state_11456__$1 = (function (){var statearr_11459 = state_11456;
(statearr_11459[(8)] = inst_11366);

return statearr_11459;
})();
if(cljs.core.truth_(inst_11367)){
var statearr_11460_12911 = state_11456__$1;
(statearr_11460_12911[(1)] = (22));

} else {
var statearr_11461_12912 = state_11456__$1;
(statearr_11461_12912[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (27))){
var inst_11399 = (state_11456[(9)]);
var inst_11322 = (state_11456[(10)]);
var inst_11397 = (state_11456[(11)]);
var inst_11405 = (state_11456[(12)]);
var inst_11405__$1 = cljs.core._nth(inst_11397,inst_11399);
var inst_11406 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11405__$1,inst_11322,done);
var state_11456__$1 = (function (){var statearr_11463 = state_11456;
(statearr_11463[(12)] = inst_11405__$1);

return statearr_11463;
})();
if(cljs.core.truth_(inst_11406)){
var statearr_11465_12913 = state_11456__$1;
(statearr_11465_12913[(1)] = (30));

} else {
var statearr_11467_12914 = state_11456__$1;
(statearr_11467_12914[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (1))){
var state_11456__$1 = state_11456;
var statearr_11470_12915 = state_11456__$1;
(statearr_11470_12915[(2)] = null);

(statearr_11470_12915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (24))){
var inst_11353 = (state_11456[(7)]);
var inst_11372 = (state_11456[(2)]);
var inst_11373 = cljs.core.next(inst_11353);
var inst_11331 = inst_11373;
var inst_11332 = null;
var inst_11333 = (0);
var inst_11334 = (0);
var state_11456__$1 = (function (){var statearr_11471 = state_11456;
(statearr_11471[(13)] = inst_11331);

(statearr_11471[(14)] = inst_11372);

(statearr_11471[(15)] = inst_11332);

(statearr_11471[(16)] = inst_11333);

(statearr_11471[(17)] = inst_11334);

return statearr_11471;
})();
var statearr_11474_12916 = state_11456__$1;
(statearr_11474_12916[(2)] = null);

(statearr_11474_12916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (39))){
var state_11456__$1 = state_11456;
var statearr_11479_12917 = state_11456__$1;
(statearr_11479_12917[(2)] = null);

(statearr_11479_12917[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (4))){
var inst_11322 = (state_11456[(10)]);
var inst_11322__$1 = (state_11456[(2)]);
var inst_11323 = (inst_11322__$1 == null);
var state_11456__$1 = (function (){var statearr_11480 = state_11456;
(statearr_11480[(10)] = inst_11322__$1);

return statearr_11480;
})();
if(cljs.core.truth_(inst_11323)){
var statearr_11481_12931 = state_11456__$1;
(statearr_11481_12931[(1)] = (5));

} else {
var statearr_11482_12932 = state_11456__$1;
(statearr_11482_12932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (15))){
var inst_11331 = (state_11456[(13)]);
var inst_11332 = (state_11456[(15)]);
var inst_11333 = (state_11456[(16)]);
var inst_11334 = (state_11456[(17)]);
var inst_11349 = (state_11456[(2)]);
var inst_11350 = (inst_11334 + (1));
var tmp11476 = inst_11331;
var tmp11477 = inst_11332;
var tmp11478 = inst_11333;
var inst_11331__$1 = tmp11476;
var inst_11332__$1 = tmp11477;
var inst_11333__$1 = tmp11478;
var inst_11334__$1 = inst_11350;
var state_11456__$1 = (function (){var statearr_11483 = state_11456;
(statearr_11483[(13)] = inst_11331__$1);

(statearr_11483[(18)] = inst_11349);

(statearr_11483[(15)] = inst_11332__$1);

(statearr_11483[(16)] = inst_11333__$1);

(statearr_11483[(17)] = inst_11334__$1);

return statearr_11483;
})();
var statearr_11484_12933 = state_11456__$1;
(statearr_11484_12933[(2)] = null);

(statearr_11484_12933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (21))){
var inst_11376 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11488_12934 = state_11456__$1;
(statearr_11488_12934[(2)] = inst_11376);

(statearr_11488_12934[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (31))){
var inst_11405 = (state_11456[(12)]);
var inst_11409 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11405);
var state_11456__$1 = state_11456;
var statearr_11489_12935 = state_11456__$1;
(statearr_11489_12935[(2)] = inst_11409);

(statearr_11489_12935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (32))){
var inst_11396 = (state_11456[(19)]);
var inst_11398 = (state_11456[(20)]);
var inst_11399 = (state_11456[(9)]);
var inst_11397 = (state_11456[(11)]);
var inst_11411 = (state_11456[(2)]);
var inst_11412 = (inst_11399 + (1));
var tmp11485 = inst_11396;
var tmp11486 = inst_11398;
var tmp11487 = inst_11397;
var inst_11396__$1 = tmp11485;
var inst_11397__$1 = tmp11487;
var inst_11398__$1 = tmp11486;
var inst_11399__$1 = inst_11412;
var state_11456__$1 = (function (){var statearr_11490 = state_11456;
(statearr_11490[(19)] = inst_11396__$1);

(statearr_11490[(20)] = inst_11398__$1);

(statearr_11490[(21)] = inst_11411);

(statearr_11490[(9)] = inst_11399__$1);

(statearr_11490[(11)] = inst_11397__$1);

return statearr_11490;
})();
var statearr_11491_12936 = state_11456__$1;
(statearr_11491_12936[(2)] = null);

(statearr_11491_12936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (40))){
var inst_11424 = (state_11456[(22)]);
var inst_11428 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11424);
var state_11456__$1 = state_11456;
var statearr_11492_12937 = state_11456__$1;
(statearr_11492_12937[(2)] = inst_11428);

(statearr_11492_12937[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (33))){
var inst_11415 = (state_11456[(23)]);
var inst_11417 = cljs.core.chunked_seq_QMARK_(inst_11415);
var state_11456__$1 = state_11456;
if(inst_11417){
var statearr_11493_12938 = state_11456__$1;
(statearr_11493_12938[(1)] = (36));

} else {
var statearr_11494_12939 = state_11456__$1;
(statearr_11494_12939[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (13))){
var inst_11343 = (state_11456[(24)]);
var inst_11346 = cljs.core.async.close_BANG_(inst_11343);
var state_11456__$1 = state_11456;
var statearr_11495_12940 = state_11456__$1;
(statearr_11495_12940[(2)] = inst_11346);

(statearr_11495_12940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (22))){
var inst_11366 = (state_11456[(8)]);
var inst_11369 = cljs.core.async.close_BANG_(inst_11366);
var state_11456__$1 = state_11456;
var statearr_11496_12941 = state_11456__$1;
(statearr_11496_12941[(2)] = inst_11369);

(statearr_11496_12941[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (36))){
var inst_11415 = (state_11456[(23)]);
var inst_11419 = cljs.core.chunk_first(inst_11415);
var inst_11420 = cljs.core.chunk_rest(inst_11415);
var inst_11421 = cljs.core.count(inst_11419);
var inst_11396 = inst_11420;
var inst_11397 = inst_11419;
var inst_11398 = inst_11421;
var inst_11399 = (0);
var state_11456__$1 = (function (){var statearr_11497 = state_11456;
(statearr_11497[(19)] = inst_11396);

(statearr_11497[(20)] = inst_11398);

(statearr_11497[(9)] = inst_11399);

(statearr_11497[(11)] = inst_11397);

return statearr_11497;
})();
var statearr_11498_12942 = state_11456__$1;
(statearr_11498_12942[(2)] = null);

(statearr_11498_12942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (41))){
var inst_11415 = (state_11456[(23)]);
var inst_11430 = (state_11456[(2)]);
var inst_11431 = cljs.core.next(inst_11415);
var inst_11396 = inst_11431;
var inst_11397 = null;
var inst_11398 = (0);
var inst_11399 = (0);
var state_11456__$1 = (function (){var statearr_11499 = state_11456;
(statearr_11499[(19)] = inst_11396);

(statearr_11499[(20)] = inst_11398);

(statearr_11499[(9)] = inst_11399);

(statearr_11499[(25)] = inst_11430);

(statearr_11499[(11)] = inst_11397);

return statearr_11499;
})();
var statearr_11500_12943 = state_11456__$1;
(statearr_11500_12943[(2)] = null);

(statearr_11500_12943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (43))){
var state_11456__$1 = state_11456;
var statearr_11501_12944 = state_11456__$1;
(statearr_11501_12944[(2)] = null);

(statearr_11501_12944[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (29))){
var inst_11439 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11502_12951 = state_11456__$1;
(statearr_11502_12951[(2)] = inst_11439);

(statearr_11502_12951[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (44))){
var inst_11448 = (state_11456[(2)]);
var state_11456__$1 = (function (){var statearr_11503 = state_11456;
(statearr_11503[(26)] = inst_11448);

return statearr_11503;
})();
var statearr_11504_12952 = state_11456__$1;
(statearr_11504_12952[(2)] = null);

(statearr_11504_12952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (6))){
var inst_11386 = (state_11456[(27)]);
var inst_11385 = cljs.core.deref(cs);
var inst_11386__$1 = cljs.core.keys(inst_11385);
var inst_11387 = cljs.core.count(inst_11386__$1);
var inst_11388 = cljs.core.reset_BANG_(dctr,inst_11387);
var inst_11394 = cljs.core.seq(inst_11386__$1);
var inst_11396 = inst_11394;
var inst_11397 = null;
var inst_11398 = (0);
var inst_11399 = (0);
var state_11456__$1 = (function (){var statearr_11505 = state_11456;
(statearr_11505[(19)] = inst_11396);

(statearr_11505[(20)] = inst_11398);

(statearr_11505[(9)] = inst_11399);

(statearr_11505[(28)] = inst_11388);

(statearr_11505[(27)] = inst_11386__$1);

(statearr_11505[(11)] = inst_11397);

return statearr_11505;
})();
var statearr_11506_12953 = state_11456__$1;
(statearr_11506_12953[(2)] = null);

(statearr_11506_12953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (28))){
var inst_11396 = (state_11456[(19)]);
var inst_11415 = (state_11456[(23)]);
var inst_11415__$1 = cljs.core.seq(inst_11396);
var state_11456__$1 = (function (){var statearr_11508 = state_11456;
(statearr_11508[(23)] = inst_11415__$1);

return statearr_11508;
})();
if(inst_11415__$1){
var statearr_11509_12954 = state_11456__$1;
(statearr_11509_12954[(1)] = (33));

} else {
var statearr_11510_12955 = state_11456__$1;
(statearr_11510_12955[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (25))){
var inst_11398 = (state_11456[(20)]);
var inst_11399 = (state_11456[(9)]);
var inst_11401 = (inst_11399 < inst_11398);
var inst_11403 = inst_11401;
var state_11456__$1 = state_11456;
if(cljs.core.truth_(inst_11403)){
var statearr_11512_12956 = state_11456__$1;
(statearr_11512_12956[(1)] = (27));

} else {
var statearr_11513_12957 = state_11456__$1;
(statearr_11513_12957[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (34))){
var state_11456__$1 = state_11456;
var statearr_11514_12958 = state_11456__$1;
(statearr_11514_12958[(2)] = null);

(statearr_11514_12958[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (17))){
var state_11456__$1 = state_11456;
var statearr_11515_12959 = state_11456__$1;
(statearr_11515_12959[(2)] = null);

(statearr_11515_12959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (3))){
var inst_11453 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11456__$1,inst_11453);
} else {
if((state_val_11457 === (12))){
var inst_11381 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11516_12960 = state_11456__$1;
(statearr_11516_12960[(2)] = inst_11381);

(statearr_11516_12960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (2))){
var state_11456__$1 = state_11456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11456__$1,(4),ch);
} else {
if((state_val_11457 === (23))){
var state_11456__$1 = state_11456;
var statearr_11517_12961 = state_11456__$1;
(statearr_11517_12961[(2)] = null);

(statearr_11517_12961[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (35))){
var inst_11437 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11519_12962 = state_11456__$1;
(statearr_11519_12962[(2)] = inst_11437);

(statearr_11519_12962[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (19))){
var inst_11353 = (state_11456[(7)]);
var inst_11357 = cljs.core.chunk_first(inst_11353);
var inst_11358 = cljs.core.chunk_rest(inst_11353);
var inst_11359 = cljs.core.count(inst_11357);
var inst_11331 = inst_11358;
var inst_11332 = inst_11357;
var inst_11333 = inst_11359;
var inst_11334 = (0);
var state_11456__$1 = (function (){var statearr_11521 = state_11456;
(statearr_11521[(13)] = inst_11331);

(statearr_11521[(15)] = inst_11332);

(statearr_11521[(16)] = inst_11333);

(statearr_11521[(17)] = inst_11334);

return statearr_11521;
})();
var statearr_11522_12963 = state_11456__$1;
(statearr_11522_12963[(2)] = null);

(statearr_11522_12963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (11))){
var inst_11331 = (state_11456[(13)]);
var inst_11353 = (state_11456[(7)]);
var inst_11353__$1 = cljs.core.seq(inst_11331);
var state_11456__$1 = (function (){var statearr_11523 = state_11456;
(statearr_11523[(7)] = inst_11353__$1);

return statearr_11523;
})();
if(inst_11353__$1){
var statearr_11524_12964 = state_11456__$1;
(statearr_11524_12964[(1)] = (16));

} else {
var statearr_11525_12965 = state_11456__$1;
(statearr_11525_12965[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (9))){
var inst_11383 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11526_12966 = state_11456__$1;
(statearr_11526_12966[(2)] = inst_11383);

(statearr_11526_12966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (5))){
var inst_11329 = cljs.core.deref(cs);
var inst_11330 = cljs.core.seq(inst_11329);
var inst_11331 = inst_11330;
var inst_11332 = null;
var inst_11333 = (0);
var inst_11334 = (0);
var state_11456__$1 = (function (){var statearr_11529 = state_11456;
(statearr_11529[(13)] = inst_11331);

(statearr_11529[(15)] = inst_11332);

(statearr_11529[(16)] = inst_11333);

(statearr_11529[(17)] = inst_11334);

return statearr_11529;
})();
var statearr_11531_12971 = state_11456__$1;
(statearr_11531_12971[(2)] = null);

(statearr_11531_12971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (14))){
var state_11456__$1 = state_11456;
var statearr_11532_12972 = state_11456__$1;
(statearr_11532_12972[(2)] = null);

(statearr_11532_12972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (45))){
var inst_11445 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11533_12973 = state_11456__$1;
(statearr_11533_12973[(2)] = inst_11445);

(statearr_11533_12973[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (26))){
var inst_11386 = (state_11456[(27)]);
var inst_11441 = (state_11456[(2)]);
var inst_11442 = cljs.core.seq(inst_11386);
var state_11456__$1 = (function (){var statearr_11537 = state_11456;
(statearr_11537[(29)] = inst_11441);

return statearr_11537;
})();
if(inst_11442){
var statearr_11538_12974 = state_11456__$1;
(statearr_11538_12974[(1)] = (42));

} else {
var statearr_11539_12975 = state_11456__$1;
(statearr_11539_12975[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (16))){
var inst_11353 = (state_11456[(7)]);
var inst_11355 = cljs.core.chunked_seq_QMARK_(inst_11353);
var state_11456__$1 = state_11456;
if(inst_11355){
var statearr_11541_12976 = state_11456__$1;
(statearr_11541_12976[(1)] = (19));

} else {
var statearr_11542_12977 = state_11456__$1;
(statearr_11542_12977[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (38))){
var inst_11434 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11543_12978 = state_11456__$1;
(statearr_11543_12978[(2)] = inst_11434);

(statearr_11543_12978[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (30))){
var state_11456__$1 = state_11456;
var statearr_11544_12979 = state_11456__$1;
(statearr_11544_12979[(2)] = null);

(statearr_11544_12979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (10))){
var inst_11332 = (state_11456[(15)]);
var inst_11334 = (state_11456[(17)]);
var inst_11342 = cljs.core._nth(inst_11332,inst_11334);
var inst_11343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11342,(0),null);
var inst_11344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11342,(1),null);
var state_11456__$1 = (function (){var statearr_11547 = state_11456;
(statearr_11547[(24)] = inst_11343);

return statearr_11547;
})();
if(cljs.core.truth_(inst_11344)){
var statearr_11548_12980 = state_11456__$1;
(statearr_11548_12980[(1)] = (13));

} else {
var statearr_11549_12981 = state_11456__$1;
(statearr_11549_12981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (18))){
var inst_11379 = (state_11456[(2)]);
var state_11456__$1 = state_11456;
var statearr_11551_12982 = state_11456__$1;
(statearr_11551_12982[(2)] = inst_11379);

(statearr_11551_12982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (42))){
var state_11456__$1 = state_11456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11456__$1,(45),dchan);
} else {
if((state_val_11457 === (37))){
var inst_11424 = (state_11456[(22)]);
var inst_11322 = (state_11456[(10)]);
var inst_11415 = (state_11456[(23)]);
var inst_11424__$1 = cljs.core.first(inst_11415);
var inst_11425 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11424__$1,inst_11322,done);
var state_11456__$1 = (function (){var statearr_11553 = state_11456;
(statearr_11553[(22)] = inst_11424__$1);

return statearr_11553;
})();
if(cljs.core.truth_(inst_11425)){
var statearr_11554_12983 = state_11456__$1;
(statearr_11554_12983[(1)] = (39));

} else {
var statearr_11555_12984 = state_11456__$1;
(statearr_11555_12984[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11457 === (8))){
var inst_11333 = (state_11456[(16)]);
var inst_11334 = (state_11456[(17)]);
var inst_11336 = (inst_11334 < inst_11333);
var inst_11337 = inst_11336;
var state_11456__$1 = state_11456;
if(cljs.core.truth_(inst_11337)){
var statearr_11558_12985 = state_11456__$1;
(statearr_11558_12985[(1)] = (10));

} else {
var statearr_11559_12986 = state_11456__$1;
(statearr_11559_12986[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10546__auto__ = null;
var cljs$core$async$mult_$_state_machine__10546__auto____0 = (function (){
var statearr_11560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11560[(0)] = cljs$core$async$mult_$_state_machine__10546__auto__);

(statearr_11560[(1)] = (1));

return statearr_11560;
});
var cljs$core$async$mult_$_state_machine__10546__auto____1 = (function (state_11456){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_11456);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11561){var ex__10549__auto__ = e11561;
var statearr_11562_12987 = state_11456;
(statearr_11562_12987[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_11456[(4)]))){
var statearr_11563_12988 = state_11456;
(statearr_11563_12988[(1)] = cljs.core.first((state_11456[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12991 = state_11456;
state_11456 = G__12991;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10546__auto__ = function(state_11456){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10546__auto____1.call(this,state_11456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10546__auto____0;
cljs$core$async$mult_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10546__auto____1;
return cljs$core$async$mult_$_state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_11564 = f__10637__auto__();
(statearr_11564[(6)] = c__10636__auto___12909);

return statearr_11564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
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
var G__11566 = arguments.length;
switch (G__11566) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12993 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12993(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12994 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12994(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12995 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12995(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12996 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12996(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12997 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12997(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13000 = arguments.length;
var i__4737__auto___13001 = (0);
while(true){
if((i__4737__auto___13001 < len__4736__auto___13000)){
args__4742__auto__.push((arguments[i__4737__auto___13001]));

var G__13002 = (i__4737__auto___13001 + (1));
i__4737__auto___13001 = G__13002;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11573){
var map__11575 = p__11573;
var map__11575__$1 = (((((!((map__11575 == null))))?(((((map__11575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11575):map__11575);
var opts = map__11575__$1;
var statearr_11578_13003 = state;
(statearr_11578_13003[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11579_13004 = state;
(statearr_11579_13004[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11580_13005 = state;
(statearr_11580_13005[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11569){
var G__11570 = cljs.core.first(seq11569);
var seq11569__$1 = cljs.core.next(seq11569);
var G__11571 = cljs.core.first(seq11569__$1);
var seq11569__$2 = cljs.core.next(seq11569__$1);
var G__11572 = cljs.core.first(seq11569__$2);
var seq11569__$3 = cljs.core.next(seq11569__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11570,G__11571,G__11572,seq11569__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11581 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11582){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11582 = meta11582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11583,meta11582__$1){
var self__ = this;
var _11583__$1 = this;
return (new cljs.core.async.t_cljs$core$async11581(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11582__$1));
}));

(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11583){
var self__ = this;
var _11583__$1 = this;
return self__.meta11582;
}));

(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11581.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11582","meta11582",-1605791218,null)], null);
}));

(cljs.core.async.t_cljs$core$async11581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11581");

(cljs.core.async.t_cljs$core$async11581.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11581.
 */
cljs.core.async.__GT_t_cljs$core$async11581 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11581(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11582){
return (new cljs.core.async.t_cljs$core$async11581(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11582));
});

}

return (new cljs.core.async.t_cljs$core$async11581(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10636__auto___13011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_11691){
var state_val_11692 = (state_11691[(1)]);
if((state_val_11692 === (7))){
var inst_11606 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
var statearr_11693_13012 = state_11691__$1;
(statearr_11693_13012[(2)] = inst_11606);

(statearr_11693_13012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (20))){
var inst_11618 = (state_11691[(7)]);
var state_11691__$1 = state_11691;
var statearr_11694_13013 = state_11691__$1;
(statearr_11694_13013[(2)] = inst_11618);

(statearr_11694_13013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (27))){
var state_11691__$1 = state_11691;
var statearr_11695_13014 = state_11691__$1;
(statearr_11695_13014[(2)] = null);

(statearr_11695_13014[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (1))){
var inst_11593 = (state_11691[(8)]);
var inst_11593__$1 = calc_state();
var inst_11595 = (inst_11593__$1 == null);
var inst_11596 = cljs.core.not(inst_11595);
var state_11691__$1 = (function (){var statearr_11696 = state_11691;
(statearr_11696[(8)] = inst_11593__$1);

return statearr_11696;
})();
if(inst_11596){
var statearr_11697_13015 = state_11691__$1;
(statearr_11697_13015[(1)] = (2));

} else {
var statearr_11698_13016 = state_11691__$1;
(statearr_11698_13016[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (24))){
var inst_11642 = (state_11691[(9)]);
var inst_11651 = (state_11691[(10)]);
var inst_11665 = (state_11691[(11)]);
var inst_11665__$1 = (inst_11642.cljs$core$IFn$_invoke$arity$1 ? inst_11642.cljs$core$IFn$_invoke$arity$1(inst_11651) : inst_11642.call(null,inst_11651));
var state_11691__$1 = (function (){var statearr_11699 = state_11691;
(statearr_11699[(11)] = inst_11665__$1);

return statearr_11699;
})();
if(cljs.core.truth_(inst_11665__$1)){
var statearr_11700_13017 = state_11691__$1;
(statearr_11700_13017[(1)] = (29));

} else {
var statearr_11701_13018 = state_11691__$1;
(statearr_11701_13018[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (4))){
var inst_11609 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
if(cljs.core.truth_(inst_11609)){
var statearr_11702_13019 = state_11691__$1;
(statearr_11702_13019[(1)] = (8));

} else {
var statearr_11703_13020 = state_11691__$1;
(statearr_11703_13020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (15))){
var inst_11636 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
if(cljs.core.truth_(inst_11636)){
var statearr_11704_13021 = state_11691__$1;
(statearr_11704_13021[(1)] = (19));

} else {
var statearr_11705_13022 = state_11691__$1;
(statearr_11705_13022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (21))){
var inst_11641 = (state_11691[(12)]);
var inst_11641__$1 = (state_11691[(2)]);
var inst_11642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11641__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11641__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11641__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11691__$1 = (function (){var statearr_11706 = state_11691;
(statearr_11706[(13)] = inst_11643);

(statearr_11706[(12)] = inst_11641__$1);

(statearr_11706[(9)] = inst_11642);

return statearr_11706;
})();
return cljs.core.async.ioc_alts_BANG_(state_11691__$1,(22),inst_11644);
} else {
if((state_val_11692 === (31))){
var inst_11673 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
if(cljs.core.truth_(inst_11673)){
var statearr_11707_13023 = state_11691__$1;
(statearr_11707_13023[(1)] = (32));

} else {
var statearr_11708_13024 = state_11691__$1;
(statearr_11708_13024[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (32))){
var inst_11650 = (state_11691[(14)]);
var state_11691__$1 = state_11691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11691__$1,(35),out,inst_11650);
} else {
if((state_val_11692 === (33))){
var inst_11641 = (state_11691[(12)]);
var inst_11618 = inst_11641;
var state_11691__$1 = (function (){var statearr_11710 = state_11691;
(statearr_11710[(7)] = inst_11618);

return statearr_11710;
})();
var statearr_11711_13036 = state_11691__$1;
(statearr_11711_13036[(2)] = null);

(statearr_11711_13036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (13))){
var inst_11618 = (state_11691[(7)]);
var inst_11625 = inst_11618.cljs$lang$protocol_mask$partition0$;
var inst_11626 = (inst_11625 & (64));
var inst_11627 = inst_11618.cljs$core$ISeq$;
var inst_11628 = (cljs.core.PROTOCOL_SENTINEL === inst_11627);
var inst_11629 = ((inst_11626) || (inst_11628));
var state_11691__$1 = state_11691;
if(cljs.core.truth_(inst_11629)){
var statearr_11712_13038 = state_11691__$1;
(statearr_11712_13038[(1)] = (16));

} else {
var statearr_11714_13039 = state_11691__$1;
(statearr_11714_13039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (22))){
var inst_11651 = (state_11691[(10)]);
var inst_11650 = (state_11691[(14)]);
var inst_11649 = (state_11691[(2)]);
var inst_11650__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11649,(0),null);
var inst_11651__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11649,(1),null);
var inst_11652 = (inst_11650__$1 == null);
var inst_11653 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11651__$1,change);
var inst_11654 = ((inst_11652) || (inst_11653));
var state_11691__$1 = (function (){var statearr_11715 = state_11691;
(statearr_11715[(10)] = inst_11651__$1);

(statearr_11715[(14)] = inst_11650__$1);

return statearr_11715;
})();
if(cljs.core.truth_(inst_11654)){
var statearr_11716_13040 = state_11691__$1;
(statearr_11716_13040[(1)] = (23));

} else {
var statearr_11717_13041 = state_11691__$1;
(statearr_11717_13041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (36))){
var inst_11641 = (state_11691[(12)]);
var inst_11618 = inst_11641;
var state_11691__$1 = (function (){var statearr_11718 = state_11691;
(statearr_11718[(7)] = inst_11618);

return statearr_11718;
})();
var statearr_11719_13043 = state_11691__$1;
(statearr_11719_13043[(2)] = null);

(statearr_11719_13043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (29))){
var inst_11665 = (state_11691[(11)]);
var state_11691__$1 = state_11691;
var statearr_11720_13044 = state_11691__$1;
(statearr_11720_13044[(2)] = inst_11665);

(statearr_11720_13044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (6))){
var state_11691__$1 = state_11691;
var statearr_11721_13047 = state_11691__$1;
(statearr_11721_13047[(2)] = false);

(statearr_11721_13047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (28))){
var inst_11661 = (state_11691[(2)]);
var inst_11662 = calc_state();
var inst_11618 = inst_11662;
var state_11691__$1 = (function (){var statearr_11722 = state_11691;
(statearr_11722[(7)] = inst_11618);

(statearr_11722[(15)] = inst_11661);

return statearr_11722;
})();
var statearr_11723_13050 = state_11691__$1;
(statearr_11723_13050[(2)] = null);

(statearr_11723_13050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (25))){
var inst_11687 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
var statearr_11724_13052 = state_11691__$1;
(statearr_11724_13052[(2)] = inst_11687);

(statearr_11724_13052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (34))){
var inst_11685 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
var statearr_11725_13053 = state_11691__$1;
(statearr_11725_13053[(2)] = inst_11685);

(statearr_11725_13053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (17))){
var state_11691__$1 = state_11691;
var statearr_11726_13054 = state_11691__$1;
(statearr_11726_13054[(2)] = false);

(statearr_11726_13054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (3))){
var state_11691__$1 = state_11691;
var statearr_11727_13071 = state_11691__$1;
(statearr_11727_13071[(2)] = false);

(statearr_11727_13071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (12))){
var inst_11689 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11691__$1,inst_11689);
} else {
if((state_val_11692 === (2))){
var inst_11593 = (state_11691[(8)]);
var inst_11598 = inst_11593.cljs$lang$protocol_mask$partition0$;
var inst_11599 = (inst_11598 & (64));
var inst_11600 = inst_11593.cljs$core$ISeq$;
var inst_11601 = (cljs.core.PROTOCOL_SENTINEL === inst_11600);
var inst_11602 = ((inst_11599) || (inst_11601));
var state_11691__$1 = state_11691;
if(cljs.core.truth_(inst_11602)){
var statearr_11730_13072 = state_11691__$1;
(statearr_11730_13072[(1)] = (5));

} else {
var statearr_11731_13073 = state_11691__$1;
(statearr_11731_13073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (23))){
var inst_11650 = (state_11691[(14)]);
var inst_11656 = (inst_11650 == null);
var state_11691__$1 = state_11691;
if(cljs.core.truth_(inst_11656)){
var statearr_11734_13074 = state_11691__$1;
(statearr_11734_13074[(1)] = (26));

} else {
var statearr_11735_13075 = state_11691__$1;
(statearr_11735_13075[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (35))){
var inst_11676 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
if(cljs.core.truth_(inst_11676)){
var statearr_11736_13076 = state_11691__$1;
(statearr_11736_13076[(1)] = (36));

} else {
var statearr_11737_13077 = state_11691__$1;
(statearr_11737_13077[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (19))){
var inst_11618 = (state_11691[(7)]);
var inst_11638 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11618);
var state_11691__$1 = state_11691;
var statearr_11738_13078 = state_11691__$1;
(statearr_11738_13078[(2)] = inst_11638);

(statearr_11738_13078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (11))){
var inst_11618 = (state_11691[(7)]);
var inst_11622 = (inst_11618 == null);
var inst_11623 = cljs.core.not(inst_11622);
var state_11691__$1 = state_11691;
if(inst_11623){
var statearr_11739_13079 = state_11691__$1;
(statearr_11739_13079[(1)] = (13));

} else {
var statearr_11740_13080 = state_11691__$1;
(statearr_11740_13080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (9))){
var inst_11593 = (state_11691[(8)]);
var state_11691__$1 = state_11691;
var statearr_11741_13081 = state_11691__$1;
(statearr_11741_13081[(2)] = inst_11593);

(statearr_11741_13081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (5))){
var state_11691__$1 = state_11691;
var statearr_11742_13082 = state_11691__$1;
(statearr_11742_13082[(2)] = true);

(statearr_11742_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (14))){
var state_11691__$1 = state_11691;
var statearr_11743_13083 = state_11691__$1;
(statearr_11743_13083[(2)] = false);

(statearr_11743_13083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (26))){
var inst_11651 = (state_11691[(10)]);
var inst_11658 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11651);
var state_11691__$1 = state_11691;
var statearr_11744_13084 = state_11691__$1;
(statearr_11744_13084[(2)] = inst_11658);

(statearr_11744_13084[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (16))){
var state_11691__$1 = state_11691;
var statearr_11745_13085 = state_11691__$1;
(statearr_11745_13085[(2)] = true);

(statearr_11745_13085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (38))){
var inst_11681 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
var statearr_11746_13091 = state_11691__$1;
(statearr_11746_13091[(2)] = inst_11681);

(statearr_11746_13091[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (30))){
var inst_11643 = (state_11691[(13)]);
var inst_11642 = (state_11691[(9)]);
var inst_11651 = (state_11691[(10)]);
var inst_11668 = cljs.core.empty_QMARK_(inst_11642);
var inst_11669 = (inst_11643.cljs$core$IFn$_invoke$arity$1 ? inst_11643.cljs$core$IFn$_invoke$arity$1(inst_11651) : inst_11643.call(null,inst_11651));
var inst_11670 = cljs.core.not(inst_11669);
var inst_11671 = ((inst_11668) && (inst_11670));
var state_11691__$1 = state_11691;
var statearr_11747_13097 = state_11691__$1;
(statearr_11747_13097[(2)] = inst_11671);

(statearr_11747_13097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (10))){
var inst_11593 = (state_11691[(8)]);
var inst_11614 = (state_11691[(2)]);
var inst_11615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11614,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11614,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11614,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11618 = inst_11593;
var state_11691__$1 = (function (){var statearr_11748 = state_11691;
(statearr_11748[(16)] = inst_11617);

(statearr_11748[(17)] = inst_11616);

(statearr_11748[(18)] = inst_11615);

(statearr_11748[(7)] = inst_11618);

return statearr_11748;
})();
var statearr_11749_13101 = state_11691__$1;
(statearr_11749_13101[(2)] = null);

(statearr_11749_13101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (18))){
var inst_11633 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
var statearr_11750_13102 = state_11691__$1;
(statearr_11750_13102[(2)] = inst_11633);

(statearr_11750_13102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (37))){
var state_11691__$1 = state_11691;
var statearr_11751_13103 = state_11691__$1;
(statearr_11751_13103[(2)] = null);

(statearr_11751_13103[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (8))){
var inst_11593 = (state_11691[(8)]);
var inst_11611 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11593);
var state_11691__$1 = state_11691;
var statearr_11752_13108 = state_11691__$1;
(statearr_11752_13108[(2)] = inst_11611);

(statearr_11752_13108[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10546__auto__ = null;
var cljs$core$async$mix_$_state_machine__10546__auto____0 = (function (){
var statearr_11753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11753[(0)] = cljs$core$async$mix_$_state_machine__10546__auto__);

(statearr_11753[(1)] = (1));

return statearr_11753;
});
var cljs$core$async$mix_$_state_machine__10546__auto____1 = (function (state_11691){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_11691);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11754){var ex__10549__auto__ = e11754;
var statearr_11755_13117 = state_11691;
(statearr_11755_13117[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_11691[(4)]))){
var statearr_11756_13118 = state_11691;
(statearr_11756_13118[(1)] = cljs.core.first((state_11691[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13119 = state_11691;
state_11691 = G__13119;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10546__auto__ = function(state_11691){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10546__auto____1.call(this,state_11691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10546__auto____0;
cljs$core$async$mix_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10546__auto____1;
return cljs$core$async$mix_$_state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_11757 = f__10637__auto__();
(statearr_11757[(6)] = c__10636__auto___13011);

return statearr_11757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13123 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13123(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13137 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13137(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13139 = (function() {
var G__13140 = null;
var G__13140__1 = (function (p){
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
var G__13140__2 = (function (p,v){
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
G__13140 = function(p,v){
switch(arguments.length){
case 1:
return G__13140__1.call(this,p);
case 2:
return G__13140__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13140.cljs$core$IFn$_invoke$arity$1 = G__13140__1;
G__13140.cljs$core$IFn$_invoke$arity$2 = G__13140__2;
return G__13140;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11776 = arguments.length;
switch (G__11776) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13139(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13139(p,v);
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
var G__11783 = arguments.length;
switch (G__11783) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11781_SHARP_){
if(cljs.core.truth_((p1__11781_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11781_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11781_SHARP_.call(null,topic)))){
return p1__11781_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11781_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11785 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11786){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11786 = meta11786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11787,meta11786__$1){
var self__ = this;
var _11787__$1 = this;
return (new cljs.core.async.t_cljs$core$async11785(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11786__$1));
}));

(cljs.core.async.t_cljs$core$async11785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11787){
var self__ = this;
var _11787__$1 = this;
return self__.meta11786;
}));

(cljs.core.async.t_cljs$core$async11785.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11785.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11785.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11785.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11785.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11785.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11786","meta11786",-2061123904,null)], null);
}));

(cljs.core.async.t_cljs$core$async11785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11785");

(cljs.core.async.t_cljs$core$async11785.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11785.
 */
cljs.core.async.__GT_t_cljs$core$async11785 = (function cljs$core$async$__GT_t_cljs$core$async11785(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11786){
return (new cljs.core.async.t_cljs$core$async11785(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11786));
});

}

return (new cljs.core.async.t_cljs$core$async11785(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10636__auto___13175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_11873){
var state_val_11874 = (state_11873[(1)]);
if((state_val_11874 === (7))){
var inst_11869 = (state_11873[(2)]);
var state_11873__$1 = state_11873;
var statearr_11877_13176 = state_11873__$1;
(statearr_11877_13176[(2)] = inst_11869);

(statearr_11877_13176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (20))){
var state_11873__$1 = state_11873;
var statearr_11878_13177 = state_11873__$1;
(statearr_11878_13177[(2)] = null);

(statearr_11878_13177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (1))){
var state_11873__$1 = state_11873;
var statearr_11881_13178 = state_11873__$1;
(statearr_11881_13178[(2)] = null);

(statearr_11881_13178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (24))){
var inst_11852 = (state_11873[(7)]);
var inst_11861 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11852);
var state_11873__$1 = state_11873;
var statearr_11882_13179 = state_11873__$1;
(statearr_11882_13179[(2)] = inst_11861);

(statearr_11882_13179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (4))){
var inst_11798 = (state_11873[(8)]);
var inst_11798__$1 = (state_11873[(2)]);
var inst_11799 = (inst_11798__$1 == null);
var state_11873__$1 = (function (){var statearr_11883 = state_11873;
(statearr_11883[(8)] = inst_11798__$1);

return statearr_11883;
})();
if(cljs.core.truth_(inst_11799)){
var statearr_11884_13180 = state_11873__$1;
(statearr_11884_13180[(1)] = (5));

} else {
var statearr_11885_13181 = state_11873__$1;
(statearr_11885_13181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (15))){
var inst_11846 = (state_11873[(2)]);
var state_11873__$1 = state_11873;
var statearr_11886_13182 = state_11873__$1;
(statearr_11886_13182[(2)] = inst_11846);

(statearr_11886_13182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (21))){
var inst_11866 = (state_11873[(2)]);
var state_11873__$1 = (function (){var statearr_11887 = state_11873;
(statearr_11887[(9)] = inst_11866);

return statearr_11887;
})();
var statearr_11888_13183 = state_11873__$1;
(statearr_11888_13183[(2)] = null);

(statearr_11888_13183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (13))){
var inst_11828 = (state_11873[(10)]);
var inst_11830 = cljs.core.chunked_seq_QMARK_(inst_11828);
var state_11873__$1 = state_11873;
if(inst_11830){
var statearr_11889_13184 = state_11873__$1;
(statearr_11889_13184[(1)] = (16));

} else {
var statearr_11890_13185 = state_11873__$1;
(statearr_11890_13185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (22))){
var inst_11858 = (state_11873[(2)]);
var state_11873__$1 = state_11873;
if(cljs.core.truth_(inst_11858)){
var statearr_11891_13186 = state_11873__$1;
(statearr_11891_13186[(1)] = (23));

} else {
var statearr_11892_13187 = state_11873__$1;
(statearr_11892_13187[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (6))){
var inst_11852 = (state_11873[(7)]);
var inst_11854 = (state_11873[(11)]);
var inst_11798 = (state_11873[(8)]);
var inst_11852__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11798) : topic_fn.call(null,inst_11798));
var inst_11853 = cljs.core.deref(mults);
var inst_11854__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11853,inst_11852__$1);
var state_11873__$1 = (function (){var statearr_11893 = state_11873;
(statearr_11893[(7)] = inst_11852__$1);

(statearr_11893[(11)] = inst_11854__$1);

return statearr_11893;
})();
if(cljs.core.truth_(inst_11854__$1)){
var statearr_11894_13188 = state_11873__$1;
(statearr_11894_13188[(1)] = (19));

} else {
var statearr_11895_13189 = state_11873__$1;
(statearr_11895_13189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (25))){
var inst_11863 = (state_11873[(2)]);
var state_11873__$1 = state_11873;
var statearr_11896_13190 = state_11873__$1;
(statearr_11896_13190[(2)] = inst_11863);

(statearr_11896_13190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (17))){
var inst_11828 = (state_11873[(10)]);
var inst_11837 = cljs.core.first(inst_11828);
var inst_11838 = cljs.core.async.muxch_STAR_(inst_11837);
var inst_11839 = cljs.core.async.close_BANG_(inst_11838);
var inst_11840 = cljs.core.next(inst_11828);
var inst_11808 = inst_11840;
var inst_11809 = null;
var inst_11810 = (0);
var inst_11811 = (0);
var state_11873__$1 = (function (){var statearr_11898 = state_11873;
(statearr_11898[(12)] = inst_11811);

(statearr_11898[(13)] = inst_11809);

(statearr_11898[(14)] = inst_11810);

(statearr_11898[(15)] = inst_11808);

(statearr_11898[(16)] = inst_11839);

return statearr_11898;
})();
var statearr_11899_13191 = state_11873__$1;
(statearr_11899_13191[(2)] = null);

(statearr_11899_13191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (3))){
var inst_11871 = (state_11873[(2)]);
var state_11873__$1 = state_11873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11873__$1,inst_11871);
} else {
if((state_val_11874 === (12))){
var inst_11848 = (state_11873[(2)]);
var state_11873__$1 = state_11873;
var statearr_11909_13192 = state_11873__$1;
(statearr_11909_13192[(2)] = inst_11848);

(statearr_11909_13192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (2))){
var state_11873__$1 = state_11873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11873__$1,(4),ch);
} else {
if((state_val_11874 === (23))){
var state_11873__$1 = state_11873;
var statearr_11910_13193 = state_11873__$1;
(statearr_11910_13193[(2)] = null);

(statearr_11910_13193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (19))){
var inst_11854 = (state_11873[(11)]);
var inst_11798 = (state_11873[(8)]);
var inst_11856 = cljs.core.async.muxch_STAR_(inst_11854);
var state_11873__$1 = state_11873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11873__$1,(22),inst_11856,inst_11798);
} else {
if((state_val_11874 === (11))){
var inst_11828 = (state_11873[(10)]);
var inst_11808 = (state_11873[(15)]);
var inst_11828__$1 = cljs.core.seq(inst_11808);
var state_11873__$1 = (function (){var statearr_11911 = state_11873;
(statearr_11911[(10)] = inst_11828__$1);

return statearr_11911;
})();
if(inst_11828__$1){
var statearr_11912_13194 = state_11873__$1;
(statearr_11912_13194[(1)] = (13));

} else {
var statearr_11913_13195 = state_11873__$1;
(statearr_11913_13195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (9))){
var inst_11850 = (state_11873[(2)]);
var state_11873__$1 = state_11873;
var statearr_11914_13196 = state_11873__$1;
(statearr_11914_13196[(2)] = inst_11850);

(statearr_11914_13196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (5))){
var inst_11805 = cljs.core.deref(mults);
var inst_11806 = cljs.core.vals(inst_11805);
var inst_11807 = cljs.core.seq(inst_11806);
var inst_11808 = inst_11807;
var inst_11809 = null;
var inst_11810 = (0);
var inst_11811 = (0);
var state_11873__$1 = (function (){var statearr_11915 = state_11873;
(statearr_11915[(12)] = inst_11811);

(statearr_11915[(13)] = inst_11809);

(statearr_11915[(14)] = inst_11810);

(statearr_11915[(15)] = inst_11808);

return statearr_11915;
})();
var statearr_11916_13197 = state_11873__$1;
(statearr_11916_13197[(2)] = null);

(statearr_11916_13197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (14))){
var state_11873__$1 = state_11873;
var statearr_11920_13198 = state_11873__$1;
(statearr_11920_13198[(2)] = null);

(statearr_11920_13198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (16))){
var inst_11828 = (state_11873[(10)]);
var inst_11832 = cljs.core.chunk_first(inst_11828);
var inst_11833 = cljs.core.chunk_rest(inst_11828);
var inst_11834 = cljs.core.count(inst_11832);
var inst_11808 = inst_11833;
var inst_11809 = inst_11832;
var inst_11810 = inst_11834;
var inst_11811 = (0);
var state_11873__$1 = (function (){var statearr_11921 = state_11873;
(statearr_11921[(12)] = inst_11811);

(statearr_11921[(13)] = inst_11809);

(statearr_11921[(14)] = inst_11810);

(statearr_11921[(15)] = inst_11808);

return statearr_11921;
})();
var statearr_11922_13199 = state_11873__$1;
(statearr_11922_13199[(2)] = null);

(statearr_11922_13199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (10))){
var inst_11811 = (state_11873[(12)]);
var inst_11809 = (state_11873[(13)]);
var inst_11810 = (state_11873[(14)]);
var inst_11808 = (state_11873[(15)]);
var inst_11816 = cljs.core._nth(inst_11809,inst_11811);
var inst_11821 = cljs.core.async.muxch_STAR_(inst_11816);
var inst_11822 = cljs.core.async.close_BANG_(inst_11821);
var inst_11823 = (inst_11811 + (1));
var tmp11917 = inst_11809;
var tmp11918 = inst_11810;
var tmp11919 = inst_11808;
var inst_11808__$1 = tmp11919;
var inst_11809__$1 = tmp11917;
var inst_11810__$1 = tmp11918;
var inst_11811__$1 = inst_11823;
var state_11873__$1 = (function (){var statearr_11923 = state_11873;
(statearr_11923[(17)] = inst_11822);

(statearr_11923[(12)] = inst_11811__$1);

(statearr_11923[(13)] = inst_11809__$1);

(statearr_11923[(14)] = inst_11810__$1);

(statearr_11923[(15)] = inst_11808__$1);

return statearr_11923;
})();
var statearr_11932_13200 = state_11873__$1;
(statearr_11932_13200[(2)] = null);

(statearr_11932_13200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (18))){
var inst_11843 = (state_11873[(2)]);
var state_11873__$1 = state_11873;
var statearr_11933_13201 = state_11873__$1;
(statearr_11933_13201[(2)] = inst_11843);

(statearr_11933_13201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11874 === (8))){
var inst_11811 = (state_11873[(12)]);
var inst_11810 = (state_11873[(14)]);
var inst_11813 = (inst_11811 < inst_11810);
var inst_11814 = inst_11813;
var state_11873__$1 = state_11873;
if(cljs.core.truth_(inst_11814)){
var statearr_11934_13202 = state_11873__$1;
(statearr_11934_13202[(1)] = (10));

} else {
var statearr_11935_13203 = state_11873__$1;
(statearr_11935_13203[(1)] = (11));

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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_11938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11938[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_11938[(1)] = (1));

return statearr_11938;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_11873){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_11873);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11939){var ex__10549__auto__ = e11939;
var statearr_11940_13204 = state_11873;
(statearr_11940_13204[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_11873[(4)]))){
var statearr_11941_13205 = state_11873;
(statearr_11941_13205[(1)] = cljs.core.first((state_11873[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13206 = state_11873;
state_11873 = G__13206;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_11873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_11873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_11943 = f__10637__auto__();
(statearr_11943[(6)] = c__10636__auto___13175);

return statearr_11943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
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
var G__11947 = arguments.length;
switch (G__11947) {
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
var G__11952 = arguments.length;
switch (G__11952) {
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
var G__11956 = arguments.length;
switch (G__11956) {
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
var c__10636__auto___13210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_12009){
var state_val_12010 = (state_12009[(1)]);
if((state_val_12010 === (7))){
var state_12009__$1 = state_12009;
var statearr_12011_13211 = state_12009__$1;
(statearr_12011_13211[(2)] = null);

(statearr_12011_13211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (1))){
var state_12009__$1 = state_12009;
var statearr_12014_13212 = state_12009__$1;
(statearr_12014_13212[(2)] = null);

(statearr_12014_13212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (4))){
var inst_11963 = (state_12009[(7)]);
var inst_11962 = (state_12009[(8)]);
var inst_11965 = (inst_11963 < inst_11962);
var state_12009__$1 = state_12009;
if(cljs.core.truth_(inst_11965)){
var statearr_12015_13213 = state_12009__$1;
(statearr_12015_13213[(1)] = (6));

} else {
var statearr_12016_13214 = state_12009__$1;
(statearr_12016_13214[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (15))){
var inst_11995 = (state_12009[(9)]);
var inst_12000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11995);
var state_12009__$1 = state_12009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12009__$1,(17),out,inst_12000);
} else {
if((state_val_12010 === (13))){
var inst_11995 = (state_12009[(9)]);
var inst_11995__$1 = (state_12009[(2)]);
var inst_11996 = cljs.core.some(cljs.core.nil_QMARK_,inst_11995__$1);
var state_12009__$1 = (function (){var statearr_12017 = state_12009;
(statearr_12017[(9)] = inst_11995__$1);

return statearr_12017;
})();
if(cljs.core.truth_(inst_11996)){
var statearr_12018_13215 = state_12009__$1;
(statearr_12018_13215[(1)] = (14));

} else {
var statearr_12019_13216 = state_12009__$1;
(statearr_12019_13216[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (6))){
var state_12009__$1 = state_12009;
var statearr_12020_13217 = state_12009__$1;
(statearr_12020_13217[(2)] = null);

(statearr_12020_13217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (17))){
var inst_12002 = (state_12009[(2)]);
var state_12009__$1 = (function (){var statearr_12023 = state_12009;
(statearr_12023[(10)] = inst_12002);

return statearr_12023;
})();
var statearr_12024_13218 = state_12009__$1;
(statearr_12024_13218[(2)] = null);

(statearr_12024_13218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (3))){
var inst_12007 = (state_12009[(2)]);
var state_12009__$1 = state_12009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12009__$1,inst_12007);
} else {
if((state_val_12010 === (12))){
var _ = (function (){var statearr_12025 = state_12009;
(statearr_12025[(4)] = cljs.core.rest((state_12009[(4)])));

return statearr_12025;
})();
var state_12009__$1 = state_12009;
var ex12021 = (state_12009__$1[(2)]);
var statearr_12026_13219 = state_12009__$1;
(statearr_12026_13219[(5)] = ex12021);


if((ex12021 instanceof Object)){
var statearr_12027_13220 = state_12009__$1;
(statearr_12027_13220[(1)] = (11));

(statearr_12027_13220[(5)] = null);

} else {
throw ex12021;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (2))){
var inst_11961 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11962 = cnt;
var inst_11963 = (0);
var state_12009__$1 = (function (){var statearr_12030 = state_12009;
(statearr_12030[(11)] = inst_11961);

(statearr_12030[(7)] = inst_11963);

(statearr_12030[(8)] = inst_11962);

return statearr_12030;
})();
var statearr_12031_13221 = state_12009__$1;
(statearr_12031_13221[(2)] = null);

(statearr_12031_13221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (11))){
var inst_11968 = (state_12009[(2)]);
var inst_11969 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12009__$1 = (function (){var statearr_12032 = state_12009;
(statearr_12032[(12)] = inst_11968);

return statearr_12032;
})();
var statearr_12033_13222 = state_12009__$1;
(statearr_12033_13222[(2)] = inst_11969);

(statearr_12033_13222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (9))){
var inst_11963 = (state_12009[(7)]);
var _ = (function (){var statearr_12034 = state_12009;
(statearr_12034[(4)] = cljs.core.cons((12),(state_12009[(4)])));

return statearr_12034;
})();
var inst_11981 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11963) : chs__$1.call(null,inst_11963));
var inst_11982 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11963) : done.call(null,inst_11963));
var inst_11983 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11981,inst_11982);
var ___$1 = (function (){var statearr_12035 = state_12009;
(statearr_12035[(4)] = cljs.core.rest((state_12009[(4)])));

return statearr_12035;
})();
var state_12009__$1 = state_12009;
var statearr_12036_13223 = state_12009__$1;
(statearr_12036_13223[(2)] = inst_11983);

(statearr_12036_13223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (5))){
var inst_11993 = (state_12009[(2)]);
var state_12009__$1 = (function (){var statearr_12037 = state_12009;
(statearr_12037[(13)] = inst_11993);

return statearr_12037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12009__$1,(13),dchan);
} else {
if((state_val_12010 === (14))){
var inst_11998 = cljs.core.async.close_BANG_(out);
var state_12009__$1 = state_12009;
var statearr_12038_13224 = state_12009__$1;
(statearr_12038_13224[(2)] = inst_11998);

(statearr_12038_13224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (16))){
var inst_12005 = (state_12009[(2)]);
var state_12009__$1 = state_12009;
var statearr_12039_13225 = state_12009__$1;
(statearr_12039_13225[(2)] = inst_12005);

(statearr_12039_13225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (10))){
var inst_11963 = (state_12009[(7)]);
var inst_11986 = (state_12009[(2)]);
var inst_11987 = (inst_11963 + (1));
var inst_11963__$1 = inst_11987;
var state_12009__$1 = (function (){var statearr_12042 = state_12009;
(statearr_12042[(7)] = inst_11963__$1);

(statearr_12042[(14)] = inst_11986);

return statearr_12042;
})();
var statearr_12043_13226 = state_12009__$1;
(statearr_12043_13226[(2)] = null);

(statearr_12043_13226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12010 === (8))){
var inst_11991 = (state_12009[(2)]);
var state_12009__$1 = state_12009;
var statearr_12044_13227 = state_12009__$1;
(statearr_12044_13227[(2)] = inst_11991);

(statearr_12044_13227[(1)] = (5));


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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12045[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12045[(1)] = (1));

return statearr_12045;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12009){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_12009);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12046){var ex__10549__auto__ = e12046;
var statearr_12047_13228 = state_12009;
(statearr_12047_13228[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_12009[(4)]))){
var statearr_12048_13229 = state_12009;
(statearr_12048_13229[(1)] = cljs.core.first((state_12009[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13230 = state_12009;
state_12009 = G__13230;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_12049 = f__10637__auto__();
(statearr_12049[(6)] = c__10636__auto___13210);

return statearr_12049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
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
var G__12053 = arguments.length;
switch (G__12053) {
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
var c__10636__auto___13232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_12093){
var state_val_12094 = (state_12093[(1)]);
if((state_val_12094 === (7))){
var inst_12070 = (state_12093[(7)]);
var inst_12069 = (state_12093[(8)]);
var inst_12069__$1 = (state_12093[(2)]);
var inst_12070__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12069__$1,(0),null);
var inst_12071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12069__$1,(1),null);
var inst_12072 = (inst_12070__$1 == null);
var state_12093__$1 = (function (){var statearr_12095 = state_12093;
(statearr_12095[(7)] = inst_12070__$1);

(statearr_12095[(9)] = inst_12071);

(statearr_12095[(8)] = inst_12069__$1);

return statearr_12095;
})();
if(cljs.core.truth_(inst_12072)){
var statearr_12096_13233 = state_12093__$1;
(statearr_12096_13233[(1)] = (8));

} else {
var statearr_12097_13234 = state_12093__$1;
(statearr_12097_13234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (1))){
var inst_12059 = cljs.core.vec(chs);
var inst_12060 = inst_12059;
var state_12093__$1 = (function (){var statearr_12098 = state_12093;
(statearr_12098[(10)] = inst_12060);

return statearr_12098;
})();
var statearr_12099_13235 = state_12093__$1;
(statearr_12099_13235[(2)] = null);

(statearr_12099_13235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (4))){
var inst_12060 = (state_12093[(10)]);
var state_12093__$1 = state_12093;
return cljs.core.async.ioc_alts_BANG_(state_12093__$1,(7),inst_12060);
} else {
if((state_val_12094 === (6))){
var inst_12089 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
var statearr_12100_13236 = state_12093__$1;
(statearr_12100_13236[(2)] = inst_12089);

(statearr_12100_13236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (3))){
var inst_12091 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12093__$1,inst_12091);
} else {
if((state_val_12094 === (2))){
var inst_12060 = (state_12093[(10)]);
var inst_12062 = cljs.core.count(inst_12060);
var inst_12063 = (inst_12062 > (0));
var state_12093__$1 = state_12093;
if(cljs.core.truth_(inst_12063)){
var statearr_12102_13237 = state_12093__$1;
(statearr_12102_13237[(1)] = (4));

} else {
var statearr_12103_13238 = state_12093__$1;
(statearr_12103_13238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (11))){
var inst_12060 = (state_12093[(10)]);
var inst_12082 = (state_12093[(2)]);
var tmp12101 = inst_12060;
var inst_12060__$1 = tmp12101;
var state_12093__$1 = (function (){var statearr_12104 = state_12093;
(statearr_12104[(11)] = inst_12082);

(statearr_12104[(10)] = inst_12060__$1);

return statearr_12104;
})();
var statearr_12105_13239 = state_12093__$1;
(statearr_12105_13239[(2)] = null);

(statearr_12105_13239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (9))){
var inst_12070 = (state_12093[(7)]);
var state_12093__$1 = state_12093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12093__$1,(11),out,inst_12070);
} else {
if((state_val_12094 === (5))){
var inst_12087 = cljs.core.async.close_BANG_(out);
var state_12093__$1 = state_12093;
var statearr_12116_13240 = state_12093__$1;
(statearr_12116_13240[(2)] = inst_12087);

(statearr_12116_13240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (10))){
var inst_12085 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
var statearr_12117_13241 = state_12093__$1;
(statearr_12117_13241[(2)] = inst_12085);

(statearr_12117_13241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (8))){
var inst_12060 = (state_12093[(10)]);
var inst_12070 = (state_12093[(7)]);
var inst_12071 = (state_12093[(9)]);
var inst_12069 = (state_12093[(8)]);
var inst_12077 = (function (){var cs = inst_12060;
var vec__12065 = inst_12069;
var v = inst_12070;
var c = inst_12071;
return (function (p1__12051_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12051_SHARP_);
});
})();
var inst_12078 = cljs.core.filterv(inst_12077,inst_12060);
var inst_12060__$1 = inst_12078;
var state_12093__$1 = (function (){var statearr_12118 = state_12093;
(statearr_12118[(10)] = inst_12060__$1);

return statearr_12118;
})();
var statearr_12119_13242 = state_12093__$1;
(statearr_12119_13242[(2)] = null);

(statearr_12119_13242[(1)] = (2));


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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12120 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12120[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12120[(1)] = (1));

return statearr_12120;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12093){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_12093);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12121){var ex__10549__auto__ = e12121;
var statearr_12122_13243 = state_12093;
(statearr_12122_13243[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_12093[(4)]))){
var statearr_12123_13244 = state_12093;
(statearr_12123_13244[(1)] = cljs.core.first((state_12093[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13245 = state_12093;
state_12093 = G__13245;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_12124 = f__10637__auto__();
(statearr_12124[(6)] = c__10636__auto___13232);

return statearr_12124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
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
var G__12127 = arguments.length;
switch (G__12127) {
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
var c__10636__auto___13247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_12153){
var state_val_12154 = (state_12153[(1)]);
if((state_val_12154 === (7))){
var inst_12135 = (state_12153[(7)]);
var inst_12135__$1 = (state_12153[(2)]);
var inst_12136 = (inst_12135__$1 == null);
var inst_12137 = cljs.core.not(inst_12136);
var state_12153__$1 = (function (){var statearr_12155 = state_12153;
(statearr_12155[(7)] = inst_12135__$1);

return statearr_12155;
})();
if(inst_12137){
var statearr_12156_13248 = state_12153__$1;
(statearr_12156_13248[(1)] = (8));

} else {
var statearr_12157_13249 = state_12153__$1;
(statearr_12157_13249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (1))){
var inst_12130 = (0);
var state_12153__$1 = (function (){var statearr_12158 = state_12153;
(statearr_12158[(8)] = inst_12130);

return statearr_12158;
})();
var statearr_12159_13250 = state_12153__$1;
(statearr_12159_13250[(2)] = null);

(statearr_12159_13250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (4))){
var state_12153__$1 = state_12153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12153__$1,(7),ch);
} else {
if((state_val_12154 === (6))){
var inst_12148 = (state_12153[(2)]);
var state_12153__$1 = state_12153;
var statearr_12160_13251 = state_12153__$1;
(statearr_12160_13251[(2)] = inst_12148);

(statearr_12160_13251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (3))){
var inst_12150 = (state_12153[(2)]);
var inst_12151 = cljs.core.async.close_BANG_(out);
var state_12153__$1 = (function (){var statearr_12161 = state_12153;
(statearr_12161[(9)] = inst_12150);

return statearr_12161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12153__$1,inst_12151);
} else {
if((state_val_12154 === (2))){
var inst_12130 = (state_12153[(8)]);
var inst_12132 = (inst_12130 < n);
var state_12153__$1 = state_12153;
if(cljs.core.truth_(inst_12132)){
var statearr_12162_13252 = state_12153__$1;
(statearr_12162_13252[(1)] = (4));

} else {
var statearr_12178_13253 = state_12153__$1;
(statearr_12178_13253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (11))){
var inst_12130 = (state_12153[(8)]);
var inst_12140 = (state_12153[(2)]);
var inst_12141 = (inst_12130 + (1));
var inst_12130__$1 = inst_12141;
var state_12153__$1 = (function (){var statearr_12179 = state_12153;
(statearr_12179[(8)] = inst_12130__$1);

(statearr_12179[(10)] = inst_12140);

return statearr_12179;
})();
var statearr_12180_13254 = state_12153__$1;
(statearr_12180_13254[(2)] = null);

(statearr_12180_13254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (9))){
var state_12153__$1 = state_12153;
var statearr_12181_13255 = state_12153__$1;
(statearr_12181_13255[(2)] = null);

(statearr_12181_13255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (5))){
var state_12153__$1 = state_12153;
var statearr_12182_13256 = state_12153__$1;
(statearr_12182_13256[(2)] = null);

(statearr_12182_13256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (10))){
var inst_12145 = (state_12153[(2)]);
var state_12153__$1 = state_12153;
var statearr_12183_13260 = state_12153__$1;
(statearr_12183_13260[(2)] = inst_12145);

(statearr_12183_13260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (8))){
var inst_12135 = (state_12153[(7)]);
var state_12153__$1 = state_12153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12153__$1,(11),out,inst_12135);
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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12184[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12184[(1)] = (1));

return statearr_12184;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12153){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_12153);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12187){var ex__10549__auto__ = e12187;
var statearr_12188_13261 = state_12153;
(statearr_12188_13261[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_12153[(4)]))){
var statearr_12191_13262 = state_12153;
(statearr_12191_13262[(1)] = cljs.core.first((state_12153[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13263 = state_12153;
state_12153 = G__13263;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_12192 = f__10637__auto__();
(statearr_12192[(6)] = c__10636__auto___13247);

return statearr_12192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12194 = (function (f,ch,meta12195){
this.f = f;
this.ch = ch;
this.meta12195 = meta12195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12196,meta12195__$1){
var self__ = this;
var _12196__$1 = this;
return (new cljs.core.async.t_cljs$core$async12194(self__.f,self__.ch,meta12195__$1));
}));

(cljs.core.async.t_cljs$core$async12194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12196){
var self__ = this;
var _12196__$1 = this;
return self__.meta12195;
}));

(cljs.core.async.t_cljs$core$async12194.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12194.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12194.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12211 = (function (f,ch,meta12195,_,fn1,meta12212){
this.f = f;
this.ch = ch;
this.meta12195 = meta12195;
this._ = _;
this.fn1 = fn1;
this.meta12212 = meta12212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12213,meta12212__$1){
var self__ = this;
var _12213__$1 = this;
return (new cljs.core.async.t_cljs$core$async12211(self__.f,self__.ch,self__.meta12195,self__._,self__.fn1,meta12212__$1));
}));

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12213){
var self__ = this;
var _12213__$1 = this;
return self__.meta12212;
}));

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12193_SHARP_){
var G__12214 = (((p1__12193_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12193_SHARP_) : self__.f.call(null,p1__12193_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12214) : f1.call(null,G__12214));
});
}));

(cljs.core.async.t_cljs$core$async12211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12195","meta12195",1231980025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12194","cljs.core.async/t_cljs$core$async12194",85811063,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12212","meta12212",1798241139,null)], null);
}));

(cljs.core.async.t_cljs$core$async12211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12211");

(cljs.core.async.t_cljs$core$async12211.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12211.
 */
cljs.core.async.__GT_t_cljs$core$async12211 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12211(f__$1,ch__$1,meta12195__$1,___$2,fn1__$1,meta12212){
return (new cljs.core.async.t_cljs$core$async12211(f__$1,ch__$1,meta12195__$1,___$2,fn1__$1,meta12212));
});

}

return (new cljs.core.async.t_cljs$core$async12211(self__.f,self__.ch,self__.meta12195,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12225 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12225) : self__.f.call(null,G__12225));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12194.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12195","meta12195",1231980025,null)], null);
}));

(cljs.core.async.t_cljs$core$async12194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12194");

(cljs.core.async.t_cljs$core$async12194.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12194.
 */
cljs.core.async.__GT_t_cljs$core$async12194 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12194(f__$1,ch__$1,meta12195){
return (new cljs.core.async.t_cljs$core$async12194(f__$1,ch__$1,meta12195));
});

}

return (new cljs.core.async.t_cljs$core$async12194(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12226 = (function (f,ch,meta12227){
this.f = f;
this.ch = ch;
this.meta12227 = meta12227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12228,meta12227__$1){
var self__ = this;
var _12228__$1 = this;
return (new cljs.core.async.t_cljs$core$async12226(self__.f,self__.ch,meta12227__$1));
}));

(cljs.core.async.t_cljs$core$async12226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12228){
var self__ = this;
var _12228__$1 = this;
return self__.meta12227;
}));

(cljs.core.async.t_cljs$core$async12226.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12226.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12226.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12227","meta12227",1083223127,null)], null);
}));

(cljs.core.async.t_cljs$core$async12226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12226");

(cljs.core.async.t_cljs$core$async12226.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12226.
 */
cljs.core.async.__GT_t_cljs$core$async12226 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12226(f__$1,ch__$1,meta12227){
return (new cljs.core.async.t_cljs$core$async12226(f__$1,ch__$1,meta12227));
});

}

return (new cljs.core.async.t_cljs$core$async12226(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12233 = (function (p,ch,meta12234){
this.p = p;
this.ch = ch;
this.meta12234 = meta12234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12235,meta12234__$1){
var self__ = this;
var _12235__$1 = this;
return (new cljs.core.async.t_cljs$core$async12233(self__.p,self__.ch,meta12234__$1));
}));

(cljs.core.async.t_cljs$core$async12233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12235){
var self__ = this;
var _12235__$1 = this;
return self__.meta12234;
}));

(cljs.core.async.t_cljs$core$async12233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12234","meta12234",-1205112224,null)], null);
}));

(cljs.core.async.t_cljs$core$async12233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12233");

(cljs.core.async.t_cljs$core$async12233.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12233.
 */
cljs.core.async.__GT_t_cljs$core$async12233 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12233(p__$1,ch__$1,meta12234){
return (new cljs.core.async.t_cljs$core$async12233(p__$1,ch__$1,meta12234));
});

}

return (new cljs.core.async.t_cljs$core$async12233(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12239 = arguments.length;
switch (G__12239) {
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
var c__10636__auto___13267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_12260){
var state_val_12261 = (state_12260[(1)]);
if((state_val_12261 === (7))){
var inst_12256 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
var statearr_12264_13268 = state_12260__$1;
(statearr_12264_13268[(2)] = inst_12256);

(statearr_12264_13268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (1))){
var state_12260__$1 = state_12260;
var statearr_12267_13270 = state_12260__$1;
(statearr_12267_13270[(2)] = null);

(statearr_12267_13270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (4))){
var inst_12242 = (state_12260[(7)]);
var inst_12242__$1 = (state_12260[(2)]);
var inst_12243 = (inst_12242__$1 == null);
var state_12260__$1 = (function (){var statearr_12268 = state_12260;
(statearr_12268[(7)] = inst_12242__$1);

return statearr_12268;
})();
if(cljs.core.truth_(inst_12243)){
var statearr_12271_13272 = state_12260__$1;
(statearr_12271_13272[(1)] = (5));

} else {
var statearr_12272_13273 = state_12260__$1;
(statearr_12272_13273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (6))){
var inst_12242 = (state_12260[(7)]);
var inst_12247 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12242) : p.call(null,inst_12242));
var state_12260__$1 = state_12260;
if(cljs.core.truth_(inst_12247)){
var statearr_12273_13274 = state_12260__$1;
(statearr_12273_13274[(1)] = (8));

} else {
var statearr_12274_13275 = state_12260__$1;
(statearr_12274_13275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (3))){
var inst_12258 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12260__$1,inst_12258);
} else {
if((state_val_12261 === (2))){
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12260__$1,(4),ch);
} else {
if((state_val_12261 === (11))){
var inst_12250 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
var statearr_12281_13281 = state_12260__$1;
(statearr_12281_13281[(2)] = inst_12250);

(statearr_12281_13281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (9))){
var state_12260__$1 = state_12260;
var statearr_12282_13282 = state_12260__$1;
(statearr_12282_13282[(2)] = null);

(statearr_12282_13282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (5))){
var inst_12245 = cljs.core.async.close_BANG_(out);
var state_12260__$1 = state_12260;
var statearr_12283_13283 = state_12260__$1;
(statearr_12283_13283[(2)] = inst_12245);

(statearr_12283_13283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (10))){
var inst_12253 = (state_12260[(2)]);
var state_12260__$1 = (function (){var statearr_12284 = state_12260;
(statearr_12284[(8)] = inst_12253);

return statearr_12284;
})();
var statearr_12285_13284 = state_12260__$1;
(statearr_12285_13284[(2)] = null);

(statearr_12285_13284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (8))){
var inst_12242 = (state_12260[(7)]);
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12260__$1,(11),out,inst_12242);
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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12286 = [null,null,null,null,null,null,null,null,null];
(statearr_12286[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12286[(1)] = (1));

return statearr_12286;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12260){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_12260);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12287){var ex__10549__auto__ = e12287;
var statearr_12288_13285 = state_12260;
(statearr_12288_13285[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_12260[(4)]))){
var statearr_12289_13286 = state_12260;
(statearr_12289_13286[(1)] = cljs.core.first((state_12260[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13287 = state_12260;
state_12260 = G__13287;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_12290 = f__10637__auto__();
(statearr_12290[(6)] = c__10636__auto___13267);

return statearr_12290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12292 = arguments.length;
switch (G__12292) {
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
var c__10636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_12364){
var state_val_12365 = (state_12364[(1)]);
if((state_val_12365 === (7))){
var inst_12360 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12366_13289 = state_12364__$1;
(statearr_12366_13289[(2)] = inst_12360);

(statearr_12366_13289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (20))){
var inst_12330 = (state_12364[(7)]);
var inst_12341 = (state_12364[(2)]);
var inst_12342 = cljs.core.next(inst_12330);
var inst_12316 = inst_12342;
var inst_12317 = null;
var inst_12318 = (0);
var inst_12319 = (0);
var state_12364__$1 = (function (){var statearr_12367 = state_12364;
(statearr_12367[(8)] = inst_12319);

(statearr_12367[(9)] = inst_12317);

(statearr_12367[(10)] = inst_12316);

(statearr_12367[(11)] = inst_12318);

(statearr_12367[(12)] = inst_12341);

return statearr_12367;
})();
var statearr_12368_13290 = state_12364__$1;
(statearr_12368_13290[(2)] = null);

(statearr_12368_13290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (1))){
var state_12364__$1 = state_12364;
var statearr_12369_13291 = state_12364__$1;
(statearr_12369_13291[(2)] = null);

(statearr_12369_13291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (4))){
var inst_12305 = (state_12364[(13)]);
var inst_12305__$1 = (state_12364[(2)]);
var inst_12306 = (inst_12305__$1 == null);
var state_12364__$1 = (function (){var statearr_12371 = state_12364;
(statearr_12371[(13)] = inst_12305__$1);

return statearr_12371;
})();
if(cljs.core.truth_(inst_12306)){
var statearr_12372_13292 = state_12364__$1;
(statearr_12372_13292[(1)] = (5));

} else {
var statearr_12373_13293 = state_12364__$1;
(statearr_12373_13293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (15))){
var state_12364__$1 = state_12364;
var statearr_12377_13294 = state_12364__$1;
(statearr_12377_13294[(2)] = null);

(statearr_12377_13294[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (21))){
var state_12364__$1 = state_12364;
var statearr_12378_13295 = state_12364__$1;
(statearr_12378_13295[(2)] = null);

(statearr_12378_13295[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (13))){
var inst_12319 = (state_12364[(8)]);
var inst_12317 = (state_12364[(9)]);
var inst_12316 = (state_12364[(10)]);
var inst_12318 = (state_12364[(11)]);
var inst_12326 = (state_12364[(2)]);
var inst_12327 = (inst_12319 + (1));
var tmp12374 = inst_12317;
var tmp12375 = inst_12316;
var tmp12376 = inst_12318;
var inst_12316__$1 = tmp12375;
var inst_12317__$1 = tmp12374;
var inst_12318__$1 = tmp12376;
var inst_12319__$1 = inst_12327;
var state_12364__$1 = (function (){var statearr_12379 = state_12364;
(statearr_12379[(8)] = inst_12319__$1);

(statearr_12379[(9)] = inst_12317__$1);

(statearr_12379[(14)] = inst_12326);

(statearr_12379[(10)] = inst_12316__$1);

(statearr_12379[(11)] = inst_12318__$1);

return statearr_12379;
})();
var statearr_12381_13296 = state_12364__$1;
(statearr_12381_13296[(2)] = null);

(statearr_12381_13296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (22))){
var state_12364__$1 = state_12364;
var statearr_12382_13297 = state_12364__$1;
(statearr_12382_13297[(2)] = null);

(statearr_12382_13297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (6))){
var inst_12305 = (state_12364[(13)]);
var inst_12314 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12305) : f.call(null,inst_12305));
var inst_12315 = cljs.core.seq(inst_12314);
var inst_12316 = inst_12315;
var inst_12317 = null;
var inst_12318 = (0);
var inst_12319 = (0);
var state_12364__$1 = (function (){var statearr_12383 = state_12364;
(statearr_12383[(8)] = inst_12319);

(statearr_12383[(9)] = inst_12317);

(statearr_12383[(10)] = inst_12316);

(statearr_12383[(11)] = inst_12318);

return statearr_12383;
})();
var statearr_12384_13298 = state_12364__$1;
(statearr_12384_13298[(2)] = null);

(statearr_12384_13298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (17))){
var inst_12330 = (state_12364[(7)]);
var inst_12334 = cljs.core.chunk_first(inst_12330);
var inst_12335 = cljs.core.chunk_rest(inst_12330);
var inst_12336 = cljs.core.count(inst_12334);
var inst_12316 = inst_12335;
var inst_12317 = inst_12334;
var inst_12318 = inst_12336;
var inst_12319 = (0);
var state_12364__$1 = (function (){var statearr_12385 = state_12364;
(statearr_12385[(8)] = inst_12319);

(statearr_12385[(9)] = inst_12317);

(statearr_12385[(10)] = inst_12316);

(statearr_12385[(11)] = inst_12318);

return statearr_12385;
})();
var statearr_12386_13299 = state_12364__$1;
(statearr_12386_13299[(2)] = null);

(statearr_12386_13299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (3))){
var inst_12362 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12364__$1,inst_12362);
} else {
if((state_val_12365 === (12))){
var inst_12350 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12388_13300 = state_12364__$1;
(statearr_12388_13300[(2)] = inst_12350);

(statearr_12388_13300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (2))){
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12364__$1,(4),in$);
} else {
if((state_val_12365 === (23))){
var inst_12358 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12390_13301 = state_12364__$1;
(statearr_12390_13301[(2)] = inst_12358);

(statearr_12390_13301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (19))){
var inst_12345 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12391_13315 = state_12364__$1;
(statearr_12391_13315[(2)] = inst_12345);

(statearr_12391_13315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (11))){
var inst_12316 = (state_12364[(10)]);
var inst_12330 = (state_12364[(7)]);
var inst_12330__$1 = cljs.core.seq(inst_12316);
var state_12364__$1 = (function (){var statearr_12392 = state_12364;
(statearr_12392[(7)] = inst_12330__$1);

return statearr_12392;
})();
if(inst_12330__$1){
var statearr_12393_13319 = state_12364__$1;
(statearr_12393_13319[(1)] = (14));

} else {
var statearr_12394_13324 = state_12364__$1;
(statearr_12394_13324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (9))){
var inst_12352 = (state_12364[(2)]);
var inst_12353 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12364__$1 = (function (){var statearr_12400 = state_12364;
(statearr_12400[(15)] = inst_12352);

return statearr_12400;
})();
if(cljs.core.truth_(inst_12353)){
var statearr_12401_13332 = state_12364__$1;
(statearr_12401_13332[(1)] = (21));

} else {
var statearr_12402_13333 = state_12364__$1;
(statearr_12402_13333[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (5))){
var inst_12308 = cljs.core.async.close_BANG_(out);
var state_12364__$1 = state_12364;
var statearr_12403_13337 = state_12364__$1;
(statearr_12403_13337[(2)] = inst_12308);

(statearr_12403_13337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (14))){
var inst_12330 = (state_12364[(7)]);
var inst_12332 = cljs.core.chunked_seq_QMARK_(inst_12330);
var state_12364__$1 = state_12364;
if(inst_12332){
var statearr_12404_13342 = state_12364__$1;
(statearr_12404_13342[(1)] = (17));

} else {
var statearr_12405_13347 = state_12364__$1;
(statearr_12405_13347[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (16))){
var inst_12348 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12406_13349 = state_12364__$1;
(statearr_12406_13349[(2)] = inst_12348);

(statearr_12406_13349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (10))){
var inst_12319 = (state_12364[(8)]);
var inst_12317 = (state_12364[(9)]);
var inst_12324 = cljs.core._nth(inst_12317,inst_12319);
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12364__$1,(13),out,inst_12324);
} else {
if((state_val_12365 === (18))){
var inst_12330 = (state_12364[(7)]);
var inst_12339 = cljs.core.first(inst_12330);
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12364__$1,(20),out,inst_12339);
} else {
if((state_val_12365 === (8))){
var inst_12319 = (state_12364[(8)]);
var inst_12318 = (state_12364[(11)]);
var inst_12321 = (inst_12319 < inst_12318);
var inst_12322 = inst_12321;
var state_12364__$1 = state_12364;
if(cljs.core.truth_(inst_12322)){
var statearr_12407_13366 = state_12364__$1;
(statearr_12407_13366[(1)] = (10));

} else {
var statearr_12408_13367 = state_12364__$1;
(statearr_12408_13367[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_12409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12409[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__);

(statearr_12409[(1)] = (1));

return statearr_12409;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____1 = (function (state_12364){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_12364);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12410){var ex__10549__auto__ = e12410;
var statearr_12411_13373 = state_12364;
(statearr_12411_13373[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_12364[(4)]))){
var statearr_12412_13374 = state_12364;
(statearr_12412_13374[(1)] = cljs.core.first((state_12364[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13375 = state_12364;
state_12364 = G__13375;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__ = function(state_12364){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____1.call(this,state_12364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_12414 = f__10637__auto__();
(statearr_12414[(6)] = c__10636__auto__);

return statearr_12414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));

return c__10636__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12418 = arguments.length;
switch (G__12418) {
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
var G__12432 = arguments.length;
switch (G__12432) {
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
var G__12434 = arguments.length;
switch (G__12434) {
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
var c__10636__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_12469){
var state_val_12470 = (state_12469[(1)]);
if((state_val_12470 === (7))){
var inst_12464 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12471_13380 = state_12469__$1;
(statearr_12471_13380[(2)] = inst_12464);

(statearr_12471_13380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (1))){
var inst_12437 = null;
var state_12469__$1 = (function (){var statearr_12472 = state_12469;
(statearr_12472[(7)] = inst_12437);

return statearr_12472;
})();
var statearr_12473_13381 = state_12469__$1;
(statearr_12473_13381[(2)] = null);

(statearr_12473_13381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (4))){
var inst_12440 = (state_12469[(8)]);
var inst_12440__$1 = (state_12469[(2)]);
var inst_12450 = (inst_12440__$1 == null);
var inst_12451 = cljs.core.not(inst_12450);
var state_12469__$1 = (function (){var statearr_12474 = state_12469;
(statearr_12474[(8)] = inst_12440__$1);

return statearr_12474;
})();
if(inst_12451){
var statearr_12475_13382 = state_12469__$1;
(statearr_12475_13382[(1)] = (5));

} else {
var statearr_12476_13383 = state_12469__$1;
(statearr_12476_13383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (6))){
var state_12469__$1 = state_12469;
var statearr_12477_13384 = state_12469__$1;
(statearr_12477_13384[(2)] = null);

(statearr_12477_13384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (3))){
var inst_12466 = (state_12469[(2)]);
var inst_12467 = cljs.core.async.close_BANG_(out);
var state_12469__$1 = (function (){var statearr_12478 = state_12469;
(statearr_12478[(9)] = inst_12466);

return statearr_12478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12469__$1,inst_12467);
} else {
if((state_val_12470 === (2))){
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12469__$1,(4),ch);
} else {
if((state_val_12470 === (11))){
var inst_12440 = (state_12469[(8)]);
var inst_12458 = (state_12469[(2)]);
var inst_12437 = inst_12440;
var state_12469__$1 = (function (){var statearr_12479 = state_12469;
(statearr_12479[(7)] = inst_12437);

(statearr_12479[(10)] = inst_12458);

return statearr_12479;
})();
var statearr_12481_13385 = state_12469__$1;
(statearr_12481_13385[(2)] = null);

(statearr_12481_13385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (9))){
var inst_12440 = (state_12469[(8)]);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12469__$1,(11),out,inst_12440);
} else {
if((state_val_12470 === (5))){
var inst_12437 = (state_12469[(7)]);
var inst_12440 = (state_12469[(8)]);
var inst_12453 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12440,inst_12437);
var state_12469__$1 = state_12469;
if(inst_12453){
var statearr_12483_13386 = state_12469__$1;
(statearr_12483_13386[(1)] = (8));

} else {
var statearr_12484_13387 = state_12469__$1;
(statearr_12484_13387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (10))){
var inst_12461 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12485_13395 = state_12469__$1;
(statearr_12485_13395[(2)] = inst_12461);

(statearr_12485_13395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (8))){
var inst_12437 = (state_12469[(7)]);
var tmp12482 = inst_12437;
var inst_12437__$1 = tmp12482;
var state_12469__$1 = (function (){var statearr_12486 = state_12469;
(statearr_12486[(7)] = inst_12437__$1);

return statearr_12486;
})();
var statearr_12487_13397 = state_12469__$1;
(statearr_12487_13397[(2)] = null);

(statearr_12487_13397[(1)] = (2));


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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12492 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12492[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12492[(1)] = (1));

return statearr_12492;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12469){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_12469);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12493){var ex__10549__auto__ = e12493;
var statearr_12494_13399 = state_12469;
(statearr_12494_13399[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_12469[(4)]))){
var statearr_12495_13400 = state_12469;
(statearr_12495_13400[(1)] = cljs.core.first((state_12469[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13401 = state_12469;
state_12469 = G__13401;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_12496 = f__10637__auto__();
(statearr_12496[(6)] = c__10636__auto___13379);

return statearr_12496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12498 = arguments.length;
switch (G__12498) {
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
var c__10636__auto___13403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_12536){
var state_val_12537 = (state_12536[(1)]);
if((state_val_12537 === (7))){
var inst_12532 = (state_12536[(2)]);
var state_12536__$1 = state_12536;
var statearr_12541_13404 = state_12536__$1;
(statearr_12541_13404[(2)] = inst_12532);

(statearr_12541_13404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (1))){
var inst_12499 = (new Array(n));
var inst_12500 = inst_12499;
var inst_12501 = (0);
var state_12536__$1 = (function (){var statearr_12542 = state_12536;
(statearr_12542[(7)] = inst_12500);

(statearr_12542[(8)] = inst_12501);

return statearr_12542;
})();
var statearr_12543_13405 = state_12536__$1;
(statearr_12543_13405[(2)] = null);

(statearr_12543_13405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (4))){
var inst_12504 = (state_12536[(9)]);
var inst_12504__$1 = (state_12536[(2)]);
var inst_12505 = (inst_12504__$1 == null);
var inst_12506 = cljs.core.not(inst_12505);
var state_12536__$1 = (function (){var statearr_12544 = state_12536;
(statearr_12544[(9)] = inst_12504__$1);

return statearr_12544;
})();
if(inst_12506){
var statearr_12545_13406 = state_12536__$1;
(statearr_12545_13406[(1)] = (5));

} else {
var statearr_12546_13407 = state_12536__$1;
(statearr_12546_13407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (15))){
var inst_12526 = (state_12536[(2)]);
var state_12536__$1 = state_12536;
var statearr_12547_13408 = state_12536__$1;
(statearr_12547_13408[(2)] = inst_12526);

(statearr_12547_13408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (13))){
var state_12536__$1 = state_12536;
var statearr_12548_13409 = state_12536__$1;
(statearr_12548_13409[(2)] = null);

(statearr_12548_13409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (6))){
var inst_12501 = (state_12536[(8)]);
var inst_12522 = (inst_12501 > (0));
var state_12536__$1 = state_12536;
if(cljs.core.truth_(inst_12522)){
var statearr_12550_13414 = state_12536__$1;
(statearr_12550_13414[(1)] = (12));

} else {
var statearr_12551_13415 = state_12536__$1;
(statearr_12551_13415[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (3))){
var inst_12534 = (state_12536[(2)]);
var state_12536__$1 = state_12536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12536__$1,inst_12534);
} else {
if((state_val_12537 === (12))){
var inst_12500 = (state_12536[(7)]);
var inst_12524 = cljs.core.vec(inst_12500);
var state_12536__$1 = state_12536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12536__$1,(15),out,inst_12524);
} else {
if((state_val_12537 === (2))){
var state_12536__$1 = state_12536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12536__$1,(4),ch);
} else {
if((state_val_12537 === (11))){
var inst_12516 = (state_12536[(2)]);
var inst_12517 = (new Array(n));
var inst_12500 = inst_12517;
var inst_12501 = (0);
var state_12536__$1 = (function (){var statearr_12552 = state_12536;
(statearr_12552[(7)] = inst_12500);

(statearr_12552[(8)] = inst_12501);

(statearr_12552[(10)] = inst_12516);

return statearr_12552;
})();
var statearr_12553_13419 = state_12536__$1;
(statearr_12553_13419[(2)] = null);

(statearr_12553_13419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (9))){
var inst_12500 = (state_12536[(7)]);
var inst_12514 = cljs.core.vec(inst_12500);
var state_12536__$1 = state_12536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12536__$1,(11),out,inst_12514);
} else {
if((state_val_12537 === (5))){
var inst_12500 = (state_12536[(7)]);
var inst_12501 = (state_12536[(8)]);
var inst_12509 = (state_12536[(11)]);
var inst_12504 = (state_12536[(9)]);
var inst_12508 = (inst_12500[inst_12501] = inst_12504);
var inst_12509__$1 = (inst_12501 + (1));
var inst_12510 = (inst_12509__$1 < n);
var state_12536__$1 = (function (){var statearr_12554 = state_12536;
(statearr_12554[(11)] = inst_12509__$1);

(statearr_12554[(12)] = inst_12508);

return statearr_12554;
})();
if(cljs.core.truth_(inst_12510)){
var statearr_12555_13420 = state_12536__$1;
(statearr_12555_13420[(1)] = (8));

} else {
var statearr_12559_13421 = state_12536__$1;
(statearr_12559_13421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (14))){
var inst_12529 = (state_12536[(2)]);
var inst_12530 = cljs.core.async.close_BANG_(out);
var state_12536__$1 = (function (){var statearr_12561 = state_12536;
(statearr_12561[(13)] = inst_12529);

return statearr_12561;
})();
var statearr_12562_13422 = state_12536__$1;
(statearr_12562_13422[(2)] = inst_12530);

(statearr_12562_13422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (10))){
var inst_12520 = (state_12536[(2)]);
var state_12536__$1 = state_12536;
var statearr_12563_13423 = state_12536__$1;
(statearr_12563_13423[(2)] = inst_12520);

(statearr_12563_13423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (8))){
var inst_12500 = (state_12536[(7)]);
var inst_12509 = (state_12536[(11)]);
var tmp12560 = inst_12500;
var inst_12500__$1 = tmp12560;
var inst_12501 = inst_12509;
var state_12536__$1 = (function (){var statearr_12564 = state_12536;
(statearr_12564[(7)] = inst_12500__$1);

(statearr_12564[(8)] = inst_12501);

return statearr_12564;
})();
var statearr_12565_13424 = state_12536__$1;
(statearr_12565_13424[(2)] = null);

(statearr_12565_13424[(1)] = (2));


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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12566[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12566[(1)] = (1));

return statearr_12566;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12536){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_12536);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12567){var ex__10549__auto__ = e12567;
var statearr_12569_13426 = state_12536;
(statearr_12569_13426[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_12536[(4)]))){
var statearr_12570_13427 = state_12536;
(statearr_12570_13427[(1)] = cljs.core.first((state_12536[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13429 = state_12536;
state_12536 = G__13429;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_12571 = f__10637__auto__();
(statearr_12571[(6)] = c__10636__auto___13403);

return statearr_12571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12573 = arguments.length;
switch (G__12573) {
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
var c__10636__auto___13432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10637__auto__ = (function (){var switch__10545__auto__ = (function (state_12615){
var state_val_12616 = (state_12615[(1)]);
if((state_val_12616 === (7))){
var inst_12611 = (state_12615[(2)]);
var state_12615__$1 = state_12615;
var statearr_12617_13433 = state_12615__$1;
(statearr_12617_13433[(2)] = inst_12611);

(statearr_12617_13433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (1))){
var inst_12574 = [];
var inst_12575 = inst_12574;
var inst_12576 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12615__$1 = (function (){var statearr_12618 = state_12615;
(statearr_12618[(7)] = inst_12576);

(statearr_12618[(8)] = inst_12575);

return statearr_12618;
})();
var statearr_12619_13434 = state_12615__$1;
(statearr_12619_13434[(2)] = null);

(statearr_12619_13434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (4))){
var inst_12579 = (state_12615[(9)]);
var inst_12579__$1 = (state_12615[(2)]);
var inst_12580 = (inst_12579__$1 == null);
var inst_12581 = cljs.core.not(inst_12580);
var state_12615__$1 = (function (){var statearr_12620 = state_12615;
(statearr_12620[(9)] = inst_12579__$1);

return statearr_12620;
})();
if(inst_12581){
var statearr_12621_13436 = state_12615__$1;
(statearr_12621_13436[(1)] = (5));

} else {
var statearr_12622_13437 = state_12615__$1;
(statearr_12622_13437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (15))){
var inst_12605 = (state_12615[(2)]);
var state_12615__$1 = state_12615;
var statearr_12623_13438 = state_12615__$1;
(statearr_12623_13438[(2)] = inst_12605);

(statearr_12623_13438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (13))){
var state_12615__$1 = state_12615;
var statearr_12624_13439 = state_12615__$1;
(statearr_12624_13439[(2)] = null);

(statearr_12624_13439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (6))){
var inst_12575 = (state_12615[(8)]);
var inst_12600 = inst_12575.length;
var inst_12601 = (inst_12600 > (0));
var state_12615__$1 = state_12615;
if(cljs.core.truth_(inst_12601)){
var statearr_12625_13440 = state_12615__$1;
(statearr_12625_13440[(1)] = (12));

} else {
var statearr_12626_13441 = state_12615__$1;
(statearr_12626_13441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (3))){
var inst_12613 = (state_12615[(2)]);
var state_12615__$1 = state_12615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12615__$1,inst_12613);
} else {
if((state_val_12616 === (12))){
var inst_12575 = (state_12615[(8)]);
var inst_12603 = cljs.core.vec(inst_12575);
var state_12615__$1 = state_12615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12615__$1,(15),out,inst_12603);
} else {
if((state_val_12616 === (2))){
var state_12615__$1 = state_12615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12615__$1,(4),ch);
} else {
if((state_val_12616 === (11))){
var inst_12579 = (state_12615[(9)]);
var inst_12583 = (state_12615[(10)]);
var inst_12593 = (state_12615[(2)]);
var inst_12594 = [];
var inst_12595 = inst_12594.push(inst_12579);
var inst_12575 = inst_12594;
var inst_12576 = inst_12583;
var state_12615__$1 = (function (){var statearr_12627 = state_12615;
(statearr_12627[(7)] = inst_12576);

(statearr_12627[(11)] = inst_12593);

(statearr_12627[(12)] = inst_12595);

(statearr_12627[(8)] = inst_12575);

return statearr_12627;
})();
var statearr_12628_13442 = state_12615__$1;
(statearr_12628_13442[(2)] = null);

(statearr_12628_13442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (9))){
var inst_12575 = (state_12615[(8)]);
var inst_12591 = cljs.core.vec(inst_12575);
var state_12615__$1 = state_12615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12615__$1,(11),out,inst_12591);
} else {
if((state_val_12616 === (5))){
var inst_12576 = (state_12615[(7)]);
var inst_12579 = (state_12615[(9)]);
var inst_12583 = (state_12615[(10)]);
var inst_12583__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12579) : f.call(null,inst_12579));
var inst_12584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12583__$1,inst_12576);
var inst_12585 = cljs.core.keyword_identical_QMARK_(inst_12576,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12586 = ((inst_12584) || (inst_12585));
var state_12615__$1 = (function (){var statearr_12629 = state_12615;
(statearr_12629[(10)] = inst_12583__$1);

return statearr_12629;
})();
if(cljs.core.truth_(inst_12586)){
var statearr_12630_13443 = state_12615__$1;
(statearr_12630_13443[(1)] = (8));

} else {
var statearr_12631_13444 = state_12615__$1;
(statearr_12631_13444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (14))){
var inst_12608 = (state_12615[(2)]);
var inst_12609 = cljs.core.async.close_BANG_(out);
var state_12615__$1 = (function (){var statearr_12633 = state_12615;
(statearr_12633[(13)] = inst_12608);

return statearr_12633;
})();
var statearr_12634_13445 = state_12615__$1;
(statearr_12634_13445[(2)] = inst_12609);

(statearr_12634_13445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (10))){
var inst_12598 = (state_12615[(2)]);
var state_12615__$1 = state_12615;
var statearr_12635_13446 = state_12615__$1;
(statearr_12635_13446[(2)] = inst_12598);

(statearr_12635_13446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (8))){
var inst_12579 = (state_12615[(9)]);
var inst_12583 = (state_12615[(10)]);
var inst_12575 = (state_12615[(8)]);
var inst_12588 = inst_12575.push(inst_12579);
var tmp12632 = inst_12575;
var inst_12575__$1 = tmp12632;
var inst_12576 = inst_12583;
var state_12615__$1 = (function (){var statearr_12636 = state_12615;
(statearr_12636[(7)] = inst_12576);

(statearr_12636[(8)] = inst_12575__$1);

(statearr_12636[(14)] = inst_12588);

return statearr_12636;
})();
var statearr_12637_13448 = state_12615__$1;
(statearr_12637_13448[(2)] = null);

(statearr_12637_13448[(1)] = (2));


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
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12638[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12638[(1)] = (1));

return statearr_12638;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12615){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__(state_12615);
if(cljs.core.keyword_identical_QMARK_(result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12639){var ex__10549__auto__ = e12639;
var statearr_12640_13450 = state_12615;
(statearr_12640_13450[(2)] = ex__10549__auto__);


if(cljs.core.seq((state_12615[(4)]))){
var statearr_12641_13451 = state_12615;
(statearr_12641_13451[(1)] = cljs.core.first((state_12615[(4)])));

} else {
throw ex__10549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12615;
state_12615 = G__13452;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
})();
var state__10638__auto__ = (function (){var statearr_12642 = f__10637__auto__();
(statearr_12642[(6)] = c__10636__auto___13432);

return statearr_12642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10638__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
