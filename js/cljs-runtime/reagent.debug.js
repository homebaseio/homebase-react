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
var G__17805__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17806__i = 0, G__17806__a = new Array(arguments.length -  0);
while (G__17806__i < G__17806__a.length) {G__17806__a[G__17806__i] = arguments[G__17806__i + 0]; ++G__17806__i;}
  args = new cljs.core.IndexedSeq(G__17806__a,0,null);
} 
return G__17805__delegate.call(this,args);};
G__17805.cljs$lang$maxFixedArity = 0;
G__17805.cljs$lang$applyTo = (function (arglist__17807){
var args = cljs.core.seq(arglist__17807);
return G__17805__delegate(args);
});
G__17805.cljs$core$IFn$_invoke$arity$variadic = G__17805__delegate;
return G__17805;
})()
);

(o.error = (function() { 
var G__17808__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17809__i = 0, G__17809__a = new Array(arguments.length -  0);
while (G__17809__i < G__17809__a.length) {G__17809__a[G__17809__i] = arguments[G__17809__i + 0]; ++G__17809__i;}
  args = new cljs.core.IndexedSeq(G__17809__a,0,null);
} 
return G__17808__delegate.call(this,args);};
G__17808.cljs$lang$maxFixedArity = 0;
G__17808.cljs$lang$applyTo = (function (arglist__17810){
var args = cljs.core.seq(arglist__17810);
return G__17808__delegate(args);
});
G__17808.cljs$core$IFn$_invoke$arity$variadic = G__17808__delegate;
return G__17808;
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
