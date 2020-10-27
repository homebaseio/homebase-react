goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10957 = arguments.length;
switch (G__10957) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10958 = (function (f,blockable,meta10959){
this.f = f;
this.blockable = blockable;
this.meta10959 = meta10959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10960,meta10959__$1){
var self__ = this;
var _10960__$1 = this;
return (new cljs.core.async.t_cljs$core$async10958(self__.f,self__.blockable,meta10959__$1));
}));

(cljs.core.async.t_cljs$core$async10958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10960){
var self__ = this;
var _10960__$1 = this;
return self__.meta10959;
}));

(cljs.core.async.t_cljs$core$async10958.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10958.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10959","meta10959",-2072821753,null)], null);
}));

(cljs.core.async.t_cljs$core$async10958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10958");

(cljs.core.async.t_cljs$core$async10958.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10958.
 */
cljs.core.async.__GT_t_cljs$core$async10958 = (function cljs$core$async$__GT_t_cljs$core$async10958(f__$1,blockable__$1,meta10959){
return (new cljs.core.async.t_cljs$core$async10958(f__$1,blockable__$1,meta10959));
});

}

return (new cljs.core.async.t_cljs$core$async10958(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10972 = arguments.length;
switch (G__10972) {
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
var G__10975 = arguments.length;
switch (G__10975) {
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
var G__10980 = arguments.length;
switch (G__10980) {
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
var val_12783 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12783) : fn1.call(null,val_12783));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12783) : fn1.call(null,val_12783));
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
var G__10984 = arguments.length;
switch (G__10984) {
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
var n__4613__auto___12787 = n;
var x_12788 = (0);
while(true){
if((x_12788 < n__4613__auto___12787)){
(a[x_12788] = x_12788);

var G__12789 = (x_12788 + (1));
x_12788 = G__12789;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10985 = (function (flag,meta10986){
this.flag = flag;
this.meta10986 = meta10986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10987,meta10986__$1){
var self__ = this;
var _10987__$1 = this;
return (new cljs.core.async.t_cljs$core$async10985(self__.flag,meta10986__$1));
}));

(cljs.core.async.t_cljs$core$async10985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10987){
var self__ = this;
var _10987__$1 = this;
return self__.meta10986;
}));

(cljs.core.async.t_cljs$core$async10985.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10986","meta10986",-1173602342,null)], null);
}));

(cljs.core.async.t_cljs$core$async10985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10985");

(cljs.core.async.t_cljs$core$async10985.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10985.
 */
cljs.core.async.__GT_t_cljs$core$async10985 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10985(flag__$1,meta10986){
return (new cljs.core.async.t_cljs$core$async10985(flag__$1,meta10986));
});

}

return (new cljs.core.async.t_cljs$core$async10985(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10993 = (function (flag,cb,meta10994){
this.flag = flag;
this.cb = cb;
this.meta10994 = meta10994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10995,meta10994__$1){
var self__ = this;
var _10995__$1 = this;
return (new cljs.core.async.t_cljs$core$async10993(self__.flag,self__.cb,meta10994__$1));
}));

(cljs.core.async.t_cljs$core$async10993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10995){
var self__ = this;
var _10995__$1 = this;
return self__.meta10994;
}));

(cljs.core.async.t_cljs$core$async10993.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10993.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10994","meta10994",463811453,null)], null);
}));

(cljs.core.async.t_cljs$core$async10993.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10993");

(cljs.core.async.t_cljs$core$async10993.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10993");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10993.
 */
cljs.core.async.__GT_t_cljs$core$async10993 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10993(flag__$1,cb__$1,meta10994){
return (new cljs.core.async.t_cljs$core$async10993(flag__$1,cb__$1,meta10994));
});

}

