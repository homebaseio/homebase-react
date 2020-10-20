goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11125 = arguments.length;
switch (G__11125) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11126 = (function (f,blockable,meta11127){
this.f = f;
this.blockable = blockable;
this.meta11127 = meta11127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11128,meta11127__$1){
var self__ = this;
var _11128__$1 = this;
return (new cljs.core.async.t_cljs$core$async11126(self__.f,self__.blockable,meta11127__$1));
}));

(cljs.core.async.t_cljs$core$async11126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11128){
var self__ = this;
var _11128__$1 = this;
return self__.meta11127;
}));

(cljs.core.async.t_cljs$core$async11126.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11126.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11127","meta11127",-1371109299,null)], null);
}));

(cljs.core.async.t_cljs$core$async11126.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11126");

(cljs.core.async.t_cljs$core$async11126.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11126");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11126.
 */
cljs.core.async.__GT_t_cljs$core$async11126 = (function cljs$core$async$__GT_t_cljs$core$async11126(f__$1,blockable__$1,meta11127){
return (new cljs.core.async.t_cljs$core$async11126(f__$1,blockable__$1,meta11127));
});

}

return (new cljs.core.async.t_cljs$core$async11126(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11135 = arguments.length;
switch (G__11135) {
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
var G__11138 = arguments.length;
switch (G__11138) {
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
var G__11140 = arguments.length;
switch (G__11140) {
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
var val_13002 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13002) : fn1.call(null,val_13002));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13002) : fn1.call(null,val_13002));
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
var G__11142 = arguments.length;
switch (G__11142) {
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
var n__4613__auto___13004 = n;
var x_13005 = (0);
while(true){
if((x_13005 < n__4613__auto___13004)){
(a[x_13005] = x_13005);

var G__13006 = (x_13005 + (1));
x_13005 = G__13006;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11143 = (function (flag,meta11144){
this.flag = flag;
this.meta11144 = meta11144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11145,meta11144__$1){
var self__ = this;
var _11145__$1 = this;
return (new cljs.core.async.t_cljs$core$async11143(self__.flag,meta11144__$1));
}));

(cljs.core.async.t_cljs$core$async11143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11145){
var self__ = this;
var _11145__$1 = this;
return self__.meta11144;
}));

(cljs.core.async.t_cljs$core$async11143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11144","meta11144",1910068201,null)], null);
}));

(cljs.core.async.t_cljs$core$async11143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11143");

(cljs.core.async.t_cljs$core$async11143.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11143.
 */
cljs.core.async.__GT_t_cljs$core$async11143 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11143(flag__$1,meta11144){
return (new cljs.core.async.t_cljs$core$async11143(flag__$1,meta11144));
});

}

return (new cljs.core.async.t_cljs$core$async11143(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11146 = (function (flag,cb,meta11147){
this.flag = flag;
this.cb = cb;
this.meta11147 = meta11147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11148,meta11147__$1){
var self__ = this;
var _11148__$1 = this;
return (new cljs.core.async.t_cljs$core$async11146(self__.flag,self__.cb,meta11147__$1));
}));

(cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11148){
var self__ = this;
var _11148__$1 = this;
return self__.meta11147;
}));

(cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11147","meta11147",-718621259,null)], null);
}));

(cljs.core.async.t_cljs$core$async11146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11146");

(cljs.core.async.t_cljs$core$async11146.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11146.
 */
cljs.core.async.__GT_t_cljs$core$async11146 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11146(flag__$1,cb__$1,meta11147){
return (new cljs.core.async.t_cljs$core$async11146(flag__$1,cb__$1,meta11147));
});

}

