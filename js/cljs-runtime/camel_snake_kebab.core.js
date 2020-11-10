goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
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

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18630){
var G__18631 = cljs.core.first(seq18630);
var seq18630__$1 = cljs.core.next(seq18630);
var G__18632 = cljs.core.first(seq18630__$1);
var seq18630__$2 = cljs.core.next(seq18630__$1);
var G__18633 = cljs.core.first(seq18630__$2);
var seq18630__$3 = cljs.core.next(seq18630__$2);
var G__18634 = cljs.core.first(seq18630__$3);
var seq18630__$4 = cljs.core.next(seq18630__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18631,G__18632,G__18633,G__18634,seq18630__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
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
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18560__auto__,rest__18561__auto__){
var convert_case__18562__auto__ = (function (p1__18559__18563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18559__18563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18560__auto__,convert_case__18562__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18635){
var G__18636 = cljs.core.first(seq18635);
var seq18635__$1 = cljs.core.next(seq18635);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18636,seq18635__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18645){
var G__18646 = cljs.core.first(seq18645);
var seq18645__$1 = cljs.core.next(seq18645);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18646,seq18645__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18926 = arguments.length;
var i__4737__auto___18927 = (0);
while(true){
if((i__4737__auto___18927 < len__4736__auto___18926)){
args__4742__auto__.push((arguments[i__4737__auto___18927]));

var G__18928 = (i__4737__auto___18927 + (1));
i__4737__auto___18927 = G__18928;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18647){
var G__18648 = cljs.core.first(seq18647);
var seq18647__$1 = cljs.core.next(seq18647);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18648,seq18647__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18929 = arguments.length;
var i__4737__auto___18930 = (0);
while(true){
if((i__4737__auto___18930 < len__4736__auto___18929)){
args__4742__auto__.push((arguments[i__4737__auto___18930]));

var G__18931 = (i__4737__auto___18930 + (1));
i__4737__auto___18930 = G__18931;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18654){
var G__18655 = cljs.core.first(seq18654);
var seq18654__$1 = cljs.core.next(seq18654);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18655,seq18654__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18932 = arguments.length;
var i__4737__auto___18933 = (0);
while(true){
if((i__4737__auto___18933 < len__4736__auto___18932)){
args__4742__auto__.push((arguments[i__4737__auto___18933]));

var G__18935 = (i__4737__auto___18933 + (1));
i__4737__auto___18933 = G__18935;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18560__auto__,rest__18561__auto__){
var convert_case__18562__auto__ = (function (p1__18559__18563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18559__18563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18560__auto__,convert_case__18562__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18688){
var G__18689 = cljs.core.first(seq18688);
var seq18688__$1 = cljs.core.next(seq18688);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18689,seq18688__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18720){
var G__18721 = cljs.core.first(seq18720);
var seq18720__$1 = cljs.core.next(seq18720);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18721,seq18720__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18760){
var G__18761 = cljs.core.first(seq18760);
var seq18760__$1 = cljs.core.next(seq18760);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18761,seq18760__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18809){
var G__18810 = cljs.core.first(seq18809);
var seq18809__$1 = cljs.core.next(seq18809);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18810,seq18809__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
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
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18560__auto__,rest__18561__auto__){
var convert_case__18562__auto__ = (function (p1__18559__18563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18559__18563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18560__auto__,convert_case__18562__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18816){
var G__18817 = cljs.core.first(seq18816);
var seq18816__$1 = cljs.core.next(seq18816);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18817,seq18816__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18948 = arguments.length;
var i__4737__auto___18949 = (0);
while(true){
if((i__4737__auto___18949 < len__4736__auto___18948)){
args__4742__auto__.push((arguments[i__4737__auto___18949]));

var G__18950 = (i__4737__auto___18949 + (1));
i__4737__auto___18949 = G__18950;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18822){
var G__18823 = cljs.core.first(seq18822);
var seq18822__$1 = cljs.core.next(seq18822);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18823,seq18822__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18951 = arguments.length;
var i__4737__auto___18952 = (0);
while(true){
if((i__4737__auto___18952 < len__4736__auto___18951)){
args__4742__auto__.push((arguments[i__4737__auto___18952]));

var G__18953 = (i__4737__auto___18952 + (1));
i__4737__auto___18952 = G__18953;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18840){
var G__18841 = cljs.core.first(seq18840);
var seq18840__$1 = cljs.core.next(seq18840);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18841,seq18840__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18954 = arguments.length;
var i__4737__auto___18955 = (0);
while(true){
if((i__4737__auto___18955 < len__4736__auto___18954)){
args__4742__auto__.push((arguments[i__4737__auto___18955]));

var G__18956 = (i__4737__auto___18955 + (1));
i__4737__auto___18955 = G__18956;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18846){
var G__18847 = cljs.core.first(seq18846);
var seq18846__$1 = cljs.core.next(seq18846);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18847,seq18846__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18957 = arguments.length;
var i__4737__auto___18958 = (0);
while(true){
if((i__4737__auto___18958 < len__4736__auto___18957)){
args__4742__auto__.push((arguments[i__4737__auto___18958]));

var G__18959 = (i__4737__auto___18958 + (1));
i__4737__auto___18958 = G__18959;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18560__auto__,rest__18561__auto__){
var convert_case__18562__auto__ = (function (p1__18559__18563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18559__18563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18560__auto__,convert_case__18562__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18848){
var G__18849 = cljs.core.first(seq18848);
var seq18848__$1 = cljs.core.next(seq18848);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18849,seq18848__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18960 = arguments.length;
var i__4737__auto___18961 = (0);
while(true){
if((i__4737__auto___18961 < len__4736__auto___18960)){
args__4742__auto__.push((arguments[i__4737__auto___18961]));

var G__18962 = (i__4737__auto___18961 + (1));
i__4737__auto___18961 = G__18962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18855){
var G__18856 = cljs.core.first(seq18855);
var seq18855__$1 = cljs.core.next(seq18855);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18856,seq18855__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18963 = arguments.length;
var i__4737__auto___18964 = (0);
while(true){
if((i__4737__auto___18964 < len__4736__auto___18963)){
args__4742__auto__.push((arguments[i__4737__auto___18964]));

var G__18965 = (i__4737__auto___18964 + (1));
i__4737__auto___18964 = G__18965;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18869){
var G__18870 = cljs.core.first(seq18869);
var seq18869__$1 = cljs.core.next(seq18869);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18870,seq18869__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18966 = arguments.length;
var i__4737__auto___18967 = (0);
while(true){
if((i__4737__auto___18967 < len__4736__auto___18966)){
args__4742__auto__.push((arguments[i__4737__auto___18967]));

var G__18968 = (i__4737__auto___18967 + (1));
i__4737__auto___18967 = G__18968;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
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
var len__4736__auto___18969 = arguments.length;
var i__4737__auto___18970 = (0);
while(true){
if((i__4737__auto___18970 < len__4736__auto___18969)){
args__4742__auto__.push((arguments[i__4737__auto___18970]));

var G__18971 = (i__4737__auto___18970 + (1));
i__4737__auto___18970 = G__18971;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18560__auto__,rest__18561__auto__){
var convert_case__18562__auto__ = (function (p1__18559__18563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18559__18563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18560__auto__,convert_case__18562__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18879){
var G__18880 = cljs.core.first(seq18879);
var seq18879__$1 = cljs.core.next(seq18879);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18880,seq18879__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18972 = arguments.length;
var i__4737__auto___18973 = (0);
while(true){
if((i__4737__auto___18973 < len__4736__auto___18972)){
args__4742__auto__.push((arguments[i__4737__auto___18973]));

var G__18974 = (i__4737__auto___18973 + (1));
i__4737__auto___18973 = G__18974;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18881){
var G__18882 = cljs.core.first(seq18881);
var seq18881__$1 = cljs.core.next(seq18881);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18882,seq18881__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18975 = arguments.length;
var i__4737__auto___18976 = (0);
while(true){
if((i__4737__auto___18976 < len__4736__auto___18975)){
args__4742__auto__.push((arguments[i__4737__auto___18976]));

var G__18977 = (i__4737__auto___18976 + (1));
i__4737__auto___18976 = G__18977;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
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
var len__4736__auto___18978 = arguments.length;
var i__4737__auto___18979 = (0);
while(true){
if((i__4737__auto___18979 < len__4736__auto___18978)){
args__4742__auto__.push((arguments[i__4737__auto___18979]));

var G__18980 = (i__4737__auto___18979 + (1));
i__4737__auto___18979 = G__18980;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18890){
var G__18891 = cljs.core.first(seq18890);
var seq18890__$1 = cljs.core.next(seq18890);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18891,seq18890__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18981 = arguments.length;
var i__4737__auto___18982 = (0);
while(true){
if((i__4737__auto___18982 < len__4736__auto___18981)){
args__4742__auto__.push((arguments[i__4737__auto___18982]));

var G__18983 = (i__4737__auto___18982 + (1));
i__4737__auto___18982 = G__18983;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18560__auto__,rest__18561__auto__){
var convert_case__18562__auto__ = (function (p1__18559__18563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18559__18563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18560__auto__,convert_case__18562__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18892){
var G__18893 = cljs.core.first(seq18892);
var seq18892__$1 = cljs.core.next(seq18892);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18893,seq18892__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18984 = arguments.length;
var i__4737__auto___18985 = (0);
while(true){
if((i__4737__auto___18985 < len__4736__auto___18984)){
args__4742__auto__.push((arguments[i__4737__auto___18985]));

var G__18986 = (i__4737__auto___18985 + (1));
i__4737__auto___18985 = G__18986;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18898){
var G__18899 = cljs.core.first(seq18898);
var seq18898__$1 = cljs.core.next(seq18898);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18899,seq18898__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18987 = arguments.length;
var i__4737__auto___18988 = (0);
while(true){
if((i__4737__auto___18988 < len__4736__auto___18987)){
args__4742__auto__.push((arguments[i__4737__auto___18988]));

var G__18989 = (i__4737__auto___18988 + (1));
i__4737__auto___18988 = G__18989;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
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
var len__4736__auto___18990 = arguments.length;
var i__4737__auto___18991 = (0);
while(true){
if((i__4737__auto___18991 < len__4736__auto___18990)){
args__4742__auto__.push((arguments[i__4737__auto___18991]));

var G__18992 = (i__4737__auto___18991 + (1));
i__4737__auto___18991 = G__18992;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18904){
var G__18905 = cljs.core.first(seq18904);
var seq18904__$1 = cljs.core.next(seq18904);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18905,seq18904__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18993 = arguments.length;
var i__4737__auto___18994 = (0);
while(true){
if((i__4737__auto___18994 < len__4736__auto___18993)){
args__4742__auto__.push((arguments[i__4737__auto___18994]));

var G__18995 = (i__4737__auto___18994 + (1));
i__4737__auto___18994 = G__18995;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18560__auto__,rest__18561__auto__){
var convert_case__18562__auto__ = (function (p1__18559__18563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18559__18563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18560__auto__,convert_case__18562__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18907){
var G__18908 = cljs.core.first(seq18907);
var seq18907__$1 = cljs.core.next(seq18907);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18908,seq18907__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18996 = arguments.length;
var i__4737__auto___18997 = (0);
while(true){
if((i__4737__auto___18997 < len__4736__auto___18996)){
args__4742__auto__.push((arguments[i__4737__auto___18997]));

var G__18998 = (i__4737__auto___18997 + (1));
i__4737__auto___18997 = G__18998;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18909){
var G__18910 = cljs.core.first(seq18909);
var seq18909__$1 = cljs.core.next(seq18909);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18910,seq18909__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18999 = arguments.length;
var i__4737__auto___19000 = (0);
while(true){
if((i__4737__auto___19000 < len__4736__auto___18999)){
args__4742__auto__.push((arguments[i__4737__auto___19000]));

var G__19001 = (i__4737__auto___19000 + (1));
i__4737__auto___19000 = G__19001;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18911){
var G__18912 = cljs.core.first(seq18911);
var seq18911__$1 = cljs.core.next(seq18911);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18912,seq18911__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19002 = arguments.length;
var i__4737__auto___19003 = (0);
while(true){
if((i__4737__auto___19003 < len__4736__auto___19002)){
args__4742__auto__.push((arguments[i__4737__auto___19003]));

var G__19004 = (i__4737__auto___19003 + (1));
i__4737__auto___19003 = G__19004;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18588__auto__,rest__18589__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18588__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18589__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18914){
var G__18915 = cljs.core.first(seq18914);
var seq18914__$1 = cljs.core.next(seq18914);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18915,seq18914__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
