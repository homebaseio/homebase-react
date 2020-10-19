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
var G__15640__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__15400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__15401 = cljs.core.seq(vec__15400);
var first__15402 = cljs.core.first(seq__15401);
var seq__15401__$1 = cljs.core.next(seq__15401);
var tag = first__15402;
var body = seq__15401__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__15640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15641__i = 0, G__15641__a = new Array(arguments.length -  0);
while (G__15641__i < G__15641__a.length) {G__15641__a[G__15641__i] = arguments[G__15641__i + 0]; ++G__15641__i;}
  args = new cljs.core.IndexedSeq(G__15641__a,0,null);
} 
return G__15640__delegate.call(this,args);};
G__15640.cljs$lang$maxFixedArity = 0;
G__15640.cljs$lang$applyTo = (function (arglist__15642){
var args = cljs.core.seq(arglist__15642);
return G__15640__delegate(args);
});
G__15640.cljs$core$IFn$_invoke$arity$variadic = G__15640__delegate;
return G__15640;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__15407(s__15408){
return (new cljs.core.LazySeq(null,(function (){
var s__15408__$1 = s__15408;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15408__$1);
if(temp__5735__auto__){
var s__15408__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15408__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15408__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15410 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15409 = (0);
while(true){
if((i__15409 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__15409);
cljs.core.chunk_append(b__15410,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__15643 = (i__15409 + (1));
i__15409 = G__15643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15410),sablono$core$update_arglists_$_iter__15407(cljs.core.chunk_rest(s__15408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15410),null);
}
} else {
var args = cljs.core.first(s__15408__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15407(cljs.core.rest(s__15408__$2)));
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
var len__4736__auto___15644 = arguments.length;
var i__4737__auto___15645 = (0);
while(true){
if((i__4737__auto___15645 < len__4736__auto___15644)){
args__4742__auto__.push((arguments[i__4737__auto___15645]));

var G__15646 = (i__4737__auto___15645 + (1));
i__4737__auto___15645 = G__15646;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__15421(s__15422){
return (new cljs.core.LazySeq(null,(function (){
var s__15422__$1 = s__15422;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15422__$1);
if(temp__5735__auto__){
var s__15422__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15422__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15422__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15424 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15423 = (0);
while(true){
if((i__15423 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__15423);
cljs.core.chunk_append(b__15424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__15647 = (i__15423 + (1));
i__15423 = G__15647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15424),sablono$core$iter__15421(cljs.core.chunk_rest(s__15422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15424),null);
}
} else {
var style = cljs.core.first(s__15422__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15421(cljs.core.rest(s__15422__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq15417){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15417));
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
sablono.core.link_to15432 = (function sablono$core$link_to15432(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15648 = arguments.length;
var i__4737__auto___15649 = (0);
while(true){
if((i__4737__auto___15649 < len__4736__auto___15648)){
args__4742__auto__.push((arguments[i__4737__auto___15649]));

var G__15650 = (i__4737__auto___15649 + (1));
i__4737__auto___15649 = G__15650;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to15432.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to15432.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to15432.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to15432.cljs$lang$applyTo = (function (seq15433){
var G__15434 = cljs.core.first(seq15433);
var seq15433__$1 = cljs.core.next(seq15433);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15434,seq15433__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to15432);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15435 = (function sablono$core$mail_to15435(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15651 = arguments.length;
var i__4737__auto___15652 = (0);
while(true){
if((i__4737__auto___15652 < len__4736__auto___15651)){
args__4742__auto__.push((arguments[i__4737__auto___15652]));

var G__15653 = (i__4737__auto___15652 + (1));
i__4737__auto___15652 = G__15653;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to15435.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to15435.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__15441){
var vec__15442 = p__15441;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15442,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to15435.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to15435.cljs$lang$applyTo = (function (seq15436){
var G__15437 = cljs.core.first(seq15436);
var seq15436__$1 = cljs.core.next(seq15436);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15437,seq15436__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to15435);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list15448 = (function sablono$core$unordered_list15448(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list15448_$_iter__15452(s__15453){
return (new cljs.core.LazySeq(null,(function (){
var s__15453__$1 = s__15453;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15453__$1);
if(temp__5735__auto__){
var s__15453__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15453__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15453__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15455 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15454 = (0);
while(true){
if((i__15454 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15454);
cljs.core.chunk_append(b__15455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15654 = (i__15454 + (1));
i__15454 = G__15654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15455),sablono$core$unordered_list15448_$_iter__15452(cljs.core.chunk_rest(s__15453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15455),null);
}
} else {
var x = cljs.core.first(s__15453__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list15448_$_iter__15452(cljs.core.rest(s__15453__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list15448);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15458 = (function sablono$core$ordered_list15458(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list15458_$_iter__15459(s__15460){
return (new cljs.core.LazySeq(null,(function (){
var s__15460__$1 = s__15460;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15460__$1);
if(temp__5735__auto__){
var s__15460__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15460__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15460__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15462 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15461 = (0);
while(true){
if((i__15461 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15461);
cljs.core.chunk_append(b__15462,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15655 = (i__15461 + (1));
i__15461 = G__15655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15462),sablono$core$ordered_list15458_$_iter__15459(cljs.core.chunk_rest(s__15460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15462),null);
}
} else {
var x = cljs.core.first(s__15460__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list15458_$_iter__15459(cljs.core.rest(s__15460__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list15458);
/**
 * Create an image element.
 */
sablono.core.image15463 = (function sablono$core$image15463(var_args){
var G__15465 = arguments.length;
switch (G__15465) {
case 1:
return sablono.core.image15463.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15463.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image15463.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image15463.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image15463.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image15463);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15467_SHARP_,p2__15468_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15467_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15468_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15472_SHARP_,p2__15473_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15472_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15473_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__15476 = arguments.length;
switch (G__15476) {
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
sablono.core.color_field15477 = (function sablono$core$color_field15477(var_args){
var G__15479 = arguments.length;
switch (G__15479) {
case 1:
return sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15390__auto__);
}));

(sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.color_field15477.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field15477);

/**
 * Creates a date input field.
 */
sablono.core.date_field15480 = (function sablono$core$date_field15480(var_args){
var G__15486 = arguments.length;
switch (G__15486) {
case 1:
return sablono.core.date_field15480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field15480.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15390__auto__);
}));

(sablono.core.date_field15480.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.date_field15480.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field15480);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15490 = (function sablono$core$datetime_field15490(var_args){
var G__15494 = arguments.length;
switch (G__15494) {
case 1:
return sablono.core.datetime_field15490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field15490.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15390__auto__);
}));

(sablono.core.datetime_field15490.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.datetime_field15490.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field15490);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15496 = (function sablono$core$datetime_local_field15496(var_args){
var G__15498 = arguments.length;
switch (G__15498) {
case 1:
return sablono.core.datetime_local_field15496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field15496.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15390__auto__);
}));

(sablono.core.datetime_local_field15496.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.datetime_local_field15496.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field15496);

/**
 * Creates a email input field.
 */
sablono.core.email_field15504 = (function sablono$core$email_field15504(var_args){
var G__15506 = arguments.length;
switch (G__15506) {
case 1:
return sablono.core.email_field15504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field15504.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15390__auto__);
}));

(sablono.core.email_field15504.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.email_field15504.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field15504);

/**
 * Creates a file input field.
 */
sablono.core.file_field15507 = (function sablono$core$file_field15507(var_args){
var G__15509 = arguments.length;
switch (G__15509) {
case 1:
return sablono.core.file_field15507.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field15507.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field15507.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15390__auto__);
}));

(sablono.core.file_field15507.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.file_field15507.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field15507);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field15510 = (function sablono$core$hidden_field15510(var_args){
var G__15512 = arguments.length;
switch (G__15512) {
case 1:
return sablono.core.hidden_field15510.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field15510.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field15510.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15390__auto__);
}));

(sablono.core.hidden_field15510.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.hidden_field15510.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field15510);

/**
 * Creates a month input field.
 */
sablono.core.month_field15513 = (function sablono$core$month_field15513(var_args){
var G__15518 = arguments.length;
switch (G__15518) {
case 1:
return sablono.core.month_field15513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field15513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field15513.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15390__auto__);
}));

(sablono.core.month_field15513.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.month_field15513.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field15513);

/**
 * Creates a number input field.
 */
sablono.core.number_field15520 = (function sablono$core$number_field15520(var_args){
var G__15522 = arguments.length;
switch (G__15522) {
case 1:
return sablono.core.number_field15520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field15520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field15520.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15390__auto__);
}));

(sablono.core.number_field15520.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.number_field15520.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field15520);

/**
 * Creates a password input field.
 */
sablono.core.password_field15523 = (function sablono$core$password_field15523(var_args){
var G__15525 = arguments.length;
switch (G__15525) {
case 1:
return sablono.core.password_field15523.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field15523.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field15523.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15390__auto__);
}));

(sablono.core.password_field15523.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.password_field15523.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field15523);

/**
 * Creates a range input field.
 */
sablono.core.range_field15526 = (function sablono$core$range_field15526(var_args){
var G__15528 = arguments.length;
switch (G__15528) {
case 1:
return sablono.core.range_field15526.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15526.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field15526.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15390__auto__);
}));

(sablono.core.range_field15526.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.range_field15526.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field15526);

/**
 * Creates a search input field.
 */
sablono.core.search_field15530 = (function sablono$core$search_field15530(var_args){
var G__15536 = arguments.length;
switch (G__15536) {
case 1:
return sablono.core.search_field15530.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15530.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field15530.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15390__auto__);
}));

(sablono.core.search_field15530.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.search_field15530.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field15530);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15546 = (function sablono$core$tel_field15546(var_args){
var G__15550 = arguments.length;
switch (G__15550) {
case 1:
return sablono.core.tel_field15546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field15546.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15390__auto__);
}));

(sablono.core.tel_field15546.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.tel_field15546.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field15546);

/**
 * Creates a text input field.
 */
sablono.core.text_field15558 = (function sablono$core$text_field15558(var_args){
var G__15560 = arguments.length;
switch (G__15560) {
case 1:
return sablono.core.text_field15558.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15558.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field15558.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15390__auto__);
}));

(sablono.core.text_field15558.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.text_field15558.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field15558);

/**
 * Creates a time input field.
 */
sablono.core.time_field15561 = (function sablono$core$time_field15561(var_args){
var G__15563 = arguments.length;
switch (G__15563) {
case 1:
return sablono.core.time_field15561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field15561.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15390__auto__);
}));

(sablono.core.time_field15561.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.time_field15561.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field15561);

/**
 * Creates a url input field.
 */
sablono.core.url_field15564 = (function sablono$core$url_field15564(var_args){
var G__15566 = arguments.length;
switch (G__15566) {
case 1:
return sablono.core.url_field15564.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15564.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field15564.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15390__auto__);
}));

(sablono.core.url_field15564.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.url_field15564.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field15564);

/**
 * Creates a week input field.
 */
sablono.core.week_field15567 = (function sablono$core$week_field15567(var_args){
var G__15569 = arguments.length;
switch (G__15569) {
case 1:
return sablono.core.week_field15567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field15567.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15390__auto__);
}));

(sablono.core.week_field15567.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.week_field15567.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field15567);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15574 = (function sablono$core$check_box15574(var_args){
var G__15578 = arguments.length;
switch (G__15578) {
case 1:
return sablono.core.check_box15574.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15574.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15574.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box15574.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box15574.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box15574.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box15574.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box15574);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15587 = (function sablono$core$radio_button15587(var_args){
var G__15589 = arguments.length;
switch (G__15589) {
case 1:
return sablono.core.radio_button15587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15587.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button15587.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button15587.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button15587.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button15587.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button15587);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15592 = (function sablono$core$select_options15592(coll){
var iter__4529__auto__ = (function sablono$core$select_options15592_$_iter__15593(s__15594){
return (new cljs.core.LazySeq(null,(function (){
var s__15594__$1 = s__15594;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15594__$1);
if(temp__5735__auto__){
var s__15594__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15594__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15594__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15596 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15595 = (0);
while(true){
if((i__15595 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15595);
cljs.core.chunk_append(b__15596,((cljs.core.sequential_QMARK_(x))?(function (){var vec__15597 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options15592.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options15592.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options15592.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__15727 = (i__15595 + (1));
i__15595 = G__15727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15596),sablono$core$select_options15592_$_iter__15593(cljs.core.chunk_rest(s__15594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15596),null);
}
} else {
var x = cljs.core.first(s__15594__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__15617 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15617,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15617,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15617,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options15592.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options15592.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options15592.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options15592_$_iter__15593(cljs.core.rest(s__15594__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options15592);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15622 = (function sablono$core$drop_down15622(var_args){
var G__15624 = arguments.length;
switch (G__15624) {
case 2:
return sablono.core.drop_down15622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15622.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down15622.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15622.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down15622.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down15622.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down15622);
/**
 * Creates a text area element.
 */
sablono.core.text_area15625 = (function sablono$core$text_area15625(var_args){
var G__15627 = arguments.length;
switch (G__15627) {
case 1:
return sablono.core.text_area15625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area15625.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area15625.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area15625.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area15625);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15628 = (function sablono$core$label15628(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label15628);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15629 = (function sablono$core$submit_button15629(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button15629);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15630 = (function sablono$core$reset_button15630(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button15630);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15632 = (function sablono$core$form_to15632(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15730 = arguments.length;
var i__4737__auto___15735 = (0);
while(true){
if((i__4737__auto___15735 < len__4736__auto___15730)){
args__4742__auto__.push((arguments[i__4737__auto___15735]));

var G__15736 = (i__4737__auto___15735 + (1));
i__4737__auto___15735 = G__15736;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to15632.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to15632.cljs$core$IFn$_invoke$arity$variadic = (function (p__15636,body){
var vec__15637 = p__15636;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15637,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15637,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to15632.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to15632.cljs$lang$applyTo = (function (seq15633){
var G__15634 = cljs.core.first(seq15633);
var seq15633__$1 = cljs.core.next(seq15633);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15634,seq15633__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to15632);

//# sourceMappingURL=sablono.core.js.map
