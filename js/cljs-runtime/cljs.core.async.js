goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10895 = arguments.length;
switch (G__10895) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10910 = (function (f,blockable,meta10911){
this.f = f;
this.blockable = blockable;
this.meta10911 = meta10911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10912,meta10911__$1){
var self__ = this;
var _10912__$1 = this;
return (new cljs.core.async.t_cljs$core$async10910(self__.f,self__.blockable,meta10911__$1));
}));

(cljs.core.async.t_cljs$core$async10910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10912){
var self__ = this;
var _10912__$1 = this;
return self__.meta10911;
}));

(cljs.core.async.t_cljs$core$async10910.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10910.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10911","meta10911",567540450,null)], null);
}));

(cljs.core.async.t_cljs$core$async10910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10910");

(cljs.core.async.t_cljs$core$async10910.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10910.
 */
cljs.core.async.__GT_t_cljs$core$async10910 = (function cljs$core$async$__GT_t_cljs$core$async10910(f__$1,blockable__$1,meta10911){
return (new cljs.core.async.t_cljs$core$async10910(f__$1,blockable__$1,meta10911));
});

}

return (new cljs.core.async.t_cljs$core$async10910(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10915 = arguments.length;
switch (G__10915) {
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
var G__10926 = arguments.length;
switch (G__10926) {
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
var val_12646 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12646) : fn1.call(null,val_12646));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12646) : fn1.call(null,val_12646));
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
var n__4613__auto___12648 = n;
var x_12649 = (0);
while(true){
if((x_12649 < n__4613__auto___12648)){
(a[x_12649] = x_12649);

var G__12650 = (x_12649 + (1));
x_12649 = G__12650;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10933 = (function (flag,meta10934){
this.flag = flag;
this.meta10934 = meta10934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10935,meta10934__$1){
var self__ = this;
var _10935__$1 = this;
return (new cljs.core.async.t_cljs$core$async10933(self__.flag,meta10934__$1));
}));

(cljs.core.async.t_cljs$core$async10933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10935){
var self__ = this;
var _10935__$1 = this;
return self__.meta10934;
}));

(cljs.core.async.t_cljs$core$async10933.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10933.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10934","meta10934",123736867,null)], null);
}));

(cljs.core.async.t_cljs$core$async10933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10933");

(cljs.core.async.t_cljs$core$async10933.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10933.
 */
cljs.core.async.__GT_t_cljs$core$async10933 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10933(flag__$1,meta10934){
return (new cljs.core.async.t_cljs$core$async10933(flag__$1,meta10934));
});

}

