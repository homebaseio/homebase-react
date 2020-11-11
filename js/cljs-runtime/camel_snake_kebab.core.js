goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18962 = arguments.length;
var i__4737__auto___18963 = (0);
while(true){
if((i__4737__auto___18963 < len__4736__auto___18962)){
args__4742__auto__.push((arguments[i__4737__auto___18963]));

var G__18964 = (i__4737__auto___18963 + (1));
i__4737__auto___18963 = G__18964;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18842){
var G__18843 = cljs.core.first(seq18842);
var seq18842__$1 = cljs.core.next(seq18842);
var G__18844 = cljs.core.first(seq18842__$1);
var seq18842__$2 = cljs.core.next(seq18842__$1);
var G__18845 = cljs.core.first(seq18842__$2);
var seq18842__$3 = cljs.core.next(seq18842__$2);
var G__18846 = cljs.core.first(seq18842__$3);
var seq18842__$4 = cljs.core.next(seq18842__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18843,G__18844,G__18845,G__18846,seq18842__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18965 = arguments.length;
var i__4737__auto___18966 = (0);
while(true){
if((i__4737__auto___18966 < len__4736__auto___18965)){
args__4742__auto__.push((arguments[i__4737__auto___18966]));

var G__18967 = (i__4737__auto___18966 + (1));
i__4737__auto___18966 = G__18967;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18784__auto__,rest__18785__auto__){
var convert_case__18786__auto__ = (function (p1__18783__18787__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18783__18787__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18785__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18784__auto__,convert_case__18786__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18847){
var G__18848 = cljs.core.first(seq18847);
var seq18847__$1 = cljs.core.next(seq18847);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18848,seq18847__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18968 = arguments.length;
var i__4737__auto___18969 = (0);
while(true){
if((i__4737__auto___18969 < len__4736__auto___18968)){
args__4742__auto__.push((arguments[i__4737__auto___18969]));

var G__18970 = (i__4737__auto___18969 + (1));
i__4737__auto___18969 = G__18970;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18854){
var G__18855 = cljs.core.first(seq18854);
var seq18854__$1 = cljs.core.next(seq18854);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18855,seq18854__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18971 = arguments.length;
var i__4737__auto___18972 = (0);
while(true){
if((i__4737__auto___18972 < len__4736__auto___18971)){
args__4742__auto__.push((arguments[i__4737__auto___18972]));

var G__18973 = (i__4737__auto___18972 + (1));
i__4737__auto___18972 = G__18973;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18857){
var G__18858 = cljs.core.first(seq18857);
var seq18857__$1 = cljs.core.next(seq18857);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18858,seq18857__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18974 = arguments.length;
var i__4737__auto___18975 = (0);
while(true){
if((i__4737__auto___18975 < len__4736__auto___18974)){
args__4742__auto__.push((arguments[i__4737__auto___18975]));

var G__18976 = (i__4737__auto___18975 + (1));
i__4737__auto___18975 = G__18976;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18859){
var G__18860 = cljs.core.first(seq18859);
var seq18859__$1 = cljs.core.next(seq18859);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18860,seq18859__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18977 = arguments.length;
var i__4737__auto___18978 = (0);
while(true){
if((i__4737__auto___18978 < len__4736__auto___18977)){
args__4742__auto__.push((arguments[i__4737__auto___18978]));

var G__18979 = (i__4737__auto___18978 + (1));
i__4737__auto___18978 = G__18979;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18784__auto__,rest__18785__auto__){
var convert_case__18786__auto__ = (function (p1__18783__18787__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18783__18787__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18785__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18784__auto__,convert_case__18786__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18863){
var G__18864 = cljs.core.first(seq18863);
var seq18863__$1 = cljs.core.next(seq18863);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18864,seq18863__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18980 = arguments.length;
var i__4737__auto___18981 = (0);
while(true){
if((i__4737__auto___18981 < len__4736__auto___18980)){
args__4742__auto__.push((arguments[i__4737__auto___18981]));

var G__18982 = (i__4737__auto___18981 + (1));
i__4737__auto___18981 = G__18982;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18868){
var G__18869 = cljs.core.first(seq18868);
var seq18868__$1 = cljs.core.next(seq18868);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18869,seq18868__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18983 = arguments.length;
var i__4737__auto___18984 = (0);
while(true){
if((i__4737__auto___18984 < len__4736__auto___18983)){
args__4742__auto__.push((arguments[i__4737__auto___18984]));

var G__18985 = (i__4737__auto___18984 + (1));
i__4737__auto___18984 = G__18985;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18870){
var G__18871 = cljs.core.first(seq18870);
var seq18870__$1 = cljs.core.next(seq18870);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18871,seq18870__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18986 = arguments.length;
var i__4737__auto___18987 = (0);
while(true){
if((i__4737__auto___18987 < len__4736__auto___18986)){
args__4742__auto__.push((arguments[i__4737__auto___18987]));

var G__18988 = (i__4737__auto___18987 + (1));
i__4737__auto___18987 = G__18988;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18873){
var G__18874 = cljs.core.first(seq18873);
var seq18873__$1 = cljs.core.next(seq18873);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18874,seq18873__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18989 = arguments.length;
var i__4737__auto___18990 = (0);
while(true){
if((i__4737__auto___18990 < len__4736__auto___18989)){
args__4742__auto__.push((arguments[i__4737__auto___18990]));

var G__18991 = (i__4737__auto___18990 + (1));
i__4737__auto___18990 = G__18991;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18784__auto__,rest__18785__auto__){
var convert_case__18786__auto__ = (function (p1__18783__18787__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18783__18787__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18785__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18784__auto__,convert_case__18786__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18875){
var G__18876 = cljs.core.first(seq18875);
var seq18875__$1 = cljs.core.next(seq18875);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18876,seq18875__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18992 = arguments.length;
var i__4737__auto___18993 = (0);
while(true){
if((i__4737__auto___18993 < len__4736__auto___18992)){
args__4742__auto__.push((arguments[i__4737__auto___18993]));

var G__18994 = (i__4737__auto___18993 + (1));
i__4737__auto___18993 = G__18994;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18877){
var G__18878 = cljs.core.first(seq18877);
var seq18877__$1 = cljs.core.next(seq18877);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18878,seq18877__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18995 = arguments.length;
var i__4737__auto___18996 = (0);
while(true){
if((i__4737__auto___18996 < len__4736__auto___18995)){
args__4742__auto__.push((arguments[i__4737__auto___18996]));

var G__18997 = (i__4737__auto___18996 + (1));
i__4737__auto___18996 = G__18997;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18880){
var G__18881 = cljs.core.first(seq18880);
var seq18880__$1 = cljs.core.next(seq18880);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18881,seq18880__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18998 = arguments.length;
var i__4737__auto___18999 = (0);
while(true){
if((i__4737__auto___18999 < len__4736__auto___18998)){
args__4742__auto__.push((arguments[i__4737__auto___18999]));

var G__19000 = (i__4737__auto___18999 + (1));
i__4737__auto___18999 = G__19000;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18882){
var G__18883 = cljs.core.first(seq18882);
var seq18882__$1 = cljs.core.next(seq18882);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18883,seq18882__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19001 = arguments.length;
var i__4737__auto___19002 = (0);
while(true){
if((i__4737__auto___19002 < len__4736__auto___19001)){
args__4742__auto__.push((arguments[i__4737__auto___19002]));

var G__19003 = (i__4737__auto___19002 + (1));
i__4737__auto___19002 = G__19003;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18784__auto__,rest__18785__auto__){
var convert_case__18786__auto__ = (function (p1__18783__18787__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18783__18787__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18785__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18784__auto__,convert_case__18786__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18885){
var G__18886 = cljs.core.first(seq18885);
var seq18885__$1 = cljs.core.next(seq18885);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18886,seq18885__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19004 = arguments.length;
var i__4737__auto___19005 = (0);
while(true){
if((i__4737__auto___19005 < len__4736__auto___19004)){
args__4742__auto__.push((arguments[i__4737__auto___19005]));

var G__19006 = (i__4737__auto___19005 + (1));
i__4737__auto___19005 = G__19006;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18887){
var G__18888 = cljs.core.first(seq18887);
var seq18887__$1 = cljs.core.next(seq18887);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18888,seq18887__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19007 = arguments.length;
var i__4737__auto___19008 = (0);
while(true){
if((i__4737__auto___19008 < len__4736__auto___19007)){
args__4742__auto__.push((arguments[i__4737__auto___19008]));

var G__19009 = (i__4737__auto___19008 + (1));
i__4737__auto___19008 = G__19009;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18889){
var G__18890 = cljs.core.first(seq18889);
var seq18889__$1 = cljs.core.next(seq18889);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18890,seq18889__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19010 = arguments.length;
var i__4737__auto___19011 = (0);
while(true){
if((i__4737__auto___19011 < len__4736__auto___19010)){
args__4742__auto__.push((arguments[i__4737__auto___19011]));

var G__19012 = (i__4737__auto___19011 + (1));
i__4737__auto___19011 = G__19012;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18891){
var G__18892 = cljs.core.first(seq18891);
var seq18891__$1 = cljs.core.next(seq18891);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18892,seq18891__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19013 = arguments.length;
var i__4737__auto___19014 = (0);
while(true){
if((i__4737__auto___19014 < len__4736__auto___19013)){
args__4742__auto__.push((arguments[i__4737__auto___19014]));

var G__19015 = (i__4737__auto___19014 + (1));
i__4737__auto___19014 = G__19015;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18784__auto__,rest__18785__auto__){
var convert_case__18786__auto__ = (function (p1__18783__18787__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18783__18787__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18785__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18784__auto__,convert_case__18786__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18894){
var G__18895 = cljs.core.first(seq18894);
var seq18894__$1 = cljs.core.next(seq18894);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18895,seq18894__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19016 = arguments.length;
var i__4737__auto___19017 = (0);
while(true){
if((i__4737__auto___19017 < len__4736__auto___19016)){
args__4742__auto__.push((arguments[i__4737__auto___19017]));

var G__19018 = (i__4737__auto___19017 + (1));
i__4737__auto___19017 = G__19018;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18896){
var G__18897 = cljs.core.first(seq18896);
var seq18896__$1 = cljs.core.next(seq18896);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18897,seq18896__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19019 = arguments.length;
var i__4737__auto___19020 = (0);
while(true){
if((i__4737__auto___19020 < len__4736__auto___19019)){
args__4742__auto__.push((arguments[i__4737__auto___19020]));

var G__19021 = (i__4737__auto___19020 + (1));
i__4737__auto___19020 = G__19021;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18898){
var G__18899 = cljs.core.first(seq18898);
var seq18898__$1 = cljs.core.next(seq18898);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18899,seq18898__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19022 = arguments.length;
var i__4737__auto___19023 = (0);
while(true){
if((i__4737__auto___19023 < len__4736__auto___19022)){
args__4742__auto__.push((arguments[i__4737__auto___19023]));

var G__19024 = (i__4737__auto___19023 + (1));
i__4737__auto___19023 = G__19024;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18900){
var G__18901 = cljs.core.first(seq18900);
var seq18900__$1 = cljs.core.next(seq18900);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18901,seq18900__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19025 = arguments.length;
var i__4737__auto___19026 = (0);
while(true){
if((i__4737__auto___19026 < len__4736__auto___19025)){
args__4742__auto__.push((arguments[i__4737__auto___19026]));

var G__19027 = (i__4737__auto___19026 + (1));
i__4737__auto___19026 = G__19027;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18784__auto__,rest__18785__auto__){
var convert_case__18786__auto__ = (function (p1__18783__18787__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18783__18787__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18785__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18784__auto__,convert_case__18786__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18902){
var G__18903 = cljs.core.first(seq18902);
var seq18902__$1 = cljs.core.next(seq18902);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18903,seq18902__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19028 = arguments.length;
var i__4737__auto___19029 = (0);
while(true){
if((i__4737__auto___19029 < len__4736__auto___19028)){
args__4742__auto__.push((arguments[i__4737__auto___19029]));

var G__19030 = (i__4737__auto___19029 + (1));
i__4737__auto___19029 = G__19030;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18910){
var G__18912 = cljs.core.first(seq18910);
var seq18910__$1 = cljs.core.next(seq18910);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18912,seq18910__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19031 = arguments.length;
var i__4737__auto___19032 = (0);
while(true){
if((i__4737__auto___19032 < len__4736__auto___19031)){
args__4742__auto__.push((arguments[i__4737__auto___19032]));

var G__19033 = (i__4737__auto___19032 + (1));
i__4737__auto___19032 = G__19033;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18916){
var G__18917 = cljs.core.first(seq18916);
var seq18916__$1 = cljs.core.next(seq18916);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18917,seq18916__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19034 = arguments.length;
var i__4737__auto___19035 = (0);
while(true){
if((i__4737__auto___19035 < len__4736__auto___19034)){
args__4742__auto__.push((arguments[i__4737__auto___19035]));

var G__19036 = (i__4737__auto___19035 + (1));
i__4737__auto___19035 = G__19036;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18925){
var G__18926 = cljs.core.first(seq18925);
var seq18925__$1 = cljs.core.next(seq18925);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18926,seq18925__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19037 = arguments.length;
var i__4737__auto___19038 = (0);
while(true){
if((i__4737__auto___19038 < len__4736__auto___19037)){
args__4742__auto__.push((arguments[i__4737__auto___19038]));

var G__19039 = (i__4737__auto___19038 + (1));
i__4737__auto___19038 = G__19039;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18784__auto__,rest__18785__auto__){
var convert_case__18786__auto__ = (function (p1__18783__18787__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18783__18787__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18785__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18784__auto__,convert_case__18786__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18951){
var G__18952 = cljs.core.first(seq18951);
var seq18951__$1 = cljs.core.next(seq18951);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18952,seq18951__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19040 = arguments.length;
var i__4737__auto___19041 = (0);
while(true){
if((i__4737__auto___19041 < len__4736__auto___19040)){
args__4742__auto__.push((arguments[i__4737__auto___19041]));

var G__19042 = (i__4737__auto___19041 + (1));
i__4737__auto___19041 = G__19042;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18953){
var G__18954 = cljs.core.first(seq18953);
var seq18953__$1 = cljs.core.next(seq18953);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18954,seq18953__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19043 = arguments.length;
var i__4737__auto___19044 = (0);
while(true){
if((i__4737__auto___19044 < len__4736__auto___19043)){
args__4742__auto__.push((arguments[i__4737__auto___19044]));

var G__19045 = (i__4737__auto___19044 + (1));
i__4737__auto___19044 = G__19045;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18955){
var G__18956 = cljs.core.first(seq18955);
var seq18955__$1 = cljs.core.next(seq18955);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18956,seq18955__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19046 = arguments.length;
var i__4737__auto___19047 = (0);
while(true){
if((i__4737__auto___19047 < len__4736__auto___19046)){
args__4742__auto__.push((arguments[i__4737__auto___19047]));

var G__19048 = (i__4737__auto___19047 + (1));
i__4737__auto___19047 = G__19048;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18789__auto__,rest__18790__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18789__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18790__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18957){
var G__18958 = cljs.core.first(seq18957);
var seq18957__$1 = cljs.core.next(seq18957);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18958,seq18957__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
