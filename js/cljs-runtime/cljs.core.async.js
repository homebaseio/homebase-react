goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10714 = arguments.length;
switch (G__10714) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10715 = (function (f,blockable,meta10716){
this.f = f;
this.blockable = blockable;
this.meta10716 = meta10716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10717,meta10716__$1){
var self__ = this;
var _10717__$1 = this;
return (new cljs.core.async.t_cljs$core$async10715(self__.f,self__.blockable,meta10716__$1));
}));

(cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10717){
var self__ = this;
var _10717__$1 = this;
return self__.meta10716;
}));

(cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10716","meta10716",27497546,null)], null);
}));

(cljs.core.async.t_cljs$core$async10715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10715");

(cljs.core.async.t_cljs$core$async10715.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10715.
 */
cljs.core.async.__GT_t_cljs$core$async10715 = (function cljs$core$async$__GT_t_cljs$core$async10715(f__$1,blockable__$1,meta10716){
return (new cljs.core.async.t_cljs$core$async10715(f__$1,blockable__$1,meta10716));
});

}

return (new cljs.core.async.t_cljs$core$async10715(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10728 = arguments.length;
switch (G__10728) {
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
var G__10734 = arguments.length;
switch (G__10734) {
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
var val_12642 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12642) : fn1.call(null,val_12642));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12642) : fn1.call(null,val_12642));
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
var G__10740 = arguments.length;
switch (G__10740) {
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
var n__4613__auto___12644 = n;
var x_12645 = (0);
while(true){
if((x_12645 < n__4613__auto___12644)){
(a[x_12645] = x_12645);

var G__12646 = (x_12645 + (1));
x_12645 = G__12646;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10741 = (function (flag,meta10742){
this.flag = flag;
this.meta10742 = meta10742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10743,meta10742__$1){
var self__ = this;
var _10743__$1 = this;
return (new cljs.core.async.t_cljs$core$async10741(self__.flag,meta10742__$1));
}));

(cljs.core.async.t_cljs$core$async10741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10743){
var self__ = this;
var _10743__$1 = this;
return self__.meta10742;
}));

(cljs.core.async.t_cljs$core$async10741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10742","meta10742",-820794809,null)], null);
}));

(cljs.core.async.t_cljs$core$async10741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10741");

(cljs.core.async.t_cljs$core$async10741.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10741.
 */
cljs.core.async.__GT_t_cljs$core$async10741 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10741(flag__$1,meta10742){
return (new cljs.core.async.t_cljs$core$async10741(flag__$1,meta10742));
});

}

return (new cljs.core.async.t_cljs$core$async10741(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10744 = (function (flag,cb,meta10745){
this.flag = flag;
this.cb = cb;
this.meta10745 = meta10745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10746,meta10745__$1){
var self__ = this;
var _10746__$1 = this;
return (new cljs.core.async.t_cljs$core$async10744(self__.flag,self__.cb,meta10745__$1));
}));

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10746){
var self__ = this;
var _10746__$1 = this;
return self__.meta10745;
}));

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10745","meta10745",1348361103,null)], null);
}));

(cljs.core.async.t_cljs$core$async10744.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10744");

(cljs.core.async.t_cljs$core$async10744.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10744");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10744.
 */
cljs.core.async.__GT_t_cljs$core$async10744 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10744(flag__$1,cb__$1,meta10745){
return (new cljs.core.async.t_cljs$core$async10744(flag__$1,cb__$1,meta10745));
});

}

