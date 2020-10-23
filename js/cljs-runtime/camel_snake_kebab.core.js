goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23899 = arguments.length;
var i__4737__auto___23900 = (0);
while(true){
if((i__4737__auto___23900 < len__4736__auto___23899)){
args__4742__auto__.push((arguments[i__4737__auto___23900]));

var G__23901 = (i__4737__auto___23900 + (1));
i__4737__auto___23900 = G__23901;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq23838){
var G__23839 = cljs.core.first(seq23838);
var seq23838__$1 = cljs.core.next(seq23838);
var G__23840 = cljs.core.first(seq23838__$1);
var seq23838__$2 = cljs.core.next(seq23838__$1);
var G__23841 = cljs.core.first(seq23838__$2);
var seq23838__$3 = cljs.core.next(seq23838__$2);
var G__23842 = cljs.core.first(seq23838__$3);
var seq23838__$4 = cljs.core.next(seq23838__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23839,G__23840,G__23841,G__23842,seq23838__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23902 = arguments.length;
var i__4737__auto___23903 = (0);
while(true){
if((i__4737__auto___23903 < len__4736__auto___23902)){
args__4742__auto__.push((arguments[i__4737__auto___23903]));

var G__23904 = (i__4737__auto___23903 + (1));
i__4737__auto___23903 = G__23904;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__23803__auto__,rest__23804__auto__){
var convert_case__23805__auto__ = (function (p1__23802__23806__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__23802__23806__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23804__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23803__auto__,convert_case__23805__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq23843){
var G__23844 = cljs.core.first(seq23843);
var seq23843__$1 = cljs.core.next(seq23843);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23844,seq23843__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23905 = arguments.length;
var i__4737__auto___23906 = (0);
while(true){
if((i__4737__auto___23906 < len__4736__auto___23905)){
args__4742__auto__.push((arguments[i__4737__auto___23906]));

var G__23907 = (i__4737__auto___23906 + (1));
i__4737__auto___23906 = G__23907;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq23845){
var G__23846 = cljs.core.first(seq23845);
var seq23845__$1 = cljs.core.next(seq23845);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23846,seq23845__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23908 = arguments.length;
var i__4737__auto___23909 = (0);
while(true){
if((i__4737__auto___23909 < len__4736__auto___23908)){
args__4742__auto__.push((arguments[i__4737__auto___23909]));

var G__23913 = (i__4737__auto___23909 + (1));
i__4737__auto___23909 = G__23913;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq23847){
var G__23848 = cljs.core.first(seq23847);
var seq23847__$1 = cljs.core.next(seq23847);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23848,seq23847__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23914 = arguments.length;
var i__4737__auto___23915 = (0);
while(true){
if((i__4737__auto___23915 < len__4736__auto___23914)){
args__4742__auto__.push((arguments[i__4737__auto___23915]));

var G__23916 = (i__4737__auto___23915 + (1));
i__4737__auto___23915 = G__23916;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq23849){
var G__23850 = cljs.core.first(seq23849);
var seq23849__$1 = cljs.core.next(seq23849);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23850,seq23849__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23917 = arguments.length;
var i__4737__auto___23918 = (0);
while(true){
if((i__4737__auto___23918 < len__4736__auto___23917)){
args__4742__auto__.push((arguments[i__4737__auto___23918]));

var G__23919 = (i__4737__auto___23918 + (1));
i__4737__auto___23918 = G__23919;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23803__auto__,rest__23804__auto__){
var convert_case__23805__auto__ = (function (p1__23802__23806__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__23802__23806__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23804__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23803__auto__,convert_case__23805__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq23851){
var G__23852 = cljs.core.first(seq23851);
var seq23851__$1 = cljs.core.next(seq23851);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23852,seq23851__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23920 = arguments.length;
var i__4737__auto___23921 = (0);
while(true){
if((i__4737__auto___23921 < len__4736__auto___23920)){
args__4742__auto__.push((arguments[i__4737__auto___23921]));

var G__23922 = (i__4737__auto___23921 + (1));
i__4737__auto___23921 = G__23922;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq23853){
var G__23854 = cljs.core.first(seq23853);
var seq23853__$1 = cljs.core.next(seq23853);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23854,seq23853__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23923 = arguments.length;
var i__4737__auto___23924 = (0);
while(true){
if((i__4737__auto___23924 < len__4736__auto___23923)){
args__4742__auto__.push((arguments[i__4737__auto___23924]));

var G__23925 = (i__4737__auto___23924 + (1));
i__4737__auto___23924 = G__23925;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq23855){
var G__23856 = cljs.core.first(seq23855);
var seq23855__$1 = cljs.core.next(seq23855);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23856,seq23855__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23927 = arguments.length;
var i__4737__auto___23928 = (0);
while(true){
if((i__4737__auto___23928 < len__4736__auto___23927)){
args__4742__auto__.push((arguments[i__4737__auto___23928]));

var G__23930 = (i__4737__auto___23928 + (1));
i__4737__auto___23928 = G__23930;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq23857){
var G__23858 = cljs.core.first(seq23857);
var seq23857__$1 = cljs.core.next(seq23857);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23858,seq23857__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23931 = arguments.length;
var i__4737__auto___23932 = (0);
while(true){
if((i__4737__auto___23932 < len__4736__auto___23931)){
args__4742__auto__.push((arguments[i__4737__auto___23932]));

var G__23933 = (i__4737__auto___23932 + (1));
i__4737__auto___23932 = G__23933;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__23803__auto__,rest__23804__auto__){
var convert_case__23805__auto__ = (function (p1__23802__23806__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__23802__23806__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23804__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23803__auto__,convert_case__23805__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq23859){
var G__23860 = cljs.core.first(seq23859);
var seq23859__$1 = cljs.core.next(seq23859);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23860,seq23859__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23934 = arguments.length;
var i__4737__auto___23935 = (0);
while(true){
if((i__4737__auto___23935 < len__4736__auto___23934)){
args__4742__auto__.push((arguments[i__4737__auto___23935]));

var G__23936 = (i__4737__auto___23935 + (1));
i__4737__auto___23935 = G__23936;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq23861){
var G__23862 = cljs.core.first(seq23861);
var seq23861__$1 = cljs.core.next(seq23861);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23862,seq23861__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23943 = arguments.length;
var i__4737__auto___23944 = (0);
while(true){
if((i__4737__auto___23944 < len__4736__auto___23943)){
args__4742__auto__.push((arguments[i__4737__auto___23944]));

var G__23945 = (i__4737__auto___23944 + (1));
i__4737__auto___23944 = G__23945;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq23863){
var G__23864 = cljs.core.first(seq23863);
var seq23863__$1 = cljs.core.next(seq23863);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23864,seq23863__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23949 = arguments.length;
var i__4737__auto___23950 = (0);
while(true){
if((i__4737__auto___23950 < len__4736__auto___23949)){
args__4742__auto__.push((arguments[i__4737__auto___23950]));

var G__23951 = (i__4737__auto___23950 + (1));
i__4737__auto___23950 = G__23951;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq23865){
var G__23866 = cljs.core.first(seq23865);
var seq23865__$1 = cljs.core.next(seq23865);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23866,seq23865__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23952 = arguments.length;
var i__4737__auto___23953 = (0);
while(true){
if((i__4737__auto___23953 < len__4736__auto___23952)){
args__4742__auto__.push((arguments[i__4737__auto___23953]));

var G__23954 = (i__4737__auto___23953 + (1));
i__4737__auto___23953 = G__23954;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__23803__auto__,rest__23804__auto__){
var convert_case__23805__auto__ = (function (p1__23802__23806__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__23802__23806__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23804__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23803__auto__,convert_case__23805__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq23867){
var G__23868 = cljs.core.first(seq23867);
var seq23867__$1 = cljs.core.next(seq23867);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23868,seq23867__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23955 = arguments.length;
var i__4737__auto___23956 = (0);
while(true){
if((i__4737__auto___23956 < len__4736__auto___23955)){
args__4742__auto__.push((arguments[i__4737__auto___23956]));

var G__23957 = (i__4737__auto___23956 + (1));
i__4737__auto___23956 = G__23957;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq23869){
var G__23870 = cljs.core.first(seq23869);
var seq23869__$1 = cljs.core.next(seq23869);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23870,seq23869__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23958 = arguments.length;
var i__4737__auto___23959 = (0);
while(true){
if((i__4737__auto___23959 < len__4736__auto___23958)){
args__4742__auto__.push((arguments[i__4737__auto___23959]));

var G__23960 = (i__4737__auto___23959 + (1));
i__4737__auto___23959 = G__23960;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq23871){
var G__23872 = cljs.core.first(seq23871);
var seq23871__$1 = cljs.core.next(seq23871);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23872,seq23871__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23961 = arguments.length;
var i__4737__auto___23962 = (0);
while(true){
if((i__4737__auto___23962 < len__4736__auto___23961)){
args__4742__auto__.push((arguments[i__4737__auto___23962]));

var G__23963 = (i__4737__auto___23962 + (1));
i__4737__auto___23962 = G__23963;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq23873){
var G__23874 = cljs.core.first(seq23873);
var seq23873__$1 = cljs.core.next(seq23873);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23874,seq23873__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23964 = arguments.length;
var i__4737__auto___23965 = (0);
while(true){
if((i__4737__auto___23965 < len__4736__auto___23964)){
args__4742__auto__.push((arguments[i__4737__auto___23965]));

var G__23966 = (i__4737__auto___23965 + (1));
i__4737__auto___23965 = G__23966;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23803__auto__,rest__23804__auto__){
var convert_case__23805__auto__ = (function (p1__23802__23806__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__23802__23806__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23804__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23803__auto__,convert_case__23805__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq23875){
var G__23876 = cljs.core.first(seq23875);
var seq23875__$1 = cljs.core.next(seq23875);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23876,seq23875__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23967 = arguments.length;
var i__4737__auto___23968 = (0);
while(true){
if((i__4737__auto___23968 < len__4736__auto___23967)){
args__4742__auto__.push((arguments[i__4737__auto___23968]));

var G__23969 = (i__4737__auto___23968 + (1));
i__4737__auto___23968 = G__23969;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq23877){
var G__23878 = cljs.core.first(seq23877);
var seq23877__$1 = cljs.core.next(seq23877);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23878,seq23877__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23970 = arguments.length;
var i__4737__auto___23971 = (0);
while(true){
if((i__4737__auto___23971 < len__4736__auto___23970)){
args__4742__auto__.push((arguments[i__4737__auto___23971]));

var G__23972 = (i__4737__auto___23971 + (1));
i__4737__auto___23971 = G__23972;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq23879){
var G__23880 = cljs.core.first(seq23879);
var seq23879__$1 = cljs.core.next(seq23879);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23880,seq23879__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23973 = arguments.length;
var i__4737__auto___23974 = (0);
while(true){
if((i__4737__auto___23974 < len__4736__auto___23973)){
args__4742__auto__.push((arguments[i__4737__auto___23974]));

var G__23975 = (i__4737__auto___23974 + (1));
i__4737__auto___23974 = G__23975;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq23881){
var G__23882 = cljs.core.first(seq23881);
var seq23881__$1 = cljs.core.next(seq23881);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23882,seq23881__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23980 = arguments.length;
var i__4737__auto___23981 = (0);
while(true){
if((i__4737__auto___23981 < len__4736__auto___23980)){
args__4742__auto__.push((arguments[i__4737__auto___23981]));

var G__23982 = (i__4737__auto___23981 + (1));
i__4737__auto___23981 = G__23982;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23803__auto__,rest__23804__auto__){
var convert_case__23805__auto__ = (function (p1__23802__23806__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__23802__23806__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23804__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23803__auto__,convert_case__23805__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq23883){
var G__23884 = cljs.core.first(seq23883);
var seq23883__$1 = cljs.core.next(seq23883);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23884,seq23883__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23983 = arguments.length;
var i__4737__auto___23984 = (0);
while(true){
if((i__4737__auto___23984 < len__4736__auto___23983)){
args__4742__auto__.push((arguments[i__4737__auto___23984]));

var G__23985 = (i__4737__auto___23984 + (1));
i__4737__auto___23984 = G__23985;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq23885){
var G__23886 = cljs.core.first(seq23885);
var seq23885__$1 = cljs.core.next(seq23885);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23886,seq23885__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23986 = arguments.length;
var i__4737__auto___23987 = (0);
while(true){
if((i__4737__auto___23987 < len__4736__auto___23986)){
args__4742__auto__.push((arguments[i__4737__auto___23987]));

var G__23988 = (i__4737__auto___23987 + (1));
i__4737__auto___23987 = G__23988;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq23887){
var G__23888 = cljs.core.first(seq23887);
var seq23887__$1 = cljs.core.next(seq23887);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23888,seq23887__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23989 = arguments.length;
var i__4737__auto___23990 = (0);
while(true){
if((i__4737__auto___23990 < len__4736__auto___23989)){
args__4742__auto__.push((arguments[i__4737__auto___23990]));

var G__23991 = (i__4737__auto___23990 + (1));
i__4737__auto___23990 = G__23991;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq23889){
var G__23890 = cljs.core.first(seq23889);
var seq23889__$1 = cljs.core.next(seq23889);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23890,seq23889__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23992 = arguments.length;
var i__4737__auto___23993 = (0);
while(true){
if((i__4737__auto___23993 < len__4736__auto___23992)){
args__4742__auto__.push((arguments[i__4737__auto___23993]));

var G__23994 = (i__4737__auto___23993 + (1));
i__4737__auto___23993 = G__23994;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23803__auto__,rest__23804__auto__){
var convert_case__23805__auto__ = (function (p1__23802__23806__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__23802__23806__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23804__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23803__auto__,convert_case__23805__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq23891){
var G__23892 = cljs.core.first(seq23891);
var seq23891__$1 = cljs.core.next(seq23891);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23892,seq23891__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23995 = arguments.length;
var i__4737__auto___23996 = (0);
while(true){
if((i__4737__auto___23996 < len__4736__auto___23995)){
args__4742__auto__.push((arguments[i__4737__auto___23996]));

var G__23997 = (i__4737__auto___23996 + (1));
i__4737__auto___23996 = G__23997;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq23893){
var G__23894 = cljs.core.first(seq23893);
var seq23893__$1 = cljs.core.next(seq23893);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23894,seq23893__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23998 = arguments.length;
var i__4737__auto___23999 = (0);
while(true){
if((i__4737__auto___23999 < len__4736__auto___23998)){
args__4742__auto__.push((arguments[i__4737__auto___23999]));

var G__24000 = (i__4737__auto___23999 + (1));
i__4737__auto___23999 = G__24000;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq23895){
var G__23896 = cljs.core.first(seq23895);
var seq23895__$1 = cljs.core.next(seq23895);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23896,seq23895__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24004 = arguments.length;
var i__4737__auto___24005 = (0);
while(true){
if((i__4737__auto___24005 < len__4736__auto___24004)){
args__4742__auto__.push((arguments[i__4737__auto___24005]));

var G__24006 = (i__4737__auto___24005 + (1));
i__4737__auto___24005 = G__24006;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23808__auto__,rest__23809__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__23808__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23809__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq23897){
var G__23898 = cljs.core.first(seq23897);
var seq23897__$1 = cljs.core.next(seq23897);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23898,seq23897__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
