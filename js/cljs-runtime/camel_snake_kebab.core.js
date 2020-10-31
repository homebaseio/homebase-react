goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18903 = arguments.length;
var i__4737__auto___18904 = (0);
while(true){
if((i__4737__auto___18904 < len__4736__auto___18903)){
args__4742__auto__.push((arguments[i__4737__auto___18904]));

var G__18905 = (i__4737__auto___18904 + (1));
i__4737__auto___18904 = G__18905;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18523){
var G__18529 = cljs.core.first(seq18523);
var seq18523__$1 = cljs.core.next(seq18523);
var G__18530 = cljs.core.first(seq18523__$1);
var seq18523__$2 = cljs.core.next(seq18523__$1);
var G__18531 = cljs.core.first(seq18523__$2);
var seq18523__$3 = cljs.core.next(seq18523__$2);
var G__18532 = cljs.core.first(seq18523__$3);
var seq18523__$4 = cljs.core.next(seq18523__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18529,G__18530,G__18531,G__18532,seq18523__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18906 = arguments.length;
var i__4737__auto___18907 = (0);
while(true){
if((i__4737__auto___18907 < len__4736__auto___18906)){
args__4742__auto__.push((arguments[i__4737__auto___18907]));

var G__18908 = (i__4737__auto___18907 + (1));
i__4737__auto___18907 = G__18908;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18484__auto__,rest__18485__auto__){
var convert_case__18486__auto__ = (function (p1__18483__18487__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18483__18487__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18485__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18484__auto__,convert_case__18486__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18550){
var G__18551 = cljs.core.first(seq18550);
var seq18550__$1 = cljs.core.next(seq18550);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18551,seq18550__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18909 = arguments.length;
var i__4737__auto___18910 = (0);
while(true){
if((i__4737__auto___18910 < len__4736__auto___18909)){
args__4742__auto__.push((arguments[i__4737__auto___18910]));

var G__18911 = (i__4737__auto___18910 + (1));
i__4737__auto___18910 = G__18911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18585){
var G__18586 = cljs.core.first(seq18585);
var seq18585__$1 = cljs.core.next(seq18585);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18586,seq18585__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
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

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18605){
var G__18606 = cljs.core.first(seq18605);
var seq18605__$1 = cljs.core.next(seq18605);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18606,seq18605__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18619){
var G__18620 = cljs.core.first(seq18619);
var seq18619__$1 = cljs.core.next(seq18619);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18620,seq18619__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18484__auto__,rest__18485__auto__){
var convert_case__18486__auto__ = (function (p1__18483__18487__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18483__18487__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18485__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18484__auto__,convert_case__18486__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18643){
var G__18644 = cljs.core.first(seq18643);
var seq18643__$1 = cljs.core.next(seq18643);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18644,seq18643__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18645){
var G__18646 = cljs.core.first(seq18645);
var seq18645__$1 = cljs.core.next(seq18645);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18646,seq18645__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18926 = arguments.length;
var i__4737__auto___18927 = (0);
while(true){
if((i__4737__auto___18927 < len__4736__auto___18926)){
args__4742__auto__.push((arguments[i__4737__auto___18927]));

var G__18934 = (i__4737__auto___18927 + (1));
i__4737__auto___18927 = G__18934;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18655){
var G__18656 = cljs.core.first(seq18655);
var seq18655__$1 = cljs.core.next(seq18655);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18656,seq18655__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18935 = arguments.length;
var i__4737__auto___18936 = (0);
while(true){
if((i__4737__auto___18936 < len__4736__auto___18935)){
args__4742__auto__.push((arguments[i__4737__auto___18936]));

var G__18937 = (i__4737__auto___18936 + (1));
i__4737__auto___18936 = G__18937;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18689){
var G__18691 = cljs.core.first(seq18689);
var seq18689__$1 = cljs.core.next(seq18689);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18691,seq18689__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
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
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18484__auto__,rest__18485__auto__){
var convert_case__18486__auto__ = (function (p1__18483__18487__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18483__18487__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18485__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18484__auto__,convert_case__18486__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18696){
var G__18697 = cljs.core.first(seq18696);
var seq18696__$1 = cljs.core.next(seq18696);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18697,seq18696__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18702){
var G__18704 = cljs.core.first(seq18702);
var seq18702__$1 = cljs.core.next(seq18702);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18704,seq18702__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18945 = arguments.length;
var i__4737__auto___18946 = (0);
while(true){
if((i__4737__auto___18946 < len__4736__auto___18945)){
args__4742__auto__.push((arguments[i__4737__auto___18946]));

var G__18947 = (i__4737__auto___18946 + (1));
i__4737__auto___18946 = G__18947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18791){
var G__18792 = cljs.core.first(seq18791);
var seq18791__$1 = cljs.core.next(seq18791);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18792,seq18791__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18797){
var G__18798 = cljs.core.first(seq18797);
var seq18797__$1 = cljs.core.next(seq18797);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18798,seq18797__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18484__auto__,rest__18485__auto__){
var convert_case__18486__auto__ = (function (p1__18483__18487__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18483__18487__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18485__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18484__auto__,convert_case__18486__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18812){
var G__18813 = cljs.core.first(seq18812);
var seq18812__$1 = cljs.core.next(seq18812);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18813,seq18812__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18814){
var G__18815 = cljs.core.first(seq18814);
var seq18814__$1 = cljs.core.next(seq18814);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18815,seq18814__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18816){
var G__18817 = cljs.core.first(seq18816);
var seq18816__$1 = cljs.core.next(seq18816);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18817,seq18816__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18818){
var G__18819 = cljs.core.first(seq18818);
var seq18818__$1 = cljs.core.next(seq18818);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18819,seq18818__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
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
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18484__auto__,rest__18485__auto__){
var convert_case__18486__auto__ = (function (p1__18483__18487__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18483__18487__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18485__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18484__auto__,convert_case__18486__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18850){
var G__18851 = cljs.core.first(seq18850);
var seq18850__$1 = cljs.core.next(seq18850);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18851,seq18850__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18852){
var G__18853 = cljs.core.first(seq18852);
var seq18852__$1 = cljs.core.next(seq18852);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18853,seq18852__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18854){
var G__18855 = cljs.core.first(seq18854);
var seq18854__$1 = cljs.core.next(seq18854);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18855,seq18854__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18859){
var G__18860 = cljs.core.first(seq18859);
var seq18859__$1 = cljs.core.next(seq18859);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18860,seq18859__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18484__auto__,rest__18485__auto__){
var convert_case__18486__auto__ = (function (p1__18483__18487__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18483__18487__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18485__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18484__auto__,convert_case__18486__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18861){
var G__18862 = cljs.core.first(seq18861);
var seq18861__$1 = cljs.core.next(seq18861);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18862,seq18861__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18863){
var G__18864 = cljs.core.first(seq18863);
var seq18863__$1 = cljs.core.next(seq18863);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18864,seq18863__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18872){
var G__18873 = cljs.core.first(seq18872);
var seq18872__$1 = cljs.core.next(seq18872);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18873,seq18872__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18874){
var G__18875 = cljs.core.first(seq18874);
var seq18874__$1 = cljs.core.next(seq18874);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18875,seq18874__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18484__auto__,rest__18485__auto__){
var convert_case__18486__auto__ = (function (p1__18483__18487__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18483__18487__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18485__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18484__auto__,convert_case__18486__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18876){
var G__18877 = cljs.core.first(seq18876);
var seq18876__$1 = cljs.core.next(seq18876);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18877,seq18876__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18897){
var G__18898 = cljs.core.first(seq18897);
var seq18897__$1 = cljs.core.next(seq18897);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18898,seq18897__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18899){
var G__18900 = cljs.core.first(seq18899);
var seq18899__$1 = cljs.core.next(seq18899);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18900,seq18899__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18489__auto__,rest__18490__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18489__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18490__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18901){
var G__18902 = cljs.core.first(seq18901);
var seq18901__$1 = cljs.core.next(seq18901);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18902,seq18901__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
