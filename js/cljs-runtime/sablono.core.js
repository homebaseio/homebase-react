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
var G__16273__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__15965 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__15966 = cljs.core.seq(vec__15965);
var first__15967 = cljs.core.first(seq__15966);
var seq__15966__$1 = cljs.core.next(seq__15966);
var tag = first__15967;
var body = seq__15966__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16274__i = 0, G__16274__a = new Array(arguments.length -  0);
while (G__16274__i < G__16274__a.length) {G__16274__a[G__16274__i] = arguments[G__16274__i + 0]; ++G__16274__i;}
  args = new cljs.core.IndexedSeq(G__16274__a,0,null);
} 
return G__16273__delegate.call(this,args);};
G__16273.cljs$lang$maxFixedArity = 0;
G__16273.cljs$lang$applyTo = (function (arglist__16275){
var args = cljs.core.seq(arglist__16275);
return G__16273__delegate(args);
});
G__16273.cljs$core$IFn$_invoke$arity$variadic = G__16273__delegate;
return G__16273;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__15968(s__15969){
return (new cljs.core.LazySeq(null,(function (){
var s__15969__$1 = s__15969;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15969__$1);
if(temp__5735__auto__){
var s__15969__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15969__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15969__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15971 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15970 = (0);
while(true){
if((i__15970 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__15970);
cljs.core.chunk_append(b__15971,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16276 = (i__15970 + (1));
i__15970 = G__16276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15971),sablono$core$update_arglists_$_iter__15968(cljs.core.chunk_rest(s__15969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15971),null);
}
} else {
var args = cljs.core.first(s__15969__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15968(cljs.core.rest(s__15969__$2)));
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
var len__4736__auto___16277 = arguments.length;
var i__4737__auto___16278 = (0);
while(true){
if((i__4737__auto___16278 < len__4736__auto___16277)){
args__4742__auto__.push((arguments[i__4737__auto___16278]));

var G__16279 = (i__4737__auto___16278 + (1));
i__4737__auto___16278 = G__16279;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__15973(s__15974){
return (new cljs.core.LazySeq(null,(function (){
var s__15974__$1 = s__15974;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15974__$1);
if(temp__5735__auto__){
var s__15974__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15974__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15974__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15976 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15975 = (0);
while(true){
if((i__15975 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__15975);
cljs.core.chunk_append(b__15976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16285 = (i__15975 + (1));
i__15975 = G__16285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15976),sablono$core$iter__15973(cljs.core.chunk_rest(s__15974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15976),null);
}
} else {
var style = cljs.core.first(s__15974__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15973(cljs.core.rest(s__15974__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq15972){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15972));
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
sablono.core.link_to16027 = (function sablono$core$link_to16027(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16287 = arguments.length;
var i__4737__auto___16288 = (0);
while(true){
if((i__4737__auto___16288 < len__4736__auto___16287)){
args__4742__auto__.push((arguments[i__4737__auto___16288]));

var G__16289 = (i__4737__auto___16288 + (1));
i__4737__auto___16288 = G__16289;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to16027.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to16027.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to16027.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to16027.cljs$lang$applyTo = (function (seq16028){
var G__16029 = cljs.core.first(seq16028);
var seq16028__$1 = cljs.core.next(seq16028);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16029,seq16028__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16027);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16045 = (function sablono$core$mail_to16045(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16294 = arguments.length;
var i__4737__auto___16295 = (0);
while(true){
if((i__4737__auto___16295 < len__4736__auto___16294)){
args__4742__auto__.push((arguments[i__4737__auto___16295]));

var G__16296 = (i__4737__auto___16295 + (1));
i__4737__auto___16295 = G__16296;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to16045.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to16045.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16048){
var vec__16049 = p__16048;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16049,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to16045.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to16045.cljs$lang$applyTo = (function (seq16046){
var G__16047 = cljs.core.first(seq16046);
var seq16046__$1 = cljs.core.next(seq16046);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16047,seq16046__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16045);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16052 = (function sablono$core$unordered_list16052(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list16052_$_iter__16053(s__16054){
return (new cljs.core.LazySeq(null,(function (){
var s__16054__$1 = s__16054;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16054__$1);
if(temp__5735__auto__){
var s__16054__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16054__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16054__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16056 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16055 = (0);
while(true){
if((i__16055 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16055);
cljs.core.chunk_append(b__16056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16297 = (i__16055 + (1));
i__16055 = G__16297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16056),sablono$core$unordered_list16052_$_iter__16053(cljs.core.chunk_rest(s__16054__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16056),null);
}
} else {
var x = cljs.core.first(s__16054__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list16052_$_iter__16053(cljs.core.rest(s__16054__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16052);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16067 = (function sablono$core$ordered_list16067(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list16067_$_iter__16068(s__16069){
return (new cljs.core.LazySeq(null,(function (){
var s__16069__$1 = s__16069;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16069__$1);
if(temp__5735__auto__){
var s__16069__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16069__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16069__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16071 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16070 = (0);
while(true){
if((i__16070 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16070);
cljs.core.chunk_append(b__16071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16298 = (i__16070 + (1));
i__16070 = G__16298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16071),sablono$core$ordered_list16067_$_iter__16068(cljs.core.chunk_rest(s__16069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16071),null);
}
} else {
var x = cljs.core.first(s__16069__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list16067_$_iter__16068(cljs.core.rest(s__16069__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16067);
/**
 * Create an image element.
 */
sablono.core.image16090 = (function sablono$core$image16090(var_args){
var G__16094 = arguments.length;
switch (G__16094) {
case 1:
return sablono.core.image16090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image16090.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image16090.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image16090.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16090);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16097_SHARP_,p2__16098_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16097_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16098_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16102_SHARP_,p2__16103_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16102_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16103_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__16108 = arguments.length;
switch (G__16108) {
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
sablono.core.color_field16141 = (function sablono$core$color_field16141(var_args){
var G__16143 = arguments.length;
switch (G__16143) {
case 1:
return sablono.core.color_field16141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field16141.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15937__auto__);
}));

(sablono.core.color_field16141.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.color_field16141.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field16141);

/**
 * Creates a date input field.
 */
sablono.core.date_field16156 = (function sablono$core$date_field16156(var_args){
var G__16158 = arguments.length;
switch (G__16158) {
case 1:
return sablono.core.date_field16156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field16156.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15937__auto__);
}));

(sablono.core.date_field16156.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.date_field16156.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field16156);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16163 = (function sablono$core$datetime_field16163(var_args){
var G__16168 = arguments.length;
switch (G__16168) {
case 1:
return sablono.core.datetime_field16163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field16163.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15937__auto__);
}));

(sablono.core.datetime_field16163.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.datetime_field16163.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field16163);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16174 = (function sablono$core$datetime_local_field16174(var_args){
var G__16176 = arguments.length;
switch (G__16176) {
case 1:
return sablono.core.datetime_local_field16174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field16174.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15937__auto__);
}));

(sablono.core.datetime_local_field16174.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.datetime_local_field16174.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field16174);

/**
 * Creates a email input field.
 */
sablono.core.email_field16178 = (function sablono$core$email_field16178(var_args){
var G__16183 = arguments.length;
switch (G__16183) {
case 1:
return sablono.core.email_field16178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field16178.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15937__auto__);
}));

(sablono.core.email_field16178.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.email_field16178.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16178);

/**
 * Creates a file input field.
 */
sablono.core.file_field16187 = (function sablono$core$file_field16187(var_args){
var G__16189 = arguments.length;
switch (G__16189) {
case 1:
return sablono.core.file_field16187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field16187.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15937__auto__);
}));

(sablono.core.file_field16187.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.file_field16187.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16187);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16193 = (function sablono$core$hidden_field16193(var_args){
var G__16195 = arguments.length;
switch (G__16195) {
case 1:
return sablono.core.hidden_field16193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field16193.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15937__auto__);
}));

(sablono.core.hidden_field16193.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.hidden_field16193.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16193);

/**
 * Creates a month input field.
 */
sablono.core.month_field16196 = (function sablono$core$month_field16196(var_args){
var G__16200 = arguments.length;
switch (G__16200) {
case 1:
return sablono.core.month_field16196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field16196.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15937__auto__);
}));

(sablono.core.month_field16196.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.month_field16196.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16196);

/**
 * Creates a number input field.
 */
sablono.core.number_field16203 = (function sablono$core$number_field16203(var_args){
var G__16205 = arguments.length;
switch (G__16205) {
case 1:
return sablono.core.number_field16203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field16203.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15937__auto__);
}));

(sablono.core.number_field16203.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.number_field16203.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16203);

/**
 * Creates a password input field.
 */
sablono.core.password_field16206 = (function sablono$core$password_field16206(var_args){
var G__16208 = arguments.length;
switch (G__16208) {
case 1:
return sablono.core.password_field16206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field16206.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15937__auto__);
}));

(sablono.core.password_field16206.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.password_field16206.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16206);

/**
 * Creates a range input field.
 */
sablono.core.range_field16209 = (function sablono$core$range_field16209(var_args){
var G__16211 = arguments.length;
switch (G__16211) {
case 1:
return sablono.core.range_field16209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field16209.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15937__auto__);
}));

(sablono.core.range_field16209.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.range_field16209.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16209);

/**
 * Creates a search input field.
 */
sablono.core.search_field16213 = (function sablono$core$search_field16213(var_args){
var G__16215 = arguments.length;
switch (G__16215) {
case 1:
return sablono.core.search_field16213.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field16213.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15937__auto__);
}));

(sablono.core.search_field16213.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.search_field16213.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16213);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16218 = (function sablono$core$tel_field16218(var_args){
var G__16223 = arguments.length;
switch (G__16223) {
case 1:
return sablono.core.tel_field16218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field16218.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15937__auto__);
}));

(sablono.core.tel_field16218.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.tel_field16218.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16218);

/**
 * Creates a text input field.
 */
sablono.core.text_field16224 = (function sablono$core$text_field16224(var_args){
var G__16226 = arguments.length;
switch (G__16226) {
case 1:
return sablono.core.text_field16224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field16224.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15937__auto__);
}));

(sablono.core.text_field16224.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.text_field16224.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16224);

/**
 * Creates a time input field.
 */
sablono.core.time_field16227 = (function sablono$core$time_field16227(var_args){
var G__16229 = arguments.length;
switch (G__16229) {
case 1:
return sablono.core.time_field16227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field16227.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15937__auto__);
}));

(sablono.core.time_field16227.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.time_field16227.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16227);

/**
 * Creates a url input field.
 */
sablono.core.url_field16230 = (function sablono$core$url_field16230(var_args){
var G__16232 = arguments.length;
switch (G__16232) {
case 1:
return sablono.core.url_field16230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field16230.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15937__auto__);
}));

(sablono.core.url_field16230.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.url_field16230.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16230);

/**
 * Creates a week input field.
 */
sablono.core.week_field16233 = (function sablono$core$week_field16233(var_args){
var G__16235 = arguments.length;
switch (G__16235) {
case 1:
return sablono.core.week_field16233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field16233.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15937__auto__);
}));

(sablono.core.week_field16233.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.week_field16233.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16233);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16236 = (function sablono$core$check_box16236(var_args){
var G__16238 = arguments.length;
switch (G__16238) {
case 1:
return sablono.core.check_box16236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16236.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box16236.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box16236.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16236.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16236.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16236);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16239 = (function sablono$core$radio_button16239(var_args){
var G__16241 = arguments.length;
switch (G__16241) {
case 1:
return sablono.core.radio_button16239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16239.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button16239.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button16239.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16239.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16239.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16239);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16245 = (function sablono$core$select_options16245(coll){
var iter__4529__auto__ = (function sablono$core$select_options16245_$_iter__16246(s__16247){
return (new cljs.core.LazySeq(null,(function (){
var s__16247__$1 = s__16247;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16247__$1);
if(temp__5735__auto__){
var s__16247__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16247__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16247__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16249 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16248 = (0);
while(true){
if((i__16248 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16248);
cljs.core.chunk_append(b__16249,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16250 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16250,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16250,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16250,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16245.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16245.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16245.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__16334 = (i__16248 + (1));
i__16248 = G__16334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16249),sablono$core$select_options16245_$_iter__16246(cljs.core.chunk_rest(s__16247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16249),null);
}
} else {
var x = cljs.core.first(s__16247__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16253 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16253,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16253,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16253,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16245.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16245.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16245.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options16245_$_iter__16246(cljs.core.rest(s__16247__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16245);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16256 = (function sablono$core$drop_down16256(var_args){
var G__16258 = arguments.length;
switch (G__16258) {
case 2:
return sablono.core.drop_down16256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16256.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down16256.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16256.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down16256.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down16256.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16256);
/**
 * Creates a text area element.
 */
sablono.core.text_area16259 = (function sablono$core$text_area16259(var_args){
var G__16261 = arguments.length;
switch (G__16261) {
case 1:
return sablono.core.text_area16259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area16259.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area16259.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area16259.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16259);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16262 = (function sablono$core$label16262(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16262);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16263 = (function sablono$core$submit_button16263(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16263);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16264 = (function sablono$core$reset_button16264(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16264);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16265 = (function sablono$core$form_to16265(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16337 = arguments.length;
var i__4737__auto___16338 = (0);
while(true){
if((i__4737__auto___16338 < len__4736__auto___16337)){
args__4742__auto__.push((arguments[i__4737__auto___16338]));

var G__16339 = (i__4737__auto___16338 + (1));
i__4737__auto___16338 = G__16339;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to16265.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to16265.cljs$core$IFn$_invoke$arity$variadic = (function (p__16269,body){
var vec__16270 = p__16269;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to16265.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to16265.cljs$lang$applyTo = (function (seq16266){
var G__16267 = cljs.core.first(seq16266);
var seq16266__$1 = cljs.core.next(seq16266);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16267,seq16266__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16265);

//# sourceMappingURL=sablono.core.js.map
