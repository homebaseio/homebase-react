goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10890 = arguments.length;
switch (G__10890) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10891 = (function (f,blockable,meta10892){
this.f = f;
this.blockable = blockable;
this.meta10892 = meta10892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10893,meta10892__$1){
var self__ = this;
var _10893__$1 = this;
return (new cljs.core.async.t_cljs$core$async10891(self__.f,self__.blockable,meta10892__$1));
}));

(cljs.core.async.t_cljs$core$async10891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10893){
var self__ = this;
var _10893__$1 = this;
return self__.meta10892;
}));

(cljs.core.async.t_cljs$core$async10891.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10892","meta10892",1991605169,null)], null);
}));

(cljs.core.async.t_cljs$core$async10891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10891");

(cljs.core.async.t_cljs$core$async10891.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10891.
 */
cljs.core.async.__GT_t_cljs$core$async10891 = (function cljs$core$async$__GT_t_cljs$core$async10891(f__$1,blockable__$1,meta10892){
return (new cljs.core.async.t_cljs$core$async10891(f__$1,blockable__$1,meta10892));
});

}

return (new cljs.core.async.t_cljs$core$async10891(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10906 = arguments.length;
switch (G__10906) {
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
var G__10908 = arguments.length;
switch (G__10908) {
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
var G__10928 = arguments.length;
switch (G__10928) {
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
var val_12898 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12898) : fn1.call(null,val_12898));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12898) : fn1.call(null,val_12898));
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
var G__10930 = arguments.length;
switch (G__10930) {
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
var n__4613__auto___12900 = n;
var x_12901 = (0);
while(true){
if((x_12901 < n__4613__auto___12900)){
(a[x_12901] = x_12901);

var G__12902 = (x_12901 + (1));
x_12901 = G__12902;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10946 = (function (flag,meta10947){
this.flag = flag;
this.meta10947 = meta10947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10948,meta10947__$1){
var self__ = this;
var _10948__$1 = this;
return (new cljs.core.async.t_cljs$core$async10946(self__.flag,meta10947__$1));
}));

(cljs.core.async.t_cljs$core$async10946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10948){
var self__ = this;
var _10948__$1 = this;
return self__.meta10947;
}));

(cljs.core.async.t_cljs$core$async10946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10947","meta10947",1745970551,null)], null);
}));

(cljs.core.async.t_cljs$core$async10946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10946");

(cljs.core.async.t_cljs$core$async10946.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10946.
 */
cljs.core.async.__GT_t_cljs$core$async10946 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10946(flag__$1,meta10947){
return (new cljs.core.async.t_cljs$core$async10946(flag__$1,meta10947));
});

}

return (new cljs.core.async.t_cljs$core$async10946(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10961 = (function (flag,cb,meta10962){
this.flag = flag;
this.cb = cb;
this.meta10962 = meta10962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10963,meta10962__$1){
var self__ = this;
var _10963__$1 = this;
return (new cljs.core.async.t_cljs$core$async10961(self__.flag,self__.cb,meta10962__$1));
}));

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10963){
var self__ = this;
var _10963__$1 = this;
return self__.meta10962;
}));

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10962","meta10962",1312116644,null)], null);
}));

(cljs.core.async.t_cljs$core$async10961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10961");

(cljs.core.async.t_cljs$core$async10961.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10961.
 */
cljs.core.async.__GT_t_cljs$core$async10961 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10961(flag__$1,cb__$1,meta10962){
return (new cljs.core.async.t_cljs$core$async10961(flag__$1,cb__$1,meta10962));
});

}

