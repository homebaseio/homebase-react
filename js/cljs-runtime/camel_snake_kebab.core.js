goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18581 = arguments.length;
var i__4737__auto___18582 = (0);
while(true){
if((i__4737__auto___18582 < len__4736__auto___18581)){
args__4742__auto__.push((arguments[i__4737__auto___18582]));

var G__18583 = (i__4737__auto___18582 + (1));
i__4737__auto___18582 = G__18583;
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
var len__4736__auto___18584 = arguments.length;
var i__4737__auto___18585 = (0);
while(true){
if((i__4737__auto___18585 < len__4736__auto___18584)){
args__4742__auto__.push((arguments[i__4737__auto___18585]));

var G__18586 = (i__4737__auto___18585 + (1));
i__4737__auto___18585 = G__18586;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18455__auto__,rest__18456__auto__){
var convert_case__18457__auto__ = (function (p1__18454__18458__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18454__18458__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18456__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18455__auto__,convert_case__18457__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18498){
var G__18499 = cljs.core.first(seq18498);
var seq18498__$1 = cljs.core.next(seq18498);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18499,seq18498__$1);
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
var len__4736__auto___18596 = arguments.length;
var i__4737__auto___18597 = (0);
while(true){
if((i__4737__auto___18597 < len__4736__auto___18596)){
args__4742__auto__.push((arguments[i__4737__auto___18597]));

var G__18598 = (i__4737__auto___18597 + (1));
i__4737__auto___18597 = G__18598;
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

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18455__auto__,rest__18456__auto__){
var convert_case__18457__auto__ = (function (p1__18454__18458__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18454__18458__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18456__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18455__auto__,convert_case__18457__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18511){
var G__18512 = cljs.core.first(seq18511);
var seq18511__$1 = cljs.core.next(seq18511);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18512,seq18511__$1);
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18513){
var G__18514 = cljs.core.first(seq18513);
var seq18513__$1 = cljs.core.next(seq18513);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18514,seq18513__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18607 = arguments.length;
var i__4737__auto___18608 = (0);
while(true){
if((i__4737__auto___18608 < len__4736__auto___18607)){
args__4742__auto__.push((arguments[i__4737__auto___18608]));

var G__18609 = (i__4737__auto___18608 + (1));
i__4737__auto___18608 = G__18609;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18515){
var G__18516 = cljs.core.first(seq18515);
var seq18515__$1 = cljs.core.next(seq18515);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18516,seq18515__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18610 = arguments.length;
var i__4737__auto___18611 = (0);
while(true){
if((i__4737__auto___18611 < len__4736__auto___18610)){
args__4742__auto__.push((arguments[i__4737__auto___18611]));

var G__18612 = (i__4737__auto___18611 + (1));
i__4737__auto___18611 = G__18612;
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
var len__4736__auto___18613 = arguments.length;
var i__4737__auto___18614 = (0);
while(true){
if((i__4737__auto___18614 < len__4736__auto___18613)){
args__4742__auto__.push((arguments[i__4737__auto___18614]));

var G__18615 = (i__4737__auto___18614 + (1));
i__4737__auto___18614 = G__18615;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18455__auto__,rest__18456__auto__){
var convert_case__18457__auto__ = (function (p1__18454__18458__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18454__18458__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18456__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18455__auto__,convert_case__18457__auto__);
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
var len__4736__auto___18616 = arguments.length;
var i__4737__auto___18617 = (0);
while(true){
if((i__4737__auto___18617 < len__4736__auto___18616)){
args__4742__auto__.push((arguments[i__4737__auto___18617]));

var G__18618 = (i__4737__auto___18617 + (1));
i__4737__auto___18617 = G__18618;
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
var len__4736__auto___18619 = arguments.length;
var i__4737__auto___18620 = (0);
while(true){
if((i__4737__auto___18620 < len__4736__auto___18619)){
args__4742__auto__.push((arguments[i__4737__auto___18620]));

var G__18621 = (i__4737__auto___18620 + (1));
i__4737__auto___18620 = G__18621;
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
var len__4736__auto___18627 = arguments.length;
var i__4737__auto___18628 = (0);
while(true){
if((i__4737__auto___18628 < len__4736__auto___18627)){
args__4742__auto__.push((arguments[i__4737__auto___18628]));

var G__18629 = (i__4737__auto___18628 + (1));
i__4737__auto___18628 = G__18629;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18455__auto__,rest__18456__auto__){
var convert_case__18457__auto__ = (function (p1__18454__18458__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18454__18458__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18456__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18455__auto__,convert_case__18457__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18540){
var G__18541 = cljs.core.first(seq18540);
var seq18540__$1 = cljs.core.next(seq18540);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18541,seq18540__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18630 = arguments.length;
var i__4737__auto___18631 = (0);
while(true){
if((i__4737__auto___18631 < len__4736__auto___18630)){
args__4742__auto__.push((arguments[i__4737__auto___18631]));

var G__18632 = (i__4737__auto___18631 + (1));
i__4737__auto___18631 = G__18632;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18542){
var G__18543 = cljs.core.first(seq18542);
var seq18542__$1 = cljs.core.next(seq18542);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18543,seq18542__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18633 = arguments.length;
var i__4737__auto___18634 = (0);
while(true){
if((i__4737__auto___18634 < len__4736__auto___18633)){
args__4742__auto__.push((arguments[i__4737__auto___18634]));

var G__18635 = (i__4737__auto___18634 + (1));
i__4737__auto___18634 = G__18635;
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
var len__4736__auto___18636 = arguments.length;
var i__4737__auto___18637 = (0);
while(true){
if((i__4737__auto___18637 < len__4736__auto___18636)){
args__4742__auto__.push((arguments[i__4737__auto___18637]));

var G__18639 = (i__4737__auto___18637 + (1));
i__4737__auto___18637 = G__18639;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18546){
var G__18547 = cljs.core.first(seq18546);
var seq18546__$1 = cljs.core.next(seq18546);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18547,seq18546__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18640 = arguments.length;
var i__4737__auto___18641 = (0);
while(true){
if((i__4737__auto___18641 < len__4736__auto___18640)){
args__4742__auto__.push((arguments[i__4737__auto___18641]));

var G__18642 = (i__4737__auto___18641 + (1));
i__4737__auto___18641 = G__18642;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18455__auto__,rest__18456__auto__){
var convert_case__18457__auto__ = (function (p1__18454__18458__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18454__18458__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18456__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18455__auto__,convert_case__18457__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18549){
var G__18550 = cljs.core.first(seq18549);
var seq18549__$1 = cljs.core.next(seq18549);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18550,seq18549__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18660 = arguments.length;
var i__4737__auto___18661 = (0);
while(true){
if((i__4737__auto___18661 < len__4736__auto___18660)){
args__4742__auto__.push((arguments[i__4737__auto___18661]));

var G__18662 = (i__4737__auto___18661 + (1));
i__4737__auto___18661 = G__18662;
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
var len__4736__auto___18663 = arguments.length;
var i__4737__auto___18664 = (0);
while(true){
if((i__4737__auto___18664 < len__4736__auto___18663)){
args__4742__auto__.push((arguments[i__4737__auto___18664]));

var G__18665 = (i__4737__auto___18664 + (1));
i__4737__auto___18664 = G__18665;
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
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18557){
var G__18558 = cljs.core.first(seq18557);
var seq18557__$1 = cljs.core.next(seq18557);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18558,seq18557__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18666 = arguments.length;
var i__4737__auto___18667 = (0);
while(true){
if((i__4737__auto___18667 < len__4736__auto___18666)){
args__4742__auto__.push((arguments[i__4737__auto___18667]));

var G__18668 = (i__4737__auto___18667 + (1));
i__4737__auto___18667 = G__18668;
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
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18559){
var G__18560 = cljs.core.first(seq18559);
var seq18559__$1 = cljs.core.next(seq18559);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18560,seq18559__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18669 = arguments.length;
var i__4737__auto___18670 = (0);
while(true){
if((i__4737__auto___18670 < len__4736__auto___18669)){
args__4742__auto__.push((arguments[i__4737__auto___18670]));

var G__18671 = (i__4737__auto___18670 + (1));
i__4737__auto___18670 = G__18671;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18455__auto__,rest__18456__auto__){
var convert_case__18457__auto__ = (function (p1__18454__18458__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18454__18458__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18456__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18455__auto__,convert_case__18457__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18561){
var G__18562 = cljs.core.first(seq18561);
var seq18561__$1 = cljs.core.next(seq18561);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18562,seq18561__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18672 = arguments.length;
var i__4737__auto___18673 = (0);
while(true){
if((i__4737__auto___18673 < len__4736__auto___18672)){
args__4742__auto__.push((arguments[i__4737__auto___18673]));

var G__18674 = (i__4737__auto___18673 + (1));
i__4737__auto___18673 = G__18674;
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
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18565){
var G__18566 = cljs.core.first(seq18565);
var seq18565__$1 = cljs.core.next(seq18565);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18566,seq18565__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18685 = arguments.length;
var i__4737__auto___18686 = (0);
while(true){
if((i__4737__auto___18686 < len__4736__auto___18685)){
args__4742__auto__.push((arguments[i__4737__auto___18686]));

var G__18687 = (i__4737__auto___18686 + (1));
i__4737__auto___18686 = G__18687;
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
var len__4736__auto___18688 = arguments.length;
var i__4737__auto___18689 = (0);
while(true){
if((i__4737__auto___18689 < len__4736__auto___18688)){
args__4742__auto__.push((arguments[i__4737__auto___18689]));

var G__18690 = (i__4737__auto___18689 + (1));
i__4737__auto___18689 = G__18690;
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
var len__4736__auto___18691 = arguments.length;
var i__4737__auto___18692 = (0);
while(true){
if((i__4737__auto___18692 < len__4736__auto___18691)){
args__4742__auto__.push((arguments[i__4737__auto___18692]));

var G__18693 = (i__4737__auto___18692 + (1));
i__4737__auto___18692 = G__18693;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18455__auto__,rest__18456__auto__){
var convert_case__18457__auto__ = (function (p1__18454__18458__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18454__18458__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18456__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18455__auto__,convert_case__18457__auto__);
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
var len__4736__auto___18694 = arguments.length;
var i__4737__auto___18695 = (0);
while(true){
if((i__4737__auto___18695 < len__4736__auto___18694)){
args__4742__auto__.push((arguments[i__4737__auto___18695]));

var G__18696 = (i__4737__auto___18695 + (1));
i__4737__auto___18695 = G__18696;
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
var len__4736__auto___18697 = arguments.length;
var i__4737__auto___18698 = (0);
while(true){
if((i__4737__auto___18698 < len__4736__auto___18697)){
args__4742__auto__.push((arguments[i__4737__auto___18698]));

var G__18699 = (i__4737__auto___18698 + (1));
i__4737__auto___18698 = G__18699;
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
var len__4736__auto___18700 = arguments.length;
var i__4737__auto___18701 = (0);
while(true){
if((i__4737__auto___18701 < len__4736__auto___18700)){
args__4742__auto__.push((arguments[i__4737__auto___18701]));

var G__18702 = (i__4737__auto___18701 + (1));
i__4737__auto___18701 = G__18702;
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18579){
var G__18580 = cljs.core.first(seq18579);
var seq18579__$1 = cljs.core.next(seq18579);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18580,seq18579__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
