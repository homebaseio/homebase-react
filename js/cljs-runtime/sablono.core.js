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
var G__16283__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__15963 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__15964 = cljs.core.seq(vec__15963);
var first__15965 = cljs.core.first(seq__15964);
var seq__15964__$1 = cljs.core.next(seq__15964);
var tag = first__15965;
var body = seq__15964__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16284__i = 0, G__16284__a = new Array(arguments.length -  0);
while (G__16284__i < G__16284__a.length) {G__16284__a[G__16284__i] = arguments[G__16284__i + 0]; ++G__16284__i;}
  args = new cljs.core.IndexedSeq(G__16284__a,0,null);
} 
return G__16283__delegate.call(this,args);};
G__16283.cljs$lang$maxFixedArity = 0;
G__16283.cljs$lang$applyTo = (function (arglist__16285){
var args = cljs.core.seq(arglist__16285);
return G__16283__delegate(args);
});
G__16283.cljs$core$IFn$_invoke$arity$variadic = G__16283__delegate;
return G__16283;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__15966(s__15967){
return (new cljs.core.LazySeq(null,(function (){
var s__15967__$1 = s__15967;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15967__$1);
if(temp__5735__auto__){
var s__15967__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15967__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15967__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15969 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15968 = (0);
while(true){
if((i__15968 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__15968);
cljs.core.chunk_append(b__15969,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16286 = (i__15968 + (1));
i__15968 = G__16286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15969),sablono$core$update_arglists_$_iter__15966(cljs.core.chunk_rest(s__15967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15969),null);
}
} else {
var args = cljs.core.first(s__15967__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15966(cljs.core.rest(s__15967__$2)));
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

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__15990(s__15991){
return (new cljs.core.LazySeq(null,(function (){
var s__15991__$1 = s__15991;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15991__$1);
if(temp__5735__auto__){
var s__15991__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15991__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15991__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15993 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15992 = (0);
while(true){
if((i__15992 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__15992);
cljs.core.chunk_append(b__15993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16290 = (i__15992 + (1));
i__15992 = G__16290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15993),sablono$core$iter__15990(cljs.core.chunk_rest(s__15991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15993),null);
}
} else {
var style = cljs.core.first(s__15991__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15990(cljs.core.rest(s__15991__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq15970){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15970));
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
sablono.core.link_to16003 = (function sablono$core$link_to16003(var_args){
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
return sablono.core.link_to16003.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to16003.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to16003.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to16003.cljs$lang$applyTo = (function (seq16004){
var G__16005 = cljs.core.first(seq16004);
var seq16004__$1 = cljs.core.next(seq16004);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16005,seq16004__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16003);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16006 = (function sablono$core$mail_to16006(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16297 = arguments.length;
var i__4737__auto___16298 = (0);
while(true){
if((i__4737__auto___16298 < len__4736__auto___16297)){
args__4742__auto__.push((arguments[i__4737__auto___16298]));

var G__16299 = (i__4737__auto___16298 + (1));
i__4737__auto___16298 = G__16299;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to16006.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to16006.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16009){
var vec__16010 = p__16009;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16010,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to16006.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to16006.cljs$lang$applyTo = (function (seq16007){
var G__16008 = cljs.core.first(seq16007);
var seq16007__$1 = cljs.core.next(seq16007);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16008,seq16007__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16006);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16013 = (function sablono$core$unordered_list16013(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list16013_$_iter__16038(s__16039){
return (new cljs.core.LazySeq(null,(function (){
var s__16039__$1 = s__16039;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16039__$1);
if(temp__5735__auto__){
var s__16039__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16039__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16039__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16041 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16040 = (0);
while(true){
if((i__16040 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16040);
cljs.core.chunk_append(b__16041,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16300 = (i__16040 + (1));
i__16040 = G__16300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16041),sablono$core$unordered_list16013_$_iter__16038(cljs.core.chunk_rest(s__16039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16041),null);
}
} else {
var x = cljs.core.first(s__16039__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list16013_$_iter__16038(cljs.core.rest(s__16039__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16013);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16042 = (function sablono$core$ordered_list16042(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list16042_$_iter__16043(s__16044){
return (new cljs.core.LazySeq(null,(function (){
var s__16044__$1 = s__16044;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16044__$1);
if(temp__5735__auto__){
var s__16044__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16044__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16044__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16046 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16045 = (0);
while(true){
if((i__16045 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16045);
cljs.core.chunk_append(b__16046,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16301 = (i__16045 + (1));
i__16045 = G__16301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16046),sablono$core$ordered_list16042_$_iter__16043(cljs.core.chunk_rest(s__16044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16046),null);
}
} else {
var x = cljs.core.first(s__16044__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list16042_$_iter__16043(cljs.core.rest(s__16044__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16042);
/**
 * Create an image element.
 */
sablono.core.image16069 = (function sablono$core$image16069(var_args){
var G__16071 = arguments.length;
switch (G__16071) {
case 1:
return sablono.core.image16069.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16069.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image16069.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image16069.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image16069.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16069);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16072_SHARP_,p2__16073_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16072_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16073_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16074_SHARP_,p2__16075_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16074_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16075_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__16077 = arguments.length;
switch (G__16077) {
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
sablono.core.color_field16078 = (function sablono$core$color_field16078(var_args){
var G__16080 = arguments.length;
switch (G__16080) {
case 1:
return sablono.core.color_field16078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field16078.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15937__auto__);
}));

(sablono.core.color_field16078.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.color_field16078.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field16078);

/**
 * Creates a date input field.
 */
sablono.core.date_field16081 = (function sablono$core$date_field16081(var_args){
var G__16106 = arguments.length;
switch (G__16106) {
case 1:
return sablono.core.date_field16081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field16081.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15937__auto__);
}));

(sablono.core.date_field16081.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.date_field16081.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field16081);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16108 = (function sablono$core$datetime_field16108(var_args){
var G__16110 = arguments.length;
switch (G__16110) {
case 1:
return sablono.core.datetime_field16108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field16108.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15937__auto__);
}));

(sablono.core.datetime_field16108.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.datetime_field16108.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field16108);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16112 = (function sablono$core$datetime_local_field16112(var_args){
var G__16114 = arguments.length;
switch (G__16114) {
case 1:
return sablono.core.datetime_local_field16112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field16112.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15937__auto__);
}));

(sablono.core.datetime_local_field16112.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.datetime_local_field16112.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field16112);

/**
 * Creates a email input field.
 */
sablono.core.email_field16115 = (function sablono$core$email_field16115(var_args){
var G__16132 = arguments.length;
switch (G__16132) {
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
sablono.core.file_field16136 = (function sablono$core$file_field16136(var_args){
var G__16142 = arguments.length;
switch (G__16142) {
case 1:
return sablono.core.file_field16136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field16136.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15937__auto__);
}));

(sablono.core.file_field16136.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.file_field16136.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16136);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16178 = (function sablono$core$hidden_field16178(var_args){
var G__16183 = arguments.length;
switch (G__16183) {
case 1:
return sablono.core.hidden_field16178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field16178.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15937__auto__);
}));

(sablono.core.hidden_field16178.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.hidden_field16178.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16178);

/**
 * Creates a month input field.
 */
sablono.core.month_field16184 = (function sablono$core$month_field16184(var_args){
var G__16186 = arguments.length;
switch (G__16186) {
case 1:
return sablono.core.month_field16184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field16184.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15937__auto__);
}));

(sablono.core.month_field16184.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.month_field16184.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16184);

/**
 * Creates a number input field.
 */
sablono.core.number_field16187 = (function sablono$core$number_field16187(var_args){
var G__16189 = arguments.length;
switch (G__16189) {
case 1:
return sablono.core.number_field16187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field16187.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15937__auto__);
}));

(sablono.core.number_field16187.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.number_field16187.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16187);

/**
 * Creates a password input field.
 */
sablono.core.password_field16193 = (function sablono$core$password_field16193(var_args){
var G__16195 = arguments.length;
switch (G__16195) {
case 1:
return sablono.core.password_field16193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field16193.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15937__auto__);
}));

(sablono.core.password_field16193.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.password_field16193.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16193);

/**
 * Creates a range input field.
 */
sablono.core.range_field16196 = (function sablono$core$range_field16196(var_args){
var G__16199 = arguments.length;
switch (G__16199) {
case 1:
return sablono.core.range_field16196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field16196.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15937__auto__);
}));

(sablono.core.range_field16196.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.range_field16196.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16196);

/**
 * Creates a search input field.
 */
sablono.core.search_field16202 = (function sablono$core$search_field16202(var_args){
var G__16207 = arguments.length;
switch (G__16207) {
case 1:
return sablono.core.search_field16202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field16202.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15937__auto__);
}));

(sablono.core.search_field16202.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.search_field16202.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16202);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16208 = (function sablono$core$tel_field16208(var_args){
var G__16210 = arguments.length;
switch (G__16210) {
case 1:
return sablono.core.tel_field16208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field16208.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15937__auto__);
}));

(sablono.core.tel_field16208.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.tel_field16208.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16208);

/**
 * Creates a text input field.
 */
sablono.core.text_field16211 = (function sablono$core$text_field16211(var_args){
var G__16213 = arguments.length;
switch (G__16213) {
case 1:
return sablono.core.text_field16211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field16211.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15937__auto__);
}));

(sablono.core.text_field16211.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.text_field16211.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16211);

/**
 * Creates a time input field.
 */
sablono.core.time_field16214 = (function sablono$core$time_field16214(var_args){
var G__16216 = arguments.length;
switch (G__16216) {
case 1:
return sablono.core.time_field16214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field16214.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15937__auto__);
}));

(sablono.core.time_field16214.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.time_field16214.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16214);

/**
 * Creates a url input field.
 */
sablono.core.url_field16217 = (function sablono$core$url_field16217(var_args){
var G__16219 = arguments.length;
switch (G__16219) {
case 1:
return sablono.core.url_field16217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field16217.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15937__auto__);
}));

(sablono.core.url_field16217.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.url_field16217.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16217);

/**
 * Creates a week input field.
 */
sablono.core.week_field16220 = (function sablono$core$week_field16220(var_args){
var G__16222 = arguments.length;
switch (G__16222) {
case 1:
return sablono.core.week_field16220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field16220.cljs$core$IFn$_invoke$arity$1 = (function (name__15937__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15937__auto__);
}));

(sablono.core.week_field16220.cljs$core$IFn$_invoke$arity$2 = (function (name__15937__auto__,value__15938__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15937__auto__,value__15938__auto__);
}));

(sablono.core.week_field16220.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16220);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16230 = (function sablono$core$check_box16230(var_args){
var G__16232 = arguments.length;
switch (G__16232) {
case 1:
return sablono.core.check_box16230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16230.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box16230.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box16230.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16230.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16230.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16230);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16233 = (function sablono$core$radio_button16233(var_args){
var G__16235 = arguments.length;
switch (G__16235) {
case 1:
return sablono.core.radio_button16233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16233.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button16233.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button16233.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16233.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16233.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16233);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16236 = (function sablono$core$select_options16236(coll){
var iter__4529__auto__ = (function sablono$core$select_options16236_$_iter__16243(s__16244){
return (new cljs.core.LazySeq(null,(function (){
var s__16244__$1 = s__16244;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16244__$1);
if(temp__5735__auto__){
var s__16244__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16244__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16244__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16246 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16245 = (0);
while(true){
if((i__16245 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16245);
cljs.core.chunk_append(b__16246,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16247 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16247,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16247,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16247,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16236.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16236.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16236.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__16348 = (i__16245 + (1));
i__16245 = G__16348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16246),sablono$core$select_options16236_$_iter__16243(cljs.core.chunk_rest(s__16244__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16246),null);
}
} else {
var x = cljs.core.first(s__16244__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16250 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16250,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16250,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16250,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16236.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16236.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16236.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options16236_$_iter__16243(cljs.core.rest(s__16244__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16236);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16253 = (function sablono$core$drop_down16253(var_args){
var G__16255 = arguments.length;
switch (G__16255) {
case 2:
return sablono.core.drop_down16253.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16253.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down16253.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16253.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down16253.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down16253.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16253);
/**
 * Creates a text area element.
 */
sablono.core.text_area16256 = (function sablono$core$text_area16256(var_args){
var G__16261 = arguments.length;
switch (G__16261) {
case 1:
return sablono.core.text_area16256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area16256.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area16256.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area16256.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16256);
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
var len__4736__auto___16355 = arguments.length;
var i__4737__auto___16356 = (0);
while(true){
if((i__4737__auto___16356 < len__4736__auto___16355)){
args__4742__auto__.push((arguments[i__4737__auto___16356]));

var G__16357 = (i__4737__auto___16356 + (1));
i__4737__auto___16356 = G__16357;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to16265.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to16265.cljs$core$IFn$_invoke$arity$variadic = (function (p__16268,body){
var vec__16269 = p__16268;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16269,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16269,(1),null);
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
