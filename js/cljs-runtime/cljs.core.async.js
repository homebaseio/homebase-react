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
var G__10719 = arguments.length;
switch (G__10719) {
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
var G__10725 = arguments.length;
switch (G__10725) {
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
var G__10730 = arguments.length;
switch (G__10730) {
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
var val_12785 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12785) : fn1.call(null,val_12785));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12785) : fn1.call(null,val_12785));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10745 = (function (flag,meta10746){
this.flag = flag;
this.meta10746 = meta10746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10747,meta10746__$1){
var self__ = this;
var _10747__$1 = this;
return (new cljs.core.async.t_cljs$core$async10745(self__.flag,meta10746__$1));
}));

(cljs.core.async.t_cljs$core$async10745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10747){
var self__ = this;
var _10747__$1 = this;
return self__.meta10746;
}));

(cljs.core.async.t_cljs$core$async10745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10746","meta10746",-187336210,null)], null);
}));

(cljs.core.async.t_cljs$core$async10745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10745");

(cljs.core.async.t_cljs$core$async10745.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10745.
 */
cljs.core.async.__GT_t_cljs$core$async10745 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10745(flag__$1,meta10746){
return (new cljs.core.async.t_cljs$core$async10745(flag__$1,meta10746));
});

}

return (new cljs.core.async.t_cljs$core$async10745(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10759 = (function (flag,cb,meta10760){
this.flag = flag;
this.cb = cb;
this.meta10760 = meta10760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10761,meta10760__$1){
var self__ = this;
var _10761__$1 = this;
return (new cljs.core.async.t_cljs$core$async10759(self__.flag,self__.cb,meta10760__$1));
}));

(cljs.core.async.t_cljs$core$async10759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10761){
var self__ = this;
var _10761__$1 = this;
return self__.meta10760;
}));

(cljs.core.async.t_cljs$core$async10759.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10759.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10760","meta10760",1076003777,null)], null);
}));

(cljs.core.async.t_cljs$core$async10759.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10759");

(cljs.core.async.t_cljs$core$async10759.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10759");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10759.
 */
cljs.core.async.__GT_t_cljs$core$async10759 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10759(flag__$1,cb__$1,meta10760){
return (new cljs.core.async.t_cljs$core$async10759(flag__$1,cb__$1,meta10760));
});

}

