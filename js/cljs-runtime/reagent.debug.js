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
var G__17815__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17816__i = 0, G__17816__a = new Array(arguments.length -  0);
while (G__17816__i < G__17816__a.length) {G__17816__a[G__17816__i] = arguments[G__17816__i + 0]; ++G__17816__i;}
  args = new cljs.core.IndexedSeq(G__17816__a,0,null);
} 
return G__17815__delegate.call(this,args);};
G__17815.cljs$lang$maxFixedArity = 0;
G__17815.cljs$lang$applyTo = (function (arglist__17817){
var args = cljs.core.seq(arglist__17817);
return G__17815__delegate(args);
});
G__17815.cljs$core$IFn$_invoke$arity$variadic = G__17815__delegate;
return G__17815;
})()
);

(o.error = (function() { 
var G__17818__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17819__i = 0, G__17819__a = new Array(arguments.length -  0);
while (G__17819__i < G__17819__a.length) {G__17819__a[G__17819__i] = arguments[G__17819__i + 0]; ++G__17819__i;}
  args = new cljs.core.IndexedSeq(G__17819__a,0,null);
} 
return G__17818__delegate.call(this,args);};
G__17818.cljs$lang$maxFixedArity = 0;
G__17818.cljs$lang$applyTo = (function (arglist__17820){
var args = cljs.core.seq(arglist__17820);
return G__17818__delegate(args);
});
G__17818.cljs$core$IFn$_invoke$arity$variadic = G__17818__delegate;
return G__17818;
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
