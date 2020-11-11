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
var G__8914__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8915__i = 0, G__8915__a = new Array(arguments.length -  0);
while (G__8915__i < G__8915__a.length) {G__8915__a[G__8915__i] = arguments[G__8915__i + 0]; ++G__8915__i;}
  args = new cljs.core.IndexedSeq(G__8915__a,0,null);
} 
return G__8914__delegate.call(this,args);};
G__8914.cljs$lang$maxFixedArity = 0;
G__8914.cljs$lang$applyTo = (function (arglist__8916){
var args = cljs.core.seq(arglist__8916);
return G__8914__delegate(args);
});
G__8914.cljs$core$IFn$_invoke$arity$variadic = G__8914__delegate;
return G__8914;
})()
);

(o.error = (function() { 
var G__8919__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8920__i = 0, G__8920__a = new Array(arguments.length -  0);
while (G__8920__i < G__8920__a.length) {G__8920__a[G__8920__i] = arguments[G__8920__i + 0]; ++G__8920__i;}
  args = new cljs.core.IndexedSeq(G__8920__a,0,null);
} 
return G__8919__delegate.call(this,args);};
G__8919.cljs$lang$maxFixedArity = 0;
G__8919.cljs$lang$applyTo = (function (arglist__8921){
var args = cljs.core.seq(arglist__8921);
return G__8919__delegate(args);
});
G__8919.cljs$core$IFn$_invoke$arity$variadic = G__8919__delegate;
return G__8919;
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