return (new cljs.core.async.t_cljs$core$async10759(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10775_SHARP_){
var G__10793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10775_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10793) : fret.call(null,G__10793));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10791_SHARP_){
var G__10794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10791_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10794) : fret.call(null,G__10794));
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
var G__12791 = (i + (1));
i = G__12791;
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
var len__4736__auto___12792 = arguments.length;
var i__4737__auto___12793 = (0);
while(true){
if((i__4737__auto___12793 < len__4736__auto___12792)){
args__4742__auto__.push((arguments[i__4737__auto___12793]));

var G__12794 = (i__4737__auto___12793 + (1));
i__4737__auto___12793 = G__12794;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10808){
var map__10823 = p__10808;
var map__10823__$1 = (((((!((map__10823 == null))))?(((((map__10823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10823):map__10823);
var opts = map__10823__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10800){
var G__10801 = cljs.core.first(seq10800);
var seq10800__$1 = cljs.core.next(seq10800);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10801,seq10800__$1);
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
var G__10835 = arguments.length;
switch (G__10835) {
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
var c__10634__auto___12796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_10880){
var state_val_10881 = (state_10880[(1)]);
if((state_val_10881 === (7))){
var inst_10876 = (state_10880[(2)]);
var state_10880__$1 = state_10880;
var statearr_10902_12798 = state_10880__$1;
(statearr_10902_12798[(2)] = inst_10876);

(statearr_10902_12798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (1))){
var state_10880__$1 = state_10880;
var statearr_10904_12800 = state_10880__$1;
(statearr_10904_12800[(2)] = null);

(statearr_10904_12800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (4))){
var inst_10859 = (state_10880[(7)]);
var inst_10859__$1 = (state_10880[(2)]);
var inst_10860 = (inst_10859__$1 == null);
var state_10880__$1 = (function (){var statearr_10908 = state_10880;
(statearr_10908[(7)] = inst_10859__$1);

return statearr_10908;
})();
if(cljs.core.truth_(inst_10860)){
var statearr_10909_12801 = state_10880__$1;
(statearr_10909_12801[(1)] = (5));

} else {
var statearr_10910_12802 = state_10880__$1;
(statearr_10910_12802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (13))){
var state_10880__$1 = state_10880;
var statearr_10911_12803 = state_10880__$1;
(statearr_10911_12803[(2)] = null);

(statearr_10911_12803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (6))){
var inst_10859 = (state_10880[(7)]);
var state_10880__$1 = state_10880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10880__$1,(11),to,inst_10859);
} else {
if((state_val_10881 === (3))){
var inst_10878 = (state_10880[(2)]);
var state_10880__$1 = state_10880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10880__$1,inst_10878);
} else {
if((state_val_10881 === (12))){
var state_10880__$1 = state_10880;
var statearr_10912_12804 = state_10880__$1;
(statearr_10912_12804[(2)] = null);

(statearr_10912_12804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (2))){
var state_10880__$1 = state_10880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10880__$1,(4),from);
} else {
if((state_val_10881 === (11))){
var inst_10869 = (state_10880[(2)]);
var state_10880__$1 = state_10880;
if(cljs.core.truth_(inst_10869)){
var statearr_10915_12806 = state_10880__$1;
(statearr_10915_12806[(1)] = (12));

} else {
var statearr_10916_12807 = state_10880__$1;
(statearr_10916_12807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (9))){
var state_10880__$1 = state_10880;
var statearr_10917_12808 = state_10880__$1;
(statearr_10917_12808[(2)] = null);

(statearr_10917_12808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (5))){
var state_10880__$1 = state_10880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10918_12810 = state_10880__$1;
(statearr_10918_12810[(1)] = (8));

} else {
var statearr_10919_12811 = state_10880__$1;
(statearr_10919_12811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (14))){
var inst_10874 = (state_10880[(2)]);
var state_10880__$1 = state_10880;
var statearr_10920_12812 = state_10880__$1;
(statearr_10920_12812[(2)] = inst_10874);

(statearr_10920_12812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (10))){
var inst_10866 = (state_10880[(2)]);
var state_10880__$1 = state_10880;
var statearr_10924_12813 = state_10880__$1;
(statearr_10924_12813[(2)] = inst_10866);

(statearr_10924_12813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10881 === (8))){
var inst_10863 = cljs.core.async.close_BANG_(to);
var state_10880__$1 = state_10880;
var statearr_10925_12814 = state_10880__$1;
(statearr_10925_12814[(2)] = inst_10863);

(statearr_10925_12814[(1)] = (10));


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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_10927 = [null,null,null,null,null,null,null,null];
(statearr_10927[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_10927[(1)] = (1));

return statearr_10927;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_10880){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_10880);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e10928){var ex__10553__auto__ = e10928;
var statearr_10938_12815 = state_10880;
(statearr_10938_12815[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_10880[(4)]))){
var statearr_10939_12816 = state_10880;
(statearr_10939_12816[(1)] = cljs.core.first((state_10880[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12817 = state_10880;
state_10880 = G__12817;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_10880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_10880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_10950 = f__10635__auto__();
(statearr_10950[(6)] = c__10634__auto___12796);

return statearr_10950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
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
var process = (function (p__10956){
var vec__10957 = p__10956;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10957,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10957,(1),null);
var job = vec__10957;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10634__auto___12819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_10965){
var state_val_10966 = (state_10965[(1)]);
if((state_val_10966 === (1))){
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10965__$1,(2),res,v);
} else {
if((state_val_10966 === (2))){
var inst_10962 = (state_10965[(2)]);
var inst_10963 = cljs.core.async.close_BANG_(res);
var state_10965__$1 = (function (){var statearr_10970 = state_10965;
(statearr_10970[(7)] = inst_10962);

return statearr_10970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10965__$1,inst_10963);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0 = (function (){
var statearr_10971 = [null,null,null,null,null,null,null,null];
(statearr_10971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__);

(statearr_10971[(1)] = (1));

return statearr_10971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1 = (function (state_10965){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_10965);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e10973){var ex__10553__auto__ = e10973;
var statearr_10974_12820 = state_10965;
(statearr_10974_12820[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_10965[(4)]))){
var statearr_10976_12822 = state_10965;
(statearr_10976_12822[(1)] = cljs.core.first((state_10965[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12824 = state_10965;
state_10965 = G__12824;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = function(state_10965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1.call(this,state_10965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_10980 = f__10635__auto__();
(statearr_10980[(6)] = c__10634__auto___12819);

return statearr_10980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__10981){
var vec__10982 = p__10981;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10982,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10982,(1),null);
var job = vec__10982;
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
var n__4613__auto___12828 = n;
var __12829 = (0);
while(true){
if((__12829 < n__4613__auto___12828)){
var G__10985_12830 = type;
var G__10985_12831__$1 = (((G__10985_12830 instanceof cljs.core.Keyword))?G__10985_12830.fqn:null);
switch (G__10985_12831__$1) {
case "compute":
var c__10634__auto___12833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12829,c__10634__auto___12833,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async){
return (function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = ((function (__12829,c__10634__auto___12833,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async){
return (function (state_10999){
var state_val_11000 = (state_10999[(1)]);
if((state_val_11000 === (1))){
var state_10999__$1 = state_10999;
var statearr_11001_12835 = state_10999__$1;
(statearr_11001_12835[(2)] = null);

(statearr_11001_12835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (2))){
var state_10999__$1 = state_10999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10999__$1,(4),jobs);
} else {
if((state_val_11000 === (3))){
var inst_10997 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10999__$1,inst_10997);
} else {
if((state_val_11000 === (4))){
var inst_10989 = (state_10999[(2)]);
var inst_10990 = process(inst_10989);
var state_10999__$1 = state_10999;
if(cljs.core.truth_(inst_10990)){
var statearr_11002_12836 = state_10999__$1;
(statearr_11002_12836[(1)] = (5));

} else {
var statearr_11003_12837 = state_10999__$1;
(statearr_11003_12837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (5))){
var state_10999__$1 = state_10999;
var statearr_11004_12838 = state_10999__$1;
(statearr_11004_12838[(2)] = null);

(statearr_11004_12838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (6))){
var state_10999__$1 = state_10999;
var statearr_11005_12839 = state_10999__$1;
(statearr_11005_12839[(2)] = null);

(statearr_11005_12839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (7))){
var inst_10995 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
var statearr_11006_12840 = state_10999__$1;
(statearr_11006_12840[(2)] = inst_10995);

(statearr_11006_12840[(1)] = (3));


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
});})(__12829,c__10634__auto___12833,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async))
;
return ((function (__12829,switch__10549__auto__,c__10634__auto___12833,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0 = (function (){
var statearr_11007 = [null,null,null,null,null,null,null];
(statearr_11007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__);

(statearr_11007[(1)] = (1));

return statearr_11007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1 = (function (state_10999){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_10999);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11008){var ex__10553__auto__ = e11008;
var statearr_11009_12841 = state_10999;
(statearr_11009_12841[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_10999[(4)]))){
var statearr_11010_12842 = state_10999;
(statearr_11010_12842[(1)] = cljs.core.first((state_10999[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12843 = state_10999;
state_10999 = G__12843;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = function(state_10999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1.call(this,state_10999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__;
})()
;})(__12829,switch__10549__auto__,c__10634__auto___12833,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async))
})();
var state__10636__auto__ = (function (){var statearr_11011 = f__10635__auto__();
(statearr_11011[(6)] = c__10634__auto___12833);

return statearr_11011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
});})(__12829,c__10634__auto___12833,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async))
);


break;
case "async":
var c__10634__auto___12844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12829,c__10634__auto___12844,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async){
return (function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = ((function (__12829,c__10634__auto___12844,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async){
return (function (state_11024){
var state_val_11025 = (state_11024[(1)]);
if((state_val_11025 === (1))){
var state_11024__$1 = state_11024;
var statearr_11030_12845 = state_11024__$1;
(statearr_11030_12845[(2)] = null);

(statearr_11030_12845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11025 === (2))){
var state_11024__$1 = state_11024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11024__$1,(4),jobs);
} else {
if((state_val_11025 === (3))){
var inst_11022 = (state_11024[(2)]);
var state_11024__$1 = state_11024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11024__$1,inst_11022);
} else {
if((state_val_11025 === (4))){
var inst_11014 = (state_11024[(2)]);
var inst_11015 = async(inst_11014);
var state_11024__$1 = state_11024;
if(cljs.core.truth_(inst_11015)){
var statearr_11031_12846 = state_11024__$1;
(statearr_11031_12846[(1)] = (5));

} else {
var statearr_11032_12847 = state_11024__$1;
(statearr_11032_12847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11025 === (5))){
var state_11024__$1 = state_11024;
var statearr_11033_12848 = state_11024__$1;
(statearr_11033_12848[(2)] = null);

(statearr_11033_12848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11025 === (6))){
var state_11024__$1 = state_11024;
var statearr_11041_12849 = state_11024__$1;
(statearr_11041_12849[(2)] = null);

(statearr_11041_12849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11025 === (7))){
var inst_11020 = (state_11024[(2)]);
var state_11024__$1 = state_11024;
var statearr_11043_12850 = state_11024__$1;
(statearr_11043_12850[(2)] = inst_11020);

(statearr_11043_12850[(1)] = (3));


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
});})(__12829,c__10634__auto___12844,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async))
;
return ((function (__12829,switch__10549__auto__,c__10634__auto___12844,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0 = (function (){
var statearr_11046 = [null,null,null,null,null,null,null];
(statearr_11046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__);

(statearr_11046[(1)] = (1));

return statearr_11046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1 = (function (state_11024){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_11024);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11047){var ex__10553__auto__ = e11047;
var statearr_11048_12851 = state_11024;
(statearr_11048_12851[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_11024[(4)]))){
var statearr_11050_12852 = state_11024;
(statearr_11050_12852[(1)] = cljs.core.first((state_11024[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12853 = state_11024;
state_11024 = G__12853;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = function(state_11024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1.call(this,state_11024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__;
})()
;})(__12829,switch__10549__auto__,c__10634__auto___12844,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async))
})();
var state__10636__auto__ = (function (){var statearr_11054 = f__10635__auto__();
(statearr_11054[(6)] = c__10634__auto___12844);

return statearr_11054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
});})(__12829,c__10634__auto___12844,G__10985_12830,G__10985_12831__$1,n__4613__auto___12828,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10985_12831__$1)].join('')));

}

var G__12854 = (__12829 + (1));
__12829 = G__12854;
continue;
} else {
}
break;
}

var c__10634__auto___12855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_11082){
var state_val_11083 = (state_11082[(1)]);
if((state_val_11083 === (7))){
var inst_11078 = (state_11082[(2)]);
var state_11082__$1 = state_11082;
var statearr_11087_12856 = state_11082__$1;
(statearr_11087_12856[(2)] = inst_11078);

(statearr_11087_12856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11083 === (1))){
var state_11082__$1 = state_11082;
var statearr_11088_12857 = state_11082__$1;
(statearr_11088_12857[(2)] = null);

(statearr_11088_12857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11083 === (4))){
var inst_11059 = (state_11082[(7)]);
var inst_11059__$1 = (state_11082[(2)]);
var inst_11060 = (inst_11059__$1 == null);
var state_11082__$1 = (function (){var statearr_11089 = state_11082;
(statearr_11089[(7)] = inst_11059__$1);

return statearr_11089;
})();
if(cljs.core.truth_(inst_11060)){
var statearr_11090_12858 = state_11082__$1;
(statearr_11090_12858[(1)] = (5));

} else {
var statearr_11091_12859 = state_11082__$1;
(statearr_11091_12859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11083 === (6))){
var inst_11065 = (state_11082[(8)]);
var inst_11059 = (state_11082[(7)]);
var inst_11065__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11070 = [inst_11059,inst_11065__$1];
var inst_11071 = (new cljs.core.PersistentVector(null,2,(5),inst_11069,inst_11070,null));
var state_11082__$1 = (function (){var statearr_11094 = state_11082;
(statearr_11094[(8)] = inst_11065__$1);

return statearr_11094;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11082__$1,(8),jobs,inst_11071);
} else {
if((state_val_11083 === (3))){
var inst_11080 = (state_11082[(2)]);
var state_11082__$1 = state_11082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11082__$1,inst_11080);
} else {
if((state_val_11083 === (2))){
var state_11082__$1 = state_11082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11082__$1,(4),from);
} else {
if((state_val_11083 === (9))){
var inst_11075 = (state_11082[(2)]);
var state_11082__$1 = (function (){var statearr_11104 = state_11082;
(statearr_11104[(9)] = inst_11075);

return statearr_11104;
})();
var statearr_11105_12860 = state_11082__$1;
(statearr_11105_12860[(2)] = null);

(statearr_11105_12860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11083 === (5))){
var inst_11062 = cljs.core.async.close_BANG_(jobs);
var state_11082__$1 = state_11082;
var statearr_11106_12861 = state_11082__$1;
(statearr_11106_12861[(2)] = inst_11062);

(statearr_11106_12861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11083 === (8))){
var inst_11065 = (state_11082[(8)]);
var inst_11073 = (state_11082[(2)]);
var state_11082__$1 = (function (){var statearr_11107 = state_11082;
(statearr_11107[(10)] = inst_11073);

return statearr_11107;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11082__$1,(9),results,inst_11065);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0 = (function (){
var statearr_11110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__);

(statearr_11110[(1)] = (1));

return statearr_11110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1 = (function (state_11082){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_11082);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11111){var ex__10553__auto__ = e11111;
var statearr_11112_12879 = state_11082;
(statearr_11112_12879[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_11082[(4)]))){
var statearr_11113_12880 = state_11082;
(statearr_11113_12880[(1)] = cljs.core.first((state_11082[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12881 = state_11082;
state_11082 = G__12881;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = function(state_11082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1.call(this,state_11082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_11116 = f__10635__auto__();
(statearr_11116[(6)] = c__10634__auto___12855);

return statearr_11116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));


var c__10634__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_11168){
var state_val_11169 = (state_11168[(1)]);
if((state_val_11169 === (7))){
var inst_11163 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
var statearr_11170_12882 = state_11168__$1;
(statearr_11170_12882[(2)] = inst_11163);

(statearr_11170_12882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (20))){
var state_11168__$1 = state_11168;
var statearr_11171_12883 = state_11168__$1;
(statearr_11171_12883[(2)] = null);

(statearr_11171_12883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (1))){
var state_11168__$1 = state_11168;
var statearr_11172_12884 = state_11168__$1;
(statearr_11172_12884[(2)] = null);

(statearr_11172_12884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (4))){
var inst_11119 = (state_11168[(7)]);
var inst_11119__$1 = (state_11168[(2)]);
var inst_11120 = (inst_11119__$1 == null);
var state_11168__$1 = (function (){var statearr_11173 = state_11168;
(statearr_11173[(7)] = inst_11119__$1);

return statearr_11173;
})();
if(cljs.core.truth_(inst_11120)){
var statearr_11174_12885 = state_11168__$1;
(statearr_11174_12885[(1)] = (5));

} else {
var statearr_11177_12886 = state_11168__$1;
(statearr_11177_12886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (15))){
var inst_11145 = (state_11168[(8)]);
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11168__$1,(18),to,inst_11145);
} else {
if((state_val_11169 === (21))){
var inst_11158 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
var statearr_11178_12887 = state_11168__$1;
(statearr_11178_12887[(2)] = inst_11158);

(statearr_11178_12887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (13))){
var inst_11160 = (state_11168[(2)]);
var state_11168__$1 = (function (){var statearr_11179 = state_11168;
(statearr_11179[(9)] = inst_11160);

return statearr_11179;
})();
var statearr_11180_12888 = state_11168__$1;
(statearr_11180_12888[(2)] = null);

(statearr_11180_12888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (6))){
var inst_11119 = (state_11168[(7)]);
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11168__$1,(11),inst_11119);
} else {
if((state_val_11169 === (17))){
var inst_11153 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
if(cljs.core.truth_(inst_11153)){
var statearr_11183_12889 = state_11168__$1;
(statearr_11183_12889[(1)] = (19));

} else {
var statearr_11184_12890 = state_11168__$1;
(statearr_11184_12890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (3))){
var inst_11165 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11168__$1,inst_11165);
} else {
if((state_val_11169 === (12))){
var inst_11136 = (state_11168[(10)]);
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11168__$1,(14),inst_11136);
} else {
if((state_val_11169 === (2))){
var state_11168__$1 = state_11168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11168__$1,(4),results);
} else {
if((state_val_11169 === (19))){
var state_11168__$1 = state_11168;
var statearr_11191_12891 = state_11168__$1;
(statearr_11191_12891[(2)] = null);

(statearr_11191_12891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (11))){
var inst_11136 = (state_11168[(2)]);
var state_11168__$1 = (function (){var statearr_11192 = state_11168;
(statearr_11192[(10)] = inst_11136);

return statearr_11192;
})();
var statearr_11193_12892 = state_11168__$1;
(statearr_11193_12892[(2)] = null);

(statearr_11193_12892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (9))){
var state_11168__$1 = state_11168;
var statearr_11198_12893 = state_11168__$1;
(statearr_11198_12893[(2)] = null);

(statearr_11198_12893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (5))){
var state_11168__$1 = state_11168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11199_12894 = state_11168__$1;
(statearr_11199_12894[(1)] = (8));

} else {
var statearr_11200_12895 = state_11168__$1;
(statearr_11200_12895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (14))){
var inst_11145 = (state_11168[(8)]);
var inst_11145__$1 = (state_11168[(2)]);
var inst_11146 = (inst_11145__$1 == null);
var inst_11147 = cljs.core.not(inst_11146);
var state_11168__$1 = (function (){var statearr_11202 = state_11168;
(statearr_11202[(8)] = inst_11145__$1);

return statearr_11202;
})();
if(inst_11147){
var statearr_11203_12896 = state_11168__$1;
(statearr_11203_12896[(1)] = (15));

} else {
var statearr_11204_12897 = state_11168__$1;
(statearr_11204_12897[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (16))){
var state_11168__$1 = state_11168;
var statearr_11206_12908 = state_11168__$1;
(statearr_11206_12908[(2)] = false);

(statearr_11206_12908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (10))){
var inst_11132 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
var statearr_11207_12909 = state_11168__$1;
(statearr_11207_12909[(2)] = inst_11132);

(statearr_11207_12909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (18))){
var inst_11150 = (state_11168[(2)]);
var state_11168__$1 = state_11168;
var statearr_11208_12910 = state_11168__$1;
(statearr_11208_12910[(2)] = inst_11150);

(statearr_11208_12910[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11169 === (8))){
var inst_11123 = cljs.core.async.close_BANG_(to);
var state_11168__$1 = state_11168;
var statearr_11210_12911 = state_11168__$1;
(statearr_11210_12911[(2)] = inst_11123);

(statearr_11210_12911[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0 = (function (){
var statearr_11219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__);

(statearr_11219[(1)] = (1));

return statearr_11219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1 = (function (state_11168){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_11168);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11220){var ex__10553__auto__ = e11220;
var statearr_11221_12912 = state_11168;
(statearr_11221_12912[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_11168[(4)]))){
var statearr_11222_12913 = state_11168;
(statearr_11222_12913[(1)] = cljs.core.first((state_11168[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12914 = state_11168;
state_11168 = G__12914;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__ = function(state_11168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1.call(this,state_11168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_11224 = f__10635__auto__();
(statearr_11224[(6)] = c__10634__auto__);

return statearr_11224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));

return c__10634__auto__;
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
var G__11226 = arguments.length;
switch (G__11226) {
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
var G__11232 = arguments.length;
switch (G__11232) {
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
var G__11242 = arguments.length;
switch (G__11242) {
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
var c__10634__auto___12918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_11268){
var state_val_11269 = (state_11268[(1)]);
if((state_val_11269 === (7))){
var inst_11264 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
var statearr_11272_12919 = state_11268__$1;
(statearr_11272_12919[(2)] = inst_11264);

(statearr_11272_12919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (1))){
var state_11268__$1 = state_11268;
var statearr_11273_12920 = state_11268__$1;
(statearr_11273_12920[(2)] = null);

(statearr_11273_12920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (4))){
var inst_11245 = (state_11268[(7)]);
var inst_11245__$1 = (state_11268[(2)]);
var inst_11246 = (inst_11245__$1 == null);
var state_11268__$1 = (function (){var statearr_11274 = state_11268;
(statearr_11274[(7)] = inst_11245__$1);

return statearr_11274;
})();
if(cljs.core.truth_(inst_11246)){
var statearr_11277_12921 = state_11268__$1;
(statearr_11277_12921[(1)] = (5));

} else {
var statearr_11278_12922 = state_11268__$1;
(statearr_11278_12922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (13))){
var state_11268__$1 = state_11268;
var statearr_11279_12923 = state_11268__$1;
(statearr_11279_12923[(2)] = null);

(statearr_11279_12923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (6))){
var inst_11245 = (state_11268[(7)]);
var inst_11251 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11245) : p.call(null,inst_11245));
var state_11268__$1 = state_11268;
if(cljs.core.truth_(inst_11251)){
var statearr_11282_12924 = state_11268__$1;
(statearr_11282_12924[(1)] = (9));

} else {
var statearr_11283_12928 = state_11268__$1;
(statearr_11283_12928[(1)] = (10));

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
var statearr_11284_12931 = state_11268__$1;
(statearr_11284_12931[(2)] = null);

(statearr_11284_12931[(1)] = (2));


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
var statearr_11290_12932 = state_11268__$1;
(statearr_11290_12932[(2)] = tc);

(statearr_11290_12932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (5))){
var inst_11248 = cljs.core.async.close_BANG_(tc);
var inst_11249 = cljs.core.async.close_BANG_(fc);
var state_11268__$1 = (function (){var statearr_11292 = state_11268;
(statearr_11292[(8)] = inst_11248);

return statearr_11292;
})();
var statearr_11293_12936 = state_11268__$1;
(statearr_11293_12936[(2)] = inst_11249);

(statearr_11293_12936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (14))){
var inst_11262 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
var statearr_11294_12939 = state_11268__$1;
(statearr_11294_12939[(2)] = inst_11262);

(statearr_11294_12939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (10))){
var state_11268__$1 = state_11268;
var statearr_11295_12940 = state_11268__$1;
(statearr_11295_12940[(2)] = fc);

(statearr_11295_12940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11269 === (8))){
var inst_11257 = (state_11268[(2)]);
var state_11268__$1 = state_11268;
if(cljs.core.truth_(inst_11257)){
var statearr_11296_12941 = state_11268__$1;
(statearr_11296_12941[(1)] = (12));

} else {
var statearr_11297_12942 = state_11268__$1;
(statearr_11297_12942[(1)] = (13));

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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_11302 = [null,null,null,null,null,null,null,null,null];
(statearr_11302[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_11302[(1)] = (1));

return statearr_11302;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_11268){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_11268);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11303){var ex__10553__auto__ = e11303;
var statearr_11304_12943 = state_11268;
(statearr_11304_12943[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_11268[(4)]))){
var statearr_11305_12944 = state_11268;
(statearr_11305_12944[(1)] = cljs.core.first((state_11268[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12947 = state_11268;
state_11268 = G__12947;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_11268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_11268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_11306 = f__10635__auto__();
(statearr_11306[(6)] = c__10634__auto___12918);

return statearr_11306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
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
var c__10634__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_11335){
var state_val_11336 = (state_11335[(1)]);
if((state_val_11336 === (7))){
var inst_11331 = (state_11335[(2)]);
var state_11335__$1 = state_11335;
var statearr_11338_12948 = state_11335__$1;
(statearr_11338_12948[(2)] = inst_11331);

(statearr_11338_12948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11336 === (1))){
var inst_11307 = init;
var inst_11308 = inst_11307;
var state_11335__$1 = (function (){var statearr_11339 = state_11335;
(statearr_11339[(7)] = inst_11308);

return statearr_11339;
})();
var statearr_11340_12949 = state_11335__$1;
(statearr_11340_12949[(2)] = null);

(statearr_11340_12949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11336 === (4))){
var inst_11315 = (state_11335[(8)]);
var inst_11315__$1 = (state_11335[(2)]);
var inst_11316 = (inst_11315__$1 == null);
var state_11335__$1 = (function (){var statearr_11341 = state_11335;
(statearr_11341[(8)] = inst_11315__$1);

return statearr_11341;
})();
if(cljs.core.truth_(inst_11316)){
var statearr_11342_12950 = state_11335__$1;
(statearr_11342_12950[(1)] = (5));

} else {
var statearr_11343_12951 = state_11335__$1;
(statearr_11343_12951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11336 === (6))){
var inst_11319 = (state_11335[(9)]);
var inst_11308 = (state_11335[(7)]);
var inst_11315 = (state_11335[(8)]);
var inst_11319__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11308,inst_11315) : f.call(null,inst_11308,inst_11315));
var inst_11322 = cljs.core.reduced_QMARK_(inst_11319__$1);
var state_11335__$1 = (function (){var statearr_11344 = state_11335;
(statearr_11344[(9)] = inst_11319__$1);

return statearr_11344;
})();
if(inst_11322){
var statearr_11352_12953 = state_11335__$1;
(statearr_11352_12953[(1)] = (8));

} else {
var statearr_11353_12954 = state_11335__$1;
(statearr_11353_12954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11336 === (3))){
var inst_11333 = (state_11335[(2)]);
var state_11335__$1 = state_11335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11335__$1,inst_11333);
} else {
if((state_val_11336 === (2))){
var state_11335__$1 = state_11335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11335__$1,(4),ch);
} else {
if((state_val_11336 === (9))){
var inst_11319 = (state_11335[(9)]);
var inst_11308 = inst_11319;
var state_11335__$1 = (function (){var statearr_11354 = state_11335;
(statearr_11354[(7)] = inst_11308);

return statearr_11354;
})();
var statearr_11355_12955 = state_11335__$1;
(statearr_11355_12955[(2)] = null);

(statearr_11355_12955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11336 === (5))){
var inst_11308 = (state_11335[(7)]);
var state_11335__$1 = state_11335;
var statearr_11356_12956 = state_11335__$1;
(statearr_11356_12956[(2)] = inst_11308);

(statearr_11356_12956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11336 === (10))){
var inst_11329 = (state_11335[(2)]);
var state_11335__$1 = state_11335;
var statearr_11357_12957 = state_11335__$1;
(statearr_11357_12957[(2)] = inst_11329);

(statearr_11357_12957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11336 === (8))){
var inst_11319 = (state_11335[(9)]);
var inst_11325 = cljs.core.deref(inst_11319);
var state_11335__$1 = state_11335;
var statearr_11358_12958 = state_11335__$1;
(statearr_11358_12958[(2)] = inst_11325);

(statearr_11358_12958[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10550__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10550__auto____0 = (function (){
var statearr_11359 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11359[(0)] = cljs$core$async$reduce_$_state_machine__10550__auto__);

(statearr_11359[(1)] = (1));

return statearr_11359;
});
var cljs$core$async$reduce_$_state_machine__10550__auto____1 = (function (state_11335){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_11335);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11360){var ex__10553__auto__ = e11360;
var statearr_11361_12963 = state_11335;
(statearr_11361_12963[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_11335[(4)]))){
var statearr_11362_12964 = state_11335;
(statearr_11362_12964[(1)] = cljs.core.first((state_11335[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12965 = state_11335;
state_11335 = G__12965;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10550__auto__ = function(state_11335){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10550__auto____1.call(this,state_11335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10550__auto____0;
cljs$core$async$reduce_$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10550__auto____1;
return cljs$core$async$reduce_$_state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_11363 = f__10635__auto__();
(statearr_11363[(6)] = c__10634__auto__);

return statearr_11363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));

return c__10634__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10634__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_11375){
var state_val_11376 = (state_11375[(1)]);
if((state_val_11376 === (1))){
var inst_11370 = cljs.core.async.reduce(f__$1,init,ch);
var state_11375__$1 = state_11375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11375__$1,(2),inst_11370);
} else {
if((state_val_11376 === (2))){
var inst_11372 = (state_11375[(2)]);
var inst_11373 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11372) : f__$1.call(null,inst_11372));
var state_11375__$1 = state_11375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11375__$1,inst_11373);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10550__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10550__auto____0 = (function (){
var statearr_11377 = [null,null,null,null,null,null,null];
(statearr_11377[(0)] = cljs$core$async$transduce_$_state_machine__10550__auto__);

(statearr_11377[(1)] = (1));

return statearr_11377;
});
var cljs$core$async$transduce_$_state_machine__10550__auto____1 = (function (state_11375){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_11375);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11378){var ex__10553__auto__ = e11378;
var statearr_11379_12974 = state_11375;
(statearr_11379_12974[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_11375[(4)]))){
var statearr_11380_12975 = state_11375;
(statearr_11380_12975[(1)] = cljs.core.first((state_11375[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12976 = state_11375;
state_11375 = G__12976;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10550__auto__ = function(state_11375){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10550__auto____1.call(this,state_11375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10550__auto____0;
cljs$core$async$transduce_$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10550__auto____1;
return cljs$core$async$transduce_$_state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_11381 = f__10635__auto__();
(statearr_11381[(6)] = c__10634__auto__);

return statearr_11381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));

return c__10634__auto__;
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
var G__11383 = arguments.length;
switch (G__11383) {
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
var c__10634__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_11415){
var state_val_11416 = (state_11415[(1)]);
if((state_val_11416 === (7))){
var inst_11390 = (state_11415[(2)]);
var state_11415__$1 = state_11415;
var statearr_11417_12978 = state_11415__$1;
(statearr_11417_12978[(2)] = inst_11390);

(statearr_11417_12978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (1))){
var inst_11384 = cljs.core.seq(coll);
var inst_11385 = inst_11384;
var state_11415__$1 = (function (){var statearr_11418 = state_11415;
(statearr_11418[(7)] = inst_11385);

return statearr_11418;
})();
var statearr_11419_12979 = state_11415__$1;
(statearr_11419_12979[(2)] = null);

(statearr_11419_12979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (4))){
var inst_11385 = (state_11415[(7)]);
var inst_11388 = cljs.core.first(inst_11385);
var state_11415__$1 = state_11415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11415__$1,(7),ch,inst_11388);
} else {
if((state_val_11416 === (13))){
var inst_11409 = (state_11415[(2)]);
var state_11415__$1 = state_11415;
var statearr_11420_12980 = state_11415__$1;
(statearr_11420_12980[(2)] = inst_11409);

(statearr_11420_12980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (6))){
var inst_11393 = (state_11415[(2)]);
var state_11415__$1 = state_11415;
if(cljs.core.truth_(inst_11393)){
var statearr_11421_12981 = state_11415__$1;
(statearr_11421_12981[(1)] = (8));

} else {
var statearr_11422_12982 = state_11415__$1;
(statearr_11422_12982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (3))){
var inst_11413 = (state_11415[(2)]);
var state_11415__$1 = state_11415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11415__$1,inst_11413);
} else {
if((state_val_11416 === (12))){
var state_11415__$1 = state_11415;
var statearr_11423_12983 = state_11415__$1;
(statearr_11423_12983[(2)] = null);

(statearr_11423_12983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (2))){
var inst_11385 = (state_11415[(7)]);
var state_11415__$1 = state_11415;
if(cljs.core.truth_(inst_11385)){
var statearr_11424_12984 = state_11415__$1;
(statearr_11424_12984[(1)] = (4));

} else {
var statearr_11425_12985 = state_11415__$1;
(statearr_11425_12985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (11))){
var inst_11406 = cljs.core.async.close_BANG_(ch);
var state_11415__$1 = state_11415;
var statearr_11426_12986 = state_11415__$1;
(statearr_11426_12986[(2)] = inst_11406);

(statearr_11426_12986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (9))){
var state_11415__$1 = state_11415;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11429_12987 = state_11415__$1;
(statearr_11429_12987[(1)] = (11));

} else {
var statearr_11430_12988 = state_11415__$1;
(statearr_11430_12988[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (5))){
var inst_11385 = (state_11415[(7)]);
var state_11415__$1 = state_11415;
var statearr_11431_12989 = state_11415__$1;
(statearr_11431_12989[(2)] = inst_11385);

(statearr_11431_12989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (10))){
var inst_11411 = (state_11415[(2)]);
var state_11415__$1 = state_11415;
var statearr_11432_12990 = state_11415__$1;
(statearr_11432_12990[(2)] = inst_11411);

(statearr_11432_12990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (8))){
var inst_11385 = (state_11415[(7)]);
var inst_11395 = cljs.core.next(inst_11385);
var inst_11385__$1 = inst_11395;
var state_11415__$1 = (function (){var statearr_11434 = state_11415;
(statearr_11434[(7)] = inst_11385__$1);

return statearr_11434;
})();
var statearr_11435_12991 = state_11415__$1;
(statearr_11435_12991[(2)] = null);

(statearr_11435_12991[(1)] = (2));


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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_11436 = [null,null,null,null,null,null,null,null];
(statearr_11436[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_11436[(1)] = (1));

return statearr_11436;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_11415){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_11415);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11437){var ex__10553__auto__ = e11437;
var statearr_11438_12992 = state_11415;
(statearr_11438_12992[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_11415[(4)]))){
var statearr_11439_12993 = state_11415;
(statearr_11439_12993[(1)] = cljs.core.first((state_11415[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12994 = state_11415;
state_11415 = G__12994;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_11415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_11415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_11440 = f__10635__auto__();
(statearr_11440[(6)] = c__10634__auto__);

return statearr_11440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));

return c__10634__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12996 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12996(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13001 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13001(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13006 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13006(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13015 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13015(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11455 = (function (ch,cs,meta11456){
this.ch = ch;
this.cs = cs;
this.meta11456 = meta11456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11457,meta11456__$1){
var self__ = this;
var _11457__$1 = this;
return (new cljs.core.async.t_cljs$core$async11455(self__.ch,self__.cs,meta11456__$1));
}));

(cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11457){
var self__ = this;
var _11457__$1 = this;
return self__.meta11456;
}));

(cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11456","meta11456",1276655512,null)], null);
}));

(cljs.core.async.t_cljs$core$async11455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11455");

(cljs.core.async.t_cljs$core$async11455.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11455.
 */
cljs.core.async.__GT_t_cljs$core$async11455 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11455(ch__$1,cs__$1,meta11456){
return (new cljs.core.async.t_cljs$core$async11455(ch__$1,cs__$1,meta11456));
});

}

return (new cljs.core.async.t_cljs$core$async11455(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10634__auto___13020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_11601){
var state_val_11602 = (state_11601[(1)]);
if((state_val_11602 === (7))){
var inst_11597 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
var statearr_11603_13022 = state_11601__$1;
(statearr_11603_13022[(2)] = inst_11597);

(statearr_11603_13022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (20))){
var inst_11497 = (state_11601[(7)]);
var inst_11509 = cljs.core.first(inst_11497);
var inst_11510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11509,(0),null);
var inst_11511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11509,(1),null);
var state_11601__$1 = (function (){var statearr_11604 = state_11601;
(statearr_11604[(8)] = inst_11510);

return statearr_11604;
})();
if(cljs.core.truth_(inst_11511)){
var statearr_11605_13025 = state_11601__$1;
(statearr_11605_13025[(1)] = (22));

} else {
var statearr_11606_13026 = state_11601__$1;
(statearr_11606_13026[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (27))){
var inst_11546 = (state_11601[(9)]);
var inst_11539 = (state_11601[(10)]);
var inst_11541 = (state_11601[(11)]);
var inst_11461 = (state_11601[(12)]);
var inst_11546__$1 = cljs.core._nth(inst_11539,inst_11541);
var inst_11547 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11546__$1,inst_11461,done);
var state_11601__$1 = (function (){var statearr_11607 = state_11601;
(statearr_11607[(9)] = inst_11546__$1);

return statearr_11607;
})();
if(cljs.core.truth_(inst_11547)){
var statearr_11608_13030 = state_11601__$1;
(statearr_11608_13030[(1)] = (30));

} else {
var statearr_11609_13031 = state_11601__$1;
(statearr_11609_13031[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (1))){
var state_11601__$1 = state_11601;
var statearr_11610_13032 = state_11601__$1;
(statearr_11610_13032[(2)] = null);

(statearr_11610_13032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (24))){
var inst_11497 = (state_11601[(7)]);
var inst_11516 = (state_11601[(2)]);
var inst_11517 = cljs.core.next(inst_11497);
var inst_11470 = inst_11517;
var inst_11471 = null;
var inst_11472 = (0);
var inst_11473 = (0);
var state_11601__$1 = (function (){var statearr_11611 = state_11601;
(statearr_11611[(13)] = inst_11516);

(statearr_11611[(14)] = inst_11472);

(statearr_11611[(15)] = inst_11471);

(statearr_11611[(16)] = inst_11470);

(statearr_11611[(17)] = inst_11473);

return statearr_11611;
})();
var statearr_11612_13050 = state_11601__$1;
(statearr_11612_13050[(2)] = null);

(statearr_11612_13050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (39))){
var state_11601__$1 = state_11601;
var statearr_11616_13051 = state_11601__$1;
(statearr_11616_13051[(2)] = null);

(statearr_11616_13051[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (4))){
var inst_11461 = (state_11601[(12)]);
var inst_11461__$1 = (state_11601[(2)]);
var inst_11462 = (inst_11461__$1 == null);
var state_11601__$1 = (function (){var statearr_11617 = state_11601;
(statearr_11617[(12)] = inst_11461__$1);

return statearr_11617;
})();
if(cljs.core.truth_(inst_11462)){
var statearr_11618_13055 = state_11601__$1;
(statearr_11618_13055[(1)] = (5));

} else {
var statearr_11619_13056 = state_11601__$1;
(statearr_11619_13056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (15))){
var inst_11472 = (state_11601[(14)]);
var inst_11471 = (state_11601[(15)]);
var inst_11470 = (state_11601[(16)]);
var inst_11473 = (state_11601[(17)]);
var inst_11493 = (state_11601[(2)]);
var inst_11494 = (inst_11473 + (1));
var tmp11613 = inst_11472;
var tmp11614 = inst_11471;
var tmp11615 = inst_11470;
var inst_11470__$1 = tmp11615;
var inst_11471__$1 = tmp11614;
var inst_11472__$1 = tmp11613;
var inst_11473__$1 = inst_11494;
var state_11601__$1 = (function (){var statearr_11620 = state_11601;
(statearr_11620[(14)] = inst_11472__$1);

(statearr_11620[(15)] = inst_11471__$1);

(statearr_11620[(16)] = inst_11470__$1);

(statearr_11620[(17)] = inst_11473__$1);

(statearr_11620[(18)] = inst_11493);

return statearr_11620;
})();
var statearr_11621_13060 = state_11601__$1;
(statearr_11621_13060[(2)] = null);

(statearr_11621_13060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (21))){
var inst_11520 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
var statearr_11625_13061 = state_11601__$1;
(statearr_11625_13061[(2)] = inst_11520);

(statearr_11625_13061[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (31))){
var inst_11546 = (state_11601[(9)]);
var inst_11550 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11546);
var state_11601__$1 = state_11601;
var statearr_11629_13062 = state_11601__$1;
(statearr_11629_13062[(2)] = inst_11550);

(statearr_11629_13062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (32))){
var inst_11538 = (state_11601[(19)]);
var inst_11540 = (state_11601[(20)]);
var inst_11539 = (state_11601[(10)]);
var inst_11541 = (state_11601[(11)]);
var inst_11552 = (state_11601[(2)]);
var inst_11553 = (inst_11541 + (1));
var tmp11622 = inst_11538;
var tmp11623 = inst_11540;
var tmp11624 = inst_11539;
var inst_11538__$1 = tmp11622;
var inst_11539__$1 = tmp11624;
var inst_11540__$1 = tmp11623;
var inst_11541__$1 = inst_11553;
var state_11601__$1 = (function (){var statearr_11630 = state_11601;
(statearr_11630[(19)] = inst_11538__$1);

(statearr_11630[(20)] = inst_11540__$1);

(statearr_11630[(10)] = inst_11539__$1);

(statearr_11630[(21)] = inst_11552);

(statearr_11630[(11)] = inst_11541__$1);

return statearr_11630;
})();
var statearr_11631_13063 = state_11601__$1;
(statearr_11631_13063[(2)] = null);

(statearr_11631_13063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (40))){
var inst_11565 = (state_11601[(22)]);
var inst_11569 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11565);
var state_11601__$1 = state_11601;
var statearr_11632_13064 = state_11601__$1;
(statearr_11632_13064[(2)] = inst_11569);

(statearr_11632_13064[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (33))){
var inst_11556 = (state_11601[(23)]);
var inst_11558 = cljs.core.chunked_seq_QMARK_(inst_11556);
var state_11601__$1 = state_11601;
if(inst_11558){
var statearr_11633_13065 = state_11601__$1;
(statearr_11633_13065[(1)] = (36));

} else {
var statearr_11634_13066 = state_11601__$1;
(statearr_11634_13066[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (13))){
var inst_11487 = (state_11601[(24)]);
var inst_11490 = cljs.core.async.close_BANG_(inst_11487);
var state_11601__$1 = state_11601;
var statearr_11635_13067 = state_11601__$1;
(statearr_11635_13067[(2)] = inst_11490);

(statearr_11635_13067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (22))){
var inst_11510 = (state_11601[(8)]);
var inst_11513 = cljs.core.async.close_BANG_(inst_11510);
var state_11601__$1 = state_11601;
var statearr_11636_13068 = state_11601__$1;
(statearr_11636_13068[(2)] = inst_11513);

(statearr_11636_13068[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (36))){
var inst_11556 = (state_11601[(23)]);
var inst_11560 = cljs.core.chunk_first(inst_11556);
var inst_11561 = cljs.core.chunk_rest(inst_11556);
var inst_11562 = cljs.core.count(inst_11560);
var inst_11538 = inst_11561;
var inst_11539 = inst_11560;
var inst_11540 = inst_11562;
var inst_11541 = (0);
var state_11601__$1 = (function (){var statearr_11637 = state_11601;
(statearr_11637[(19)] = inst_11538);

(statearr_11637[(20)] = inst_11540);

(statearr_11637[(10)] = inst_11539);

(statearr_11637[(11)] = inst_11541);

return statearr_11637;
})();
var statearr_11638_13069 = state_11601__$1;
(statearr_11638_13069[(2)] = null);

(statearr_11638_13069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (41))){
var inst_11556 = (state_11601[(23)]);
var inst_11571 = (state_11601[(2)]);
var inst_11572 = cljs.core.next(inst_11556);
var inst_11538 = inst_11572;
var inst_11539 = null;
var inst_11540 = (0);
var inst_11541 = (0);
var state_11601__$1 = (function (){var statearr_11639 = state_11601;
(statearr_11639[(19)] = inst_11538);

(statearr_11639[(25)] = inst_11571);

(statearr_11639[(20)] = inst_11540);

(statearr_11639[(10)] = inst_11539);

(statearr_11639[(11)] = inst_11541);

return statearr_11639;
})();
var statearr_11640_13070 = state_11601__$1;
(statearr_11640_13070[(2)] = null);

(statearr_11640_13070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (43))){
var state_11601__$1 = state_11601;
var statearr_11641_13071 = state_11601__$1;
(statearr_11641_13071[(2)] = null);

(statearr_11641_13071[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (29))){
var inst_11580 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
var statearr_11642_13072 = state_11601__$1;
(statearr_11642_13072[(2)] = inst_11580);

(statearr_11642_13072[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (44))){
var inst_11594 = (state_11601[(2)]);
var state_11601__$1 = (function (){var statearr_11643 = state_11601;
(statearr_11643[(26)] = inst_11594);

return statearr_11643;
})();
var statearr_11644_13073 = state_11601__$1;
(statearr_11644_13073[(2)] = null);

(statearr_11644_13073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (6))){
var inst_11530 = (state_11601[(27)]);
var inst_11529 = cljs.core.deref(cs);
var inst_11530__$1 = cljs.core.keys(inst_11529);
var inst_11531 = cljs.core.count(inst_11530__$1);
var inst_11532 = cljs.core.reset_BANG_(dctr,inst_11531);
var inst_11537 = cljs.core.seq(inst_11530__$1);
var inst_11538 = inst_11537;
var inst_11539 = null;
var inst_11540 = (0);
var inst_11541 = (0);
var state_11601__$1 = (function (){var statearr_11645 = state_11601;
(statearr_11645[(19)] = inst_11538);

(statearr_11645[(28)] = inst_11532);

(statearr_11645[(20)] = inst_11540);

(statearr_11645[(10)] = inst_11539);

(statearr_11645[(27)] = inst_11530__$1);

(statearr_11645[(11)] = inst_11541);

return statearr_11645;
})();
var statearr_11646_13074 = state_11601__$1;
(statearr_11646_13074[(2)] = null);

(statearr_11646_13074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (28))){
var inst_11556 = (state_11601[(23)]);
var inst_11538 = (state_11601[(19)]);
var inst_11556__$1 = cljs.core.seq(inst_11538);
var state_11601__$1 = (function (){var statearr_11647 = state_11601;
(statearr_11647[(23)] = inst_11556__$1);

return statearr_11647;
})();
if(inst_11556__$1){
var statearr_11648_13075 = state_11601__$1;
(statearr_11648_13075[(1)] = (33));

} else {
var statearr_11649_13076 = state_11601__$1;
(statearr_11649_13076[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (25))){
var inst_11540 = (state_11601[(20)]);
var inst_11541 = (state_11601[(11)]);
var inst_11543 = (inst_11541 < inst_11540);
var inst_11544 = inst_11543;
var state_11601__$1 = state_11601;
if(cljs.core.truth_(inst_11544)){
var statearr_11654_13077 = state_11601__$1;
(statearr_11654_13077[(1)] = (27));

} else {
var statearr_11655_13078 = state_11601__$1;
(statearr_11655_13078[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (34))){
var state_11601__$1 = state_11601;
var statearr_11656_13079 = state_11601__$1;
(statearr_11656_13079[(2)] = null);

(statearr_11656_13079[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (17))){
var state_11601__$1 = state_11601;
var statearr_11657_13080 = state_11601__$1;
(statearr_11657_13080[(2)] = null);

(statearr_11657_13080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (3))){
var inst_11599 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11601__$1,inst_11599);
} else {
if((state_val_11602 === (12))){
var inst_11525 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
var statearr_11658_13081 = state_11601__$1;
(statearr_11658_13081[(2)] = inst_11525);

(statearr_11658_13081[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (2))){
var state_11601__$1 = state_11601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11601__$1,(4),ch);
} else {
if((state_val_11602 === (23))){
var state_11601__$1 = state_11601;
var statearr_11659_13082 = state_11601__$1;
(statearr_11659_13082[(2)] = null);

(statearr_11659_13082[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (35))){
var inst_11578 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
var statearr_11660_13083 = state_11601__$1;
(statearr_11660_13083[(2)] = inst_11578);

(statearr_11660_13083[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (19))){
var inst_11497 = (state_11601[(7)]);
var inst_11501 = cljs.core.chunk_first(inst_11497);
var inst_11502 = cljs.core.chunk_rest(inst_11497);
var inst_11503 = cljs.core.count(inst_11501);
var inst_11470 = inst_11502;
var inst_11471 = inst_11501;
var inst_11472 = inst_11503;
var inst_11473 = (0);
var state_11601__$1 = (function (){var statearr_11661 = state_11601;
(statearr_11661[(14)] = inst_11472);

(statearr_11661[(15)] = inst_11471);

(statearr_11661[(16)] = inst_11470);

(statearr_11661[(17)] = inst_11473);

return statearr_11661;
})();
var statearr_11662_13087 = state_11601__$1;
(statearr_11662_13087[(2)] = null);

(statearr_11662_13087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (11))){
var inst_11497 = (state_11601[(7)]);
var inst_11470 = (state_11601[(16)]);
var inst_11497__$1 = cljs.core.seq(inst_11470);
var state_11601__$1 = (function (){var statearr_11678 = state_11601;
(statearr_11678[(7)] = inst_11497__$1);

return statearr_11678;
})();
if(inst_11497__$1){
var statearr_11679_13088 = state_11601__$1;
(statearr_11679_13088[(1)] = (16));

} else {
var statearr_11680_13089 = state_11601__$1;
(statearr_11680_13089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (9))){
var inst_11527 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
var statearr_11681_13090 = state_11601__$1;
(statearr_11681_13090[(2)] = inst_11527);

(statearr_11681_13090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (5))){
var inst_11468 = cljs.core.deref(cs);
var inst_11469 = cljs.core.seq(inst_11468);
var inst_11470 = inst_11469;
var inst_11471 = null;
var inst_11472 = (0);
var inst_11473 = (0);
var state_11601__$1 = (function (){var statearr_11682 = state_11601;
(statearr_11682[(14)] = inst_11472);

(statearr_11682[(15)] = inst_11471);

(statearr_11682[(16)] = inst_11470);

(statearr_11682[(17)] = inst_11473);

return statearr_11682;
})();
var statearr_11683_13092 = state_11601__$1;
(statearr_11683_13092[(2)] = null);

(statearr_11683_13092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (14))){
var state_11601__$1 = state_11601;
var statearr_11684_13093 = state_11601__$1;
(statearr_11684_13093[(2)] = null);

(statearr_11684_13093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (45))){
var inst_11591 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
var statearr_11685_13094 = state_11601__$1;
(statearr_11685_13094[(2)] = inst_11591);

(statearr_11685_13094[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (26))){
var inst_11530 = (state_11601[(27)]);
var inst_11582 = (state_11601[(2)]);
var inst_11583 = cljs.core.seq(inst_11530);
var state_11601__$1 = (function (){var statearr_11686 = state_11601;
(statearr_11686[(29)] = inst_11582);

return statearr_11686;
})();
if(inst_11583){
var statearr_11687_13095 = state_11601__$1;
(statearr_11687_13095[(1)] = (42));

} else {
var statearr_11688_13096 = state_11601__$1;
(statearr_11688_13096[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (16))){
var inst_11497 = (state_11601[(7)]);
var inst_11499 = cljs.core.chunked_seq_QMARK_(inst_11497);
var state_11601__$1 = state_11601;
if(inst_11499){
var statearr_11689_13097 = state_11601__$1;
(statearr_11689_13097[(1)] = (19));

} else {
var statearr_11690_13098 = state_11601__$1;
(statearr_11690_13098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (38))){
var inst_11575 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
var statearr_11691_13104 = state_11601__$1;
(statearr_11691_13104[(2)] = inst_11575);

(statearr_11691_13104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (30))){
var state_11601__$1 = state_11601;
var statearr_11692_13105 = state_11601__$1;
(statearr_11692_13105[(2)] = null);

(statearr_11692_13105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (10))){
var inst_11471 = (state_11601[(15)]);
var inst_11473 = (state_11601[(17)]);
var inst_11481 = cljs.core._nth(inst_11471,inst_11473);
var inst_11487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11481,(0),null);
var inst_11488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11481,(1),null);
var state_11601__$1 = (function (){var statearr_11693 = state_11601;
(statearr_11693[(24)] = inst_11487);

return statearr_11693;
})();
if(cljs.core.truth_(inst_11488)){
var statearr_11694_13107 = state_11601__$1;
(statearr_11694_13107[(1)] = (13));

} else {
var statearr_11695_13108 = state_11601__$1;
(statearr_11695_13108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (18))){
var inst_11523 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
var statearr_11696_13109 = state_11601__$1;
(statearr_11696_13109[(2)] = inst_11523);

(statearr_11696_13109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (42))){
var state_11601__$1 = state_11601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11601__$1,(45),dchan);
} else {
if((state_val_11602 === (37))){
var inst_11556 = (state_11601[(23)]);
var inst_11461 = (state_11601[(12)]);
var inst_11565 = (state_11601[(22)]);
var inst_11565__$1 = cljs.core.first(inst_11556);
var inst_11566 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11565__$1,inst_11461,done);
var state_11601__$1 = (function (){var statearr_11701 = state_11601;
(statearr_11701[(22)] = inst_11565__$1);

return statearr_11701;
})();
if(cljs.core.truth_(inst_11566)){
var statearr_11702_13112 = state_11601__$1;
(statearr_11702_13112[(1)] = (39));

} else {
var statearr_11703_13113 = state_11601__$1;
(statearr_11703_13113[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (8))){
var inst_11472 = (state_11601[(14)]);
var inst_11473 = (state_11601[(17)]);
var inst_11475 = (inst_11473 < inst_11472);
var inst_11476 = inst_11475;
var state_11601__$1 = state_11601;
if(cljs.core.truth_(inst_11476)){
var statearr_11704_13114 = state_11601__$1;
(statearr_11704_13114[(1)] = (10));

} else {
var statearr_11705_13115 = state_11601__$1;
(statearr_11705_13115[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10550__auto__ = null;
var cljs$core$async$mult_$_state_machine__10550__auto____0 = (function (){
var statearr_11706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11706[(0)] = cljs$core$async$mult_$_state_machine__10550__auto__);

(statearr_11706[(1)] = (1));

return statearr_11706;
});
var cljs$core$async$mult_$_state_machine__10550__auto____1 = (function (state_11601){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_11601);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11707){var ex__10553__auto__ = e11707;
var statearr_11708_13116 = state_11601;
(statearr_11708_13116[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_11601[(4)]))){
var statearr_11709_13117 = state_11601;
(statearr_11709_13117[(1)] = cljs.core.first((state_11601[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13127 = state_11601;
state_11601 = G__13127;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10550__auto__ = function(state_11601){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10550__auto____1.call(this,state_11601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10550__auto____0;
cljs$core$async$mult_$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10550__auto____1;
return cljs$core$async$mult_$_state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_11710 = f__10635__auto__();
(statearr_11710[(6)] = c__10634__auto___13020);

return statearr_11710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
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
var G__11712 = arguments.length;
switch (G__11712) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13140 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13140(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13155 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13155(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13167 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13167(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13178 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13178(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13192 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13192(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13194 = arguments.length;
var i__4737__auto___13195 = (0);
while(true){
if((i__4737__auto___13195 < len__4736__auto___13194)){
args__4742__auto__.push((arguments[i__4737__auto___13195]));

var G__13196 = (i__4737__auto___13195 + (1));
i__4737__auto___13195 = G__13196;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11743){
var map__11744 = p__11743;
var map__11744__$1 = (((((!((map__11744 == null))))?(((((map__11744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11744):map__11744);
var opts = map__11744__$1;
var statearr_11746_13197 = state;
(statearr_11746_13197[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11747_13198 = state;
(statearr_11747_13198[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11748_13199 = state;
(statearr_11748_13199[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11737){
var G__11738 = cljs.core.first(seq11737);
var seq11737__$1 = cljs.core.next(seq11737);
var G__11739 = cljs.core.first(seq11737__$1);
var seq11737__$2 = cljs.core.next(seq11737__$1);
var G__11740 = cljs.core.first(seq11737__$2);
var seq11737__$3 = cljs.core.next(seq11737__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11738,G__11739,G__11740,seq11737__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11749 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11750){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11750 = meta11750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11751,meta11750__$1){
var self__ = this;
var _11751__$1 = this;
return (new cljs.core.async.t_cljs$core$async11749(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11750__$1));
}));

(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11751){
var self__ = this;
var _11751__$1 = this;
return self__.meta11750;
}));

(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11749.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11750","meta11750",-23544770,null)], null);
}));

(cljs.core.async.t_cljs$core$async11749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11749");

(cljs.core.async.t_cljs$core$async11749.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11749.
 */
cljs.core.async.__GT_t_cljs$core$async11749 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11749(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11750){
return (new cljs.core.async.t_cljs$core$async11749(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11750));
});

}

return (new cljs.core.async.t_cljs$core$async11749(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10634__auto___13211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_11871){
var state_val_11872 = (state_11871[(1)]);
if((state_val_11872 === (7))){
var inst_11786 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
var statearr_11877_13212 = state_11871__$1;
(statearr_11877_13212[(2)] = inst_11786);

(statearr_11877_13212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (20))){
var inst_11798 = (state_11871[(7)]);
var state_11871__$1 = state_11871;
var statearr_11878_13219 = state_11871__$1;
(statearr_11878_13219[(2)] = inst_11798);

(statearr_11878_13219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (27))){
var state_11871__$1 = state_11871;
var statearr_11879_13220 = state_11871__$1;
(statearr_11879_13220[(2)] = null);

(statearr_11879_13220[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (1))){
var inst_11767 = (state_11871[(8)]);
var inst_11767__$1 = calc_state();
var inst_11775 = (inst_11767__$1 == null);
var inst_11776 = cljs.core.not(inst_11775);
var state_11871__$1 = (function (){var statearr_11880 = state_11871;
(statearr_11880[(8)] = inst_11767__$1);

return statearr_11880;
})();
if(inst_11776){
var statearr_11881_13221 = state_11871__$1;
(statearr_11881_13221[(1)] = (2));

} else {
var statearr_11882_13222 = state_11871__$1;
(statearr_11882_13222[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (24))){
var inst_11845 = (state_11871[(9)]);
var inst_11822 = (state_11871[(10)]);
var inst_11831 = (state_11871[(11)]);
var inst_11845__$1 = (inst_11822.cljs$core$IFn$_invoke$arity$1 ? inst_11822.cljs$core$IFn$_invoke$arity$1(inst_11831) : inst_11822.call(null,inst_11831));
var state_11871__$1 = (function (){var statearr_11883 = state_11871;
(statearr_11883[(9)] = inst_11845__$1);

return statearr_11883;
})();
if(cljs.core.truth_(inst_11845__$1)){
var statearr_11885_13224 = state_11871__$1;
(statearr_11885_13224[(1)] = (29));

} else {
var statearr_11886_13225 = state_11871__$1;
(statearr_11886_13225[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (4))){
var inst_11789 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
if(cljs.core.truth_(inst_11789)){
var statearr_11887_13226 = state_11871__$1;
(statearr_11887_13226[(1)] = (8));

} else {
var statearr_11888_13227 = state_11871__$1;
(statearr_11888_13227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (15))){
var inst_11816 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
if(cljs.core.truth_(inst_11816)){
var statearr_11889_13229 = state_11871__$1;
(statearr_11889_13229[(1)] = (19));

} else {
var statearr_11890_13230 = state_11871__$1;
(statearr_11890_13230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (21))){
var inst_11821 = (state_11871[(12)]);
var inst_11821__$1 = (state_11871[(2)]);
var inst_11822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11821__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11821__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11821__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11871__$1 = (function (){var statearr_11891 = state_11871;
(statearr_11891[(13)] = inst_11823);

(statearr_11891[(10)] = inst_11822);

(statearr_11891[(12)] = inst_11821__$1);

return statearr_11891;
})();
return cljs.core.async.ioc_alts_BANG_(state_11871__$1,(22),inst_11824);
} else {
if((state_val_11872 === (31))){
var inst_11853 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
if(cljs.core.truth_(inst_11853)){
var statearr_11892_13232 = state_11871__$1;
(statearr_11892_13232[(1)] = (32));

} else {
var statearr_11893_13233 = state_11871__$1;
(statearr_11893_13233[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (32))){
var inst_11830 = (state_11871[(14)]);
var state_11871__$1 = state_11871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11871__$1,(35),out,inst_11830);
} else {
if((state_val_11872 === (33))){
var inst_11821 = (state_11871[(12)]);
var inst_11798 = inst_11821;
var state_11871__$1 = (function (){var statearr_11894 = state_11871;
(statearr_11894[(7)] = inst_11798);

return statearr_11894;
})();
var statearr_11895_13235 = state_11871__$1;
(statearr_11895_13235[(2)] = null);

(statearr_11895_13235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (13))){
var inst_11798 = (state_11871[(7)]);
var inst_11805 = inst_11798.cljs$lang$protocol_mask$partition0$;
var inst_11806 = (inst_11805 & (64));
var inst_11807 = inst_11798.cljs$core$ISeq$;
var inst_11808 = (cljs.core.PROTOCOL_SENTINEL === inst_11807);
var inst_11809 = ((inst_11806) || (inst_11808));
var state_11871__$1 = state_11871;
if(cljs.core.truth_(inst_11809)){
var statearr_11897_13236 = state_11871__$1;
(statearr_11897_13236[(1)] = (16));

} else {
var statearr_11898_13238 = state_11871__$1;
(statearr_11898_13238[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (22))){
var inst_11830 = (state_11871[(14)]);
var inst_11831 = (state_11871[(11)]);
var inst_11829 = (state_11871[(2)]);
var inst_11830__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11829,(0),null);
var inst_11831__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11829,(1),null);
var inst_11832 = (inst_11830__$1 == null);
var inst_11833 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11831__$1,change);
var inst_11834 = ((inst_11832) || (inst_11833));
var state_11871__$1 = (function (){var statearr_11901 = state_11871;
(statearr_11901[(14)] = inst_11830__$1);

(statearr_11901[(11)] = inst_11831__$1);

return statearr_11901;
})();
if(cljs.core.truth_(inst_11834)){
var statearr_11902_13239 = state_11871__$1;
(statearr_11902_13239[(1)] = (23));

} else {
var statearr_11903_13240 = state_11871__$1;
(statearr_11903_13240[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (36))){
var inst_11821 = (state_11871[(12)]);
var inst_11798 = inst_11821;
var state_11871__$1 = (function (){var statearr_11905 = state_11871;
(statearr_11905[(7)] = inst_11798);

return statearr_11905;
})();
var statearr_11906_13241 = state_11871__$1;
(statearr_11906_13241[(2)] = null);

(statearr_11906_13241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (29))){
var inst_11845 = (state_11871[(9)]);
var state_11871__$1 = state_11871;
var statearr_11907_13243 = state_11871__$1;
(statearr_11907_13243[(2)] = inst_11845);

(statearr_11907_13243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (6))){
var state_11871__$1 = state_11871;
var statearr_11908_13244 = state_11871__$1;
(statearr_11908_13244[(2)] = false);

(statearr_11908_13244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (28))){
var inst_11841 = (state_11871[(2)]);
var inst_11842 = calc_state();
var inst_11798 = inst_11842;
var state_11871__$1 = (function (){var statearr_11909 = state_11871;
(statearr_11909[(7)] = inst_11798);

(statearr_11909[(15)] = inst_11841);

return statearr_11909;
})();
var statearr_11910_13245 = state_11871__$1;
(statearr_11910_13245[(2)] = null);

(statearr_11910_13245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (25))){
var inst_11867 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
var statearr_11911_13246 = state_11871__$1;
(statearr_11911_13246[(2)] = inst_11867);

(statearr_11911_13246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (34))){
var inst_11865 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
var statearr_11913_13247 = state_11871__$1;
(statearr_11913_13247[(2)] = inst_11865);

(statearr_11913_13247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (17))){
var state_11871__$1 = state_11871;
var statearr_11915_13248 = state_11871__$1;
(statearr_11915_13248[(2)] = false);

(statearr_11915_13248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (3))){
var state_11871__$1 = state_11871;
var statearr_11916_13249 = state_11871__$1;
(statearr_11916_13249[(2)] = false);

(statearr_11916_13249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (12))){
var inst_11869 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11871__$1,inst_11869);
} else {
if((state_val_11872 === (2))){
var inst_11767 = (state_11871[(8)]);
var inst_11778 = inst_11767.cljs$lang$protocol_mask$partition0$;
var inst_11779 = (inst_11778 & (64));
var inst_11780 = inst_11767.cljs$core$ISeq$;
var inst_11781 = (cljs.core.PROTOCOL_SENTINEL === inst_11780);
var inst_11782 = ((inst_11779) || (inst_11781));
var state_11871__$1 = state_11871;
if(cljs.core.truth_(inst_11782)){
var statearr_11919_13250 = state_11871__$1;
(statearr_11919_13250[(1)] = (5));

} else {
var statearr_11920_13251 = state_11871__$1;
(statearr_11920_13251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (23))){
var inst_11830 = (state_11871[(14)]);
var inst_11836 = (inst_11830 == null);
var state_11871__$1 = state_11871;
if(cljs.core.truth_(inst_11836)){
var statearr_11921_13252 = state_11871__$1;
(statearr_11921_13252[(1)] = (26));

} else {
var statearr_11922_13253 = state_11871__$1;
(statearr_11922_13253[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (35))){
var inst_11856 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
if(cljs.core.truth_(inst_11856)){
var statearr_11923_13254 = state_11871__$1;
(statearr_11923_13254[(1)] = (36));

} else {
var statearr_11924_13255 = state_11871__$1;
(statearr_11924_13255[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (19))){
var inst_11798 = (state_11871[(7)]);
var inst_11818 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11798);
var state_11871__$1 = state_11871;
var statearr_11925_13256 = state_11871__$1;
(statearr_11925_13256[(2)] = inst_11818);

(statearr_11925_13256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (11))){
var inst_11798 = (state_11871[(7)]);
var inst_11802 = (inst_11798 == null);
var inst_11803 = cljs.core.not(inst_11802);
var state_11871__$1 = state_11871;
if(inst_11803){
var statearr_11929_13257 = state_11871__$1;
(statearr_11929_13257[(1)] = (13));

} else {
var statearr_11934_13258 = state_11871__$1;
(statearr_11934_13258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (9))){
var inst_11767 = (state_11871[(8)]);
var state_11871__$1 = state_11871;
var statearr_11935_13259 = state_11871__$1;
(statearr_11935_13259[(2)] = inst_11767);

(statearr_11935_13259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (5))){
var state_11871__$1 = state_11871;
var statearr_11940_13260 = state_11871__$1;
(statearr_11940_13260[(2)] = true);

(statearr_11940_13260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (14))){
var state_11871__$1 = state_11871;
var statearr_11945_13261 = state_11871__$1;
(statearr_11945_13261[(2)] = false);

(statearr_11945_13261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (26))){
var inst_11831 = (state_11871[(11)]);
var inst_11838 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11831);
var state_11871__$1 = state_11871;
var statearr_11946_13262 = state_11871__$1;
(statearr_11946_13262[(2)] = inst_11838);

(statearr_11946_13262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (16))){
var state_11871__$1 = state_11871;
var statearr_11947_13263 = state_11871__$1;
(statearr_11947_13263[(2)] = true);

(statearr_11947_13263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (38))){
var inst_11861 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
var statearr_11948_13264 = state_11871__$1;
(statearr_11948_13264[(2)] = inst_11861);

(statearr_11948_13264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (30))){
var inst_11823 = (state_11871[(13)]);
var inst_11822 = (state_11871[(10)]);
var inst_11831 = (state_11871[(11)]);
var inst_11848 = cljs.core.empty_QMARK_(inst_11822);
var inst_11849 = (inst_11823.cljs$core$IFn$_invoke$arity$1 ? inst_11823.cljs$core$IFn$_invoke$arity$1(inst_11831) : inst_11823.call(null,inst_11831));
var inst_11850 = cljs.core.not(inst_11849);
var inst_11851 = ((inst_11848) && (inst_11850));
var state_11871__$1 = state_11871;
var statearr_11949_13265 = state_11871__$1;
(statearr_11949_13265[(2)] = inst_11851);

(statearr_11949_13265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (10))){
var inst_11767 = (state_11871[(8)]);
var inst_11794 = (state_11871[(2)]);
var inst_11795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11794,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11794,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11794,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11798 = inst_11767;
var state_11871__$1 = (function (){var statearr_11950 = state_11871;
(statearr_11950[(16)] = inst_11795);

(statearr_11950[(17)] = inst_11797);

(statearr_11950[(18)] = inst_11796);

(statearr_11950[(7)] = inst_11798);

return statearr_11950;
})();
var statearr_11951_13266 = state_11871__$1;
(statearr_11951_13266[(2)] = null);

(statearr_11951_13266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (18))){
var inst_11813 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
var statearr_11952_13267 = state_11871__$1;
(statearr_11952_13267[(2)] = inst_11813);

(statearr_11952_13267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (37))){
var state_11871__$1 = state_11871;
var statearr_11953_13268 = state_11871__$1;
(statearr_11953_13268[(2)] = null);

(statearr_11953_13268[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (8))){
var inst_11767 = (state_11871[(8)]);
var inst_11791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11767);
var state_11871__$1 = state_11871;
var statearr_11954_13269 = state_11871__$1;
(statearr_11954_13269[(2)] = inst_11791);

(statearr_11954_13269[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10550__auto__ = null;
var cljs$core$async$mix_$_state_machine__10550__auto____0 = (function (){
var statearr_11955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11955[(0)] = cljs$core$async$mix_$_state_machine__10550__auto__);

(statearr_11955[(1)] = (1));

return statearr_11955;
});
var cljs$core$async$mix_$_state_machine__10550__auto____1 = (function (state_11871){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_11871);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e11956){var ex__10553__auto__ = e11956;
var statearr_11957_13270 = state_11871;
(statearr_11957_13270[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_11871[(4)]))){
var statearr_11958_13271 = state_11871;
(statearr_11958_13271[(1)] = cljs.core.first((state_11871[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13272 = state_11871;
state_11871 = G__13272;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10550__auto__ = function(state_11871){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10550__auto____1.call(this,state_11871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10550__auto____0;
cljs$core$async$mix_$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10550__auto____1;
return cljs$core$async$mix_$_state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_11959 = f__10635__auto__();
(statearr_11959[(6)] = c__10634__auto___13211);

return statearr_11959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13273 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13273(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13274 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13274(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13275 = (function() {
var G__13276 = null;
var G__13276__1 = (function (p){
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
var G__13276__2 = (function (p,v){
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
G__13276 = function(p,v){
switch(arguments.length){
case 1:
return G__13276__1.call(this,p);
case 2:
return G__13276__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13276.cljs$core$IFn$_invoke$arity$1 = G__13276__1;
G__13276.cljs$core$IFn$_invoke$arity$2 = G__13276__2;
return G__13276;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11964 = arguments.length;
switch (G__11964) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13275(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13275(p,v);
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
var G__11973 = arguments.length;
switch (G__11973) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11969_SHARP_){
if(cljs.core.truth_((p1__11969_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11969_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11969_SHARP_.call(null,topic)))){
return p1__11969_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11969_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11976 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11977){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11977 = meta11977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11978,meta11977__$1){
var self__ = this;
var _11978__$1 = this;
return (new cljs.core.async.t_cljs$core$async11976(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11977__$1));
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11978){
var self__ = this;
var _11978__$1 = this;
return self__.meta11977;
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11977","meta11977",-1730821131,null)], null);
}));

(cljs.core.async.t_cljs$core$async11976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11976");

(cljs.core.async.t_cljs$core$async11976.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11976.
 */
cljs.core.async.__GT_t_cljs$core$async11976 = (function cljs$core$async$__GT_t_cljs$core$async11976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11977){
return (new cljs.core.async.t_cljs$core$async11976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11977));
});

}

return (new cljs.core.async.t_cljs$core$async11976(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10634__auto___13279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_12050){
var state_val_12051 = (state_12050[(1)]);
if((state_val_12051 === (7))){
var inst_12046 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12052_13280 = state_12050__$1;
(statearr_12052_13280[(2)] = inst_12046);

(statearr_12052_13280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (20))){
var state_12050__$1 = state_12050;
var statearr_12053_13281 = state_12050__$1;
(statearr_12053_13281[(2)] = null);

(statearr_12053_13281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (1))){
var state_12050__$1 = state_12050;
var statearr_12054_13282 = state_12050__$1;
(statearr_12054_13282[(2)] = null);

(statearr_12054_13282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (24))){
var inst_12029 = (state_12050[(7)]);
var inst_12038 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12029);
var state_12050__$1 = state_12050;
var statearr_12055_13283 = state_12050__$1;
(statearr_12055_13283[(2)] = inst_12038);

(statearr_12055_13283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (4))){
var inst_11981 = (state_12050[(8)]);
var inst_11981__$1 = (state_12050[(2)]);
var inst_11982 = (inst_11981__$1 == null);
var state_12050__$1 = (function (){var statearr_12056 = state_12050;
(statearr_12056[(8)] = inst_11981__$1);

return statearr_12056;
})();
if(cljs.core.truth_(inst_11982)){
var statearr_12057_13284 = state_12050__$1;
(statearr_12057_13284[(1)] = (5));

} else {
var statearr_12058_13285 = state_12050__$1;
(statearr_12058_13285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (15))){
var inst_12023 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12059_13286 = state_12050__$1;
(statearr_12059_13286[(2)] = inst_12023);

(statearr_12059_13286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (21))){
var inst_12043 = (state_12050[(2)]);
var state_12050__$1 = (function (){var statearr_12060 = state_12050;
(statearr_12060[(9)] = inst_12043);

return statearr_12060;
})();
var statearr_12061_13287 = state_12050__$1;
(statearr_12061_13287[(2)] = null);

(statearr_12061_13287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (13))){
var inst_12005 = (state_12050[(10)]);
var inst_12007 = cljs.core.chunked_seq_QMARK_(inst_12005);
var state_12050__$1 = state_12050;
if(inst_12007){
var statearr_12062_13288 = state_12050__$1;
(statearr_12062_13288[(1)] = (16));

} else {
var statearr_12063_13289 = state_12050__$1;
(statearr_12063_13289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (22))){
var inst_12035 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
if(cljs.core.truth_(inst_12035)){
var statearr_12064_13290 = state_12050__$1;
(statearr_12064_13290[(1)] = (23));

} else {
var statearr_12065_13291 = state_12050__$1;
(statearr_12065_13291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (6))){
var inst_11981 = (state_12050[(8)]);
var inst_12031 = (state_12050[(11)]);
var inst_12029 = (state_12050[(7)]);
var inst_12029__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11981) : topic_fn.call(null,inst_11981));
var inst_12030 = cljs.core.deref(mults);
var inst_12031__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12030,inst_12029__$1);
var state_12050__$1 = (function (){var statearr_12066 = state_12050;
(statearr_12066[(11)] = inst_12031__$1);

(statearr_12066[(7)] = inst_12029__$1);

return statearr_12066;
})();
if(cljs.core.truth_(inst_12031__$1)){
var statearr_12067_13292 = state_12050__$1;
(statearr_12067_13292[(1)] = (19));

} else {
var statearr_12068_13293 = state_12050__$1;
(statearr_12068_13293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (25))){
var inst_12040 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12070_13294 = state_12050__$1;
(statearr_12070_13294[(2)] = inst_12040);

(statearr_12070_13294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (17))){
var inst_12005 = (state_12050[(10)]);
var inst_12014 = cljs.core.first(inst_12005);
var inst_12015 = cljs.core.async.muxch_STAR_(inst_12014);
var inst_12016 = cljs.core.async.close_BANG_(inst_12015);
var inst_12017 = cljs.core.next(inst_12005);
var inst_11991 = inst_12017;
var inst_11992 = null;
var inst_11993 = (0);
var inst_11994 = (0);
var state_12050__$1 = (function (){var statearr_12071 = state_12050;
(statearr_12071[(12)] = inst_11991);

(statearr_12071[(13)] = inst_11992);

(statearr_12071[(14)] = inst_12016);

(statearr_12071[(15)] = inst_11993);

(statearr_12071[(16)] = inst_11994);

return statearr_12071;
})();
var statearr_12072_13296 = state_12050__$1;
(statearr_12072_13296[(2)] = null);

(statearr_12072_13296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (3))){
var inst_12048 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12050__$1,inst_12048);
} else {
if((state_val_12051 === (12))){
var inst_12025 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12073_13297 = state_12050__$1;
(statearr_12073_13297[(2)] = inst_12025);

(statearr_12073_13297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (2))){
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12050__$1,(4),ch);
} else {
if((state_val_12051 === (23))){
var state_12050__$1 = state_12050;
var statearr_12074_13298 = state_12050__$1;
(statearr_12074_13298[(2)] = null);

(statearr_12074_13298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (19))){
var inst_11981 = (state_12050[(8)]);
var inst_12031 = (state_12050[(11)]);
var inst_12033 = cljs.core.async.muxch_STAR_(inst_12031);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12050__$1,(22),inst_12033,inst_11981);
} else {
if((state_val_12051 === (11))){
var inst_11991 = (state_12050[(12)]);
var inst_12005 = (state_12050[(10)]);
var inst_12005__$1 = cljs.core.seq(inst_11991);
var state_12050__$1 = (function (){var statearr_12077 = state_12050;
(statearr_12077[(10)] = inst_12005__$1);

return statearr_12077;
})();
if(inst_12005__$1){
var statearr_12079_13299 = state_12050__$1;
(statearr_12079_13299[(1)] = (13));

} else {
var statearr_12080_13300 = state_12050__$1;
(statearr_12080_13300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (9))){
var inst_12027 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12081_13301 = state_12050__$1;
(statearr_12081_13301[(2)] = inst_12027);

(statearr_12081_13301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (5))){
var inst_11988 = cljs.core.deref(mults);
var inst_11989 = cljs.core.vals(inst_11988);
var inst_11990 = cljs.core.seq(inst_11989);
var inst_11991 = inst_11990;
var inst_11992 = null;
var inst_11993 = (0);
var inst_11994 = (0);
var state_12050__$1 = (function (){var statearr_12083 = state_12050;
(statearr_12083[(12)] = inst_11991);

(statearr_12083[(13)] = inst_11992);

(statearr_12083[(15)] = inst_11993);

(statearr_12083[(16)] = inst_11994);

return statearr_12083;
})();
var statearr_12084_13302 = state_12050__$1;
(statearr_12084_13302[(2)] = null);

(statearr_12084_13302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (14))){
var state_12050__$1 = state_12050;
var statearr_12088_13303 = state_12050__$1;
(statearr_12088_13303[(2)] = null);

(statearr_12088_13303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (16))){
var inst_12005 = (state_12050[(10)]);
var inst_12009 = cljs.core.chunk_first(inst_12005);
var inst_12010 = cljs.core.chunk_rest(inst_12005);
var inst_12011 = cljs.core.count(inst_12009);
var inst_11991 = inst_12010;
var inst_11992 = inst_12009;
var inst_11993 = inst_12011;
var inst_11994 = (0);
var state_12050__$1 = (function (){var statearr_12089 = state_12050;
(statearr_12089[(12)] = inst_11991);

(statearr_12089[(13)] = inst_11992);

(statearr_12089[(15)] = inst_11993);

(statearr_12089[(16)] = inst_11994);

return statearr_12089;
})();
var statearr_12090_13304 = state_12050__$1;
(statearr_12090_13304[(2)] = null);

(statearr_12090_13304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (10))){
var inst_11991 = (state_12050[(12)]);
var inst_11992 = (state_12050[(13)]);
var inst_11993 = (state_12050[(15)]);
var inst_11994 = (state_12050[(16)]);
var inst_11999 = cljs.core._nth(inst_11992,inst_11994);
var inst_12000 = cljs.core.async.muxch_STAR_(inst_11999);
var inst_12001 = cljs.core.async.close_BANG_(inst_12000);
var inst_12002 = (inst_11994 + (1));
var tmp12085 = inst_11991;
var tmp12086 = inst_11992;
var tmp12087 = inst_11993;
var inst_11991__$1 = tmp12085;
var inst_11992__$1 = tmp12086;
var inst_11993__$1 = tmp12087;
var inst_11994__$1 = inst_12002;
var state_12050__$1 = (function (){var statearr_12091 = state_12050;
(statearr_12091[(12)] = inst_11991__$1);

(statearr_12091[(13)] = inst_11992__$1);

(statearr_12091[(17)] = inst_12001);

(statearr_12091[(15)] = inst_11993__$1);

(statearr_12091[(16)] = inst_11994__$1);

return statearr_12091;
})();
var statearr_12092_13306 = state_12050__$1;
(statearr_12092_13306[(2)] = null);

(statearr_12092_13306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (18))){
var inst_12020 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12093_13307 = state_12050__$1;
(statearr_12093_13307[(2)] = inst_12020);

(statearr_12093_13307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (8))){
var inst_11993 = (state_12050[(15)]);
var inst_11994 = (state_12050[(16)]);
var inst_11996 = (inst_11994 < inst_11993);
var inst_11997 = inst_11996;
var state_12050__$1 = state_12050;
if(cljs.core.truth_(inst_11997)){
var statearr_12094_13308 = state_12050__$1;
(statearr_12094_13308[(1)] = (10));

} else {
var statearr_12095_13309 = state_12050__$1;
(statearr_12095_13309[(1)] = (11));

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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_12096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12096[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_12096[(1)] = (1));

return statearr_12096;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_12050){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_12050);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e12097){var ex__10553__auto__ = e12097;
var statearr_12098_13310 = state_12050;
(statearr_12098_13310[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_12050[(4)]))){
var statearr_12099_13313 = state_12050;
(statearr_12099_13313[(1)] = cljs.core.first((state_12050[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13334 = state_12050;
state_12050 = G__13334;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_12050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_12050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_12100 = f__10635__auto__();
(statearr_12100[(6)] = c__10634__auto___13279);

return statearr_12100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
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
var G__12102 = arguments.length;
switch (G__12102) {
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
var G__12104 = arguments.length;
switch (G__12104) {
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
var G__12106 = arguments.length;
switch (G__12106) {
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
var c__10634__auto___13341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_12149){
var state_val_12150 = (state_12149[(1)]);
if((state_val_12150 === (7))){
var state_12149__$1 = state_12149;
var statearr_12151_13342 = state_12149__$1;
(statearr_12151_13342[(2)] = null);

(statearr_12151_13342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (1))){
var state_12149__$1 = state_12149;
var statearr_12152_13344 = state_12149__$1;
(statearr_12152_13344[(2)] = null);

(statearr_12152_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (4))){
var inst_12110 = (state_12149[(7)]);
var inst_12109 = (state_12149[(8)]);
var inst_12112 = (inst_12110 < inst_12109);
var state_12149__$1 = state_12149;
if(cljs.core.truth_(inst_12112)){
var statearr_12153_13345 = state_12149__$1;
(statearr_12153_13345[(1)] = (6));

} else {
var statearr_12154_13346 = state_12149__$1;
(statearr_12154_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (15))){
var inst_12135 = (state_12149[(9)]);
var inst_12140 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12135);
var state_12149__$1 = state_12149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12149__$1,(17),out,inst_12140);
} else {
if((state_val_12150 === (13))){
var inst_12135 = (state_12149[(9)]);
var inst_12135__$1 = (state_12149[(2)]);
var inst_12136 = cljs.core.some(cljs.core.nil_QMARK_,inst_12135__$1);
var state_12149__$1 = (function (){var statearr_12155 = state_12149;
(statearr_12155[(9)] = inst_12135__$1);

return statearr_12155;
})();
if(cljs.core.truth_(inst_12136)){
var statearr_12156_13347 = state_12149__$1;
(statearr_12156_13347[(1)] = (14));

} else {
var statearr_12157_13348 = state_12149__$1;
(statearr_12157_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (6))){
var state_12149__$1 = state_12149;
var statearr_12158_13349 = state_12149__$1;
(statearr_12158_13349[(2)] = null);

(statearr_12158_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (17))){
var inst_12142 = (state_12149[(2)]);
var state_12149__$1 = (function (){var statearr_12160 = state_12149;
(statearr_12160[(10)] = inst_12142);

return statearr_12160;
})();
var statearr_12161_13350 = state_12149__$1;
(statearr_12161_13350[(2)] = null);

(statearr_12161_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (3))){
var inst_12147 = (state_12149[(2)]);
var state_12149__$1 = state_12149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12149__$1,inst_12147);
} else {
if((state_val_12150 === (12))){
var _ = (function (){var statearr_12162 = state_12149;
(statearr_12162[(4)] = cljs.core.rest((state_12149[(4)])));

return statearr_12162;
})();
var state_12149__$1 = state_12149;
var ex12159 = (state_12149__$1[(2)]);
var statearr_12163_13351 = state_12149__$1;
(statearr_12163_13351[(5)] = ex12159);


if((ex12159 instanceof Object)){
var statearr_12164_13352 = state_12149__$1;
(statearr_12164_13352[(1)] = (11));

(statearr_12164_13352[(5)] = null);

} else {
throw ex12159;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (2))){
var inst_12108 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12109 = cnt;
var inst_12110 = (0);
var state_12149__$1 = (function (){var statearr_12165 = state_12149;
(statearr_12165[(7)] = inst_12110);

(statearr_12165[(8)] = inst_12109);

(statearr_12165[(11)] = inst_12108);

return statearr_12165;
})();
var statearr_12166_13353 = state_12149__$1;
(statearr_12166_13353[(2)] = null);

(statearr_12166_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (11))){
var inst_12114 = (state_12149[(2)]);
var inst_12115 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12149__$1 = (function (){var statearr_12167 = state_12149;
(statearr_12167[(12)] = inst_12114);

return statearr_12167;
})();
var statearr_12168_13354 = state_12149__$1;
(statearr_12168_13354[(2)] = inst_12115);

(statearr_12168_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (9))){
var inst_12110 = (state_12149[(7)]);
var _ = (function (){var statearr_12169 = state_12149;
(statearr_12169[(4)] = cljs.core.cons((12),(state_12149[(4)])));

return statearr_12169;
})();
var inst_12121 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12110) : chs__$1.call(null,inst_12110));
var inst_12122 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12110) : done.call(null,inst_12110));
var inst_12123 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12121,inst_12122);
var ___$1 = (function (){var statearr_12171 = state_12149;
(statearr_12171[(4)] = cljs.core.rest((state_12149[(4)])));

return statearr_12171;
})();
var state_12149__$1 = state_12149;
var statearr_12173_13355 = state_12149__$1;
(statearr_12173_13355[(2)] = inst_12123);

(statearr_12173_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (5))){
var inst_12133 = (state_12149[(2)]);
var state_12149__$1 = (function (){var statearr_12175 = state_12149;
(statearr_12175[(13)] = inst_12133);

return statearr_12175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12149__$1,(13),dchan);
} else {
if((state_val_12150 === (14))){
var inst_12138 = cljs.core.async.close_BANG_(out);
var state_12149__$1 = state_12149;
var statearr_12176_13356 = state_12149__$1;
(statearr_12176_13356[(2)] = inst_12138);

(statearr_12176_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (16))){
var inst_12145 = (state_12149[(2)]);
var state_12149__$1 = state_12149;
var statearr_12177_13357 = state_12149__$1;
(statearr_12177_13357[(2)] = inst_12145);

(statearr_12177_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (10))){
var inst_12110 = (state_12149[(7)]);
var inst_12126 = (state_12149[(2)]);
var inst_12127 = (inst_12110 + (1));
var inst_12110__$1 = inst_12127;
var state_12149__$1 = (function (){var statearr_12178 = state_12149;
(statearr_12178[(7)] = inst_12110__$1);

(statearr_12178[(14)] = inst_12126);

return statearr_12178;
})();
var statearr_12179_13358 = state_12149__$1;
(statearr_12179_13358[(2)] = null);

(statearr_12179_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12150 === (8))){
var inst_12131 = (state_12149[(2)]);
var state_12149__$1 = state_12149;
var statearr_12180_13359 = state_12149__$1;
(statearr_12180_13359[(2)] = inst_12131);

(statearr_12180_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_12181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12181[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_12181[(1)] = (1));

return statearr_12181;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_12149){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_12149);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e12182){var ex__10553__auto__ = e12182;
var statearr_12183_13360 = state_12149;
(statearr_12183_13360[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_12149[(4)]))){
var statearr_12184_13361 = state_12149;
(statearr_12184_13361[(1)] = cljs.core.first((state_12149[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12149;
state_12149 = G__13362;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_12149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_12149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_12185 = f__10635__auto__();
(statearr_12185[(6)] = c__10634__auto___13341);

return statearr_12185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
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
var G__12188 = arguments.length;
switch (G__12188) {
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
var c__10634__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_12220){
var state_val_12221 = (state_12220[(1)]);
if((state_val_12221 === (7))){
var inst_12199 = (state_12220[(7)]);
var inst_12200 = (state_12220[(8)]);
var inst_12199__$1 = (state_12220[(2)]);
var inst_12200__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12199__$1,(0),null);
var inst_12201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12199__$1,(1),null);
var inst_12202 = (inst_12200__$1 == null);
var state_12220__$1 = (function (){var statearr_12222 = state_12220;
(statearr_12222[(7)] = inst_12199__$1);

(statearr_12222[(9)] = inst_12201);

(statearr_12222[(8)] = inst_12200__$1);

return statearr_12222;
})();
if(cljs.core.truth_(inst_12202)){
var statearr_12223_13365 = state_12220__$1;
(statearr_12223_13365[(1)] = (8));

} else {
var statearr_12224_13366 = state_12220__$1;
(statearr_12224_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (1))){
var inst_12189 = cljs.core.vec(chs);
var inst_12190 = inst_12189;
var state_12220__$1 = (function (){var statearr_12225 = state_12220;
(statearr_12225[(10)] = inst_12190);

return statearr_12225;
})();
var statearr_12226_13367 = state_12220__$1;
(statearr_12226_13367[(2)] = null);

(statearr_12226_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (4))){
var inst_12190 = (state_12220[(10)]);
var state_12220__$1 = state_12220;
return cljs.core.async.ioc_alts_BANG_(state_12220__$1,(7),inst_12190);
} else {
if((state_val_12221 === (6))){
var inst_12216 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
var statearr_12227_13368 = state_12220__$1;
(statearr_12227_13368[(2)] = inst_12216);

(statearr_12227_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (3))){
var inst_12218 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12220__$1,inst_12218);
} else {
if((state_val_12221 === (2))){
var inst_12190 = (state_12220[(10)]);
var inst_12192 = cljs.core.count(inst_12190);
var inst_12193 = (inst_12192 > (0));
var state_12220__$1 = state_12220;
if(cljs.core.truth_(inst_12193)){
var statearr_12229_13369 = state_12220__$1;
(statearr_12229_13369[(1)] = (4));

} else {
var statearr_12230_13370 = state_12220__$1;
(statearr_12230_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (11))){
var inst_12190 = (state_12220[(10)]);
var inst_12209 = (state_12220[(2)]);
var tmp12228 = inst_12190;
var inst_12190__$1 = tmp12228;
var state_12220__$1 = (function (){var statearr_12231 = state_12220;
(statearr_12231[(11)] = inst_12209);

(statearr_12231[(10)] = inst_12190__$1);

return statearr_12231;
})();
var statearr_12232_13371 = state_12220__$1;
(statearr_12232_13371[(2)] = null);

(statearr_12232_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (9))){
var inst_12200 = (state_12220[(8)]);
var state_12220__$1 = state_12220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12220__$1,(11),out,inst_12200);
} else {
if((state_val_12221 === (5))){
var inst_12214 = cljs.core.async.close_BANG_(out);
var state_12220__$1 = state_12220;
var statearr_12233_13372 = state_12220__$1;
(statearr_12233_13372[(2)] = inst_12214);

(statearr_12233_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (10))){
var inst_12212 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
var statearr_12234_13373 = state_12220__$1;
(statearr_12234_13373[(2)] = inst_12212);

(statearr_12234_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (8))){
var inst_12199 = (state_12220[(7)]);
var inst_12190 = (state_12220[(10)]);
var inst_12201 = (state_12220[(9)]);
var inst_12200 = (state_12220[(8)]);
var inst_12204 = (function (){var cs = inst_12190;
var vec__12195 = inst_12199;
var v = inst_12200;
var c = inst_12201;
return (function (p1__12186_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12186_SHARP_);
});
})();
var inst_12205 = cljs.core.filterv(inst_12204,inst_12190);
var inst_12190__$1 = inst_12205;
var state_12220__$1 = (function (){var statearr_12235 = state_12220;
(statearr_12235[(10)] = inst_12190__$1);

return statearr_12235;
})();
var statearr_12236_13374 = state_12220__$1;
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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_12237 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12237[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_12237[(1)] = (1));

return statearr_12237;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_12220){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_12220);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e12238){var ex__10553__auto__ = e12238;
var statearr_12239_13375 = state_12220;
(statearr_12239_13375[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_12220[(4)]))){
var statearr_12240_13376 = state_12220;
(statearr_12240_13376[(1)] = cljs.core.first((state_12220[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12220;
state_12220 = G__13377;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_12220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_12220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_12241 = f__10635__auto__();
(statearr_12241[(6)] = c__10634__auto___13364);

return statearr_12241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
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
var G__12244 = arguments.length;
switch (G__12244) {
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
var c__10634__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_12268){
var state_val_12269 = (state_12268[(1)]);
if((state_val_12269 === (7))){
var inst_12250 = (state_12268[(7)]);
var inst_12250__$1 = (state_12268[(2)]);
var inst_12251 = (inst_12250__$1 == null);
var inst_12252 = cljs.core.not(inst_12251);
var state_12268__$1 = (function (){var statearr_12272 = state_12268;
(statearr_12272[(7)] = inst_12250__$1);

return statearr_12272;
})();
if(inst_12252){
var statearr_12273_13380 = state_12268__$1;
(statearr_12273_13380[(1)] = (8));

} else {
var statearr_12274_13381 = state_12268__$1;
(statearr_12274_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (1))){
var inst_12245 = (0);
var state_12268__$1 = (function (){var statearr_12276 = state_12268;
(statearr_12276[(8)] = inst_12245);

return statearr_12276;
})();
var statearr_12277_13382 = state_12268__$1;
(statearr_12277_13382[(2)] = null);

(statearr_12277_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (4))){
var state_12268__$1 = state_12268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12268__$1,(7),ch);
} else {
if((state_val_12269 === (6))){
var inst_12263 = (state_12268[(2)]);
var state_12268__$1 = state_12268;
var statearr_12278_13383 = state_12268__$1;
(statearr_12278_13383[(2)] = inst_12263);

(statearr_12278_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (3))){
var inst_12265 = (state_12268[(2)]);
var inst_12266 = cljs.core.async.close_BANG_(out);
var state_12268__$1 = (function (){var statearr_12279 = state_12268;
(statearr_12279[(9)] = inst_12265);

return statearr_12279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12268__$1,inst_12266);
} else {
if((state_val_12269 === (2))){
var inst_12245 = (state_12268[(8)]);
var inst_12247 = (inst_12245 < n);
var state_12268__$1 = state_12268;
if(cljs.core.truth_(inst_12247)){
var statearr_12280_13384 = state_12268__$1;
(statearr_12280_13384[(1)] = (4));

} else {
var statearr_12281_13385 = state_12268__$1;
(statearr_12281_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (11))){
var inst_12245 = (state_12268[(8)]);
var inst_12255 = (state_12268[(2)]);
var inst_12256 = (inst_12245 + (1));
var inst_12245__$1 = inst_12256;
var state_12268__$1 = (function (){var statearr_12282 = state_12268;
(statearr_12282[(10)] = inst_12255);

(statearr_12282[(8)] = inst_12245__$1);

return statearr_12282;
})();
var statearr_12283_13386 = state_12268__$1;
(statearr_12283_13386[(2)] = null);

(statearr_12283_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (9))){
var state_12268__$1 = state_12268;
var statearr_12284_13387 = state_12268__$1;
(statearr_12284_13387[(2)] = null);

(statearr_12284_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (5))){
var state_12268__$1 = state_12268;
var statearr_12285_13388 = state_12268__$1;
(statearr_12285_13388[(2)] = null);

(statearr_12285_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (10))){
var inst_12260 = (state_12268[(2)]);
var state_12268__$1 = state_12268;
var statearr_12286_13389 = state_12268__$1;
(statearr_12286_13389[(2)] = inst_12260);

(statearr_12286_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (8))){
var inst_12250 = (state_12268[(7)]);
var state_12268__$1 = state_12268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12268__$1,(11),out,inst_12250);
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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_12287 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12287[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_12287[(1)] = (1));

return statearr_12287;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_12268){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_12268);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e12288){var ex__10553__auto__ = e12288;
var statearr_12289_13390 = state_12268;
(statearr_12289_13390[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_12268[(4)]))){
var statearr_12290_13391 = state_12268;
(statearr_12290_13391[(1)] = cljs.core.first((state_12268[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12268;
state_12268 = G__13392;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_12268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_12268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_12291 = f__10635__auto__();
(statearr_12291[(6)] = c__10634__auto___13379);

return statearr_12291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
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

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12297 = (function (f,ch,meta12295,_,fn1,meta12298){
this.f = f;
this.ch = ch;
this.meta12295 = meta12295;
this._ = _;
this.fn1 = fn1;
this.meta12298 = meta12298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12299,meta12298__$1){
var self__ = this;
var _12299__$1 = this;
return (new cljs.core.async.t_cljs$core$async12297(self__.f,self__.ch,self__.meta12295,self__._,self__.fn1,meta12298__$1));
}));

(cljs.core.async.t_cljs$core$async12297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12299){
var self__ = this;
var _12299__$1 = this;
return self__.meta12298;
}));

(cljs.core.async.t_cljs$core$async12297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12292_SHARP_){
var G__12300 = (((p1__12292_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12292_SHARP_) : self__.f.call(null,p1__12292_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12300) : f1.call(null,G__12300));
});
}));

(cljs.core.async.t_cljs$core$async12297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12295","meta12295",-2051828338,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12294","cljs.core.async/t_cljs$core$async12294",-479729179,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12298","meta12298",1865107701,null)], null);
}));

(cljs.core.async.t_cljs$core$async12297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12297");

(cljs.core.async.t_cljs$core$async12297.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12297.
 */
cljs.core.async.__GT_t_cljs$core$async12297 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12297(f__$1,ch__$1,meta12295__$1,___$2,fn1__$1,meta12298){
return (new cljs.core.async.t_cljs$core$async12297(f__$1,ch__$1,meta12295__$1,___$2,fn1__$1,meta12298));
});

}

return (new cljs.core.async.t_cljs$core$async12297(self__.f,self__.ch,self__.meta12295,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12318 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12318) : self__.f.call(null,G__12318));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
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
cljs.core.async.__GT_t_cljs$core$async12294 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12294(f__$1,ch__$1,meta12295){
return (new cljs.core.async.t_cljs$core$async12294(f__$1,ch__$1,meta12295));
});

}

return (new cljs.core.async.t_cljs$core$async12294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12327 = (function (f,ch,meta12328){
this.f = f;
this.ch = ch;
this.meta12328 = meta12328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12329,meta12328__$1){
var self__ = this;
var _12329__$1 = this;
return (new cljs.core.async.t_cljs$core$async12327(self__.f,self__.ch,meta12328__$1));
}));

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12329){
var self__ = this;
var _12329__$1 = this;
return self__.meta12328;
}));

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12328","meta12328",-504427880,null)], null);
}));

(cljs.core.async.t_cljs$core$async12327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12327");

(cljs.core.async.t_cljs$core$async12327.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12327.
 */
cljs.core.async.__GT_t_cljs$core$async12327 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12327(f__$1,ch__$1,meta12328){
return (new cljs.core.async.t_cljs$core$async12327(f__$1,ch__$1,meta12328));
});

}

return (new cljs.core.async.t_cljs$core$async12327(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12338 = (function (p,ch,meta12339){
this.p = p;
this.ch = ch;
this.meta12339 = meta12339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12340,meta12339__$1){
var self__ = this;
var _12340__$1 = this;
return (new cljs.core.async.t_cljs$core$async12338(self__.p,self__.ch,meta12339__$1));
}));

(cljs.core.async.t_cljs$core$async12338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12340){
var self__ = this;
var _12340__$1 = this;
return self__.meta12339;
}));

(cljs.core.async.t_cljs$core$async12338.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12338.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12338.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12338.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12339","meta12339",-263139351,null)], null);
}));

(cljs.core.async.t_cljs$core$async12338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12338");

(cljs.core.async.t_cljs$core$async12338.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12338.
 */
cljs.core.async.__GT_t_cljs$core$async12338 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12338(p__$1,ch__$1,meta12339){
return (new cljs.core.async.t_cljs$core$async12338(p__$1,ch__$1,meta12339));
});

}

return (new cljs.core.async.t_cljs$core$async12338(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12345 = arguments.length;
switch (G__12345) {
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
var c__10634__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_12366){
var state_val_12367 = (state_12366[(1)]);
if((state_val_12367 === (7))){
var inst_12362 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
var statearr_12369_13395 = state_12366__$1;
(statearr_12369_13395[(2)] = inst_12362);

(statearr_12369_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (1))){
var state_12366__$1 = state_12366;
var statearr_12372_13396 = state_12366__$1;
(statearr_12372_13396[(2)] = null);

(statearr_12372_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (4))){
var inst_12348 = (state_12366[(7)]);
var inst_12348__$1 = (state_12366[(2)]);
var inst_12349 = (inst_12348__$1 == null);
var state_12366__$1 = (function (){var statearr_12374 = state_12366;
(statearr_12374[(7)] = inst_12348__$1);

return statearr_12374;
})();
if(cljs.core.truth_(inst_12349)){
var statearr_12375_13397 = state_12366__$1;
(statearr_12375_13397[(1)] = (5));

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
var statearr_12379_13399 = state_12366__$1;
(statearr_12379_13399[(1)] = (8));

} else {
var statearr_12380_13400 = state_12366__$1;
(statearr_12380_13400[(1)] = (9));

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
var statearr_12384_13401 = state_12366__$1;
(statearr_12384_13401[(2)] = inst_12356);

(statearr_12384_13401[(1)] = (10));


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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_12391 = [null,null,null,null,null,null,null,null,null];
(statearr_12391[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_12391[(1)] = (1));

return statearr_12391;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_12366){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_12366);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e12392){var ex__10553__auto__ = e12392;
var statearr_12393_13405 = state_12366;
(statearr_12393_13405[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_12366[(4)]))){
var statearr_12394_13406 = state_12366;
(statearr_12394_13406[(1)] = cljs.core.first((state_12366[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12366;
state_12366 = G__13407;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_12366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_12366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_12395 = f__10635__auto__();
(statearr_12395[(6)] = c__10634__auto___13394);

return statearr_12395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12397 = arguments.length;
switch (G__12397) {
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
var c__10634__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_12459){
var state_val_12460 = (state_12459[(1)]);
if((state_val_12460 === (7))){
var inst_12455 = (state_12459[(2)]);
var state_12459__$1 = state_12459;
var statearr_12461_13409 = state_12459__$1;
(statearr_12461_13409[(2)] = inst_12455);

(statearr_12461_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (20))){
var inst_12425 = (state_12459[(7)]);
var inst_12436 = (state_12459[(2)]);
var inst_12437 = cljs.core.next(inst_12425);
var inst_12411 = inst_12437;
var inst_12412 = null;
var inst_12413 = (0);
var inst_12414 = (0);
var state_12459__$1 = (function (){var statearr_12462 = state_12459;
(statearr_12462[(8)] = inst_12412);

(statearr_12462[(9)] = inst_12436);

(statearr_12462[(10)] = inst_12413);

(statearr_12462[(11)] = inst_12411);

(statearr_12462[(12)] = inst_12414);

return statearr_12462;
})();
var statearr_12463_13410 = state_12459__$1;
(statearr_12463_13410[(2)] = null);

(statearr_12463_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (1))){
var state_12459__$1 = state_12459;
var statearr_12464_13411 = state_12459__$1;
(statearr_12464_13411[(2)] = null);

(statearr_12464_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (4))){
var inst_12400 = (state_12459[(13)]);
var inst_12400__$1 = (state_12459[(2)]);
var inst_12401 = (inst_12400__$1 == null);
var state_12459__$1 = (function (){var statearr_12466 = state_12459;
(statearr_12466[(13)] = inst_12400__$1);

return statearr_12466;
})();
if(cljs.core.truth_(inst_12401)){
var statearr_12467_13412 = state_12459__$1;
(statearr_12467_13412[(1)] = (5));

} else {
var statearr_12469_13413 = state_12459__$1;
(statearr_12469_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (15))){
var state_12459__$1 = state_12459;
var statearr_12473_13414 = state_12459__$1;
(statearr_12473_13414[(2)] = null);

(statearr_12473_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (21))){
var state_12459__$1 = state_12459;
var statearr_12474_13415 = state_12459__$1;
(statearr_12474_13415[(2)] = null);

(statearr_12474_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (13))){
var inst_12412 = (state_12459[(8)]);
var inst_12413 = (state_12459[(10)]);
var inst_12411 = (state_12459[(11)]);
var inst_12414 = (state_12459[(12)]);
var inst_12421 = (state_12459[(2)]);
var inst_12422 = (inst_12414 + (1));
var tmp12470 = inst_12412;
var tmp12471 = inst_12413;
var tmp12472 = inst_12411;
var inst_12411__$1 = tmp12472;
var inst_12412__$1 = tmp12470;
var inst_12413__$1 = tmp12471;
var inst_12414__$1 = inst_12422;
var state_12459__$1 = (function (){var statearr_12475 = state_12459;
(statearr_12475[(14)] = inst_12421);

(statearr_12475[(8)] = inst_12412__$1);

(statearr_12475[(10)] = inst_12413__$1);

(statearr_12475[(11)] = inst_12411__$1);

(statearr_12475[(12)] = inst_12414__$1);

return statearr_12475;
})();
var statearr_12476_13416 = state_12459__$1;
(statearr_12476_13416[(2)] = null);

(statearr_12476_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (22))){
var state_12459__$1 = state_12459;
var statearr_12477_13417 = state_12459__$1;
(statearr_12477_13417[(2)] = null);

(statearr_12477_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (6))){
var inst_12400 = (state_12459[(13)]);
var inst_12409 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12400) : f.call(null,inst_12400));
var inst_12410 = cljs.core.seq(inst_12409);
var inst_12411 = inst_12410;
var inst_12412 = null;
var inst_12413 = (0);
var inst_12414 = (0);
var state_12459__$1 = (function (){var statearr_12478 = state_12459;
(statearr_12478[(8)] = inst_12412);

(statearr_12478[(10)] = inst_12413);

(statearr_12478[(11)] = inst_12411);

(statearr_12478[(12)] = inst_12414);

return statearr_12478;
})();
var statearr_12479_13418 = state_12459__$1;
(statearr_12479_13418[(2)] = null);

(statearr_12479_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (17))){
var inst_12425 = (state_12459[(7)]);
var inst_12429 = cljs.core.chunk_first(inst_12425);
var inst_12430 = cljs.core.chunk_rest(inst_12425);
var inst_12431 = cljs.core.count(inst_12429);
var inst_12411 = inst_12430;
var inst_12412 = inst_12429;
var inst_12413 = inst_12431;
var inst_12414 = (0);
var state_12459__$1 = (function (){var statearr_12480 = state_12459;
(statearr_12480[(8)] = inst_12412);

(statearr_12480[(10)] = inst_12413);

(statearr_12480[(11)] = inst_12411);

(statearr_12480[(12)] = inst_12414);

return statearr_12480;
})();
var statearr_12481_13419 = state_12459__$1;
(statearr_12481_13419[(2)] = null);

(statearr_12481_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (3))){
var inst_12457 = (state_12459[(2)]);
var state_12459__$1 = state_12459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12459__$1,inst_12457);
} else {
if((state_val_12460 === (12))){
var inst_12445 = (state_12459[(2)]);
var state_12459__$1 = state_12459;
var statearr_12482_13420 = state_12459__$1;
(statearr_12482_13420[(2)] = inst_12445);

(statearr_12482_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (2))){
var state_12459__$1 = state_12459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12459__$1,(4),in$);
} else {
if((state_val_12460 === (23))){
var inst_12453 = (state_12459[(2)]);
var state_12459__$1 = state_12459;
var statearr_12483_13421 = state_12459__$1;
(statearr_12483_13421[(2)] = inst_12453);

(statearr_12483_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (19))){
var inst_12440 = (state_12459[(2)]);
var state_12459__$1 = state_12459;
var statearr_12484_13422 = state_12459__$1;
(statearr_12484_13422[(2)] = inst_12440);

(statearr_12484_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (11))){
var inst_12425 = (state_12459[(7)]);
var inst_12411 = (state_12459[(11)]);
var inst_12425__$1 = cljs.core.seq(inst_12411);
var state_12459__$1 = (function (){var statearr_12486 = state_12459;
(statearr_12486[(7)] = inst_12425__$1);

return statearr_12486;
})();
if(inst_12425__$1){
var statearr_12487_13423 = state_12459__$1;
(statearr_12487_13423[(1)] = (14));

} else {
var statearr_12489_13424 = state_12459__$1;
(statearr_12489_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (9))){
var inst_12447 = (state_12459[(2)]);
var inst_12448 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12459__$1 = (function (){var statearr_12490 = state_12459;
(statearr_12490[(15)] = inst_12447);

return statearr_12490;
})();
if(cljs.core.truth_(inst_12448)){
var statearr_12491_13425 = state_12459__$1;
(statearr_12491_13425[(1)] = (21));

} else {
var statearr_12492_13426 = state_12459__$1;
(statearr_12492_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (5))){
var inst_12403 = cljs.core.async.close_BANG_(out);
var state_12459__$1 = state_12459;
var statearr_12493_13427 = state_12459__$1;
(statearr_12493_13427[(2)] = inst_12403);

(statearr_12493_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (14))){
var inst_12425 = (state_12459[(7)]);
var inst_12427 = cljs.core.chunked_seq_QMARK_(inst_12425);
var state_12459__$1 = state_12459;
if(inst_12427){
var statearr_12494_13428 = state_12459__$1;
(statearr_12494_13428[(1)] = (17));

} else {
var statearr_12495_13429 = state_12459__$1;
(statearr_12495_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (16))){
var inst_12443 = (state_12459[(2)]);
var state_12459__$1 = state_12459;
var statearr_12504_13430 = state_12459__$1;
(statearr_12504_13430[(2)] = inst_12443);

(statearr_12504_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12460 === (10))){
var inst_12412 = (state_12459[(8)]);
var inst_12414 = (state_12459[(12)]);
var inst_12419 = cljs.core._nth(inst_12412,inst_12414);
var state_12459__$1 = state_12459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12459__$1,(13),out,inst_12419);
} else {
if((state_val_12460 === (18))){
var inst_12425 = (state_12459[(7)]);
var inst_12434 = cljs.core.first(inst_12425);
var state_12459__$1 = state_12459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12459__$1,(20),out,inst_12434);
} else {
if((state_val_12460 === (8))){
var inst_12413 = (state_12459[(10)]);
var inst_12414 = (state_12459[(12)]);
var inst_12416 = (inst_12414 < inst_12413);
var inst_12417 = inst_12416;
var state_12459__$1 = state_12459;
if(cljs.core.truth_(inst_12417)){
var statearr_12505_13431 = state_12459__$1;
(statearr_12505_13431[(1)] = (10));

} else {
var statearr_12506_13432 = state_12459__$1;
(statearr_12506_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10550__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10550__auto____0 = (function (){
var statearr_12507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12507[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10550__auto__);

(statearr_12507[(1)] = (1));

return statearr_12507;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10550__auto____1 = (function (state_12459){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_12459);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e12508){var ex__10553__auto__ = e12508;
var statearr_12509_13433 = state_12459;
(statearr_12509_13433[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_12459[(4)]))){
var statearr_12510_13434 = state_12459;
(statearr_12510_13434[(1)] = cljs.core.first((state_12459[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12459;
state_12459 = G__13435;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10550__auto__ = function(state_12459){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10550__auto____1.call(this,state_12459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10550__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10550__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_12515 = f__10635__auto__();
(statearr_12515[(6)] = c__10634__auto__);

return statearr_12515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));

return c__10634__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12525 = arguments.length;
switch (G__12525) {
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
var G__12527 = arguments.length;
switch (G__12527) {
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
var G__12541 = arguments.length;
switch (G__12541) {
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
var c__10634__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_12573){
var state_val_12574 = (state_12573[(1)]);
if((state_val_12574 === (7))){
var inst_12568 = (state_12573[(2)]);
var state_12573__$1 = state_12573;
var statearr_12579_13440 = state_12573__$1;
(statearr_12579_13440[(2)] = inst_12568);

(statearr_12579_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (1))){
var inst_12546 = null;
var state_12573__$1 = (function (){var statearr_12580 = state_12573;
(statearr_12580[(7)] = inst_12546);

return statearr_12580;
})();
var statearr_12581_13441 = state_12573__$1;
(statearr_12581_13441[(2)] = null);

(statearr_12581_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (4))){
var inst_12549 = (state_12573[(8)]);
var inst_12549__$1 = (state_12573[(2)]);
var inst_12554 = (inst_12549__$1 == null);
var inst_12555 = cljs.core.not(inst_12554);
var state_12573__$1 = (function (){var statearr_12582 = state_12573;
(statearr_12582[(8)] = inst_12549__$1);

return statearr_12582;
})();
if(inst_12555){
var statearr_12583_13442 = state_12573__$1;
(statearr_12583_13442[(1)] = (5));

} else {
var statearr_12584_13443 = state_12573__$1;
(statearr_12584_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (6))){
var state_12573__$1 = state_12573;
var statearr_12585_13444 = state_12573__$1;
(statearr_12585_13444[(2)] = null);

(statearr_12585_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (3))){
var inst_12570 = (state_12573[(2)]);
var inst_12571 = cljs.core.async.close_BANG_(out);
var state_12573__$1 = (function (){var statearr_12586 = state_12573;
(statearr_12586[(9)] = inst_12570);

return statearr_12586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12573__$1,inst_12571);
} else {
if((state_val_12574 === (2))){
var state_12573__$1 = state_12573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12573__$1,(4),ch);
} else {
if((state_val_12574 === (11))){
var inst_12549 = (state_12573[(8)]);
var inst_12562 = (state_12573[(2)]);
var inst_12546 = inst_12549;
var state_12573__$1 = (function (){var statearr_12587 = state_12573;
(statearr_12587[(7)] = inst_12546);

(statearr_12587[(10)] = inst_12562);

return statearr_12587;
})();
var statearr_12589_13445 = state_12573__$1;
(statearr_12589_13445[(2)] = null);

(statearr_12589_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (9))){
var inst_12549 = (state_12573[(8)]);
var state_12573__$1 = state_12573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12573__$1,(11),out,inst_12549);
} else {
if((state_val_12574 === (5))){
var inst_12546 = (state_12573[(7)]);
var inst_12549 = (state_12573[(8)]);
var inst_12557 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12549,inst_12546);
var state_12573__$1 = state_12573;
if(inst_12557){
var statearr_12591_13446 = state_12573__$1;
(statearr_12591_13446[(1)] = (8));

} else {
var statearr_12592_13447 = state_12573__$1;
(statearr_12592_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (10))){
var inst_12565 = (state_12573[(2)]);
var state_12573__$1 = state_12573;
var statearr_12593_13448 = state_12573__$1;
(statearr_12593_13448[(2)] = inst_12565);

(statearr_12593_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (8))){
var inst_12546 = (state_12573[(7)]);
var tmp12590 = inst_12546;
var inst_12546__$1 = tmp12590;
var state_12573__$1 = (function (){var statearr_12594 = state_12573;
(statearr_12594[(7)] = inst_12546__$1);

return statearr_12594;
})();
var statearr_12595_13449 = state_12573__$1;
(statearr_12595_13449[(2)] = null);

(statearr_12595_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_12596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12596[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_12596[(1)] = (1));

return statearr_12596;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_12573){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_12573);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e12597){var ex__10553__auto__ = e12597;
var statearr_12598_13450 = state_12573;
(statearr_12598_13450[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_12573[(4)]))){
var statearr_12599_13451 = state_12573;
(statearr_12599_13451[(1)] = cljs.core.first((state_12573[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12573;
state_12573 = G__13452;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_12573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_12573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_12600 = f__10635__auto__();
(statearr_12600[(6)] = c__10634__auto___13439);

return statearr_12600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12602 = arguments.length;
switch (G__12602) {
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
var c__10634__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_12640){
var state_val_12641 = (state_12640[(1)]);
if((state_val_12641 === (7))){
var inst_12636 = (state_12640[(2)]);
var state_12640__$1 = state_12640;
var statearr_12642_13455 = state_12640__$1;
(statearr_12642_13455[(2)] = inst_12636);

(statearr_12642_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (1))){
var inst_12603 = (new Array(n));
var inst_12604 = inst_12603;
var inst_12605 = (0);
var state_12640__$1 = (function (){var statearr_12643 = state_12640;
(statearr_12643[(7)] = inst_12605);

(statearr_12643[(8)] = inst_12604);

return statearr_12643;
})();
var statearr_12644_13456 = state_12640__$1;
(statearr_12644_13456[(2)] = null);

(statearr_12644_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (4))){
var inst_12608 = (state_12640[(9)]);
var inst_12608__$1 = (state_12640[(2)]);
var inst_12609 = (inst_12608__$1 == null);
var inst_12610 = cljs.core.not(inst_12609);
var state_12640__$1 = (function (){var statearr_12647 = state_12640;
(statearr_12647[(9)] = inst_12608__$1);

return statearr_12647;
})();
if(inst_12610){
var statearr_12648_13457 = state_12640__$1;
(statearr_12648_13457[(1)] = (5));

} else {
var statearr_12649_13458 = state_12640__$1;
(statearr_12649_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (15))){
var inst_12630 = (state_12640[(2)]);
var state_12640__$1 = state_12640;
var statearr_12652_13459 = state_12640__$1;
(statearr_12652_13459[(2)] = inst_12630);

(statearr_12652_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (13))){
var state_12640__$1 = state_12640;
var statearr_12654_13460 = state_12640__$1;
(statearr_12654_13460[(2)] = null);

(statearr_12654_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (6))){
var inst_12605 = (state_12640[(7)]);
var inst_12626 = (inst_12605 > (0));
var state_12640__$1 = state_12640;
if(cljs.core.truth_(inst_12626)){
var statearr_12658_13461 = state_12640__$1;
(statearr_12658_13461[(1)] = (12));

} else {
var statearr_12659_13462 = state_12640__$1;
(statearr_12659_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (3))){
var inst_12638 = (state_12640[(2)]);
var state_12640__$1 = state_12640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12640__$1,inst_12638);
} else {
if((state_val_12641 === (12))){
var inst_12604 = (state_12640[(8)]);
var inst_12628 = cljs.core.vec(inst_12604);
var state_12640__$1 = state_12640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12640__$1,(15),out,inst_12628);
} else {
if((state_val_12641 === (2))){
var state_12640__$1 = state_12640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12640__$1,(4),ch);
} else {
if((state_val_12641 === (11))){
var inst_12620 = (state_12640[(2)]);
var inst_12621 = (new Array(n));
var inst_12604 = inst_12621;
var inst_12605 = (0);
var state_12640__$1 = (function (){var statearr_12663 = state_12640;
(statearr_12663[(7)] = inst_12605);

(statearr_12663[(10)] = inst_12620);

(statearr_12663[(8)] = inst_12604);

return statearr_12663;
})();
var statearr_12664_13463 = state_12640__$1;
(statearr_12664_13463[(2)] = null);

(statearr_12664_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (9))){
var inst_12604 = (state_12640[(8)]);
var inst_12618 = cljs.core.vec(inst_12604);
var state_12640__$1 = state_12640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12640__$1,(11),out,inst_12618);
} else {
if((state_val_12641 === (5))){
var inst_12613 = (state_12640[(11)]);
var inst_12608 = (state_12640[(9)]);
var inst_12605 = (state_12640[(7)]);
var inst_12604 = (state_12640[(8)]);
var inst_12612 = (inst_12604[inst_12605] = inst_12608);
var inst_12613__$1 = (inst_12605 + (1));
var inst_12614 = (inst_12613__$1 < n);
var state_12640__$1 = (function (){var statearr_12668 = state_12640;
(statearr_12668[(11)] = inst_12613__$1);

(statearr_12668[(12)] = inst_12612);

return statearr_12668;
})();
if(cljs.core.truth_(inst_12614)){
var statearr_12669_13464 = state_12640__$1;
(statearr_12669_13464[(1)] = (8));

} else {
var statearr_12670_13465 = state_12640__$1;
(statearr_12670_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (14))){
var inst_12633 = (state_12640[(2)]);
var inst_12634 = cljs.core.async.close_BANG_(out);
var state_12640__$1 = (function (){var statearr_12672 = state_12640;
(statearr_12672[(13)] = inst_12633);

return statearr_12672;
})();
var statearr_12673_13466 = state_12640__$1;
(statearr_12673_13466[(2)] = inst_12634);

(statearr_12673_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (10))){
var inst_12624 = (state_12640[(2)]);
var state_12640__$1 = state_12640;
var statearr_12674_13467 = state_12640__$1;
(statearr_12674_13467[(2)] = inst_12624);

(statearr_12674_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (8))){
var inst_12613 = (state_12640[(11)]);
var inst_12604 = (state_12640[(8)]);
var tmp12671 = inst_12604;
var inst_12604__$1 = tmp12671;
var inst_12605 = inst_12613;
var state_12640__$1 = (function (){var statearr_12675 = state_12640;
(statearr_12675[(7)] = inst_12605);

(statearr_12675[(8)] = inst_12604__$1);

return statearr_12675;
})();
var statearr_12676_13468 = state_12640__$1;
(statearr_12676_13468[(2)] = null);

(statearr_12676_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_12677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12677[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_12677[(1)] = (1));

return statearr_12677;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_12640){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_12640);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e12678){var ex__10553__auto__ = e12678;
var statearr_12679_13469 = state_12640;
(statearr_12679_13469[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_12640[(4)]))){
var statearr_12680_13470 = state_12640;
(statearr_12680_13470[(1)] = cljs.core.first((state_12640[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12640;
state_12640 = G__13471;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_12640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_12640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_12681 = f__10635__auto__();
(statearr_12681[(6)] = c__10634__auto___13454);

return statearr_12681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12683 = arguments.length;
switch (G__12683) {
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
var c__10634__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10635__auto__ = (function (){var switch__10549__auto__ = (function (state_12725){
var state_val_12726 = (state_12725[(1)]);
if((state_val_12726 === (7))){
var inst_12721 = (state_12725[(2)]);
var state_12725__$1 = state_12725;
var statearr_12727_13474 = state_12725__$1;
(statearr_12727_13474[(2)] = inst_12721);

(statearr_12727_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (1))){
var inst_12684 = [];
var inst_12685 = inst_12684;
var inst_12686 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12725__$1 = (function (){var statearr_12728 = state_12725;
(statearr_12728[(7)] = inst_12685);

(statearr_12728[(8)] = inst_12686);

return statearr_12728;
})();
var statearr_12729_13475 = state_12725__$1;
(statearr_12729_13475[(2)] = null);

(statearr_12729_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (4))){
var inst_12689 = (state_12725[(9)]);
var inst_12689__$1 = (state_12725[(2)]);
var inst_12690 = (inst_12689__$1 == null);
var inst_12691 = cljs.core.not(inst_12690);
var state_12725__$1 = (function (){var statearr_12730 = state_12725;
(statearr_12730[(9)] = inst_12689__$1);

return statearr_12730;
})();
if(inst_12691){
var statearr_12731_13476 = state_12725__$1;
(statearr_12731_13476[(1)] = (5));

} else {
var statearr_12732_13477 = state_12725__$1;
(statearr_12732_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (15))){
var inst_12715 = (state_12725[(2)]);
var state_12725__$1 = state_12725;
var statearr_12733_13478 = state_12725__$1;
(statearr_12733_13478[(2)] = inst_12715);

(statearr_12733_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (13))){
var state_12725__$1 = state_12725;
var statearr_12734_13479 = state_12725__$1;
(statearr_12734_13479[(2)] = null);

(statearr_12734_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (6))){
var inst_12685 = (state_12725[(7)]);
var inst_12710 = inst_12685.length;
var inst_12711 = (inst_12710 > (0));
var state_12725__$1 = state_12725;
if(cljs.core.truth_(inst_12711)){
var statearr_12735_13480 = state_12725__$1;
(statearr_12735_13480[(1)] = (12));

} else {
var statearr_12737_13481 = state_12725__$1;
(statearr_12737_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (3))){
var inst_12723 = (state_12725[(2)]);
var state_12725__$1 = state_12725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12725__$1,inst_12723);
} else {
if((state_val_12726 === (12))){
var inst_12685 = (state_12725[(7)]);
var inst_12713 = cljs.core.vec(inst_12685);
var state_12725__$1 = state_12725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12725__$1,(15),out,inst_12713);
} else {
if((state_val_12726 === (2))){
var state_12725__$1 = state_12725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12725__$1,(4),ch);
} else {
if((state_val_12726 === (11))){
var inst_12689 = (state_12725[(9)]);
var inst_12693 = (state_12725[(10)]);
var inst_12703 = (state_12725[(2)]);
var inst_12704 = [];
var inst_12705 = inst_12704.push(inst_12689);
var inst_12685 = inst_12704;
var inst_12686 = inst_12693;
var state_12725__$1 = (function (){var statearr_12738 = state_12725;
(statearr_12738[(11)] = inst_12705);

(statearr_12738[(7)] = inst_12685);

(statearr_12738[(12)] = inst_12703);

(statearr_12738[(8)] = inst_12686);

return statearr_12738;
})();
var statearr_12739_13482 = state_12725__$1;
(statearr_12739_13482[(2)] = null);

(statearr_12739_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (9))){
var inst_12685 = (state_12725[(7)]);
var inst_12701 = cljs.core.vec(inst_12685);
var state_12725__$1 = state_12725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12725__$1,(11),out,inst_12701);
} else {
if((state_val_12726 === (5))){
var inst_12689 = (state_12725[(9)]);
var inst_12693 = (state_12725[(10)]);
var inst_12686 = (state_12725[(8)]);
var inst_12693__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12689) : f.call(null,inst_12689));
var inst_12694 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12693__$1,inst_12686);
var inst_12695 = cljs.core.keyword_identical_QMARK_(inst_12686,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12696 = ((inst_12694) || (inst_12695));
var state_12725__$1 = (function (){var statearr_12742 = state_12725;
(statearr_12742[(10)] = inst_12693__$1);

return statearr_12742;
})();
if(cljs.core.truth_(inst_12696)){
var statearr_12743_13483 = state_12725__$1;
(statearr_12743_13483[(1)] = (8));

} else {
var statearr_12744_13484 = state_12725__$1;
(statearr_12744_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (14))){
var inst_12718 = (state_12725[(2)]);
var inst_12719 = cljs.core.async.close_BANG_(out);
var state_12725__$1 = (function (){var statearr_12746 = state_12725;
(statearr_12746[(13)] = inst_12718);

return statearr_12746;
})();
var statearr_12747_13485 = state_12725__$1;
(statearr_12747_13485[(2)] = inst_12719);

(statearr_12747_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (10))){
var inst_12708 = (state_12725[(2)]);
var state_12725__$1 = state_12725;
var statearr_12748_13486 = state_12725__$1;
(statearr_12748_13486[(2)] = inst_12708);

(statearr_12748_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12726 === (8))){
var inst_12689 = (state_12725[(9)]);
var inst_12693 = (state_12725[(10)]);
var inst_12685 = (state_12725[(7)]);
var inst_12698 = inst_12685.push(inst_12689);
var tmp12745 = inst_12685;
var inst_12685__$1 = tmp12745;
var inst_12686 = inst_12693;
var state_12725__$1 = (function (){var statearr_12751 = state_12725;
(statearr_12751[(7)] = inst_12685__$1);

(statearr_12751[(14)] = inst_12698);

(statearr_12751[(8)] = inst_12686);

return statearr_12751;
})();
var statearr_12754_13487 = state_12725__$1;
(statearr_12754_13487[(2)] = null);

(statearr_12754_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10550__auto__ = null;
var cljs$core$async$state_machine__10550__auto____0 = (function (){
var statearr_12755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12755[(0)] = cljs$core$async$state_machine__10550__auto__);

(statearr_12755[(1)] = (1));

return statearr_12755;
});
var cljs$core$async$state_machine__10550__auto____1 = (function (state_12725){
while(true){
var ret_value__10551__auto__ = (function (){try{while(true){
var result__10552__auto__ = switch__10549__auto__(state_12725);
if(cljs.core.keyword_identical_QMARK_(result__10552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10552__auto__;
}
break;
}
}catch (e12756){var ex__10553__auto__ = e12756;
var statearr_12757_13488 = state_12725;
(statearr_12757_13488[(2)] = ex__10553__auto__);


if(cljs.core.seq((state_12725[(4)]))){
var statearr_12761_13489 = state_12725;
(statearr_12761_13489[(1)] = cljs.core.first((state_12725[(4)])));

} else {
throw ex__10553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12725;
state_12725 = G__13490;
continue;
} else {
return ret_value__10551__auto__;
}
break;
}
});
cljs$core$async$state_machine__10550__auto__ = function(state_12725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10550__auto____1.call(this,state_12725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10550__auto____0;
cljs$core$async$state_machine__10550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10550__auto____1;
return cljs$core$async$state_machine__10550__auto__;
})()
})();
var state__10636__auto__ = (function (){var statearr_12772 = f__10635__auto__();
(statearr_12772[(6)] = c__10634__auto___13473);

return statearr_12772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10636__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
