goog.provide('homebase.util');
homebase.util.paths = (function homebase$util$paths(m){
if((((!(cljs.core.map_QMARK_(m)))) || (cljs.core.empty_QMARK_(m)))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
var iter__4529__auto__ = (function homebase$util$paths_$_iter__18118(s__18119){
return (new cljs.core.LazySeq(null,(function (){
var s__18119__$1 = s__18119;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__18119__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__18124 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124,(1),null);
var iterys__4525__auto__ = ((function (s__18119__$1,vec__18124,k,v,xs__6292__auto__,temp__5735__auto__){
return (function homebase$util$paths_$_iter__18118_$_iter__18120(s__18121){
return (new cljs.core.LazySeq(null,((function (s__18119__$1,vec__18124,k,v,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__18121__$1 = s__18121;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__18121__$1);
if(temp__5735__auto____$1){
var s__18121__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18121__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18121__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18123 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18122 = (0);
while(true){
if((i__18122 < size__4528__auto__)){
var subkey = cljs.core._nth(c__4527__auto__,i__18122);
cljs.core.chunk_append(b__18123,cljs.core.cons(k,subkey));

var G__18130 = (i__18122 + (1));
i__18122 = G__18130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18123),homebase$util$paths_$_iter__18118_$_iter__18120(cljs.core.chunk_rest(s__18121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18123),null);
}
} else {
var subkey = cljs.core.first(s__18121__$2);
return cljs.core.cons(cljs.core.cons(k,subkey),homebase$util$paths_$_iter__18118_$_iter__18120(cljs.core.rest(s__18121__$2)));
}
} else {
return null;
}
break;
}
});})(s__18119__$1,vec__18124,k,v,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__18119__$1,vec__18124,k,v,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((homebase.util.paths.cljs$core$IFn$_invoke$arity$1 ? homebase.util.paths.cljs$core$IFn$_invoke$arity$1(v) : homebase.util.paths.call(null,v))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,homebase$util$paths_$_iter__18118(cljs.core.rest(s__18119__$1)));
} else {
var G__18131 = cljs.core.rest(s__18119__$1);
s__18119__$1 = G__18131;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
}
});

//# sourceMappingURL=homebase.util.js.map
