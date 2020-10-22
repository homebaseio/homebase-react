goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10871 = arguments.length;
switch (G__10871) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10872 = (function (f,blockable,meta10873){
this.f = f;
this.blockable = blockable;
this.meta10873 = meta10873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10874,meta10873__$1){
var self__ = this;
var _10874__$1 = this;
return (new cljs.core.async.t_cljs$core$async10872(self__.f,self__.blockable,meta10873__$1));
}));

(cljs.core.async.t_cljs$core$async10872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10874){
var self__ = this;
var _10874__$1 = this;
return self__.meta10873;
}));

(cljs.core.async.t_cljs$core$async10872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10873","meta10873",388824486,null)], null);
}));

(cljs.core.async.t_cljs$core$async10872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10872");

(cljs.core.async.t_cljs$core$async10872.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10872.
 */
cljs.core.async.__GT_t_cljs$core$async10872 = (function cljs$core$async$__GT_t_cljs$core$async10872(f__$1,blockable__$1,meta10873){
return (new cljs.core.async.t_cljs$core$async10872(f__$1,blockable__$1,meta10873));
});

}

return (new cljs.core.async.t_cljs$core$async10872(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10885 = arguments.length;
switch (G__10885) {
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
var G__10898 = arguments.length;
switch (G__10898) {
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
var G__10910 = arguments.length;
switch (G__10910) {
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
var G__10921 = arguments.length;
switch (G__10921) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10931 = (function (flag,meta10932){
this.flag = flag;
this.meta10932 = meta10932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10933,meta10932__$1){
var self__ = this;
var _10933__$1 = this;
return (new cljs.core.async.t_cljs$core$async10931(self__.flag,meta10932__$1));
}));

(cljs.core.async.t_cljs$core$async10931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10933){
var self__ = this;
var _10933__$1 = this;
return self__.meta10932;
}));

(cljs.core.async.t_cljs$core$async10931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10932","meta10932",-88937550,null)], null);
}));

(cljs.core.async.t_cljs$core$async10931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10931");

(cljs.core.async.t_cljs$core$async10931.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10931.
 */
cljs.core.async.__GT_t_cljs$core$async10931 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10931(flag__$1,meta10932){
return (new cljs.core.async.t_cljs$core$async10931(flag__$1,meta10932));
});

}

return (new cljs.core.async.t_cljs$core$async10931(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10940 = (function (flag,cb,meta10941){
this.flag = flag;
this.cb = cb;
this.meta10941 = meta10941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10942,meta10941__$1){
var self__ = this;
var _10942__$1 = this;
return (new cljs.core.async.t_cljs$core$async10940(self__.flag,self__.cb,meta10941__$1));
}));

(cljs.core.async.t_cljs$core$async10940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10942){
var self__ = this;
var _10942__$1 = this;
return self__.meta10941;
}));

(cljs.core.async.t_cljs$core$async10940.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10940.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10941","meta10941",-1947218120,null)], null);
}));

(cljs.core.async.t_cljs$core$async10940.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10940");

(cljs.core.async.t_cljs$core$async10940.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10940");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10940.
 */
cljs.core.async.__GT_t_cljs$core$async10940 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10940(flag__$1,cb__$1,meta10941){
return (new cljs.core.async.t_cljs$core$async10940(flag__$1,cb__$1,meta10941));
});

}