return (new cljs.core.async.t_cljs$core$async11146(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11149_SHARP_){
var G__11152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11149_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11152) : fret.call(null,G__11152));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11150_SHARP_){
var G__11153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11150_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11153) : fret.call(null,G__11153));
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
var G__13007 = (i + (1));
i = G__13007;
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
var len__4736__auto___13008 = arguments.length;
var i__4737__auto___13009 = (0);
while(true){
if((i__4737__auto___13009 < len__4736__auto___13008)){
args__4742__auto__.push((arguments[i__4737__auto___13009]));

var G__13010 = (i__4737__auto___13009 + (1));
i__4737__auto___13009 = G__13010;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11158){
var map__11159 = p__11158;
var map__11159__$1 = (((((!((map__11159 == null))))?(((((map__11159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11159):map__11159);
var opts = map__11159__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11154){
var G__11155 = cljs.core.first(seq11154);
var seq11154__$1 = cljs.core.next(seq11154);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11155,seq11154__$1);
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
var G__11162 = arguments.length;
switch (G__11162) {
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
var c__11055__auto___13012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_11186){
var state_val_11187 = (state_11186[(1)]);
if((state_val_11187 === (7))){
var inst_11182 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11188_13013 = state_11186__$1;
(statearr_11188_13013[(2)] = inst_11182);

(statearr_11188_13013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (1))){
var state_11186__$1 = state_11186;
var statearr_11189_13014 = state_11186__$1;
(statearr_11189_13014[(2)] = null);

(statearr_11189_13014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (4))){
var inst_11165 = (state_11186[(7)]);
var inst_11165__$1 = (state_11186[(2)]);
var inst_11166 = (inst_11165__$1 == null);
var state_11186__$1 = (function (){var statearr_11191 = state_11186;
(statearr_11191[(7)] = inst_11165__$1);

return statearr_11191;
})();
if(cljs.core.truth_(inst_11166)){
var statearr_11192_13015 = state_11186__$1;
(statearr_11192_13015[(1)] = (5));

} else {
var statearr_11193_13016 = state_11186__$1;
(statearr_11193_13016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (13))){
var state_11186__$1 = state_11186;
var statearr_11196_13017 = state_11186__$1;
(statearr_11196_13017[(2)] = null);

(statearr_11196_13017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (6))){
var inst_11165 = (state_11186[(7)]);
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11186__$1,(11),to,inst_11165);
} else {
if((state_val_11187 === (3))){
var inst_11184 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11186__$1,inst_11184);
} else {
if((state_val_11187 === (12))){
var state_11186__$1 = state_11186;
var statearr_11199_13018 = state_11186__$1;
(statearr_11199_13018[(2)] = null);

(statearr_11199_13018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (2))){
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11186__$1,(4),from);
} else {
if((state_val_11187 === (11))){
var inst_11175 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
if(cljs.core.truth_(inst_11175)){
var statearr_11200_13019 = state_11186__$1;
(statearr_11200_13019[(1)] = (12));

} else {
var statearr_11201_13020 = state_11186__$1;
(statearr_11201_13020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (9))){
var state_11186__$1 = state_11186;
var statearr_11202_13021 = state_11186__$1;
(statearr_11202_13021[(2)] = null);

(statearr_11202_13021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (5))){
var state_11186__$1 = state_11186;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11203_13022 = state_11186__$1;
(statearr_11203_13022[(1)] = (8));

} else {
var statearr_11204_13023 = state_11186__$1;
(statearr_11204_13023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (14))){
var inst_11180 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11205_13024 = state_11186__$1;
(statearr_11205_13024[(2)] = inst_11180);

(statearr_11205_13024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (10))){
var inst_11172 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11206_13025 = state_11186__$1;
(statearr_11206_13025[(2)] = inst_11172);

(statearr_11206_13025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (8))){
var inst_11169 = cljs.core.async.close_BANG_(to);
var state_11186__$1 = state_11186;
var statearr_11207_13026 = state_11186__$1;
(statearr_11207_13026[(2)] = inst_11169);

(statearr_11207_13026[(1)] = (10));


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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_11208 = [null,null,null,null,null,null,null,null];
(statearr_11208[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_11208[(1)] = (1));

return statearr_11208;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_11186){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11186);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11209){var ex__11006__auto__ = e11209;
var statearr_11210_13027 = state_11186;
(statearr_11210_13027[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11186[(4)]))){
var statearr_11211_13028 = state_11186;
(statearr_11211_13028[(1)] = cljs.core.first((state_11186[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13029 = state_11186;
state_11186 = G__13029;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_11186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_11186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_11212 = f__11056__auto__();
(statearr_11212[(6)] = c__11055__auto___13012);

return statearr_11212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
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
var process = (function (p__11213){
var vec__11214 = p__11213;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11214,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11214,(1),null);
var job = vec__11214;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11055__auto___13030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_11221){
var state_val_11222 = (state_11221[(1)]);
if((state_val_11222 === (1))){
var state_11221__$1 = state_11221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11221__$1,(2),res,v);
} else {
if((state_val_11222 === (2))){
var inst_11218 = (state_11221[(2)]);
var inst_11219 = cljs.core.async.close_BANG_(res);
var state_11221__$1 = (function (){var statearr_11223 = state_11221;
(statearr_11223[(7)] = inst_11218);

return statearr_11223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11221__$1,inst_11219);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11224 = [null,null,null,null,null,null,null,null];
(statearr_11224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11224[(1)] = (1));

return statearr_11224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11221){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11221);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11225){var ex__11006__auto__ = e11225;
var statearr_11226_13031 = state_11221;
(statearr_11226_13031[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11221[(4)]))){
var statearr_11227_13032 = state_11221;
(statearr_11227_13032[(1)] = cljs.core.first((state_11221[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13033 = state_11221;
state_11221 = G__13033;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_11228 = f__11056__auto__();
(statearr_11228[(6)] = c__11055__auto___13030);

return statearr_11228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11229){
var vec__11231 = p__11229;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11231,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11231,(1),null);
var job = vec__11231;
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
var n__4613__auto___13034 = n;
var __13035 = (0);
while(true){
if((__13035 < n__4613__auto___13034)){
var G__11234_13036 = type;
var G__11234_13037__$1 = (((G__11234_13036 instanceof cljs.core.Keyword))?G__11234_13036.fqn:null);
switch (G__11234_13037__$1) {
case "compute":
var c__11055__auto___13039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__11055__auto___13039,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = ((function (__13035,c__11055__auto___13039,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11247){
var state_val_11248 = (state_11247[(1)]);
if((state_val_11248 === (1))){
var state_11247__$1 = state_11247;
var statearr_11249_13040 = state_11247__$1;
(statearr_11249_13040[(2)] = null);

(statearr_11249_13040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (2))){
var state_11247__$1 = state_11247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11247__$1,(4),jobs);
} else {
if((state_val_11248 === (3))){
var inst_11245 = (state_11247[(2)]);
var state_11247__$1 = state_11247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11247__$1,inst_11245);
} else {
if((state_val_11248 === (4))){
var inst_11237 = (state_11247[(2)]);
var inst_11238 = process(inst_11237);
var state_11247__$1 = state_11247;
if(cljs.core.truth_(inst_11238)){
var statearr_11250_13041 = state_11247__$1;
(statearr_11250_13041[(1)] = (5));

} else {
var statearr_11251_13042 = state_11247__$1;
(statearr_11251_13042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (5))){
var state_11247__$1 = state_11247;
var statearr_11252_13043 = state_11247__$1;
(statearr_11252_13043[(2)] = null);

(statearr_11252_13043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (6))){
var state_11247__$1 = state_11247;
var statearr_11253_13044 = state_11247__$1;
(statearr_11253_13044[(2)] = null);

(statearr_11253_13044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (7))){
var inst_11243 = (state_11247[(2)]);
var state_11247__$1 = state_11247;
var statearr_11254_13045 = state_11247__$1;
(statearr_11254_13045[(2)] = inst_11243);

(statearr_11254_13045[(1)] = (3));


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
});})(__13035,c__11055__auto___13039,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__11002__auto__,c__11055__auto___13039,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11255 = [null,null,null,null,null,null,null];
(statearr_11255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11255[(1)] = (1));

return statearr_11255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11247){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11247);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11256){var ex__11006__auto__ = e11256;
var statearr_11257_13046 = state_11247;
(statearr_11257_13046[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11247[(4)]))){
var statearr_11258_13047 = state_11247;
(statearr_11258_13047[(1)] = cljs.core.first((state_11247[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13048 = state_11247;
state_11247 = G__13048;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
;})(__13035,switch__11002__auto__,c__11055__auto___13039,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__11057__auto__ = (function (){var statearr_11259 = f__11056__auto__();
(statearr_11259[(6)] = c__11055__auto___13039);

return statearr_11259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
});})(__13035,c__11055__auto___13039,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
case "async":
var c__11055__auto___13049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__11055__auto___13049,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = ((function (__13035,c__11055__auto___13049,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11272){
var state_val_11273 = (state_11272[(1)]);
if((state_val_11273 === (1))){
var state_11272__$1 = state_11272;
var statearr_11276_13050 = state_11272__$1;
(statearr_11276_13050[(2)] = null);

(statearr_11276_13050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (2))){
var state_11272__$1 = state_11272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11272__$1,(4),jobs);
} else {
if((state_val_11273 === (3))){
var inst_11270 = (state_11272[(2)]);
var state_11272__$1 = state_11272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11272__$1,inst_11270);
} else {
if((state_val_11273 === (4))){
var inst_11262 = (state_11272[(2)]);
var inst_11263 = async(inst_11262);
var state_11272__$1 = state_11272;
if(cljs.core.truth_(inst_11263)){
var statearr_11277_13051 = state_11272__$1;
(statearr_11277_13051[(1)] = (5));

} else {
var statearr_11278_13052 = state_11272__$1;
(statearr_11278_13052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (5))){
var state_11272__$1 = state_11272;
var statearr_11279_13053 = state_11272__$1;
(statearr_11279_13053[(2)] = null);

(statearr_11279_13053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (6))){
var state_11272__$1 = state_11272;
var statearr_11280_13054 = state_11272__$1;
(statearr_11280_13054[(2)] = null);

(statearr_11280_13054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (7))){
var inst_11268 = (state_11272[(2)]);
var state_11272__$1 = state_11272;
var statearr_11281_13055 = state_11272__$1;
(statearr_11281_13055[(2)] = inst_11268);

(statearr_11281_13055[(1)] = (3));


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
});})(__13035,c__11055__auto___13049,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__11002__auto__,c__11055__auto___13049,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11282 = [null,null,null,null,null,null,null];
(statearr_11282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11282[(1)] = (1));

return statearr_11282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11272){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11272);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11283){var ex__11006__auto__ = e11283;
var statearr_11284_13056 = state_11272;
(statearr_11284_13056[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11272[(4)]))){
var statearr_11285_13057 = state_11272;
(statearr_11285_13057[(1)] = cljs.core.first((state_11272[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13058 = state_11272;
state_11272 = G__13058;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
;})(__13035,switch__11002__auto__,c__11055__auto___13049,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__11057__auto__ = (function (){var statearr_11294 = f__11056__auto__();
(statearr_11294[(6)] = c__11055__auto___13049);

return statearr_11294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
});})(__13035,c__11055__auto___13049,G__11234_13036,G__11234_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11234_13037__$1)].join('')));

}

var G__13059 = (__13035 + (1));
__13035 = G__13059;
continue;
} else {
}
break;
}

var c__11055__auto___13060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_11316){
var state_val_11317 = (state_11316[(1)]);
if((state_val_11317 === (7))){
var inst_11312 = (state_11316[(2)]);
var state_11316__$1 = state_11316;
var statearr_11318_13061 = state_11316__$1;
(statearr_11318_13061[(2)] = inst_11312);

(statearr_11318_13061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11317 === (1))){
var state_11316__$1 = state_11316;
var statearr_11319_13062 = state_11316__$1;
(statearr_11319_13062[(2)] = null);

(statearr_11319_13062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11317 === (4))){
var inst_11297 = (state_11316[(7)]);
var inst_11297__$1 = (state_11316[(2)]);
var inst_11298 = (inst_11297__$1 == null);
var state_11316__$1 = (function (){var statearr_11320 = state_11316;
(statearr_11320[(7)] = inst_11297__$1);

return statearr_11320;
})();
if(cljs.core.truth_(inst_11298)){
var statearr_11321_13063 = state_11316__$1;
(statearr_11321_13063[(1)] = (5));

} else {
var statearr_11322_13064 = state_11316__$1;
(statearr_11322_13064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11317 === (6))){
var inst_11297 = (state_11316[(7)]);
var inst_11302 = (state_11316[(8)]);
var inst_11302__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11303 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11304 = [inst_11297,inst_11302__$1];
var inst_11305 = (new cljs.core.PersistentVector(null,2,(5),inst_11303,inst_11304,null));
var state_11316__$1 = (function (){var statearr_11323 = state_11316;
(statearr_11323[(8)] = inst_11302__$1);

return statearr_11323;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11316__$1,(8),jobs,inst_11305);
} else {
if((state_val_11317 === (3))){
var inst_11314 = (state_11316[(2)]);
var state_11316__$1 = state_11316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11316__$1,inst_11314);
} else {
if((state_val_11317 === (2))){
var state_11316__$1 = state_11316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11316__$1,(4),from);
} else {
if((state_val_11317 === (9))){
var inst_11309 = (state_11316[(2)]);
var state_11316__$1 = (function (){var statearr_11324 = state_11316;
(statearr_11324[(9)] = inst_11309);

return statearr_11324;
})();
var statearr_11325_13065 = state_11316__$1;
(statearr_11325_13065[(2)] = null);

(statearr_11325_13065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11317 === (5))){
var inst_11300 = cljs.core.async.close_BANG_(jobs);
var state_11316__$1 = state_11316;
var statearr_11326_13066 = state_11316__$1;
(statearr_11326_13066[(2)] = inst_11300);

(statearr_11326_13066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11317 === (8))){
var inst_11302 = (state_11316[(8)]);
var inst_11307 = (state_11316[(2)]);
var state_11316__$1 = (function (){var statearr_11327 = state_11316;
(statearr_11327[(10)] = inst_11307);

return statearr_11327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11316__$1,(9),results,inst_11302);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11328[(1)] = (1));

return statearr_11328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11316){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11316);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11333){var ex__11006__auto__ = e11333;
var statearr_11334_13067 = state_11316;
(statearr_11334_13067[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11316[(4)]))){
var statearr_11335_13068 = state_11316;
(statearr_11335_13068[(1)] = cljs.core.first((state_11316[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_11316;
state_11316 = G__13069;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_11336 = f__11056__auto__();
(statearr_11336[(6)] = c__11055__auto___13060);

return statearr_11336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));


var c__11055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_11374){
var state_val_11375 = (state_11374[(1)]);
if((state_val_11375 === (7))){
var inst_11370 = (state_11374[(2)]);
var state_11374__$1 = state_11374;
var statearr_11376_13070 = state_11374__$1;
(statearr_11376_13070[(2)] = inst_11370);

(statearr_11376_13070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (20))){
var state_11374__$1 = state_11374;
var statearr_11377_13071 = state_11374__$1;
(statearr_11377_13071[(2)] = null);

(statearr_11377_13071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (1))){
var state_11374__$1 = state_11374;
var statearr_11378_13073 = state_11374__$1;
(statearr_11378_13073[(2)] = null);

(statearr_11378_13073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (4))){
var inst_11339 = (state_11374[(7)]);
var inst_11339__$1 = (state_11374[(2)]);
var inst_11340 = (inst_11339__$1 == null);
var state_11374__$1 = (function (){var statearr_11379 = state_11374;
(statearr_11379[(7)] = inst_11339__$1);

return statearr_11379;
})();
if(cljs.core.truth_(inst_11340)){
var statearr_11380_13074 = state_11374__$1;
(statearr_11380_13074[(1)] = (5));

} else {
var statearr_11381_13075 = state_11374__$1;
(statearr_11381_13075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (15))){
var inst_11352 = (state_11374[(8)]);
var state_11374__$1 = state_11374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11374__$1,(18),to,inst_11352);
} else {
if((state_val_11375 === (21))){
var inst_11365 = (state_11374[(2)]);
var state_11374__$1 = state_11374;
var statearr_11382_13076 = state_11374__$1;
(statearr_11382_13076[(2)] = inst_11365);

(statearr_11382_13076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (13))){
var inst_11367 = (state_11374[(2)]);
var state_11374__$1 = (function (){var statearr_11383 = state_11374;
(statearr_11383[(9)] = inst_11367);

return statearr_11383;
})();
var statearr_11384_13077 = state_11374__$1;
(statearr_11384_13077[(2)] = null);

(statearr_11384_13077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (6))){
var inst_11339 = (state_11374[(7)]);
var state_11374__$1 = state_11374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11374__$1,(11),inst_11339);
} else {
if((state_val_11375 === (17))){
var inst_11360 = (state_11374[(2)]);
var state_11374__$1 = state_11374;
if(cljs.core.truth_(inst_11360)){
var statearr_11385_13078 = state_11374__$1;
(statearr_11385_13078[(1)] = (19));

} else {
var statearr_11386_13079 = state_11374__$1;
(statearr_11386_13079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (3))){
var inst_11372 = (state_11374[(2)]);
var state_11374__$1 = state_11374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11374__$1,inst_11372);
} else {
if((state_val_11375 === (12))){
var inst_11349 = (state_11374[(10)]);
var state_11374__$1 = state_11374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11374__$1,(14),inst_11349);
} else {
if((state_val_11375 === (2))){
var state_11374__$1 = state_11374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11374__$1,(4),results);
} else {
if((state_val_11375 === (19))){
var state_11374__$1 = state_11374;
var statearr_11387_13080 = state_11374__$1;
(statearr_11387_13080[(2)] = null);

(statearr_11387_13080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (11))){
var inst_11349 = (state_11374[(2)]);
var state_11374__$1 = (function (){var statearr_11388 = state_11374;
(statearr_11388[(10)] = inst_11349);

return statearr_11388;
})();
var statearr_11389_13081 = state_11374__$1;
(statearr_11389_13081[(2)] = null);

(statearr_11389_13081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (9))){
var state_11374__$1 = state_11374;
var statearr_11390_13082 = state_11374__$1;
(statearr_11390_13082[(2)] = null);

(statearr_11390_13082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (5))){
var state_11374__$1 = state_11374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11391_13084 = state_11374__$1;
(statearr_11391_13084[(1)] = (8));

} else {
var statearr_11392_13085 = state_11374__$1;
(statearr_11392_13085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (14))){
var inst_11352 = (state_11374[(8)]);
var inst_11352__$1 = (state_11374[(2)]);
var inst_11353 = (inst_11352__$1 == null);
var inst_11354 = cljs.core.not(inst_11353);
var state_11374__$1 = (function (){var statearr_11393 = state_11374;
(statearr_11393[(8)] = inst_11352__$1);

return statearr_11393;
})();
if(inst_11354){
var statearr_11394_13094 = state_11374__$1;
(statearr_11394_13094[(1)] = (15));

} else {
var statearr_11395_13095 = state_11374__$1;
(statearr_11395_13095[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (16))){
var state_11374__$1 = state_11374;
var statearr_11396_13096 = state_11374__$1;
(statearr_11396_13096[(2)] = false);

(statearr_11396_13096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (10))){
var inst_11346 = (state_11374[(2)]);
var state_11374__$1 = state_11374;
var statearr_11397_13097 = state_11374__$1;
(statearr_11397_13097[(2)] = inst_11346);

(statearr_11397_13097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (18))){
var inst_11357 = (state_11374[(2)]);
var state_11374__$1 = state_11374;
var statearr_11398_13099 = state_11374__$1;
(statearr_11398_13099[(2)] = inst_11357);

(statearr_11398_13099[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11375 === (8))){
var inst_11343 = cljs.core.async.close_BANG_(to);
var state_11374__$1 = state_11374;
var statearr_11399_13104 = state_11374__$1;
(statearr_11399_13104[(2)] = inst_11343);

(statearr_11399_13104[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11402 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11402[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11402[(1)] = (1));

return statearr_11402;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11374){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11374);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11404){var ex__11006__auto__ = e11404;
var statearr_11405_13114 = state_11374;
(statearr_11405_13114[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11374[(4)]))){
var statearr_11406_13115 = state_11374;
(statearr_11406_13115[(1)] = cljs.core.first((state_11374[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13116 = state_11374;
state_11374 = G__13116;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_11407 = f__11056__auto__();
(statearr_11407[(6)] = c__11055__auto__);

return statearr_11407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));

return c__11055__auto__;
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
var G__11411 = arguments.length;
switch (G__11411) {
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
var G__11415 = arguments.length;
switch (G__11415) {
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
var G__11417 = arguments.length;
switch (G__11417) {
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
var c__11055__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_11444){
var state_val_11445 = (state_11444[(1)]);
if((state_val_11445 === (7))){
var inst_11440 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
var statearr_11447_13125 = state_11444__$1;
(statearr_11447_13125[(2)] = inst_11440);

(statearr_11447_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (1))){
var state_11444__$1 = state_11444;
var statearr_11448_13126 = state_11444__$1;
(statearr_11448_13126[(2)] = null);

(statearr_11448_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (4))){
var inst_11420 = (state_11444[(7)]);
var inst_11420__$1 = (state_11444[(2)]);
var inst_11421 = (inst_11420__$1 == null);
var state_11444__$1 = (function (){var statearr_11451 = state_11444;
(statearr_11451[(7)] = inst_11420__$1);

return statearr_11451;
})();
if(cljs.core.truth_(inst_11421)){
var statearr_11452_13127 = state_11444__$1;
(statearr_11452_13127[(1)] = (5));

} else {
var statearr_11453_13128 = state_11444__$1;
(statearr_11453_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (13))){
var state_11444__$1 = state_11444;
var statearr_11454_13129 = state_11444__$1;
(statearr_11454_13129[(2)] = null);

(statearr_11454_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (6))){
var inst_11420 = (state_11444[(7)]);
var inst_11427 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11420) : p.call(null,inst_11420));
var state_11444__$1 = state_11444;
if(cljs.core.truth_(inst_11427)){
var statearr_11455_13130 = state_11444__$1;
(statearr_11455_13130[(1)] = (9));

} else {
var statearr_11456_13131 = state_11444__$1;
(statearr_11456_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (3))){
var inst_11442 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11444__$1,inst_11442);
} else {
if((state_val_11445 === (12))){
var state_11444__$1 = state_11444;
var statearr_11457_13132 = state_11444__$1;
(statearr_11457_13132[(2)] = null);

(statearr_11457_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (2))){
var state_11444__$1 = state_11444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11444__$1,(4),ch);
} else {
if((state_val_11445 === (11))){
var inst_11420 = (state_11444[(7)]);
var inst_11431 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11444__$1,(8),inst_11431,inst_11420);
} else {
if((state_val_11445 === (9))){
var state_11444__$1 = state_11444;
var statearr_11458_13133 = state_11444__$1;
(statearr_11458_13133[(2)] = tc);

(statearr_11458_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (5))){
var inst_11423 = cljs.core.async.close_BANG_(tc);
var inst_11425 = cljs.core.async.close_BANG_(fc);
var state_11444__$1 = (function (){var statearr_11459 = state_11444;
(statearr_11459[(8)] = inst_11423);

return statearr_11459;
})();
var statearr_11460_13134 = state_11444__$1;
(statearr_11460_13134[(2)] = inst_11425);

(statearr_11460_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (14))){
var inst_11438 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
var statearr_11461_13135 = state_11444__$1;
(statearr_11461_13135[(2)] = inst_11438);

(statearr_11461_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (10))){
var state_11444__$1 = state_11444;
var statearr_11462_13136 = state_11444__$1;
(statearr_11462_13136[(2)] = fc);

(statearr_11462_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (8))){
var inst_11433 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
if(cljs.core.truth_(inst_11433)){
var statearr_11463_13137 = state_11444__$1;
(statearr_11463_13137[(1)] = (12));

} else {
var statearr_11464_13138 = state_11444__$1;
(statearr_11464_13138[(1)] = (13));

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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_11465 = [null,null,null,null,null,null,null,null,null];
(statearr_11465[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_11465[(1)] = (1));

return statearr_11465;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_11444){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11444);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11466){var ex__11006__auto__ = e11466;
var statearr_11467_13139 = state_11444;
(statearr_11467_13139[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11444[(4)]))){
var statearr_11468_13140 = state_11444;
(statearr_11468_13140[(1)] = cljs.core.first((state_11444[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11444;
state_11444 = G__13141;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_11444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_11444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_11469 = f__11056__auto__();
(statearr_11469[(6)] = c__11055__auto___13124);

return statearr_11469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
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
var c__11055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_11491){
var state_val_11492 = (state_11491[(1)]);
if((state_val_11492 === (7))){
var inst_11487 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
var statearr_11493_13142 = state_11491__$1;
(statearr_11493_13142[(2)] = inst_11487);

(statearr_11493_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (1))){
var inst_11470 = init;
var inst_11471 = inst_11470;
var state_11491__$1 = (function (){var statearr_11494 = state_11491;
(statearr_11494[(7)] = inst_11471);

return statearr_11494;
})();
var statearr_11495_13143 = state_11491__$1;
(statearr_11495_13143[(2)] = null);

(statearr_11495_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (4))){
var inst_11474 = (state_11491[(8)]);
var inst_11474__$1 = (state_11491[(2)]);
var inst_11475 = (inst_11474__$1 == null);
var state_11491__$1 = (function (){var statearr_11496 = state_11491;
(statearr_11496[(8)] = inst_11474__$1);

return statearr_11496;
})();
if(cljs.core.truth_(inst_11475)){
var statearr_11497_13144 = state_11491__$1;
(statearr_11497_13144[(1)] = (5));

} else {
var statearr_11498_13145 = state_11491__$1;
(statearr_11498_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (6))){
var inst_11474 = (state_11491[(8)]);
var inst_11471 = (state_11491[(7)]);
var inst_11478 = (state_11491[(9)]);
var inst_11478__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11471,inst_11474) : f.call(null,inst_11471,inst_11474));
var inst_11479 = cljs.core.reduced_QMARK_(inst_11478__$1);
var state_11491__$1 = (function (){var statearr_11502 = state_11491;
(statearr_11502[(9)] = inst_11478__$1);

return statearr_11502;
})();
if(inst_11479){
var statearr_11503_13146 = state_11491__$1;
(statearr_11503_13146[(1)] = (8));

} else {
var statearr_11505_13147 = state_11491__$1;
(statearr_11505_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (3))){
var inst_11489 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11491__$1,inst_11489);
} else {
if((state_val_11492 === (2))){
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11491__$1,(4),ch);
} else {
if((state_val_11492 === (9))){
var inst_11478 = (state_11491[(9)]);
var inst_11471 = inst_11478;
var state_11491__$1 = (function (){var statearr_11507 = state_11491;
(statearr_11507[(7)] = inst_11471);

return statearr_11507;
})();
var statearr_11508_13148 = state_11491__$1;
(statearr_11508_13148[(2)] = null);

(statearr_11508_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (5))){
var inst_11471 = (state_11491[(7)]);
var state_11491__$1 = state_11491;
var statearr_11509_13149 = state_11491__$1;
(statearr_11509_13149[(2)] = inst_11471);

(statearr_11509_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (10))){
var inst_11485 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
var statearr_11510_13150 = state_11491__$1;
(statearr_11510_13150[(2)] = inst_11485);

(statearr_11510_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (8))){
var inst_11478 = (state_11491[(9)]);
var inst_11481 = cljs.core.deref(inst_11478);
var state_11491__$1 = state_11491;
var statearr_11511_13151 = state_11491__$1;
(statearr_11511_13151[(2)] = inst_11481);

(statearr_11511_13151[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11003__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11003__auto____0 = (function (){
var statearr_11512 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11512[(0)] = cljs$core$async$reduce_$_state_machine__11003__auto__);

(statearr_11512[(1)] = (1));

return statearr_11512;
});
var cljs$core$async$reduce_$_state_machine__11003__auto____1 = (function (state_11491){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11491);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11513){var ex__11006__auto__ = e11513;
var statearr_11514_13152 = state_11491;
(statearr_11514_13152[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11491[(4)]))){
var statearr_11515_13153 = state_11491;
(statearr_11515_13153[(1)] = cljs.core.first((state_11491[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11491;
state_11491 = G__13154;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11003__auto__ = function(state_11491){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11003__auto____1.call(this,state_11491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11003__auto____0;
cljs$core$async$reduce_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11003__auto____1;
return cljs$core$async$reduce_$_state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_11516 = f__11056__auto__();
(statearr_11516[(6)] = c__11055__auto__);

return statearr_11516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));

return c__11055__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__11055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_11522){
var state_val_11523 = (state_11522[(1)]);
if((state_val_11523 === (1))){
var inst_11517 = cljs.core.async.reduce(f__$1,init,ch);
var state_11522__$1 = state_11522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11522__$1,(2),inst_11517);
} else {
if((state_val_11523 === (2))){
var inst_11519 = (state_11522[(2)]);
var inst_11520 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11519) : f__$1.call(null,inst_11519));
var state_11522__$1 = state_11522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11522__$1,inst_11520);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11003__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11003__auto____0 = (function (){
var statearr_11527 = [null,null,null,null,null,null,null];
(statearr_11527[(0)] = cljs$core$async$transduce_$_state_machine__11003__auto__);

(statearr_11527[(1)] = (1));

return statearr_11527;
});
var cljs$core$async$transduce_$_state_machine__11003__auto____1 = (function (state_11522){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11522);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11528){var ex__11006__auto__ = e11528;
var statearr_11529_13155 = state_11522;
(statearr_11529_13155[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11522[(4)]))){
var statearr_11530_13156 = state_11522;
(statearr_11530_13156[(1)] = cljs.core.first((state_11522[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11522;
state_11522 = G__13157;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11003__auto__ = function(state_11522){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11003__auto____1.call(this,state_11522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11003__auto____0;
cljs$core$async$transduce_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11003__auto____1;
return cljs$core$async$transduce_$_state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_11531 = f__11056__auto__();
(statearr_11531[(6)] = c__11055__auto__);

return statearr_11531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));

return c__11055__auto__;
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
var G__11533 = arguments.length;
switch (G__11533) {
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
var c__11055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_11562){
var state_val_11563 = (state_11562[(1)]);
if((state_val_11563 === (7))){
var inst_11544 = (state_11562[(2)]);
var state_11562__$1 = state_11562;
var statearr_11564_13159 = state_11562__$1;
(statearr_11564_13159[(2)] = inst_11544);

(statearr_11564_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (1))){
var inst_11534 = cljs.core.seq(coll);
var inst_11535 = inst_11534;
var state_11562__$1 = (function (){var statearr_11565 = state_11562;
(statearr_11565[(7)] = inst_11535);

return statearr_11565;
})();
var statearr_11566_13160 = state_11562__$1;
(statearr_11566_13160[(2)] = null);

(statearr_11566_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (4))){
var inst_11535 = (state_11562[(7)]);
var inst_11542 = cljs.core.first(inst_11535);
var state_11562__$1 = state_11562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11562__$1,(7),ch,inst_11542);
} else {
if((state_val_11563 === (13))){
var inst_11556 = (state_11562[(2)]);
var state_11562__$1 = state_11562;
var statearr_11567_13161 = state_11562__$1;
(statearr_11567_13161[(2)] = inst_11556);

(statearr_11567_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (6))){
var inst_11547 = (state_11562[(2)]);
var state_11562__$1 = state_11562;
if(cljs.core.truth_(inst_11547)){
var statearr_11568_13162 = state_11562__$1;
(statearr_11568_13162[(1)] = (8));

} else {
var statearr_11569_13163 = state_11562__$1;
(statearr_11569_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (3))){
var inst_11560 = (state_11562[(2)]);
var state_11562__$1 = state_11562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11562__$1,inst_11560);
} else {
if((state_val_11563 === (12))){
var state_11562__$1 = state_11562;
var statearr_11570_13164 = state_11562__$1;
(statearr_11570_13164[(2)] = null);

(statearr_11570_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (2))){
var inst_11535 = (state_11562[(7)]);
var state_11562__$1 = state_11562;
if(cljs.core.truth_(inst_11535)){
var statearr_11571_13165 = state_11562__$1;
(statearr_11571_13165[(1)] = (4));

} else {
var statearr_11572_13166 = state_11562__$1;
(statearr_11572_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (11))){
var inst_11553 = cljs.core.async.close_BANG_(ch);
var state_11562__$1 = state_11562;
var statearr_11573_13167 = state_11562__$1;
(statearr_11573_13167[(2)] = inst_11553);

(statearr_11573_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (9))){
var state_11562__$1 = state_11562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11575_13168 = state_11562__$1;
(statearr_11575_13168[(1)] = (11));

} else {
var statearr_11576_13169 = state_11562__$1;
(statearr_11576_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (5))){
var inst_11535 = (state_11562[(7)]);
var state_11562__$1 = state_11562;
var statearr_11577_13170 = state_11562__$1;
(statearr_11577_13170[(2)] = inst_11535);

(statearr_11577_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (10))){
var inst_11558 = (state_11562[(2)]);
var state_11562__$1 = state_11562;
var statearr_11578_13171 = state_11562__$1;
(statearr_11578_13171[(2)] = inst_11558);

(statearr_11578_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (8))){
var inst_11535 = (state_11562[(7)]);
var inst_11549 = cljs.core.next(inst_11535);
var inst_11535__$1 = inst_11549;
var state_11562__$1 = (function (){var statearr_11579 = state_11562;
(statearr_11579[(7)] = inst_11535__$1);

return statearr_11579;
})();
var statearr_11580_13172 = state_11562__$1;
(statearr_11580_13172[(2)] = null);

(statearr_11580_13172[(1)] = (2));


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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_11581 = [null,null,null,null,null,null,null,null];
(statearr_11581[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_11581[(1)] = (1));

return statearr_11581;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_11562){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11562);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11582){var ex__11006__auto__ = e11582;
var statearr_11583_13173 = state_11562;
(statearr_11583_13173[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11562[(4)]))){
var statearr_11584_13174 = state_11562;
(statearr_11584_13174[(1)] = cljs.core.first((state_11562[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11562;
state_11562 = G__13175;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_11562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_11562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_11585 = f__11056__auto__();
(statearr_11585[(6)] = c__11055__auto__);

return statearr_11585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));

return c__11055__auto__;
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
var G__11587 = arguments.length;
switch (G__11587) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11637 = (function (ch,cs,meta11638){
this.ch = ch;
this.cs = cs;
this.meta11638 = meta11638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11639,meta11638__$1){
var self__ = this;
var _11639__$1 = this;
return (new cljs.core.async.t_cljs$core$async11637(self__.ch,self__.cs,meta11638__$1));
}));

(cljs.core.async.t_cljs$core$async11637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11639){
var self__ = this;
var _11639__$1 = this;
return self__.meta11638;
}));

(cljs.core.async.t_cljs$core$async11637.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11637.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11637.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11637.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11637.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11638","meta11638",-698427770,null)], null);
}));

(cljs.core.async.t_cljs$core$async11637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11637");

(cljs.core.async.t_cljs$core$async11637.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11637.
 */
cljs.core.async.__GT_t_cljs$core$async11637 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11637(ch__$1,cs__$1,meta11638){
return (new cljs.core.async.t_cljs$core$async11637(ch__$1,cs__$1,meta11638));
});

}

return (new cljs.core.async.t_cljs$core$async11637(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11055__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_11794){
var state_val_11795 = (state_11794[(1)]);
if((state_val_11795 === (7))){
var inst_11790 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11796_13182 = state_11794__$1;
(statearr_11796_13182[(2)] = inst_11790);

(statearr_11796_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (20))){
var inst_11683 = (state_11794[(7)]);
var inst_11703 = cljs.core.first(inst_11683);
var inst_11708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11703,(0),null);
var inst_11709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11703,(1),null);
var state_11794__$1 = (function (){var statearr_11798 = state_11794;
(statearr_11798[(8)] = inst_11708);

return statearr_11798;
})();
if(cljs.core.truth_(inst_11709)){
var statearr_11810_13183 = state_11794__$1;
(statearr_11810_13183[(1)] = (22));

} else {
var statearr_11811_13184 = state_11794__$1;
(statearr_11811_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (27))){
var inst_11737 = (state_11794[(9)]);
var inst_11744 = (state_11794[(10)]);
var inst_11644 = (state_11794[(11)]);
var inst_11739 = (state_11794[(12)]);
var inst_11744__$1 = cljs.core._nth(inst_11737,inst_11739);
var inst_11745 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11744__$1,inst_11644,done);
var state_11794__$1 = (function (){var statearr_11816 = state_11794;
(statearr_11816[(10)] = inst_11744__$1);

return statearr_11816;
})();
if(cljs.core.truth_(inst_11745)){
var statearr_11817_13185 = state_11794__$1;
(statearr_11817_13185[(1)] = (30));

} else {
var statearr_11818_13186 = state_11794__$1;
(statearr_11818_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (1))){
var state_11794__$1 = state_11794;
var statearr_11823_13187 = state_11794__$1;
(statearr_11823_13187[(2)] = null);

(statearr_11823_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (24))){
var inst_11683 = (state_11794[(7)]);
var inst_11714 = (state_11794[(2)]);
var inst_11715 = cljs.core.next(inst_11683);
var inst_11653 = inst_11715;
var inst_11654 = null;
var inst_11655 = (0);
var inst_11656 = (0);
var state_11794__$1 = (function (){var statearr_11828 = state_11794;
(statearr_11828[(13)] = inst_11656);

(statearr_11828[(14)] = inst_11714);

(statearr_11828[(15)] = inst_11654);

(statearr_11828[(16)] = inst_11655);

(statearr_11828[(17)] = inst_11653);

return statearr_11828;
})();
var statearr_11829_13188 = state_11794__$1;
(statearr_11829_13188[(2)] = null);

(statearr_11829_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (39))){
var state_11794__$1 = state_11794;
var statearr_11833_13189 = state_11794__$1;
(statearr_11833_13189[(2)] = null);

(statearr_11833_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (4))){
var inst_11644 = (state_11794[(11)]);
var inst_11644__$1 = (state_11794[(2)]);
var inst_11645 = (inst_11644__$1 == null);
var state_11794__$1 = (function (){var statearr_11834 = state_11794;
(statearr_11834[(11)] = inst_11644__$1);

return statearr_11834;
})();
if(cljs.core.truth_(inst_11645)){
var statearr_11835_13190 = state_11794__$1;
(statearr_11835_13190[(1)] = (5));

} else {
var statearr_11836_13191 = state_11794__$1;
(statearr_11836_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (15))){
var inst_11656 = (state_11794[(13)]);
var inst_11654 = (state_11794[(15)]);
var inst_11655 = (state_11794[(16)]);
var inst_11653 = (state_11794[(17)]);
var inst_11679 = (state_11794[(2)]);
var inst_11680 = (inst_11656 + (1));
var tmp11830 = inst_11654;
var tmp11831 = inst_11655;
var tmp11832 = inst_11653;
var inst_11653__$1 = tmp11832;
var inst_11654__$1 = tmp11830;
var inst_11655__$1 = tmp11831;
var inst_11656__$1 = inst_11680;
var state_11794__$1 = (function (){var statearr_11837 = state_11794;
(statearr_11837[(13)] = inst_11656__$1);

(statearr_11837[(15)] = inst_11654__$1);

(statearr_11837[(16)] = inst_11655__$1);

(statearr_11837[(18)] = inst_11679);

(statearr_11837[(17)] = inst_11653__$1);

return statearr_11837;
})();
var statearr_11838_13192 = state_11794__$1;
(statearr_11838_13192[(2)] = null);

(statearr_11838_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (21))){
var inst_11718 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11842_13193 = state_11794__$1;
(statearr_11842_13193[(2)] = inst_11718);

(statearr_11842_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (31))){
var inst_11744 = (state_11794[(10)]);
var inst_11748 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11744);
var state_11794__$1 = state_11794;
var statearr_11846_13194 = state_11794__$1;
(statearr_11846_13194[(2)] = inst_11748);

(statearr_11846_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (32))){
var inst_11737 = (state_11794[(9)]);
var inst_11736 = (state_11794[(19)]);
var inst_11738 = (state_11794[(20)]);
var inst_11739 = (state_11794[(12)]);
var inst_11750 = (state_11794[(2)]);
var inst_11751 = (inst_11739 + (1));
var tmp11839 = inst_11737;
var tmp11840 = inst_11736;
var tmp11841 = inst_11738;
var inst_11736__$1 = tmp11840;
var inst_11737__$1 = tmp11839;
var inst_11738__$1 = tmp11841;
var inst_11739__$1 = inst_11751;
var state_11794__$1 = (function (){var statearr_11850 = state_11794;
(statearr_11850[(9)] = inst_11737__$1);

(statearr_11850[(19)] = inst_11736__$1);

(statearr_11850[(20)] = inst_11738__$1);

(statearr_11850[(21)] = inst_11750);

(statearr_11850[(12)] = inst_11739__$1);

return statearr_11850;
})();
var statearr_11854_13195 = state_11794__$1;
(statearr_11854_13195[(2)] = null);

(statearr_11854_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (40))){
var inst_11763 = (state_11794[(22)]);
var inst_11767 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11763);
var state_11794__$1 = state_11794;
var statearr_11857_13196 = state_11794__$1;
(statearr_11857_13196[(2)] = inst_11767);

(statearr_11857_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (33))){
var inst_11754 = (state_11794[(23)]);
var inst_11756 = cljs.core.chunked_seq_QMARK_(inst_11754);
var state_11794__$1 = state_11794;
if(inst_11756){
var statearr_11859_13197 = state_11794__$1;
(statearr_11859_13197[(1)] = (36));

} else {
var statearr_11860_13198 = state_11794__$1;
(statearr_11860_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (13))){
var inst_11673 = (state_11794[(24)]);
var inst_11676 = cljs.core.async.close_BANG_(inst_11673);
var state_11794__$1 = state_11794;
var statearr_11864_13199 = state_11794__$1;
(statearr_11864_13199[(2)] = inst_11676);

(statearr_11864_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (22))){
var inst_11708 = (state_11794[(8)]);
var inst_11711 = cljs.core.async.close_BANG_(inst_11708);
var state_11794__$1 = state_11794;
var statearr_11865_13200 = state_11794__$1;
(statearr_11865_13200[(2)] = inst_11711);

(statearr_11865_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (36))){
var inst_11754 = (state_11794[(23)]);
var inst_11758 = cljs.core.chunk_first(inst_11754);
var inst_11759 = cljs.core.chunk_rest(inst_11754);
var inst_11760 = cljs.core.count(inst_11758);
var inst_11736 = inst_11759;
var inst_11737 = inst_11758;
var inst_11738 = inst_11760;
var inst_11739 = (0);
var state_11794__$1 = (function (){var statearr_11866 = state_11794;
(statearr_11866[(9)] = inst_11737);

(statearr_11866[(19)] = inst_11736);

(statearr_11866[(20)] = inst_11738);

(statearr_11866[(12)] = inst_11739);

return statearr_11866;
})();
var statearr_11867_13201 = state_11794__$1;
(statearr_11867_13201[(2)] = null);

(statearr_11867_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (41))){
var inst_11754 = (state_11794[(23)]);
var inst_11769 = (state_11794[(2)]);
var inst_11770 = cljs.core.next(inst_11754);
var inst_11736 = inst_11770;
var inst_11737 = null;
var inst_11738 = (0);
var inst_11739 = (0);
var state_11794__$1 = (function (){var statearr_11868 = state_11794;
(statearr_11868[(9)] = inst_11737);

(statearr_11868[(19)] = inst_11736);

(statearr_11868[(20)] = inst_11738);

(statearr_11868[(25)] = inst_11769);

(statearr_11868[(12)] = inst_11739);

return statearr_11868;
})();
var statearr_11869_13202 = state_11794__$1;
(statearr_11869_13202[(2)] = null);

(statearr_11869_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (43))){
var state_11794__$1 = state_11794;
var statearr_11870_13203 = state_11794__$1;
(statearr_11870_13203[(2)] = null);

(statearr_11870_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (29))){
var inst_11778 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11871_13204 = state_11794__$1;
(statearr_11871_13204[(2)] = inst_11778);

(statearr_11871_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (44))){
var inst_11787 = (state_11794[(2)]);
var state_11794__$1 = (function (){var statearr_11872 = state_11794;
(statearr_11872[(26)] = inst_11787);

return statearr_11872;
})();
var statearr_11873_13205 = state_11794__$1;
(statearr_11873_13205[(2)] = null);

(statearr_11873_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (6))){
var inst_11728 = (state_11794[(27)]);
var inst_11727 = cljs.core.deref(cs);
var inst_11728__$1 = cljs.core.keys(inst_11727);
var inst_11729 = cljs.core.count(inst_11728__$1);
var inst_11730 = cljs.core.reset_BANG_(dctr,inst_11729);
var inst_11735 = cljs.core.seq(inst_11728__$1);
var inst_11736 = inst_11735;
var inst_11737 = null;
var inst_11738 = (0);
var inst_11739 = (0);
var state_11794__$1 = (function (){var statearr_11874 = state_11794;
(statearr_11874[(9)] = inst_11737);

(statearr_11874[(19)] = inst_11736);

(statearr_11874[(20)] = inst_11738);

(statearr_11874[(28)] = inst_11730);

(statearr_11874[(27)] = inst_11728__$1);

(statearr_11874[(12)] = inst_11739);

return statearr_11874;
})();
var statearr_11875_13206 = state_11794__$1;
(statearr_11875_13206[(2)] = null);

(statearr_11875_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (28))){
var inst_11736 = (state_11794[(19)]);
var inst_11754 = (state_11794[(23)]);
var inst_11754__$1 = cljs.core.seq(inst_11736);
var state_11794__$1 = (function (){var statearr_11876 = state_11794;
(statearr_11876[(23)] = inst_11754__$1);

return statearr_11876;
})();
if(inst_11754__$1){
var statearr_11877_13207 = state_11794__$1;
(statearr_11877_13207[(1)] = (33));

} else {
var statearr_11878_13208 = state_11794__$1;
(statearr_11878_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (25))){
var inst_11738 = (state_11794[(20)]);
var inst_11739 = (state_11794[(12)]);
var inst_11741 = (inst_11739 < inst_11738);
var inst_11742 = inst_11741;
var state_11794__$1 = state_11794;
if(cljs.core.truth_(inst_11742)){
var statearr_11879_13209 = state_11794__$1;
(statearr_11879_13209[(1)] = (27));

} else {
var statearr_11880_13210 = state_11794__$1;
(statearr_11880_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (34))){
var state_11794__$1 = state_11794;
var statearr_11882_13211 = state_11794__$1;
(statearr_11882_13211[(2)] = null);

(statearr_11882_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (17))){
var state_11794__$1 = state_11794;
var statearr_11883_13212 = state_11794__$1;
(statearr_11883_13212[(2)] = null);

(statearr_11883_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (3))){
var inst_11792 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11794__$1,inst_11792);
} else {
if((state_val_11795 === (12))){
var inst_11723 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11884_13213 = state_11794__$1;
(statearr_11884_13213[(2)] = inst_11723);

(statearr_11884_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (2))){
var state_11794__$1 = state_11794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11794__$1,(4),ch);
} else {
if((state_val_11795 === (23))){
var state_11794__$1 = state_11794;
var statearr_11885_13214 = state_11794__$1;
(statearr_11885_13214[(2)] = null);

(statearr_11885_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (35))){
var inst_11776 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11886_13215 = state_11794__$1;
(statearr_11886_13215[(2)] = inst_11776);

(statearr_11886_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (19))){
var inst_11683 = (state_11794[(7)]);
var inst_11695 = cljs.core.chunk_first(inst_11683);
var inst_11696 = cljs.core.chunk_rest(inst_11683);
var inst_11697 = cljs.core.count(inst_11695);
var inst_11653 = inst_11696;
var inst_11654 = inst_11695;
var inst_11655 = inst_11697;
var inst_11656 = (0);
var state_11794__$1 = (function (){var statearr_11889 = state_11794;
(statearr_11889[(13)] = inst_11656);

(statearr_11889[(15)] = inst_11654);

(statearr_11889[(16)] = inst_11655);

(statearr_11889[(17)] = inst_11653);

return statearr_11889;
})();
var statearr_11890_13216 = state_11794__$1;
(statearr_11890_13216[(2)] = null);

(statearr_11890_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (11))){
var inst_11683 = (state_11794[(7)]);
var inst_11653 = (state_11794[(17)]);
var inst_11683__$1 = cljs.core.seq(inst_11653);
var state_11794__$1 = (function (){var statearr_11891 = state_11794;
(statearr_11891[(7)] = inst_11683__$1);

return statearr_11891;
})();
if(inst_11683__$1){
var statearr_11892_13217 = state_11794__$1;
(statearr_11892_13217[(1)] = (16));

} else {
var statearr_11893_13218 = state_11794__$1;
(statearr_11893_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (9))){
var inst_11725 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11896_13219 = state_11794__$1;
(statearr_11896_13219[(2)] = inst_11725);

(statearr_11896_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (5))){
var inst_11651 = cljs.core.deref(cs);
var inst_11652 = cljs.core.seq(inst_11651);
var inst_11653 = inst_11652;
var inst_11654 = null;
var inst_11655 = (0);
var inst_11656 = (0);
var state_11794__$1 = (function (){var statearr_11899 = state_11794;
(statearr_11899[(13)] = inst_11656);

(statearr_11899[(15)] = inst_11654);

(statearr_11899[(16)] = inst_11655);

(statearr_11899[(17)] = inst_11653);

return statearr_11899;
})();
var statearr_11900_13220 = state_11794__$1;
(statearr_11900_13220[(2)] = null);

(statearr_11900_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (14))){
var state_11794__$1 = state_11794;
var statearr_11901_13221 = state_11794__$1;
(statearr_11901_13221[(2)] = null);

(statearr_11901_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (45))){
var inst_11784 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11902_13222 = state_11794__$1;
(statearr_11902_13222[(2)] = inst_11784);

(statearr_11902_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (26))){
var inst_11728 = (state_11794[(27)]);
var inst_11780 = (state_11794[(2)]);
var inst_11781 = cljs.core.seq(inst_11728);
var state_11794__$1 = (function (){var statearr_11903 = state_11794;
(statearr_11903[(29)] = inst_11780);

return statearr_11903;
})();
if(inst_11781){
var statearr_11904_13223 = state_11794__$1;
(statearr_11904_13223[(1)] = (42));

} else {
var statearr_11905_13224 = state_11794__$1;
(statearr_11905_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (16))){
var inst_11683 = (state_11794[(7)]);
var inst_11693 = cljs.core.chunked_seq_QMARK_(inst_11683);
var state_11794__$1 = state_11794;
if(inst_11693){
var statearr_11906_13225 = state_11794__$1;
(statearr_11906_13225[(1)] = (19));

} else {
var statearr_11907_13226 = state_11794__$1;
(statearr_11907_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (38))){
var inst_11773 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11908_13227 = state_11794__$1;
(statearr_11908_13227[(2)] = inst_11773);

(statearr_11908_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (30))){
var state_11794__$1 = state_11794;
var statearr_11909_13228 = state_11794__$1;
(statearr_11909_13228[(2)] = null);

(statearr_11909_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (10))){
var inst_11656 = (state_11794[(13)]);
var inst_11654 = (state_11794[(15)]);
var inst_11664 = cljs.core._nth(inst_11654,inst_11656);
var inst_11673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11664,(0),null);
var inst_11674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11664,(1),null);
var state_11794__$1 = (function (){var statearr_11910 = state_11794;
(statearr_11910[(24)] = inst_11673);

return statearr_11910;
})();
if(cljs.core.truth_(inst_11674)){
var statearr_11911_13229 = state_11794__$1;
(statearr_11911_13229[(1)] = (13));

} else {
var statearr_11912_13230 = state_11794__$1;
(statearr_11912_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (18))){
var inst_11721 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11913_13231 = state_11794__$1;
(statearr_11913_13231[(2)] = inst_11721);

(statearr_11913_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (42))){
var state_11794__$1 = state_11794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11794__$1,(45),dchan);
} else {
if((state_val_11795 === (37))){
var inst_11644 = (state_11794[(11)]);
var inst_11763 = (state_11794[(22)]);
var inst_11754 = (state_11794[(23)]);
var inst_11763__$1 = cljs.core.first(inst_11754);
var inst_11764 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11763__$1,inst_11644,done);
var state_11794__$1 = (function (){var statearr_11914 = state_11794;
(statearr_11914[(22)] = inst_11763__$1);

return statearr_11914;
})();
if(cljs.core.truth_(inst_11764)){
var statearr_11915_13232 = state_11794__$1;
(statearr_11915_13232[(1)] = (39));

} else {
var statearr_11916_13233 = state_11794__$1;
(statearr_11916_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (8))){
var inst_11656 = (state_11794[(13)]);
var inst_11655 = (state_11794[(16)]);
var inst_11658 = (inst_11656 < inst_11655);
var inst_11659 = inst_11658;
var state_11794__$1 = state_11794;
if(cljs.core.truth_(inst_11659)){
var statearr_11917_13234 = state_11794__$1;
(statearr_11917_13234[(1)] = (10));

} else {
var statearr_11918_13235 = state_11794__$1;
(statearr_11918_13235[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11003__auto__ = null;
var cljs$core$async$mult_$_state_machine__11003__auto____0 = (function (){
var statearr_11919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11919[(0)] = cljs$core$async$mult_$_state_machine__11003__auto__);

(statearr_11919[(1)] = (1));

return statearr_11919;
});
var cljs$core$async$mult_$_state_machine__11003__auto____1 = (function (state_11794){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_11794);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11920){var ex__11006__auto__ = e11920;
var statearr_11921_13236 = state_11794;
(statearr_11921_13236[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_11794[(4)]))){
var statearr_11922_13237 = state_11794;
(statearr_11922_13237[(1)] = cljs.core.first((state_11794[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11794;
state_11794 = G__13238;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11003__auto__ = function(state_11794){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11003__auto____1.call(this,state_11794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11003__auto____0;
cljs$core$async$mult_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11003__auto____1;
return cljs$core$async$mult_$_state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_11926 = f__11056__auto__();
(statearr_11926[(6)] = c__11055__auto___13181);

return statearr_11926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
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
var G__11932 = arguments.length;
switch (G__11932) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11943){
var map__11944 = p__11943;
var map__11944__$1 = (((((!((map__11944 == null))))?(((((map__11944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11944):map__11944);
var opts = map__11944__$1;
var statearr_11946_13248 = state;
(statearr_11946_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11947_13249 = state;
(statearr_11947_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11948_13250 = state;
(statearr_11948_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11937){
var G__11938 = cljs.core.first(seq11937);
var seq11937__$1 = cljs.core.next(seq11937);
var G__11939 = cljs.core.first(seq11937__$1);
var seq11937__$2 = cljs.core.next(seq11937__$1);
var G__11940 = cljs.core.first(seq11937__$2);
var seq11937__$3 = cljs.core.next(seq11937__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11938,G__11939,G__11940,seq11937__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11951 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11952){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11952 = meta11952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11953,meta11952__$1){
var self__ = this;
var _11953__$1 = this;
return (new cljs.core.async.t_cljs$core$async11951(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11952__$1));
}));

(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11953){
var self__ = this;
var _11953__$1 = this;
return self__.meta11952;
}));

(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11952","meta11952",758159212,null)], null);
}));

(cljs.core.async.t_cljs$core$async11951.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11951");

(cljs.core.async.t_cljs$core$async11951.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11951");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11951.
 */
cljs.core.async.__GT_t_cljs$core$async11951 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11951(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11952){
return (new cljs.core.async.t_cljs$core$async11951(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11952));
});

}

return (new cljs.core.async.t_cljs$core$async11951(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11055__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12057){
var state_val_12058 = (state_12057[(1)]);
if((state_val_12058 === (7))){
var inst_11972 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12059_13252 = state_12057__$1;
(statearr_12059_13252[(2)] = inst_11972);

(statearr_12059_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (20))){
var inst_11984 = (state_12057[(7)]);
var state_12057__$1 = state_12057;
var statearr_12060_13253 = state_12057__$1;
(statearr_12060_13253[(2)] = inst_11984);

(statearr_12060_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (27))){
var state_12057__$1 = state_12057;
var statearr_12061_13254 = state_12057__$1;
(statearr_12061_13254[(2)] = null);

(statearr_12061_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (1))){
var inst_11958 = (state_12057[(8)]);
var inst_11958__$1 = calc_state();
var inst_11960 = (inst_11958__$1 == null);
var inst_11961 = cljs.core.not(inst_11960);
var state_12057__$1 = (function (){var statearr_12062 = state_12057;
(statearr_12062[(8)] = inst_11958__$1);

return statearr_12062;
})();
if(inst_11961){
var statearr_12063_13255 = state_12057__$1;
(statearr_12063_13255[(1)] = (2));

} else {
var statearr_12064_13256 = state_12057__$1;
(statearr_12064_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (24))){
var inst_12031 = (state_12057[(9)]);
var inst_12017 = (state_12057[(10)]);
var inst_12008 = (state_12057[(11)]);
var inst_12031__$1 = (inst_12008.cljs$core$IFn$_invoke$arity$1 ? inst_12008.cljs$core$IFn$_invoke$arity$1(inst_12017) : inst_12008.call(null,inst_12017));
var state_12057__$1 = (function (){var statearr_12065 = state_12057;
(statearr_12065[(9)] = inst_12031__$1);

return statearr_12065;
})();
if(cljs.core.truth_(inst_12031__$1)){
var statearr_12066_13257 = state_12057__$1;
(statearr_12066_13257[(1)] = (29));

} else {
var statearr_12067_13258 = state_12057__$1;
(statearr_12067_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (4))){
var inst_11975 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_11975)){
var statearr_12068_13259 = state_12057__$1;
(statearr_12068_13259[(1)] = (8));

} else {
var statearr_12069_13260 = state_12057__$1;
(statearr_12069_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (15))){
var inst_12002 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12002)){
var statearr_12070_13261 = state_12057__$1;
(statearr_12070_13261[(1)] = (19));

} else {
var statearr_12071_13262 = state_12057__$1;
(statearr_12071_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (21))){
var inst_12007 = (state_12057[(12)]);
var inst_12007__$1 = (state_12057[(2)]);
var inst_12008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12007__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12007__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12007__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12057__$1 = (function (){var statearr_12073 = state_12057;
(statearr_12073[(13)] = inst_12009);

(statearr_12073[(12)] = inst_12007__$1);

(statearr_12073[(11)] = inst_12008);

return statearr_12073;
})();
return cljs.core.async.ioc_alts_BANG_(state_12057__$1,(22),inst_12010);
} else {
if((state_val_12058 === (31))){
var inst_12039 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12039)){
var statearr_12074_13263 = state_12057__$1;
(statearr_12074_13263[(1)] = (32));

} else {
var statearr_12075_13264 = state_12057__$1;
(statearr_12075_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (32))){
var inst_12016 = (state_12057[(14)]);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12057__$1,(35),out,inst_12016);
} else {
if((state_val_12058 === (33))){
var inst_12007 = (state_12057[(12)]);
var inst_11984 = inst_12007;
var state_12057__$1 = (function (){var statearr_12076 = state_12057;
(statearr_12076[(7)] = inst_11984);

return statearr_12076;
})();
var statearr_12077_13265 = state_12057__$1;
(statearr_12077_13265[(2)] = null);

(statearr_12077_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (13))){
var inst_11984 = (state_12057[(7)]);
var inst_11991 = inst_11984.cljs$lang$protocol_mask$partition0$;
var inst_11992 = (inst_11991 & (64));
var inst_11993 = inst_11984.cljs$core$ISeq$;
var inst_11994 = (cljs.core.PROTOCOL_SENTINEL === inst_11993);
var inst_11995 = ((inst_11992) || (inst_11994));
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_11995)){
var statearr_12078_13266 = state_12057__$1;
(statearr_12078_13266[(1)] = (16));

} else {
var statearr_12079_13267 = state_12057__$1;
(statearr_12079_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (22))){
var inst_12016 = (state_12057[(14)]);
var inst_12017 = (state_12057[(10)]);
var inst_12015 = (state_12057[(2)]);
var inst_12016__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12015,(0),null);
var inst_12017__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12015,(1),null);
var inst_12018 = (inst_12016__$1 == null);
var inst_12019 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12017__$1,change);
var inst_12020 = ((inst_12018) || (inst_12019));
var state_12057__$1 = (function (){var statearr_12080 = state_12057;
(statearr_12080[(14)] = inst_12016__$1);

(statearr_12080[(10)] = inst_12017__$1);

return statearr_12080;
})();
if(cljs.core.truth_(inst_12020)){
var statearr_12081_13268 = state_12057__$1;
(statearr_12081_13268[(1)] = (23));

} else {
var statearr_12082_13269 = state_12057__$1;
(statearr_12082_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (36))){
var inst_12007 = (state_12057[(12)]);
var inst_11984 = inst_12007;
var state_12057__$1 = (function (){var statearr_12083 = state_12057;
(statearr_12083[(7)] = inst_11984);

return statearr_12083;
})();
var statearr_12084_13270 = state_12057__$1;
(statearr_12084_13270[(2)] = null);

(statearr_12084_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (29))){
var inst_12031 = (state_12057[(9)]);
var state_12057__$1 = state_12057;
var statearr_12085_13271 = state_12057__$1;
(statearr_12085_13271[(2)] = inst_12031);

(statearr_12085_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (6))){
var state_12057__$1 = state_12057;
var statearr_12086_13272 = state_12057__$1;
(statearr_12086_13272[(2)] = false);

(statearr_12086_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (28))){
var inst_12027 = (state_12057[(2)]);
var inst_12028 = calc_state();
var inst_11984 = inst_12028;
var state_12057__$1 = (function (){var statearr_12087 = state_12057;
(statearr_12087[(15)] = inst_12027);

(statearr_12087[(7)] = inst_11984);

return statearr_12087;
})();
var statearr_12088_13273 = state_12057__$1;
(statearr_12088_13273[(2)] = null);

(statearr_12088_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (25))){
var inst_12053 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12089_13274 = state_12057__$1;
(statearr_12089_13274[(2)] = inst_12053);

(statearr_12089_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (34))){
var inst_12051 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12091_13275 = state_12057__$1;
(statearr_12091_13275[(2)] = inst_12051);

(statearr_12091_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (17))){
var state_12057__$1 = state_12057;
var statearr_12092_13276 = state_12057__$1;
(statearr_12092_13276[(2)] = false);

(statearr_12092_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (3))){
var state_12057__$1 = state_12057;
var statearr_12093_13277 = state_12057__$1;
(statearr_12093_13277[(2)] = false);

(statearr_12093_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (12))){
var inst_12055 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12057__$1,inst_12055);
} else {
if((state_val_12058 === (2))){
var inst_11958 = (state_12057[(8)]);
var inst_11964 = inst_11958.cljs$lang$protocol_mask$partition0$;
var inst_11965 = (inst_11964 & (64));
var inst_11966 = inst_11958.cljs$core$ISeq$;
var inst_11967 = (cljs.core.PROTOCOL_SENTINEL === inst_11966);
var inst_11968 = ((inst_11965) || (inst_11967));
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_11968)){
var statearr_12094_13278 = state_12057__$1;
(statearr_12094_13278[(1)] = (5));

} else {
var statearr_12095_13279 = state_12057__$1;
(statearr_12095_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (23))){
var inst_12016 = (state_12057[(14)]);
var inst_12022 = (inst_12016 == null);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12022)){
var statearr_12096_13280 = state_12057__$1;
(statearr_12096_13280[(1)] = (26));

} else {
var statearr_12097_13281 = state_12057__$1;
(statearr_12097_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (35))){
var inst_12042 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12042)){
var statearr_12098_13282 = state_12057__$1;
(statearr_12098_13282[(1)] = (36));

} else {
var statearr_12099_13283 = state_12057__$1;
(statearr_12099_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (19))){
var inst_11984 = (state_12057[(7)]);
var inst_12004 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11984);
var state_12057__$1 = state_12057;
var statearr_12100_13284 = state_12057__$1;
(statearr_12100_13284[(2)] = inst_12004);

(statearr_12100_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (11))){
var inst_11984 = (state_12057[(7)]);
var inst_11988 = (inst_11984 == null);
var inst_11989 = cljs.core.not(inst_11988);
var state_12057__$1 = state_12057;
if(inst_11989){
var statearr_12101_13285 = state_12057__$1;
(statearr_12101_13285[(1)] = (13));

} else {
var statearr_12102_13286 = state_12057__$1;
(statearr_12102_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (9))){
var inst_11958 = (state_12057[(8)]);
var state_12057__$1 = state_12057;
var statearr_12103_13287 = state_12057__$1;
(statearr_12103_13287[(2)] = inst_11958);

(statearr_12103_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (5))){
var state_12057__$1 = state_12057;
var statearr_12104_13288 = state_12057__$1;
(statearr_12104_13288[(2)] = true);

(statearr_12104_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (14))){
var state_12057__$1 = state_12057;
var statearr_12105_13289 = state_12057__$1;
(statearr_12105_13289[(2)] = false);

(statearr_12105_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (26))){
var inst_12017 = (state_12057[(10)]);
var inst_12024 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12017);
var state_12057__$1 = state_12057;
var statearr_12106_13290 = state_12057__$1;
(statearr_12106_13290[(2)] = inst_12024);

(statearr_12106_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (16))){
var state_12057__$1 = state_12057;
var statearr_12107_13291 = state_12057__$1;
(statearr_12107_13291[(2)] = true);

(statearr_12107_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (38))){
var inst_12047 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12110_13292 = state_12057__$1;
(statearr_12110_13292[(2)] = inst_12047);

(statearr_12110_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (30))){
var inst_12017 = (state_12057[(10)]);
var inst_12009 = (state_12057[(13)]);
var inst_12008 = (state_12057[(11)]);
var inst_12034 = cljs.core.empty_QMARK_(inst_12008);
var inst_12035 = (inst_12009.cljs$core$IFn$_invoke$arity$1 ? inst_12009.cljs$core$IFn$_invoke$arity$1(inst_12017) : inst_12009.call(null,inst_12017));
var inst_12036 = cljs.core.not(inst_12035);
var inst_12037 = ((inst_12034) && (inst_12036));
var state_12057__$1 = state_12057;
var statearr_12111_13293 = state_12057__$1;
(statearr_12111_13293[(2)] = inst_12037);

(statearr_12111_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (10))){
var inst_11958 = (state_12057[(8)]);
var inst_11980 = (state_12057[(2)]);
var inst_11981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11980,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11980,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11980,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11984 = inst_11958;
var state_12057__$1 = (function (){var statearr_12112 = state_12057;
(statearr_12112[(16)] = inst_11981);

(statearr_12112[(17)] = inst_11982);

(statearr_12112[(7)] = inst_11984);

(statearr_12112[(18)] = inst_11983);

return statearr_12112;
})();
var statearr_12113_13294 = state_12057__$1;
(statearr_12113_13294[(2)] = null);

(statearr_12113_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (18))){
var inst_11999 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12114_13295 = state_12057__$1;
(statearr_12114_13295[(2)] = inst_11999);

(statearr_12114_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (37))){
var state_12057__$1 = state_12057;
var statearr_12115_13296 = state_12057__$1;
(statearr_12115_13296[(2)] = null);

(statearr_12115_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (8))){
var inst_11958 = (state_12057[(8)]);
var inst_11977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11958);
var state_12057__$1 = state_12057;
var statearr_12116_13297 = state_12057__$1;
(statearr_12116_13297[(2)] = inst_11977);

(statearr_12116_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__11003__auto__ = null;
var cljs$core$async$mix_$_state_machine__11003__auto____0 = (function (){
var statearr_12117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12117[(0)] = cljs$core$async$mix_$_state_machine__11003__auto__);

(statearr_12117[(1)] = (1));

return statearr_12117;
});
var cljs$core$async$mix_$_state_machine__11003__auto____1 = (function (state_12057){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12057);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12118){var ex__11006__auto__ = e12118;
var statearr_12119_13298 = state_12057;
(statearr_12119_13298[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12057[(4)]))){
var statearr_12120_13299 = state_12057;
(statearr_12120_13299[(1)] = cljs.core.first((state_12057[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12057;
state_12057 = G__13300;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11003__auto__ = function(state_12057){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11003__auto____1.call(this,state_12057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11003__auto____0;
cljs$core$async$mix_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11003__auto____1;
return cljs$core$async$mix_$_state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12121 = f__11056__auto__();
(statearr_12121[(6)] = c__11055__auto___13251);

return statearr_12121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
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
var G__12124 = arguments.length;
switch (G__12124) {
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
var G__12128 = arguments.length;
switch (G__12128) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12125_SHARP_){
if(cljs.core.truth_((p1__12125_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12125_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12125_SHARP_.call(null,topic)))){
return p1__12125_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12125_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12131 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12132){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12132 = meta12132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12133,meta12132__$1){
var self__ = this;
var _12133__$1 = this;
return (new cljs.core.async.t_cljs$core$async12131(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12132__$1));
}));

(cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12133){
var self__ = this;
var _12133__$1 = this;
return self__.meta12132;
}));

(cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12132","meta12132",2057565120,null)], null);
}));

(cljs.core.async.t_cljs$core$async12131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12131");

(cljs.core.async.t_cljs$core$async12131.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12131.
 */
cljs.core.async.__GT_t_cljs$core$async12131 = (function cljs$core$async$__GT_t_cljs$core$async12131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12132){
return (new cljs.core.async.t_cljs$core$async12131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12132));
});

}

return (new cljs.core.async.t_cljs$core$async12131(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11055__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12207){
var state_val_12208 = (state_12207[(1)]);
if((state_val_12208 === (7))){
var inst_12203 = (state_12207[(2)]);
var state_12207__$1 = state_12207;
var statearr_12211_13308 = state_12207__$1;
(statearr_12211_13308[(2)] = inst_12203);

(statearr_12211_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (20))){
var state_12207__$1 = state_12207;
var statearr_12214_13309 = state_12207__$1;
(statearr_12214_13309[(2)] = null);

(statearr_12214_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (1))){
var state_12207__$1 = state_12207;
var statearr_12228_13310 = state_12207__$1;
(statearr_12228_13310[(2)] = null);

(statearr_12228_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (24))){
var inst_12185 = (state_12207[(7)]);
var inst_12194 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12185);
var state_12207__$1 = state_12207;
var statearr_12230_13311 = state_12207__$1;
(statearr_12230_13311[(2)] = inst_12194);

(statearr_12230_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (4))){
var inst_12137 = (state_12207[(8)]);
var inst_12137__$1 = (state_12207[(2)]);
var inst_12138 = (inst_12137__$1 == null);
var state_12207__$1 = (function (){var statearr_12232 = state_12207;
(statearr_12232[(8)] = inst_12137__$1);

return statearr_12232;
})();
if(cljs.core.truth_(inst_12138)){
var statearr_12234_13312 = state_12207__$1;
(statearr_12234_13312[(1)] = (5));

} else {
var statearr_12235_13313 = state_12207__$1;
(statearr_12235_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (15))){
var inst_12179 = (state_12207[(2)]);
var state_12207__$1 = state_12207;
var statearr_12238_13314 = state_12207__$1;
(statearr_12238_13314[(2)] = inst_12179);

(statearr_12238_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (21))){
var inst_12199 = (state_12207[(2)]);
var state_12207__$1 = (function (){var statearr_12240 = state_12207;
(statearr_12240[(9)] = inst_12199);

return statearr_12240;
})();
var statearr_12241_13315 = state_12207__$1;
(statearr_12241_13315[(2)] = null);

(statearr_12241_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (13))){
var inst_12161 = (state_12207[(10)]);
var inst_12163 = cljs.core.chunked_seq_QMARK_(inst_12161);
var state_12207__$1 = state_12207;
if(inst_12163){
var statearr_12242_13316 = state_12207__$1;
(statearr_12242_13316[(1)] = (16));

} else {
var statearr_12243_13317 = state_12207__$1;
(statearr_12243_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (22))){
var inst_12191 = (state_12207[(2)]);
var state_12207__$1 = state_12207;
if(cljs.core.truth_(inst_12191)){
var statearr_12244_13318 = state_12207__$1;
(statearr_12244_13318[(1)] = (23));

} else {
var statearr_12245_13319 = state_12207__$1;
(statearr_12245_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (6))){
var inst_12187 = (state_12207[(11)]);
var inst_12185 = (state_12207[(7)]);
var inst_12137 = (state_12207[(8)]);
var inst_12185__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12137) : topic_fn.call(null,inst_12137));
var inst_12186 = cljs.core.deref(mults);
var inst_12187__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12186,inst_12185__$1);
var state_12207__$1 = (function (){var statearr_12248 = state_12207;
(statearr_12248[(11)] = inst_12187__$1);

(statearr_12248[(7)] = inst_12185__$1);

return statearr_12248;
})();
if(cljs.core.truth_(inst_12187__$1)){
var statearr_12250_13320 = state_12207__$1;
(statearr_12250_13320[(1)] = (19));

} else {
var statearr_12251_13321 = state_12207__$1;
(statearr_12251_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (25))){
var inst_12196 = (state_12207[(2)]);
var state_12207__$1 = state_12207;
var statearr_12254_13322 = state_12207__$1;
(statearr_12254_13322[(2)] = inst_12196);

(statearr_12254_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (17))){
var inst_12161 = (state_12207[(10)]);
var inst_12170 = cljs.core.first(inst_12161);
var inst_12171 = cljs.core.async.muxch_STAR_(inst_12170);
var inst_12172 = cljs.core.async.close_BANG_(inst_12171);
var inst_12173 = cljs.core.next(inst_12161);
var inst_12147 = inst_12173;
var inst_12148 = null;
var inst_12149 = (0);
var inst_12150 = (0);
var state_12207__$1 = (function (){var statearr_12255 = state_12207;
(statearr_12255[(12)] = inst_12147);

(statearr_12255[(13)] = inst_12148);

(statearr_12255[(14)] = inst_12172);

(statearr_12255[(15)] = inst_12150);

(statearr_12255[(16)] = inst_12149);

return statearr_12255;
})();
var statearr_12257_13323 = state_12207__$1;
(statearr_12257_13323[(2)] = null);

(statearr_12257_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (3))){
var inst_12205 = (state_12207[(2)]);
var state_12207__$1 = state_12207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12207__$1,inst_12205);
} else {
if((state_val_12208 === (12))){
var inst_12181 = (state_12207[(2)]);
var state_12207__$1 = state_12207;
var statearr_12259_13324 = state_12207__$1;
(statearr_12259_13324[(2)] = inst_12181);

(statearr_12259_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (2))){
var state_12207__$1 = state_12207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12207__$1,(4),ch);
} else {
if((state_val_12208 === (23))){
var state_12207__$1 = state_12207;
var statearr_12262_13325 = state_12207__$1;
(statearr_12262_13325[(2)] = null);

(statearr_12262_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (19))){
var inst_12187 = (state_12207[(11)]);
var inst_12137 = (state_12207[(8)]);
var inst_12189 = cljs.core.async.muxch_STAR_(inst_12187);
var state_12207__$1 = state_12207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12207__$1,(22),inst_12189,inst_12137);
} else {
if((state_val_12208 === (11))){
var inst_12147 = (state_12207[(12)]);
var inst_12161 = (state_12207[(10)]);
var inst_12161__$1 = cljs.core.seq(inst_12147);
var state_12207__$1 = (function (){var statearr_12264 = state_12207;
(statearr_12264[(10)] = inst_12161__$1);

return statearr_12264;
})();
if(inst_12161__$1){
var statearr_12265_13326 = state_12207__$1;
(statearr_12265_13326[(1)] = (13));

} else {
var statearr_12266_13327 = state_12207__$1;
(statearr_12266_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (9))){
var inst_12183 = (state_12207[(2)]);
var state_12207__$1 = state_12207;
var statearr_12267_13328 = state_12207__$1;
(statearr_12267_13328[(2)] = inst_12183);

(statearr_12267_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (5))){
var inst_12144 = cljs.core.deref(mults);
var inst_12145 = cljs.core.vals(inst_12144);
var inst_12146 = cljs.core.seq(inst_12145);
var inst_12147 = inst_12146;
var inst_12148 = null;
var inst_12149 = (0);
var inst_12150 = (0);
var state_12207__$1 = (function (){var statearr_12268 = state_12207;
(statearr_12268[(12)] = inst_12147);

(statearr_12268[(13)] = inst_12148);

(statearr_12268[(15)] = inst_12150);

(statearr_12268[(16)] = inst_12149);

return statearr_12268;
})();
var statearr_12286_13329 = state_12207__$1;
(statearr_12286_13329[(2)] = null);

(statearr_12286_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (14))){
var state_12207__$1 = state_12207;
var statearr_12294_13330 = state_12207__$1;
(statearr_12294_13330[(2)] = null);

(statearr_12294_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (16))){
var inst_12161 = (state_12207[(10)]);
var inst_12165 = cljs.core.chunk_first(inst_12161);
var inst_12166 = cljs.core.chunk_rest(inst_12161);
var inst_12167 = cljs.core.count(inst_12165);
var inst_12147 = inst_12166;
var inst_12148 = inst_12165;
var inst_12149 = inst_12167;
var inst_12150 = (0);
var state_12207__$1 = (function (){var statearr_12299 = state_12207;
(statearr_12299[(12)] = inst_12147);

(statearr_12299[(13)] = inst_12148);

(statearr_12299[(15)] = inst_12150);

(statearr_12299[(16)] = inst_12149);

return statearr_12299;
})();
var statearr_12300_13331 = state_12207__$1;
(statearr_12300_13331[(2)] = null);

(statearr_12300_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (10))){
var inst_12147 = (state_12207[(12)]);
var inst_12148 = (state_12207[(13)]);
var inst_12150 = (state_12207[(15)]);
var inst_12149 = (state_12207[(16)]);
var inst_12155 = cljs.core._nth(inst_12148,inst_12150);
var inst_12156 = cljs.core.async.muxch_STAR_(inst_12155);
var inst_12157 = cljs.core.async.close_BANG_(inst_12156);
var inst_12158 = (inst_12150 + (1));
var tmp12287 = inst_12147;
var tmp12288 = inst_12148;
var tmp12289 = inst_12149;
var inst_12147__$1 = tmp12287;
var inst_12148__$1 = tmp12288;
var inst_12149__$1 = tmp12289;
var inst_12150__$1 = inst_12158;
var state_12207__$1 = (function (){var statearr_12301 = state_12207;
(statearr_12301[(12)] = inst_12147__$1);

(statearr_12301[(13)] = inst_12148__$1);

(statearr_12301[(17)] = inst_12157);

(statearr_12301[(15)] = inst_12150__$1);

(statearr_12301[(16)] = inst_12149__$1);

return statearr_12301;
})();
var statearr_12302_13332 = state_12207__$1;
(statearr_12302_13332[(2)] = null);

(statearr_12302_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (18))){
var inst_12176 = (state_12207[(2)]);
var state_12207__$1 = state_12207;
var statearr_12303_13333 = state_12207__$1;
(statearr_12303_13333[(2)] = inst_12176);

(statearr_12303_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12208 === (8))){
var inst_12150 = (state_12207[(15)]);
var inst_12149 = (state_12207[(16)]);
var inst_12152 = (inst_12150 < inst_12149);
var inst_12153 = inst_12152;
var state_12207__$1 = state_12207;
if(cljs.core.truth_(inst_12153)){
var statearr_12307_13334 = state_12207__$1;
(statearr_12307_13334[(1)] = (10));

} else {
var statearr_12308_13335 = state_12207__$1;
(statearr_12308_13335[(1)] = (11));

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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_12309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12309[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_12309[(1)] = (1));

return statearr_12309;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_12207){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12207);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12310){var ex__11006__auto__ = e12310;
var statearr_12311_13336 = state_12207;
(statearr_12311_13336[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12207[(4)]))){
var statearr_12312_13337 = state_12207;
(statearr_12312_13337[(1)] = cljs.core.first((state_12207[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12207;
state_12207 = G__13338;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_12207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_12207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12313 = f__11056__auto__();
(statearr_12313[(6)] = c__11055__auto___13307);

return statearr_12313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
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
var G__12329 = arguments.length;
switch (G__12329) {
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
var G__12337 = arguments.length;
switch (G__12337) {
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
var G__12356 = arguments.length;
switch (G__12356) {
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
var c__11055__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12408){
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
var state_12408__$1 = (function (){var statearr_12422 = state_12408;
(statearr_12422[(10)] = inst_12401);

return statearr_12422;
})();
var statearr_12423_13350 = state_12408__$1;
(statearr_12423_13350[(2)] = null);

(statearr_12423_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (3))){
var inst_12406 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12408__$1,inst_12406);
} else {
if((state_val_12409 === (12))){
var _ = (function (){var statearr_12425 = state_12408;
(statearr_12425[(4)] = cljs.core.rest((state_12408[(4)])));

return statearr_12425;
})();
var state_12408__$1 = state_12408;
var ex12418 = (state_12408__$1[(2)]);
var statearr_12426_13351 = state_12408__$1;
(statearr_12426_13351[(5)] = ex12418);


if((ex12418 instanceof Object)){
var statearr_12427_13352 = state_12408__$1;
(statearr_12427_13352[(1)] = (11));

(statearr_12427_13352[(5)] = null);

} else {
throw ex12418;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (2))){
var inst_12367 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12368 = cnt;
var inst_12369 = (0);
var state_12408__$1 = (function (){var statearr_12428 = state_12408;
(statearr_12428[(7)] = inst_12369);

(statearr_12428[(11)] = inst_12367);

(statearr_12428[(8)] = inst_12368);

return statearr_12428;
})();
var statearr_12429_13353 = state_12408__$1;
(statearr_12429_13353[(2)] = null);

(statearr_12429_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (11))){
var inst_12373 = (state_12408[(2)]);
var inst_12374 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12408__$1 = (function (){var statearr_12430 = state_12408;
(statearr_12430[(12)] = inst_12373);

return statearr_12430;
})();
var statearr_12431_13354 = state_12408__$1;
(statearr_12431_13354[(2)] = inst_12374);

(statearr_12431_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (9))){
var inst_12369 = (state_12408[(7)]);
var _ = (function (){var statearr_12432 = state_12408;
(statearr_12432[(4)] = cljs.core.cons((12),(state_12408[(4)])));

return statearr_12432;
})();
var inst_12380 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12369) : chs__$1.call(null,inst_12369));
var inst_12381 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12369) : done.call(null,inst_12369));
var inst_12382 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12380,inst_12381);
var ___$1 = (function (){var statearr_12434 = state_12408;
(statearr_12434[(4)] = cljs.core.rest((state_12408[(4)])));

return statearr_12434;
})();
var state_12408__$1 = state_12408;
var statearr_12435_13355 = state_12408__$1;
(statearr_12435_13355[(2)] = inst_12382);

(statearr_12435_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (5))){
var inst_12392 = (state_12408[(2)]);
var state_12408__$1 = (function (){var statearr_12443 = state_12408;
(statearr_12443[(13)] = inst_12392);

return statearr_12443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12408__$1,(13),dchan);
} else {
if((state_val_12409 === (14))){
var inst_12397 = cljs.core.async.close_BANG_(out);
var state_12408__$1 = state_12408;
var statearr_12444_13356 = state_12408__$1;
(statearr_12444_13356[(2)] = inst_12397);

(statearr_12444_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (16))){
var inst_12404 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
var statearr_12445_13357 = state_12408__$1;
(statearr_12445_13357[(2)] = inst_12404);

(statearr_12445_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (10))){
var inst_12369 = (state_12408[(7)]);
var inst_12385 = (state_12408[(2)]);
var inst_12386 = (inst_12369 + (1));
var inst_12369__$1 = inst_12386;
var state_12408__$1 = (function (){var statearr_12446 = state_12408;
(statearr_12446[(7)] = inst_12369__$1);

(statearr_12446[(14)] = inst_12385);

return statearr_12446;
})();
var statearr_12447_13358 = state_12408__$1;
(statearr_12447_13358[(2)] = null);

(statearr_12447_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (8))){
var inst_12390 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
var statearr_12449_13359 = state_12408__$1;
(statearr_12449_13359[(2)] = inst_12390);

(statearr_12449_13359[(1)] = (5));


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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_12452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12452[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_12452[(1)] = (1));

return statearr_12452;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_12408){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12408);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12453){var ex__11006__auto__ = e12453;
var statearr_12454_13360 = state_12408;
(statearr_12454_13360[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12408[(4)]))){
var statearr_12455_13361 = state_12408;
(statearr_12455_13361[(1)] = cljs.core.first((state_12408[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12408;
state_12408 = G__13362;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_12408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_12408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12457 = f__11056__auto__();
(statearr_12457[(6)] = c__11055__auto___13342);

return statearr_12457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
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
var G__12461 = arguments.length;
switch (G__12461) {
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
var c__11055__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12544){
var state_val_12545 = (state_12544[(1)]);
if((state_val_12545 === (7))){
var inst_12519 = (state_12544[(7)]);
var inst_12517 = (state_12544[(8)]);
var inst_12517__$1 = (state_12544[(2)]);
var inst_12519__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12517__$1,(0),null);
var inst_12520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12517__$1,(1),null);
var inst_12525 = (inst_12519__$1 == null);
var state_12544__$1 = (function (){var statearr_12550 = state_12544;
(statearr_12550[(9)] = inst_12520);

(statearr_12550[(7)] = inst_12519__$1);

(statearr_12550[(8)] = inst_12517__$1);

return statearr_12550;
})();
if(cljs.core.truth_(inst_12525)){
var statearr_12551_13365 = state_12544__$1;
(statearr_12551_13365[(1)] = (8));

} else {
var statearr_12552_13366 = state_12544__$1;
(statearr_12552_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (1))){
var inst_12463 = cljs.core.vec(chs);
var inst_12464 = inst_12463;
var state_12544__$1 = (function (){var statearr_12553 = state_12544;
(statearr_12553[(10)] = inst_12464);

return statearr_12553;
})();
var statearr_12554_13367 = state_12544__$1;
(statearr_12554_13367[(2)] = null);

(statearr_12554_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (4))){
var inst_12464 = (state_12544[(10)]);
var state_12544__$1 = state_12544;
return cljs.core.async.ioc_alts_BANG_(state_12544__$1,(7),inst_12464);
} else {
if((state_val_12545 === (6))){
var inst_12539 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12555_13368 = state_12544__$1;
(statearr_12555_13368[(2)] = inst_12539);

(statearr_12555_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (3))){
var inst_12541 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12544__$1,inst_12541);
} else {
if((state_val_12545 === (2))){
var inst_12464 = (state_12544[(10)]);
var inst_12466 = cljs.core.count(inst_12464);
var inst_12467 = (inst_12466 > (0));
var state_12544__$1 = state_12544;
if(cljs.core.truth_(inst_12467)){
var statearr_12557_13369 = state_12544__$1;
(statearr_12557_13369[(1)] = (4));

} else {
var statearr_12558_13370 = state_12544__$1;
(statearr_12558_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (11))){
var inst_12464 = (state_12544[(10)]);
var inst_12532 = (state_12544[(2)]);
var tmp12556 = inst_12464;
var inst_12464__$1 = tmp12556;
var state_12544__$1 = (function (){var statearr_12559 = state_12544;
(statearr_12559[(10)] = inst_12464__$1);

(statearr_12559[(11)] = inst_12532);

return statearr_12559;
})();
var statearr_12560_13371 = state_12544__$1;
(statearr_12560_13371[(2)] = null);

(statearr_12560_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (9))){
var inst_12519 = (state_12544[(7)]);
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12544__$1,(11),out,inst_12519);
} else {
if((state_val_12545 === (5))){
var inst_12537 = cljs.core.async.close_BANG_(out);
var state_12544__$1 = state_12544;
var statearr_12567_13372 = state_12544__$1;
(statearr_12567_13372[(2)] = inst_12537);

(statearr_12567_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (10))){
var inst_12535 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12569_13373 = state_12544__$1;
(statearr_12569_13373[(2)] = inst_12535);

(statearr_12569_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (8))){
var inst_12464 = (state_12544[(10)]);
var inst_12520 = (state_12544[(9)]);
var inst_12519 = (state_12544[(7)]);
var inst_12517 = (state_12544[(8)]);
var inst_12527 = (function (){var cs = inst_12464;
var vec__12469 = inst_12517;
var v = inst_12519;
var c = inst_12520;
return (function (p1__12458_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12458_SHARP_);
});
})();
var inst_12528 = cljs.core.filterv(inst_12527,inst_12464);
var inst_12464__$1 = inst_12528;
var state_12544__$1 = (function (){var statearr_12578 = state_12544;
(statearr_12578[(10)] = inst_12464__$1);

return statearr_12578;
})();
var statearr_12579_13374 = state_12544__$1;
(statearr_12579_13374[(2)] = null);

(statearr_12579_13374[(1)] = (2));


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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_12581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12581[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_12581[(1)] = (1));

return statearr_12581;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_12544){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12544);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12582){var ex__11006__auto__ = e12582;
var statearr_12583_13375 = state_12544;
(statearr_12583_13375[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12544[(4)]))){
var statearr_12585_13376 = state_12544;
(statearr_12585_13376[(1)] = cljs.core.first((state_12544[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12544;
state_12544 = G__13377;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_12544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_12544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12586 = f__11056__auto__();
(statearr_12586[(6)] = c__11055__auto___13364);

return statearr_12586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
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
var G__12591 = arguments.length;
switch (G__12591) {
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
var c__11055__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12616){
var state_val_12617 = (state_12616[(1)]);
if((state_val_12617 === (7))){
var inst_12598 = (state_12616[(7)]);
var inst_12598__$1 = (state_12616[(2)]);
var inst_12599 = (inst_12598__$1 == null);
var inst_12600 = cljs.core.not(inst_12599);
var state_12616__$1 = (function (){var statearr_12618 = state_12616;
(statearr_12618[(7)] = inst_12598__$1);

return statearr_12618;
})();
if(inst_12600){
var statearr_12619_13380 = state_12616__$1;
(statearr_12619_13380[(1)] = (8));

} else {
var statearr_12620_13381 = state_12616__$1;
(statearr_12620_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (1))){
var inst_12592 = (0);
var state_12616__$1 = (function (){var statearr_12621 = state_12616;
(statearr_12621[(8)] = inst_12592);

return statearr_12621;
})();
var statearr_12622_13382 = state_12616__$1;
(statearr_12622_13382[(2)] = null);

(statearr_12622_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (4))){
var state_12616__$1 = state_12616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12616__$1,(7),ch);
} else {
if((state_val_12617 === (6))){
var inst_12611 = (state_12616[(2)]);
var state_12616__$1 = state_12616;
var statearr_12623_13383 = state_12616__$1;
(statearr_12623_13383[(2)] = inst_12611);

(statearr_12623_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (3))){
var inst_12613 = (state_12616[(2)]);
var inst_12614 = cljs.core.async.close_BANG_(out);
var state_12616__$1 = (function (){var statearr_12624 = state_12616;
(statearr_12624[(9)] = inst_12613);

return statearr_12624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12616__$1,inst_12614);
} else {
if((state_val_12617 === (2))){
var inst_12592 = (state_12616[(8)]);
var inst_12595 = (inst_12592 < n);
var state_12616__$1 = state_12616;
if(cljs.core.truth_(inst_12595)){
var statearr_12626_13384 = state_12616__$1;
(statearr_12626_13384[(1)] = (4));

} else {
var statearr_12627_13385 = state_12616__$1;
(statearr_12627_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (11))){
var inst_12592 = (state_12616[(8)]);
var inst_12603 = (state_12616[(2)]);
var inst_12604 = (inst_12592 + (1));
var inst_12592__$1 = inst_12604;
var state_12616__$1 = (function (){var statearr_12628 = state_12616;
(statearr_12628[(10)] = inst_12603);

(statearr_12628[(8)] = inst_12592__$1);

return statearr_12628;
})();
var statearr_12629_13386 = state_12616__$1;
(statearr_12629_13386[(2)] = null);

(statearr_12629_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (9))){
var state_12616__$1 = state_12616;
var statearr_12630_13387 = state_12616__$1;
(statearr_12630_13387[(2)] = null);

(statearr_12630_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (5))){
var state_12616__$1 = state_12616;
var statearr_12631_13388 = state_12616__$1;
(statearr_12631_13388[(2)] = null);

(statearr_12631_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (10))){
var inst_12608 = (state_12616[(2)]);
var state_12616__$1 = state_12616;
var statearr_12632_13389 = state_12616__$1;
(statearr_12632_13389[(2)] = inst_12608);

(statearr_12632_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (8))){
var inst_12598 = (state_12616[(7)]);
var state_12616__$1 = state_12616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12616__$1,(11),out,inst_12598);
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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_12634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12634[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_12634[(1)] = (1));

return statearr_12634;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_12616){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12616);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12635){var ex__11006__auto__ = e12635;
var statearr_12636_13390 = state_12616;
(statearr_12636_13390[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12616[(4)]))){
var statearr_12637_13391 = state_12616;
(statearr_12637_13391[(1)] = cljs.core.first((state_12616[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12616;
state_12616 = G__13392;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_12616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_12616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12639 = f__11056__auto__();
(statearr_12639[(6)] = c__11055__auto___13379);

return statearr_12639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
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

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12644 = (function (f,ch,meta12642,_,fn1,meta12645){
this.f = f;
this.ch = ch;
this.meta12642 = meta12642;
this._ = _;
this.fn1 = fn1;
this.meta12645 = meta12645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12646,meta12645__$1){
var self__ = this;
var _12646__$1 = this;
return (new cljs.core.async.t_cljs$core$async12644(self__.f,self__.ch,self__.meta12642,self__._,self__.fn1,meta12645__$1));
}));

(cljs.core.async.t_cljs$core$async12644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12646){
var self__ = this;
var _12646__$1 = this;
return self__.meta12645;
}));

(cljs.core.async.t_cljs$core$async12644.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12644.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12644.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12644.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12640_SHARP_){
var G__12647 = (((p1__12640_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12640_SHARP_) : self__.f.call(null,p1__12640_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12647) : f1.call(null,G__12647));
});
}));

(cljs.core.async.t_cljs$core$async12644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12642","meta12642",589139391,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12641","cljs.core.async/t_cljs$core$async12641",1373998168,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12645","meta12645",1670007546,null)], null);
}));

(cljs.core.async.t_cljs$core$async12644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12644");

(cljs.core.async.t_cljs$core$async12644.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12644.
 */
cljs.core.async.__GT_t_cljs$core$async12644 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12644(f__$1,ch__$1,meta12642__$1,___$2,fn1__$1,meta12645){
return (new cljs.core.async.t_cljs$core$async12644(f__$1,ch__$1,meta12642__$1,___$2,fn1__$1,meta12645));
});

}

return (new cljs.core.async.t_cljs$core$async12644(self__.f,self__.ch,self__.meta12642,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12650 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12650) : self__.f.call(null,G__12650));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12641.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
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
cljs.core.async.__GT_t_cljs$core$async12641 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12641(f__$1,ch__$1,meta12642){
return (new cljs.core.async.t_cljs$core$async12641(f__$1,ch__$1,meta12642));
});

}

return (new cljs.core.async.t_cljs$core$async12641(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12653 = (function (f,ch,meta12654){
this.f = f;
this.ch = ch;
this.meta12654 = meta12654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12655,meta12654__$1){
var self__ = this;
var _12655__$1 = this;
return (new cljs.core.async.t_cljs$core$async12653(self__.f,self__.ch,meta12654__$1));
}));

(cljs.core.async.t_cljs$core$async12653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12655){
var self__ = this;
var _12655__$1 = this;
return self__.meta12654;
}));

(cljs.core.async.t_cljs$core$async12653.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12653.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12653.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12654","meta12654",-1392646352,null)], null);
}));

(cljs.core.async.t_cljs$core$async12653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12653");

(cljs.core.async.t_cljs$core$async12653.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12653.
 */
cljs.core.async.__GT_t_cljs$core$async12653 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12653(f__$1,ch__$1,meta12654){
return (new cljs.core.async.t_cljs$core$async12653(f__$1,ch__$1,meta12654));
});

}

return (new cljs.core.async.t_cljs$core$async12653(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12656 = (function (p,ch,meta12657){
this.p = p;
this.ch = ch;
this.meta12657 = meta12657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12658,meta12657__$1){
var self__ = this;
var _12658__$1 = this;
return (new cljs.core.async.t_cljs$core$async12656(self__.p,self__.ch,meta12657__$1));
}));

(cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12658){
var self__ = this;
var _12658__$1 = this;
return self__.meta12657;
}));

(cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12657","meta12657",-1453389725,null)], null);
}));

(cljs.core.async.t_cljs$core$async12656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12656");

(cljs.core.async.t_cljs$core$async12656.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12656.
 */
cljs.core.async.__GT_t_cljs$core$async12656 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12656(p__$1,ch__$1,meta12657){
return (new cljs.core.async.t_cljs$core$async12656(p__$1,ch__$1,meta12657));
});

}

return (new cljs.core.async.t_cljs$core$async12656(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11055__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12685){
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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_12699 = [null,null,null,null,null,null,null,null,null];
(statearr_12699[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_12699[(1)] = (1));

return statearr_12699;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_12685){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12685);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12700){var ex__11006__auto__ = e12700;
var statearr_12701_13405 = state_12685;
(statearr_12701_13405[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12685[(4)]))){
var statearr_12702_13406 = state_12685;
(statearr_12702_13406[(1)] = cljs.core.first((state_12685[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12685;
state_12685 = G__13407;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_12685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_12685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12703 = f__11056__auto__();
(statearr_12703[(6)] = c__11055__auto___13394);

return statearr_12703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
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
var c__11055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12767){
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
var cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_12803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12803[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__);

(statearr_12803[(1)] = (1));

return statearr_12803;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____1 = (function (state_12767){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12767);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12804){var ex__11006__auto__ = e12804;
var statearr_12805_13433 = state_12767;
(statearr_12805_13433[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12767[(4)]))){
var statearr_12806_13434 = state_12767;
(statearr_12806_13434[(1)] = cljs.core.first((state_12767[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12767;
state_12767 = G__13435;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__ = function(state_12767){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____1.call(this,state_12767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12807 = f__11056__auto__();
(statearr_12807[(6)] = c__11055__auto__);

return statearr_12807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));

return c__11055__auto__;
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
var G__12813 = arguments.length;
switch (G__12813) {
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
var c__11055__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12837){
var state_val_12838 = (state_12837[(1)]);
if((state_val_12838 === (7))){
var inst_12832 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
var statearr_12839_13440 = state_12837__$1;
(statearr_12839_13440[(2)] = inst_12832);

(statearr_12839_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (1))){
var inst_12814 = null;
var state_12837__$1 = (function (){var statearr_12840 = state_12837;
(statearr_12840[(7)] = inst_12814);

return statearr_12840;
})();
var statearr_12841_13441 = state_12837__$1;
(statearr_12841_13441[(2)] = null);

(statearr_12841_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (4))){
var inst_12817 = (state_12837[(8)]);
var inst_12817__$1 = (state_12837[(2)]);
var inst_12818 = (inst_12817__$1 == null);
var inst_12819 = cljs.core.not(inst_12818);
var state_12837__$1 = (function (){var statearr_12842 = state_12837;
(statearr_12842[(8)] = inst_12817__$1);

return statearr_12842;
})();
if(inst_12819){
var statearr_12843_13442 = state_12837__$1;
(statearr_12843_13442[(1)] = (5));

} else {
var statearr_12844_13443 = state_12837__$1;
(statearr_12844_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (6))){
var state_12837__$1 = state_12837;
var statearr_12845_13444 = state_12837__$1;
(statearr_12845_13444[(2)] = null);

(statearr_12845_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (3))){
var inst_12834 = (state_12837[(2)]);
var inst_12835 = cljs.core.async.close_BANG_(out);
var state_12837__$1 = (function (){var statearr_12846 = state_12837;
(statearr_12846[(9)] = inst_12834);

return statearr_12846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12837__$1,inst_12835);
} else {
if((state_val_12838 === (2))){
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12837__$1,(4),ch);
} else {
if((state_val_12838 === (11))){
var inst_12817 = (state_12837[(8)]);
var inst_12826 = (state_12837[(2)]);
var inst_12814 = inst_12817;
var state_12837__$1 = (function (){var statearr_12847 = state_12837;
(statearr_12847[(10)] = inst_12826);

(statearr_12847[(7)] = inst_12814);

return statearr_12847;
})();
var statearr_12848_13445 = state_12837__$1;
(statearr_12848_13445[(2)] = null);

(statearr_12848_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (9))){
var inst_12817 = (state_12837[(8)]);
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12837__$1,(11),out,inst_12817);
} else {
if((state_val_12838 === (5))){
var inst_12817 = (state_12837[(8)]);
var inst_12814 = (state_12837[(7)]);
var inst_12821 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12817,inst_12814);
var state_12837__$1 = state_12837;
if(inst_12821){
var statearr_12850_13446 = state_12837__$1;
(statearr_12850_13446[(1)] = (8));

} else {
var statearr_12851_13447 = state_12837__$1;
(statearr_12851_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (10))){
var inst_12829 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
var statearr_12852_13448 = state_12837__$1;
(statearr_12852_13448[(2)] = inst_12829);

(statearr_12852_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (8))){
var inst_12814 = (state_12837[(7)]);
var tmp12849 = inst_12814;
var inst_12814__$1 = tmp12849;
var state_12837__$1 = (function (){var statearr_12853 = state_12837;
(statearr_12853[(7)] = inst_12814__$1);

return statearr_12853;
})();
var statearr_12854_13449 = state_12837__$1;
(statearr_12854_13449[(2)] = null);

(statearr_12854_13449[(1)] = (2));


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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_12855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12855[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_12855[(1)] = (1));

return statearr_12855;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_12837){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12837);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12856){var ex__11006__auto__ = e12856;
var statearr_12857_13450 = state_12837;
(statearr_12857_13450[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12837[(4)]))){
var statearr_12858_13451 = state_12837;
(statearr_12858_13451[(1)] = cljs.core.first((state_12837[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12837;
state_12837 = G__13452;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_12837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_12837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12859 = f__11056__auto__();
(statearr_12859[(6)] = c__11055__auto___13439);

return statearr_12859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12861 = arguments.length;
switch (G__12861) {
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
var c__11055__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12899){
var state_val_12900 = (state_12899[(1)]);
if((state_val_12900 === (7))){
var inst_12895 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12901_13455 = state_12899__$1;
(statearr_12901_13455[(2)] = inst_12895);

(statearr_12901_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (1))){
var inst_12862 = (new Array(n));
var inst_12863 = inst_12862;
var inst_12864 = (0);
var state_12899__$1 = (function (){var statearr_12902 = state_12899;
(statearr_12902[(7)] = inst_12864);

(statearr_12902[(8)] = inst_12863);

return statearr_12902;
})();
var statearr_12903_13456 = state_12899__$1;
(statearr_12903_13456[(2)] = null);

(statearr_12903_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (4))){
var inst_12867 = (state_12899[(9)]);
var inst_12867__$1 = (state_12899[(2)]);
var inst_12868 = (inst_12867__$1 == null);
var inst_12869 = cljs.core.not(inst_12868);
var state_12899__$1 = (function (){var statearr_12904 = state_12899;
(statearr_12904[(9)] = inst_12867__$1);

return statearr_12904;
})();
if(inst_12869){
var statearr_12905_13457 = state_12899__$1;
(statearr_12905_13457[(1)] = (5));

} else {
var statearr_12906_13458 = state_12899__$1;
(statearr_12906_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (15))){
var inst_12889 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12907_13459 = state_12899__$1;
(statearr_12907_13459[(2)] = inst_12889);

(statearr_12907_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (13))){
var state_12899__$1 = state_12899;
var statearr_12908_13460 = state_12899__$1;
(statearr_12908_13460[(2)] = null);

(statearr_12908_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (6))){
var inst_12864 = (state_12899[(7)]);
var inst_12885 = (inst_12864 > (0));
var state_12899__$1 = state_12899;
if(cljs.core.truth_(inst_12885)){
var statearr_12909_13461 = state_12899__$1;
(statearr_12909_13461[(1)] = (12));

} else {
var statearr_12910_13462 = state_12899__$1;
(statearr_12910_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (3))){
var inst_12897 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12899__$1,inst_12897);
} else {
if((state_val_12900 === (12))){
var inst_12863 = (state_12899[(8)]);
var inst_12887 = cljs.core.vec(inst_12863);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12899__$1,(15),out,inst_12887);
} else {
if((state_val_12900 === (2))){
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12899__$1,(4),ch);
} else {
if((state_val_12900 === (11))){
var inst_12879 = (state_12899[(2)]);
var inst_12880 = (new Array(n));
var inst_12863 = inst_12880;
var inst_12864 = (0);
var state_12899__$1 = (function (){var statearr_12911 = state_12899;
(statearr_12911[(10)] = inst_12879);

(statearr_12911[(7)] = inst_12864);

(statearr_12911[(8)] = inst_12863);

return statearr_12911;
})();
var statearr_12912_13463 = state_12899__$1;
(statearr_12912_13463[(2)] = null);

(statearr_12912_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (9))){
var inst_12863 = (state_12899[(8)]);
var inst_12877 = cljs.core.vec(inst_12863);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12899__$1,(11),out,inst_12877);
} else {
if((state_val_12900 === (5))){
var inst_12864 = (state_12899[(7)]);
var inst_12867 = (state_12899[(9)]);
var inst_12863 = (state_12899[(8)]);
var inst_12872 = (state_12899[(11)]);
var inst_12871 = (inst_12863[inst_12864] = inst_12867);
var inst_12872__$1 = (inst_12864 + (1));
var inst_12873 = (inst_12872__$1 < n);
var state_12899__$1 = (function (){var statearr_12913 = state_12899;
(statearr_12913[(12)] = inst_12871);

(statearr_12913[(11)] = inst_12872__$1);

return statearr_12913;
})();
if(cljs.core.truth_(inst_12873)){
var statearr_12914_13464 = state_12899__$1;
(statearr_12914_13464[(1)] = (8));

} else {
var statearr_12915_13465 = state_12899__$1;
(statearr_12915_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (14))){
var inst_12892 = (state_12899[(2)]);
var inst_12893 = cljs.core.async.close_BANG_(out);
var state_12899__$1 = (function (){var statearr_12917 = state_12899;
(statearr_12917[(13)] = inst_12892);

return statearr_12917;
})();
var statearr_12918_13466 = state_12899__$1;
(statearr_12918_13466[(2)] = inst_12893);

(statearr_12918_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (10))){
var inst_12883 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12919_13467 = state_12899__$1;
(statearr_12919_13467[(2)] = inst_12883);

(statearr_12919_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (8))){
var inst_12863 = (state_12899[(8)]);
var inst_12872 = (state_12899[(11)]);
var tmp12916 = inst_12863;
var inst_12863__$1 = tmp12916;
var inst_12864 = inst_12872;
var state_12899__$1 = (function (){var statearr_12920 = state_12899;
(statearr_12920[(7)] = inst_12864);

(statearr_12920[(8)] = inst_12863__$1);

return statearr_12920;
})();
var statearr_12921_13468 = state_12899__$1;
(statearr_12921_13468[(2)] = null);

(statearr_12921_13468[(1)] = (2));


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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_12922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12922[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_12922[(1)] = (1));

return statearr_12922;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_12899){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12899);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12923){var ex__11006__auto__ = e12923;
var statearr_12924_13469 = state_12899;
(statearr_12924_13469[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12899[(4)]))){
var statearr_12925_13470 = state_12899;
(statearr_12925_13470[(1)] = cljs.core.first((state_12899[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12899;
state_12899 = G__13471;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_12899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_12899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12926 = f__11056__auto__();
(statearr_12926[(6)] = c__11055__auto___13454);

return statearr_12926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12928 = arguments.length;
switch (G__12928) {
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
var c__11055__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11056__auto__ = (function (){var switch__11002__auto__ = (function (state_12970){
var state_val_12971 = (state_12970[(1)]);
if((state_val_12971 === (7))){
var inst_12966 = (state_12970[(2)]);
var state_12970__$1 = state_12970;
var statearr_12972_13474 = state_12970__$1;
(statearr_12972_13474[(2)] = inst_12966);

(statearr_12972_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (1))){
var inst_12929 = [];
var inst_12930 = inst_12929;
var inst_12931 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12970__$1 = (function (){var statearr_12973 = state_12970;
(statearr_12973[(7)] = inst_12931);

(statearr_12973[(8)] = inst_12930);

return statearr_12973;
})();
var statearr_12974_13475 = state_12970__$1;
(statearr_12974_13475[(2)] = null);

(statearr_12974_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (4))){
var inst_12934 = (state_12970[(9)]);
var inst_12934__$1 = (state_12970[(2)]);
var inst_12935 = (inst_12934__$1 == null);
var inst_12936 = cljs.core.not(inst_12935);
var state_12970__$1 = (function (){var statearr_12975 = state_12970;
(statearr_12975[(9)] = inst_12934__$1);

return statearr_12975;
})();
if(inst_12936){
var statearr_12976_13476 = state_12970__$1;
(statearr_12976_13476[(1)] = (5));

} else {
var statearr_12977_13477 = state_12970__$1;
(statearr_12977_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (15))){
var inst_12960 = (state_12970[(2)]);
var state_12970__$1 = state_12970;
var statearr_12978_13478 = state_12970__$1;
(statearr_12978_13478[(2)] = inst_12960);

(statearr_12978_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (13))){
var state_12970__$1 = state_12970;
var statearr_12979_13479 = state_12970__$1;
(statearr_12979_13479[(2)] = null);

(statearr_12979_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (6))){
var inst_12930 = (state_12970[(8)]);
var inst_12955 = inst_12930.length;
var inst_12956 = (inst_12955 > (0));
var state_12970__$1 = state_12970;
if(cljs.core.truth_(inst_12956)){
var statearr_12980_13480 = state_12970__$1;
(statearr_12980_13480[(1)] = (12));

} else {
var statearr_12981_13481 = state_12970__$1;
(statearr_12981_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (3))){
var inst_12968 = (state_12970[(2)]);
var state_12970__$1 = state_12970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12970__$1,inst_12968);
} else {
if((state_val_12971 === (12))){
var inst_12930 = (state_12970[(8)]);
var inst_12958 = cljs.core.vec(inst_12930);
var state_12970__$1 = state_12970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12970__$1,(15),out,inst_12958);
} else {
if((state_val_12971 === (2))){
var state_12970__$1 = state_12970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12970__$1,(4),ch);
} else {
if((state_val_12971 === (11))){
var inst_12938 = (state_12970[(10)]);
var inst_12934 = (state_12970[(9)]);
var inst_12948 = (state_12970[(2)]);
var inst_12949 = [];
var inst_12950 = inst_12949.push(inst_12934);
var inst_12930 = inst_12949;
var inst_12931 = inst_12938;
var state_12970__$1 = (function (){var statearr_12982 = state_12970;
(statearr_12982[(11)] = inst_12950);

(statearr_12982[(12)] = inst_12948);

(statearr_12982[(7)] = inst_12931);

(statearr_12982[(8)] = inst_12930);

return statearr_12982;
})();
var statearr_12983_13482 = state_12970__$1;
(statearr_12983_13482[(2)] = null);

(statearr_12983_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (9))){
var inst_12930 = (state_12970[(8)]);
var inst_12946 = cljs.core.vec(inst_12930);
var state_12970__$1 = state_12970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12970__$1,(11),out,inst_12946);
} else {
if((state_val_12971 === (5))){
var inst_12938 = (state_12970[(10)]);
var inst_12931 = (state_12970[(7)]);
var inst_12934 = (state_12970[(9)]);
var inst_12938__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12934) : f.call(null,inst_12934));
var inst_12939 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12938__$1,inst_12931);
var inst_12940 = cljs.core.keyword_identical_QMARK_(inst_12931,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12941 = ((inst_12939) || (inst_12940));
var state_12970__$1 = (function (){var statearr_12984 = state_12970;
(statearr_12984[(10)] = inst_12938__$1);

return statearr_12984;
})();
if(cljs.core.truth_(inst_12941)){
var statearr_12985_13483 = state_12970__$1;
(statearr_12985_13483[(1)] = (8));

} else {
var statearr_12986_13484 = state_12970__$1;
(statearr_12986_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (14))){
var inst_12963 = (state_12970[(2)]);
var inst_12964 = cljs.core.async.close_BANG_(out);
var state_12970__$1 = (function (){var statearr_12988 = state_12970;
(statearr_12988[(13)] = inst_12963);

return statearr_12988;
})();
var statearr_12989_13485 = state_12970__$1;
(statearr_12989_13485[(2)] = inst_12964);

(statearr_12989_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (10))){
var inst_12953 = (state_12970[(2)]);
var state_12970__$1 = state_12970;
var statearr_12990_13486 = state_12970__$1;
(statearr_12990_13486[(2)] = inst_12953);

(statearr_12990_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (8))){
var inst_12938 = (state_12970[(10)]);
var inst_12934 = (state_12970[(9)]);
var inst_12930 = (state_12970[(8)]);
var inst_12943 = inst_12930.push(inst_12934);
var tmp12987 = inst_12930;
var inst_12930__$1 = tmp12987;
var inst_12931 = inst_12938;
var state_12970__$1 = (function (){var statearr_12991 = state_12970;
(statearr_12991[(7)] = inst_12931);

(statearr_12991[(14)] = inst_12943);

(statearr_12991[(8)] = inst_12930__$1);

return statearr_12991;
})();
var statearr_12992_13487 = state_12970__$1;
(statearr_12992_13487[(2)] = null);

(statearr_12992_13487[(1)] = (2));


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
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_12993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12993[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_12993[(1)] = (1));

return statearr_12993;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_12970){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__(state_12970);
if(cljs.core.keyword_identical_QMARK_(result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12994){var ex__11006__auto__ = e12994;
var statearr_12995_13488 = state_12970;
(statearr_12995_13488[(2)] = ex__11006__auto__);


if(cljs.core.seq((state_12970[(4)]))){
var statearr_12996_13489 = state_12970;
(statearr_12996_13489[(1)] = cljs.core.first((state_12970[(4)])));

} else {
throw ex__11006__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12970;
state_12970 = G__13490;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_12970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_12970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
})();
var state__11057__auto__ = (function (){var statearr_12997 = f__11056__auto__();
(statearr_12997[(6)] = c__11055__auto___13473);

return statearr_12997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11057__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
