goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10728 = arguments.length;
switch (G__10728) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10729 = (function (f,blockable,meta10730){
this.f = f;
this.blockable = blockable;
this.meta10730 = meta10730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10731,meta10730__$1){
var self__ = this;
var _10731__$1 = this;
return (new cljs.core.async.t_cljs$core$async10729(self__.f,self__.blockable,meta10730__$1));
}));

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10731){
var self__ = this;
var _10731__$1 = this;
return self__.meta10730;
}));

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10730","meta10730",-67940849,null)], null);
}));

(cljs.core.async.t_cljs$core$async10729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10729");

(cljs.core.async.t_cljs$core$async10729.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10729.
 */
cljs.core.async.__GT_t_cljs$core$async10729 = (function cljs$core$async$__GT_t_cljs$core$async10729(f__$1,blockable__$1,meta10730){
return (new cljs.core.async.t_cljs$core$async10729(f__$1,blockable__$1,meta10730));
});

}

return (new cljs.core.async.t_cljs$core$async10729(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10739 = arguments.length;
switch (G__10739) {
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
var G__10748 = arguments.length;
switch (G__10748) {
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
var val_12742 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12742) : fn1.call(null,val_12742));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12742) : fn1.call(null,val_12742));
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
var G__10767 = arguments.length;
switch (G__10767) {
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
var n__4613__auto___12770 = n;
var x_12772 = (0);
while(true){
if((x_12772 < n__4613__auto___12770)){
(a[x_12772] = x_12772);

var G__12774 = (x_12772 + (1));
x_12772 = G__12774;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10768 = (function (flag,meta10769){
this.flag = flag;
this.meta10769 = meta10769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10770,meta10769__$1){
var self__ = this;
var _10770__$1 = this;
return (new cljs.core.async.t_cljs$core$async10768(self__.flag,meta10769__$1));
}));

(cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10770){
var self__ = this;
var _10770__$1 = this;
return self__.meta10769;
}));

(cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10769","meta10769",-1127489056,null)], null);
}));

(cljs.core.async.t_cljs$core$async10768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10768");

(cljs.core.async.t_cljs$core$async10768.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10768.
 */
cljs.core.async.__GT_t_cljs$core$async10768 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10768(flag__$1,meta10769){
return (new cljs.core.async.t_cljs$core$async10768(flag__$1,meta10769));
});

}

return (new cljs.core.async.t_cljs$core$async10768(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10778 = (function (flag,cb,meta10779){
this.flag = flag;
this.cb = cb;
this.meta10779 = meta10779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10780,meta10779__$1){
var self__ = this;
var _10780__$1 = this;
return (new cljs.core.async.t_cljs$core$async10778(self__.flag,self__.cb,meta10779__$1));
}));

(cljs.core.async.t_cljs$core$async10778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10780){
var self__ = this;
var _10780__$1 = this;
return self__.meta10779;
}));

(cljs.core.async.t_cljs$core$async10778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10779","meta10779",-61930651,null)], null);
}));

(cljs.core.async.t_cljs$core$async10778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10778");

(cljs.core.async.t_cljs$core$async10778.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10778.
 */
cljs.core.async.__GT_t_cljs$core$async10778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10778(flag__$1,cb__$1,meta10779){
return (new cljs.core.async.t_cljs$core$async10778(flag__$1,cb__$1,meta10779));
});

}