return (new cljs.core.async.t_cljs$core$async10940(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10943_SHARP_){
var G__10946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10943_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10946) : fret.call(null,G__10946));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10944_SHARP_){
var G__10949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10944_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10949) : fret.call(null,G__10949));
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
var G__12652 = (i + (1));
i = G__12652;
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
var len__4736__auto___12653 = arguments.length;
var i__4737__auto___12654 = (0);
while(true){
if((i__4737__auto___12654 < len__4736__auto___12653)){
args__4742__auto__.push((arguments[i__4737__auto___12654]));

var G__12655 = (i__4737__auto___12654 + (1));
i__4737__auto___12654 = G__12655;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10958){
var map__10959 = p__10958;
var map__10959__$1 = (((((!((map__10959 == null))))?(((((map__10959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10959):map__10959);
var opts = map__10959__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10954){
var G__10955 = cljs.core.first(seq10954);
var seq10954__$1 = cljs.core.next(seq10954);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10955,seq10954__$1);
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
var G__10962 = arguments.length;
switch (G__10962) {
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
var c__10794__auto___12671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_10991){
var state_val_10992 = (state_10991[(1)]);
if((state_val_10992 === (7))){
var inst_10986 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_10994_12672 = state_10991__$1;
(statearr_10994_12672[(2)] = inst_10986);

(statearr_10994_12672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (1))){
var state_10991__$1 = state_10991;
var statearr_10995_12673 = state_10991__$1;
(statearr_10995_12673[(2)] = null);

(statearr_10995_12673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (4))){
var inst_10969 = (state_10991[(7)]);
var inst_10969__$1 = (state_10991[(2)]);
var inst_10970 = (inst_10969__$1 == null);
var state_10991__$1 = (function (){var statearr_10996 = state_10991;
(statearr_10996[(7)] = inst_10969__$1);

return statearr_10996;
})();
if(cljs.core.truth_(inst_10970)){
var statearr_10997_12674 = state_10991__$1;
(statearr_10997_12674[(1)] = (5));

} else {
var statearr_10998_12675 = state_10991__$1;
(statearr_10998_12675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (13))){
var state_10991__$1 = state_10991;
var statearr_10999_12676 = state_10991__$1;
(statearr_10999_12676[(2)] = null);

(statearr_10999_12676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (6))){
var inst_10969 = (state_10991[(7)]);
var state_10991__$1 = state_10991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10991__$1,(11),to,inst_10969);
} else {
if((state_val_10992 === (3))){
var inst_10988 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10991__$1,inst_10988);
} else {
if((state_val_10992 === (12))){
var state_10991__$1 = state_10991;
var statearr_11000_12677 = state_10991__$1;
(statearr_11000_12677[(2)] = null);

(statearr_11000_12677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (2))){
var state_10991__$1 = state_10991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10991__$1,(4),from);
} else {
if((state_val_10992 === (11))){
var inst_10979 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
if(cljs.core.truth_(inst_10979)){
var statearr_11001_12678 = state_10991__$1;
(statearr_11001_12678[(1)] = (12));

} else {
var statearr_11002_12679 = state_10991__$1;
(statearr_11002_12679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (9))){
var state_10991__$1 = state_10991;
var statearr_11003_12680 = state_10991__$1;
(statearr_11003_12680[(2)] = null);

(statearr_11003_12680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (5))){
var state_10991__$1 = state_10991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11004_12681 = state_10991__$1;
(statearr_11004_12681[(1)] = (8));

} else {
var statearr_11005_12682 = state_10991__$1;
(statearr_11005_12682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (14))){
var inst_10984 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_11006_12683 = state_10991__$1;
(statearr_11006_12683[(2)] = inst_10984);

(statearr_11006_12683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (10))){
var inst_10976 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_11007_12695 = state_10991__$1;
(statearr_11007_12695[(2)] = inst_10976);

(statearr_11007_12695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (8))){
var inst_10973 = cljs.core.async.close_BANG_(to);
var state_10991__$1 = state_10991;
var statearr_11008_12696 = state_10991__$1;
(statearr_11008_12696[(2)] = inst_10973);

(statearr_11008_12696[(1)] = (10));


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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_11009 = [null,null,null,null,null,null,null,null];
(statearr_11009[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_11009[(1)] = (1));

return statearr_11009;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_10991){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_10991);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11010){var ex__10728__auto__ = e11010;
var statearr_11011_12697 = state_10991;
(statearr_11011_12697[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_10991[(4)]))){
var statearr_11012_12700 = state_10991;
(statearr_11012_12700[(1)] = cljs.core.first((state_10991[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12702 = state_10991;
state_10991 = G__12702;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_10991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_10991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11013 = f__10795__auto__();
(statearr_11013[(6)] = c__10794__auto___12671);

return statearr_11013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
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
var process = (function (p__11018){
var vec__11019 = p__11018;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11019,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11019,(1),null);
var job = vec__11019;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10794__auto___12708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11028){
var state_val_11029 = (state_11028[(1)]);
if((state_val_11029 === (1))){
var state_11028__$1 = state_11028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11028__$1,(2),res,v);
} else {
if((state_val_11029 === (2))){
var inst_11025 = (state_11028[(2)]);
var inst_11026 = cljs.core.async.close_BANG_(res);
var state_11028__$1 = (function (){var statearr_11030 = state_11028;
(statearr_11030[(7)] = inst_11025);

return statearr_11030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11028__$1,inst_11026);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0 = (function (){
var statearr_11031 = [null,null,null,null,null,null,null,null];
(statearr_11031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__);

(statearr_11031[(1)] = (1));

return statearr_11031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1 = (function (state_11028){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11028);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11032){var ex__10728__auto__ = e11032;
var statearr_11033_12712 = state_11028;
(statearr_11033_12712[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11028[(4)]))){
var statearr_11034_12713 = state_11028;
(statearr_11034_12713[(1)] = cljs.core.first((state_11028[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12715 = state_11028;
state_11028 = G__12715;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = function(state_11028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1.call(this,state_11028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11035 = f__10795__auto__();
(statearr_11035[(6)] = c__10794__auto___12708);

return statearr_11035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11036){
var vec__11037 = p__11036;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11037,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11037,(1),null);
var job = vec__11037;
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
var G__11040_12730 = type;
var G__11040_12731__$1 = (((G__11040_12730 instanceof cljs.core.Keyword))?G__11040_12730.fqn:null);
switch (G__11040_12731__$1) {
case "compute":
var c__10794__auto___12733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12729,c__10794__auto___12733,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = ((function (__12729,c__10794__auto___12733,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function (state_11053){
var state_val_11054 = (state_11053[(1)]);
if((state_val_11054 === (1))){
var state_11053__$1 = state_11053;
var statearr_11055_12734 = state_11053__$1;
(statearr_11055_12734[(2)] = null);

(statearr_11055_12734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11054 === (2))){
var state_11053__$1 = state_11053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11053__$1,(4),jobs);
} else {
if((state_val_11054 === (3))){
var inst_11051 = (state_11053[(2)]);
var state_11053__$1 = state_11053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11053__$1,inst_11051);
} else {
if((state_val_11054 === (4))){
var inst_11043 = (state_11053[(2)]);
var inst_11044 = process(inst_11043);
var state_11053__$1 = state_11053;
if(cljs.core.truth_(inst_11044)){
var statearr_11056_12736 = state_11053__$1;
(statearr_11056_12736[(1)] = (5));

} else {
var statearr_11057_12737 = state_11053__$1;
(statearr_11057_12737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11054 === (5))){
var state_11053__$1 = state_11053;
var statearr_11058_12738 = state_11053__$1;
(statearr_11058_12738[(2)] = null);

(statearr_11058_12738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11054 === (6))){
var state_11053__$1 = state_11053;
var statearr_11059_12740 = state_11053__$1;
(statearr_11059_12740[(2)] = null);

(statearr_11059_12740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11054 === (7))){
var inst_11049 = (state_11053[(2)]);
var state_11053__$1 = state_11053;
var statearr_11060_12741 = state_11053__$1;
(statearr_11060_12741[(2)] = inst_11049);

(statearr_11060_12741[(1)] = (3));


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
});})(__12729,c__10794__auto___12733,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async))
;
return ((function (__12729,switch__10724__auto__,c__10794__auto___12733,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0 = (function (){
var statearr_11062 = [null,null,null,null,null,null,null];
(statearr_11062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__);

(statearr_11062[(1)] = (1));

return statearr_11062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1 = (function (state_11053){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11053);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11063){var ex__10728__auto__ = e11063;
var statearr_11064_12742 = state_11053;
(statearr_11064_12742[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11053[(4)]))){
var statearr_11065_12743 = state_11053;
(statearr_11065_12743[(1)] = cljs.core.first((state_11053[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12744 = state_11053;
state_11053 = G__12744;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = function(state_11053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1.call(this,state_11053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__;
})()
;})(__12729,switch__10724__auto__,c__10794__auto___12733,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async))
})();
var state__10796__auto__ = (function (){var statearr_11067 = f__10795__auto__();
(statearr_11067[(6)] = c__10794__auto___12733);

return statearr_11067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
});})(__12729,c__10794__auto___12733,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async))
);


break;
case "async":
var c__10794__auto___12745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12729,c__10794__auto___12745,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = ((function (__12729,c__10794__auto___12745,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function (state_11080){
var state_val_11081 = (state_11080[(1)]);
if((state_val_11081 === (1))){
var state_11080__$1 = state_11080;
var statearr_11086_12754 = state_11080__$1;
(statearr_11086_12754[(2)] = null);

(statearr_11086_12754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (2))){
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11080__$1,(4),jobs);
} else {
if((state_val_11081 === (3))){
var inst_11078 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11080__$1,inst_11078);
} else {
if((state_val_11081 === (4))){
var inst_11070 = (state_11080[(2)]);
var inst_11071 = async(inst_11070);
var state_11080__$1 = state_11080;
if(cljs.core.truth_(inst_11071)){
var statearr_11087_12755 = state_11080__$1;
(statearr_11087_12755[(1)] = (5));

} else {
var statearr_11088_12756 = state_11080__$1;
(statearr_11088_12756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (5))){
var state_11080__$1 = state_11080;
var statearr_11089_12757 = state_11080__$1;
(statearr_11089_12757[(2)] = null);

(statearr_11089_12757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (6))){
var state_11080__$1 = state_11080;
var statearr_11090_12758 = state_11080__$1;
(statearr_11090_12758[(2)] = null);

(statearr_11090_12758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (7))){
var inst_11076 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
var statearr_11091_12759 = state_11080__$1;
(statearr_11091_12759[(2)] = inst_11076);

(statearr_11091_12759[(1)] = (3));


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
});})(__12729,c__10794__auto___12745,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async))
;
return ((function (__12729,switch__10724__auto__,c__10794__auto___12745,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0 = (function (){
var statearr_11092 = [null,null,null,null,null,null,null];
(statearr_11092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__);

(statearr_11092[(1)] = (1));

return statearr_11092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1 = (function (state_11080){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11080);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11093){var ex__10728__auto__ = e11093;
var statearr_11094_12768 = state_11080;
(statearr_11094_12768[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11080[(4)]))){
var statearr_11095_12769 = state_11080;
(statearr_11095_12769[(1)] = cljs.core.first((state_11080[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12774 = state_11080;
state_11080 = G__12774;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = function(state_11080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1.call(this,state_11080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__;
})()
;})(__12729,switch__10724__auto__,c__10794__auto___12745,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async))
})();
var state__10796__auto__ = (function (){var statearr_11100 = f__10795__auto__();
(statearr_11100[(6)] = c__10794__auto___12745);

return statearr_11100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
});})(__12729,c__10794__auto___12745,G__11040_12730,G__11040_12731__$1,n__4613__auto___12728,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11040_12731__$1)].join('')));

}

var G__12775 = (__12729 + (1));
__12729 = G__12775;
continue;
} else {
}
break;
}

var c__10794__auto___12776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11122){
var state_val_11123 = (state_11122[(1)]);
if((state_val_11123 === (7))){
var inst_11118 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
var statearr_11132_12777 = state_11122__$1;
(statearr_11132_12777[(2)] = inst_11118);

(statearr_11132_12777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (1))){
var state_11122__$1 = state_11122;
var statearr_11133_12778 = state_11122__$1;
(statearr_11133_12778[(2)] = null);

(statearr_11133_12778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (4))){
var inst_11103 = (state_11122[(7)]);
var inst_11103__$1 = (state_11122[(2)]);
var inst_11104 = (inst_11103__$1 == null);
var state_11122__$1 = (function (){var statearr_11134 = state_11122;
(statearr_11134[(7)] = inst_11103__$1);

return statearr_11134;
})();
if(cljs.core.truth_(inst_11104)){
var statearr_11135_12779 = state_11122__$1;
(statearr_11135_12779[(1)] = (5));

} else {
var statearr_11136_12780 = state_11122__$1;
(statearr_11136_12780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (6))){
var inst_11103 = (state_11122[(7)]);
var inst_11108 = (state_11122[(8)]);
var inst_11108__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11110 = [inst_11103,inst_11108__$1];
var inst_11111 = (new cljs.core.PersistentVector(null,2,(5),inst_11109,inst_11110,null));
var state_11122__$1 = (function (){var statearr_11137 = state_11122;
(statearr_11137[(8)] = inst_11108__$1);

return statearr_11137;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11122__$1,(8),jobs,inst_11111);
} else {
if((state_val_11123 === (3))){
var inst_11120 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11122__$1,inst_11120);
} else {
if((state_val_11123 === (2))){
var state_11122__$1 = state_11122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11122__$1,(4),from);
} else {
if((state_val_11123 === (9))){
var inst_11115 = (state_11122[(2)]);
var state_11122__$1 = (function (){var statearr_11138 = state_11122;
(statearr_11138[(9)] = inst_11115);

return statearr_11138;
})();
var statearr_11139_12789 = state_11122__$1;
(statearr_11139_12789[(2)] = null);

(statearr_11139_12789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (5))){
var inst_11106 = cljs.core.async.close_BANG_(jobs);
var state_11122__$1 = state_11122;
var statearr_11140_12793 = state_11122__$1;
(statearr_11140_12793[(2)] = inst_11106);

(statearr_11140_12793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (8))){
var inst_11108 = (state_11122[(8)]);
var inst_11113 = (state_11122[(2)]);
var state_11122__$1 = (function (){var statearr_11141 = state_11122;
(statearr_11141[(10)] = inst_11113);

return statearr_11141;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11122__$1,(9),results,inst_11108);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0 = (function (){
var statearr_11142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__);

(statearr_11142[(1)] = (1));

return statearr_11142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1 = (function (state_11122){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11122);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11143){var ex__10728__auto__ = e11143;
var statearr_11144_12794 = state_11122;
(statearr_11144_12794[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11122[(4)]))){
var statearr_11145_12795 = state_11122;
(statearr_11145_12795[(1)] = cljs.core.first((state_11122[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12796 = state_11122;
state_11122 = G__12796;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = function(state_11122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1.call(this,state_11122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11146 = f__10795__auto__();
(statearr_11146[(6)] = c__10794__auto___12776);

return statearr_11146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));


var c__10794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11193){
var state_val_11194 = (state_11193[(1)]);
if((state_val_11194 === (7))){
var inst_11189 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11195_12798 = state_11193__$1;
(statearr_11195_12798[(2)] = inst_11189);

(statearr_11195_12798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (20))){
var state_11193__$1 = state_11193;
var statearr_11196_12799 = state_11193__$1;
(statearr_11196_12799[(2)] = null);

(statearr_11196_12799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (1))){
var state_11193__$1 = state_11193;
var statearr_11197_12800 = state_11193__$1;
(statearr_11197_12800[(2)] = null);

(statearr_11197_12800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (4))){
var inst_11149 = (state_11193[(7)]);
var inst_11149__$1 = (state_11193[(2)]);
var inst_11150 = (inst_11149__$1 == null);
var state_11193__$1 = (function (){var statearr_11198 = state_11193;
(statearr_11198[(7)] = inst_11149__$1);

return statearr_11198;
})();
if(cljs.core.truth_(inst_11150)){
var statearr_11199_12801 = state_11193__$1;
(statearr_11199_12801[(1)] = (5));

} else {
var statearr_11200_12802 = state_11193__$1;
(statearr_11200_12802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (15))){
var inst_11171 = (state_11193[(8)]);
var state_11193__$1 = state_11193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11193__$1,(18),to,inst_11171);
} else {
if((state_val_11194 === (21))){
var inst_11184 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11201_12803 = state_11193__$1;
(statearr_11201_12803[(2)] = inst_11184);

(statearr_11201_12803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (13))){
var inst_11186 = (state_11193[(2)]);
var state_11193__$1 = (function (){var statearr_11202 = state_11193;
(statearr_11202[(9)] = inst_11186);

return statearr_11202;
})();
var statearr_11203_12804 = state_11193__$1;
(statearr_11203_12804[(2)] = null);

(statearr_11203_12804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (6))){
var inst_11149 = (state_11193[(7)]);
var state_11193__$1 = state_11193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11193__$1,(11),inst_11149);
} else {
if((state_val_11194 === (17))){
var inst_11179 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
if(cljs.core.truth_(inst_11179)){
var statearr_11204_12805 = state_11193__$1;
(statearr_11204_12805[(1)] = (19));

} else {
var statearr_11205_12806 = state_11193__$1;
(statearr_11205_12806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (3))){
var inst_11191 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11193__$1,inst_11191);
} else {
if((state_val_11194 === (12))){
var inst_11168 = (state_11193[(10)]);
var state_11193__$1 = state_11193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11193__$1,(14),inst_11168);
} else {
if((state_val_11194 === (2))){
var state_11193__$1 = state_11193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11193__$1,(4),results);
} else {
if((state_val_11194 === (19))){
var state_11193__$1 = state_11193;
var statearr_11207_12807 = state_11193__$1;
(statearr_11207_12807[(2)] = null);

(statearr_11207_12807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (11))){
var inst_11168 = (state_11193[(2)]);
var state_11193__$1 = (function (){var statearr_11208 = state_11193;
(statearr_11208[(10)] = inst_11168);

return statearr_11208;
})();
var statearr_11209_12808 = state_11193__$1;
(statearr_11209_12808[(2)] = null);

(statearr_11209_12808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (9))){
var state_11193__$1 = state_11193;
var statearr_11210_12809 = state_11193__$1;
(statearr_11210_12809[(2)] = null);

(statearr_11210_12809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (5))){
var state_11193__$1 = state_11193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11211_12810 = state_11193__$1;
(statearr_11211_12810[(1)] = (8));

} else {
var statearr_11212_12811 = state_11193__$1;
(statearr_11212_12811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (14))){
var inst_11171 = (state_11193[(8)]);
var inst_11171__$1 = (state_11193[(2)]);
var inst_11172 = (inst_11171__$1 == null);
var inst_11173 = cljs.core.not(inst_11172);
var state_11193__$1 = (function (){var statearr_11213 = state_11193;
(statearr_11213[(8)] = inst_11171__$1);

return statearr_11213;
})();
if(inst_11173){
var statearr_11214_12812 = state_11193__$1;
(statearr_11214_12812[(1)] = (15));

} else {
var statearr_11215_12813 = state_11193__$1;
(statearr_11215_12813[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (16))){
var state_11193__$1 = state_11193;
var statearr_11216_12814 = state_11193__$1;
(statearr_11216_12814[(2)] = false);

(statearr_11216_12814[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (10))){
var inst_11165 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11217_12815 = state_11193__$1;
(statearr_11217_12815[(2)] = inst_11165);

(statearr_11217_12815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (18))){
var inst_11176 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11218_12816 = state_11193__$1;
(statearr_11218_12816[(2)] = inst_11176);

(statearr_11218_12816[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (8))){
var inst_11153 = cljs.core.async.close_BANG_(to);
var state_11193__$1 = state_11193;
var statearr_11219_12817 = state_11193__$1;
(statearr_11219_12817[(2)] = inst_11153);

(statearr_11219_12817[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0 = (function (){
var statearr_11220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__);

(statearr_11220[(1)] = (1));

return statearr_11220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1 = (function (state_11193){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11193);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11221){var ex__10728__auto__ = e11221;
var statearr_11222_12818 = state_11193;
(statearr_11222_12818[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11193[(4)]))){
var statearr_11223_12819 = state_11193;
(statearr_11223_12819[(1)] = cljs.core.first((state_11193[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12820 = state_11193;
state_11193 = G__12820;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__ = function(state_11193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1.call(this,state_11193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11224 = f__10795__auto__();
(statearr_11224[(6)] = c__10794__auto__);

return statearr_11224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));

return c__10794__auto__;
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
var G__11234 = arguments.length;
switch (G__11234) {
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
var G__11236 = arguments.length;
switch (G__11236) {
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
var G__11238 = arguments.length;
switch (G__11238) {
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
var c__10794__auto___12836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11268){
var state_val_11269 = (state_11268[(1)]);
if((state_val_11269 === (7))){
var inst_11264 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
var statearr_11270_12837 = state_11268__$1;
(statearr_11270_12837[(2)] = inst_11264);

(statearr_11270_12837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (1))){
var state_11268__$1 = state_11268;
var statearr_11271_12838 = state_11268__$1;
(statearr_11271_12838[(2)] = null);

(statearr_11271_12838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (4))){
var inst_11245 = (state_11268[(7)]);
var inst_11245__$1 = (state_11268[(2)]);
var inst_11246 = (inst_11245__$1 == null);
var state_11268__$1 = (function (){var statearr_11272 = state_11268;
(statearr_11272[(7)] = inst_11245__$1);

return statearr_11272;
})();
if(cljs.core.truth_(inst_11246)){
var statearr_11273_12839 = state_11268__$1;
(statearr_11273_12839[(1)] = (5));

} else {
var statearr_11274_12840 = state_11268__$1;
(statearr_11274_12840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (13))){
var state_11268__$1 = state_11268;
var statearr_11275_12841 = state_11268__$1;
(statearr_11275_12841[(2)] = null);

(statearr_11275_12841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (6))){
var inst_11245 = (state_11268[(7)]);
var inst_11251 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11245) : p.call(null,inst_11245));
var state_11268__$1 = state_11268;
if(cljs.core.truth_(inst_11251)){
var statearr_11276_12842 = state_11268__$1;
(statearr_11276_12842[(1)] = (9));

} else {
var statearr_11277_12843 = state_11268__$1;
(statearr_11277_12843[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (3))){
var inst_11266 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11268__$1,inst_11266);
} else {
if((state_val_11269 === (12))){
var state_11268__$1 = state_11268;
var statearr_11278_12844 = state_11268__$1;
(statearr_11278_12844[(2)] = null);

(statearr_11278_12844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (2))){
var state_11268__$1 = state_11268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11268__$1,(4),ch);
} else {
if((state_val_11269 === (11))){
var inst_11245 = (state_11268[(7)]);
var inst_11255 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11268__$1,(8),inst_11255,inst_11245);
} else {
if((state_val_11269 === (9))){
var state_11268__$1 = state_11268;
var statearr_11279_12846 = state_11268__$1;
(statearr_11279_12846[(2)] = tc);

(statearr_11279_12846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (5))){
var inst_11248 = cljs.core.async.close_BANG_(tc);
var inst_11249 = cljs.core.async.close_BANG_(fc);
var state_11268__$1 = (function (){var statearr_11280 = state_11268;
(statearr_11280[(8)] = inst_11248);

return statearr_11280;
})();
var statearr_11281_12847 = state_11268__$1;
(statearr_11281_12847[(2)] = inst_11249);

(statearr_11281_12847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (14))){
var inst_11262 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
var statearr_11282_12848 = state_11268__$1;
(statearr_11282_12848[(2)] = inst_11262);

(statearr_11282_12848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (10))){
var state_11268__$1 = state_11268;
var statearr_11283_12849 = state_11268__$1;
(statearr_11283_12849[(2)] = fc);

(statearr_11283_12849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (8))){
var inst_11257 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
if(cljs.core.truth_(inst_11257)){
var statearr_11284_12850 = state_11268__$1;
(statearr_11284_12850[(1)] = (12));

} else {
var statearr_11285_12851 = state_11268__$1;
(statearr_11285_12851[(1)] = (13));

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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_11286 = [null,null,null,null,null,null,null,null,null];
(statearr_11286[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_11286[(1)] = (1));

return statearr_11286;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_11268){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11268);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11287){var ex__10728__auto__ = e11287;
var statearr_11288_12852 = state_11268;
(statearr_11288_12852[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11268[(4)]))){
var statearr_11289_12853 = state_11268;
(statearr_11289_12853[(1)] = cljs.core.first((state_11268[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12854 = state_11268;
state_11268 = G__12854;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_11268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_11268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11290 = f__10795__auto__();
(statearr_11290[(6)] = c__10794__auto___12836);

return statearr_11290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
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
var c__10794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11312){
var state_val_11313 = (state_11312[(1)]);
if((state_val_11313 === (7))){
var inst_11308 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11316_12855 = state_11312__$1;
(statearr_11316_12855[(2)] = inst_11308);

(statearr_11316_12855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (1))){
var inst_11291 = init;
var inst_11292 = inst_11291;
var state_11312__$1 = (function (){var statearr_11317 = state_11312;
(statearr_11317[(7)] = inst_11292);

return statearr_11317;
})();
var statearr_11318_12856 = state_11312__$1;
(statearr_11318_12856[(2)] = null);

(statearr_11318_12856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (4))){
var inst_11295 = (state_11312[(8)]);
var inst_11295__$1 = (state_11312[(2)]);
var inst_11296 = (inst_11295__$1 == null);
var state_11312__$1 = (function (){var statearr_11319 = state_11312;
(statearr_11319[(8)] = inst_11295__$1);

return statearr_11319;
})();
if(cljs.core.truth_(inst_11296)){
var statearr_11320_12857 = state_11312__$1;
(statearr_11320_12857[(1)] = (5));

} else {
var statearr_11321_12858 = state_11312__$1;
(statearr_11321_12858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (6))){
var inst_11292 = (state_11312[(7)]);
var inst_11299 = (state_11312[(9)]);
var inst_11295 = (state_11312[(8)]);
var inst_11299__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11292,inst_11295) : f.call(null,inst_11292,inst_11295));
var inst_11300 = cljs.core.reduced_QMARK_(inst_11299__$1);
var state_11312__$1 = (function (){var statearr_11322 = state_11312;
(statearr_11322[(9)] = inst_11299__$1);

return statearr_11322;
})();
if(inst_11300){
var statearr_11323_12859 = state_11312__$1;
(statearr_11323_12859[(1)] = (8));

} else {
var statearr_11324_12860 = state_11312__$1;
(statearr_11324_12860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (3))){
var inst_11310 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11312__$1,inst_11310);
} else {
if((state_val_11313 === (2))){
var state_11312__$1 = state_11312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11312__$1,(4),ch);
} else {
if((state_val_11313 === (9))){
var inst_11299 = (state_11312[(9)]);
var inst_11292 = inst_11299;
var state_11312__$1 = (function (){var statearr_11325 = state_11312;
(statearr_11325[(7)] = inst_11292);

return statearr_11325;
})();
var statearr_11326_12861 = state_11312__$1;
(statearr_11326_12861[(2)] = null);

(statearr_11326_12861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (5))){
var inst_11292 = (state_11312[(7)]);
var state_11312__$1 = state_11312;
var statearr_11327_12862 = state_11312__$1;
(statearr_11327_12862[(2)] = inst_11292);

(statearr_11327_12862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (10))){
var inst_11306 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11328_12863 = state_11312__$1;
(statearr_11328_12863[(2)] = inst_11306);

(statearr_11328_12863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (8))){
var inst_11299 = (state_11312[(9)]);
var inst_11302 = cljs.core.deref(inst_11299);
var state_11312__$1 = state_11312;
var statearr_11329_12864 = state_11312__$1;
(statearr_11329_12864[(2)] = inst_11302);

(statearr_11329_12864[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10725__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10725__auto____0 = (function (){
var statearr_11332 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11332[(0)] = cljs$core$async$reduce_$_state_machine__10725__auto__);

(statearr_11332[(1)] = (1));

return statearr_11332;
});
var cljs$core$async$reduce_$_state_machine__10725__auto____1 = (function (state_11312){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11312);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11333){var ex__10728__auto__ = e11333;
var statearr_11336_12867 = state_11312;
(statearr_11336_12867[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11312[(4)]))){
var statearr_11337_12868 = state_11312;
(statearr_11337_12868[(1)] = cljs.core.first((state_11312[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12869 = state_11312;
state_11312 = G__12869;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10725__auto__ = function(state_11312){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10725__auto____1.call(this,state_11312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10725__auto____0;
cljs$core$async$reduce_$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10725__auto____1;
return cljs$core$async$reduce_$_state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11338 = f__10795__auto__();
(statearr_11338[(6)] = c__10794__auto__);

return statearr_11338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));

return c__10794__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11344){
var state_val_11345 = (state_11344[(1)]);
if((state_val_11345 === (1))){
var inst_11339 = cljs.core.async.reduce(f__$1,init,ch);
var state_11344__$1 = state_11344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11344__$1,(2),inst_11339);
} else {
if((state_val_11345 === (2))){
var inst_11341 = (state_11344[(2)]);
var inst_11342 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11341) : f__$1.call(null,inst_11341));
var state_11344__$1 = state_11344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11344__$1,inst_11342);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10725__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10725__auto____0 = (function (){
var statearr_11346 = [null,null,null,null,null,null,null];
(statearr_11346[(0)] = cljs$core$async$transduce_$_state_machine__10725__auto__);

(statearr_11346[(1)] = (1));

return statearr_11346;
});
var cljs$core$async$transduce_$_state_machine__10725__auto____1 = (function (state_11344){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11344);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11347){var ex__10728__auto__ = e11347;
var statearr_11348_12872 = state_11344;
(statearr_11348_12872[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11344[(4)]))){
var statearr_11349_12873 = state_11344;
(statearr_11349_12873[(1)] = cljs.core.first((state_11344[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12874 = state_11344;
state_11344 = G__12874;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10725__auto__ = function(state_11344){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10725__auto____1.call(this,state_11344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10725__auto____0;
cljs$core$async$transduce_$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10725__auto____1;
return cljs$core$async$transduce_$_state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11350 = f__10795__auto__();
(statearr_11350[(6)] = c__10794__auto__);

return statearr_11350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));

return c__10794__auto__;
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
var G__11352 = arguments.length;
switch (G__11352) {
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
var c__10794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11378){
var state_val_11379 = (state_11378[(1)]);
if((state_val_11379 === (7))){
var inst_11360 = (state_11378[(2)]);
var state_11378__$1 = state_11378;
var statearr_11383_12879 = state_11378__$1;
(statearr_11383_12879[(2)] = inst_11360);

(statearr_11383_12879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (1))){
var inst_11353 = cljs.core.seq(coll);
var inst_11354 = inst_11353;
var state_11378__$1 = (function (){var statearr_11384 = state_11378;
(statearr_11384[(7)] = inst_11354);

return statearr_11384;
})();
var statearr_11385_12890 = state_11378__$1;
(statearr_11385_12890[(2)] = null);

(statearr_11385_12890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (4))){
var inst_11354 = (state_11378[(7)]);
var inst_11358 = cljs.core.first(inst_11354);
var state_11378__$1 = state_11378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11378__$1,(7),ch,inst_11358);
} else {
if((state_val_11379 === (13))){
var inst_11372 = (state_11378[(2)]);
var state_11378__$1 = state_11378;
var statearr_11386_12891 = state_11378__$1;
(statearr_11386_12891[(2)] = inst_11372);

(statearr_11386_12891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (6))){
var inst_11363 = (state_11378[(2)]);
var state_11378__$1 = state_11378;
if(cljs.core.truth_(inst_11363)){
var statearr_11388_12894 = state_11378__$1;
(statearr_11388_12894[(1)] = (8));

} else {
var statearr_11389_12895 = state_11378__$1;
(statearr_11389_12895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (3))){
var inst_11376 = (state_11378[(2)]);
var state_11378__$1 = state_11378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11378__$1,inst_11376);
} else {
if((state_val_11379 === (12))){
var state_11378__$1 = state_11378;
var statearr_11391_12896 = state_11378__$1;
(statearr_11391_12896[(2)] = null);

(statearr_11391_12896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (2))){
var inst_11354 = (state_11378[(7)]);
var state_11378__$1 = state_11378;
if(cljs.core.truth_(inst_11354)){
var statearr_11392_12899 = state_11378__$1;
(statearr_11392_12899[(1)] = (4));

} else {
var statearr_11393_12900 = state_11378__$1;
(statearr_11393_12900[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (11))){
var inst_11369 = cljs.core.async.close_BANG_(ch);
var state_11378__$1 = state_11378;
var statearr_11394_12901 = state_11378__$1;
(statearr_11394_12901[(2)] = inst_11369);

(statearr_11394_12901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (9))){
var state_11378__$1 = state_11378;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11395_12902 = state_11378__$1;
(statearr_11395_12902[(1)] = (11));

} else {
var statearr_11396_12903 = state_11378__$1;
(statearr_11396_12903[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (5))){
var inst_11354 = (state_11378[(7)]);
var state_11378__$1 = state_11378;
var statearr_11397_12907 = state_11378__$1;
(statearr_11397_12907[(2)] = inst_11354);

(statearr_11397_12907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (10))){
var inst_11374 = (state_11378[(2)]);
var state_11378__$1 = state_11378;
var statearr_11398_12909 = state_11378__$1;
(statearr_11398_12909[(2)] = inst_11374);

(statearr_11398_12909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11379 === (8))){
var inst_11354 = (state_11378[(7)]);
var inst_11365 = cljs.core.next(inst_11354);
var inst_11354__$1 = inst_11365;
var state_11378__$1 = (function (){var statearr_11399 = state_11378;
(statearr_11399[(7)] = inst_11354__$1);

return statearr_11399;
})();
var statearr_11400_12912 = state_11378__$1;
(statearr_11400_12912[(2)] = null);

(statearr_11400_12912[(1)] = (2));


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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_11401 = [null,null,null,null,null,null,null,null];
(statearr_11401[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_11401[(1)] = (1));

return statearr_11401;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_11378){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11378);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11402){var ex__10728__auto__ = e11402;
var statearr_11403_12914 = state_11378;
(statearr_11403_12914[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11378[(4)]))){
var statearr_11404_12915 = state_11378;
(statearr_11404_12915[(1)] = cljs.core.first((state_11378[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12916 = state_11378;
state_11378 = G__12916;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_11378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_11378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11405 = f__10795__auto__();
(statearr_11405[(6)] = c__10794__auto__);

return statearr_11405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));

return c__10794__auto__;
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
var G__11407 = arguments.length;
switch (G__11407) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12922 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12922(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12923 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12923(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12924 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12924(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12925 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12925(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11412 = (function (ch,cs,meta11413){
this.ch = ch;
this.cs = cs;
this.meta11413 = meta11413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11414,meta11413__$1){
var self__ = this;
var _11414__$1 = this;
return (new cljs.core.async.t_cljs$core$async11412(self__.ch,self__.cs,meta11413__$1));
}));

(cljs.core.async.t_cljs$core$async11412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11414){
var self__ = this;
var _11414__$1 = this;
return self__.meta11413;
}));

(cljs.core.async.t_cljs$core$async11412.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11412.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11412.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11412.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11412.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11413","meta11413",982529827,null)], null);
}));

(cljs.core.async.t_cljs$core$async11412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11412");

(cljs.core.async.t_cljs$core$async11412.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11412.
 */
cljs.core.async.__GT_t_cljs$core$async11412 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11412(ch__$1,cs__$1,meta11413){
return (new cljs.core.async.t_cljs$core$async11412(ch__$1,cs__$1,meta11413));
});

}

return (new cljs.core.async.t_cljs$core$async11412(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10794__auto___12926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11554){
var state_val_11555 = (state_11554[(1)]);
if((state_val_11555 === (7))){
var inst_11550 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11556_12927 = state_11554__$1;
(statearr_11556_12927[(2)] = inst_11550);

(statearr_11556_12927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (20))){
var inst_11455 = (state_11554[(7)]);
var inst_11467 = cljs.core.first(inst_11455);
var inst_11468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11467,(0),null);
var inst_11469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11467,(1),null);
var state_11554__$1 = (function (){var statearr_11557 = state_11554;
(statearr_11557[(8)] = inst_11468);

return statearr_11557;
})();
if(cljs.core.truth_(inst_11469)){
var statearr_11558_12928 = state_11554__$1;
(statearr_11558_12928[(1)] = (22));

} else {
var statearr_11559_12929 = state_11554__$1;
(statearr_11559_12929[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (27))){
var inst_11497 = (state_11554[(9)]);
var inst_11499 = (state_11554[(10)]);
var inst_11421 = (state_11554[(11)]);
var inst_11504 = (state_11554[(12)]);
var inst_11504__$1 = cljs.core._nth(inst_11497,inst_11499);
var inst_11505 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11504__$1,inst_11421,done);
var state_11554__$1 = (function (){var statearr_11560 = state_11554;
(statearr_11560[(12)] = inst_11504__$1);

return statearr_11560;
})();
if(cljs.core.truth_(inst_11505)){
var statearr_11561_12930 = state_11554__$1;
(statearr_11561_12930[(1)] = (30));

} else {
var statearr_11562_12931 = state_11554__$1;
(statearr_11562_12931[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (1))){
var state_11554__$1 = state_11554;
var statearr_11564_12932 = state_11554__$1;
(statearr_11564_12932[(2)] = null);

(statearr_11564_12932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (24))){
var inst_11455 = (state_11554[(7)]);
var inst_11474 = (state_11554[(2)]);
var inst_11475 = cljs.core.next(inst_11455);
var inst_11430 = inst_11475;
var inst_11431 = null;
var inst_11432 = (0);
var inst_11433 = (0);
var state_11554__$1 = (function (){var statearr_11565 = state_11554;
(statearr_11565[(13)] = inst_11432);

(statearr_11565[(14)] = inst_11431);

(statearr_11565[(15)] = inst_11474);

(statearr_11565[(16)] = inst_11433);

(statearr_11565[(17)] = inst_11430);

return statearr_11565;
})();
var statearr_11566_12934 = state_11554__$1;
(statearr_11566_12934[(2)] = null);

(statearr_11566_12934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (39))){
var state_11554__$1 = state_11554;
var statearr_11570_12936 = state_11554__$1;
(statearr_11570_12936[(2)] = null);

(statearr_11570_12936[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (4))){
var inst_11421 = (state_11554[(11)]);
var inst_11421__$1 = (state_11554[(2)]);
var inst_11422 = (inst_11421__$1 == null);
var state_11554__$1 = (function (){var statearr_11571 = state_11554;
(statearr_11571[(11)] = inst_11421__$1);

return statearr_11571;
})();
if(cljs.core.truth_(inst_11422)){
var statearr_11572_12937 = state_11554__$1;
(statearr_11572_12937[(1)] = (5));

} else {
var statearr_11573_12938 = state_11554__$1;
(statearr_11573_12938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (15))){
var inst_11432 = (state_11554[(13)]);
var inst_11431 = (state_11554[(14)]);
var inst_11433 = (state_11554[(16)]);
var inst_11430 = (state_11554[(17)]);
var inst_11450 = (state_11554[(2)]);
var inst_11451 = (inst_11433 + (1));
var tmp11567 = inst_11432;
var tmp11568 = inst_11431;
var tmp11569 = inst_11430;
var inst_11430__$1 = tmp11569;
var inst_11431__$1 = tmp11568;
var inst_11432__$1 = tmp11567;
var inst_11433__$1 = inst_11451;
var state_11554__$1 = (function (){var statearr_11574 = state_11554;
(statearr_11574[(13)] = inst_11432__$1);

(statearr_11574[(14)] = inst_11431__$1);

(statearr_11574[(18)] = inst_11450);

(statearr_11574[(16)] = inst_11433__$1);

(statearr_11574[(17)] = inst_11430__$1);

return statearr_11574;
})();
var statearr_11575_12939 = state_11554__$1;
(statearr_11575_12939[(2)] = null);

(statearr_11575_12939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (21))){
var inst_11478 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11581_12941 = state_11554__$1;
(statearr_11581_12941[(2)] = inst_11478);

(statearr_11581_12941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (31))){
var inst_11504 = (state_11554[(12)]);
var inst_11508 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11504);
var state_11554__$1 = state_11554;
var statearr_11582_12942 = state_11554__$1;
(statearr_11582_12942[(2)] = inst_11508);

(statearr_11582_12942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (32))){
var inst_11496 = (state_11554[(19)]);
var inst_11497 = (state_11554[(9)]);
var inst_11499 = (state_11554[(10)]);
var inst_11498 = (state_11554[(20)]);
var inst_11510 = (state_11554[(2)]);
var inst_11511 = (inst_11499 + (1));
var tmp11578 = inst_11496;
var tmp11579 = inst_11497;
var tmp11580 = inst_11498;
var inst_11496__$1 = tmp11578;
var inst_11497__$1 = tmp11579;
var inst_11498__$1 = tmp11580;
var inst_11499__$1 = inst_11511;
var state_11554__$1 = (function (){var statearr_11585 = state_11554;
(statearr_11585[(19)] = inst_11496__$1);

(statearr_11585[(9)] = inst_11497__$1);

(statearr_11585[(10)] = inst_11499__$1);

(statearr_11585[(20)] = inst_11498__$1);

(statearr_11585[(21)] = inst_11510);

return statearr_11585;
})();
var statearr_11586_12944 = state_11554__$1;
(statearr_11586_12944[(2)] = null);

(statearr_11586_12944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (40))){
var inst_11523 = (state_11554[(22)]);
var inst_11527 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11523);
var state_11554__$1 = state_11554;
var statearr_11587_12945 = state_11554__$1;
(statearr_11587_12945[(2)] = inst_11527);

(statearr_11587_12945[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (33))){
var inst_11514 = (state_11554[(23)]);
var inst_11516 = cljs.core.chunked_seq_QMARK_(inst_11514);
var state_11554__$1 = state_11554;
if(inst_11516){
var statearr_11588_12946 = state_11554__$1;
(statearr_11588_12946[(1)] = (36));

} else {
var statearr_11589_12947 = state_11554__$1;
(statearr_11589_12947[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (13))){
var inst_11442 = (state_11554[(24)]);
var inst_11447 = cljs.core.async.close_BANG_(inst_11442);
var state_11554__$1 = state_11554;
var statearr_11590_12948 = state_11554__$1;
(statearr_11590_12948[(2)] = inst_11447);

(statearr_11590_12948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (22))){
var inst_11468 = (state_11554[(8)]);
var inst_11471 = cljs.core.async.close_BANG_(inst_11468);
var state_11554__$1 = state_11554;
var statearr_11592_12949 = state_11554__$1;
(statearr_11592_12949[(2)] = inst_11471);

(statearr_11592_12949[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (36))){
var inst_11514 = (state_11554[(23)]);
var inst_11518 = cljs.core.chunk_first(inst_11514);
var inst_11519 = cljs.core.chunk_rest(inst_11514);
var inst_11520 = cljs.core.count(inst_11518);
var inst_11496 = inst_11519;
var inst_11497 = inst_11518;
var inst_11498 = inst_11520;
var inst_11499 = (0);
var state_11554__$1 = (function (){var statearr_11593 = state_11554;
(statearr_11593[(19)] = inst_11496);

(statearr_11593[(9)] = inst_11497);

(statearr_11593[(10)] = inst_11499);

(statearr_11593[(20)] = inst_11498);

return statearr_11593;
})();
var statearr_11594_12950 = state_11554__$1;
(statearr_11594_12950[(2)] = null);

(statearr_11594_12950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (41))){
var inst_11514 = (state_11554[(23)]);
var inst_11529 = (state_11554[(2)]);
var inst_11530 = cljs.core.next(inst_11514);
var inst_11496 = inst_11530;
var inst_11497 = null;
var inst_11498 = (0);
var inst_11499 = (0);
var state_11554__$1 = (function (){var statearr_11595 = state_11554;
(statearr_11595[(19)] = inst_11496);

(statearr_11595[(9)] = inst_11497);

(statearr_11595[(10)] = inst_11499);

(statearr_11595[(20)] = inst_11498);

(statearr_11595[(25)] = inst_11529);

return statearr_11595;
})();
var statearr_11597_12951 = state_11554__$1;
(statearr_11597_12951[(2)] = null);

(statearr_11597_12951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (43))){
var state_11554__$1 = state_11554;
var statearr_11598_12952 = state_11554__$1;
(statearr_11598_12952[(2)] = null);

(statearr_11598_12952[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (29))){
var inst_11538 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11600_12953 = state_11554__$1;
(statearr_11600_12953[(2)] = inst_11538);

(statearr_11600_12953[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (44))){
var inst_11547 = (state_11554[(2)]);
var state_11554__$1 = (function (){var statearr_11601 = state_11554;
(statearr_11601[(26)] = inst_11547);

return statearr_11601;
})();
var statearr_11602_12954 = state_11554__$1;
(statearr_11602_12954[(2)] = null);

(statearr_11602_12954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (6))){
var inst_11488 = (state_11554[(27)]);
var inst_11487 = cljs.core.deref(cs);
var inst_11488__$1 = cljs.core.keys(inst_11487);
var inst_11489 = cljs.core.count(inst_11488__$1);
var inst_11490 = cljs.core.reset_BANG_(dctr,inst_11489);
var inst_11495 = cljs.core.seq(inst_11488__$1);
var inst_11496 = inst_11495;
var inst_11497 = null;
var inst_11498 = (0);
var inst_11499 = (0);
var state_11554__$1 = (function (){var statearr_11603 = state_11554;
(statearr_11603[(19)] = inst_11496);

(statearr_11603[(28)] = inst_11490);

(statearr_11603[(9)] = inst_11497);

(statearr_11603[(27)] = inst_11488__$1);

(statearr_11603[(10)] = inst_11499);

(statearr_11603[(20)] = inst_11498);

return statearr_11603;
})();
var statearr_11604_12955 = state_11554__$1;
(statearr_11604_12955[(2)] = null);

(statearr_11604_12955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (28))){
var inst_11496 = (state_11554[(19)]);
var inst_11514 = (state_11554[(23)]);
var inst_11514__$1 = cljs.core.seq(inst_11496);
var state_11554__$1 = (function (){var statearr_11605 = state_11554;
(statearr_11605[(23)] = inst_11514__$1);

return statearr_11605;
})();
if(inst_11514__$1){
var statearr_11606_12956 = state_11554__$1;
(statearr_11606_12956[(1)] = (33));

} else {
var statearr_11607_12957 = state_11554__$1;
(statearr_11607_12957[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (25))){
var inst_11499 = (state_11554[(10)]);
var inst_11498 = (state_11554[(20)]);
var inst_11501 = (inst_11499 < inst_11498);
var inst_11502 = inst_11501;
var state_11554__$1 = state_11554;
if(cljs.core.truth_(inst_11502)){
var statearr_11608_12958 = state_11554__$1;
(statearr_11608_12958[(1)] = (27));

} else {
var statearr_11609_12959 = state_11554__$1;
(statearr_11609_12959[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (34))){
var state_11554__$1 = state_11554;
var statearr_11610_12960 = state_11554__$1;
(statearr_11610_12960[(2)] = null);

(statearr_11610_12960[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (17))){
var state_11554__$1 = state_11554;
var statearr_11611_12961 = state_11554__$1;
(statearr_11611_12961[(2)] = null);

(statearr_11611_12961[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (3))){
var inst_11552 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11554__$1,inst_11552);
} else {
if((state_val_11555 === (12))){
var inst_11483 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11612_12962 = state_11554__$1;
(statearr_11612_12962[(2)] = inst_11483);

(statearr_11612_12962[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (2))){
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11554__$1,(4),ch);
} else {
if((state_val_11555 === (23))){
var state_11554__$1 = state_11554;
var statearr_11613_12963 = state_11554__$1;
(statearr_11613_12963[(2)] = null);

(statearr_11613_12963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (35))){
var inst_11536 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11614_12964 = state_11554__$1;
(statearr_11614_12964[(2)] = inst_11536);

(statearr_11614_12964[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (19))){
var inst_11455 = (state_11554[(7)]);
var inst_11459 = cljs.core.chunk_first(inst_11455);
var inst_11460 = cljs.core.chunk_rest(inst_11455);
var inst_11461 = cljs.core.count(inst_11459);
var inst_11430 = inst_11460;
var inst_11431 = inst_11459;
var inst_11432 = inst_11461;
var inst_11433 = (0);
var state_11554__$1 = (function (){var statearr_11615 = state_11554;
(statearr_11615[(13)] = inst_11432);

(statearr_11615[(14)] = inst_11431);

(statearr_11615[(16)] = inst_11433);

(statearr_11615[(17)] = inst_11430);

return statearr_11615;
})();
var statearr_11616_12965 = state_11554__$1;
(statearr_11616_12965[(2)] = null);

(statearr_11616_12965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (11))){
var inst_11430 = (state_11554[(17)]);
var inst_11455 = (state_11554[(7)]);
var inst_11455__$1 = cljs.core.seq(inst_11430);
var state_11554__$1 = (function (){var statearr_11617 = state_11554;
(statearr_11617[(7)] = inst_11455__$1);

return statearr_11617;
})();
if(inst_11455__$1){
var statearr_11618_12966 = state_11554__$1;
(statearr_11618_12966[(1)] = (16));

} else {
var statearr_11619_12967 = state_11554__$1;
(statearr_11619_12967[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (9))){
var inst_11485 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11621_12968 = state_11554__$1;
(statearr_11621_12968[(2)] = inst_11485);

(statearr_11621_12968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (5))){
var inst_11428 = cljs.core.deref(cs);
var inst_11429 = cljs.core.seq(inst_11428);
var inst_11430 = inst_11429;
var inst_11431 = null;
var inst_11432 = (0);
var inst_11433 = (0);
var state_11554__$1 = (function (){var statearr_11622 = state_11554;
(statearr_11622[(13)] = inst_11432);

(statearr_11622[(14)] = inst_11431);

(statearr_11622[(16)] = inst_11433);

(statearr_11622[(17)] = inst_11430);

return statearr_11622;
})();
var statearr_11623_12969 = state_11554__$1;
(statearr_11623_12969[(2)] = null);

(statearr_11623_12969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (14))){
var state_11554__$1 = state_11554;
var statearr_11624_12970 = state_11554__$1;
(statearr_11624_12970[(2)] = null);

(statearr_11624_12970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (45))){
var inst_11544 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11625_12971 = state_11554__$1;
(statearr_11625_12971[(2)] = inst_11544);

(statearr_11625_12971[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (26))){
var inst_11488 = (state_11554[(27)]);
var inst_11540 = (state_11554[(2)]);
var inst_11541 = cljs.core.seq(inst_11488);
var state_11554__$1 = (function (){var statearr_11627 = state_11554;
(statearr_11627[(29)] = inst_11540);

return statearr_11627;
})();
if(inst_11541){
var statearr_11628_12973 = state_11554__$1;
(statearr_11628_12973[(1)] = (42));

} else {
var statearr_11629_12974 = state_11554__$1;
(statearr_11629_12974[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (16))){
var inst_11455 = (state_11554[(7)]);
var inst_11457 = cljs.core.chunked_seq_QMARK_(inst_11455);
var state_11554__$1 = state_11554;
if(inst_11457){
var statearr_11631_12975 = state_11554__$1;
(statearr_11631_12975[(1)] = (19));

} else {
var statearr_11632_12976 = state_11554__$1;
(statearr_11632_12976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (38))){
var inst_11533 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11633_12977 = state_11554__$1;
(statearr_11633_12977[(2)] = inst_11533);

(statearr_11633_12977[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (30))){
var state_11554__$1 = state_11554;
var statearr_11634_12978 = state_11554__$1;
(statearr_11634_12978[(2)] = null);

(statearr_11634_12978[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (10))){
var inst_11431 = (state_11554[(14)]);
var inst_11433 = (state_11554[(16)]);
var inst_11441 = cljs.core._nth(inst_11431,inst_11433);
var inst_11442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11441,(0),null);
var inst_11443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11441,(1),null);
var state_11554__$1 = (function (){var statearr_11638 = state_11554;
(statearr_11638[(24)] = inst_11442);

return statearr_11638;
})();
if(cljs.core.truth_(inst_11443)){
var statearr_11639_12979 = state_11554__$1;
(statearr_11639_12979[(1)] = (13));

} else {
var statearr_11640_12981 = state_11554__$1;
(statearr_11640_12981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (18))){
var inst_11481 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11641_12982 = state_11554__$1;
(statearr_11641_12982[(2)] = inst_11481);

(statearr_11641_12982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (42))){
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11554__$1,(45),dchan);
} else {
if((state_val_11555 === (37))){
var inst_11523 = (state_11554[(22)]);
var inst_11514 = (state_11554[(23)]);
var inst_11421 = (state_11554[(11)]);
var inst_11523__$1 = cljs.core.first(inst_11514);
var inst_11524 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11523__$1,inst_11421,done);
var state_11554__$1 = (function (){var statearr_11642 = state_11554;
(statearr_11642[(22)] = inst_11523__$1);

return statearr_11642;
})();
if(cljs.core.truth_(inst_11524)){
var statearr_11643_12983 = state_11554__$1;
(statearr_11643_12983[(1)] = (39));

} else {
var statearr_11644_12984 = state_11554__$1;
(statearr_11644_12984[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (8))){
var inst_11432 = (state_11554[(13)]);
var inst_11433 = (state_11554[(16)]);
var inst_11435 = (inst_11433 < inst_11432);
var inst_11436 = inst_11435;
var state_11554__$1 = state_11554;
if(cljs.core.truth_(inst_11436)){
var statearr_11645_12985 = state_11554__$1;
(statearr_11645_12985[(1)] = (10));

} else {
var statearr_11646_12986 = state_11554__$1;
(statearr_11646_12986[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10725__auto__ = null;
var cljs$core$async$mult_$_state_machine__10725__auto____0 = (function (){
var statearr_11647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11647[(0)] = cljs$core$async$mult_$_state_machine__10725__auto__);

(statearr_11647[(1)] = (1));

return statearr_11647;
});
var cljs$core$async$mult_$_state_machine__10725__auto____1 = (function (state_11554){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11554);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11648){var ex__10728__auto__ = e11648;
var statearr_11649_12987 = state_11554;
(statearr_11649_12987[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11554[(4)]))){
var statearr_11651_12988 = state_11554;
(statearr_11651_12988[(1)] = cljs.core.first((state_11554[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12989 = state_11554;
state_11554 = G__12989;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10725__auto__ = function(state_11554){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10725__auto____1.call(this,state_11554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10725__auto____0;
cljs$core$async$mult_$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10725__auto____1;
return cljs$core$async$mult_$_state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11652 = f__10795__auto__();
(statearr_11652[(6)] = c__10794__auto___12926);

return statearr_11652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
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
var G__11659 = arguments.length;
switch (G__11659) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12991 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12991(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12992 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12992(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12993 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12993(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12994 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12994(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12995 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12995(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12996 = arguments.length;
var i__4737__auto___12997 = (0);
while(true){
if((i__4737__auto___12997 < len__4736__auto___12996)){
args__4742__auto__.push((arguments[i__4737__auto___12997]));

var G__12998 = (i__4737__auto___12997 + (1));
i__4737__auto___12997 = G__12998;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11668){
var map__11669 = p__11668;
var map__11669__$1 = (((((!((map__11669 == null))))?(((((map__11669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11669):map__11669);
var opts = map__11669__$1;
var statearr_11671_12999 = state;
(statearr_11671_12999[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11672_13000 = state;
(statearr_11672_13000[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11673_13001 = state;
(statearr_11673_13001[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11663){
var G__11664 = cljs.core.first(seq11663);
var seq11663__$1 = cljs.core.next(seq11663);
var G__11665 = cljs.core.first(seq11663__$1);
var seq11663__$2 = cljs.core.next(seq11663__$1);
var G__11666 = cljs.core.first(seq11663__$2);
var seq11663__$3 = cljs.core.next(seq11663__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11664,G__11665,G__11666,seq11663__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11675 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11676){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11676 = meta11676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11677,meta11676__$1){
var self__ = this;
var _11677__$1 = this;
return (new cljs.core.async.t_cljs$core$async11675(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11676__$1));
}));

(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11677){
var self__ = this;
var _11677__$1 = this;
return self__.meta11676;
}));

(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11675.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11676","meta11676",986534830,null)], null);
}));

(cljs.core.async.t_cljs$core$async11675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11675");

(cljs.core.async.t_cljs$core$async11675.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11675.
 */
cljs.core.async.__GT_t_cljs$core$async11675 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11675(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11676){
return (new cljs.core.async.t_cljs$core$async11675(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11676));
});

}

return (new cljs.core.async.t_cljs$core$async11675(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10794__auto___13004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11782){
var state_val_11783 = (state_11782[(1)]);
if((state_val_11783 === (7))){
var inst_11695 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
var statearr_11784_13005 = state_11782__$1;
(statearr_11784_13005[(2)] = inst_11695);

(statearr_11784_13005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (20))){
var inst_11708 = (state_11782[(7)]);
var state_11782__$1 = state_11782;
var statearr_11785_13006 = state_11782__$1;
(statearr_11785_13006[(2)] = inst_11708);

(statearr_11785_13006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (27))){
var state_11782__$1 = state_11782;
var statearr_11786_13007 = state_11782__$1;
(statearr_11786_13007[(2)] = null);

(statearr_11786_13007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (1))){
var inst_11682 = (state_11782[(8)]);
var inst_11682__$1 = calc_state();
var inst_11684 = (inst_11682__$1 == null);
var inst_11685 = cljs.core.not(inst_11684);
var state_11782__$1 = (function (){var statearr_11787 = state_11782;
(statearr_11787[(8)] = inst_11682__$1);

return statearr_11787;
})();
if(inst_11685){
var statearr_11788_13008 = state_11782__$1;
(statearr_11788_13008[(1)] = (2));

} else {
var statearr_11789_13009 = state_11782__$1;
(statearr_11789_13009[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (24))){
var inst_11742 = (state_11782[(9)]);
var inst_11733 = (state_11782[(10)]);
var inst_11756 = (state_11782[(11)]);
var inst_11756__$1 = (inst_11733.cljs$core$IFn$_invoke$arity$1 ? inst_11733.cljs$core$IFn$_invoke$arity$1(inst_11742) : inst_11733.call(null,inst_11742));
var state_11782__$1 = (function (){var statearr_11790 = state_11782;
(statearr_11790[(11)] = inst_11756__$1);

return statearr_11790;
})();
if(cljs.core.truth_(inst_11756__$1)){
var statearr_11791_13010 = state_11782__$1;
(statearr_11791_13010[(1)] = (29));

} else {
var statearr_11792_13011 = state_11782__$1;
(statearr_11792_13011[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (4))){
var inst_11698 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
if(cljs.core.truth_(inst_11698)){
var statearr_11793_13012 = state_11782__$1;
(statearr_11793_13012[(1)] = (8));

} else {
var statearr_11794_13013 = state_11782__$1;
(statearr_11794_13013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (15))){
var inst_11727 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
if(cljs.core.truth_(inst_11727)){
var statearr_11795_13014 = state_11782__$1;
(statearr_11795_13014[(1)] = (19));

} else {
var statearr_11796_13015 = state_11782__$1;
(statearr_11796_13015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (21))){
var inst_11732 = (state_11782[(12)]);
var inst_11732__$1 = (state_11782[(2)]);
var inst_11733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11732__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11732__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11732__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11782__$1 = (function (){var statearr_11797 = state_11782;
(statearr_11797[(12)] = inst_11732__$1);

(statearr_11797[(13)] = inst_11734);

(statearr_11797[(10)] = inst_11733);

return statearr_11797;
})();
return cljs.core.async.ioc_alts_BANG_(state_11782__$1,(22),inst_11735);
} else {
if((state_val_11783 === (31))){
var inst_11764 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
if(cljs.core.truth_(inst_11764)){
var statearr_11798_13016 = state_11782__$1;
(statearr_11798_13016[(1)] = (32));

} else {
var statearr_11799_13017 = state_11782__$1;
(statearr_11799_13017[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (32))){
var inst_11741 = (state_11782[(14)]);
var state_11782__$1 = state_11782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11782__$1,(35),out,inst_11741);
} else {
if((state_val_11783 === (33))){
var inst_11732 = (state_11782[(12)]);
var inst_11708 = inst_11732;
var state_11782__$1 = (function (){var statearr_11800 = state_11782;
(statearr_11800[(7)] = inst_11708);

return statearr_11800;
})();
var statearr_11801_13018 = state_11782__$1;
(statearr_11801_13018[(2)] = null);

(statearr_11801_13018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (13))){
var inst_11708 = (state_11782[(7)]);
var inst_11716 = inst_11708.cljs$lang$protocol_mask$partition0$;
var inst_11717 = (inst_11716 & (64));
var inst_11718 = inst_11708.cljs$core$ISeq$;
var inst_11719 = (cljs.core.PROTOCOL_SENTINEL === inst_11718);
var inst_11720 = ((inst_11717) || (inst_11719));
var state_11782__$1 = state_11782;
if(cljs.core.truth_(inst_11720)){
var statearr_11802_13019 = state_11782__$1;
(statearr_11802_13019[(1)] = (16));

} else {
var statearr_11803_13020 = state_11782__$1;
(statearr_11803_13020[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (22))){
var inst_11742 = (state_11782[(9)]);
var inst_11741 = (state_11782[(14)]);
var inst_11740 = (state_11782[(2)]);
var inst_11741__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11740,(0),null);
var inst_11742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11740,(1),null);
var inst_11743 = (inst_11741__$1 == null);
var inst_11744 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11742__$1,change);
var inst_11745 = ((inst_11743) || (inst_11744));
var state_11782__$1 = (function (){var statearr_11804 = state_11782;
(statearr_11804[(9)] = inst_11742__$1);

(statearr_11804[(14)] = inst_11741__$1);

return statearr_11804;
})();
if(cljs.core.truth_(inst_11745)){
var statearr_11805_13021 = state_11782__$1;
(statearr_11805_13021[(1)] = (23));

} else {
var statearr_11806_13022 = state_11782__$1;
(statearr_11806_13022[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (36))){
var inst_11732 = (state_11782[(12)]);
var inst_11708 = inst_11732;
var state_11782__$1 = (function (){var statearr_11807 = state_11782;
(statearr_11807[(7)] = inst_11708);

return statearr_11807;
})();
var statearr_11808_13023 = state_11782__$1;
(statearr_11808_13023[(2)] = null);

(statearr_11808_13023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (29))){
var inst_11756 = (state_11782[(11)]);
var state_11782__$1 = state_11782;
var statearr_11810_13024 = state_11782__$1;
(statearr_11810_13024[(2)] = inst_11756);

(statearr_11810_13024[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (6))){
var state_11782__$1 = state_11782;
var statearr_11811_13025 = state_11782__$1;
(statearr_11811_13025[(2)] = false);

(statearr_11811_13025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (28))){
var inst_11752 = (state_11782[(2)]);
var inst_11753 = calc_state();
var inst_11708 = inst_11753;
var state_11782__$1 = (function (){var statearr_11814 = state_11782;
(statearr_11814[(15)] = inst_11752);

(statearr_11814[(7)] = inst_11708);

return statearr_11814;
})();
var statearr_11817_13026 = state_11782__$1;
(statearr_11817_13026[(2)] = null);

(statearr_11817_13026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (25))){
var inst_11778 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
var statearr_11819_13027 = state_11782__$1;
(statearr_11819_13027[(2)] = inst_11778);

(statearr_11819_13027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (34))){
var inst_11776 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
var statearr_11820_13028 = state_11782__$1;
(statearr_11820_13028[(2)] = inst_11776);

(statearr_11820_13028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (17))){
var state_11782__$1 = state_11782;
var statearr_11821_13029 = state_11782__$1;
(statearr_11821_13029[(2)] = false);

(statearr_11821_13029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (3))){
var state_11782__$1 = state_11782;
var statearr_11822_13030 = state_11782__$1;
(statearr_11822_13030[(2)] = false);

(statearr_11822_13030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (12))){
var inst_11780 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11782__$1,inst_11780);
} else {
if((state_val_11783 === (2))){
var inst_11682 = (state_11782[(8)]);
var inst_11687 = inst_11682.cljs$lang$protocol_mask$partition0$;
var inst_11688 = (inst_11687 & (64));
var inst_11689 = inst_11682.cljs$core$ISeq$;
var inst_11690 = (cljs.core.PROTOCOL_SENTINEL === inst_11689);
var inst_11691 = ((inst_11688) || (inst_11690));
var state_11782__$1 = state_11782;
if(cljs.core.truth_(inst_11691)){
var statearr_11823_13031 = state_11782__$1;
(statearr_11823_13031[(1)] = (5));

} else {
var statearr_11824_13032 = state_11782__$1;
(statearr_11824_13032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (23))){
var inst_11741 = (state_11782[(14)]);
var inst_11747 = (inst_11741 == null);
var state_11782__$1 = state_11782;
if(cljs.core.truth_(inst_11747)){
var statearr_11827_13033 = state_11782__$1;
(statearr_11827_13033[(1)] = (26));

} else {
var statearr_11828_13034 = state_11782__$1;
(statearr_11828_13034[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (35))){
var inst_11767 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
if(cljs.core.truth_(inst_11767)){
var statearr_11829_13035 = state_11782__$1;
(statearr_11829_13035[(1)] = (36));

} else {
var statearr_11830_13038 = state_11782__$1;
(statearr_11830_13038[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (19))){
var inst_11708 = (state_11782[(7)]);
var inst_11729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11708);
var state_11782__$1 = state_11782;
var statearr_11831_13039 = state_11782__$1;
(statearr_11831_13039[(2)] = inst_11729);

(statearr_11831_13039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (11))){
var inst_11708 = (state_11782[(7)]);
var inst_11713 = (inst_11708 == null);
var inst_11714 = cljs.core.not(inst_11713);
var state_11782__$1 = state_11782;
if(inst_11714){
var statearr_11832_13040 = state_11782__$1;
(statearr_11832_13040[(1)] = (13));

} else {
var statearr_11833_13041 = state_11782__$1;
(statearr_11833_13041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (9))){
var inst_11682 = (state_11782[(8)]);
var state_11782__$1 = state_11782;
var statearr_11834_13042 = state_11782__$1;
(statearr_11834_13042[(2)] = inst_11682);

(statearr_11834_13042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (5))){
var state_11782__$1 = state_11782;
var statearr_11835_13043 = state_11782__$1;
(statearr_11835_13043[(2)] = true);

(statearr_11835_13043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (14))){
var state_11782__$1 = state_11782;
var statearr_11836_13044 = state_11782__$1;
(statearr_11836_13044[(2)] = false);

(statearr_11836_13044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (26))){
var inst_11742 = (state_11782[(9)]);
var inst_11749 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11742);
var state_11782__$1 = state_11782;
var statearr_11837_13045 = state_11782__$1;
(statearr_11837_13045[(2)] = inst_11749);

(statearr_11837_13045[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (16))){
var state_11782__$1 = state_11782;
var statearr_11838_13046 = state_11782__$1;
(statearr_11838_13046[(2)] = true);

(statearr_11838_13046[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (38))){
var inst_11772 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
var statearr_11839_13047 = state_11782__$1;
(statearr_11839_13047[(2)] = inst_11772);

(statearr_11839_13047[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (30))){
var inst_11734 = (state_11782[(13)]);
var inst_11742 = (state_11782[(9)]);
var inst_11733 = (state_11782[(10)]);
var inst_11759 = cljs.core.empty_QMARK_(inst_11733);
var inst_11760 = (inst_11734.cljs$core$IFn$_invoke$arity$1 ? inst_11734.cljs$core$IFn$_invoke$arity$1(inst_11742) : inst_11734.call(null,inst_11742));
var inst_11761 = cljs.core.not(inst_11760);
var inst_11762 = ((inst_11759) && (inst_11761));
var state_11782__$1 = state_11782;
var statearr_11840_13048 = state_11782__$1;
(statearr_11840_13048[(2)] = inst_11762);

(statearr_11840_13048[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (10))){
var inst_11682 = (state_11782[(8)]);
var inst_11703 = (state_11782[(2)]);
var inst_11705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11703,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11703,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11703,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11708 = inst_11682;
var state_11782__$1 = (function (){var statearr_11841 = state_11782;
(statearr_11841[(16)] = inst_11706);

(statearr_11841[(17)] = inst_11705);

(statearr_11841[(7)] = inst_11708);

(statearr_11841[(18)] = inst_11707);

return statearr_11841;
})();
var statearr_11842_13049 = state_11782__$1;
(statearr_11842_13049[(2)] = null);

(statearr_11842_13049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (18))){
var inst_11724 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
var statearr_11843_13050 = state_11782__$1;
(statearr_11843_13050[(2)] = inst_11724);

(statearr_11843_13050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (37))){
var state_11782__$1 = state_11782;
var statearr_11844_13051 = state_11782__$1;
(statearr_11844_13051[(2)] = null);

(statearr_11844_13051[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (8))){
var inst_11682 = (state_11782[(8)]);
var inst_11700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11682);
var state_11782__$1 = state_11782;
var statearr_11845_13052 = state_11782__$1;
(statearr_11845_13052[(2)] = inst_11700);

(statearr_11845_13052[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10725__auto__ = null;
var cljs$core$async$mix_$_state_machine__10725__auto____0 = (function (){
var statearr_11846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11846[(0)] = cljs$core$async$mix_$_state_machine__10725__auto__);

(statearr_11846[(1)] = (1));

return statearr_11846;
});
var cljs$core$async$mix_$_state_machine__10725__auto____1 = (function (state_11782){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11782);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11847){var ex__10728__auto__ = e11847;
var statearr_11848_13053 = state_11782;
(statearr_11848_13053[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11782[(4)]))){
var statearr_11849_13054 = state_11782;
(statearr_11849_13054[(1)] = cljs.core.first((state_11782[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13055 = state_11782;
state_11782 = G__13055;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10725__auto__ = function(state_11782){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10725__auto____1.call(this,state_11782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10725__auto____0;
cljs$core$async$mix_$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10725__auto____1;
return cljs$core$async$mix_$_state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11850 = f__10795__auto__();
(statearr_11850[(6)] = c__10794__auto___13004);

return statearr_11850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13056 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13056(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13057 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13057(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13059 = (function() {
var G__13060 = null;
var G__13060__1 = (function (p){
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
var G__13060__2 = (function (p,v){
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
G__13060 = function(p,v){
switch(arguments.length){
case 1:
return G__13060__1.call(this,p);
case 2:
return G__13060__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13060.cljs$core$IFn$_invoke$arity$1 = G__13060__1;
G__13060.cljs$core$IFn$_invoke$arity$2 = G__13060__2;
return G__13060;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11853 = arguments.length;
switch (G__11853) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13059(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13059(p,v);
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
var G__11856 = arguments.length;
switch (G__11856) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11854_SHARP_){
if(cljs.core.truth_((p1__11854_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11854_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11854_SHARP_.call(null,topic)))){
return p1__11854_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11854_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11858 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11859){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11859 = meta11859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11860,meta11859__$1){
var self__ = this;
var _11860__$1 = this;
return (new cljs.core.async.t_cljs$core$async11858(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11859__$1));
}));

(cljs.core.async.t_cljs$core$async11858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11860){
var self__ = this;
var _11860__$1 = this;
return self__.meta11859;
}));

(cljs.core.async.t_cljs$core$async11858.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11858.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11858.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11858.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11859","meta11859",-1462382122,null)], null);
}));

(cljs.core.async.t_cljs$core$async11858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11858");

(cljs.core.async.t_cljs$core$async11858.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11858.
 */
cljs.core.async.__GT_t_cljs$core$async11858 = (function cljs$core$async$__GT_t_cljs$core$async11858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11859){
return (new cljs.core.async.t_cljs$core$async11858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11859));
});

}

return (new cljs.core.async.t_cljs$core$async11858(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10794__auto___13067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_11937){
var state_val_11938 = (state_11937[(1)]);
if((state_val_11938 === (7))){
var inst_11933 = (state_11937[(2)]);
var state_11937__$1 = state_11937;
var statearr_11939_13068 = state_11937__$1;
(statearr_11939_13068[(2)] = inst_11933);

(statearr_11939_13068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (20))){
var state_11937__$1 = state_11937;
var statearr_11940_13069 = state_11937__$1;
(statearr_11940_13069[(2)] = null);

(statearr_11940_13069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (1))){
var state_11937__$1 = state_11937;
var statearr_11941_13070 = state_11937__$1;
(statearr_11941_13070[(2)] = null);

(statearr_11941_13070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (24))){
var inst_11916 = (state_11937[(7)]);
var inst_11925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11916);
var state_11937__$1 = state_11937;
var statearr_11942_13071 = state_11937__$1;
(statearr_11942_13071[(2)] = inst_11925);

(statearr_11942_13071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (4))){
var inst_11863 = (state_11937[(8)]);
var inst_11863__$1 = (state_11937[(2)]);
var inst_11868 = (inst_11863__$1 == null);
var state_11937__$1 = (function (){var statearr_11943 = state_11937;
(statearr_11943[(8)] = inst_11863__$1);

return statearr_11943;
})();
if(cljs.core.truth_(inst_11868)){
var statearr_11944_13072 = state_11937__$1;
(statearr_11944_13072[(1)] = (5));

} else {
var statearr_11945_13073 = state_11937__$1;
(statearr_11945_13073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (15))){
var inst_11910 = (state_11937[(2)]);
var state_11937__$1 = state_11937;
var statearr_11946_13074 = state_11937__$1;
(statearr_11946_13074[(2)] = inst_11910);

(statearr_11946_13074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (21))){
var inst_11930 = (state_11937[(2)]);
var state_11937__$1 = (function (){var statearr_11948 = state_11937;
(statearr_11948[(9)] = inst_11930);

return statearr_11948;
})();
var statearr_11949_13075 = state_11937__$1;
(statearr_11949_13075[(2)] = null);

(statearr_11949_13075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (13))){
var inst_11892 = (state_11937[(10)]);
var inst_11894 = cljs.core.chunked_seq_QMARK_(inst_11892);
var state_11937__$1 = state_11937;
if(inst_11894){
var statearr_11950_13076 = state_11937__$1;
(statearr_11950_13076[(1)] = (16));

} else {
var statearr_11951_13077 = state_11937__$1;
(statearr_11951_13077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (22))){
var inst_11922 = (state_11937[(2)]);
var state_11937__$1 = state_11937;
if(cljs.core.truth_(inst_11922)){
var statearr_11953_13078 = state_11937__$1;
(statearr_11953_13078[(1)] = (23));

} else {
var statearr_11954_13079 = state_11937__$1;
(statearr_11954_13079[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (6))){
var inst_11918 = (state_11937[(11)]);
var inst_11916 = (state_11937[(7)]);
var inst_11863 = (state_11937[(8)]);
var inst_11916__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11863) : topic_fn.call(null,inst_11863));
var inst_11917 = cljs.core.deref(mults);
var inst_11918__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11917,inst_11916__$1);
var state_11937__$1 = (function (){var statearr_11957 = state_11937;
(statearr_11957[(11)] = inst_11918__$1);

(statearr_11957[(7)] = inst_11916__$1);

return statearr_11957;
})();
if(cljs.core.truth_(inst_11918__$1)){
var statearr_11958_13080 = state_11937__$1;
(statearr_11958_13080[(1)] = (19));

} else {
var statearr_11959_13081 = state_11937__$1;
(statearr_11959_13081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (25))){
var inst_11927 = (state_11937[(2)]);
var state_11937__$1 = state_11937;
var statearr_11960_13083 = state_11937__$1;
(statearr_11960_13083[(2)] = inst_11927);

(statearr_11960_13083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (17))){
var inst_11892 = (state_11937[(10)]);
var inst_11901 = cljs.core.first(inst_11892);
var inst_11902 = cljs.core.async.muxch_STAR_(inst_11901);
var inst_11903 = cljs.core.async.close_BANG_(inst_11902);
var inst_11904 = cljs.core.next(inst_11892);
var inst_11878 = inst_11904;
var inst_11879 = null;
var inst_11880 = (0);
var inst_11881 = (0);
var state_11937__$1 = (function (){var statearr_11961 = state_11937;
(statearr_11961[(12)] = inst_11903);

(statearr_11961[(13)] = inst_11879);

(statearr_11961[(14)] = inst_11881);

(statearr_11961[(15)] = inst_11880);

(statearr_11961[(16)] = inst_11878);

return statearr_11961;
})();
var statearr_11962_13084 = state_11937__$1;
(statearr_11962_13084[(2)] = null);

(statearr_11962_13084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (3))){
var inst_11935 = (state_11937[(2)]);
var state_11937__$1 = state_11937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11937__$1,inst_11935);
} else {
if((state_val_11938 === (12))){
var inst_11912 = (state_11937[(2)]);
var state_11937__$1 = state_11937;
var statearr_11963_13085 = state_11937__$1;
(statearr_11963_13085[(2)] = inst_11912);

(statearr_11963_13085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (2))){
var state_11937__$1 = state_11937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11937__$1,(4),ch);
} else {
if((state_val_11938 === (23))){
var state_11937__$1 = state_11937;
var statearr_11964_13087 = state_11937__$1;
(statearr_11964_13087[(2)] = null);

(statearr_11964_13087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (19))){
var inst_11918 = (state_11937[(11)]);
var inst_11863 = (state_11937[(8)]);
var inst_11920 = cljs.core.async.muxch_STAR_(inst_11918);
var state_11937__$1 = state_11937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11937__$1,(22),inst_11920,inst_11863);
} else {
if((state_val_11938 === (11))){
var inst_11878 = (state_11937[(16)]);
var inst_11892 = (state_11937[(10)]);
var inst_11892__$1 = cljs.core.seq(inst_11878);
var state_11937__$1 = (function (){var statearr_11965 = state_11937;
(statearr_11965[(10)] = inst_11892__$1);

return statearr_11965;
})();
if(inst_11892__$1){
var statearr_11966_13091 = state_11937__$1;
(statearr_11966_13091[(1)] = (13));

} else {
var statearr_11967_13092 = state_11937__$1;
(statearr_11967_13092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (9))){
var inst_11914 = (state_11937[(2)]);
var state_11937__$1 = state_11937;
var statearr_11968_13093 = state_11937__$1;
(statearr_11968_13093[(2)] = inst_11914);

(statearr_11968_13093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (5))){
var inst_11874 = cljs.core.deref(mults);
var inst_11875 = cljs.core.vals(inst_11874);
var inst_11876 = cljs.core.seq(inst_11875);
var inst_11878 = inst_11876;
var inst_11879 = null;
var inst_11880 = (0);
var inst_11881 = (0);
var state_11937__$1 = (function (){var statearr_11969 = state_11937;
(statearr_11969[(13)] = inst_11879);

(statearr_11969[(14)] = inst_11881);

(statearr_11969[(15)] = inst_11880);

(statearr_11969[(16)] = inst_11878);

return statearr_11969;
})();
var statearr_11970_13094 = state_11937__$1;
(statearr_11970_13094[(2)] = null);

(statearr_11970_13094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (14))){
var state_11937__$1 = state_11937;
var statearr_11974_13095 = state_11937__$1;
(statearr_11974_13095[(2)] = null);

(statearr_11974_13095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (16))){
var inst_11892 = (state_11937[(10)]);
var inst_11896 = cljs.core.chunk_first(inst_11892);
var inst_11897 = cljs.core.chunk_rest(inst_11892);
var inst_11898 = cljs.core.count(inst_11896);
var inst_11878 = inst_11897;
var inst_11879 = inst_11896;
var inst_11880 = inst_11898;
var inst_11881 = (0);
var state_11937__$1 = (function (){var statearr_11975 = state_11937;
(statearr_11975[(13)] = inst_11879);

(statearr_11975[(14)] = inst_11881);

(statearr_11975[(15)] = inst_11880);

(statearr_11975[(16)] = inst_11878);

return statearr_11975;
})();
var statearr_11976_13096 = state_11937__$1;
(statearr_11976_13096[(2)] = null);

(statearr_11976_13096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (10))){
var inst_11879 = (state_11937[(13)]);
var inst_11881 = (state_11937[(14)]);
var inst_11880 = (state_11937[(15)]);
var inst_11878 = (state_11937[(16)]);
var inst_11886 = cljs.core._nth(inst_11879,inst_11881);
var inst_11887 = cljs.core.async.muxch_STAR_(inst_11886);
var inst_11888 = cljs.core.async.close_BANG_(inst_11887);
var inst_11889 = (inst_11881 + (1));
var tmp11971 = inst_11879;
var tmp11972 = inst_11880;
var tmp11973 = inst_11878;
var inst_11878__$1 = tmp11973;
var inst_11879__$1 = tmp11971;
var inst_11880__$1 = tmp11972;
var inst_11881__$1 = inst_11889;
var state_11937__$1 = (function (){var statearr_11977 = state_11937;
(statearr_11977[(17)] = inst_11888);

(statearr_11977[(13)] = inst_11879__$1);

(statearr_11977[(14)] = inst_11881__$1);

(statearr_11977[(15)] = inst_11880__$1);

(statearr_11977[(16)] = inst_11878__$1);

return statearr_11977;
})();
var statearr_11978_13097 = state_11937__$1;
(statearr_11978_13097[(2)] = null);

(statearr_11978_13097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (18))){
var inst_11907 = (state_11937[(2)]);
var state_11937__$1 = state_11937;
var statearr_11979_13098 = state_11937__$1;
(statearr_11979_13098[(2)] = inst_11907);

(statearr_11979_13098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11938 === (8))){
var inst_11881 = (state_11937[(14)]);
var inst_11880 = (state_11937[(15)]);
var inst_11883 = (inst_11881 < inst_11880);
var inst_11884 = inst_11883;
var state_11937__$1 = state_11937;
if(cljs.core.truth_(inst_11884)){
var statearr_11980_13099 = state_11937__$1;
(statearr_11980_13099[(1)] = (10));

} else {
var statearr_11981_13100 = state_11937__$1;
(statearr_11981_13100[(1)] = (11));

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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_11982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11982[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_11982[(1)] = (1));

return statearr_11982;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_11937){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_11937);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e11983){var ex__10728__auto__ = e11983;
var statearr_11984_13101 = state_11937;
(statearr_11984_13101[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_11937[(4)]))){
var statearr_11985_13102 = state_11937;
(statearr_11985_13102[(1)] = cljs.core.first((state_11937[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13103 = state_11937;
state_11937 = G__13103;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_11937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_11937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_11986 = f__10795__auto__();
(statearr_11986[(6)] = c__10794__auto___13067);

return statearr_11986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
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
var G__11989 = arguments.length;
switch (G__11989) {
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
var G__11992 = arguments.length;
switch (G__11992) {
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
var G__11995 = arguments.length;
switch (G__11995) {
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
var c__10794__auto___13114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_12038){
var state_val_12039 = (state_12038[(1)]);
if((state_val_12039 === (7))){
var state_12038__$1 = state_12038;
var statearr_12040_13115 = state_12038__$1;
(statearr_12040_13115[(2)] = null);

(statearr_12040_13115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (1))){
var state_12038__$1 = state_12038;
var statearr_12041_13131 = state_12038__$1;
(statearr_12041_13131[(2)] = null);

(statearr_12041_13131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (4))){
var inst_11998 = (state_12038[(7)]);
var inst_11999 = (state_12038[(8)]);
var inst_12001 = (inst_11999 < inst_11998);
var state_12038__$1 = state_12038;
if(cljs.core.truth_(inst_12001)){
var statearr_12042_13134 = state_12038__$1;
(statearr_12042_13134[(1)] = (6));

} else {
var statearr_12043_13135 = state_12038__$1;
(statearr_12043_13135[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (15))){
var inst_12024 = (state_12038[(9)]);
var inst_12029 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12024);
var state_12038__$1 = state_12038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12038__$1,(17),out,inst_12029);
} else {
if((state_val_12039 === (13))){
var inst_12024 = (state_12038[(9)]);
var inst_12024__$1 = (state_12038[(2)]);
var inst_12025 = cljs.core.some(cljs.core.nil_QMARK_,inst_12024__$1);
var state_12038__$1 = (function (){var statearr_12044 = state_12038;
(statearr_12044[(9)] = inst_12024__$1);

return statearr_12044;
})();
if(cljs.core.truth_(inst_12025)){
var statearr_12045_13137 = state_12038__$1;
(statearr_12045_13137[(1)] = (14));

} else {
var statearr_12046_13138 = state_12038__$1;
(statearr_12046_13138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (6))){
var state_12038__$1 = state_12038;
var statearr_12047_13139 = state_12038__$1;
(statearr_12047_13139[(2)] = null);

(statearr_12047_13139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (17))){
var inst_12031 = (state_12038[(2)]);
var state_12038__$1 = (function (){var statearr_12049 = state_12038;
(statearr_12049[(10)] = inst_12031);

return statearr_12049;
})();
var statearr_12050_13141 = state_12038__$1;
(statearr_12050_13141[(2)] = null);

(statearr_12050_13141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (3))){
var inst_12036 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12038__$1,inst_12036);
} else {
if((state_val_12039 === (12))){
var _ = (function (){var statearr_12051 = state_12038;
(statearr_12051[(4)] = cljs.core.rest((state_12038[(4)])));

return statearr_12051;
})();
var state_12038__$1 = state_12038;
var ex12048 = (state_12038__$1[(2)]);
var statearr_12052_13145 = state_12038__$1;
(statearr_12052_13145[(5)] = ex12048);


if((ex12048 instanceof Object)){
var statearr_12053_13146 = state_12038__$1;
(statearr_12053_13146[(1)] = (11));

(statearr_12053_13146[(5)] = null);

} else {
throw ex12048;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (2))){
var inst_11997 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11998 = cnt;
var inst_11999 = (0);
var state_12038__$1 = (function (){var statearr_12054 = state_12038;
(statearr_12054[(7)] = inst_11998);

(statearr_12054[(11)] = inst_11997);

(statearr_12054[(8)] = inst_11999);

return statearr_12054;
})();
var statearr_12055_13147 = state_12038__$1;
(statearr_12055_13147[(2)] = null);

(statearr_12055_13147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (11))){
var inst_12003 = (state_12038[(2)]);
var inst_12004 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12038__$1 = (function (){var statearr_12056 = state_12038;
(statearr_12056[(12)] = inst_12003);

return statearr_12056;
})();
var statearr_12057_13148 = state_12038__$1;
(statearr_12057_13148[(2)] = inst_12004);

(statearr_12057_13148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (9))){
var inst_11999 = (state_12038[(8)]);
var _ = (function (){var statearr_12058 = state_12038;
(statearr_12058[(4)] = cljs.core.cons((12),(state_12038[(4)])));

return statearr_12058;
})();
var inst_12010 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11999) : chs__$1.call(null,inst_11999));
var inst_12011 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11999) : done.call(null,inst_11999));
var inst_12012 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12010,inst_12011);
var ___$1 = (function (){var statearr_12059 = state_12038;
(statearr_12059[(4)] = cljs.core.rest((state_12038[(4)])));

return statearr_12059;
})();
var state_12038__$1 = state_12038;
var statearr_12060_13157 = state_12038__$1;
(statearr_12060_13157[(2)] = inst_12012);

(statearr_12060_13157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (5))){
var inst_12022 = (state_12038[(2)]);
var state_12038__$1 = (function (){var statearr_12075 = state_12038;
(statearr_12075[(13)] = inst_12022);

return statearr_12075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12038__$1,(13),dchan);
} else {
if((state_val_12039 === (14))){
var inst_12027 = cljs.core.async.close_BANG_(out);
var state_12038__$1 = state_12038;
var statearr_12076_13160 = state_12038__$1;
(statearr_12076_13160[(2)] = inst_12027);

(statearr_12076_13160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (16))){
var inst_12034 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
var statearr_12077_13163 = state_12038__$1;
(statearr_12077_13163[(2)] = inst_12034);

(statearr_12077_13163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (10))){
var inst_11999 = (state_12038[(8)]);
var inst_12015 = (state_12038[(2)]);
var inst_12016 = (inst_11999 + (1));
var inst_11999__$1 = inst_12016;
var state_12038__$1 = (function (){var statearr_12078 = state_12038;
(statearr_12078[(8)] = inst_11999__$1);

(statearr_12078[(14)] = inst_12015);

return statearr_12078;
})();
var statearr_12079_13165 = state_12038__$1;
(statearr_12079_13165[(2)] = null);

(statearr_12079_13165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (8))){
var inst_12020 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
var statearr_12080_13170 = state_12038__$1;
(statearr_12080_13170[(2)] = inst_12020);

(statearr_12080_13170[(1)] = (5));


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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_12081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12081[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_12081[(1)] = (1));

return statearr_12081;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_12038){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_12038);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e12082){var ex__10728__auto__ = e12082;
var statearr_12083_13179 = state_12038;
(statearr_12083_13179[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_12038[(4)]))){
var statearr_12084_13180 = state_12038;
(statearr_12084_13180[(1)] = cljs.core.first((state_12038[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13181 = state_12038;
state_12038 = G__13181;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_12038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_12038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_12085 = f__10795__auto__();
(statearr_12085[(6)] = c__10794__auto___13114);

return statearr_12085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
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
var c__10794__auto___13191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_12128){
var state_val_12129 = (state_12128[(1)]);
if((state_val_12129 === (7))){
var inst_12107 = (state_12128[(7)]);
var inst_12108 = (state_12128[(8)]);
var inst_12107__$1 = (state_12128[(2)]);
var inst_12108__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12107__$1,(0),null);
var inst_12109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12107__$1,(1),null);
var inst_12110 = (inst_12108__$1 == null);
var state_12128__$1 = (function (){var statearr_12130 = state_12128;
(statearr_12130[(7)] = inst_12107__$1);

(statearr_12130[(9)] = inst_12109);

(statearr_12130[(8)] = inst_12108__$1);

return statearr_12130;
})();
if(cljs.core.truth_(inst_12110)){
var statearr_12131_13200 = state_12128__$1;
(statearr_12131_13200[(1)] = (8));

} else {
var statearr_12132_13201 = state_12128__$1;
(statearr_12132_13201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (1))){
var inst_12097 = cljs.core.vec(chs);
var inst_12098 = inst_12097;
var state_12128__$1 = (function (){var statearr_12133 = state_12128;
(statearr_12133[(10)] = inst_12098);

return statearr_12133;
})();
var statearr_12134_13202 = state_12128__$1;
(statearr_12134_13202[(2)] = null);

(statearr_12134_13202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (4))){
var inst_12098 = (state_12128[(10)]);
var state_12128__$1 = state_12128;
return cljs.core.async.ioc_alts_BANG_(state_12128__$1,(7),inst_12098);
} else {
if((state_val_12129 === (6))){
var inst_12124 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12135_13204 = state_12128__$1;
(statearr_12135_13204[(2)] = inst_12124);

(statearr_12135_13204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (3))){
var inst_12126 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12128__$1,inst_12126);
} else {
if((state_val_12129 === (2))){
var inst_12098 = (state_12128[(10)]);
var inst_12100 = cljs.core.count(inst_12098);
var inst_12101 = (inst_12100 > (0));
var state_12128__$1 = state_12128;
if(cljs.core.truth_(inst_12101)){
var statearr_12137_13211 = state_12128__$1;
(statearr_12137_13211[(1)] = (4));

} else {
var statearr_12138_13212 = state_12128__$1;
(statearr_12138_13212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (11))){
var inst_12098 = (state_12128[(10)]);
var inst_12117 = (state_12128[(2)]);
var tmp12136 = inst_12098;
var inst_12098__$1 = tmp12136;
var state_12128__$1 = (function (){var statearr_12139 = state_12128;
(statearr_12139[(10)] = inst_12098__$1);

(statearr_12139[(11)] = inst_12117);

return statearr_12139;
})();
var statearr_12140_13215 = state_12128__$1;
(statearr_12140_13215[(2)] = null);

(statearr_12140_13215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (9))){
var inst_12108 = (state_12128[(8)]);
var state_12128__$1 = state_12128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12128__$1,(11),out,inst_12108);
} else {
if((state_val_12129 === (5))){
var inst_12122 = cljs.core.async.close_BANG_(out);
var state_12128__$1 = state_12128;
var statearr_12158_13217 = state_12128__$1;
(statearr_12158_13217[(2)] = inst_12122);

(statearr_12158_13217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (10))){
var inst_12120 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12159_13218 = state_12128__$1;
(statearr_12159_13218[(2)] = inst_12120);

(statearr_12159_13218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (8))){
var inst_12098 = (state_12128[(10)]);
var inst_12107 = (state_12128[(7)]);
var inst_12109 = (state_12128[(9)]);
var inst_12108 = (state_12128[(8)]);
var inst_12112 = (function (){var cs = inst_12098;
var vec__12103 = inst_12107;
var v = inst_12108;
var c = inst_12109;
return (function (p1__12086_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12086_SHARP_);
});
})();
var inst_12113 = cljs.core.filterv(inst_12112,inst_12098);
var inst_12098__$1 = inst_12113;
var state_12128__$1 = (function (){var statearr_12160 = state_12128;
(statearr_12160[(10)] = inst_12098__$1);

return statearr_12160;
})();
var statearr_12161_13224 = state_12128__$1;
(statearr_12161_13224[(2)] = null);

(statearr_12161_13224[(1)] = (2));


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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_12162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12162[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_12162[(1)] = (1));

return statearr_12162;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_12128){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_12128);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e12163){var ex__10728__auto__ = e12163;
var statearr_12164_13227 = state_12128;
(statearr_12164_13227[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_12128[(4)]))){
var statearr_12165_13229 = state_12128;
(statearr_12165_13229[(1)] = cljs.core.first((state_12128[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13230 = state_12128;
state_12128 = G__13230;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_12128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_12128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_12166 = f__10795__auto__();
(statearr_12166[(6)] = c__10794__auto___13191);

return statearr_12166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
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
var G__12168 = arguments.length;
switch (G__12168) {
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
var c__10794__auto___13247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_12199){
var state_val_12200 = (state_12199[(1)]);
if((state_val_12200 === (7))){
var inst_12181 = (state_12199[(7)]);
var inst_12181__$1 = (state_12199[(2)]);
var inst_12182 = (inst_12181__$1 == null);
var inst_12183 = cljs.core.not(inst_12182);
var state_12199__$1 = (function (){var statearr_12201 = state_12199;
(statearr_12201[(7)] = inst_12181__$1);

return statearr_12201;
})();
if(inst_12183){
var statearr_12202_13248 = state_12199__$1;
(statearr_12202_13248[(1)] = (8));

} else {
var statearr_12203_13249 = state_12199__$1;
(statearr_12203_13249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (1))){
var inst_12176 = (0);
var state_12199__$1 = (function (){var statearr_12204 = state_12199;
(statearr_12204[(8)] = inst_12176);

return statearr_12204;
})();
var statearr_12205_13250 = state_12199__$1;
(statearr_12205_13250[(2)] = null);

(statearr_12205_13250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (4))){
var state_12199__$1 = state_12199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12199__$1,(7),ch);
} else {
if((state_val_12200 === (6))){
var inst_12194 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
var statearr_12206_13251 = state_12199__$1;
(statearr_12206_13251[(2)] = inst_12194);

(statearr_12206_13251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (3))){
var inst_12196 = (state_12199[(2)]);
var inst_12197 = cljs.core.async.close_BANG_(out);
var state_12199__$1 = (function (){var statearr_12207 = state_12199;
(statearr_12207[(9)] = inst_12196);

return statearr_12207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12199__$1,inst_12197);
} else {
if((state_val_12200 === (2))){
var inst_12176 = (state_12199[(8)]);
var inst_12178 = (inst_12176 < n);
var state_12199__$1 = state_12199;
if(cljs.core.truth_(inst_12178)){
var statearr_12208_13252 = state_12199__$1;
(statearr_12208_13252[(1)] = (4));

} else {
var statearr_12209_13253 = state_12199__$1;
(statearr_12209_13253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (11))){
var inst_12176 = (state_12199[(8)]);
var inst_12186 = (state_12199[(2)]);
var inst_12187 = (inst_12176 + (1));
var inst_12176__$1 = inst_12187;
var state_12199__$1 = (function (){var statearr_12210 = state_12199;
(statearr_12210[(10)] = inst_12186);

(statearr_12210[(8)] = inst_12176__$1);

return statearr_12210;
})();
var statearr_12211_13254 = state_12199__$1;
(statearr_12211_13254[(2)] = null);

(statearr_12211_13254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (9))){
var state_12199__$1 = state_12199;
var statearr_12212_13255 = state_12199__$1;
(statearr_12212_13255[(2)] = null);

(statearr_12212_13255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (5))){
var state_12199__$1 = state_12199;
var statearr_12213_13256 = state_12199__$1;
(statearr_12213_13256[(2)] = null);

(statearr_12213_13256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (10))){
var inst_12191 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
var statearr_12214_13257 = state_12199__$1;
(statearr_12214_13257[(2)] = inst_12191);

(statearr_12214_13257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (8))){
var inst_12181 = (state_12199[(7)]);
var state_12199__$1 = state_12199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12199__$1,(11),out,inst_12181);
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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_12215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12215[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_12215[(1)] = (1));

return statearr_12215;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_12199){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_12199);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e12216){var ex__10728__auto__ = e12216;
var statearr_12217_13258 = state_12199;
(statearr_12217_13258[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_12199[(4)]))){
var statearr_12218_13259 = state_12199;
(statearr_12218_13259[(1)] = cljs.core.first((state_12199[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13260 = state_12199;
state_12199 = G__13260;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_12199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_12199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_12220 = f__10795__auto__();
(statearr_12220[(6)] = c__10794__auto___13247);

return statearr_12220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12222 = (function (f,ch,meta12223){
this.f = f;
this.ch = ch;
this.meta12223 = meta12223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12224,meta12223__$1){
var self__ = this;
var _12224__$1 = this;
return (new cljs.core.async.t_cljs$core$async12222(self__.f,self__.ch,meta12223__$1));
}));

(cljs.core.async.t_cljs$core$async12222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12224){
var self__ = this;
var _12224__$1 = this;
return self__.meta12223;
}));

(cljs.core.async.t_cljs$core$async12222.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12222.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12222.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
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
cljs.core.async.t_cljs$core$async12227 = (function (f,ch,meta12223,_,fn1,meta12228){
this.f = f;
this.ch = ch;
this.meta12223 = meta12223;
this._ = _;
this.fn1 = fn1;
this.meta12228 = meta12228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12229,meta12228__$1){
var self__ = this;
var _12229__$1 = this;
return (new cljs.core.async.t_cljs$core$async12227(self__.f,self__.ch,self__.meta12223,self__._,self__.fn1,meta12228__$1));
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
return (function (p1__12221_SHARP_){
var G__12230 = (((p1__12221_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12221_SHARP_) : self__.f.call(null,p1__12221_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12230) : f1.call(null,G__12230));
});
}));

(cljs.core.async.t_cljs$core$async12227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12223","meta12223",-290511349,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12222","cljs.core.async/t_cljs$core$async12222",-1036623217,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12228","meta12228",-1144848091,null)], null);
}));

(cljs.core.async.t_cljs$core$async12227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12227");

(cljs.core.async.t_cljs$core$async12227.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12227.
 */
cljs.core.async.__GT_t_cljs$core$async12227 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12227(f__$1,ch__$1,meta12223__$1,___$2,fn1__$1,meta12228){
return (new cljs.core.async.t_cljs$core$async12227(f__$1,ch__$1,meta12223__$1,___$2,fn1__$1,meta12228));
});

}

return (new cljs.core.async.t_cljs$core$async12227(self__.f,self__.ch,self__.meta12223,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12231 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12231) : self__.f.call(null,G__12231));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12222.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12223","meta12223",-290511349,null)], null);
}));

(cljs.core.async.t_cljs$core$async12222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12222");

(cljs.core.async.t_cljs$core$async12222.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12222.
 */
cljs.core.async.__GT_t_cljs$core$async12222 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12222(f__$1,ch__$1,meta12223){
return (new cljs.core.async.t_cljs$core$async12222(f__$1,ch__$1,meta12223));
});

}

return (new cljs.core.async.t_cljs$core$async12222(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12232 = (function (f,ch,meta12233){
this.f = f;
this.ch = ch;
this.meta12233 = meta12233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12234,meta12233__$1){
var self__ = this;
var _12234__$1 = this;
return (new cljs.core.async.t_cljs$core$async12232(self__.f,self__.ch,meta12233__$1));
}));

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12234){
var self__ = this;
var _12234__$1 = this;
return self__.meta12233;
}));

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12233","meta12233",1419753328,null)], null);
}));

(cljs.core.async.t_cljs$core$async12232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12232");

(cljs.core.async.t_cljs$core$async12232.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12232.
 */
cljs.core.async.__GT_t_cljs$core$async12232 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12232(f__$1,ch__$1,meta12233){
return (new cljs.core.async.t_cljs$core$async12232(f__$1,ch__$1,meta12233));
});

}

return (new cljs.core.async.t_cljs$core$async12232(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12235 = (function (p,ch,meta12236){
this.p = p;
this.ch = ch;
this.meta12236 = meta12236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12237,meta12236__$1){
var self__ = this;
var _12237__$1 = this;
return (new cljs.core.async.t_cljs$core$async12235(self__.p,self__.ch,meta12236__$1));
}));

(cljs.core.async.t_cljs$core$async12235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12237){
var self__ = this;
var _12237__$1 = this;
return self__.meta12236;
}));

(cljs.core.async.t_cljs$core$async12235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12235.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12236","meta12236",616579895,null)], null);
}));

(cljs.core.async.t_cljs$core$async12235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12235");

(cljs.core.async.t_cljs$core$async12235.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12235.
 */
cljs.core.async.__GT_t_cljs$core$async12235 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12235(p__$1,ch__$1,meta12236){
return (new cljs.core.async.t_cljs$core$async12235(p__$1,ch__$1,meta12236));
});

}

return (new cljs.core.async.t_cljs$core$async12235(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10794__auto___13287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_12266){
var state_val_12267 = (state_12266[(1)]);
if((state_val_12267 === (7))){
var inst_12262 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
var statearr_12272_13291 = state_12266__$1;
(statearr_12272_13291[(2)] = inst_12262);

(statearr_12272_13291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (1))){
var state_12266__$1 = state_12266;
var statearr_12275_13296 = state_12266__$1;
(statearr_12275_13296[(2)] = null);

(statearr_12275_13296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (4))){
var inst_12246 = (state_12266[(7)]);
var inst_12246__$1 = (state_12266[(2)]);
var inst_12247 = (inst_12246__$1 == null);
var state_12266__$1 = (function (){var statearr_12276 = state_12266;
(statearr_12276[(7)] = inst_12246__$1);

return statearr_12276;
})();
if(cljs.core.truth_(inst_12247)){
var statearr_12277_13304 = state_12266__$1;
(statearr_12277_13304[(1)] = (5));

} else {
var statearr_12278_13308 = state_12266__$1;
(statearr_12278_13308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (6))){
var inst_12246 = (state_12266[(7)]);
var inst_12251 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12246) : p.call(null,inst_12246));
var state_12266__$1 = state_12266;
if(cljs.core.truth_(inst_12251)){
var statearr_12279_13313 = state_12266__$1;
(statearr_12279_13313[(1)] = (8));

} else {
var statearr_12280_13314 = state_12266__$1;
(statearr_12280_13314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (3))){
var inst_12264 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12266__$1,inst_12264);
} else {
if((state_val_12267 === (2))){
var state_12266__$1 = state_12266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12266__$1,(4),ch);
} else {
if((state_val_12267 === (11))){
var inst_12256 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
var statearr_12281_13324 = state_12266__$1;
(statearr_12281_13324[(2)] = inst_12256);

(statearr_12281_13324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (9))){
var state_12266__$1 = state_12266;
var statearr_12282_13328 = state_12266__$1;
(statearr_12282_13328[(2)] = null);

(statearr_12282_13328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (5))){
var inst_12249 = cljs.core.async.close_BANG_(out);
var state_12266__$1 = state_12266;
var statearr_12283_13334 = state_12266__$1;
(statearr_12283_13334[(2)] = inst_12249);

(statearr_12283_13334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (10))){
var inst_12259 = (state_12266[(2)]);
var state_12266__$1 = (function (){var statearr_12284 = state_12266;
(statearr_12284[(8)] = inst_12259);

return statearr_12284;
})();
var statearr_12285_13339 = state_12266__$1;
(statearr_12285_13339[(2)] = null);

(statearr_12285_13339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (8))){
var inst_12246 = (state_12266[(7)]);
var state_12266__$1 = state_12266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12266__$1,(11),out,inst_12246);
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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_12286 = [null,null,null,null,null,null,null,null,null];
(statearr_12286[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_12286[(1)] = (1));

return statearr_12286;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_12266){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_12266);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e12287){var ex__10728__auto__ = e12287;
var statearr_12288_13341 = state_12266;
(statearr_12288_13341[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_12266[(4)]))){
var statearr_12289_13342 = state_12266;
(statearr_12289_13342[(1)] = cljs.core.first((state_12266[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13356 = state_12266;
state_12266 = G__13356;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_12266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_12266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_12290 = f__10795__auto__();
(statearr_12290[(6)] = c__10794__auto___13287);

return statearr_12290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
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
var c__10794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_12354){
var state_val_12355 = (state_12354[(1)]);
if((state_val_12355 === (7))){
var inst_12350 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12356_13361 = state_12354__$1;
(statearr_12356_13361[(2)] = inst_12350);

(statearr_12356_13361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (20))){
var inst_12320 = (state_12354[(7)]);
var inst_12331 = (state_12354[(2)]);
var inst_12332 = cljs.core.next(inst_12320);
var inst_12306 = inst_12332;
var inst_12307 = null;
var inst_12308 = (0);
var inst_12309 = (0);
var state_12354__$1 = (function (){var statearr_12357 = state_12354;
(statearr_12357[(8)] = inst_12306);

(statearr_12357[(9)] = inst_12307);

(statearr_12357[(10)] = inst_12331);

(statearr_12357[(11)] = inst_12308);

(statearr_12357[(12)] = inst_12309);

return statearr_12357;
})();
var statearr_12358_13362 = state_12354__$1;
(statearr_12358_13362[(2)] = null);

(statearr_12358_13362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (1))){
var state_12354__$1 = state_12354;
var statearr_12359_13364 = state_12354__$1;
(statearr_12359_13364[(2)] = null);

(statearr_12359_13364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (4))){
var inst_12295 = (state_12354[(13)]);
var inst_12295__$1 = (state_12354[(2)]);
var inst_12296 = (inst_12295__$1 == null);
var state_12354__$1 = (function (){var statearr_12360 = state_12354;
(statearr_12360[(13)] = inst_12295__$1);

return statearr_12360;
})();
if(cljs.core.truth_(inst_12296)){
var statearr_12361_13365 = state_12354__$1;
(statearr_12361_13365[(1)] = (5));

} else {
var statearr_12362_13366 = state_12354__$1;
(statearr_12362_13366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (15))){
var state_12354__$1 = state_12354;
var statearr_12366_13367 = state_12354__$1;
(statearr_12366_13367[(2)] = null);

(statearr_12366_13367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (21))){
var state_12354__$1 = state_12354;
var statearr_12367_13368 = state_12354__$1;
(statearr_12367_13368[(2)] = null);

(statearr_12367_13368[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (13))){
var inst_12306 = (state_12354[(8)]);
var inst_12307 = (state_12354[(9)]);
var inst_12308 = (state_12354[(11)]);
var inst_12309 = (state_12354[(12)]);
var inst_12316 = (state_12354[(2)]);
var inst_12317 = (inst_12309 + (1));
var tmp12363 = inst_12306;
var tmp12364 = inst_12307;
var tmp12365 = inst_12308;
var inst_12306__$1 = tmp12363;
var inst_12307__$1 = tmp12364;
var inst_12308__$1 = tmp12365;
var inst_12309__$1 = inst_12317;
var state_12354__$1 = (function (){var statearr_12368 = state_12354;
(statearr_12368[(8)] = inst_12306__$1);

(statearr_12368[(9)] = inst_12307__$1);

(statearr_12368[(14)] = inst_12316);

(statearr_12368[(11)] = inst_12308__$1);

(statearr_12368[(12)] = inst_12309__$1);

return statearr_12368;
})();
var statearr_12372_13372 = state_12354__$1;
(statearr_12372_13372[(2)] = null);

(statearr_12372_13372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (22))){
var state_12354__$1 = state_12354;
var statearr_12376_13373 = state_12354__$1;
(statearr_12376_13373[(2)] = null);

(statearr_12376_13373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (6))){
var inst_12295 = (state_12354[(13)]);
var inst_12304 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12295) : f.call(null,inst_12295));
var inst_12305 = cljs.core.seq(inst_12304);
var inst_12306 = inst_12305;
var inst_12307 = null;
var inst_12308 = (0);
var inst_12309 = (0);
var state_12354__$1 = (function (){var statearr_12377 = state_12354;
(statearr_12377[(8)] = inst_12306);

(statearr_12377[(9)] = inst_12307);

(statearr_12377[(11)] = inst_12308);

(statearr_12377[(12)] = inst_12309);

return statearr_12377;
})();
var statearr_12378_13375 = state_12354__$1;
(statearr_12378_13375[(2)] = null);

(statearr_12378_13375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (17))){
var inst_12320 = (state_12354[(7)]);
var inst_12324 = cljs.core.chunk_first(inst_12320);
var inst_12325 = cljs.core.chunk_rest(inst_12320);
var inst_12326 = cljs.core.count(inst_12324);
var inst_12306 = inst_12325;
var inst_12307 = inst_12324;
var inst_12308 = inst_12326;
var inst_12309 = (0);
var state_12354__$1 = (function (){var statearr_12379 = state_12354;
(statearr_12379[(8)] = inst_12306);

(statearr_12379[(9)] = inst_12307);

(statearr_12379[(11)] = inst_12308);

(statearr_12379[(12)] = inst_12309);

return statearr_12379;
})();
var statearr_12380_13377 = state_12354__$1;
(statearr_12380_13377[(2)] = null);

(statearr_12380_13377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (3))){
var inst_12352 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12354__$1,inst_12352);
} else {
if((state_val_12355 === (12))){
var inst_12340 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12381_13379 = state_12354__$1;
(statearr_12381_13379[(2)] = inst_12340);

(statearr_12381_13379[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (2))){
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12354__$1,(4),in$);
} else {
if((state_val_12355 === (23))){
var inst_12348 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12382_13380 = state_12354__$1;
(statearr_12382_13380[(2)] = inst_12348);

(statearr_12382_13380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (19))){
var inst_12335 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12383_13381 = state_12354__$1;
(statearr_12383_13381[(2)] = inst_12335);

(statearr_12383_13381[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (11))){
var inst_12306 = (state_12354[(8)]);
var inst_12320 = (state_12354[(7)]);
var inst_12320__$1 = cljs.core.seq(inst_12306);
var state_12354__$1 = (function (){var statearr_12384 = state_12354;
(statearr_12384[(7)] = inst_12320__$1);

return statearr_12384;
})();
if(inst_12320__$1){
var statearr_12385_13388 = state_12354__$1;
(statearr_12385_13388[(1)] = (14));

} else {
var statearr_12386_13389 = state_12354__$1;
(statearr_12386_13389[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (9))){
var inst_12342 = (state_12354[(2)]);
var inst_12343 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12354__$1 = (function (){var statearr_12387 = state_12354;
(statearr_12387[(15)] = inst_12342);

return statearr_12387;
})();
if(cljs.core.truth_(inst_12343)){
var statearr_12388_13390 = state_12354__$1;
(statearr_12388_13390[(1)] = (21));

} else {
var statearr_12389_13392 = state_12354__$1;
(statearr_12389_13392[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (5))){
var inst_12298 = cljs.core.async.close_BANG_(out);
var state_12354__$1 = state_12354;
var statearr_12390_13393 = state_12354__$1;
(statearr_12390_13393[(2)] = inst_12298);

(statearr_12390_13393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (14))){
var inst_12320 = (state_12354[(7)]);
var inst_12322 = cljs.core.chunked_seq_QMARK_(inst_12320);
var state_12354__$1 = state_12354;
if(inst_12322){
var statearr_12391_13394 = state_12354__$1;
(statearr_12391_13394[(1)] = (17));

} else {
var statearr_12392_13395 = state_12354__$1;
(statearr_12392_13395[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (16))){
var inst_12338 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12393_13396 = state_12354__$1;
(statearr_12393_13396[(2)] = inst_12338);

(statearr_12393_13396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (10))){
var inst_12307 = (state_12354[(9)]);
var inst_12309 = (state_12354[(12)]);
var inst_12314 = cljs.core._nth(inst_12307,inst_12309);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12354__$1,(13),out,inst_12314);
} else {
if((state_val_12355 === (18))){
var inst_12320 = (state_12354[(7)]);
var inst_12329 = cljs.core.first(inst_12320);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12354__$1,(20),out,inst_12329);
} else {
if((state_val_12355 === (8))){
var inst_12308 = (state_12354[(11)]);
var inst_12309 = (state_12354[(12)]);
var inst_12311 = (inst_12309 < inst_12308);
var inst_12312 = inst_12311;
var state_12354__$1 = state_12354;
if(cljs.core.truth_(inst_12312)){
var statearr_12394_13398 = state_12354__$1;
(statearr_12394_13398[(1)] = (10));

} else {
var statearr_12395_13400 = state_12354__$1;
(statearr_12395_13400[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10725__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10725__auto____0 = (function (){
var statearr_12396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12396[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10725__auto__);

(statearr_12396[(1)] = (1));

return statearr_12396;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10725__auto____1 = (function (state_12354){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_12354);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e12397){var ex__10728__auto__ = e12397;
var statearr_12398_13402 = state_12354;
(statearr_12398_13402[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_12354[(4)]))){
var statearr_12399_13403 = state_12354;
(statearr_12399_13403[(1)] = cljs.core.first((state_12354[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13404 = state_12354;
state_12354 = G__13404;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10725__auto__ = function(state_12354){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10725__auto____1.call(this,state_12354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10725__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10725__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_12400 = f__10795__auto__();
(statearr_12400[(6)] = c__10794__auto__);

return statearr_12400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));

return c__10794__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12402 = arguments.length;
switch (G__12402) {
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
var G__12408 = arguments.length;
switch (G__12408) {
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
var G__12410 = arguments.length;
switch (G__12410) {
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
var c__10794__auto___13411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_12434){
var state_val_12435 = (state_12434[(1)]);
if((state_val_12435 === (7))){
var inst_12429 = (state_12434[(2)]);
var state_12434__$1 = state_12434;
var statearr_12436_13412 = state_12434__$1;
(statearr_12436_13412[(2)] = inst_12429);

(statearr_12436_13412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12435 === (1))){
var inst_12411 = null;
var state_12434__$1 = (function (){var statearr_12437 = state_12434;
(statearr_12437[(7)] = inst_12411);

return statearr_12437;
})();
var statearr_12438_13413 = state_12434__$1;
(statearr_12438_13413[(2)] = null);

(statearr_12438_13413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12435 === (4))){
var inst_12414 = (state_12434[(8)]);
var inst_12414__$1 = (state_12434[(2)]);
var inst_12415 = (inst_12414__$1 == null);
var inst_12416 = cljs.core.not(inst_12415);
var state_12434__$1 = (function (){var statearr_12439 = state_12434;
(statearr_12439[(8)] = inst_12414__$1);

return statearr_12439;
})();
if(inst_12416){
var statearr_12440_13414 = state_12434__$1;
(statearr_12440_13414[(1)] = (5));

} else {
var statearr_12441_13415 = state_12434__$1;
(statearr_12441_13415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12435 === (6))){
var state_12434__$1 = state_12434;
var statearr_12442_13416 = state_12434__$1;
(statearr_12442_13416[(2)] = null);

(statearr_12442_13416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12435 === (3))){
var inst_12431 = (state_12434[(2)]);
var inst_12432 = cljs.core.async.close_BANG_(out);
var state_12434__$1 = (function (){var statearr_12443 = state_12434;
(statearr_12443[(9)] = inst_12431);

return statearr_12443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12434__$1,inst_12432);
} else {
if((state_val_12435 === (2))){
var state_12434__$1 = state_12434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12434__$1,(4),ch);
} else {
if((state_val_12435 === (11))){
var inst_12414 = (state_12434[(8)]);
var inst_12423 = (state_12434[(2)]);
var inst_12411 = inst_12414;
var state_12434__$1 = (function (){var statearr_12444 = state_12434;
(statearr_12444[(10)] = inst_12423);

(statearr_12444[(7)] = inst_12411);

return statearr_12444;
})();
var statearr_12445_13417 = state_12434__$1;
(statearr_12445_13417[(2)] = null);

(statearr_12445_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12435 === (9))){
var inst_12414 = (state_12434[(8)]);
var state_12434__$1 = state_12434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12434__$1,(11),out,inst_12414);
} else {
if((state_val_12435 === (5))){
var inst_12411 = (state_12434[(7)]);
var inst_12414 = (state_12434[(8)]);
var inst_12418 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12414,inst_12411);
var state_12434__$1 = state_12434;
if(inst_12418){
var statearr_12448_13418 = state_12434__$1;
(statearr_12448_13418[(1)] = (8));

} else {
var statearr_12449_13419 = state_12434__$1;
(statearr_12449_13419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12435 === (10))){
var inst_12426 = (state_12434[(2)]);
var state_12434__$1 = state_12434;
var statearr_12450_13420 = state_12434__$1;
(statearr_12450_13420[(2)] = inst_12426);

(statearr_12450_13420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12435 === (8))){
var inst_12411 = (state_12434[(7)]);
var tmp12446 = inst_12411;
var inst_12411__$1 = tmp12446;
var state_12434__$1 = (function (){var statearr_12451 = state_12434;
(statearr_12451[(7)] = inst_12411__$1);

return statearr_12451;
})();
var statearr_12452_13421 = state_12434__$1;
(statearr_12452_13421[(2)] = null);

(statearr_12452_13421[(1)] = (2));


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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_12453 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12453[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_12453[(1)] = (1));

return statearr_12453;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_12434){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_12434);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e12454){var ex__10728__auto__ = e12454;
var statearr_12455_13422 = state_12434;
(statearr_12455_13422[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_12434[(4)]))){
var statearr_12456_13423 = state_12434;
(statearr_12456_13423[(1)] = cljs.core.first((state_12434[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13424 = state_12434;
state_12434 = G__13424;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_12434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_12434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_12457 = f__10795__auto__();
(statearr_12457[(6)] = c__10794__auto___13411);

return statearr_12457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12459 = arguments.length;
switch (G__12459) {
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
var c__10794__auto___13426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_12500){
var state_val_12501 = (state_12500[(1)]);
if((state_val_12501 === (7))){
var inst_12496 = (state_12500[(2)]);
var state_12500__$1 = state_12500;
var statearr_12502_13427 = state_12500__$1;
(statearr_12502_13427[(2)] = inst_12496);

(statearr_12502_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (1))){
var inst_12460 = (new Array(n));
var inst_12461 = inst_12460;
var inst_12462 = (0);
var state_12500__$1 = (function (){var statearr_12503 = state_12500;
(statearr_12503[(7)] = inst_12461);

(statearr_12503[(8)] = inst_12462);

return statearr_12503;
})();
var statearr_12504_13428 = state_12500__$1;
(statearr_12504_13428[(2)] = null);

(statearr_12504_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (4))){
var inst_12465 = (state_12500[(9)]);
var inst_12465__$1 = (state_12500[(2)]);
var inst_12466 = (inst_12465__$1 == null);
var inst_12467 = cljs.core.not(inst_12466);
var state_12500__$1 = (function (){var statearr_12505 = state_12500;
(statearr_12505[(9)] = inst_12465__$1);

return statearr_12505;
})();
if(inst_12467){
var statearr_12506_13429 = state_12500__$1;
(statearr_12506_13429[(1)] = (5));

} else {
var statearr_12507_13430 = state_12500__$1;
(statearr_12507_13430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (15))){
var inst_12490 = (state_12500[(2)]);
var state_12500__$1 = state_12500;
var statearr_12508_13431 = state_12500__$1;
(statearr_12508_13431[(2)] = inst_12490);

(statearr_12508_13431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (13))){
var state_12500__$1 = state_12500;
var statearr_12509_13432 = state_12500__$1;
(statearr_12509_13432[(2)] = null);

(statearr_12509_13432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (6))){
var inst_12462 = (state_12500[(8)]);
var inst_12486 = (inst_12462 > (0));
var state_12500__$1 = state_12500;
if(cljs.core.truth_(inst_12486)){
var statearr_12510_13433 = state_12500__$1;
(statearr_12510_13433[(1)] = (12));

} else {
var statearr_12511_13434 = state_12500__$1;
(statearr_12511_13434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (3))){
var inst_12498 = (state_12500[(2)]);
var state_12500__$1 = state_12500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12500__$1,inst_12498);
} else {
if((state_val_12501 === (12))){
var inst_12461 = (state_12500[(7)]);
var inst_12488 = cljs.core.vec(inst_12461);
var state_12500__$1 = state_12500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12500__$1,(15),out,inst_12488);
} else {
if((state_val_12501 === (2))){
var state_12500__$1 = state_12500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12500__$1,(4),ch);
} else {
if((state_val_12501 === (11))){
var inst_12480 = (state_12500[(2)]);
var inst_12481 = (new Array(n));
var inst_12461 = inst_12481;
var inst_12462 = (0);
var state_12500__$1 = (function (){var statearr_12512 = state_12500;
(statearr_12512[(7)] = inst_12461);

(statearr_12512[(8)] = inst_12462);

(statearr_12512[(10)] = inst_12480);

return statearr_12512;
})();
var statearr_12513_13435 = state_12500__$1;
(statearr_12513_13435[(2)] = null);

(statearr_12513_13435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (9))){
var inst_12461 = (state_12500[(7)]);
var inst_12478 = cljs.core.vec(inst_12461);
var state_12500__$1 = state_12500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12500__$1,(11),out,inst_12478);
} else {
if((state_val_12501 === (5))){
var inst_12461 = (state_12500[(7)]);
var inst_12462 = (state_12500[(8)]);
var inst_12473 = (state_12500[(11)]);
var inst_12465 = (state_12500[(9)]);
var inst_12469 = (inst_12461[inst_12462] = inst_12465);
var inst_12473__$1 = (inst_12462 + (1));
var inst_12474 = (inst_12473__$1 < n);
var state_12500__$1 = (function (){var statearr_12515 = state_12500;
(statearr_12515[(12)] = inst_12469);

(statearr_12515[(11)] = inst_12473__$1);

return statearr_12515;
})();
if(cljs.core.truth_(inst_12474)){
var statearr_12516_13436 = state_12500__$1;
(statearr_12516_13436[(1)] = (8));

} else {
var statearr_12517_13437 = state_12500__$1;
(statearr_12517_13437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (14))){
var inst_12493 = (state_12500[(2)]);
var inst_12494 = cljs.core.async.close_BANG_(out);
var state_12500__$1 = (function (){var statearr_12519 = state_12500;
(statearr_12519[(13)] = inst_12493);

return statearr_12519;
})();
var statearr_12520_13438 = state_12500__$1;
(statearr_12520_13438[(2)] = inst_12494);

(statearr_12520_13438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (10))){
var inst_12484 = (state_12500[(2)]);
var state_12500__$1 = state_12500;
var statearr_12521_13439 = state_12500__$1;
(statearr_12521_13439[(2)] = inst_12484);

(statearr_12521_13439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12501 === (8))){
var inst_12461 = (state_12500[(7)]);
var inst_12473 = (state_12500[(11)]);
var tmp12518 = inst_12461;
var inst_12461__$1 = tmp12518;
var inst_12462 = inst_12473;
var state_12500__$1 = (function (){var statearr_12522 = state_12500;
(statearr_12522[(7)] = inst_12461__$1);

(statearr_12522[(8)] = inst_12462);

return statearr_12522;
})();
var statearr_12523_13440 = state_12500__$1;
(statearr_12523_13440[(2)] = null);

(statearr_12523_13440[(1)] = (2));


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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_12524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12524[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_12524[(1)] = (1));

return statearr_12524;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_12500){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_12500);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e12525){var ex__10728__auto__ = e12525;
var statearr_12526_13441 = state_12500;
(statearr_12526_13441[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_12500[(4)]))){
var statearr_12527_13442 = state_12500;
(statearr_12527_13442[(1)] = cljs.core.first((state_12500[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13443 = state_12500;
state_12500 = G__13443;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_12500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_12500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_12528 = f__10795__auto__();
(statearr_12528[(6)] = c__10794__auto___13426);

return statearr_12528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12530 = arguments.length;
switch (G__12530) {
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
var c__10794__auto___13445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10795__auto__ = (function (){var switch__10724__auto__ = (function (state_12574){
var state_val_12575 = (state_12574[(1)]);
if((state_val_12575 === (7))){
var inst_12570 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12576_13446 = state_12574__$1;
(statearr_12576_13446[(2)] = inst_12570);

(statearr_12576_13446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (1))){
var inst_12531 = [];
var inst_12532 = inst_12531;
var inst_12533 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12574__$1 = (function (){var statearr_12577 = state_12574;
(statearr_12577[(7)] = inst_12532);

(statearr_12577[(8)] = inst_12533);

return statearr_12577;
})();
var statearr_12578_13447 = state_12574__$1;
(statearr_12578_13447[(2)] = null);

(statearr_12578_13447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (4))){
var inst_12538 = (state_12574[(9)]);
var inst_12538__$1 = (state_12574[(2)]);
var inst_12539 = (inst_12538__$1 == null);
var inst_12540 = cljs.core.not(inst_12539);
var state_12574__$1 = (function (){var statearr_12579 = state_12574;
(statearr_12579[(9)] = inst_12538__$1);

return statearr_12579;
})();
if(inst_12540){
var statearr_12585_13448 = state_12574__$1;
(statearr_12585_13448[(1)] = (5));

} else {
var statearr_12586_13449 = state_12574__$1;
(statearr_12586_13449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (15))){
var inst_12564 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12587_13450 = state_12574__$1;
(statearr_12587_13450[(2)] = inst_12564);

(statearr_12587_13450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (13))){
var state_12574__$1 = state_12574;
var statearr_12588_13451 = state_12574__$1;
(statearr_12588_13451[(2)] = null);

(statearr_12588_13451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (6))){
var inst_12532 = (state_12574[(7)]);
var inst_12559 = inst_12532.length;
var inst_12560 = (inst_12559 > (0));
var state_12574__$1 = state_12574;
if(cljs.core.truth_(inst_12560)){
var statearr_12589_13452 = state_12574__$1;
(statearr_12589_13452[(1)] = (12));

} else {
var statearr_12590_13453 = state_12574__$1;
(statearr_12590_13453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (3))){
var inst_12572 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12574__$1,inst_12572);
} else {
if((state_val_12575 === (12))){
var inst_12532 = (state_12574[(7)]);
var inst_12562 = cljs.core.vec(inst_12532);
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12574__$1,(15),out,inst_12562);
} else {
if((state_val_12575 === (2))){
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12574__$1,(4),ch);
} else {
if((state_val_12575 === (11))){
var inst_12538 = (state_12574[(9)]);
var inst_12542 = (state_12574[(10)]);
var inst_12552 = (state_12574[(2)]);
var inst_12553 = [];
var inst_12554 = inst_12553.push(inst_12538);
var inst_12532 = inst_12553;
var inst_12533 = inst_12542;
var state_12574__$1 = (function (){var statearr_12591 = state_12574;
(statearr_12591[(11)] = inst_12552);

(statearr_12591[(7)] = inst_12532);

(statearr_12591[(12)] = inst_12554);

(statearr_12591[(8)] = inst_12533);

return statearr_12591;
})();
var statearr_12592_13454 = state_12574__$1;
(statearr_12592_13454[(2)] = null);

(statearr_12592_13454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (9))){
var inst_12532 = (state_12574[(7)]);
var inst_12550 = cljs.core.vec(inst_12532);
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12574__$1,(11),out,inst_12550);
} else {
if((state_val_12575 === (5))){
var inst_12538 = (state_12574[(9)]);
var inst_12542 = (state_12574[(10)]);
var inst_12533 = (state_12574[(8)]);
var inst_12542__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12538) : f.call(null,inst_12538));
var inst_12543 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12542__$1,inst_12533);
var inst_12544 = cljs.core.keyword_identical_QMARK_(inst_12533,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12545 = ((inst_12543) || (inst_12544));
var state_12574__$1 = (function (){var statearr_12601 = state_12574;
(statearr_12601[(10)] = inst_12542__$1);

return statearr_12601;
})();
if(cljs.core.truth_(inst_12545)){
var statearr_12606_13455 = state_12574__$1;
(statearr_12606_13455[(1)] = (8));

} else {
var statearr_12607_13456 = state_12574__$1;
(statearr_12607_13456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (14))){
var inst_12567 = (state_12574[(2)]);
var inst_12568 = cljs.core.async.close_BANG_(out);
var state_12574__$1 = (function (){var statearr_12609 = state_12574;
(statearr_12609[(13)] = inst_12567);

return statearr_12609;
})();
var statearr_12610_13457 = state_12574__$1;
(statearr_12610_13457[(2)] = inst_12568);

(statearr_12610_13457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (10))){
var inst_12557 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12611_13458 = state_12574__$1;
(statearr_12611_13458[(2)] = inst_12557);

(statearr_12611_13458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12575 === (8))){
var inst_12538 = (state_12574[(9)]);
var inst_12542 = (state_12574[(10)]);
var inst_12532 = (state_12574[(7)]);
var inst_12547 = inst_12532.push(inst_12538);
var tmp12608 = inst_12532;
var inst_12532__$1 = tmp12608;
var inst_12533 = inst_12542;
var state_12574__$1 = (function (){var statearr_12615 = state_12574;
(statearr_12615[(7)] = inst_12532__$1);

(statearr_12615[(14)] = inst_12547);

(statearr_12615[(8)] = inst_12533);

return statearr_12615;
})();
var statearr_12616_13459 = state_12574__$1;
(statearr_12616_13459[(2)] = null);

(statearr_12616_13459[(1)] = (2));


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
var cljs$core$async$state_machine__10725__auto__ = null;
var cljs$core$async$state_machine__10725__auto____0 = (function (){
var statearr_12617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12617[(0)] = cljs$core$async$state_machine__10725__auto__);

(statearr_12617[(1)] = (1));

return statearr_12617;
});
var cljs$core$async$state_machine__10725__auto____1 = (function (state_12574){
while(true){
var ret_value__10726__auto__ = (function (){try{while(true){
var result__10727__auto__ = switch__10724__auto__(state_12574);
if(cljs.core.keyword_identical_QMARK_(result__10727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10727__auto__;
}
break;
}
}catch (e12618){var ex__10728__auto__ = e12618;
var statearr_12619_13460 = state_12574;
(statearr_12619_13460[(2)] = ex__10728__auto__);


if(cljs.core.seq((state_12574[(4)]))){
var statearr_12620_13461 = state_12574;
(statearr_12620_13461[(1)] = cljs.core.first((state_12574[(4)])));

} else {
throw ex__10728__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13462 = state_12574;
state_12574 = G__13462;
continue;
} else {
return ret_value__10726__auto__;
}
break;
}
});
cljs$core$async$state_machine__10725__auto__ = function(state_12574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10725__auto____1.call(this,state_12574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10725__auto____0;
cljs$core$async$state_machine__10725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10725__auto____1;
return cljs$core$async$state_machine__10725__auto__;
})()
})();
var state__10796__auto__ = (function (){var statearr_12621 = f__10795__auto__();
(statearr_12621[(6)] = c__10794__auto___13445);

return statearr_12621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10796__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
