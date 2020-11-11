goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18580 = arguments.length;
var i__4737__auto___18581 = (0);
while(true){
if((i__4737__auto___18581 < len__4736__auto___18580)){
args__4742__auto__.push((arguments[i__4737__auto___18581]));

var G__18582 = (i__4737__auto___18581 + (1));
i__4737__auto___18581 = G__18582;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18472){
var G__18473 = cljs.core.first(seq18472);
var seq18472__$1 = cljs.core.next(seq18472);
var G__18474 = cljs.core.first(seq18472__$1);
var seq18472__$2 = cljs.core.next(seq18472__$1);
var G__18475 = cljs.core.first(seq18472__$2);
var seq18472__$3 = cljs.core.next(seq18472__$2);
var G__18476 = cljs.core.first(seq18472__$3);
var seq18472__$4 = cljs.core.next(seq18472__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18473,G__18474,G__18475,G__18476,seq18472__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18583 = arguments.length;
var i__4737__auto___18584 = (0);
while(true){
if((i__4737__auto___18584 < len__4736__auto___18583)){
args__4742__auto__.push((arguments[i__4737__auto___18584]));

var G__18585 = (i__4737__auto___18584 + (1));
i__4737__auto___18584 = G__18585;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18429__auto__,rest__18430__auto__){
var convert_case__18431__auto__ = (function (p1__18428__18432__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18428__18432__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18430__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18429__auto__,convert_case__18431__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18481){
var G__18482 = cljs.core.first(seq18481);
var seq18481__$1 = cljs.core.next(seq18481);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18482,seq18481__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18586 = arguments.length;
var i__4737__auto___18587 = (0);
while(true){
if((i__4737__auto___18587 < len__4736__auto___18586)){
args__4742__auto__.push((arguments[i__4737__auto___18587]));

var G__18588 = (i__4737__auto___18587 + (1));
i__4737__auto___18587 = G__18588;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18483){
var G__18484 = cljs.core.first(seq18483);
var seq18483__$1 = cljs.core.next(seq18483);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18484,seq18483__$1);
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

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18485){
var G__18486 = cljs.core.first(seq18485);
var seq18485__$1 = cljs.core.next(seq18485);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18486,seq18485__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18594 = arguments.length;
var i__4737__auto___18595 = (0);
while(true){
if((i__4737__auto___18595 < len__4736__auto___18594)){
args__4742__auto__.push((arguments[i__4737__auto___18595]));

var G__18596 = (i__4737__auto___18595 + (1));
i__4737__auto___18595 = G__18596;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18487){
var G__18488 = cljs.core.first(seq18487);
var seq18487__$1 = cljs.core.next(seq18487);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18488,seq18487__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18597 = arguments.length;
var i__4737__auto___18598 = (0);
while(true){
if((i__4737__auto___18598 < len__4736__auto___18597)){
args__4742__auto__.push((arguments[i__4737__auto___18598]));

var G__18599 = (i__4737__auto___18598 + (1));
i__4737__auto___18598 = G__18599;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18429__auto__,rest__18430__auto__){
var convert_case__18431__auto__ = (function (p1__18428__18432__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18428__18432__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18430__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18429__auto__,convert_case__18431__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18489){
var G__18490 = cljs.core.first(seq18489);
var seq18489__$1 = cljs.core.next(seq18489);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18490,seq18489__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18600 = arguments.length;
var i__4737__auto___18601 = (0);
while(true){
if((i__4737__auto___18601 < len__4736__auto___18600)){
args__4742__auto__.push((arguments[i__4737__auto___18601]));

var G__18602 = (i__4737__auto___18601 + (1));
i__4737__auto___18601 = G__18602;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18494){
var G__18495 = cljs.core.first(seq18494);
var seq18494__$1 = cljs.core.next(seq18494);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18495,seq18494__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18603 = arguments.length;
var i__4737__auto___18604 = (0);
while(true){
if((i__4737__auto___18604 < len__4736__auto___18603)){
args__4742__auto__.push((arguments[i__4737__auto___18604]));

var G__18605 = (i__4737__auto___18604 + (1));
i__4737__auto___18604 = G__18605;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18496){
var G__18497 = cljs.core.first(seq18496);
var seq18496__$1 = cljs.core.next(seq18496);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18497,seq18496__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18606 = arguments.length;
var i__4737__auto___18607 = (0);
while(true){
if((i__4737__auto___18607 < len__4736__auto___18606)){
args__4742__auto__.push((arguments[i__4737__auto___18607]));

var G__18608 = (i__4737__auto___18607 + (1));
i__4737__auto___18607 = G__18608;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18499){
var G__18500 = cljs.core.first(seq18499);
var seq18499__$1 = cljs.core.next(seq18499);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18500,seq18499__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
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
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18429__auto__,rest__18430__auto__){
var convert_case__18431__auto__ = (function (p1__18428__18432__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18428__18432__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18430__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18429__auto__,convert_case__18431__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18501){
var G__18502 = cljs.core.first(seq18501);
var seq18501__$1 = cljs.core.next(seq18501);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18502,seq18501__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18503){
var G__18504 = cljs.core.first(seq18503);
var seq18503__$1 = cljs.core.next(seq18503);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18504,seq18503__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18508){
var G__18509 = cljs.core.first(seq18508);
var seq18508__$1 = cljs.core.next(seq18508);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18509,seq18508__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18515){
var G__18516 = cljs.core.first(seq18515);
var seq18515__$1 = cljs.core.next(seq18515);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18516,seq18515__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18621 = arguments.length;
var i__4737__auto___18622 = (0);
while(true){
if((i__4737__auto___18622 < len__4736__auto___18621)){
args__4742__auto__.push((arguments[i__4737__auto___18622]));

var G__18623 = (i__4737__auto___18622 + (1));
i__4737__auto___18622 = G__18623;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18429__auto__,rest__18430__auto__){
var convert_case__18431__auto__ = (function (p1__18428__18432__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18428__18432__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18430__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18429__auto__,convert_case__18431__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18522){
var G__18523 = cljs.core.first(seq18522);
var seq18522__$1 = cljs.core.next(seq18522);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18523,seq18522__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18624 = arguments.length;
var i__4737__auto___18625 = (0);
while(true){
if((i__4737__auto___18625 < len__4736__auto___18624)){
args__4742__auto__.push((arguments[i__4737__auto___18625]));

var G__18626 = (i__4737__auto___18625 + (1));
i__4737__auto___18625 = G__18626;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18524){
var G__18525 = cljs.core.first(seq18524);
var seq18524__$1 = cljs.core.next(seq18524);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18525,seq18524__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18526){
var G__18527 = cljs.core.first(seq18526);
var seq18526__$1 = cljs.core.next(seq18526);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18527,seq18526__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18632 = arguments.length;
var i__4737__auto___18633 = (0);
while(true){
if((i__4737__auto___18633 < len__4736__auto___18632)){
args__4742__auto__.push((arguments[i__4737__auto___18633]));

var G__18634 = (i__4737__auto___18633 + (1));
i__4737__auto___18633 = G__18634;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18528){
var G__18529 = cljs.core.first(seq18528);
var seq18528__$1 = cljs.core.next(seq18528);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18529,seq18528__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18637 = arguments.length;
var i__4737__auto___18638 = (0);
while(true){
if((i__4737__auto___18638 < len__4736__auto___18637)){
args__4742__auto__.push((arguments[i__4737__auto___18638]));

var G__18639 = (i__4737__auto___18638 + (1));
i__4737__auto___18638 = G__18639;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18429__auto__,rest__18430__auto__){
var convert_case__18431__auto__ = (function (p1__18428__18432__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18428__18432__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18430__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18429__auto__,convert_case__18431__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18530){
var G__18531 = cljs.core.first(seq18530);
var seq18530__$1 = cljs.core.next(seq18530);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18531,seq18530__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18640 = arguments.length;
var i__4737__auto___18641 = (0);
while(true){
if((i__4737__auto___18641 < len__4736__auto___18640)){
args__4742__auto__.push((arguments[i__4737__auto___18641]));

var G__18643 = (i__4737__auto___18641 + (1));
i__4737__auto___18641 = G__18643;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18541){
var G__18542 = cljs.core.first(seq18541);
var seq18541__$1 = cljs.core.next(seq18541);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18542,seq18541__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18645 = arguments.length;
var i__4737__auto___18646 = (0);
while(true){
if((i__4737__auto___18646 < len__4736__auto___18645)){
args__4742__auto__.push((arguments[i__4737__auto___18646]));

var G__18647 = (i__4737__auto___18646 + (1));
i__4737__auto___18646 = G__18647;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18543){
var G__18544 = cljs.core.first(seq18543);
var seq18543__$1 = cljs.core.next(seq18543);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18544,seq18543__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18648 = arguments.length;
var i__4737__auto___18649 = (0);
while(true){
if((i__4737__auto___18649 < len__4736__auto___18648)){
args__4742__auto__.push((arguments[i__4737__auto___18649]));

var G__18650 = (i__4737__auto___18649 + (1));
i__4737__auto___18649 = G__18650;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18545){
var G__18546 = cljs.core.first(seq18545);
var seq18545__$1 = cljs.core.next(seq18545);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18546,seq18545__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18429__auto__,rest__18430__auto__){
var convert_case__18431__auto__ = (function (p1__18428__18432__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18428__18432__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18430__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18429__auto__,convert_case__18431__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18553){
var G__18554 = cljs.core.first(seq18553);
var seq18553__$1 = cljs.core.next(seq18553);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18554,seq18553__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18654 = arguments.length;
var i__4737__auto___18655 = (0);
while(true){
if((i__4737__auto___18655 < len__4736__auto___18654)){
args__4742__auto__.push((arguments[i__4737__auto___18655]));

var G__18656 = (i__4737__auto___18655 + (1));
i__4737__auto___18655 = G__18656;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18555){
var G__18556 = cljs.core.first(seq18555);
var seq18555__$1 = cljs.core.next(seq18555);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18556,seq18555__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18657 = arguments.length;
var i__4737__auto___18658 = (0);
while(true){
if((i__4737__auto___18658 < len__4736__auto___18657)){
args__4742__auto__.push((arguments[i__4737__auto___18658]));

var G__18659 = (i__4737__auto___18658 + (1));
i__4737__auto___18658 = G__18659;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18557){
var G__18558 = cljs.core.first(seq18557);
var seq18557__$1 = cljs.core.next(seq18557);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18558,seq18557__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18559){
var G__18560 = cljs.core.first(seq18559);
var seq18559__$1 = cljs.core.next(seq18559);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18560,seq18559__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18664 = arguments.length;
var i__4737__auto___18665 = (0);
while(true){
if((i__4737__auto___18665 < len__4736__auto___18664)){
args__4742__auto__.push((arguments[i__4737__auto___18665]));

var G__18666 = (i__4737__auto___18665 + (1));
i__4737__auto___18665 = G__18666;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18429__auto__,rest__18430__auto__){
var convert_case__18431__auto__ = (function (p1__18428__18432__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18428__18432__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18430__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18429__auto__,convert_case__18431__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18566){
var G__18567 = cljs.core.first(seq18566);
var seq18566__$1 = cljs.core.next(seq18566);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18567,seq18566__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18667 = arguments.length;
var i__4737__auto___18668 = (0);
while(true){
if((i__4737__auto___18668 < len__4736__auto___18667)){
args__4742__auto__.push((arguments[i__4737__auto___18668]));

var G__18669 = (i__4737__auto___18668 + (1));
i__4737__auto___18668 = G__18669;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18568){
var G__18569 = cljs.core.first(seq18568);
var seq18568__$1 = cljs.core.next(seq18568);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18569,seq18568__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18673 = arguments.length;
var i__4737__auto___18674 = (0);
while(true){
if((i__4737__auto___18674 < len__4736__auto___18673)){
args__4742__auto__.push((arguments[i__4737__auto___18674]));

var G__18675 = (i__4737__auto___18674 + (1));
i__4737__auto___18674 = G__18675;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18570){
var G__18571 = cljs.core.first(seq18570);
var seq18570__$1 = cljs.core.next(seq18570);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18571,seq18570__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18434__auto__,rest__18435__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18434__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18435__auto__], 0)));
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