return (new cljs.core.async.t_cljs$core$async10961(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10976_SHARP_){
var G__10990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10976_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10990) : fret.call(null,G__10990));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10977_SHARP_){
var G__10993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10977_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10993) : fret.call(null,G__10993));
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
var G__12914 = (i + (1));
i = G__12914;
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
var len__4736__auto___12925 = arguments.length;
var i__4737__auto___12926 = (0);
while(true){
if((i__4737__auto___12926 < len__4736__auto___12925)){
args__4742__auto__.push((arguments[i__4737__auto___12926]));

var G__12927 = (i__4737__auto___12926 + (1));
i__4737__auto___12926 = G__12927;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10998){
var map__10999 = p__10998;
var map__10999__$1 = (((((!((map__10999 == null))))?(((((map__10999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10999):map__10999);
var opts = map__10999__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10995){
var G__10996 = cljs.core.first(seq10995);
var seq10995__$1 = cljs.core.next(seq10995);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10996,seq10995__$1);
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
var G__11011 = arguments.length;
switch (G__11011) {
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
var c__10799__auto___12943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11044){
var state_val_11045 = (state_11044[(1)]);
if((state_val_11045 === (7))){
var inst_11040 = (state_11044[(2)]);
var state_11044__$1 = state_11044;
var statearr_11046_12951 = state_11044__$1;
(statearr_11046_12951[(2)] = inst_11040);

(statearr_11046_12951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (1))){
var state_11044__$1 = state_11044;
var statearr_11047_12956 = state_11044__$1;
(statearr_11047_12956[(2)] = null);

(statearr_11047_12956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (4))){
var inst_11021 = (state_11044[(7)]);
var inst_11021__$1 = (state_11044[(2)]);
var inst_11024 = (inst_11021__$1 == null);
var state_11044__$1 = (function (){var statearr_11048 = state_11044;
(statearr_11048[(7)] = inst_11021__$1);

return statearr_11048;
})();
if(cljs.core.truth_(inst_11024)){
var statearr_11049_12962 = state_11044__$1;
(statearr_11049_12962[(1)] = (5));

} else {
var statearr_11050_12963 = state_11044__$1;
(statearr_11050_12963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (13))){
var state_11044__$1 = state_11044;
var statearr_11051_12969 = state_11044__$1;
(statearr_11051_12969[(2)] = null);

(statearr_11051_12969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (6))){
var inst_11021 = (state_11044[(7)]);
var state_11044__$1 = state_11044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11044__$1,(11),to,inst_11021);
} else {
if((state_val_11045 === (3))){
var inst_11042 = (state_11044[(2)]);
var state_11044__$1 = state_11044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11044__$1,inst_11042);
} else {
if((state_val_11045 === (12))){
var state_11044__$1 = state_11044;
var statearr_11052_12981 = state_11044__$1;
(statearr_11052_12981[(2)] = null);

(statearr_11052_12981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (2))){
var state_11044__$1 = state_11044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11044__$1,(4),from);
} else {
if((state_val_11045 === (11))){
var inst_11033 = (state_11044[(2)]);
var state_11044__$1 = state_11044;
if(cljs.core.truth_(inst_11033)){
var statearr_11053_12995 = state_11044__$1;
(statearr_11053_12995[(1)] = (12));

} else {
var statearr_11054_12996 = state_11044__$1;
(statearr_11054_12996[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (9))){
var state_11044__$1 = state_11044;
var statearr_11055_12997 = state_11044__$1;
(statearr_11055_12997[(2)] = null);

(statearr_11055_12997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (5))){
var state_11044__$1 = state_11044;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11056_12999 = state_11044__$1;
(statearr_11056_12999[(1)] = (8));

} else {
var statearr_11057_13000 = state_11044__$1;
(statearr_11057_13000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (14))){
var inst_11038 = (state_11044[(2)]);
var state_11044__$1 = state_11044;
var statearr_11058_13001 = state_11044__$1;
(statearr_11058_13001[(2)] = inst_11038);

(statearr_11058_13001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (10))){
var inst_11030 = (state_11044[(2)]);
var state_11044__$1 = state_11044;
var statearr_11060_13002 = state_11044__$1;
(statearr_11060_13002[(2)] = inst_11030);

(statearr_11060_13002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (8))){
var inst_11027 = cljs.core.async.close_BANG_(to);
var state_11044__$1 = state_11044;
var statearr_11061_13003 = state_11044__$1;
(statearr_11061_13003[(2)] = inst_11027);

(statearr_11061_13003[(1)] = (10));


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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_11062 = [null,null,null,null,null,null,null,null];
(statearr_11062[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_11062[(1)] = (1));

return statearr_11062;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_11044){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11044);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11063){var ex__10730__auto__ = e11063;
var statearr_11064_13004 = state_11044;
(statearr_11064_13004[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11044[(4)]))){
var statearr_11069_13005 = state_11044;
(statearr_11069_13005[(1)] = cljs.core.first((state_11044[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13006 = state_11044;
state_11044 = G__13006;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_11044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_11044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11071 = f__10800__auto__();
(statearr_11071[(6)] = c__10799__auto___12943);

return statearr_11071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
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
var process = (function (p__11072){
var vec__11073 = p__11072;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11073,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11073,(1),null);
var job = vec__11073;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10799__auto___13010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11080){
var state_val_11081 = (state_11080[(1)]);
if((state_val_11081 === (1))){
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11080__$1,(2),res,v);
} else {
if((state_val_11081 === (2))){
var inst_11077 = (state_11080[(2)]);
var inst_11078 = cljs.core.async.close_BANG_(res);
var state_11080__$1 = (function (){var statearr_11082 = state_11080;
(statearr_11082[(7)] = inst_11077);

return statearr_11082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11080__$1,inst_11078);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0 = (function (){
var statearr_11083 = [null,null,null,null,null,null,null,null];
(statearr_11083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__);

(statearr_11083[(1)] = (1));

return statearr_11083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1 = (function (state_11080){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11080);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11084){var ex__10730__auto__ = e11084;
var statearr_11085_13018 = state_11080;
(statearr_11085_13018[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11080[(4)]))){
var statearr_11086_13019 = state_11080;
(statearr_11086_13019[(1)] = cljs.core.first((state_11080[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13021 = state_11080;
state_11080 = G__13021;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = function(state_11080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1.call(this,state_11080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11087 = f__10800__auto__();
(statearr_11087[(6)] = c__10799__auto___13010);

return statearr_11087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11088){
var vec__11089 = p__11088;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11089,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11089,(1),null);
var job = vec__11089;
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
var n__4613__auto___13022 = n;
var __13023 = (0);
while(true){
if((__13023 < n__4613__auto___13022)){
var G__11096_13024 = type;
var G__11096_13025__$1 = (((G__11096_13024 instanceof cljs.core.Keyword))?G__11096_13024.fqn:null);
switch (G__11096_13025__$1) {
case "compute":
var c__10799__auto___13027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13023,c__10799__auto___13027,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async){
return (function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = ((function (__13023,c__10799__auto___13027,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async){
return (function (state_11109){
var state_val_11110 = (state_11109[(1)]);
if((state_val_11110 === (1))){
var state_11109__$1 = state_11109;
var statearr_11111_13028 = state_11109__$1;
(statearr_11111_13028[(2)] = null);

(statearr_11111_13028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (2))){
var state_11109__$1 = state_11109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11109__$1,(4),jobs);
} else {
if((state_val_11110 === (3))){
var inst_11107 = (state_11109[(2)]);
var state_11109__$1 = state_11109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11109__$1,inst_11107);
} else {
if((state_val_11110 === (4))){
var inst_11099 = (state_11109[(2)]);
var inst_11100 = process(inst_11099);
var state_11109__$1 = state_11109;
if(cljs.core.truth_(inst_11100)){
var statearr_11112_13029 = state_11109__$1;
(statearr_11112_13029[(1)] = (5));

} else {
var statearr_11113_13030 = state_11109__$1;
(statearr_11113_13030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (5))){
var state_11109__$1 = state_11109;
var statearr_11114_13031 = state_11109__$1;
(statearr_11114_13031[(2)] = null);

(statearr_11114_13031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (6))){
var state_11109__$1 = state_11109;
var statearr_11115_13033 = state_11109__$1;
(statearr_11115_13033[(2)] = null);

(statearr_11115_13033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (7))){
var inst_11105 = (state_11109[(2)]);
var state_11109__$1 = state_11109;
var statearr_11116_13034 = state_11109__$1;
(statearr_11116_13034[(2)] = inst_11105);

(statearr_11116_13034[(1)] = (3));


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
});})(__13023,c__10799__auto___13027,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async))
;
return ((function (__13023,switch__10726__auto__,c__10799__auto___13027,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0 = (function (){
var statearr_11117 = [null,null,null,null,null,null,null];
(statearr_11117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__);

(statearr_11117[(1)] = (1));

return statearr_11117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1 = (function (state_11109){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11109);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11118){var ex__10730__auto__ = e11118;
var statearr_11119_13036 = state_11109;
(statearr_11119_13036[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11109[(4)]))){
var statearr_11120_13037 = state_11109;
(statearr_11120_13037[(1)] = cljs.core.first((state_11109[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13038 = state_11109;
state_11109 = G__13038;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = function(state_11109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1.call(this,state_11109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__;
})()
;})(__13023,switch__10726__auto__,c__10799__auto___13027,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async))
})();
var state__10801__auto__ = (function (){var statearr_11121 = f__10800__auto__();
(statearr_11121[(6)] = c__10799__auto___13027);

return statearr_11121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
});})(__13023,c__10799__auto___13027,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async))
);


break;
case "async":
var c__10799__auto___13045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13023,c__10799__auto___13045,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async){
return (function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = ((function (__13023,c__10799__auto___13045,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async){
return (function (state_11134){
var state_val_11135 = (state_11134[(1)]);
if((state_val_11135 === (1))){
var state_11134__$1 = state_11134;
var statearr_11136_13047 = state_11134__$1;
(statearr_11136_13047[(2)] = null);

(statearr_11136_13047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11135 === (2))){
var state_11134__$1 = state_11134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11134__$1,(4),jobs);
} else {
if((state_val_11135 === (3))){
var inst_11132 = (state_11134[(2)]);
var state_11134__$1 = state_11134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11134__$1,inst_11132);
} else {
if((state_val_11135 === (4))){
var inst_11124 = (state_11134[(2)]);
var inst_11125 = async(inst_11124);
var state_11134__$1 = state_11134;
if(cljs.core.truth_(inst_11125)){
var statearr_11137_13049 = state_11134__$1;
(statearr_11137_13049[(1)] = (5));

} else {
var statearr_11138_13050 = state_11134__$1;
(statearr_11138_13050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11135 === (5))){
var state_11134__$1 = state_11134;
var statearr_11139_13051 = state_11134__$1;
(statearr_11139_13051[(2)] = null);

(statearr_11139_13051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11135 === (6))){
var state_11134__$1 = state_11134;
var statearr_11140_13052 = state_11134__$1;
(statearr_11140_13052[(2)] = null);

(statearr_11140_13052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11135 === (7))){
var inst_11130 = (state_11134[(2)]);
var state_11134__$1 = state_11134;
var statearr_11141_13054 = state_11134__$1;
(statearr_11141_13054[(2)] = inst_11130);

(statearr_11141_13054[(1)] = (3));


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
});})(__13023,c__10799__auto___13045,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async))
;
return ((function (__13023,switch__10726__auto__,c__10799__auto___13045,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0 = (function (){
var statearr_11142 = [null,null,null,null,null,null,null];
(statearr_11142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__);

(statearr_11142[(1)] = (1));

return statearr_11142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1 = (function (state_11134){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11134);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11143){var ex__10730__auto__ = e11143;
var statearr_11144_13055 = state_11134;
(statearr_11144_13055[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11134[(4)]))){
var statearr_11145_13056 = state_11134;
(statearr_11145_13056[(1)] = cljs.core.first((state_11134[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13058 = state_11134;
state_11134 = G__13058;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = function(state_11134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1.call(this,state_11134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__;
})()
;})(__13023,switch__10726__auto__,c__10799__auto___13045,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async))
})();
var state__10801__auto__ = (function (){var statearr_11146 = f__10800__auto__();
(statearr_11146[(6)] = c__10799__auto___13045);

return statearr_11146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
});})(__13023,c__10799__auto___13045,G__11096_13024,G__11096_13025__$1,n__4613__auto___13022,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11096_13025__$1)].join('')));

}

var G__13059 = (__13023 + (1));
__13023 = G__13059;
continue;
} else {
}
break;
}

var c__10799__auto___13060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11172){
var state_val_11173 = (state_11172[(1)]);
if((state_val_11173 === (7))){
var inst_11166 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
var statearr_11177_13061 = state_11172__$1;
(statearr_11177_13061[(2)] = inst_11166);

(statearr_11177_13061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (1))){
var state_11172__$1 = state_11172;
var statearr_11178_13062 = state_11172__$1;
(statearr_11178_13062[(2)] = null);

(statearr_11178_13062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (4))){
var inst_11149 = (state_11172[(7)]);
var inst_11149__$1 = (state_11172[(2)]);
var inst_11150 = (inst_11149__$1 == null);
var state_11172__$1 = (function (){var statearr_11179 = state_11172;
(statearr_11179[(7)] = inst_11149__$1);

return statearr_11179;
})();
if(cljs.core.truth_(inst_11150)){
var statearr_11180_13063 = state_11172__$1;
(statearr_11180_13063[(1)] = (5));

} else {
var statearr_11182_13064 = state_11172__$1;
(statearr_11182_13064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (6))){
var inst_11154 = (state_11172[(8)]);
var inst_11149 = (state_11172[(7)]);
var inst_11154__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11155 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11156 = [inst_11149,inst_11154__$1];
var inst_11157 = (new cljs.core.PersistentVector(null,2,(5),inst_11155,inst_11156,null));
var state_11172__$1 = (function (){var statearr_11183 = state_11172;
(statearr_11183[(8)] = inst_11154__$1);

return statearr_11183;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11172__$1,(8),jobs,inst_11157);
} else {
if((state_val_11173 === (3))){
var inst_11168 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11172__$1,inst_11168);
} else {
if((state_val_11173 === (2))){
var state_11172__$1 = state_11172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11172__$1,(4),from);
} else {
if((state_val_11173 === (9))){
var inst_11163 = (state_11172[(2)]);
var state_11172__$1 = (function (){var statearr_11184 = state_11172;
(statearr_11184[(9)] = inst_11163);

return statearr_11184;
})();
var statearr_11185_13065 = state_11172__$1;
(statearr_11185_13065[(2)] = null);

(statearr_11185_13065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (5))){
var inst_11152 = cljs.core.async.close_BANG_(jobs);
var state_11172__$1 = state_11172;
var statearr_11186_13066 = state_11172__$1;
(statearr_11186_13066[(2)] = inst_11152);

(statearr_11186_13066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (8))){
var inst_11154 = (state_11172[(8)]);
var inst_11159 = (state_11172[(2)]);
var state_11172__$1 = (function (){var statearr_11187 = state_11172;
(statearr_11187[(10)] = inst_11159);

return statearr_11187;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11172__$1,(9),results,inst_11154);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0 = (function (){
var statearr_11188 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__);

(statearr_11188[(1)] = (1));

return statearr_11188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1 = (function (state_11172){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11172);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11189){var ex__10730__auto__ = e11189;
var statearr_11190_13067 = state_11172;
(statearr_11190_13067[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11172[(4)]))){
var statearr_11191_13068 = state_11172;
(statearr_11191_13068[(1)] = cljs.core.first((state_11172[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_11172;
state_11172 = G__13069;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = function(state_11172){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1.call(this,state_11172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11192 = f__10800__auto__();
(statearr_11192[(6)] = c__10799__auto___13060);

return statearr_11192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));


var c__10799__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11230){
var state_val_11231 = (state_11230[(1)]);
if((state_val_11231 === (7))){
var inst_11226 = (state_11230[(2)]);
var state_11230__$1 = state_11230;
var statearr_11232_13070 = state_11230__$1;
(statearr_11232_13070[(2)] = inst_11226);

(statearr_11232_13070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (20))){
var state_11230__$1 = state_11230;
var statearr_11233_13071 = state_11230__$1;
(statearr_11233_13071[(2)] = null);

(statearr_11233_13071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (1))){
var state_11230__$1 = state_11230;
var statearr_11236_13072 = state_11230__$1;
(statearr_11236_13072[(2)] = null);

(statearr_11236_13072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (4))){
var inst_11195 = (state_11230[(7)]);
var inst_11195__$1 = (state_11230[(2)]);
var inst_11196 = (inst_11195__$1 == null);
var state_11230__$1 = (function (){var statearr_11237 = state_11230;
(statearr_11237[(7)] = inst_11195__$1);

return statearr_11237;
})();
if(cljs.core.truth_(inst_11196)){
var statearr_11238_13073 = state_11230__$1;
(statearr_11238_13073[(1)] = (5));

} else {
var statearr_11239_13074 = state_11230__$1;
(statearr_11239_13074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (15))){
var inst_11208 = (state_11230[(8)]);
var state_11230__$1 = state_11230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11230__$1,(18),to,inst_11208);
} else {
if((state_val_11231 === (21))){
var inst_11221 = (state_11230[(2)]);
var state_11230__$1 = state_11230;
var statearr_11242_13075 = state_11230__$1;
(statearr_11242_13075[(2)] = inst_11221);

(statearr_11242_13075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (13))){
var inst_11223 = (state_11230[(2)]);
var state_11230__$1 = (function (){var statearr_11244 = state_11230;
(statearr_11244[(9)] = inst_11223);

return statearr_11244;
})();
var statearr_11245_13076 = state_11230__$1;
(statearr_11245_13076[(2)] = null);

(statearr_11245_13076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (6))){
var inst_11195 = (state_11230[(7)]);
var state_11230__$1 = state_11230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11230__$1,(11),inst_11195);
} else {
if((state_val_11231 === (17))){
var inst_11216 = (state_11230[(2)]);
var state_11230__$1 = state_11230;
if(cljs.core.truth_(inst_11216)){
var statearr_11246_13077 = state_11230__$1;
(statearr_11246_13077[(1)] = (19));

} else {
var statearr_11247_13078 = state_11230__$1;
(statearr_11247_13078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (3))){
var inst_11228 = (state_11230[(2)]);
var state_11230__$1 = state_11230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11230__$1,inst_11228);
} else {
if((state_val_11231 === (12))){
var inst_11205 = (state_11230[(10)]);
var state_11230__$1 = state_11230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11230__$1,(14),inst_11205);
} else {
if((state_val_11231 === (2))){
var state_11230__$1 = state_11230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11230__$1,(4),results);
} else {
if((state_val_11231 === (19))){
var state_11230__$1 = state_11230;
var statearr_11250_13079 = state_11230__$1;
(statearr_11250_13079[(2)] = null);

(statearr_11250_13079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (11))){
var inst_11205 = (state_11230[(2)]);
var state_11230__$1 = (function (){var statearr_11251 = state_11230;
(statearr_11251[(10)] = inst_11205);

return statearr_11251;
})();
var statearr_11252_13080 = state_11230__$1;
(statearr_11252_13080[(2)] = null);

(statearr_11252_13080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (9))){
var state_11230__$1 = state_11230;
var statearr_11253_13081 = state_11230__$1;
(statearr_11253_13081[(2)] = null);

(statearr_11253_13081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (5))){
var state_11230__$1 = state_11230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11254_13082 = state_11230__$1;
(statearr_11254_13082[(1)] = (8));

} else {
var statearr_11255_13083 = state_11230__$1;
(statearr_11255_13083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (14))){
var inst_11208 = (state_11230[(8)]);
var inst_11208__$1 = (state_11230[(2)]);
var inst_11209 = (inst_11208__$1 == null);
var inst_11210 = cljs.core.not(inst_11209);
var state_11230__$1 = (function (){var statearr_11256 = state_11230;
(statearr_11256[(8)] = inst_11208__$1);

return statearr_11256;
})();
if(inst_11210){
var statearr_11257_13084 = state_11230__$1;
(statearr_11257_13084[(1)] = (15));

} else {
var statearr_11258_13085 = state_11230__$1;
(statearr_11258_13085[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (16))){
var state_11230__$1 = state_11230;
var statearr_11259_13086 = state_11230__$1;
(statearr_11259_13086[(2)] = false);

(statearr_11259_13086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (10))){
var inst_11202 = (state_11230[(2)]);
var state_11230__$1 = state_11230;
var statearr_11260_13087 = state_11230__$1;
(statearr_11260_13087[(2)] = inst_11202);

(statearr_11260_13087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (18))){
var inst_11213 = (state_11230[(2)]);
var state_11230__$1 = state_11230;
var statearr_11261_13088 = state_11230__$1;
(statearr_11261_13088[(2)] = inst_11213);

(statearr_11261_13088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11231 === (8))){
var inst_11199 = cljs.core.async.close_BANG_(to);
var state_11230__$1 = state_11230;
var statearr_11262_13089 = state_11230__$1;
(statearr_11262_13089[(2)] = inst_11199);

(statearr_11262_13089[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0 = (function (){
var statearr_11263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__);

(statearr_11263[(1)] = (1));

return statearr_11263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1 = (function (state_11230){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11230);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11264){var ex__10730__auto__ = e11264;
var statearr_11265_13090 = state_11230;
(statearr_11265_13090[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11230[(4)]))){
var statearr_11266_13091 = state_11230;
(statearr_11266_13091[(1)] = cljs.core.first((state_11230[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13092 = state_11230;
state_11230 = G__13092;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__ = function(state_11230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1.call(this,state_11230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11267 = f__10800__auto__();
(statearr_11267[(6)] = c__10799__auto__);

return statearr_11267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));

return c__10799__auto__;
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
var G__11269 = arguments.length;
switch (G__11269) {
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
var G__11271 = arguments.length;
switch (G__11271) {
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
var G__11273 = arguments.length;
switch (G__11273) {
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
var c__10799__auto___13096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11300){
var state_val_11301 = (state_11300[(1)]);
if((state_val_11301 === (7))){
var inst_11296 = (state_11300[(2)]);
var state_11300__$1 = state_11300;
var statearr_11302_13097 = state_11300__$1;
(statearr_11302_13097[(2)] = inst_11296);

(statearr_11302_13097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (1))){
var state_11300__$1 = state_11300;
var statearr_11303_13098 = state_11300__$1;
(statearr_11303_13098[(2)] = null);

(statearr_11303_13098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (4))){
var inst_11277 = (state_11300[(7)]);
var inst_11277__$1 = (state_11300[(2)]);
var inst_11278 = (inst_11277__$1 == null);
var state_11300__$1 = (function (){var statearr_11304 = state_11300;
(statearr_11304[(7)] = inst_11277__$1);

return statearr_11304;
})();
if(cljs.core.truth_(inst_11278)){
var statearr_11305_13099 = state_11300__$1;
(statearr_11305_13099[(1)] = (5));

} else {
var statearr_11306_13100 = state_11300__$1;
(statearr_11306_13100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (13))){
var state_11300__$1 = state_11300;
var statearr_11307_13101 = state_11300__$1;
(statearr_11307_13101[(2)] = null);

(statearr_11307_13101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (6))){
var inst_11277 = (state_11300[(7)]);
var inst_11283 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11277) : p.call(null,inst_11277));
var state_11300__$1 = state_11300;
if(cljs.core.truth_(inst_11283)){
var statearr_11308_13102 = state_11300__$1;
(statearr_11308_13102[(1)] = (9));

} else {
var statearr_11309_13103 = state_11300__$1;
(statearr_11309_13103[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (3))){
var inst_11298 = (state_11300[(2)]);
var state_11300__$1 = state_11300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11300__$1,inst_11298);
} else {
if((state_val_11301 === (12))){
var state_11300__$1 = state_11300;
var statearr_11310_13104 = state_11300__$1;
(statearr_11310_13104[(2)] = null);

(statearr_11310_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (2))){
var state_11300__$1 = state_11300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11300__$1,(4),ch);
} else {
if((state_val_11301 === (11))){
var inst_11277 = (state_11300[(7)]);
var inst_11287 = (state_11300[(2)]);
var state_11300__$1 = state_11300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11300__$1,(8),inst_11287,inst_11277);
} else {
if((state_val_11301 === (9))){
var state_11300__$1 = state_11300;
var statearr_11311_13105 = state_11300__$1;
(statearr_11311_13105[(2)] = tc);

(statearr_11311_13105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (5))){
var inst_11280 = cljs.core.async.close_BANG_(tc);
var inst_11281 = cljs.core.async.close_BANG_(fc);
var state_11300__$1 = (function (){var statearr_11312 = state_11300;
(statearr_11312[(8)] = inst_11280);

return statearr_11312;
})();
var statearr_11313_13106 = state_11300__$1;
(statearr_11313_13106[(2)] = inst_11281);

(statearr_11313_13106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (14))){
var inst_11294 = (state_11300[(2)]);
var state_11300__$1 = state_11300;
var statearr_11314_13107 = state_11300__$1;
(statearr_11314_13107[(2)] = inst_11294);

(statearr_11314_13107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (10))){
var state_11300__$1 = state_11300;
var statearr_11315_13108 = state_11300__$1;
(statearr_11315_13108[(2)] = fc);

(statearr_11315_13108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (8))){
var inst_11289 = (state_11300[(2)]);
var state_11300__$1 = state_11300;
if(cljs.core.truth_(inst_11289)){
var statearr_11316_13109 = state_11300__$1;
(statearr_11316_13109[(1)] = (12));

} else {
var statearr_11317_13110 = state_11300__$1;
(statearr_11317_13110[(1)] = (13));

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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_11323 = [null,null,null,null,null,null,null,null,null];
(statearr_11323[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_11323[(1)] = (1));

return statearr_11323;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_11300){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11300);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11324){var ex__10730__auto__ = e11324;
var statearr_11325_13111 = state_11300;
(statearr_11325_13111[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11300[(4)]))){
var statearr_11326_13112 = state_11300;
(statearr_11326_13112[(1)] = cljs.core.first((state_11300[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13113 = state_11300;
state_11300 = G__13113;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_11300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_11300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11327 = f__10800__auto__();
(statearr_11327[(6)] = c__10799__auto___13096);

return statearr_11327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
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
var c__10799__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11349){
var state_val_11350 = (state_11349[(1)]);
if((state_val_11350 === (7))){
var inst_11345 = (state_11349[(2)]);
var state_11349__$1 = state_11349;
var statearr_11351_13114 = state_11349__$1;
(statearr_11351_13114[(2)] = inst_11345);

(statearr_11351_13114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (1))){
var inst_11328 = init;
var inst_11329 = inst_11328;
var state_11349__$1 = (function (){var statearr_11352 = state_11349;
(statearr_11352[(7)] = inst_11329);

return statearr_11352;
})();
var statearr_11353_13115 = state_11349__$1;
(statearr_11353_13115[(2)] = null);

(statearr_11353_13115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (4))){
var inst_11332 = (state_11349[(8)]);
var inst_11332__$1 = (state_11349[(2)]);
var inst_11333 = (inst_11332__$1 == null);
var state_11349__$1 = (function (){var statearr_11354 = state_11349;
(statearr_11354[(8)] = inst_11332__$1);

return statearr_11354;
})();
if(cljs.core.truth_(inst_11333)){
var statearr_11355_13116 = state_11349__$1;
(statearr_11355_13116[(1)] = (5));

} else {
var statearr_11356_13117 = state_11349__$1;
(statearr_11356_13117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (6))){
var inst_11332 = (state_11349[(8)]);
var inst_11336 = (state_11349[(9)]);
var inst_11329 = (state_11349[(7)]);
var inst_11336__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11329,inst_11332) : f.call(null,inst_11329,inst_11332));
var inst_11337 = cljs.core.reduced_QMARK_(inst_11336__$1);
var state_11349__$1 = (function (){var statearr_11357 = state_11349;
(statearr_11357[(9)] = inst_11336__$1);

return statearr_11357;
})();
if(inst_11337){
var statearr_11358_13118 = state_11349__$1;
(statearr_11358_13118[(1)] = (8));

} else {
var statearr_11359_13119 = state_11349__$1;
(statearr_11359_13119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (3))){
var inst_11347 = (state_11349[(2)]);
var state_11349__$1 = state_11349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11349__$1,inst_11347);
} else {
if((state_val_11350 === (2))){
var state_11349__$1 = state_11349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11349__$1,(4),ch);
} else {
if((state_val_11350 === (9))){
var inst_11336 = (state_11349[(9)]);
var inst_11329 = inst_11336;
var state_11349__$1 = (function (){var statearr_11366 = state_11349;
(statearr_11366[(7)] = inst_11329);

return statearr_11366;
})();
var statearr_11367_13120 = state_11349__$1;
(statearr_11367_13120[(2)] = null);

(statearr_11367_13120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (5))){
var inst_11329 = (state_11349[(7)]);
var state_11349__$1 = state_11349;
var statearr_11368_13121 = state_11349__$1;
(statearr_11368_13121[(2)] = inst_11329);

(statearr_11368_13121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (10))){
var inst_11343 = (state_11349[(2)]);
var state_11349__$1 = state_11349;
var statearr_11369_13122 = state_11349__$1;
(statearr_11369_13122[(2)] = inst_11343);

(statearr_11369_13122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (8))){
var inst_11336 = (state_11349[(9)]);
var inst_11339 = cljs.core.deref(inst_11336);
var state_11349__$1 = state_11349;
var statearr_11370_13123 = state_11349__$1;
(statearr_11370_13123[(2)] = inst_11339);

(statearr_11370_13123[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10727__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10727__auto____0 = (function (){
var statearr_11371 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11371[(0)] = cljs$core$async$reduce_$_state_machine__10727__auto__);

(statearr_11371[(1)] = (1));

return statearr_11371;
});
var cljs$core$async$reduce_$_state_machine__10727__auto____1 = (function (state_11349){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11349);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11372){var ex__10730__auto__ = e11372;
var statearr_11373_13124 = state_11349;
(statearr_11373_13124[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11349[(4)]))){
var statearr_11375_13125 = state_11349;
(statearr_11375_13125[(1)] = cljs.core.first((state_11349[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13126 = state_11349;
state_11349 = G__13126;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10727__auto__ = function(state_11349){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10727__auto____1.call(this,state_11349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10727__auto____0;
cljs$core$async$reduce_$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10727__auto____1;
return cljs$core$async$reduce_$_state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11376 = f__10800__auto__();
(statearr_11376[(6)] = c__10799__auto__);

return statearr_11376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));

return c__10799__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10799__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11382){
var state_val_11383 = (state_11382[(1)]);
if((state_val_11383 === (1))){
var inst_11377 = cljs.core.async.reduce(f__$1,init,ch);
var state_11382__$1 = state_11382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11382__$1,(2),inst_11377);
} else {
if((state_val_11383 === (2))){
var inst_11379 = (state_11382[(2)]);
var inst_11380 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11379) : f__$1.call(null,inst_11379));
var state_11382__$1 = state_11382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11382__$1,inst_11380);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10727__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10727__auto____0 = (function (){
var statearr_11384 = [null,null,null,null,null,null,null];
(statearr_11384[(0)] = cljs$core$async$transduce_$_state_machine__10727__auto__);

(statearr_11384[(1)] = (1));

return statearr_11384;
});
var cljs$core$async$transduce_$_state_machine__10727__auto____1 = (function (state_11382){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11382);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11385){var ex__10730__auto__ = e11385;
var statearr_11386_13127 = state_11382;
(statearr_11386_13127[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11382[(4)]))){
var statearr_11387_13128 = state_11382;
(statearr_11387_13128[(1)] = cljs.core.first((state_11382[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13129 = state_11382;
state_11382 = G__13129;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10727__auto__ = function(state_11382){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10727__auto____1.call(this,state_11382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10727__auto____0;
cljs$core$async$transduce_$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10727__auto____1;
return cljs$core$async$transduce_$_state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11388 = f__10800__auto__();
(statearr_11388[(6)] = c__10799__auto__);

return statearr_11388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));

return c__10799__auto__;
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
var G__11390 = arguments.length;
switch (G__11390) {
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
var c__10799__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11417){
var state_val_11418 = (state_11417[(1)]);
if((state_val_11418 === (7))){
var inst_11399 = (state_11417[(2)]);
var state_11417__$1 = state_11417;
var statearr_11419_13131 = state_11417__$1;
(statearr_11419_13131[(2)] = inst_11399);

(statearr_11419_13131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (1))){
var inst_11393 = cljs.core.seq(coll);
var inst_11394 = inst_11393;
var state_11417__$1 = (function (){var statearr_11420 = state_11417;
(statearr_11420[(7)] = inst_11394);

return statearr_11420;
})();
var statearr_11421_13132 = state_11417__$1;
(statearr_11421_13132[(2)] = null);

(statearr_11421_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (4))){
var inst_11394 = (state_11417[(7)]);
var inst_11397 = cljs.core.first(inst_11394);
var state_11417__$1 = state_11417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11417__$1,(7),ch,inst_11397);
} else {
if((state_val_11418 === (13))){
var inst_11411 = (state_11417[(2)]);
var state_11417__$1 = state_11417;
var statearr_11422_13133 = state_11417__$1;
(statearr_11422_13133[(2)] = inst_11411);

(statearr_11422_13133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (6))){
var inst_11402 = (state_11417[(2)]);
var state_11417__$1 = state_11417;
if(cljs.core.truth_(inst_11402)){
var statearr_11423_13134 = state_11417__$1;
(statearr_11423_13134[(1)] = (8));

} else {
var statearr_11424_13135 = state_11417__$1;
(statearr_11424_13135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (3))){
var inst_11415 = (state_11417[(2)]);
var state_11417__$1 = state_11417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11417__$1,inst_11415);
} else {
if((state_val_11418 === (12))){
var state_11417__$1 = state_11417;
var statearr_11425_13136 = state_11417__$1;
(statearr_11425_13136[(2)] = null);

(statearr_11425_13136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (2))){
var inst_11394 = (state_11417[(7)]);
var state_11417__$1 = state_11417;
if(cljs.core.truth_(inst_11394)){
var statearr_11426_13137 = state_11417__$1;
(statearr_11426_13137[(1)] = (4));

} else {
var statearr_11427_13138 = state_11417__$1;
(statearr_11427_13138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (11))){
var inst_11408 = cljs.core.async.close_BANG_(ch);
var state_11417__$1 = state_11417;
var statearr_11428_13139 = state_11417__$1;
(statearr_11428_13139[(2)] = inst_11408);

(statearr_11428_13139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (9))){
var state_11417__$1 = state_11417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11429_13140 = state_11417__$1;
(statearr_11429_13140[(1)] = (11));

} else {
var statearr_11431_13141 = state_11417__$1;
(statearr_11431_13141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (5))){
var inst_11394 = (state_11417[(7)]);
var state_11417__$1 = state_11417;
var statearr_11432_13142 = state_11417__$1;
(statearr_11432_13142[(2)] = inst_11394);

(statearr_11432_13142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (10))){
var inst_11413 = (state_11417[(2)]);
var state_11417__$1 = state_11417;
var statearr_11433_13143 = state_11417__$1;
(statearr_11433_13143[(2)] = inst_11413);

(statearr_11433_13143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11418 === (8))){
var inst_11394 = (state_11417[(7)]);
var inst_11404 = cljs.core.next(inst_11394);
var inst_11394__$1 = inst_11404;
var state_11417__$1 = (function (){var statearr_11434 = state_11417;
(statearr_11434[(7)] = inst_11394__$1);

return statearr_11434;
})();
var statearr_11435_13144 = state_11417__$1;
(statearr_11435_13144[(2)] = null);

(statearr_11435_13144[(1)] = (2));


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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_11436 = [null,null,null,null,null,null,null,null];
(statearr_11436[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_11436[(1)] = (1));

return statearr_11436;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_11417){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11417);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11437){var ex__10730__auto__ = e11437;
var statearr_11438_13145 = state_11417;
(statearr_11438_13145[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11417[(4)]))){
var statearr_11439_13146 = state_11417;
(statearr_11439_13146[(1)] = cljs.core.first((state_11417[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13147 = state_11417;
state_11417 = G__13147;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_11417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_11417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11440 = f__10800__auto__();
(statearr_11440[(6)] = c__10799__auto__);

return statearr_11440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));

return c__10799__auto__;
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
var G__11442 = arguments.length;
switch (G__11442) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13149 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13149(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13150 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13150(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13151 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13151(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13152 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13152(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11445 = (function (ch,cs,meta11446){
this.ch = ch;
this.cs = cs;
this.meta11446 = meta11446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11447,meta11446__$1){
var self__ = this;
var _11447__$1 = this;
return (new cljs.core.async.t_cljs$core$async11445(self__.ch,self__.cs,meta11446__$1));
}));

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11447){
var self__ = this;
var _11447__$1 = this;
return self__.meta11446;
}));

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11446","meta11446",-290320032,null)], null);
}));

(cljs.core.async.t_cljs$core$async11445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11445");

(cljs.core.async.t_cljs$core$async11445.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11445.
 */
cljs.core.async.__GT_t_cljs$core$async11445 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11445(ch__$1,cs__$1,meta11446){
return (new cljs.core.async.t_cljs$core$async11445(ch__$1,cs__$1,meta11446));
});

}

return (new cljs.core.async.t_cljs$core$async11445(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10799__auto___13153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11582){
var state_val_11583 = (state_11582[(1)]);
if((state_val_11583 === (7))){
var inst_11578 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
var statearr_11584_13154 = state_11582__$1;
(statearr_11584_13154[(2)] = inst_11578);

(statearr_11584_13154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (20))){
var inst_11483 = (state_11582[(7)]);
var inst_11495 = cljs.core.first(inst_11483);
var inst_11496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11495,(0),null);
var inst_11497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11495,(1),null);
var state_11582__$1 = (function (){var statearr_11585 = state_11582;
(statearr_11585[(8)] = inst_11496);

return statearr_11585;
})();
if(cljs.core.truth_(inst_11497)){
var statearr_11586_13155 = state_11582__$1;
(statearr_11586_13155[(1)] = (22));

} else {
var statearr_11587_13156 = state_11582__$1;
(statearr_11587_13156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (27))){
var inst_11527 = (state_11582[(9)]);
var inst_11525 = (state_11582[(10)]);
var inst_11450 = (state_11582[(11)]);
var inst_11532 = (state_11582[(12)]);
var inst_11532__$1 = cljs.core._nth(inst_11525,inst_11527);
var inst_11533 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11532__$1,inst_11450,done);
var state_11582__$1 = (function (){var statearr_11588 = state_11582;
(statearr_11588[(12)] = inst_11532__$1);

return statearr_11588;
})();
if(cljs.core.truth_(inst_11533)){
var statearr_11589_13157 = state_11582__$1;
(statearr_11589_13157[(1)] = (30));

} else {
var statearr_11590_13158 = state_11582__$1;
(statearr_11590_13158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (1))){
var state_11582__$1 = state_11582;
var statearr_11591_13159 = state_11582__$1;
(statearr_11591_13159[(2)] = null);

(statearr_11591_13159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (24))){
var inst_11483 = (state_11582[(7)]);
var inst_11502 = (state_11582[(2)]);
var inst_11503 = cljs.core.next(inst_11483);
var inst_11459 = inst_11503;
var inst_11460 = null;
var inst_11461 = (0);
var inst_11462 = (0);
var state_11582__$1 = (function (){var statearr_11592 = state_11582;
(statearr_11592[(13)] = inst_11502);

(statearr_11592[(14)] = inst_11460);

(statearr_11592[(15)] = inst_11459);

(statearr_11592[(16)] = inst_11462);

(statearr_11592[(17)] = inst_11461);

return statearr_11592;
})();
var statearr_11593_13160 = state_11582__$1;
(statearr_11593_13160[(2)] = null);

(statearr_11593_13160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (39))){
var state_11582__$1 = state_11582;
var statearr_11597_13161 = state_11582__$1;
(statearr_11597_13161[(2)] = null);

(statearr_11597_13161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (4))){
var inst_11450 = (state_11582[(11)]);
var inst_11450__$1 = (state_11582[(2)]);
var inst_11451 = (inst_11450__$1 == null);
var state_11582__$1 = (function (){var statearr_11599 = state_11582;
(statearr_11599[(11)] = inst_11450__$1);

return statearr_11599;
})();
if(cljs.core.truth_(inst_11451)){
var statearr_11600_13162 = state_11582__$1;
(statearr_11600_13162[(1)] = (5));

} else {
var statearr_11601_13163 = state_11582__$1;
(statearr_11601_13163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (15))){
var inst_11460 = (state_11582[(14)]);
var inst_11459 = (state_11582[(15)]);
var inst_11462 = (state_11582[(16)]);
var inst_11461 = (state_11582[(17)]);
var inst_11479 = (state_11582[(2)]);
var inst_11480 = (inst_11462 + (1));
var tmp11594 = inst_11460;
var tmp11595 = inst_11459;
var tmp11596 = inst_11461;
var inst_11459__$1 = tmp11595;
var inst_11460__$1 = tmp11594;
var inst_11461__$1 = tmp11596;
var inst_11462__$1 = inst_11480;
var state_11582__$1 = (function (){var statearr_11604 = state_11582;
(statearr_11604[(14)] = inst_11460__$1);

(statearr_11604[(15)] = inst_11459__$1);

(statearr_11604[(16)] = inst_11462__$1);

(statearr_11604[(18)] = inst_11479);

(statearr_11604[(17)] = inst_11461__$1);

return statearr_11604;
})();
var statearr_11608_13164 = state_11582__$1;
(statearr_11608_13164[(2)] = null);

(statearr_11608_13164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (21))){
var inst_11506 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
var statearr_11612_13165 = state_11582__$1;
(statearr_11612_13165[(2)] = inst_11506);

(statearr_11612_13165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (31))){
var inst_11532 = (state_11582[(12)]);
var inst_11536 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11532);
var state_11582__$1 = state_11582;
var statearr_11613_13166 = state_11582__$1;
(statearr_11613_13166[(2)] = inst_11536);

(statearr_11613_13166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (32))){
var inst_11527 = (state_11582[(9)]);
var inst_11525 = (state_11582[(10)]);
var inst_11526 = (state_11582[(19)]);
var inst_11524 = (state_11582[(20)]);
var inst_11538 = (state_11582[(2)]);
var inst_11539 = (inst_11527 + (1));
var tmp11609 = inst_11525;
var tmp11610 = inst_11526;
var tmp11611 = inst_11524;
var inst_11524__$1 = tmp11611;
var inst_11525__$1 = tmp11609;
var inst_11526__$1 = tmp11610;
var inst_11527__$1 = inst_11539;
var state_11582__$1 = (function (){var statearr_11614 = state_11582;
(statearr_11614[(9)] = inst_11527__$1);

(statearr_11614[(21)] = inst_11538);

(statearr_11614[(10)] = inst_11525__$1);

(statearr_11614[(19)] = inst_11526__$1);

(statearr_11614[(20)] = inst_11524__$1);

return statearr_11614;
})();
var statearr_11617_13167 = state_11582__$1;
(statearr_11617_13167[(2)] = null);

(statearr_11617_13167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (40))){
var inst_11551 = (state_11582[(22)]);
var inst_11555 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11551);
var state_11582__$1 = state_11582;
var statearr_11618_13168 = state_11582__$1;
(statearr_11618_13168[(2)] = inst_11555);

(statearr_11618_13168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (33))){
var inst_11542 = (state_11582[(23)]);
var inst_11544 = cljs.core.chunked_seq_QMARK_(inst_11542);
var state_11582__$1 = state_11582;
if(inst_11544){
var statearr_11619_13169 = state_11582__$1;
(statearr_11619_13169[(1)] = (36));

} else {
var statearr_11620_13170 = state_11582__$1;
(statearr_11620_13170[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (13))){
var inst_11472 = (state_11582[(24)]);
var inst_11476 = cljs.core.async.close_BANG_(inst_11472);
var state_11582__$1 = state_11582;
var statearr_11621_13171 = state_11582__$1;
(statearr_11621_13171[(2)] = inst_11476);

(statearr_11621_13171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (22))){
var inst_11496 = (state_11582[(8)]);
var inst_11499 = cljs.core.async.close_BANG_(inst_11496);
var state_11582__$1 = state_11582;
var statearr_11622_13172 = state_11582__$1;
(statearr_11622_13172[(2)] = inst_11499);

(statearr_11622_13172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (36))){
var inst_11542 = (state_11582[(23)]);
var inst_11546 = cljs.core.chunk_first(inst_11542);
var inst_11547 = cljs.core.chunk_rest(inst_11542);
var inst_11548 = cljs.core.count(inst_11546);
var inst_11524 = inst_11547;
var inst_11525 = inst_11546;
var inst_11526 = inst_11548;
var inst_11527 = (0);
var state_11582__$1 = (function (){var statearr_11623 = state_11582;
(statearr_11623[(9)] = inst_11527);

(statearr_11623[(10)] = inst_11525);

(statearr_11623[(19)] = inst_11526);

(statearr_11623[(20)] = inst_11524);

return statearr_11623;
})();
var statearr_11624_13173 = state_11582__$1;
(statearr_11624_13173[(2)] = null);

(statearr_11624_13173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (41))){
var inst_11542 = (state_11582[(23)]);
var inst_11557 = (state_11582[(2)]);
var inst_11558 = cljs.core.next(inst_11542);
var inst_11524 = inst_11558;
var inst_11525 = null;
var inst_11526 = (0);
var inst_11527 = (0);
var state_11582__$1 = (function (){var statearr_11625 = state_11582;
(statearr_11625[(25)] = inst_11557);

(statearr_11625[(9)] = inst_11527);

(statearr_11625[(10)] = inst_11525);

(statearr_11625[(19)] = inst_11526);

(statearr_11625[(20)] = inst_11524);

return statearr_11625;
})();
var statearr_11626_13174 = state_11582__$1;
(statearr_11626_13174[(2)] = null);

(statearr_11626_13174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (43))){
var state_11582__$1 = state_11582;
var statearr_11627_13175 = state_11582__$1;
(statearr_11627_13175[(2)] = null);

(statearr_11627_13175[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (29))){
var inst_11566 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
var statearr_11628_13176 = state_11582__$1;
(statearr_11628_13176[(2)] = inst_11566);

(statearr_11628_13176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (44))){
var inst_11575 = (state_11582[(2)]);
var state_11582__$1 = (function (){var statearr_11629 = state_11582;
(statearr_11629[(26)] = inst_11575);

return statearr_11629;
})();
var statearr_11630_13177 = state_11582__$1;
(statearr_11630_13177[(2)] = null);

(statearr_11630_13177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (6))){
var inst_11516 = (state_11582[(27)]);
var inst_11515 = cljs.core.deref(cs);
var inst_11516__$1 = cljs.core.keys(inst_11515);
var inst_11517 = cljs.core.count(inst_11516__$1);
var inst_11518 = cljs.core.reset_BANG_(dctr,inst_11517);
var inst_11523 = cljs.core.seq(inst_11516__$1);
var inst_11524 = inst_11523;
var inst_11525 = null;
var inst_11526 = (0);
var inst_11527 = (0);
var state_11582__$1 = (function (){var statearr_11631 = state_11582;
(statearr_11631[(9)] = inst_11527);

(statearr_11631[(10)] = inst_11525);

(statearr_11631[(28)] = inst_11518);

(statearr_11631[(27)] = inst_11516__$1);

(statearr_11631[(19)] = inst_11526);

(statearr_11631[(20)] = inst_11524);

return statearr_11631;
})();
var statearr_11632_13178 = state_11582__$1;
(statearr_11632_13178[(2)] = null);

(statearr_11632_13178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (28))){
var inst_11524 = (state_11582[(20)]);
var inst_11542 = (state_11582[(23)]);
var inst_11542__$1 = cljs.core.seq(inst_11524);
var state_11582__$1 = (function (){var statearr_11633 = state_11582;
(statearr_11633[(23)] = inst_11542__$1);

return statearr_11633;
})();
if(inst_11542__$1){
var statearr_11634_13179 = state_11582__$1;
(statearr_11634_13179[(1)] = (33));

} else {
var statearr_11635_13180 = state_11582__$1;
(statearr_11635_13180[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (25))){
var inst_11527 = (state_11582[(9)]);
var inst_11526 = (state_11582[(19)]);
var inst_11529 = (inst_11527 < inst_11526);
var inst_11530 = inst_11529;
var state_11582__$1 = state_11582;
if(cljs.core.truth_(inst_11530)){
var statearr_11636_13181 = state_11582__$1;
(statearr_11636_13181[(1)] = (27));

} else {
var statearr_11637_13182 = state_11582__$1;
(statearr_11637_13182[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (34))){
var state_11582__$1 = state_11582;
var statearr_11638_13183 = state_11582__$1;
(statearr_11638_13183[(2)] = null);

(statearr_11638_13183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (17))){
var state_11582__$1 = state_11582;
var statearr_11639_13184 = state_11582__$1;
(statearr_11639_13184[(2)] = null);

(statearr_11639_13184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (3))){
var inst_11580 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11582__$1,inst_11580);
} else {
if((state_val_11583 === (12))){
var inst_11511 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
var statearr_11640_13185 = state_11582__$1;
(statearr_11640_13185[(2)] = inst_11511);

(statearr_11640_13185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (2))){
var state_11582__$1 = state_11582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11582__$1,(4),ch);
} else {
if((state_val_11583 === (23))){
var state_11582__$1 = state_11582;
var statearr_11641_13186 = state_11582__$1;
(statearr_11641_13186[(2)] = null);

(statearr_11641_13186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (35))){
var inst_11564 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
var statearr_11642_13187 = state_11582__$1;
(statearr_11642_13187[(2)] = inst_11564);

(statearr_11642_13187[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (19))){
var inst_11483 = (state_11582[(7)]);
var inst_11487 = cljs.core.chunk_first(inst_11483);
var inst_11488 = cljs.core.chunk_rest(inst_11483);
var inst_11489 = cljs.core.count(inst_11487);
var inst_11459 = inst_11488;
var inst_11460 = inst_11487;
var inst_11461 = inst_11489;
var inst_11462 = (0);
var state_11582__$1 = (function (){var statearr_11643 = state_11582;
(statearr_11643[(14)] = inst_11460);

(statearr_11643[(15)] = inst_11459);

(statearr_11643[(16)] = inst_11462);

(statearr_11643[(17)] = inst_11461);

return statearr_11643;
})();
var statearr_11644_13188 = state_11582__$1;
(statearr_11644_13188[(2)] = null);

(statearr_11644_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (11))){
var inst_11459 = (state_11582[(15)]);
var inst_11483 = (state_11582[(7)]);
var inst_11483__$1 = cljs.core.seq(inst_11459);
var state_11582__$1 = (function (){var statearr_11646 = state_11582;
(statearr_11646[(7)] = inst_11483__$1);

return statearr_11646;
})();
if(inst_11483__$1){
var statearr_11647_13189 = state_11582__$1;
(statearr_11647_13189[(1)] = (16));

} else {
var statearr_11648_13190 = state_11582__$1;
(statearr_11648_13190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (9))){
var inst_11513 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
var statearr_11649_13191 = state_11582__$1;
(statearr_11649_13191[(2)] = inst_11513);

(statearr_11649_13191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (5))){
var inst_11457 = cljs.core.deref(cs);
var inst_11458 = cljs.core.seq(inst_11457);
var inst_11459 = inst_11458;
var inst_11460 = null;
var inst_11461 = (0);
var inst_11462 = (0);
var state_11582__$1 = (function (){var statearr_11650 = state_11582;
(statearr_11650[(14)] = inst_11460);

(statearr_11650[(15)] = inst_11459);

(statearr_11650[(16)] = inst_11462);

(statearr_11650[(17)] = inst_11461);

return statearr_11650;
})();
var statearr_11651_13192 = state_11582__$1;
(statearr_11651_13192[(2)] = null);

(statearr_11651_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (14))){
var state_11582__$1 = state_11582;
var statearr_11652_13193 = state_11582__$1;
(statearr_11652_13193[(2)] = null);

(statearr_11652_13193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (45))){
var inst_11572 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
var statearr_11653_13194 = state_11582__$1;
(statearr_11653_13194[(2)] = inst_11572);

(statearr_11653_13194[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (26))){
var inst_11516 = (state_11582[(27)]);
var inst_11568 = (state_11582[(2)]);
var inst_11569 = cljs.core.seq(inst_11516);
var state_11582__$1 = (function (){var statearr_11654 = state_11582;
(statearr_11654[(29)] = inst_11568);

return statearr_11654;
})();
if(inst_11569){
var statearr_11655_13195 = state_11582__$1;
(statearr_11655_13195[(1)] = (42));

} else {
var statearr_11656_13196 = state_11582__$1;
(statearr_11656_13196[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (16))){
var inst_11483 = (state_11582[(7)]);
var inst_11485 = cljs.core.chunked_seq_QMARK_(inst_11483);
var state_11582__$1 = state_11582;
if(inst_11485){
var statearr_11657_13197 = state_11582__$1;
(statearr_11657_13197[(1)] = (19));

} else {
var statearr_11658_13198 = state_11582__$1;
(statearr_11658_13198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (38))){
var inst_11561 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
var statearr_11659_13199 = state_11582__$1;
(statearr_11659_13199[(2)] = inst_11561);

(statearr_11659_13199[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (30))){
var state_11582__$1 = state_11582;
var statearr_11660_13200 = state_11582__$1;
(statearr_11660_13200[(2)] = null);

(statearr_11660_13200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (10))){
var inst_11460 = (state_11582[(14)]);
var inst_11462 = (state_11582[(16)]);
var inst_11470 = cljs.core._nth(inst_11460,inst_11462);
var inst_11472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11470,(0),null);
var inst_11474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11470,(1),null);
var state_11582__$1 = (function (){var statearr_11661 = state_11582;
(statearr_11661[(24)] = inst_11472);

return statearr_11661;
})();
if(cljs.core.truth_(inst_11474)){
var statearr_11662_13201 = state_11582__$1;
(statearr_11662_13201[(1)] = (13));

} else {
var statearr_11663_13202 = state_11582__$1;
(statearr_11663_13202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (18))){
var inst_11509 = (state_11582[(2)]);
var state_11582__$1 = state_11582;
var statearr_11664_13203 = state_11582__$1;
(statearr_11664_13203[(2)] = inst_11509);

(statearr_11664_13203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (42))){
var state_11582__$1 = state_11582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11582__$1,(45),dchan);
} else {
if((state_val_11583 === (37))){
var inst_11551 = (state_11582[(22)]);
var inst_11450 = (state_11582[(11)]);
var inst_11542 = (state_11582[(23)]);
var inst_11551__$1 = cljs.core.first(inst_11542);
var inst_11552 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11551__$1,inst_11450,done);
var state_11582__$1 = (function (){var statearr_11665 = state_11582;
(statearr_11665[(22)] = inst_11551__$1);

return statearr_11665;
})();
if(cljs.core.truth_(inst_11552)){
var statearr_11666_13204 = state_11582__$1;
(statearr_11666_13204[(1)] = (39));

} else {
var statearr_11667_13205 = state_11582__$1;
(statearr_11667_13205[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11583 === (8))){
var inst_11462 = (state_11582[(16)]);
var inst_11461 = (state_11582[(17)]);
var inst_11464 = (inst_11462 < inst_11461);
var inst_11465 = inst_11464;
var state_11582__$1 = state_11582;
if(cljs.core.truth_(inst_11465)){
var statearr_11668_13206 = state_11582__$1;
(statearr_11668_13206[(1)] = (10));

} else {
var statearr_11669_13207 = state_11582__$1;
(statearr_11669_13207[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10727__auto__ = null;
var cljs$core$async$mult_$_state_machine__10727__auto____0 = (function (){
var statearr_11670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11670[(0)] = cljs$core$async$mult_$_state_machine__10727__auto__);

(statearr_11670[(1)] = (1));

return statearr_11670;
});
var cljs$core$async$mult_$_state_machine__10727__auto____1 = (function (state_11582){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11582);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11671){var ex__10730__auto__ = e11671;
var statearr_11672_13208 = state_11582;
(statearr_11672_13208[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11582[(4)]))){
var statearr_11673_13209 = state_11582;
(statearr_11673_13209[(1)] = cljs.core.first((state_11582[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13210 = state_11582;
state_11582 = G__13210;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10727__auto__ = function(state_11582){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10727__auto____1.call(this,state_11582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10727__auto____0;
cljs$core$async$mult_$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10727__auto____1;
return cljs$core$async$mult_$_state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11674 = f__10800__auto__();
(statearr_11674[(6)] = c__10799__auto___13153);

return statearr_11674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
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
var G__11676 = arguments.length;
switch (G__11676) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13213 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13213(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13214 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13214(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13215 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13215(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13216 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13216(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13217 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13217(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13218 = arguments.length;
var i__4737__auto___13219 = (0);
while(true){
if((i__4737__auto___13219 < len__4736__auto___13218)){
args__4742__auto__.push((arguments[i__4737__auto___13219]));

var G__13220 = (i__4737__auto___13219 + (1));
i__4737__auto___13219 = G__13220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11691){
var map__11692 = p__11691;
var map__11692__$1 = (((((!((map__11692 == null))))?(((((map__11692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11692):map__11692);
var opts = map__11692__$1;
var statearr_11694_13230 = state;
(statearr_11694_13230[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11695_13231 = state;
(statearr_11695_13231[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11696_13232 = state;
(statearr_11696_13232[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11682){
var G__11683 = cljs.core.first(seq11682);
var seq11682__$1 = cljs.core.next(seq11682);
var G__11684 = cljs.core.first(seq11682__$1);
var seq11682__$2 = cljs.core.next(seq11682__$1);
var G__11685 = cljs.core.first(seq11682__$2);
var seq11682__$3 = cljs.core.next(seq11682__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11683,G__11684,G__11685,seq11682__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11698 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11699){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11699 = meta11699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11700,meta11699__$1){
var self__ = this;
var _11700__$1 = this;
return (new cljs.core.async.t_cljs$core$async11698(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11699__$1));
}));

(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11700){
var self__ = this;
var _11700__$1 = this;
return self__.meta11699;
}));

(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11698.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11699","meta11699",-1020724113,null)], null);
}));

(cljs.core.async.t_cljs$core$async11698.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11698");

(cljs.core.async.t_cljs$core$async11698.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11698");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11698.
 */
cljs.core.async.__GT_t_cljs$core$async11698 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11698(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11699){
return (new cljs.core.async.t_cljs$core$async11698(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11699));
});

}

return (new cljs.core.async.t_cljs$core$async11698(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10799__auto___13233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11804){
var state_val_11805 = (state_11804[(1)]);
if((state_val_11805 === (7))){
var inst_11717 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
var statearr_11806_13234 = state_11804__$1;
(statearr_11806_13234[(2)] = inst_11717);

(statearr_11806_13234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (20))){
var inst_11729 = (state_11804[(7)]);
var state_11804__$1 = state_11804;
var statearr_11807_13235 = state_11804__$1;
(statearr_11807_13235[(2)] = inst_11729);

(statearr_11807_13235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (27))){
var state_11804__$1 = state_11804;
var statearr_11808_13236 = state_11804__$1;
(statearr_11808_13236[(2)] = null);

(statearr_11808_13236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (1))){
var inst_11704 = (state_11804[(8)]);
var inst_11704__$1 = calc_state();
var inst_11706 = (inst_11704__$1 == null);
var inst_11707 = cljs.core.not(inst_11706);
var state_11804__$1 = (function (){var statearr_11809 = state_11804;
(statearr_11809[(8)] = inst_11704__$1);

return statearr_11809;
})();
if(inst_11707){
var statearr_11810_13237 = state_11804__$1;
(statearr_11810_13237[(1)] = (2));

} else {
var statearr_11811_13238 = state_11804__$1;
(statearr_11811_13238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (24))){
var inst_11755 = (state_11804[(9)]);
var inst_11764 = (state_11804[(10)]);
var inst_11778 = (state_11804[(11)]);
var inst_11778__$1 = (inst_11755.cljs$core$IFn$_invoke$arity$1 ? inst_11755.cljs$core$IFn$_invoke$arity$1(inst_11764) : inst_11755.call(null,inst_11764));
var state_11804__$1 = (function (){var statearr_11812 = state_11804;
(statearr_11812[(11)] = inst_11778__$1);

return statearr_11812;
})();
if(cljs.core.truth_(inst_11778__$1)){
var statearr_11813_13248 = state_11804__$1;
(statearr_11813_13248[(1)] = (29));

} else {
var statearr_11814_13249 = state_11804__$1;
(statearr_11814_13249[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (4))){
var inst_11720 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
if(cljs.core.truth_(inst_11720)){
var statearr_11815_13250 = state_11804__$1;
(statearr_11815_13250[(1)] = (8));

} else {
var statearr_11816_13252 = state_11804__$1;
(statearr_11816_13252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (15))){
var inst_11749 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
if(cljs.core.truth_(inst_11749)){
var statearr_11817_13257 = state_11804__$1;
(statearr_11817_13257[(1)] = (19));

} else {
var statearr_11818_13258 = state_11804__$1;
(statearr_11818_13258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (21))){
var inst_11754 = (state_11804[(12)]);
var inst_11754__$1 = (state_11804[(2)]);
var inst_11755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11754__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11754__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11754__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11804__$1 = (function (){var statearr_11819 = state_11804;
(statearr_11819[(9)] = inst_11755);

(statearr_11819[(13)] = inst_11756);

(statearr_11819[(12)] = inst_11754__$1);

return statearr_11819;
})();
return cljs.core.async.ioc_alts_BANG_(state_11804__$1,(22),inst_11757);
} else {
if((state_val_11805 === (31))){
var inst_11786 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
if(cljs.core.truth_(inst_11786)){
var statearr_11820_13259 = state_11804__$1;
(statearr_11820_13259[(1)] = (32));

} else {
var statearr_11821_13260 = state_11804__$1;
(statearr_11821_13260[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (32))){
var inst_11763 = (state_11804[(14)]);
var state_11804__$1 = state_11804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11804__$1,(35),out,inst_11763);
} else {
if((state_val_11805 === (33))){
var inst_11754 = (state_11804[(12)]);
var inst_11729 = inst_11754;
var state_11804__$1 = (function (){var statearr_11822 = state_11804;
(statearr_11822[(7)] = inst_11729);

return statearr_11822;
})();
var statearr_11823_13261 = state_11804__$1;
(statearr_11823_13261[(2)] = null);

(statearr_11823_13261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (13))){
var inst_11729 = (state_11804[(7)]);
var inst_11738 = inst_11729.cljs$lang$protocol_mask$partition0$;
var inst_11739 = (inst_11738 & (64));
var inst_11740 = inst_11729.cljs$core$ISeq$;
var inst_11741 = (cljs.core.PROTOCOL_SENTINEL === inst_11740);
var inst_11742 = ((inst_11739) || (inst_11741));
var state_11804__$1 = state_11804;
if(cljs.core.truth_(inst_11742)){
var statearr_11824_13262 = state_11804__$1;
(statearr_11824_13262[(1)] = (16));

} else {
var statearr_11825_13263 = state_11804__$1;
(statearr_11825_13263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (22))){
var inst_11763 = (state_11804[(14)]);
var inst_11764 = (state_11804[(10)]);
var inst_11762 = (state_11804[(2)]);
var inst_11763__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11762,(0),null);
var inst_11764__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11762,(1),null);
var inst_11765 = (inst_11763__$1 == null);
var inst_11766 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11764__$1,change);
var inst_11767 = ((inst_11765) || (inst_11766));
var state_11804__$1 = (function (){var statearr_11830 = state_11804;
(statearr_11830[(14)] = inst_11763__$1);

(statearr_11830[(10)] = inst_11764__$1);

return statearr_11830;
})();
if(cljs.core.truth_(inst_11767)){
var statearr_11831_13264 = state_11804__$1;
(statearr_11831_13264[(1)] = (23));

} else {
var statearr_11836_13267 = state_11804__$1;
(statearr_11836_13267[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (36))){
var inst_11754 = (state_11804[(12)]);
var inst_11729 = inst_11754;
var state_11804__$1 = (function (){var statearr_11837 = state_11804;
(statearr_11837[(7)] = inst_11729);

return statearr_11837;
})();
var statearr_11842_13268 = state_11804__$1;
(statearr_11842_13268[(2)] = null);

(statearr_11842_13268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (29))){
var inst_11778 = (state_11804[(11)]);
var state_11804__$1 = state_11804;
var statearr_11843_13270 = state_11804__$1;
(statearr_11843_13270[(2)] = inst_11778);

(statearr_11843_13270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (6))){
var state_11804__$1 = state_11804;
var statearr_11844_13271 = state_11804__$1;
(statearr_11844_13271[(2)] = false);

(statearr_11844_13271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (28))){
var inst_11774 = (state_11804[(2)]);
var inst_11775 = calc_state();
var inst_11729 = inst_11775;
var state_11804__$1 = (function (){var statearr_11847 = state_11804;
(statearr_11847[(7)] = inst_11729);

(statearr_11847[(15)] = inst_11774);

return statearr_11847;
})();
var statearr_11848_13272 = state_11804__$1;
(statearr_11848_13272[(2)] = null);

(statearr_11848_13272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (25))){
var inst_11800 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
var statearr_11849_13273 = state_11804__$1;
(statearr_11849_13273[(2)] = inst_11800);

(statearr_11849_13273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (34))){
var inst_11798 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
var statearr_11850_13274 = state_11804__$1;
(statearr_11850_13274[(2)] = inst_11798);

(statearr_11850_13274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (17))){
var state_11804__$1 = state_11804;
var statearr_11851_13275 = state_11804__$1;
(statearr_11851_13275[(2)] = false);

(statearr_11851_13275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (3))){
var state_11804__$1 = state_11804;
var statearr_11852_13276 = state_11804__$1;
(statearr_11852_13276[(2)] = false);

(statearr_11852_13276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (12))){
var inst_11802 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11804__$1,inst_11802);
} else {
if((state_val_11805 === (2))){
var inst_11704 = (state_11804[(8)]);
var inst_11709 = inst_11704.cljs$lang$protocol_mask$partition0$;
var inst_11710 = (inst_11709 & (64));
var inst_11711 = inst_11704.cljs$core$ISeq$;
var inst_11712 = (cljs.core.PROTOCOL_SENTINEL === inst_11711);
var inst_11713 = ((inst_11710) || (inst_11712));
var state_11804__$1 = state_11804;
if(cljs.core.truth_(inst_11713)){
var statearr_11853_13277 = state_11804__$1;
(statearr_11853_13277[(1)] = (5));

} else {
var statearr_11854_13278 = state_11804__$1;
(statearr_11854_13278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (23))){
var inst_11763 = (state_11804[(14)]);
var inst_11769 = (inst_11763 == null);
var state_11804__$1 = state_11804;
if(cljs.core.truth_(inst_11769)){
var statearr_11855_13279 = state_11804__$1;
(statearr_11855_13279[(1)] = (26));

} else {
var statearr_11856_13280 = state_11804__$1;
(statearr_11856_13280[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (35))){
var inst_11789 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
if(cljs.core.truth_(inst_11789)){
var statearr_11857_13281 = state_11804__$1;
(statearr_11857_13281[(1)] = (36));

} else {
var statearr_11858_13282 = state_11804__$1;
(statearr_11858_13282[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (19))){
var inst_11729 = (state_11804[(7)]);
var inst_11751 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11729);
var state_11804__$1 = state_11804;
var statearr_11859_13283 = state_11804__$1;
(statearr_11859_13283[(2)] = inst_11751);

(statearr_11859_13283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (11))){
var inst_11729 = (state_11804[(7)]);
var inst_11735 = (inst_11729 == null);
var inst_11736 = cljs.core.not(inst_11735);
var state_11804__$1 = state_11804;
if(inst_11736){
var statearr_11860_13284 = state_11804__$1;
(statearr_11860_13284[(1)] = (13));

} else {
var statearr_11861_13285 = state_11804__$1;
(statearr_11861_13285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (9))){
var inst_11704 = (state_11804[(8)]);
var state_11804__$1 = state_11804;
var statearr_11862_13286 = state_11804__$1;
(statearr_11862_13286[(2)] = inst_11704);

(statearr_11862_13286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (5))){
var state_11804__$1 = state_11804;
var statearr_11863_13287 = state_11804__$1;
(statearr_11863_13287[(2)] = true);

(statearr_11863_13287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (14))){
var state_11804__$1 = state_11804;
var statearr_11864_13288 = state_11804__$1;
(statearr_11864_13288[(2)] = false);

(statearr_11864_13288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (26))){
var inst_11764 = (state_11804[(10)]);
var inst_11771 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11764);
var state_11804__$1 = state_11804;
var statearr_11865_13289 = state_11804__$1;
(statearr_11865_13289[(2)] = inst_11771);

(statearr_11865_13289[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (16))){
var state_11804__$1 = state_11804;
var statearr_11866_13290 = state_11804__$1;
(statearr_11866_13290[(2)] = true);

(statearr_11866_13290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (38))){
var inst_11794 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
var statearr_11867_13291 = state_11804__$1;
(statearr_11867_13291[(2)] = inst_11794);

(statearr_11867_13291[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (30))){
var inst_11755 = (state_11804[(9)]);
var inst_11764 = (state_11804[(10)]);
var inst_11756 = (state_11804[(13)]);
var inst_11781 = cljs.core.empty_QMARK_(inst_11755);
var inst_11782 = (inst_11756.cljs$core$IFn$_invoke$arity$1 ? inst_11756.cljs$core$IFn$_invoke$arity$1(inst_11764) : inst_11756.call(null,inst_11764));
var inst_11783 = cljs.core.not(inst_11782);
var inst_11784 = ((inst_11781) && (inst_11783));
var state_11804__$1 = state_11804;
var statearr_11868_13292 = state_11804__$1;
(statearr_11868_13292[(2)] = inst_11784);

(statearr_11868_13292[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (10))){
var inst_11704 = (state_11804[(8)]);
var inst_11725 = (state_11804[(2)]);
var inst_11726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11725,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11725,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11725,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11729 = inst_11704;
var state_11804__$1 = (function (){var statearr_11870 = state_11804;
(statearr_11870[(7)] = inst_11729);

(statearr_11870[(16)] = inst_11728);

(statearr_11870[(17)] = inst_11726);

(statearr_11870[(18)] = inst_11727);

return statearr_11870;
})();
var statearr_11871_13293 = state_11804__$1;
(statearr_11871_13293[(2)] = null);

(statearr_11871_13293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (18))){
var inst_11746 = (state_11804[(2)]);
var state_11804__$1 = state_11804;
var statearr_11872_13294 = state_11804__$1;
(statearr_11872_13294[(2)] = inst_11746);

(statearr_11872_13294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (37))){
var state_11804__$1 = state_11804;
var statearr_11873_13295 = state_11804__$1;
(statearr_11873_13295[(2)] = null);

(statearr_11873_13295[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11805 === (8))){
var inst_11704 = (state_11804[(8)]);
var inst_11722 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11704);
var state_11804__$1 = state_11804;
var statearr_11876_13296 = state_11804__$1;
(statearr_11876_13296[(2)] = inst_11722);

(statearr_11876_13296[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10727__auto__ = null;
var cljs$core$async$mix_$_state_machine__10727__auto____0 = (function (){
var statearr_11879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11879[(0)] = cljs$core$async$mix_$_state_machine__10727__auto__);

(statearr_11879[(1)] = (1));

return statearr_11879;
});
var cljs$core$async$mix_$_state_machine__10727__auto____1 = (function (state_11804){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11804);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e11880){var ex__10730__auto__ = e11880;
var statearr_11881_13297 = state_11804;
(statearr_11881_13297[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11804[(4)]))){
var statearr_11882_13298 = state_11804;
(statearr_11882_13298[(1)] = cljs.core.first((state_11804[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13299 = state_11804;
state_11804 = G__13299;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10727__auto__ = function(state_11804){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10727__auto____1.call(this,state_11804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10727__auto____0;
cljs$core$async$mix_$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10727__auto____1;
return cljs$core$async$mix_$_state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_11883 = f__10800__auto__();
(statearr_11883[(6)] = c__10799__auto___13233);

return statearr_11883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13300 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13300(p,v,ch,close_QMARK_);
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
var G__11907 = arguments.length;
switch (G__11907) {
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
var G__11910 = arguments.length;
switch (G__11910) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11908_SHARP_){
if(cljs.core.truth_((p1__11908_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11908_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11908_SHARP_.call(null,topic)))){
return p1__11908_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11908_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11911 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11912){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11912 = meta11912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11913,meta11912__$1){
var self__ = this;
var _11913__$1 = this;
return (new cljs.core.async.t_cljs$core$async11911(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11912__$1));
}));

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11913){
var self__ = this;
var _11913__$1 = this;
return self__.meta11912;
}));

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11912","meta11912",1916819678,null)], null);
}));

(cljs.core.async.t_cljs$core$async11911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11911");

(cljs.core.async.t_cljs$core$async11911.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11911.
 */
cljs.core.async.__GT_t_cljs$core$async11911 = (function cljs$core$async$__GT_t_cljs$core$async11911(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11912){
return (new cljs.core.async.t_cljs$core$async11911(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11912));
});

}

return (new cljs.core.async.t_cljs$core$async11911(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10799__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_11993){
var state_val_11994 = (state_11993[(1)]);
if((state_val_11994 === (7))){
var inst_11989 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_11995_13308 = state_11993__$1;
(statearr_11995_13308[(2)] = inst_11989);

(statearr_11995_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (20))){
var state_11993__$1 = state_11993;
var statearr_11996_13309 = state_11993__$1;
(statearr_11996_13309[(2)] = null);

(statearr_11996_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (1))){
var state_11993__$1 = state_11993;
var statearr_11997_13310 = state_11993__$1;
(statearr_11997_13310[(2)] = null);

(statearr_11997_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (24))){
var inst_11972 = (state_11993[(7)]);
var inst_11981 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11972);
var state_11993__$1 = state_11993;
var statearr_11998_13311 = state_11993__$1;
(statearr_11998_13311[(2)] = inst_11981);

(statearr_11998_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (4))){
var inst_11924 = (state_11993[(8)]);
var inst_11924__$1 = (state_11993[(2)]);
var inst_11925 = (inst_11924__$1 == null);
var state_11993__$1 = (function (){var statearr_11999 = state_11993;
(statearr_11999[(8)] = inst_11924__$1);

return statearr_11999;
})();
if(cljs.core.truth_(inst_11925)){
var statearr_12000_13312 = state_11993__$1;
(statearr_12000_13312[(1)] = (5));

} else {
var statearr_12001_13313 = state_11993__$1;
(statearr_12001_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (15))){
var inst_11966 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_12002_13314 = state_11993__$1;
(statearr_12002_13314[(2)] = inst_11966);

(statearr_12002_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (21))){
var inst_11986 = (state_11993[(2)]);
var state_11993__$1 = (function (){var statearr_12003 = state_11993;
(statearr_12003[(9)] = inst_11986);

return statearr_12003;
})();
var statearr_12004_13315 = state_11993__$1;
(statearr_12004_13315[(2)] = null);

(statearr_12004_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (13))){
var inst_11948 = (state_11993[(10)]);
var inst_11950 = cljs.core.chunked_seq_QMARK_(inst_11948);
var state_11993__$1 = state_11993;
if(inst_11950){
var statearr_12005_13316 = state_11993__$1;
(statearr_12005_13316[(1)] = (16));

} else {
var statearr_12006_13317 = state_11993__$1;
(statearr_12006_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (22))){
var inst_11978 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
if(cljs.core.truth_(inst_11978)){
var statearr_12007_13318 = state_11993__$1;
(statearr_12007_13318[(1)] = (23));

} else {
var statearr_12008_13319 = state_11993__$1;
(statearr_12008_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (6))){
var inst_11972 = (state_11993[(7)]);
var inst_11974 = (state_11993[(11)]);
var inst_11924 = (state_11993[(8)]);
var inst_11972__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11924) : topic_fn.call(null,inst_11924));
var inst_11973 = cljs.core.deref(mults);
var inst_11974__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11973,inst_11972__$1);
var state_11993__$1 = (function (){var statearr_12009 = state_11993;
(statearr_12009[(7)] = inst_11972__$1);

(statearr_12009[(11)] = inst_11974__$1);

return statearr_12009;
})();
if(cljs.core.truth_(inst_11974__$1)){
var statearr_12010_13320 = state_11993__$1;
(statearr_12010_13320[(1)] = (19));

} else {
var statearr_12011_13321 = state_11993__$1;
(statearr_12011_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (25))){
var inst_11983 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_12012_13322 = state_11993__$1;
(statearr_12012_13322[(2)] = inst_11983);

(statearr_12012_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (17))){
var inst_11948 = (state_11993[(10)]);
var inst_11957 = cljs.core.first(inst_11948);
var inst_11958 = cljs.core.async.muxch_STAR_(inst_11957);
var inst_11959 = cljs.core.async.close_BANG_(inst_11958);
var inst_11960 = cljs.core.next(inst_11948);
var inst_11934 = inst_11960;
var inst_11935 = null;
var inst_11936 = (0);
var inst_11937 = (0);
var state_11993__$1 = (function (){var statearr_12017 = state_11993;
(statearr_12017[(12)] = inst_11936);

(statearr_12017[(13)] = inst_11934);

(statearr_12017[(14)] = inst_11937);

(statearr_12017[(15)] = inst_11959);

(statearr_12017[(16)] = inst_11935);

return statearr_12017;
})();
var statearr_12018_13323 = state_11993__$1;
(statearr_12018_13323[(2)] = null);

(statearr_12018_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (3))){
var inst_11991 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11993__$1,inst_11991);
} else {
if((state_val_11994 === (12))){
var inst_11968 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_12019_13324 = state_11993__$1;
(statearr_12019_13324[(2)] = inst_11968);

(statearr_12019_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (2))){
var state_11993__$1 = state_11993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11993__$1,(4),ch);
} else {
if((state_val_11994 === (23))){
var state_11993__$1 = state_11993;
var statearr_12020_13325 = state_11993__$1;
(statearr_12020_13325[(2)] = null);

(statearr_12020_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (19))){
var inst_11974 = (state_11993[(11)]);
var inst_11924 = (state_11993[(8)]);
var inst_11976 = cljs.core.async.muxch_STAR_(inst_11974);
var state_11993__$1 = state_11993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11993__$1,(22),inst_11976,inst_11924);
} else {
if((state_val_11994 === (11))){
var inst_11934 = (state_11993[(13)]);
var inst_11948 = (state_11993[(10)]);
var inst_11948__$1 = cljs.core.seq(inst_11934);
var state_11993__$1 = (function (){var statearr_12021 = state_11993;
(statearr_12021[(10)] = inst_11948__$1);

return statearr_12021;
})();
if(inst_11948__$1){
var statearr_12022_13326 = state_11993__$1;
(statearr_12022_13326[(1)] = (13));

} else {
var statearr_12023_13327 = state_11993__$1;
(statearr_12023_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (9))){
var inst_11970 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_12024_13328 = state_11993__$1;
(statearr_12024_13328[(2)] = inst_11970);

(statearr_12024_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (5))){
var inst_11931 = cljs.core.deref(mults);
var inst_11932 = cljs.core.vals(inst_11931);
var inst_11933 = cljs.core.seq(inst_11932);
var inst_11934 = inst_11933;
var inst_11935 = null;
var inst_11936 = (0);
var inst_11937 = (0);
var state_11993__$1 = (function (){var statearr_12025 = state_11993;
(statearr_12025[(12)] = inst_11936);

(statearr_12025[(13)] = inst_11934);

(statearr_12025[(14)] = inst_11937);

(statearr_12025[(16)] = inst_11935);

return statearr_12025;
})();
var statearr_12026_13329 = state_11993__$1;
(statearr_12026_13329[(2)] = null);

(statearr_12026_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (14))){
var state_11993__$1 = state_11993;
var statearr_12030_13330 = state_11993__$1;
(statearr_12030_13330[(2)] = null);

(statearr_12030_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (16))){
var inst_11948 = (state_11993[(10)]);
var inst_11952 = cljs.core.chunk_first(inst_11948);
var inst_11953 = cljs.core.chunk_rest(inst_11948);
var inst_11954 = cljs.core.count(inst_11952);
var inst_11934 = inst_11953;
var inst_11935 = inst_11952;
var inst_11936 = inst_11954;
var inst_11937 = (0);
var state_11993__$1 = (function (){var statearr_12031 = state_11993;
(statearr_12031[(12)] = inst_11936);

(statearr_12031[(13)] = inst_11934);

(statearr_12031[(14)] = inst_11937);

(statearr_12031[(16)] = inst_11935);

return statearr_12031;
})();
var statearr_12032_13331 = state_11993__$1;
(statearr_12032_13331[(2)] = null);

(statearr_12032_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (10))){
var inst_11936 = (state_11993[(12)]);
var inst_11934 = (state_11993[(13)]);
var inst_11937 = (state_11993[(14)]);
var inst_11935 = (state_11993[(16)]);
var inst_11942 = cljs.core._nth(inst_11935,inst_11937);
var inst_11943 = cljs.core.async.muxch_STAR_(inst_11942);
var inst_11944 = cljs.core.async.close_BANG_(inst_11943);
var inst_11945 = (inst_11937 + (1));
var tmp12027 = inst_11936;
var tmp12028 = inst_11934;
var tmp12029 = inst_11935;
var inst_11934__$1 = tmp12028;
var inst_11935__$1 = tmp12029;
var inst_11936__$1 = tmp12027;
var inst_11937__$1 = inst_11945;
var state_11993__$1 = (function (){var statearr_12033 = state_11993;
(statearr_12033[(17)] = inst_11944);

(statearr_12033[(12)] = inst_11936__$1);

(statearr_12033[(13)] = inst_11934__$1);

(statearr_12033[(14)] = inst_11937__$1);

(statearr_12033[(16)] = inst_11935__$1);

return statearr_12033;
})();
var statearr_12034_13332 = state_11993__$1;
(statearr_12034_13332[(2)] = null);

(statearr_12034_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (18))){
var inst_11963 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_12043_13333 = state_11993__$1;
(statearr_12043_13333[(2)] = inst_11963);

(statearr_12043_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (8))){
var inst_11936 = (state_11993[(12)]);
var inst_11937 = (state_11993[(14)]);
var inst_11939 = (inst_11937 < inst_11936);
var inst_11940 = inst_11939;
var state_11993__$1 = state_11993;
if(cljs.core.truth_(inst_11940)){
var statearr_12044_13334 = state_11993__$1;
(statearr_12044_13334[(1)] = (10));

} else {
var statearr_12045_13335 = state_11993__$1;
(statearr_12045_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_12046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12046[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_12046[(1)] = (1));

return statearr_12046;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_11993){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_11993);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e12047){var ex__10730__auto__ = e12047;
var statearr_12048_13336 = state_11993;
(statearr_12048_13336[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_11993[(4)]))){
var statearr_12049_13337 = state_11993;
(statearr_12049_13337[(1)] = cljs.core.first((state_11993[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_11993;
state_11993 = G__13338;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_11993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_11993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_12050 = f__10800__auto__();
(statearr_12050[(6)] = c__10799__auto___13307);

return statearr_12050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
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
var G__12052 = arguments.length;
switch (G__12052) {
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
var G__12060 = arguments.length;
switch (G__12060) {
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
var G__12067 = arguments.length;
switch (G__12067) {
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
var c__10799__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_12118){
var state_val_12119 = (state_12118[(1)]);
if((state_val_12119 === (7))){
var state_12118__$1 = state_12118;
var statearr_12120_13343 = state_12118__$1;
(statearr_12120_13343[(2)] = null);

(statearr_12120_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (1))){
var state_12118__$1 = state_12118;
var statearr_12121_13344 = state_12118__$1;
(statearr_12121_13344[(2)] = null);

(statearr_12121_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (4))){
var inst_12070 = (state_12118[(7)]);
var inst_12071 = (state_12118[(8)]);
var inst_12073 = (inst_12071 < inst_12070);
var state_12118__$1 = state_12118;
if(cljs.core.truth_(inst_12073)){
var statearr_12122_13345 = state_12118__$1;
(statearr_12122_13345[(1)] = (6));

} else {
var statearr_12123_13346 = state_12118__$1;
(statearr_12123_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (15))){
var inst_12104 = (state_12118[(9)]);
var inst_12109 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12104);
var state_12118__$1 = state_12118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12118__$1,(17),out,inst_12109);
} else {
if((state_val_12119 === (13))){
var inst_12104 = (state_12118[(9)]);
var inst_12104__$1 = (state_12118[(2)]);
var inst_12105 = cljs.core.some(cljs.core.nil_QMARK_,inst_12104__$1);
var state_12118__$1 = (function (){var statearr_12124 = state_12118;
(statearr_12124[(9)] = inst_12104__$1);

return statearr_12124;
})();
if(cljs.core.truth_(inst_12105)){
var statearr_12125_13347 = state_12118__$1;
(statearr_12125_13347[(1)] = (14));

} else {
var statearr_12126_13348 = state_12118__$1;
(statearr_12126_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (6))){
var state_12118__$1 = state_12118;
var statearr_12127_13349 = state_12118__$1;
(statearr_12127_13349[(2)] = null);

(statearr_12127_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (17))){
var inst_12111 = (state_12118[(2)]);
var state_12118__$1 = (function (){var statearr_12130 = state_12118;
(statearr_12130[(10)] = inst_12111);

return statearr_12130;
})();
var statearr_12131_13350 = state_12118__$1;
(statearr_12131_13350[(2)] = null);

(statearr_12131_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (3))){
var inst_12116 = (state_12118[(2)]);
var state_12118__$1 = state_12118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12118__$1,inst_12116);
} else {
if((state_val_12119 === (12))){
var _ = (function (){var statearr_12146 = state_12118;
(statearr_12146[(4)] = cljs.core.rest((state_12118[(4)])));

return statearr_12146;
})();
var state_12118__$1 = state_12118;
var ex12128 = (state_12118__$1[(2)]);
var statearr_12147_13351 = state_12118__$1;
(statearr_12147_13351[(5)] = ex12128);


if((ex12128 instanceof Object)){
var statearr_12148_13352 = state_12118__$1;
(statearr_12148_13352[(1)] = (11));

(statearr_12148_13352[(5)] = null);

} else {
throw ex12128;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (2))){
var inst_12069 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12070 = cnt;
var inst_12071 = (0);
var state_12118__$1 = (function (){var statearr_12149 = state_12118;
(statearr_12149[(7)] = inst_12070);

(statearr_12149[(8)] = inst_12071);

(statearr_12149[(11)] = inst_12069);

return statearr_12149;
})();
var statearr_12150_13353 = state_12118__$1;
(statearr_12150_13353[(2)] = null);

(statearr_12150_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (11))){
var inst_12078 = (state_12118[(2)]);
var inst_12079 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12118__$1 = (function (){var statearr_12151 = state_12118;
(statearr_12151[(12)] = inst_12078);

return statearr_12151;
})();
var statearr_12152_13354 = state_12118__$1;
(statearr_12152_13354[(2)] = inst_12079);

(statearr_12152_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (9))){
var inst_12071 = (state_12118[(8)]);
var _ = (function (){var statearr_12153 = state_12118;
(statearr_12153[(4)] = cljs.core.cons((12),(state_12118[(4)])));

return statearr_12153;
})();
var inst_12089 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12071) : chs__$1.call(null,inst_12071));
var inst_12090 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12071) : done.call(null,inst_12071));
var inst_12091 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12089,inst_12090);
var ___$1 = (function (){var statearr_12154 = state_12118;
(statearr_12154[(4)] = cljs.core.rest((state_12118[(4)])));

return statearr_12154;
})();
var state_12118__$1 = state_12118;
var statearr_12155_13355 = state_12118__$1;
(statearr_12155_13355[(2)] = inst_12091);

(statearr_12155_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (5))){
var inst_12102 = (state_12118[(2)]);
var state_12118__$1 = (function (){var statearr_12156 = state_12118;
(statearr_12156[(13)] = inst_12102);

return statearr_12156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12118__$1,(13),dchan);
} else {
if((state_val_12119 === (14))){
var inst_12107 = cljs.core.async.close_BANG_(out);
var state_12118__$1 = state_12118;
var statearr_12157_13356 = state_12118__$1;
(statearr_12157_13356[(2)] = inst_12107);

(statearr_12157_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (16))){
var inst_12114 = (state_12118[(2)]);
var state_12118__$1 = state_12118;
var statearr_12160_13357 = state_12118__$1;
(statearr_12160_13357[(2)] = inst_12114);

(statearr_12160_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (10))){
var inst_12071 = (state_12118[(8)]);
var inst_12094 = (state_12118[(2)]);
var inst_12095 = (inst_12071 + (1));
var inst_12071__$1 = inst_12095;
var state_12118__$1 = (function (){var statearr_12162 = state_12118;
(statearr_12162[(14)] = inst_12094);

(statearr_12162[(8)] = inst_12071__$1);

return statearr_12162;
})();
var statearr_12171_13358 = state_12118__$1;
(statearr_12171_13358[(2)] = null);

(statearr_12171_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (8))){
var inst_12100 = (state_12118[(2)]);
var state_12118__$1 = state_12118;
var statearr_12172_13359 = state_12118__$1;
(statearr_12172_13359[(2)] = inst_12100);

(statearr_12172_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_12173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12173[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_12173[(1)] = (1));

return statearr_12173;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_12118){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_12118);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e12174){var ex__10730__auto__ = e12174;
var statearr_12175_13360 = state_12118;
(statearr_12175_13360[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_12118[(4)]))){
var statearr_12176_13361 = state_12118;
(statearr_12176_13361[(1)] = cljs.core.first((state_12118[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12118;
state_12118 = G__13362;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_12118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_12118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_12177 = f__10800__auto__();
(statearr_12177[(6)] = c__10799__auto___13342);

return statearr_12177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
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
var G__12181 = arguments.length;
switch (G__12181) {
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
var c__10799__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_12216){
var state_val_12217 = (state_12216[(1)]);
if((state_val_12217 === (7))){
var inst_12194 = (state_12216[(7)]);
var inst_12195 = (state_12216[(8)]);
var inst_12194__$1 = (state_12216[(2)]);
var inst_12195__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12194__$1,(0),null);
var inst_12196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12194__$1,(1),null);
var inst_12197 = (inst_12195__$1 == null);
var state_12216__$1 = (function (){var statearr_12219 = state_12216;
(statearr_12219[(7)] = inst_12194__$1);

(statearr_12219[(8)] = inst_12195__$1);

(statearr_12219[(9)] = inst_12196);

return statearr_12219;
})();
if(cljs.core.truth_(inst_12197)){
var statearr_12220_13365 = state_12216__$1;
(statearr_12220_13365[(1)] = (8));

} else {
var statearr_12221_13366 = state_12216__$1;
(statearr_12221_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (1))){
var inst_12182 = cljs.core.vec(chs);
var inst_12183 = inst_12182;
var state_12216__$1 = (function (){var statearr_12222 = state_12216;
(statearr_12222[(10)] = inst_12183);

return statearr_12222;
})();
var statearr_12223_13367 = state_12216__$1;
(statearr_12223_13367[(2)] = null);

(statearr_12223_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (4))){
var inst_12183 = (state_12216[(10)]);
var state_12216__$1 = state_12216;
return cljs.core.async.ioc_alts_BANG_(state_12216__$1,(7),inst_12183);
} else {
if((state_val_12217 === (6))){
var inst_12212 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12224_13368 = state_12216__$1;
(statearr_12224_13368[(2)] = inst_12212);

(statearr_12224_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (3))){
var inst_12214 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12216__$1,inst_12214);
} else {
if((state_val_12217 === (2))){
var inst_12183 = (state_12216[(10)]);
var inst_12187 = cljs.core.count(inst_12183);
var inst_12188 = (inst_12187 > (0));
var state_12216__$1 = state_12216;
if(cljs.core.truth_(inst_12188)){
var statearr_12226_13369 = state_12216__$1;
(statearr_12226_13369[(1)] = (4));

} else {
var statearr_12227_13370 = state_12216__$1;
(statearr_12227_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (11))){
var inst_12183 = (state_12216[(10)]);
var inst_12204 = (state_12216[(2)]);
var tmp12225 = inst_12183;
var inst_12183__$1 = tmp12225;
var state_12216__$1 = (function (){var statearr_12228 = state_12216;
(statearr_12228[(11)] = inst_12204);

(statearr_12228[(10)] = inst_12183__$1);

return statearr_12228;
})();
var statearr_12229_13371 = state_12216__$1;
(statearr_12229_13371[(2)] = null);

(statearr_12229_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (9))){
var inst_12195 = (state_12216[(8)]);
var state_12216__$1 = state_12216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12216__$1,(11),out,inst_12195);
} else {
if((state_val_12217 === (5))){
var inst_12210 = cljs.core.async.close_BANG_(out);
var state_12216__$1 = state_12216;
var statearr_12230_13372 = state_12216__$1;
(statearr_12230_13372[(2)] = inst_12210);

(statearr_12230_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (10))){
var inst_12207 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12231_13373 = state_12216__$1;
(statearr_12231_13373[(2)] = inst_12207);

(statearr_12231_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (8))){
var inst_12183 = (state_12216[(10)]);
var inst_12194 = (state_12216[(7)]);
var inst_12195 = (state_12216[(8)]);
var inst_12196 = (state_12216[(9)]);
var inst_12199 = (function (){var cs = inst_12183;
var vec__12190 = inst_12194;
var v = inst_12195;
var c = inst_12196;
return (function (p1__12179_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12179_SHARP_);
});
})();
var inst_12200 = cljs.core.filterv(inst_12199,inst_12183);
var inst_12183__$1 = inst_12200;
var state_12216__$1 = (function (){var statearr_12235 = state_12216;
(statearr_12235[(10)] = inst_12183__$1);

return statearr_12235;
})();
var statearr_12236_13374 = state_12216__$1;
(statearr_12236_13374[(2)] = null);

(statearr_12236_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_12237 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12237[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_12237[(1)] = (1));

return statearr_12237;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_12216){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_12216);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e12238){var ex__10730__auto__ = e12238;
var statearr_12239_13375 = state_12216;
(statearr_12239_13375[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_12216[(4)]))){
var statearr_12240_13376 = state_12216;
(statearr_12240_13376[(1)] = cljs.core.first((state_12216[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12216;
state_12216 = G__13377;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_12216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_12216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_12241 = f__10800__auto__();
(statearr_12241[(6)] = c__10799__auto___13364);

return statearr_12241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
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
var G__12243 = arguments.length;
switch (G__12243) {
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
var c__10799__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_12267){
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
var statearr_12271_13380 = state_12267__$1;
(statearr_12271_13380[(1)] = (8));

} else {
var statearr_12272_13381 = state_12267__$1;
(statearr_12272_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (1))){
var inst_12244 = (0);
var state_12267__$1 = (function (){var statearr_12273 = state_12267;
(statearr_12273[(8)] = inst_12244);

return statearr_12273;
})();
var statearr_12274_13382 = state_12267__$1;
(statearr_12274_13382[(2)] = null);

(statearr_12274_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (4))){
var state_12267__$1 = state_12267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12267__$1,(7),ch);
} else {
if((state_val_12268 === (6))){
var inst_12262 = (state_12267[(2)]);
var state_12267__$1 = state_12267;
var statearr_12275_13383 = state_12267__$1;
(statearr_12275_13383[(2)] = inst_12262);

(statearr_12275_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (3))){
var inst_12264 = (state_12267[(2)]);
var inst_12265 = cljs.core.async.close_BANG_(out);
var state_12267__$1 = (function (){var statearr_12276 = state_12267;
(statearr_12276[(9)] = inst_12264);

return statearr_12276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12267__$1,inst_12265);
} else {
if((state_val_12268 === (2))){
var inst_12244 = (state_12267[(8)]);
var inst_12246 = (inst_12244 < n);
var state_12267__$1 = state_12267;
if(cljs.core.truth_(inst_12246)){
var statearr_12277_13384 = state_12267__$1;
(statearr_12277_13384[(1)] = (4));

} else {
var statearr_12278_13385 = state_12267__$1;
(statearr_12278_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (11))){
var inst_12244 = (state_12267[(8)]);
var inst_12254 = (state_12267[(2)]);
var inst_12255 = (inst_12244 + (1));
var inst_12244__$1 = inst_12255;
var state_12267__$1 = (function (){var statearr_12282 = state_12267;
(statearr_12282[(10)] = inst_12254);

(statearr_12282[(8)] = inst_12244__$1);

return statearr_12282;
})();
var statearr_12283_13386 = state_12267__$1;
(statearr_12283_13386[(2)] = null);

(statearr_12283_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (9))){
var state_12267__$1 = state_12267;
var statearr_12284_13387 = state_12267__$1;
(statearr_12284_13387[(2)] = null);

(statearr_12284_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (5))){
var state_12267__$1 = state_12267;
var statearr_12285_13388 = state_12267__$1;
(statearr_12285_13388[(2)] = null);

(statearr_12285_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (10))){
var inst_12259 = (state_12267[(2)]);
var state_12267__$1 = state_12267;
var statearr_12286_13389 = state_12267__$1;
(statearr_12286_13389[(2)] = inst_12259);

(statearr_12286_13389[(1)] = (6));


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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_12287 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12287[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_12287[(1)] = (1));

return statearr_12287;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_12267){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_12267);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e12288){var ex__10730__auto__ = e12288;
var statearr_12289_13390 = state_12267;
(statearr_12289_13390[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_12267[(4)]))){
var statearr_12290_13391 = state_12267;
(statearr_12290_13391[(1)] = cljs.core.first((state_12267[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12267;
state_12267 = G__13392;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_12267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_12267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_12291 = f__10800__auto__();
(statearr_12291[(6)] = c__10799__auto___13379);

return statearr_12291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12293 = (function (f,ch,meta12294){
this.f = f;
this.ch = ch;
this.meta12294 = meta12294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12295,meta12294__$1){
var self__ = this;
var _12295__$1 = this;
return (new cljs.core.async.t_cljs$core$async12293(self__.f,self__.ch,meta12294__$1));
}));

(cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12295){
var self__ = this;
var _12295__$1 = this;
return self__.meta12294;
}));

(cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12296 = (function (f,ch,meta12294,_,fn1,meta12297){
this.f = f;
this.ch = ch;
this.meta12294 = meta12294;
this._ = _;
this.fn1 = fn1;
this.meta12297 = meta12297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12298,meta12297__$1){
var self__ = this;
var _12298__$1 = this;
return (new cljs.core.async.t_cljs$core$async12296(self__.f,self__.ch,self__.meta12294,self__._,self__.fn1,meta12297__$1));
}));

(cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12298){
var self__ = this;
var _12298__$1 = this;
return self__.meta12297;
}));

(cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12292_SHARP_){
var G__12299 = (((p1__12292_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12292_SHARP_) : self__.f.call(null,p1__12292_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12299) : f1.call(null,G__12299));
});
}));

(cljs.core.async.t_cljs$core$async12296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12294","meta12294",141018739,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12293","cljs.core.async/t_cljs$core$async12293",-1734431955,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12297","meta12297",-437297399,null)], null);
}));

(cljs.core.async.t_cljs$core$async12296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12296");

(cljs.core.async.t_cljs$core$async12296.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12296.
 */
cljs.core.async.__GT_t_cljs$core$async12296 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12296(f__$1,ch__$1,meta12294__$1,___$2,fn1__$1,meta12297){
return (new cljs.core.async.t_cljs$core$async12296(f__$1,ch__$1,meta12294__$1,___$2,fn1__$1,meta12297));
});

}

return (new cljs.core.async.t_cljs$core$async12296(self__.f,self__.ch,self__.meta12294,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12301 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12301) : self__.f.call(null,G__12301));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12294","meta12294",141018739,null)], null);
}));

(cljs.core.async.t_cljs$core$async12293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12293");

(cljs.core.async.t_cljs$core$async12293.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12293.
 */
cljs.core.async.__GT_t_cljs$core$async12293 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12293(f__$1,ch__$1,meta12294){
return (new cljs.core.async.t_cljs$core$async12293(f__$1,ch__$1,meta12294));
});

}

return (new cljs.core.async.t_cljs$core$async12293(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12302 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12302 = (function (f,ch,meta12303){
this.f = f;
this.ch = ch;
this.meta12303 = meta12303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12304,meta12303__$1){
var self__ = this;
var _12304__$1 = this;
return (new cljs.core.async.t_cljs$core$async12302(self__.f,self__.ch,meta12303__$1));
}));

(cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12304){
var self__ = this;
var _12304__$1 = this;
return self__.meta12303;
}));

(cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12303","meta12303",-725433864,null)], null);
}));

(cljs.core.async.t_cljs$core$async12302.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12302");

(cljs.core.async.t_cljs$core$async12302.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12302");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12302.
 */
cljs.core.async.__GT_t_cljs$core$async12302 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12302(f__$1,ch__$1,meta12303){
return (new cljs.core.async.t_cljs$core$async12302(f__$1,ch__$1,meta12303));
});

}

return (new cljs.core.async.t_cljs$core$async12302(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12305 = (function (p,ch,meta12306){
this.p = p;
this.ch = ch;
this.meta12306 = meta12306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12307,meta12306__$1){
var self__ = this;
var _12307__$1 = this;
return (new cljs.core.async.t_cljs$core$async12305(self__.p,self__.ch,meta12306__$1));
}));

(cljs.core.async.t_cljs$core$async12305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12307){
var self__ = this;
var _12307__$1 = this;
return self__.meta12306;
}));

(cljs.core.async.t_cljs$core$async12305.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12305.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12305.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12305.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12306","meta12306",582456824,null)], null);
}));

(cljs.core.async.t_cljs$core$async12305.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12305");

(cljs.core.async.t_cljs$core$async12305.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12305");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12305.
 */
cljs.core.async.__GT_t_cljs$core$async12305 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12305(p__$1,ch__$1,meta12306){
return (new cljs.core.async.t_cljs$core$async12305(p__$1,ch__$1,meta12306));
});

}

return (new cljs.core.async.t_cljs$core$async12305(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12323 = arguments.length;
switch (G__12323) {
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
var c__10799__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_12366){
var state_val_12367 = (state_12366[(1)]);
if((state_val_12367 === (7))){
var inst_12362 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
var statearr_12370_13395 = state_12366__$1;
(statearr_12370_13395[(2)] = inst_12362);

(statearr_12370_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (1))){
var state_12366__$1 = state_12366;
var statearr_12373_13396 = state_12366__$1;
(statearr_12373_13396[(2)] = null);

(statearr_12373_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (4))){
var inst_12348 = (state_12366[(7)]);
var inst_12348__$1 = (state_12366[(2)]);
var inst_12349 = (inst_12348__$1 == null);
var state_12366__$1 = (function (){var statearr_12376 = state_12366;
(statearr_12376[(7)] = inst_12348__$1);

return statearr_12376;
})();
if(cljs.core.truth_(inst_12349)){
var statearr_12377_13397 = state_12366__$1;
(statearr_12377_13397[(1)] = (5));

} else {
var statearr_12378_13398 = state_12366__$1;
(statearr_12378_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (6))){
var inst_12348 = (state_12366[(7)]);
var inst_12353 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12348) : p.call(null,inst_12348));
var state_12366__$1 = state_12366;
if(cljs.core.truth_(inst_12353)){
var statearr_12381_13399 = state_12366__$1;
(statearr_12381_13399[(1)] = (8));

} else {
var statearr_12383_13400 = state_12366__$1;
(statearr_12383_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (3))){
var inst_12364 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12366__$1,inst_12364);
} else {
if((state_val_12367 === (2))){
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12366__$1,(4),ch);
} else {
if((state_val_12367 === (11))){
var inst_12356 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
var statearr_12386_13401 = state_12366__$1;
(statearr_12386_13401[(2)] = inst_12356);

(statearr_12386_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (9))){
var state_12366__$1 = state_12366;
var statearr_12387_13402 = state_12366__$1;
(statearr_12387_13402[(2)] = null);

(statearr_12387_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (5))){
var inst_12351 = cljs.core.async.close_BANG_(out);
var state_12366__$1 = state_12366;
var statearr_12388_13403 = state_12366__$1;
(statearr_12388_13403[(2)] = inst_12351);

(statearr_12388_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (10))){
var inst_12359 = (state_12366[(2)]);
var state_12366__$1 = (function (){var statearr_12389 = state_12366;
(statearr_12389[(8)] = inst_12359);

return statearr_12389;
})();
var statearr_12390_13404 = state_12366__$1;
(statearr_12390_13404[(2)] = null);

(statearr_12390_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (8))){
var inst_12348 = (state_12366[(7)]);
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12366__$1,(11),out,inst_12348);
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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_12391 = [null,null,null,null,null,null,null,null,null];
(statearr_12391[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_12391[(1)] = (1));

return statearr_12391;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_12366){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_12366);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e12392){var ex__10730__auto__ = e12392;
var statearr_12393_13405 = state_12366;
(statearr_12393_13405[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_12366[(4)]))){
var statearr_12398_13406 = state_12366;
(statearr_12398_13406[(1)] = cljs.core.first((state_12366[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12366;
state_12366 = G__13407;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_12366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_12366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_12399 = f__10800__auto__();
(statearr_12399[(6)] = c__10799__auto___13394);

return statearr_12399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12401 = arguments.length;
switch (G__12401) {
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
var c__10799__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_12469){
var state_val_12470 = (state_12469[(1)]);
if((state_val_12470 === (7))){
var inst_12465 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12471_13409 = state_12469__$1;
(statearr_12471_13409[(2)] = inst_12465);

(statearr_12471_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (20))){
var inst_12429 = (state_12469[(7)]);
var inst_12446 = (state_12469[(2)]);
var inst_12447 = cljs.core.next(inst_12429);
var inst_12415 = inst_12447;
var inst_12416 = null;
var inst_12417 = (0);
var inst_12418 = (0);
var state_12469__$1 = (function (){var statearr_12474 = state_12469;
(statearr_12474[(8)] = inst_12417);

(statearr_12474[(9)] = inst_12415);

(statearr_12474[(10)] = inst_12416);

(statearr_12474[(11)] = inst_12446);

(statearr_12474[(12)] = inst_12418);

return statearr_12474;
})();
var statearr_12475_13410 = state_12469__$1;
(statearr_12475_13410[(2)] = null);

(statearr_12475_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (1))){
var state_12469__$1 = state_12469;
var statearr_12476_13411 = state_12469__$1;
(statearr_12476_13411[(2)] = null);

(statearr_12476_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (4))){
var inst_12404 = (state_12469[(13)]);
var inst_12404__$1 = (state_12469[(2)]);
var inst_12405 = (inst_12404__$1 == null);
var state_12469__$1 = (function (){var statearr_12477 = state_12469;
(statearr_12477[(13)] = inst_12404__$1);

return statearr_12477;
})();
if(cljs.core.truth_(inst_12405)){
var statearr_12478_13412 = state_12469__$1;
(statearr_12478_13412[(1)] = (5));

} else {
var statearr_12479_13413 = state_12469__$1;
(statearr_12479_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (15))){
var state_12469__$1 = state_12469;
var statearr_12483_13414 = state_12469__$1;
(statearr_12483_13414[(2)] = null);

(statearr_12483_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (21))){
var state_12469__$1 = state_12469;
var statearr_12497_13415 = state_12469__$1;
(statearr_12497_13415[(2)] = null);

(statearr_12497_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (13))){
var inst_12417 = (state_12469[(8)]);
var inst_12415 = (state_12469[(9)]);
var inst_12416 = (state_12469[(10)]);
var inst_12418 = (state_12469[(12)]);
var inst_12425 = (state_12469[(2)]);
var inst_12426 = (inst_12418 + (1));
var tmp12480 = inst_12417;
var tmp12481 = inst_12415;
var tmp12482 = inst_12416;
var inst_12415__$1 = tmp12481;
var inst_12416__$1 = tmp12482;
var inst_12417__$1 = tmp12480;
var inst_12418__$1 = inst_12426;
var state_12469__$1 = (function (){var statearr_12498 = state_12469;
(statearr_12498[(14)] = inst_12425);

(statearr_12498[(8)] = inst_12417__$1);

(statearr_12498[(9)] = inst_12415__$1);

(statearr_12498[(10)] = inst_12416__$1);

(statearr_12498[(12)] = inst_12418__$1);

return statearr_12498;
})();
var statearr_12499_13416 = state_12469__$1;
(statearr_12499_13416[(2)] = null);

(statearr_12499_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (22))){
var state_12469__$1 = state_12469;
var statearr_12502_13417 = state_12469__$1;
(statearr_12502_13417[(2)] = null);

(statearr_12502_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (6))){
var inst_12404 = (state_12469[(13)]);
var inst_12413 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12404) : f.call(null,inst_12404));
var inst_12414 = cljs.core.seq(inst_12413);
var inst_12415 = inst_12414;
var inst_12416 = null;
var inst_12417 = (0);
var inst_12418 = (0);
var state_12469__$1 = (function (){var statearr_12505 = state_12469;
(statearr_12505[(8)] = inst_12417);

(statearr_12505[(9)] = inst_12415);

(statearr_12505[(10)] = inst_12416);

(statearr_12505[(12)] = inst_12418);

return statearr_12505;
})();
var statearr_12508_13418 = state_12469__$1;
(statearr_12508_13418[(2)] = null);

(statearr_12508_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (17))){
var inst_12429 = (state_12469[(7)]);
var inst_12439 = cljs.core.chunk_first(inst_12429);
var inst_12440 = cljs.core.chunk_rest(inst_12429);
var inst_12441 = cljs.core.count(inst_12439);
var inst_12415 = inst_12440;
var inst_12416 = inst_12439;
var inst_12417 = inst_12441;
var inst_12418 = (0);
var state_12469__$1 = (function (){var statearr_12510 = state_12469;
(statearr_12510[(8)] = inst_12417);

(statearr_12510[(9)] = inst_12415);

(statearr_12510[(10)] = inst_12416);

(statearr_12510[(12)] = inst_12418);

return statearr_12510;
})();
var statearr_12514_13419 = state_12469__$1;
(statearr_12514_13419[(2)] = null);

(statearr_12514_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (3))){
var inst_12467 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12469__$1,inst_12467);
} else {
if((state_val_12470 === (12))){
var inst_12455 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12515_13420 = state_12469__$1;
(statearr_12515_13420[(2)] = inst_12455);

(statearr_12515_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (2))){
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12469__$1,(4),in$);
} else {
if((state_val_12470 === (23))){
var inst_12463 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12516_13421 = state_12469__$1;
(statearr_12516_13421[(2)] = inst_12463);

(statearr_12516_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (19))){
var inst_12450 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12517_13422 = state_12469__$1;
(statearr_12517_13422[(2)] = inst_12450);

(statearr_12517_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (11))){
var inst_12415 = (state_12469[(9)]);
var inst_12429 = (state_12469[(7)]);
var inst_12429__$1 = cljs.core.seq(inst_12415);
var state_12469__$1 = (function (){var statearr_12519 = state_12469;
(statearr_12519[(7)] = inst_12429__$1);

return statearr_12519;
})();
if(inst_12429__$1){
var statearr_12520_13423 = state_12469__$1;
(statearr_12520_13423[(1)] = (14));

} else {
var statearr_12521_13424 = state_12469__$1;
(statearr_12521_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (9))){
var inst_12457 = (state_12469[(2)]);
var inst_12458 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12469__$1 = (function (){var statearr_12522 = state_12469;
(statearr_12522[(15)] = inst_12457);

return statearr_12522;
})();
if(cljs.core.truth_(inst_12458)){
var statearr_12535_13425 = state_12469__$1;
(statearr_12535_13425[(1)] = (21));

} else {
var statearr_12536_13426 = state_12469__$1;
(statearr_12536_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (5))){
var inst_12407 = cljs.core.async.close_BANG_(out);
var state_12469__$1 = state_12469;
var statearr_12537_13427 = state_12469__$1;
(statearr_12537_13427[(2)] = inst_12407);

(statearr_12537_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (14))){
var inst_12429 = (state_12469[(7)]);
var inst_12431 = cljs.core.chunked_seq_QMARK_(inst_12429);
var state_12469__$1 = state_12469;
if(inst_12431){
var statearr_12538_13428 = state_12469__$1;
(statearr_12538_13428[(1)] = (17));

} else {
var statearr_12540_13429 = state_12469__$1;
(statearr_12540_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (16))){
var inst_12453 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12541_13430 = state_12469__$1;
(statearr_12541_13430[(2)] = inst_12453);

(statearr_12541_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (10))){
var inst_12416 = (state_12469[(10)]);
var inst_12418 = (state_12469[(12)]);
var inst_12423 = cljs.core._nth(inst_12416,inst_12418);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12469__$1,(13),out,inst_12423);
} else {
if((state_val_12470 === (18))){
var inst_12429 = (state_12469[(7)]);
var inst_12444 = cljs.core.first(inst_12429);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12469__$1,(20),out,inst_12444);
} else {
if((state_val_12470 === (8))){
var inst_12417 = (state_12469[(8)]);
var inst_12418 = (state_12469[(12)]);
var inst_12420 = (inst_12418 < inst_12417);
var inst_12421 = inst_12420;
var state_12469__$1 = state_12469;
if(cljs.core.truth_(inst_12421)){
var statearr_12542_13431 = state_12469__$1;
(statearr_12542_13431[(1)] = (10));

} else {
var statearr_12543_13432 = state_12469__$1;
(statearr_12543_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10727__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10727__auto____0 = (function (){
var statearr_12544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12544[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10727__auto__);

(statearr_12544[(1)] = (1));

return statearr_12544;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10727__auto____1 = (function (state_12469){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_12469);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e12545){var ex__10730__auto__ = e12545;
var statearr_12546_13433 = state_12469;
(statearr_12546_13433[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_12469[(4)]))){
var statearr_12547_13434 = state_12469;
(statearr_12547_13434[(1)] = cljs.core.first((state_12469[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12469;
state_12469 = G__13435;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10727__auto__ = function(state_12469){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10727__auto____1.call(this,state_12469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10727__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10727__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_12557 = f__10800__auto__();
(statearr_12557[(6)] = c__10799__auto__);

return statearr_12557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));

return c__10799__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12562 = arguments.length;
switch (G__12562) {
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
var G__12567 = arguments.length;
switch (G__12567) {
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
var G__12571 = arguments.length;
switch (G__12571) {
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
var c__10799__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_12611){
var state_val_12612 = (state_12611[(1)]);
if((state_val_12612 === (7))){
var inst_12606 = (state_12611[(2)]);
var state_12611__$1 = state_12611;
var statearr_12614_13440 = state_12611__$1;
(statearr_12614_13440[(2)] = inst_12606);

(statearr_12614_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (1))){
var inst_12587 = null;
var state_12611__$1 = (function (){var statearr_12615 = state_12611;
(statearr_12615[(7)] = inst_12587);

return statearr_12615;
})();
var statearr_12616_13441 = state_12611__$1;
(statearr_12616_13441[(2)] = null);

(statearr_12616_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (4))){
var inst_12590 = (state_12611[(8)]);
var inst_12590__$1 = (state_12611[(2)]);
var inst_12591 = (inst_12590__$1 == null);
var inst_12592 = cljs.core.not(inst_12591);
var state_12611__$1 = (function (){var statearr_12617 = state_12611;
(statearr_12617[(8)] = inst_12590__$1);

return statearr_12617;
})();
if(inst_12592){
var statearr_12618_13442 = state_12611__$1;
(statearr_12618_13442[(1)] = (5));

} else {
var statearr_12619_13443 = state_12611__$1;
(statearr_12619_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (6))){
var state_12611__$1 = state_12611;
var statearr_12621_13444 = state_12611__$1;
(statearr_12621_13444[(2)] = null);

(statearr_12621_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (3))){
var inst_12608 = (state_12611[(2)]);
var inst_12609 = cljs.core.async.close_BANG_(out);
var state_12611__$1 = (function (){var statearr_12623 = state_12611;
(statearr_12623[(9)] = inst_12608);

return statearr_12623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12611__$1,inst_12609);
} else {
if((state_val_12612 === (2))){
var state_12611__$1 = state_12611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12611__$1,(4),ch);
} else {
if((state_val_12612 === (11))){
var inst_12590 = (state_12611[(8)]);
var inst_12600 = (state_12611[(2)]);
var inst_12587 = inst_12590;
var state_12611__$1 = (function (){var statearr_12624 = state_12611;
(statearr_12624[(7)] = inst_12587);

(statearr_12624[(10)] = inst_12600);

return statearr_12624;
})();
var statearr_12625_13445 = state_12611__$1;
(statearr_12625_13445[(2)] = null);

(statearr_12625_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (9))){
var inst_12590 = (state_12611[(8)]);
var state_12611__$1 = state_12611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12611__$1,(11),out,inst_12590);
} else {
if((state_val_12612 === (5))){
var inst_12587 = (state_12611[(7)]);
var inst_12590 = (state_12611[(8)]);
var inst_12594 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12590,inst_12587);
var state_12611__$1 = state_12611;
if(inst_12594){
var statearr_12627_13446 = state_12611__$1;
(statearr_12627_13446[(1)] = (8));

} else {
var statearr_12628_13447 = state_12611__$1;
(statearr_12628_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (10))){
var inst_12603 = (state_12611[(2)]);
var state_12611__$1 = state_12611;
var statearr_12630_13448 = state_12611__$1;
(statearr_12630_13448[(2)] = inst_12603);

(statearr_12630_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (8))){
var inst_12587 = (state_12611[(7)]);
var tmp12626 = inst_12587;
var inst_12587__$1 = tmp12626;
var state_12611__$1 = (function (){var statearr_12632 = state_12611;
(statearr_12632[(7)] = inst_12587__$1);

return statearr_12632;
})();
var statearr_12633_13449 = state_12611__$1;
(statearr_12633_13449[(2)] = null);

(statearr_12633_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_12634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12634[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_12634[(1)] = (1));

return statearr_12634;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_12611){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_12611);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e12635){var ex__10730__auto__ = e12635;
var statearr_12637_13450 = state_12611;
(statearr_12637_13450[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_12611[(4)]))){
var statearr_12638_13451 = state_12611;
(statearr_12638_13451[(1)] = cljs.core.first((state_12611[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12611;
state_12611 = G__13452;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_12611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_12611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_12640 = f__10800__auto__();
(statearr_12640[(6)] = c__10799__auto___13439);

return statearr_12640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12642 = arguments.length;
switch (G__12642) {
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
var c__10799__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_12680){
var state_val_12681 = (state_12680[(1)]);
if((state_val_12681 === (7))){
var inst_12676 = (state_12680[(2)]);
var state_12680__$1 = state_12680;
var statearr_12687_13455 = state_12680__$1;
(statearr_12687_13455[(2)] = inst_12676);

(statearr_12687_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (1))){
var inst_12643 = (new Array(n));
var inst_12644 = inst_12643;
var inst_12645 = (0);
var state_12680__$1 = (function (){var statearr_12688 = state_12680;
(statearr_12688[(7)] = inst_12644);

(statearr_12688[(8)] = inst_12645);

return statearr_12688;
})();
var statearr_12690_13456 = state_12680__$1;
(statearr_12690_13456[(2)] = null);

(statearr_12690_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (4))){
var inst_12648 = (state_12680[(9)]);
var inst_12648__$1 = (state_12680[(2)]);
var inst_12649 = (inst_12648__$1 == null);
var inst_12650 = cljs.core.not(inst_12649);
var state_12680__$1 = (function (){var statearr_12692 = state_12680;
(statearr_12692[(9)] = inst_12648__$1);

return statearr_12692;
})();
if(inst_12650){
var statearr_12693_13457 = state_12680__$1;
(statearr_12693_13457[(1)] = (5));

} else {
var statearr_12694_13458 = state_12680__$1;
(statearr_12694_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (15))){
var inst_12670 = (state_12680[(2)]);
var state_12680__$1 = state_12680;
var statearr_12695_13459 = state_12680__$1;
(statearr_12695_13459[(2)] = inst_12670);

(statearr_12695_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (13))){
var state_12680__$1 = state_12680;
var statearr_12696_13460 = state_12680__$1;
(statearr_12696_13460[(2)] = null);

(statearr_12696_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (6))){
var inst_12645 = (state_12680[(8)]);
var inst_12666 = (inst_12645 > (0));
var state_12680__$1 = state_12680;
if(cljs.core.truth_(inst_12666)){
var statearr_12697_13461 = state_12680__$1;
(statearr_12697_13461[(1)] = (12));

} else {
var statearr_12698_13462 = state_12680__$1;
(statearr_12698_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (3))){
var inst_12678 = (state_12680[(2)]);
var state_12680__$1 = state_12680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12680__$1,inst_12678);
} else {
if((state_val_12681 === (12))){
var inst_12644 = (state_12680[(7)]);
var inst_12668 = cljs.core.vec(inst_12644);
var state_12680__$1 = state_12680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12680__$1,(15),out,inst_12668);
} else {
if((state_val_12681 === (2))){
var state_12680__$1 = state_12680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12680__$1,(4),ch);
} else {
if((state_val_12681 === (11))){
var inst_12660 = (state_12680[(2)]);
var inst_12661 = (new Array(n));
var inst_12644 = inst_12661;
var inst_12645 = (0);
var state_12680__$1 = (function (){var statearr_12699 = state_12680;
(statearr_12699[(10)] = inst_12660);

(statearr_12699[(7)] = inst_12644);

(statearr_12699[(8)] = inst_12645);

return statearr_12699;
})();
var statearr_12700_13463 = state_12680__$1;
(statearr_12700_13463[(2)] = null);

(statearr_12700_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (9))){
var inst_12644 = (state_12680[(7)]);
var inst_12658 = cljs.core.vec(inst_12644);
var state_12680__$1 = state_12680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12680__$1,(11),out,inst_12658);
} else {
if((state_val_12681 === (5))){
var inst_12648 = (state_12680[(9)]);
var inst_12644 = (state_12680[(7)]);
var inst_12645 = (state_12680[(8)]);
var inst_12653 = (state_12680[(11)]);
var inst_12652 = (inst_12644[inst_12645] = inst_12648);
var inst_12653__$1 = (inst_12645 + (1));
var inst_12654 = (inst_12653__$1 < n);
var state_12680__$1 = (function (){var statearr_12702 = state_12680;
(statearr_12702[(12)] = inst_12652);

(statearr_12702[(11)] = inst_12653__$1);

return statearr_12702;
})();
if(cljs.core.truth_(inst_12654)){
var statearr_12703_13464 = state_12680__$1;
(statearr_12703_13464[(1)] = (8));

} else {
var statearr_12704_13465 = state_12680__$1;
(statearr_12704_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (14))){
var inst_12673 = (state_12680[(2)]);
var inst_12674 = cljs.core.async.close_BANG_(out);
var state_12680__$1 = (function (){var statearr_12723 = state_12680;
(statearr_12723[(13)] = inst_12673);

return statearr_12723;
})();
var statearr_12724_13466 = state_12680__$1;
(statearr_12724_13466[(2)] = inst_12674);

(statearr_12724_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (10))){
var inst_12664 = (state_12680[(2)]);
var state_12680__$1 = state_12680;
var statearr_12725_13467 = state_12680__$1;
(statearr_12725_13467[(2)] = inst_12664);

(statearr_12725_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12681 === (8))){
var inst_12644 = (state_12680[(7)]);
var inst_12653 = (state_12680[(11)]);
var tmp12705 = inst_12644;
var inst_12644__$1 = tmp12705;
var inst_12645 = inst_12653;
var state_12680__$1 = (function (){var statearr_12726 = state_12680;
(statearr_12726[(7)] = inst_12644__$1);

(statearr_12726[(8)] = inst_12645);

return statearr_12726;
})();
var statearr_12727_13468 = state_12680__$1;
(statearr_12727_13468[(2)] = null);

(statearr_12727_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_12729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12729[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_12729[(1)] = (1));

return statearr_12729;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_12680){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_12680);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e12731){var ex__10730__auto__ = e12731;
var statearr_12733_13469 = state_12680;
(statearr_12733_13469[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_12680[(4)]))){
var statearr_12734_13470 = state_12680;
(statearr_12734_13470[(1)] = cljs.core.first((state_12680[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12680;
state_12680 = G__13471;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_12680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_12680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_12738 = f__10800__auto__();
(statearr_12738[(6)] = c__10799__auto___13454);

return statearr_12738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12741 = arguments.length;
switch (G__12741) {
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
var c__10799__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10800__auto__ = (function (){var switch__10726__auto__ = (function (state_12802){
var state_val_12803 = (state_12802[(1)]);
if((state_val_12803 === (7))){
var inst_12798 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
var statearr_12804_13474 = state_12802__$1;
(statearr_12804_13474[(2)] = inst_12798);

(statearr_12804_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (1))){
var inst_12746 = [];
var inst_12747 = inst_12746;
var inst_12748 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12802__$1 = (function (){var statearr_12805 = state_12802;
(statearr_12805[(7)] = inst_12748);

(statearr_12805[(8)] = inst_12747);

return statearr_12805;
})();
var statearr_12806_13475 = state_12802__$1;
(statearr_12806_13475[(2)] = null);

(statearr_12806_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (4))){
var inst_12751 = (state_12802[(9)]);
var inst_12751__$1 = (state_12802[(2)]);
var inst_12752 = (inst_12751__$1 == null);
var inst_12754 = cljs.core.not(inst_12752);
var state_12802__$1 = (function (){var statearr_12807 = state_12802;
(statearr_12807[(9)] = inst_12751__$1);

return statearr_12807;
})();
if(inst_12754){
var statearr_12808_13476 = state_12802__$1;
(statearr_12808_13476[(1)] = (5));

} else {
var statearr_12810_13477 = state_12802__$1;
(statearr_12810_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (15))){
var inst_12792 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
var statearr_12813_13478 = state_12802__$1;
(statearr_12813_13478[(2)] = inst_12792);

(statearr_12813_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (13))){
var state_12802__$1 = state_12802;
var statearr_12814_13479 = state_12802__$1;
(statearr_12814_13479[(2)] = null);

(statearr_12814_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (6))){
var inst_12747 = (state_12802[(8)]);
var inst_12787 = inst_12747.length;
var inst_12788 = (inst_12787 > (0));
var state_12802__$1 = state_12802;
if(cljs.core.truth_(inst_12788)){
var statearr_12819_13480 = state_12802__$1;
(statearr_12819_13480[(1)] = (12));

} else {
var statearr_12820_13481 = state_12802__$1;
(statearr_12820_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (3))){
var inst_12800 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12802__$1,inst_12800);
} else {
if((state_val_12803 === (12))){
var inst_12747 = (state_12802[(8)]);
var inst_12790 = cljs.core.vec(inst_12747);
var state_12802__$1 = state_12802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12802__$1,(15),out,inst_12790);
} else {
if((state_val_12803 === (2))){
var state_12802__$1 = state_12802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12802__$1,(4),ch);
} else {
if((state_val_12803 === (11))){
var inst_12751 = (state_12802[(9)]);
var inst_12756 = (state_12802[(10)]);
var inst_12780 = (state_12802[(2)]);
var inst_12781 = [];
var inst_12782 = inst_12781.push(inst_12751);
var inst_12747 = inst_12781;
var inst_12748 = inst_12756;
var state_12802__$1 = (function (){var statearr_12829 = state_12802;
(statearr_12829[(7)] = inst_12748);

(statearr_12829[(11)] = inst_12782);

(statearr_12829[(12)] = inst_12780);

(statearr_12829[(8)] = inst_12747);

return statearr_12829;
})();
var statearr_12830_13482 = state_12802__$1;
(statearr_12830_13482[(2)] = null);

(statearr_12830_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (9))){
var inst_12747 = (state_12802[(8)]);
var inst_12778 = cljs.core.vec(inst_12747);
var state_12802__$1 = state_12802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12802__$1,(11),out,inst_12778);
} else {
if((state_val_12803 === (5))){
var inst_12751 = (state_12802[(9)]);
var inst_12748 = (state_12802[(7)]);
var inst_12756 = (state_12802[(10)]);
var inst_12756__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12751) : f.call(null,inst_12751));
var inst_12757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12756__$1,inst_12748);
var inst_12772 = cljs.core.keyword_identical_QMARK_(inst_12748,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12773 = ((inst_12757) || (inst_12772));
var state_12802__$1 = (function (){var statearr_12839 = state_12802;
(statearr_12839[(10)] = inst_12756__$1);

return statearr_12839;
})();
if(cljs.core.truth_(inst_12773)){
var statearr_12844_13483 = state_12802__$1;
(statearr_12844_13483[(1)] = (8));

} else {
var statearr_12845_13484 = state_12802__$1;
(statearr_12845_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (14))){
var inst_12795 = (state_12802[(2)]);
var inst_12796 = cljs.core.async.close_BANG_(out);
var state_12802__$1 = (function (){var statearr_12851 = state_12802;
(statearr_12851[(13)] = inst_12795);

return statearr_12851;
})();
var statearr_12852_13485 = state_12802__$1;
(statearr_12852_13485[(2)] = inst_12796);

(statearr_12852_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (10))){
var inst_12785 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
var statearr_12853_13486 = state_12802__$1;
(statearr_12853_13486[(2)] = inst_12785);

(statearr_12853_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (8))){
var inst_12751 = (state_12802[(9)]);
var inst_12756 = (state_12802[(10)]);
var inst_12747 = (state_12802[(8)]);
var inst_12775 = inst_12747.push(inst_12751);
var tmp12850 = inst_12747;
var inst_12747__$1 = tmp12850;
var inst_12748 = inst_12756;
var state_12802__$1 = (function (){var statearr_12854 = state_12802;
(statearr_12854[(14)] = inst_12775);

(statearr_12854[(7)] = inst_12748);

(statearr_12854[(8)] = inst_12747__$1);

return statearr_12854;
})();
var statearr_12856_13487 = state_12802__$1;
(statearr_12856_13487[(2)] = null);

(statearr_12856_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10727__auto__ = null;
var cljs$core$async$state_machine__10727__auto____0 = (function (){
var statearr_12857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12857[(0)] = cljs$core$async$state_machine__10727__auto__);

(statearr_12857[(1)] = (1));

return statearr_12857;
});
var cljs$core$async$state_machine__10727__auto____1 = (function (state_12802){
while(true){
var ret_value__10728__auto__ = (function (){try{while(true){
var result__10729__auto__ = switch__10726__auto__(state_12802);
if(cljs.core.keyword_identical_QMARK_(result__10729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10729__auto__;
}
break;
}
}catch (e12861){var ex__10730__auto__ = e12861;
var statearr_12862_13488 = state_12802;
(statearr_12862_13488[(2)] = ex__10730__auto__);


if(cljs.core.seq((state_12802[(4)]))){
var statearr_12863_13489 = state_12802;
(statearr_12863_13489[(1)] = cljs.core.first((state_12802[(4)])));

} else {
throw ex__10730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12802;
state_12802 = G__13490;
continue;
} else {
return ret_value__10728__auto__;
}
break;
}
});
cljs$core$async$state_machine__10727__auto__ = function(state_12802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10727__auto____1.call(this,state_12802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10727__auto____0;
cljs$core$async$state_machine__10727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10727__auto____1;
return cljs$core$async$state_machine__10727__auto__;
})()
})();
var state__10801__auto__ = (function (){var statearr_12866 = f__10800__auto__();
(statearr_12866[(6)] = c__10799__auto___13473);

return statearr_12866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10801__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
