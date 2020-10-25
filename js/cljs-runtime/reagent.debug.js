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
var G__17816__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17817__i = 0, G__17817__a = new Array(arguments.length -  0);
while (G__17817__i < G__17817__a.length) {G__17817__a[G__17817__i] = arguments[G__17817__i + 0]; ++G__17817__i;}
  args = new cljs.core.IndexedSeq(G__17817__a,0,null);
} 
return G__17816__delegate.call(this,args);};
G__17816.cljs$lang$maxFixedArity = 0;
G__17816.cljs$lang$applyTo = (function (arglist__17818){
var args = cljs.core.seq(arglist__17818);
return G__17816__delegate(args);
});
G__17816.cljs$core$IFn$_invoke$arity$variadic = G__17816__delegate;
return G__17816;
})()
);

(o.error = (function() { 
var G__17819__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17820__i = 0, G__17820__a = new Array(arguments.length -  0);
while (G__17820__i < G__17820__a.length) {G__17820__a[G__17820__i] = arguments[G__17820__i + 0]; ++G__17820__i;}
  args = new cljs.core.IndexedSeq(G__17820__a,0,null);
} 
return G__17819__delegate.call(this,args);};
G__17819.cljs$lang$maxFixedArity = 0;
G__17819.cljs$lang$applyTo = (function (arglist__17821){
var args = cljs.core.seq(arglist__17821);
return G__17819__delegate(args);
});
G__17819.cljs$core$IFn$_invoke$arity$variadic = G__17819__delegate;
return G__17819;
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
