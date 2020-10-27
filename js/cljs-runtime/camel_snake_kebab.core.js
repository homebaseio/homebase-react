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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18914){
var G__18915 = cljs.core.first(seq18914);
var seq18914__$1 = cljs.core.next(seq18914);
var G__18916 = cljs.core.first(seq18914__$1);
var seq18914__$2 = cljs.core.next(seq18914__$1);
var G__18917 = cljs.core.first(seq18914__$2);
var seq18914__$3 = cljs.core.next(seq18914__$2);
var G__18918 = cljs.core.first(seq18914__$3);
var seq18914__$4 = cljs.core.next(seq18914__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18915,G__18916,G__18917,G__18918,seq18914__$4);
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
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18920){
var G__18921 = cljs.core.first(seq18920);
var seq18920__$1 = cljs.core.next(seq18920);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18921,seq18920__$1);
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
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18922){
var G__18923 = cljs.core.first(seq18922);
var seq18922__$1 = cljs.core.next(seq18922);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18923,seq18922__$1);
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
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18924){
var G__18925 = cljs.core.first(seq18924);
var seq18924__$1 = cljs.core.next(seq18924);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18925,seq18924__$1);
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18928){
var G__18929 = cljs.core.first(seq18928);
var seq18928__$1 = cljs.core.next(seq18928);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18929,seq18928__$1);
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18930){
var G__18931 = cljs.core.first(seq18930);
var seq18930__$1 = cljs.core.next(seq18930);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18931,seq18930__$1);
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18941){
var G__18942 = cljs.core.first(seq18941);
var seq18941__$1 = cljs.core.next(seq18941);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18942,seq18941__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
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
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18950){
var G__18951 = cljs.core.first(seq18950);
var seq18950__$1 = cljs.core.next(seq18950);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18951,seq18950__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19025 = arguments.length;
var i__4737__auto___19026 = (0);
while(true){
if((i__4737__auto___19026 < len__4736__auto___19025)){
args__4742__auto__.push((arguments[i__4737__auto___19026]));

var G__19028 = (i__4737__auto___19026 + (1));
i__4737__auto___19026 = G__19028;
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
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18952){
var G__18953 = cljs.core.first(seq18952);
var seq18952__$1 = cljs.core.next(seq18952);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18953,seq18952__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19030 = arguments.length;
var i__4737__auto___19031 = (0);
while(true){
if((i__4737__auto___19031 < len__4736__auto___19030)){
args__4742__auto__.push((arguments[i__4737__auto___19031]));

var G__19032 = (i__4737__auto___19031 + (1));
i__4737__auto___19031 = G__19032;
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
var len__4736__auto___19042 = arguments.length;
var i__4737__auto___19043 = (0);
while(true){
if((i__4737__auto___19043 < len__4736__auto___19042)){
args__4742__auto__.push((arguments[i__4737__auto___19043]));

var G__19044 = (i__4737__auto___19043 + (1));
i__4737__auto___19043 = G__19044;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18959){
var G__18960 = cljs.core.first(seq18959);
var seq18959__$1 = cljs.core.next(seq18959);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18960,seq18959__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18871__auto__,rest__18872__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18871__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18872__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18961){
var G__18962 = cljs.core.first(seq18961);
var seq18961__$1 = cljs.core.next(seq18961);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18962,seq18961__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19050 = arguments.length;
var i__4737__auto___19051 = (0);
while(true){
if((i__4737__auto___19051 < len__4736__auto___19050)){
args__4742__auto__.push((arguments[i__4737__auto___19051]));

var G__19053 = (i__4737__auto___19051 + (1));
i__4737__auto___19051 = G__19053;
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
var len__4736__auto___19054 = arguments.length;
var i__4737__auto___19055 = (0);
while(true){
if((i__4737__auto___19055 < len__4736__auto___19054)){
args__4742__auto__.push((arguments[i__4737__auto___19055]));

var G__19056 = (i__4737__auto___19055 + (1));
i__4737__auto___19055 = G__19056;
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
var len__4736__auto___19057 = arguments.length;
var i__4737__auto___19058 = (0);
while(true){
if((i__4737__auto___19058 < len__4736__auto___19057)){
args__4742__auto__.push((arguments[i__4737__auto___19058]));

var G__19059 = (i__4737__auto___19058 + (1));
i__4737__auto___19058 = G__19059;
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
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18968){
var G__18969 = cljs.core.first(seq18968);
var seq18968__$1 = cljs.core.next(seq18968);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18969,seq18968__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19060 = arguments.length;
var i__4737__auto___19061 = (0);
while(true){
if((i__4737__auto___19061 < len__4736__auto___19060)){
args__4742__auto__.push((arguments[i__4737__auto___19061]));

var G__19062 = (i__4737__auto___19061 + (1));
i__4737__auto___19061 = G__19062;
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
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18970){
var G__18971 = cljs.core.first(seq18970);
var seq18970__$1 = cljs.core.next(seq18970);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18971,seq18970__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19063 = arguments.length;
var i__4737__auto___19064 = (0);
while(true){
if((i__4737__auto___19064 < len__4736__auto___19063)){
args__4742__auto__.push((arguments[i__4737__auto___19064]));

var G__19065 = (i__4737__auto___19064 + (1));
i__4737__auto___19064 = G__19065;
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
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18972){
var G__18973 = cljs.core.first(seq18972);
var seq18972__$1 = cljs.core.next(seq18972);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18973,seq18972__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19066 = arguments.length;
var i__4737__auto___19067 = (0);
while(true){
if((i__4737__auto___19067 < len__4736__auto___19066)){
args__4742__auto__.push((arguments[i__4737__auto___19067]));

var G__19068 = (i__4737__auto___19067 + (1));
i__4737__auto___19067 = G__19068;
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
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18974){
var G__18975 = cljs.core.first(seq18974);
var seq18974__$1 = cljs.core.next(seq18974);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18975,seq18974__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19069 = arguments.length;
var i__4737__auto___19070 = (0);
while(true){
if((i__4737__auto___19070 < len__4736__auto___19069)){
args__4742__auto__.push((arguments[i__4737__auto___19070]));

var G__19071 = (i__4737__auto___19070 + (1));
i__4737__auto___19070 = G__19071;
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
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18976){
var G__18977 = cljs.core.first(seq18976);
var seq18976__$1 = cljs.core.next(seq18976);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18977,seq18976__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19073 = arguments.length;
var i__4737__auto___19074 = (0);
while(true){
if((i__4737__auto___19074 < len__4736__auto___19073)){
args__4742__auto__.push((arguments[i__4737__auto___19074]));

var G__19076 = (i__4737__auto___19074 + (1));
i__4737__auto___19074 = G__19076;
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
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18978){
var G__18979 = cljs.core.first(seq18978);
var seq18978__$1 = cljs.core.next(seq18978);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18979,seq18978__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19077 = arguments.length;
var i__4737__auto___19078 = (0);
while(true){
if((i__4737__auto___19078 < len__4736__auto___19077)){
args__4742__auto__.push((arguments[i__4737__auto___19078]));

var G__19082 = (i__4737__auto___19078 + (1));
i__4737__auto___19078 = G__19082;
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
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18980){
var G__18981 = cljs.core.first(seq18980);
var seq18980__$1 = cljs.core.next(seq18980);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18981,seq18980__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19083 = arguments.length;
var i__4737__auto___19084 = (0);
while(true){
if((i__4737__auto___19084 < len__4736__auto___19083)){
args__4742__auto__.push((arguments[i__4737__auto___19084]));

var G__19085 = (i__4737__auto___19084 + (1));
i__4737__auto___19084 = G__19085;
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
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18982){
var G__18983 = cljs.core.first(seq18982);
var seq18982__$1 = cljs.core.next(seq18982);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18983,seq18982__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19086 = arguments.length;
var i__4737__auto___19087 = (0);
while(true){
if((i__4737__auto___19087 < len__4736__auto___19086)){
args__4742__auto__.push((arguments[i__4737__auto___19087]));

var G__19088 = (i__4737__auto___19087 + (1));
i__4737__auto___19087 = G__19088;
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
var len__4736__auto___19089 = arguments.length;
var i__4737__auto___19090 = (0);
while(true){
if((i__4737__auto___19090 < len__4736__auto___19089)){
args__4742__auto__.push((arguments[i__4737__auto___19090]));

var G__19091 = (i__4737__auto___19090 + (1));
i__4737__auto___19090 = G__19091;
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
var len__4736__auto___19093 = arguments.length;
var i__4737__auto___19094 = (0);
while(true){
if((i__4737__auto___19094 < len__4736__auto___19093)){
args__4742__auto__.push((arguments[i__4737__auto___19094]));

var G__19095 = (i__4737__auto___19094 + (1));
i__4737__auto___19094 = G__19095;
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
var len__4736__auto___19096 = arguments.length;
var i__4737__auto___19097 = (0);
while(true){
if((i__4737__auto___19097 < len__4736__auto___19096)){
args__4742__auto__.push((arguments[i__4737__auto___19097]));

var G__19098 = (i__4737__auto___19097 + (1));
i__4737__auto___19097 = G__19098;
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
