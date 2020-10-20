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
var G__15717__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__15403 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__15404 = cljs.core.seq(vec__15403);
var first__15405 = cljs.core.first(seq__15404);
var seq__15404__$1 = cljs.core.next(seq__15404);
var tag = first__15405;
var body = seq__15404__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__15717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15719__i = 0, G__15719__a = new Array(arguments.length -  0);
while (G__15719__i < G__15719__a.length) {G__15719__a[G__15719__i] = arguments[G__15719__i + 0]; ++G__15719__i;}
  args = new cljs.core.IndexedSeq(G__15719__a,0,null);
} 
return G__15717__delegate.call(this,args);};
G__15717.cljs$lang$maxFixedArity = 0;
G__15717.cljs$lang$applyTo = (function (arglist__15720){
var args = cljs.core.seq(arglist__15720);
return G__15717__delegate(args);
});
G__15717.cljs$core$IFn$_invoke$arity$variadic = G__15717__delegate;
return G__15717;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__15410(s__15411){
return (new cljs.core.LazySeq(null,(function (){
var s__15411__$1 = s__15411;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15411__$1);
if(temp__5735__auto__){
var s__15411__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15411__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15411__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15413 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15412 = (0);
while(true){
if((i__15412 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__15412);
cljs.core.chunk_append(b__15413,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__15728 = (i__15412 + (1));
i__15412 = G__15728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15413),sablono$core$update_arglists_$_iter__15410(cljs.core.chunk_rest(s__15411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15413),null);
}
} else {
var args = cljs.core.first(s__15411__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15410(cljs.core.rest(s__15411__$2)));
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
var len__4736__auto___15729 = arguments.length;
var i__4737__auto___15730 = (0);
while(true){
if((i__4737__auto___15730 < len__4736__auto___15729)){
args__4742__auto__.push((arguments[i__4737__auto___15730]));

var G__15731 = (i__4737__auto___15730 + (1));
i__4737__auto___15730 = G__15731;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__15426(s__15427){
return (new cljs.core.LazySeq(null,(function (){
var s__15427__$1 = s__15427;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15427__$1);
if(temp__5735__auto__){
var s__15427__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15427__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15427__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15429 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15428 = (0);
while(true){
if((i__15428 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__15428);
cljs.core.chunk_append(b__15429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__15732 = (i__15428 + (1));
i__15428 = G__15732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15429),sablono$core$iter__15426(cljs.core.chunk_rest(s__15427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15429),null);
}
} else {
var style = cljs.core.first(s__15427__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15426(cljs.core.rest(s__15427__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq15422){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15422));
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
sablono.core.link_to15430 = (function sablono$core$link_to15430(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15733 = arguments.length;
var i__4737__auto___15734 = (0);
while(true){
if((i__4737__auto___15734 < len__4736__auto___15733)){
args__4742__auto__.push((arguments[i__4737__auto___15734]));

var G__15735 = (i__4737__auto___15734 + (1));
i__4737__auto___15734 = G__15735;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to15430.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to15430.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to15430.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to15430.cljs$lang$applyTo = (function (seq15433){
var G__15434 = cljs.core.first(seq15433);
var seq15433__$1 = cljs.core.next(seq15433);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15434,seq15433__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to15430);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15441 = (function sablono$core$mail_to15441(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15742 = arguments.length;
var i__4737__auto___15743 = (0);
while(true){
if((i__4737__auto___15743 < len__4736__auto___15742)){
args__4742__auto__.push((arguments[i__4737__auto___15743]));

var G__15744 = (i__4737__auto___15743 + (1));
i__4737__auto___15743 = G__15744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to15441.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to15441.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__15449){
var vec__15450 = p__15449;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to15441.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to15441.cljs$lang$applyTo = (function (seq15443){
var G__15444 = cljs.core.first(seq15443);
var seq15443__$1 = cljs.core.next(seq15443);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15444,seq15443__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to15441);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list15454 = (function sablono$core$unordered_list15454(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list15454_$_iter__15455(s__15456){
return (new cljs.core.LazySeq(null,(function (){
var s__15456__$1 = s__15456;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15456__$1);
if(temp__5735__auto__){
var s__15456__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15456__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15456__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15458 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15457 = (0);
while(true){
if((i__15457 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15457);
cljs.core.chunk_append(b__15458,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15745 = (i__15457 + (1));
i__15457 = G__15745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15458),sablono$core$unordered_list15454_$_iter__15455(cljs.core.chunk_rest(s__15456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15458),null);
}
} else {
var x = cljs.core.first(s__15456__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list15454_$_iter__15455(cljs.core.rest(s__15456__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list15454);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15459 = (function sablono$core$ordered_list15459(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list15459_$_iter__15460(s__15461){
return (new cljs.core.LazySeq(null,(function (){
var s__15461__$1 = s__15461;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15461__$1);
if(temp__5735__auto__){
var s__15461__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15461__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15461__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15463 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15462 = (0);
while(true){
if((i__15462 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15462);
cljs.core.chunk_append(b__15463,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15747 = (i__15462 + (1));
i__15462 = G__15747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15463),sablono$core$ordered_list15459_$_iter__15460(cljs.core.chunk_rest(s__15461__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15463),null);
}
} else {
var x = cljs.core.first(s__15461__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list15459_$_iter__15460(cljs.core.rest(s__15461__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list15459);
/**
 * Create an image element.
 */
sablono.core.image15464 = (function sablono$core$image15464(var_args){
var G__15466 = arguments.length;
switch (G__15466) {
case 1:
return sablono.core.image15464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image15464.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image15464.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image15464.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image15464);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15471_SHARP_,p2__15472_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15471_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15472_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15477_SHARP_,p2__15478_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15477_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15478_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__15485 = arguments.length;
switch (G__15485) {
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
sablono.core.color_field15487 = (function sablono$core$color_field15487(var_args){
var G__15489 = arguments.length;
switch (G__15489) {
case 1:
return sablono.core.color_field15487.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field15487.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15390__auto__);
}));

(sablono.core.color_field15487.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.color_field15487.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field15487);

/**
 * Creates a date input field.
 */
sablono.core.date_field15490 = (function sablono$core$date_field15490(var_args){
var G__15492 = arguments.length;
switch (G__15492) {
case 1:
return sablono.core.date_field15490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field15490.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15390__auto__);
}));

(sablono.core.date_field15490.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.date_field15490.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field15490);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15493 = (function sablono$core$datetime_field15493(var_args){
var G__15495 = arguments.length;
switch (G__15495) {
case 1:
return sablono.core.datetime_field15493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field15493.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15390__auto__);
}));

(sablono.core.datetime_field15493.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.datetime_field15493.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field15493);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15500 = (function sablono$core$datetime_local_field15500(var_args){
var G__15503 = arguments.length;
switch (G__15503) {
case 1:
return sablono.core.datetime_local_field15500.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field15500.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15390__auto__);
}));

(sablono.core.datetime_local_field15500.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.datetime_local_field15500.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field15500);

/**
 * Creates a email input field.
 */
sablono.core.email_field15508 = (function sablono$core$email_field15508(var_args){
var G__15511 = arguments.length;
switch (G__15511) {
case 1:
return sablono.core.email_field15508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field15508.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15390__auto__);
}));

(sablono.core.email_field15508.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.email_field15508.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field15508);

/**
 * Creates a file input field.
 */
sablono.core.file_field15524 = (function sablono$core$file_field15524(var_args){
var G__15527 = arguments.length;
switch (G__15527) {
case 1:
return sablono.core.file_field15524.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field15524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field15524.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15390__auto__);
}));

(sablono.core.file_field15524.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.file_field15524.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field15524);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field15536 = (function sablono$core$hidden_field15536(var_args){
var G__15539 = arguments.length;
switch (G__15539) {
case 1:
return sablono.core.hidden_field15536.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field15536.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field15536.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15390__auto__);
}));

(sablono.core.hidden_field15536.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.hidden_field15536.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field15536);

/**
 * Creates a month input field.
 */
sablono.core.month_field15544 = (function sablono$core$month_field15544(var_args){
var G__15546 = arguments.length;
switch (G__15546) {
case 1:
return sablono.core.month_field15544.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field15544.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field15544.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15390__auto__);
}));

(sablono.core.month_field15544.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.month_field15544.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field15544);

/**
 * Creates a number input field.
 */
sablono.core.number_field15558 = (function sablono$core$number_field15558(var_args){
var G__15560 = arguments.length;
switch (G__15560) {
case 1:
return sablono.core.number_field15558.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field15558.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field15558.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15390__auto__);
}));

(sablono.core.number_field15558.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.number_field15558.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field15558);

/**
 * Creates a password input field.
 */
sablono.core.password_field15561 = (function sablono$core$password_field15561(var_args){
var G__15563 = arguments.length;
switch (G__15563) {
case 1:
return sablono.core.password_field15561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field15561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field15561.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15390__auto__);
}));

(sablono.core.password_field15561.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.password_field15561.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field15561);

/**
 * Creates a range input field.
 */
sablono.core.range_field15564 = (function sablono$core$range_field15564(var_args){
var G__15587 = arguments.length;
switch (G__15587) {
case 1:
return sablono.core.range_field15564.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15564.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field15564.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15390__auto__);
}));

(sablono.core.range_field15564.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.range_field15564.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field15564);

/**
 * Creates a search input field.
 */
sablono.core.search_field15588 = (function sablono$core$search_field15588(var_args){
var G__15590 = arguments.length;
switch (G__15590) {
case 1:
return sablono.core.search_field15588.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15588.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field15588.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15390__auto__);
}));

(sablono.core.search_field15588.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.search_field15588.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field15588);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15591 = (function sablono$core$tel_field15591(var_args){
var G__15593 = arguments.length;
switch (G__15593) {
case 1:
return sablono.core.tel_field15591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field15591.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15390__auto__);
}));

(sablono.core.tel_field15591.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.tel_field15591.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field15591);

/**
 * Creates a text input field.
 */
sablono.core.text_field15594 = (function sablono$core$text_field15594(var_args){
var G__15596 = arguments.length;
switch (G__15596) {
case 1:
return sablono.core.text_field15594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field15594.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15390__auto__);
}));

(sablono.core.text_field15594.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.text_field15594.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field15594);

/**
 * Creates a time input field.
 */
sablono.core.time_field15598 = (function sablono$core$time_field15598(var_args){
var G__15600 = arguments.length;
switch (G__15600) {
case 1:
return sablono.core.time_field15598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field15598.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15390__auto__);
}));

(sablono.core.time_field15598.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.time_field15598.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field15598);

/**
 * Creates a url input field.
 */
sablono.core.url_field15601 = (function sablono$core$url_field15601(var_args){
var G__15603 = arguments.length;
switch (G__15603) {
case 1:
return sablono.core.url_field15601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field15601.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15390__auto__);
}));

(sablono.core.url_field15601.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.url_field15601.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field15601);

/**
 * Creates a week input field.
 */
sablono.core.week_field15604 = (function sablono$core$week_field15604(var_args){
var G__15606 = arguments.length;
switch (G__15606) {
case 1:
return sablono.core.week_field15604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field15604.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15390__auto__);
}));

(sablono.core.week_field15604.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.week_field15604.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field15604);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15607 = (function sablono$core$check_box15607(var_args){
var G__15609 = arguments.length;
switch (G__15609) {
case 1:
return sablono.core.check_box15607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15607.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box15607.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box15607.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box15607.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box15607.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box15607);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15638 = (function sablono$core$radio_button15638(var_args){
var G__15640 = arguments.length;
switch (G__15640) {
case 1:
return sablono.core.radio_button15638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15638.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button15638.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button15638.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button15638.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button15638.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button15638);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15657 = (function sablono$core$select_options15657(coll){
var iter__4529__auto__ = (function sablono$core$select_options15657_$_iter__15658(s__15659){
return (new cljs.core.LazySeq(null,(function (){
var s__15659__$1 = s__15659;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15659__$1);
if(temp__5735__auto__){
var s__15659__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15659__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15659__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15661 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15660 = (0);
while(true){
if((i__15660 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15660);
cljs.core.chunk_append(b__15661,((cljs.core.sequential_QMARK_(x))?(function (){var vec__15678 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15678,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15678,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15678,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options15657.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options15657.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options15657.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__15801 = (i__15660 + (1));
i__15660 = G__15801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15661),sablono$core$select_options15657_$_iter__15658(cljs.core.chunk_rest(s__15659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15661),null);
}
} else {
var x = cljs.core.first(s__15659__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__15681 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15681,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15681,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15681,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options15657.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options15657.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options15657.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options15657_$_iter__15658(cljs.core.rest(s__15659__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options15657);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15684 = (function sablono$core$drop_down15684(var_args){
var G__15686 = arguments.length;
switch (G__15686) {
case 2:
return sablono.core.drop_down15684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15684.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down15684.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15684.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down15684.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down15684.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down15684);
/**
 * Creates a text area element.
 */
sablono.core.text_area15689 = (function sablono$core$text_area15689(var_args){
var G__15691 = arguments.length;
switch (G__15691) {
case 1:
return sablono.core.text_area15689.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15689.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area15689.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area15689.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area15689.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area15689);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15693 = (function sablono$core$label15693(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label15693);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15696 = (function sablono$core$submit_button15696(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button15696);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15698 = (function sablono$core$reset_button15698(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button15698);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15702 = (function sablono$core$form_to15702(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15804 = arguments.length;
var i__4737__auto___15805 = (0);
while(true){
if((i__4737__auto___15805 < len__4736__auto___15804)){
args__4742__auto__.push((arguments[i__4737__auto___15805]));

var G__15806 = (i__4737__auto___15805 + (1));
i__4737__auto___15805 = G__15806;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to15702.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to15702.cljs$core$IFn$_invoke$arity$variadic = (function (p__15712,body){
var vec__15713 = p__15712;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15713,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15713,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to15702.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to15702.cljs$lang$applyTo = (function (seq15706){
var G__15707 = cljs.core.first(seq15706);
var seq15706__$1 = cljs.core.next(seq15706);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15707,seq15706__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to15702);

//# sourceMappingURL=sablono.core.js.map
