goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18582 = arguments.length;
var i__4737__auto___18583 = (0);
while(true){
if((i__4737__auto___18583 < len__4736__auto___18582)){
args__4742__auto__.push((arguments[i__4737__auto___18583]));

var G__18584 = (i__4737__auto___18583 + (1));
i__4737__auto___18583 = G__18584;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18493){
var G__18494 = cljs.core.first(seq18493);
var seq18493__$1 = cljs.core.next(seq18493);
var G__18495 = cljs.core.first(seq18493__$1);
var seq18493__$2 = cljs.core.next(seq18493__$1);
var G__18496 = cljs.core.first(seq18493__$2);
var seq18493__$3 = cljs.core.next(seq18493__$2);
var G__18497 = cljs.core.first(seq18493__$3);
var seq18493__$4 = cljs.core.next(seq18493__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18494,G__18495,G__18496,G__18497,seq18493__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18585 = arguments.length;
var i__4737__auto___18586 = (0);
while(true){
if((i__4737__auto___18586 < len__4736__auto___18585)){
args__4742__auto__.push((arguments[i__4737__auto___18586]));

var G__18587 = (i__4737__auto___18586 + (1));
i__4737__auto___18586 = G__18587;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18458__auto__,rest__18459__auto__){
var convert_case__18460__auto__ = (function (p1__18457__18461__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18457__18461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18459__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18458__auto__,convert_case__18460__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18501){
var G__18502 = cljs.core.first(seq18501);
var seq18501__$1 = cljs.core.next(seq18501);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18502,seq18501__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18588 = arguments.length;
var i__4737__auto___18589 = (0);
while(true){
if((i__4737__auto___18589 < len__4736__auto___18588)){
args__4742__auto__.push((arguments[i__4737__auto___18589]));

var G__18590 = (i__4737__auto___18589 + (1));
i__4737__auto___18589 = G__18590;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18503){
var G__18504 = cljs.core.first(seq18503);
var seq18503__$1 = cljs.core.next(seq18503);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18504,seq18503__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18591 = arguments.length;
var i__4737__auto___18592 = (0);
while(true){
if((i__4737__auto___18592 < len__4736__auto___18591)){
args__4742__auto__.push((arguments[i__4737__auto___18592]));

var G__18593 = (i__4737__auto___18592 + (1));
i__4737__auto___18592 = G__18593;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18505){
var G__18506 = cljs.core.first(seq18505);
var seq18505__$1 = cljs.core.next(seq18505);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18506,seq18505__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18595 = arguments.length;
var i__4737__auto___18596 = (0);
while(true){
if((i__4737__auto___18596 < len__4736__auto___18595)){
args__4742__auto__.push((arguments[i__4737__auto___18596]));

var G__18598 = (i__4737__auto___18596 + (1));
i__4737__auto___18596 = G__18598;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18509){
var G__18510 = cljs.core.first(seq18509);
var seq18509__$1 = cljs.core.next(seq18509);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18510,seq18509__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18599 = arguments.length;
var i__4737__auto___18600 = (0);
while(true){
if((i__4737__auto___18600 < len__4736__auto___18599)){
args__4742__auto__.push((arguments[i__4737__auto___18600]));

var G__18601 = (i__4737__auto___18600 + (1));
i__4737__auto___18600 = G__18601;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18458__auto__,rest__18459__auto__){
var convert_case__18460__auto__ = (function (p1__18457__18461__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18457__18461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18459__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18458__auto__,convert_case__18460__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18517){
var G__18518 = cljs.core.first(seq18517);
var seq18517__$1 = cljs.core.next(seq18517);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18518,seq18517__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18604 = arguments.length;
var i__4737__auto___18605 = (0);
while(true){
if((i__4737__auto___18605 < len__4736__auto___18604)){
args__4742__auto__.push((arguments[i__4737__auto___18605]));

var G__18606 = (i__4737__auto___18605 + (1));
i__4737__auto___18605 = G__18606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18519){
var G__18520 = cljs.core.first(seq18519);
var seq18519__$1 = cljs.core.next(seq18519);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18520,seq18519__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18609 = arguments.length;
var i__4737__auto___18610 = (0);
while(true){
if((i__4737__auto___18610 < len__4736__auto___18609)){
args__4742__auto__.push((arguments[i__4737__auto___18610]));

var G__18611 = (i__4737__auto___18610 + (1));
i__4737__auto___18610 = G__18611;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18521){
var G__18522 = cljs.core.first(seq18521);
var seq18521__$1 = cljs.core.next(seq18521);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18522,seq18521__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18612 = arguments.length;
var i__4737__auto___18613 = (0);
while(true){
if((i__4737__auto___18613 < len__4736__auto___18612)){
args__4742__auto__.push((arguments[i__4737__auto___18613]));

var G__18614 = (i__4737__auto___18613 + (1));
i__4737__auto___18613 = G__18614;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18523){
var G__18524 = cljs.core.first(seq18523);
var seq18523__$1 = cljs.core.next(seq18523);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18524,seq18523__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18615 = arguments.length;
var i__4737__auto___18616 = (0);
while(true){
if((i__4737__auto___18616 < len__4736__auto___18615)){
args__4742__auto__.push((arguments[i__4737__auto___18616]));

var G__18617 = (i__4737__auto___18616 + (1));
i__4737__auto___18616 = G__18617;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18458__auto__,rest__18459__auto__){
var convert_case__18460__auto__ = (function (p1__18457__18461__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18457__18461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18459__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18458__auto__,convert_case__18460__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18529){
var G__18530 = cljs.core.first(seq18529);
var seq18529__$1 = cljs.core.next(seq18529);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18530,seq18529__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18618 = arguments.length;
var i__4737__auto___18619 = (0);
while(true){
if((i__4737__auto___18619 < len__4736__auto___18618)){
args__4742__auto__.push((arguments[i__4737__auto___18619]));

var G__18620 = (i__4737__auto___18619 + (1));
i__4737__auto___18619 = G__18620;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18531){
var G__18532 = cljs.core.first(seq18531);
var seq18531__$1 = cljs.core.next(seq18531);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18532,seq18531__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18622 = arguments.length;
var i__4737__auto___18623 = (0);
while(true){
if((i__4737__auto___18623 < len__4736__auto___18622)){
args__4742__auto__.push((arguments[i__4737__auto___18623]));

var G__18624 = (i__4737__auto___18623 + (1));
i__4737__auto___18623 = G__18624;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18533){
var G__18534 = cljs.core.first(seq18533);
var seq18533__$1 = cljs.core.next(seq18533);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18534,seq18533__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18625 = arguments.length;
var i__4737__auto___18626 = (0);
while(true){
if((i__4737__auto___18626 < len__4736__auto___18625)){
args__4742__auto__.push((arguments[i__4737__auto___18626]));

var G__18627 = (i__4737__auto___18626 + (1));
i__4737__auto___18626 = G__18627;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18535){
var G__18536 = cljs.core.first(seq18535);
var seq18535__$1 = cljs.core.next(seq18535);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18536,seq18535__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18628 = arguments.length;
var i__4737__auto___18629 = (0);
while(true){
if((i__4737__auto___18629 < len__4736__auto___18628)){
args__4742__auto__.push((arguments[i__4737__auto___18629]));

var G__18630 = (i__4737__auto___18629 + (1));
i__4737__auto___18629 = G__18630;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18458__auto__,rest__18459__auto__){
var convert_case__18460__auto__ = (function (p1__18457__18461__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18457__18461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18459__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18458__auto__,convert_case__18460__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18537){
var G__18538 = cljs.core.first(seq18537);
var seq18537__$1 = cljs.core.next(seq18537);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18538,seq18537__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18631 = arguments.length;
var i__4737__auto___18632 = (0);
while(true){
if((i__4737__auto___18632 < len__4736__auto___18631)){
args__4742__auto__.push((arguments[i__4737__auto___18632]));

var G__18633 = (i__4737__auto___18632 + (1));
i__4737__auto___18632 = G__18633;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18539){
var G__18540 = cljs.core.first(seq18539);
var seq18539__$1 = cljs.core.next(seq18539);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18540,seq18539__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18651 = arguments.length;
var i__4737__auto___18652 = (0);
while(true){
if((i__4737__auto___18652 < len__4736__auto___18651)){
args__4742__auto__.push((arguments[i__4737__auto___18652]));

var G__18653 = (i__4737__auto___18652 + (1));
i__4737__auto___18652 = G__18653;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18544){
var G__18545 = cljs.core.first(seq18544);
var seq18544__$1 = cljs.core.next(seq18544);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18545,seq18544__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18656 = arguments.length;
var i__4737__auto___18657 = (0);
while(true){
if((i__4737__auto___18657 < len__4736__auto___18656)){
args__4742__auto__.push((arguments[i__4737__auto___18657]));

var G__18658 = (i__4737__auto___18657 + (1));
i__4737__auto___18657 = G__18658;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18547){
var G__18548 = cljs.core.first(seq18547);
var seq18547__$1 = cljs.core.next(seq18547);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18548,seq18547__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18665 = arguments.length;
var i__4737__auto___18666 = (0);
while(true){
if((i__4737__auto___18666 < len__4736__auto___18665)){
args__4742__auto__.push((arguments[i__4737__auto___18666]));

var G__18668 = (i__4737__auto___18666 + (1));
i__4737__auto___18666 = G__18668;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18458__auto__,rest__18459__auto__){
var convert_case__18460__auto__ = (function (p1__18457__18461__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18457__18461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18459__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18458__auto__,convert_case__18460__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18551){
var G__18552 = cljs.core.first(seq18551);
var seq18551__$1 = cljs.core.next(seq18551);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18552,seq18551__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18676 = arguments.length;
var i__4737__auto___18677 = (0);
while(true){
if((i__4737__auto___18677 < len__4736__auto___18676)){
args__4742__auto__.push((arguments[i__4737__auto___18677]));

var G__18678 = (i__4737__auto___18677 + (1));
i__4737__auto___18677 = G__18678;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18553){
var G__18554 = cljs.core.first(seq18553);
var seq18553__$1 = cljs.core.next(seq18553);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18554,seq18553__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18683 = arguments.length;
var i__4737__auto___18684 = (0);
while(true){
if((i__4737__auto___18684 < len__4736__auto___18683)){
args__4742__auto__.push((arguments[i__4737__auto___18684]));

var G__18685 = (i__4737__auto___18684 + (1));
i__4737__auto___18684 = G__18685;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18555){
var G__18556 = cljs.core.first(seq18555);
var seq18555__$1 = cljs.core.next(seq18555);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18556,seq18555__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18703 = arguments.length;
var i__4737__auto___18704 = (0);
while(true){
if((i__4737__auto___18704 < len__4736__auto___18703)){
args__4742__auto__.push((arguments[i__4737__auto___18704]));

var G__18705 = (i__4737__auto___18704 + (1));
i__4737__auto___18704 = G__18705;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18560){
var G__18561 = cljs.core.first(seq18560);
var seq18560__$1 = cljs.core.next(seq18560);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18561,seq18560__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18709 = arguments.length;
var i__4737__auto___18710 = (0);
while(true){
if((i__4737__auto___18710 < len__4736__auto___18709)){
args__4742__auto__.push((arguments[i__4737__auto___18710]));

var G__18711 = (i__4737__auto___18710 + (1));
i__4737__auto___18710 = G__18711;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18458__auto__,rest__18459__auto__){
var convert_case__18460__auto__ = (function (p1__18457__18461__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18457__18461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18459__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18458__auto__,convert_case__18460__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18564){
var G__18565 = cljs.core.first(seq18564);
var seq18564__$1 = cljs.core.next(seq18564);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18565,seq18564__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18717 = arguments.length;
var i__4737__auto___18718 = (0);
while(true){
if((i__4737__auto___18718 < len__4736__auto___18717)){
args__4742__auto__.push((arguments[i__4737__auto___18718]));

var G__18719 = (i__4737__auto___18718 + (1));
i__4737__auto___18718 = G__18719;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18566){
var G__18567 = cljs.core.first(seq18566);
var seq18566__$1 = cljs.core.next(seq18566);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18567,seq18566__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18748 = arguments.length;
var i__4737__auto___18749 = (0);
while(true){
if((i__4737__auto___18749 < len__4736__auto___18748)){
args__4742__auto__.push((arguments[i__4737__auto___18749]));

var G__18750 = (i__4737__auto___18749 + (1));
i__4737__auto___18749 = G__18750;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18568){
var G__18569 = cljs.core.first(seq18568);
var seq18568__$1 = cljs.core.next(seq18568);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18569,seq18568__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18753 = arguments.length;
var i__4737__auto___18754 = (0);
while(true){
if((i__4737__auto___18754 < len__4736__auto___18753)){
args__4742__auto__.push((arguments[i__4737__auto___18754]));

var G__18760 = (i__4737__auto___18754 + (1));
i__4737__auto___18754 = G__18760;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18570){
var G__18571 = cljs.core.first(seq18570);
var seq18570__$1 = cljs.core.next(seq18570);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18571,seq18570__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18762 = arguments.length;
var i__4737__auto___18763 = (0);
while(true){
if((i__4737__auto___18763 < len__4736__auto___18762)){
args__4742__auto__.push((arguments[i__4737__auto___18763]));

var G__18764 = (i__4737__auto___18763 + (1));
i__4737__auto___18763 = G__18764;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18458__auto__,rest__18459__auto__){
var convert_case__18460__auto__ = (function (p1__18457__18461__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18457__18461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18459__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18458__auto__,convert_case__18460__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18572){
var G__18573 = cljs.core.first(seq18572);
var seq18572__$1 = cljs.core.next(seq18572);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18573,seq18572__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18768 = arguments.length;
var i__4737__auto___18769 = (0);
while(true){
if((i__4737__auto___18769 < len__4736__auto___18768)){
args__4742__auto__.push((arguments[i__4737__auto___18769]));

var G__18771 = (i__4737__auto___18769 + (1));
i__4737__auto___18769 = G__18771;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18574){
var G__18575 = cljs.core.first(seq18574);
var seq18574__$1 = cljs.core.next(seq18574);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18575,seq18574__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18772 = arguments.length;
var i__4737__auto___18773 = (0);
while(true){
if((i__4737__auto___18773 < len__4736__auto___18772)){
args__4742__auto__.push((arguments[i__4737__auto___18773]));

var G__18774 = (i__4737__auto___18773 + (1));
i__4737__auto___18773 = G__18774;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18576){
var G__18577 = cljs.core.first(seq18576);
var seq18576__$1 = cljs.core.next(seq18576);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18577,seq18576__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18775 = arguments.length;
var i__4737__auto___18776 = (0);
while(true){
if((i__4737__auto___18776 < len__4736__auto___18775)){
args__4742__auto__.push((arguments[i__4737__auto___18776]));

var G__18777 = (i__4737__auto___18776 + (1));
i__4737__auto___18776 = G__18777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18463__auto__,rest__18464__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18464__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18578){
var G__18579 = cljs.core.first(seq18578);
var seq18578__$1 = cljs.core.next(seq18578);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18579,seq18578__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
