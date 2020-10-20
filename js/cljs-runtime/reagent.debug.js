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
var G__17800__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17801__i = 0, G__17801__a = new Array(arguments.length -  0);
while (G__17801__i < G__17801__a.length) {G__17801__a[G__17801__i] = arguments[G__17801__i + 0]; ++G__17801__i;}
  args = new cljs.core.IndexedSeq(G__17801__a,0,null);
} 
return G__17800__delegate.call(this,args);};
G__17800.cljs$lang$maxFixedArity = 0;
G__17800.cljs$lang$applyTo = (function (arglist__17802){
var args = cljs.core.seq(arglist__17802);
return G__17800__delegate(args);
});
G__17800.cljs$core$IFn$_invoke$arity$variadic = G__17800__delegate;
return G__17800;
})()
);

(o.error = (function() { 
var G__17803__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17804__i = 0, G__17804__a = new Array(arguments.length -  0);
while (G__17804__i < G__17804__a.length) {G__17804__a[G__17804__i] = arguments[G__17804__i + 0]; ++G__17804__i;}
  args = new cljs.core.IndexedSeq(G__17804__a,0,null);
} 
return G__17803__delegate.call(this,args);};
G__17803.cljs$lang$maxFixedArity = 0;
G__17803.cljs$lang$applyTo = (function (arglist__17805){
var args = cljs.core.seq(arglist__17805);
return G__17803__delegate(args);
});
G__17803.cljs$core$IFn$_invoke$arity$variadic = G__17803__delegate;
return G__17803;
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