return (new cljs.core.async.t_cljs$core$async10993(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10997_SHARP_){
var G__10999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10997_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10999) : fret.call(null,G__10999));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10998_SHARP_){
var G__11000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10998_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11000) : fret.call(null,G__11000));
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
var G__12802 = (i + (1));
i = G__12802;
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
var len__4736__auto___12819 = arguments.length;
var i__4737__auto___12820 = (0);
while(true){
if((i__4737__auto___12820 < len__4736__auto___12819)){
args__4742__auto__.push((arguments[i__4737__auto___12820]));

var G__12821 = (i__4737__auto___12820 + (1));
i__4737__auto___12820 = G__12821;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11006){
var map__11007 = p__11006;
var map__11007__$1 = (((((!((map__11007 == null))))?(((((map__11007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11007):map__11007);
var opts = map__11007__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11001){
var G__11003 = cljs.core.first(seq11001);
var seq11001__$1 = cljs.core.next(seq11001);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11003,seq11001__$1);
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
var G__11010 = arguments.length;
switch (G__11010) {
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
var c__10888__auto___12829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11035){
var state_val_11036 = (state_11035[(1)]);
if((state_val_11036 === (7))){
var inst_11030 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
var statearr_11040_12830 = state_11035__$1;
(statearr_11040_12830[(2)] = inst_11030);

(statearr_11040_12830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (1))){
var state_11035__$1 = state_11035;
var statearr_11041_12831 = state_11035__$1;
(statearr_11041_12831[(2)] = null);

(statearr_11041_12831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (4))){
var inst_11013 = (state_11035[(7)]);
var inst_11013__$1 = (state_11035[(2)]);
var inst_11014 = (inst_11013__$1 == null);
var state_11035__$1 = (function (){var statearr_11042 = state_11035;
(statearr_11042[(7)] = inst_11013__$1);

return statearr_11042;
})();
if(cljs.core.truth_(inst_11014)){
var statearr_11043_12833 = state_11035__$1;
(statearr_11043_12833[(1)] = (5));

} else {
var statearr_11044_12835 = state_11035__$1;
(statearr_11044_12835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (13))){
var state_11035__$1 = state_11035;
var statearr_11045_12836 = state_11035__$1;
(statearr_11045_12836[(2)] = null);

(statearr_11045_12836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (6))){
var inst_11013 = (state_11035[(7)]);
var state_11035__$1 = state_11035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11035__$1,(11),to,inst_11013);
} else {
if((state_val_11036 === (3))){
var inst_11032 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11035__$1,inst_11032);
} else {
if((state_val_11036 === (12))){
var state_11035__$1 = state_11035;
var statearr_11046_12840 = state_11035__$1;
(statearr_11046_12840[(2)] = null);

(statearr_11046_12840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (2))){
var state_11035__$1 = state_11035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11035__$1,(4),from);
} else {
if((state_val_11036 === (11))){
var inst_11023 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
if(cljs.core.truth_(inst_11023)){
var statearr_11049_12841 = state_11035__$1;
(statearr_11049_12841[(1)] = (12));

} else {
var statearr_11050_12842 = state_11035__$1;
(statearr_11050_12842[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (9))){
var state_11035__$1 = state_11035;
var statearr_11051_12843 = state_11035__$1;
(statearr_11051_12843[(2)] = null);

(statearr_11051_12843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (5))){
var state_11035__$1 = state_11035;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11054_12844 = state_11035__$1;
(statearr_11054_12844[(1)] = (8));

} else {
var statearr_11055_12845 = state_11035__$1;
(statearr_11055_12845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (14))){
var inst_11028 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
var statearr_11056_12846 = state_11035__$1;
(statearr_11056_12846[(2)] = inst_11028);

(statearr_11056_12846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (10))){
var inst_11020 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
var statearr_11059_12847 = state_11035__$1;
(statearr_11059_12847[(2)] = inst_11020);

(statearr_11059_12847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (8))){
var inst_11017 = cljs.core.async.close_BANG_(to);
var state_11035__$1 = state_11035;
var statearr_11060_12848 = state_11035__$1;
(statearr_11060_12848[(2)] = inst_11017);

(statearr_11060_12848[(1)] = (10));


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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_11061 = [null,null,null,null,null,null,null,null];
(statearr_11061[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_11061[(1)] = (1));

return statearr_11061;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_11035){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11035);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11062){var ex__10828__auto__ = e11062;
var statearr_11063_12849 = state_11035;
(statearr_11063_12849[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11035[(4)]))){
var statearr_11064_12850 = state_11035;
(statearr_11064_12850[(1)] = cljs.core.first((state_11035[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12851 = state_11035;
state_11035 = G__12851;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_11035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_11035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11065 = f__10889__auto__();
(statearr_11065[(6)] = c__10888__auto___12829);

return statearr_11065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
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
var process = (function (p__11066){
var vec__11067 = p__11066;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11067,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11067,(1),null);
var job = vec__11067;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10888__auto___12852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11074){
var state_val_11075 = (state_11074[(1)]);
if((state_val_11075 === (1))){
var state_11074__$1 = state_11074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11074__$1,(2),res,v);
} else {
if((state_val_11075 === (2))){
var inst_11071 = (state_11074[(2)]);
var inst_11072 = cljs.core.async.close_BANG_(res);
var state_11074__$1 = (function (){var statearr_11076 = state_11074;
(statearr_11076[(7)] = inst_11071);

return statearr_11076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11074__$1,inst_11072);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0 = (function (){
var statearr_11077 = [null,null,null,null,null,null,null,null];
(statearr_11077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__);

(statearr_11077[(1)] = (1));

return statearr_11077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1 = (function (state_11074){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11074);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11078){var ex__10828__auto__ = e11078;
var statearr_11079_12882 = state_11074;
(statearr_11079_12882[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11074[(4)]))){
var statearr_11080_12883 = state_11074;
(statearr_11080_12883[(1)] = cljs.core.first((state_11074[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12884 = state_11074;
state_11074 = G__12884;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = function(state_11074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1.call(this,state_11074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11081 = f__10889__auto__();
(statearr_11081[(6)] = c__10888__auto___12852);

return statearr_11081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11082){
var vec__11083 = p__11082;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11083,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11083,(1),null);
var job = vec__11083;
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
var n__4613__auto___12885 = n;
var __12886 = (0);
while(true){
if((__12886 < n__4613__auto___12885)){
var G__11086_12887 = type;
var G__11086_12888__$1 = (((G__11086_12887 instanceof cljs.core.Keyword))?G__11086_12887.fqn:null);
switch (G__11086_12888__$1) {
case "compute":
var c__10888__auto___12890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12886,c__10888__auto___12890,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async){
return (function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = ((function (__12886,c__10888__auto___12890,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async){
return (function (state_11100){
var state_val_11101 = (state_11100[(1)]);
if((state_val_11101 === (1))){
var state_11100__$1 = state_11100;
var statearr_11102_12891 = state_11100__$1;
(statearr_11102_12891[(2)] = null);

(statearr_11102_12891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (2))){
var state_11100__$1 = state_11100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11100__$1,(4),jobs);
} else {
if((state_val_11101 === (3))){
var inst_11098 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11100__$1,inst_11098);
} else {
if((state_val_11101 === (4))){
var inst_11089 = (state_11100[(2)]);
var inst_11090 = process(inst_11089);
var state_11100__$1 = state_11100;
if(cljs.core.truth_(inst_11090)){
var statearr_11103_12892 = state_11100__$1;
(statearr_11103_12892[(1)] = (5));

} else {
var statearr_11104_12893 = state_11100__$1;
(statearr_11104_12893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (5))){
var state_11100__$1 = state_11100;
var statearr_11105_12894 = state_11100__$1;
(statearr_11105_12894[(2)] = null);

(statearr_11105_12894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (6))){
var state_11100__$1 = state_11100;
var statearr_11106_12895 = state_11100__$1;
(statearr_11106_12895[(2)] = null);

(statearr_11106_12895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (7))){
var inst_11096 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
var statearr_11107_12896 = state_11100__$1;
(statearr_11107_12896[(2)] = inst_11096);

(statearr_11107_12896[(1)] = (3));


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
});})(__12886,c__10888__auto___12890,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async))
;
return ((function (__12886,switch__10824__auto__,c__10888__auto___12890,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0 = (function (){
var statearr_11108 = [null,null,null,null,null,null,null];
(statearr_11108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__);

(statearr_11108[(1)] = (1));

return statearr_11108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1 = (function (state_11100){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11100);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11109){var ex__10828__auto__ = e11109;
var statearr_11110_12897 = state_11100;
(statearr_11110_12897[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11100[(4)]))){
var statearr_11111_12898 = state_11100;
(statearr_11111_12898[(1)] = cljs.core.first((state_11100[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12899 = state_11100;
state_11100 = G__12899;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = function(state_11100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1.call(this,state_11100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__;
})()
;})(__12886,switch__10824__auto__,c__10888__auto___12890,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async))
})();
var state__10890__auto__ = (function (){var statearr_11112 = f__10889__auto__();
(statearr_11112[(6)] = c__10888__auto___12890);

return statearr_11112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
});})(__12886,c__10888__auto___12890,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async))
);


break;
case "async":
var c__10888__auto___12916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12886,c__10888__auto___12916,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async){
return (function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = ((function (__12886,c__10888__auto___12916,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async){
return (function (state_11125){
var state_val_11126 = (state_11125[(1)]);
if((state_val_11126 === (1))){
var state_11125__$1 = state_11125;
var statearr_11127_12917 = state_11125__$1;
(statearr_11127_12917[(2)] = null);

(statearr_11127_12917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11126 === (2))){
var state_11125__$1 = state_11125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11125__$1,(4),jobs);
} else {
if((state_val_11126 === (3))){
var inst_11123 = (state_11125[(2)]);
var state_11125__$1 = state_11125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11125__$1,inst_11123);
} else {
if((state_val_11126 === (4))){
var inst_11115 = (state_11125[(2)]);
var inst_11116 = async(inst_11115);
var state_11125__$1 = state_11125;
if(cljs.core.truth_(inst_11116)){
var statearr_11128_12918 = state_11125__$1;
(statearr_11128_12918[(1)] = (5));

} else {
var statearr_11129_12919 = state_11125__$1;
(statearr_11129_12919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11126 === (5))){
var state_11125__$1 = state_11125;
var statearr_11130_12920 = state_11125__$1;
(statearr_11130_12920[(2)] = null);

(statearr_11130_12920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11126 === (6))){
var state_11125__$1 = state_11125;
var statearr_11131_12921 = state_11125__$1;
(statearr_11131_12921[(2)] = null);

(statearr_11131_12921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11126 === (7))){
var inst_11121 = (state_11125[(2)]);
var state_11125__$1 = state_11125;
var statearr_11132_12922 = state_11125__$1;
(statearr_11132_12922[(2)] = inst_11121);

(statearr_11132_12922[(1)] = (3));


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
});})(__12886,c__10888__auto___12916,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async))
;
return ((function (__12886,switch__10824__auto__,c__10888__auto___12916,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0 = (function (){
var statearr_11133 = [null,null,null,null,null,null,null];
(statearr_11133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__);

(statearr_11133[(1)] = (1));

return statearr_11133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1 = (function (state_11125){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11125);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11134){var ex__10828__auto__ = e11134;
var statearr_11135_12923 = state_11125;
(statearr_11135_12923[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11125[(4)]))){
var statearr_11136_12924 = state_11125;
(statearr_11136_12924[(1)] = cljs.core.first((state_11125[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12925 = state_11125;
state_11125 = G__12925;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = function(state_11125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1.call(this,state_11125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__;
})()
;})(__12886,switch__10824__auto__,c__10888__auto___12916,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async))
})();
var state__10890__auto__ = (function (){var statearr_11140 = f__10889__auto__();
(statearr_11140[(6)] = c__10888__auto___12916);

return statearr_11140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
});})(__12886,c__10888__auto___12916,G__11086_12887,G__11086_12888__$1,n__4613__auto___12885,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11086_12888__$1)].join('')));

}

var G__12926 = (__12886 + (1));
__12886 = G__12926;
continue;
} else {
}
break;
}

var c__10888__auto___12927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11164){
var state_val_11165 = (state_11164[(1)]);
if((state_val_11165 === (7))){
var inst_11160 = (state_11164[(2)]);
var state_11164__$1 = state_11164;
var statearr_11168_12928 = state_11164__$1;
(statearr_11168_12928[(2)] = inst_11160);

(statearr_11168_12928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (1))){
var state_11164__$1 = state_11164;
var statearr_11169_12929 = state_11164__$1;
(statearr_11169_12929[(2)] = null);

(statearr_11169_12929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (4))){
var inst_11144 = (state_11164[(7)]);
var inst_11144__$1 = (state_11164[(2)]);
var inst_11145 = (inst_11144__$1 == null);
var state_11164__$1 = (function (){var statearr_11170 = state_11164;
(statearr_11170[(7)] = inst_11144__$1);

return statearr_11170;
})();
if(cljs.core.truth_(inst_11145)){
var statearr_11171_12930 = state_11164__$1;
(statearr_11171_12930[(1)] = (5));

} else {
var statearr_11172_12931 = state_11164__$1;
(statearr_11172_12931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (6))){
var inst_11144 = (state_11164[(7)]);
var inst_11149 = (state_11164[(8)]);
var inst_11149__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11152 = [inst_11144,inst_11149__$1];
var inst_11153 = (new cljs.core.PersistentVector(null,2,(5),inst_11151,inst_11152,null));
var state_11164__$1 = (function (){var statearr_11173 = state_11164;
(statearr_11173[(8)] = inst_11149__$1);

return statearr_11173;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11164__$1,(8),jobs,inst_11153);
} else {
if((state_val_11165 === (3))){
var inst_11162 = (state_11164[(2)]);
var state_11164__$1 = state_11164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11164__$1,inst_11162);
} else {
if((state_val_11165 === (2))){
var state_11164__$1 = state_11164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11164__$1,(4),from);
} else {
if((state_val_11165 === (9))){
var inst_11157 = (state_11164[(2)]);
var state_11164__$1 = (function (){var statearr_11174 = state_11164;
(statearr_11174[(9)] = inst_11157);

return statearr_11174;
})();
var statearr_11175_12943 = state_11164__$1;
(statearr_11175_12943[(2)] = null);

(statearr_11175_12943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (5))){
var inst_11147 = cljs.core.async.close_BANG_(jobs);
var state_11164__$1 = state_11164;
var statearr_11176_12944 = state_11164__$1;
(statearr_11176_12944[(2)] = inst_11147);

(statearr_11176_12944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (8))){
var inst_11149 = (state_11164[(8)]);
var inst_11155 = (state_11164[(2)]);
var state_11164__$1 = (function (){var statearr_11177 = state_11164;
(statearr_11177[(10)] = inst_11155);

return statearr_11177;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11164__$1,(9),results,inst_11149);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0 = (function (){
var statearr_11178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__);

(statearr_11178[(1)] = (1));

return statearr_11178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1 = (function (state_11164){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11164);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11179){var ex__10828__auto__ = e11179;
var statearr_11180_12945 = state_11164;
(statearr_11180_12945[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11164[(4)]))){
var statearr_11181_12946 = state_11164;
(statearr_11181_12946[(1)] = cljs.core.first((state_11164[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12947 = state_11164;
state_11164 = G__12947;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = function(state_11164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1.call(this,state_11164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11184 = f__10889__auto__();
(statearr_11184[(6)] = c__10888__auto___12927);

return statearr_11184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));


var c__10888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11222){
var state_val_11223 = (state_11222[(1)]);
if((state_val_11223 === (7))){
var inst_11218 = (state_11222[(2)]);
var state_11222__$1 = state_11222;
var statearr_11224_12948 = state_11222__$1;
(statearr_11224_12948[(2)] = inst_11218);

(statearr_11224_12948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (20))){
var state_11222__$1 = state_11222;
var statearr_11225_12949 = state_11222__$1;
(statearr_11225_12949[(2)] = null);

(statearr_11225_12949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (1))){
var state_11222__$1 = state_11222;
var statearr_11226_12950 = state_11222__$1;
(statearr_11226_12950[(2)] = null);

(statearr_11226_12950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (4))){
var inst_11187 = (state_11222[(7)]);
var inst_11187__$1 = (state_11222[(2)]);
var inst_11188 = (inst_11187__$1 == null);
var state_11222__$1 = (function (){var statearr_11227 = state_11222;
(statearr_11227[(7)] = inst_11187__$1);

return statearr_11227;
})();
if(cljs.core.truth_(inst_11188)){
var statearr_11228_12951 = state_11222__$1;
(statearr_11228_12951[(1)] = (5));

} else {
var statearr_11231_12952 = state_11222__$1;
(statearr_11231_12952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (15))){
var inst_11200 = (state_11222[(8)]);
var state_11222__$1 = state_11222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11222__$1,(18),to,inst_11200);
} else {
if((state_val_11223 === (21))){
var inst_11213 = (state_11222[(2)]);
var state_11222__$1 = state_11222;
var statearr_11234_12953 = state_11222__$1;
(statearr_11234_12953[(2)] = inst_11213);

(statearr_11234_12953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (13))){
var inst_11215 = (state_11222[(2)]);
var state_11222__$1 = (function (){var statearr_11235 = state_11222;
(statearr_11235[(9)] = inst_11215);

return statearr_11235;
})();
var statearr_11236_12954 = state_11222__$1;
(statearr_11236_12954[(2)] = null);

(statearr_11236_12954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (6))){
var inst_11187 = (state_11222[(7)]);
var state_11222__$1 = state_11222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11222__$1,(11),inst_11187);
} else {
if((state_val_11223 === (17))){
var inst_11208 = (state_11222[(2)]);
var state_11222__$1 = state_11222;
if(cljs.core.truth_(inst_11208)){
var statearr_11237_12955 = state_11222__$1;
(statearr_11237_12955[(1)] = (19));

} else {
var statearr_11238_12956 = state_11222__$1;
(statearr_11238_12956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (3))){
var inst_11220 = (state_11222[(2)]);
var state_11222__$1 = state_11222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11222__$1,inst_11220);
} else {
if((state_val_11223 === (12))){
var inst_11197 = (state_11222[(10)]);
var state_11222__$1 = state_11222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11222__$1,(14),inst_11197);
} else {
if((state_val_11223 === (2))){
var state_11222__$1 = state_11222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11222__$1,(4),results);
} else {
if((state_val_11223 === (19))){
var state_11222__$1 = state_11222;
var statearr_11239_12957 = state_11222__$1;
(statearr_11239_12957[(2)] = null);

(statearr_11239_12957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (11))){
var inst_11197 = (state_11222[(2)]);
var state_11222__$1 = (function (){var statearr_11240 = state_11222;
(statearr_11240[(10)] = inst_11197);

return statearr_11240;
})();
var statearr_11241_12976 = state_11222__$1;
(statearr_11241_12976[(2)] = null);

(statearr_11241_12976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (9))){
var state_11222__$1 = state_11222;
var statearr_11242_12977 = state_11222__$1;
(statearr_11242_12977[(2)] = null);

(statearr_11242_12977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (5))){
var state_11222__$1 = state_11222;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11243_12978 = state_11222__$1;
(statearr_11243_12978[(1)] = (8));

} else {
var statearr_11244_12979 = state_11222__$1;
(statearr_11244_12979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (14))){
var inst_11200 = (state_11222[(8)]);
var inst_11200__$1 = (state_11222[(2)]);
var inst_11201 = (inst_11200__$1 == null);
var inst_11202 = cljs.core.not(inst_11201);
var state_11222__$1 = (function (){var statearr_11245 = state_11222;
(statearr_11245[(8)] = inst_11200__$1);

return statearr_11245;
})();
if(inst_11202){
var statearr_11246_12980 = state_11222__$1;
(statearr_11246_12980[(1)] = (15));

} else {
var statearr_11247_12981 = state_11222__$1;
(statearr_11247_12981[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (16))){
var state_11222__$1 = state_11222;
var statearr_11248_12982 = state_11222__$1;
(statearr_11248_12982[(2)] = false);

(statearr_11248_12982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (10))){
var inst_11194 = (state_11222[(2)]);
var state_11222__$1 = state_11222;
var statearr_11249_12983 = state_11222__$1;
(statearr_11249_12983[(2)] = inst_11194);

(statearr_11249_12983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (18))){
var inst_11205 = (state_11222[(2)]);
var state_11222__$1 = state_11222;
var statearr_11250_12984 = state_11222__$1;
(statearr_11250_12984[(2)] = inst_11205);

(statearr_11250_12984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (8))){
var inst_11191 = cljs.core.async.close_BANG_(to);
var state_11222__$1 = state_11222;
var statearr_11251_12985 = state_11222__$1;
(statearr_11251_12985[(2)] = inst_11191);

(statearr_11251_12985[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0 = (function (){
var statearr_11252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__);

(statearr_11252[(1)] = (1));

return statearr_11252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1 = (function (state_11222){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11222);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11253){var ex__10828__auto__ = e11253;
var statearr_11254_12986 = state_11222;
(statearr_11254_12986[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11222[(4)]))){
var statearr_11257_12987 = state_11222;
(statearr_11257_12987[(1)] = cljs.core.first((state_11222[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12988 = state_11222;
state_11222 = G__12988;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__ = function(state_11222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1.call(this,state_11222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11259 = f__10889__auto__();
(statearr_11259[(6)] = c__10888__auto__);

return statearr_11259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));

return c__10888__auto__;
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
var G__11262 = arguments.length;
switch (G__11262) {
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
var G__11264 = arguments.length;
switch (G__11264) {
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
var G__11266 = arguments.length;
switch (G__11266) {
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
var c__10888__auto___12992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11292){
var state_val_11293 = (state_11292[(1)]);
if((state_val_11293 === (7))){
var inst_11288 = (state_11292[(2)]);
var state_11292__$1 = state_11292;
var statearr_11294_12993 = state_11292__$1;
(statearr_11294_12993[(2)] = inst_11288);

(statearr_11294_12993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (1))){
var state_11292__$1 = state_11292;
var statearr_11295_12994 = state_11292__$1;
(statearr_11295_12994[(2)] = null);

(statearr_11295_12994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (4))){
var inst_11269 = (state_11292[(7)]);
var inst_11269__$1 = (state_11292[(2)]);
var inst_11270 = (inst_11269__$1 == null);
var state_11292__$1 = (function (){var statearr_11296 = state_11292;
(statearr_11296[(7)] = inst_11269__$1);

return statearr_11296;
})();
if(cljs.core.truth_(inst_11270)){
var statearr_11299_12995 = state_11292__$1;
(statearr_11299_12995[(1)] = (5));

} else {
var statearr_11300_12996 = state_11292__$1;
(statearr_11300_12996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (13))){
var state_11292__$1 = state_11292;
var statearr_11301_12997 = state_11292__$1;
(statearr_11301_12997[(2)] = null);

(statearr_11301_12997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (6))){
var inst_11269 = (state_11292[(7)]);
var inst_11275 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11269) : p.call(null,inst_11269));
var state_11292__$1 = state_11292;
if(cljs.core.truth_(inst_11275)){
var statearr_11302_12998 = state_11292__$1;
(statearr_11302_12998[(1)] = (9));

} else {
var statearr_11303_12999 = state_11292__$1;
(statearr_11303_12999[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (3))){
var inst_11290 = (state_11292[(2)]);
var state_11292__$1 = state_11292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11292__$1,inst_11290);
} else {
if((state_val_11293 === (12))){
var state_11292__$1 = state_11292;
var statearr_11306_13000 = state_11292__$1;
(statearr_11306_13000[(2)] = null);

(statearr_11306_13000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (2))){
var state_11292__$1 = state_11292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11292__$1,(4),ch);
} else {
if((state_val_11293 === (11))){
var inst_11269 = (state_11292[(7)]);
var inst_11279 = (state_11292[(2)]);
var state_11292__$1 = state_11292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11292__$1,(8),inst_11279,inst_11269);
} else {
if((state_val_11293 === (9))){
var state_11292__$1 = state_11292;
var statearr_11308_13001 = state_11292__$1;
(statearr_11308_13001[(2)] = tc);

(statearr_11308_13001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (5))){
var inst_11272 = cljs.core.async.close_BANG_(tc);
var inst_11273 = cljs.core.async.close_BANG_(fc);
var state_11292__$1 = (function (){var statearr_11309 = state_11292;
(statearr_11309[(8)] = inst_11272);

return statearr_11309;
})();
var statearr_11310_13002 = state_11292__$1;
(statearr_11310_13002[(2)] = inst_11273);

(statearr_11310_13002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (14))){
var inst_11286 = (state_11292[(2)]);
var state_11292__$1 = state_11292;
var statearr_11311_13003 = state_11292__$1;
(statearr_11311_13003[(2)] = inst_11286);

(statearr_11311_13003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (10))){
var state_11292__$1 = state_11292;
var statearr_11313_13004 = state_11292__$1;
(statearr_11313_13004[(2)] = fc);

(statearr_11313_13004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11293 === (8))){
var inst_11281 = (state_11292[(2)]);
var state_11292__$1 = state_11292;
if(cljs.core.truth_(inst_11281)){
var statearr_11314_13005 = state_11292__$1;
(statearr_11314_13005[(1)] = (12));

} else {
var statearr_11316_13006 = state_11292__$1;
(statearr_11316_13006[(1)] = (13));

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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_11317 = [null,null,null,null,null,null,null,null,null];
(statearr_11317[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_11317[(1)] = (1));

return statearr_11317;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_11292){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11292);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11318){var ex__10828__auto__ = e11318;
var statearr_11319_13007 = state_11292;
(statearr_11319_13007[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11292[(4)]))){
var statearr_11320_13008 = state_11292;
(statearr_11320_13008[(1)] = cljs.core.first((state_11292[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13009 = state_11292;
state_11292 = G__13009;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_11292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_11292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11321 = f__10889__auto__();
(statearr_11321[(6)] = c__10888__auto___12992);

return statearr_11321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
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
var c__10888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11343){
var state_val_11344 = (state_11343[(1)]);
if((state_val_11344 === (7))){
var inst_11339 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
var statearr_11345_13010 = state_11343__$1;
(statearr_11345_13010[(2)] = inst_11339);

(statearr_11345_13010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (1))){
var inst_11322 = init;
var inst_11323 = inst_11322;
var state_11343__$1 = (function (){var statearr_11346 = state_11343;
(statearr_11346[(7)] = inst_11323);

return statearr_11346;
})();
var statearr_11347_13011 = state_11343__$1;
(statearr_11347_13011[(2)] = null);

(statearr_11347_13011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (4))){
var inst_11326 = (state_11343[(8)]);
var inst_11326__$1 = (state_11343[(2)]);
var inst_11327 = (inst_11326__$1 == null);
var state_11343__$1 = (function (){var statearr_11348 = state_11343;
(statearr_11348[(8)] = inst_11326__$1);

return statearr_11348;
})();
if(cljs.core.truth_(inst_11327)){
var statearr_11349_13012 = state_11343__$1;
(statearr_11349_13012[(1)] = (5));

} else {
var statearr_11350_13013 = state_11343__$1;
(statearr_11350_13013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (6))){
var inst_11323 = (state_11343[(7)]);
var inst_11326 = (state_11343[(8)]);
var inst_11330 = (state_11343[(9)]);
var inst_11330__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11323,inst_11326) : f.call(null,inst_11323,inst_11326));
var inst_11331 = cljs.core.reduced_QMARK_(inst_11330__$1);
var state_11343__$1 = (function (){var statearr_11351 = state_11343;
(statearr_11351[(9)] = inst_11330__$1);

return statearr_11351;
})();
if(inst_11331){
var statearr_11352_13014 = state_11343__$1;
(statearr_11352_13014[(1)] = (8));

} else {
var statearr_11353_13015 = state_11343__$1;
(statearr_11353_13015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (3))){
var inst_11341 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11343__$1,inst_11341);
} else {
if((state_val_11344 === (2))){
var state_11343__$1 = state_11343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11343__$1,(4),ch);
} else {
if((state_val_11344 === (9))){
var inst_11330 = (state_11343[(9)]);
var inst_11323 = inst_11330;
var state_11343__$1 = (function (){var statearr_11354 = state_11343;
(statearr_11354[(7)] = inst_11323);

return statearr_11354;
})();
var statearr_11355_13016 = state_11343__$1;
(statearr_11355_13016[(2)] = null);

(statearr_11355_13016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (5))){
var inst_11323 = (state_11343[(7)]);
var state_11343__$1 = state_11343;
var statearr_11356_13017 = state_11343__$1;
(statearr_11356_13017[(2)] = inst_11323);

(statearr_11356_13017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (10))){
var inst_11337 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
var statearr_11357_13018 = state_11343__$1;
(statearr_11357_13018[(2)] = inst_11337);

(statearr_11357_13018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (8))){
var inst_11330 = (state_11343[(9)]);
var inst_11333 = cljs.core.deref(inst_11330);
var state_11343__$1 = state_11343;
var statearr_11358_13019 = state_11343__$1;
(statearr_11358_13019[(2)] = inst_11333);

(statearr_11358_13019[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10825__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10825__auto____0 = (function (){
var statearr_11359 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11359[(0)] = cljs$core$async$reduce_$_state_machine__10825__auto__);

(statearr_11359[(1)] = (1));

return statearr_11359;
});
var cljs$core$async$reduce_$_state_machine__10825__auto____1 = (function (state_11343){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11343);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11360){var ex__10828__auto__ = e11360;
var statearr_11361_13023 = state_11343;
(statearr_11361_13023[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11343[(4)]))){
var statearr_11362_13024 = state_11343;
(statearr_11362_13024[(1)] = cljs.core.first((state_11343[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13025 = state_11343;
state_11343 = G__13025;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10825__auto__ = function(state_11343){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10825__auto____1.call(this,state_11343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10825__auto____0;
cljs$core$async$reduce_$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10825__auto____1;
return cljs$core$async$reduce_$_state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11363 = f__10889__auto__();
(statearr_11363[(6)] = c__10888__auto__);

return statearr_11363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));

return c__10888__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11369){
var state_val_11370 = (state_11369[(1)]);
if((state_val_11370 === (1))){
var inst_11364 = cljs.core.async.reduce(f__$1,init,ch);
var state_11369__$1 = state_11369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11369__$1,(2),inst_11364);
} else {
if((state_val_11370 === (2))){
var inst_11366 = (state_11369[(2)]);
var inst_11367 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11366) : f__$1.call(null,inst_11366));
var state_11369__$1 = state_11369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11369__$1,inst_11367);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10825__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10825__auto____0 = (function (){
var statearr_11371 = [null,null,null,null,null,null,null];
(statearr_11371[(0)] = cljs$core$async$transduce_$_state_machine__10825__auto__);

(statearr_11371[(1)] = (1));

return statearr_11371;
});
var cljs$core$async$transduce_$_state_machine__10825__auto____1 = (function (state_11369){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11369);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11372){var ex__10828__auto__ = e11372;
var statearr_11373_13026 = state_11369;
(statearr_11373_13026[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11369[(4)]))){
var statearr_11374_13027 = state_11369;
(statearr_11374_13027[(1)] = cljs.core.first((state_11369[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13028 = state_11369;
state_11369 = G__13028;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10825__auto__ = function(state_11369){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10825__auto____1.call(this,state_11369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10825__auto____0;
cljs$core$async$transduce_$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10825__auto____1;
return cljs$core$async$transduce_$_state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11375 = f__10889__auto__();
(statearr_11375[(6)] = c__10888__auto__);

return statearr_11375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));

return c__10888__auto__;
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
var G__11377 = arguments.length;
switch (G__11377) {
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
var c__10888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11403){
var state_val_11404 = (state_11403[(1)]);
if((state_val_11404 === (7))){
var inst_11385 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11405_13030 = state_11403__$1;
(statearr_11405_13030[(2)] = inst_11385);

(statearr_11405_13030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (1))){
var inst_11378 = cljs.core.seq(coll);
var inst_11379 = inst_11378;
var state_11403__$1 = (function (){var statearr_11407 = state_11403;
(statearr_11407[(7)] = inst_11379);

return statearr_11407;
})();
var statearr_11408_13031 = state_11403__$1;
(statearr_11408_13031[(2)] = null);

(statearr_11408_13031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (4))){
var inst_11379 = (state_11403[(7)]);
var inst_11383 = cljs.core.first(inst_11379);
var state_11403__$1 = state_11403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11403__$1,(7),ch,inst_11383);
} else {
if((state_val_11404 === (13))){
var inst_11397 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11409_13032 = state_11403__$1;
(statearr_11409_13032[(2)] = inst_11397);

(statearr_11409_13032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (6))){
var inst_11388 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
if(cljs.core.truth_(inst_11388)){
var statearr_11410_13033 = state_11403__$1;
(statearr_11410_13033[(1)] = (8));

} else {
var statearr_11411_13034 = state_11403__$1;
(statearr_11411_13034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (3))){
var inst_11401 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11403__$1,inst_11401);
} else {
if((state_val_11404 === (12))){
var state_11403__$1 = state_11403;
var statearr_11412_13035 = state_11403__$1;
(statearr_11412_13035[(2)] = null);

(statearr_11412_13035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (2))){
var inst_11379 = (state_11403[(7)]);
var state_11403__$1 = state_11403;
if(cljs.core.truth_(inst_11379)){
var statearr_11413_13037 = state_11403__$1;
(statearr_11413_13037[(1)] = (4));

} else {
var statearr_11414_13038 = state_11403__$1;
(statearr_11414_13038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (11))){
var inst_11394 = cljs.core.async.close_BANG_(ch);
var state_11403__$1 = state_11403;
var statearr_11415_13039 = state_11403__$1;
(statearr_11415_13039[(2)] = inst_11394);

(statearr_11415_13039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (9))){
var state_11403__$1 = state_11403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11416_13040 = state_11403__$1;
(statearr_11416_13040[(1)] = (11));

} else {
var statearr_11417_13041 = state_11403__$1;
(statearr_11417_13041[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (5))){
var inst_11379 = (state_11403[(7)]);
var state_11403__$1 = state_11403;
var statearr_11418_13042 = state_11403__$1;
(statearr_11418_13042[(2)] = inst_11379);

(statearr_11418_13042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (10))){
var inst_11399 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11419_13043 = state_11403__$1;
(statearr_11419_13043[(2)] = inst_11399);

(statearr_11419_13043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (8))){
var inst_11379 = (state_11403[(7)]);
var inst_11390 = cljs.core.next(inst_11379);
var inst_11379__$1 = inst_11390;
var state_11403__$1 = (function (){var statearr_11420 = state_11403;
(statearr_11420[(7)] = inst_11379__$1);

return statearr_11420;
})();
var statearr_11421_13044 = state_11403__$1;
(statearr_11421_13044[(2)] = null);

(statearr_11421_13044[(1)] = (2));


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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_11422 = [null,null,null,null,null,null,null,null];
(statearr_11422[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_11422[(1)] = (1));

return statearr_11422;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_11403){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11403);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11423){var ex__10828__auto__ = e11423;
var statearr_11424_13045 = state_11403;
(statearr_11424_13045[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11403[(4)]))){
var statearr_11425_13046 = state_11403;
(statearr_11425_13046[(1)] = cljs.core.first((state_11403[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13047 = state_11403;
state_11403 = G__13047;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_11403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_11403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11426 = f__10889__auto__();
(statearr_11426[(6)] = c__10888__auto__);

return statearr_11426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));

return c__10888__auto__;
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
var G__11429 = arguments.length;
switch (G__11429) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13049 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13049(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13050 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13050(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13051 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13051(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13058 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13058(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11433 = (function (ch,cs,meta11434){
this.ch = ch;
this.cs = cs;
this.meta11434 = meta11434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11435,meta11434__$1){
var self__ = this;
var _11435__$1 = this;
return (new cljs.core.async.t_cljs$core$async11433(self__.ch,self__.cs,meta11434__$1));
}));

(cljs.core.async.t_cljs$core$async11433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11435){
var self__ = this;
var _11435__$1 = this;
return self__.meta11434;
}));

(cljs.core.async.t_cljs$core$async11433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11433.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11433.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11433.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11433.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11434","meta11434",543459229,null)], null);
}));

(cljs.core.async.t_cljs$core$async11433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11433");

(cljs.core.async.t_cljs$core$async11433.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11433.
 */
cljs.core.async.__GT_t_cljs$core$async11433 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11433(ch__$1,cs__$1,meta11434){
return (new cljs.core.async.t_cljs$core$async11433(ch__$1,cs__$1,meta11434));
});

}

return (new cljs.core.async.t_cljs$core$async11433(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10888__auto___13065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11575){
var state_val_11576 = (state_11575[(1)]);
if((state_val_11576 === (7))){
var inst_11571 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11577_13066 = state_11575__$1;
(statearr_11577_13066[(2)] = inst_11571);

(statearr_11577_13066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (20))){
var inst_11475 = (state_11575[(7)]);
var inst_11488 = cljs.core.first(inst_11475);
var inst_11489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11488,(0),null);
var inst_11490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11488,(1),null);
var state_11575__$1 = (function (){var statearr_11580 = state_11575;
(statearr_11580[(8)] = inst_11489);

return statearr_11580;
})();
if(cljs.core.truth_(inst_11490)){
var statearr_11581_13067 = state_11575__$1;
(statearr_11581_13067[(1)] = (22));

} else {
var statearr_11582_13068 = state_11575__$1;
(statearr_11582_13068[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (27))){
var inst_11525 = (state_11575[(9)]);
var inst_11518 = (state_11575[(10)]);
var inst_11439 = (state_11575[(11)]);
var inst_11520 = (state_11575[(12)]);
var inst_11525__$1 = cljs.core._nth(inst_11518,inst_11520);
var inst_11526 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11525__$1,inst_11439,done);
var state_11575__$1 = (function (){var statearr_11583 = state_11575;
(statearr_11583[(9)] = inst_11525__$1);

return statearr_11583;
})();
if(cljs.core.truth_(inst_11526)){
var statearr_11584_13069 = state_11575__$1;
(statearr_11584_13069[(1)] = (30));

} else {
var statearr_11585_13070 = state_11575__$1;
(statearr_11585_13070[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (1))){
var state_11575__$1 = state_11575;
var statearr_11586_13071 = state_11575__$1;
(statearr_11586_13071[(2)] = null);

(statearr_11586_13071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (24))){
var inst_11475 = (state_11575[(7)]);
var inst_11495 = (state_11575[(2)]);
var inst_11496 = cljs.core.next(inst_11475);
var inst_11448 = inst_11496;
var inst_11449 = null;
var inst_11450 = (0);
var inst_11451 = (0);
var state_11575__$1 = (function (){var statearr_11587 = state_11575;
(statearr_11587[(13)] = inst_11449);

(statearr_11587[(14)] = inst_11450);

(statearr_11587[(15)] = inst_11448);

(statearr_11587[(16)] = inst_11495);

(statearr_11587[(17)] = inst_11451);

return statearr_11587;
})();
var statearr_11588_13072 = state_11575__$1;
(statearr_11588_13072[(2)] = null);

(statearr_11588_13072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (39))){
var state_11575__$1 = state_11575;
var statearr_11592_13073 = state_11575__$1;
(statearr_11592_13073[(2)] = null);

(statearr_11592_13073[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (4))){
var inst_11439 = (state_11575[(11)]);
var inst_11439__$1 = (state_11575[(2)]);
var inst_11440 = (inst_11439__$1 == null);
var state_11575__$1 = (function (){var statearr_11593 = state_11575;
(statearr_11593[(11)] = inst_11439__$1);

return statearr_11593;
})();
if(cljs.core.truth_(inst_11440)){
var statearr_11594_13074 = state_11575__$1;
(statearr_11594_13074[(1)] = (5));

} else {
var statearr_11595_13075 = state_11575__$1;
(statearr_11595_13075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (15))){
var inst_11449 = (state_11575[(13)]);
var inst_11450 = (state_11575[(14)]);
var inst_11448 = (state_11575[(15)]);
var inst_11451 = (state_11575[(17)]);
var inst_11471 = (state_11575[(2)]);
var inst_11472 = (inst_11451 + (1));
var tmp11589 = inst_11449;
var tmp11590 = inst_11450;
var tmp11591 = inst_11448;
var inst_11448__$1 = tmp11591;
var inst_11449__$1 = tmp11589;
var inst_11450__$1 = tmp11590;
var inst_11451__$1 = inst_11472;
var state_11575__$1 = (function (){var statearr_11596 = state_11575;
(statearr_11596[(13)] = inst_11449__$1);

(statearr_11596[(14)] = inst_11450__$1);

(statearr_11596[(18)] = inst_11471);

(statearr_11596[(15)] = inst_11448__$1);

(statearr_11596[(17)] = inst_11451__$1);

return statearr_11596;
})();
var statearr_11597_13078 = state_11575__$1;
(statearr_11597_13078[(2)] = null);

(statearr_11597_13078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (21))){
var inst_11499 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11601_13079 = state_11575__$1;
(statearr_11601_13079[(2)] = inst_11499);

(statearr_11601_13079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (31))){
var inst_11525 = (state_11575[(9)]);
var inst_11529 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11525);
var state_11575__$1 = state_11575;
var statearr_11602_13082 = state_11575__$1;
(statearr_11602_13082[(2)] = inst_11529);

(statearr_11602_13082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (32))){
var inst_11519 = (state_11575[(19)]);
var inst_11518 = (state_11575[(10)]);
var inst_11520 = (state_11575[(12)]);
var inst_11517 = (state_11575[(20)]);
var inst_11531 = (state_11575[(2)]);
var inst_11532 = (inst_11520 + (1));
var tmp11598 = inst_11519;
var tmp11599 = inst_11518;
var tmp11600 = inst_11517;
var inst_11517__$1 = tmp11600;
var inst_11518__$1 = tmp11599;
var inst_11519__$1 = tmp11598;
var inst_11520__$1 = inst_11532;
var state_11575__$1 = (function (){var statearr_11603 = state_11575;
(statearr_11603[(19)] = inst_11519__$1);

(statearr_11603[(21)] = inst_11531);

(statearr_11603[(10)] = inst_11518__$1);

(statearr_11603[(12)] = inst_11520__$1);

(statearr_11603[(20)] = inst_11517__$1);

return statearr_11603;
})();
var statearr_11604_13084 = state_11575__$1;
(statearr_11604_13084[(2)] = null);

(statearr_11604_13084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (40))){
var inst_11544 = (state_11575[(22)]);
var inst_11548 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11544);
var state_11575__$1 = state_11575;
var statearr_11605_13085 = state_11575__$1;
(statearr_11605_13085[(2)] = inst_11548);

(statearr_11605_13085[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (33))){
var inst_11535 = (state_11575[(23)]);
var inst_11537 = cljs.core.chunked_seq_QMARK_(inst_11535);
var state_11575__$1 = state_11575;
if(inst_11537){
var statearr_11606_13086 = state_11575__$1;
(statearr_11606_13086[(1)] = (36));

} else {
var statearr_11607_13087 = state_11575__$1;
(statearr_11607_13087[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (13))){
var inst_11465 = (state_11575[(24)]);
var inst_11468 = cljs.core.async.close_BANG_(inst_11465);
var state_11575__$1 = state_11575;
var statearr_11608_13095 = state_11575__$1;
(statearr_11608_13095[(2)] = inst_11468);

(statearr_11608_13095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (22))){
var inst_11489 = (state_11575[(8)]);
var inst_11492 = cljs.core.async.close_BANG_(inst_11489);
var state_11575__$1 = state_11575;
var statearr_11609_13100 = state_11575__$1;
(statearr_11609_13100[(2)] = inst_11492);

(statearr_11609_13100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (36))){
var inst_11535 = (state_11575[(23)]);
var inst_11539 = cljs.core.chunk_first(inst_11535);
var inst_11540 = cljs.core.chunk_rest(inst_11535);
var inst_11541 = cljs.core.count(inst_11539);
var inst_11517 = inst_11540;
var inst_11518 = inst_11539;
var inst_11519 = inst_11541;
var inst_11520 = (0);
var state_11575__$1 = (function (){var statearr_11610 = state_11575;
(statearr_11610[(19)] = inst_11519);

(statearr_11610[(10)] = inst_11518);

(statearr_11610[(12)] = inst_11520);

(statearr_11610[(20)] = inst_11517);

return statearr_11610;
})();
var statearr_11611_13111 = state_11575__$1;
(statearr_11611_13111[(2)] = null);

(statearr_11611_13111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (41))){
var inst_11535 = (state_11575[(23)]);
var inst_11550 = (state_11575[(2)]);
var inst_11551 = cljs.core.next(inst_11535);
var inst_11517 = inst_11551;
var inst_11518 = null;
var inst_11519 = (0);
var inst_11520 = (0);
var state_11575__$1 = (function (){var statearr_11612 = state_11575;
(statearr_11612[(19)] = inst_11519);

(statearr_11612[(10)] = inst_11518);

(statearr_11612[(12)] = inst_11520);

(statearr_11612[(25)] = inst_11550);

(statearr_11612[(20)] = inst_11517);

return statearr_11612;
})();
var statearr_11613_13121 = state_11575__$1;
(statearr_11613_13121[(2)] = null);

(statearr_11613_13121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (43))){
var state_11575__$1 = state_11575;
var statearr_11614_13127 = state_11575__$1;
(statearr_11614_13127[(2)] = null);

(statearr_11614_13127[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (29))){
var inst_11559 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11615_13134 = state_11575__$1;
(statearr_11615_13134[(2)] = inst_11559);

(statearr_11615_13134[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (44))){
var inst_11568 = (state_11575[(2)]);
var state_11575__$1 = (function (){var statearr_11616 = state_11575;
(statearr_11616[(26)] = inst_11568);

return statearr_11616;
})();
var statearr_11617_13140 = state_11575__$1;
(statearr_11617_13140[(2)] = null);

(statearr_11617_13140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (6))){
var inst_11509 = (state_11575[(27)]);
var inst_11508 = cljs.core.deref(cs);
var inst_11509__$1 = cljs.core.keys(inst_11508);
var inst_11510 = cljs.core.count(inst_11509__$1);
var inst_11511 = cljs.core.reset_BANG_(dctr,inst_11510);
var inst_11516 = cljs.core.seq(inst_11509__$1);
var inst_11517 = inst_11516;
var inst_11518 = null;
var inst_11519 = (0);
var inst_11520 = (0);
var state_11575__$1 = (function (){var statearr_11618 = state_11575;
(statearr_11618[(19)] = inst_11519);

(statearr_11618[(28)] = inst_11511);

(statearr_11618[(27)] = inst_11509__$1);

(statearr_11618[(10)] = inst_11518);

(statearr_11618[(12)] = inst_11520);

(statearr_11618[(20)] = inst_11517);

return statearr_11618;
})();
var statearr_11619_13142 = state_11575__$1;
(statearr_11619_13142[(2)] = null);

(statearr_11619_13142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (28))){
var inst_11535 = (state_11575[(23)]);
var inst_11517 = (state_11575[(20)]);
var inst_11535__$1 = cljs.core.seq(inst_11517);
var state_11575__$1 = (function (){var statearr_11620 = state_11575;
(statearr_11620[(23)] = inst_11535__$1);

return statearr_11620;
})();
if(inst_11535__$1){
var statearr_11621_13143 = state_11575__$1;
(statearr_11621_13143[(1)] = (33));

} else {
var statearr_11622_13144 = state_11575__$1;
(statearr_11622_13144[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (25))){
var inst_11519 = (state_11575[(19)]);
var inst_11520 = (state_11575[(12)]);
var inst_11522 = (inst_11520 < inst_11519);
var inst_11523 = inst_11522;
var state_11575__$1 = state_11575;
if(cljs.core.truth_(inst_11523)){
var statearr_11623_13145 = state_11575__$1;
(statearr_11623_13145[(1)] = (27));

} else {
var statearr_11624_13146 = state_11575__$1;
(statearr_11624_13146[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (34))){
var state_11575__$1 = state_11575;
var statearr_11625_13147 = state_11575__$1;
(statearr_11625_13147[(2)] = null);

(statearr_11625_13147[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (17))){
var state_11575__$1 = state_11575;
var statearr_11626_13148 = state_11575__$1;
(statearr_11626_13148[(2)] = null);

(statearr_11626_13148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (3))){
var inst_11573 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11575__$1,inst_11573);
} else {
if((state_val_11576 === (12))){
var inst_11504 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11627_13149 = state_11575__$1;
(statearr_11627_13149[(2)] = inst_11504);

(statearr_11627_13149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (2))){
var state_11575__$1 = state_11575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11575__$1,(4),ch);
} else {
if((state_val_11576 === (23))){
var state_11575__$1 = state_11575;
var statearr_11629_13150 = state_11575__$1;
(statearr_11629_13150[(2)] = null);

(statearr_11629_13150[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (35))){
var inst_11557 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11630_13151 = state_11575__$1;
(statearr_11630_13151[(2)] = inst_11557);

(statearr_11630_13151[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (19))){
var inst_11475 = (state_11575[(7)]);
var inst_11480 = cljs.core.chunk_first(inst_11475);
var inst_11481 = cljs.core.chunk_rest(inst_11475);
var inst_11482 = cljs.core.count(inst_11480);
var inst_11448 = inst_11481;
var inst_11449 = inst_11480;
var inst_11450 = inst_11482;
var inst_11451 = (0);
var state_11575__$1 = (function (){var statearr_11631 = state_11575;
(statearr_11631[(13)] = inst_11449);

(statearr_11631[(14)] = inst_11450);

(statearr_11631[(15)] = inst_11448);

(statearr_11631[(17)] = inst_11451);

return statearr_11631;
})();
var statearr_11632_13152 = state_11575__$1;
(statearr_11632_13152[(2)] = null);

(statearr_11632_13152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (11))){
var inst_11475 = (state_11575[(7)]);
var inst_11448 = (state_11575[(15)]);
var inst_11475__$1 = cljs.core.seq(inst_11448);
var state_11575__$1 = (function (){var statearr_11633 = state_11575;
(statearr_11633[(7)] = inst_11475__$1);

return statearr_11633;
})();
if(inst_11475__$1){
var statearr_11634_13153 = state_11575__$1;
(statearr_11634_13153[(1)] = (16));

} else {
var statearr_11635_13154 = state_11575__$1;
(statearr_11635_13154[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (9))){
var inst_11506 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11636_13155 = state_11575__$1;
(statearr_11636_13155[(2)] = inst_11506);

(statearr_11636_13155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (5))){
var inst_11446 = cljs.core.deref(cs);
var inst_11447 = cljs.core.seq(inst_11446);
var inst_11448 = inst_11447;
var inst_11449 = null;
var inst_11450 = (0);
var inst_11451 = (0);
var state_11575__$1 = (function (){var statearr_11637 = state_11575;
(statearr_11637[(13)] = inst_11449);

(statearr_11637[(14)] = inst_11450);

(statearr_11637[(15)] = inst_11448);

(statearr_11637[(17)] = inst_11451);

return statearr_11637;
})();
var statearr_11638_13156 = state_11575__$1;
(statearr_11638_13156[(2)] = null);

(statearr_11638_13156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (14))){
var state_11575__$1 = state_11575;
var statearr_11639_13157 = state_11575__$1;
(statearr_11639_13157[(2)] = null);

(statearr_11639_13157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (45))){
var inst_11565 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11640_13158 = state_11575__$1;
(statearr_11640_13158[(2)] = inst_11565);

(statearr_11640_13158[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (26))){
var inst_11509 = (state_11575[(27)]);
var inst_11561 = (state_11575[(2)]);
var inst_11562 = cljs.core.seq(inst_11509);
var state_11575__$1 = (function (){var statearr_11641 = state_11575;
(statearr_11641[(29)] = inst_11561);

return statearr_11641;
})();
if(inst_11562){
var statearr_11642_13159 = state_11575__$1;
(statearr_11642_13159[(1)] = (42));

} else {
var statearr_11643_13160 = state_11575__$1;
(statearr_11643_13160[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (16))){
var inst_11475 = (state_11575[(7)]);
var inst_11478 = cljs.core.chunked_seq_QMARK_(inst_11475);
var state_11575__$1 = state_11575;
if(inst_11478){
var statearr_11644_13161 = state_11575__$1;
(statearr_11644_13161[(1)] = (19));

} else {
var statearr_11645_13162 = state_11575__$1;
(statearr_11645_13162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (38))){
var inst_11554 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11646_13163 = state_11575__$1;
(statearr_11646_13163[(2)] = inst_11554);

(statearr_11646_13163[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (30))){
var state_11575__$1 = state_11575;
var statearr_11647_13164 = state_11575__$1;
(statearr_11647_13164[(2)] = null);

(statearr_11647_13164[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (10))){
var inst_11449 = (state_11575[(13)]);
var inst_11451 = (state_11575[(17)]);
var inst_11459 = cljs.core._nth(inst_11449,inst_11451);
var inst_11465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11459,(0),null);
var inst_11466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11459,(1),null);
var state_11575__$1 = (function (){var statearr_11648 = state_11575;
(statearr_11648[(24)] = inst_11465);

return statearr_11648;
})();
if(cljs.core.truth_(inst_11466)){
var statearr_11649_13165 = state_11575__$1;
(statearr_11649_13165[(1)] = (13));

} else {
var statearr_11650_13166 = state_11575__$1;
(statearr_11650_13166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (18))){
var inst_11502 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11651_13167 = state_11575__$1;
(statearr_11651_13167[(2)] = inst_11502);

(statearr_11651_13167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (42))){
var state_11575__$1 = state_11575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11575__$1,(45),dchan);
} else {
if((state_val_11576 === (37))){
var inst_11535 = (state_11575[(23)]);
var inst_11439 = (state_11575[(11)]);
var inst_11544 = (state_11575[(22)]);
var inst_11544__$1 = cljs.core.first(inst_11535);
var inst_11545 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11544__$1,inst_11439,done);
var state_11575__$1 = (function (){var statearr_11652 = state_11575;
(statearr_11652[(22)] = inst_11544__$1);

return statearr_11652;
})();
if(cljs.core.truth_(inst_11545)){
var statearr_11653_13168 = state_11575__$1;
(statearr_11653_13168[(1)] = (39));

} else {
var statearr_11654_13169 = state_11575__$1;
(statearr_11654_13169[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (8))){
var inst_11450 = (state_11575[(14)]);
var inst_11451 = (state_11575[(17)]);
var inst_11453 = (inst_11451 < inst_11450);
var inst_11454 = inst_11453;
var state_11575__$1 = state_11575;
if(cljs.core.truth_(inst_11454)){
var statearr_11655_13170 = state_11575__$1;
(statearr_11655_13170[(1)] = (10));

} else {
var statearr_11656_13171 = state_11575__$1;
(statearr_11656_13171[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10825__auto__ = null;
var cljs$core$async$mult_$_state_machine__10825__auto____0 = (function (){
var statearr_11657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11657[(0)] = cljs$core$async$mult_$_state_machine__10825__auto__);

(statearr_11657[(1)] = (1));

return statearr_11657;
});
var cljs$core$async$mult_$_state_machine__10825__auto____1 = (function (state_11575){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11575);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11658){var ex__10828__auto__ = e11658;
var statearr_11659_13172 = state_11575;
(statearr_11659_13172[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11575[(4)]))){
var statearr_11660_13174 = state_11575;
(statearr_11660_13174[(1)] = cljs.core.first((state_11575[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13177 = state_11575;
state_11575 = G__13177;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10825__auto__ = function(state_11575){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10825__auto____1.call(this,state_11575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10825__auto____0;
cljs$core$async$mult_$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10825__auto____1;
return cljs$core$async$mult_$_state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11661 = f__10889__auto__();
(statearr_11661[(6)] = c__10888__auto___13065);

return statearr_11661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
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
var G__11663 = arguments.length;
switch (G__11663) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13180 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13180(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13181 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13181(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13183 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13183(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13188 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13188(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13190 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13190(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13191 = arguments.length;
var i__4737__auto___13192 = (0);
while(true){
if((i__4737__auto___13192 < len__4736__auto___13191)){
args__4742__auto__.push((arguments[i__4737__auto___13192]));

var G__13193 = (i__4737__auto___13192 + (1));
i__4737__auto___13192 = G__13193;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11672){
var map__11673 = p__11672;
var map__11673__$1 = (((((!((map__11673 == null))))?(((((map__11673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11673):map__11673);
var opts = map__11673__$1;
var statearr_11675_13194 = state;
(statearr_11675_13194[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11676_13195 = state;
(statearr_11676_13195[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11677_13196 = state;
(statearr_11677_13196[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11668){
var G__11669 = cljs.core.first(seq11668);
var seq11668__$1 = cljs.core.next(seq11668);
var G__11670 = cljs.core.first(seq11668__$1);
var seq11668__$2 = cljs.core.next(seq11668__$1);
var G__11671 = cljs.core.first(seq11668__$2);
var seq11668__$3 = cljs.core.next(seq11668__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11669,G__11670,G__11671,seq11668__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11678 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11679){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11679 = meta11679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11680,meta11679__$1){
var self__ = this;
var _11680__$1 = this;
return (new cljs.core.async.t_cljs$core$async11678(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11679__$1));
}));

(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11680){
var self__ = this;
var _11680__$1 = this;
return self__.meta11679;
}));

(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11678.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11679","meta11679",1237021487,null)], null);
}));

(cljs.core.async.t_cljs$core$async11678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11678");

(cljs.core.async.t_cljs$core$async11678.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11678.
 */
cljs.core.async.__GT_t_cljs$core$async11678 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11678(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11679){
return (new cljs.core.async.t_cljs$core$async11678(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11679));
});

}

return (new cljs.core.async.t_cljs$core$async11678(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10888__auto___13204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11788){
var state_val_11789 = (state_11788[(1)]);
if((state_val_11789 === (7))){
var inst_11697 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
var statearr_11790_13205 = state_11788__$1;
(statearr_11790_13205[(2)] = inst_11697);

(statearr_11790_13205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (20))){
var inst_11709 = (state_11788[(7)]);
var state_11788__$1 = state_11788;
var statearr_11791_13206 = state_11788__$1;
(statearr_11791_13206[(2)] = inst_11709);

(statearr_11791_13206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (27))){
var state_11788__$1 = state_11788;
var statearr_11792_13207 = state_11788__$1;
(statearr_11792_13207[(2)] = null);

(statearr_11792_13207[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (1))){
var inst_11684 = (state_11788[(8)]);
var inst_11684__$1 = calc_state();
var inst_11686 = (inst_11684__$1 == null);
var inst_11687 = cljs.core.not(inst_11686);
var state_11788__$1 = (function (){var statearr_11793 = state_11788;
(statearr_11793[(8)] = inst_11684__$1);

return statearr_11793;
})();
if(inst_11687){
var statearr_11794_13208 = state_11788__$1;
(statearr_11794_13208[(1)] = (2));

} else {
var statearr_11795_13209 = state_11788__$1;
(statearr_11795_13209[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (24))){
var inst_11762 = (state_11788[(9)]);
var inst_11742 = (state_11788[(10)]);
var inst_11733 = (state_11788[(11)]);
var inst_11762__$1 = (inst_11733.cljs$core$IFn$_invoke$arity$1 ? inst_11733.cljs$core$IFn$_invoke$arity$1(inst_11742) : inst_11733.call(null,inst_11742));
var state_11788__$1 = (function (){var statearr_11796 = state_11788;
(statearr_11796[(9)] = inst_11762__$1);

return statearr_11796;
})();
if(cljs.core.truth_(inst_11762__$1)){
var statearr_11797_13210 = state_11788__$1;
(statearr_11797_13210[(1)] = (29));

} else {
var statearr_11798_13211 = state_11788__$1;
(statearr_11798_13211[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (4))){
var inst_11700 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
if(cljs.core.truth_(inst_11700)){
var statearr_11799_13212 = state_11788__$1;
(statearr_11799_13212[(1)] = (8));

} else {
var statearr_11800_13213 = state_11788__$1;
(statearr_11800_13213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (15))){
var inst_11727 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
if(cljs.core.truth_(inst_11727)){
var statearr_11801_13214 = state_11788__$1;
(statearr_11801_13214[(1)] = (19));

} else {
var statearr_11802_13215 = state_11788__$1;
(statearr_11802_13215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (21))){
var inst_11732 = (state_11788[(12)]);
var inst_11732__$1 = (state_11788[(2)]);
var inst_11733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11732__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11732__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11732__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11788__$1 = (function (){var statearr_11803 = state_11788;
(statearr_11803[(12)] = inst_11732__$1);

(statearr_11803[(13)] = inst_11734);

(statearr_11803[(11)] = inst_11733);

return statearr_11803;
})();
return cljs.core.async.ioc_alts_BANG_(state_11788__$1,(22),inst_11735);
} else {
if((state_val_11789 === (31))){
var inst_11770 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
if(cljs.core.truth_(inst_11770)){
var statearr_11804_13216 = state_11788__$1;
(statearr_11804_13216[(1)] = (32));

} else {
var statearr_11805_13217 = state_11788__$1;
(statearr_11805_13217[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (32))){
var inst_11741 = (state_11788[(14)]);
var state_11788__$1 = state_11788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11788__$1,(35),out,inst_11741);
} else {
if((state_val_11789 === (33))){
var inst_11732 = (state_11788[(12)]);
var inst_11709 = inst_11732;
var state_11788__$1 = (function (){var statearr_11808 = state_11788;
(statearr_11808[(7)] = inst_11709);

return statearr_11808;
})();
var statearr_11809_13218 = state_11788__$1;
(statearr_11809_13218[(2)] = null);

(statearr_11809_13218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (13))){
var inst_11709 = (state_11788[(7)]);
var inst_11716 = inst_11709.cljs$lang$protocol_mask$partition0$;
var inst_11717 = (inst_11716 & (64));
var inst_11718 = inst_11709.cljs$core$ISeq$;
var inst_11719 = (cljs.core.PROTOCOL_SENTINEL === inst_11718);
var inst_11720 = ((inst_11717) || (inst_11719));
var state_11788__$1 = state_11788;
if(cljs.core.truth_(inst_11720)){
var statearr_11810_13219 = state_11788__$1;
(statearr_11810_13219[(1)] = (16));

} else {
var statearr_11811_13220 = state_11788__$1;
(statearr_11811_13220[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (22))){
var inst_11742 = (state_11788[(10)]);
var inst_11741 = (state_11788[(14)]);
var inst_11740 = (state_11788[(2)]);
var inst_11741__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11740,(0),null);
var inst_11742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11740,(1),null);
var inst_11744 = (inst_11741__$1 == null);
var inst_11745 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11742__$1,change);
var inst_11746 = ((inst_11744) || (inst_11745));
var state_11788__$1 = (function (){var statearr_11812 = state_11788;
(statearr_11812[(10)] = inst_11742__$1);

(statearr_11812[(14)] = inst_11741__$1);

return statearr_11812;
})();
if(cljs.core.truth_(inst_11746)){
var statearr_11813_13221 = state_11788__$1;
(statearr_11813_13221[(1)] = (23));

} else {
var statearr_11814_13222 = state_11788__$1;
(statearr_11814_13222[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (36))){
var inst_11732 = (state_11788[(12)]);
var inst_11709 = inst_11732;
var state_11788__$1 = (function (){var statearr_11815 = state_11788;
(statearr_11815[(7)] = inst_11709);

return statearr_11815;
})();
var statearr_11816_13225 = state_11788__$1;
(statearr_11816_13225[(2)] = null);

(statearr_11816_13225[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (29))){
var inst_11762 = (state_11788[(9)]);
var state_11788__$1 = state_11788;
var statearr_11817_13226 = state_11788__$1;
(statearr_11817_13226[(2)] = inst_11762);

(statearr_11817_13226[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (6))){
var state_11788__$1 = state_11788;
var statearr_11818_13228 = state_11788__$1;
(statearr_11818_13228[(2)] = false);

(statearr_11818_13228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (28))){
var inst_11753 = (state_11788[(2)]);
var inst_11757 = calc_state();
var inst_11709 = inst_11757;
var state_11788__$1 = (function (){var statearr_11820 = state_11788;
(statearr_11820[(7)] = inst_11709);

(statearr_11820[(15)] = inst_11753);

return statearr_11820;
})();
var statearr_11821_13229 = state_11788__$1;
(statearr_11821_13229[(2)] = null);

(statearr_11821_13229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (25))){
var inst_11784 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
var statearr_11822_13231 = state_11788__$1;
(statearr_11822_13231[(2)] = inst_11784);

(statearr_11822_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (34))){
var inst_11782 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
var statearr_11823_13232 = state_11788__$1;
(statearr_11823_13232[(2)] = inst_11782);

(statearr_11823_13232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (17))){
var state_11788__$1 = state_11788;
var statearr_11824_13233 = state_11788__$1;
(statearr_11824_13233[(2)] = false);

(statearr_11824_13233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (3))){
var state_11788__$1 = state_11788;
var statearr_11825_13235 = state_11788__$1;
(statearr_11825_13235[(2)] = false);

(statearr_11825_13235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (12))){
var inst_11786 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11788__$1,inst_11786);
} else {
if((state_val_11789 === (2))){
var inst_11684 = (state_11788[(8)]);
var inst_11689 = inst_11684.cljs$lang$protocol_mask$partition0$;
var inst_11690 = (inst_11689 & (64));
var inst_11691 = inst_11684.cljs$core$ISeq$;
var inst_11692 = (cljs.core.PROTOCOL_SENTINEL === inst_11691);
var inst_11693 = ((inst_11690) || (inst_11692));
var state_11788__$1 = state_11788;
if(cljs.core.truth_(inst_11693)){
var statearr_11826_13237 = state_11788__$1;
(statearr_11826_13237[(1)] = (5));

} else {
var statearr_11827_13238 = state_11788__$1;
(statearr_11827_13238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (23))){
var inst_11741 = (state_11788[(14)]);
var inst_11748 = (inst_11741 == null);
var state_11788__$1 = state_11788;
if(cljs.core.truth_(inst_11748)){
var statearr_11828_13239 = state_11788__$1;
(statearr_11828_13239[(1)] = (26));

} else {
var statearr_11829_13240 = state_11788__$1;
(statearr_11829_13240[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (35))){
var inst_11773 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
if(cljs.core.truth_(inst_11773)){
var statearr_11830_13241 = state_11788__$1;
(statearr_11830_13241[(1)] = (36));

} else {
var statearr_11831_13242 = state_11788__$1;
(statearr_11831_13242[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (19))){
var inst_11709 = (state_11788[(7)]);
var inst_11729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11709);
var state_11788__$1 = state_11788;
var statearr_11832_13243 = state_11788__$1;
(statearr_11832_13243[(2)] = inst_11729);

(statearr_11832_13243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (11))){
var inst_11709 = (state_11788[(7)]);
var inst_11713 = (inst_11709 == null);
var inst_11714 = cljs.core.not(inst_11713);
var state_11788__$1 = state_11788;
if(inst_11714){
var statearr_11833_13244 = state_11788__$1;
(statearr_11833_13244[(1)] = (13));

} else {
var statearr_11834_13245 = state_11788__$1;
(statearr_11834_13245[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (9))){
var inst_11684 = (state_11788[(8)]);
var state_11788__$1 = state_11788;
var statearr_11835_13246 = state_11788__$1;
(statearr_11835_13246[(2)] = inst_11684);

(statearr_11835_13246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (5))){
var state_11788__$1 = state_11788;
var statearr_11836_13247 = state_11788__$1;
(statearr_11836_13247[(2)] = true);

(statearr_11836_13247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (14))){
var state_11788__$1 = state_11788;
var statearr_11837_13248 = state_11788__$1;
(statearr_11837_13248[(2)] = false);

(statearr_11837_13248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (26))){
var inst_11742 = (state_11788[(10)]);
var inst_11750 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11742);
var state_11788__$1 = state_11788;
var statearr_11838_13249 = state_11788__$1;
(statearr_11838_13249[(2)] = inst_11750);

(statearr_11838_13249[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (16))){
var state_11788__$1 = state_11788;
var statearr_11839_13250 = state_11788__$1;
(statearr_11839_13250[(2)] = true);

(statearr_11839_13250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (38))){
var inst_11778 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
var statearr_11850_13251 = state_11788__$1;
(statearr_11850_13251[(2)] = inst_11778);

(statearr_11850_13251[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (30))){
var inst_11734 = (state_11788[(13)]);
var inst_11742 = (state_11788[(10)]);
var inst_11733 = (state_11788[(11)]);
var inst_11765 = cljs.core.empty_QMARK_(inst_11733);
var inst_11766 = (inst_11734.cljs$core$IFn$_invoke$arity$1 ? inst_11734.cljs$core$IFn$_invoke$arity$1(inst_11742) : inst_11734.call(null,inst_11742));
var inst_11767 = cljs.core.not(inst_11766);
var inst_11768 = ((inst_11765) && (inst_11767));
var state_11788__$1 = state_11788;
var statearr_11851_13252 = state_11788__$1;
(statearr_11851_13252[(2)] = inst_11768);

(statearr_11851_13252[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (10))){
var inst_11684 = (state_11788[(8)]);
var inst_11705 = (state_11788[(2)]);
var inst_11706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11705,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11705,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11705,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11709 = inst_11684;
var state_11788__$1 = (function (){var statearr_11852 = state_11788;
(statearr_11852[(16)] = inst_11706);

(statearr_11852[(7)] = inst_11709);

(statearr_11852[(17)] = inst_11708);

(statearr_11852[(18)] = inst_11707);

return statearr_11852;
})();
var statearr_11853_13253 = state_11788__$1;
(statearr_11853_13253[(2)] = null);

(statearr_11853_13253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (18))){
var inst_11724 = (state_11788[(2)]);
var state_11788__$1 = state_11788;
var statearr_11857_13254 = state_11788__$1;
(statearr_11857_13254[(2)] = inst_11724);

(statearr_11857_13254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (37))){
var state_11788__$1 = state_11788;
var statearr_11858_13255 = state_11788__$1;
(statearr_11858_13255[(2)] = null);

(statearr_11858_13255[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11789 === (8))){
var inst_11684 = (state_11788[(8)]);
var inst_11702 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11684);
var state_11788__$1 = state_11788;
var statearr_11859_13256 = state_11788__$1;
(statearr_11859_13256[(2)] = inst_11702);

(statearr_11859_13256[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10825__auto__ = null;
var cljs$core$async$mix_$_state_machine__10825__auto____0 = (function (){
var statearr_11860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11860[(0)] = cljs$core$async$mix_$_state_machine__10825__auto__);

(statearr_11860[(1)] = (1));

return statearr_11860;
});
var cljs$core$async$mix_$_state_machine__10825__auto____1 = (function (state_11788){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11788);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e11861){var ex__10828__auto__ = e11861;
var statearr_11862_13257 = state_11788;
(statearr_11862_13257[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11788[(4)]))){
var statearr_11863_13258 = state_11788;
(statearr_11863_13258[(1)] = cljs.core.first((state_11788[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13259 = state_11788;
state_11788 = G__13259;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10825__auto__ = function(state_11788){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10825__auto____1.call(this,state_11788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10825__auto____0;
cljs$core$async$mix_$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10825__auto____1;
return cljs$core$async$mix_$_state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_11864 = f__10889__auto__();
(statearr_11864[(6)] = c__10888__auto___13204);

return statearr_11864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13261 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13261(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13262 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13262(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13263 = (function() {
var G__13264 = null;
var G__13264__1 = (function (p){
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
var G__13264__2 = (function (p,v){
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
G__13264 = function(p,v){
switch(arguments.length){
case 1:
return G__13264__1.call(this,p);
case 2:
return G__13264__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13264.cljs$core$IFn$_invoke$arity$1 = G__13264__1;
G__13264.cljs$core$IFn$_invoke$arity$2 = G__13264__2;
return G__13264;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11909 = arguments.length;
switch (G__11909) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13263(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13263(p,v);
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
var G__11916 = arguments.length;
switch (G__11916) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11914_SHARP_){
if(cljs.core.truth_((p1__11914_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11914_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11914_SHARP_.call(null,topic)))){
return p1__11914_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11914_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11919 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11920){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11920 = meta11920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11921,meta11920__$1){
var self__ = this;
var _11921__$1 = this;
return (new cljs.core.async.t_cljs$core$async11919(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11920__$1));
}));

(cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11921){
var self__ = this;
var _11921__$1 = this;
return self__.meta11920;
}));

(cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11920","meta11920",1799416536,null)], null);
}));

(cljs.core.async.t_cljs$core$async11919.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11919");

(cljs.core.async.t_cljs$core$async11919.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11919");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11919.
 */
cljs.core.async.__GT_t_cljs$core$async11919 = (function cljs$core$async$__GT_t_cljs$core$async11919(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11920){
return (new cljs.core.async.t_cljs$core$async11919(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11920));
});

}

return (new cljs.core.async.t_cljs$core$async11919(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10888__auto___13272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_11993){
var state_val_11994 = (state_11993[(1)]);
if((state_val_11994 === (7))){
var inst_11989 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_11995_13273 = state_11993__$1;
(statearr_11995_13273[(2)] = inst_11989);

(statearr_11995_13273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (20))){
var state_11993__$1 = state_11993;
var statearr_11996_13274 = state_11993__$1;
(statearr_11996_13274[(2)] = null);

(statearr_11996_13274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (1))){
var state_11993__$1 = state_11993;
var statearr_11997_13275 = state_11993__$1;
(statearr_11997_13275[(2)] = null);

(statearr_11997_13275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (24))){
var inst_11972 = (state_11993[(7)]);
var inst_11981 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11972);
var state_11993__$1 = state_11993;
var statearr_11998_13276 = state_11993__$1;
(statearr_11998_13276[(2)] = inst_11981);

(statearr_11998_13276[(1)] = (25));


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
var statearr_12000_13277 = state_11993__$1;
(statearr_12000_13277[(1)] = (5));

} else {
var statearr_12001_13278 = state_11993__$1;
(statearr_12001_13278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (15))){
var inst_11966 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_12002_13280 = state_11993__$1;
(statearr_12002_13280[(2)] = inst_11966);

(statearr_12002_13280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (21))){
var inst_11986 = (state_11993[(2)]);
var state_11993__$1 = (function (){var statearr_12003 = state_11993;
(statearr_12003[(9)] = inst_11986);

return statearr_12003;
})();
var statearr_12004_13281 = state_11993__$1;
(statearr_12004_13281[(2)] = null);

(statearr_12004_13281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (13))){
var inst_11948 = (state_11993[(10)]);
var inst_11950 = cljs.core.chunked_seq_QMARK_(inst_11948);
var state_11993__$1 = state_11993;
if(inst_11950){
var statearr_12005_13282 = state_11993__$1;
(statearr_12005_13282[(1)] = (16));

} else {
var statearr_12006_13283 = state_11993__$1;
(statearr_12006_13283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (22))){
var inst_11978 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
if(cljs.core.truth_(inst_11978)){
var statearr_12007_13284 = state_11993__$1;
(statearr_12007_13284[(1)] = (23));

} else {
var statearr_12008_13286 = state_11993__$1;
(statearr_12008_13286[(1)] = (24));

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
var statearr_12010_13287 = state_11993__$1;
(statearr_12010_13287[(1)] = (19));

} else {
var statearr_12011_13288 = state_11993__$1;
(statearr_12011_13288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (25))){
var inst_11983 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_12012_13290 = state_11993__$1;
(statearr_12012_13290[(2)] = inst_11983);

(statearr_12012_13290[(1)] = (21));


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
var state_11993__$1 = (function (){var statearr_12015 = state_11993;
(statearr_12015[(12)] = inst_11936);

(statearr_12015[(13)] = inst_11934);

(statearr_12015[(14)] = inst_11937);

(statearr_12015[(15)] = inst_11959);

(statearr_12015[(16)] = inst_11935);

return statearr_12015;
})();
var statearr_12018_13292 = state_11993__$1;
(statearr_12018_13292[(2)] = null);

(statearr_12018_13292[(1)] = (8));


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
var statearr_12021_13293 = state_11993__$1;
(statearr_12021_13293[(2)] = inst_11968);

(statearr_12021_13293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (2))){
var state_11993__$1 = state_11993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11993__$1,(4),ch);
} else {
if((state_val_11994 === (23))){
var state_11993__$1 = state_11993;
var statearr_12022_13295 = state_11993__$1;
(statearr_12022_13295[(2)] = null);

(statearr_12022_13295[(1)] = (25));


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
var state_11993__$1 = (function (){var statearr_12023 = state_11993;
(statearr_12023[(10)] = inst_11948__$1);

return statearr_12023;
})();
if(inst_11948__$1){
var statearr_12024_13296 = state_11993__$1;
(statearr_12024_13296[(1)] = (13));

} else {
var statearr_12025_13298 = state_11993__$1;
(statearr_12025_13298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (9))){
var inst_11970 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_12026_13299 = state_11993__$1;
(statearr_12026_13299[(2)] = inst_11970);

(statearr_12026_13299[(1)] = (7));


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
var state_11993__$1 = (function (){var statearr_12027 = state_11993;
(statearr_12027[(12)] = inst_11936);

(statearr_12027[(13)] = inst_11934);

(statearr_12027[(14)] = inst_11937);

(statearr_12027[(16)] = inst_11935);

return statearr_12027;
})();
var statearr_12028_13300 = state_11993__$1;
(statearr_12028_13300[(2)] = null);

(statearr_12028_13300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (14))){
var state_11993__$1 = state_11993;
var statearr_12034_13301 = state_11993__$1;
(statearr_12034_13301[(2)] = null);

(statearr_12034_13301[(1)] = (15));


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
var state_11993__$1 = (function (){var statearr_12035 = state_11993;
(statearr_12035[(12)] = inst_11936);

(statearr_12035[(13)] = inst_11934);

(statearr_12035[(14)] = inst_11937);

(statearr_12035[(16)] = inst_11935);

return statearr_12035;
})();
var statearr_12036_13303 = state_11993__$1;
(statearr_12036_13303[(2)] = null);

(statearr_12036_13303[(1)] = (8));


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
var tmp12029 = inst_11936;
var tmp12030 = inst_11934;
var tmp12031 = inst_11935;
var inst_11934__$1 = tmp12030;
var inst_11935__$1 = tmp12031;
var inst_11936__$1 = tmp12029;
var inst_11937__$1 = inst_11945;
var state_11993__$1 = (function (){var statearr_12037 = state_11993;
(statearr_12037[(17)] = inst_11944);

(statearr_12037[(12)] = inst_11936__$1);

(statearr_12037[(13)] = inst_11934__$1);

(statearr_12037[(14)] = inst_11937__$1);

(statearr_12037[(16)] = inst_11935__$1);

return statearr_12037;
})();
var statearr_12038_13304 = state_11993__$1;
(statearr_12038_13304[(2)] = null);

(statearr_12038_13304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (18))){
var inst_11963 = (state_11993[(2)]);
var state_11993__$1 = state_11993;
var statearr_12039_13305 = state_11993__$1;
(statearr_12039_13305[(2)] = inst_11963);

(statearr_12039_13305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11994 === (8))){
var inst_11936 = (state_11993[(12)]);
var inst_11937 = (state_11993[(14)]);
var inst_11939 = (inst_11937 < inst_11936);
var inst_11940 = inst_11939;
var state_11993__$1 = state_11993;
if(cljs.core.truth_(inst_11940)){
var statearr_12040_13306 = state_11993__$1;
(statearr_12040_13306[(1)] = (10));

} else {
var statearr_12041_13307 = state_11993__$1;
(statearr_12041_13307[(1)] = (11));

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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_12042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12042[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_12042[(1)] = (1));

return statearr_12042;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_11993){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_11993);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e12043){var ex__10828__auto__ = e12043;
var statearr_12044_13308 = state_11993;
(statearr_12044_13308[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_11993[(4)]))){
var statearr_12045_13309 = state_11993;
(statearr_12045_13309[(1)] = cljs.core.first((state_11993[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13310 = state_11993;
state_11993 = G__13310;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_11993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_11993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_12046 = f__10889__auto__();
(statearr_12046[(6)] = c__10888__auto___13272);

return statearr_12046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
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
var G__12048 = arguments.length;
switch (G__12048) {
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
var G__12054 = arguments.length;
switch (G__12054) {
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
var G__12056 = arguments.length;
switch (G__12056) {
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
var c__10888__auto___13314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_12099){
var state_val_12100 = (state_12099[(1)]);
if((state_val_12100 === (7))){
var state_12099__$1 = state_12099;
var statearr_12101_13315 = state_12099__$1;
(statearr_12101_13315[(2)] = null);

(statearr_12101_13315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (1))){
var state_12099__$1 = state_12099;
var statearr_12102_13316 = state_12099__$1;
(statearr_12102_13316[(2)] = null);

(statearr_12102_13316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (4))){
var inst_12060 = (state_12099[(7)]);
var inst_12059 = (state_12099[(8)]);
var inst_12062 = (inst_12060 < inst_12059);
var state_12099__$1 = state_12099;
if(cljs.core.truth_(inst_12062)){
var statearr_12109_13317 = state_12099__$1;
(statearr_12109_13317[(1)] = (6));

} else {
var statearr_12110_13318 = state_12099__$1;
(statearr_12110_13318[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (15))){
var inst_12085 = (state_12099[(9)]);
var inst_12090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12085);
var state_12099__$1 = state_12099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12099__$1,(17),out,inst_12090);
} else {
if((state_val_12100 === (13))){
var inst_12085 = (state_12099[(9)]);
var inst_12085__$1 = (state_12099[(2)]);
var inst_12086 = cljs.core.some(cljs.core.nil_QMARK_,inst_12085__$1);
var state_12099__$1 = (function (){var statearr_12111 = state_12099;
(statearr_12111[(9)] = inst_12085__$1);

return statearr_12111;
})();
if(cljs.core.truth_(inst_12086)){
var statearr_12112_13319 = state_12099__$1;
(statearr_12112_13319[(1)] = (14));

} else {
var statearr_12113_13320 = state_12099__$1;
(statearr_12113_13320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (6))){
var state_12099__$1 = state_12099;
var statearr_12114_13321 = state_12099__$1;
(statearr_12114_13321[(2)] = null);

(statearr_12114_13321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (17))){
var inst_12092 = (state_12099[(2)]);
var state_12099__$1 = (function (){var statearr_12116 = state_12099;
(statearr_12116[(10)] = inst_12092);

return statearr_12116;
})();
var statearr_12117_13322 = state_12099__$1;
(statearr_12117_13322[(2)] = null);

(statearr_12117_13322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (3))){
var inst_12097 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12099__$1,inst_12097);
} else {
if((state_val_12100 === (12))){
var _ = (function (){var statearr_12122 = state_12099;
(statearr_12122[(4)] = cljs.core.rest((state_12099[(4)])));

return statearr_12122;
})();
var state_12099__$1 = state_12099;
var ex12115 = (state_12099__$1[(2)]);
var statearr_12123_13323 = state_12099__$1;
(statearr_12123_13323[(5)] = ex12115);


if((ex12115 instanceof Object)){
var statearr_12124_13324 = state_12099__$1;
(statearr_12124_13324[(1)] = (11));

(statearr_12124_13324[(5)] = null);

} else {
throw ex12115;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (2))){
var inst_12058 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12059 = cnt;
var inst_12060 = (0);
var state_12099__$1 = (function (){var statearr_12125 = state_12099;
(statearr_12125[(11)] = inst_12058);

(statearr_12125[(7)] = inst_12060);

(statearr_12125[(8)] = inst_12059);

return statearr_12125;
})();
var statearr_12126_13325 = state_12099__$1;
(statearr_12126_13325[(2)] = null);

(statearr_12126_13325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (11))){
var inst_12064 = (state_12099[(2)]);
var inst_12065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12099__$1 = (function (){var statearr_12127 = state_12099;
(statearr_12127[(12)] = inst_12064);

return statearr_12127;
})();
var statearr_12128_13326 = state_12099__$1;
(statearr_12128_13326[(2)] = inst_12065);

(statearr_12128_13326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (9))){
var inst_12060 = (state_12099[(7)]);
var _ = (function (){var statearr_12129 = state_12099;
(statearr_12129[(4)] = cljs.core.cons((12),(state_12099[(4)])));

return statearr_12129;
})();
var inst_12071 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12060) : chs__$1.call(null,inst_12060));
var inst_12072 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12060) : done.call(null,inst_12060));
var inst_12073 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12071,inst_12072);
var ___$1 = (function (){var statearr_12130 = state_12099;
(statearr_12130[(4)] = cljs.core.rest((state_12099[(4)])));

return statearr_12130;
})();
var state_12099__$1 = state_12099;
var statearr_12131_13327 = state_12099__$1;
(statearr_12131_13327[(2)] = inst_12073);

(statearr_12131_13327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (5))){
var inst_12083 = (state_12099[(2)]);
var state_12099__$1 = (function (){var statearr_12132 = state_12099;
(statearr_12132[(13)] = inst_12083);

return statearr_12132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12099__$1,(13),dchan);
} else {
if((state_val_12100 === (14))){
var inst_12088 = cljs.core.async.close_BANG_(out);
var state_12099__$1 = state_12099;
var statearr_12133_13328 = state_12099__$1;
(statearr_12133_13328[(2)] = inst_12088);

(statearr_12133_13328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (16))){
var inst_12095 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
var statearr_12134_13329 = state_12099__$1;
(statearr_12134_13329[(2)] = inst_12095);

(statearr_12134_13329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (10))){
var inst_12060 = (state_12099[(7)]);
var inst_12076 = (state_12099[(2)]);
var inst_12077 = (inst_12060 + (1));
var inst_12060__$1 = inst_12077;
var state_12099__$1 = (function (){var statearr_12135 = state_12099;
(statearr_12135[(7)] = inst_12060__$1);

(statearr_12135[(14)] = inst_12076);

return statearr_12135;
})();
var statearr_12136_13330 = state_12099__$1;
(statearr_12136_13330[(2)] = null);

(statearr_12136_13330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (8))){
var inst_12081 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
var statearr_12137_13331 = state_12099__$1;
(statearr_12137_13331[(2)] = inst_12081);

(statearr_12137_13331[(1)] = (5));


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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_12139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12139[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_12139[(1)] = (1));

return statearr_12139;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_12099){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_12099);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e12140){var ex__10828__auto__ = e12140;
var statearr_12141_13332 = state_12099;
(statearr_12141_13332[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_12099[(4)]))){
var statearr_12142_13333 = state_12099;
(statearr_12142_13333[(1)] = cljs.core.first((state_12099[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13334 = state_12099;
state_12099 = G__13334;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_12099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_12099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_12143 = f__10889__auto__();
(statearr_12143[(6)] = c__10888__auto___13314);

return statearr_12143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
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
var G__12146 = arguments.length;
switch (G__12146) {
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
var c__10888__auto___13336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_12178){
var state_val_12179 = (state_12178[(1)]);
if((state_val_12179 === (7))){
var inst_12157 = (state_12178[(7)]);
var inst_12158 = (state_12178[(8)]);
var inst_12157__$1 = (state_12178[(2)]);
var inst_12158__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12157__$1,(0),null);
var inst_12159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12157__$1,(1),null);
var inst_12160 = (inst_12158__$1 == null);
var state_12178__$1 = (function (){var statearr_12180 = state_12178;
(statearr_12180[(7)] = inst_12157__$1);

(statearr_12180[(8)] = inst_12158__$1);

(statearr_12180[(9)] = inst_12159);

return statearr_12180;
})();
if(cljs.core.truth_(inst_12160)){
var statearr_12181_13337 = state_12178__$1;
(statearr_12181_13337[(1)] = (8));

} else {
var statearr_12182_13338 = state_12178__$1;
(statearr_12182_13338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (1))){
var inst_12147 = cljs.core.vec(chs);
var inst_12148 = inst_12147;
var state_12178__$1 = (function (){var statearr_12183 = state_12178;
(statearr_12183[(10)] = inst_12148);

return statearr_12183;
})();
var statearr_12184_13339 = state_12178__$1;
(statearr_12184_13339[(2)] = null);

(statearr_12184_13339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (4))){
var inst_12148 = (state_12178[(10)]);
var state_12178__$1 = state_12178;
return cljs.core.async.ioc_alts_BANG_(state_12178__$1,(7),inst_12148);
} else {
if((state_val_12179 === (6))){
var inst_12174 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
var statearr_12185_13340 = state_12178__$1;
(statearr_12185_13340[(2)] = inst_12174);

(statearr_12185_13340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (3))){
var inst_12176 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12178__$1,inst_12176);
} else {
if((state_val_12179 === (2))){
var inst_12148 = (state_12178[(10)]);
var inst_12150 = cljs.core.count(inst_12148);
var inst_12151 = (inst_12150 > (0));
var state_12178__$1 = state_12178;
if(cljs.core.truth_(inst_12151)){
var statearr_12187_13341 = state_12178__$1;
(statearr_12187_13341[(1)] = (4));

} else {
var statearr_12188_13342 = state_12178__$1;
(statearr_12188_13342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (11))){
var inst_12148 = (state_12178[(10)]);
var inst_12167 = (state_12178[(2)]);
var tmp12186 = inst_12148;
var inst_12148__$1 = tmp12186;
var state_12178__$1 = (function (){var statearr_12189 = state_12178;
(statearr_12189[(10)] = inst_12148__$1);

(statearr_12189[(11)] = inst_12167);

return statearr_12189;
})();
var statearr_12190_13343 = state_12178__$1;
(statearr_12190_13343[(2)] = null);

(statearr_12190_13343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (9))){
var inst_12158 = (state_12178[(8)]);
var state_12178__$1 = state_12178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12178__$1,(11),out,inst_12158);
} else {
if((state_val_12179 === (5))){
var inst_12172 = cljs.core.async.close_BANG_(out);
var state_12178__$1 = state_12178;
var statearr_12191_13344 = state_12178__$1;
(statearr_12191_13344[(2)] = inst_12172);

(statearr_12191_13344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (10))){
var inst_12170 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
var statearr_12192_13345 = state_12178__$1;
(statearr_12192_13345[(2)] = inst_12170);

(statearr_12192_13345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (8))){
var inst_12148 = (state_12178[(10)]);
var inst_12157 = (state_12178[(7)]);
var inst_12158 = (state_12178[(8)]);
var inst_12159 = (state_12178[(9)]);
var inst_12162 = (function (){var cs = inst_12148;
var vec__12153 = inst_12157;
var v = inst_12158;
var c = inst_12159;
return (function (p1__12144_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12144_SHARP_);
});
})();
var inst_12163 = cljs.core.filterv(inst_12162,inst_12148);
var inst_12148__$1 = inst_12163;
var state_12178__$1 = (function (){var statearr_12193 = state_12178;
(statearr_12193[(10)] = inst_12148__$1);

return statearr_12193;
})();
var statearr_12194_13346 = state_12178__$1;
(statearr_12194_13346[(2)] = null);

(statearr_12194_13346[(1)] = (2));


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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_12195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12195[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_12195[(1)] = (1));

return statearr_12195;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_12178){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_12178);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e12196){var ex__10828__auto__ = e12196;
var statearr_12197_13347 = state_12178;
(statearr_12197_13347[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_12178[(4)]))){
var statearr_12198_13348 = state_12178;
(statearr_12198_13348[(1)] = cljs.core.first((state_12178[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13349 = state_12178;
state_12178 = G__13349;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_12178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_12178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_12199 = f__10889__auto__();
(statearr_12199[(6)] = c__10888__auto___13336);

return statearr_12199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
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
var G__12201 = arguments.length;
switch (G__12201) {
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
var c__10888__auto___13351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_12226){
var state_val_12227 = (state_12226[(1)]);
if((state_val_12227 === (7))){
var inst_12208 = (state_12226[(7)]);
var inst_12208__$1 = (state_12226[(2)]);
var inst_12209 = (inst_12208__$1 == null);
var inst_12210 = cljs.core.not(inst_12209);
var state_12226__$1 = (function (){var statearr_12228 = state_12226;
(statearr_12228[(7)] = inst_12208__$1);

return statearr_12228;
})();
if(inst_12210){
var statearr_12229_13352 = state_12226__$1;
(statearr_12229_13352[(1)] = (8));

} else {
var statearr_12230_13353 = state_12226__$1;
(statearr_12230_13353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (1))){
var inst_12203 = (0);
var state_12226__$1 = (function (){var statearr_12231 = state_12226;
(statearr_12231[(8)] = inst_12203);

return statearr_12231;
})();
var statearr_12233_13354 = state_12226__$1;
(statearr_12233_13354[(2)] = null);

(statearr_12233_13354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (4))){
var state_12226__$1 = state_12226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12226__$1,(7),ch);
} else {
if((state_val_12227 === (6))){
var inst_12221 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12235_13355 = state_12226__$1;
(statearr_12235_13355[(2)] = inst_12221);

(statearr_12235_13355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (3))){
var inst_12223 = (state_12226[(2)]);
var inst_12224 = cljs.core.async.close_BANG_(out);
var state_12226__$1 = (function (){var statearr_12244 = state_12226;
(statearr_12244[(9)] = inst_12223);

return statearr_12244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12226__$1,inst_12224);
} else {
if((state_val_12227 === (2))){
var inst_12203 = (state_12226[(8)]);
var inst_12205 = (inst_12203 < n);
var state_12226__$1 = state_12226;
if(cljs.core.truth_(inst_12205)){
var statearr_12245_13356 = state_12226__$1;
(statearr_12245_13356[(1)] = (4));

} else {
var statearr_12246_13357 = state_12226__$1;
(statearr_12246_13357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (11))){
var inst_12203 = (state_12226[(8)]);
var inst_12213 = (state_12226[(2)]);
var inst_12214 = (inst_12203 + (1));
var inst_12203__$1 = inst_12214;
var state_12226__$1 = (function (){var statearr_12247 = state_12226;
(statearr_12247[(10)] = inst_12213);

(statearr_12247[(8)] = inst_12203__$1);

return statearr_12247;
})();
var statearr_12248_13358 = state_12226__$1;
(statearr_12248_13358[(2)] = null);

(statearr_12248_13358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (9))){
var state_12226__$1 = state_12226;
var statearr_12249_13359 = state_12226__$1;
(statearr_12249_13359[(2)] = null);

(statearr_12249_13359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (5))){
var state_12226__$1 = state_12226;
var statearr_12250_13360 = state_12226__$1;
(statearr_12250_13360[(2)] = null);

(statearr_12250_13360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (10))){
var inst_12218 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12251_13361 = state_12226__$1;
(statearr_12251_13361[(2)] = inst_12218);

(statearr_12251_13361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (8))){
var inst_12208 = (state_12226[(7)]);
var state_12226__$1 = state_12226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12226__$1,(11),out,inst_12208);
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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_12264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12264[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_12264[(1)] = (1));

return statearr_12264;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_12226){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_12226);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e12265){var ex__10828__auto__ = e12265;
var statearr_12266_13362 = state_12226;
(statearr_12266_13362[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_12226[(4)]))){
var statearr_12267_13363 = state_12226;
(statearr_12267_13363[(1)] = cljs.core.first((state_12226[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13364 = state_12226;
state_12226 = G__13364;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_12226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_12226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_12268 = f__10889__auto__();
(statearr_12268[(6)] = c__10888__auto___13351);

return statearr_12268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12270 = (function (f,ch,meta12271){
this.f = f;
this.ch = ch;
this.meta12271 = meta12271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12272,meta12271__$1){
var self__ = this;
var _12272__$1 = this;
return (new cljs.core.async.t_cljs$core$async12270(self__.f,self__.ch,meta12271__$1));
}));

(cljs.core.async.t_cljs$core$async12270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12272){
var self__ = this;
var _12272__$1 = this;
return self__.meta12271;
}));

(cljs.core.async.t_cljs$core$async12270.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12270.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12270.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12273 = (function (f,ch,meta12271,_,fn1,meta12274){
this.f = f;
this.ch = ch;
this.meta12271 = meta12271;
this._ = _;
this.fn1 = fn1;
this.meta12274 = meta12274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12275,meta12274__$1){
var self__ = this;
var _12275__$1 = this;
return (new cljs.core.async.t_cljs$core$async12273(self__.f,self__.ch,self__.meta12271,self__._,self__.fn1,meta12274__$1));
}));

(cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12275){
var self__ = this;
var _12275__$1 = this;
return self__.meta12274;
}));

(cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12269_SHARP_){
var G__12288 = (((p1__12269_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12269_SHARP_) : self__.f.call(null,p1__12269_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12288) : f1.call(null,G__12288));
});
}));

(cljs.core.async.t_cljs$core$async12273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12271","meta12271",1457804876,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12270","cljs.core.async/t_cljs$core$async12270",-757591827,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12274","meta12274",-950397307,null)], null);
}));

(cljs.core.async.t_cljs$core$async12273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12273");

(cljs.core.async.t_cljs$core$async12273.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12273.
 */
cljs.core.async.__GT_t_cljs$core$async12273 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12273(f__$1,ch__$1,meta12271__$1,___$2,fn1__$1,meta12274){
return (new cljs.core.async.t_cljs$core$async12273(f__$1,ch__$1,meta12271__$1,___$2,fn1__$1,meta12274));
});

}

return (new cljs.core.async.t_cljs$core$async12273(self__.f,self__.ch,self__.meta12271,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12291 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12291) : self__.f.call(null,G__12291));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12270.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12271","meta12271",1457804876,null)], null);
}));

(cljs.core.async.t_cljs$core$async12270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12270");

(cljs.core.async.t_cljs$core$async12270.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12270.
 */
cljs.core.async.__GT_t_cljs$core$async12270 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12270(f__$1,ch__$1,meta12271){
return (new cljs.core.async.t_cljs$core$async12270(f__$1,ch__$1,meta12271));
});

}

return (new cljs.core.async.t_cljs$core$async12270(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12294 = (function (f,ch,meta12295){
this.f = f;
this.ch = ch;
this.meta12295 = meta12295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12296,meta12295__$1){
var self__ = this;
var _12296__$1 = this;
return (new cljs.core.async.t_cljs$core$async12294(self__.f,self__.ch,meta12295__$1));
}));

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12296){
var self__ = this;
var _12296__$1 = this;
return self__.meta12295;
}));

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12295","meta12295",-2051828338,null)], null);
}));

(cljs.core.async.t_cljs$core$async12294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12294");

(cljs.core.async.t_cljs$core$async12294.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12294.
 */
cljs.core.async.__GT_t_cljs$core$async12294 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12294(f__$1,ch__$1,meta12295){
return (new cljs.core.async.t_cljs$core$async12294(f__$1,ch__$1,meta12295));
});

}

return (new cljs.core.async.t_cljs$core$async12294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12300 = (function (p,ch,meta12301){
this.p = p;
this.ch = ch;
this.meta12301 = meta12301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12302,meta12301__$1){
var self__ = this;
var _12302__$1 = this;
return (new cljs.core.async.t_cljs$core$async12300(self__.p,self__.ch,meta12301__$1));
}));

(cljs.core.async.t_cljs$core$async12300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12302){
var self__ = this;
var _12302__$1 = this;
return self__.meta12301;
}));

(cljs.core.async.t_cljs$core$async12300.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12300.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12300.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12300.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12301","meta12301",2126013650,null)], null);
}));

(cljs.core.async.t_cljs$core$async12300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12300");

(cljs.core.async.t_cljs$core$async12300.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12300.
 */
cljs.core.async.__GT_t_cljs$core$async12300 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12300(p__$1,ch__$1,meta12301){
return (new cljs.core.async.t_cljs$core$async12300(p__$1,ch__$1,meta12301));
});

}

return (new cljs.core.async.t_cljs$core$async12300(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12304 = arguments.length;
switch (G__12304) {
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
var c__10888__auto___13366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_12329){
var state_val_12330 = (state_12329[(1)]);
if((state_val_12330 === (7))){
var inst_12325 = (state_12329[(2)]);
var state_12329__$1 = state_12329;
var statearr_12331_13367 = state_12329__$1;
(statearr_12331_13367[(2)] = inst_12325);

(statearr_12331_13367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (1))){
var state_12329__$1 = state_12329;
var statearr_12332_13368 = state_12329__$1;
(statearr_12332_13368[(2)] = null);

(statearr_12332_13368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (4))){
var inst_12311 = (state_12329[(7)]);
var inst_12311__$1 = (state_12329[(2)]);
var inst_12312 = (inst_12311__$1 == null);
var state_12329__$1 = (function (){var statearr_12333 = state_12329;
(statearr_12333[(7)] = inst_12311__$1);

return statearr_12333;
})();
if(cljs.core.truth_(inst_12312)){
var statearr_12334_13369 = state_12329__$1;
(statearr_12334_13369[(1)] = (5));

} else {
var statearr_12335_13370 = state_12329__$1;
(statearr_12335_13370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (6))){
var inst_12311 = (state_12329[(7)]);
var inst_12316 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12311) : p.call(null,inst_12311));
var state_12329__$1 = state_12329;
if(cljs.core.truth_(inst_12316)){
var statearr_12336_13371 = state_12329__$1;
(statearr_12336_13371[(1)] = (8));

} else {
var statearr_12337_13372 = state_12329__$1;
(statearr_12337_13372[(1)] = (9));

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
var statearr_12338_13373 = state_12329__$1;
(statearr_12338_13373[(2)] = inst_12319);

(statearr_12338_13373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (9))){
var state_12329__$1 = state_12329;
var statearr_12339_13374 = state_12329__$1;
(statearr_12339_13374[(2)] = null);

(statearr_12339_13374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (5))){
var inst_12314 = cljs.core.async.close_BANG_(out);
var state_12329__$1 = state_12329;
var statearr_12340_13375 = state_12329__$1;
(statearr_12340_13375[(2)] = inst_12314);

(statearr_12340_13375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (10))){
var inst_12322 = (state_12329[(2)]);
var state_12329__$1 = (function (){var statearr_12341 = state_12329;
(statearr_12341[(8)] = inst_12322);

return statearr_12341;
})();
var statearr_12342_13376 = state_12329__$1;
(statearr_12342_13376[(2)] = null);

(statearr_12342_13376[(1)] = (2));


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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_12343 = [null,null,null,null,null,null,null,null,null];
(statearr_12343[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_12343[(1)] = (1));

return statearr_12343;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_12329){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_12329);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e12344){var ex__10828__auto__ = e12344;
var statearr_12345_13377 = state_12329;
(statearr_12345_13377[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_12329[(4)]))){
var statearr_12346_13378 = state_12329;
(statearr_12346_13378[(1)] = cljs.core.first((state_12329[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13379 = state_12329;
state_12329 = G__13379;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_12329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_12329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_12347 = f__10889__auto__();
(statearr_12347[(6)] = c__10888__auto___13366);

return statearr_12347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12349 = arguments.length;
switch (G__12349) {
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
var c__10888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_12412){
var state_val_12413 = (state_12412[(1)]);
if((state_val_12413 === (7))){
var inst_12408 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12414_13381 = state_12412__$1;
(statearr_12414_13381[(2)] = inst_12408);

(statearr_12414_13381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (20))){
var inst_12377 = (state_12412[(7)]);
var inst_12389 = (state_12412[(2)]);
var inst_12390 = cljs.core.next(inst_12377);
var inst_12363 = inst_12390;
var inst_12364 = null;
var inst_12365 = (0);
var inst_12366 = (0);
var state_12412__$1 = (function (){var statearr_12415 = state_12412;
(statearr_12415[(8)] = inst_12389);

(statearr_12415[(9)] = inst_12363);

(statearr_12415[(10)] = inst_12364);

(statearr_12415[(11)] = inst_12366);

(statearr_12415[(12)] = inst_12365);

return statearr_12415;
})();
var statearr_12416_13382 = state_12412__$1;
(statearr_12416_13382[(2)] = null);

(statearr_12416_13382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (1))){
var state_12412__$1 = state_12412;
var statearr_12417_13383 = state_12412__$1;
(statearr_12417_13383[(2)] = null);

(statearr_12417_13383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (4))){
var inst_12352 = (state_12412[(13)]);
var inst_12352__$1 = (state_12412[(2)]);
var inst_12353 = (inst_12352__$1 == null);
var state_12412__$1 = (function (){var statearr_12418 = state_12412;
(statearr_12418[(13)] = inst_12352__$1);

return statearr_12418;
})();
if(cljs.core.truth_(inst_12353)){
var statearr_12419_13384 = state_12412__$1;
(statearr_12419_13384[(1)] = (5));

} else {
var statearr_12420_13385 = state_12412__$1;
(statearr_12420_13385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (15))){
var state_12412__$1 = state_12412;
var statearr_12424_13386 = state_12412__$1;
(statearr_12424_13386[(2)] = null);

(statearr_12424_13386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (21))){
var state_12412__$1 = state_12412;
var statearr_12425_13387 = state_12412__$1;
(statearr_12425_13387[(2)] = null);

(statearr_12425_13387[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (13))){
var inst_12363 = (state_12412[(9)]);
var inst_12364 = (state_12412[(10)]);
var inst_12366 = (state_12412[(11)]);
var inst_12365 = (state_12412[(12)]);
var inst_12373 = (state_12412[(2)]);
var inst_12374 = (inst_12366 + (1));
var tmp12421 = inst_12363;
var tmp12422 = inst_12364;
var tmp12423 = inst_12365;
var inst_12363__$1 = tmp12421;
var inst_12364__$1 = tmp12422;
var inst_12365__$1 = tmp12423;
var inst_12366__$1 = inst_12374;
var state_12412__$1 = (function (){var statearr_12426 = state_12412;
(statearr_12426[(14)] = inst_12373);

(statearr_12426[(9)] = inst_12363__$1);

(statearr_12426[(10)] = inst_12364__$1);

(statearr_12426[(11)] = inst_12366__$1);

(statearr_12426[(12)] = inst_12365__$1);

return statearr_12426;
})();
var statearr_12427_13388 = state_12412__$1;
(statearr_12427_13388[(2)] = null);

(statearr_12427_13388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (22))){
var state_12412__$1 = state_12412;
var statearr_12428_13389 = state_12412__$1;
(statearr_12428_13389[(2)] = null);

(statearr_12428_13389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (6))){
var inst_12352 = (state_12412[(13)]);
var inst_12361 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12352) : f.call(null,inst_12352));
var inst_12362 = cljs.core.seq(inst_12361);
var inst_12363 = inst_12362;
var inst_12364 = null;
var inst_12365 = (0);
var inst_12366 = (0);
var state_12412__$1 = (function (){var statearr_12433 = state_12412;
(statearr_12433[(9)] = inst_12363);

(statearr_12433[(10)] = inst_12364);

(statearr_12433[(11)] = inst_12366);

(statearr_12433[(12)] = inst_12365);

return statearr_12433;
})();
var statearr_12434_13390 = state_12412__$1;
(statearr_12434_13390[(2)] = null);

(statearr_12434_13390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (17))){
var inst_12377 = (state_12412[(7)]);
var inst_12382 = cljs.core.chunk_first(inst_12377);
var inst_12383 = cljs.core.chunk_rest(inst_12377);
var inst_12384 = cljs.core.count(inst_12382);
var inst_12363 = inst_12383;
var inst_12364 = inst_12382;
var inst_12365 = inst_12384;
var inst_12366 = (0);
var state_12412__$1 = (function (){var statearr_12435 = state_12412;
(statearr_12435[(9)] = inst_12363);

(statearr_12435[(10)] = inst_12364);

(statearr_12435[(11)] = inst_12366);

(statearr_12435[(12)] = inst_12365);

return statearr_12435;
})();
var statearr_12436_13391 = state_12412__$1;
(statearr_12436_13391[(2)] = null);

(statearr_12436_13391[(1)] = (8));


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
var statearr_12437_13392 = state_12412__$1;
(statearr_12437_13392[(2)] = inst_12398);

(statearr_12437_13392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (2))){
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12412__$1,(4),in$);
} else {
if((state_val_12413 === (23))){
var inst_12406 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12438_13393 = state_12412__$1;
(statearr_12438_13393[(2)] = inst_12406);

(statearr_12438_13393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (19))){
var inst_12393 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12439_13394 = state_12412__$1;
(statearr_12439_13394[(2)] = inst_12393);

(statearr_12439_13394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (11))){
var inst_12363 = (state_12412[(9)]);
var inst_12377 = (state_12412[(7)]);
var inst_12377__$1 = cljs.core.seq(inst_12363);
var state_12412__$1 = (function (){var statearr_12440 = state_12412;
(statearr_12440[(7)] = inst_12377__$1);

return statearr_12440;
})();
if(inst_12377__$1){
var statearr_12441_13395 = state_12412__$1;
(statearr_12441_13395[(1)] = (14));

} else {
var statearr_12442_13396 = state_12412__$1;
(statearr_12442_13396[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (9))){
var inst_12400 = (state_12412[(2)]);
var inst_12401 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12412__$1 = (function (){var statearr_12443 = state_12412;
(statearr_12443[(15)] = inst_12400);

return statearr_12443;
})();
if(cljs.core.truth_(inst_12401)){
var statearr_12444_13397 = state_12412__$1;
(statearr_12444_13397[(1)] = (21));

} else {
var statearr_12445_13398 = state_12412__$1;
(statearr_12445_13398[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (5))){
var inst_12355 = cljs.core.async.close_BANG_(out);
var state_12412__$1 = state_12412;
var statearr_12446_13399 = state_12412__$1;
(statearr_12446_13399[(2)] = inst_12355);

(statearr_12446_13399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (14))){
var inst_12377 = (state_12412[(7)]);
var inst_12379 = cljs.core.chunked_seq_QMARK_(inst_12377);
var state_12412__$1 = state_12412;
if(inst_12379){
var statearr_12447_13400 = state_12412__$1;
(statearr_12447_13400[(1)] = (17));

} else {
var statearr_12448_13401 = state_12412__$1;
(statearr_12448_13401[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (16))){
var inst_12396 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12449_13402 = state_12412__$1;
(statearr_12449_13402[(2)] = inst_12396);

(statearr_12449_13402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (10))){
var inst_12364 = (state_12412[(10)]);
var inst_12366 = (state_12412[(11)]);
var inst_12371 = cljs.core._nth(inst_12364,inst_12366);
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12412__$1,(13),out,inst_12371);
} else {
if((state_val_12413 === (18))){
var inst_12377 = (state_12412[(7)]);
var inst_12387 = cljs.core.first(inst_12377);
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12412__$1,(20),out,inst_12387);
} else {
if((state_val_12413 === (8))){
var inst_12366 = (state_12412[(11)]);
var inst_12365 = (state_12412[(12)]);
var inst_12368 = (inst_12366 < inst_12365);
var inst_12369 = inst_12368;
var state_12412__$1 = state_12412;
if(cljs.core.truth_(inst_12369)){
var statearr_12460_13403 = state_12412__$1;
(statearr_12460_13403[(1)] = (10));

} else {
var statearr_12461_13404 = state_12412__$1;
(statearr_12461_13404[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10825__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10825__auto____0 = (function (){
var statearr_12462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12462[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10825__auto__);

(statearr_12462[(1)] = (1));

return statearr_12462;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10825__auto____1 = (function (state_12412){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_12412);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e12463){var ex__10828__auto__ = e12463;
var statearr_12464_13405 = state_12412;
(statearr_12464_13405[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_12412[(4)]))){
var statearr_12465_13406 = state_12412;
(statearr_12465_13406[(1)] = cljs.core.first((state_12412[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12412;
state_12412 = G__13407;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10825__auto__ = function(state_12412){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10825__auto____1.call(this,state_12412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10825__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10825__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_12466 = f__10889__auto__();
(statearr_12466[(6)] = c__10888__auto__);

return statearr_12466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));

return c__10888__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12482 = arguments.length;
switch (G__12482) {
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
var G__12484 = arguments.length;
switch (G__12484) {
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
var G__12486 = arguments.length;
switch (G__12486) {
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
var c__10888__auto___13411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_12531){
var state_val_12532 = (state_12531[(1)]);
if((state_val_12532 === (7))){
var inst_12526 = (state_12531[(2)]);
var state_12531__$1 = state_12531;
var statearr_12533_13412 = state_12531__$1;
(statearr_12533_13412[(2)] = inst_12526);

(statearr_12533_13412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12532 === (1))){
var inst_12508 = null;
var state_12531__$1 = (function (){var statearr_12534 = state_12531;
(statearr_12534[(7)] = inst_12508);

return statearr_12534;
})();
var statearr_12535_13413 = state_12531__$1;
(statearr_12535_13413[(2)] = null);

(statearr_12535_13413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12532 === (4))){
var inst_12511 = (state_12531[(8)]);
var inst_12511__$1 = (state_12531[(2)]);
var inst_12512 = (inst_12511__$1 == null);
var inst_12513 = cljs.core.not(inst_12512);
var state_12531__$1 = (function (){var statearr_12536 = state_12531;
(statearr_12536[(8)] = inst_12511__$1);

return statearr_12536;
})();
if(inst_12513){
var statearr_12537_13414 = state_12531__$1;
(statearr_12537_13414[(1)] = (5));

} else {
var statearr_12538_13415 = state_12531__$1;
(statearr_12538_13415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12532 === (6))){
var state_12531__$1 = state_12531;
var statearr_12539_13416 = state_12531__$1;
(statearr_12539_13416[(2)] = null);

(statearr_12539_13416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12532 === (3))){
var inst_12528 = (state_12531[(2)]);
var inst_12529 = cljs.core.async.close_BANG_(out);
var state_12531__$1 = (function (){var statearr_12540 = state_12531;
(statearr_12540[(9)] = inst_12528);

return statearr_12540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12531__$1,inst_12529);
} else {
if((state_val_12532 === (2))){
var state_12531__$1 = state_12531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12531__$1,(4),ch);
} else {
if((state_val_12532 === (11))){
var inst_12511 = (state_12531[(8)]);
var inst_12520 = (state_12531[(2)]);
var inst_12508 = inst_12511;
var state_12531__$1 = (function (){var statearr_12541 = state_12531;
(statearr_12541[(10)] = inst_12520);

(statearr_12541[(7)] = inst_12508);

return statearr_12541;
})();
var statearr_12542_13417 = state_12531__$1;
(statearr_12542_13417[(2)] = null);

(statearr_12542_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12532 === (9))){
var inst_12511 = (state_12531[(8)]);
var state_12531__$1 = state_12531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12531__$1,(11),out,inst_12511);
} else {
if((state_val_12532 === (5))){
var inst_12511 = (state_12531[(8)]);
var inst_12508 = (state_12531[(7)]);
var inst_12515 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12511,inst_12508);
var state_12531__$1 = state_12531;
if(inst_12515){
var statearr_12544_13418 = state_12531__$1;
(statearr_12544_13418[(1)] = (8));

} else {
var statearr_12545_13419 = state_12531__$1;
(statearr_12545_13419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12532 === (10))){
var inst_12523 = (state_12531[(2)]);
var state_12531__$1 = state_12531;
var statearr_12546_13420 = state_12531__$1;
(statearr_12546_13420[(2)] = inst_12523);

(statearr_12546_13420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12532 === (8))){
var inst_12508 = (state_12531[(7)]);
var tmp12543 = inst_12508;
var inst_12508__$1 = tmp12543;
var state_12531__$1 = (function (){var statearr_12547 = state_12531;
(statearr_12547[(7)] = inst_12508__$1);

return statearr_12547;
})();
var statearr_12548_13421 = state_12531__$1;
(statearr_12548_13421[(2)] = null);

(statearr_12548_13421[(1)] = (2));


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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_12549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12549[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_12549[(1)] = (1));

return statearr_12549;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_12531){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_12531);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e12550){var ex__10828__auto__ = e12550;
var statearr_12551_13422 = state_12531;
(statearr_12551_13422[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_12531[(4)]))){
var statearr_12552_13423 = state_12531;
(statearr_12552_13423[(1)] = cljs.core.first((state_12531[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13424 = state_12531;
state_12531 = G__13424;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_12531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_12531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_12553 = f__10889__auto__();
(statearr_12553[(6)] = c__10888__auto___13411);

return statearr_12553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12555 = arguments.length;
switch (G__12555) {
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
var c__10888__auto___13426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_12595){
var state_val_12596 = (state_12595[(1)]);
if((state_val_12596 === (7))){
var inst_12589 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12597_13427 = state_12595__$1;
(statearr_12597_13427[(2)] = inst_12589);

(statearr_12597_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (1))){
var inst_12556 = (new Array(n));
var inst_12557 = inst_12556;
var inst_12558 = (0);
var state_12595__$1 = (function (){var statearr_12598 = state_12595;
(statearr_12598[(7)] = inst_12558);

(statearr_12598[(8)] = inst_12557);

return statearr_12598;
})();
var statearr_12599_13428 = state_12595__$1;
(statearr_12599_13428[(2)] = null);

(statearr_12599_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (4))){
var inst_12561 = (state_12595[(9)]);
var inst_12561__$1 = (state_12595[(2)]);
var inst_12562 = (inst_12561__$1 == null);
var inst_12563 = cljs.core.not(inst_12562);
var state_12595__$1 = (function (){var statearr_12600 = state_12595;
(statearr_12600[(9)] = inst_12561__$1);

return statearr_12600;
})();
if(inst_12563){
var statearr_12601_13429 = state_12595__$1;
(statearr_12601_13429[(1)] = (5));

} else {
var statearr_12602_13430 = state_12595__$1;
(statearr_12602_13430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (15))){
var inst_12583 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12603_13431 = state_12595__$1;
(statearr_12603_13431[(2)] = inst_12583);

(statearr_12603_13431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (13))){
var state_12595__$1 = state_12595;
var statearr_12604_13432 = state_12595__$1;
(statearr_12604_13432[(2)] = null);

(statearr_12604_13432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (6))){
var inst_12558 = (state_12595[(7)]);
var inst_12579 = (inst_12558 > (0));
var state_12595__$1 = state_12595;
if(cljs.core.truth_(inst_12579)){
var statearr_12605_13433 = state_12595__$1;
(statearr_12605_13433[(1)] = (12));

} else {
var statearr_12606_13434 = state_12595__$1;
(statearr_12606_13434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (3))){
var inst_12591 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12595__$1,inst_12591);
} else {
if((state_val_12596 === (12))){
var inst_12557 = (state_12595[(8)]);
var inst_12581 = cljs.core.vec(inst_12557);
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12595__$1,(15),out,inst_12581);
} else {
if((state_val_12596 === (2))){
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12595__$1,(4),ch);
} else {
if((state_val_12596 === (11))){
var inst_12573 = (state_12595[(2)]);
var inst_12574 = (new Array(n));
var inst_12557 = inst_12574;
var inst_12558 = (0);
var state_12595__$1 = (function (){var statearr_12607 = state_12595;
(statearr_12607[(7)] = inst_12558);

(statearr_12607[(8)] = inst_12557);

(statearr_12607[(10)] = inst_12573);

return statearr_12607;
})();
var statearr_12608_13435 = state_12595__$1;
(statearr_12608_13435[(2)] = null);

(statearr_12608_13435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (9))){
var inst_12557 = (state_12595[(8)]);
var inst_12571 = cljs.core.vec(inst_12557);
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12595__$1,(11),out,inst_12571);
} else {
if((state_val_12596 === (5))){
var inst_12566 = (state_12595[(11)]);
var inst_12558 = (state_12595[(7)]);
var inst_12557 = (state_12595[(8)]);
var inst_12561 = (state_12595[(9)]);
var inst_12565 = (inst_12557[inst_12558] = inst_12561);
var inst_12566__$1 = (inst_12558 + (1));
var inst_12567 = (inst_12566__$1 < n);
var state_12595__$1 = (function (){var statearr_12609 = state_12595;
(statearr_12609[(11)] = inst_12566__$1);

(statearr_12609[(12)] = inst_12565);

return statearr_12609;
})();
if(cljs.core.truth_(inst_12567)){
var statearr_12610_13436 = state_12595__$1;
(statearr_12610_13436[(1)] = (8));

} else {
var statearr_12611_13437 = state_12595__$1;
(statearr_12611_13437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (14))){
var inst_12586 = (state_12595[(2)]);
var inst_12587 = cljs.core.async.close_BANG_(out);
var state_12595__$1 = (function (){var statearr_12613 = state_12595;
(statearr_12613[(13)] = inst_12586);

return statearr_12613;
})();
var statearr_12614_13438 = state_12595__$1;
(statearr_12614_13438[(2)] = inst_12587);

(statearr_12614_13438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (10))){
var inst_12577 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12615_13439 = state_12595__$1;
(statearr_12615_13439[(2)] = inst_12577);

(statearr_12615_13439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (8))){
var inst_12566 = (state_12595[(11)]);
var inst_12557 = (state_12595[(8)]);
var tmp12612 = inst_12557;
var inst_12557__$1 = tmp12612;
var inst_12558 = inst_12566;
var state_12595__$1 = (function (){var statearr_12616 = state_12595;
(statearr_12616[(7)] = inst_12558);

(statearr_12616[(8)] = inst_12557__$1);

return statearr_12616;
})();
var statearr_12617_13440 = state_12595__$1;
(statearr_12617_13440[(2)] = null);

(statearr_12617_13440[(1)] = (2));


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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_12618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12618[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_12618[(1)] = (1));

return statearr_12618;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_12595){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_12595);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e12619){var ex__10828__auto__ = e12619;
var statearr_12620_13441 = state_12595;
(statearr_12620_13441[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_12595[(4)]))){
var statearr_12621_13442 = state_12595;
(statearr_12621_13442[(1)] = cljs.core.first((state_12595[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13443 = state_12595;
state_12595 = G__13443;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_12595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_12595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_12622 = f__10889__auto__();
(statearr_12622[(6)] = c__10888__auto___13426);

return statearr_12622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12644 = arguments.length;
switch (G__12644) {
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
var c__10888__auto___13445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10889__auto__ = (function (){var switch__10824__auto__ = (function (state_12687){
var state_val_12688 = (state_12687[(1)]);
if((state_val_12688 === (7))){
var inst_12683 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12694_13446 = state_12687__$1;
(statearr_12694_13446[(2)] = inst_12683);

(statearr_12694_13446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (1))){
var inst_12646 = [];
var inst_12647 = inst_12646;
var inst_12648 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12687__$1 = (function (){var statearr_12696 = state_12687;
(statearr_12696[(7)] = inst_12648);

(statearr_12696[(8)] = inst_12647);

return statearr_12696;
})();
var statearr_12698_13447 = state_12687__$1;
(statearr_12698_13447[(2)] = null);

(statearr_12698_13447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (4))){
var inst_12651 = (state_12687[(9)]);
var inst_12651__$1 = (state_12687[(2)]);
var inst_12652 = (inst_12651__$1 == null);
var inst_12653 = cljs.core.not(inst_12652);
var state_12687__$1 = (function (){var statearr_12715 = state_12687;
(statearr_12715[(9)] = inst_12651__$1);

return statearr_12715;
})();
if(inst_12653){
var statearr_12716_13448 = state_12687__$1;
(statearr_12716_13448[(1)] = (5));

} else {
var statearr_12717_13449 = state_12687__$1;
(statearr_12717_13449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (15))){
var inst_12677 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12718_13450 = state_12687__$1;
(statearr_12718_13450[(2)] = inst_12677);

(statearr_12718_13450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (13))){
var state_12687__$1 = state_12687;
var statearr_12719_13451 = state_12687__$1;
(statearr_12719_13451[(2)] = null);

(statearr_12719_13451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (6))){
var inst_12647 = (state_12687[(8)]);
var inst_12672 = inst_12647.length;
var inst_12673 = (inst_12672 > (0));
var state_12687__$1 = state_12687;
if(cljs.core.truth_(inst_12673)){
var statearr_12720_13452 = state_12687__$1;
(statearr_12720_13452[(1)] = (12));

} else {
var statearr_12721_13453 = state_12687__$1;
(statearr_12721_13453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (3))){
var inst_12685 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12687__$1,inst_12685);
} else {
if((state_val_12688 === (12))){
var inst_12647 = (state_12687[(8)]);
var inst_12675 = cljs.core.vec(inst_12647);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12687__$1,(15),out,inst_12675);
} else {
if((state_val_12688 === (2))){
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12687__$1,(4),ch);
} else {
if((state_val_12688 === (11))){
var inst_12651 = (state_12687[(9)]);
var inst_12655 = (state_12687[(10)]);
var inst_12665 = (state_12687[(2)]);
var inst_12666 = [];
var inst_12667 = inst_12666.push(inst_12651);
var inst_12647 = inst_12666;
var inst_12648 = inst_12655;
var state_12687__$1 = (function (){var statearr_12723 = state_12687;
(statearr_12723[(7)] = inst_12648);

(statearr_12723[(11)] = inst_12667);

(statearr_12723[(12)] = inst_12665);

(statearr_12723[(8)] = inst_12647);

return statearr_12723;
})();
var statearr_12724_13454 = state_12687__$1;
(statearr_12724_13454[(2)] = null);

(statearr_12724_13454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (9))){
var inst_12647 = (state_12687[(8)]);
var inst_12663 = cljs.core.vec(inst_12647);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12687__$1,(11),out,inst_12663);
} else {
if((state_val_12688 === (5))){
var inst_12648 = (state_12687[(7)]);
var inst_12651 = (state_12687[(9)]);
var inst_12655 = (state_12687[(10)]);
var inst_12655__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12651) : f.call(null,inst_12651));
var inst_12656 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12655__$1,inst_12648);
var inst_12657 = cljs.core.keyword_identical_QMARK_(inst_12648,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12658 = ((inst_12656) || (inst_12657));
var state_12687__$1 = (function (){var statearr_12738 = state_12687;
(statearr_12738[(10)] = inst_12655__$1);

return statearr_12738;
})();
if(cljs.core.truth_(inst_12658)){
var statearr_12740_13455 = state_12687__$1;
(statearr_12740_13455[(1)] = (8));

} else {
var statearr_12741_13456 = state_12687__$1;
(statearr_12741_13456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (14))){
var inst_12680 = (state_12687[(2)]);
var inst_12681 = cljs.core.async.close_BANG_(out);
var state_12687__$1 = (function (){var statearr_12743 = state_12687;
(statearr_12743[(13)] = inst_12680);

return statearr_12743;
})();
var statearr_12745_13457 = state_12687__$1;
(statearr_12745_13457[(2)] = inst_12681);

(statearr_12745_13457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (10))){
var inst_12670 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12746_13458 = state_12687__$1;
(statearr_12746_13458[(2)] = inst_12670);

(statearr_12746_13458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (8))){
var inst_12651 = (state_12687[(9)]);
var inst_12655 = (state_12687[(10)]);
var inst_12647 = (state_12687[(8)]);
var inst_12660 = inst_12647.push(inst_12651);
var tmp12742 = inst_12647;
var inst_12647__$1 = tmp12742;
var inst_12648 = inst_12655;
var state_12687__$1 = (function (){var statearr_12747 = state_12687;
(statearr_12747[(14)] = inst_12660);

(statearr_12747[(7)] = inst_12648);

(statearr_12747[(8)] = inst_12647__$1);

return statearr_12747;
})();
var statearr_12748_13459 = state_12687__$1;
(statearr_12748_13459[(2)] = null);

(statearr_12748_13459[(1)] = (2));


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
var cljs$core$async$state_machine__10825__auto__ = null;
var cljs$core$async$state_machine__10825__auto____0 = (function (){
var statearr_12750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12750[(0)] = cljs$core$async$state_machine__10825__auto__);

(statearr_12750[(1)] = (1));

return statearr_12750;
});
var cljs$core$async$state_machine__10825__auto____1 = (function (state_12687){
while(true){
var ret_value__10826__auto__ = (function (){try{while(true){
var result__10827__auto__ = switch__10824__auto__(state_12687);
if(cljs.core.keyword_identical_QMARK_(result__10827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10827__auto__;
}
break;
}
}catch (e12752){var ex__10828__auto__ = e12752;
var statearr_12753_13460 = state_12687;
(statearr_12753_13460[(2)] = ex__10828__auto__);


if(cljs.core.seq((state_12687[(4)]))){
var statearr_12754_13461 = state_12687;
(statearr_12754_13461[(1)] = cljs.core.first((state_12687[(4)])));

} else {
throw ex__10828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13462 = state_12687;
state_12687 = G__13462;
continue;
} else {
return ret_value__10826__auto__;
}
break;
}
});
cljs$core$async$state_machine__10825__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10825__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10825__auto____0;
cljs$core$async$state_machine__10825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10825__auto____1;
return cljs$core$async$state_machine__10825__auto__;
})()
})();
var state__10890__auto__ = (function (){var statearr_12755 = f__10889__auto__();
(statearr_12755[(6)] = c__10888__auto___13445);

return statearr_12755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10890__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
