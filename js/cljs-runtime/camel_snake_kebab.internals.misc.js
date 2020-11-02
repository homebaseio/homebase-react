goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18235 = arguments.length;
var i__4737__auto___18236 = (0);
while(true){
if((i__4737__auto___18236 < len__4736__auto___18235)){
args__4742__auto__.push((arguments[i__4737__auto___18236]));

var G__18237 = (i__4737__auto___18236 + (1));
i__4737__auto___18236 = G__18237;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__18227){
var map__18228 = p__18227;
var map__18228__$1 = (((((!((map__18228 == null))))?(((((map__18228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18228):map__18228);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18228__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5733__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5733__auto__){
var vec__18230 = temp__5733__auto__;
var seq__18231 = cljs.core.seq(vec__18230);
var first__18232 = cljs.core.first(seq__18231);
var seq__18231__$1 = cljs.core.next(seq__18231);
var first = first__18232;
var rest = seq__18231__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq18221){
var G__18222 = cljs.core.first(seq18221);
var seq18221__$1 = cljs.core.next(seq18221);
var G__18223 = cljs.core.first(seq18221__$1);
var seq18221__$2 = cljs.core.next(seq18221__$1);
var G__18224 = cljs.core.first(seq18221__$2);
var seq18221__$3 = cljs.core.next(seq18221__$2);
var G__18225 = cljs.core.first(seq18221__$3);
var seq18221__$4 = cljs.core.next(seq18221__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18222,G__18223,G__18224,G__18225,seq18221__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4126__auto__ = (function (){var G__18234 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__18234) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__18234));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
