goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23655 = arguments.length;
var i__4737__auto___23656 = (0);
while(true){
if((i__4737__auto___23656 < len__4736__auto___23655)){
args__4742__auto__.push((arguments[i__4737__auto___23656]));

var G__23657 = (i__4737__auto___23656 + (1));
i__4737__auto___23656 = G__23657;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__23647){
var map__23648 = p__23647;
var map__23648__$1 = (((((!((map__23648 == null))))?(((((map__23648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23648):map__23648);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23648__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5733__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5733__auto__){
var vec__23650 = temp__5733__auto__;
var seq__23651 = cljs.core.seq(vec__23650);
var first__23652 = cljs.core.first(seq__23651);
var seq__23651__$1 = cljs.core.next(seq__23651);
var first = first__23652;
var rest = seq__23651__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq23642){
var G__23643 = cljs.core.first(seq23642);
var seq23642__$1 = cljs.core.next(seq23642);
var G__23644 = cljs.core.first(seq23642__$1);
var seq23642__$2 = cljs.core.next(seq23642__$1);
var G__23645 = cljs.core.first(seq23642__$2);
var seq23642__$3 = cljs.core.next(seq23642__$2);
var G__23646 = cljs.core.first(seq23642__$3);
var seq23642__$4 = cljs.core.next(seq23642__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23643,G__23644,G__23645,G__23646,seq23642__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4126__auto__ = (function (){var G__23654 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__23654) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__23654));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
