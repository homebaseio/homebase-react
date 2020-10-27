goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
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

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18911){
var G__18912 = cljs.core.first(seq18911);
var seq18911__$1 = cljs.core.next(seq18911);
var G__18913 = cljs.core.first(seq18911__$1);
var seq18911__$2 = cljs.core.next(seq18911__$1);
var G__18914 = cljs.core.first(seq18911__$2);
var seq18911__$3 = cljs.core.next(seq18911__$2);
var G__18915 = cljs.core.first(seq18911__$3);
var seq18911__$4 = cljs.core.next(seq18911__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18912,G__18913,G__18914,G__18915,seq18911__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
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
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18866__auto__,rest__18867__auto__){
var convert_case__18868__auto__ = (function (p1__18865__18869__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18865__18869__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18867__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18866__auto__,convert_case__18868__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18919){
var G__18920 = cljs.core.first(seq18919);
var seq18919__$1 = cljs.core.next(seq18919);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18920,seq18919__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18921){
var G__18922 = cljs.core.first(seq18921);
var seq18921__$1 = cljs.core.next(seq18921);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18922,seq18921__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18923){
var G__18924 = cljs.core.first(seq18923);
var seq18923__$1 = cljs.core.next(seq18923);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18924,seq18923__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18926){
var G__18927 = cljs.core.first(seq18926);
var seq18926__$1 = cljs.core.next(seq18926);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18927,seq18926__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18866__auto__,rest__18867__auto__){
var convert_case__18868__auto__ = (function (p1__18865__18869__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18865__18869__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18867__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18866__auto__,convert_case__18868__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18932){
var G__18933 = cljs.core.first(seq18932);
var seq18932__$1 = cljs.core.next(seq18932);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18933,seq18932__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18934){
var G__18935 = cljs.core.first(seq18934);
var seq18934__$1 = cljs.core.next(seq18934);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18935,seq18934__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18936){
var G__18937 = cljs.core.first(seq18936);
var seq18936__$1 = cljs.core.next(seq18936);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18937,seq18936__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18938){
var G__18939 = cljs.core.first(seq18938);
var seq18938__$1 = cljs.core.next(seq18938);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18939,seq18938__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
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
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18866__auto__,rest__18867__auto__){
var convert_case__18868__auto__ = (function (p1__18865__18869__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18865__18869__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18867__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18866__auto__,convert_case__18868__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18943){
var G__18944 = cljs.core.first(seq18943);
var seq18943__$1 = cljs.core.next(seq18943);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18944,seq18943__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18949){
var G__18950 = cljs.core.first(seq18949);
var seq18949__$1 = cljs.core.next(seq18949);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18950,seq18949__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18954){
var G__18955 = cljs.core.first(seq18954);
var seq18954__$1 = cljs.core.next(seq18954);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18955,seq18954__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18956){
var G__18957 = cljs.core.first(seq18956);
var seq18956__$1 = cljs.core.next(seq18956);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18957,seq18956__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18866__auto__,rest__18867__auto__){
var convert_case__18868__auto__ = (function (p1__18865__18869__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18865__18869__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18867__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18866__auto__,convert_case__18868__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18958){
var G__18959 = cljs.core.first(seq18958);
var seq18958__$1 = cljs.core.next(seq18958);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18959,seq18958__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18960){
var G__18961 = cljs.core.first(seq18960);
var seq18960__$1 = cljs.core.next(seq18960);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18961,seq18960__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18963){
var G__18964 = cljs.core.first(seq18963);
var seq18963__$1 = cljs.core.next(seq18963);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18964,seq18963__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18965){
var G__18966 = cljs.core.first(seq18965);
var seq18965__$1 = cljs.core.next(seq18965);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18966,seq18965__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
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
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18866__auto__,rest__18867__auto__){
var convert_case__18868__auto__ = (function (p1__18865__18869__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18865__18869__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18867__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18866__auto__,convert_case__18868__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18967){
var G__18968 = cljs.core.first(seq18967);
var seq18967__$1 = cljs.core.next(seq18967);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18968,seq18967__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18969){
var G__18970 = cljs.core.first(seq18969);
var seq18969__$1 = cljs.core.next(seq18969);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18970,seq18969__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19049 = arguments.length;
var i__4737__auto___19050 = (0);
while(true){
if((i__4737__auto___19050 < len__4736__auto___19049)){
args__4742__auto__.push((arguments[i__4737__auto___19050]));

var G__19051 = (i__4737__auto___19050 + (1));
i__4737__auto___19050 = G__19051;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18971){
var G__18972 = cljs.core.first(seq18971);
var seq18971__$1 = cljs.core.next(seq18971);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18972,seq18971__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19052 = arguments.length;
var i__4737__auto___19053 = (0);
while(true){
if((i__4737__auto___19053 < len__4736__auto___19052)){
args__4742__auto__.push((arguments[i__4737__auto___19053]));

var G__19054 = (i__4737__auto___19053 + (1));
i__4737__auto___19053 = G__19054;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18973){
var G__18974 = cljs.core.first(seq18973);
var seq18973__$1 = cljs.core.next(seq18973);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18974,seq18973__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19055 = arguments.length;
var i__4737__auto___19056 = (0);
while(true){
if((i__4737__auto___19056 < len__4736__auto___19055)){
args__4742__auto__.push((arguments[i__4737__auto___19056]));

var G__19057 = (i__4737__auto___19056 + (1));
i__4737__auto___19056 = G__19057;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18866__auto__,rest__18867__auto__){
var convert_case__18868__auto__ = (function (p1__18865__18869__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18865__18869__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18867__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18866__auto__,convert_case__18868__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18975){
var G__18976 = cljs.core.first(seq18975);
var seq18975__$1 = cljs.core.next(seq18975);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18976,seq18975__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19058 = arguments.length;
var i__4737__auto___19059 = (0);
while(true){
if((i__4737__auto___19059 < len__4736__auto___19058)){
args__4742__auto__.push((arguments[i__4737__auto___19059]));

var G__19060 = (i__4737__auto___19059 + (1));
i__4737__auto___19059 = G__19060;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18977){
var G__18978 = cljs.core.first(seq18977);
var seq18977__$1 = cljs.core.next(seq18977);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18978,seq18977__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19061 = arguments.length;
var i__4737__auto___19062 = (0);
while(true){
if((i__4737__auto___19062 < len__4736__auto___19061)){
args__4742__auto__.push((arguments[i__4737__auto___19062]));

var G__19063 = (i__4737__auto___19062 + (1));
i__4737__auto___19062 = G__19063;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18979){
var G__18980 = cljs.core.first(seq18979);
var seq18979__$1 = cljs.core.next(seq18979);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18980,seq18979__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19064 = arguments.length;
var i__4737__auto___19065 = (0);
while(true){
if((i__4737__auto___19065 < len__4736__auto___19064)){
args__4742__auto__.push((arguments[i__4737__auto___19065]));

var G__19066 = (i__4737__auto___19065 + (1));
i__4737__auto___19065 = G__19066;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18981){
var G__18982 = cljs.core.first(seq18981);
var seq18981__$1 = cljs.core.next(seq18981);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18982,seq18981__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19067 = arguments.length;
var i__4737__auto___19068 = (0);
while(true){
if((i__4737__auto___19068 < len__4736__auto___19067)){
args__4742__auto__.push((arguments[i__4737__auto___19068]));

var G__19069 = (i__4737__auto___19068 + (1));
i__4737__auto___19068 = G__19069;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18866__auto__,rest__18867__auto__){
var convert_case__18868__auto__ = (function (p1__18865__18869__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18865__18869__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18867__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18866__auto__,convert_case__18868__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18984){
var G__18985 = cljs.core.first(seq18984);
var seq18984__$1 = cljs.core.next(seq18984);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18985,seq18984__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19070 = arguments.length;
var i__4737__auto___19071 = (0);
while(true){
if((i__4737__auto___19071 < len__4736__auto___19070)){
args__4742__auto__.push((arguments[i__4737__auto___19071]));

var G__19072 = (i__4737__auto___19071 + (1));
i__4737__auto___19071 = G__19072;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18986){
var G__18987 = cljs.core.first(seq18986);
var seq18986__$1 = cljs.core.next(seq18986);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18987,seq18986__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19073 = arguments.length;
var i__4737__auto___19074 = (0);
while(true){
if((i__4737__auto___19074 < len__4736__auto___19073)){
args__4742__auto__.push((arguments[i__4737__auto___19074]));

var G__19075 = (i__4737__auto___19074 + (1));
i__4737__auto___19074 = G__19075;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18988){
var G__18989 = cljs.core.first(seq18988);
var seq18988__$1 = cljs.core.next(seq18988);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18989,seq18988__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19076 = arguments.length;
var i__4737__auto___19077 = (0);
while(true){
if((i__4737__auto___19077 < len__4736__auto___19076)){
args__4742__auto__.push((arguments[i__4737__auto___19077]));

var G__19078 = (i__4737__auto___19077 + (1));
i__4737__auto___19077 = G__19078;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18990){
var G__18991 = cljs.core.first(seq18990);
var seq18990__$1 = cljs.core.next(seq18990);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18991,seq18990__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
