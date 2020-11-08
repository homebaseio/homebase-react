goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
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

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq18581){
var G__18582 = cljs.core.first(seq18581);
var seq18581__$1 = cljs.core.next(seq18581);
var G__18583 = cljs.core.first(seq18581__$1);
var seq18581__$2 = cljs.core.next(seq18581__$1);
var G__18584 = cljs.core.first(seq18581__$2);
var seq18581__$3 = cljs.core.next(seq18581__$2);
var G__18585 = cljs.core.first(seq18581__$3);
var seq18581__$4 = cljs.core.next(seq18581__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18582,G__18583,G__18584,G__18585,seq18581__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18898 = arguments.length;
var i__4737__auto___18899 = (0);
while(true){
if((i__4737__auto___18899 < len__4736__auto___18898)){
args__4742__auto__.push((arguments[i__4737__auto___18899]));

var G__18901 = (i__4737__auto___18899 + (1));
i__4737__auto___18899 = G__18901;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18545__auto__,rest__18546__auto__){
var convert_case__18547__auto__ = (function (p1__18544__18548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__18544__18548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18545__auto__,convert_case__18547__auto__);
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
var len__4736__auto___18902 = arguments.length;
var i__4737__auto___18903 = (0);
while(true){
if((i__4737__auto___18903 < len__4736__auto___18902)){
args__4742__auto__.push((arguments[i__4737__auto___18903]));

var G__18911 = (i__4737__auto___18903 + (1));
i__4737__auto___18903 = G__18911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
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
var len__4736__auto___18912 = arguments.length;
var i__4737__auto___18913 = (0);
while(true){
if((i__4737__auto___18913 < len__4736__auto___18912)){
args__4742__auto__.push((arguments[i__4737__auto___18913]));

var G__18914 = (i__4737__auto___18913 + (1));
i__4737__auto___18913 = G__18914;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
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
var len__4736__auto___18915 = arguments.length;
var i__4737__auto___18916 = (0);
while(true){
if((i__4737__auto___18916 < len__4736__auto___18915)){
args__4742__auto__.push((arguments[i__4737__auto___18916]));

var G__18917 = (i__4737__auto___18916 + (1));
i__4737__auto___18916 = G__18917;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq18605){
var G__18606 = cljs.core.first(seq18605);
var seq18605__$1 = cljs.core.next(seq18605);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18606,seq18605__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18918 = arguments.length;
var i__4737__auto___18919 = (0);
while(true){
if((i__4737__auto___18919 < len__4736__auto___18918)){
args__4742__auto__.push((arguments[i__4737__auto___18919]));

var G__18920 = (i__4737__auto___18919 + (1));
i__4737__auto___18919 = G__18920;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18545__auto__,rest__18546__auto__){
var convert_case__18547__auto__ = (function (p1__18544__18548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__18544__18548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18545__auto__,convert_case__18547__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq18619){
var G__18620 = cljs.core.first(seq18619);
var seq18619__$1 = cljs.core.next(seq18619);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18620,seq18619__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18921 = arguments.length;
var i__4737__auto___18922 = (0);
while(true){
if((i__4737__auto___18922 < len__4736__auto___18921)){
args__4742__auto__.push((arguments[i__4737__auto___18922]));

var G__18923 = (i__4737__auto___18922 + (1));
i__4737__auto___18922 = G__18923;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq18639){
var G__18640 = cljs.core.first(seq18639);
var seq18639__$1 = cljs.core.next(seq18639);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18640,seq18639__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18932 = arguments.length;
var i__4737__auto___18933 = (0);
while(true){
if((i__4737__auto___18933 < len__4736__auto___18932)){
args__4742__auto__.push((arguments[i__4737__auto___18933]));

var G__18934 = (i__4737__auto___18933 + (1));
i__4737__auto___18933 = G__18934;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__18545__auto__,rest__18546__auto__){
var convert_case__18547__auto__ = (function (p1__18544__18548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__18544__18548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18545__auto__,convert_case__18547__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq18641){
var G__18642 = cljs.core.first(seq18641);
var seq18641__$1 = cljs.core.next(seq18641);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18642,seq18641__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq18643){
var G__18644 = cljs.core.first(seq18643);
var seq18643__$1 = cljs.core.next(seq18643);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18644,seq18643__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18938 = arguments.length;
var i__4737__auto___18939 = (0);
while(true){
if((i__4737__auto___18939 < len__4736__auto___18938)){
args__4742__auto__.push((arguments[i__4737__auto___18939]));

var G__18940 = (i__4737__auto___18939 + (1));
i__4737__auto___18939 = G__18940;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq18645){
var G__18646 = cljs.core.first(seq18645);
var seq18645__$1 = cljs.core.next(seq18645);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18646,seq18645__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq18652){
var G__18653 = cljs.core.first(seq18652);
var seq18652__$1 = cljs.core.next(seq18652);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18653,seq18652__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__18545__auto__,rest__18546__auto__){
var convert_case__18547__auto__ = (function (p1__18544__18548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__18544__18548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18545__auto__,convert_case__18547__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq18659){
var G__18660 = cljs.core.first(seq18659);
var seq18659__$1 = cljs.core.next(seq18659);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18660,seq18659__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq18661){
var G__18662 = cljs.core.first(seq18661);
var seq18661__$1 = cljs.core.next(seq18661);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18662,seq18661__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq18663){
var G__18664 = cljs.core.first(seq18663);
var seq18663__$1 = cljs.core.next(seq18663);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18664,seq18663__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq18665){
var G__18666 = cljs.core.first(seq18665);
var seq18665__$1 = cljs.core.next(seq18665);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18666,seq18665__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
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
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18545__auto__,rest__18546__auto__){
var convert_case__18547__auto__ = (function (p1__18544__18548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__18544__18548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18545__auto__,convert_case__18547__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq18675){
var G__18676 = cljs.core.first(seq18675);
var seq18675__$1 = cljs.core.next(seq18675);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18676,seq18675__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq18677){
var G__18678 = cljs.core.first(seq18677);
var seq18677__$1 = cljs.core.next(seq18677);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18678,seq18677__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq18683){
var G__18684 = cljs.core.first(seq18683);
var seq18683__$1 = cljs.core.next(seq18683);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18684,seq18683__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq18715){
var G__18716 = cljs.core.first(seq18715);
var seq18715__$1 = cljs.core.next(seq18715);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18716,seq18715__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18545__auto__,rest__18546__auto__){
var convert_case__18547__auto__ = (function (p1__18544__18548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__18544__18548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18545__auto__,convert_case__18547__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq18720){
var G__18721 = cljs.core.first(seq18720);
var seq18720__$1 = cljs.core.next(seq18720);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18721,seq18720__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq18814){
var G__18815 = cljs.core.first(seq18814);
var seq18814__$1 = cljs.core.next(seq18814);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18815,seq18814__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq18821){
var G__18823 = cljs.core.first(seq18821);
var seq18821__$1 = cljs.core.next(seq18821);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18823,seq18821__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq18829){
var G__18830 = cljs.core.first(seq18829);
var seq18829__$1 = cljs.core.next(seq18829);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18830,seq18829__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__18545__auto__,rest__18546__auto__){
var convert_case__18547__auto__ = (function (p1__18544__18548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__18544__18548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__18545__auto__,convert_case__18547__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq18850){
var G__18851 = cljs.core.first(seq18850);
var seq18850__$1 = cljs.core.next(seq18850);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18851,seq18850__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq18868){
var G__18869 = cljs.core.first(seq18868);
var seq18868__$1 = cljs.core.next(seq18868);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18869,seq18868__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq18872){
var G__18873 = cljs.core.first(seq18872);
var seq18872__$1 = cljs.core.next(seq18872);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18873,seq18872__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__18550__auto__,rest__18551__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__18550__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__18551__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq18875){
var G__18876 = cljs.core.first(seq18875);
var seq18875__$1 = cljs.core.next(seq18875);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18876,seq18875__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
