goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18707 = arguments.length;
var i__4737__auto___18708 = (0);
while(true){
if((i__4737__auto___18708 < len__4736__auto___18707)){
args__4742__auto__.push((arguments[i__4737__auto___18708]));

var G__18709 = (i__4737__auto___18708 + (1));
i__4737__auto___18708 = G__18709;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__18699){
var map__18700 = p__18699;
var map__18700__$1 = (((((!((map__18700 == null))))?(((((map__18700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18700):map__18700);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18700__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5733__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5733__auto__){
var vec__18702 = temp__5733__auto__;
var seq__18703 = cljs.core.seq(vec__18702);
var first__18704 = cljs.core.first(seq__18703);
var seq__18703__$1 = cljs.core.next(seq__18703);
var first = first__18704;
var rest = seq__18703__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq18694){
var G__18695 = cljs.core.first(seq18694);
var seq18694__$1 = cljs.core.next(seq18694);
var G__18696 = cljs.core.first(seq18694__$1);
var seq18694__$2 = cljs.core.next(seq18694__$1);
var G__18697 = cljs.core.first(seq18694__$2);
var seq18694__$3 = cljs.core.next(seq18694__$2);
var G__18698 = cljs.core.first(seq18694__$3);
var seq18694__$4 = cljs.core.next(seq18694__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18695,G__18696,G__18697,G__18698,seq18694__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4126__auto__ = (function (){var G__18706 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__18706) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__18706));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
