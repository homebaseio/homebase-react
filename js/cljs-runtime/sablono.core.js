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
var G__16324__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__16135 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__16136 = cljs.core.seq(vec__16135);
var first__16137 = cljs.core.first(seq__16136);
var seq__16136__$1 = cljs.core.next(seq__16136);
var tag = first__16137;
var body = seq__16136__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16325__i = 0, G__16325__a = new Array(arguments.length -  0);
while (G__16325__i < G__16325__a.length) {G__16325__a[G__16325__i] = arguments[G__16325__i + 0]; ++G__16325__i;}
  args = new cljs.core.IndexedSeq(G__16325__a,0,null);
} 
return G__16324__delegate.call(this,args);};
G__16324.cljs$lang$maxFixedArity = 0;
G__16324.cljs$lang$applyTo = (function (arglist__16326){
var args = cljs.core.seq(arglist__16326);
return G__16324__delegate(args);
});
G__16324.cljs$core$IFn$_invoke$arity$variadic = G__16324__delegate;
return G__16324;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__16138(s__16139){
return (new cljs.core.LazySeq(null,(function (){
var s__16139__$1 = s__16139;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16139__$1);
if(temp__5735__auto__){
var s__16139__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16139__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16139__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16141 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16140 = (0);
while(true){
if((i__16140 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__16140);
cljs.core.chunk_append(b__16141,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16327 = (i__16140 + (1));
i__16140 = G__16327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16141),sablono$core$update_arglists_$_iter__16138(cljs.core.chunk_rest(s__16139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16141),null);
}
} else {
var args = cljs.core.first(s__16139__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__16138(cljs.core.rest(s__16139__$2)));
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
var len__4736__auto___16328 = arguments.length;
var i__4737__auto___16329 = (0);
while(true){
if((i__4737__auto___16329 < len__4736__auto___16328)){
args__4742__auto__.push((arguments[i__4737__auto___16329]));

var G__16330 = (i__4737__auto___16329 + (1));
i__4737__auto___16329 = G__16330;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__16147(s__16148){
return (new cljs.core.LazySeq(null,(function (){
var s__16148__$1 = s__16148;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16148__$1);
if(temp__5735__auto__){
var s__16148__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16148__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16148__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16150 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16149 = (0);
while(true){
if((i__16149 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__16149);
cljs.core.chunk_append(b__16150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16335 = (i__16149 + (1));
i__16149 = G__16335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16150),sablono$core$iter__16147(cljs.core.chunk_rest(s__16148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16150),null);
}
} else {
var style = cljs.core.first(s__16148__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__16147(cljs.core.rest(s__16148__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq16142){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16142));
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
sablono.core.link_to16153 = (function sablono$core$link_to16153(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16336 = arguments.length;
var i__4737__auto___16337 = (0);
while(true){
if((i__4737__auto___16337 < len__4736__auto___16336)){
args__4742__auto__.push((arguments[i__4737__auto___16337]));

var G__16338 = (i__4737__auto___16337 + (1));
i__4737__auto___16337 = G__16338;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to16153.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to16153.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to16153.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to16153.cljs$lang$applyTo = (function (seq16154){
var G__16155 = cljs.core.first(seq16154);
var seq16154__$1 = cljs.core.next(seq16154);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16155,seq16154__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16153);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16156 = (function sablono$core$mail_to16156(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16343 = arguments.length;
var i__4737__auto___16344 = (0);
while(true){
if((i__4737__auto___16344 < len__4736__auto___16343)){
args__4742__auto__.push((arguments[i__4737__auto___16344]));

var G__16345 = (i__4737__auto___16344 + (1));
i__4737__auto___16344 = G__16345;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to16156.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to16156.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16159){
var vec__16161 = p__16159;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16161,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to16156.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to16156.cljs$lang$applyTo = (function (seq16157){
var G__16158 = cljs.core.first(seq16157);
var seq16157__$1 = cljs.core.next(seq16157);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16158,seq16157__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16156);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16164 = (function sablono$core$unordered_list16164(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list16164_$_iter__16165(s__16166){
return (new cljs.core.LazySeq(null,(function (){
var s__16166__$1 = s__16166;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16166__$1);
if(temp__5735__auto__){
var s__16166__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16166__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16166__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16168 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16167 = (0);
while(true){
if((i__16167 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16167);
cljs.core.chunk_append(b__16168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16351 = (i__16167 + (1));
i__16167 = G__16351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16168),sablono$core$unordered_list16164_$_iter__16165(cljs.core.chunk_rest(s__16166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16168),null);
}
} else {
var x = cljs.core.first(s__16166__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list16164_$_iter__16165(cljs.core.rest(s__16166__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16164);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16170 = (function sablono$core$ordered_list16170(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list16170_$_iter__16172(s__16173){
return (new cljs.core.LazySeq(null,(function (){
var s__16173__$1 = s__16173;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16173__$1);
if(temp__5735__auto__){
var s__16173__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16173__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16173__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16175 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16174 = (0);
while(true){
if((i__16174 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16174);
cljs.core.chunk_append(b__16175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16352 = (i__16174 + (1));
i__16174 = G__16352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16175),sablono$core$ordered_list16170_$_iter__16172(cljs.core.chunk_rest(s__16173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16175),null);
}
} else {
var x = cljs.core.first(s__16173__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list16170_$_iter__16172(cljs.core.rest(s__16173__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16170);
/**
 * Create an image element.
 */
sablono.core.image16176 = (function sablono$core$image16176(var_args){
var G__16178 = arguments.length;
switch (G__16178) {
case 1:
return sablono.core.image16176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image16176.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image16176.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image16176.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16176);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16179_SHARP_,p2__16180_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16179_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16180_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16181_SHARP_,p2__16182_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16181_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16182_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__16184 = arguments.length;
switch (G__16184) {
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
sablono.core.color_field16185 = (function sablono$core$color_field16185(var_args){
var G__16193 = arguments.length;
switch (G__16193) {
case 1:
return sablono.core.color_field16185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field16185.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__16118__auto__);
}));

(sablono.core.color_field16185.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.color_field16185.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field16185);

/**
 * Creates a date input field.
 */
sablono.core.date_field16198 = (function sablono$core$date_field16198(var_args){
var G__16200 = arguments.length;
switch (G__16200) {
case 1:
return sablono.core.date_field16198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field16198.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__16118__auto__);
}));

(sablono.core.date_field16198.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.date_field16198.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field16198);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16208 = (function sablono$core$datetime_field16208(var_args){
var G__16213 = arguments.length;
switch (G__16213) {
case 1:
return sablono.core.datetime_field16208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field16208.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__16118__auto__);
}));

(sablono.core.datetime_field16208.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.datetime_field16208.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field16208);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16214 = (function sablono$core$datetime_local_field16214(var_args){
var G__16216 = arguments.length;
switch (G__16216) {
case 1:
return sablono.core.datetime_local_field16214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field16214.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__16118__auto__);
}));

(sablono.core.datetime_local_field16214.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.datetime_local_field16214.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field16214);

/**
 * Creates a email input field.
 */
sablono.core.email_field16217 = (function sablono$core$email_field16217(var_args){
var G__16219 = arguments.length;
switch (G__16219) {
case 1:
return sablono.core.email_field16217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field16217.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__16118__auto__);
}));

(sablono.core.email_field16217.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.email_field16217.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16217);

/**
 * Creates a file input field.
 */
sablono.core.file_field16220 = (function sablono$core$file_field16220(var_args){
var G__16222 = arguments.length;
switch (G__16222) {
case 1:
return sablono.core.file_field16220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field16220.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__16118__auto__);
}));

(sablono.core.file_field16220.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.file_field16220.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16220);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16223 = (function sablono$core$hidden_field16223(var_args){
var G__16225 = arguments.length;
switch (G__16225) {
case 1:
return sablono.core.hidden_field16223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field16223.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__16118__auto__);
}));

(sablono.core.hidden_field16223.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.hidden_field16223.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16223);

/**
 * Creates a month input field.
 */
sablono.core.month_field16226 = (function sablono$core$month_field16226(var_args){
var G__16228 = arguments.length;
switch (G__16228) {
case 1:
return sablono.core.month_field16226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field16226.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__16118__auto__);
}));

(sablono.core.month_field16226.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.month_field16226.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16226);

/**
 * Creates a number input field.
 */
sablono.core.number_field16229 = (function sablono$core$number_field16229(var_args){
var G__16231 = arguments.length;
switch (G__16231) {
case 1:
return sablono.core.number_field16229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field16229.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__16118__auto__);
}));

(sablono.core.number_field16229.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.number_field16229.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16229);

/**
 * Creates a password input field.
 */
sablono.core.password_field16232 = (function sablono$core$password_field16232(var_args){
var G__16234 = arguments.length;
switch (G__16234) {
case 1:
return sablono.core.password_field16232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field16232.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__16118__auto__);
}));

(sablono.core.password_field16232.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.password_field16232.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16232);

/**
 * Creates a range input field.
 */
sablono.core.range_field16235 = (function sablono$core$range_field16235(var_args){
var G__16237 = arguments.length;
switch (G__16237) {
case 1:
return sablono.core.range_field16235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field16235.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__16118__auto__);
}));

(sablono.core.range_field16235.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.range_field16235.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16235);

/**
 * Creates a search input field.
 */
sablono.core.search_field16248 = (function sablono$core$search_field16248(var_args){
var G__16253 = arguments.length;
switch (G__16253) {
case 1:
return sablono.core.search_field16248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field16248.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__16118__auto__);
}));

(sablono.core.search_field16248.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.search_field16248.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16248);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16254 = (function sablono$core$tel_field16254(var_args){
var G__16256 = arguments.length;
switch (G__16256) {
case 1:
return sablono.core.tel_field16254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field16254.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__16118__auto__);
}));

(sablono.core.tel_field16254.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.tel_field16254.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16254);

/**
 * Creates a text input field.
 */
sablono.core.text_field16257 = (function sablono$core$text_field16257(var_args){
var G__16259 = arguments.length;
switch (G__16259) {
case 1:
return sablono.core.text_field16257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field16257.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__16118__auto__);
}));

(sablono.core.text_field16257.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.text_field16257.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16257);

/**
 * Creates a time input field.
 */
sablono.core.time_field16260 = (function sablono$core$time_field16260(var_args){
var G__16262 = arguments.length;
switch (G__16262) {
case 1:
return sablono.core.time_field16260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field16260.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__16118__auto__);
}));

(sablono.core.time_field16260.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.time_field16260.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16260);

/**
 * Creates a url input field.
 */
sablono.core.url_field16263 = (function sablono$core$url_field16263(var_args){
var G__16265 = arguments.length;
switch (G__16265) {
case 1:
return sablono.core.url_field16263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field16263.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__16118__auto__);
}));

(sablono.core.url_field16263.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.url_field16263.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16263);

/**
 * Creates a week input field.
 */
sablono.core.week_field16266 = (function sablono$core$week_field16266(var_args){
var G__16268 = arguments.length;
switch (G__16268) {
case 1:
return sablono.core.week_field16266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field16266.cljs$core$IFn$_invoke$arity$1 = (function (name__16118__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__16118__auto__);
}));

(sablono.core.week_field16266.cljs$core$IFn$_invoke$arity$2 = (function (name__16118__auto__,value__16119__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__16118__auto__,value__16119__auto__);
}));

(sablono.core.week_field16266.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16266);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16269 = (function sablono$core$check_box16269(var_args){
var G__16271 = arguments.length;
switch (G__16271) {
case 1:
return sablono.core.check_box16269.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16269.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16269.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box16269.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box16269.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16269.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16269.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16269);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16272 = (function sablono$core$radio_button16272(var_args){
var G__16274 = arguments.length;
switch (G__16274) {
case 1:
return sablono.core.radio_button16272.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16272.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16272.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button16272.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button16272.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16272.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16272.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16272);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16275 = (function sablono$core$select_options16275(coll){
var iter__4529__auto__ = (function sablono$core$select_options16275_$_iter__16276(s__16277){
return (new cljs.core.LazySeq(null,(function (){
var s__16277__$1 = s__16277;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16277__$1);
if(temp__5735__auto__){
var s__16277__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16277__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16277__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16279 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16278 = (0);
while(true){
if((i__16278 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16278);
cljs.core.chunk_append(b__16279,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16280 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16275.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16275.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16275.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__16400 = (i__16278 + (1));
i__16278 = G__16400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16279),sablono$core$select_options16275_$_iter__16276(cljs.core.chunk_rest(s__16277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16279),null);
}
} else {
var x = cljs.core.first(s__16277__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16283 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16283,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16283,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16283,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16275.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16275.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16275.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options16275_$_iter__16276(cljs.core.rest(s__16277__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16275);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16286 = (function sablono$core$drop_down16286(var_args){
var G__16288 = arguments.length;
switch (G__16288) {
case 2:
return sablono.core.drop_down16286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16286.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down16286.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16286.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down16286.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down16286.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16286);
/**
 * Creates a text area element.
 */
sablono.core.text_area16298 = (function sablono$core$text_area16298(var_args){
var G__16304 = arguments.length;
switch (G__16304) {
case 1:
return sablono.core.text_area16298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area16298.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area16298.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area16298.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16298);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16305 = (function sablono$core$label16305(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16305);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16306 = (function sablono$core$submit_button16306(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16306);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16312 = (function sablono$core$reset_button16312(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16312);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16317 = (function sablono$core$form_to16317(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16404 = arguments.length;
var i__4737__auto___16405 = (0);
while(true){
if((i__4737__auto___16405 < len__4736__auto___16404)){
args__4742__auto__.push((arguments[i__4737__auto___16405]));

var G__16406 = (i__4737__auto___16405 + (1));
i__4737__auto___16405 = G__16406;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to16317.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to16317.cljs$core$IFn$_invoke$arity$variadic = (function (p__16320,body){
var vec__16321 = p__16320;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16321,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16321,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to16317.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to16317.cljs$lang$applyTo = (function (seq16318){
var G__16319 = cljs.core.first(seq16318);
var seq16318__$1 = cljs.core.next(seq16318);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16319,seq16318__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16317);

//# sourceMappingURL=sablono.core.js.map