return (new cljs.core.async.t_cljs$core$async10933(flag,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10947 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10944_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10947) : fret.call(null,G__10947));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10956){
var map__10957 = p__10956;
var map__10957__$1 = (((((!((map__10957 == null))))?(((((map__10957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10957):map__10957);
var opts = map__10957__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10952){
var G__10953 = cljs.core.first(seq10952);
var seq10952__$1 = cljs.core.next(seq10952);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10953,seq10952__$1);
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
var c__10818__auto___12657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_10991){
var state_val_10992 = (state_10991[(1)]);
if((state_val_10992 === (7))){
var inst_10986 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_10994_12658 = state_10991__$1;
(statearr_10994_12658[(2)] = inst_10986);

(statearr_10994_12658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (1))){
var state_10991__$1 = state_10991;
var statearr_10995_12659 = state_10991__$1;
(statearr_10995_12659[(2)] = null);

(statearr_10995_12659[(1)] = (2));


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
var statearr_10997_12660 = state_10991__$1;
(statearr_10997_12660[(1)] = (5));

} else {
var statearr_10998_12661 = state_10991__$1;
(statearr_10998_12661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (13))){
var state_10991__$1 = state_10991;
var statearr_10999_12662 = state_10991__$1;
(statearr_10999_12662[(2)] = null);

(statearr_10999_12662[(1)] = (14));


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
var statearr_11000_12663 = state_10991__$1;
(statearr_11000_12663[(2)] = null);

(statearr_11000_12663[(1)] = (2));


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
var statearr_11001_12664 = state_10991__$1;
(statearr_11001_12664[(1)] = (12));

} else {
var statearr_11002_12665 = state_10991__$1;
(statearr_11002_12665[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (9))){
var state_10991__$1 = state_10991;
var statearr_11003_12666 = state_10991__$1;
(statearr_11003_12666[(2)] = null);

(statearr_11003_12666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (5))){
var state_10991__$1 = state_10991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11004_12667 = state_10991__$1;
(statearr_11004_12667[(1)] = (8));

} else {
var statearr_11005_12668 = state_10991__$1;
(statearr_11005_12668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (14))){
var inst_10984 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_11006_12669 = state_10991__$1;
(statearr_11006_12669[(2)] = inst_10984);

(statearr_11006_12669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (10))){
var inst_10976 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_11008_12670 = state_10991__$1;
(statearr_11008_12670[(2)] = inst_10976);

(statearr_11008_12670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (8))){
var inst_10973 = cljs.core.async.close_BANG_(to);
var state_10991__$1 = state_10991;
var statearr_11009_12671 = state_10991__$1;
(statearr_11009_12671[(2)] = inst_10973);

(statearr_11009_12671[(1)] = (10));


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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_11012 = [null,null,null,null,null,null,null,null];
(statearr_11012[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_11012[(1)] = (1));

return statearr_11012;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_10991){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_10991);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11014){var ex__10761__auto__ = e11014;
var statearr_11015_12672 = state_10991;
(statearr_11015_12672[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_10991[(4)]))){
var statearr_11016_12673 = state_10991;
(statearr_11016_12673[(1)] = cljs.core.first((state_10991[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12674 = state_10991;
state_10991 = G__12674;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_10991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_10991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11019 = f__10819__auto__();
(statearr_11019[(6)] = c__10818__auto___12657);

return statearr_11019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
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
var process = (function (p__11020){
var vec__11021 = p__11020;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11021,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11021,(1),null);
var job = vec__11021;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10818__auto___12675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11028){
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
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0 = (function (){
var statearr_11031 = [null,null,null,null,null,null,null,null];
(statearr_11031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__);

(statearr_11031[(1)] = (1));

return statearr_11031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1 = (function (state_11028){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11028);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11032){var ex__10761__auto__ = e11032;
var statearr_11033_12676 = state_11028;
(statearr_11033_12676[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11028[(4)]))){
var statearr_11034_12677 = state_11028;
(statearr_11034_12677[(1)] = cljs.core.first((state_11028[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12678 = state_11028;
state_11028 = G__12678;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = function(state_11028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1.call(this,state_11028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11035 = f__10819__auto__();
(statearr_11035[(6)] = c__10818__auto___12675);

return statearr_11035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
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
var n__4613__auto___12679 = n;
var __12680 = (0);
while(true){
if((__12680 < n__4613__auto___12679)){
var G__11046_12681 = type;
var G__11046_12682__$1 = (((G__11046_12681 instanceof cljs.core.Keyword))?G__11046_12681.fqn:null);
switch (G__11046_12682__$1) {
case "compute":
var c__10818__auto___12684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12680,c__10818__auto___12684,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async){
return (function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = ((function (__12680,c__10818__auto___12684,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async){
return (function (state_11059){
var state_val_11060 = (state_11059[(1)]);
if((state_val_11060 === (1))){
var state_11059__$1 = state_11059;
var statearr_11061_12685 = state_11059__$1;
(statearr_11061_12685[(2)] = null);

(statearr_11061_12685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11060 === (2))){
var state_11059__$1 = state_11059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11059__$1,(4),jobs);
} else {
if((state_val_11060 === (3))){
var inst_11057 = (state_11059[(2)]);
var state_11059__$1 = state_11059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11059__$1,inst_11057);
} else {
if((state_val_11060 === (4))){
var inst_11049 = (state_11059[(2)]);
var inst_11050 = process(inst_11049);
var state_11059__$1 = state_11059;
if(cljs.core.truth_(inst_11050)){
var statearr_11062_12686 = state_11059__$1;
(statearr_11062_12686[(1)] = (5));

} else {
var statearr_11063_12687 = state_11059__$1;
(statearr_11063_12687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11060 === (5))){
var state_11059__$1 = state_11059;
var statearr_11064_12688 = state_11059__$1;
(statearr_11064_12688[(2)] = null);

(statearr_11064_12688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11060 === (6))){
var state_11059__$1 = state_11059;
var statearr_11065_12689 = state_11059__$1;
(statearr_11065_12689[(2)] = null);

(statearr_11065_12689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11060 === (7))){
var inst_11055 = (state_11059[(2)]);
var state_11059__$1 = state_11059;
var statearr_11066_12690 = state_11059__$1;
(statearr_11066_12690[(2)] = inst_11055);

(statearr_11066_12690[(1)] = (3));


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
});})(__12680,c__10818__auto___12684,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async))
;
return ((function (__12680,switch__10757__auto__,c__10818__auto___12684,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0 = (function (){
var statearr_11067 = [null,null,null,null,null,null,null];
(statearr_11067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__);

(statearr_11067[(1)] = (1));

return statearr_11067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1 = (function (state_11059){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11059);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11068){var ex__10761__auto__ = e11068;
var statearr_11069_12691 = state_11059;
(statearr_11069_12691[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11059[(4)]))){
var statearr_11070_12692 = state_11059;
(statearr_11070_12692[(1)] = cljs.core.first((state_11059[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12693 = state_11059;
state_11059 = G__12693;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = function(state_11059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1.call(this,state_11059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__;
})()
;})(__12680,switch__10757__auto__,c__10818__auto___12684,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async))
})();
var state__10820__auto__ = (function (){var statearr_11071 = f__10819__auto__();
(statearr_11071[(6)] = c__10818__auto___12684);

return statearr_11071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
});})(__12680,c__10818__auto___12684,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async))
);


break;
case "async":
var c__10818__auto___12698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12680,c__10818__auto___12698,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async){
return (function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = ((function (__12680,c__10818__auto___12698,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async){
return (function (state_11088){
var state_val_11089 = (state_11088[(1)]);
if((state_val_11089 === (1))){
var state_11088__$1 = state_11088;
var statearr_11090_12699 = state_11088__$1;
(statearr_11090_12699[(2)] = null);

(statearr_11090_12699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11089 === (2))){
var state_11088__$1 = state_11088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11088__$1,(4),jobs);
} else {
if((state_val_11089 === (3))){
var inst_11086 = (state_11088[(2)]);
var state_11088__$1 = state_11088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11088__$1,inst_11086);
} else {
if((state_val_11089 === (4))){
var inst_11077 = (state_11088[(2)]);
var inst_11078 = async(inst_11077);
var state_11088__$1 = state_11088;
if(cljs.core.truth_(inst_11078)){
var statearr_11091_12700 = state_11088__$1;
(statearr_11091_12700[(1)] = (5));

} else {
var statearr_11092_12701 = state_11088__$1;
(statearr_11092_12701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11089 === (5))){
var state_11088__$1 = state_11088;
var statearr_11093_12702 = state_11088__$1;
(statearr_11093_12702[(2)] = null);

(statearr_11093_12702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11089 === (6))){
var state_11088__$1 = state_11088;
var statearr_11094_12703 = state_11088__$1;
(statearr_11094_12703[(2)] = null);

(statearr_11094_12703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11089 === (7))){
var inst_11084 = (state_11088[(2)]);
var state_11088__$1 = state_11088;
var statearr_11095_12704 = state_11088__$1;
(statearr_11095_12704[(2)] = inst_11084);

(statearr_11095_12704[(1)] = (3));


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
});})(__12680,c__10818__auto___12698,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async))
;
return ((function (__12680,switch__10757__auto__,c__10818__auto___12698,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0 = (function (){
var statearr_11096 = [null,null,null,null,null,null,null];
(statearr_11096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__);

(statearr_11096[(1)] = (1));

return statearr_11096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1 = (function (state_11088){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11088);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11097){var ex__10761__auto__ = e11097;
var statearr_11098_12705 = state_11088;
(statearr_11098_12705[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11088[(4)]))){
var statearr_11099_12706 = state_11088;
(statearr_11099_12706[(1)] = cljs.core.first((state_11088[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12707 = state_11088;
state_11088 = G__12707;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = function(state_11088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1.call(this,state_11088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__;
})()
;})(__12680,switch__10757__auto__,c__10818__auto___12698,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async))
})();
var state__10820__auto__ = (function (){var statearr_11100 = f__10819__auto__();
(statearr_11100[(6)] = c__10818__auto___12698);

return statearr_11100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
});})(__12680,c__10818__auto___12698,G__11046_12681,G__11046_12682__$1,n__4613__auto___12679,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11046_12682__$1)].join('')));

}

var G__12708 = (__12680 + (1));
__12680 = G__12708;
continue;
} else {
}
break;
}

var c__10818__auto___12709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11123){
var state_val_11124 = (state_11123[(1)]);
if((state_val_11124 === (7))){
var inst_11118 = (state_11123[(2)]);
var state_11123__$1 = state_11123;
var statearr_11129_12710 = state_11123__$1;
(statearr_11129_12710[(2)] = inst_11118);

(statearr_11129_12710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (1))){
var state_11123__$1 = state_11123;
var statearr_11131_12711 = state_11123__$1;
(statearr_11131_12711[(2)] = null);

(statearr_11131_12711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (4))){
var inst_11103 = (state_11123[(7)]);
var inst_11103__$1 = (state_11123[(2)]);
var inst_11104 = (inst_11103__$1 == null);
var state_11123__$1 = (function (){var statearr_11132 = state_11123;
(statearr_11132[(7)] = inst_11103__$1);

return statearr_11132;
})();
if(cljs.core.truth_(inst_11104)){
var statearr_11133_12712 = state_11123__$1;
(statearr_11133_12712[(1)] = (5));

} else {
var statearr_11134_12713 = state_11123__$1;
(statearr_11134_12713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (6))){
var inst_11103 = (state_11123[(7)]);
var inst_11108 = (state_11123[(8)]);
var inst_11108__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11110 = [inst_11103,inst_11108__$1];
var inst_11111 = (new cljs.core.PersistentVector(null,2,(5),inst_11109,inst_11110,null));
var state_11123__$1 = (function (){var statearr_11135 = state_11123;
(statearr_11135[(8)] = inst_11108__$1);

return statearr_11135;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11123__$1,(8),jobs,inst_11111);
} else {
if((state_val_11124 === (3))){
var inst_11120 = (state_11123[(2)]);
var state_11123__$1 = state_11123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11123__$1,inst_11120);
} else {
if((state_val_11124 === (2))){
var state_11123__$1 = state_11123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11123__$1,(4),from);
} else {
if((state_val_11124 === (9))){
var inst_11115 = (state_11123[(2)]);
var state_11123__$1 = (function (){var statearr_11136 = state_11123;
(statearr_11136[(9)] = inst_11115);

return statearr_11136;
})();
var statearr_11137_12722 = state_11123__$1;
(statearr_11137_12722[(2)] = null);

(statearr_11137_12722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (5))){
var inst_11106 = cljs.core.async.close_BANG_(jobs);
var state_11123__$1 = state_11123;
var statearr_11138_12723 = state_11123__$1;
(statearr_11138_12723[(2)] = inst_11106);

(statearr_11138_12723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (8))){
var inst_11108 = (state_11123[(8)]);
var inst_11113 = (state_11123[(2)]);
var state_11123__$1 = (function (){var statearr_11139 = state_11123;
(statearr_11139[(10)] = inst_11113);

return statearr_11139;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11123__$1,(9),results,inst_11108);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0 = (function (){
var statearr_11140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__);

(statearr_11140[(1)] = (1));

return statearr_11140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1 = (function (state_11123){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11123);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11141){var ex__10761__auto__ = e11141;
var statearr_11142_12726 = state_11123;
(statearr_11142_12726[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11123[(4)]))){
var statearr_11143_12727 = state_11123;
(statearr_11143_12727[(1)] = cljs.core.first((state_11123[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12728 = state_11123;
state_11123 = G__12728;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = function(state_11123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1.call(this,state_11123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11144 = f__10819__auto__();
(statearr_11144[(6)] = c__10818__auto___12709);

return statearr_11144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));


var c__10818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11187){
var state_val_11188 = (state_11187[(1)]);
if((state_val_11188 === (7))){
var inst_11182 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11190_12729 = state_11187__$1;
(statearr_11190_12729[(2)] = inst_11182);

(statearr_11190_12729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (20))){
var state_11187__$1 = state_11187;
var statearr_11191_12730 = state_11187__$1;
(statearr_11191_12730[(2)] = null);

(statearr_11191_12730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (1))){
var state_11187__$1 = state_11187;
var statearr_11192_12731 = state_11187__$1;
(statearr_11192_12731[(2)] = null);

(statearr_11192_12731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (4))){
var inst_11147 = (state_11187[(7)]);
var inst_11147__$1 = (state_11187[(2)]);
var inst_11149 = (inst_11147__$1 == null);
var state_11187__$1 = (function (){var statearr_11193 = state_11187;
(statearr_11193[(7)] = inst_11147__$1);

return statearr_11193;
})();
if(cljs.core.truth_(inst_11149)){
var statearr_11194_12732 = state_11187__$1;
(statearr_11194_12732[(1)] = (5));

} else {
var statearr_11195_12733 = state_11187__$1;
(statearr_11195_12733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (15))){
var inst_11162 = (state_11187[(8)]);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11187__$1,(18),to,inst_11162);
} else {
if((state_val_11188 === (21))){
var inst_11176 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11197_12734 = state_11187__$1;
(statearr_11197_12734[(2)] = inst_11176);

(statearr_11197_12734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (13))){
var inst_11179 = (state_11187[(2)]);
var state_11187__$1 = (function (){var statearr_11198 = state_11187;
(statearr_11198[(9)] = inst_11179);

return statearr_11198;
})();
var statearr_11199_12735 = state_11187__$1;
(statearr_11199_12735[(2)] = null);

(statearr_11199_12735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (6))){
var inst_11147 = (state_11187[(7)]);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11187__$1,(11),inst_11147);
} else {
if((state_val_11188 === (17))){
var inst_11170 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
if(cljs.core.truth_(inst_11170)){
var statearr_11200_12736 = state_11187__$1;
(statearr_11200_12736[(1)] = (19));

} else {
var statearr_11201_12737 = state_11187__$1;
(statearr_11201_12737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (3))){
var inst_11184 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11187__$1,inst_11184);
} else {
if((state_val_11188 === (12))){
var inst_11158 = (state_11187[(10)]);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11187__$1,(14),inst_11158);
} else {
if((state_val_11188 === (2))){
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11187__$1,(4),results);
} else {
if((state_val_11188 === (19))){
var state_11187__$1 = state_11187;
var statearr_11202_12738 = state_11187__$1;
(statearr_11202_12738[(2)] = null);

(statearr_11202_12738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (11))){
var inst_11158 = (state_11187[(2)]);
var state_11187__$1 = (function (){var statearr_11203 = state_11187;
(statearr_11203[(10)] = inst_11158);

return statearr_11203;
})();
var statearr_11204_12739 = state_11187__$1;
(statearr_11204_12739[(2)] = null);

(statearr_11204_12739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (9))){
var state_11187__$1 = state_11187;
var statearr_11205_12740 = state_11187__$1;
(statearr_11205_12740[(2)] = null);

(statearr_11205_12740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (5))){
var state_11187__$1 = state_11187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11206_12741 = state_11187__$1;
(statearr_11206_12741[(1)] = (8));

} else {
var statearr_11207_12742 = state_11187__$1;
(statearr_11207_12742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (14))){
var inst_11162 = (state_11187[(8)]);
var inst_11162__$1 = (state_11187[(2)]);
var inst_11163 = (inst_11162__$1 == null);
var inst_11164 = cljs.core.not(inst_11163);
var state_11187__$1 = (function (){var statearr_11208 = state_11187;
(statearr_11208[(8)] = inst_11162__$1);

return statearr_11208;
})();
if(inst_11164){
var statearr_11209_12743 = state_11187__$1;
(statearr_11209_12743[(1)] = (15));

} else {
var statearr_11210_12744 = state_11187__$1;
(statearr_11210_12744[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (16))){
var state_11187__$1 = state_11187;
var statearr_11211_12745 = state_11187__$1;
(statearr_11211_12745[(2)] = false);

(statearr_11211_12745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (10))){
var inst_11155 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11212_12746 = state_11187__$1;
(statearr_11212_12746[(2)] = inst_11155);

(statearr_11212_12746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (18))){
var inst_11167 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11213_12747 = state_11187__$1;
(statearr_11213_12747[(2)] = inst_11167);

(statearr_11213_12747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11188 === (8))){
var inst_11152 = cljs.core.async.close_BANG_(to);
var state_11187__$1 = state_11187;
var statearr_11215_12748 = state_11187__$1;
(statearr_11215_12748[(2)] = inst_11152);

(statearr_11215_12748[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0 = (function (){
var statearr_11219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__);

(statearr_11219[(1)] = (1));

return statearr_11219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1 = (function (state_11187){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11187);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11220){var ex__10761__auto__ = e11220;
var statearr_11221_12752 = state_11187;
(statearr_11221_12752[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11187[(4)]))){
var statearr_11222_12753 = state_11187;
(statearr_11222_12753[(1)] = cljs.core.first((state_11187[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12754 = state_11187;
state_11187 = G__12754;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__ = function(state_11187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1.call(this,state_11187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11223 = f__10819__auto__();
(statearr_11223[(6)] = c__10818__auto__);

return statearr_11223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));

return c__10818__auto__;
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
var G__11225 = arguments.length;
switch (G__11225) {
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
var G__11228 = arguments.length;
switch (G__11228) {
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
var G__11230 = arguments.length;
switch (G__11230) {
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
var c__10818__auto___12758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11256){
var state_val_11257 = (state_11256[(1)]);
if((state_val_11257 === (7))){
var inst_11252 = (state_11256[(2)]);
var state_11256__$1 = state_11256;
var statearr_11258_12759 = state_11256__$1;
(statearr_11258_12759[(2)] = inst_11252);

(statearr_11258_12759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (1))){
var state_11256__$1 = state_11256;
var statearr_11259_12760 = state_11256__$1;
(statearr_11259_12760[(2)] = null);

(statearr_11259_12760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (4))){
var inst_11233 = (state_11256[(7)]);
var inst_11233__$1 = (state_11256[(2)]);
var inst_11234 = (inst_11233__$1 == null);
var state_11256__$1 = (function (){var statearr_11260 = state_11256;
(statearr_11260[(7)] = inst_11233__$1);

return statearr_11260;
})();
if(cljs.core.truth_(inst_11234)){
var statearr_11261_12761 = state_11256__$1;
(statearr_11261_12761[(1)] = (5));

} else {
var statearr_11262_12762 = state_11256__$1;
(statearr_11262_12762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (13))){
var state_11256__$1 = state_11256;
var statearr_11263_12763 = state_11256__$1;
(statearr_11263_12763[(2)] = null);

(statearr_11263_12763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (6))){
var inst_11233 = (state_11256[(7)]);
var inst_11239 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11233) : p.call(null,inst_11233));
var state_11256__$1 = state_11256;
if(cljs.core.truth_(inst_11239)){
var statearr_11264_12764 = state_11256__$1;
(statearr_11264_12764[(1)] = (9));

} else {
var statearr_11265_12765 = state_11256__$1;
(statearr_11265_12765[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (3))){
var inst_11254 = (state_11256[(2)]);
var state_11256__$1 = state_11256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11256__$1,inst_11254);
} else {
if((state_val_11257 === (12))){
var state_11256__$1 = state_11256;
var statearr_11266_12766 = state_11256__$1;
(statearr_11266_12766[(2)] = null);

(statearr_11266_12766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (2))){
var state_11256__$1 = state_11256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11256__$1,(4),ch);
} else {
if((state_val_11257 === (11))){
var inst_11233 = (state_11256[(7)]);
var inst_11243 = (state_11256[(2)]);
var state_11256__$1 = state_11256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11256__$1,(8),inst_11243,inst_11233);
} else {
if((state_val_11257 === (9))){
var state_11256__$1 = state_11256;
var statearr_11267_12771 = state_11256__$1;
(statearr_11267_12771[(2)] = tc);

(statearr_11267_12771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (5))){
var inst_11236 = cljs.core.async.close_BANG_(tc);
var inst_11237 = cljs.core.async.close_BANG_(fc);
var state_11256__$1 = (function (){var statearr_11268 = state_11256;
(statearr_11268[(8)] = inst_11236);

return statearr_11268;
})();
var statearr_11270_12776 = state_11256__$1;
(statearr_11270_12776[(2)] = inst_11237);

(statearr_11270_12776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (14))){
var inst_11250 = (state_11256[(2)]);
var state_11256__$1 = state_11256;
var statearr_11271_12777 = state_11256__$1;
(statearr_11271_12777[(2)] = inst_11250);

(statearr_11271_12777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (10))){
var state_11256__$1 = state_11256;
var statearr_11272_12778 = state_11256__$1;
(statearr_11272_12778[(2)] = fc);

(statearr_11272_12778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (8))){
var inst_11245 = (state_11256[(2)]);
var state_11256__$1 = state_11256;
if(cljs.core.truth_(inst_11245)){
var statearr_11276_12779 = state_11256__$1;
(statearr_11276_12779[(1)] = (12));

} else {
var statearr_11277_12780 = state_11256__$1;
(statearr_11277_12780[(1)] = (13));

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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_11278 = [null,null,null,null,null,null,null,null,null];
(statearr_11278[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_11278[(1)] = (1));

return statearr_11278;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_11256){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11256);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11279){var ex__10761__auto__ = e11279;
var statearr_11280_12781 = state_11256;
(statearr_11280_12781[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11256[(4)]))){
var statearr_11281_12782 = state_11256;
(statearr_11281_12782[(1)] = cljs.core.first((state_11256[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12783 = state_11256;
state_11256 = G__12783;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_11256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_11256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11283 = f__10819__auto__();
(statearr_11283[(6)] = c__10818__auto___12758);

return statearr_11283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
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
var c__10818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11308){
var state_val_11309 = (state_11308[(1)]);
if((state_val_11309 === (7))){
var inst_11304 = (state_11308[(2)]);
var state_11308__$1 = state_11308;
var statearr_11310_12784 = state_11308__$1;
(statearr_11310_12784[(2)] = inst_11304);

(statearr_11310_12784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11309 === (1))){
var inst_11287 = init;
var inst_11288 = inst_11287;
var state_11308__$1 = (function (){var statearr_11311 = state_11308;
(statearr_11311[(7)] = inst_11288);

return statearr_11311;
})();
var statearr_11312_12785 = state_11308__$1;
(statearr_11312_12785[(2)] = null);

(statearr_11312_12785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11309 === (4))){
var inst_11291 = (state_11308[(8)]);
var inst_11291__$1 = (state_11308[(2)]);
var inst_11292 = (inst_11291__$1 == null);
var state_11308__$1 = (function (){var statearr_11313 = state_11308;
(statearr_11313[(8)] = inst_11291__$1);

return statearr_11313;
})();
if(cljs.core.truth_(inst_11292)){
var statearr_11314_12786 = state_11308__$1;
(statearr_11314_12786[(1)] = (5));

} else {
var statearr_11315_12787 = state_11308__$1;
(statearr_11315_12787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11309 === (6))){
var inst_11291 = (state_11308[(8)]);
var inst_11295 = (state_11308[(9)]);
var inst_11288 = (state_11308[(7)]);
var inst_11295__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11288,inst_11291) : f.call(null,inst_11288,inst_11291));
var inst_11296 = cljs.core.reduced_QMARK_(inst_11295__$1);
var state_11308__$1 = (function (){var statearr_11316 = state_11308;
(statearr_11316[(9)] = inst_11295__$1);

return statearr_11316;
})();
if(inst_11296){
var statearr_11317_12788 = state_11308__$1;
(statearr_11317_12788[(1)] = (8));

} else {
var statearr_11318_12789 = state_11308__$1;
(statearr_11318_12789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11309 === (3))){
var inst_11306 = (state_11308[(2)]);
var state_11308__$1 = state_11308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11308__$1,inst_11306);
} else {
if((state_val_11309 === (2))){
var state_11308__$1 = state_11308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11308__$1,(4),ch);
} else {
if((state_val_11309 === (9))){
var inst_11295 = (state_11308[(9)]);
var inst_11288 = inst_11295;
var state_11308__$1 = (function (){var statearr_11319 = state_11308;
(statearr_11319[(7)] = inst_11288);

return statearr_11319;
})();
var statearr_11320_12795 = state_11308__$1;
(statearr_11320_12795[(2)] = null);

(statearr_11320_12795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11309 === (5))){
var inst_11288 = (state_11308[(7)]);
var state_11308__$1 = state_11308;
var statearr_11321_12796 = state_11308__$1;
(statearr_11321_12796[(2)] = inst_11288);

(statearr_11321_12796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11309 === (10))){
var inst_11302 = (state_11308[(2)]);
var state_11308__$1 = state_11308;
var statearr_11322_12799 = state_11308__$1;
(statearr_11322_12799[(2)] = inst_11302);

(statearr_11322_12799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11309 === (8))){
var inst_11295 = (state_11308[(9)]);
var inst_11298 = cljs.core.deref(inst_11295);
var state_11308__$1 = state_11308;
var statearr_11323_12801 = state_11308__$1;
(statearr_11323_12801[(2)] = inst_11298);

(statearr_11323_12801[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10758__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10758__auto____0 = (function (){
var statearr_11324 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11324[(0)] = cljs$core$async$reduce_$_state_machine__10758__auto__);

(statearr_11324[(1)] = (1));

return statearr_11324;
});
var cljs$core$async$reduce_$_state_machine__10758__auto____1 = (function (state_11308){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11308);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11325){var ex__10761__auto__ = e11325;
var statearr_11326_12804 = state_11308;
(statearr_11326_12804[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11308[(4)]))){
var statearr_11328_12806 = state_11308;
(statearr_11328_12806[(1)] = cljs.core.first((state_11308[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12807 = state_11308;
state_11308 = G__12807;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10758__auto__ = function(state_11308){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10758__auto____1.call(this,state_11308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10758__auto____0;
cljs$core$async$reduce_$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10758__auto____1;
return cljs$core$async$reduce_$_state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11330 = f__10819__auto__();
(statearr_11330[(6)] = c__10818__auto__);

return statearr_11330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));

return c__10818__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11338){
var state_val_11339 = (state_11338[(1)]);
if((state_val_11339 === (1))){
var inst_11333 = cljs.core.async.reduce(f__$1,init,ch);
var state_11338__$1 = state_11338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11338__$1,(2),inst_11333);
} else {
if((state_val_11339 === (2))){
var inst_11335 = (state_11338[(2)]);
var inst_11336 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11335) : f__$1.call(null,inst_11335));
var state_11338__$1 = state_11338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11338__$1,inst_11336);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10758__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10758__auto____0 = (function (){
var statearr_11340 = [null,null,null,null,null,null,null];
(statearr_11340[(0)] = cljs$core$async$transduce_$_state_machine__10758__auto__);

(statearr_11340[(1)] = (1));

return statearr_11340;
});
var cljs$core$async$transduce_$_state_machine__10758__auto____1 = (function (state_11338){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11338);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11341){var ex__10761__auto__ = e11341;
var statearr_11342_12809 = state_11338;
(statearr_11342_12809[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11338[(4)]))){
var statearr_11343_12810 = state_11338;
(statearr_11343_12810[(1)] = cljs.core.first((state_11338[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12811 = state_11338;
state_11338 = G__12811;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10758__auto__ = function(state_11338){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10758__auto____1.call(this,state_11338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10758__auto____0;
cljs$core$async$transduce_$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10758__auto____1;
return cljs$core$async$transduce_$_state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11344 = f__10819__auto__();
(statearr_11344[(6)] = c__10818__auto__);

return statearr_11344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));

return c__10818__auto__;
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
var G__11346 = arguments.length;
switch (G__11346) {
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
var c__10818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11371){
var state_val_11372 = (state_11371[(1)]);
if((state_val_11372 === (7))){
var inst_11353 = (state_11371[(2)]);
var state_11371__$1 = state_11371;
var statearr_11373_12813 = state_11371__$1;
(statearr_11373_12813[(2)] = inst_11353);

(statearr_11373_12813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (1))){
var inst_11347 = cljs.core.seq(coll);
var inst_11348 = inst_11347;
var state_11371__$1 = (function (){var statearr_11374 = state_11371;
(statearr_11374[(7)] = inst_11348);

return statearr_11374;
})();
var statearr_11375_12814 = state_11371__$1;
(statearr_11375_12814[(2)] = null);

(statearr_11375_12814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (4))){
var inst_11348 = (state_11371[(7)]);
var inst_11351 = cljs.core.first(inst_11348);
var state_11371__$1 = state_11371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11371__$1,(7),ch,inst_11351);
} else {
if((state_val_11372 === (13))){
var inst_11365 = (state_11371[(2)]);
var state_11371__$1 = state_11371;
var statearr_11376_12815 = state_11371__$1;
(statearr_11376_12815[(2)] = inst_11365);

(statearr_11376_12815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (6))){
var inst_11356 = (state_11371[(2)]);
var state_11371__$1 = state_11371;
if(cljs.core.truth_(inst_11356)){
var statearr_11377_12816 = state_11371__$1;
(statearr_11377_12816[(1)] = (8));

} else {
var statearr_11378_12817 = state_11371__$1;
(statearr_11378_12817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (3))){
var inst_11369 = (state_11371[(2)]);
var state_11371__$1 = state_11371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11371__$1,inst_11369);
} else {
if((state_val_11372 === (12))){
var state_11371__$1 = state_11371;
var statearr_11379_12818 = state_11371__$1;
(statearr_11379_12818[(2)] = null);

(statearr_11379_12818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (2))){
var inst_11348 = (state_11371[(7)]);
var state_11371__$1 = state_11371;
if(cljs.core.truth_(inst_11348)){
var statearr_11380_12819 = state_11371__$1;
(statearr_11380_12819[(1)] = (4));

} else {
var statearr_11381_12820 = state_11371__$1;
(statearr_11381_12820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (11))){
var inst_11362 = cljs.core.async.close_BANG_(ch);
var state_11371__$1 = state_11371;
var statearr_11382_12821 = state_11371__$1;
(statearr_11382_12821[(2)] = inst_11362);

(statearr_11382_12821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (9))){
var state_11371__$1 = state_11371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11383_12822 = state_11371__$1;
(statearr_11383_12822[(1)] = (11));

} else {
var statearr_11384_12823 = state_11371__$1;
(statearr_11384_12823[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (5))){
var inst_11348 = (state_11371[(7)]);
var state_11371__$1 = state_11371;
var statearr_11385_12824 = state_11371__$1;
(statearr_11385_12824[(2)] = inst_11348);

(statearr_11385_12824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (10))){
var inst_11367 = (state_11371[(2)]);
var state_11371__$1 = state_11371;
var statearr_11386_12825 = state_11371__$1;
(statearr_11386_12825[(2)] = inst_11367);

(statearr_11386_12825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11372 === (8))){
var inst_11348 = (state_11371[(7)]);
var inst_11358 = cljs.core.next(inst_11348);
var inst_11348__$1 = inst_11358;
var state_11371__$1 = (function (){var statearr_11387 = state_11371;
(statearr_11387[(7)] = inst_11348__$1);

return statearr_11387;
})();
var statearr_11388_12836 = state_11371__$1;
(statearr_11388_12836[(2)] = null);

(statearr_11388_12836[(1)] = (2));


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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_11389 = [null,null,null,null,null,null,null,null];
(statearr_11389[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_11389[(1)] = (1));

return statearr_11389;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_11371){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11371);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11390){var ex__10761__auto__ = e11390;
var statearr_11391_12837 = state_11371;
(statearr_11391_12837[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11371[(4)]))){
var statearr_11392_12838 = state_11371;
(statearr_11392_12838[(1)] = cljs.core.first((state_11371[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12839 = state_11371;
state_11371 = G__12839;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_11371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_11371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11393 = f__10819__auto__();
(statearr_11393[(6)] = c__10818__auto__);

return statearr_11393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));

return c__10818__auto__;
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
var G__11395 = arguments.length;
switch (G__11395) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12841 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12841(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12842 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12842(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12845 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12845(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12846 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12846(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11402 = (function (ch,cs,meta11403){
this.ch = ch;
this.cs = cs;
this.meta11403 = meta11403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11404,meta11403__$1){
var self__ = this;
var _11404__$1 = this;
return (new cljs.core.async.t_cljs$core$async11402(self__.ch,self__.cs,meta11403__$1));
}));

(cljs.core.async.t_cljs$core$async11402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11404){
var self__ = this;
var _11404__$1 = this;
return self__.meta11403;
}));

(cljs.core.async.t_cljs$core$async11402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11402.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11402.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11402.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11402.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11403","meta11403",-1006810425,null)], null);
}));

(cljs.core.async.t_cljs$core$async11402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11402");

(cljs.core.async.t_cljs$core$async11402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11402.
 */
cljs.core.async.__GT_t_cljs$core$async11402 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11402(ch__$1,cs__$1,meta11403){
return (new cljs.core.async.t_cljs$core$async11402(ch__$1,cs__$1,meta11403));
});

}

return (new cljs.core.async.t_cljs$core$async11402(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10818__auto___12855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11547){
var state_val_11548 = (state_11547[(1)]);
if((state_val_11548 === (7))){
var inst_11539 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
var statearr_11549_12856 = state_11547__$1;
(statearr_11549_12856[(2)] = inst_11539);

(statearr_11549_12856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (20))){
var inst_11444 = (state_11547[(7)]);
var inst_11456 = cljs.core.first(inst_11444);
var inst_11457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11456,(0),null);
var inst_11458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11456,(1),null);
var state_11547__$1 = (function (){var statearr_11550 = state_11547;
(statearr_11550[(8)] = inst_11457);

return statearr_11550;
})();
if(cljs.core.truth_(inst_11458)){
var statearr_11551_12857 = state_11547__$1;
(statearr_11551_12857[(1)] = (22));

} else {
var statearr_11552_12858 = state_11547__$1;
(statearr_11552_12858[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (27))){
var inst_11488 = (state_11547[(9)]);
var inst_11411 = (state_11547[(10)]);
var inst_11486 = (state_11547[(11)]);
var inst_11493 = (state_11547[(12)]);
var inst_11493__$1 = cljs.core._nth(inst_11486,inst_11488);
var inst_11494 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11493__$1,inst_11411,done);
var state_11547__$1 = (function (){var statearr_11553 = state_11547;
(statearr_11553[(12)] = inst_11493__$1);

return statearr_11553;
})();
if(cljs.core.truth_(inst_11494)){
var statearr_11554_12859 = state_11547__$1;
(statearr_11554_12859[(1)] = (30));

} else {
var statearr_11555_12860 = state_11547__$1;
(statearr_11555_12860[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (1))){
var state_11547__$1 = state_11547;
var statearr_11556_12861 = state_11547__$1;
(statearr_11556_12861[(2)] = null);

(statearr_11556_12861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (24))){
var inst_11444 = (state_11547[(7)]);
var inst_11463 = (state_11547[(2)]);
var inst_11464 = cljs.core.next(inst_11444);
var inst_11421 = inst_11464;
var inst_11422 = null;
var inst_11423 = (0);
var inst_11424 = (0);
var state_11547__$1 = (function (){var statearr_11557 = state_11547;
(statearr_11557[(13)] = inst_11424);

(statearr_11557[(14)] = inst_11422);

(statearr_11557[(15)] = inst_11421);

(statearr_11557[(16)] = inst_11463);

(statearr_11557[(17)] = inst_11423);

return statearr_11557;
})();
var statearr_11558_12862 = state_11547__$1;
(statearr_11558_12862[(2)] = null);

(statearr_11558_12862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (39))){
var state_11547__$1 = state_11547;
var statearr_11562_12863 = state_11547__$1;
(statearr_11562_12863[(2)] = null);

(statearr_11562_12863[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (4))){
var inst_11411 = (state_11547[(10)]);
var inst_11411__$1 = (state_11547[(2)]);
var inst_11412 = (inst_11411__$1 == null);
var state_11547__$1 = (function (){var statearr_11563 = state_11547;
(statearr_11563[(10)] = inst_11411__$1);

return statearr_11563;
})();
if(cljs.core.truth_(inst_11412)){
var statearr_11564_12864 = state_11547__$1;
(statearr_11564_12864[(1)] = (5));

} else {
var statearr_11565_12865 = state_11547__$1;
(statearr_11565_12865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (15))){
var inst_11424 = (state_11547[(13)]);
var inst_11422 = (state_11547[(14)]);
var inst_11421 = (state_11547[(15)]);
var inst_11423 = (state_11547[(17)]);
var inst_11440 = (state_11547[(2)]);
var inst_11441 = (inst_11424 + (1));
var tmp11559 = inst_11422;
var tmp11560 = inst_11421;
var tmp11561 = inst_11423;
var inst_11421__$1 = tmp11560;
var inst_11422__$1 = tmp11559;
var inst_11423__$1 = tmp11561;
var inst_11424__$1 = inst_11441;
var state_11547__$1 = (function (){var statearr_11566 = state_11547;
(statearr_11566[(13)] = inst_11424__$1);

(statearr_11566[(14)] = inst_11422__$1);

(statearr_11566[(15)] = inst_11421__$1);

(statearr_11566[(17)] = inst_11423__$1);

(statearr_11566[(18)] = inst_11440);

return statearr_11566;
})();
var statearr_11567_12866 = state_11547__$1;
(statearr_11567_12866[(2)] = null);

(statearr_11567_12866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (21))){
var inst_11467 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
var statearr_11571_12867 = state_11547__$1;
(statearr_11571_12867[(2)] = inst_11467);

(statearr_11571_12867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (31))){
var inst_11493 = (state_11547[(12)]);
var inst_11497 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11493);
var state_11547__$1 = state_11547;
var statearr_11572_12868 = state_11547__$1;
(statearr_11572_12868[(2)] = inst_11497);

(statearr_11572_12868[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (32))){
var inst_11485 = (state_11547[(19)]);
var inst_11488 = (state_11547[(9)]);
var inst_11486 = (state_11547[(11)]);
var inst_11487 = (state_11547[(20)]);
var inst_11499 = (state_11547[(2)]);
var inst_11500 = (inst_11488 + (1));
var tmp11568 = inst_11485;
var tmp11569 = inst_11486;
var tmp11570 = inst_11487;
var inst_11485__$1 = tmp11568;
var inst_11486__$1 = tmp11569;
var inst_11487__$1 = tmp11570;
var inst_11488__$1 = inst_11500;
var state_11547__$1 = (function (){var statearr_11573 = state_11547;
(statearr_11573[(19)] = inst_11485__$1);

(statearr_11573[(9)] = inst_11488__$1);

(statearr_11573[(21)] = inst_11499);

(statearr_11573[(11)] = inst_11486__$1);

(statearr_11573[(20)] = inst_11487__$1);

return statearr_11573;
})();
var statearr_11574_12869 = state_11547__$1;
(statearr_11574_12869[(2)] = null);

(statearr_11574_12869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (40))){
var inst_11512 = (state_11547[(22)]);
var inst_11516 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11512);
var state_11547__$1 = state_11547;
var statearr_11575_12870 = state_11547__$1;
(statearr_11575_12870[(2)] = inst_11516);

(statearr_11575_12870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (33))){
var inst_11503 = (state_11547[(23)]);
var inst_11505 = cljs.core.chunked_seq_QMARK_(inst_11503);
var state_11547__$1 = state_11547;
if(inst_11505){
var statearr_11576_12871 = state_11547__$1;
(statearr_11576_12871[(1)] = (36));

} else {
var statearr_11577_12874 = state_11547__$1;
(statearr_11577_12874[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (13))){
var inst_11434 = (state_11547[(24)]);
var inst_11437 = cljs.core.async.close_BANG_(inst_11434);
var state_11547__$1 = state_11547;
var statearr_11578_12875 = state_11547__$1;
(statearr_11578_12875[(2)] = inst_11437);

(statearr_11578_12875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (22))){
var inst_11457 = (state_11547[(8)]);
var inst_11460 = cljs.core.async.close_BANG_(inst_11457);
var state_11547__$1 = state_11547;
var statearr_11579_12876 = state_11547__$1;
(statearr_11579_12876[(2)] = inst_11460);

(statearr_11579_12876[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (36))){
var inst_11503 = (state_11547[(23)]);
var inst_11507 = cljs.core.chunk_first(inst_11503);
var inst_11508 = cljs.core.chunk_rest(inst_11503);
var inst_11509 = cljs.core.count(inst_11507);
var inst_11485 = inst_11508;
var inst_11486 = inst_11507;
var inst_11487 = inst_11509;
var inst_11488 = (0);
var state_11547__$1 = (function (){var statearr_11580 = state_11547;
(statearr_11580[(19)] = inst_11485);

(statearr_11580[(9)] = inst_11488);

(statearr_11580[(11)] = inst_11486);

(statearr_11580[(20)] = inst_11487);

return statearr_11580;
})();
var statearr_11581_12889 = state_11547__$1;
(statearr_11581_12889[(2)] = null);

(statearr_11581_12889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (41))){
var inst_11503 = (state_11547[(23)]);
var inst_11518 = (state_11547[(2)]);
var inst_11519 = cljs.core.next(inst_11503);
var inst_11485 = inst_11519;
var inst_11486 = null;
var inst_11487 = (0);
var inst_11488 = (0);
var state_11547__$1 = (function (){var statearr_11582 = state_11547;
(statearr_11582[(19)] = inst_11485);

(statearr_11582[(9)] = inst_11488);

(statearr_11582[(11)] = inst_11486);

(statearr_11582[(20)] = inst_11487);

(statearr_11582[(25)] = inst_11518);

return statearr_11582;
})();
var statearr_11583_12890 = state_11547__$1;
(statearr_11583_12890[(2)] = null);

(statearr_11583_12890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (43))){
var state_11547__$1 = state_11547;
var statearr_11584_12891 = state_11547__$1;
(statearr_11584_12891[(2)] = null);

(statearr_11584_12891[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (29))){
var inst_11527 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
var statearr_11585_12893 = state_11547__$1;
(statearr_11585_12893[(2)] = inst_11527);

(statearr_11585_12893[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (44))){
var inst_11536 = (state_11547[(2)]);
var state_11547__$1 = (function (){var statearr_11586 = state_11547;
(statearr_11586[(26)] = inst_11536);

return statearr_11586;
})();
var statearr_11587_12894 = state_11547__$1;
(statearr_11587_12894[(2)] = null);

(statearr_11587_12894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (6))){
var inst_11477 = (state_11547[(27)]);
var inst_11476 = cljs.core.deref(cs);
var inst_11477__$1 = cljs.core.keys(inst_11476);
var inst_11478 = cljs.core.count(inst_11477__$1);
var inst_11479 = cljs.core.reset_BANG_(dctr,inst_11478);
var inst_11484 = cljs.core.seq(inst_11477__$1);
var inst_11485 = inst_11484;
var inst_11486 = null;
var inst_11487 = (0);
var inst_11488 = (0);
var state_11547__$1 = (function (){var statearr_11588 = state_11547;
(statearr_11588[(19)] = inst_11485);

(statearr_11588[(9)] = inst_11488);

(statearr_11588[(28)] = inst_11479);

(statearr_11588[(11)] = inst_11486);

(statearr_11588[(20)] = inst_11487);

(statearr_11588[(27)] = inst_11477__$1);

return statearr_11588;
})();
var statearr_11589_12906 = state_11547__$1;
(statearr_11589_12906[(2)] = null);

(statearr_11589_12906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (28))){
var inst_11485 = (state_11547[(19)]);
var inst_11503 = (state_11547[(23)]);
var inst_11503__$1 = cljs.core.seq(inst_11485);
var state_11547__$1 = (function (){var statearr_11590 = state_11547;
(statearr_11590[(23)] = inst_11503__$1);

return statearr_11590;
})();
if(inst_11503__$1){
var statearr_11591_12907 = state_11547__$1;
(statearr_11591_12907[(1)] = (33));

} else {
var statearr_11592_12908 = state_11547__$1;
(statearr_11592_12908[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (25))){
var inst_11488 = (state_11547[(9)]);
var inst_11487 = (state_11547[(20)]);
var inst_11490 = (inst_11488 < inst_11487);
var inst_11491 = inst_11490;
var state_11547__$1 = state_11547;
if(cljs.core.truth_(inst_11491)){
var statearr_11593_12909 = state_11547__$1;
(statearr_11593_12909[(1)] = (27));

} else {
var statearr_11594_12910 = state_11547__$1;
(statearr_11594_12910[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (34))){
var state_11547__$1 = state_11547;
var statearr_11599_12911 = state_11547__$1;
(statearr_11599_12911[(2)] = null);

(statearr_11599_12911[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (17))){
var state_11547__$1 = state_11547;
var statearr_11600_12912 = state_11547__$1;
(statearr_11600_12912[(2)] = null);

(statearr_11600_12912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (3))){
var inst_11541 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11547__$1,inst_11541);
} else {
if((state_val_11548 === (12))){
var inst_11472 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
var statearr_11603_12913 = state_11547__$1;
(statearr_11603_12913[(2)] = inst_11472);

(statearr_11603_12913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (2))){
var state_11547__$1 = state_11547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11547__$1,(4),ch);
} else {
if((state_val_11548 === (23))){
var state_11547__$1 = state_11547;
var statearr_11605_12914 = state_11547__$1;
(statearr_11605_12914[(2)] = null);

(statearr_11605_12914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (35))){
var inst_11525 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
var statearr_11606_12915 = state_11547__$1;
(statearr_11606_12915[(2)] = inst_11525);

(statearr_11606_12915[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (19))){
var inst_11444 = (state_11547[(7)]);
var inst_11448 = cljs.core.chunk_first(inst_11444);
var inst_11449 = cljs.core.chunk_rest(inst_11444);
var inst_11450 = cljs.core.count(inst_11448);
var inst_11421 = inst_11449;
var inst_11422 = inst_11448;
var inst_11423 = inst_11450;
var inst_11424 = (0);
var state_11547__$1 = (function (){var statearr_11608 = state_11547;
(statearr_11608[(13)] = inst_11424);

(statearr_11608[(14)] = inst_11422);

(statearr_11608[(15)] = inst_11421);

(statearr_11608[(17)] = inst_11423);

return statearr_11608;
})();
var statearr_11609_12929 = state_11547__$1;
(statearr_11609_12929[(2)] = null);

(statearr_11609_12929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (11))){
var inst_11444 = (state_11547[(7)]);
var inst_11421 = (state_11547[(15)]);
var inst_11444__$1 = cljs.core.seq(inst_11421);
var state_11547__$1 = (function (){var statearr_11610 = state_11547;
(statearr_11610[(7)] = inst_11444__$1);

return statearr_11610;
})();
if(inst_11444__$1){
var statearr_11611_12930 = state_11547__$1;
(statearr_11611_12930[(1)] = (16));

} else {
var statearr_11612_12931 = state_11547__$1;
(statearr_11612_12931[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (9))){
var inst_11474 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
var statearr_11613_12932 = state_11547__$1;
(statearr_11613_12932[(2)] = inst_11474);

(statearr_11613_12932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (5))){
var inst_11419 = cljs.core.deref(cs);
var inst_11420 = cljs.core.seq(inst_11419);
var inst_11421 = inst_11420;
var inst_11422 = null;
var inst_11423 = (0);
var inst_11424 = (0);
var state_11547__$1 = (function (){var statearr_11614 = state_11547;
(statearr_11614[(13)] = inst_11424);

(statearr_11614[(14)] = inst_11422);

(statearr_11614[(15)] = inst_11421);

(statearr_11614[(17)] = inst_11423);

return statearr_11614;
})();
var statearr_11615_12935 = state_11547__$1;
(statearr_11615_12935[(2)] = null);

(statearr_11615_12935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (14))){
var state_11547__$1 = state_11547;
var statearr_11616_12936 = state_11547__$1;
(statearr_11616_12936[(2)] = null);

(statearr_11616_12936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (45))){
var inst_11533 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
var statearr_11617_12937 = state_11547__$1;
(statearr_11617_12937[(2)] = inst_11533);

(statearr_11617_12937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (26))){
var inst_11477 = (state_11547[(27)]);
var inst_11529 = (state_11547[(2)]);
var inst_11530 = cljs.core.seq(inst_11477);
var state_11547__$1 = (function (){var statearr_11618 = state_11547;
(statearr_11618[(29)] = inst_11529);

return statearr_11618;
})();
if(inst_11530){
var statearr_11619_12942 = state_11547__$1;
(statearr_11619_12942[(1)] = (42));

} else {
var statearr_11620_12944 = state_11547__$1;
(statearr_11620_12944[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (16))){
var inst_11444 = (state_11547[(7)]);
var inst_11446 = cljs.core.chunked_seq_QMARK_(inst_11444);
var state_11547__$1 = state_11547;
if(inst_11446){
var statearr_11621_12946 = state_11547__$1;
(statearr_11621_12946[(1)] = (19));

} else {
var statearr_11622_12947 = state_11547__$1;
(statearr_11622_12947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (38))){
var inst_11522 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
var statearr_11623_12957 = state_11547__$1;
(statearr_11623_12957[(2)] = inst_11522);

(statearr_11623_12957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (30))){
var state_11547__$1 = state_11547;
var statearr_11624_12958 = state_11547__$1;
(statearr_11624_12958[(2)] = null);

(statearr_11624_12958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (10))){
var inst_11424 = (state_11547[(13)]);
var inst_11422 = (state_11547[(14)]);
var inst_11432 = cljs.core._nth(inst_11422,inst_11424);
var inst_11434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11432,(0),null);
var inst_11435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11432,(1),null);
var state_11547__$1 = (function (){var statearr_11625 = state_11547;
(statearr_11625[(24)] = inst_11434);

return statearr_11625;
})();
if(cljs.core.truth_(inst_11435)){
var statearr_11626_12961 = state_11547__$1;
(statearr_11626_12961[(1)] = (13));

} else {
var statearr_11627_12962 = state_11547__$1;
(statearr_11627_12962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (18))){
var inst_11470 = (state_11547[(2)]);
var state_11547__$1 = state_11547;
var statearr_11628_12965 = state_11547__$1;
(statearr_11628_12965[(2)] = inst_11470);

(statearr_11628_12965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (42))){
var state_11547__$1 = state_11547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11547__$1,(45),dchan);
} else {
if((state_val_11548 === (37))){
var inst_11411 = (state_11547[(10)]);
var inst_11512 = (state_11547[(22)]);
var inst_11503 = (state_11547[(23)]);
var inst_11512__$1 = cljs.core.first(inst_11503);
var inst_11513 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11512__$1,inst_11411,done);
var state_11547__$1 = (function (){var statearr_11629 = state_11547;
(statearr_11629[(22)] = inst_11512__$1);

return statearr_11629;
})();
if(cljs.core.truth_(inst_11513)){
var statearr_11630_12969 = state_11547__$1;
(statearr_11630_12969[(1)] = (39));

} else {
var statearr_11631_12970 = state_11547__$1;
(statearr_11631_12970[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11548 === (8))){
var inst_11424 = (state_11547[(13)]);
var inst_11423 = (state_11547[(17)]);
var inst_11426 = (inst_11424 < inst_11423);
var inst_11427 = inst_11426;
var state_11547__$1 = state_11547;
if(cljs.core.truth_(inst_11427)){
var statearr_11632_12972 = state_11547__$1;
(statearr_11632_12972[(1)] = (10));

} else {
var statearr_11633_12973 = state_11547__$1;
(statearr_11633_12973[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10758__auto__ = null;
var cljs$core$async$mult_$_state_machine__10758__auto____0 = (function (){
var statearr_11634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11634[(0)] = cljs$core$async$mult_$_state_machine__10758__auto__);

(statearr_11634[(1)] = (1));

return statearr_11634;
});
var cljs$core$async$mult_$_state_machine__10758__auto____1 = (function (state_11547){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11547);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11635){var ex__10761__auto__ = e11635;
var statearr_11636_12977 = state_11547;
(statearr_11636_12977[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11547[(4)]))){
var statearr_11639_12978 = state_11547;
(statearr_11639_12978[(1)] = cljs.core.first((state_11547[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12979 = state_11547;
state_11547 = G__12979;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10758__auto__ = function(state_11547){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10758__auto____1.call(this,state_11547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10758__auto____0;
cljs$core$async$mult_$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10758__auto____1;
return cljs$core$async$mult_$_state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11640 = f__10819__auto__();
(statearr_11640[(6)] = c__10818__auto___12855);

return statearr_11640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
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
var G__11645 = arguments.length;
switch (G__11645) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12981 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12981(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12982 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12982(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12983 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12983(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12984 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12984(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12985 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12985(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12990 = arguments.length;
var i__4737__auto___12991 = (0);
while(true){
if((i__4737__auto___12991 < len__4736__auto___12990)){
args__4742__auto__.push((arguments[i__4737__auto___12991]));

var G__12992 = (i__4737__auto___12991 + (1));
i__4737__auto___12991 = G__12992;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11664){
var map__11665 = p__11664;
var map__11665__$1 = (((((!((map__11665 == null))))?(((((map__11665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11665):map__11665);
var opts = map__11665__$1;
var statearr_11668_12993 = state;
(statearr_11668_12993[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11669_12994 = state;
(statearr_11669_12994[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11670_12995 = state;
(statearr_11670_12995[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11655){
var G__11656 = cljs.core.first(seq11655);
var seq11655__$1 = cljs.core.next(seq11655);
var G__11657 = cljs.core.first(seq11655__$1);
var seq11655__$2 = cljs.core.next(seq11655__$1);
var G__11658 = cljs.core.first(seq11655__$2);
var seq11655__$3 = cljs.core.next(seq11655__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11656,G__11657,G__11658,seq11655__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11673 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11674){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11674 = meta11674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11675,meta11674__$1){
var self__ = this;
var _11675__$1 = this;
return (new cljs.core.async.t_cljs$core$async11673(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11674__$1));
}));

(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11675){
var self__ = this;
var _11675__$1 = this;
return self__.meta11674;
}));

(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11673.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11674","meta11674",-49443071,null)], null);
}));

(cljs.core.async.t_cljs$core$async11673.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11673");

(cljs.core.async.t_cljs$core$async11673.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11673");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11673.
 */
cljs.core.async.__GT_t_cljs$core$async11673 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11673(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11674){
return (new cljs.core.async.t_cljs$core$async11673(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11674));
});

}

return (new cljs.core.async.t_cljs$core$async11673(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10818__auto___12998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11790){
var state_val_11791 = (state_11790[(1)]);
if((state_val_11791 === (7))){
var inst_11697 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
var statearr_11792_12999 = state_11790__$1;
(statearr_11792_12999[(2)] = inst_11697);

(statearr_11792_12999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (20))){
var inst_11709 = (state_11790[(7)]);
var state_11790__$1 = state_11790;
var statearr_11793_13000 = state_11790__$1;
(statearr_11793_13000[(2)] = inst_11709);

(statearr_11793_13000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (27))){
var state_11790__$1 = state_11790;
var statearr_11795_13001 = state_11790__$1;
(statearr_11795_13001[(2)] = null);

(statearr_11795_13001[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (1))){
var inst_11684 = (state_11790[(8)]);
var inst_11684__$1 = calc_state();
var inst_11686 = (inst_11684__$1 == null);
var inst_11687 = cljs.core.not(inst_11686);
var state_11790__$1 = (function (){var statearr_11796 = state_11790;
(statearr_11796[(8)] = inst_11684__$1);

return statearr_11796;
})();
if(inst_11687){
var statearr_11797_13003 = state_11790__$1;
(statearr_11797_13003[(1)] = (2));

} else {
var statearr_11798_13004 = state_11790__$1;
(statearr_11798_13004[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (24))){
var inst_11742 = (state_11790[(9)]);
var inst_11733 = (state_11790[(10)]);
var inst_11764 = (state_11790[(11)]);
var inst_11764__$1 = (inst_11733.cljs$core$IFn$_invoke$arity$1 ? inst_11733.cljs$core$IFn$_invoke$arity$1(inst_11742) : inst_11733.call(null,inst_11742));
var state_11790__$1 = (function (){var statearr_11799 = state_11790;
(statearr_11799[(11)] = inst_11764__$1);

return statearr_11799;
})();
if(cljs.core.truth_(inst_11764__$1)){
var statearr_11800_13006 = state_11790__$1;
(statearr_11800_13006[(1)] = (29));

} else {
var statearr_11801_13007 = state_11790__$1;
(statearr_11801_13007[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (4))){
var inst_11700 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
if(cljs.core.truth_(inst_11700)){
var statearr_11802_13008 = state_11790__$1;
(statearr_11802_13008[(1)] = (8));

} else {
var statearr_11803_13009 = state_11790__$1;
(statearr_11803_13009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (15))){
var inst_11727 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
if(cljs.core.truth_(inst_11727)){
var statearr_11804_13010 = state_11790__$1;
(statearr_11804_13010[(1)] = (19));

} else {
var statearr_11805_13011 = state_11790__$1;
(statearr_11805_13011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (21))){
var inst_11732 = (state_11790[(12)]);
var inst_11732__$1 = (state_11790[(2)]);
var inst_11733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11732__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11732__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11732__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11790__$1 = (function (){var statearr_11806 = state_11790;
(statearr_11806[(12)] = inst_11732__$1);

(statearr_11806[(13)] = inst_11734);

(statearr_11806[(10)] = inst_11733);

return statearr_11806;
})();
return cljs.core.async.ioc_alts_BANG_(state_11790__$1,(22),inst_11735);
} else {
if((state_val_11791 === (31))){
var inst_11772 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
if(cljs.core.truth_(inst_11772)){
var statearr_11807_13013 = state_11790__$1;
(statearr_11807_13013[(1)] = (32));

} else {
var statearr_11808_13014 = state_11790__$1;
(statearr_11808_13014[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (32))){
var inst_11741 = (state_11790[(14)]);
var state_11790__$1 = state_11790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11790__$1,(35),out,inst_11741);
} else {
if((state_val_11791 === (33))){
var inst_11732 = (state_11790[(12)]);
var inst_11709 = inst_11732;
var state_11790__$1 = (function (){var statearr_11809 = state_11790;
(statearr_11809[(7)] = inst_11709);

return statearr_11809;
})();
var statearr_11810_13015 = state_11790__$1;
(statearr_11810_13015[(2)] = null);

(statearr_11810_13015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (13))){
var inst_11709 = (state_11790[(7)]);
var inst_11716 = inst_11709.cljs$lang$protocol_mask$partition0$;
var inst_11717 = (inst_11716 & (64));
var inst_11718 = inst_11709.cljs$core$ISeq$;
var inst_11719 = (cljs.core.PROTOCOL_SENTINEL === inst_11718);
var inst_11720 = ((inst_11717) || (inst_11719));
var state_11790__$1 = state_11790;
if(cljs.core.truth_(inst_11720)){
var statearr_11811_13016 = state_11790__$1;
(statearr_11811_13016[(1)] = (16));

} else {
var statearr_11812_13017 = state_11790__$1;
(statearr_11812_13017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (22))){
var inst_11742 = (state_11790[(9)]);
var inst_11741 = (state_11790[(14)]);
var inst_11740 = (state_11790[(2)]);
var inst_11741__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11740,(0),null);
var inst_11742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11740,(1),null);
var inst_11743 = (inst_11741__$1 == null);
var inst_11744 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11742__$1,change);
var inst_11745 = ((inst_11743) || (inst_11744));
var state_11790__$1 = (function (){var statearr_11813 = state_11790;
(statearr_11813[(9)] = inst_11742__$1);

(statearr_11813[(14)] = inst_11741__$1);

return statearr_11813;
})();
if(cljs.core.truth_(inst_11745)){
var statearr_11814_13018 = state_11790__$1;
(statearr_11814_13018[(1)] = (23));

} else {
var statearr_11815_13019 = state_11790__$1;
(statearr_11815_13019[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (36))){
var inst_11732 = (state_11790[(12)]);
var inst_11709 = inst_11732;
var state_11790__$1 = (function (){var statearr_11816 = state_11790;
(statearr_11816[(7)] = inst_11709);

return statearr_11816;
})();
var statearr_11817_13020 = state_11790__$1;
(statearr_11817_13020[(2)] = null);

(statearr_11817_13020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (29))){
var inst_11764 = (state_11790[(11)]);
var state_11790__$1 = state_11790;
var statearr_11818_13021 = state_11790__$1;
(statearr_11818_13021[(2)] = inst_11764);

(statearr_11818_13021[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (6))){
var state_11790__$1 = state_11790;
var statearr_11819_13022 = state_11790__$1;
(statearr_11819_13022[(2)] = false);

(statearr_11819_13022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (28))){
var inst_11752 = (state_11790[(2)]);
var inst_11761 = calc_state();
var inst_11709 = inst_11761;
var state_11790__$1 = (function (){var statearr_11820 = state_11790;
(statearr_11820[(7)] = inst_11709);

(statearr_11820[(15)] = inst_11752);

return statearr_11820;
})();
var statearr_11821_13023 = state_11790__$1;
(statearr_11821_13023[(2)] = null);

(statearr_11821_13023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (25))){
var inst_11786 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
var statearr_11822_13024 = state_11790__$1;
(statearr_11822_13024[(2)] = inst_11786);

(statearr_11822_13024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (34))){
var inst_11784 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
var statearr_11823_13025 = state_11790__$1;
(statearr_11823_13025[(2)] = inst_11784);

(statearr_11823_13025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (17))){
var state_11790__$1 = state_11790;
var statearr_11824_13027 = state_11790__$1;
(statearr_11824_13027[(2)] = false);

(statearr_11824_13027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (3))){
var state_11790__$1 = state_11790;
var statearr_11825_13028 = state_11790__$1;
(statearr_11825_13028[(2)] = false);

(statearr_11825_13028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (12))){
var inst_11788 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11790__$1,inst_11788);
} else {
if((state_val_11791 === (2))){
var inst_11684 = (state_11790[(8)]);
var inst_11689 = inst_11684.cljs$lang$protocol_mask$partition0$;
var inst_11690 = (inst_11689 & (64));
var inst_11691 = inst_11684.cljs$core$ISeq$;
var inst_11692 = (cljs.core.PROTOCOL_SENTINEL === inst_11691);
var inst_11693 = ((inst_11690) || (inst_11692));
var state_11790__$1 = state_11790;
if(cljs.core.truth_(inst_11693)){
var statearr_11826_13029 = state_11790__$1;
(statearr_11826_13029[(1)] = (5));

} else {
var statearr_11827_13030 = state_11790__$1;
(statearr_11827_13030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (23))){
var inst_11741 = (state_11790[(14)]);
var inst_11747 = (inst_11741 == null);
var state_11790__$1 = state_11790;
if(cljs.core.truth_(inst_11747)){
var statearr_11828_13031 = state_11790__$1;
(statearr_11828_13031[(1)] = (26));

} else {
var statearr_11829_13032 = state_11790__$1;
(statearr_11829_13032[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (35))){
var inst_11775 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
if(cljs.core.truth_(inst_11775)){
var statearr_11830_13034 = state_11790__$1;
(statearr_11830_13034[(1)] = (36));

} else {
var statearr_11831_13035 = state_11790__$1;
(statearr_11831_13035[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (19))){
var inst_11709 = (state_11790[(7)]);
var inst_11729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11709);
var state_11790__$1 = state_11790;
var statearr_11833_13036 = state_11790__$1;
(statearr_11833_13036[(2)] = inst_11729);

(statearr_11833_13036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (11))){
var inst_11709 = (state_11790[(7)]);
var inst_11713 = (inst_11709 == null);
var inst_11714 = cljs.core.not(inst_11713);
var state_11790__$1 = state_11790;
if(inst_11714){
var statearr_11834_13037 = state_11790__$1;
(statearr_11834_13037[(1)] = (13));

} else {
var statearr_11835_13038 = state_11790__$1;
(statearr_11835_13038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (9))){
var inst_11684 = (state_11790[(8)]);
var state_11790__$1 = state_11790;
var statearr_11836_13039 = state_11790__$1;
(statearr_11836_13039[(2)] = inst_11684);

(statearr_11836_13039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (5))){
var state_11790__$1 = state_11790;
var statearr_11837_13040 = state_11790__$1;
(statearr_11837_13040[(2)] = true);

(statearr_11837_13040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (14))){
var state_11790__$1 = state_11790;
var statearr_11838_13041 = state_11790__$1;
(statearr_11838_13041[(2)] = false);

(statearr_11838_13041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (26))){
var inst_11742 = (state_11790[(9)]);
var inst_11749 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11742);
var state_11790__$1 = state_11790;
var statearr_11839_13042 = state_11790__$1;
(statearr_11839_13042[(2)] = inst_11749);

(statearr_11839_13042[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (16))){
var state_11790__$1 = state_11790;
var statearr_11840_13043 = state_11790__$1;
(statearr_11840_13043[(2)] = true);

(statearr_11840_13043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (38))){
var inst_11780 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
var statearr_11841_13044 = state_11790__$1;
(statearr_11841_13044[(2)] = inst_11780);

(statearr_11841_13044[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (30))){
var inst_11734 = (state_11790[(13)]);
var inst_11742 = (state_11790[(9)]);
var inst_11733 = (state_11790[(10)]);
var inst_11767 = cljs.core.empty_QMARK_(inst_11733);
var inst_11768 = (inst_11734.cljs$core$IFn$_invoke$arity$1 ? inst_11734.cljs$core$IFn$_invoke$arity$1(inst_11742) : inst_11734.call(null,inst_11742));
var inst_11769 = cljs.core.not(inst_11768);
var inst_11770 = ((inst_11767) && (inst_11769));
var state_11790__$1 = state_11790;
var statearr_11842_13045 = state_11790__$1;
(statearr_11842_13045[(2)] = inst_11770);

(statearr_11842_13045[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (10))){
var inst_11684 = (state_11790[(8)]);
var inst_11705 = (state_11790[(2)]);
var inst_11706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11705,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11705,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11705,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11709 = inst_11684;
var state_11790__$1 = (function (){var statearr_11843 = state_11790;
(statearr_11843[(16)] = inst_11706);

(statearr_11843[(7)] = inst_11709);

(statearr_11843[(17)] = inst_11708);

(statearr_11843[(18)] = inst_11707);

return statearr_11843;
})();
var statearr_11844_13046 = state_11790__$1;
(statearr_11844_13046[(2)] = null);

(statearr_11844_13046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (18))){
var inst_11724 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
var statearr_11845_13047 = state_11790__$1;
(statearr_11845_13047[(2)] = inst_11724);

(statearr_11845_13047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (37))){
var state_11790__$1 = state_11790;
var statearr_11846_13048 = state_11790__$1;
(statearr_11846_13048[(2)] = null);

(statearr_11846_13048[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (8))){
var inst_11684 = (state_11790[(8)]);
var inst_11702 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11684);
var state_11790__$1 = state_11790;
var statearr_11847_13049 = state_11790__$1;
(statearr_11847_13049[(2)] = inst_11702);

(statearr_11847_13049[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10758__auto__ = null;
var cljs$core$async$mix_$_state_machine__10758__auto____0 = (function (){
var statearr_11849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11849[(0)] = cljs$core$async$mix_$_state_machine__10758__auto__);

(statearr_11849[(1)] = (1));

return statearr_11849;
});
var cljs$core$async$mix_$_state_machine__10758__auto____1 = (function (state_11790){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11790);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11850){var ex__10761__auto__ = e11850;
var statearr_11851_13050 = state_11790;
(statearr_11851_13050[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11790[(4)]))){
var statearr_11853_13051 = state_11790;
(statearr_11853_13051[(1)] = cljs.core.first((state_11790[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13052 = state_11790;
state_11790 = G__13052;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10758__auto__ = function(state_11790){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10758__auto____1.call(this,state_11790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10758__auto____0;
cljs$core$async$mix_$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10758__auto____1;
return cljs$core$async$mix_$_state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_11855 = f__10819__auto__();
(statearr_11855[(6)] = c__10818__auto___12998);

return statearr_11855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13054 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13054(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13055 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13055(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13056 = (function() {
var G__13057 = null;
var G__13057__1 = (function (p){
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
var G__13057__2 = (function (p,v){
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
G__13057 = function(p,v){
switch(arguments.length){
case 1:
return G__13057__1.call(this,p);
case 2:
return G__13057__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13057.cljs$core$IFn$_invoke$arity$1 = G__13057__1;
G__13057.cljs$core$IFn$_invoke$arity$2 = G__13057__2;
return G__13057;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11863 = arguments.length;
switch (G__11863) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13056(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13056(p,v);
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
var G__11866 = arguments.length;
switch (G__11866) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11864_SHARP_){
if(cljs.core.truth_((p1__11864_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11864_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11864_SHARP_.call(null,topic)))){
return p1__11864_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11864_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11868 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11869){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11869 = meta11869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11870,meta11869__$1){
var self__ = this;
var _11870__$1 = this;
return (new cljs.core.async.t_cljs$core$async11868(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11869__$1));
}));

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11870){
var self__ = this;
var _11870__$1 = this;
return self__.meta11869;
}));

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11869","meta11869",541851180,null)], null);
}));

(cljs.core.async.t_cljs$core$async11868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11868");

(cljs.core.async.t_cljs$core$async11868.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11868.
 */
cljs.core.async.__GT_t_cljs$core$async11868 = (function cljs$core$async$__GT_t_cljs$core$async11868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11869){
return (new cljs.core.async.t_cljs$core$async11868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11869));
});

}

return (new cljs.core.async.t_cljs$core$async11868(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10818__auto___13062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_11944){
var state_val_11945 = (state_11944[(1)]);
if((state_val_11945 === (7))){
var inst_11940 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
var statearr_11946_13063 = state_11944__$1;
(statearr_11946_13063[(2)] = inst_11940);

(statearr_11946_13063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (20))){
var state_11944__$1 = state_11944;
var statearr_11947_13064 = state_11944__$1;
(statearr_11947_13064[(2)] = null);

(statearr_11947_13064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (1))){
var state_11944__$1 = state_11944;
var statearr_11948_13065 = state_11944__$1;
(statearr_11948_13065[(2)] = null);

(statearr_11948_13065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (24))){
var inst_11922 = (state_11944[(7)]);
var inst_11932 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11922);
var state_11944__$1 = state_11944;
var statearr_11949_13066 = state_11944__$1;
(statearr_11949_13066[(2)] = inst_11932);

(statearr_11949_13066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (4))){
var inst_11873 = (state_11944[(8)]);
var inst_11873__$1 = (state_11944[(2)]);
var inst_11874 = (inst_11873__$1 == null);
var state_11944__$1 = (function (){var statearr_11950 = state_11944;
(statearr_11950[(8)] = inst_11873__$1);

return statearr_11950;
})();
if(cljs.core.truth_(inst_11874)){
var statearr_11951_13067 = state_11944__$1;
(statearr_11951_13067[(1)] = (5));

} else {
var statearr_11952_13068 = state_11944__$1;
(statearr_11952_13068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (15))){
var inst_11916 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
var statearr_11953_13070 = state_11944__$1;
(statearr_11953_13070[(2)] = inst_11916);

(statearr_11953_13070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (21))){
var inst_11937 = (state_11944[(2)]);
var state_11944__$1 = (function (){var statearr_11954 = state_11944;
(statearr_11954[(9)] = inst_11937);

return statearr_11954;
})();
var statearr_11955_13071 = state_11944__$1;
(statearr_11955_13071[(2)] = null);

(statearr_11955_13071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (13))){
var inst_11897 = (state_11944[(10)]);
var inst_11899 = cljs.core.chunked_seq_QMARK_(inst_11897);
var state_11944__$1 = state_11944;
if(inst_11899){
var statearr_11956_13072 = state_11944__$1;
(statearr_11956_13072[(1)] = (16));

} else {
var statearr_11957_13073 = state_11944__$1;
(statearr_11957_13073[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (22))){
var inst_11929 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
if(cljs.core.truth_(inst_11929)){
var statearr_11958_13074 = state_11944__$1;
(statearr_11958_13074[(1)] = (23));

} else {
var statearr_11959_13075 = state_11944__$1;
(statearr_11959_13075[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (6))){
var inst_11873 = (state_11944[(8)]);
var inst_11922 = (state_11944[(7)]);
var inst_11924 = (state_11944[(11)]);
var inst_11922__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11873) : topic_fn.call(null,inst_11873));
var inst_11923 = cljs.core.deref(mults);
var inst_11924__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11923,inst_11922__$1);
var state_11944__$1 = (function (){var statearr_11960 = state_11944;
(statearr_11960[(7)] = inst_11922__$1);

(statearr_11960[(11)] = inst_11924__$1);

return statearr_11960;
})();
if(cljs.core.truth_(inst_11924__$1)){
var statearr_11961_13076 = state_11944__$1;
(statearr_11961_13076[(1)] = (19));

} else {
var statearr_11962_13077 = state_11944__$1;
(statearr_11962_13077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (25))){
var inst_11934 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
var statearr_11963_13078 = state_11944__$1;
(statearr_11963_13078[(2)] = inst_11934);

(statearr_11963_13078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (17))){
var inst_11897 = (state_11944[(10)]);
var inst_11907 = cljs.core.first(inst_11897);
var inst_11908 = cljs.core.async.muxch_STAR_(inst_11907);
var inst_11909 = cljs.core.async.close_BANG_(inst_11908);
var inst_11910 = cljs.core.next(inst_11897);
var inst_11883 = inst_11910;
var inst_11884 = null;
var inst_11885 = (0);
var inst_11886 = (0);
var state_11944__$1 = (function (){var statearr_11964 = state_11944;
(statearr_11964[(12)] = inst_11884);

(statearr_11964[(13)] = inst_11909);

(statearr_11964[(14)] = inst_11885);

(statearr_11964[(15)] = inst_11886);

(statearr_11964[(16)] = inst_11883);

return statearr_11964;
})();
var statearr_11965_13079 = state_11944__$1;
(statearr_11965_13079[(2)] = null);

(statearr_11965_13079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (3))){
var inst_11942 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11944__$1,inst_11942);
} else {
if((state_val_11945 === (12))){
var inst_11918 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
var statearr_11966_13080 = state_11944__$1;
(statearr_11966_13080[(2)] = inst_11918);

(statearr_11966_13080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (2))){
var state_11944__$1 = state_11944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11944__$1,(4),ch);
} else {
if((state_val_11945 === (23))){
var state_11944__$1 = state_11944;
var statearr_11967_13081 = state_11944__$1;
(statearr_11967_13081[(2)] = null);

(statearr_11967_13081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (19))){
var inst_11873 = (state_11944[(8)]);
var inst_11924 = (state_11944[(11)]);
var inst_11927 = cljs.core.async.muxch_STAR_(inst_11924);
var state_11944__$1 = state_11944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11944__$1,(22),inst_11927,inst_11873);
} else {
if((state_val_11945 === (11))){
var inst_11897 = (state_11944[(10)]);
var inst_11883 = (state_11944[(16)]);
var inst_11897__$1 = cljs.core.seq(inst_11883);
var state_11944__$1 = (function (){var statearr_11968 = state_11944;
(statearr_11968[(10)] = inst_11897__$1);

return statearr_11968;
})();
if(inst_11897__$1){
var statearr_11969_13082 = state_11944__$1;
(statearr_11969_13082[(1)] = (13));

} else {
var statearr_11970_13083 = state_11944__$1;
(statearr_11970_13083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (9))){
var inst_11920 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
var statearr_11971_13084 = state_11944__$1;
(statearr_11971_13084[(2)] = inst_11920);

(statearr_11971_13084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (5))){
var inst_11880 = cljs.core.deref(mults);
var inst_11881 = cljs.core.vals(inst_11880);
var inst_11882 = cljs.core.seq(inst_11881);
var inst_11883 = inst_11882;
var inst_11884 = null;
var inst_11885 = (0);
var inst_11886 = (0);
var state_11944__$1 = (function (){var statearr_11972 = state_11944;
(statearr_11972[(12)] = inst_11884);

(statearr_11972[(14)] = inst_11885);

(statearr_11972[(15)] = inst_11886);

(statearr_11972[(16)] = inst_11883);

return statearr_11972;
})();
var statearr_11973_13085 = state_11944__$1;
(statearr_11973_13085[(2)] = null);

(statearr_11973_13085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (14))){
var state_11944__$1 = state_11944;
var statearr_11977_13086 = state_11944__$1;
(statearr_11977_13086[(2)] = null);

(statearr_11977_13086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (16))){
var inst_11897 = (state_11944[(10)]);
var inst_11901 = cljs.core.chunk_first(inst_11897);
var inst_11902 = cljs.core.chunk_rest(inst_11897);
var inst_11903 = cljs.core.count(inst_11901);
var inst_11883 = inst_11902;
var inst_11884 = inst_11901;
var inst_11885 = inst_11903;
var inst_11886 = (0);
var state_11944__$1 = (function (){var statearr_11978 = state_11944;
(statearr_11978[(12)] = inst_11884);

(statearr_11978[(14)] = inst_11885);

(statearr_11978[(15)] = inst_11886);

(statearr_11978[(16)] = inst_11883);

return statearr_11978;
})();
var statearr_11979_13087 = state_11944__$1;
(statearr_11979_13087[(2)] = null);

(statearr_11979_13087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (10))){
var inst_11884 = (state_11944[(12)]);
var inst_11885 = (state_11944[(14)]);
var inst_11886 = (state_11944[(15)]);
var inst_11883 = (state_11944[(16)]);
var inst_11891 = cljs.core._nth(inst_11884,inst_11886);
var inst_11892 = cljs.core.async.muxch_STAR_(inst_11891);
var inst_11893 = cljs.core.async.close_BANG_(inst_11892);
var inst_11894 = (inst_11886 + (1));
var tmp11974 = inst_11884;
var tmp11975 = inst_11885;
var tmp11976 = inst_11883;
var inst_11883__$1 = tmp11976;
var inst_11884__$1 = tmp11974;
var inst_11885__$1 = tmp11975;
var inst_11886__$1 = inst_11894;
var state_11944__$1 = (function (){var statearr_11980 = state_11944;
(statearr_11980[(12)] = inst_11884__$1);

(statearr_11980[(14)] = inst_11885__$1);

(statearr_11980[(15)] = inst_11886__$1);

(statearr_11980[(17)] = inst_11893);

(statearr_11980[(16)] = inst_11883__$1);

return statearr_11980;
})();
var statearr_11981_13088 = state_11944__$1;
(statearr_11981_13088[(2)] = null);

(statearr_11981_13088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (18))){
var inst_11913 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
var statearr_11982_13089 = state_11944__$1;
(statearr_11982_13089[(2)] = inst_11913);

(statearr_11982_13089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (8))){
var inst_11885 = (state_11944[(14)]);
var inst_11886 = (state_11944[(15)]);
var inst_11888 = (inst_11886 < inst_11885);
var inst_11889 = inst_11888;
var state_11944__$1 = state_11944;
if(cljs.core.truth_(inst_11889)){
var statearr_11987_13090 = state_11944__$1;
(statearr_11987_13090[(1)] = (10));

} else {
var statearr_11988_13091 = state_11944__$1;
(statearr_11988_13091[(1)] = (11));

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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_11993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11993[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_11993[(1)] = (1));

return statearr_11993;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_11944){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_11944);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e11998){var ex__10761__auto__ = e11998;
var statearr_11999_13093 = state_11944;
(statearr_11999_13093[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_11944[(4)]))){
var statearr_12000_13094 = state_11944;
(statearr_12000_13094[(1)] = cljs.core.first((state_11944[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13096 = state_11944;
state_11944 = G__13096;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_11944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_11944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_12001 = f__10819__auto__();
(statearr_12001[(6)] = c__10818__auto___13062);

return statearr_12001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
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
var G__12003 = arguments.length;
switch (G__12003) {
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
var G__12005 = arguments.length;
switch (G__12005) {
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
var G__12007 = arguments.length;
switch (G__12007) {
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
var c__10818__auto___13102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_12057){
var state_val_12058 = (state_12057[(1)]);
if((state_val_12058 === (7))){
var state_12057__$1 = state_12057;
var statearr_12059_13111 = state_12057__$1;
(statearr_12059_13111[(2)] = null);

(statearr_12059_13111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (1))){
var state_12057__$1 = state_12057;
var statearr_12060_13113 = state_12057__$1;
(statearr_12060_13113[(2)] = null);

(statearr_12060_13113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (4))){
var inst_12013 = (state_12057[(7)]);
var inst_12012 = (state_12057[(8)]);
var inst_12015 = (inst_12013 < inst_12012);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12015)){
var statearr_12061_13116 = state_12057__$1;
(statearr_12061_13116[(1)] = (6));

} else {
var statearr_12062_13118 = state_12057__$1;
(statearr_12062_13118[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (15))){
var inst_12043 = (state_12057[(9)]);
var inst_12048 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12043);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12057__$1,(17),out,inst_12048);
} else {
if((state_val_12058 === (13))){
var inst_12043 = (state_12057[(9)]);
var inst_12043__$1 = (state_12057[(2)]);
var inst_12044 = cljs.core.some(cljs.core.nil_QMARK_,inst_12043__$1);
var state_12057__$1 = (function (){var statearr_12063 = state_12057;
(statearr_12063[(9)] = inst_12043__$1);

return statearr_12063;
})();
if(cljs.core.truth_(inst_12044)){
var statearr_12064_13119 = state_12057__$1;
(statearr_12064_13119[(1)] = (14));

} else {
var statearr_12065_13120 = state_12057__$1;
(statearr_12065_13120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (6))){
var state_12057__$1 = state_12057;
var statearr_12066_13121 = state_12057__$1;
(statearr_12066_13121[(2)] = null);

(statearr_12066_13121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (17))){
var inst_12050 = (state_12057[(2)]);
var state_12057__$1 = (function (){var statearr_12068 = state_12057;
(statearr_12068[(10)] = inst_12050);

return statearr_12068;
})();
var statearr_12069_13123 = state_12057__$1;
(statearr_12069_13123[(2)] = null);

(statearr_12069_13123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (3))){
var inst_12055 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12057__$1,inst_12055);
} else {
if((state_val_12058 === (12))){
var _ = (function (){var statearr_12070 = state_12057;
(statearr_12070[(4)] = cljs.core.rest((state_12057[(4)])));

return statearr_12070;
})();
var state_12057__$1 = state_12057;
var ex12067 = (state_12057__$1[(2)]);
var statearr_12071_13126 = state_12057__$1;
(statearr_12071_13126[(5)] = ex12067);


if((ex12067 instanceof Object)){
var statearr_12072_13129 = state_12057__$1;
(statearr_12072_13129[(1)] = (11));

(statearr_12072_13129[(5)] = null);

} else {
throw ex12067;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (2))){
var inst_12011 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12012 = cnt;
var inst_12013 = (0);
var state_12057__$1 = (function (){var statearr_12076 = state_12057;
(statearr_12076[(7)] = inst_12013);

(statearr_12076[(11)] = inst_12011);

(statearr_12076[(8)] = inst_12012);

return statearr_12076;
})();
var statearr_12077_13131 = state_12057__$1;
(statearr_12077_13131[(2)] = null);

(statearr_12077_13131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (11))){
var inst_12018 = (state_12057[(2)]);
var inst_12019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12057__$1 = (function (){var statearr_12078 = state_12057;
(statearr_12078[(12)] = inst_12018);

return statearr_12078;
})();
var statearr_12079_13132 = state_12057__$1;
(statearr_12079_13132[(2)] = inst_12019);

(statearr_12079_13132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (9))){
var inst_12013 = (state_12057[(7)]);
var _ = (function (){var statearr_12080 = state_12057;
(statearr_12080[(4)] = cljs.core.cons((12),(state_12057[(4)])));

return statearr_12080;
})();
var inst_12027 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12013) : chs__$1.call(null,inst_12013));
var inst_12028 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12013) : done.call(null,inst_12013));
var inst_12029 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12027,inst_12028);
var ___$1 = (function (){var statearr_12081 = state_12057;
(statearr_12081[(4)] = cljs.core.rest((state_12057[(4)])));

return statearr_12081;
})();
var state_12057__$1 = state_12057;
var statearr_12082_13145 = state_12057__$1;
(statearr_12082_13145[(2)] = inst_12029);

(statearr_12082_13145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (5))){
var inst_12039 = (state_12057[(2)]);
var state_12057__$1 = (function (){var statearr_12087 = state_12057;
(statearr_12087[(13)] = inst_12039);

return statearr_12087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12057__$1,(13),dchan);
} else {
if((state_val_12058 === (14))){
var inst_12046 = cljs.core.async.close_BANG_(out);
var state_12057__$1 = state_12057;
var statearr_12089_13149 = state_12057__$1;
(statearr_12089_13149[(2)] = inst_12046);

(statearr_12089_13149[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (16))){
var inst_12053 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12094_13151 = state_12057__$1;
(statearr_12094_13151[(2)] = inst_12053);

(statearr_12094_13151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (10))){
var inst_12013 = (state_12057[(7)]);
var inst_12032 = (state_12057[(2)]);
var inst_12033 = (inst_12013 + (1));
var inst_12013__$1 = inst_12033;
var state_12057__$1 = (function (){var statearr_12096 = state_12057;
(statearr_12096[(7)] = inst_12013__$1);

(statearr_12096[(14)] = inst_12032);

return statearr_12096;
})();
var statearr_12098_13152 = state_12057__$1;
(statearr_12098_13152[(2)] = null);

(statearr_12098_13152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (8))){
var inst_12037 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12099_13153 = state_12057__$1;
(statearr_12099_13153[(2)] = inst_12037);

(statearr_12099_13153[(1)] = (5));


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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_12100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12100[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_12100[(1)] = (1));

return statearr_12100;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_12057){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_12057);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e12101){var ex__10761__auto__ = e12101;
var statearr_12102_13154 = state_12057;
(statearr_12102_13154[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_12057[(4)]))){
var statearr_12103_13155 = state_12057;
(statearr_12103_13155[(1)] = cljs.core.first((state_12057[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13156 = state_12057;
state_12057 = G__13156;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_12057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_12057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_12104 = f__10819__auto__();
(statearr_12104[(6)] = c__10818__auto___13102);

return statearr_12104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
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
var G__12107 = arguments.length;
switch (G__12107) {
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
var c__10818__auto___13158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_12145){
var state_val_12146 = (state_12145[(1)]);
if((state_val_12146 === (7))){
var inst_12125 = (state_12145[(7)]);
var inst_12124 = (state_12145[(8)]);
var inst_12124__$1 = (state_12145[(2)]);
var inst_12125__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12124__$1,(0),null);
var inst_12126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12124__$1,(1),null);
var inst_12127 = (inst_12125__$1 == null);
var state_12145__$1 = (function (){var statearr_12149 = state_12145;
(statearr_12149[(7)] = inst_12125__$1);

(statearr_12149[(9)] = inst_12126);

(statearr_12149[(8)] = inst_12124__$1);

return statearr_12149;
})();
if(cljs.core.truth_(inst_12127)){
var statearr_12150_13159 = state_12145__$1;
(statearr_12150_13159[(1)] = (8));

} else {
var statearr_12151_13160 = state_12145__$1;
(statearr_12151_13160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (1))){
var inst_12114 = cljs.core.vec(chs);
var inst_12115 = inst_12114;
var state_12145__$1 = (function (){var statearr_12152 = state_12145;
(statearr_12152[(10)] = inst_12115);

return statearr_12152;
})();
var statearr_12153_13161 = state_12145__$1;
(statearr_12153_13161[(2)] = null);

(statearr_12153_13161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (4))){
var inst_12115 = (state_12145[(10)]);
var state_12145__$1 = state_12145;
return cljs.core.async.ioc_alts_BANG_(state_12145__$1,(7),inst_12115);
} else {
if((state_val_12146 === (6))){
var inst_12141 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12154_13167 = state_12145__$1;
(statearr_12154_13167[(2)] = inst_12141);

(statearr_12154_13167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (3))){
var inst_12143 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12145__$1,inst_12143);
} else {
if((state_val_12146 === (2))){
var inst_12115 = (state_12145[(10)]);
var inst_12117 = cljs.core.count(inst_12115);
var inst_12118 = (inst_12117 > (0));
var state_12145__$1 = state_12145;
if(cljs.core.truth_(inst_12118)){
var statearr_12157_13173 = state_12145__$1;
(statearr_12157_13173[(1)] = (4));

} else {
var statearr_12159_13174 = state_12145__$1;
(statearr_12159_13174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (11))){
var inst_12115 = (state_12145[(10)]);
var inst_12134 = (state_12145[(2)]);
var tmp12155 = inst_12115;
var inst_12115__$1 = tmp12155;
var state_12145__$1 = (function (){var statearr_12160 = state_12145;
(statearr_12160[(10)] = inst_12115__$1);

(statearr_12160[(11)] = inst_12134);

return statearr_12160;
})();
var statearr_12161_13193 = state_12145__$1;
(statearr_12161_13193[(2)] = null);

(statearr_12161_13193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (9))){
var inst_12125 = (state_12145[(7)]);
var state_12145__$1 = state_12145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12145__$1,(11),out,inst_12125);
} else {
if((state_val_12146 === (5))){
var inst_12139 = cljs.core.async.close_BANG_(out);
var state_12145__$1 = state_12145;
var statearr_12162_13194 = state_12145__$1;
(statearr_12162_13194[(2)] = inst_12139);

(statearr_12162_13194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (10))){
var inst_12137 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12163_13195 = state_12145__$1;
(statearr_12163_13195[(2)] = inst_12137);

(statearr_12163_13195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (8))){
var inst_12115 = (state_12145[(10)]);
var inst_12125 = (state_12145[(7)]);
var inst_12126 = (state_12145[(9)]);
var inst_12124 = (state_12145[(8)]);
var inst_12129 = (function (){var cs = inst_12115;
var vec__12120 = inst_12124;
var v = inst_12125;
var c = inst_12126;
return (function (p1__12105_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12105_SHARP_);
});
})();
var inst_12130 = cljs.core.filterv(inst_12129,inst_12115);
var inst_12115__$1 = inst_12130;
var state_12145__$1 = (function (){var statearr_12164 = state_12145;
(statearr_12164[(10)] = inst_12115__$1);

return statearr_12164;
})();
var statearr_12165_13197 = state_12145__$1;
(statearr_12165_13197[(2)] = null);

(statearr_12165_13197[(1)] = (2));


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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_12166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12166[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_12166[(1)] = (1));

return statearr_12166;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_12145){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_12145);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e12167){var ex__10761__auto__ = e12167;
var statearr_12168_13198 = state_12145;
(statearr_12168_13198[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_12145[(4)]))){
var statearr_12169_13199 = state_12145;
(statearr_12169_13199[(1)] = cljs.core.first((state_12145[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13200 = state_12145;
state_12145 = G__13200;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_12145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_12145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_12170 = f__10819__auto__();
(statearr_12170[(6)] = c__10818__auto___13158);

return statearr_12170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
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
var G__12172 = arguments.length;
switch (G__12172) {
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
var c__10818__auto___13206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_12196){
var state_val_12197 = (state_12196[(1)]);
if((state_val_12197 === (7))){
var inst_12178 = (state_12196[(7)]);
var inst_12178__$1 = (state_12196[(2)]);
var inst_12179 = (inst_12178__$1 == null);
var inst_12180 = cljs.core.not(inst_12179);
var state_12196__$1 = (function (){var statearr_12200 = state_12196;
(statearr_12200[(7)] = inst_12178__$1);

return statearr_12200;
})();
if(inst_12180){
var statearr_12201_13215 = state_12196__$1;
(statearr_12201_13215[(1)] = (8));

} else {
var statearr_12202_13216 = state_12196__$1;
(statearr_12202_13216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12197 === (1))){
var inst_12173 = (0);
var state_12196__$1 = (function (){var statearr_12203 = state_12196;
(statearr_12203[(8)] = inst_12173);

return statearr_12203;
})();
var statearr_12204_13232 = state_12196__$1;
(statearr_12204_13232[(2)] = null);

(statearr_12204_13232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12197 === (4))){
var state_12196__$1 = state_12196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12196__$1,(7),ch);
} else {
if((state_val_12197 === (6))){
var inst_12191 = (state_12196[(2)]);
var state_12196__$1 = state_12196;
var statearr_12206_13236 = state_12196__$1;
(statearr_12206_13236[(2)] = inst_12191);

(statearr_12206_13236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12197 === (3))){
var inst_12193 = (state_12196[(2)]);
var inst_12194 = cljs.core.async.close_BANG_(out);
var state_12196__$1 = (function (){var statearr_12210 = state_12196;
(statearr_12210[(9)] = inst_12193);

return statearr_12210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12196__$1,inst_12194);
} else {
if((state_val_12197 === (2))){
var inst_12173 = (state_12196[(8)]);
var inst_12175 = (inst_12173 < n);
var state_12196__$1 = state_12196;
if(cljs.core.truth_(inst_12175)){
var statearr_12211_13238 = state_12196__$1;
(statearr_12211_13238[(1)] = (4));

} else {
var statearr_12212_13240 = state_12196__$1;
(statearr_12212_13240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12197 === (11))){
var inst_12173 = (state_12196[(8)]);
var inst_12183 = (state_12196[(2)]);
var inst_12184 = (inst_12173 + (1));
var inst_12173__$1 = inst_12184;
var state_12196__$1 = (function (){var statearr_12213 = state_12196;
(statearr_12213[(8)] = inst_12173__$1);

(statearr_12213[(10)] = inst_12183);

return statearr_12213;
})();
var statearr_12214_13242 = state_12196__$1;
(statearr_12214_13242[(2)] = null);

(statearr_12214_13242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12197 === (9))){
var state_12196__$1 = state_12196;
var statearr_12215_13243 = state_12196__$1;
(statearr_12215_13243[(2)] = null);

(statearr_12215_13243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12197 === (5))){
var state_12196__$1 = state_12196;
var statearr_12216_13246 = state_12196__$1;
(statearr_12216_13246[(2)] = null);

(statearr_12216_13246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12197 === (10))){
var inst_12188 = (state_12196[(2)]);
var state_12196__$1 = state_12196;
var statearr_12217_13248 = state_12196__$1;
(statearr_12217_13248[(2)] = inst_12188);

(statearr_12217_13248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12197 === (8))){
var inst_12178 = (state_12196[(7)]);
var state_12196__$1 = state_12196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12196__$1,(11),out,inst_12178);
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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_12218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12218[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_12218[(1)] = (1));

return statearr_12218;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_12196){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_12196);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e12219){var ex__10761__auto__ = e12219;
var statearr_12220_13249 = state_12196;
(statearr_12220_13249[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_12196[(4)]))){
var statearr_12221_13250 = state_12196;
(statearr_12221_13250[(1)] = cljs.core.first((state_12196[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13251 = state_12196;
state_12196 = G__13251;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_12196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_12196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_12222 = f__10819__auto__();
(statearr_12222[(6)] = c__10818__auto___13206);

return statearr_12222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12230 = (function (f,ch,meta12231){
this.f = f;
this.ch = ch;
this.meta12231 = meta12231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12232,meta12231__$1){
var self__ = this;
var _12232__$1 = this;
return (new cljs.core.async.t_cljs$core$async12230(self__.f,self__.ch,meta12231__$1));
}));

(cljs.core.async.t_cljs$core$async12230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12232){
var self__ = this;
var _12232__$1 = this;
return self__.meta12231;
}));

(cljs.core.async.t_cljs$core$async12230.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12230.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12230.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12239 = (function (f,ch,meta12231,_,fn1,meta12240){
this.f = f;
this.ch = ch;
this.meta12231 = meta12231;
this._ = _;
this.fn1 = fn1;
this.meta12240 = meta12240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12241,meta12240__$1){
var self__ = this;
var _12241__$1 = this;
return (new cljs.core.async.t_cljs$core$async12239(self__.f,self__.ch,self__.meta12231,self__._,self__.fn1,meta12240__$1));
}));

(cljs.core.async.t_cljs$core$async12239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12241){
var self__ = this;
var _12241__$1 = this;
return self__.meta12240;
}));

(cljs.core.async.t_cljs$core$async12239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12223_SHARP_){
var G__12242 = (((p1__12223_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12223_SHARP_) : self__.f.call(null,p1__12223_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12242) : f1.call(null,G__12242));
});
}));

(cljs.core.async.t_cljs$core$async12239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12231","meta12231",-680123520,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12230","cljs.core.async/t_cljs$core$async12230",-1373497118,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12240","meta12240",491980542,null)], null);
}));

(cljs.core.async.t_cljs$core$async12239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12239");

(cljs.core.async.t_cljs$core$async12239.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12239.
 */
cljs.core.async.__GT_t_cljs$core$async12239 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12239(f__$1,ch__$1,meta12231__$1,___$2,fn1__$1,meta12240){
return (new cljs.core.async.t_cljs$core$async12239(f__$1,ch__$1,meta12231__$1,___$2,fn1__$1,meta12240));
});

}

return (new cljs.core.async.t_cljs$core$async12239(self__.f,self__.ch,self__.meta12231,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12253 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12253) : self__.f.call(null,G__12253));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12230.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12231","meta12231",-680123520,null)], null);
}));

(cljs.core.async.t_cljs$core$async12230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12230");

(cljs.core.async.t_cljs$core$async12230.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12230.
 */
cljs.core.async.__GT_t_cljs$core$async12230 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12230(f__$1,ch__$1,meta12231){
return (new cljs.core.async.t_cljs$core$async12230(f__$1,ch__$1,meta12231));
});

}

return (new cljs.core.async.t_cljs$core$async12230(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10818__auto___13262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_12287){
var state_val_12288 = (state_12287[(1)]);
if((state_val_12288 === (7))){
var inst_12283 = (state_12287[(2)]);
var state_12287__$1 = state_12287;
var statearr_12291_13263 = state_12287__$1;
(statearr_12291_13263[(2)] = inst_12283);

(statearr_12291_13263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (1))){
var state_12287__$1 = state_12287;
var statearr_12292_13264 = state_12287__$1;
(statearr_12292_13264[(2)] = null);

(statearr_12292_13264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (4))){
var inst_12269 = (state_12287[(7)]);
var inst_12269__$1 = (state_12287[(2)]);
var inst_12270 = (inst_12269__$1 == null);
var state_12287__$1 = (function (){var statearr_12294 = state_12287;
(statearr_12294[(7)] = inst_12269__$1);

return statearr_12294;
})();
if(cljs.core.truth_(inst_12270)){
var statearr_12297_13265 = state_12287__$1;
(statearr_12297_13265[(1)] = (5));

} else {
var statearr_12298_13266 = state_12287__$1;
(statearr_12298_13266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (6))){
var inst_12269 = (state_12287[(7)]);
var inst_12274 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12269) : p.call(null,inst_12269));
var state_12287__$1 = state_12287;
if(cljs.core.truth_(inst_12274)){
var statearr_12299_13267 = state_12287__$1;
(statearr_12299_13267[(1)] = (8));

} else {
var statearr_12300_13268 = state_12287__$1;
(statearr_12300_13268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (3))){
var inst_12285 = (state_12287[(2)]);
var state_12287__$1 = state_12287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12287__$1,inst_12285);
} else {
if((state_val_12288 === (2))){
var state_12287__$1 = state_12287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12287__$1,(4),ch);
} else {
if((state_val_12288 === (11))){
var inst_12277 = (state_12287[(2)]);
var state_12287__$1 = state_12287;
var statearr_12301_13269 = state_12287__$1;
(statearr_12301_13269[(2)] = inst_12277);

(statearr_12301_13269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (9))){
var state_12287__$1 = state_12287;
var statearr_12302_13270 = state_12287__$1;
(statearr_12302_13270[(2)] = null);

(statearr_12302_13270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (5))){
var inst_12272 = cljs.core.async.close_BANG_(out);
var state_12287__$1 = state_12287;
var statearr_12303_13271 = state_12287__$1;
(statearr_12303_13271[(2)] = inst_12272);

(statearr_12303_13271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (10))){
var inst_12280 = (state_12287[(2)]);
var state_12287__$1 = (function (){var statearr_12304 = state_12287;
(statearr_12304[(8)] = inst_12280);

return statearr_12304;
})();
var statearr_12305_13272 = state_12287__$1;
(statearr_12305_13272[(2)] = null);

(statearr_12305_13272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (8))){
var inst_12269 = (state_12287[(7)]);
var state_12287__$1 = state_12287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12287__$1,(11),out,inst_12269);
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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_12306 = [null,null,null,null,null,null,null,null,null];
(statearr_12306[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_12306[(1)] = (1));

return statearr_12306;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_12287){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_12287);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e12307){var ex__10761__auto__ = e12307;
var statearr_12308_13273 = state_12287;
(statearr_12308_13273[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_12287[(4)]))){
var statearr_12309_13274 = state_12287;
(statearr_12309_13274[(1)] = cljs.core.first((state_12287[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13275 = state_12287;
state_12287 = G__13275;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_12287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_12287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_12310 = f__10819__auto__();
(statearr_12310[(6)] = c__10818__auto___13262);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12326 = arguments.length;
switch (G__12326) {
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
var c__10818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_12388){
var state_val_12389 = (state_12388[(1)]);
if((state_val_12389 === (7))){
var inst_12384 = (state_12388[(2)]);
var state_12388__$1 = state_12388;
var statearr_12390_13277 = state_12388__$1;
(statearr_12390_13277[(2)] = inst_12384);

(statearr_12390_13277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (20))){
var inst_12354 = (state_12388[(7)]);
var inst_12365 = (state_12388[(2)]);
var inst_12366 = cljs.core.next(inst_12354);
var inst_12340 = inst_12366;
var inst_12341 = null;
var inst_12342 = (0);
var inst_12343 = (0);
var state_12388__$1 = (function (){var statearr_12391 = state_12388;
(statearr_12391[(8)] = inst_12343);

(statearr_12391[(9)] = inst_12340);

(statearr_12391[(10)] = inst_12342);

(statearr_12391[(11)] = inst_12365);

(statearr_12391[(12)] = inst_12341);

return statearr_12391;
})();
var statearr_12392_13278 = state_12388__$1;
(statearr_12392_13278[(2)] = null);

(statearr_12392_13278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (1))){
var state_12388__$1 = state_12388;
var statearr_12398_13279 = state_12388__$1;
(statearr_12398_13279[(2)] = null);

(statearr_12398_13279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (4))){
var inst_12329 = (state_12388[(13)]);
var inst_12329__$1 = (state_12388[(2)]);
var inst_12330 = (inst_12329__$1 == null);
var state_12388__$1 = (function (){var statearr_12399 = state_12388;
(statearr_12399[(13)] = inst_12329__$1);

return statearr_12399;
})();
if(cljs.core.truth_(inst_12330)){
var statearr_12400_13280 = state_12388__$1;
(statearr_12400_13280[(1)] = (5));

} else {
var statearr_12401_13281 = state_12388__$1;
(statearr_12401_13281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (15))){
var state_12388__$1 = state_12388;
var statearr_12405_13282 = state_12388__$1;
(statearr_12405_13282[(2)] = null);

(statearr_12405_13282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (21))){
var state_12388__$1 = state_12388;
var statearr_12406_13283 = state_12388__$1;
(statearr_12406_13283[(2)] = null);

(statearr_12406_13283[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (13))){
var inst_12343 = (state_12388[(8)]);
var inst_12340 = (state_12388[(9)]);
var inst_12342 = (state_12388[(10)]);
var inst_12341 = (state_12388[(12)]);
var inst_12350 = (state_12388[(2)]);
var inst_12351 = (inst_12343 + (1));
var tmp12402 = inst_12340;
var tmp12403 = inst_12342;
var tmp12404 = inst_12341;
var inst_12340__$1 = tmp12402;
var inst_12341__$1 = tmp12404;
var inst_12342__$1 = tmp12403;
var inst_12343__$1 = inst_12351;
var state_12388__$1 = (function (){var statearr_12407 = state_12388;
(statearr_12407[(8)] = inst_12343__$1);

(statearr_12407[(9)] = inst_12340__$1);

(statearr_12407[(10)] = inst_12342__$1);

(statearr_12407[(14)] = inst_12350);

(statearr_12407[(12)] = inst_12341__$1);

return statearr_12407;
})();
var statearr_12408_13284 = state_12388__$1;
(statearr_12408_13284[(2)] = null);

(statearr_12408_13284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (22))){
var state_12388__$1 = state_12388;
var statearr_12409_13285 = state_12388__$1;
(statearr_12409_13285[(2)] = null);

(statearr_12409_13285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (6))){
var inst_12329 = (state_12388[(13)]);
var inst_12338 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12329) : f.call(null,inst_12329));
var inst_12339 = cljs.core.seq(inst_12338);
var inst_12340 = inst_12339;
var inst_12341 = null;
var inst_12342 = (0);
var inst_12343 = (0);
var state_12388__$1 = (function (){var statearr_12410 = state_12388;
(statearr_12410[(8)] = inst_12343);

(statearr_12410[(9)] = inst_12340);

(statearr_12410[(10)] = inst_12342);

(statearr_12410[(12)] = inst_12341);

return statearr_12410;
})();
var statearr_12411_13286 = state_12388__$1;
(statearr_12411_13286[(2)] = null);

(statearr_12411_13286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (17))){
var inst_12354 = (state_12388[(7)]);
var inst_12358 = cljs.core.chunk_first(inst_12354);
var inst_12359 = cljs.core.chunk_rest(inst_12354);
var inst_12360 = cljs.core.count(inst_12358);
var inst_12340 = inst_12359;
var inst_12341 = inst_12358;
var inst_12342 = inst_12360;
var inst_12343 = (0);
var state_12388__$1 = (function (){var statearr_12412 = state_12388;
(statearr_12412[(8)] = inst_12343);

(statearr_12412[(9)] = inst_12340);

(statearr_12412[(10)] = inst_12342);

(statearr_12412[(12)] = inst_12341);

return statearr_12412;
})();
var statearr_12413_13287 = state_12388__$1;
(statearr_12413_13287[(2)] = null);

(statearr_12413_13287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (3))){
var inst_12386 = (state_12388[(2)]);
var state_12388__$1 = state_12388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12388__$1,inst_12386);
} else {
if((state_val_12389 === (12))){
var inst_12374 = (state_12388[(2)]);
var state_12388__$1 = state_12388;
var statearr_12414_13288 = state_12388__$1;
(statearr_12414_13288[(2)] = inst_12374);

(statearr_12414_13288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (2))){
var state_12388__$1 = state_12388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12388__$1,(4),in$);
} else {
if((state_val_12389 === (23))){
var inst_12382 = (state_12388[(2)]);
var state_12388__$1 = state_12388;
var statearr_12415_13289 = state_12388__$1;
(statearr_12415_13289[(2)] = inst_12382);

(statearr_12415_13289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (19))){
var inst_12369 = (state_12388[(2)]);
var state_12388__$1 = state_12388;
var statearr_12416_13290 = state_12388__$1;
(statearr_12416_13290[(2)] = inst_12369);

(statearr_12416_13290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (11))){
var inst_12354 = (state_12388[(7)]);
var inst_12340 = (state_12388[(9)]);
var inst_12354__$1 = cljs.core.seq(inst_12340);
var state_12388__$1 = (function (){var statearr_12417 = state_12388;
(statearr_12417[(7)] = inst_12354__$1);

return statearr_12417;
})();
if(inst_12354__$1){
var statearr_12418_13291 = state_12388__$1;
(statearr_12418_13291[(1)] = (14));

} else {
var statearr_12419_13292 = state_12388__$1;
(statearr_12419_13292[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (9))){
var inst_12376 = (state_12388[(2)]);
var inst_12377 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12388__$1 = (function (){var statearr_12420 = state_12388;
(statearr_12420[(15)] = inst_12376);

return statearr_12420;
})();
if(cljs.core.truth_(inst_12377)){
var statearr_12421_13293 = state_12388__$1;
(statearr_12421_13293[(1)] = (21));

} else {
var statearr_12422_13294 = state_12388__$1;
(statearr_12422_13294[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (5))){
var inst_12332 = cljs.core.async.close_BANG_(out);
var state_12388__$1 = state_12388;
var statearr_12423_13295 = state_12388__$1;
(statearr_12423_13295[(2)] = inst_12332);

(statearr_12423_13295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (14))){
var inst_12354 = (state_12388[(7)]);
var inst_12356 = cljs.core.chunked_seq_QMARK_(inst_12354);
var state_12388__$1 = state_12388;
if(inst_12356){
var statearr_12424_13296 = state_12388__$1;
(statearr_12424_13296[(1)] = (17));

} else {
var statearr_12425_13297 = state_12388__$1;
(statearr_12425_13297[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (16))){
var inst_12372 = (state_12388[(2)]);
var state_12388__$1 = state_12388;
var statearr_12432_13298 = state_12388__$1;
(statearr_12432_13298[(2)] = inst_12372);

(statearr_12432_13298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12389 === (10))){
var inst_12343 = (state_12388[(8)]);
var inst_12341 = (state_12388[(12)]);
var inst_12348 = cljs.core._nth(inst_12341,inst_12343);
var state_12388__$1 = state_12388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12388__$1,(13),out,inst_12348);
} else {
if((state_val_12389 === (18))){
var inst_12354 = (state_12388[(7)]);
var inst_12363 = cljs.core.first(inst_12354);
var state_12388__$1 = state_12388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12388__$1,(20),out,inst_12363);
} else {
if((state_val_12389 === (8))){
var inst_12343 = (state_12388[(8)]);
var inst_12342 = (state_12388[(10)]);
var inst_12345 = (inst_12343 < inst_12342);
var inst_12346 = inst_12345;
var state_12388__$1 = state_12388;
if(cljs.core.truth_(inst_12346)){
var statearr_12433_13299 = state_12388__$1;
(statearr_12433_13299[(1)] = (10));

} else {
var statearr_12434_13300 = state_12388__$1;
(statearr_12434_13300[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10758__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10758__auto____0 = (function (){
var statearr_12435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12435[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10758__auto__);

(statearr_12435[(1)] = (1));

return statearr_12435;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10758__auto____1 = (function (state_12388){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_12388);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e12436){var ex__10761__auto__ = e12436;
var statearr_12437_13301 = state_12388;
(statearr_12437_13301[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_12388[(4)]))){
var statearr_12438_13302 = state_12388;
(statearr_12438_13302[(1)] = cljs.core.first((state_12388[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13303 = state_12388;
state_12388 = G__13303;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10758__auto__ = function(state_12388){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10758__auto____1.call(this,state_12388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10758__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10758__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_12439 = f__10819__auto__();
(statearr_12439[(6)] = c__10818__auto__);

return statearr_12439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));

return c__10818__auto__;
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
var G__12449 = arguments.length;
switch (G__12449) {
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
var c__10818__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_12473){
var state_val_12474 = (state_12473[(1)]);
if((state_val_12474 === (7))){
var inst_12468 = (state_12473[(2)]);
var state_12473__$1 = state_12473;
var statearr_12475_13308 = state_12473__$1;
(statearr_12475_13308[(2)] = inst_12468);

(statearr_12475_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (1))){
var inst_12450 = null;
var state_12473__$1 = (function (){var statearr_12476 = state_12473;
(statearr_12476[(7)] = inst_12450);

return statearr_12476;
})();
var statearr_12477_13309 = state_12473__$1;
(statearr_12477_13309[(2)] = null);

(statearr_12477_13309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (4))){
var inst_12453 = (state_12473[(8)]);
var inst_12453__$1 = (state_12473[(2)]);
var inst_12454 = (inst_12453__$1 == null);
var inst_12455 = cljs.core.not(inst_12454);
var state_12473__$1 = (function (){var statearr_12478 = state_12473;
(statearr_12478[(8)] = inst_12453__$1);

return statearr_12478;
})();
if(inst_12455){
var statearr_12479_13310 = state_12473__$1;
(statearr_12479_13310[(1)] = (5));

} else {
var statearr_12480_13311 = state_12473__$1;
(statearr_12480_13311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (6))){
var state_12473__$1 = state_12473;
var statearr_12481_13312 = state_12473__$1;
(statearr_12481_13312[(2)] = null);

(statearr_12481_13312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (3))){
var inst_12470 = (state_12473[(2)]);
var inst_12471 = cljs.core.async.close_BANG_(out);
var state_12473__$1 = (function (){var statearr_12482 = state_12473;
(statearr_12482[(9)] = inst_12470);

return statearr_12482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12473__$1,inst_12471);
} else {
if((state_val_12474 === (2))){
var state_12473__$1 = state_12473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12473__$1,(4),ch);
} else {
if((state_val_12474 === (11))){
var inst_12453 = (state_12473[(8)]);
var inst_12462 = (state_12473[(2)]);
var inst_12450 = inst_12453;
var state_12473__$1 = (function (){var statearr_12483 = state_12473;
(statearr_12483[(7)] = inst_12450);

(statearr_12483[(10)] = inst_12462);

return statearr_12483;
})();
var statearr_12484_13313 = state_12473__$1;
(statearr_12484_13313[(2)] = null);

(statearr_12484_13313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (9))){
var inst_12453 = (state_12473[(8)]);
var state_12473__$1 = state_12473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12473__$1,(11),out,inst_12453);
} else {
if((state_val_12474 === (5))){
var inst_12450 = (state_12473[(7)]);
var inst_12453 = (state_12473[(8)]);
var inst_12457 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12453,inst_12450);
var state_12473__$1 = state_12473;
if(inst_12457){
var statearr_12487_13317 = state_12473__$1;
(statearr_12487_13317[(1)] = (8));

} else {
var statearr_12488_13318 = state_12473__$1;
(statearr_12488_13318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (10))){
var inst_12465 = (state_12473[(2)]);
var state_12473__$1 = state_12473;
var statearr_12489_13319 = state_12473__$1;
(statearr_12489_13319[(2)] = inst_12465);

(statearr_12489_13319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (8))){
var inst_12450 = (state_12473[(7)]);
var tmp12486 = inst_12450;
var inst_12450__$1 = tmp12486;
var state_12473__$1 = (function (){var statearr_12490 = state_12473;
(statearr_12490[(7)] = inst_12450__$1);

return statearr_12490;
})();
var statearr_12491_13320 = state_12473__$1;
(statearr_12491_13320[(2)] = null);

(statearr_12491_13320[(1)] = (2));


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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_12492 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12492[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_12492[(1)] = (1));

return statearr_12492;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_12473){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_12473);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e12493){var ex__10761__auto__ = e12493;
var statearr_12494_13322 = state_12473;
(statearr_12494_13322[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_12473[(4)]))){
var statearr_12495_13323 = state_12473;
(statearr_12495_13323[(1)] = cljs.core.first((state_12473[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13324 = state_12473;
state_12473 = G__13324;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_12473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_12473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_12496 = f__10819__auto__();
(statearr_12496[(6)] = c__10818__auto___13307);

return statearr_12496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
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
var c__10818__auto___13326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_12536){
var state_val_12537 = (state_12536[(1)]);
if((state_val_12537 === (7))){
var inst_12532 = (state_12536[(2)]);
var state_12536__$1 = state_12536;
var statearr_12538_13327 = state_12536__$1;
(statearr_12538_13327[(2)] = inst_12532);

(statearr_12538_13327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (1))){
var inst_12499 = (new Array(n));
var inst_12500 = inst_12499;
var inst_12501 = (0);
var state_12536__$1 = (function (){var statearr_12539 = state_12536;
(statearr_12539[(7)] = inst_12500);

(statearr_12539[(8)] = inst_12501);

return statearr_12539;
})();
var statearr_12540_13328 = state_12536__$1;
(statearr_12540_13328[(2)] = null);

(statearr_12540_13328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (4))){
var inst_12504 = (state_12536[(9)]);
var inst_12504__$1 = (state_12536[(2)]);
var inst_12505 = (inst_12504__$1 == null);
var inst_12506 = cljs.core.not(inst_12505);
var state_12536__$1 = (function (){var statearr_12541 = state_12536;
(statearr_12541[(9)] = inst_12504__$1);

return statearr_12541;
})();
if(inst_12506){
var statearr_12542_13329 = state_12536__$1;
(statearr_12542_13329[(1)] = (5));

} else {
var statearr_12543_13330 = state_12536__$1;
(statearr_12543_13330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (15))){
var inst_12526 = (state_12536[(2)]);
var state_12536__$1 = state_12536;
var statearr_12544_13331 = state_12536__$1;
(statearr_12544_13331[(2)] = inst_12526);

(statearr_12544_13331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (13))){
var state_12536__$1 = state_12536;
var statearr_12548_13332 = state_12536__$1;
(statearr_12548_13332[(2)] = null);

(statearr_12548_13332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (6))){
var inst_12501 = (state_12536[(8)]);
var inst_12522 = (inst_12501 > (0));
var state_12536__$1 = state_12536;
if(cljs.core.truth_(inst_12522)){
var statearr_12549_13333 = state_12536__$1;
(statearr_12549_13333[(1)] = (12));

} else {
var statearr_12550_13334 = state_12536__$1;
(statearr_12550_13334[(1)] = (13));

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
var state_12536__$1 = (function (){var statearr_12551 = state_12536;
(statearr_12551[(7)] = inst_12500);

(statearr_12551[(8)] = inst_12501);

(statearr_12551[(10)] = inst_12516);

return statearr_12551;
})();
var statearr_12552_13335 = state_12536__$1;
(statearr_12552_13335[(2)] = null);

(statearr_12552_13335[(1)] = (2));


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
var state_12536__$1 = (function (){var statearr_12553 = state_12536;
(statearr_12553[(11)] = inst_12509__$1);

(statearr_12553[(12)] = inst_12508);

return statearr_12553;
})();
if(cljs.core.truth_(inst_12510)){
var statearr_12554_13336 = state_12536__$1;
(statearr_12554_13336[(1)] = (8));

} else {
var statearr_12555_13337 = state_12536__$1;
(statearr_12555_13337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (14))){
var inst_12529 = (state_12536[(2)]);
var inst_12530 = cljs.core.async.close_BANG_(out);
var state_12536__$1 = (function (){var statearr_12557 = state_12536;
(statearr_12557[(13)] = inst_12529);

return statearr_12557;
})();
var statearr_12558_13338 = state_12536__$1;
(statearr_12558_13338[(2)] = inst_12530);

(statearr_12558_13338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (10))){
var inst_12520 = (state_12536[(2)]);
var state_12536__$1 = state_12536;
var statearr_12559_13339 = state_12536__$1;
(statearr_12559_13339[(2)] = inst_12520);

(statearr_12559_13339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12537 === (8))){
var inst_12500 = (state_12536[(7)]);
var inst_12509 = (state_12536[(11)]);
var tmp12556 = inst_12500;
var inst_12500__$1 = tmp12556;
var inst_12501 = inst_12509;
var state_12536__$1 = (function (){var statearr_12560 = state_12536;
(statearr_12560[(7)] = inst_12500__$1);

(statearr_12560[(8)] = inst_12501);

return statearr_12560;
})();
var statearr_12561_13340 = state_12536__$1;
(statearr_12561_13340[(2)] = null);

(statearr_12561_13340[(1)] = (2));


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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_12562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12562[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_12562[(1)] = (1));

return statearr_12562;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_12536){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_12536);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e12563){var ex__10761__auto__ = e12563;
var statearr_12564_13341 = state_12536;
(statearr_12564_13341[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_12536[(4)]))){
var statearr_12565_13342 = state_12536;
(statearr_12565_13342[(1)] = cljs.core.first((state_12536[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13343 = state_12536;
state_12536 = G__13343;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_12536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_12536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_12566 = f__10819__auto__();
(statearr_12566[(6)] = c__10818__auto___13326);

return statearr_12566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12568 = arguments.length;
switch (G__12568) {
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
var c__10818__auto___13345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10819__auto__ = (function (){var switch__10757__auto__ = (function (state_12610){
var state_val_12611 = (state_12610[(1)]);
if((state_val_12611 === (7))){
var inst_12606 = (state_12610[(2)]);
var state_12610__$1 = state_12610;
var statearr_12613_13347 = state_12610__$1;
(statearr_12613_13347[(2)] = inst_12606);

(statearr_12613_13347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (1))){
var inst_12569 = [];
var inst_12570 = inst_12569;
var inst_12571 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12610__$1 = (function (){var statearr_12614 = state_12610;
(statearr_12614[(7)] = inst_12571);

(statearr_12614[(8)] = inst_12570);

return statearr_12614;
})();
var statearr_12615_13348 = state_12610__$1;
(statearr_12615_13348[(2)] = null);

(statearr_12615_13348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (4))){
var inst_12574 = (state_12610[(9)]);
var inst_12574__$1 = (state_12610[(2)]);
var inst_12575 = (inst_12574__$1 == null);
var inst_12576 = cljs.core.not(inst_12575);
var state_12610__$1 = (function (){var statearr_12616 = state_12610;
(statearr_12616[(9)] = inst_12574__$1);

return statearr_12616;
})();
if(inst_12576){
var statearr_12617_13351 = state_12610__$1;
(statearr_12617_13351[(1)] = (5));

} else {
var statearr_12618_13352 = state_12610__$1;
(statearr_12618_13352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (15))){
var inst_12600 = (state_12610[(2)]);
var state_12610__$1 = state_12610;
var statearr_12619_13353 = state_12610__$1;
(statearr_12619_13353[(2)] = inst_12600);

(statearr_12619_13353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (13))){
var state_12610__$1 = state_12610;
var statearr_12620_13354 = state_12610__$1;
(statearr_12620_13354[(2)] = null);

(statearr_12620_13354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (6))){
var inst_12570 = (state_12610[(8)]);
var inst_12595 = inst_12570.length;
var inst_12596 = (inst_12595 > (0));
var state_12610__$1 = state_12610;
if(cljs.core.truth_(inst_12596)){
var statearr_12621_13355 = state_12610__$1;
(statearr_12621_13355[(1)] = (12));

} else {
var statearr_12622_13356 = state_12610__$1;
(statearr_12622_13356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (3))){
var inst_12608 = (state_12610[(2)]);
var state_12610__$1 = state_12610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12610__$1,inst_12608);
} else {
if((state_val_12611 === (12))){
var inst_12570 = (state_12610[(8)]);
var inst_12598 = cljs.core.vec(inst_12570);
var state_12610__$1 = state_12610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12610__$1,(15),out,inst_12598);
} else {
if((state_val_12611 === (2))){
var state_12610__$1 = state_12610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12610__$1,(4),ch);
} else {
if((state_val_12611 === (11))){
var inst_12574 = (state_12610[(9)]);
var inst_12578 = (state_12610[(10)]);
var inst_12588 = (state_12610[(2)]);
var inst_12589 = [];
var inst_12590 = inst_12589.push(inst_12574);
var inst_12570 = inst_12589;
var inst_12571 = inst_12578;
var state_12610__$1 = (function (){var statearr_12623 = state_12610;
(statearr_12623[(11)] = inst_12590);

(statearr_12623[(12)] = inst_12588);

(statearr_12623[(7)] = inst_12571);

(statearr_12623[(8)] = inst_12570);

return statearr_12623;
})();
var statearr_12624_13359 = state_12610__$1;
(statearr_12624_13359[(2)] = null);

(statearr_12624_13359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (9))){
var inst_12570 = (state_12610[(8)]);
var inst_12586 = cljs.core.vec(inst_12570);
var state_12610__$1 = state_12610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12610__$1,(11),out,inst_12586);
} else {
if((state_val_12611 === (5))){
var inst_12574 = (state_12610[(9)]);
var inst_12571 = (state_12610[(7)]);
var inst_12578 = (state_12610[(10)]);
var inst_12578__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12574) : f.call(null,inst_12574));
var inst_12579 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12578__$1,inst_12571);
var inst_12580 = cljs.core.keyword_identical_QMARK_(inst_12571,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12581 = ((inst_12579) || (inst_12580));
var state_12610__$1 = (function (){var statearr_12625 = state_12610;
(statearr_12625[(10)] = inst_12578__$1);

return statearr_12625;
})();
if(cljs.core.truth_(inst_12581)){
var statearr_12626_13361 = state_12610__$1;
(statearr_12626_13361[(1)] = (8));

} else {
var statearr_12627_13362 = state_12610__$1;
(statearr_12627_13362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (14))){
var inst_12603 = (state_12610[(2)]);
var inst_12604 = cljs.core.async.close_BANG_(out);
var state_12610__$1 = (function (){var statearr_12629 = state_12610;
(statearr_12629[(13)] = inst_12603);

return statearr_12629;
})();
var statearr_12630_13363 = state_12610__$1;
(statearr_12630_13363[(2)] = inst_12604);

(statearr_12630_13363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (10))){
var inst_12593 = (state_12610[(2)]);
var state_12610__$1 = state_12610;
var statearr_12631_13365 = state_12610__$1;
(statearr_12631_13365[(2)] = inst_12593);

(statearr_12631_13365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12611 === (8))){
var inst_12574 = (state_12610[(9)]);
var inst_12578 = (state_12610[(10)]);
var inst_12570 = (state_12610[(8)]);
var inst_12583 = inst_12570.push(inst_12574);
var tmp12628 = inst_12570;
var inst_12570__$1 = tmp12628;
var inst_12571 = inst_12578;
var state_12610__$1 = (function (){var statearr_12632 = state_12610;
(statearr_12632[(14)] = inst_12583);

(statearr_12632[(7)] = inst_12571);

(statearr_12632[(8)] = inst_12570__$1);

return statearr_12632;
})();
var statearr_12633_13367 = state_12610__$1;
(statearr_12633_13367[(2)] = null);

(statearr_12633_13367[(1)] = (2));


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
var cljs$core$async$state_machine__10758__auto__ = null;
var cljs$core$async$state_machine__10758__auto____0 = (function (){
var statearr_12634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12634[(0)] = cljs$core$async$state_machine__10758__auto__);

(statearr_12634[(1)] = (1));

return statearr_12634;
});
var cljs$core$async$state_machine__10758__auto____1 = (function (state_12610){
while(true){
var ret_value__10759__auto__ = (function (){try{while(true){
var result__10760__auto__ = switch__10757__auto__(state_12610);
if(cljs.core.keyword_identical_QMARK_(result__10760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10760__auto__;
}
break;
}
}catch (e12635){var ex__10761__auto__ = e12635;
var statearr_12636_13368 = state_12610;
(statearr_12636_13368[(2)] = ex__10761__auto__);


if(cljs.core.seq((state_12610[(4)]))){
var statearr_12637_13369 = state_12610;
(statearr_12637_13369[(1)] = cljs.core.first((state_12610[(4)])));

} else {
throw ex__10761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13370 = state_12610;
state_12610 = G__13370;
continue;
} else {
return ret_value__10759__auto__;
}
break;
}
});
cljs$core$async$state_machine__10758__auto__ = function(state_12610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10758__auto____1.call(this,state_12610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10758__auto____0;
cljs$core$async$state_machine__10758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10758__auto____1;
return cljs$core$async$state_machine__10758__auto__;
})()
})();
var state__10820__auto__ = (function (){var statearr_12638 = f__10819__auto__();
(statearr_12638[(6)] = c__10818__auto___13345);

return statearr_12638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10820__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
