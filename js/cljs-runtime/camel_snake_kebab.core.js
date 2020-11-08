goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18846 = arguments.length;
var i__4737__auto___18847 = (0);
while(true){
if((i__4737__auto___18847 < len__4736__auto___18846)){
args__4742__auto__.push((arguments[i__4737__auto___18847]));

var G__18848 = (i__4737__auto___18847 + (1));
i__4737__auto___18847 = G__18848;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18578){
var G__18579 = cljs.core.first(seq18578);
var seq18578__$1 = cljs.core.next(seq18578);
var G__18580 = cljs.core.first(seq18578__$1);
var seq18578__$2 = cljs.core.next(seq18578__$1);
var G__18581 = cljs.core.first(seq18578__$2);
var seq18578__$3 = cljs.core.next(seq18578__$2);
var G__18582 = cljs.core.first(seq18578__$3);
var seq18578__$4 = cljs.core.next(seq18578__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18579,G__18580,G__18581,G__18582,seq18578__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18851 = arguments.length;
var i__4737__auto___18852 = (0);
while(true){
if((i__4737__auto___18852 < len__4736__auto___18851)){
args__4742__auto__.push((arguments[i__4737__auto___18852]));

var G__18853 = (i__4737__auto___18852 + (1));
i__4737__auto___18852 = G__18853;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18515__auto__,rest__18516__auto__){
var convert_case__18517__auto__ = (function (p1__18514__18518__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18514__18518__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18516__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18515__auto__,convert_case__18517__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq18599){
var G__18600 = cljs.core.first(seq18599);
var seq18599__$1 = cljs.core.next(seq18599);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18600,seq18599__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18857 = arguments.length;
var i__4737__auto___18858 = (0);
while(true){
if((i__4737__auto___18858 < len__4736__auto___18857)){
args__4742__auto__.push((arguments[i__4737__auto___18858]));

var G__18860 = (i__4737__auto___18858 + (1));
i__4737__auto___18858 = G__18860;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq18601){
var G__18602 = cljs.core.first(seq18601);
var seq18601__$1 = cljs.core.next(seq18601);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18602,seq18601__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18862 = arguments.length;
var i__4737__auto___18863 = (0);
while(true){
if((i__4737__auto___18863 < len__4736__auto___18862)){
args__4742__auto__.push((arguments[i__4737__auto___18863]));

var G__18865 = (i__4737__auto___18863 + (1));
i__4737__auto___18863 = G__18865;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq18603){
var G__18604 = cljs.core.first(seq18603);
var seq18603__$1 = cljs.core.next(seq18603);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18604,seq18603__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18876 = arguments.length;
var i__4737__auto___18877 = (0);
while(true){
if((i__4737__auto___18877 < len__4736__auto___18876)){
args__4742__auto__.push((arguments[i__4737__auto___18877]));

var G__18878 = (i__4737__auto___18877 + (1));
i__4737__auto___18877 = G__18878;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18605){
var G__18607 = cljs.core.first(seq18605);
var seq18605__$1 = cljs.core.next(seq18605);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18607,seq18605__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18879 = arguments.length;
var i__4737__auto___18880 = (0);
while(true){
if((i__4737__auto___18880 < len__4736__auto___18879)){
args__4742__auto__.push((arguments[i__4737__auto___18880]));

var G__18881 = (i__4737__auto___18880 + (1));
i__4737__auto___18880 = G__18881;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18515__auto__,rest__18516__auto__){
var convert_case__18517__auto__ = (function (p1__18514__18518__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18514__18518__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18516__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18515__auto__,convert_case__18517__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18621){
var G__18622 = cljs.core.first(seq18621);
var seq18621__$1 = cljs.core.next(seq18621);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18622,seq18621__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18882 = arguments.length;
var i__4737__auto___18883 = (0);
while(true){
if((i__4737__auto___18883 < len__4736__auto___18882)){
args__4742__auto__.push((arguments[i__4737__auto___18883]));

var G__18884 = (i__4737__auto___18883 + (1));
i__4737__auto___18883 = G__18884;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq18623){
var G__18624 = cljs.core.first(seq18623);
var seq18623__$1 = cljs.core.next(seq18623);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18624,seq18623__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18885 = arguments.length;
var i__4737__auto___18886 = (0);
while(true){
if((i__4737__auto___18886 < len__4736__auto___18885)){
args__4742__auto__.push((arguments[i__4737__auto___18886]));

var G__18887 = (i__4737__auto___18886 + (1));
i__4737__auto___18886 = G__18887;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq18635){
var G__18636 = cljs.core.first(seq18635);
var seq18635__$1 = cljs.core.next(seq18635);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18636,seq18635__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18888 = arguments.length;
var i__4737__auto___18889 = (0);
while(true){
if((i__4737__auto___18889 < len__4736__auto___18888)){
args__4742__auto__.push((arguments[i__4737__auto___18889]));

var G__18890 = (i__4737__auto___18889 + (1));
i__4737__auto___18889 = G__18890;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18637){
var G__18638 = cljs.core.first(seq18637);
var seq18637__$1 = cljs.core.next(seq18637);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18638,seq18637__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18891 = arguments.length;
var i__4737__auto___18892 = (0);
while(true){
if((i__4737__auto___18892 < len__4736__auto___18891)){
args__4742__auto__.push((arguments[i__4737__auto___18892]));

var G__18893 = (i__4737__auto___18892 + (1));
i__4737__auto___18892 = G__18893;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18515__auto__,rest__18516__auto__){
var convert_case__18517__auto__ = (function (p1__18514__18518__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18514__18518__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18516__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18515__auto__,convert_case__18517__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18651){
var G__18652 = cljs.core.first(seq18651);
var seq18651__$1 = cljs.core.next(seq18651);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18652,seq18651__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18907 = arguments.length;
var i__4737__auto___18908 = (0);
while(true){
if((i__4737__auto___18908 < len__4736__auto___18907)){
args__4742__auto__.push((arguments[i__4737__auto___18908]));

var G__18909 = (i__4737__auto___18908 + (1));
i__4737__auto___18908 = G__18909;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18653){
var G__18654 = cljs.core.first(seq18653);
var seq18653__$1 = cljs.core.next(seq18653);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18654,seq18653__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18663){
var G__18664 = cljs.core.first(seq18663);
var seq18663__$1 = cljs.core.next(seq18663);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18664,seq18663__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18665){
var G__18666 = cljs.core.first(seq18665);
var seq18665__$1 = cljs.core.next(seq18665);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18666,seq18665__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18515__auto__,rest__18516__auto__){
var convert_case__18517__auto__ = (function (p1__18514__18518__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18514__18518__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18516__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18515__auto__,convert_case__18517__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18667){
var G__18668 = cljs.core.first(seq18667);
var seq18667__$1 = cljs.core.next(seq18667);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18668,seq18667__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18670){
var G__18671 = cljs.core.first(seq18670);
var seq18670__$1 = cljs.core.next(seq18670);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18671,seq18670__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18922 = arguments.length;
var i__4737__auto___18923 = (0);
while(true){
if((i__4737__auto___18923 < len__4736__auto___18922)){
args__4742__auto__.push((arguments[i__4737__auto___18923]));

var G__18924 = (i__4737__auto___18923 + (1));
i__4737__auto___18923 = G__18924;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18675){
var G__18676 = cljs.core.first(seq18675);
var seq18675__$1 = cljs.core.next(seq18675);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18676,seq18675__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18677){
var G__18678 = cljs.core.first(seq18677);
var seq18677__$1 = cljs.core.next(seq18677);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18678,seq18677__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
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
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18515__auto__,rest__18516__auto__){
var convert_case__18517__auto__ = (function (p1__18514__18518__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18514__18518__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18516__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18515__auto__,convert_case__18517__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18679){
var G__18680 = cljs.core.first(seq18679);
var seq18679__$1 = cljs.core.next(seq18679);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18680,seq18679__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18695){
var G__18696 = cljs.core.first(seq18695);
var seq18695__$1 = cljs.core.next(seq18695);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18696,seq18695__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18706){
var G__18707 = cljs.core.first(seq18706);
var seq18706__$1 = cljs.core.next(seq18706);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18707,seq18706__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18712){
var G__18713 = cljs.core.first(seq18712);
var seq18712__$1 = cljs.core.next(seq18712);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18713,seq18712__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18515__auto__,rest__18516__auto__){
var convert_case__18517__auto__ = (function (p1__18514__18518__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18514__18518__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18516__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18515__auto__,convert_case__18517__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18714){
var G__18715 = cljs.core.first(seq18714);
var seq18714__$1 = cljs.core.next(seq18714);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18715,seq18714__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18716){
var G__18717 = cljs.core.first(seq18716);
var seq18716__$1 = cljs.core.next(seq18716);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18717,seq18716__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18721){
var G__18722 = cljs.core.first(seq18721);
var seq18721__$1 = cljs.core.next(seq18721);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18722,seq18721__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18726){
var G__18727 = cljs.core.first(seq18726);
var seq18726__$1 = cljs.core.next(seq18726);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18727,seq18726__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18515__auto__,rest__18516__auto__){
var convert_case__18517__auto__ = (function (p1__18514__18518__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18514__18518__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18516__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18515__auto__,convert_case__18517__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18787){
var G__18788 = cljs.core.first(seq18787);
var seq18787__$1 = cljs.core.next(seq18787);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18788,seq18787__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18789){
var G__18790 = cljs.core.first(seq18789);
var seq18789__$1 = cljs.core.next(seq18789);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18790,seq18789__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18791){
var G__18792 = cljs.core.first(seq18791);
var seq18791__$1 = cljs.core.next(seq18791);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18792,seq18791__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18548__auto__,rest__18549__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18548__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18549__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18839){
var G__18840 = cljs.core.first(seq18839);
var seq18839__$1 = cljs.core.next(seq18839);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18840,seq18839__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
