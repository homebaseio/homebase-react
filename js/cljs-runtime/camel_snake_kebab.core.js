goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
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

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18906){
var G__18907 = cljs.core.first(seq18906);
var seq18906__$1 = cljs.core.next(seq18906);
var G__18908 = cljs.core.first(seq18906__$1);
var seq18906__$2 = cljs.core.next(seq18906__$1);
var G__18909 = cljs.core.first(seq18906__$2);
var seq18906__$3 = cljs.core.next(seq18906__$2);
var G__18910 = cljs.core.first(seq18906__$3);
var seq18906__$4 = cljs.core.next(seq18906__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18907,G__18908,G__18909,G__18910,seq18906__$4);
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
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18916){
var G__18917 = cljs.core.first(seq18916);
var seq18916__$1 = cljs.core.next(seq18916);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18917,seq18916__$1);
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
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18918){
var G__18919 = cljs.core.first(seq18918);
var seq18918__$1 = cljs.core.next(seq18918);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18919,seq18918__$1);
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
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18920){
var G__18921 = cljs.core.first(seq18920);
var seq18920__$1 = cljs.core.next(seq18920);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18921,seq18920__$1);
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
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18922){
var G__18923 = cljs.core.first(seq18922);
var seq18922__$1 = cljs.core.next(seq18922);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18923,seq18922__$1);
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18924){
var G__18925 = cljs.core.first(seq18924);
var seq18924__$1 = cljs.core.next(seq18924);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18925,seq18924__$1);
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18929){
var G__18930 = cljs.core.first(seq18929);
var seq18929__$1 = cljs.core.next(seq18929);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18930,seq18929__$1);
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18931){
var G__18932 = cljs.core.first(seq18931);
var seq18931__$1 = cljs.core.next(seq18931);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18932,seq18931__$1);
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18933){
var G__18934 = cljs.core.first(seq18933);
var seq18933__$1 = cljs.core.next(seq18933);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18934,seq18933__$1);
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
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18936){
var G__18937 = cljs.core.first(seq18936);
var seq18936__$1 = cljs.core.next(seq18936);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18937,seq18936__$1);
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
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18938){
var G__18939 = cljs.core.first(seq18938);
var seq18938__$1 = cljs.core.next(seq18938);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18939,seq18938__$1);
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
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18940){
var G__18941 = cljs.core.first(seq18940);
var seq18940__$1 = cljs.core.next(seq18940);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18941,seq18940__$1);
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
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18942){
var G__18943 = cljs.core.first(seq18942);
var seq18942__$1 = cljs.core.next(seq18942);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18943,seq18942__$1);
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18944){
var G__18945 = cljs.core.first(seq18944);
var seq18944__$1 = cljs.core.next(seq18944);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18945,seq18944__$1);
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18946){
var G__18947 = cljs.core.first(seq18946);
var seq18946__$1 = cljs.core.next(seq18946);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18947,seq18946__$1);
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18952){
var G__18953 = cljs.core.first(seq18952);
var seq18952__$1 = cljs.core.next(seq18952);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18953,seq18952__$1);
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18957){
var G__18958 = cljs.core.first(seq18957);
var seq18957__$1 = cljs.core.next(seq18957);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18958,seq18957__$1);
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
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18959){
var G__18960 = cljs.core.first(seq18959);
var seq18959__$1 = cljs.core.next(seq18959);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18960,seq18959__$1);
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
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18961){
var G__18962 = cljs.core.first(seq18961);
var seq18961__$1 = cljs.core.next(seq18961);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18962,seq18961__$1);
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
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18970){
var G__18971 = cljs.core.first(seq18970);
var seq18970__$1 = cljs.core.next(seq18970);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18971,seq18970__$1);
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
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18972){
var G__18973 = cljs.core.first(seq18972);
var seq18972__$1 = cljs.core.next(seq18972);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18973,seq18972__$1);
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18983){
var G__18984 = cljs.core.first(seq18983);
var seq18983__$1 = cljs.core.next(seq18983);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18984,seq18983__$1);
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18985){
var G__18986 = cljs.core.first(seq18985);
var seq18985__$1 = cljs.core.next(seq18985);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18986,seq18985__$1);
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18987){
var G__18988 = cljs.core.first(seq18987);
var seq18987__$1 = cljs.core.next(seq18987);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18988,seq18987__$1);
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18989){
var G__18990 = cljs.core.first(seq18989);
var seq18989__$1 = cljs.core.next(seq18989);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18990,seq18989__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