return (new cljs.core.async.t_cljs$core$async10744(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10751_SHARP_){
var G__10754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10751_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10754) : fret.call(null,G__10754));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10752_SHARP_){
var G__10755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10752_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10755) : fret.call(null,G__10755));
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
var G__12648 = (i + (1));
i = G__12648;
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
var len__4736__auto___12649 = arguments.length;
var i__4737__auto___12650 = (0);
while(true){
if((i__4737__auto___12650 < len__4736__auto___12649)){
args__4742__auto__.push((arguments[i__4737__auto___12650]));

var G__12652 = (i__4737__auto___12650 + (1));
i__4737__auto___12650 = G__12652;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10758){
var map__10759 = p__10758;
var map__10759__$1 = (((((!((map__10759 == null))))?(((((map__10759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10759):map__10759);
var opts = map__10759__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10756){
var G__10757 = cljs.core.first(seq10756);
var seq10756__$1 = cljs.core.next(seq10756);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10757,seq10756__$1);
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
var G__10762 = arguments.length;
switch (G__10762) {
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
var c__10655__auto___12656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_10791){
var state_val_10792 = (state_10791[(1)]);
if((state_val_10792 === (7))){
var inst_10786 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
var statearr_10793_12657 = state_10791__$1;
(statearr_10793_12657[(2)] = inst_10786);

(statearr_10793_12657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (1))){
var state_10791__$1 = state_10791;
var statearr_10794_12658 = state_10791__$1;
(statearr_10794_12658[(2)] = null);

(statearr_10794_12658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (4))){
var inst_10766 = (state_10791[(7)]);
var inst_10766__$1 = (state_10791[(2)]);
var inst_10767 = (inst_10766__$1 == null);
var state_10791__$1 = (function (){var statearr_10795 = state_10791;
(statearr_10795[(7)] = inst_10766__$1);

return statearr_10795;
})();
if(cljs.core.truth_(inst_10767)){
var statearr_10796_12659 = state_10791__$1;
(statearr_10796_12659[(1)] = (5));

} else {
var statearr_10797_12660 = state_10791__$1;
(statearr_10797_12660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (13))){
var state_10791__$1 = state_10791;
var statearr_10798_12661 = state_10791__$1;
(statearr_10798_12661[(2)] = null);

(statearr_10798_12661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (6))){
var inst_10766 = (state_10791[(7)]);
var state_10791__$1 = state_10791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10791__$1,(11),to,inst_10766);
} else {
if((state_val_10792 === (3))){
var inst_10788 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10791__$1,inst_10788);
} else {
if((state_val_10792 === (12))){
var state_10791__$1 = state_10791;
var statearr_10803_12662 = state_10791__$1;
(statearr_10803_12662[(2)] = null);

(statearr_10803_12662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (2))){
var state_10791__$1 = state_10791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10791__$1,(4),from);
} else {
if((state_val_10792 === (11))){
var inst_10779 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
if(cljs.core.truth_(inst_10779)){
var statearr_10804_12663 = state_10791__$1;
(statearr_10804_12663[(1)] = (12));

} else {
var statearr_10805_12664 = state_10791__$1;
(statearr_10805_12664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (9))){
var state_10791__$1 = state_10791;
var statearr_10807_12665 = state_10791__$1;
(statearr_10807_12665[(2)] = null);

(statearr_10807_12665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (5))){
var state_10791__$1 = state_10791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10808_12666 = state_10791__$1;
(statearr_10808_12666[(1)] = (8));

} else {
var statearr_10809_12667 = state_10791__$1;
(statearr_10809_12667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (14))){
var inst_10784 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
var statearr_10810_12668 = state_10791__$1;
(statearr_10810_12668[(2)] = inst_10784);

(statearr_10810_12668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (10))){
var inst_10776 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
var statearr_10811_12669 = state_10791__$1;
(statearr_10811_12669[(2)] = inst_10776);

(statearr_10811_12669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (8))){
var inst_10771 = cljs.core.async.close_BANG_(to);
var state_10791__$1 = state_10791;
var statearr_10812_12670 = state_10791__$1;
(statearr_10812_12670[(2)] = inst_10771);

(statearr_10812_12670[(1)] = (10));


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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_10813 = [null,null,null,null,null,null,null,null];
(statearr_10813[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_10813[(1)] = (1));

return statearr_10813;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_10791){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_10791);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e10814){var ex__10590__auto__ = e10814;
var statearr_10815_12671 = state_10791;
(statearr_10815_12671[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_10791[(4)]))){
var statearr_10816_12672 = state_10791;
(statearr_10816_12672[(1)] = cljs.core.first((state_10791[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12673 = state_10791;
state_10791 = G__12673;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_10791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_10791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_10817 = f__10656__auto__();
(statearr_10817[(6)] = c__10655__auto___12656);

return statearr_10817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
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
var process = (function (p__10818){
var vec__10819 = p__10818;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10819,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10819,(1),null);
var job = vec__10819;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10655__auto___12674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_10826){
var state_val_10827 = (state_10826[(1)]);
if((state_val_10827 === (1))){
var state_10826__$1 = state_10826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10826__$1,(2),res,v);
} else {
if((state_val_10827 === (2))){
var inst_10823 = (state_10826[(2)]);
var inst_10824 = cljs.core.async.close_BANG_(res);
var state_10826__$1 = (function (){var statearr_10831 = state_10826;
(statearr_10831[(7)] = inst_10823);

return statearr_10831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10826__$1,inst_10824);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0 = (function (){
var statearr_10834 = [null,null,null,null,null,null,null,null];
(statearr_10834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__);

(statearr_10834[(1)] = (1));

return statearr_10834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1 = (function (state_10826){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_10826);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e10835){var ex__10590__auto__ = e10835;
var statearr_10836_12675 = state_10826;
(statearr_10836_12675[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_10826[(4)]))){
var statearr_10837_12676 = state_10826;
(statearr_10837_12676[(1)] = cljs.core.first((state_10826[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12677 = state_10826;
state_10826 = G__12677;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = function(state_10826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1.call(this,state_10826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_10841 = f__10656__auto__();
(statearr_10841[(6)] = c__10655__auto___12674);

return statearr_10841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__10843){
var vec__10844 = p__10843;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10844,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10844,(1),null);
var job = vec__10844;
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
var n__4613__auto___12678 = n;
var __12679 = (0);
while(true){
if((__12679 < n__4613__auto___12678)){
var G__10850_12680 = type;
var G__10850_12681__$1 = (((G__10850_12680 instanceof cljs.core.Keyword))?G__10850_12680.fqn:null);
switch (G__10850_12681__$1) {
case "compute":
var c__10655__auto___12683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12679,c__10655__auto___12683,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = ((function (__12679,c__10655__auto___12683,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function (state_10864){
var state_val_10865 = (state_10864[(1)]);
if((state_val_10865 === (1))){
var state_10864__$1 = state_10864;
var statearr_10866_12684 = state_10864__$1;
(statearr_10866_12684[(2)] = null);

(statearr_10866_12684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (2))){
var state_10864__$1 = state_10864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10864__$1,(4),jobs);
} else {
if((state_val_10865 === (3))){
var inst_10862 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10864__$1,inst_10862);
} else {
if((state_val_10865 === (4))){
var inst_10853 = (state_10864[(2)]);
var inst_10854 = process(inst_10853);
var state_10864__$1 = state_10864;
if(cljs.core.truth_(inst_10854)){
var statearr_10867_12685 = state_10864__$1;
(statearr_10867_12685[(1)] = (5));

} else {
var statearr_10868_12686 = state_10864__$1;
(statearr_10868_12686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (5))){
var state_10864__$1 = state_10864;
var statearr_10869_12687 = state_10864__$1;
(statearr_10869_12687[(2)] = null);

(statearr_10869_12687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (6))){
var state_10864__$1 = state_10864;
var statearr_10870_12688 = state_10864__$1;
(statearr_10870_12688[(2)] = null);

(statearr_10870_12688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (7))){
var inst_10860 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10871_12689 = state_10864__$1;
(statearr_10871_12689[(2)] = inst_10860);

(statearr_10871_12689[(1)] = (3));


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
});})(__12679,c__10655__auto___12683,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async))
;
return ((function (__12679,switch__10586__auto__,c__10655__auto___12683,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0 = (function (){
var statearr_10872 = [null,null,null,null,null,null,null];
(statearr_10872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__);

(statearr_10872[(1)] = (1));

return statearr_10872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1 = (function (state_10864){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_10864);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e10873){var ex__10590__auto__ = e10873;
var statearr_10874_12690 = state_10864;
(statearr_10874_12690[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_10864[(4)]))){
var statearr_10875_12691 = state_10864;
(statearr_10875_12691[(1)] = cljs.core.first((state_10864[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12693 = state_10864;
state_10864 = G__12693;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = function(state_10864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1.call(this,state_10864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__;
})()
;})(__12679,switch__10586__auto__,c__10655__auto___12683,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async))
})();
var state__10657__auto__ = (function (){var statearr_10876 = f__10656__auto__();
(statearr_10876[(6)] = c__10655__auto___12683);

return statearr_10876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
});})(__12679,c__10655__auto___12683,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async))
);


break;
case "async":
var c__10655__auto___12694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12679,c__10655__auto___12694,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = ((function (__12679,c__10655__auto___12694,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function (state_10889){
var state_val_10890 = (state_10889[(1)]);
if((state_val_10890 === (1))){
var state_10889__$1 = state_10889;
var statearr_10891_12695 = state_10889__$1;
(statearr_10891_12695[(2)] = null);

(statearr_10891_12695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10890 === (2))){
var state_10889__$1 = state_10889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10889__$1,(4),jobs);
} else {
if((state_val_10890 === (3))){
var inst_10887 = (state_10889[(2)]);
var state_10889__$1 = state_10889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10889__$1,inst_10887);
} else {
if((state_val_10890 === (4))){
var inst_10879 = (state_10889[(2)]);
var inst_10880 = async(inst_10879);
var state_10889__$1 = state_10889;
if(cljs.core.truth_(inst_10880)){
var statearr_10892_12696 = state_10889__$1;
(statearr_10892_12696[(1)] = (5));

} else {
var statearr_10893_12697 = state_10889__$1;
(statearr_10893_12697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10890 === (5))){
var state_10889__$1 = state_10889;
var statearr_10894_12698 = state_10889__$1;
(statearr_10894_12698[(2)] = null);

(statearr_10894_12698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10890 === (6))){
var state_10889__$1 = state_10889;
var statearr_10895_12699 = state_10889__$1;
(statearr_10895_12699[(2)] = null);

(statearr_10895_12699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10890 === (7))){
var inst_10885 = (state_10889[(2)]);
var state_10889__$1 = state_10889;
var statearr_10896_12700 = state_10889__$1;
(statearr_10896_12700[(2)] = inst_10885);

(statearr_10896_12700[(1)] = (3));


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
});})(__12679,c__10655__auto___12694,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async))
;
return ((function (__12679,switch__10586__auto__,c__10655__auto___12694,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0 = (function (){
var statearr_10897 = [null,null,null,null,null,null,null];
(statearr_10897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__);

(statearr_10897[(1)] = (1));

return statearr_10897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1 = (function (state_10889){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_10889);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e10898){var ex__10590__auto__ = e10898;
var statearr_10899_12701 = state_10889;
(statearr_10899_12701[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_10889[(4)]))){
var statearr_10900_12702 = state_10889;
(statearr_10900_12702[(1)] = cljs.core.first((state_10889[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12703 = state_10889;
state_10889 = G__12703;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = function(state_10889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1.call(this,state_10889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__;
})()
;})(__12679,switch__10586__auto__,c__10655__auto___12694,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async))
})();
var state__10657__auto__ = (function (){var statearr_10901 = f__10656__auto__();
(statearr_10901[(6)] = c__10655__auto___12694);

return statearr_10901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
});})(__12679,c__10655__auto___12694,G__10850_12680,G__10850_12681__$1,n__4613__auto___12678,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10850_12681__$1)].join('')));

}

var G__12704 = (__12679 + (1));
__12679 = G__12704;
continue;
} else {
}
break;
}

var c__10655__auto___12705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_10923){
var state_val_10924 = (state_10923[(1)]);
if((state_val_10924 === (7))){
var inst_10919 = (state_10923[(2)]);
var state_10923__$1 = state_10923;
var statearr_10927_12706 = state_10923__$1;
(statearr_10927_12706[(2)] = inst_10919);

(statearr_10927_12706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10924 === (1))){
var state_10923__$1 = state_10923;
var statearr_10929_12707 = state_10923__$1;
(statearr_10929_12707[(2)] = null);

(statearr_10929_12707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10924 === (4))){
var inst_10904 = (state_10923[(7)]);
var inst_10904__$1 = (state_10923[(2)]);
var inst_10905 = (inst_10904__$1 == null);
var state_10923__$1 = (function (){var statearr_10930 = state_10923;
(statearr_10930[(7)] = inst_10904__$1);

return statearr_10930;
})();
if(cljs.core.truth_(inst_10905)){
var statearr_10933_12708 = state_10923__$1;
(statearr_10933_12708[(1)] = (5));

} else {
var statearr_10934_12709 = state_10923__$1;
(statearr_10934_12709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10924 === (6))){
var inst_10904 = (state_10923[(7)]);
var inst_10909 = (state_10923[(8)]);
var inst_10909__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10910 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10911 = [inst_10904,inst_10909__$1];
var inst_10912 = (new cljs.core.PersistentVector(null,2,(5),inst_10910,inst_10911,null));
var state_10923__$1 = (function (){var statearr_10936 = state_10923;
(statearr_10936[(8)] = inst_10909__$1);

return statearr_10936;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10923__$1,(8),jobs,inst_10912);
} else {
if((state_val_10924 === (3))){
var inst_10921 = (state_10923[(2)]);
var state_10923__$1 = state_10923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10923__$1,inst_10921);
} else {
if((state_val_10924 === (2))){
var state_10923__$1 = state_10923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10923__$1,(4),from);
} else {
if((state_val_10924 === (9))){
var inst_10916 = (state_10923[(2)]);
var state_10923__$1 = (function (){var statearr_10938 = state_10923;
(statearr_10938[(9)] = inst_10916);

return statearr_10938;
})();
var statearr_10939_12710 = state_10923__$1;
(statearr_10939_12710[(2)] = null);

(statearr_10939_12710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10924 === (5))){
var inst_10907 = cljs.core.async.close_BANG_(jobs);
var state_10923__$1 = state_10923;
var statearr_10940_12711 = state_10923__$1;
(statearr_10940_12711[(2)] = inst_10907);

(statearr_10940_12711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10924 === (8))){
var inst_10909 = (state_10923[(8)]);
var inst_10914 = (state_10923[(2)]);
var state_10923__$1 = (function (){var statearr_10942 = state_10923;
(statearr_10942[(10)] = inst_10914);

return statearr_10942;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10923__$1,(9),results,inst_10909);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0 = (function (){
var statearr_10944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__);

(statearr_10944[(1)] = (1));

return statearr_10944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1 = (function (state_10923){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_10923);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e10947){var ex__10590__auto__ = e10947;
var statearr_10948_12712 = state_10923;
(statearr_10948_12712[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_10923[(4)]))){
var statearr_10949_12713 = state_10923;
(statearr_10949_12713[(1)] = cljs.core.first((state_10923[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12714 = state_10923;
state_10923 = G__12714;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = function(state_10923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1.call(this,state_10923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_10953 = f__10656__auto__();
(statearr_10953[(6)] = c__10655__auto___12705);

return statearr_10953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));


var c__10655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_10993){
var state_val_10994 = (state_10993[(1)]);
if((state_val_10994 === (7))){
var inst_10989 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
var statearr_10995_12715 = state_10993__$1;
(statearr_10995_12715[(2)] = inst_10989);

(statearr_10995_12715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (20))){
var state_10993__$1 = state_10993;
var statearr_10996_12716 = state_10993__$1;
(statearr_10996_12716[(2)] = null);

(statearr_10996_12716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (1))){
var state_10993__$1 = state_10993;
var statearr_10997_12717 = state_10993__$1;
(statearr_10997_12717[(2)] = null);

(statearr_10997_12717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (4))){
var inst_10957 = (state_10993[(7)]);
var inst_10957__$1 = (state_10993[(2)]);
var inst_10959 = (inst_10957__$1 == null);
var state_10993__$1 = (function (){var statearr_10998 = state_10993;
(statearr_10998[(7)] = inst_10957__$1);

return statearr_10998;
})();
if(cljs.core.truth_(inst_10959)){
var statearr_10999_12718 = state_10993__$1;
(statearr_10999_12718[(1)] = (5));

} else {
var statearr_11001_12719 = state_10993__$1;
(statearr_11001_12719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (15))){
var inst_10971 = (state_10993[(8)]);
var state_10993__$1 = state_10993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10993__$1,(18),to,inst_10971);
} else {
if((state_val_10994 === (21))){
var inst_10984 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
var statearr_11002_12720 = state_10993__$1;
(statearr_11002_12720[(2)] = inst_10984);

(statearr_11002_12720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (13))){
var inst_10986 = (state_10993[(2)]);
var state_10993__$1 = (function (){var statearr_11005 = state_10993;
(statearr_11005[(9)] = inst_10986);

return statearr_11005;
})();
var statearr_11007_12721 = state_10993__$1;
(statearr_11007_12721[(2)] = null);

(statearr_11007_12721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (6))){
var inst_10957 = (state_10993[(7)]);
var state_10993__$1 = state_10993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10993__$1,(11),inst_10957);
} else {
if((state_val_10994 === (17))){
var inst_10979 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
if(cljs.core.truth_(inst_10979)){
var statearr_11008_12722 = state_10993__$1;
(statearr_11008_12722[(1)] = (19));

} else {
var statearr_11010_12723 = state_10993__$1;
(statearr_11010_12723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (3))){
var inst_10991 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10993__$1,inst_10991);
} else {
if((state_val_10994 === (12))){
var inst_10968 = (state_10993[(10)]);
var state_10993__$1 = state_10993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10993__$1,(14),inst_10968);
} else {
if((state_val_10994 === (2))){
var state_10993__$1 = state_10993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10993__$1,(4),results);
} else {
if((state_val_10994 === (19))){
var state_10993__$1 = state_10993;
var statearr_11013_12724 = state_10993__$1;
(statearr_11013_12724[(2)] = null);

(statearr_11013_12724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (11))){
var inst_10968 = (state_10993[(2)]);
var state_10993__$1 = (function (){var statearr_11015 = state_10993;
(statearr_11015[(10)] = inst_10968);

return statearr_11015;
})();
var statearr_11016_12725 = state_10993__$1;
(statearr_11016_12725[(2)] = null);

(statearr_11016_12725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (9))){
var state_10993__$1 = state_10993;
var statearr_11017_12726 = state_10993__$1;
(statearr_11017_12726[(2)] = null);

(statearr_11017_12726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (5))){
var state_10993__$1 = state_10993;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11018_12727 = state_10993__$1;
(statearr_11018_12727[(1)] = (8));

} else {
var statearr_11019_12728 = state_10993__$1;
(statearr_11019_12728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (14))){
var inst_10971 = (state_10993[(8)]);
var inst_10971__$1 = (state_10993[(2)]);
var inst_10972 = (inst_10971__$1 == null);
var inst_10973 = cljs.core.not(inst_10972);
var state_10993__$1 = (function (){var statearr_11020 = state_10993;
(statearr_11020[(8)] = inst_10971__$1);

return statearr_11020;
})();
if(inst_10973){
var statearr_11021_12729 = state_10993__$1;
(statearr_11021_12729[(1)] = (15));

} else {
var statearr_11022_12730 = state_10993__$1;
(statearr_11022_12730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (16))){
var state_10993__$1 = state_10993;
var statearr_11023_12731 = state_10993__$1;
(statearr_11023_12731[(2)] = false);

(statearr_11023_12731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (10))){
var inst_10965 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
var statearr_11024_12732 = state_10993__$1;
(statearr_11024_12732[(2)] = inst_10965);

(statearr_11024_12732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (18))){
var inst_10976 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
var statearr_11025_12733 = state_10993__$1;
(statearr_11025_12733[(2)] = inst_10976);

(statearr_11025_12733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (8))){
var inst_10962 = cljs.core.async.close_BANG_(to);
var state_10993__$1 = state_10993;
var statearr_11026_12734 = state_10993__$1;
(statearr_11026_12734[(2)] = inst_10962);

(statearr_11026_12734[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0 = (function (){
var statearr_11027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__);

(statearr_11027[(1)] = (1));

return statearr_11027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1 = (function (state_10993){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_10993);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e11028){var ex__10590__auto__ = e11028;
var statearr_11029_12735 = state_10993;
(statearr_11029_12735[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_10993[(4)]))){
var statearr_11030_12736 = state_10993;
(statearr_11030_12736[(1)] = cljs.core.first((state_10993[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12737 = state_10993;
state_10993 = G__12737;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__ = function(state_10993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1.call(this,state_10993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_11031 = f__10656__auto__();
(statearr_11031[(6)] = c__10655__auto__);

return statearr_11031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));

return c__10655__auto__;
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
var G__11033 = arguments.length;
switch (G__11033) {
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
var G__11038 = arguments.length;
switch (G__11038) {
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
var G__11046 = arguments.length;
switch (G__11046) {
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
var c__10655__auto___12755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_11075){
var state_val_11076 = (state_11075[(1)]);
if((state_val_11076 === (7))){
var inst_11071 = (state_11075[(2)]);
var state_11075__$1 = state_11075;
var statearr_11077_12756 = state_11075__$1;
(statearr_11077_12756[(2)] = inst_11071);

(statearr_11077_12756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (1))){
var state_11075__$1 = state_11075;
var statearr_11078_12757 = state_11075__$1;
(statearr_11078_12757[(2)] = null);

(statearr_11078_12757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (4))){
var inst_11052 = (state_11075[(7)]);
var inst_11052__$1 = (state_11075[(2)]);
var inst_11053 = (inst_11052__$1 == null);
var state_11075__$1 = (function (){var statearr_11079 = state_11075;
(statearr_11079[(7)] = inst_11052__$1);

return statearr_11079;
})();
if(cljs.core.truth_(inst_11053)){
var statearr_11080_12758 = state_11075__$1;
(statearr_11080_12758[(1)] = (5));

} else {
var statearr_11081_12759 = state_11075__$1;
(statearr_11081_12759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (13))){
var state_11075__$1 = state_11075;
var statearr_11082_12760 = state_11075__$1;
(statearr_11082_12760[(2)] = null);

(statearr_11082_12760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (6))){
var inst_11052 = (state_11075[(7)]);
var inst_11058 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11052) : p.call(null,inst_11052));
var state_11075__$1 = state_11075;
if(cljs.core.truth_(inst_11058)){
var statearr_11083_12761 = state_11075__$1;
(statearr_11083_12761[(1)] = (9));

} else {
var statearr_11084_12762 = state_11075__$1;
(statearr_11084_12762[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (3))){
var inst_11073 = (state_11075[(2)]);
var state_11075__$1 = state_11075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11075__$1,inst_11073);
} else {
if((state_val_11076 === (12))){
var state_11075__$1 = state_11075;
var statearr_11085_12763 = state_11075__$1;
(statearr_11085_12763[(2)] = null);

(statearr_11085_12763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (2))){
var state_11075__$1 = state_11075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11075__$1,(4),ch);
} else {
if((state_val_11076 === (11))){
var inst_11052 = (state_11075[(7)]);
var inst_11062 = (state_11075[(2)]);
var state_11075__$1 = state_11075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11075__$1,(8),inst_11062,inst_11052);
} else {
if((state_val_11076 === (9))){
var state_11075__$1 = state_11075;
var statearr_11086_12764 = state_11075__$1;
(statearr_11086_12764[(2)] = tc);

(statearr_11086_12764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (5))){
var inst_11055 = cljs.core.async.close_BANG_(tc);
var inst_11056 = cljs.core.async.close_BANG_(fc);
var state_11075__$1 = (function (){var statearr_11087 = state_11075;
(statearr_11087[(8)] = inst_11055);

return statearr_11087;
})();
var statearr_11088_12765 = state_11075__$1;
(statearr_11088_12765[(2)] = inst_11056);

(statearr_11088_12765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (14))){
var inst_11069 = (state_11075[(2)]);
var state_11075__$1 = state_11075;
var statearr_11089_12766 = state_11075__$1;
(statearr_11089_12766[(2)] = inst_11069);

(statearr_11089_12766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (10))){
var state_11075__$1 = state_11075;
var statearr_11090_12767 = state_11075__$1;
(statearr_11090_12767[(2)] = fc);

(statearr_11090_12767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11076 === (8))){
var inst_11064 = (state_11075[(2)]);
var state_11075__$1 = state_11075;
if(cljs.core.truth_(inst_11064)){
var statearr_11093_12771 = state_11075__$1;
(statearr_11093_12771[(1)] = (12));

} else {
var statearr_11094_12772 = state_11075__$1;
(statearr_11094_12772[(1)] = (13));

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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_11097 = [null,null,null,null,null,null,null,null,null];
(statearr_11097[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_11097[(1)] = (1));

return statearr_11097;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_11075){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_11075);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e11099){var ex__10590__auto__ = e11099;
var statearr_11100_12773 = state_11075;
(statearr_11100_12773[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_11075[(4)]))){
var statearr_11101_12774 = state_11075;
(statearr_11101_12774[(1)] = cljs.core.first((state_11075[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12775 = state_11075;
state_11075 = G__12775;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_11075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_11075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_11103 = f__10656__auto__();
(statearr_11103[(6)] = c__10655__auto___12755);

return statearr_11103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
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
var c__10655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_11127){
var state_val_11128 = (state_11127[(1)]);
if((state_val_11128 === (7))){
var inst_11123 = (state_11127[(2)]);
var state_11127__$1 = state_11127;
var statearr_11130_12776 = state_11127__$1;
(statearr_11130_12776[(2)] = inst_11123);

(statearr_11130_12776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (1))){
var inst_11105 = init;
var inst_11106 = inst_11105;
var state_11127__$1 = (function (){var statearr_11131 = state_11127;
(statearr_11131[(7)] = inst_11106);

return statearr_11131;
})();
var statearr_11132_12777 = state_11127__$1;
(statearr_11132_12777[(2)] = null);

(statearr_11132_12777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (4))){
var inst_11109 = (state_11127[(8)]);
var inst_11109__$1 = (state_11127[(2)]);
var inst_11110 = (inst_11109__$1 == null);
var state_11127__$1 = (function (){var statearr_11133 = state_11127;
(statearr_11133[(8)] = inst_11109__$1);

return statearr_11133;
})();
if(cljs.core.truth_(inst_11110)){
var statearr_11134_12786 = state_11127__$1;
(statearr_11134_12786[(1)] = (5));

} else {
var statearr_11135_12787 = state_11127__$1;
(statearr_11135_12787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (6))){
var inst_11109 = (state_11127[(8)]);
var inst_11113 = (state_11127[(9)]);
var inst_11106 = (state_11127[(7)]);
var inst_11113__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11106,inst_11109) : f.call(null,inst_11106,inst_11109));
var inst_11115 = cljs.core.reduced_QMARK_(inst_11113__$1);
var state_11127__$1 = (function (){var statearr_11136 = state_11127;
(statearr_11136[(9)] = inst_11113__$1);

return statearr_11136;
})();
if(inst_11115){
var statearr_11137_12788 = state_11127__$1;
(statearr_11137_12788[(1)] = (8));

} else {
var statearr_11138_12789 = state_11127__$1;
(statearr_11138_12789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (3))){
var inst_11125 = (state_11127[(2)]);
var state_11127__$1 = state_11127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11127__$1,inst_11125);
} else {
if((state_val_11128 === (2))){
var state_11127__$1 = state_11127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11127__$1,(4),ch);
} else {
if((state_val_11128 === (9))){
var inst_11113 = (state_11127[(9)]);
var inst_11106 = inst_11113;
var state_11127__$1 = (function (){var statearr_11143 = state_11127;
(statearr_11143[(7)] = inst_11106);

return statearr_11143;
})();
var statearr_11144_12790 = state_11127__$1;
(statearr_11144_12790[(2)] = null);

(statearr_11144_12790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (5))){
var inst_11106 = (state_11127[(7)]);
var state_11127__$1 = state_11127;
var statearr_11145_12791 = state_11127__$1;
(statearr_11145_12791[(2)] = inst_11106);

(statearr_11145_12791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (10))){
var inst_11121 = (state_11127[(2)]);
var state_11127__$1 = state_11127;
var statearr_11147_12792 = state_11127__$1;
(statearr_11147_12792[(2)] = inst_11121);

(statearr_11147_12792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (8))){
var inst_11113 = (state_11127[(9)]);
var inst_11117 = cljs.core.deref(inst_11113);
var state_11127__$1 = state_11127;
var statearr_11148_12793 = state_11127__$1;
(statearr_11148_12793[(2)] = inst_11117);

(statearr_11148_12793[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10587__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10587__auto____0 = (function (){
var statearr_11151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11151[(0)] = cljs$core$async$reduce_$_state_machine__10587__auto__);

(statearr_11151[(1)] = (1));

return statearr_11151;
});
var cljs$core$async$reduce_$_state_machine__10587__auto____1 = (function (state_11127){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_11127);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e11152){var ex__10590__auto__ = e11152;
var statearr_11155_12794 = state_11127;
(statearr_11155_12794[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_11127[(4)]))){
var statearr_11156_12795 = state_11127;
(statearr_11156_12795[(1)] = cljs.core.first((state_11127[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12796 = state_11127;
state_11127 = G__12796;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10587__auto__ = function(state_11127){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10587__auto____1.call(this,state_11127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10587__auto____0;
cljs$core$async$reduce_$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10587__auto____1;
return cljs$core$async$reduce_$_state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_11158 = f__10656__auto__();
(statearr_11158[(6)] = c__10655__auto__);

return statearr_11158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));

return c__10655__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_11165){
var state_val_11166 = (state_11165[(1)]);
if((state_val_11166 === (1))){
var inst_11160 = cljs.core.async.reduce(f__$1,init,ch);
var state_11165__$1 = state_11165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11165__$1,(2),inst_11160);
} else {
if((state_val_11166 === (2))){
var inst_11162 = (state_11165[(2)]);
var inst_11163 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11162) : f__$1.call(null,inst_11162));
var state_11165__$1 = state_11165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11165__$1,inst_11163);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10587__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10587__auto____0 = (function (){
var statearr_11167 = [null,null,null,null,null,null,null];
(statearr_11167[(0)] = cljs$core$async$transduce_$_state_machine__10587__auto__);

(statearr_11167[(1)] = (1));

return statearr_11167;
});
var cljs$core$async$transduce_$_state_machine__10587__auto____1 = (function (state_11165){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_11165);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e11168){var ex__10590__auto__ = e11168;
var statearr_11169_12808 = state_11165;
(statearr_11169_12808[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_11165[(4)]))){
var statearr_11170_12810 = state_11165;
(statearr_11170_12810[(1)] = cljs.core.first((state_11165[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12811 = state_11165;
state_11165 = G__12811;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10587__auto__ = function(state_11165){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10587__auto____1.call(this,state_11165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10587__auto____0;
cljs$core$async$transduce_$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10587__auto____1;
return cljs$core$async$transduce_$_state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_11171 = f__10656__auto__();
(statearr_11171[(6)] = c__10655__auto__);

return statearr_11171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));

return c__10655__auto__;
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
var G__11173 = arguments.length;
switch (G__11173) {
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
var c__10655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_11202){
var state_val_11203 = (state_11202[(1)]);
if((state_val_11203 === (7))){
var inst_11182 = (state_11202[(2)]);
var state_11202__$1 = state_11202;
var statearr_11205_12820 = state_11202__$1;
(statearr_11205_12820[(2)] = inst_11182);

(statearr_11205_12820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (1))){
var inst_11174 = cljs.core.seq(coll);
var inst_11175 = inst_11174;
var state_11202__$1 = (function (){var statearr_11207 = state_11202;
(statearr_11207[(7)] = inst_11175);

return statearr_11207;
})();
var statearr_11208_12822 = state_11202__$1;
(statearr_11208_12822[(2)] = null);

(statearr_11208_12822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (4))){
var inst_11175 = (state_11202[(7)]);
var inst_11180 = cljs.core.first(inst_11175);
var state_11202__$1 = state_11202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11202__$1,(7),ch,inst_11180);
} else {
if((state_val_11203 === (13))){
var inst_11196 = (state_11202[(2)]);
var state_11202__$1 = state_11202;
var statearr_11209_12825 = state_11202__$1;
(statearr_11209_12825[(2)] = inst_11196);

(statearr_11209_12825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (6))){
var inst_11185 = (state_11202[(2)]);
var state_11202__$1 = state_11202;
if(cljs.core.truth_(inst_11185)){
var statearr_11210_12826 = state_11202__$1;
(statearr_11210_12826[(1)] = (8));

} else {
var statearr_11211_12827 = state_11202__$1;
(statearr_11211_12827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (3))){
var inst_11200 = (state_11202[(2)]);
var state_11202__$1 = state_11202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11202__$1,inst_11200);
} else {
if((state_val_11203 === (12))){
var state_11202__$1 = state_11202;
var statearr_11212_12829 = state_11202__$1;
(statearr_11212_12829[(2)] = null);

(statearr_11212_12829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (2))){
var inst_11175 = (state_11202[(7)]);
var state_11202__$1 = state_11202;
if(cljs.core.truth_(inst_11175)){
var statearr_11213_12830 = state_11202__$1;
(statearr_11213_12830[(1)] = (4));

} else {
var statearr_11214_12831 = state_11202__$1;
(statearr_11214_12831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (11))){
var inst_11193 = cljs.core.async.close_BANG_(ch);
var state_11202__$1 = state_11202;
var statearr_11215_12833 = state_11202__$1;
(statearr_11215_12833[(2)] = inst_11193);

(statearr_11215_12833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (9))){
var state_11202__$1 = state_11202;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11216_12834 = state_11202__$1;
(statearr_11216_12834[(1)] = (11));

} else {
var statearr_11217_12835 = state_11202__$1;
(statearr_11217_12835[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (5))){
var inst_11175 = (state_11202[(7)]);
var state_11202__$1 = state_11202;
var statearr_11218_12838 = state_11202__$1;
(statearr_11218_12838[(2)] = inst_11175);

(statearr_11218_12838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (10))){
var inst_11198 = (state_11202[(2)]);
var state_11202__$1 = state_11202;
var statearr_11219_12839 = state_11202__$1;
(statearr_11219_12839[(2)] = inst_11198);

(statearr_11219_12839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11203 === (8))){
var inst_11175 = (state_11202[(7)]);
var inst_11187 = cljs.core.next(inst_11175);
var inst_11175__$1 = inst_11187;
var state_11202__$1 = (function (){var statearr_11220 = state_11202;
(statearr_11220[(7)] = inst_11175__$1);

return statearr_11220;
})();
var statearr_11221_12840 = state_11202__$1;
(statearr_11221_12840[(2)] = null);

(statearr_11221_12840[(1)] = (2));


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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_11222 = [null,null,null,null,null,null,null,null];
(statearr_11222[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_11222[(1)] = (1));

return statearr_11222;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_11202){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_11202);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e11223){var ex__10590__auto__ = e11223;
var statearr_11224_12841 = state_11202;
(statearr_11224_12841[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_11202[(4)]))){
var statearr_11225_12842 = state_11202;
(statearr_11225_12842[(1)] = cljs.core.first((state_11202[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12843 = state_11202;
state_11202 = G__12843;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_11202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_11202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_11226 = f__10656__auto__();
(statearr_11226[(6)] = c__10655__auto__);

return statearr_11226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));

return c__10655__auto__;
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
var G__11231 = arguments.length;
switch (G__11231) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12845 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12845(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12849 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12849(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12867 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12867(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12868 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12868(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11238 = (function (ch,cs,meta11239){
this.ch = ch;
this.cs = cs;
this.meta11239 = meta11239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11240,meta11239__$1){
var self__ = this;
var _11240__$1 = this;
return (new cljs.core.async.t_cljs$core$async11238(self__.ch,self__.cs,meta11239__$1));
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11240){
var self__ = this;
var _11240__$1 = this;
return self__.meta11239;
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11239","meta11239",1771334451,null)], null);
}));

(cljs.core.async.t_cljs$core$async11238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11238");

(cljs.core.async.t_cljs$core$async11238.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11238.
 */
cljs.core.async.__GT_t_cljs$core$async11238 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11238(ch__$1,cs__$1,meta11239){
return (new cljs.core.async.t_cljs$core$async11238(ch__$1,cs__$1,meta11239));
});

}

return (new cljs.core.async.t_cljs$core$async11238(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10655__auto___12889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_11394){
var state_val_11395 = (state_11394[(1)]);
if((state_val_11395 === (7))){
var inst_11390 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11396_12894 = state_11394__$1;
(statearr_11396_12894[(2)] = inst_11390);

(statearr_11396_12894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (20))){
var inst_11286 = (state_11394[(7)]);
var inst_11298 = cljs.core.first(inst_11286);
var inst_11299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11298,(0),null);
var inst_11300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11298,(1),null);
var state_11394__$1 = (function (){var statearr_11397 = state_11394;
(statearr_11397[(8)] = inst_11299);

return statearr_11397;
})();
if(cljs.core.truth_(inst_11300)){
var statearr_11398_12895 = state_11394__$1;
(statearr_11398_12895[(1)] = (22));

} else {
var statearr_11399_12896 = state_11394__$1;
(statearr_11399_12896[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (27))){
var inst_11255 = (state_11394[(9)]);
var inst_11328 = (state_11394[(10)]);
var inst_11335 = (state_11394[(11)]);
var inst_11330 = (state_11394[(12)]);
var inst_11335__$1 = cljs.core._nth(inst_11328,inst_11330);
var inst_11336 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11335__$1,inst_11255,done);
var state_11394__$1 = (function (){var statearr_11400 = state_11394;
(statearr_11400[(11)] = inst_11335__$1);

return statearr_11400;
})();
if(cljs.core.truth_(inst_11336)){
var statearr_11401_12897 = state_11394__$1;
(statearr_11401_12897[(1)] = (30));

} else {
var statearr_11402_12898 = state_11394__$1;
(statearr_11402_12898[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (1))){
var state_11394__$1 = state_11394;
var statearr_11403_12899 = state_11394__$1;
(statearr_11403_12899[(2)] = null);

(statearr_11403_12899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (24))){
var inst_11286 = (state_11394[(7)]);
var inst_11305 = (state_11394[(2)]);
var inst_11306 = cljs.core.next(inst_11286);
var inst_11264 = inst_11306;
var inst_11265 = null;
var inst_11266 = (0);
var inst_11267 = (0);
var state_11394__$1 = (function (){var statearr_11404 = state_11394;
(statearr_11404[(13)] = inst_11267);

(statearr_11404[(14)] = inst_11305);

(statearr_11404[(15)] = inst_11266);

(statearr_11404[(16)] = inst_11265);

(statearr_11404[(17)] = inst_11264);

return statearr_11404;
})();
var statearr_11405_12900 = state_11394__$1;
(statearr_11405_12900[(2)] = null);

(statearr_11405_12900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (39))){
var state_11394__$1 = state_11394;
var statearr_11409_12901 = state_11394__$1;
(statearr_11409_12901[(2)] = null);

(statearr_11409_12901[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (4))){
var inst_11255 = (state_11394[(9)]);
var inst_11255__$1 = (state_11394[(2)]);
var inst_11256 = (inst_11255__$1 == null);
var state_11394__$1 = (function (){var statearr_11413 = state_11394;
(statearr_11413[(9)] = inst_11255__$1);

return statearr_11413;
})();
if(cljs.core.truth_(inst_11256)){
var statearr_11414_12902 = state_11394__$1;
(statearr_11414_12902[(1)] = (5));

} else {
var statearr_11415_12903 = state_11394__$1;
(statearr_11415_12903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (15))){
var inst_11267 = (state_11394[(13)]);
var inst_11266 = (state_11394[(15)]);
var inst_11265 = (state_11394[(16)]);
var inst_11264 = (state_11394[(17)]);
var inst_11282 = (state_11394[(2)]);
var inst_11283 = (inst_11267 + (1));
var tmp11406 = inst_11266;
var tmp11407 = inst_11265;
var tmp11408 = inst_11264;
var inst_11264__$1 = tmp11408;
var inst_11265__$1 = tmp11407;
var inst_11266__$1 = tmp11406;
var inst_11267__$1 = inst_11283;
var state_11394__$1 = (function (){var statearr_11416 = state_11394;
(statearr_11416[(13)] = inst_11267__$1);

(statearr_11416[(15)] = inst_11266__$1);

(statearr_11416[(16)] = inst_11265__$1);

(statearr_11416[(17)] = inst_11264__$1);

(statearr_11416[(18)] = inst_11282);

return statearr_11416;
})();
var statearr_11417_12905 = state_11394__$1;
(statearr_11417_12905[(2)] = null);

(statearr_11417_12905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (21))){
var inst_11309 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11421_12920 = state_11394__$1;
(statearr_11421_12920[(2)] = inst_11309);

(statearr_11421_12920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (31))){
var inst_11335 = (state_11394[(11)]);
var inst_11339 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11335);
var state_11394__$1 = state_11394;
var statearr_11422_12922 = state_11394__$1;
(statearr_11422_12922[(2)] = inst_11339);

(statearr_11422_12922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (32))){
var inst_11328 = (state_11394[(10)]);
var inst_11330 = (state_11394[(12)]);
var inst_11327 = (state_11394[(19)]);
var inst_11329 = (state_11394[(20)]);
var inst_11341 = (state_11394[(2)]);
var inst_11342 = (inst_11330 + (1));
var tmp11418 = inst_11328;
var tmp11419 = inst_11327;
var tmp11420 = inst_11329;
var inst_11327__$1 = tmp11419;
var inst_11328__$1 = tmp11418;
var inst_11329__$1 = tmp11420;
var inst_11330__$1 = inst_11342;
var state_11394__$1 = (function (){var statearr_11423 = state_11394;
(statearr_11423[(10)] = inst_11328__$1);

(statearr_11423[(12)] = inst_11330__$1);

(statearr_11423[(19)] = inst_11327__$1);

(statearr_11423[(21)] = inst_11341);

(statearr_11423[(20)] = inst_11329__$1);

return statearr_11423;
})();
var statearr_11431_12923 = state_11394__$1;
(statearr_11431_12923[(2)] = null);

(statearr_11431_12923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (40))){
var inst_11354 = (state_11394[(22)]);
var inst_11358 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11354);
var state_11394__$1 = state_11394;
var statearr_11432_12924 = state_11394__$1;
(statearr_11432_12924[(2)] = inst_11358);

(statearr_11432_12924[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (33))){
var inst_11345 = (state_11394[(23)]);
var inst_11347 = cljs.core.chunked_seq_QMARK_(inst_11345);
var state_11394__$1 = state_11394;
if(inst_11347){
var statearr_11433_12926 = state_11394__$1;
(statearr_11433_12926[(1)] = (36));

} else {
var statearr_11434_12928 = state_11394__$1;
(statearr_11434_12928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (13))){
var inst_11276 = (state_11394[(24)]);
var inst_11279 = cljs.core.async.close_BANG_(inst_11276);
var state_11394__$1 = state_11394;
var statearr_11435_12929 = state_11394__$1;
(statearr_11435_12929[(2)] = inst_11279);

(statearr_11435_12929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (22))){
var inst_11299 = (state_11394[(8)]);
var inst_11302 = cljs.core.async.close_BANG_(inst_11299);
var state_11394__$1 = state_11394;
var statearr_11436_12930 = state_11394__$1;
(statearr_11436_12930[(2)] = inst_11302);

(statearr_11436_12930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (36))){
var inst_11345 = (state_11394[(23)]);
var inst_11349 = cljs.core.chunk_first(inst_11345);
var inst_11350 = cljs.core.chunk_rest(inst_11345);
var inst_11351 = cljs.core.count(inst_11349);
var inst_11327 = inst_11350;
var inst_11328 = inst_11349;
var inst_11329 = inst_11351;
var inst_11330 = (0);
var state_11394__$1 = (function (){var statearr_11437 = state_11394;
(statearr_11437[(10)] = inst_11328);

(statearr_11437[(12)] = inst_11330);

(statearr_11437[(19)] = inst_11327);

(statearr_11437[(20)] = inst_11329);

return statearr_11437;
})();
var statearr_11438_12931 = state_11394__$1;
(statearr_11438_12931[(2)] = null);

(statearr_11438_12931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (41))){
var inst_11345 = (state_11394[(23)]);
var inst_11360 = (state_11394[(2)]);
var inst_11361 = cljs.core.next(inst_11345);
var inst_11327 = inst_11361;
var inst_11328 = null;
var inst_11329 = (0);
var inst_11330 = (0);
var state_11394__$1 = (function (){var statearr_11439 = state_11394;
(statearr_11439[(10)] = inst_11328);

(statearr_11439[(12)] = inst_11330);

(statearr_11439[(19)] = inst_11327);

(statearr_11439[(25)] = inst_11360);

(statearr_11439[(20)] = inst_11329);

return statearr_11439;
})();
var statearr_11440_12932 = state_11394__$1;
(statearr_11440_12932[(2)] = null);

(statearr_11440_12932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (43))){
var state_11394__$1 = state_11394;
var statearr_11441_12933 = state_11394__$1;
(statearr_11441_12933[(2)] = null);

(statearr_11441_12933[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (29))){
var inst_11369 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11442_12949 = state_11394__$1;
(statearr_11442_12949[(2)] = inst_11369);

(statearr_11442_12949[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (44))){
var inst_11387 = (state_11394[(2)]);
var state_11394__$1 = (function (){var statearr_11443 = state_11394;
(statearr_11443[(26)] = inst_11387);

return statearr_11443;
})();
var statearr_11444_12950 = state_11394__$1;
(statearr_11444_12950[(2)] = null);

(statearr_11444_12950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (6))){
var inst_11319 = (state_11394[(27)]);
var inst_11318 = cljs.core.deref(cs);
var inst_11319__$1 = cljs.core.keys(inst_11318);
var inst_11320 = cljs.core.count(inst_11319__$1);
var inst_11321 = cljs.core.reset_BANG_(dctr,inst_11320);
var inst_11326 = cljs.core.seq(inst_11319__$1);
var inst_11327 = inst_11326;
var inst_11328 = null;
var inst_11329 = (0);
var inst_11330 = (0);
var state_11394__$1 = (function (){var statearr_11445 = state_11394;
(statearr_11445[(10)] = inst_11328);

(statearr_11445[(27)] = inst_11319__$1);

(statearr_11445[(12)] = inst_11330);

(statearr_11445[(28)] = inst_11321);

(statearr_11445[(19)] = inst_11327);

(statearr_11445[(20)] = inst_11329);

return statearr_11445;
})();
var statearr_11446_12951 = state_11394__$1;
(statearr_11446_12951[(2)] = null);

(statearr_11446_12951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (28))){
var inst_11345 = (state_11394[(23)]);
var inst_11327 = (state_11394[(19)]);
var inst_11345__$1 = cljs.core.seq(inst_11327);
var state_11394__$1 = (function (){var statearr_11447 = state_11394;
(statearr_11447[(23)] = inst_11345__$1);

return statearr_11447;
})();
if(inst_11345__$1){
var statearr_11448_12952 = state_11394__$1;
(statearr_11448_12952[(1)] = (33));

} else {
var statearr_11449_12953 = state_11394__$1;
(statearr_11449_12953[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (25))){
var inst_11330 = (state_11394[(12)]);
var inst_11329 = (state_11394[(20)]);
var inst_11332 = (inst_11330 < inst_11329);
var inst_11333 = inst_11332;
var state_11394__$1 = state_11394;
if(cljs.core.truth_(inst_11333)){
var statearr_11458_12954 = state_11394__$1;
(statearr_11458_12954[(1)] = (27));

} else {
var statearr_11459_12955 = state_11394__$1;
(statearr_11459_12955[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (34))){
var state_11394__$1 = state_11394;
var statearr_11460_12957 = state_11394__$1;
(statearr_11460_12957[(2)] = null);

(statearr_11460_12957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (17))){
var state_11394__$1 = state_11394;
var statearr_11461_12958 = state_11394__$1;
(statearr_11461_12958[(2)] = null);

(statearr_11461_12958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (3))){
var inst_11392 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11394__$1,inst_11392);
} else {
if((state_val_11395 === (12))){
var inst_11314 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11462_12960 = state_11394__$1;
(statearr_11462_12960[(2)] = inst_11314);

(statearr_11462_12960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (2))){
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11394__$1,(4),ch);
} else {
if((state_val_11395 === (23))){
var state_11394__$1 = state_11394;
var statearr_11463_12961 = state_11394__$1;
(statearr_11463_12961[(2)] = null);

(statearr_11463_12961[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (35))){
var inst_11367 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11464_12962 = state_11394__$1;
(statearr_11464_12962[(2)] = inst_11367);

(statearr_11464_12962[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (19))){
var inst_11286 = (state_11394[(7)]);
var inst_11290 = cljs.core.chunk_first(inst_11286);
var inst_11291 = cljs.core.chunk_rest(inst_11286);
var inst_11292 = cljs.core.count(inst_11290);
var inst_11264 = inst_11291;
var inst_11265 = inst_11290;
var inst_11266 = inst_11292;
var inst_11267 = (0);
var state_11394__$1 = (function (){var statearr_11465 = state_11394;
(statearr_11465[(13)] = inst_11267);

(statearr_11465[(15)] = inst_11266);

(statearr_11465[(16)] = inst_11265);

(statearr_11465[(17)] = inst_11264);

return statearr_11465;
})();
var statearr_11466_12963 = state_11394__$1;
(statearr_11466_12963[(2)] = null);

(statearr_11466_12963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (11))){
var inst_11264 = (state_11394[(17)]);
var inst_11286 = (state_11394[(7)]);
var inst_11286__$1 = cljs.core.seq(inst_11264);
var state_11394__$1 = (function (){var statearr_11467 = state_11394;
(statearr_11467[(7)] = inst_11286__$1);

return statearr_11467;
})();
if(inst_11286__$1){
var statearr_11468_12968 = state_11394__$1;
(statearr_11468_12968[(1)] = (16));

} else {
var statearr_11469_12969 = state_11394__$1;
(statearr_11469_12969[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (9))){
var inst_11316 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11470_12971 = state_11394__$1;
(statearr_11470_12971[(2)] = inst_11316);

(statearr_11470_12971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (5))){
var inst_11262 = cljs.core.deref(cs);
var inst_11263 = cljs.core.seq(inst_11262);
var inst_11264 = inst_11263;
var inst_11265 = null;
var inst_11266 = (0);
var inst_11267 = (0);
var state_11394__$1 = (function (){var statearr_11471 = state_11394;
(statearr_11471[(13)] = inst_11267);

(statearr_11471[(15)] = inst_11266);

(statearr_11471[(16)] = inst_11265);

(statearr_11471[(17)] = inst_11264);

return statearr_11471;
})();
var statearr_11472_12973 = state_11394__$1;
(statearr_11472_12973[(2)] = null);

(statearr_11472_12973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (14))){
var state_11394__$1 = state_11394;
var statearr_11473_12974 = state_11394__$1;
(statearr_11473_12974[(2)] = null);

(statearr_11473_12974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (45))){
var inst_11384 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11474_12975 = state_11394__$1;
(statearr_11474_12975[(2)] = inst_11384);

(statearr_11474_12975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (26))){
var inst_11319 = (state_11394[(27)]);
var inst_11380 = (state_11394[(2)]);
var inst_11381 = cljs.core.seq(inst_11319);
var state_11394__$1 = (function (){var statearr_11475 = state_11394;
(statearr_11475[(29)] = inst_11380);

return statearr_11475;
})();
if(inst_11381){
var statearr_11476_12976 = state_11394__$1;
(statearr_11476_12976[(1)] = (42));

} else {
var statearr_11478_12977 = state_11394__$1;
(statearr_11478_12977[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (16))){
var inst_11286 = (state_11394[(7)]);
var inst_11288 = cljs.core.chunked_seq_QMARK_(inst_11286);
var state_11394__$1 = state_11394;
if(inst_11288){
var statearr_11479_12978 = state_11394__$1;
(statearr_11479_12978[(1)] = (19));

} else {
var statearr_11480_12979 = state_11394__$1;
(statearr_11480_12979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (38))){
var inst_11364 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11481_12980 = state_11394__$1;
(statearr_11481_12980[(2)] = inst_11364);

(statearr_11481_12980[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (30))){
var state_11394__$1 = state_11394;
var statearr_11484_12981 = state_11394__$1;
(statearr_11484_12981[(2)] = null);

(statearr_11484_12981[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (10))){
var inst_11267 = (state_11394[(13)]);
var inst_11265 = (state_11394[(16)]);
var inst_11275 = cljs.core._nth(inst_11265,inst_11267);
var inst_11276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11275,(0),null);
var inst_11277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11275,(1),null);
var state_11394__$1 = (function (){var statearr_11487 = state_11394;
(statearr_11487[(24)] = inst_11276);

return statearr_11487;
})();
if(cljs.core.truth_(inst_11277)){
var statearr_11488_12982 = state_11394__$1;
(statearr_11488_12982[(1)] = (13));

} else {
var statearr_11489_12983 = state_11394__$1;
(statearr_11489_12983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (18))){
var inst_11312 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11490_12984 = state_11394__$1;
(statearr_11490_12984[(2)] = inst_11312);

(statearr_11490_12984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (42))){
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11394__$1,(45),dchan);
} else {
if((state_val_11395 === (37))){
var inst_11255 = (state_11394[(9)]);
var inst_11345 = (state_11394[(23)]);
var inst_11354 = (state_11394[(22)]);
var inst_11354__$1 = cljs.core.first(inst_11345);
var inst_11355 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11354__$1,inst_11255,done);
var state_11394__$1 = (function (){var statearr_11491 = state_11394;
(statearr_11491[(22)] = inst_11354__$1);

return statearr_11491;
})();
if(cljs.core.truth_(inst_11355)){
var statearr_11492_12985 = state_11394__$1;
(statearr_11492_12985[(1)] = (39));

} else {
var statearr_11493_12986 = state_11394__$1;
(statearr_11493_12986[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (8))){
var inst_11267 = (state_11394[(13)]);
var inst_11266 = (state_11394[(15)]);
var inst_11269 = (inst_11267 < inst_11266);
var inst_11270 = inst_11269;
var state_11394__$1 = state_11394;
if(cljs.core.truth_(inst_11270)){
var statearr_11494_12992 = state_11394__$1;
(statearr_11494_12992[(1)] = (10));

} else {
var statearr_11495_12993 = state_11394__$1;
(statearr_11495_12993[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10587__auto__ = null;
var cljs$core$async$mult_$_state_machine__10587__auto____0 = (function (){
var statearr_11496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11496[(0)] = cljs$core$async$mult_$_state_machine__10587__auto__);

(statearr_11496[(1)] = (1));

return statearr_11496;
});
var cljs$core$async$mult_$_state_machine__10587__auto____1 = (function (state_11394){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_11394);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e11497){var ex__10590__auto__ = e11497;
var statearr_11498_12994 = state_11394;
(statearr_11498_12994[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_11394[(4)]))){
var statearr_11499_12995 = state_11394;
(statearr_11499_12995[(1)] = cljs.core.first((state_11394[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12997 = state_11394;
state_11394 = G__12997;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10587__auto__ = function(state_11394){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10587__auto____1.call(this,state_11394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10587__auto____0;
cljs$core$async$mult_$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10587__auto____1;
return cljs$core$async$mult_$_state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_11500 = f__10656__auto__();
(statearr_11500[(6)] = c__10655__auto___12889);

return statearr_11500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
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
var G__11502 = arguments.length;
switch (G__11502) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13000 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13000(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13001 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13001(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13002 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13002(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13015 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13015(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13019 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13019(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13023 = arguments.length;
var i__4737__auto___13024 = (0);
while(true){
if((i__4737__auto___13024 < len__4736__auto___13023)){
args__4742__auto__.push((arguments[i__4737__auto___13024]));

var G__13025 = (i__4737__auto___13024 + (1));
i__4737__auto___13024 = G__13025;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11512){
var map__11513 = p__11512;
var map__11513__$1 = (((((!((map__11513 == null))))?(((((map__11513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11513):map__11513);
var opts = map__11513__$1;
var statearr_11515_13026 = state;
(statearr_11515_13026[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11516_13028 = state;
(statearr_11516_13028[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11518_13029 = state;
(statearr_11518_13029[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11504){
var G__11505 = cljs.core.first(seq11504);
var seq11504__$1 = cljs.core.next(seq11504);
var G__11506 = cljs.core.first(seq11504__$1);
var seq11504__$2 = cljs.core.next(seq11504__$1);
var G__11507 = cljs.core.first(seq11504__$2);
var seq11504__$3 = cljs.core.next(seq11504__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11505,G__11506,G__11507,seq11504__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11527 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11528){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11528 = meta11528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11529,meta11528__$1){
var self__ = this;
var _11529__$1 = this;
return (new cljs.core.async.t_cljs$core$async11527(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11528__$1));
}));

(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11529){
var self__ = this;
var _11529__$1 = this;
return self__.meta11528;
}));

(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11528","meta11528",1315082172,null)], null);
}));

(cljs.core.async.t_cljs$core$async11527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11527");

(cljs.core.async.t_cljs$core$async11527.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11527.
 */
cljs.core.async.__GT_t_cljs$core$async11527 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11527(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11528){
return (new cljs.core.async.t_cljs$core$async11527(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11528));
});

}

return (new cljs.core.async.t_cljs$core$async11527(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10655__auto___13070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_11646){
var state_val_11647 = (state_11646[(1)]);
if((state_val_11647 === (7))){
var inst_11551 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
var statearr_11650_13071 = state_11646__$1;
(statearr_11650_13071[(2)] = inst_11551);

(statearr_11650_13071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (20))){
var inst_11563 = (state_11646[(7)]);
var state_11646__$1 = state_11646;
var statearr_11652_13072 = state_11646__$1;
(statearr_11652_13072[(2)] = inst_11563);

(statearr_11652_13072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (27))){
var state_11646__$1 = state_11646;
var statearr_11653_13076 = state_11646__$1;
(statearr_11653_13076[(2)] = null);

(statearr_11653_13076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (1))){
var inst_11533 = (state_11646[(8)]);
var inst_11533__$1 = calc_state();
var inst_11536 = (inst_11533__$1 == null);
var inst_11537 = cljs.core.not(inst_11536);
var state_11646__$1 = (function (){var statearr_11656 = state_11646;
(statearr_11656[(8)] = inst_11533__$1);

return statearr_11656;
})();
if(inst_11537){
var statearr_11657_13077 = state_11646__$1;
(statearr_11657_13077[(1)] = (2));

} else {
var statearr_11658_13078 = state_11646__$1;
(statearr_11658_13078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (24))){
var inst_11614 = (state_11646[(9)]);
var inst_11597 = (state_11646[(10)]);
var inst_11588 = (state_11646[(11)]);
var inst_11614__$1 = (inst_11588.cljs$core$IFn$_invoke$arity$1 ? inst_11588.cljs$core$IFn$_invoke$arity$1(inst_11597) : inst_11588.call(null,inst_11597));
var state_11646__$1 = (function (){var statearr_11660 = state_11646;
(statearr_11660[(9)] = inst_11614__$1);

return statearr_11660;
})();
if(cljs.core.truth_(inst_11614__$1)){
var statearr_11661_13092 = state_11646__$1;
(statearr_11661_13092[(1)] = (29));

} else {
var statearr_11662_13093 = state_11646__$1;
(statearr_11662_13093[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (4))){
var inst_11554 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
if(cljs.core.truth_(inst_11554)){
var statearr_11665_13094 = state_11646__$1;
(statearr_11665_13094[(1)] = (8));

} else {
var statearr_11666_13095 = state_11646__$1;
(statearr_11666_13095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (15))){
var inst_11581 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
if(cljs.core.truth_(inst_11581)){
var statearr_11668_13096 = state_11646__$1;
(statearr_11668_13096[(1)] = (19));

} else {
var statearr_11669_13097 = state_11646__$1;
(statearr_11669_13097[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (21))){
var inst_11586 = (state_11646[(12)]);
var inst_11586__$1 = (state_11646[(2)]);
var inst_11588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11586__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11586__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11586__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11646__$1 = (function (){var statearr_11671 = state_11646;
(statearr_11671[(13)] = inst_11589);

(statearr_11671[(12)] = inst_11586__$1);

(statearr_11671[(11)] = inst_11588);

return statearr_11671;
})();
return cljs.core.async.ioc_alts_BANG_(state_11646__$1,(22),inst_11590);
} else {
if((state_val_11647 === (31))){
var inst_11623 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
if(cljs.core.truth_(inst_11623)){
var statearr_11673_13099 = state_11646__$1;
(statearr_11673_13099[(1)] = (32));

} else {
var statearr_11674_13101 = state_11646__$1;
(statearr_11674_13101[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (32))){
var inst_11596 = (state_11646[(14)]);
var state_11646__$1 = state_11646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11646__$1,(35),out,inst_11596);
} else {
if((state_val_11647 === (33))){
var inst_11586 = (state_11646[(12)]);
var inst_11563 = inst_11586;
var state_11646__$1 = (function (){var statearr_11683 = state_11646;
(statearr_11683[(7)] = inst_11563);

return statearr_11683;
})();
var statearr_11685_13104 = state_11646__$1;
(statearr_11685_13104[(2)] = null);

(statearr_11685_13104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (13))){
var inst_11563 = (state_11646[(7)]);
var inst_11570 = inst_11563.cljs$lang$protocol_mask$partition0$;
var inst_11571 = (inst_11570 & (64));
var inst_11572 = inst_11563.cljs$core$ISeq$;
var inst_11573 = (cljs.core.PROTOCOL_SENTINEL === inst_11572);
var inst_11574 = ((inst_11571) || (inst_11573));
var state_11646__$1 = state_11646;
if(cljs.core.truth_(inst_11574)){
var statearr_11686_13108 = state_11646__$1;
(statearr_11686_13108[(1)] = (16));

} else {
var statearr_11687_13109 = state_11646__$1;
(statearr_11687_13109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (22))){
var inst_11597 = (state_11646[(10)]);
var inst_11596 = (state_11646[(14)]);
var inst_11595 = (state_11646[(2)]);
var inst_11596__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11595,(0),null);
var inst_11597__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11595,(1),null);
var inst_11598 = (inst_11596__$1 == null);
var inst_11599 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11597__$1,change);
var inst_11600 = ((inst_11598) || (inst_11599));
var state_11646__$1 = (function (){var statearr_11688 = state_11646;
(statearr_11688[(10)] = inst_11597__$1);

(statearr_11688[(14)] = inst_11596__$1);

return statearr_11688;
})();
if(cljs.core.truth_(inst_11600)){
var statearr_11689_13112 = state_11646__$1;
(statearr_11689_13112[(1)] = (23));

} else {
var statearr_11690_13114 = state_11646__$1;
(statearr_11690_13114[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (36))){
var inst_11586 = (state_11646[(12)]);
var inst_11563 = inst_11586;
var state_11646__$1 = (function (){var statearr_11691 = state_11646;
(statearr_11691[(7)] = inst_11563);

return statearr_11691;
})();
var statearr_11693_13115 = state_11646__$1;
(statearr_11693_13115[(2)] = null);

(statearr_11693_13115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (29))){
var inst_11614 = (state_11646[(9)]);
var state_11646__$1 = state_11646;
var statearr_11694_13116 = state_11646__$1;
(statearr_11694_13116[(2)] = inst_11614);

(statearr_11694_13116[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (6))){
var state_11646__$1 = state_11646;
var statearr_11696_13118 = state_11646__$1;
(statearr_11696_13118[(2)] = false);

(statearr_11696_13118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (28))){
var inst_11607 = (state_11646[(2)]);
var inst_11610 = calc_state();
var inst_11563 = inst_11610;
var state_11646__$1 = (function (){var statearr_11697 = state_11646;
(statearr_11697[(7)] = inst_11563);

(statearr_11697[(15)] = inst_11607);

return statearr_11697;
})();
var statearr_11698_13138 = state_11646__$1;
(statearr_11698_13138[(2)] = null);

(statearr_11698_13138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (25))){
var inst_11640 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
var statearr_11699_13142 = state_11646__$1;
(statearr_11699_13142[(2)] = inst_11640);

(statearr_11699_13142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (34))){
var inst_11638 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
var statearr_11700_13143 = state_11646__$1;
(statearr_11700_13143[(2)] = inst_11638);

(statearr_11700_13143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (17))){
var state_11646__$1 = state_11646;
var statearr_11703_13144 = state_11646__$1;
(statearr_11703_13144[(2)] = false);

(statearr_11703_13144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (3))){
var state_11646__$1 = state_11646;
var statearr_11717_13145 = state_11646__$1;
(statearr_11717_13145[(2)] = false);

(statearr_11717_13145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (12))){
var inst_11642 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11646__$1,inst_11642);
} else {
if((state_val_11647 === (2))){
var inst_11533 = (state_11646[(8)]);
var inst_11543 = inst_11533.cljs$lang$protocol_mask$partition0$;
var inst_11544 = (inst_11543 & (64));
var inst_11545 = inst_11533.cljs$core$ISeq$;
var inst_11546 = (cljs.core.PROTOCOL_SENTINEL === inst_11545);
var inst_11547 = ((inst_11544) || (inst_11546));
var state_11646__$1 = state_11646;
if(cljs.core.truth_(inst_11547)){
var statearr_11718_13146 = state_11646__$1;
(statearr_11718_13146[(1)] = (5));

} else {
var statearr_11719_13147 = state_11646__$1;
(statearr_11719_13147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (23))){
var inst_11596 = (state_11646[(14)]);
var inst_11602 = (inst_11596 == null);
var state_11646__$1 = state_11646;
if(cljs.core.truth_(inst_11602)){
var statearr_11720_13148 = state_11646__$1;
(statearr_11720_13148[(1)] = (26));

} else {
var statearr_11721_13149 = state_11646__$1;
(statearr_11721_13149[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (35))){
var inst_11626 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
if(cljs.core.truth_(inst_11626)){
var statearr_11722_13150 = state_11646__$1;
(statearr_11722_13150[(1)] = (36));

} else {
var statearr_11723_13151 = state_11646__$1;
(statearr_11723_13151[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (19))){
var inst_11563 = (state_11646[(7)]);
var inst_11583 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11563);
var state_11646__$1 = state_11646;
var statearr_11725_13152 = state_11646__$1;
(statearr_11725_13152[(2)] = inst_11583);

(statearr_11725_13152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (11))){
var inst_11563 = (state_11646[(7)]);
var inst_11567 = (inst_11563 == null);
var inst_11568 = cljs.core.not(inst_11567);
var state_11646__$1 = state_11646;
if(inst_11568){
var statearr_11727_13153 = state_11646__$1;
(statearr_11727_13153[(1)] = (13));

} else {
var statearr_11728_13154 = state_11646__$1;
(statearr_11728_13154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (9))){
var inst_11533 = (state_11646[(8)]);
var state_11646__$1 = state_11646;
var statearr_11729_13155 = state_11646__$1;
(statearr_11729_13155[(2)] = inst_11533);

(statearr_11729_13155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (5))){
var state_11646__$1 = state_11646;
var statearr_11730_13156 = state_11646__$1;
(statearr_11730_13156[(2)] = true);

(statearr_11730_13156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (14))){
var state_11646__$1 = state_11646;
var statearr_11731_13157 = state_11646__$1;
(statearr_11731_13157[(2)] = false);

(statearr_11731_13157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (26))){
var inst_11597 = (state_11646[(10)]);
var inst_11604 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11597);
var state_11646__$1 = state_11646;
var statearr_11732_13158 = state_11646__$1;
(statearr_11732_13158[(2)] = inst_11604);

(statearr_11732_13158[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (16))){
var state_11646__$1 = state_11646;
var statearr_11733_13159 = state_11646__$1;
(statearr_11733_13159[(2)] = true);

(statearr_11733_13159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (38))){
var inst_11633 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
var statearr_11742_13160 = state_11646__$1;
(statearr_11742_13160[(2)] = inst_11633);

(statearr_11742_13160[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (30))){
var inst_11589 = (state_11646[(13)]);
var inst_11597 = (state_11646[(10)]);
var inst_11588 = (state_11646[(11)]);
var inst_11618 = cljs.core.empty_QMARK_(inst_11588);
var inst_11619 = (inst_11589.cljs$core$IFn$_invoke$arity$1 ? inst_11589.cljs$core$IFn$_invoke$arity$1(inst_11597) : inst_11589.call(null,inst_11597));
var inst_11620 = cljs.core.not(inst_11619);
var inst_11621 = ((inst_11618) && (inst_11620));
var state_11646__$1 = state_11646;
var statearr_11745_13161 = state_11646__$1;
(statearr_11745_13161[(2)] = inst_11621);

(statearr_11745_13161[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (10))){
var inst_11533 = (state_11646[(8)]);
var inst_11559 = (state_11646[(2)]);
var inst_11560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11559,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11559,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11559,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11563 = inst_11533;
var state_11646__$1 = (function (){var statearr_11748 = state_11646;
(statearr_11748[(16)] = inst_11561);

(statearr_11748[(17)] = inst_11560);

(statearr_11748[(18)] = inst_11562);

(statearr_11748[(7)] = inst_11563);

return statearr_11748;
})();
var statearr_11749_13162 = state_11646__$1;
(statearr_11749_13162[(2)] = null);

(statearr_11749_13162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (18))){
var inst_11578 = (state_11646[(2)]);
var state_11646__$1 = state_11646;
var statearr_11750_13163 = state_11646__$1;
(statearr_11750_13163[(2)] = inst_11578);

(statearr_11750_13163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (37))){
var state_11646__$1 = state_11646;
var statearr_11751_13164 = state_11646__$1;
(statearr_11751_13164[(2)] = null);

(statearr_11751_13164[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11647 === (8))){
var inst_11533 = (state_11646[(8)]);
var inst_11556 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11533);
var state_11646__$1 = state_11646;
var statearr_11752_13165 = state_11646__$1;
(statearr_11752_13165[(2)] = inst_11556);

(statearr_11752_13165[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10587__auto__ = null;
var cljs$core$async$mix_$_state_machine__10587__auto____0 = (function (){
var statearr_11753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11753[(0)] = cljs$core$async$mix_$_state_machine__10587__auto__);

(statearr_11753[(1)] = (1));

return statearr_11753;
});
var cljs$core$async$mix_$_state_machine__10587__auto____1 = (function (state_11646){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_11646);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e11755){var ex__10590__auto__ = e11755;
var statearr_11756_13166 = state_11646;
(statearr_11756_13166[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_11646[(4)]))){
var statearr_11759_13167 = state_11646;
(statearr_11759_13167[(1)] = cljs.core.first((state_11646[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13168 = state_11646;
state_11646 = G__13168;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10587__auto__ = function(state_11646){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10587__auto____1.call(this,state_11646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10587__auto____0;
cljs$core$async$mix_$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10587__auto____1;
return cljs$core$async$mix_$_state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_11761 = f__10656__auto__();
(statearr_11761[(6)] = c__10655__auto___13070);

return statearr_11761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13169 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13169(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13174 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13174(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13175 = (function() {
var G__13176 = null;
var G__13176__1 = (function (p){
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
var G__13176__2 = (function (p,v){
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
G__13176 = function(p,v){
switch(arguments.length){
case 1:
return G__13176__1.call(this,p);
case 2:
return G__13176__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13176.cljs$core$IFn$_invoke$arity$1 = G__13176__1;
G__13176.cljs$core$IFn$_invoke$arity$2 = G__13176__2;
return G__13176;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11785 = arguments.length;
switch (G__11785) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13175(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13175(p,v);
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
var G__11792 = arguments.length;
switch (G__11792) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11790_SHARP_){
if(cljs.core.truth_((p1__11790_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11790_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11790_SHARP_.call(null,topic)))){
return p1__11790_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11790_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11793 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11794){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11794 = meta11794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11795,meta11794__$1){
var self__ = this;
var _11795__$1 = this;
return (new cljs.core.async.t_cljs$core$async11793(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11794__$1));
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

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11793.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11794","meta11794",1907107238,null)], null);
}));

(cljs.core.async.t_cljs$core$async11793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11793");

(cljs.core.async.t_cljs$core$async11793.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11793.
 */
cljs.core.async.__GT_t_cljs$core$async11793 = (function cljs$core$async$__GT_t_cljs$core$async11793(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11794){
return (new cljs.core.async.t_cljs$core$async11793(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11794));
});

}

return (new cljs.core.async.t_cljs$core$async11793(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10655__auto___13192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_11882){
var state_val_11883 = (state_11882[(1)]);
if((state_val_11883 === (7))){
var inst_11878 = (state_11882[(2)]);
var state_11882__$1 = state_11882;
var statearr_11889_13193 = state_11882__$1;
(statearr_11889_13193[(2)] = inst_11878);

(statearr_11889_13193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (20))){
var state_11882__$1 = state_11882;
var statearr_11890_13194 = state_11882__$1;
(statearr_11890_13194[(2)] = null);

(statearr_11890_13194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (1))){
var state_11882__$1 = state_11882;
var statearr_11891_13195 = state_11882__$1;
(statearr_11891_13195[(2)] = null);

(statearr_11891_13195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (24))){
var inst_11860 = (state_11882[(7)]);
var inst_11869 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11860);
var state_11882__$1 = state_11882;
var statearr_11892_13197 = state_11882__$1;
(statearr_11892_13197[(2)] = inst_11869);

(statearr_11892_13197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (4))){
var inst_11808 = (state_11882[(8)]);
var inst_11808__$1 = (state_11882[(2)]);
var inst_11809 = (inst_11808__$1 == null);
var state_11882__$1 = (function (){var statearr_11893 = state_11882;
(statearr_11893[(8)] = inst_11808__$1);

return statearr_11893;
})();
if(cljs.core.truth_(inst_11809)){
var statearr_11894_13198 = state_11882__$1;
(statearr_11894_13198[(1)] = (5));

} else {
var statearr_11895_13199 = state_11882__$1;
(statearr_11895_13199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (15))){
var inst_11854 = (state_11882[(2)]);
var state_11882__$1 = state_11882;
var statearr_11896_13200 = state_11882__$1;
(statearr_11896_13200[(2)] = inst_11854);

(statearr_11896_13200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (21))){
var inst_11875 = (state_11882[(2)]);
var state_11882__$1 = (function (){var statearr_11897 = state_11882;
(statearr_11897[(9)] = inst_11875);

return statearr_11897;
})();
var statearr_11898_13204 = state_11882__$1;
(statearr_11898_13204[(2)] = null);

(statearr_11898_13204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (13))){
var inst_11836 = (state_11882[(10)]);
var inst_11838 = cljs.core.chunked_seq_QMARK_(inst_11836);
var state_11882__$1 = state_11882;
if(inst_11838){
var statearr_11899_13253 = state_11882__$1;
(statearr_11899_13253[(1)] = (16));

} else {
var statearr_11900_13255 = state_11882__$1;
(statearr_11900_13255[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (22))){
var inst_11866 = (state_11882[(2)]);
var state_11882__$1 = state_11882;
if(cljs.core.truth_(inst_11866)){
var statearr_11901_13258 = state_11882__$1;
(statearr_11901_13258[(1)] = (23));

} else {
var statearr_11904_13259 = state_11882__$1;
(statearr_11904_13259[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (6))){
var inst_11860 = (state_11882[(7)]);
var inst_11862 = (state_11882[(11)]);
var inst_11808 = (state_11882[(8)]);
var inst_11860__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11808) : topic_fn.call(null,inst_11808));
var inst_11861 = cljs.core.deref(mults);
var inst_11862__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11861,inst_11860__$1);
var state_11882__$1 = (function (){var statearr_11907 = state_11882;
(statearr_11907[(7)] = inst_11860__$1);

(statearr_11907[(11)] = inst_11862__$1);

return statearr_11907;
})();
if(cljs.core.truth_(inst_11862__$1)){
var statearr_11908_13260 = state_11882__$1;
(statearr_11908_13260[(1)] = (19));

} else {
var statearr_11909_13261 = state_11882__$1;
(statearr_11909_13261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (25))){
var inst_11872 = (state_11882[(2)]);
var state_11882__$1 = state_11882;
var statearr_11910_13262 = state_11882__$1;
(statearr_11910_13262[(2)] = inst_11872);

(statearr_11910_13262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (17))){
var inst_11836 = (state_11882[(10)]);
var inst_11845 = cljs.core.first(inst_11836);
var inst_11846 = cljs.core.async.muxch_STAR_(inst_11845);
var inst_11847 = cljs.core.async.close_BANG_(inst_11846);
var inst_11848 = cljs.core.next(inst_11836);
var inst_11818 = inst_11848;
var inst_11819 = null;
var inst_11820 = (0);
var inst_11821 = (0);
var state_11882__$1 = (function (){var statearr_11915 = state_11882;
(statearr_11915[(12)] = inst_11818);

(statearr_11915[(13)] = inst_11847);

(statearr_11915[(14)] = inst_11820);

(statearr_11915[(15)] = inst_11819);

(statearr_11915[(16)] = inst_11821);

return statearr_11915;
})();
var statearr_11918_13263 = state_11882__$1;
(statearr_11918_13263[(2)] = null);

(statearr_11918_13263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (3))){
var inst_11880 = (state_11882[(2)]);
var state_11882__$1 = state_11882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11882__$1,inst_11880);
} else {
if((state_val_11883 === (12))){
var inst_11856 = (state_11882[(2)]);
var state_11882__$1 = state_11882;
var statearr_11919_13264 = state_11882__$1;
(statearr_11919_13264[(2)] = inst_11856);

(statearr_11919_13264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (2))){
var state_11882__$1 = state_11882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11882__$1,(4),ch);
} else {
if((state_val_11883 === (23))){
var state_11882__$1 = state_11882;
var statearr_11920_13265 = state_11882__$1;
(statearr_11920_13265[(2)] = null);

(statearr_11920_13265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (19))){
var inst_11862 = (state_11882[(11)]);
var inst_11808 = (state_11882[(8)]);
var inst_11864 = cljs.core.async.muxch_STAR_(inst_11862);
var state_11882__$1 = state_11882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11882__$1,(22),inst_11864,inst_11808);
} else {
if((state_val_11883 === (11))){
var inst_11818 = (state_11882[(12)]);
var inst_11836 = (state_11882[(10)]);
var inst_11836__$1 = cljs.core.seq(inst_11818);
var state_11882__$1 = (function (){var statearr_11924 = state_11882;
(statearr_11924[(10)] = inst_11836__$1);

return statearr_11924;
})();
if(inst_11836__$1){
var statearr_11925_13266 = state_11882__$1;
(statearr_11925_13266[(1)] = (13));

} else {
var statearr_11928_13267 = state_11882__$1;
(statearr_11928_13267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (9))){
var inst_11858 = (state_11882[(2)]);
var state_11882__$1 = state_11882;
var statearr_11929_13269 = state_11882__$1;
(statearr_11929_13269[(2)] = inst_11858);

(statearr_11929_13269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (5))){
var inst_11815 = cljs.core.deref(mults);
var inst_11816 = cljs.core.vals(inst_11815);
var inst_11817 = cljs.core.seq(inst_11816);
var inst_11818 = inst_11817;
var inst_11819 = null;
var inst_11820 = (0);
var inst_11821 = (0);
var state_11882__$1 = (function (){var statearr_11930 = state_11882;
(statearr_11930[(12)] = inst_11818);

(statearr_11930[(14)] = inst_11820);

(statearr_11930[(15)] = inst_11819);

(statearr_11930[(16)] = inst_11821);

return statearr_11930;
})();
var statearr_11931_13274 = state_11882__$1;
(statearr_11931_13274[(2)] = null);

(statearr_11931_13274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (14))){
var state_11882__$1 = state_11882;
var statearr_11935_13283 = state_11882__$1;
(statearr_11935_13283[(2)] = null);

(statearr_11935_13283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (16))){
var inst_11836 = (state_11882[(10)]);
var inst_11840 = cljs.core.chunk_first(inst_11836);
var inst_11841 = cljs.core.chunk_rest(inst_11836);
var inst_11842 = cljs.core.count(inst_11840);
var inst_11818 = inst_11841;
var inst_11819 = inst_11840;
var inst_11820 = inst_11842;
var inst_11821 = (0);
var state_11882__$1 = (function (){var statearr_11936 = state_11882;
(statearr_11936[(12)] = inst_11818);

(statearr_11936[(14)] = inst_11820);

(statearr_11936[(15)] = inst_11819);

(statearr_11936[(16)] = inst_11821);

return statearr_11936;
})();
var statearr_11937_13286 = state_11882__$1;
(statearr_11937_13286[(2)] = null);

(statearr_11937_13286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (10))){
var inst_11818 = (state_11882[(12)]);
var inst_11820 = (state_11882[(14)]);
var inst_11819 = (state_11882[(15)]);
var inst_11821 = (state_11882[(16)]);
var inst_11830 = cljs.core._nth(inst_11819,inst_11821);
var inst_11831 = cljs.core.async.muxch_STAR_(inst_11830);
var inst_11832 = cljs.core.async.close_BANG_(inst_11831);
var inst_11833 = (inst_11821 + (1));
var tmp11932 = inst_11818;
var tmp11933 = inst_11820;
var tmp11934 = inst_11819;
var inst_11818__$1 = tmp11932;
var inst_11819__$1 = tmp11934;
var inst_11820__$1 = tmp11933;
var inst_11821__$1 = inst_11833;
var state_11882__$1 = (function (){var statearr_11938 = state_11882;
(statearr_11938[(17)] = inst_11832);

(statearr_11938[(12)] = inst_11818__$1);

(statearr_11938[(14)] = inst_11820__$1);

(statearr_11938[(15)] = inst_11819__$1);

(statearr_11938[(16)] = inst_11821__$1);

return statearr_11938;
})();
var statearr_11939_13288 = state_11882__$1;
(statearr_11939_13288[(2)] = null);

(statearr_11939_13288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (18))){
var inst_11851 = (state_11882[(2)]);
var state_11882__$1 = state_11882;
var statearr_11940_13290 = state_11882__$1;
(statearr_11940_13290[(2)] = inst_11851);

(statearr_11940_13290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11883 === (8))){
var inst_11820 = (state_11882[(14)]);
var inst_11821 = (state_11882[(16)]);
var inst_11827 = (inst_11821 < inst_11820);
var inst_11828 = inst_11827;
var state_11882__$1 = state_11882;
if(cljs.core.truth_(inst_11828)){
var statearr_11941_13291 = state_11882__$1;
(statearr_11941_13291[(1)] = (10));

} else {
var statearr_11942_13292 = state_11882__$1;
(statearr_11942_13292[(1)] = (11));

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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_11944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11944[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_11944[(1)] = (1));

return statearr_11944;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_11882){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_11882);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e11945){var ex__10590__auto__ = e11945;
var statearr_11946_13294 = state_11882;
(statearr_11946_13294[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_11882[(4)]))){
var statearr_11947_13296 = state_11882;
(statearr_11947_13296[(1)] = cljs.core.first((state_11882[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13297 = state_11882;
state_11882 = G__13297;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_11882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_11882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_11948 = f__10656__auto__();
(statearr_11948[(6)] = c__10655__auto___13192);

return statearr_11948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
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
var G__11950 = arguments.length;
switch (G__11950) {
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
var c__10655__auto___13304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_12002){
var state_val_12003 = (state_12002[(1)]);
if((state_val_12003 === (7))){
var state_12002__$1 = state_12002;
var statearr_12005_13306 = state_12002__$1;
(statearr_12005_13306[(2)] = null);

(statearr_12005_13306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (1))){
var state_12002__$1 = state_12002;
var statearr_12006_13307 = state_12002__$1;
(statearr_12006_13307[(2)] = null);

(statearr_12006_13307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (4))){
var inst_11963 = (state_12002[(7)]);
var inst_11962 = (state_12002[(8)]);
var inst_11965 = (inst_11963 < inst_11962);
var state_12002__$1 = state_12002;
if(cljs.core.truth_(inst_11965)){
var statearr_12007_13308 = state_12002__$1;
(statearr_12007_13308[(1)] = (6));

} else {
var statearr_12008_13310 = state_12002__$1;
(statearr_12008_13310[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (15))){
var inst_11988 = (state_12002[(9)]);
var inst_11993 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11988);
var state_12002__$1 = state_12002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12002__$1,(17),out,inst_11993);
} else {
if((state_val_12003 === (13))){
var inst_11988 = (state_12002[(9)]);
var inst_11988__$1 = (state_12002[(2)]);
var inst_11989 = cljs.core.some(cljs.core.nil_QMARK_,inst_11988__$1);
var state_12002__$1 = (function (){var statearr_12009 = state_12002;
(statearr_12009[(9)] = inst_11988__$1);

return statearr_12009;
})();
if(cljs.core.truth_(inst_11989)){
var statearr_12010_13311 = state_12002__$1;
(statearr_12010_13311[(1)] = (14));

} else {
var statearr_12011_13312 = state_12002__$1;
(statearr_12011_13312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (6))){
var state_12002__$1 = state_12002;
var statearr_12012_13314 = state_12002__$1;
(statearr_12012_13314[(2)] = null);

(statearr_12012_13314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (17))){
var inst_11995 = (state_12002[(2)]);
var state_12002__$1 = (function (){var statearr_12020 = state_12002;
(statearr_12020[(10)] = inst_11995);

return statearr_12020;
})();
var statearr_12021_13315 = state_12002__$1;
(statearr_12021_13315[(2)] = null);

(statearr_12021_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (3))){
var inst_12000 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12002__$1,inst_12000);
} else {
if((state_val_12003 === (12))){
var _ = (function (){var statearr_12022 = state_12002;
(statearr_12022[(4)] = cljs.core.rest((state_12002[(4)])));

return statearr_12022;
})();
var state_12002__$1 = state_12002;
var ex12019 = (state_12002__$1[(2)]);
var statearr_12023_13317 = state_12002__$1;
(statearr_12023_13317[(5)] = ex12019);


if((ex12019 instanceof Object)){
var statearr_12024_13318 = state_12002__$1;
(statearr_12024_13318[(1)] = (11));

(statearr_12024_13318[(5)] = null);

} else {
throw ex12019;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (2))){
var inst_11961 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11962 = cnt;
var inst_11963 = (0);
var state_12002__$1 = (function (){var statearr_12025 = state_12002;
(statearr_12025[(11)] = inst_11961);

(statearr_12025[(7)] = inst_11963);

(statearr_12025[(8)] = inst_11962);

return statearr_12025;
})();
var statearr_12026_13325 = state_12002__$1;
(statearr_12026_13325[(2)] = null);

(statearr_12026_13325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (11))){
var inst_11967 = (state_12002[(2)]);
var inst_11968 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12002__$1 = (function (){var statearr_12027 = state_12002;
(statearr_12027[(12)] = inst_11967);

return statearr_12027;
})();
var statearr_12028_13326 = state_12002__$1;
(statearr_12028_13326[(2)] = inst_11968);

(statearr_12028_13326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (9))){
var inst_11963 = (state_12002[(7)]);
var _ = (function (){var statearr_12029 = state_12002;
(statearr_12029[(4)] = cljs.core.cons((12),(state_12002[(4)])));

return statearr_12029;
})();
var inst_11974 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11963) : chs__$1.call(null,inst_11963));
var inst_11975 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11963) : done.call(null,inst_11963));
var inst_11976 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11974,inst_11975);
var ___$1 = (function (){var statearr_12030 = state_12002;
(statearr_12030[(4)] = cljs.core.rest((state_12002[(4)])));

return statearr_12030;
})();
var state_12002__$1 = state_12002;
var statearr_12031_13327 = state_12002__$1;
(statearr_12031_13327[(2)] = inst_11976);

(statearr_12031_13327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (5))){
var inst_11986 = (state_12002[(2)]);
var state_12002__$1 = (function (){var statearr_12032 = state_12002;
(statearr_12032[(13)] = inst_11986);

return statearr_12032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12002__$1,(13),dchan);
} else {
if((state_val_12003 === (14))){
var inst_11991 = cljs.core.async.close_BANG_(out);
var state_12002__$1 = state_12002;
var statearr_12033_13328 = state_12002__$1;
(statearr_12033_13328[(2)] = inst_11991);

(statearr_12033_13328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (16))){
var inst_11998 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
var statearr_12034_13329 = state_12002__$1;
(statearr_12034_13329[(2)] = inst_11998);

(statearr_12034_13329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (10))){
var inst_11963 = (state_12002[(7)]);
var inst_11979 = (state_12002[(2)]);
var inst_11980 = (inst_11963 + (1));
var inst_11963__$1 = inst_11980;
var state_12002__$1 = (function (){var statearr_12035 = state_12002;
(statearr_12035[(14)] = inst_11979);

(statearr_12035[(7)] = inst_11963__$1);

return statearr_12035;
})();
var statearr_12036_13330 = state_12002__$1;
(statearr_12036_13330[(2)] = null);

(statearr_12036_13330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (8))){
var inst_11984 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
var statearr_12037_13331 = state_12002__$1;
(statearr_12037_13331[(2)] = inst_11984);

(statearr_12037_13331[(1)] = (5));


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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_12038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12038[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_12038[(1)] = (1));

return statearr_12038;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_12002){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_12002);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e12039){var ex__10590__auto__ = e12039;
var statearr_12040_13332 = state_12002;
(statearr_12040_13332[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_12002[(4)]))){
var statearr_12041_13333 = state_12002;
(statearr_12041_13333[(1)] = cljs.core.first((state_12002[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13334 = state_12002;
state_12002 = G__13334;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_12002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_12002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_12042 = f__10656__auto__();
(statearr_12042[(6)] = c__10655__auto___13304);

return statearr_12042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
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
var G__12045 = arguments.length;
switch (G__12045) {
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
var c__10655__auto___13336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_12080){
var state_val_12081 = (state_12080[(1)]);
if((state_val_12081 === (7))){
var inst_12060 = (state_12080[(7)]);
var inst_12059 = (state_12080[(8)]);
var inst_12059__$1 = (state_12080[(2)]);
var inst_12060__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12059__$1,(0),null);
var inst_12061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12059__$1,(1),null);
var inst_12062 = (inst_12060__$1 == null);
var state_12080__$1 = (function (){var statearr_12082 = state_12080;
(statearr_12082[(9)] = inst_12061);

(statearr_12082[(7)] = inst_12060__$1);

(statearr_12082[(8)] = inst_12059__$1);

return statearr_12082;
})();
if(cljs.core.truth_(inst_12062)){
var statearr_12083_13337 = state_12080__$1;
(statearr_12083_13337[(1)] = (8));

} else {
var statearr_12084_13338 = state_12080__$1;
(statearr_12084_13338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (1))){
var inst_12048 = cljs.core.vec(chs);
var inst_12049 = inst_12048;
var state_12080__$1 = (function (){var statearr_12085 = state_12080;
(statearr_12085[(10)] = inst_12049);

return statearr_12085;
})();
var statearr_12087_13339 = state_12080__$1;
(statearr_12087_13339[(2)] = null);

(statearr_12087_13339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (4))){
var inst_12049 = (state_12080[(10)]);
var state_12080__$1 = state_12080;
return cljs.core.async.ioc_alts_BANG_(state_12080__$1,(7),inst_12049);
} else {
if((state_val_12081 === (6))){
var inst_12076 = (state_12080[(2)]);
var state_12080__$1 = state_12080;
var statearr_12089_13340 = state_12080__$1;
(statearr_12089_13340[(2)] = inst_12076);

(statearr_12089_13340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (3))){
var inst_12078 = (state_12080[(2)]);
var state_12080__$1 = state_12080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12080__$1,inst_12078);
} else {
if((state_val_12081 === (2))){
var inst_12049 = (state_12080[(10)]);
var inst_12051 = cljs.core.count(inst_12049);
var inst_12052 = (inst_12051 > (0));
var state_12080__$1 = state_12080;
if(cljs.core.truth_(inst_12052)){
var statearr_12091_13341 = state_12080__$1;
(statearr_12091_13341[(1)] = (4));

} else {
var statearr_12092_13342 = state_12080__$1;
(statearr_12092_13342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (11))){
var inst_12049 = (state_12080[(10)]);
var inst_12069 = (state_12080[(2)]);
var tmp12090 = inst_12049;
var inst_12049__$1 = tmp12090;
var state_12080__$1 = (function (){var statearr_12093 = state_12080;
(statearr_12093[(10)] = inst_12049__$1);

(statearr_12093[(11)] = inst_12069);

return statearr_12093;
})();
var statearr_12094_13343 = state_12080__$1;
(statearr_12094_13343[(2)] = null);

(statearr_12094_13343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (9))){
var inst_12060 = (state_12080[(7)]);
var state_12080__$1 = state_12080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12080__$1,(11),out,inst_12060);
} else {
if((state_val_12081 === (5))){
var inst_12074 = cljs.core.async.close_BANG_(out);
var state_12080__$1 = state_12080;
var statearr_12095_13344 = state_12080__$1;
(statearr_12095_13344[(2)] = inst_12074);

(statearr_12095_13344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (10))){
var inst_12072 = (state_12080[(2)]);
var state_12080__$1 = state_12080;
var statearr_12096_13345 = state_12080__$1;
(statearr_12096_13345[(2)] = inst_12072);

(statearr_12096_13345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (8))){
var inst_12061 = (state_12080[(9)]);
var inst_12060 = (state_12080[(7)]);
var inst_12059 = (state_12080[(8)]);
var inst_12049 = (state_12080[(10)]);
var inst_12064 = (function (){var cs = inst_12049;
var vec__12054 = inst_12059;
var v = inst_12060;
var c = inst_12061;
return (function (p1__12043_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12043_SHARP_);
});
})();
var inst_12065 = cljs.core.filterv(inst_12064,inst_12049);
var inst_12049__$1 = inst_12065;
var state_12080__$1 = (function (){var statearr_12097 = state_12080;
(statearr_12097[(10)] = inst_12049__$1);

return statearr_12097;
})();
var statearr_12098_13346 = state_12080__$1;
(statearr_12098_13346[(2)] = null);

(statearr_12098_13346[(1)] = (2));


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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_12101 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12101[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_12101[(1)] = (1));

return statearr_12101;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_12080){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_12080);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e12102){var ex__10590__auto__ = e12102;
var statearr_12103_13347 = state_12080;
(statearr_12103_13347[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_12080[(4)]))){
var statearr_12104_13348 = state_12080;
(statearr_12104_13348[(1)] = cljs.core.first((state_12080[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13349 = state_12080;
state_12080 = G__13349;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_12080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_12080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_12105 = f__10656__auto__();
(statearr_12105[(6)] = c__10655__auto___13336);

return statearr_12105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
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
var G__12108 = arguments.length;
switch (G__12108) {
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
var c__10655__auto___13351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_12137){
var state_val_12138 = (state_12137[(1)]);
if((state_val_12138 === (7))){
var inst_12119 = (state_12137[(7)]);
var inst_12119__$1 = (state_12137[(2)]);
var inst_12120 = (inst_12119__$1 == null);
var inst_12121 = cljs.core.not(inst_12120);
var state_12137__$1 = (function (){var statearr_12139 = state_12137;
(statearr_12139[(7)] = inst_12119__$1);

return statearr_12139;
})();
if(inst_12121){
var statearr_12140_13352 = state_12137__$1;
(statearr_12140_13352[(1)] = (8));

} else {
var statearr_12141_13353 = state_12137__$1;
(statearr_12141_13353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12138 === (1))){
var inst_12113 = (0);
var state_12137__$1 = (function (){var statearr_12142 = state_12137;
(statearr_12142[(8)] = inst_12113);

return statearr_12142;
})();
var statearr_12143_13354 = state_12137__$1;
(statearr_12143_13354[(2)] = null);

(statearr_12143_13354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12138 === (4))){
var state_12137__$1 = state_12137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12137__$1,(7),ch);
} else {
if((state_val_12138 === (6))){
var inst_12132 = (state_12137[(2)]);
var state_12137__$1 = state_12137;
var statearr_12146_13355 = state_12137__$1;
(statearr_12146_13355[(2)] = inst_12132);

(statearr_12146_13355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12138 === (3))){
var inst_12134 = (state_12137[(2)]);
var inst_12135 = cljs.core.async.close_BANG_(out);
var state_12137__$1 = (function (){var statearr_12147 = state_12137;
(statearr_12147[(9)] = inst_12134);

return statearr_12147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12137__$1,inst_12135);
} else {
if((state_val_12138 === (2))){
var inst_12113 = (state_12137[(8)]);
var inst_12116 = (inst_12113 < n);
var state_12137__$1 = state_12137;
if(cljs.core.truth_(inst_12116)){
var statearr_12148_13356 = state_12137__$1;
(statearr_12148_13356[(1)] = (4));

} else {
var statearr_12149_13357 = state_12137__$1;
(statearr_12149_13357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12138 === (11))){
var inst_12113 = (state_12137[(8)]);
var inst_12124 = (state_12137[(2)]);
var inst_12125 = (inst_12113 + (1));
var inst_12113__$1 = inst_12125;
var state_12137__$1 = (function (){var statearr_12150 = state_12137;
(statearr_12150[(8)] = inst_12113__$1);

(statearr_12150[(10)] = inst_12124);

return statearr_12150;
})();
var statearr_12151_13358 = state_12137__$1;
(statearr_12151_13358[(2)] = null);

(statearr_12151_13358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12138 === (9))){
var state_12137__$1 = state_12137;
var statearr_12152_13359 = state_12137__$1;
(statearr_12152_13359[(2)] = null);

(statearr_12152_13359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12138 === (5))){
var state_12137__$1 = state_12137;
var statearr_12153_13360 = state_12137__$1;
(statearr_12153_13360[(2)] = null);

(statearr_12153_13360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12138 === (10))){
var inst_12129 = (state_12137[(2)]);
var state_12137__$1 = state_12137;
var statearr_12154_13361 = state_12137__$1;
(statearr_12154_13361[(2)] = inst_12129);

(statearr_12154_13361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12138 === (8))){
var inst_12119 = (state_12137[(7)]);
var state_12137__$1 = state_12137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12137__$1,(11),out,inst_12119);
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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_12155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12155[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_12155[(1)] = (1));

return statearr_12155;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_12137){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_12137);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e12156){var ex__10590__auto__ = e12156;
var statearr_12157_13362 = state_12137;
(statearr_12157_13362[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_12137[(4)]))){
var statearr_12158_13363 = state_12137;
(statearr_12158_13363[(1)] = cljs.core.first((state_12137[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13364 = state_12137;
state_12137 = G__13364;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_12137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_12137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_12159 = f__10656__auto__();
(statearr_12159[(6)] = c__10655__auto___13351);

return statearr_12159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12161 = (function (f,ch,meta12162){
this.f = f;
this.ch = ch;
this.meta12162 = meta12162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12163,meta12162__$1){
var self__ = this;
var _12163__$1 = this;
return (new cljs.core.async.t_cljs$core$async12161(self__.f,self__.ch,meta12162__$1));
}));

(cljs.core.async.t_cljs$core$async12161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12163){
var self__ = this;
var _12163__$1 = this;
return self__.meta12162;
}));

(cljs.core.async.t_cljs$core$async12161.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12161.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12161.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12165 = (function (f,ch,meta12162,_,fn1,meta12166){
this.f = f;
this.ch = ch;
this.meta12162 = meta12162;
this._ = _;
this.fn1 = fn1;
this.meta12166 = meta12166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12167,meta12166__$1){
var self__ = this;
var _12167__$1 = this;
return (new cljs.core.async.t_cljs$core$async12165(self__.f,self__.ch,self__.meta12162,self__._,self__.fn1,meta12166__$1));
}));

(cljs.core.async.t_cljs$core$async12165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12167){
var self__ = this;
var _12167__$1 = this;
return self__.meta12166;
}));

(cljs.core.async.t_cljs$core$async12165.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12165.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12160_SHARP_){
var G__12168 = (((p1__12160_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12160_SHARP_) : self__.f.call(null,p1__12160_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12168) : f1.call(null,G__12168));
});
}));

(cljs.core.async.t_cljs$core$async12165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12162","meta12162",-780472220,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12161","cljs.core.async/t_cljs$core$async12161",-1384861655,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12166","meta12166",1218317455,null)], null);
}));

(cljs.core.async.t_cljs$core$async12165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12165");

(cljs.core.async.t_cljs$core$async12165.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12165.
 */
cljs.core.async.__GT_t_cljs$core$async12165 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12165(f__$1,ch__$1,meta12162__$1,___$2,fn1__$1,meta12166){
return (new cljs.core.async.t_cljs$core$async12165(f__$1,ch__$1,meta12162__$1,___$2,fn1__$1,meta12166));
});

}

return (new cljs.core.async.t_cljs$core$async12165(self__.f,self__.ch,self__.meta12162,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12169 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12169) : self__.f.call(null,G__12169));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12161.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12162","meta12162",-780472220,null)], null);
}));

(cljs.core.async.t_cljs$core$async12161.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12161");

(cljs.core.async.t_cljs$core$async12161.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12161");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12161.
 */
cljs.core.async.__GT_t_cljs$core$async12161 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12161(f__$1,ch__$1,meta12162){
return (new cljs.core.async.t_cljs$core$async12161(f__$1,ch__$1,meta12162));
});

}

return (new cljs.core.async.t_cljs$core$async12161(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12170 = (function (f,ch,meta12171){
this.f = f;
this.ch = ch;
this.meta12171 = meta12171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12172,meta12171__$1){
var self__ = this;
var _12172__$1 = this;
return (new cljs.core.async.t_cljs$core$async12170(self__.f,self__.ch,meta12171__$1));
}));

(cljs.core.async.t_cljs$core$async12170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12172){
var self__ = this;
var _12172__$1 = this;
return self__.meta12171;
}));

(cljs.core.async.t_cljs$core$async12170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12171","meta12171",-1326294612,null)], null);
}));

(cljs.core.async.t_cljs$core$async12170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12170");

(cljs.core.async.t_cljs$core$async12170.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12170.
 */
cljs.core.async.__GT_t_cljs$core$async12170 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12170(f__$1,ch__$1,meta12171){
return (new cljs.core.async.t_cljs$core$async12170(f__$1,ch__$1,meta12171));
});

}

return (new cljs.core.async.t_cljs$core$async12170(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12174 = (function (p,ch,meta12175){
this.p = p;
this.ch = ch;
this.meta12175 = meta12175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12176,meta12175__$1){
var self__ = this;
var _12176__$1 = this;
return (new cljs.core.async.t_cljs$core$async12174(self__.p,self__.ch,meta12175__$1));
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12176){
var self__ = this;
var _12176__$1 = this;
return self__.meta12175;
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12175","meta12175",1259387442,null)], null);
}));

(cljs.core.async.t_cljs$core$async12174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12174");

(cljs.core.async.t_cljs$core$async12174.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12174.
 */
cljs.core.async.__GT_t_cljs$core$async12174 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12174(p__$1,ch__$1,meta12175){
return (new cljs.core.async.t_cljs$core$async12174(p__$1,ch__$1,meta12175));
});

}

return (new cljs.core.async.t_cljs$core$async12174(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12182 = arguments.length;
switch (G__12182) {
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
var c__10655__auto___13366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_12208){
var state_val_12209 = (state_12208[(1)]);
if((state_val_12209 === (7))){
var inst_12204 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
var statearr_12210_13367 = state_12208__$1;
(statearr_12210_13367[(2)] = inst_12204);

(statearr_12210_13367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (1))){
var state_12208__$1 = state_12208;
var statearr_12211_13368 = state_12208__$1;
(statearr_12211_13368[(2)] = null);

(statearr_12211_13368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (4))){
var inst_12185 = (state_12208[(7)]);
var inst_12185__$1 = (state_12208[(2)]);
var inst_12186 = (inst_12185__$1 == null);
var state_12208__$1 = (function (){var statearr_12212 = state_12208;
(statearr_12212[(7)] = inst_12185__$1);

return statearr_12212;
})();
if(cljs.core.truth_(inst_12186)){
var statearr_12213_13369 = state_12208__$1;
(statearr_12213_13369[(1)] = (5));

} else {
var statearr_12214_13370 = state_12208__$1;
(statearr_12214_13370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (6))){
var inst_12185 = (state_12208[(7)]);
var inst_12190 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12185) : p.call(null,inst_12185));
var state_12208__$1 = state_12208;
if(cljs.core.truth_(inst_12190)){
var statearr_12215_13371 = state_12208__$1;
(statearr_12215_13371[(1)] = (8));

} else {
var statearr_12216_13372 = state_12208__$1;
(statearr_12216_13372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (3))){
var inst_12206 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12208__$1,inst_12206);
} else {
if((state_val_12209 === (2))){
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12208__$1,(4),ch);
} else {
if((state_val_12209 === (11))){
var inst_12196 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
var statearr_12217_13373 = state_12208__$1;
(statearr_12217_13373[(2)] = inst_12196);

(statearr_12217_13373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (9))){
var state_12208__$1 = state_12208;
var statearr_12218_13374 = state_12208__$1;
(statearr_12218_13374[(2)] = null);

(statearr_12218_13374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (5))){
var inst_12188 = cljs.core.async.close_BANG_(out);
var state_12208__$1 = state_12208;
var statearr_12219_13375 = state_12208__$1;
(statearr_12219_13375[(2)] = inst_12188);

(statearr_12219_13375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (10))){
var inst_12201 = (state_12208[(2)]);
var state_12208__$1 = (function (){var statearr_12221 = state_12208;
(statearr_12221[(8)] = inst_12201);

return statearr_12221;
})();
var statearr_12222_13376 = state_12208__$1;
(statearr_12222_13376[(2)] = null);

(statearr_12222_13376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (8))){
var inst_12185 = (state_12208[(7)]);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12208__$1,(11),out,inst_12185);
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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_12223 = [null,null,null,null,null,null,null,null,null];
(statearr_12223[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_12223[(1)] = (1));

return statearr_12223;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_12208){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_12208);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e12224){var ex__10590__auto__ = e12224;
var statearr_12225_13377 = state_12208;
(statearr_12225_13377[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_12208[(4)]))){
var statearr_12226_13378 = state_12208;
(statearr_12226_13378[(1)] = cljs.core.first((state_12208[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13379 = state_12208;
state_12208 = G__13379;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_12208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_12208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_12227 = f__10656__auto__();
(statearr_12227[(6)] = c__10655__auto___13366);

return statearr_12227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12229 = arguments.length;
switch (G__12229) {
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
var c__10655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_12291){
var state_val_12292 = (state_12291[(1)]);
if((state_val_12292 === (7))){
var inst_12287 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12295_13381 = state_12291__$1;
(statearr_12295_13381[(2)] = inst_12287);

(statearr_12295_13381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (20))){
var inst_12257 = (state_12291[(7)]);
var inst_12268 = (state_12291[(2)]);
var inst_12269 = cljs.core.next(inst_12257);
var inst_12243 = inst_12269;
var inst_12244 = null;
var inst_12245 = (0);
var inst_12246 = (0);
var state_12291__$1 = (function (){var statearr_12296 = state_12291;
(statearr_12296[(8)] = inst_12268);

(statearr_12296[(9)] = inst_12246);

(statearr_12296[(10)] = inst_12243);

(statearr_12296[(11)] = inst_12245);

(statearr_12296[(12)] = inst_12244);

return statearr_12296;
})();
var statearr_12297_13382 = state_12291__$1;
(statearr_12297_13382[(2)] = null);

(statearr_12297_13382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (1))){
var state_12291__$1 = state_12291;
var statearr_12298_13383 = state_12291__$1;
(statearr_12298_13383[(2)] = null);

(statearr_12298_13383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (4))){
var inst_12232 = (state_12291[(13)]);
var inst_12232__$1 = (state_12291[(2)]);
var inst_12233 = (inst_12232__$1 == null);
var state_12291__$1 = (function (){var statearr_12299 = state_12291;
(statearr_12299[(13)] = inst_12232__$1);

return statearr_12299;
})();
if(cljs.core.truth_(inst_12233)){
var statearr_12300_13384 = state_12291__$1;
(statearr_12300_13384[(1)] = (5));

} else {
var statearr_12301_13385 = state_12291__$1;
(statearr_12301_13385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (15))){
var state_12291__$1 = state_12291;
var statearr_12305_13386 = state_12291__$1;
(statearr_12305_13386[(2)] = null);

(statearr_12305_13386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (21))){
var state_12291__$1 = state_12291;
var statearr_12306_13387 = state_12291__$1;
(statearr_12306_13387[(2)] = null);

(statearr_12306_13387[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (13))){
var inst_12246 = (state_12291[(9)]);
var inst_12243 = (state_12291[(10)]);
var inst_12245 = (state_12291[(11)]);
var inst_12244 = (state_12291[(12)]);
var inst_12253 = (state_12291[(2)]);
var inst_12254 = (inst_12246 + (1));
var tmp12302 = inst_12243;
var tmp12303 = inst_12245;
var tmp12304 = inst_12244;
var inst_12243__$1 = tmp12302;
var inst_12244__$1 = tmp12304;
var inst_12245__$1 = tmp12303;
var inst_12246__$1 = inst_12254;
var state_12291__$1 = (function (){var statearr_12307 = state_12291;
(statearr_12307[(9)] = inst_12246__$1);

(statearr_12307[(14)] = inst_12253);

(statearr_12307[(10)] = inst_12243__$1);

(statearr_12307[(11)] = inst_12245__$1);

(statearr_12307[(12)] = inst_12244__$1);

return statearr_12307;
})();
var statearr_12308_13388 = state_12291__$1;
(statearr_12308_13388[(2)] = null);

(statearr_12308_13388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (22))){
var state_12291__$1 = state_12291;
var statearr_12309_13389 = state_12291__$1;
(statearr_12309_13389[(2)] = null);

(statearr_12309_13389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (6))){
var inst_12232 = (state_12291[(13)]);
var inst_12241 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12232) : f.call(null,inst_12232));
var inst_12242 = cljs.core.seq(inst_12241);
var inst_12243 = inst_12242;
var inst_12244 = null;
var inst_12245 = (0);
var inst_12246 = (0);
var state_12291__$1 = (function (){var statearr_12310 = state_12291;
(statearr_12310[(9)] = inst_12246);

(statearr_12310[(10)] = inst_12243);

(statearr_12310[(11)] = inst_12245);

(statearr_12310[(12)] = inst_12244);

return statearr_12310;
})();
var statearr_12311_13390 = state_12291__$1;
(statearr_12311_13390[(2)] = null);

(statearr_12311_13390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (17))){
var inst_12257 = (state_12291[(7)]);
var inst_12261 = cljs.core.chunk_first(inst_12257);
var inst_12262 = cljs.core.chunk_rest(inst_12257);
var inst_12263 = cljs.core.count(inst_12261);
var inst_12243 = inst_12262;
var inst_12244 = inst_12261;
var inst_12245 = inst_12263;
var inst_12246 = (0);
var state_12291__$1 = (function (){var statearr_12316 = state_12291;
(statearr_12316[(9)] = inst_12246);

(statearr_12316[(10)] = inst_12243);

(statearr_12316[(11)] = inst_12245);

(statearr_12316[(12)] = inst_12244);

return statearr_12316;
})();
var statearr_12321_13391 = state_12291__$1;
(statearr_12321_13391[(2)] = null);

(statearr_12321_13391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (3))){
var inst_12289 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12291__$1,inst_12289);
} else {
if((state_val_12292 === (12))){
var inst_12277 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12326_13392 = state_12291__$1;
(statearr_12326_13392[(2)] = inst_12277);

(statearr_12326_13392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (2))){
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12291__$1,(4),in$);
} else {
if((state_val_12292 === (23))){
var inst_12285 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12327_13393 = state_12291__$1;
(statearr_12327_13393[(2)] = inst_12285);

(statearr_12327_13393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (19))){
var inst_12272 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12328_13394 = state_12291__$1;
(statearr_12328_13394[(2)] = inst_12272);

(statearr_12328_13394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (11))){
var inst_12257 = (state_12291[(7)]);
var inst_12243 = (state_12291[(10)]);
var inst_12257__$1 = cljs.core.seq(inst_12243);
var state_12291__$1 = (function (){var statearr_12331 = state_12291;
(statearr_12331[(7)] = inst_12257__$1);

return statearr_12331;
})();
if(inst_12257__$1){
var statearr_12332_13395 = state_12291__$1;
(statearr_12332_13395[(1)] = (14));

} else {
var statearr_12333_13396 = state_12291__$1;
(statearr_12333_13396[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (9))){
var inst_12279 = (state_12291[(2)]);
var inst_12280 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12291__$1 = (function (){var statearr_12334 = state_12291;
(statearr_12334[(15)] = inst_12279);

return statearr_12334;
})();
if(cljs.core.truth_(inst_12280)){
var statearr_12335_13397 = state_12291__$1;
(statearr_12335_13397[(1)] = (21));

} else {
var statearr_12353_13398 = state_12291__$1;
(statearr_12353_13398[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (5))){
var inst_12235 = cljs.core.async.close_BANG_(out);
var state_12291__$1 = state_12291;
var statearr_12356_13399 = state_12291__$1;
(statearr_12356_13399[(2)] = inst_12235);

(statearr_12356_13399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (14))){
var inst_12257 = (state_12291[(7)]);
var inst_12259 = cljs.core.chunked_seq_QMARK_(inst_12257);
var state_12291__$1 = state_12291;
if(inst_12259){
var statearr_12363_13400 = state_12291__$1;
(statearr_12363_13400[(1)] = (17));

} else {
var statearr_12364_13401 = state_12291__$1;
(statearr_12364_13401[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (16))){
var inst_12275 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12365_13402 = state_12291__$1;
(statearr_12365_13402[(2)] = inst_12275);

(statearr_12365_13402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (10))){
var inst_12246 = (state_12291[(9)]);
var inst_12244 = (state_12291[(12)]);
var inst_12251 = cljs.core._nth(inst_12244,inst_12246);
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12291__$1,(13),out,inst_12251);
} else {
if((state_val_12292 === (18))){
var inst_12257 = (state_12291[(7)]);
var inst_12266 = cljs.core.first(inst_12257);
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12291__$1,(20),out,inst_12266);
} else {
if((state_val_12292 === (8))){
var inst_12246 = (state_12291[(9)]);
var inst_12245 = (state_12291[(11)]);
var inst_12248 = (inst_12246 < inst_12245);
var inst_12249 = inst_12248;
var state_12291__$1 = state_12291;
if(cljs.core.truth_(inst_12249)){
var statearr_12366_13403 = state_12291__$1;
(statearr_12366_13403[(1)] = (10));

} else {
var statearr_12367_13404 = state_12291__$1;
(statearr_12367_13404[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10587__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10587__auto____0 = (function (){
var statearr_12368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12368[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10587__auto__);

(statearr_12368[(1)] = (1));

return statearr_12368;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10587__auto____1 = (function (state_12291){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_12291);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e12371){var ex__10590__auto__ = e12371;
var statearr_12372_13405 = state_12291;
(statearr_12372_13405[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_12291[(4)]))){
var statearr_12373_13406 = state_12291;
(statearr_12373_13406[(1)] = cljs.core.first((state_12291[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12291;
state_12291 = G__13407;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10587__auto__ = function(state_12291){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10587__auto____1.call(this,state_12291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10587__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10587__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_12374 = f__10656__auto__();
(statearr_12374[(6)] = c__10655__auto__);

return statearr_12374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));

return c__10655__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12381 = arguments.length;
switch (G__12381) {
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
var G__12384 = arguments.length;
switch (G__12384) {
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
var G__12388 = arguments.length;
switch (G__12388) {
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
var c__10655__auto___13411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_12418){
var state_val_12419 = (state_12418[(1)]);
if((state_val_12419 === (7))){
var inst_12407 = (state_12418[(2)]);
var state_12418__$1 = state_12418;
var statearr_12420_13412 = state_12418__$1;
(statearr_12420_13412[(2)] = inst_12407);

(statearr_12420_13412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12419 === (1))){
var inst_12389 = null;
var state_12418__$1 = (function (){var statearr_12421 = state_12418;
(statearr_12421[(7)] = inst_12389);

return statearr_12421;
})();
var statearr_12424_13413 = state_12418__$1;
(statearr_12424_13413[(2)] = null);

(statearr_12424_13413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12419 === (4))){
var inst_12392 = (state_12418[(8)]);
var inst_12392__$1 = (state_12418[(2)]);
var inst_12393 = (inst_12392__$1 == null);
var inst_12394 = cljs.core.not(inst_12393);
var state_12418__$1 = (function (){var statearr_12427 = state_12418;
(statearr_12427[(8)] = inst_12392__$1);

return statearr_12427;
})();
if(inst_12394){
var statearr_12430_13414 = state_12418__$1;
(statearr_12430_13414[(1)] = (5));

} else {
var statearr_12431_13415 = state_12418__$1;
(statearr_12431_13415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12419 === (6))){
var state_12418__$1 = state_12418;
var statearr_12432_13416 = state_12418__$1;
(statearr_12432_13416[(2)] = null);

(statearr_12432_13416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12419 === (3))){
var inst_12409 = (state_12418[(2)]);
var inst_12410 = cljs.core.async.close_BANG_(out);
var state_12418__$1 = (function (){var statearr_12433 = state_12418;
(statearr_12433[(9)] = inst_12409);

return statearr_12433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12418__$1,inst_12410);
} else {
if((state_val_12419 === (2))){
var state_12418__$1 = state_12418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12418__$1,(4),ch);
} else {
if((state_val_12419 === (11))){
var inst_12392 = (state_12418[(8)]);
var inst_12401 = (state_12418[(2)]);
var inst_12389 = inst_12392;
var state_12418__$1 = (function (){var statearr_12434 = state_12418;
(statearr_12434[(10)] = inst_12401);

(statearr_12434[(7)] = inst_12389);

return statearr_12434;
})();
var statearr_12435_13417 = state_12418__$1;
(statearr_12435_13417[(2)] = null);

(statearr_12435_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12419 === (9))){
var inst_12392 = (state_12418[(8)]);
var state_12418__$1 = state_12418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12418__$1,(11),out,inst_12392);
} else {
if((state_val_12419 === (5))){
var inst_12389 = (state_12418[(7)]);
var inst_12392 = (state_12418[(8)]);
var inst_12396 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12392,inst_12389);
var state_12418__$1 = state_12418;
if(inst_12396){
var statearr_12437_13418 = state_12418__$1;
(statearr_12437_13418[(1)] = (8));

} else {
var statearr_12438_13419 = state_12418__$1;
(statearr_12438_13419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12419 === (10))){
var inst_12404 = (state_12418[(2)]);
var state_12418__$1 = state_12418;
var statearr_12439_13420 = state_12418__$1;
(statearr_12439_13420[(2)] = inst_12404);

(statearr_12439_13420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12419 === (8))){
var inst_12389 = (state_12418[(7)]);
var tmp12436 = inst_12389;
var inst_12389__$1 = tmp12436;
var state_12418__$1 = (function (){var statearr_12440 = state_12418;
(statearr_12440[(7)] = inst_12389__$1);

return statearr_12440;
})();
var statearr_12441_13421 = state_12418__$1;
(statearr_12441_13421[(2)] = null);

(statearr_12441_13421[(1)] = (2));


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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_12442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12442[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_12442[(1)] = (1));

return statearr_12442;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_12418){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_12418);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e12449){var ex__10590__auto__ = e12449;
var statearr_12450_13422 = state_12418;
(statearr_12450_13422[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_12418[(4)]))){
var statearr_12451_13423 = state_12418;
(statearr_12451_13423[(1)] = cljs.core.first((state_12418[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13424 = state_12418;
state_12418 = G__13424;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_12418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_12418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_12452 = f__10656__auto__();
(statearr_12452[(6)] = c__10655__auto___13411);

return statearr_12452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12454 = arguments.length;
switch (G__12454) {
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
var c__10655__auto___13426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_12497){
var state_val_12498 = (state_12497[(1)]);
if((state_val_12498 === (7))){
var inst_12493 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12499_13427 = state_12497__$1;
(statearr_12499_13427[(2)] = inst_12493);

(statearr_12499_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (1))){
var inst_12459 = (new Array(n));
var inst_12460 = inst_12459;
var inst_12461 = (0);
var state_12497__$1 = (function (){var statearr_12500 = state_12497;
(statearr_12500[(7)] = inst_12460);

(statearr_12500[(8)] = inst_12461);

return statearr_12500;
})();
var statearr_12501_13428 = state_12497__$1;
(statearr_12501_13428[(2)] = null);

(statearr_12501_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (4))){
var inst_12465 = (state_12497[(9)]);
var inst_12465__$1 = (state_12497[(2)]);
var inst_12466 = (inst_12465__$1 == null);
var inst_12467 = cljs.core.not(inst_12466);
var state_12497__$1 = (function (){var statearr_12502 = state_12497;
(statearr_12502[(9)] = inst_12465__$1);

return statearr_12502;
})();
if(inst_12467){
var statearr_12503_13429 = state_12497__$1;
(statearr_12503_13429[(1)] = (5));

} else {
var statearr_12504_13430 = state_12497__$1;
(statearr_12504_13430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (15))){
var inst_12487 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12505_13431 = state_12497__$1;
(statearr_12505_13431[(2)] = inst_12487);

(statearr_12505_13431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (13))){
var state_12497__$1 = state_12497;
var statearr_12506_13432 = state_12497__$1;
(statearr_12506_13432[(2)] = null);

(statearr_12506_13432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (6))){
var inst_12461 = (state_12497[(8)]);
var inst_12483 = (inst_12461 > (0));
var state_12497__$1 = state_12497;
if(cljs.core.truth_(inst_12483)){
var statearr_12507_13433 = state_12497__$1;
(statearr_12507_13433[(1)] = (12));

} else {
var statearr_12508_13434 = state_12497__$1;
(statearr_12508_13434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (3))){
var inst_12495 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12497__$1,inst_12495);
} else {
if((state_val_12498 === (12))){
var inst_12460 = (state_12497[(7)]);
var inst_12485 = cljs.core.vec(inst_12460);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12497__$1,(15),out,inst_12485);
} else {
if((state_val_12498 === (2))){
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12497__$1,(4),ch);
} else {
if((state_val_12498 === (11))){
var inst_12477 = (state_12497[(2)]);
var inst_12478 = (new Array(n));
var inst_12460 = inst_12478;
var inst_12461 = (0);
var state_12497__$1 = (function (){var statearr_12512 = state_12497;
(statearr_12512[(7)] = inst_12460);

(statearr_12512[(8)] = inst_12461);

(statearr_12512[(10)] = inst_12477);

return statearr_12512;
})();
var statearr_12513_13435 = state_12497__$1;
(statearr_12513_13435[(2)] = null);

(statearr_12513_13435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (9))){
var inst_12460 = (state_12497[(7)]);
var inst_12475 = cljs.core.vec(inst_12460);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12497__$1,(11),out,inst_12475);
} else {
if((state_val_12498 === (5))){
var inst_12460 = (state_12497[(7)]);
var inst_12461 = (state_12497[(8)]);
var inst_12465 = (state_12497[(9)]);
var inst_12470 = (state_12497[(11)]);
var inst_12469 = (inst_12460[inst_12461] = inst_12465);
var inst_12470__$1 = (inst_12461 + (1));
var inst_12471 = (inst_12470__$1 < n);
var state_12497__$1 = (function (){var statearr_12519 = state_12497;
(statearr_12519[(12)] = inst_12469);

(statearr_12519[(11)] = inst_12470__$1);

return statearr_12519;
})();
if(cljs.core.truth_(inst_12471)){
var statearr_12520_13436 = state_12497__$1;
(statearr_12520_13436[(1)] = (8));

} else {
var statearr_12521_13437 = state_12497__$1;
(statearr_12521_13437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (14))){
var inst_12490 = (state_12497[(2)]);
var inst_12491 = cljs.core.async.close_BANG_(out);
var state_12497__$1 = (function (){var statearr_12523 = state_12497;
(statearr_12523[(13)] = inst_12490);

return statearr_12523;
})();
var statearr_12524_13438 = state_12497__$1;
(statearr_12524_13438[(2)] = inst_12491);

(statearr_12524_13438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (10))){
var inst_12481 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12525_13439 = state_12497__$1;
(statearr_12525_13439[(2)] = inst_12481);

(statearr_12525_13439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (8))){
var inst_12460 = (state_12497[(7)]);
var inst_12470 = (state_12497[(11)]);
var tmp12522 = inst_12460;
var inst_12460__$1 = tmp12522;
var inst_12461 = inst_12470;
var state_12497__$1 = (function (){var statearr_12526 = state_12497;
(statearr_12526[(7)] = inst_12460__$1);

(statearr_12526[(8)] = inst_12461);

return statearr_12526;
})();
var statearr_12527_13440 = state_12497__$1;
(statearr_12527_13440[(2)] = null);

(statearr_12527_13440[(1)] = (2));


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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_12528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12528[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_12528[(1)] = (1));

return statearr_12528;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_12497){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_12497);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e12530){var ex__10590__auto__ = e12530;
var statearr_12531_13441 = state_12497;
(statearr_12531_13441[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_12497[(4)]))){
var statearr_12532_13442 = state_12497;
(statearr_12532_13442[(1)] = cljs.core.first((state_12497[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13443 = state_12497;
state_12497 = G__13443;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_12497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_12497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_12535 = f__10656__auto__();
(statearr_12535[(6)] = c__10655__auto___13426);

return statearr_12535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12537 = arguments.length;
switch (G__12537) {
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
var c__10655__auto___13445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10656__auto__ = (function (){var switch__10586__auto__ = (function (state_12591){
var state_val_12592 = (state_12591[(1)]);
if((state_val_12592 === (7))){
var inst_12587 = (state_12591[(2)]);
var state_12591__$1 = state_12591;
var statearr_12593_13446 = state_12591__$1;
(statearr_12593_13446[(2)] = inst_12587);

(statearr_12593_13446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (1))){
var inst_12538 = [];
var inst_12539 = inst_12538;
var inst_12540 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12591__$1 = (function (){var statearr_12596 = state_12591;
(statearr_12596[(7)] = inst_12539);

(statearr_12596[(8)] = inst_12540);

return statearr_12596;
})();
var statearr_12597_13447 = state_12591__$1;
(statearr_12597_13447[(2)] = null);

(statearr_12597_13447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (4))){
var inst_12543 = (state_12591[(9)]);
var inst_12543__$1 = (state_12591[(2)]);
var inst_12544 = (inst_12543__$1 == null);
var inst_12545 = cljs.core.not(inst_12544);
var state_12591__$1 = (function (){var statearr_12607 = state_12591;
(statearr_12607[(9)] = inst_12543__$1);

return statearr_12607;
})();
if(inst_12545){
var statearr_12608_13448 = state_12591__$1;
(statearr_12608_13448[(1)] = (5));

} else {
var statearr_12609_13449 = state_12591__$1;
(statearr_12609_13449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (15))){
var inst_12581 = (state_12591[(2)]);
var state_12591__$1 = state_12591;
var statearr_12610_13450 = state_12591__$1;
(statearr_12610_13450[(2)] = inst_12581);

(statearr_12610_13450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (13))){
var state_12591__$1 = state_12591;
var statearr_12611_13451 = state_12591__$1;
(statearr_12611_13451[(2)] = null);

(statearr_12611_13451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (6))){
var inst_12539 = (state_12591[(7)]);
var inst_12576 = inst_12539.length;
var inst_12577 = (inst_12576 > (0));
var state_12591__$1 = state_12591;
if(cljs.core.truth_(inst_12577)){
var statearr_12613_13452 = state_12591__$1;
(statearr_12613_13452[(1)] = (12));

} else {
var statearr_12614_13453 = state_12591__$1;
(statearr_12614_13453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (3))){
var inst_12589 = (state_12591[(2)]);
var state_12591__$1 = state_12591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12591__$1,inst_12589);
} else {
if((state_val_12592 === (12))){
var inst_12539 = (state_12591[(7)]);
var inst_12579 = cljs.core.vec(inst_12539);
var state_12591__$1 = state_12591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12591__$1,(15),out,inst_12579);
} else {
if((state_val_12592 === (2))){
var state_12591__$1 = state_12591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12591__$1,(4),ch);
} else {
if((state_val_12592 === (11))){
var inst_12543 = (state_12591[(9)]);
var inst_12559 = (state_12591[(10)]);
var inst_12569 = (state_12591[(2)]);
var inst_12570 = [];
var inst_12571 = inst_12570.push(inst_12543);
var inst_12539 = inst_12570;
var inst_12540 = inst_12559;
var state_12591__$1 = (function (){var statearr_12617 = state_12591;
(statearr_12617[(7)] = inst_12539);

(statearr_12617[(11)] = inst_12569);

(statearr_12617[(8)] = inst_12540);

(statearr_12617[(12)] = inst_12571);

return statearr_12617;
})();
var statearr_12618_13454 = state_12591__$1;
(statearr_12618_13454[(2)] = null);

(statearr_12618_13454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (9))){
var inst_12539 = (state_12591[(7)]);
var inst_12567 = cljs.core.vec(inst_12539);
var state_12591__$1 = state_12591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12591__$1,(11),out,inst_12567);
} else {
if((state_val_12592 === (5))){
var inst_12543 = (state_12591[(9)]);
var inst_12559 = (state_12591[(10)]);
var inst_12540 = (state_12591[(8)]);
var inst_12559__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12543) : f.call(null,inst_12543));
var inst_12560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12559__$1,inst_12540);
var inst_12561 = cljs.core.keyword_identical_QMARK_(inst_12540,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12562 = ((inst_12560) || (inst_12561));
var state_12591__$1 = (function (){var statearr_12621 = state_12591;
(statearr_12621[(10)] = inst_12559__$1);

return statearr_12621;
})();
if(cljs.core.truth_(inst_12562)){
var statearr_12622_13455 = state_12591__$1;
(statearr_12622_13455[(1)] = (8));

} else {
var statearr_12623_13456 = state_12591__$1;
(statearr_12623_13456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (14))){
var inst_12584 = (state_12591[(2)]);
var inst_12585 = cljs.core.async.close_BANG_(out);
var state_12591__$1 = (function (){var statearr_12625 = state_12591;
(statearr_12625[(13)] = inst_12584);

return statearr_12625;
})();
var statearr_12626_13457 = state_12591__$1;
(statearr_12626_13457[(2)] = inst_12585);

(statearr_12626_13457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (10))){
var inst_12574 = (state_12591[(2)]);
var state_12591__$1 = state_12591;
var statearr_12627_13458 = state_12591__$1;
(statearr_12627_13458[(2)] = inst_12574);

(statearr_12627_13458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (8))){
var inst_12539 = (state_12591[(7)]);
var inst_12543 = (state_12591[(9)]);
var inst_12559 = (state_12591[(10)]);
var inst_12564 = inst_12539.push(inst_12543);
var tmp12624 = inst_12539;
var inst_12539__$1 = tmp12624;
var inst_12540 = inst_12559;
var state_12591__$1 = (function (){var statearr_12628 = state_12591;
(statearr_12628[(7)] = inst_12539__$1);

(statearr_12628[(8)] = inst_12540);

(statearr_12628[(14)] = inst_12564);

return statearr_12628;
})();
var statearr_12629_13459 = state_12591__$1;
(statearr_12629_13459[(2)] = null);

(statearr_12629_13459[(1)] = (2));


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
var cljs$core$async$state_machine__10587__auto__ = null;
var cljs$core$async$state_machine__10587__auto____0 = (function (){
var statearr_12630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12630[(0)] = cljs$core$async$state_machine__10587__auto__);

(statearr_12630[(1)] = (1));

return statearr_12630;
});
var cljs$core$async$state_machine__10587__auto____1 = (function (state_12591){
while(true){
var ret_value__10588__auto__ = (function (){try{while(true){
var result__10589__auto__ = switch__10586__auto__(state_12591);
if(cljs.core.keyword_identical_QMARK_(result__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10589__auto__;
}
break;
}
}catch (e12631){var ex__10590__auto__ = e12631;
var statearr_12632_13460 = state_12591;
(statearr_12632_13460[(2)] = ex__10590__auto__);


if(cljs.core.seq((state_12591[(4)]))){
var statearr_12633_13461 = state_12591;
(statearr_12633_13461[(1)] = cljs.core.first((state_12591[(4)])));

} else {
throw ex__10590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13462 = state_12591;
state_12591 = G__13462;
continue;
} else {
return ret_value__10588__auto__;
}
break;
}
});
cljs$core$async$state_machine__10587__auto__ = function(state_12591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10587__auto____1.call(this,state_12591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10587__auto____0;
cljs$core$async$state_machine__10587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10587__auto____1;
return cljs$core$async$state_machine__10587__auto__;
})()
})();
var state__10657__auto__ = (function (){var statearr_12634 = f__10656__auto__();
(statearr_12634[(6)] = c__10655__auto___13445);

return statearr_12634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10657__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
