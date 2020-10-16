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
var G__17741__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17747__i = 0, G__17747__a = new Array(arguments.length -  0);
while (G__17747__i < G__17747__a.length) {G__17747__a[G__17747__i] = arguments[G__17747__i + 0]; ++G__17747__i;}
  args = new cljs.core.IndexedSeq(G__17747__a,0,null);
} 
return G__17741__delegate.call(this,args);};
G__17741.cljs$lang$maxFixedArity = 0;
G__17741.cljs$lang$applyTo = (function (arglist__17749){
var args = cljs.core.seq(arglist__17749);
return G__17741__delegate(args);
});
G__17741.cljs$core$IFn$_invoke$arity$variadic = G__17741__delegate;
return G__17741;
})()
);

(o.error = (function() { 
var G__17750__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17751__i = 0, G__17751__a = new Array(arguments.length -  0);
while (G__17751__i < G__17751__a.length) {G__17751__a[G__17751__i] = arguments[G__17751__i + 0]; ++G__17751__i;}
  args = new cljs.core.IndexedSeq(G__17751__a,0,null);
} 
return G__17750__delegate.call(this,args);};
G__17750.cljs$lang$maxFixedArity = 0;
G__17750.cljs$lang$applyTo = (function (arglist__17752){
var args = cljs.core.seq(arglist__17752);
return G__17750__delegate(args);
});
G__17750.cljs$core$IFn$_invoke$arity$variadic = G__17750__delegate;
return G__17750;
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
