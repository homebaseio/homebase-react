goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18914 = arguments.length;
var i__4737__auto___18915 = (0);
while(true){
if((i__4737__auto___18915 < len__4736__auto___18914)){
args__4742__auto__.push((arguments[i__4737__auto___18915]));

var G__18916 = (i__4737__auto___18915 + (1));
i__4737__auto___18915 = G__18916;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18626){
var G__18627 = cljs.core.first(seq18626);
var seq18626__$1 = cljs.core.next(seq18626);
var G__18628 = cljs.core.first(seq18626__$1);
var seq18626__$2 = cljs.core.next(seq18626__$1);
var G__18629 = cljs.core.first(seq18626__$2);
var seq18626__$3 = cljs.core.next(seq18626__$2);
var G__18630 = cljs.core.first(seq18626__$3);
var seq18626__$4 = cljs.core.next(seq18626__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18627,G__18628,G__18629,G__18630,seq18626__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18917 = arguments.length;
var i__4737__auto___18918 = (0);
while(true){
if((i__4737__auto___18918 < len__4736__auto___18917)){
args__4742__auto__.push((arguments[i__4737__auto___18918]));

var G__18919 = (i__4737__auto___18918 + (1));
i__4737__auto___18918 = G__18919;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18559__auto__,rest__18560__auto__){
var convert_case__18561__auto__ = (function (p1__18558__18562__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18558__18562__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18560__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18559__auto__,convert_case__18561__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18643){
var G__18644 = cljs.core.first(seq18643);
var seq18643__$1 = cljs.core.next(seq18643);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18644,seq18643__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18920 = arguments.length;
var i__4737__auto___18921 = (0);
while(true){
if((i__4737__auto___18921 < len__4736__auto___18920)){
args__4742__auto__.push((arguments[i__4737__auto___18921]));

var G__18922 = (i__4737__auto___18921 + (1));
i__4737__auto___18921 = G__18922;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18673){
var G__18674 = cljs.core.first(seq18673);
var seq18673__$1 = cljs.core.next(seq18673);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18674,seq18673__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18923 = arguments.length;
var i__4737__auto___18924 = (0);
while(true){
if((i__4737__auto___18924 < len__4736__auto___18923)){
args__4742__auto__.push((arguments[i__4737__auto___18924]));

var G__18925 = (i__4737__auto___18924 + (1));
i__4737__auto___18924 = G__18925;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18684){
var G__18685 = cljs.core.first(seq18684);
var seq18684__$1 = cljs.core.next(seq18684);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18685,seq18684__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18927 = arguments.length;
var i__4737__auto___18928 = (0);
while(true){
if((i__4737__auto___18928 < len__4736__auto___18927)){
args__4742__auto__.push((arguments[i__4737__auto___18928]));

var G__18929 = (i__4737__auto___18928 + (1));
i__4737__auto___18928 = G__18929;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18686){
var G__18687 = cljs.core.first(seq18686);
var seq18686__$1 = cljs.core.next(seq18686);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18687,seq18686__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18930 = arguments.length;
var i__4737__auto___18931 = (0);
while(true){
if((i__4737__auto___18931 < len__4736__auto___18930)){
args__4742__auto__.push((arguments[i__4737__auto___18931]));

var G__18932 = (i__4737__auto___18931 + (1));
i__4737__auto___18931 = G__18932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18559__auto__,rest__18560__auto__){
var convert_case__18561__auto__ = (function (p1__18558__18562__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18558__18562__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18560__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18559__auto__,convert_case__18561__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18792){
var G__18793 = cljs.core.first(seq18792);
var seq18792__$1 = cljs.core.next(seq18792);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18793,seq18792__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18933 = arguments.length;
var i__4737__auto___18934 = (0);
while(true){
if((i__4737__auto___18934 < len__4736__auto___18933)){
args__4742__auto__.push((arguments[i__4737__auto___18934]));

var G__18935 = (i__4737__auto___18934 + (1));
i__4737__auto___18934 = G__18935;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18802){
var G__18803 = cljs.core.first(seq18802);
var seq18802__$1 = cljs.core.next(seq18802);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18803,seq18802__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18936 = arguments.length;
var i__4737__auto___18937 = (0);
while(true){
if((i__4737__auto___18937 < len__4736__auto___18936)){
args__4742__auto__.push((arguments[i__4737__auto___18937]));

var G__18938 = (i__4737__auto___18937 + (1));
i__4737__auto___18937 = G__18938;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18810){
var G__18811 = cljs.core.first(seq18810);
var seq18810__$1 = cljs.core.next(seq18810);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18811,seq18810__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18939 = arguments.length;
var i__4737__auto___18940 = (0);
while(true){
if((i__4737__auto___18940 < len__4736__auto___18939)){
args__4742__auto__.push((arguments[i__4737__auto___18940]));

var G__18941 = (i__4737__auto___18940 + (1));
i__4737__auto___18940 = G__18941;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18840){
var G__18841 = cljs.core.first(seq18840);
var seq18840__$1 = cljs.core.next(seq18840);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18841,seq18840__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18942 = arguments.length;
var i__4737__auto___18943 = (0);
while(true){
if((i__4737__auto___18943 < len__4736__auto___18942)){
args__4742__auto__.push((arguments[i__4737__auto___18943]));

var G__18944 = (i__4737__auto___18943 + (1));
i__4737__auto___18943 = G__18944;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18559__auto__,rest__18560__auto__){
var convert_case__18561__auto__ = (function (p1__18558__18562__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18558__18562__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18560__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18559__auto__,convert_case__18561__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18842){
var G__18843 = cljs.core.first(seq18842);
var seq18842__$1 = cljs.core.next(seq18842);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18843,seq18842__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18946 = arguments.length;
var i__4737__auto___18947 = (0);
while(true){
if((i__4737__auto___18947 < len__4736__auto___18946)){
args__4742__auto__.push((arguments[i__4737__auto___18947]));

var G__18948 = (i__4737__auto___18947 + (1));
i__4737__auto___18947 = G__18948;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18846){
var G__18847 = cljs.core.first(seq18846);
var seq18846__$1 = cljs.core.next(seq18846);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18847,seq18846__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18949 = arguments.length;
var i__4737__auto___18950 = (0);
while(true){
if((i__4737__auto___18950 < len__4736__auto___18949)){
args__4742__auto__.push((arguments[i__4737__auto___18950]));

var G__18951 = (i__4737__auto___18950 + (1));
i__4737__auto___18950 = G__18951;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18867){
var G__18868 = cljs.core.first(seq18867);
var seq18867__$1 = cljs.core.next(seq18867);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18868,seq18867__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18952 = arguments.length;
var i__4737__auto___18953 = (0);
while(true){
if((i__4737__auto___18953 < len__4736__auto___18952)){
args__4742__auto__.push((arguments[i__4737__auto___18953]));

var G__18954 = (i__4737__auto___18953 + (1));
i__4737__auto___18953 = G__18954;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18869){
var G__18870 = cljs.core.first(seq18869);
var seq18869__$1 = cljs.core.next(seq18869);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18870,seq18869__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18955 = arguments.length;
var i__4737__auto___18956 = (0);
while(true){
if((i__4737__auto___18956 < len__4736__auto___18955)){
args__4742__auto__.push((arguments[i__4737__auto___18956]));

var G__18957 = (i__4737__auto___18956 + (1));
i__4737__auto___18956 = G__18957;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18559__auto__,rest__18560__auto__){
var convert_case__18561__auto__ = (function (p1__18558__18562__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18558__18562__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18560__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18559__auto__,convert_case__18561__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18871){
var G__18872 = cljs.core.first(seq18871);
var seq18871__$1 = cljs.core.next(seq18871);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18872,seq18871__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18958 = arguments.length;
var i__4737__auto___18959 = (0);
while(true){
if((i__4737__auto___18959 < len__4736__auto___18958)){
args__4742__auto__.push((arguments[i__4737__auto___18959]));

var G__18960 = (i__4737__auto___18959 + (1));
i__4737__auto___18959 = G__18960;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18873){
var G__18874 = cljs.core.first(seq18873);
var seq18873__$1 = cljs.core.next(seq18873);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18874,seq18873__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18961 = arguments.length;
var i__4737__auto___18962 = (0);
while(true){
if((i__4737__auto___18962 < len__4736__auto___18961)){
args__4742__auto__.push((arguments[i__4737__auto___18962]));

var G__18963 = (i__4737__auto___18962 + (1));
i__4737__auto___18962 = G__18963;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18875){
var G__18876 = cljs.core.first(seq18875);
var seq18875__$1 = cljs.core.next(seq18875);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18876,seq18875__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18964 = arguments.length;
var i__4737__auto___18965 = (0);
while(true){
if((i__4737__auto___18965 < len__4736__auto___18964)){
args__4742__auto__.push((arguments[i__4737__auto___18965]));

var G__18966 = (i__4737__auto___18965 + (1));
i__4737__auto___18965 = G__18966;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18877){
var G__18878 = cljs.core.first(seq18877);
var seq18877__$1 = cljs.core.next(seq18877);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18878,seq18877__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18967 = arguments.length;
var i__4737__auto___18968 = (0);
while(true){
if((i__4737__auto___18968 < len__4736__auto___18967)){
args__4742__auto__.push((arguments[i__4737__auto___18968]));

var G__18969 = (i__4737__auto___18968 + (1));
i__4737__auto___18968 = G__18969;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18559__auto__,rest__18560__auto__){
var convert_case__18561__auto__ = (function (p1__18558__18562__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18558__18562__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18560__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18559__auto__,convert_case__18561__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18881){
var G__18882 = cljs.core.first(seq18881);
var seq18881__$1 = cljs.core.next(seq18881);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18882,seq18881__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18970 = arguments.length;
var i__4737__auto___18971 = (0);
while(true){
if((i__4737__auto___18971 < len__4736__auto___18970)){
args__4742__auto__.push((arguments[i__4737__auto___18971]));

var G__18972 = (i__4737__auto___18971 + (1));
i__4737__auto___18971 = G__18972;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18883){
var G__18884 = cljs.core.first(seq18883);
var seq18883__$1 = cljs.core.next(seq18883);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18884,seq18883__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18973 = arguments.length;
var i__4737__auto___18974 = (0);
while(true){
if((i__4737__auto___18974 < len__4736__auto___18973)){
args__4742__auto__.push((arguments[i__4737__auto___18974]));

var G__18975 = (i__4737__auto___18974 + (1));
i__4737__auto___18974 = G__18975;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18885){
var G__18886 = cljs.core.first(seq18885);
var seq18885__$1 = cljs.core.next(seq18885);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18886,seq18885__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18976 = arguments.length;
var i__4737__auto___18977 = (0);
while(true){
if((i__4737__auto___18977 < len__4736__auto___18976)){
args__4742__auto__.push((arguments[i__4737__auto___18977]));

var G__18978 = (i__4737__auto___18977 + (1));
i__4737__auto___18977 = G__18978;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18892){
var G__18893 = cljs.core.first(seq18892);
var seq18892__$1 = cljs.core.next(seq18892);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18893,seq18892__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18979 = arguments.length;
var i__4737__auto___18980 = (0);
while(true){
if((i__4737__auto___18980 < len__4736__auto___18979)){
args__4742__auto__.push((arguments[i__4737__auto___18980]));

var G__18981 = (i__4737__auto___18980 + (1));
i__4737__auto___18980 = G__18981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18559__auto__,rest__18560__auto__){
var convert_case__18561__auto__ = (function (p1__18558__18562__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18558__18562__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18560__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18559__auto__,convert_case__18561__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18894){
var G__18895 = cljs.core.first(seq18894);
var seq18894__$1 = cljs.core.next(seq18894);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18895,seq18894__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18982 = arguments.length;
var i__4737__auto___18983 = (0);
while(true){
if((i__4737__auto___18983 < len__4736__auto___18982)){
args__4742__auto__.push((arguments[i__4737__auto___18983]));

var G__18984 = (i__4737__auto___18983 + (1));
i__4737__auto___18983 = G__18984;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18896){
var G__18897 = cljs.core.first(seq18896);
var seq18896__$1 = cljs.core.next(seq18896);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18897,seq18896__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18985 = arguments.length;
var i__4737__auto___18986 = (0);
while(true){
if((i__4737__auto___18986 < len__4736__auto___18985)){
args__4742__auto__.push((arguments[i__4737__auto___18986]));

var G__18987 = (i__4737__auto___18986 + (1));
i__4737__auto___18986 = G__18987;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18900){
var G__18901 = cljs.core.first(seq18900);
var seq18900__$1 = cljs.core.next(seq18900);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18901,seq18900__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18988 = arguments.length;
var i__4737__auto___18989 = (0);
while(true){
if((i__4737__auto___18989 < len__4736__auto___18988)){
args__4742__auto__.push((arguments[i__4737__auto___18989]));

var G__18990 = (i__4737__auto___18989 + (1));
i__4737__auto___18989 = G__18990;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18902){
var G__18903 = cljs.core.first(seq18902);
var seq18902__$1 = cljs.core.next(seq18902);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18903,seq18902__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18991 = arguments.length;
var i__4737__auto___18992 = (0);
while(true){
if((i__4737__auto___18992 < len__4736__auto___18991)){
args__4742__auto__.push((arguments[i__4737__auto___18992]));

var G__18993 = (i__4737__auto___18992 + (1));
i__4737__auto___18992 = G__18993;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18559__auto__,rest__18560__auto__){
var convert_case__18561__auto__ = (function (p1__18558__18562__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18558__18562__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18560__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18559__auto__,convert_case__18561__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18904){
var G__18905 = cljs.core.first(seq18904);
var seq18904__$1 = cljs.core.next(seq18904);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18905,seq18904__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18994 = arguments.length;
var i__4737__auto___18995 = (0);
while(true){
if((i__4737__auto___18995 < len__4736__auto___18994)){
args__4742__auto__.push((arguments[i__4737__auto___18995]));

var G__18996 = (i__4737__auto___18995 + (1));
i__4737__auto___18995 = G__18996;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18908){
var G__18909 = cljs.core.first(seq18908);
var seq18908__$1 = cljs.core.next(seq18908);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18909,seq18908__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18997 = arguments.length;
var i__4737__auto___18998 = (0);
while(true){
if((i__4737__auto___18998 < len__4736__auto___18997)){
args__4742__auto__.push((arguments[i__4737__auto___18998]));

var G__18999 = (i__4737__auto___18998 + (1));
i__4737__auto___18998 = G__18999;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18910){
var G__18911 = cljs.core.first(seq18910);
var seq18910__$1 = cljs.core.next(seq18910);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18911,seq18910__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19000 = arguments.length;
var i__4737__auto___19001 = (0);
while(true){
if((i__4737__auto___19001 < len__4736__auto___19000)){
args__4742__auto__.push((arguments[i__4737__auto___19001]));

var G__19002 = (i__4737__auto___19001 + (1));
i__4737__auto___19001 = G__19002;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18578__auto__,rest__18579__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18578__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18579__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18912){
var G__18913 = cljs.core.first(seq18912);
var seq18912__$1 = cljs.core.next(seq18912);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18913,seq18912__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
