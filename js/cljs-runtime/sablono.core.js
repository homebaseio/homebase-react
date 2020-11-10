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
var G__16070__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__15908 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__15909 = cljs.core.seq(vec__15908);
var first__15910 = cljs.core.first(seq__15909);
var seq__15909__$1 = cljs.core.next(seq__15909);
var tag = first__15910;
var body = seq__15909__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16071__i = 0, G__16071__a = new Array(arguments.length -  0);
while (G__16071__i < G__16071__a.length) {G__16071__a[G__16071__i] = arguments[G__16071__i + 0]; ++G__16071__i;}
  args = new cljs.core.IndexedSeq(G__16071__a,0,null);
} 
return G__16070__delegate.call(this,args);};
G__16070.cljs$lang$maxFixedArity = 0;
G__16070.cljs$lang$applyTo = (function (arglist__16072){
var args = cljs.core.seq(arglist__16072);
return G__16070__delegate(args);
});
G__16070.cljs$core$IFn$_invoke$arity$variadic = G__16070__delegate;
return G__16070;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__15911(s__15912){
return (new cljs.core.LazySeq(null,(function (){
var s__15912__$1 = s__15912;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15912__$1);
if(temp__5735__auto__){
var s__15912__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15912__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15912__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15914 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15913 = (0);
while(true){
if((i__15913 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__15913);
cljs.core.chunk_append(b__15914,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16073 = (i__15913 + (1));
i__15913 = G__16073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15914),sablono$core$update_arglists_$_iter__15911(cljs.core.chunk_rest(s__15912__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15914),null);
}
} else {
var args = cljs.core.first(s__15912__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15911(cljs.core.rest(s__15912__$2)));
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
var len__4736__auto___16074 = arguments.length;
var i__4737__auto___16075 = (0);
while(true){
if((i__4737__auto___16075 < len__4736__auto___16074)){
args__4742__auto__.push((arguments[i__4737__auto___16075]));

var G__16076 = (i__4737__auto___16075 + (1));
i__4737__auto___16075 = G__16076;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__15926(s__15927){
return (new cljs.core.LazySeq(null,(function (){
var s__15927__$1 = s__15927;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15927__$1);
if(temp__5735__auto__){
var s__15927__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15927__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15927__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15929 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15928 = (0);
while(true){
if((i__15928 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__15928);
cljs.core.chunk_append(b__15929,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16077 = (i__15928 + (1));
i__15928 = G__16077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15929),sablono$core$iter__15926(cljs.core.chunk_rest(s__15927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15929),null);
}
} else {
var style = cljs.core.first(s__15927__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15926(cljs.core.rest(s__15927__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq15922){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15922));
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
sablono.core.link_to15938 = (function sablono$core$link_to15938(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16078 = arguments.length;
var i__4737__auto___16079 = (0);
while(true){
if((i__4737__auto___16079 < len__4736__auto___16078)){
args__4742__auto__.push((arguments[i__4737__auto___16079]));

var G__16080 = (i__4737__auto___16079 + (1));
i__4737__auto___16079 = G__16080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to15938.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to15938.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to15938.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to15938.cljs$lang$applyTo = (function (seq15939){
var G__15940 = cljs.core.first(seq15939);
var seq15939__$1 = cljs.core.next(seq15939);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15940,seq15939__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to15938);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15941 = (function sablono$core$mail_to15941(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16081 = arguments.length;
var i__4737__auto___16082 = (0);
while(true){
if((i__4737__auto___16082 < len__4736__auto___16081)){
args__4742__auto__.push((arguments[i__4737__auto___16082]));

var G__16083 = (i__4737__auto___16082 + (1));
i__4737__auto___16082 = G__16083;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to15941.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to15941.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__15944){
var vec__15945 = p__15944;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15945,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to15941.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to15941.cljs$lang$applyTo = (function (seq15942){
var G__15943 = cljs.core.first(seq15942);
var seq15942__$1 = cljs.core.next(seq15942);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15943,seq15942__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to15941);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list15959 = (function sablono$core$unordered_list15959(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list15959_$_iter__15960(s__15961){
return (new cljs.core.LazySeq(null,(function (){
var s__15961__$1 = s__15961;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15961__$1);
if(temp__5735__auto__){
var s__15961__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15961__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15961__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15963 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15962 = (0);
while(true){
if((i__15962 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15962);
cljs.core.chunk_append(b__15963,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16084 = (i__15962 + (1));
i__15962 = G__16084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15963),sablono$core$unordered_list15959_$_iter__15960(cljs.core.chunk_rest(s__15961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15963),null);
}
} else {
var x = cljs.core.first(s__15961__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list15959_$_iter__15960(cljs.core.rest(s__15961__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list15959);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15964 = (function sablono$core$ordered_list15964(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list15964_$_iter__15965(s__15966){
return (new cljs.core.LazySeq(null,(function (){
var s__15966__$1 = s__15966;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15966__$1);
if(temp__5735__auto__){
var s__15966__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15966__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15966__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15968 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15967 = (0);
while(true){
if((i__15967 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15967);
cljs.core.chunk_append(b__15968,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16085 = (i__15967 + (1));
i__15967 = G__16085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15968),sablono$core$ordered_list15964_$_iter__15965(cljs.core.chunk_rest(s__15966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15968),null);
}
} else {
var x = cljs.core.first(s__15966__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list15964_$_iter__15965(cljs.core.rest(s__15966__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list15964);
/**
 * Create an image element.
 */
sablono.core.image15969 = (function sablono$core$image15969(var_args){
var G__15973 = arguments.length;
switch (G__15973) {
case 1:
return sablono.core.image15969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image15969.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image15969.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image15969.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image15969);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15978_SHARP_,p2__15979_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15978_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15979_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15982_SHARP_,p2__15983_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15982_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15983_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__15985 = arguments.length;
switch (G__15985) {
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
sablono.core.color_field15986 = (function sablono$core$color_field15986(var_args){
var G__15988 = arguments.length;
switch (G__15988) {
case 1:
return sablono.core.color_field15986.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15986.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field15986.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15900__auto__);
}));

(sablono.core.color_field15986.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.color_field15986.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field15986);

/**
 * Creates a date input field.
 */
sablono.core.date_field15989 = (function sablono$core$date_field15989(var_args){
var G__15991 = arguments.length;
switch (G__15991) {
case 1:
return sablono.core.date_field15989.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15989.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field15989.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15900__auto__);
}));

(sablono.core.date_field15989.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.date_field15989.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field15989);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15992 = (function sablono$core$datetime_field15992(var_args){
var G__15994 = arguments.length;
switch (G__15994) {
case 1:
return sablono.core.datetime_field15992.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15992.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field15992.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15900__auto__);
}));

(sablono.core.datetime_field15992.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.datetime_field15992.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field15992);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15995 = (function sablono$core$datetime_local_field15995(var_args){
var G__15997 = arguments.length;
switch (G__15997) {
case 1:
return sablono.core.datetime_local_field15995.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15995.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field15995.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15900__auto__);
}));

(sablono.core.datetime_local_field15995.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.datetime_local_field15995.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field15995);

/**
 * Creates a email input field.
 */
sablono.core.email_field15998 = (function sablono$core$email_field15998(var_args){
var G__16000 = arguments.length;
switch (G__16000) {
case 1:
return sablono.core.email_field15998.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15998.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field15998.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15900__auto__);
}));

(sablono.core.email_field15998.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.email_field15998.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field15998);

/**
 * Creates a file input field.
 */
sablono.core.file_field16001 = (function sablono$core$file_field16001(var_args){
var G__16003 = arguments.length;
switch (G__16003) {
case 1:
return sablono.core.file_field16001.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field16001.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15900__auto__);
}));

(sablono.core.file_field16001.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.file_field16001.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16001);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16004 = (function sablono$core$hidden_field16004(var_args){
var G__16006 = arguments.length;
switch (G__16006) {
case 1:
return sablono.core.hidden_field16004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field16004.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15900__auto__);
}));

(sablono.core.hidden_field16004.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.hidden_field16004.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16004);

/**
 * Creates a month input field.
 */
sablono.core.month_field16007 = (function sablono$core$month_field16007(var_args){
var G__16009 = arguments.length;
switch (G__16009) {
case 1:
return sablono.core.month_field16007.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16007.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field16007.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15900__auto__);
}));

(sablono.core.month_field16007.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.month_field16007.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16007);

/**
 * Creates a number input field.
 */
sablono.core.number_field16010 = (function sablono$core$number_field16010(var_args){
var G__16012 = arguments.length;
switch (G__16012) {
case 1:
return sablono.core.number_field16010.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16010.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field16010.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15900__auto__);
}));

(sablono.core.number_field16010.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.number_field16010.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16010);

/**
 * Creates a password input field.
 */
sablono.core.password_field16013 = (function sablono$core$password_field16013(var_args){
var G__16015 = arguments.length;
switch (G__16015) {
case 1:
return sablono.core.password_field16013.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16013.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field16013.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15900__auto__);
}));

(sablono.core.password_field16013.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.password_field16013.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16013);

/**
 * Creates a range input field.
 */
sablono.core.range_field16016 = (function sablono$core$range_field16016(var_args){
var G__16018 = arguments.length;
switch (G__16018) {
case 1:
return sablono.core.range_field16016.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16016.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field16016.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15900__auto__);
}));

(sablono.core.range_field16016.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.range_field16016.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16016);

/**
 * Creates a search input field.
 */
sablono.core.search_field16019 = (function sablono$core$search_field16019(var_args){
var G__16021 = arguments.length;
switch (G__16021) {
case 1:
return sablono.core.search_field16019.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16019.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field16019.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15900__auto__);
}));

(sablono.core.search_field16019.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.search_field16019.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16019);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16022 = (function sablono$core$tel_field16022(var_args){
var G__16024 = arguments.length;
switch (G__16024) {
case 1:
return sablono.core.tel_field16022.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16022.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field16022.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15900__auto__);
}));

(sablono.core.tel_field16022.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.tel_field16022.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16022);

/**
 * Creates a text input field.
 */
sablono.core.text_field16025 = (function sablono$core$text_field16025(var_args){
var G__16027 = arguments.length;
switch (G__16027) {
case 1:
return sablono.core.text_field16025.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field16025.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15900__auto__);
}));

(sablono.core.text_field16025.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.text_field16025.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16025);

/**
 * Creates a time input field.
 */
sablono.core.time_field16028 = (function sablono$core$time_field16028(var_args){
var G__16030 = arguments.length;
switch (G__16030) {
case 1:
return sablono.core.time_field16028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field16028.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15900__auto__);
}));

(sablono.core.time_field16028.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.time_field16028.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16028);

/**
 * Creates a url input field.
 */
sablono.core.url_field16031 = (function sablono$core$url_field16031(var_args){
var G__16033 = arguments.length;
switch (G__16033) {
case 1:
return sablono.core.url_field16031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field16031.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15900__auto__);
}));

(sablono.core.url_field16031.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.url_field16031.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16031);

/**
 * Creates a week input field.
 */
sablono.core.week_field16034 = (function sablono$core$week_field16034(var_args){
var G__16036 = arguments.length;
switch (G__16036) {
case 1:
return sablono.core.week_field16034.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16034.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field16034.cljs$core$IFn$_invoke$arity$1 = (function (name__15900__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15900__auto__);
}));

(sablono.core.week_field16034.cljs$core$IFn$_invoke$arity$2 = (function (name__15900__auto__,value__15901__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15900__auto__,value__15901__auto__);
}));

(sablono.core.week_field16034.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16034);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16037 = (function sablono$core$check_box16037(var_args){
var G__16039 = arguments.length;
switch (G__16039) {
case 1:
return sablono.core.check_box16037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16037.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box16037.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box16037.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16037.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box16037.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16037);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16040 = (function sablono$core$radio_button16040(var_args){
var G__16042 = arguments.length;
switch (G__16042) {
case 1:
return sablono.core.radio_button16040.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16040.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16040.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button16040.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button16040.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16040.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button16040.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16040);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16043 = (function sablono$core$select_options16043(coll){
var iter__4529__auto__ = (function sablono$core$select_options16043_$_iter__16044(s__16045){
return (new cljs.core.LazySeq(null,(function (){
var s__16045__$1 = s__16045;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16045__$1);
if(temp__5735__auto__){
var s__16045__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16045__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16045__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16047 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16046 = (0);
while(true){
if((i__16046 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__16046);
cljs.core.chunk_append(b__16047,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16048 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16043.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16043.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16043.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__16107 = (i__16046 + (1));
i__16046 = G__16107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16047),sablono$core$select_options16043_$_iter__16044(cljs.core.chunk_rest(s__16045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16047),null);
}
} else {
var x = cljs.core.first(s__16045__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16051 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16051,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16051,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16051,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options16043.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16043.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16043.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options16043_$_iter__16044(cljs.core.rest(s__16045__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16043);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16054 = (function sablono$core$drop_down16054(var_args){
var G__16056 = arguments.length;
switch (G__16056) {
case 2:
return sablono.core.drop_down16054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16054.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down16054.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16054.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down16054.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down16054.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16054);
/**
 * Creates a text area element.
 */
sablono.core.text_area16057 = (function sablono$core$text_area16057(var_args){
var G__16059 = arguments.length;
switch (G__16059) {
case 1:
return sablono.core.text_area16057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area16057.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area16057.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area16057.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16057);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16060 = (function sablono$core$label16060(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16060);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16061 = (function sablono$core$submit_button16061(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16061);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16062 = (function sablono$core$reset_button16062(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16062);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16063 = (function sablono$core$form_to16063(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16110 = arguments.length;
var i__4737__auto___16111 = (0);
while(true){
if((i__4737__auto___16111 < len__4736__auto___16110)){
args__4742__auto__.push((arguments[i__4737__auto___16111]));

var G__16112 = (i__4737__auto___16111 + (1));
i__4737__auto___16111 = G__16112;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to16063.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to16063.cljs$core$IFn$_invoke$arity$variadic = (function (p__16066,body){
var vec__16067 = p__16066;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16067,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16067,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to16063.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to16063.cljs$lang$applyTo = (function (seq16064){
var G__16065 = cljs.core.first(seq16064);
var seq16064__$1 = cljs.core.next(seq16064);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16065,seq16064__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16063);

//# sourceMappingURL=sablono.core.js.map
