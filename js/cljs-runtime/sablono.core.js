goog.provide('sablono.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * The React.js create element function.
 */
sablono.core.create_element = module$node_modules$react$index.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = module$node_modules$react$index.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__16399__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__16021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__16022 = cljs.core.seq(vec__16021);
var first__16023 = cljs.core.first(seq__16022);
var seq__16022__$1 = cljs.core.next(seq__16022);
var tag = first__16023;
var body = seq__16022__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16400__i = 0, G__16400__a = new Array(arguments.length -  0);
while (G__16400__i < G__16400__a.length) {G__16400__a[G__16400__i] = arguments[G__16400__i + 0]; ++G__16400__i;}
  args = new cljs.core.IndexedSeq(G__16400__a,0,null);
} 
return G__16399__delegate.call(this,args);};
G__16399.cljs$lang$maxFixedArity = 0;
G__16399.cljs$lang$applyTo = (function (arglist__16401){
var args = cljs.core.seq(arglist__16401);
return G__16399__delegate(args);
});
G__16399.cljs$core$IFn$_invoke$arity$variadic = G__16399__delegate;
return G__16399;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__16024(s__16025){
return (new cljs.core.LazySeq(null,(function (){
var s__16025__$1 = s__16025;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16025__$1);
if(temp__5735__auto__){
var s__16025__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16025__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16025__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16027 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16026 = (0);
while(true){
if((i__16026 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__16026);
cljs.core.chunk_append(b__16027,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16405 = (i__16026 + (1));
i__16026 = G__16405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16027),sablono$core$update_arglists_$_iter__16024(cljs.core.chunk_rest(s__16025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16027),null);
}
} else {
var args = cljs.core.first(s__16025__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__16024(cljs.core.rest(s__16025__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16409 = arguments.length;
var i__4737__auto___16410 = (0);
while(true){
if((i__4737__auto___16410 < len__4736__auto___16409)){
args__4742__auto__.push((arguments[i__4737__auto___16410]));

var G__16411 = (i__4737__auto___16410 + (1));
i__4737__auto___16410 = G__16411;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__16048(s__16049){
return (new cljs.core.LazySeq(null,(function (){
var s__16049__$1 = s__16049;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16049__$1);
if(temp__5735__auto__){
var s__16049__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16049__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16049__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16051 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16050 = (0);
while(true){
if((i__16050 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__16050);
cljs.core.chunk_append(b__16051,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16415 = (i__16050 + (1));
i__16050 = G__16415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16051),sablono$core$iter__16048(cljs.core.chunk_rest(s__16049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16051),null);
}
} else {
var style = cljs.core.first(s__16049__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__16048(cljs.core.rest(s__16049__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq16043){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16043));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to16065 = (function sablono$core$link_to16065(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16420 = arguments.length;
var i__4737__auto___16421 = (0);
while(true){
if((i__4737__auto___16421 < len__4736__auto___16420)){
args__4742__auto__.push((arguments[i__4737__auto___16421]));

var G__16422 = (i__4737__auto___16421 + (1));
i__4737__auto___16421 = G__16422;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to16065.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to16065.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to16065.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to16065.cljs$lang$applyTo = (function (seq16066){
var G__16067 = cljs.core.first(seq16066);
var seq16066__$1 = cljs.core.next(seq16066);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16067,seq16066__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16065);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16072 = (function sablono$core$mail_to16072(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16424 = arguments.length;
var i__4737__auto___16425 = (0);
while(true){
if((i__4737__auto___16425 < len__4736__auto___16424)){
args__4742__auto__.push((arguments[i__4737__auto___16425]));

var G__16426 = (i__4737__auto___16425 + (1));
i__4737__auto___16425 = G__16426;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to16072.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to16072.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16087){
var vec__16088 = p__16087;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16088,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to16072.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to16072.cljs$lang$applyTo = (function (seq16073){
var G__16074 = cljs.core.first(seq16073);
var seq16073__$1 = cljs.core.next(seq16073);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16074,seq16073__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16072);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16091 = (function sablono$core$unordered_list16091(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list16091_$_iter__16092(s__16093){
return (new cljs.core.LazySeq(null,(function (){
var s__16093__$1 = s__16093;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16093__$1);
if(temp__5735__auto__){
var s__16093__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16093__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16093__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16095 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16094 = (0);
while(true){
if((i__16094 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16094);
cljs.core.chunk_append(b__16095,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16427 = (i__16094 + (1));
i__16094 = G__16427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16095),sablono$core$unordered_list16091_$_iter__16092(cljs.core.chunk_rest(s__16093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16095),null);
}
} else {
var x = cljs.core.first(s__16093__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list16091_$_iter__16092(cljs.core.rest(s__16093__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16091);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16122 = (function sablono$core$ordered_list16122(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list16122_$_iter__16126(s__16127){
return (new cljs.core.LazySeq(null,(function (){
var s__16127__$1 = s__16127;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16127__$1);
if(temp__5735__auto__){
var s__16127__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16127__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16127__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16129 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16128 = (0);
while(true){
if((i__16128 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16128);
cljs.core.chunk_append(b__16129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16428 = (i__16128 + (1));
i__16128 = G__16428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16129),sablono$core$ordered_list16122_$_iter__16126(cljs.core.chunk_rest(s__16127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16129),null);
}
} else {
var x = cljs.core.first(s__16127__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list16122_$_iter__16126(cljs.core.rest(s__16127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16122);
/**
 * Create an image element.
 */
sablono.core.image16143 = (function sablono$core$image16143(var_args){
var G__16145 = arguments.length;
switch (G__16145) {
case 1:
return sablono.core.image16143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image16143.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image16143.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image16143.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16143);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16150_SHARP_,p2__16152_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16150_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16152_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16154_SHARP_,p2__16155_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16154_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16155_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__16157 = arguments.length;
switch (G__16157) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field16176 = (function sablono$core$color_field16176(var_args){
var G__16178 = arguments.length;
switch (G__16178) {
case 1:
return sablono.core.color_field16176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field16176.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__16013__auto__);
}));

(sablono.core.color_field16176.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.color_field16176.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field16176);

/**
 * Creates a date input field.
 */
sablono.core.date_field16179 = (function sablono$core$date_field16179(var_args){
var G__16181 = arguments.length;
switch (G__16181) {
case 1:
return sablono.core.date_field16179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field16179.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__16013__auto__);
}));

(sablono.core.date_field16179.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.date_field16179.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field16179);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16188 = (function sablono$core$datetime_field16188(var_args){
var G__16191 = arguments.length;
switch (G__16191) {
case 1:
return sablono.core.datetime_field16188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field16188.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__16013__auto__);
}));

(sablono.core.datetime_field16188.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.datetime_field16188.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field16188);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16211 = (function sablono$core$datetime_local_field16211(var_args){
var G__16213 = arguments.length;
switch (G__16213) {
case 1:
return sablono.core.datetime_local_field16211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field16211.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__16013__auto__);
}));

(sablono.core.datetime_local_field16211.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.datetime_local_field16211.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field16211);

/**
 * Creates a email input field.
 */
sablono.core.email_field16214 = (function sablono$core$email_field16214(var_args){
var G__16216 = arguments.length;
switch (G__16216) {
case 1:
return sablono.core.email_field16214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field16214.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__16013__auto__);
}));

(sablono.core.email_field16214.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.email_field16214.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16214);

/**
 * Creates a file input field.
 */
sablono.core.file_field16217 = (function sablono$core$file_field16217(var_args){
var G__16219 = arguments.length;
switch (G__16219) {
case 1:
return sablono.core.file_field16217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field16217.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__16013__auto__);
}));

(sablono.core.file_field16217.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.file_field16217.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16217);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16232 = (function sablono$core$hidden_field16232(var_args){
var G__16234 = arguments.length;
switch (G__16234) {
case 1:
return sablono.core.hidden_field16232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field16232.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__16013__auto__);
}));

(sablono.core.hidden_field16232.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.hidden_field16232.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16232);

/**
 * Creates a month input field.
 */
sablono.core.month_field16235 = (function sablono$core$month_field16235(var_args){
var G__16237 = arguments.length;
switch (G__16237) {
case 1:
return sablono.core.month_field16235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field16235.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__16013__auto__);
}));

(sablono.core.month_field16235.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.month_field16235.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16235);

/**
 * Creates a number input field.
 */
sablono.core.number_field16238 = (function sablono$core$number_field16238(var_args){
var G__16240 = arguments.length;
switch (G__16240) {
case 1:
return sablono.core.number_field16238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field16238.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__16013__auto__);
}));

(sablono.core.number_field16238.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.number_field16238.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16238);

/**
 * Creates a password input field.
 */
sablono.core.password_field16245 = (function sablono$core$password_field16245(var_args){
var G__16247 = arguments.length;
switch (G__16247) {
case 1:
return sablono.core.password_field16245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field16245.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__16013__auto__);
}));

(sablono.core.password_field16245.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.password_field16245.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16245);

/**
 * Creates a range input field.
 */
sablono.core.range_field16248 = (function sablono$core$range_field16248(var_args){
var G__16250 = arguments.length;
switch (G__16250) {
case 1:
return sablono.core.range_field16248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field16248.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__16013__auto__);
}));

(sablono.core.range_field16248.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.range_field16248.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16248);

/**
 * Creates a search input field.
 */
sablono.core.search_field16251 = (function sablono$core$search_field16251(var_args){
var G__16253 = arguments.length;
switch (G__16253) {
case 1:
return sablono.core.search_field16251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field16251.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__16013__auto__);
}));

(sablono.core.search_field16251.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.search_field16251.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16251);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16267 = (function sablono$core$tel_field16267(var_args){
var G__16269 = arguments.length;
switch (G__16269) {
case 1:
return sablono.core.tel_field16267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field16267.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__16013__auto__);
}));

(sablono.core.tel_field16267.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.tel_field16267.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16267);

/**
 * Creates a text input field.
 */
sablono.core.text_field16270 = (function sablono$core$text_field16270(var_args){
var G__16272 = arguments.length;
switch (G__16272) {
case 1:
return sablono.core.text_field16270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field16270.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__16013__auto__);
}));

(sablono.core.text_field16270.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.text_field16270.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16270);

/**
 * Creates a time input field.
 */
sablono.core.time_field16273 = (function sablono$core$time_field16273(var_args){
var G__16275 = arguments.length;
switch (G__16275) {
case 1:
return sablono.core.time_field16273.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16273.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field16273.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__16013__auto__);
}));

(sablono.core.time_field16273.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.time_field16273.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16273);

/**
 * Creates a url input field.
 */
sablono.core.url_field16276 = (function sablono$core$url_field16276(var_args){
var G__16278 = arguments.length;
switch (G__16278) {
case 1:
return sablono.core.url_field16276.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16276.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field16276.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__16013__auto__);
}));

(sablono.core.url_field16276.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.url_field16276.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16276);

/**
 * Creates a week input field.
 */
sablono.core.week_field16279 = (function sablono$core$week_field16279(var_args){
var G__16281 = arguments.length;
switch (G__16281) {
case 1:
return sablono.core.week_field16279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field16279.cljs$core$IFn$_invoke$arity$1 = (function (name__16013__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__16013__auto__);
}));

(sablono.core.week_field16279.cljs$core$IFn$_invoke$arity$2 = (function (name__16013__auto__,value__16014__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__16013__auto__,value__16014__auto__);
}));

(sablono.core.week_field16279.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16279);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16291 = (function sablono$core$check_box16291(var_args){
var G__16293 = arguments.length;
switch (G__16293) {
case 1:
return sablono.core.check_box16291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16291.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box16291.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box16291.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16291.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16291.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16291);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16302 = (function sablono$core$radio_button16302(var_args){
var G__16313 = arguments.length;
switch (G__16313) {
case 1:
return sablono.core.radio_button16302.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16302.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16302.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button16302.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button16302.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16302.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16302.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16302);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16321 = (function sablono$core$select_options16321(coll){
var iter__4529__auto__ = (function sablono$core$select_options16321_$_iter__16322(s__16323){
return (new cljs.core.LazySeq(null,(function (){
var s__16323__$1 = s__16323;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16323__$1);
if(temp__5735__auto__){
var s__16323__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16323__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16323__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16325 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16324 = (0);
while(true){
if((i__16324 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16324);
cljs.core.chunk_append(b__16325,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16328 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16328,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16328,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16328,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16321.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16321.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16321.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__16457 = (i__16324 + (1));
i__16324 = G__16457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16325),sablono$core$select_options16321_$_iter__16322(cljs.core.chunk_rest(s__16323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16325),null);
}
} else {
var x = cljs.core.first(s__16323__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16344 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16321.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16321.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16321.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options16321_$_iter__16322(cljs.core.rest(s__16323__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16321);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16348 = (function sablono$core$drop_down16348(var_args){
var G__16350 = arguments.length;
switch (G__16350) {
case 2:
return sablono.core.drop_down16348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16348.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down16348.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16348.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down16348.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down16348.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16348);
/**
 * Creates a text area element.
 */
sablono.core.text_area16351 = (function sablono$core$text_area16351(var_args){
var G__16353 = arguments.length;
switch (G__16353) {
case 1:
return sablono.core.text_area16351.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16351.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area16351.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area16351.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area16351.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16351);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16383 = (function sablono$core$label16383(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16383);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16384 = (function sablono$core$submit_button16384(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16384);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16385 = (function sablono$core$reset_button16385(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16385);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16386 = (function sablono$core$form_to16386(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16460 = arguments.length;
var i__4737__auto___16461 = (0);
while(true){
if((i__4737__auto___16461 < len__4736__auto___16460)){
args__4742__auto__.push((arguments[i__4737__auto___16461]));

var G__16462 = (i__4737__auto___16461 + (1));
i__4737__auto___16461 = G__16462;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to16386.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to16386.cljs$core$IFn$_invoke$arity$variadic = (function (p__16389,body){
var vec__16390 = p__16389;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to16386.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to16386.cljs$lang$applyTo = (function (seq16387){
var G__16388 = cljs.core.first(seq16387);
var seq16387__$1 = cljs.core.next(seq16387);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16388,seq16387__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16386);

//# sourceMappingURL=sablono.core.js.map
