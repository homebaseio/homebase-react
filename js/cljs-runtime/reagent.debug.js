goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8882__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8883__i = 0, G__8883__a = new Array(arguments.length -  0);
while (G__8883__i < G__8883__a.length) {G__8883__a[G__8883__i] = arguments[G__8883__i + 0]; ++G__8883__i;}
  args = new cljs.core.IndexedSeq(G__8883__a,0,null);
} 
return G__8882__delegate.call(this,args);};
G__8882.cljs$lang$maxFixedArity = 0;
G__8882.cljs$lang$applyTo = (function (arglist__8884){
var args = cljs.core.seq(arglist__8884);
return G__8882__delegate(args);
});
G__8882.cljs$core$IFn$_invoke$arity$variadic = G__8882__delegate;
return G__8882;
})()
);

(o.error = (function() { 
var G__8885__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8886__i = 0, G__8886__a = new Array(arguments.length -  0);
while (G__8886__i < G__8886__a.length) {G__8886__a[G__8886__i] = arguments[G__8886__i + 0]; ++G__8886__i;}
  args = new cljs.core.IndexedSeq(G__8886__a,0,null);
} 
return G__8885__delegate.call(this,args);};
G__8885.cljs$lang$maxFixedArity = 0;
G__8885.cljs$lang$applyTo = (function (arglist__8887){
var args = cljs.core.seq(arglist__8887);
return G__8885__delegate(args);
});
G__8885.cljs$core$IFn$_invoke$arity$variadic = G__8885__delegate;
return G__8885;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
