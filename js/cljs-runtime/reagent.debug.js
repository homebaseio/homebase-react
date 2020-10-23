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
var G__17745__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17747__i = 0, G__17747__a = new Array(arguments.length -  0);
while (G__17747__i < G__17747__a.length) {G__17747__a[G__17747__i] = arguments[G__17747__i + 0]; ++G__17747__i;}
  args = new cljs.core.IndexedSeq(G__17747__a,0,null);
} 
return G__17745__delegate.call(this,args);};
G__17745.cljs$lang$maxFixedArity = 0;
G__17745.cljs$lang$applyTo = (function (arglist__17748){
var args = cljs.core.seq(arglist__17748);
return G__17745__delegate(args);
});
G__17745.cljs$core$IFn$_invoke$arity$variadic = G__17745__delegate;
return G__17745;
})()
);

(o.error = (function() { 
var G__17749__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17750__i = 0, G__17750__a = new Array(arguments.length -  0);
while (G__17750__i < G__17750__a.length) {G__17750__a[G__17750__i] = arguments[G__17750__i + 0]; ++G__17750__i;}
  args = new cljs.core.IndexedSeq(G__17750__a,0,null);
} 
return G__17749__delegate.call(this,args);};
G__17749.cljs$lang$maxFixedArity = 0;
G__17749.cljs$lang$applyTo = (function (arglist__17751){
var args = cljs.core.seq(arglist__17751);
return G__17749__delegate(args);
});
G__17749.cljs$core$IFn$_invoke$arity$variadic = G__17749__delegate;
return G__17749;
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
