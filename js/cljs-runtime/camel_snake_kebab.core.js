goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18643 = arguments.length;
var i__4737__auto___18644 = (0);
while(true){
if((i__4737__auto___18644 < len__4736__auto___18643)){
args__4742__auto__.push((arguments[i__4737__auto___18644]));

var G__18645 = (i__4737__auto___18644 + (1));
i__4737__auto___18644 = G__18645;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18508){
var G__18509 = cljs.core.first(seq18508);
var seq18508__$1 = cljs.core.next(seq18508);
var G__18510 = cljs.core.first(seq18508__$1);
var seq18508__$2 = cljs.core.next(seq18508__$1);
var G__18511 = cljs.core.first(seq18508__$2);
var seq18508__$3 = cljs.core.next(seq18508__$2);
var G__18512 = cljs.core.first(seq18508__$3);
var seq18508__$4 = cljs.core.next(seq18508__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18509,G__18510,G__18511,G__18512,seq18508__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18649 = arguments.length;
var i__4737__auto___18650 = (0);
while(true){
if((i__4737__auto___18650 < len__4736__auto___18649)){
args__4742__auto__.push((arguments[i__4737__auto___18650]));

var G__18651 = (i__4737__auto___18650 + (1));
i__4737__auto___18650 = G__18651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18462__auto__,rest__18463__auto__){
var convert_case__18464__auto__ = (function (p1__18461__18465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18461__18465__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18462__auto__,convert_case__18464__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18513){
var G__18514 = cljs.core.first(seq18513);
var seq18513__$1 = cljs.core.next(seq18513);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18514,seq18513__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18652 = arguments.length;
var i__4737__auto___18653 = (0);
while(true){
if((i__4737__auto___18653 < len__4736__auto___18652)){
args__4742__auto__.push((arguments[i__4737__auto___18653]));

var G__18654 = (i__4737__auto___18653 + (1));
i__4737__auto___18653 = G__18654;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18515){
var G__18516 = cljs.core.first(seq18515);
var seq18515__$1 = cljs.core.next(seq18515);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18516,seq18515__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18655 = arguments.length;
var i__4737__auto___18656 = (0);
while(true){
if((i__4737__auto___18656 < len__4736__auto___18655)){
args__4742__auto__.push((arguments[i__4737__auto___18656]));

var G__18657 = (i__4737__auto___18656 + (1));
i__4737__auto___18656 = G__18657;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18520){
var G__18521 = cljs.core.first(seq18520);
var seq18520__$1 = cljs.core.next(seq18520);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18521,seq18520__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18658 = arguments.length;
var i__4737__auto___18659 = (0);
while(true){
if((i__4737__auto___18659 < len__4736__auto___18658)){
args__4742__auto__.push((arguments[i__4737__auto___18659]));

var G__18660 = (i__4737__auto___18659 + (1));
i__4737__auto___18659 = G__18660;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18522){
var G__18523 = cljs.core.first(seq18522);
var seq18522__$1 = cljs.core.next(seq18522);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18523,seq18522__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18661 = arguments.length;
var i__4737__auto___18662 = (0);
while(true){
if((i__4737__auto___18662 < len__4736__auto___18661)){
args__4742__auto__.push((arguments[i__4737__auto___18662]));

var G__18663 = (i__4737__auto___18662 + (1));
i__4737__auto___18662 = G__18663;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18462__auto__,rest__18463__auto__){
var convert_case__18464__auto__ = (function (p1__18461__18465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18461__18465__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18462__auto__,convert_case__18464__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18524){
var G__18525 = cljs.core.first(seq18524);
var seq18524__$1 = cljs.core.next(seq18524);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18525,seq18524__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18526){
var G__18527 = cljs.core.first(seq18526);
var seq18526__$1 = cljs.core.next(seq18526);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18527,seq18526__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18535){
var G__18536 = cljs.core.first(seq18535);
var seq18535__$1 = cljs.core.next(seq18535);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18536,seq18535__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18670 = arguments.length;
var i__4737__auto___18671 = (0);
while(true){
if((i__4737__auto___18671 < len__4736__auto___18670)){
args__4742__auto__.push((arguments[i__4737__auto___18671]));

var G__18672 = (i__4737__auto___18671 + (1));
i__4737__auto___18671 = G__18672;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18537){
var G__18538 = cljs.core.first(seq18537);
var seq18537__$1 = cljs.core.next(seq18537);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18538,seq18537__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
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
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18462__auto__,rest__18463__auto__){
var convert_case__18464__auto__ = (function (p1__18461__18465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18461__18465__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18462__auto__,convert_case__18464__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18540){
var G__18541 = cljs.core.first(seq18540);
var seq18540__$1 = cljs.core.next(seq18540);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18541,seq18540__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18681 = arguments.length;
var i__4737__auto___18682 = (0);
while(true){
if((i__4737__auto___18682 < len__4736__auto___18681)){
args__4742__auto__.push((arguments[i__4737__auto___18682]));

var G__18683 = (i__4737__auto___18682 + (1));
i__4737__auto___18682 = G__18683;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18542){
var G__18543 = cljs.core.first(seq18542);
var seq18542__$1 = cljs.core.next(seq18542);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18543,seq18542__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18687 = arguments.length;
var i__4737__auto___18688 = (0);
while(true){
if((i__4737__auto___18688 < len__4736__auto___18687)){
args__4742__auto__.push((arguments[i__4737__auto___18688]));

var G__18689 = (i__4737__auto___18688 + (1));
i__4737__auto___18688 = G__18689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18544){
var G__18545 = cljs.core.first(seq18544);
var seq18544__$1 = cljs.core.next(seq18544);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18545,seq18544__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18693 = arguments.length;
var i__4737__auto___18694 = (0);
while(true){
if((i__4737__auto___18694 < len__4736__auto___18693)){
args__4742__auto__.push((arguments[i__4737__auto___18694]));

var G__18695 = (i__4737__auto___18694 + (1));
i__4737__auto___18694 = G__18695;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18548){
var G__18549 = cljs.core.first(seq18548);
var seq18548__$1 = cljs.core.next(seq18548);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18549,seq18548__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18703 = arguments.length;
var i__4737__auto___18704 = (0);
while(true){
if((i__4737__auto___18704 < len__4736__auto___18703)){
args__4742__auto__.push((arguments[i__4737__auto___18704]));

var G__18708 = (i__4737__auto___18704 + (1));
i__4737__auto___18704 = G__18708;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18462__auto__,rest__18463__auto__){
var convert_case__18464__auto__ = (function (p1__18461__18465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18461__18465__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18462__auto__,convert_case__18464__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18554){
var G__18555 = cljs.core.first(seq18554);
var seq18554__$1 = cljs.core.next(seq18554);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18555,seq18554__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18711 = arguments.length;
var i__4737__auto___18712 = (0);
while(true){
if((i__4737__auto___18712 < len__4736__auto___18711)){
args__4742__auto__.push((arguments[i__4737__auto___18712]));

var G__18713 = (i__4737__auto___18712 + (1));
i__4737__auto___18712 = G__18713;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18556){
var G__18557 = cljs.core.first(seq18556);
var seq18556__$1 = cljs.core.next(seq18556);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18557,seq18556__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18714 = arguments.length;
var i__4737__auto___18715 = (0);
while(true){
if((i__4737__auto___18715 < len__4736__auto___18714)){
args__4742__auto__.push((arguments[i__4737__auto___18715]));

var G__18716 = (i__4737__auto___18715 + (1));
i__4737__auto___18715 = G__18716;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18558){
var G__18559 = cljs.core.first(seq18558);
var seq18558__$1 = cljs.core.next(seq18558);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18559,seq18558__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18566){
var G__18567 = cljs.core.first(seq18566);
var seq18566__$1 = cljs.core.next(seq18566);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18567,seq18566__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18720 = arguments.length;
var i__4737__auto___18721 = (0);
while(true){
if((i__4737__auto___18721 < len__4736__auto___18720)){
args__4742__auto__.push((arguments[i__4737__auto___18721]));

var G__18722 = (i__4737__auto___18721 + (1));
i__4737__auto___18721 = G__18722;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18462__auto__,rest__18463__auto__){
var convert_case__18464__auto__ = (function (p1__18461__18465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18461__18465__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18462__auto__,convert_case__18464__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18568){
var G__18569 = cljs.core.first(seq18568);
var seq18568__$1 = cljs.core.next(seq18568);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18569,seq18568__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18723 = arguments.length;
var i__4737__auto___18724 = (0);
while(true){
if((i__4737__auto___18724 < len__4736__auto___18723)){
args__4742__auto__.push((arguments[i__4737__auto___18724]));

var G__18725 = (i__4737__auto___18724 + (1));
i__4737__auto___18724 = G__18725;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18581){
var G__18582 = cljs.core.first(seq18581);
var seq18581__$1 = cljs.core.next(seq18581);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18582,seq18581__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18726 = arguments.length;
var i__4737__auto___18727 = (0);
while(true){
if((i__4737__auto___18727 < len__4736__auto___18726)){
args__4742__auto__.push((arguments[i__4737__auto___18727]));

var G__18728 = (i__4737__auto___18727 + (1));
i__4737__auto___18727 = G__18728;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18591){
var G__18592 = cljs.core.first(seq18591);
var seq18591__$1 = cljs.core.next(seq18591);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18592,seq18591__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18739 = arguments.length;
var i__4737__auto___18740 = (0);
while(true){
if((i__4737__auto___18740 < len__4736__auto___18739)){
args__4742__auto__.push((arguments[i__4737__auto___18740]));

var G__18741 = (i__4737__auto___18740 + (1));
i__4737__auto___18740 = G__18741;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18604){
var G__18605 = cljs.core.first(seq18604);
var seq18604__$1 = cljs.core.next(seq18604);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18605,seq18604__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18742 = arguments.length;
var i__4737__auto___18743 = (0);
while(true){
if((i__4737__auto___18743 < len__4736__auto___18742)){
args__4742__auto__.push((arguments[i__4737__auto___18743]));

var G__18744 = (i__4737__auto___18743 + (1));
i__4737__auto___18743 = G__18744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18462__auto__,rest__18463__auto__){
var convert_case__18464__auto__ = (function (p1__18461__18465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18461__18465__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18462__auto__,convert_case__18464__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18606){
var G__18607 = cljs.core.first(seq18606);
var seq18606__$1 = cljs.core.next(seq18606);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18607,seq18606__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18752 = arguments.length;
var i__4737__auto___18753 = (0);
while(true){
if((i__4737__auto___18753 < len__4736__auto___18752)){
args__4742__auto__.push((arguments[i__4737__auto___18753]));

var G__18754 = (i__4737__auto___18753 + (1));
i__4737__auto___18753 = G__18754;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18608){
var G__18609 = cljs.core.first(seq18608);
var seq18608__$1 = cljs.core.next(seq18608);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18609,seq18608__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18756 = arguments.length;
var i__4737__auto___18758 = (0);
while(true){
if((i__4737__auto___18758 < len__4736__auto___18756)){
args__4742__auto__.push((arguments[i__4737__auto___18758]));

var G__18761 = (i__4737__auto___18758 + (1));
i__4737__auto___18758 = G__18761;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18610){
var G__18611 = cljs.core.first(seq18610);
var seq18610__$1 = cljs.core.next(seq18610);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18611,seq18610__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18612){
var G__18613 = cljs.core.first(seq18612);
var seq18612__$1 = cljs.core.next(seq18612);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18613,seq18612__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18765 = arguments.length;
var i__4737__auto___18766 = (0);
while(true){
if((i__4737__auto___18766 < len__4736__auto___18765)){
args__4742__auto__.push((arguments[i__4737__auto___18766]));

var G__18767 = (i__4737__auto___18766 + (1));
i__4737__auto___18766 = G__18767;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18462__auto__,rest__18463__auto__){
var convert_case__18464__auto__ = (function (p1__18461__18465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18461__18465__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18462__auto__,convert_case__18464__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18620){
var G__18621 = cljs.core.first(seq18620);
var seq18620__$1 = cljs.core.next(seq18620);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18621,seq18620__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18768 = arguments.length;
var i__4737__auto___18769 = (0);
while(true){
if((i__4737__auto___18769 < len__4736__auto___18768)){
args__4742__auto__.push((arguments[i__4737__auto___18769]));

var G__18770 = (i__4737__auto___18769 + (1));
i__4737__auto___18769 = G__18770;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18622){
var G__18623 = cljs.core.first(seq18622);
var seq18622__$1 = cljs.core.next(seq18622);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18623,seq18622__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18771 = arguments.length;
var i__4737__auto___18772 = (0);
while(true){
if((i__4737__auto___18772 < len__4736__auto___18771)){
args__4742__auto__.push((arguments[i__4737__auto___18772]));

var G__18773 = (i__4737__auto___18772 + (1));
i__4737__auto___18772 = G__18773;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18635){
var G__18636 = cljs.core.first(seq18635);
var seq18635__$1 = cljs.core.next(seq18635);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18636,seq18635__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18774 = arguments.length;
var i__4737__auto___18775 = (0);
while(true){
if((i__4737__auto___18775 < len__4736__auto___18774)){
args__4742__auto__.push((arguments[i__4737__auto___18775]));

var G__18776 = (i__4737__auto___18775 + (1));
i__4737__auto___18775 = G__18776;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18467__auto__,rest__18468__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18467__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18468__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18637){
var G__18638 = cljs.core.first(seq18637);
var seq18637__$1 = cljs.core.next(seq18637);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18638,seq18637__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
