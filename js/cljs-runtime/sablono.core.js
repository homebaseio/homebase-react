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
var G__16265__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__15960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__15961 = cljs.core.seq(vec__15960);
var first__15962 = cljs.core.first(seq__15961);
var seq__15961__$1 = cljs.core.next(seq__15961);
var tag = first__15962;
var body = seq__15961__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16266__i = 0, G__16266__a = new Array(arguments.length -  0);
while (G__16266__i < G__16266__a.length) {G__16266__a[G__16266__i] = arguments[G__16266__i + 0]; ++G__16266__i;}
  args = new cljs.core.IndexedSeq(G__16266__a,0,null);
} 
return G__16265__delegate.call(this,args);};
G__16265.cljs$lang$maxFixedArity = 0;
G__16265.cljs$lang$applyTo = (function (arglist__16267){
var args = cljs.core.seq(arglist__16267);
return G__16265__delegate(args);
});
G__16265.cljs$core$IFn$_invoke$arity$variadic = G__16265__delegate;
return G__16265;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__15963(s__15964){
return (new cljs.core.LazySeq(null,(function (){
var s__15964__$1 = s__15964;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15964__$1);
if(temp__5735__auto__){
var s__15964__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15964__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15964__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15966 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15965 = (0);
while(true){
if((i__15965 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__15965);
cljs.core.chunk_append(b__15966,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16268 = (i__15965 + (1));
i__15965 = G__16268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15966),sablono$core$update_arglists_$_iter__15963(cljs.core.chunk_rest(s__15964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15966),null);
}
} else {
var args = cljs.core.first(s__15964__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15963(cljs.core.rest(s__15964__$2)));
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
var len__4736__auto___16273 = arguments.length;
var i__4737__auto___16274 = (0);
while(true){
if((i__4737__auto___16274 < len__4736__auto___16273)){
args__4742__auto__.push((arguments[i__4737__auto___16274]));

var G__16275 = (i__4737__auto___16274 + (1));
i__4737__auto___16274 = G__16275;
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

var G__16276 = (i__15975 + (1));
i__15975 = G__16276;
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq15967){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15967));
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
sablono.core.link_to15994 = (function sablono$core$link_to15994(var_args){
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

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to15994.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to15994.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to15994.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to15994.cljs$lang$applyTo = (function (seq15995){
var G__15996 = cljs.core.first(seq15995);
var seq15995__$1 = cljs.core.next(seq15995);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15996,seq15995__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to15994);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15997 = (function sablono$core$mail_to15997(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16280 = arguments.length;
var i__4737__auto___16281 = (0);
while(true){
if((i__4737__auto___16281 < len__4736__auto___16280)){
args__4742__auto__.push((arguments[i__4737__auto___16281]));

var G__16282 = (i__4737__auto___16281 + (1));
i__4737__auto___16281 = G__16282;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to15997.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to15997.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16000){
var vec__16001 = p__16000;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16001,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to15997.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to15997.cljs$lang$applyTo = (function (seq15998){
var G__15999 = cljs.core.first(seq15998);
var seq15998__$1 = cljs.core.next(seq15998);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15999,seq15998__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to15997);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16004 = (function sablono$core$unordered_list16004(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list16004_$_iter__16021(s__16022){
return (new cljs.core.LazySeq(null,(function (){
var s__16022__$1 = s__16022;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16022__$1);
if(temp__5735__auto__){
var s__16022__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16022__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16022__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16024 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16023 = (0);
while(true){
if((i__16023 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16023);
cljs.core.chunk_append(b__16024,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16286 = (i__16023 + (1));
i__16023 = G__16286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16024),sablono$core$unordered_list16004_$_iter__16021(cljs.core.chunk_rest(s__16022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16024),null);
}
} else {
var x = cljs.core.first(s__16022__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list16004_$_iter__16021(cljs.core.rest(s__16022__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16004);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16025 = (function sablono$core$ordered_list16025(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list16025_$_iter__16026(s__16027){
return (new cljs.core.LazySeq(null,(function (){
var s__16027__$1 = s__16027;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16027__$1);
if(temp__5735__auto__){
var s__16027__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16027__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16027__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16029 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16028 = (0);
while(true){
if((i__16028 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16028);
cljs.core.chunk_append(b__16029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16287 = (i__16028 + (1));
i__16028 = G__16287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16029),sablono$core$ordered_list16025_$_iter__16026(cljs.core.chunk_rest(s__16027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16029),null);
}
} else {
var x = cljs.core.first(s__16027__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list16025_$_iter__16026(cljs.core.rest(s__16027__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16025);
/**
 * Create an image element.
 */
sablono.core.image16030 = (function sablono$core$image16030(var_args){
var G__16032 = arguments.length;
switch (G__16032) {
case 1:
return sablono.core.image16030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image16030.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image16030.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image16030.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16030);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16074_SHARP_,p2__16075_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16074_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16075_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16076_SHARP_,p2__16077_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16076_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16077_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__16079 = arguments.length;
switch (G__16079) {
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
sablono.core.color_field16087 = (function sablono$core$color_field16087(var_args){
var G__16089 = arguments.length;
switch (G__16089) {
case 1:
return sablono.core.color_field16087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field16087.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15937__auto__);
}));

(sablono.core.color_field16087.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.color_field16087.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field16087);

/**
 * Creates a date input field.
 */
sablono.core.date_field16090 = (function sablono$core$date_field16090(var_args){
var G__16092 = arguments.length;
switch (G__16092) {
case 1:
return sablono.core.date_field16090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field16090.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15937__auto__);
}));

(sablono.core.date_field16090.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.date_field16090.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field16090);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16093 = (function sablono$core$datetime_field16093(var_args){
var G__16095 = arguments.length;
switch (G__16095) {
case 1:
return sablono.core.datetime_field16093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field16093.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15937__auto__);
}));

(sablono.core.datetime_field16093.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.datetime_field16093.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field16093);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16096 = (function sablono$core$datetime_local_field16096(var_args){
var G__16114 = arguments.length;
switch (G__16114) {
case 1:
return sablono.core.datetime_local_field16096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field16096.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15937__auto__);
}));

(sablono.core.datetime_local_field16096.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.datetime_local_field16096.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field16096);

/**
 * Creates a email input field.
 */
sablono.core.email_field16115 = (function sablono$core$email_field16115(var_args){
var G__16117 = arguments.length;
switch (G__16117) {
case 1:
return sablono.core.email_field16115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field16115.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15937__auto__);
}));

(sablono.core.email_field16115.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.email_field16115.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16115);

/**
 * Creates a file input field.
 */
sablono.core.file_field16118 = (function sablono$core$file_field16118(var_args){
var G__16120 = arguments.length;
switch (G__16120) {
case 1:
return sablono.core.file_field16118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field16118.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15937__auto__);
}));

(sablono.core.file_field16118.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.file_field16118.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16118);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16127 = (function sablono$core$hidden_field16127(var_args){
var G__16129 = arguments.length;
switch (G__16129) {
case 1:
return sablono.core.hidden_field16127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field16127.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15937__auto__);
}));

(sablono.core.hidden_field16127.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.hidden_field16127.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16127);

/**
 * Creates a month input field.
 */
sablono.core.month_field16130 = (function sablono$core$month_field16130(var_args){
var G__16132 = arguments.length;
switch (G__16132) {
case 1:
return sablono.core.month_field16130.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16130.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field16130.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15937__auto__);
}));

(sablono.core.month_field16130.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.month_field16130.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16130);

/**
 * Creates a number input field.
 */
sablono.core.number_field16155 = (function sablono$core$number_field16155(var_args){
var G__16157 = arguments.length;
switch (G__16157) {
case 1:
return sablono.core.number_field16155.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field16155.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15937__auto__);
}));

(sablono.core.number_field16155.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.number_field16155.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16155);

/**
 * Creates a password input field.
 */
sablono.core.password_field16158 = (function sablono$core$password_field16158(var_args){
var G__16160 = arguments.length;
switch (G__16160) {
case 1:
return sablono.core.password_field16158.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16158.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field16158.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15937__auto__);
}));

(sablono.core.password_field16158.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.password_field16158.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16158);

/**
 * Creates a range input field.
 */
sablono.core.range_field16161 = (function sablono$core$range_field16161(var_args){
var G__16163 = arguments.length;
switch (G__16163) {
case 1:
return sablono.core.range_field16161.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16161.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field16161.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15937__auto__);
}));

(sablono.core.range_field16161.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.range_field16161.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16161);

/**
 * Creates a search input field.
 */
sablono.core.search_field16164 = (function sablono$core$search_field16164(var_args){
var G__16195 = arguments.length;
switch (G__16195) {
case 1:
return sablono.core.search_field16164.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field16164.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15937__auto__);
}));

(sablono.core.search_field16164.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.search_field16164.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16164);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16196 = (function sablono$core$tel_field16196(var_args){
var G__16198 = arguments.length;
switch (G__16198) {
case 1:
return sablono.core.tel_field16196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field16196.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15937__auto__);
}));

(sablono.core.tel_field16196.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.tel_field16196.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16196);

/**
 * Creates a text input field.
 */
sablono.core.text_field16199 = (function sablono$core$text_field16199(var_args){
var G__16201 = arguments.length;
switch (G__16201) {
case 1:
return sablono.core.text_field16199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field16199.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15937__auto__);
}));

(sablono.core.text_field16199.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.text_field16199.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16199);

/**
 * Creates a time input field.
 */
sablono.core.time_field16202 = (function sablono$core$time_field16202(var_args){
var G__16208 = arguments.length;
switch (G__16208) {
case 1:
return sablono.core.time_field16202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field16202.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15937__auto__);
}));

(sablono.core.time_field16202.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.time_field16202.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16202);

/**
 * Creates a url input field.
 */
sablono.core.url_field16209 = (function sablono$core$url_field16209(var_args){
var G__16211 = arguments.length;
switch (G__16211) {
case 1:
return sablono.core.url_field16209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field16209.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15937__auto__);
}));

(sablono.core.url_field16209.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.url_field16209.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16209);

/**
 * Creates a week input field.
 */
sablono.core.week_field16212 = (function sablono$core$week_field16212(var_args){
var G__16214 = arguments.length;
switch (G__16214) {
case 1:
return sablono.core.week_field16212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field16212.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15937__auto__);
}));

(sablono.core.week_field16212.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.week_field16212.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16212);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16215 = (function sablono$core$check_box16215(var_args){
var G__16217 = arguments.length;
switch (G__16217) {
case 1:
return sablono.core.check_box16215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16215.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box16215.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box16215.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16215.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16215.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16215);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16220 = (function sablono$core$radio_button16220(var_args){
var G__16222 = arguments.length;
switch (G__16222) {
case 1:
return sablono.core.radio_button16220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16220.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button16220.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button16220.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16220.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16220.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16220);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16223 = (function sablono$core$select_options16223(coll){
var iter__4529__auto__ = (function sablono$core$select_options16223_$_iter__16224(s__16225){
return (new cljs.core.LazySeq(null,(function (){
var s__16225__$1 = s__16225;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16225__$1);
if(temp__5735__auto__){
var s__16225__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16225__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16225__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16227 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16226 = (0);
while(true){
if((i__16226 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16226);
cljs.core.chunk_append(b__16227,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16234 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16234,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16234,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16234,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16223.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16223.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16223.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__16320 = (i__16226 + (1));
i__16226 = G__16320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16227),sablono$core$select_options16223_$_iter__16224(cljs.core.chunk_rest(s__16225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16227),null);
}
} else {
var x = cljs.core.first(s__16225__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16237 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16237,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16237,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16237,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16223.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16223.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16223.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options16223_$_iter__16224(cljs.core.rest(s__16225__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16223);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16240 = (function sablono$core$drop_down16240(var_args){
var G__16242 = arguments.length;
switch (G__16242) {
case 2:
return sablono.core.drop_down16240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16240.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down16240.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16240.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down16240.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down16240.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16240);
/**
 * Creates a text area element.
 */
sablono.core.text_area16243 = (function sablono$core$text_area16243(var_args){
var G__16248 = arguments.length;
switch (G__16248) {
case 1:
return sablono.core.text_area16243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area16243.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area16243.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area16243.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16243);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16249 = (function sablono$core$label16249(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16249);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16250 = (function sablono$core$submit_button16250(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16250);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16251 = (function sablono$core$reset_button16251(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16251);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16252 = (function sablono$core$form_to16252(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16326 = arguments.length;
var i__4737__auto___16327 = (0);
while(true){
if((i__4737__auto___16327 < len__4736__auto___16326)){
args__4742__auto__.push((arguments[i__4737__auto___16327]));

var G__16328 = (i__4737__auto___16327 + (1));
i__4737__auto___16327 = G__16328;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to16252.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to16252.cljs$core$IFn$_invoke$arity$variadic = (function (p__16255,body){
var vec__16256 = p__16255;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16256,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16256,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to16252.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to16252.cljs$lang$applyTo = (function (seq16253){
var G__16254 = cljs.core.first(seq16253);
var seq16253__$1 = cljs.core.next(seq16253);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16254,seq16253__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16252);

//# sourceMappingURL=sablono.core.js.map
