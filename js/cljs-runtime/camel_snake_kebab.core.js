goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23910 = arguments.length;
var i__4737__auto___23911 = (0);
while(true){
if((i__4737__auto___23911 < len__4736__auto___23910)){
args__4742__auto__.push((arguments[i__4737__auto___23911]));

var G__23912 = (i__4737__auto___23911 + (1));
i__4737__auto___23911 = G__23912;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq23849){
var G__23850 = cljs.core.first(seq23849);
var seq23849__$1 = cljs.core.next(seq23849);
var G__23851 = cljs.core.first(seq23849__$1);
var seq23849__$2 = cljs.core.next(seq23849__$1);
var G__23852 = cljs.core.first(seq23849__$2);
var seq23849__$3 = cljs.core.next(seq23849__$2);
var G__23853 = cljs.core.first(seq23849__$3);
var seq23849__$4 = cljs.core.next(seq23849__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23850,G__23851,G__23852,G__23853,seq23849__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23913 = arguments.length;
var i__4737__auto___23914 = (0);
while(true){
if((i__4737__auto___23914 < len__4736__auto___23913)){
args__4742__auto__.push((arguments[i__4737__auto___23914]));

var G__23915 = (i__4737__auto___23914 + (1));
i__4737__auto___23914 = G__23915;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__23814__auto__,rest__23815__auto__){
var convert_case__23816__auto__ = (function (p1__23813__23817__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__23813__23817__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23815__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23814__auto__,convert_case__23816__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq23854){
var G__23855 = cljs.core.first(seq23854);
var seq23854__$1 = cljs.core.next(seq23854);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23855,seq23854__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23919 = arguments.length;
var i__4737__auto___23920 = (0);
while(true){
if((i__4737__auto___23920 < len__4736__auto___23919)){
args__4742__auto__.push((arguments[i__4737__auto___23920]));

var G__23921 = (i__4737__auto___23920 + (1));
i__4737__auto___23920 = G__23921;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq23856){
var G__23857 = cljs.core.first(seq23856);
var seq23856__$1 = cljs.core.next(seq23856);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23857,seq23856__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23922 = arguments.length;
var i__4737__auto___23923 = (0);
while(true){
if((i__4737__auto___23923 < len__4736__auto___23922)){
args__4742__auto__.push((arguments[i__4737__auto___23923]));

var G__23924 = (i__4737__auto___23923 + (1));
i__4737__auto___23923 = G__23924;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq23858){
var G__23859 = cljs.core.first(seq23858);
var seq23858__$1 = cljs.core.next(seq23858);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23859,seq23858__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23926 = arguments.length;
var i__4737__auto___23927 = (0);
while(true){
if((i__4737__auto___23927 < len__4736__auto___23926)){
args__4742__auto__.push((arguments[i__4737__auto___23927]));

var G__23929 = (i__4737__auto___23927 + (1));
i__4737__auto___23927 = G__23929;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq23860){
var G__23861 = cljs.core.first(seq23860);
var seq23860__$1 = cljs.core.next(seq23860);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23861,seq23860__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23930 = arguments.length;
var i__4737__auto___23931 = (0);
while(true){
if((i__4737__auto___23931 < len__4736__auto___23930)){
args__4742__auto__.push((arguments[i__4737__auto___23931]));

var G__23932 = (i__4737__auto___23931 + (1));
i__4737__auto___23931 = G__23932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23814__auto__,rest__23815__auto__){
var convert_case__23816__auto__ = (function (p1__23813__23817__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__23813__23817__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23815__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23814__auto__,convert_case__23816__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq23862){
var G__23863 = cljs.core.first(seq23862);
var seq23862__$1 = cljs.core.next(seq23862);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23863,seq23862__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23933 = arguments.length;
var i__4737__auto___23934 = (0);
while(true){
if((i__4737__auto___23934 < len__4736__auto___23933)){
args__4742__auto__.push((arguments[i__4737__auto___23934]));

var G__23935 = (i__4737__auto___23934 + (1));
i__4737__auto___23934 = G__23935;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq23864){
var G__23865 = cljs.core.first(seq23864);
var seq23864__$1 = cljs.core.next(seq23864);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23865,seq23864__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23936 = arguments.length;
var i__4737__auto___23937 = (0);
while(true){
if((i__4737__auto___23937 < len__4736__auto___23936)){
args__4742__auto__.push((arguments[i__4737__auto___23937]));

var G__23938 = (i__4737__auto___23937 + (1));
i__4737__auto___23937 = G__23938;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq23866){
var G__23867 = cljs.core.first(seq23866);
var seq23866__$1 = cljs.core.next(seq23866);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23867,seq23866__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23939 = arguments.length;
var i__4737__auto___23940 = (0);
while(true){
if((i__4737__auto___23940 < len__4736__auto___23939)){
args__4742__auto__.push((arguments[i__4737__auto___23940]));

var G__23941 = (i__4737__auto___23940 + (1));
i__4737__auto___23940 = G__23941;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq23868){
var G__23869 = cljs.core.first(seq23868);
var seq23868__$1 = cljs.core.next(seq23868);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23869,seq23868__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23942 = arguments.length;
var i__4737__auto___23943 = (0);
while(true){
if((i__4737__auto___23943 < len__4736__auto___23942)){
args__4742__auto__.push((arguments[i__4737__auto___23943]));

var G__23944 = (i__4737__auto___23943 + (1));
i__4737__auto___23943 = G__23944;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__23814__auto__,rest__23815__auto__){
var convert_case__23816__auto__ = (function (p1__23813__23817__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__23813__23817__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23815__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23814__auto__,convert_case__23816__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq23870){
var G__23871 = cljs.core.first(seq23870);
var seq23870__$1 = cljs.core.next(seq23870);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23871,seq23870__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23945 = arguments.length;
var i__4737__auto___23946 = (0);
while(true){
if((i__4737__auto___23946 < len__4736__auto___23945)){
args__4742__auto__.push((arguments[i__4737__auto___23946]));

var G__23947 = (i__4737__auto___23946 + (1));
i__4737__auto___23946 = G__23947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq23872){
var G__23873 = cljs.core.first(seq23872);
var seq23872__$1 = cljs.core.next(seq23872);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23873,seq23872__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23951 = arguments.length;
var i__4737__auto___23952 = (0);
while(true){
if((i__4737__auto___23952 < len__4736__auto___23951)){
args__4742__auto__.push((arguments[i__4737__auto___23952]));

var G__23953 = (i__4737__auto___23952 + (1));
i__4737__auto___23952 = G__23953;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq23874){
var G__23875 = cljs.core.first(seq23874);
var seq23874__$1 = cljs.core.next(seq23874);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23875,seq23874__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23954 = arguments.length;
var i__4737__auto___23955 = (0);
while(true){
if((i__4737__auto___23955 < len__4736__auto___23954)){
args__4742__auto__.push((arguments[i__4737__auto___23955]));

var G__23956 = (i__4737__auto___23955 + (1));
i__4737__auto___23955 = G__23956;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq23876){
var G__23877 = cljs.core.first(seq23876);
var seq23876__$1 = cljs.core.next(seq23876);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23877,seq23876__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23957 = arguments.length;
var i__4737__auto___23958 = (0);
while(true){
if((i__4737__auto___23958 < len__4736__auto___23957)){
args__4742__auto__.push((arguments[i__4737__auto___23958]));

var G__23959 = (i__4737__auto___23958 + (1));
i__4737__auto___23958 = G__23959;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__23814__auto__,rest__23815__auto__){
var convert_case__23816__auto__ = (function (p1__23813__23817__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__23813__23817__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23815__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23814__auto__,convert_case__23816__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq23878){
var G__23879 = cljs.core.first(seq23878);
var seq23878__$1 = cljs.core.next(seq23878);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23879,seq23878__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq23880){
var G__23881 = cljs.core.first(seq23880);
var seq23880__$1 = cljs.core.next(seq23880);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23881,seq23880__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq23882){
var G__23883 = cljs.core.first(seq23882);
var seq23882__$1 = cljs.core.next(seq23882);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23883,seq23882__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq23884){
var G__23885 = cljs.core.first(seq23884);
var seq23884__$1 = cljs.core.next(seq23884);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23885,seq23884__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
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
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23814__auto__,rest__23815__auto__){
var convert_case__23816__auto__ = (function (p1__23813__23817__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__23813__23817__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23815__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23814__auto__,convert_case__23816__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq23886){
var G__23887 = cljs.core.first(seq23886);
var seq23886__$1 = cljs.core.next(seq23886);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23887,seq23886__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23976 = arguments.length;
var i__4737__auto___23977 = (0);
while(true){
if((i__4737__auto___23977 < len__4736__auto___23976)){
args__4742__auto__.push((arguments[i__4737__auto___23977]));

var G__23978 = (i__4737__auto___23977 + (1));
i__4737__auto___23977 = G__23978;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq23888){
var G__23889 = cljs.core.first(seq23888);
var seq23888__$1 = cljs.core.next(seq23888);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23889,seq23888__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23979 = arguments.length;
var i__4737__auto___23980 = (0);
while(true){
if((i__4737__auto___23980 < len__4736__auto___23979)){
args__4742__auto__.push((arguments[i__4737__auto___23980]));

var G__23981 = (i__4737__auto___23980 + (1));
i__4737__auto___23980 = G__23981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq23890){
var G__23891 = cljs.core.first(seq23890);
var seq23890__$1 = cljs.core.next(seq23890);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23891,seq23890__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23982 = arguments.length;
var i__4737__auto___23983 = (0);
while(true){
if((i__4737__auto___23983 < len__4736__auto___23982)){
args__4742__auto__.push((arguments[i__4737__auto___23983]));

var G__23984 = (i__4737__auto___23983 + (1));
i__4737__auto___23983 = G__23984;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq23892){
var G__23893 = cljs.core.first(seq23892);
var seq23892__$1 = cljs.core.next(seq23892);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23893,seq23892__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23985 = arguments.length;
var i__4737__auto___23986 = (0);
while(true){
if((i__4737__auto___23986 < len__4736__auto___23985)){
args__4742__auto__.push((arguments[i__4737__auto___23986]));

var G__23990 = (i__4737__auto___23986 + (1));
i__4737__auto___23986 = G__23990;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23814__auto__,rest__23815__auto__){
var convert_case__23816__auto__ = (function (p1__23813__23817__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__23813__23817__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23815__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23814__auto__,convert_case__23816__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq23894){
var G__23895 = cljs.core.first(seq23894);
var seq23894__$1 = cljs.core.next(seq23894);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23895,seq23894__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23991 = arguments.length;
var i__4737__auto___23992 = (0);
while(true){
if((i__4737__auto___23992 < len__4736__auto___23991)){
args__4742__auto__.push((arguments[i__4737__auto___23992]));

var G__23993 = (i__4737__auto___23992 + (1));
i__4737__auto___23992 = G__23993;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq23896){
var G__23897 = cljs.core.first(seq23896);
var seq23896__$1 = cljs.core.next(seq23896);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23897,seq23896__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq23898){
var G__23899 = cljs.core.first(seq23898);
var seq23898__$1 = cljs.core.next(seq23898);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23899,seq23898__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24003 = arguments.length;
var i__4737__auto___24004 = (0);
while(true){
if((i__4737__auto___24004 < len__4736__auto___24003)){
args__4742__auto__.push((arguments[i__4737__auto___24004]));

var G__24005 = (i__4737__auto___24004 + (1));
i__4737__auto___24004 = G__24005;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq23900){
var G__23901 = cljs.core.first(seq23900);
var seq23900__$1 = cljs.core.next(seq23900);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23901,seq23900__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24010 = arguments.length;
var i__4737__auto___24011 = (0);
while(true){
if((i__4737__auto___24011 < len__4736__auto___24010)){
args__4742__auto__.push((arguments[i__4737__auto___24011]));

var G__24012 = (i__4737__auto___24011 + (1));
i__4737__auto___24011 = G__24012;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23814__auto__,rest__23815__auto__){
var convert_case__23816__auto__ = (function (p1__23813__23817__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__23813__23817__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23815__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23814__auto__,convert_case__23816__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq23902){
var G__23903 = cljs.core.first(seq23902);
var seq23902__$1 = cljs.core.next(seq23902);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23903,seq23902__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24019 = arguments.length;
var i__4737__auto___24020 = (0);
while(true){
if((i__4737__auto___24020 < len__4736__auto___24019)){
args__4742__auto__.push((arguments[i__4737__auto___24020]));

var G__24021 = (i__4737__auto___24020 + (1));
i__4737__auto___24020 = G__24021;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq23904){
var G__23905 = cljs.core.first(seq23904);
var seq23904__$1 = cljs.core.next(seq23904);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23905,seq23904__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24022 = arguments.length;
var i__4737__auto___24023 = (0);
while(true){
if((i__4737__auto___24023 < len__4736__auto___24022)){
args__4742__auto__.push((arguments[i__4737__auto___24023]));

var G__24024 = (i__4737__auto___24023 + (1));
i__4737__auto___24023 = G__24024;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq23906){
var G__23907 = cljs.core.first(seq23906);
var seq23906__$1 = cljs.core.next(seq23906);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23907,seq23906__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24025 = arguments.length;
var i__4737__auto___24026 = (0);
while(true){
if((i__4737__auto___24026 < len__4736__auto___24025)){
args__4742__auto__.push((arguments[i__4737__auto___24026]));

var G__24027 = (i__4737__auto___24026 + (1));
i__4737__auto___24026 = G__24027;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23819__auto__,rest__23820__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__23819__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23820__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq23908){
var G__23909 = cljs.core.first(seq23908);
var seq23908__$1 = cljs.core.next(seq23908);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23909,seq23908__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
