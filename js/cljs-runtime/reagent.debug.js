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
var G__8856__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8857__i = 0, G__8857__a = new Array(arguments.length -  0);
while (G__8857__i < G__8857__a.length) {G__8857__a[G__8857__i] = arguments[G__8857__i + 0]; ++G__8857__i;}
  args = new cljs.core.IndexedSeq(G__8857__a,0,null);
} 
return G__8856__delegate.call(this,args);};
G__8856.cljs$lang$maxFixedArity = 0;
G__8856.cljs$lang$applyTo = (function (arglist__8858){
var args = cljs.core.seq(arglist__8858);
return G__8856__delegate(args);
});
G__8856.cljs$core$IFn$_invoke$arity$variadic = G__8856__delegate;
return G__8856;
})()
);

(o.error = (function() { 
var G__8859__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8860__i = 0, G__8860__a = new Array(arguments.length -  0);
while (G__8860__i < G__8860__a.length) {G__8860__a[G__8860__i] = arguments[G__8860__i + 0]; ++G__8860__i;}
  args = new cljs.core.IndexedSeq(G__8860__a,0,null);
} 
return G__8859__delegate.call(this,args);};
G__8859.cljs$lang$maxFixedArity = 0;
G__8859.cljs$lang$applyTo = (function (arglist__8861){
var args = cljs.core.seq(arglist__8861);
return G__8859__delegate(args);
});
G__8859.cljs$core$IFn$_invoke$arity$variadic = G__8859__delegate;
return G__8859;
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
