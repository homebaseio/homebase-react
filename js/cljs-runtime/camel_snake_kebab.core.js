goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18699 = arguments.length;
var i__4737__auto___18700 = (0);
while(true){
if((i__4737__auto___18700 < len__4736__auto___18699)){
args__4742__auto__.push((arguments[i__4737__auto___18700]));

var G__18701 = (i__4737__auto___18700 + (1));
i__4737__auto___18700 = G__18701;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18531){
var G__18532 = cljs.core.first(seq18531);
var seq18531__$1 = cljs.core.next(seq18531);
var G__18533 = cljs.core.first(seq18531__$1);
var seq18531__$2 = cljs.core.next(seq18531__$1);
var G__18534 = cljs.core.first(seq18531__$2);
var seq18531__$3 = cljs.core.next(seq18531__$2);
var G__18535 = cljs.core.first(seq18531__$3);
var seq18531__$4 = cljs.core.next(seq18531__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18532,G__18533,G__18534,G__18535,seq18531__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18706 = arguments.length;
var i__4737__auto___18707 = (0);
while(true){
if((i__4737__auto___18707 < len__4736__auto___18706)){
args__4742__auto__.push((arguments[i__4737__auto___18707]));

var G__18708 = (i__4737__auto___18707 + (1));
i__4737__auto___18707 = G__18708;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18491__auto__,rest__18492__auto__){
var convert_case__18493__auto__ = (function (p1__18490__18494__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18490__18494__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18492__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18491__auto__,convert_case__18493__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18544){
var G__18545 = cljs.core.first(seq18544);
var seq18544__$1 = cljs.core.next(seq18544);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18545,seq18544__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18546){
var G__18547 = cljs.core.first(seq18546);
var seq18546__$1 = cljs.core.next(seq18546);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18547,seq18546__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18712 = arguments.length;
var i__4737__auto___18713 = (0);
while(true){
if((i__4737__auto___18713 < len__4736__auto___18712)){
args__4742__auto__.push((arguments[i__4737__auto___18713]));

var G__18714 = (i__4737__auto___18713 + (1));
i__4737__auto___18713 = G__18714;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18548){
var G__18549 = cljs.core.first(seq18548);
var seq18548__$1 = cljs.core.next(seq18548);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18549,seq18548__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18715 = arguments.length;
var i__4737__auto___18716 = (0);
while(true){
if((i__4737__auto___18716 < len__4736__auto___18715)){
args__4742__auto__.push((arguments[i__4737__auto___18716]));

var G__18717 = (i__4737__auto___18716 + (1));
i__4737__auto___18716 = G__18717;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18558){
var G__18559 = cljs.core.first(seq18558);
var seq18558__$1 = cljs.core.next(seq18558);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18559,seq18558__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18718 = arguments.length;
var i__4737__auto___18719 = (0);
while(true){
if((i__4737__auto___18719 < len__4736__auto___18718)){
args__4742__auto__.push((arguments[i__4737__auto___18719]));

var G__18720 = (i__4737__auto___18719 + (1));
i__4737__auto___18719 = G__18720;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18491__auto__,rest__18492__auto__){
var convert_case__18493__auto__ = (function (p1__18490__18494__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18490__18494__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18492__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18491__auto__,convert_case__18493__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18571){
var G__18572 = cljs.core.first(seq18571);
var seq18571__$1 = cljs.core.next(seq18571);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18572,seq18571__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18722 = arguments.length;
var i__4737__auto___18723 = (0);
while(true){
if((i__4737__auto___18723 < len__4736__auto___18722)){
args__4742__auto__.push((arguments[i__4737__auto___18723]));

var G__18724 = (i__4737__auto___18723 + (1));
i__4737__auto___18723 = G__18724;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18582){
var G__18583 = cljs.core.first(seq18582);
var seq18582__$1 = cljs.core.next(seq18582);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18583,seq18582__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18738 = arguments.length;
var i__4737__auto___18739 = (0);
while(true){
if((i__4737__auto___18739 < len__4736__auto___18738)){
args__4742__auto__.push((arguments[i__4737__auto___18739]));

var G__18743 = (i__4737__auto___18739 + (1));
i__4737__auto___18739 = G__18743;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18595){
var G__18596 = cljs.core.first(seq18595);
var seq18595__$1 = cljs.core.next(seq18595);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18596,seq18595__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18747 = arguments.length;
var i__4737__auto___18748 = (0);
while(true){
if((i__4737__auto___18748 < len__4736__auto___18747)){
args__4742__auto__.push((arguments[i__4737__auto___18748]));

var G__18751 = (i__4737__auto___18748 + (1));
i__4737__auto___18748 = G__18751;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18597){
var G__18598 = cljs.core.first(seq18597);
var seq18597__$1 = cljs.core.next(seq18597);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18598,seq18597__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18753 = arguments.length;
var i__4737__auto___18754 = (0);
while(true){
if((i__4737__auto___18754 < len__4736__auto___18753)){
args__4742__auto__.push((arguments[i__4737__auto___18754]));

var G__18755 = (i__4737__auto___18754 + (1));
i__4737__auto___18754 = G__18755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18491__auto__,rest__18492__auto__){
var convert_case__18493__auto__ = (function (p1__18490__18494__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18490__18494__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18492__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18491__auto__,convert_case__18493__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18599){
var G__18600 = cljs.core.first(seq18599);
var seq18599__$1 = cljs.core.next(seq18599);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18600,seq18599__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18756 = arguments.length;
var i__4737__auto___18757 = (0);
while(true){
if((i__4737__auto___18757 < len__4736__auto___18756)){
args__4742__auto__.push((arguments[i__4737__auto___18757]));

var G__18758 = (i__4737__auto___18757 + (1));
i__4737__auto___18757 = G__18758;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18601){
var G__18602 = cljs.core.first(seq18601);
var seq18601__$1 = cljs.core.next(seq18601);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18602,seq18601__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18759 = arguments.length;
var i__4737__auto___18760 = (0);
while(true){
if((i__4737__auto___18760 < len__4736__auto___18759)){
args__4742__auto__.push((arguments[i__4737__auto___18760]));

var G__18761 = (i__4737__auto___18760 + (1));
i__4737__auto___18760 = G__18761;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18603){
var G__18604 = cljs.core.first(seq18603);
var seq18603__$1 = cljs.core.next(seq18603);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18604,seq18603__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18607){
var G__18608 = cljs.core.first(seq18607);
var seq18607__$1 = cljs.core.next(seq18607);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18608,seq18607__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18491__auto__,rest__18492__auto__){
var convert_case__18493__auto__ = (function (p1__18490__18494__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18490__18494__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18492__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18491__auto__,convert_case__18493__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18614){
var G__18615 = cljs.core.first(seq18614);
var seq18614__$1 = cljs.core.next(seq18614);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18615,seq18614__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18621){
var G__18622 = cljs.core.first(seq18621);
var seq18621__$1 = cljs.core.next(seq18621);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18622,seq18621__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18623){
var G__18624 = cljs.core.first(seq18623);
var seq18623__$1 = cljs.core.next(seq18623);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18624,seq18623__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18781 = arguments.length;
var i__4737__auto___18782 = (0);
while(true){
if((i__4737__auto___18782 < len__4736__auto___18781)){
args__4742__auto__.push((arguments[i__4737__auto___18782]));

var G__18786 = (i__4737__auto___18782 + (1));
i__4737__auto___18782 = G__18786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18625){
var G__18626 = cljs.core.first(seq18625);
var seq18625__$1 = cljs.core.next(seq18625);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18626,seq18625__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18787 = arguments.length;
var i__4737__auto___18788 = (0);
while(true){
if((i__4737__auto___18788 < len__4736__auto___18787)){
args__4742__auto__.push((arguments[i__4737__auto___18788]));

var G__18789 = (i__4737__auto___18788 + (1));
i__4737__auto___18788 = G__18789;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18491__auto__,rest__18492__auto__){
var convert_case__18493__auto__ = (function (p1__18490__18494__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18490__18494__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18492__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18491__auto__,convert_case__18493__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18633){
var G__18634 = cljs.core.first(seq18633);
var seq18633__$1 = cljs.core.next(seq18633);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18634,seq18633__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18790 = arguments.length;
var i__4737__auto___18791 = (0);
while(true){
if((i__4737__auto___18791 < len__4736__auto___18790)){
args__4742__auto__.push((arguments[i__4737__auto___18791]));

var G__18792 = (i__4737__auto___18791 + (1));
i__4737__auto___18791 = G__18792;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18654){
var G__18655 = cljs.core.first(seq18654);
var seq18654__$1 = cljs.core.next(seq18654);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18655,seq18654__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18811 = arguments.length;
var i__4737__auto___18816 = (0);
while(true){
if((i__4737__auto___18816 < len__4736__auto___18811)){
args__4742__auto__.push((arguments[i__4737__auto___18816]));

var G__18823 = (i__4737__auto___18816 + (1));
i__4737__auto___18816 = G__18823;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18659){
var G__18660 = cljs.core.first(seq18659);
var seq18659__$1 = cljs.core.next(seq18659);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18660,seq18659__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18826 = arguments.length;
var i__4737__auto___18827 = (0);
while(true){
if((i__4737__auto___18827 < len__4736__auto___18826)){
args__4742__auto__.push((arguments[i__4737__auto___18827]));

var G__18828 = (i__4737__auto___18827 + (1));
i__4737__auto___18827 = G__18828;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18661){
var G__18662 = cljs.core.first(seq18661);
var seq18661__$1 = cljs.core.next(seq18661);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18662,seq18661__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18829 = arguments.length;
var i__4737__auto___18830 = (0);
while(true){
if((i__4737__auto___18830 < len__4736__auto___18829)){
args__4742__auto__.push((arguments[i__4737__auto___18830]));

var G__18831 = (i__4737__auto___18830 + (1));
i__4737__auto___18830 = G__18831;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18491__auto__,rest__18492__auto__){
var convert_case__18493__auto__ = (function (p1__18490__18494__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18490__18494__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18492__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18491__auto__,convert_case__18493__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18663){
var G__18664 = cljs.core.first(seq18663);
var seq18663__$1 = cljs.core.next(seq18663);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18664,seq18663__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18832 = arguments.length;
var i__4737__auto___18833 = (0);
while(true){
if((i__4737__auto___18833 < len__4736__auto___18832)){
args__4742__auto__.push((arguments[i__4737__auto___18833]));

var G__18834 = (i__4737__auto___18833 + (1));
i__4737__auto___18833 = G__18834;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18667){
var G__18668 = cljs.core.first(seq18667);
var seq18667__$1 = cljs.core.next(seq18667);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18668,seq18667__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18835 = arguments.length;
var i__4737__auto___18836 = (0);
while(true){
if((i__4737__auto___18836 < len__4736__auto___18835)){
args__4742__auto__.push((arguments[i__4737__auto___18836]));

var G__18837 = (i__4737__auto___18836 + (1));
i__4737__auto___18836 = G__18837;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18678){
var G__18679 = cljs.core.first(seq18678);
var seq18678__$1 = cljs.core.next(seq18678);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18679,seq18678__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18838 = arguments.length;
var i__4737__auto___18839 = (0);
while(true){
if((i__4737__auto___18839 < len__4736__auto___18838)){
args__4742__auto__.push((arguments[i__4737__auto___18839]));

var G__18840 = (i__4737__auto___18839 + (1));
i__4737__auto___18839 = G__18840;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18681){
var G__18682 = cljs.core.first(seq18681);
var seq18681__$1 = cljs.core.next(seq18681);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18682,seq18681__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18910 = arguments.length;
var i__4737__auto___18911 = (0);
while(true){
if((i__4737__auto___18911 < len__4736__auto___18910)){
args__4742__auto__.push((arguments[i__4737__auto___18911]));

var G__18912 = (i__4737__auto___18911 + (1));
i__4737__auto___18911 = G__18912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18491__auto__,rest__18492__auto__){
var convert_case__18493__auto__ = (function (p1__18490__18494__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18490__18494__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18492__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18491__auto__,convert_case__18493__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18683){
var G__18684 = cljs.core.first(seq18683);
var seq18683__$1 = cljs.core.next(seq18683);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18684,seq18683__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18913 = arguments.length;
var i__4737__auto___18914 = (0);
while(true){
if((i__4737__auto___18914 < len__4736__auto___18913)){
args__4742__auto__.push((arguments[i__4737__auto___18914]));

var G__18915 = (i__4737__auto___18914 + (1));
i__4737__auto___18914 = G__18915;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18685){
var G__18686 = cljs.core.first(seq18685);
var seq18685__$1 = cljs.core.next(seq18685);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18686,seq18685__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18916 = arguments.length;
var i__4737__auto___18917 = (0);
while(true){
if((i__4737__auto___18917 < len__4736__auto___18916)){
args__4742__auto__.push((arguments[i__4737__auto___18917]));

var G__18918 = (i__4737__auto___18917 + (1));
i__4737__auto___18917 = G__18918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18687){
var G__18688 = cljs.core.first(seq18687);
var seq18687__$1 = cljs.core.next(seq18687);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18688,seq18687__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18919 = arguments.length;
var i__4737__auto___18920 = (0);
while(true){
if((i__4737__auto___18920 < len__4736__auto___18919)){
args__4742__auto__.push((arguments[i__4737__auto___18920]));

var G__18921 = (i__4737__auto___18920 + (1));
i__4737__auto___18920 = G__18921;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18496__auto__,rest__18497__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18496__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18497__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18689){
var G__18690 = cljs.core.first(seq18689);
var seq18689__$1 = cljs.core.next(seq18689);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18690,seq18689__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
