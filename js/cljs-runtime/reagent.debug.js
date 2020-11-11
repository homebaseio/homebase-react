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
var G__8927__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8928__i = 0, G__8928__a = new Array(arguments.length -  0);
while (G__8928__i < G__8928__a.length) {G__8928__a[G__8928__i] = arguments[G__8928__i + 0]; ++G__8928__i;}
  args = new cljs.core.IndexedSeq(G__8928__a,0,null);
} 
return G__8927__delegate.call(this,args);};
G__8927.cljs$lang$maxFixedArity = 0;
G__8927.cljs$lang$applyTo = (function (arglist__8929){
var args = cljs.core.seq(arglist__8929);
return G__8927__delegate(args);
});
G__8927.cljs$core$IFn$_invoke$arity$variadic = G__8927__delegate;
return G__8927;
})()
);

(o.error = (function() { 
var G__8930__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8931__i = 0, G__8931__a = new Array(arguments.length -  0);
while (G__8931__i < G__8931__a.length) {G__8931__a[G__8931__i] = arguments[G__8931__i + 0]; ++G__8931__i;}
  args = new cljs.core.IndexedSeq(G__8931__a,0,null);
} 
return G__8930__delegate.call(this,args);};
G__8930.cljs$lang$maxFixedArity = 0;
G__8930.cljs$lang$applyTo = (function (arglist__8932){
var args = cljs.core.seq(arglist__8932);
return G__8930__delegate(args);
});
G__8930.cljs$core$IFn$_invoke$arity$variadic = G__8930__delegate;
return G__8930;
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