return (new cljs.core.async.t_cljs$core$async10778(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10784_SHARP_){
var G__10786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10784_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10786) : fret.call(null,G__10786));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10785_SHARP_){
var G__10787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10785_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10787) : fret.call(null,G__10787));
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
var G__12786 = (i + (1));
i = G__12786;
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
var len__4736__auto___12787 = arguments.length;
var i__4737__auto___12788 = (0);
while(true){
if((i__4737__auto___12788 < len__4736__auto___12787)){
args__4742__auto__.push((arguments[i__4737__auto___12788]));

var G__12789 = (i__4737__auto___12788 + (1));
i__4737__auto___12788 = G__12789;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10797){
var map__10798 = p__10797;
var map__10798__$1 = (((((!((map__10798 == null))))?(((((map__10798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10798):map__10798);
var opts = map__10798__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10788){
var G__10790 = cljs.core.first(seq10788);
var seq10788__$1 = cljs.core.next(seq10788);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10790,seq10788__$1);
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
var G__10805 = arguments.length;
switch (G__10805) {
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
var c__10670__auto___12791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_10842){
var state_val_10843 = (state_10842[(1)]);
if((state_val_10843 === (7))){
var inst_10833 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10844_12792 = state_10842__$1;
(statearr_10844_12792[(2)] = inst_10833);

(statearr_10844_12792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (1))){
var state_10842__$1 = state_10842;
var statearr_10845_12794 = state_10842__$1;
(statearr_10845_12794[(2)] = null);

(statearr_10845_12794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (4))){
var inst_10811 = (state_10842[(7)]);
var inst_10811__$1 = (state_10842[(2)]);
var inst_10815 = (inst_10811__$1 == null);
var state_10842__$1 = (function (){var statearr_10846 = state_10842;
(statearr_10846[(7)] = inst_10811__$1);

return statearr_10846;
})();
if(cljs.core.truth_(inst_10815)){
var statearr_10847_12796 = state_10842__$1;
(statearr_10847_12796[(1)] = (5));

} else {
var statearr_10848_12797 = state_10842__$1;
(statearr_10848_12797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (13))){
var state_10842__$1 = state_10842;
var statearr_10849_12798 = state_10842__$1;
(statearr_10849_12798[(2)] = null);

(statearr_10849_12798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (6))){
var inst_10811 = (state_10842[(7)]);
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10842__$1,(11),to,inst_10811);
} else {
if((state_val_10843 === (3))){
var inst_10837 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10842__$1,inst_10837);
} else {
if((state_val_10843 === (12))){
var state_10842__$1 = state_10842;
var statearr_10851_12799 = state_10842__$1;
(statearr_10851_12799[(2)] = null);

(statearr_10851_12799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (2))){
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10842__$1,(4),from);
} else {
if((state_val_10843 === (11))){
var inst_10825 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
if(cljs.core.truth_(inst_10825)){
var statearr_10855_12800 = state_10842__$1;
(statearr_10855_12800[(1)] = (12));

} else {
var statearr_10857_12801 = state_10842__$1;
(statearr_10857_12801[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (9))){
var state_10842__$1 = state_10842;
var statearr_10859_12802 = state_10842__$1;
(statearr_10859_12802[(2)] = null);

(statearr_10859_12802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (5))){
var state_10842__$1 = state_10842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10862_12803 = state_10842__$1;
(statearr_10862_12803[(1)] = (8));

} else {
var statearr_10863_12804 = state_10842__$1;
(statearr_10863_12804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (14))){
var inst_10831 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10864_12805 = state_10842__$1;
(statearr_10864_12805[(2)] = inst_10831);

(statearr_10864_12805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (10))){
var inst_10822 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10865_12806 = state_10842__$1;
(statearr_10865_12806[(2)] = inst_10822);

(statearr_10865_12806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (8))){
var inst_10819 = cljs.core.async.close_BANG_(to);
var state_10842__$1 = state_10842;
var statearr_10867_12807 = state_10842__$1;
(statearr_10867_12807[(2)] = inst_10819);

(statearr_10867_12807[(1)] = (10));


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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_10869 = [null,null,null,null,null,null,null,null];
(statearr_10869[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_10869[(1)] = (1));

return statearr_10869;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_10842){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_10842);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e10870){var ex__10616__auto__ = e10870;
var statearr_10871_12813 = state_10842;
(statearr_10871_12813[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_10842[(4)]))){
var statearr_10872_12814 = state_10842;
(statearr_10872_12814[(1)] = cljs.core.first((state_10842[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12816 = state_10842;
state_10842 = G__12816;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_10842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_10842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_10875 = f__10671__auto__();
(statearr_10875[(6)] = c__10670__auto___12791);

return statearr_10875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var process = (function (p__10879){
var vec__10880 = p__10879;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10880,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10880,(1),null);
var job = vec__10880;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10670__auto___12818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_10887){
var state_val_10888 = (state_10887[(1)]);
if((state_val_10888 === (1))){
var state_10887__$1 = state_10887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10887__$1,(2),res,v);
} else {
if((state_val_10888 === (2))){
var inst_10884 = (state_10887[(2)]);
var inst_10885 = cljs.core.async.close_BANG_(res);
var state_10887__$1 = (function (){var statearr_10889 = state_10887;
(statearr_10889[(7)] = inst_10884);

return statearr_10889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10887__$1,inst_10885);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0 = (function (){
var statearr_10890 = [null,null,null,null,null,null,null,null];
(statearr_10890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__);

(statearr_10890[(1)] = (1));

return statearr_10890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1 = (function (state_10887){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_10887);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e10891){var ex__10616__auto__ = e10891;
var statearr_10892_12819 = state_10887;
(statearr_10892_12819[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_10887[(4)]))){
var statearr_10893_12820 = state_10887;
(statearr_10893_12820[(1)] = cljs.core.first((state_10887[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12821 = state_10887;
state_10887 = G__12821;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = function(state_10887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1.call(this,state_10887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_10894 = f__10671__auto__();
(statearr_10894[(6)] = c__10670__auto___12818);

return statearr_10894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__10895){
var vec__10896 = p__10895;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10896,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10896,(1),null);
var job = vec__10896;
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
var n__4613__auto___12823 = n;
var __12824 = (0);
while(true){
if((__12824 < n__4613__auto___12823)){
var G__10900_12825 = type;
var G__10900_12826__$1 = (((G__10900_12825 instanceof cljs.core.Keyword))?G__10900_12825.fqn:null);
switch (G__10900_12826__$1) {
case "compute":
var c__10670__auto___12828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12824,c__10670__auto___12828,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async){
return (function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = ((function (__12824,c__10670__auto___12828,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async){
return (function (state_10916){
var state_val_10917 = (state_10916[(1)]);
if((state_val_10917 === (1))){
var state_10916__$1 = state_10916;
var statearr_10921_12829 = state_10916__$1;
(statearr_10921_12829[(2)] = null);

(statearr_10921_12829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10917 === (2))){
var state_10916__$1 = state_10916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10916__$1,(4),jobs);
} else {
if((state_val_10917 === (3))){
var inst_10913 = (state_10916[(2)]);
var state_10916__$1 = state_10916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10916__$1,inst_10913);
} else {
if((state_val_10917 === (4))){
var inst_10904 = (state_10916[(2)]);
var inst_10906 = process(inst_10904);
var state_10916__$1 = state_10916;
if(cljs.core.truth_(inst_10906)){
var statearr_10923_12847 = state_10916__$1;
(statearr_10923_12847[(1)] = (5));

} else {
var statearr_10924_12848 = state_10916__$1;
(statearr_10924_12848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10917 === (5))){
var state_10916__$1 = state_10916;
var statearr_10926_12849 = state_10916__$1;
(statearr_10926_12849[(2)] = null);

(statearr_10926_12849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10917 === (6))){
var state_10916__$1 = state_10916;
var statearr_10928_12850 = state_10916__$1;
(statearr_10928_12850[(2)] = null);

(statearr_10928_12850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10917 === (7))){
var inst_10911 = (state_10916[(2)]);
var state_10916__$1 = state_10916;
var statearr_10929_12852 = state_10916__$1;
(statearr_10929_12852[(2)] = inst_10911);

(statearr_10929_12852[(1)] = (3));


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
});})(__12824,c__10670__auto___12828,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async))
;
return ((function (__12824,switch__10612__auto__,c__10670__auto___12828,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0 = (function (){
var statearr_10932 = [null,null,null,null,null,null,null];
(statearr_10932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__);

(statearr_10932[(1)] = (1));

return statearr_10932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1 = (function (state_10916){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_10916);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e10934){var ex__10616__auto__ = e10934;
var statearr_10935_12857 = state_10916;
(statearr_10935_12857[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_10916[(4)]))){
var statearr_10936_12859 = state_10916;
(statearr_10936_12859[(1)] = cljs.core.first((state_10916[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12860 = state_10916;
state_10916 = G__12860;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = function(state_10916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1.call(this,state_10916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__;
})()
;})(__12824,switch__10612__auto__,c__10670__auto___12828,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async))
})();
var state__10672__auto__ = (function (){var statearr_10938 = f__10671__auto__();
(statearr_10938[(6)] = c__10670__auto___12828);

return statearr_10938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
});})(__12824,c__10670__auto___12828,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async))
);


break;
case "async":
var c__10670__auto___12861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12824,c__10670__auto___12861,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async){
return (function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = ((function (__12824,c__10670__auto___12861,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async){
return (function (state_10951){
var state_val_10952 = (state_10951[(1)]);
if((state_val_10952 === (1))){
var state_10951__$1 = state_10951;
var statearr_10953_12865 = state_10951__$1;
(statearr_10953_12865[(2)] = null);

(statearr_10953_12865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (2))){
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10951__$1,(4),jobs);
} else {
if((state_val_10952 === (3))){
var inst_10949 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10951__$1,inst_10949);
} else {
if((state_val_10952 === (4))){
var inst_10941 = (state_10951[(2)]);
var inst_10942 = async(inst_10941);
var state_10951__$1 = state_10951;
if(cljs.core.truth_(inst_10942)){
var statearr_10954_12868 = state_10951__$1;
(statearr_10954_12868[(1)] = (5));

} else {
var statearr_10955_12869 = state_10951__$1;
(statearr_10955_12869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (5))){
var state_10951__$1 = state_10951;
var statearr_10956_12870 = state_10951__$1;
(statearr_10956_12870[(2)] = null);

(statearr_10956_12870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (6))){
var state_10951__$1 = state_10951;
var statearr_10957_12872 = state_10951__$1;
(statearr_10957_12872[(2)] = null);

(statearr_10957_12872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (7))){
var inst_10947 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_10958_12873 = state_10951__$1;
(statearr_10958_12873[(2)] = inst_10947);

(statearr_10958_12873[(1)] = (3));


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
});})(__12824,c__10670__auto___12861,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async))
;
return ((function (__12824,switch__10612__auto__,c__10670__auto___12861,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0 = (function (){
var statearr_10959 = [null,null,null,null,null,null,null];
(statearr_10959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__);

(statearr_10959[(1)] = (1));

return statearr_10959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1 = (function (state_10951){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_10951);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e10960){var ex__10616__auto__ = e10960;
var statearr_10961_12878 = state_10951;
(statearr_10961_12878[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_10951[(4)]))){
var statearr_10962_12879 = state_10951;
(statearr_10962_12879[(1)] = cljs.core.first((state_10951[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12880 = state_10951;
state_10951 = G__12880;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = function(state_10951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1.call(this,state_10951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__;
})()
;})(__12824,switch__10612__auto__,c__10670__auto___12861,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async))
})();
var state__10672__auto__ = (function (){var statearr_10963 = f__10671__auto__();
(statearr_10963[(6)] = c__10670__auto___12861);

return statearr_10963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
});})(__12824,c__10670__auto___12861,G__10900_12825,G__10900_12826__$1,n__4613__auto___12823,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10900_12826__$1)].join('')));

}

var G__12881 = (__12824 + (1));
__12824 = G__12881;
continue;
} else {
}
break;
}

var c__10670__auto___12910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_10985){
var state_val_10986 = (state_10985[(1)]);
if((state_val_10986 === (7))){
var inst_10981 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
var statearr_10987_12911 = state_10985__$1;
(statearr_10987_12911[(2)] = inst_10981);

(statearr_10987_12911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (1))){
var state_10985__$1 = state_10985;
var statearr_10988_12912 = state_10985__$1;
(statearr_10988_12912[(2)] = null);

(statearr_10988_12912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (4))){
var inst_10966 = (state_10985[(7)]);
var inst_10966__$1 = (state_10985[(2)]);
var inst_10967 = (inst_10966__$1 == null);
var state_10985__$1 = (function (){var statearr_10989 = state_10985;
(statearr_10989[(7)] = inst_10966__$1);

return statearr_10989;
})();
if(cljs.core.truth_(inst_10967)){
var statearr_10990_12913 = state_10985__$1;
(statearr_10990_12913[(1)] = (5));

} else {
var statearr_10993_12914 = state_10985__$1;
(statearr_10993_12914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (6))){
var inst_10966 = (state_10985[(7)]);
var inst_10971 = (state_10985[(8)]);
var inst_10971__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10972 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10973 = [inst_10966,inst_10971__$1];
var inst_10974 = (new cljs.core.PersistentVector(null,2,(5),inst_10972,inst_10973,null));
var state_10985__$1 = (function (){var statearr_10997 = state_10985;
(statearr_10997[(8)] = inst_10971__$1);

return statearr_10997;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10985__$1,(8),jobs,inst_10974);
} else {
if((state_val_10986 === (3))){
var inst_10983 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10985__$1,inst_10983);
} else {
if((state_val_10986 === (2))){
var state_10985__$1 = state_10985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10985__$1,(4),from);
} else {
if((state_val_10986 === (9))){
var inst_10978 = (state_10985[(2)]);
var state_10985__$1 = (function (){var statearr_10998 = state_10985;
(statearr_10998[(9)] = inst_10978);

return statearr_10998;
})();
var statearr_10999_12915 = state_10985__$1;
(statearr_10999_12915[(2)] = null);

(statearr_10999_12915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (5))){
var inst_10969 = cljs.core.async.close_BANG_(jobs);
var state_10985__$1 = state_10985;
var statearr_11003_12916 = state_10985__$1;
(statearr_11003_12916[(2)] = inst_10969);

(statearr_11003_12916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (8))){
var inst_10971 = (state_10985[(8)]);
var inst_10976 = (state_10985[(2)]);
var state_10985__$1 = (function (){var statearr_11005 = state_10985;
(statearr_11005[(10)] = inst_10976);

return statearr_11005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10985__$1,(9),results,inst_10971);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0 = (function (){
var statearr_11006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11006[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__);

(statearr_11006[(1)] = (1));

return statearr_11006;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1 = (function (state_10985){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_10985);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e11007){var ex__10616__auto__ = e11007;
var statearr_11008_12917 = state_10985;
(statearr_11008_12917[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_10985[(4)]))){
var statearr_11009_12918 = state_10985;
(statearr_11009_12918[(1)] = cljs.core.first((state_10985[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12919 = state_10985;
state_10985 = G__12919;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = function(state_10985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1.call(this,state_10985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11010 = f__10671__auto__();
(statearr_11010[(6)] = c__10670__auto___12910);

return statearr_11010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_11048){
var state_val_11049 = (state_11048[(1)]);
if((state_val_11049 === (7))){
var inst_11044 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11050_12920 = state_11048__$1;
(statearr_11050_12920[(2)] = inst_11044);

(statearr_11050_12920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (20))){
var state_11048__$1 = state_11048;
var statearr_11051_12921 = state_11048__$1;
(statearr_11051_12921[(2)] = null);

(statearr_11051_12921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (1))){
var state_11048__$1 = state_11048;
var statearr_11052_12922 = state_11048__$1;
(statearr_11052_12922[(2)] = null);

(statearr_11052_12922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (4))){
var inst_11013 = (state_11048[(7)]);
var inst_11013__$1 = (state_11048[(2)]);
var inst_11014 = (inst_11013__$1 == null);
var state_11048__$1 = (function (){var statearr_11053 = state_11048;
(statearr_11053[(7)] = inst_11013__$1);

return statearr_11053;
})();
if(cljs.core.truth_(inst_11014)){
var statearr_11054_12923 = state_11048__$1;
(statearr_11054_12923[(1)] = (5));

} else {
var statearr_11055_12924 = state_11048__$1;
(statearr_11055_12924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (15))){
var inst_11026 = (state_11048[(8)]);
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11048__$1,(18),to,inst_11026);
} else {
if((state_val_11049 === (21))){
var inst_11039 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11056_12925 = state_11048__$1;
(statearr_11056_12925[(2)] = inst_11039);

(statearr_11056_12925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (13))){
var inst_11041 = (state_11048[(2)]);
var state_11048__$1 = (function (){var statearr_11057 = state_11048;
(statearr_11057[(9)] = inst_11041);

return statearr_11057;
})();
var statearr_11058_12926 = state_11048__$1;
(statearr_11058_12926[(2)] = null);

(statearr_11058_12926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (6))){
var inst_11013 = (state_11048[(7)]);
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11048__$1,(11),inst_11013);
} else {
if((state_val_11049 === (17))){
var inst_11034 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_11034)){
var statearr_11059_12927 = state_11048__$1;
(statearr_11059_12927[(1)] = (19));

} else {
var statearr_11064_12928 = state_11048__$1;
(statearr_11064_12928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (3))){
var inst_11046 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11048__$1,inst_11046);
} else {
if((state_val_11049 === (12))){
var inst_11023 = (state_11048[(10)]);
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11048__$1,(14),inst_11023);
} else {
if((state_val_11049 === (2))){
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11048__$1,(4),results);
} else {
if((state_val_11049 === (19))){
var state_11048__$1 = state_11048;
var statearr_11073_12930 = state_11048__$1;
(statearr_11073_12930[(2)] = null);

(statearr_11073_12930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (11))){
var inst_11023 = (state_11048[(2)]);
var state_11048__$1 = (function (){var statearr_11074 = state_11048;
(statearr_11074[(10)] = inst_11023);

return statearr_11074;
})();
var statearr_11075_12935 = state_11048__$1;
(statearr_11075_12935[(2)] = null);

(statearr_11075_12935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (9))){
var state_11048__$1 = state_11048;
var statearr_11076_12940 = state_11048__$1;
(statearr_11076_12940[(2)] = null);

(statearr_11076_12940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (5))){
var state_11048__$1 = state_11048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11079_12941 = state_11048__$1;
(statearr_11079_12941[(1)] = (8));

} else {
var statearr_11081_12946 = state_11048__$1;
(statearr_11081_12946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (14))){
var inst_11026 = (state_11048[(8)]);
var inst_11026__$1 = (state_11048[(2)]);
var inst_11027 = (inst_11026__$1 == null);
var inst_11028 = cljs.core.not(inst_11027);
var state_11048__$1 = (function (){var statearr_11083 = state_11048;
(statearr_11083[(8)] = inst_11026__$1);

return statearr_11083;
})();
if(inst_11028){
var statearr_11084_12947 = state_11048__$1;
(statearr_11084_12947[(1)] = (15));

} else {
var statearr_11085_12948 = state_11048__$1;
(statearr_11085_12948[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (16))){
var state_11048__$1 = state_11048;
var statearr_11086_12949 = state_11048__$1;
(statearr_11086_12949[(2)] = false);

(statearr_11086_12949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (10))){
var inst_11020 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11087_12950 = state_11048__$1;
(statearr_11087_12950[(2)] = inst_11020);

(statearr_11087_12950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (18))){
var inst_11031 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11088_12951 = state_11048__$1;
(statearr_11088_12951[(2)] = inst_11031);

(statearr_11088_12951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (8))){
var inst_11017 = cljs.core.async.close_BANG_(to);
var state_11048__$1 = state_11048;
var statearr_11089_12952 = state_11048__$1;
(statearr_11089_12952[(2)] = inst_11017);

(statearr_11089_12952[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0 = (function (){
var statearr_11090 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__);

(statearr_11090[(1)] = (1));

return statearr_11090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1 = (function (state_11048){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_11048);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e11091){var ex__10616__auto__ = e11091;
var statearr_11092_12953 = state_11048;
(statearr_11092_12953[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_11048[(4)]))){
var statearr_11093_12954 = state_11048;
(statearr_11093_12954[(1)] = cljs.core.first((state_11048[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12955 = state_11048;
state_11048 = G__12955;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__ = function(state_11048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1.call(this,state_11048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11094 = f__10671__auto__();
(statearr_11094[(6)] = c__10670__auto__);

return statearr_11094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
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
var G__11096 = arguments.length;
switch (G__11096) {
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
var G__11102 = arguments.length;
switch (G__11102) {
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
var G__11104 = arguments.length;
switch (G__11104) {
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
var c__10670__auto___12974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_11130){
var state_val_11131 = (state_11130[(1)]);
if((state_val_11131 === (7))){
var inst_11126 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
var statearr_11132_12975 = state_11130__$1;
(statearr_11132_12975[(2)] = inst_11126);

(statearr_11132_12975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (1))){
var state_11130__$1 = state_11130;
var statearr_11133_12976 = state_11130__$1;
(statearr_11133_12976[(2)] = null);

(statearr_11133_12976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (4))){
var inst_11107 = (state_11130[(7)]);
var inst_11107__$1 = (state_11130[(2)]);
var inst_11108 = (inst_11107__$1 == null);
var state_11130__$1 = (function (){var statearr_11134 = state_11130;
(statearr_11134[(7)] = inst_11107__$1);

return statearr_11134;
})();
if(cljs.core.truth_(inst_11108)){
var statearr_11135_12977 = state_11130__$1;
(statearr_11135_12977[(1)] = (5));

} else {
var statearr_11136_12978 = state_11130__$1;
(statearr_11136_12978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (13))){
var state_11130__$1 = state_11130;
var statearr_11137_12979 = state_11130__$1;
(statearr_11137_12979[(2)] = null);

(statearr_11137_12979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (6))){
var inst_11107 = (state_11130[(7)]);
var inst_11113 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11107) : p.call(null,inst_11107));
var state_11130__$1 = state_11130;
if(cljs.core.truth_(inst_11113)){
var statearr_11138_12980 = state_11130__$1;
(statearr_11138_12980[(1)] = (9));

} else {
var statearr_11139_12981 = state_11130__$1;
(statearr_11139_12981[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (3))){
var inst_11128 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11130__$1,inst_11128);
} else {
if((state_val_11131 === (12))){
var state_11130__$1 = state_11130;
var statearr_11140_12982 = state_11130__$1;
(statearr_11140_12982[(2)] = null);

(statearr_11140_12982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (2))){
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11130__$1,(4),ch);
} else {
if((state_val_11131 === (11))){
var inst_11107 = (state_11130[(7)]);
var inst_11117 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11130__$1,(8),inst_11117,inst_11107);
} else {
if((state_val_11131 === (9))){
var state_11130__$1 = state_11130;
var statearr_11141_12983 = state_11130__$1;
(statearr_11141_12983[(2)] = tc);

(statearr_11141_12983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (5))){
var inst_11110 = cljs.core.async.close_BANG_(tc);
var inst_11111 = cljs.core.async.close_BANG_(fc);
var state_11130__$1 = (function (){var statearr_11142 = state_11130;
(statearr_11142[(8)] = inst_11110);

return statearr_11142;
})();
var statearr_11143_12984 = state_11130__$1;
(statearr_11143_12984[(2)] = inst_11111);

(statearr_11143_12984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (14))){
var inst_11124 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
var statearr_11144_12985 = state_11130__$1;
(statearr_11144_12985[(2)] = inst_11124);

(statearr_11144_12985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (10))){
var state_11130__$1 = state_11130;
var statearr_11145_12986 = state_11130__$1;
(statearr_11145_12986[(2)] = fc);

(statearr_11145_12986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (8))){
var inst_11119 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
if(cljs.core.truth_(inst_11119)){
var statearr_11146_12987 = state_11130__$1;
(statearr_11146_12987[(1)] = (12));

} else {
var statearr_11147_12988 = state_11130__$1;
(statearr_11147_12988[(1)] = (13));

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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_11148 = [null,null,null,null,null,null,null,null,null];
(statearr_11148[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_11148[(1)] = (1));

return statearr_11148;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_11130){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_11130);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e11149){var ex__10616__auto__ = e11149;
var statearr_11150_12992 = state_11130;
(statearr_11150_12992[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_11130[(4)]))){
var statearr_11151_12993 = state_11130;
(statearr_11151_12993[(1)] = cljs.core.first((state_11130[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12996 = state_11130;
state_11130 = G__12996;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_11130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_11130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11152 = f__10671__auto__();
(statearr_11152[(6)] = c__10670__auto___12974);

return statearr_11152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_11178){
var state_val_11179 = (state_11178[(1)]);
if((state_val_11179 === (7))){
var inst_11174 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11180_13000 = state_11178__$1;
(statearr_11180_13000[(2)] = inst_11174);

(statearr_11180_13000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (1))){
var inst_11156 = init;
var inst_11157 = inst_11156;
var state_11178__$1 = (function (){var statearr_11181 = state_11178;
(statearr_11181[(7)] = inst_11157);

return statearr_11181;
})();
var statearr_11182_13002 = state_11178__$1;
(statearr_11182_13002[(2)] = null);

(statearr_11182_13002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (4))){
var inst_11161 = (state_11178[(8)]);
var inst_11161__$1 = (state_11178[(2)]);
var inst_11162 = (inst_11161__$1 == null);
var state_11178__$1 = (function (){var statearr_11183 = state_11178;
(statearr_11183[(8)] = inst_11161__$1);

return statearr_11183;
})();
if(cljs.core.truth_(inst_11162)){
var statearr_11184_13003 = state_11178__$1;
(statearr_11184_13003[(1)] = (5));

} else {
var statearr_11185_13004 = state_11178__$1;
(statearr_11185_13004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (6))){
var inst_11157 = (state_11178[(7)]);
var inst_11165 = (state_11178[(9)]);
var inst_11161 = (state_11178[(8)]);
var inst_11165__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11157,inst_11161) : f.call(null,inst_11157,inst_11161));
var inst_11166 = cljs.core.reduced_QMARK_(inst_11165__$1);
var state_11178__$1 = (function (){var statearr_11186 = state_11178;
(statearr_11186[(9)] = inst_11165__$1);

return statearr_11186;
})();
if(inst_11166){
var statearr_11187_13005 = state_11178__$1;
(statearr_11187_13005[(1)] = (8));

} else {
var statearr_11188_13006 = state_11178__$1;
(statearr_11188_13006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (3))){
var inst_11176 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11178__$1,inst_11176);
} else {
if((state_val_11179 === (2))){
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11178__$1,(4),ch);
} else {
if((state_val_11179 === (9))){
var inst_11165 = (state_11178[(9)]);
var inst_11157 = inst_11165;
var state_11178__$1 = (function (){var statearr_11189 = state_11178;
(statearr_11189[(7)] = inst_11157);

return statearr_11189;
})();
var statearr_11190_13007 = state_11178__$1;
(statearr_11190_13007[(2)] = null);

(statearr_11190_13007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (5))){
var inst_11157 = (state_11178[(7)]);
var state_11178__$1 = state_11178;
var statearr_11191_13008 = state_11178__$1;
(statearr_11191_13008[(2)] = inst_11157);

(statearr_11191_13008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (10))){
var inst_11172 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11192_13009 = state_11178__$1;
(statearr_11192_13009[(2)] = inst_11172);

(statearr_11192_13009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (8))){
var inst_11165 = (state_11178[(9)]);
var inst_11168 = cljs.core.deref(inst_11165);
var state_11178__$1 = state_11178;
var statearr_11193_13010 = state_11178__$1;
(statearr_11193_13010[(2)] = inst_11168);

(statearr_11193_13010[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10613__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10613__auto____0 = (function (){
var statearr_11194 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11194[(0)] = cljs$core$async$reduce_$_state_machine__10613__auto__);

(statearr_11194[(1)] = (1));

return statearr_11194;
});
var cljs$core$async$reduce_$_state_machine__10613__auto____1 = (function (state_11178){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_11178);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e11195){var ex__10616__auto__ = e11195;
var statearr_11196_13011 = state_11178;
(statearr_11196_13011[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_11178[(4)]))){
var statearr_11197_13012 = state_11178;
(statearr_11197_13012[(1)] = cljs.core.first((state_11178[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13013 = state_11178;
state_11178 = G__13013;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10613__auto__ = function(state_11178){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10613__auto____1.call(this,state_11178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10613__auto____0;
cljs$core$async$reduce_$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10613__auto____1;
return cljs$core$async$reduce_$_state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11198 = f__10671__auto__();
(statearr_11198[(6)] = c__10670__auto__);

return statearr_11198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_11204){
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
var cljs$core$async$transduce_$_state_machine__10613__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10613__auto____0 = (function (){
var statearr_11206 = [null,null,null,null,null,null,null];
(statearr_11206[(0)] = cljs$core$async$transduce_$_state_machine__10613__auto__);

(statearr_11206[(1)] = (1));

return statearr_11206;
});
var cljs$core$async$transduce_$_state_machine__10613__auto____1 = (function (state_11204){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_11204);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e11207){var ex__10616__auto__ = e11207;
var statearr_11208_13023 = state_11204;
(statearr_11208_13023[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_11204[(4)]))){
var statearr_11209_13024 = state_11204;
(statearr_11209_13024[(1)] = cljs.core.first((state_11204[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13025 = state_11204;
state_11204 = G__13025;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10613__auto__ = function(state_11204){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10613__auto____1.call(this,state_11204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10613__auto____0;
cljs$core$async$transduce_$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10613__auto____1;
return cljs$core$async$transduce_$_state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11210 = f__10671__auto__();
(statearr_11210[(6)] = c__10670__auto__);

return statearr_11210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
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
var G__11212 = arguments.length;
switch (G__11212) {
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
var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_11239){
var state_val_11240 = (state_11239[(1)]);
if((state_val_11240 === (7))){
var inst_11221 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
var statearr_11245_13027 = state_11239__$1;
(statearr_11245_13027[(2)] = inst_11221);

(statearr_11245_13027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (1))){
var inst_11213 = cljs.core.seq(coll);
var inst_11214 = inst_11213;
var state_11239__$1 = (function (){var statearr_11246 = state_11239;
(statearr_11246[(7)] = inst_11214);

return statearr_11246;
})();
var statearr_11247_13028 = state_11239__$1;
(statearr_11247_13028[(2)] = null);

(statearr_11247_13028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (4))){
var inst_11214 = (state_11239[(7)]);
var inst_11219 = cljs.core.first(inst_11214);
var state_11239__$1 = state_11239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11239__$1,(7),ch,inst_11219);
} else {
if((state_val_11240 === (13))){
var inst_11233 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
var statearr_11249_13029 = state_11239__$1;
(statearr_11249_13029[(2)] = inst_11233);

(statearr_11249_13029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (6))){
var inst_11224 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
if(cljs.core.truth_(inst_11224)){
var statearr_11252_13030 = state_11239__$1;
(statearr_11252_13030[(1)] = (8));

} else {
var statearr_11253_13031 = state_11239__$1;
(statearr_11253_13031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (3))){
var inst_11237 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11239__$1,inst_11237);
} else {
if((state_val_11240 === (12))){
var state_11239__$1 = state_11239;
var statearr_11254_13032 = state_11239__$1;
(statearr_11254_13032[(2)] = null);

(statearr_11254_13032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (2))){
var inst_11214 = (state_11239[(7)]);
var state_11239__$1 = state_11239;
if(cljs.core.truth_(inst_11214)){
var statearr_11255_13033 = state_11239__$1;
(statearr_11255_13033[(1)] = (4));

} else {
var statearr_11256_13034 = state_11239__$1;
(statearr_11256_13034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (11))){
var inst_11230 = cljs.core.async.close_BANG_(ch);
var state_11239__$1 = state_11239;
var statearr_11257_13035 = state_11239__$1;
(statearr_11257_13035[(2)] = inst_11230);

(statearr_11257_13035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (9))){
var state_11239__$1 = state_11239;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11258_13036 = state_11239__$1;
(statearr_11258_13036[(1)] = (11));

} else {
var statearr_11259_13037 = state_11239__$1;
(statearr_11259_13037[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (5))){
var inst_11214 = (state_11239[(7)]);
var state_11239__$1 = state_11239;
var statearr_11260_13038 = state_11239__$1;
(statearr_11260_13038[(2)] = inst_11214);

(statearr_11260_13038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (10))){
var inst_11235 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
var statearr_11261_13039 = state_11239__$1;
(statearr_11261_13039[(2)] = inst_11235);

(statearr_11261_13039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (8))){
var inst_11214 = (state_11239[(7)]);
var inst_11226 = cljs.core.next(inst_11214);
var inst_11214__$1 = inst_11226;
var state_11239__$1 = (function (){var statearr_11262 = state_11239;
(statearr_11262[(7)] = inst_11214__$1);

return statearr_11262;
})();
var statearr_11263_13040 = state_11239__$1;
(statearr_11263_13040[(2)] = null);

(statearr_11263_13040[(1)] = (2));


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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_11264 = [null,null,null,null,null,null,null,null];
(statearr_11264[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_11264[(1)] = (1));

return statearr_11264;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_11239){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_11239);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e11265){var ex__10616__auto__ = e11265;
var statearr_11266_13041 = state_11239;
(statearr_11266_13041[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_11239[(4)]))){
var statearr_11267_13042 = state_11239;
(statearr_11267_13042[(1)] = cljs.core.first((state_11239[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13043 = state_11239;
state_11239 = G__13043;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_11239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_11239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11268 = f__10671__auto__();
(statearr_11268[(6)] = c__10670__auto__);

return statearr_11268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
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
var G__11271 = arguments.length;
switch (G__11271) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13045 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13045(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13046 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13046(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13047 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13047(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13051 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13051(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11282 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11282 = (function (ch,cs,meta11283){
this.ch = ch;
this.cs = cs;
this.meta11283 = meta11283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11284,meta11283__$1){
var self__ = this;
var _11284__$1 = this;
return (new cljs.core.async.t_cljs$core$async11282(self__.ch,self__.cs,meta11283__$1));
}));

(cljs.core.async.t_cljs$core$async11282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11284){
var self__ = this;
var _11284__$1 = this;
return self__.meta11283;
}));

(cljs.core.async.t_cljs$core$async11282.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11282.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11282.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11282.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11282.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11283","meta11283",-810898906,null)], null);
}));

(cljs.core.async.t_cljs$core$async11282.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11282");

(cljs.core.async.t_cljs$core$async11282.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11282");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11282.
 */
cljs.core.async.__GT_t_cljs$core$async11282 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11282(ch__$1,cs__$1,meta11283){
return (new cljs.core.async.t_cljs$core$async11282(ch__$1,cs__$1,meta11283));
});

}

return (new cljs.core.async.t_cljs$core$async11282(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10670__auto___13053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_11441){
var state_val_11442 = (state_11441[(1)]);
if((state_val_11442 === (7))){
var inst_11437 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11443_13054 = state_11441__$1;
(statearr_11443_13054[(2)] = inst_11437);

(statearr_11443_13054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (20))){
var inst_11342 = (state_11441[(7)]);
var inst_11354 = cljs.core.first(inst_11342);
var inst_11355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11354,(0),null);
var inst_11356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11354,(1),null);
var state_11441__$1 = (function (){var statearr_11444 = state_11441;
(statearr_11444[(8)] = inst_11355);

return statearr_11444;
})();
if(cljs.core.truth_(inst_11356)){
var statearr_11445_13055 = state_11441__$1;
(statearr_11445_13055[(1)] = (22));

} else {
var statearr_11446_13056 = state_11441__$1;
(statearr_11446_13056[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (27))){
var inst_11292 = (state_11441[(9)]);
var inst_11391 = (state_11441[(10)]);
var inst_11384 = (state_11441[(11)]);
var inst_11386 = (state_11441[(12)]);
var inst_11391__$1 = cljs.core._nth(inst_11384,inst_11386);
var inst_11392 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11391__$1,inst_11292,done);
var state_11441__$1 = (function (){var statearr_11450 = state_11441;
(statearr_11450[(10)] = inst_11391__$1);

return statearr_11450;
})();
if(cljs.core.truth_(inst_11392)){
var statearr_11451_13057 = state_11441__$1;
(statearr_11451_13057[(1)] = (30));

} else {
var statearr_11452_13066 = state_11441__$1;
(statearr_11452_13066[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (1))){
var state_11441__$1 = state_11441;
var statearr_11453_13067 = state_11441__$1;
(statearr_11453_13067[(2)] = null);

(statearr_11453_13067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (24))){
var inst_11342 = (state_11441[(7)]);
var inst_11361 = (state_11441[(2)]);
var inst_11362 = cljs.core.next(inst_11342);
var inst_11301 = inst_11362;
var inst_11302 = null;
var inst_11303 = (0);
var inst_11304 = (0);
var state_11441__$1 = (function (){var statearr_11454 = state_11441;
(statearr_11454[(13)] = inst_11301);

(statearr_11454[(14)] = inst_11304);

(statearr_11454[(15)] = inst_11302);

(statearr_11454[(16)] = inst_11361);

(statearr_11454[(17)] = inst_11303);

return statearr_11454;
})();
var statearr_11455_13068 = state_11441__$1;
(statearr_11455_13068[(2)] = null);

(statearr_11455_13068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (39))){
var state_11441__$1 = state_11441;
var statearr_11459_13069 = state_11441__$1;
(statearr_11459_13069[(2)] = null);

(statearr_11459_13069[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (4))){
var inst_11292 = (state_11441[(9)]);
var inst_11292__$1 = (state_11441[(2)]);
var inst_11293 = (inst_11292__$1 == null);
var state_11441__$1 = (function (){var statearr_11460 = state_11441;
(statearr_11460[(9)] = inst_11292__$1);

return statearr_11460;
})();
if(cljs.core.truth_(inst_11293)){
var statearr_11461_13071 = state_11441__$1;
(statearr_11461_13071[(1)] = (5));

} else {
var statearr_11462_13073 = state_11441__$1;
(statearr_11462_13073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (15))){
var inst_11301 = (state_11441[(13)]);
var inst_11304 = (state_11441[(14)]);
var inst_11302 = (state_11441[(15)]);
var inst_11303 = (state_11441[(17)]);
var inst_11338 = (state_11441[(2)]);
var inst_11339 = (inst_11304 + (1));
var tmp11456 = inst_11301;
var tmp11457 = inst_11302;
var tmp11458 = inst_11303;
var inst_11301__$1 = tmp11456;
var inst_11302__$1 = tmp11457;
var inst_11303__$1 = tmp11458;
var inst_11304__$1 = inst_11339;
var state_11441__$1 = (function (){var statearr_11463 = state_11441;
(statearr_11463[(13)] = inst_11301__$1);

(statearr_11463[(18)] = inst_11338);

(statearr_11463[(14)] = inst_11304__$1);

(statearr_11463[(15)] = inst_11302__$1);

(statearr_11463[(17)] = inst_11303__$1);

return statearr_11463;
})();
var statearr_11464_13075 = state_11441__$1;
(statearr_11464_13075[(2)] = null);

(statearr_11464_13075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (21))){
var inst_11365 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11468_13077 = state_11441__$1;
(statearr_11468_13077[(2)] = inst_11365);

(statearr_11468_13077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (31))){
var inst_11391 = (state_11441[(10)]);
var inst_11395 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11391);
var state_11441__$1 = state_11441;
var statearr_11469_13078 = state_11441__$1;
(statearr_11469_13078[(2)] = inst_11395);

(statearr_11469_13078[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (32))){
var inst_11385 = (state_11441[(19)]);
var inst_11383 = (state_11441[(20)]);
var inst_11384 = (state_11441[(11)]);
var inst_11386 = (state_11441[(12)]);
var inst_11397 = (state_11441[(2)]);
var inst_11398 = (inst_11386 + (1));
var tmp11465 = inst_11385;
var tmp11466 = inst_11383;
var tmp11467 = inst_11384;
var inst_11383__$1 = tmp11466;
var inst_11384__$1 = tmp11467;
var inst_11385__$1 = tmp11465;
var inst_11386__$1 = inst_11398;
var state_11441__$1 = (function (){var statearr_11470 = state_11441;
(statearr_11470[(19)] = inst_11385__$1);

(statearr_11470[(20)] = inst_11383__$1);

(statearr_11470[(11)] = inst_11384__$1);

(statearr_11470[(12)] = inst_11386__$1);

(statearr_11470[(21)] = inst_11397);

return statearr_11470;
})();
var statearr_11482_13080 = state_11441__$1;
(statearr_11482_13080[(2)] = null);

(statearr_11482_13080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (40))){
var inst_11410 = (state_11441[(22)]);
var inst_11414 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11410);
var state_11441__$1 = state_11441;
var statearr_11483_13081 = state_11441__$1;
(statearr_11483_13081[(2)] = inst_11414);

(statearr_11483_13081[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (33))){
var inst_11401 = (state_11441[(23)]);
var inst_11403 = cljs.core.chunked_seq_QMARK_(inst_11401);
var state_11441__$1 = state_11441;
if(inst_11403){
var statearr_11484_13083 = state_11441__$1;
(statearr_11484_13083[(1)] = (36));

} else {
var statearr_11485_13084 = state_11441__$1;
(statearr_11485_13084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (13))){
var inst_11332 = (state_11441[(24)]);
var inst_11335 = cljs.core.async.close_BANG_(inst_11332);
var state_11441__$1 = state_11441;
var statearr_11486_13085 = state_11441__$1;
(statearr_11486_13085[(2)] = inst_11335);

(statearr_11486_13085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (22))){
var inst_11355 = (state_11441[(8)]);
var inst_11358 = cljs.core.async.close_BANG_(inst_11355);
var state_11441__$1 = state_11441;
var statearr_11487_13086 = state_11441__$1;
(statearr_11487_13086[(2)] = inst_11358);

(statearr_11487_13086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (36))){
var inst_11401 = (state_11441[(23)]);
var inst_11405 = cljs.core.chunk_first(inst_11401);
var inst_11406 = cljs.core.chunk_rest(inst_11401);
var inst_11407 = cljs.core.count(inst_11405);
var inst_11383 = inst_11406;
var inst_11384 = inst_11405;
var inst_11385 = inst_11407;
var inst_11386 = (0);
var state_11441__$1 = (function (){var statearr_11488 = state_11441;
(statearr_11488[(19)] = inst_11385);

(statearr_11488[(20)] = inst_11383);

(statearr_11488[(11)] = inst_11384);

(statearr_11488[(12)] = inst_11386);

return statearr_11488;
})();
var statearr_11489_13141 = state_11441__$1;
(statearr_11489_13141[(2)] = null);

(statearr_11489_13141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (41))){
var inst_11401 = (state_11441[(23)]);
var inst_11416 = (state_11441[(2)]);
var inst_11417 = cljs.core.next(inst_11401);
var inst_11383 = inst_11417;
var inst_11384 = null;
var inst_11385 = (0);
var inst_11386 = (0);
var state_11441__$1 = (function (){var statearr_11490 = state_11441;
(statearr_11490[(19)] = inst_11385);

(statearr_11490[(20)] = inst_11383);

(statearr_11490[(25)] = inst_11416);

(statearr_11490[(11)] = inst_11384);

(statearr_11490[(12)] = inst_11386);

return statearr_11490;
})();
var statearr_11491_13142 = state_11441__$1;
(statearr_11491_13142[(2)] = null);

(statearr_11491_13142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (43))){
var state_11441__$1 = state_11441;
var statearr_11492_13143 = state_11441__$1;
(statearr_11492_13143[(2)] = null);

(statearr_11492_13143[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (29))){
var inst_11425 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11493_13144 = state_11441__$1;
(statearr_11493_13144[(2)] = inst_11425);

(statearr_11493_13144[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (44))){
var inst_11434 = (state_11441[(2)]);
var state_11441__$1 = (function (){var statearr_11503 = state_11441;
(statearr_11503[(26)] = inst_11434);

return statearr_11503;
})();
var statearr_11504_13145 = state_11441__$1;
(statearr_11504_13145[(2)] = null);

(statearr_11504_13145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (6))){
var inst_11375 = (state_11441[(27)]);
var inst_11374 = cljs.core.deref(cs);
var inst_11375__$1 = cljs.core.keys(inst_11374);
var inst_11376 = cljs.core.count(inst_11375__$1);
var inst_11377 = cljs.core.reset_BANG_(dctr,inst_11376);
var inst_11382 = cljs.core.seq(inst_11375__$1);
var inst_11383 = inst_11382;
var inst_11384 = null;
var inst_11385 = (0);
var inst_11386 = (0);
var state_11441__$1 = (function (){var statearr_11505 = state_11441;
(statearr_11505[(28)] = inst_11377);

(statearr_11505[(19)] = inst_11385);

(statearr_11505[(20)] = inst_11383);

(statearr_11505[(11)] = inst_11384);

(statearr_11505[(27)] = inst_11375__$1);

(statearr_11505[(12)] = inst_11386);

return statearr_11505;
})();
var statearr_11506_13146 = state_11441__$1;
(statearr_11506_13146[(2)] = null);

(statearr_11506_13146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (28))){
var inst_11401 = (state_11441[(23)]);
var inst_11383 = (state_11441[(20)]);
var inst_11401__$1 = cljs.core.seq(inst_11383);
var state_11441__$1 = (function (){var statearr_11507 = state_11441;
(statearr_11507[(23)] = inst_11401__$1);

return statearr_11507;
})();
if(inst_11401__$1){
var statearr_11508_13147 = state_11441__$1;
(statearr_11508_13147[(1)] = (33));

} else {
var statearr_11509_13148 = state_11441__$1;
(statearr_11509_13148[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (25))){
var inst_11385 = (state_11441[(19)]);
var inst_11386 = (state_11441[(12)]);
var inst_11388 = (inst_11386 < inst_11385);
var inst_11389 = inst_11388;
var state_11441__$1 = state_11441;
if(cljs.core.truth_(inst_11389)){
var statearr_11510_13149 = state_11441__$1;
(statearr_11510_13149[(1)] = (27));

} else {
var statearr_11511_13150 = state_11441__$1;
(statearr_11511_13150[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (34))){
var state_11441__$1 = state_11441;
var statearr_11512_13151 = state_11441__$1;
(statearr_11512_13151[(2)] = null);

(statearr_11512_13151[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (17))){
var state_11441__$1 = state_11441;
var statearr_11513_13153 = state_11441__$1;
(statearr_11513_13153[(2)] = null);

(statearr_11513_13153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (3))){
var inst_11439 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11441__$1,inst_11439);
} else {
if((state_val_11442 === (12))){
var inst_11370 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11514_13156 = state_11441__$1;
(statearr_11514_13156[(2)] = inst_11370);

(statearr_11514_13156[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (2))){
var state_11441__$1 = state_11441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11441__$1,(4),ch);
} else {
if((state_val_11442 === (23))){
var state_11441__$1 = state_11441;
var statearr_11515_13159 = state_11441__$1;
(statearr_11515_13159[(2)] = null);

(statearr_11515_13159[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (35))){
var inst_11423 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11516_13162 = state_11441__$1;
(statearr_11516_13162[(2)] = inst_11423);

(statearr_11516_13162[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (19))){
var inst_11342 = (state_11441[(7)]);
var inst_11346 = cljs.core.chunk_first(inst_11342);
var inst_11347 = cljs.core.chunk_rest(inst_11342);
var inst_11348 = cljs.core.count(inst_11346);
var inst_11301 = inst_11347;
var inst_11302 = inst_11346;
var inst_11303 = inst_11348;
var inst_11304 = (0);
var state_11441__$1 = (function (){var statearr_11517 = state_11441;
(statearr_11517[(13)] = inst_11301);

(statearr_11517[(14)] = inst_11304);

(statearr_11517[(15)] = inst_11302);

(statearr_11517[(17)] = inst_11303);

return statearr_11517;
})();
var statearr_11518_13174 = state_11441__$1;
(statearr_11518_13174[(2)] = null);

(statearr_11518_13174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (11))){
var inst_11342 = (state_11441[(7)]);
var inst_11301 = (state_11441[(13)]);
var inst_11342__$1 = cljs.core.seq(inst_11301);
var state_11441__$1 = (function (){var statearr_11521 = state_11441;
(statearr_11521[(7)] = inst_11342__$1);

return statearr_11521;
})();
if(inst_11342__$1){
var statearr_11522_13175 = state_11441__$1;
(statearr_11522_13175[(1)] = (16));

} else {
var statearr_11523_13177 = state_11441__$1;
(statearr_11523_13177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (9))){
var inst_11372 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11524_13178 = state_11441__$1;
(statearr_11524_13178[(2)] = inst_11372);

(statearr_11524_13178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (5))){
var inst_11299 = cljs.core.deref(cs);
var inst_11300 = cljs.core.seq(inst_11299);
var inst_11301 = inst_11300;
var inst_11302 = null;
var inst_11303 = (0);
var inst_11304 = (0);
var state_11441__$1 = (function (){var statearr_11525 = state_11441;
(statearr_11525[(13)] = inst_11301);

(statearr_11525[(14)] = inst_11304);

(statearr_11525[(15)] = inst_11302);

(statearr_11525[(17)] = inst_11303);

return statearr_11525;
})();
var statearr_11526_13179 = state_11441__$1;
(statearr_11526_13179[(2)] = null);

(statearr_11526_13179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (14))){
var state_11441__$1 = state_11441;
var statearr_11527_13180 = state_11441__$1;
(statearr_11527_13180[(2)] = null);

(statearr_11527_13180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (45))){
var inst_11431 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11528_13181 = state_11441__$1;
(statearr_11528_13181[(2)] = inst_11431);

(statearr_11528_13181[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (26))){
var inst_11375 = (state_11441[(27)]);
var inst_11427 = (state_11441[(2)]);
var inst_11428 = cljs.core.seq(inst_11375);
var state_11441__$1 = (function (){var statearr_11529 = state_11441;
(statearr_11529[(29)] = inst_11427);

return statearr_11529;
})();
if(inst_11428){
var statearr_11530_13182 = state_11441__$1;
(statearr_11530_13182[(1)] = (42));

} else {
var statearr_11531_13183 = state_11441__$1;
(statearr_11531_13183[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (16))){
var inst_11342 = (state_11441[(7)]);
var inst_11344 = cljs.core.chunked_seq_QMARK_(inst_11342);
var state_11441__$1 = state_11441;
if(inst_11344){
var statearr_11532_13184 = state_11441__$1;
(statearr_11532_13184[(1)] = (19));

} else {
var statearr_11533_13185 = state_11441__$1;
(statearr_11533_13185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (38))){
var inst_11420 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11534_13186 = state_11441__$1;
(statearr_11534_13186[(2)] = inst_11420);

(statearr_11534_13186[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (30))){
var state_11441__$1 = state_11441;
var statearr_11535_13187 = state_11441__$1;
(statearr_11535_13187[(2)] = null);

(statearr_11535_13187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (10))){
var inst_11304 = (state_11441[(14)]);
var inst_11302 = (state_11441[(15)]);
var inst_11312 = cljs.core._nth(inst_11302,inst_11304);
var inst_11332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11312,(0),null);
var inst_11333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11312,(1),null);
var state_11441__$1 = (function (){var statearr_11536 = state_11441;
(statearr_11536[(24)] = inst_11332);

return statearr_11536;
})();
if(cljs.core.truth_(inst_11333)){
var statearr_11537_13188 = state_11441__$1;
(statearr_11537_13188[(1)] = (13));

} else {
var statearr_11538_13189 = state_11441__$1;
(statearr_11538_13189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (18))){
var inst_11368 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11539_13190 = state_11441__$1;
(statearr_11539_13190[(2)] = inst_11368);

(statearr_11539_13190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (42))){
var state_11441__$1 = state_11441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11441__$1,(45),dchan);
} else {
if((state_val_11442 === (37))){
var inst_11292 = (state_11441[(9)]);
var inst_11401 = (state_11441[(23)]);
var inst_11410 = (state_11441[(22)]);
var inst_11410__$1 = cljs.core.first(inst_11401);
var inst_11411 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11410__$1,inst_11292,done);
var state_11441__$1 = (function (){var statearr_11547 = state_11441;
(statearr_11547[(22)] = inst_11410__$1);

return statearr_11547;
})();
if(cljs.core.truth_(inst_11411)){
var statearr_11548_13191 = state_11441__$1;
(statearr_11548_13191[(1)] = (39));

} else {
var statearr_11549_13192 = state_11441__$1;
(statearr_11549_13192[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (8))){
var inst_11304 = (state_11441[(14)]);
var inst_11303 = (state_11441[(17)]);
var inst_11306 = (inst_11304 < inst_11303);
var inst_11307 = inst_11306;
var state_11441__$1 = state_11441;
if(cljs.core.truth_(inst_11307)){
var statearr_11550_13193 = state_11441__$1;
(statearr_11550_13193[(1)] = (10));

} else {
var statearr_11551_13194 = state_11441__$1;
(statearr_11551_13194[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10613__auto__ = null;
var cljs$core$async$mult_$_state_machine__10613__auto____0 = (function (){
var statearr_11552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11552[(0)] = cljs$core$async$mult_$_state_machine__10613__auto__);

(statearr_11552[(1)] = (1));

return statearr_11552;
});
var cljs$core$async$mult_$_state_machine__10613__auto____1 = (function (state_11441){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_11441);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e11553){var ex__10616__auto__ = e11553;
var statearr_11554_13195 = state_11441;
(statearr_11554_13195[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_11441[(4)]))){
var statearr_11555_13196 = state_11441;
(statearr_11555_13196[(1)] = cljs.core.first((state_11441[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13197 = state_11441;
state_11441 = G__13197;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10613__auto__ = function(state_11441){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10613__auto____1.call(this,state_11441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10613__auto____0;
cljs$core$async$mult_$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10613__auto____1;
return cljs$core$async$mult_$_state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11556 = f__10671__auto__();
(statearr_11556[(6)] = c__10670__auto___13053);

return statearr_11556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var G__11558 = arguments.length;
switch (G__11558) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13199 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13199(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13200 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13200(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13201 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13201(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13202 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13202(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13203 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13203(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13204 = arguments.length;
var i__4737__auto___13205 = (0);
while(true){
if((i__4737__auto___13205 < len__4736__auto___13204)){
args__4742__auto__.push((arguments[i__4737__auto___13205]));

var G__13206 = (i__4737__auto___13205 + (1));
i__4737__auto___13205 = G__13206;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11581){
var map__11582 = p__11581;
var map__11582__$1 = (((((!((map__11582 == null))))?(((((map__11582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11582):map__11582);
var opts = map__11582__$1;
var statearr_11584_13207 = state;
(statearr_11584_13207[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11585_13208 = state;
(statearr_11585_13208[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11586_13209 = state;
(statearr_11586_13209[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11577){
var G__11578 = cljs.core.first(seq11577);
var seq11577__$1 = cljs.core.next(seq11577);
var G__11579 = cljs.core.first(seq11577__$1);
var seq11577__$2 = cljs.core.next(seq11577__$1);
var G__11580 = cljs.core.first(seq11577__$2);
var seq11577__$3 = cljs.core.next(seq11577__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11578,G__11579,G__11580,seq11577__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11593 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11594){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11594 = meta11594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11595,meta11594__$1){
var self__ = this;
var _11595__$1 = this;
return (new cljs.core.async.t_cljs$core$async11593(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11594__$1));
}));

(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11595){
var self__ = this;
var _11595__$1 = this;
return self__.meta11594;
}));

(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11594","meta11594",-1877342575,null)], null);
}));

(cljs.core.async.t_cljs$core$async11593.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11593");

(cljs.core.async.t_cljs$core$async11593.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11593");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11593.
 */
cljs.core.async.__GT_t_cljs$core$async11593 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11593(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11594){
return (new cljs.core.async.t_cljs$core$async11593(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11594));
});

}

return (new cljs.core.async.t_cljs$core$async11593(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10670__auto___13211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_11714){
var state_val_11715 = (state_11714[(1)]);
if((state_val_11715 === (7))){
var inst_11629 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
var statearr_11716_13212 = state_11714__$1;
(statearr_11716_13212[(2)] = inst_11629);

(statearr_11716_13212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (20))){
var inst_11641 = (state_11714[(7)]);
var state_11714__$1 = state_11714;
var statearr_11717_13213 = state_11714__$1;
(statearr_11717_13213[(2)] = inst_11641);

(statearr_11717_13213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (27))){
var state_11714__$1 = state_11714;
var statearr_11718_13214 = state_11714__$1;
(statearr_11718_13214[(2)] = null);

(statearr_11718_13214[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (1))){
var inst_11605 = (state_11714[(8)]);
var inst_11605__$1 = calc_state();
var inst_11607 = (inst_11605__$1 == null);
var inst_11608 = cljs.core.not(inst_11607);
var state_11714__$1 = (function (){var statearr_11719 = state_11714;
(statearr_11719[(8)] = inst_11605__$1);

return statearr_11719;
})();
if(inst_11608){
var statearr_11720_13215 = state_11714__$1;
(statearr_11720_13215[(1)] = (2));

} else {
var statearr_11721_13216 = state_11714__$1;
(statearr_11721_13216[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (24))){
var inst_11688 = (state_11714[(9)]);
var inst_11674 = (state_11714[(10)]);
var inst_11665 = (state_11714[(11)]);
var inst_11688__$1 = (inst_11665.cljs$core$IFn$_invoke$arity$1 ? inst_11665.cljs$core$IFn$_invoke$arity$1(inst_11674) : inst_11665.call(null,inst_11674));
var state_11714__$1 = (function (){var statearr_11722 = state_11714;
(statearr_11722[(9)] = inst_11688__$1);

return statearr_11722;
})();
if(cljs.core.truth_(inst_11688__$1)){
var statearr_11723_13218 = state_11714__$1;
(statearr_11723_13218[(1)] = (29));

} else {
var statearr_11724_13219 = state_11714__$1;
(statearr_11724_13219[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (4))){
var inst_11632 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
if(cljs.core.truth_(inst_11632)){
var statearr_11725_13221 = state_11714__$1;
(statearr_11725_13221[(1)] = (8));

} else {
var statearr_11726_13222 = state_11714__$1;
(statearr_11726_13222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (15))){
var inst_11659 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
if(cljs.core.truth_(inst_11659)){
var statearr_11727_13223 = state_11714__$1;
(statearr_11727_13223[(1)] = (19));

} else {
var statearr_11728_13224 = state_11714__$1;
(statearr_11728_13224[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (21))){
var inst_11664 = (state_11714[(12)]);
var inst_11664__$1 = (state_11714[(2)]);
var inst_11665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11664__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11664__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11664__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11714__$1 = (function (){var statearr_11729 = state_11714;
(statearr_11729[(12)] = inst_11664__$1);

(statearr_11729[(11)] = inst_11665);

(statearr_11729[(13)] = inst_11666);

return statearr_11729;
})();
return cljs.core.async.ioc_alts_BANG_(state_11714__$1,(22),inst_11667);
} else {
if((state_val_11715 === (31))){
var inst_11696 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
if(cljs.core.truth_(inst_11696)){
var statearr_11730_13225 = state_11714__$1;
(statearr_11730_13225[(1)] = (32));

} else {
var statearr_11731_13226 = state_11714__$1;
(statearr_11731_13226[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (32))){
var inst_11673 = (state_11714[(14)]);
var state_11714__$1 = state_11714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11714__$1,(35),out,inst_11673);
} else {
if((state_val_11715 === (33))){
var inst_11664 = (state_11714[(12)]);
var inst_11641 = inst_11664;
var state_11714__$1 = (function (){var statearr_11737 = state_11714;
(statearr_11737[(7)] = inst_11641);

return statearr_11737;
})();
var statearr_11738_13227 = state_11714__$1;
(statearr_11738_13227[(2)] = null);

(statearr_11738_13227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (13))){
var inst_11641 = (state_11714[(7)]);
var inst_11648 = inst_11641.cljs$lang$protocol_mask$partition0$;
var inst_11649 = (inst_11648 & (64));
var inst_11650 = inst_11641.cljs$core$ISeq$;
var inst_11651 = (cljs.core.PROTOCOL_SENTINEL === inst_11650);
var inst_11652 = ((inst_11649) || (inst_11651));
var state_11714__$1 = state_11714;
if(cljs.core.truth_(inst_11652)){
var statearr_11739_13229 = state_11714__$1;
(statearr_11739_13229[(1)] = (16));

} else {
var statearr_11740_13230 = state_11714__$1;
(statearr_11740_13230[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (22))){
var inst_11673 = (state_11714[(14)]);
var inst_11674 = (state_11714[(10)]);
var inst_11672 = (state_11714[(2)]);
var inst_11673__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11672,(0),null);
var inst_11674__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11672,(1),null);
var inst_11675 = (inst_11673__$1 == null);
var inst_11676 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11674__$1,change);
var inst_11677 = ((inst_11675) || (inst_11676));
var state_11714__$1 = (function (){var statearr_11741 = state_11714;
(statearr_11741[(14)] = inst_11673__$1);

(statearr_11741[(10)] = inst_11674__$1);

return statearr_11741;
})();
if(cljs.core.truth_(inst_11677)){
var statearr_11742_13231 = state_11714__$1;
(statearr_11742_13231[(1)] = (23));

} else {
var statearr_11743_13232 = state_11714__$1;
(statearr_11743_13232[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (36))){
var inst_11664 = (state_11714[(12)]);
var inst_11641 = inst_11664;
var state_11714__$1 = (function (){var statearr_11744 = state_11714;
(statearr_11744[(7)] = inst_11641);

return statearr_11744;
})();
var statearr_11745_13233 = state_11714__$1;
(statearr_11745_13233[(2)] = null);

(statearr_11745_13233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (29))){
var inst_11688 = (state_11714[(9)]);
var state_11714__$1 = state_11714;
var statearr_11746_13234 = state_11714__$1;
(statearr_11746_13234[(2)] = inst_11688);

(statearr_11746_13234[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (6))){
var state_11714__$1 = state_11714;
var statearr_11747_13235 = state_11714__$1;
(statearr_11747_13235[(2)] = false);

(statearr_11747_13235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (28))){
var inst_11684 = (state_11714[(2)]);
var inst_11685 = calc_state();
var inst_11641 = inst_11685;
var state_11714__$1 = (function (){var statearr_11756 = state_11714;
(statearr_11756[(7)] = inst_11641);

(statearr_11756[(15)] = inst_11684);

return statearr_11756;
})();
var statearr_11757_13236 = state_11714__$1;
(statearr_11757_13236[(2)] = null);

(statearr_11757_13236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (25))){
var inst_11710 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
var statearr_11758_13237 = state_11714__$1;
(statearr_11758_13237[(2)] = inst_11710);

(statearr_11758_13237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (34))){
var inst_11708 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
var statearr_11759_13238 = state_11714__$1;
(statearr_11759_13238[(2)] = inst_11708);

(statearr_11759_13238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (17))){
var state_11714__$1 = state_11714;
var statearr_11760_13239 = state_11714__$1;
(statearr_11760_13239[(2)] = false);

(statearr_11760_13239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (3))){
var state_11714__$1 = state_11714;
var statearr_11761_13240 = state_11714__$1;
(statearr_11761_13240[(2)] = false);

(statearr_11761_13240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (12))){
var inst_11712 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11714__$1,inst_11712);
} else {
if((state_val_11715 === (2))){
var inst_11605 = (state_11714[(8)]);
var inst_11621 = inst_11605.cljs$lang$protocol_mask$partition0$;
var inst_11622 = (inst_11621 & (64));
var inst_11623 = inst_11605.cljs$core$ISeq$;
var inst_11624 = (cljs.core.PROTOCOL_SENTINEL === inst_11623);
var inst_11625 = ((inst_11622) || (inst_11624));
var state_11714__$1 = state_11714;
if(cljs.core.truth_(inst_11625)){
var statearr_11762_13241 = state_11714__$1;
(statearr_11762_13241[(1)] = (5));

} else {
var statearr_11763_13242 = state_11714__$1;
(statearr_11763_13242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (23))){
var inst_11673 = (state_11714[(14)]);
var inst_11679 = (inst_11673 == null);
var state_11714__$1 = state_11714;
if(cljs.core.truth_(inst_11679)){
var statearr_11764_13243 = state_11714__$1;
(statearr_11764_13243[(1)] = (26));

} else {
var statearr_11765_13244 = state_11714__$1;
(statearr_11765_13244[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (35))){
var inst_11699 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
if(cljs.core.truth_(inst_11699)){
var statearr_11766_13245 = state_11714__$1;
(statearr_11766_13245[(1)] = (36));

} else {
var statearr_11767_13246 = state_11714__$1;
(statearr_11767_13246[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (19))){
var inst_11641 = (state_11714[(7)]);
var inst_11661 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11641);
var state_11714__$1 = state_11714;
var statearr_11768_13247 = state_11714__$1;
(statearr_11768_13247[(2)] = inst_11661);

(statearr_11768_13247[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (11))){
var inst_11641 = (state_11714[(7)]);
var inst_11645 = (inst_11641 == null);
var inst_11646 = cljs.core.not(inst_11645);
var state_11714__$1 = state_11714;
if(inst_11646){
var statearr_11769_13248 = state_11714__$1;
(statearr_11769_13248[(1)] = (13));

} else {
var statearr_11770_13249 = state_11714__$1;
(statearr_11770_13249[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (9))){
var inst_11605 = (state_11714[(8)]);
var state_11714__$1 = state_11714;
var statearr_11771_13250 = state_11714__$1;
(statearr_11771_13250[(2)] = inst_11605);

(statearr_11771_13250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (5))){
var state_11714__$1 = state_11714;
var statearr_11772_13251 = state_11714__$1;
(statearr_11772_13251[(2)] = true);

(statearr_11772_13251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (14))){
var state_11714__$1 = state_11714;
var statearr_11773_13252 = state_11714__$1;
(statearr_11773_13252[(2)] = false);

(statearr_11773_13252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (26))){
var inst_11674 = (state_11714[(10)]);
var inst_11681 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11674);
var state_11714__$1 = state_11714;
var statearr_11774_13253 = state_11714__$1;
(statearr_11774_13253[(2)] = inst_11681);

(statearr_11774_13253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (16))){
var state_11714__$1 = state_11714;
var statearr_11775_13254 = state_11714__$1;
(statearr_11775_13254[(2)] = true);

(statearr_11775_13254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (38))){
var inst_11704 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
var statearr_11776_13255 = state_11714__$1;
(statearr_11776_13255[(2)] = inst_11704);

(statearr_11776_13255[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (30))){
var inst_11674 = (state_11714[(10)]);
var inst_11665 = (state_11714[(11)]);
var inst_11666 = (state_11714[(13)]);
var inst_11691 = cljs.core.empty_QMARK_(inst_11665);
var inst_11692 = (inst_11666.cljs$core$IFn$_invoke$arity$1 ? inst_11666.cljs$core$IFn$_invoke$arity$1(inst_11674) : inst_11666.call(null,inst_11674));
var inst_11693 = cljs.core.not(inst_11692);
var inst_11694 = ((inst_11691) && (inst_11693));
var state_11714__$1 = state_11714;
var statearr_11777_13256 = state_11714__$1;
(statearr_11777_13256[(2)] = inst_11694);

(statearr_11777_13256[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (10))){
var inst_11605 = (state_11714[(8)]);
var inst_11637 = (state_11714[(2)]);
var inst_11638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11637,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11637,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11637,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11641 = inst_11605;
var state_11714__$1 = (function (){var statearr_11782 = state_11714;
(statearr_11782[(7)] = inst_11641);

(statearr_11782[(16)] = inst_11638);

(statearr_11782[(17)] = inst_11640);

(statearr_11782[(18)] = inst_11639);

return statearr_11782;
})();
var statearr_11783_13257 = state_11714__$1;
(statearr_11783_13257[(2)] = null);

(statearr_11783_13257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (18))){
var inst_11656 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
var statearr_11784_13258 = state_11714__$1;
(statearr_11784_13258[(2)] = inst_11656);

(statearr_11784_13258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (37))){
var state_11714__$1 = state_11714;
var statearr_11785_13259 = state_11714__$1;
(statearr_11785_13259[(2)] = null);

(statearr_11785_13259[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (8))){
var inst_11605 = (state_11714[(8)]);
var inst_11634 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11605);
var state_11714__$1 = state_11714;
var statearr_11786_13260 = state_11714__$1;
(statearr_11786_13260[(2)] = inst_11634);

(statearr_11786_13260[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10613__auto__ = null;
var cljs$core$async$mix_$_state_machine__10613__auto____0 = (function (){
var statearr_11787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11787[(0)] = cljs$core$async$mix_$_state_machine__10613__auto__);

(statearr_11787[(1)] = (1));

return statearr_11787;
});
var cljs$core$async$mix_$_state_machine__10613__auto____1 = (function (state_11714){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_11714);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e11788){var ex__10616__auto__ = e11788;
var statearr_11789_13262 = state_11714;
(statearr_11789_13262[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_11714[(4)]))){
var statearr_11790_13263 = state_11714;
(statearr_11790_13263[(1)] = cljs.core.first((state_11714[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13264 = state_11714;
state_11714 = G__13264;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10613__auto__ = function(state_11714){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10613__auto____1.call(this,state_11714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10613__auto____0;
cljs$core$async$mix_$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10613__auto____1;
return cljs$core$async$mix_$_state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11791 = f__10671__auto__();
(statearr_11791[(6)] = c__10670__auto___13211);

return statearr_11791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13267 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13267(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13268 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13268(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13269 = (function() {
var G__13270 = null;
var G__13270__1 = (function (p){
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
var G__13270__2 = (function (p,v){
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
G__13270 = function(p,v){
switch(arguments.length){
case 1:
return G__13270__1.call(this,p);
case 2:
return G__13270__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13270.cljs$core$IFn$_invoke$arity$1 = G__13270__1;
G__13270.cljs$core$IFn$_invoke$arity$2 = G__13270__2;
return G__13270;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11799 = arguments.length;
switch (G__11799) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13269(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13269(p,v);
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
var G__11806 = arguments.length;
switch (G__11806) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11804_SHARP_){
if(cljs.core.truth_((p1__11804_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11804_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11804_SHARP_.call(null,topic)))){
return p1__11804_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11804_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11807 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11808){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11808 = meta11808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11809,meta11808__$1){
var self__ = this;
var _11809__$1 = this;
return (new cljs.core.async.t_cljs$core$async11807(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11808__$1));
}));

(cljs.core.async.t_cljs$core$async11807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11809){
var self__ = this;
var _11809__$1 = this;
return self__.meta11808;
}));

(cljs.core.async.t_cljs$core$async11807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11807.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11807.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11807.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11807.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11807.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11808","meta11808",986792779,null)], null);
}));

(cljs.core.async.t_cljs$core$async11807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11807");

(cljs.core.async.t_cljs$core$async11807.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11807.
 */
cljs.core.async.__GT_t_cljs$core$async11807 = (function cljs$core$async$__GT_t_cljs$core$async11807(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11808){
return (new cljs.core.async.t_cljs$core$async11807(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11808));
});

}

return (new cljs.core.async.t_cljs$core$async11807(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10670__auto___13275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_11881){
var state_val_11882 = (state_11881[(1)]);
if((state_val_11882 === (7))){
var inst_11877 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11883_13276 = state_11881__$1;
(statearr_11883_13276[(2)] = inst_11877);

(statearr_11883_13276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (20))){
var state_11881__$1 = state_11881;
var statearr_11884_13277 = state_11881__$1;
(statearr_11884_13277[(2)] = null);

(statearr_11884_13277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (1))){
var state_11881__$1 = state_11881;
var statearr_11891_13278 = state_11881__$1;
(statearr_11891_13278[(2)] = null);

(statearr_11891_13278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (24))){
var inst_11860 = (state_11881[(7)]);
var inst_11869 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11860);
var state_11881__$1 = state_11881;
var statearr_11892_13279 = state_11881__$1;
(statearr_11892_13279[(2)] = inst_11869);

(statearr_11892_13279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (4))){
var inst_11812 = (state_11881[(8)]);
var inst_11812__$1 = (state_11881[(2)]);
var inst_11813 = (inst_11812__$1 == null);
var state_11881__$1 = (function (){var statearr_11893 = state_11881;
(statearr_11893[(8)] = inst_11812__$1);

return statearr_11893;
})();
if(cljs.core.truth_(inst_11813)){
var statearr_11894_13280 = state_11881__$1;
(statearr_11894_13280[(1)] = (5));

} else {
var statearr_11895_13281 = state_11881__$1;
(statearr_11895_13281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (15))){
var inst_11854 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11896_13283 = state_11881__$1;
(statearr_11896_13283[(2)] = inst_11854);

(statearr_11896_13283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (21))){
var inst_11874 = (state_11881[(2)]);
var state_11881__$1 = (function (){var statearr_11897 = state_11881;
(statearr_11897[(9)] = inst_11874);

return statearr_11897;
})();
var statearr_11898_13284 = state_11881__$1;
(statearr_11898_13284[(2)] = null);

(statearr_11898_13284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (13))){
var inst_11836 = (state_11881[(10)]);
var inst_11838 = cljs.core.chunked_seq_QMARK_(inst_11836);
var state_11881__$1 = state_11881;
if(inst_11838){
var statearr_11899_13285 = state_11881__$1;
(statearr_11899_13285[(1)] = (16));

} else {
var statearr_11900_13286 = state_11881__$1;
(statearr_11900_13286[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (22))){
var inst_11866 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
if(cljs.core.truth_(inst_11866)){
var statearr_11901_13288 = state_11881__$1;
(statearr_11901_13288[(1)] = (23));

} else {
var statearr_11902_13289 = state_11881__$1;
(statearr_11902_13289[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (6))){
var inst_11860 = (state_11881[(7)]);
var inst_11812 = (state_11881[(8)]);
var inst_11862 = (state_11881[(11)]);
var inst_11860__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11812) : topic_fn.call(null,inst_11812));
var inst_11861 = cljs.core.deref(mults);
var inst_11862__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11861,inst_11860__$1);
var state_11881__$1 = (function (){var statearr_11903 = state_11881;
(statearr_11903[(7)] = inst_11860__$1);

(statearr_11903[(11)] = inst_11862__$1);

return statearr_11903;
})();
if(cljs.core.truth_(inst_11862__$1)){
var statearr_11904_13291 = state_11881__$1;
(statearr_11904_13291[(1)] = (19));

} else {
var statearr_11905_13292 = state_11881__$1;
(statearr_11905_13292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (25))){
var inst_11871 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11908_13293 = state_11881__$1;
(statearr_11908_13293[(2)] = inst_11871);

(statearr_11908_13293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (17))){
var inst_11836 = (state_11881[(10)]);
var inst_11845 = cljs.core.first(inst_11836);
var inst_11846 = cljs.core.async.muxch_STAR_(inst_11845);
var inst_11847 = cljs.core.async.close_BANG_(inst_11846);
var inst_11848 = cljs.core.next(inst_11836);
var inst_11822 = inst_11848;
var inst_11823 = null;
var inst_11824 = (0);
var inst_11825 = (0);
var state_11881__$1 = (function (){var statearr_11911 = state_11881;
(statearr_11911[(12)] = inst_11823);

(statearr_11911[(13)] = inst_11825);

(statearr_11911[(14)] = inst_11824);

(statearr_11911[(15)] = inst_11822);

(statearr_11911[(16)] = inst_11847);

return statearr_11911;
})();
var statearr_11912_13295 = state_11881__$1;
(statearr_11912_13295[(2)] = null);

(statearr_11912_13295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (3))){
var inst_11879 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11881__$1,inst_11879);
} else {
if((state_val_11882 === (12))){
var inst_11856 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11913_13296 = state_11881__$1;
(statearr_11913_13296[(2)] = inst_11856);

(statearr_11913_13296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (2))){
var state_11881__$1 = state_11881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11881__$1,(4),ch);
} else {
if((state_val_11882 === (23))){
var state_11881__$1 = state_11881;
var statearr_11914_13297 = state_11881__$1;
(statearr_11914_13297[(2)] = null);

(statearr_11914_13297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (19))){
var inst_11812 = (state_11881[(8)]);
var inst_11862 = (state_11881[(11)]);
var inst_11864 = cljs.core.async.muxch_STAR_(inst_11862);
var state_11881__$1 = state_11881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11881__$1,(22),inst_11864,inst_11812);
} else {
if((state_val_11882 === (11))){
var inst_11822 = (state_11881[(15)]);
var inst_11836 = (state_11881[(10)]);
var inst_11836__$1 = cljs.core.seq(inst_11822);
var state_11881__$1 = (function (){var statearr_11921 = state_11881;
(statearr_11921[(10)] = inst_11836__$1);

return statearr_11921;
})();
if(inst_11836__$1){
var statearr_11922_13298 = state_11881__$1;
(statearr_11922_13298[(1)] = (13));

} else {
var statearr_11923_13299 = state_11881__$1;
(statearr_11923_13299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (9))){
var inst_11858 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11925_13300 = state_11881__$1;
(statearr_11925_13300[(2)] = inst_11858);

(statearr_11925_13300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (5))){
var inst_11819 = cljs.core.deref(mults);
var inst_11820 = cljs.core.vals(inst_11819);
var inst_11821 = cljs.core.seq(inst_11820);
var inst_11822 = inst_11821;
var inst_11823 = null;
var inst_11824 = (0);
var inst_11825 = (0);
var state_11881__$1 = (function (){var statearr_11928 = state_11881;
(statearr_11928[(12)] = inst_11823);

(statearr_11928[(13)] = inst_11825);

(statearr_11928[(14)] = inst_11824);

(statearr_11928[(15)] = inst_11822);

return statearr_11928;
})();
var statearr_11929_13301 = state_11881__$1;
(statearr_11929_13301[(2)] = null);

(statearr_11929_13301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (14))){
var state_11881__$1 = state_11881;
var statearr_11933_13302 = state_11881__$1;
(statearr_11933_13302[(2)] = null);

(statearr_11933_13302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (16))){
var inst_11836 = (state_11881[(10)]);
var inst_11840 = cljs.core.chunk_first(inst_11836);
var inst_11841 = cljs.core.chunk_rest(inst_11836);
var inst_11842 = cljs.core.count(inst_11840);
var inst_11822 = inst_11841;
var inst_11823 = inst_11840;
var inst_11824 = inst_11842;
var inst_11825 = (0);
var state_11881__$1 = (function (){var statearr_11935 = state_11881;
(statearr_11935[(12)] = inst_11823);

(statearr_11935[(13)] = inst_11825);

(statearr_11935[(14)] = inst_11824);

(statearr_11935[(15)] = inst_11822);

return statearr_11935;
})();
var statearr_11936_13303 = state_11881__$1;
(statearr_11936_13303[(2)] = null);

(statearr_11936_13303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (10))){
var inst_11823 = (state_11881[(12)]);
var inst_11825 = (state_11881[(13)]);
var inst_11824 = (state_11881[(14)]);
var inst_11822 = (state_11881[(15)]);
var inst_11830 = cljs.core._nth(inst_11823,inst_11825);
var inst_11831 = cljs.core.async.muxch_STAR_(inst_11830);
var inst_11832 = cljs.core.async.close_BANG_(inst_11831);
var inst_11833 = (inst_11825 + (1));
var tmp11930 = inst_11823;
var tmp11931 = inst_11824;
var tmp11932 = inst_11822;
var inst_11822__$1 = tmp11932;
var inst_11823__$1 = tmp11930;
var inst_11824__$1 = tmp11931;
var inst_11825__$1 = inst_11833;
var state_11881__$1 = (function (){var statearr_11938 = state_11881;
(statearr_11938[(17)] = inst_11832);

(statearr_11938[(12)] = inst_11823__$1);

(statearr_11938[(13)] = inst_11825__$1);

(statearr_11938[(14)] = inst_11824__$1);

(statearr_11938[(15)] = inst_11822__$1);

return statearr_11938;
})();
var statearr_11939_13304 = state_11881__$1;
(statearr_11939_13304[(2)] = null);

(statearr_11939_13304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (18))){
var inst_11851 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11940_13305 = state_11881__$1;
(statearr_11940_13305[(2)] = inst_11851);

(statearr_11940_13305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (8))){
var inst_11825 = (state_11881[(13)]);
var inst_11824 = (state_11881[(14)]);
var inst_11827 = (inst_11825 < inst_11824);
var inst_11828 = inst_11827;
var state_11881__$1 = state_11881;
if(cljs.core.truth_(inst_11828)){
var statearr_11941_13306 = state_11881__$1;
(statearr_11941_13306[(1)] = (10));

} else {
var statearr_11942_13307 = state_11881__$1;
(statearr_11942_13307[(1)] = (11));

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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_11943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11943[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_11943[(1)] = (1));

return statearr_11943;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_11881){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_11881);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e11945){var ex__10616__auto__ = e11945;
var statearr_11947_13308 = state_11881;
(statearr_11947_13308[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_11881[(4)]))){
var statearr_11948_13309 = state_11881;
(statearr_11948_13309[(1)] = cljs.core.first((state_11881[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13310 = state_11881;
state_11881 = G__13310;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_11881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_11881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11950 = f__10671__auto__();
(statearr_11950[(6)] = c__10670__auto___13275);

return statearr_11950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var G__11955 = arguments.length;
switch (G__11955) {
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
var G__11958 = arguments.length;
switch (G__11958) {
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
var G__11965 = arguments.length;
switch (G__11965) {
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
var c__10670__auto___13314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_12012){
var state_val_12013 = (state_12012[(1)]);
if((state_val_12013 === (7))){
var state_12012__$1 = state_12012;
var statearr_12014_13315 = state_12012__$1;
(statearr_12014_13315[(2)] = null);

(statearr_12014_13315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (1))){
var state_12012__$1 = state_12012;
var statearr_12015_13316 = state_12012__$1;
(statearr_12015_13316[(2)] = null);

(statearr_12015_13316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (4))){
var inst_11970 = (state_12012[(7)]);
var inst_11969 = (state_12012[(8)]);
var inst_11972 = (inst_11970 < inst_11969);
var state_12012__$1 = state_12012;
if(cljs.core.truth_(inst_11972)){
var statearr_12016_13317 = state_12012__$1;
(statearr_12016_13317[(1)] = (6));

} else {
var statearr_12017_13318 = state_12012__$1;
(statearr_12017_13318[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (15))){
var inst_11997 = (state_12012[(9)]);
var inst_12002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11997);
var state_12012__$1 = state_12012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12012__$1,(17),out,inst_12002);
} else {
if((state_val_12013 === (13))){
var inst_11997 = (state_12012[(9)]);
var inst_11997__$1 = (state_12012[(2)]);
var inst_11998 = cljs.core.some(cljs.core.nil_QMARK_,inst_11997__$1);
var state_12012__$1 = (function (){var statearr_12019 = state_12012;
(statearr_12019[(9)] = inst_11997__$1);

return statearr_12019;
})();
if(cljs.core.truth_(inst_11998)){
var statearr_12020_13319 = state_12012__$1;
(statearr_12020_13319[(1)] = (14));

} else {
var statearr_12021_13320 = state_12012__$1;
(statearr_12021_13320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (6))){
var state_12012__$1 = state_12012;
var statearr_12023_13321 = state_12012__$1;
(statearr_12023_13321[(2)] = null);

(statearr_12023_13321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (17))){
var inst_12004 = (state_12012[(2)]);
var state_12012__$1 = (function (){var statearr_12025 = state_12012;
(statearr_12025[(10)] = inst_12004);

return statearr_12025;
})();
var statearr_12026_13322 = state_12012__$1;
(statearr_12026_13322[(2)] = null);

(statearr_12026_13322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (3))){
var inst_12009 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12012__$1,inst_12009);
} else {
if((state_val_12013 === (12))){
var _ = (function (){var statearr_12029 = state_12012;
(statearr_12029[(4)] = cljs.core.rest((state_12012[(4)])));

return statearr_12029;
})();
var state_12012__$1 = state_12012;
var ex12024 = (state_12012__$1[(2)]);
var statearr_12030_13323 = state_12012__$1;
(statearr_12030_13323[(5)] = ex12024);


if((ex12024 instanceof Object)){
var statearr_12031_13324 = state_12012__$1;
(statearr_12031_13324[(1)] = (11));

(statearr_12031_13324[(5)] = null);

} else {
throw ex12024;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (2))){
var inst_11968 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11969 = cnt;
var inst_11970 = (0);
var state_12012__$1 = (function (){var statearr_12032 = state_12012;
(statearr_12032[(11)] = inst_11968);

(statearr_12032[(7)] = inst_11970);

(statearr_12032[(8)] = inst_11969);

return statearr_12032;
})();
var statearr_12033_13325 = state_12012__$1;
(statearr_12033_13325[(2)] = null);

(statearr_12033_13325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (11))){
var inst_11976 = (state_12012[(2)]);
var inst_11977 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12012__$1 = (function (){var statearr_12035 = state_12012;
(statearr_12035[(12)] = inst_11976);

return statearr_12035;
})();
var statearr_12036_13326 = state_12012__$1;
(statearr_12036_13326[(2)] = inst_11977);

(statearr_12036_13326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (9))){
var inst_11970 = (state_12012[(7)]);
var _ = (function (){var statearr_12037 = state_12012;
(statearr_12037[(4)] = cljs.core.cons((12),(state_12012[(4)])));

return statearr_12037;
})();
var inst_11983 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11970) : chs__$1.call(null,inst_11970));
var inst_11984 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11970) : done.call(null,inst_11970));
var inst_11985 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11983,inst_11984);
var ___$1 = (function (){var statearr_12040 = state_12012;
(statearr_12040[(4)] = cljs.core.rest((state_12012[(4)])));

return statearr_12040;
})();
var state_12012__$1 = state_12012;
var statearr_12041_13327 = state_12012__$1;
(statearr_12041_13327[(2)] = inst_11985);

(statearr_12041_13327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (5))){
var inst_11995 = (state_12012[(2)]);
var state_12012__$1 = (function (){var statearr_12044 = state_12012;
(statearr_12044[(13)] = inst_11995);

return statearr_12044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12012__$1,(13),dchan);
} else {
if((state_val_12013 === (14))){
var inst_12000 = cljs.core.async.close_BANG_(out);
var state_12012__$1 = state_12012;
var statearr_12049_13328 = state_12012__$1;
(statearr_12049_13328[(2)] = inst_12000);

(statearr_12049_13328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (16))){
var inst_12007 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
var statearr_12051_13329 = state_12012__$1;
(statearr_12051_13329[(2)] = inst_12007);

(statearr_12051_13329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (10))){
var inst_11970 = (state_12012[(7)]);
var inst_11988 = (state_12012[(2)]);
var inst_11989 = (inst_11970 + (1));
var inst_11970__$1 = inst_11989;
var state_12012__$1 = (function (){var statearr_12052 = state_12012;
(statearr_12052[(7)] = inst_11970__$1);

(statearr_12052[(14)] = inst_11988);

return statearr_12052;
})();
var statearr_12054_13330 = state_12012__$1;
(statearr_12054_13330[(2)] = null);

(statearr_12054_13330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12013 === (8))){
var inst_11993 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
var statearr_12055_13331 = state_12012__$1;
(statearr_12055_13331[(2)] = inst_11993);

(statearr_12055_13331[(1)] = (5));


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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_12057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12057[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_12057[(1)] = (1));

return statearr_12057;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_12012){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_12012);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e12059){var ex__10616__auto__ = e12059;
var statearr_12060_13332 = state_12012;
(statearr_12060_13332[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_12012[(4)]))){
var statearr_12062_13333 = state_12012;
(statearr_12062_13333[(1)] = cljs.core.first((state_12012[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13334 = state_12012;
state_12012 = G__13334;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_12012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_12012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12063 = f__10671__auto__();
(statearr_12063[(6)] = c__10670__auto___13314);

return statearr_12063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var G__12068 = arguments.length;
switch (G__12068) {
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
var c__10670__auto___13336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_12103){
var state_val_12104 = (state_12103[(1)]);
if((state_val_12104 === (7))){
var inst_12083 = (state_12103[(7)]);
var inst_12082 = (state_12103[(8)]);
var inst_12082__$1 = (state_12103[(2)]);
var inst_12083__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12082__$1,(0),null);
var inst_12084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12082__$1,(1),null);
var inst_12085 = (inst_12083__$1 == null);
var state_12103__$1 = (function (){var statearr_12105 = state_12103;
(statearr_12105[(7)] = inst_12083__$1);

(statearr_12105[(8)] = inst_12082__$1);

(statearr_12105[(9)] = inst_12084);

return statearr_12105;
})();
if(cljs.core.truth_(inst_12085)){
var statearr_12106_13337 = state_12103__$1;
(statearr_12106_13337[(1)] = (8));

} else {
var statearr_12107_13338 = state_12103__$1;
(statearr_12107_13338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12104 === (1))){
var inst_12072 = cljs.core.vec(chs);
var inst_12073 = inst_12072;
var state_12103__$1 = (function (){var statearr_12108 = state_12103;
(statearr_12108[(10)] = inst_12073);

return statearr_12108;
})();
var statearr_12109_13339 = state_12103__$1;
(statearr_12109_13339[(2)] = null);

(statearr_12109_13339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12104 === (4))){
var inst_12073 = (state_12103[(10)]);
var state_12103__$1 = state_12103;
return cljs.core.async.ioc_alts_BANG_(state_12103__$1,(7),inst_12073);
} else {
if((state_val_12104 === (6))){
var inst_12099 = (state_12103[(2)]);
var state_12103__$1 = state_12103;
var statearr_12111_13340 = state_12103__$1;
(statearr_12111_13340[(2)] = inst_12099);

(statearr_12111_13340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12104 === (3))){
var inst_12101 = (state_12103[(2)]);
var state_12103__$1 = state_12103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12103__$1,inst_12101);
} else {
if((state_val_12104 === (2))){
var inst_12073 = (state_12103[(10)]);
var inst_12075 = cljs.core.count(inst_12073);
var inst_12076 = (inst_12075 > (0));
var state_12103__$1 = state_12103;
if(cljs.core.truth_(inst_12076)){
var statearr_12113_13341 = state_12103__$1;
(statearr_12113_13341[(1)] = (4));

} else {
var statearr_12114_13342 = state_12103__$1;
(statearr_12114_13342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12104 === (11))){
var inst_12073 = (state_12103[(10)]);
var inst_12092 = (state_12103[(2)]);
var tmp12112 = inst_12073;
var inst_12073__$1 = tmp12112;
var state_12103__$1 = (function (){var statearr_12115 = state_12103;
(statearr_12115[(10)] = inst_12073__$1);

(statearr_12115[(11)] = inst_12092);

return statearr_12115;
})();
var statearr_12116_13343 = state_12103__$1;
(statearr_12116_13343[(2)] = null);

(statearr_12116_13343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12104 === (9))){
var inst_12083 = (state_12103[(7)]);
var state_12103__$1 = state_12103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12103__$1,(11),out,inst_12083);
} else {
if((state_val_12104 === (5))){
var inst_12097 = cljs.core.async.close_BANG_(out);
var state_12103__$1 = state_12103;
var statearr_12118_13344 = state_12103__$1;
(statearr_12118_13344[(2)] = inst_12097);

(statearr_12118_13344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12104 === (10))){
var inst_12095 = (state_12103[(2)]);
var state_12103__$1 = state_12103;
var statearr_12120_13345 = state_12103__$1;
(statearr_12120_13345[(2)] = inst_12095);

(statearr_12120_13345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12104 === (8))){
var inst_12083 = (state_12103[(7)]);
var inst_12082 = (state_12103[(8)]);
var inst_12084 = (state_12103[(9)]);
var inst_12073 = (state_12103[(10)]);
var inst_12087 = (function (){var cs = inst_12073;
var vec__12078 = inst_12082;
var v = inst_12083;
var c = inst_12084;
return (function (p1__12066_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12066_SHARP_);
});
})();
var inst_12088 = cljs.core.filterv(inst_12087,inst_12073);
var inst_12073__$1 = inst_12088;
var state_12103__$1 = (function (){var statearr_12129 = state_12103;
(statearr_12129[(10)] = inst_12073__$1);

return statearr_12129;
})();
var statearr_12130_13346 = state_12103__$1;
(statearr_12130_13346[(2)] = null);

(statearr_12130_13346[(1)] = (2));


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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_12135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12135[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_12135[(1)] = (1));

return statearr_12135;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_12103){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_12103);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e12136){var ex__10616__auto__ = e12136;
var statearr_12137_13347 = state_12103;
(statearr_12137_13347[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_12103[(4)]))){
var statearr_12138_13348 = state_12103;
(statearr_12138_13348[(1)] = cljs.core.first((state_12103[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13349 = state_12103;
state_12103 = G__13349;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_12103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_12103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12141 = f__10671__auto__();
(statearr_12141[(6)] = c__10670__auto___13336);

return statearr_12141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var G__12144 = arguments.length;
switch (G__12144) {
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
var c__10670__auto___13351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_12175){
var state_val_12176 = (state_12175[(1)]);
if((state_val_12176 === (7))){
var inst_12157 = (state_12175[(7)]);
var inst_12157__$1 = (state_12175[(2)]);
var inst_12158 = (inst_12157__$1 == null);
var inst_12159 = cljs.core.not(inst_12158);
var state_12175__$1 = (function (){var statearr_12182 = state_12175;
(statearr_12182[(7)] = inst_12157__$1);

return statearr_12182;
})();
if(inst_12159){
var statearr_12183_13352 = state_12175__$1;
(statearr_12183_13352[(1)] = (8));

} else {
var statearr_12185_13353 = state_12175__$1;
(statearr_12185_13353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12176 === (1))){
var inst_12152 = (0);
var state_12175__$1 = (function (){var statearr_12189 = state_12175;
(statearr_12189[(8)] = inst_12152);

return statearr_12189;
})();
var statearr_12191_13354 = state_12175__$1;
(statearr_12191_13354[(2)] = null);

(statearr_12191_13354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12176 === (4))){
var state_12175__$1 = state_12175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12175__$1,(7),ch);
} else {
if((state_val_12176 === (6))){
var inst_12170 = (state_12175[(2)]);
var state_12175__$1 = state_12175;
var statearr_12197_13355 = state_12175__$1;
(statearr_12197_13355[(2)] = inst_12170);

(statearr_12197_13355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12176 === (3))){
var inst_12172 = (state_12175[(2)]);
var inst_12173 = cljs.core.async.close_BANG_(out);
var state_12175__$1 = (function (){var statearr_12204 = state_12175;
(statearr_12204[(9)] = inst_12172);

return statearr_12204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12175__$1,inst_12173);
} else {
if((state_val_12176 === (2))){
var inst_12152 = (state_12175[(8)]);
var inst_12154 = (inst_12152 < n);
var state_12175__$1 = state_12175;
if(cljs.core.truth_(inst_12154)){
var statearr_12205_13356 = state_12175__$1;
(statearr_12205_13356[(1)] = (4));

} else {
var statearr_12206_13357 = state_12175__$1;
(statearr_12206_13357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12176 === (11))){
var inst_12152 = (state_12175[(8)]);
var inst_12162 = (state_12175[(2)]);
var inst_12163 = (inst_12152 + (1));
var inst_12152__$1 = inst_12163;
var state_12175__$1 = (function (){var statearr_12207 = state_12175;
(statearr_12207[(8)] = inst_12152__$1);

(statearr_12207[(10)] = inst_12162);

return statearr_12207;
})();
var statearr_12208_13358 = state_12175__$1;
(statearr_12208_13358[(2)] = null);

(statearr_12208_13358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12176 === (9))){
var state_12175__$1 = state_12175;
var statearr_12211_13359 = state_12175__$1;
(statearr_12211_13359[(2)] = null);

(statearr_12211_13359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12176 === (5))){
var state_12175__$1 = state_12175;
var statearr_12212_13360 = state_12175__$1;
(statearr_12212_13360[(2)] = null);

(statearr_12212_13360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12176 === (10))){
var inst_12167 = (state_12175[(2)]);
var state_12175__$1 = state_12175;
var statearr_12213_13361 = state_12175__$1;
(statearr_12213_13361[(2)] = inst_12167);

(statearr_12213_13361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12176 === (8))){
var inst_12157 = (state_12175[(7)]);
var state_12175__$1 = state_12175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12175__$1,(11),out,inst_12157);
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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_12215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12215[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_12215[(1)] = (1));

return statearr_12215;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_12175){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_12175);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e12216){var ex__10616__auto__ = e12216;
var statearr_12217_13362 = state_12175;
(statearr_12217_13362[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_12175[(4)]))){
var statearr_12218_13363 = state_12175;
(statearr_12218_13363[(1)] = cljs.core.first((state_12175[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13364 = state_12175;
state_12175 = G__13364;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_12175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_12175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12219 = f__10671__auto__();
(statearr_12219[(6)] = c__10670__auto___13351);

return statearr_12219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12224 = (function (f,ch,meta12225){
this.f = f;
this.ch = ch;
this.meta12225 = meta12225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12226,meta12225__$1){
var self__ = this;
var _12226__$1 = this;
return (new cljs.core.async.t_cljs$core$async12224(self__.f,self__.ch,meta12225__$1));
}));

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12226){
var self__ = this;
var _12226__$1 = this;
return self__.meta12225;
}));

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12227 = (function (f,ch,meta12225,_,fn1,meta12228){
this.f = f;
this.ch = ch;
this.meta12225 = meta12225;
this._ = _;
this.fn1 = fn1;
this.meta12228 = meta12228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12229,meta12228__$1){
var self__ = this;
var _12229__$1 = this;
return (new cljs.core.async.t_cljs$core$async12227(self__.f,self__.ch,self__.meta12225,self__._,self__.fn1,meta12228__$1));
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12229){
var self__ = this;
var _12229__$1 = this;
return self__.meta12228;
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12223_SHARP_){
var G__12242 = (((p1__12223_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12223_SHARP_) : self__.f.call(null,p1__12223_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12242) : f1.call(null,G__12242));
});
}));

(cljs.core.async.t_cljs$core$async12227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12225","meta12225",-300409316,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12224","cljs.core.async/t_cljs$core$async12224",180759400,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12228","meta12228",-1144848091,null)], null);
}));

(cljs.core.async.t_cljs$core$async12227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12227");

(cljs.core.async.t_cljs$core$async12227.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12227.
 */
cljs.core.async.__GT_t_cljs$core$async12227 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12227(f__$1,ch__$1,meta12225__$1,___$2,fn1__$1,meta12228){
return (new cljs.core.async.t_cljs$core$async12227(f__$1,ch__$1,meta12225__$1,___$2,fn1__$1,meta12228));
});

}

return (new cljs.core.async.t_cljs$core$async12227(self__.f,self__.ch,self__.meta12225,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12243 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12243) : self__.f.call(null,G__12243));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12225","meta12225",-300409316,null)], null);
}));

(cljs.core.async.t_cljs$core$async12224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12224");

(cljs.core.async.t_cljs$core$async12224.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12224.
 */
cljs.core.async.__GT_t_cljs$core$async12224 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12224(f__$1,ch__$1,meta12225){
return (new cljs.core.async.t_cljs$core$async12224(f__$1,ch__$1,meta12225));
});

}

return (new cljs.core.async.t_cljs$core$async12224(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12254 = (function (f,ch,meta12255){
this.f = f;
this.ch = ch;
this.meta12255 = meta12255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12256,meta12255__$1){
var self__ = this;
var _12256__$1 = this;
return (new cljs.core.async.t_cljs$core$async12254(self__.f,self__.ch,meta12255__$1));
}));

(cljs.core.async.t_cljs$core$async12254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12256){
var self__ = this;
var _12256__$1 = this;
return self__.meta12255;
}));

(cljs.core.async.t_cljs$core$async12254.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12254.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12254.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12255","meta12255",1956170171,null)], null);
}));

(cljs.core.async.t_cljs$core$async12254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12254");

(cljs.core.async.t_cljs$core$async12254.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12254.
 */
cljs.core.async.__GT_t_cljs$core$async12254 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12254(f__$1,ch__$1,meta12255){
return (new cljs.core.async.t_cljs$core$async12254(f__$1,ch__$1,meta12255));
});

}

return (new cljs.core.async.t_cljs$core$async12254(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async12258 = (function (p,ch,meta12259){
this.p = p;
this.ch = ch;
this.meta12259 = meta12259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12260,meta12259__$1){
var self__ = this;
var _12260__$1 = this;
return (new cljs.core.async.t_cljs$core$async12258(self__.p,self__.ch,meta12259__$1));
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

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
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
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12259","meta12259",-856831041,null)], null);
}));

(cljs.core.async.t_cljs$core$async12258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12258");

(cljs.core.async.t_cljs$core$async12258.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12258.
 */
cljs.core.async.__GT_t_cljs$core$async12258 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12258(p__$1,ch__$1,meta12259){
return (new cljs.core.async.t_cljs$core$async12258(p__$1,ch__$1,meta12259));
});

}

return (new cljs.core.async.t_cljs$core$async12258(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12262 = arguments.length;
switch (G__12262) {
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
var c__10670__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_12291){
var state_val_12292 = (state_12291[(1)]);
if((state_val_12292 === (7))){
var inst_12287 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12293_13395 = state_12291__$1;
(statearr_12293_13395[(2)] = inst_12287);

(statearr_12293_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (1))){
var state_12291__$1 = state_12291;
var statearr_12294_13396 = state_12291__$1;
(statearr_12294_13396[(2)] = null);

(statearr_12294_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (4))){
var inst_12271 = (state_12291[(7)]);
var inst_12271__$1 = (state_12291[(2)]);
var inst_12272 = (inst_12271__$1 == null);
var state_12291__$1 = (function (){var statearr_12296 = state_12291;
(statearr_12296[(7)] = inst_12271__$1);

return statearr_12296;
})();
if(cljs.core.truth_(inst_12272)){
var statearr_12297_13397 = state_12291__$1;
(statearr_12297_13397[(1)] = (5));

} else {
var statearr_12298_13398 = state_12291__$1;
(statearr_12298_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (6))){
var inst_12271 = (state_12291[(7)]);
var inst_12276 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12271) : p.call(null,inst_12271));
var state_12291__$1 = state_12291;
if(cljs.core.truth_(inst_12276)){
var statearr_12300_13399 = state_12291__$1;
(statearr_12300_13399[(1)] = (8));

} else {
var statearr_12302_13400 = state_12291__$1;
(statearr_12302_13400[(1)] = (9));

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
var inst_12281 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12303_13401 = state_12291__$1;
(statearr_12303_13401[(2)] = inst_12281);

(statearr_12303_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (9))){
var state_12291__$1 = state_12291;
var statearr_12316_13402 = state_12291__$1;
(statearr_12316_13402[(2)] = null);

(statearr_12316_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (5))){
var inst_12274 = cljs.core.async.close_BANG_(out);
var state_12291__$1 = state_12291;
var statearr_12320_13403 = state_12291__$1;
(statearr_12320_13403[(2)] = inst_12274);

(statearr_12320_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (10))){
var inst_12284 = (state_12291[(2)]);
var state_12291__$1 = (function (){var statearr_12321 = state_12291;
(statearr_12321[(8)] = inst_12284);

return statearr_12321;
})();
var statearr_12322_13404 = state_12291__$1;
(statearr_12322_13404[(2)] = null);

(statearr_12322_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (8))){
var inst_12271 = (state_12291[(7)]);
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12291__$1,(11),out,inst_12271);
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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_12323 = [null,null,null,null,null,null,null,null,null];
(statearr_12323[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_12323[(1)] = (1));

return statearr_12323;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_12291){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_12291);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e12326){var ex__10616__auto__ = e12326;
var statearr_12327_13405 = state_12291;
(statearr_12327_13405[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_12291[(4)]))){
var statearr_12328_13406 = state_12291;
(statearr_12328_13406[(1)] = cljs.core.first((state_12291[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12291;
state_12291 = G__13407;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_12291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_12291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12332 = f__10671__auto__();
(statearr_12332[(6)] = c__10670__auto___13394);

return statearr_12332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12335 = arguments.length;
switch (G__12335) {
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
var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_12404){
var state_val_12405 = (state_12404[(1)]);
if((state_val_12405 === (7))){
var inst_12400 = (state_12404[(2)]);
var state_12404__$1 = state_12404;
var statearr_12406_13409 = state_12404__$1;
(statearr_12406_13409[(2)] = inst_12400);

(statearr_12406_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (20))){
var inst_12370 = (state_12404[(7)]);
var inst_12381 = (state_12404[(2)]);
var inst_12382 = cljs.core.next(inst_12370);
var inst_12351 = inst_12382;
var inst_12352 = null;
var inst_12353 = (0);
var inst_12354 = (0);
var state_12404__$1 = (function (){var statearr_12407 = state_12404;
(statearr_12407[(8)] = inst_12354);

(statearr_12407[(9)] = inst_12352);

(statearr_12407[(10)] = inst_12381);

(statearr_12407[(11)] = inst_12351);

(statearr_12407[(12)] = inst_12353);

return statearr_12407;
})();
var statearr_12408_13410 = state_12404__$1;
(statearr_12408_13410[(2)] = null);

(statearr_12408_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (1))){
var state_12404__$1 = state_12404;
var statearr_12409_13411 = state_12404__$1;
(statearr_12409_13411[(2)] = null);

(statearr_12409_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (4))){
var inst_12340 = (state_12404[(13)]);
var inst_12340__$1 = (state_12404[(2)]);
var inst_12341 = (inst_12340__$1 == null);
var state_12404__$1 = (function (){var statearr_12410 = state_12404;
(statearr_12410[(13)] = inst_12340__$1);

return statearr_12410;
})();
if(cljs.core.truth_(inst_12341)){
var statearr_12411_13412 = state_12404__$1;
(statearr_12411_13412[(1)] = (5));

} else {
var statearr_12412_13413 = state_12404__$1;
(statearr_12412_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (15))){
var state_12404__$1 = state_12404;
var statearr_12416_13414 = state_12404__$1;
(statearr_12416_13414[(2)] = null);

(statearr_12416_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (21))){
var state_12404__$1 = state_12404;
var statearr_12417_13415 = state_12404__$1;
(statearr_12417_13415[(2)] = null);

(statearr_12417_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (13))){
var inst_12354 = (state_12404[(8)]);
var inst_12352 = (state_12404[(9)]);
var inst_12351 = (state_12404[(11)]);
var inst_12353 = (state_12404[(12)]);
var inst_12366 = (state_12404[(2)]);
var inst_12367 = (inst_12354 + (1));
var tmp12413 = inst_12352;
var tmp12414 = inst_12351;
var tmp12415 = inst_12353;
var inst_12351__$1 = tmp12414;
var inst_12352__$1 = tmp12413;
var inst_12353__$1 = tmp12415;
var inst_12354__$1 = inst_12367;
var state_12404__$1 = (function (){var statearr_12418 = state_12404;
(statearr_12418[(8)] = inst_12354__$1);

(statearr_12418[(9)] = inst_12352__$1);

(statearr_12418[(11)] = inst_12351__$1);

(statearr_12418[(14)] = inst_12366);

(statearr_12418[(12)] = inst_12353__$1);

return statearr_12418;
})();
var statearr_12419_13416 = state_12404__$1;
(statearr_12419_13416[(2)] = null);

(statearr_12419_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (22))){
var state_12404__$1 = state_12404;
var statearr_12420_13417 = state_12404__$1;
(statearr_12420_13417[(2)] = null);

(statearr_12420_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (6))){
var inst_12340 = (state_12404[(13)]);
var inst_12349 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12340) : f.call(null,inst_12340));
var inst_12350 = cljs.core.seq(inst_12349);
var inst_12351 = inst_12350;
var inst_12352 = null;
var inst_12353 = (0);
var inst_12354 = (0);
var state_12404__$1 = (function (){var statearr_12421 = state_12404;
(statearr_12421[(8)] = inst_12354);

(statearr_12421[(9)] = inst_12352);

(statearr_12421[(11)] = inst_12351);

(statearr_12421[(12)] = inst_12353);

return statearr_12421;
})();
var statearr_12422_13418 = state_12404__$1;
(statearr_12422_13418[(2)] = null);

(statearr_12422_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (17))){
var inst_12370 = (state_12404[(7)]);
var inst_12374 = cljs.core.chunk_first(inst_12370);
var inst_12375 = cljs.core.chunk_rest(inst_12370);
var inst_12376 = cljs.core.count(inst_12374);
var inst_12351 = inst_12375;
var inst_12352 = inst_12374;
var inst_12353 = inst_12376;
var inst_12354 = (0);
var state_12404__$1 = (function (){var statearr_12423 = state_12404;
(statearr_12423[(8)] = inst_12354);

(statearr_12423[(9)] = inst_12352);

(statearr_12423[(11)] = inst_12351);

(statearr_12423[(12)] = inst_12353);

return statearr_12423;
})();
var statearr_12424_13419 = state_12404__$1;
(statearr_12424_13419[(2)] = null);

(statearr_12424_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (3))){
var inst_12402 = (state_12404[(2)]);
var state_12404__$1 = state_12404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12404__$1,inst_12402);
} else {
if((state_val_12405 === (12))){
var inst_12390 = (state_12404[(2)]);
var state_12404__$1 = state_12404;
var statearr_12425_13420 = state_12404__$1;
(statearr_12425_13420[(2)] = inst_12390);

(statearr_12425_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (2))){
var state_12404__$1 = state_12404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12404__$1,(4),in$);
} else {
if((state_val_12405 === (23))){
var inst_12398 = (state_12404[(2)]);
var state_12404__$1 = state_12404;
var statearr_12426_13421 = state_12404__$1;
(statearr_12426_13421[(2)] = inst_12398);

(statearr_12426_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (19))){
var inst_12385 = (state_12404[(2)]);
var state_12404__$1 = state_12404;
var statearr_12428_13422 = state_12404__$1;
(statearr_12428_13422[(2)] = inst_12385);

(statearr_12428_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (11))){
var inst_12370 = (state_12404[(7)]);
var inst_12351 = (state_12404[(11)]);
var inst_12370__$1 = cljs.core.seq(inst_12351);
var state_12404__$1 = (function (){var statearr_12429 = state_12404;
(statearr_12429[(7)] = inst_12370__$1);

return statearr_12429;
})();
if(inst_12370__$1){
var statearr_12430_13423 = state_12404__$1;
(statearr_12430_13423[(1)] = (14));

} else {
var statearr_12431_13424 = state_12404__$1;
(statearr_12431_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (9))){
var inst_12392 = (state_12404[(2)]);
var inst_12393 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12404__$1 = (function (){var statearr_12432 = state_12404;
(statearr_12432[(15)] = inst_12392);

return statearr_12432;
})();
if(cljs.core.truth_(inst_12393)){
var statearr_12433_13425 = state_12404__$1;
(statearr_12433_13425[(1)] = (21));

} else {
var statearr_12434_13426 = state_12404__$1;
(statearr_12434_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (5))){
var inst_12343 = cljs.core.async.close_BANG_(out);
var state_12404__$1 = state_12404;
var statearr_12435_13427 = state_12404__$1;
(statearr_12435_13427[(2)] = inst_12343);

(statearr_12435_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (14))){
var inst_12370 = (state_12404[(7)]);
var inst_12372 = cljs.core.chunked_seq_QMARK_(inst_12370);
var state_12404__$1 = state_12404;
if(inst_12372){
var statearr_12436_13428 = state_12404__$1;
(statearr_12436_13428[(1)] = (17));

} else {
var statearr_12437_13429 = state_12404__$1;
(statearr_12437_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (16))){
var inst_12388 = (state_12404[(2)]);
var state_12404__$1 = state_12404;
var statearr_12438_13430 = state_12404__$1;
(statearr_12438_13430[(2)] = inst_12388);

(statearr_12438_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12405 === (10))){
var inst_12354 = (state_12404[(8)]);
var inst_12352 = (state_12404[(9)]);
var inst_12364 = cljs.core._nth(inst_12352,inst_12354);
var state_12404__$1 = state_12404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12404__$1,(13),out,inst_12364);
} else {
if((state_val_12405 === (18))){
var inst_12370 = (state_12404[(7)]);
var inst_12379 = cljs.core.first(inst_12370);
var state_12404__$1 = state_12404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12404__$1,(20),out,inst_12379);
} else {
if((state_val_12405 === (8))){
var inst_12354 = (state_12404[(8)]);
var inst_12353 = (state_12404[(12)]);
var inst_12361 = (inst_12354 < inst_12353);
var inst_12362 = inst_12361;
var state_12404__$1 = state_12404;
if(cljs.core.truth_(inst_12362)){
var statearr_12439_13431 = state_12404__$1;
(statearr_12439_13431[(1)] = (10));

} else {
var statearr_12440_13432 = state_12404__$1;
(statearr_12440_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10613__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10613__auto____0 = (function (){
var statearr_12441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12441[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10613__auto__);

(statearr_12441[(1)] = (1));

return statearr_12441;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10613__auto____1 = (function (state_12404){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_12404);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e12442){var ex__10616__auto__ = e12442;
var statearr_12443_13433 = state_12404;
(statearr_12443_13433[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_12404[(4)]))){
var statearr_12444_13434 = state_12404;
(statearr_12444_13434[(1)] = cljs.core.first((state_12404[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12404;
state_12404 = G__13435;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10613__auto__ = function(state_12404){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10613__auto____1.call(this,state_12404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10613__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10613__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12445 = f__10671__auto__();
(statearr_12445[(6)] = c__10670__auto__);

return statearr_12445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12447 = arguments.length;
switch (G__12447) {
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
var G__12451 = arguments.length;
switch (G__12451) {
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
var G__12453 = arguments.length;
switch (G__12453) {
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
var c__10670__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_12477){
var state_val_12478 = (state_12477[(1)]);
if((state_val_12478 === (7))){
var inst_12472 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12483_13440 = state_12477__$1;
(statearr_12483_13440[(2)] = inst_12472);

(statearr_12483_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (1))){
var inst_12454 = null;
var state_12477__$1 = (function (){var statearr_12484 = state_12477;
(statearr_12484[(7)] = inst_12454);

return statearr_12484;
})();
var statearr_12485_13441 = state_12477__$1;
(statearr_12485_13441[(2)] = null);

(statearr_12485_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (4))){
var inst_12457 = (state_12477[(8)]);
var inst_12457__$1 = (state_12477[(2)]);
var inst_12458 = (inst_12457__$1 == null);
var inst_12459 = cljs.core.not(inst_12458);
var state_12477__$1 = (function (){var statearr_12486 = state_12477;
(statearr_12486[(8)] = inst_12457__$1);

return statearr_12486;
})();
if(inst_12459){
var statearr_12487_13442 = state_12477__$1;
(statearr_12487_13442[(1)] = (5));

} else {
var statearr_12488_13443 = state_12477__$1;
(statearr_12488_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (6))){
var state_12477__$1 = state_12477;
var statearr_12489_13444 = state_12477__$1;
(statearr_12489_13444[(2)] = null);

(statearr_12489_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (3))){
var inst_12474 = (state_12477[(2)]);
var inst_12475 = cljs.core.async.close_BANG_(out);
var state_12477__$1 = (function (){var statearr_12490 = state_12477;
(statearr_12490[(9)] = inst_12474);

return statearr_12490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12477__$1,inst_12475);
} else {
if((state_val_12478 === (2))){
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12477__$1,(4),ch);
} else {
if((state_val_12478 === (11))){
var inst_12457 = (state_12477[(8)]);
var inst_12466 = (state_12477[(2)]);
var inst_12454 = inst_12457;
var state_12477__$1 = (function (){var statearr_12491 = state_12477;
(statearr_12491[(7)] = inst_12454);

(statearr_12491[(10)] = inst_12466);

return statearr_12491;
})();
var statearr_12492_13445 = state_12477__$1;
(statearr_12492_13445[(2)] = null);

(statearr_12492_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (9))){
var inst_12457 = (state_12477[(8)]);
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12477__$1,(11),out,inst_12457);
} else {
if((state_val_12478 === (5))){
var inst_12454 = (state_12477[(7)]);
var inst_12457 = (state_12477[(8)]);
var inst_12461 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12457,inst_12454);
var state_12477__$1 = state_12477;
if(inst_12461){
var statearr_12494_13446 = state_12477__$1;
(statearr_12494_13446[(1)] = (8));

} else {
var statearr_12495_13447 = state_12477__$1;
(statearr_12495_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (10))){
var inst_12469 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12496_13448 = state_12477__$1;
(statearr_12496_13448[(2)] = inst_12469);

(statearr_12496_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (8))){
var inst_12454 = (state_12477[(7)]);
var tmp12493 = inst_12454;
var inst_12454__$1 = tmp12493;
var state_12477__$1 = (function (){var statearr_12497 = state_12477;
(statearr_12497[(7)] = inst_12454__$1);

return statearr_12497;
})();
var statearr_12498_13449 = state_12477__$1;
(statearr_12498_13449[(2)] = null);

(statearr_12498_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_12499 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12499[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_12499[(1)] = (1));

return statearr_12499;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_12477){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_12477);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e12500){var ex__10616__auto__ = e12500;
var statearr_12501_13450 = state_12477;
(statearr_12501_13450[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_12477[(4)]))){
var statearr_12502_13451 = state_12477;
(statearr_12502_13451[(1)] = cljs.core.first((state_12477[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12477;
state_12477 = G__13452;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_12477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_12477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12503 = f__10671__auto__();
(statearr_12503[(6)] = c__10670__auto___13439);

return statearr_12503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12505 = arguments.length;
switch (G__12505) {
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
var c__10670__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_12544){
var state_val_12545 = (state_12544[(1)]);
if((state_val_12545 === (7))){
var inst_12540 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12546_13455 = state_12544__$1;
(statearr_12546_13455[(2)] = inst_12540);

(statearr_12546_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (1))){
var inst_12506 = (new Array(n));
var inst_12507 = inst_12506;
var inst_12508 = (0);
var state_12544__$1 = (function (){var statearr_12547 = state_12544;
(statearr_12547[(7)] = inst_12507);

(statearr_12547[(8)] = inst_12508);

return statearr_12547;
})();
var statearr_12548_13456 = state_12544__$1;
(statearr_12548_13456[(2)] = null);

(statearr_12548_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (4))){
var inst_12511 = (state_12544[(9)]);
var inst_12511__$1 = (state_12544[(2)]);
var inst_12512 = (inst_12511__$1 == null);
var inst_12513 = cljs.core.not(inst_12512);
var state_12544__$1 = (function (){var statearr_12549 = state_12544;
(statearr_12549[(9)] = inst_12511__$1);

return statearr_12549;
})();
if(inst_12513){
var statearr_12550_13457 = state_12544__$1;
(statearr_12550_13457[(1)] = (5));

} else {
var statearr_12551_13458 = state_12544__$1;
(statearr_12551_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (15))){
var inst_12534 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12552_13459 = state_12544__$1;
(statearr_12552_13459[(2)] = inst_12534);

(statearr_12552_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (13))){
var state_12544__$1 = state_12544;
var statearr_12553_13460 = state_12544__$1;
(statearr_12553_13460[(2)] = null);

(statearr_12553_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (6))){
var inst_12508 = (state_12544[(8)]);
var inst_12530 = (inst_12508 > (0));
var state_12544__$1 = state_12544;
if(cljs.core.truth_(inst_12530)){
var statearr_12554_13461 = state_12544__$1;
(statearr_12554_13461[(1)] = (12));

} else {
var statearr_12555_13462 = state_12544__$1;
(statearr_12555_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (3))){
var inst_12542 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12544__$1,inst_12542);
} else {
if((state_val_12545 === (12))){
var inst_12507 = (state_12544[(7)]);
var inst_12532 = cljs.core.vec(inst_12507);
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12544__$1,(15),out,inst_12532);
} else {
if((state_val_12545 === (2))){
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12544__$1,(4),ch);
} else {
if((state_val_12545 === (11))){
var inst_12524 = (state_12544[(2)]);
var inst_12525 = (new Array(n));
var inst_12507 = inst_12525;
var inst_12508 = (0);
var state_12544__$1 = (function (){var statearr_12556 = state_12544;
(statearr_12556[(10)] = inst_12524);

(statearr_12556[(7)] = inst_12507);

(statearr_12556[(8)] = inst_12508);

return statearr_12556;
})();
var statearr_12557_13463 = state_12544__$1;
(statearr_12557_13463[(2)] = null);

(statearr_12557_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (9))){
var inst_12507 = (state_12544[(7)]);
var inst_12522 = cljs.core.vec(inst_12507);
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12544__$1,(11),out,inst_12522);
} else {
if((state_val_12545 === (5))){
var inst_12511 = (state_12544[(9)]);
var inst_12507 = (state_12544[(7)]);
var inst_12517 = (state_12544[(11)]);
var inst_12508 = (state_12544[(8)]);
var inst_12515 = (inst_12507[inst_12508] = inst_12511);
var inst_12517__$1 = (inst_12508 + (1));
var inst_12518 = (inst_12517__$1 < n);
var state_12544__$1 = (function (){var statearr_12572 = state_12544;
(statearr_12572[(12)] = inst_12515);

(statearr_12572[(11)] = inst_12517__$1);

return statearr_12572;
})();
if(cljs.core.truth_(inst_12518)){
var statearr_12573_13464 = state_12544__$1;
(statearr_12573_13464[(1)] = (8));

} else {
var statearr_12574_13465 = state_12544__$1;
(statearr_12574_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (14))){
var inst_12537 = (state_12544[(2)]);
var inst_12538 = cljs.core.async.close_BANG_(out);
var state_12544__$1 = (function (){var statearr_12578 = state_12544;
(statearr_12578[(13)] = inst_12537);

return statearr_12578;
})();
var statearr_12579_13466 = state_12544__$1;
(statearr_12579_13466[(2)] = inst_12538);

(statearr_12579_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (10))){
var inst_12528 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12581_13467 = state_12544__$1;
(statearr_12581_13467[(2)] = inst_12528);

(statearr_12581_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (8))){
var inst_12507 = (state_12544[(7)]);
var inst_12517 = (state_12544[(11)]);
var tmp12575 = inst_12507;
var inst_12507__$1 = tmp12575;
var inst_12508 = inst_12517;
var state_12544__$1 = (function (){var statearr_12582 = state_12544;
(statearr_12582[(7)] = inst_12507__$1);

(statearr_12582[(8)] = inst_12508);

return statearr_12582;
})();
var statearr_12583_13468 = state_12544__$1;
(statearr_12583_13468[(2)] = null);

(statearr_12583_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_12584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12584[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_12584[(1)] = (1));

return statearr_12584;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_12544){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_12544);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e12585){var ex__10616__auto__ = e12585;
var statearr_12586_13469 = state_12544;
(statearr_12586_13469[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_12544[(4)]))){
var statearr_12587_13470 = state_12544;
(statearr_12587_13470[(1)] = cljs.core.first((state_12544[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12544;
state_12544 = G__13471;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_12544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_12544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12596 = f__10671__auto__();
(statearr_12596[(6)] = c__10670__auto___13454);

return statearr_12596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var c__10670__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10612__auto__ = (function (state_12664){
var state_val_12665 = (state_12664[(1)]);
if((state_val_12665 === (7))){
var inst_12660 = (state_12664[(2)]);
var state_12664__$1 = state_12664;
var statearr_12666_13474 = state_12664__$1;
(statearr_12666_13474[(2)] = inst_12660);

(statearr_12666_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (1))){
var inst_12623 = [];
var inst_12624 = inst_12623;
var inst_12625 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12664__$1 = (function (){var statearr_12667 = state_12664;
(statearr_12667[(7)] = inst_12624);

(statearr_12667[(8)] = inst_12625);

return statearr_12667;
})();
var statearr_12668_13475 = state_12664__$1;
(statearr_12668_13475[(2)] = null);

(statearr_12668_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (4))){
var inst_12628 = (state_12664[(9)]);
var inst_12628__$1 = (state_12664[(2)]);
var inst_12629 = (inst_12628__$1 == null);
var inst_12630 = cljs.core.not(inst_12629);
var state_12664__$1 = (function (){var statearr_12669 = state_12664;
(statearr_12669[(9)] = inst_12628__$1);

return statearr_12669;
})();
if(inst_12630){
var statearr_12670_13476 = state_12664__$1;
(statearr_12670_13476[(1)] = (5));

} else {
var statearr_12671_13477 = state_12664__$1;
(statearr_12671_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (15))){
var inst_12654 = (state_12664[(2)]);
var state_12664__$1 = state_12664;
var statearr_12672_13478 = state_12664__$1;
(statearr_12672_13478[(2)] = inst_12654);

(statearr_12672_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (13))){
var state_12664__$1 = state_12664;
var statearr_12673_13479 = state_12664__$1;
(statearr_12673_13479[(2)] = null);

(statearr_12673_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (6))){
var inst_12624 = (state_12664[(7)]);
var inst_12649 = inst_12624.length;
var inst_12650 = (inst_12649 > (0));
var state_12664__$1 = state_12664;
if(cljs.core.truth_(inst_12650)){
var statearr_12674_13480 = state_12664__$1;
(statearr_12674_13480[(1)] = (12));

} else {
var statearr_12675_13481 = state_12664__$1;
(statearr_12675_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (3))){
var inst_12662 = (state_12664[(2)]);
var state_12664__$1 = state_12664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12664__$1,inst_12662);
} else {
if((state_val_12665 === (12))){
var inst_12624 = (state_12664[(7)]);
var inst_12652 = cljs.core.vec(inst_12624);
var state_12664__$1 = state_12664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12664__$1,(15),out,inst_12652);
} else {
if((state_val_12665 === (2))){
var state_12664__$1 = state_12664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12664__$1,(4),ch);
} else {
if((state_val_12665 === (11))){
var inst_12628 = (state_12664[(9)]);
var inst_12632 = (state_12664[(10)]);
var inst_12642 = (state_12664[(2)]);
var inst_12643 = [];
var inst_12644 = inst_12643.push(inst_12628);
var inst_12624 = inst_12643;
var inst_12625 = inst_12632;
var state_12664__$1 = (function (){var statearr_12681 = state_12664;
(statearr_12681[(11)] = inst_12642);

(statearr_12681[(12)] = inst_12644);

(statearr_12681[(7)] = inst_12624);

(statearr_12681[(8)] = inst_12625);

return statearr_12681;
})();
var statearr_12684_13482 = state_12664__$1;
(statearr_12684_13482[(2)] = null);

(statearr_12684_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (9))){
var inst_12624 = (state_12664[(7)]);
var inst_12640 = cljs.core.vec(inst_12624);
var state_12664__$1 = state_12664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12664__$1,(11),out,inst_12640);
} else {
if((state_val_12665 === (5))){
var inst_12628 = (state_12664[(9)]);
var inst_12625 = (state_12664[(8)]);
var inst_12632 = (state_12664[(10)]);
var inst_12632__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12628) : f.call(null,inst_12628));
var inst_12633 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12632__$1,inst_12625);
var inst_12634 = cljs.core.keyword_identical_QMARK_(inst_12625,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12635 = ((inst_12633) || (inst_12634));
var state_12664__$1 = (function (){var statearr_12686 = state_12664;
(statearr_12686[(10)] = inst_12632__$1);

return statearr_12686;
})();
if(cljs.core.truth_(inst_12635)){
var statearr_12687_13483 = state_12664__$1;
(statearr_12687_13483[(1)] = (8));

} else {
var statearr_12688_13484 = state_12664__$1;
(statearr_12688_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (14))){
var inst_12657 = (state_12664[(2)]);
var inst_12658 = cljs.core.async.close_BANG_(out);
var state_12664__$1 = (function (){var statearr_12690 = state_12664;
(statearr_12690[(13)] = inst_12657);

return statearr_12690;
})();
var statearr_12691_13485 = state_12664__$1;
(statearr_12691_13485[(2)] = inst_12658);

(statearr_12691_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (10))){
var inst_12647 = (state_12664[(2)]);
var state_12664__$1 = state_12664;
var statearr_12692_13486 = state_12664__$1;
(statearr_12692_13486[(2)] = inst_12647);

(statearr_12692_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12665 === (8))){
var inst_12624 = (state_12664[(7)]);
var inst_12628 = (state_12664[(9)]);
var inst_12632 = (state_12664[(10)]);
var inst_12637 = inst_12624.push(inst_12628);
var tmp12689 = inst_12624;
var inst_12624__$1 = tmp12689;
var inst_12625 = inst_12632;
var state_12664__$1 = (function (){var statearr_12695 = state_12664;
(statearr_12695[(14)] = inst_12637);

(statearr_12695[(7)] = inst_12624__$1);

(statearr_12695[(8)] = inst_12625);

return statearr_12695;
})();
var statearr_12696_13487 = state_12664__$1;
(statearr_12696_13487[(2)] = null);

(statearr_12696_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10613__auto__ = null;
var cljs$core$async$state_machine__10613__auto____0 = (function (){
var statearr_12697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12697[(0)] = cljs$core$async$state_machine__10613__auto__);

(statearr_12697[(1)] = (1));

return statearr_12697;
});
var cljs$core$async$state_machine__10613__auto____1 = (function (state_12664){
while(true){
var ret_value__10614__auto__ = (function (){try{while(true){
var result__10615__auto__ = switch__10612__auto__(state_12664);
if(cljs.core.keyword_identical_QMARK_(result__10615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10615__auto__;
}
break;
}
}catch (e12698){var ex__10616__auto__ = e12698;
var statearr_12699_13488 = state_12664;
(statearr_12699_13488[(2)] = ex__10616__auto__);


if(cljs.core.seq((state_12664[(4)]))){
var statearr_12700_13489 = state_12664;
(statearr_12700_13489[(1)] = cljs.core.first((state_12664[(4)])));

} else {
throw ex__10616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12664;
state_12664 = G__13490;
continue;
} else {
return ret_value__10614__auto__;
}
break;
}
});
cljs$core$async$state_machine__10613__auto__ = function(state_12664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10613__auto____1.call(this,state_12664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10613__auto____0;
cljs$core$async$state_machine__10613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10613__auto____1;
return cljs$core$async$state_machine__10613__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12701 = f__10671__auto__();
(statearr_12701[(6)] = c__10670__auto___13473);

return statearr_12701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
