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
var G__8874__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8875__i = 0, G__8875__a = new Array(arguments.length -  0);
while (G__8875__i < G__8875__a.length) {G__8875__a[G__8875__i] = arguments[G__8875__i + 0]; ++G__8875__i;}
  args = new cljs.core.IndexedSeq(G__8875__a,0,null);
} 
return G__8874__delegate.call(this,args);};
G__8874.cljs$lang$maxFixedArity = 0;
G__8874.cljs$lang$applyTo = (function (arglist__8876){
var args = cljs.core.seq(arglist__8876);
return G__8874__delegate(args);
});
G__8874.cljs$core$IFn$_invoke$arity$variadic = G__8874__delegate;
return G__8874;
})()
);

(o.error = (function() { 
var G__8877__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8878__i = 0, G__8878__a = new Array(arguments.length -  0);
while (G__8878__i < G__8878__a.length) {G__8878__a[G__8878__i] = arguments[G__8878__i + 0]; ++G__8878__i;}
  args = new cljs.core.IndexedSeq(G__8878__a,0,null);
} 
return G__8877__delegate.call(this,args);};
G__8877.cljs$lang$maxFixedArity = 0;
G__8877.cljs$lang$applyTo = (function (arglist__8879){
var args = cljs.core.seq(arglist__8879);
return G__8877__delegate(args);
});
G__8877.cljs$core$IFn$_invoke$arity$variadic = G__8877__delegate;
return G__8877;
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
