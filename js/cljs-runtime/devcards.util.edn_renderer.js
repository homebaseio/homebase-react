goog.provide('devcards.util.edn_renderer');
if((typeof devcards !== 'undefined') && (typeof devcards.util !== 'undefined') && (typeof devcards.util.edn_renderer !== 'undefined') && (typeof devcards.util.edn_renderer._STAR_key_counter_STAR_ !== 'undefined')){
} else {
devcards.util.edn_renderer._STAR_key_counter_STAR_ = null;
}
devcards.util.edn_renderer.get_key = (function devcards$util$edn_renderer$get_key(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer._STAR_key_counter_STAR_,cljs.core.inc);

return ["k-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.util.edn_renderer._STAR_key_counter_STAR_))].join('');
});
devcards.util.edn_renderer.literal_QMARK_ = (function devcards$util$edn_renderer$literal_QMARK_(x){
return (((!(cljs.core.map_entry_QMARK_(x)))) && ((!(cljs.core.seq_QMARK_(x)))) && ((!(cljs.core.coll_QMARK_(x)))));
});
devcards.util.edn_renderer.separator_STAR_ = (function devcards$util$edn_renderer$separator_STAR_(s){
var G__17065 = "span";
var G__17066 = ({"key": devcards.util.edn_renderer.get_key(), "className": "seperator"});
var G__17067 = sablono.interpreter.interpret(s);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17065,G__17066,G__17067) : sablono.core.create_element.call(null,G__17065,G__17066,G__17067));
});
devcards.util.edn_renderer.clearfix_separator_STAR_ = (function devcards$util$edn_renderer$clearfix_separator_STAR_(s){
var G__17071 = "span";
var G__17072 = ({"key": devcards.util.edn_renderer.get_key()});
var G__17073 = sablono.interpreter.interpret(devcards.util.edn_renderer.separator_STAR_(s));
var G__17074 = (function (){var G__17075 = "span";
var G__17076 = ({"className": "clearfix"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__17075,G__17076) : sablono.core.create_element.call(null,G__17075,G__17076));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17071,G__17072,G__17073,G__17074) : sablono.core.create_element.call(null,G__17071,G__17072,G__17073,G__17074));
});
devcards.util.edn_renderer.separate_fn = (function devcards$util$edn_renderer$separate_fn(coll){
try{if((!(cljs.core.every_QMARK_(devcards.util.edn_renderer.literal_QMARK_,coll)))){
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
return devcards.util.edn_renderer.separator_STAR_;
}
}catch (e17077){if((e17077 instanceof Error)){
var e = e17077;
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
throw e17077;

}
}});
devcards.util.edn_renderer.interpose_separator = (function devcards$util$edn_renderer$interpose_separator(rct_coll,s,sep_fn){
return cljs.core.to_array(cljs.core.cons(cljs.core.first(rct_coll),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (sep_fn.cljs$core$IFn$_invoke$arity$1 ? sep_fn.cljs$core$IFn$_invoke$arity$1(s) : sep_fn.call(null,s));
})),cljs.core.rest(rct_coll))));
});
devcards.util.edn_renderer.literal = (function devcards$util$edn_renderer$literal(class$,x){
var G__17078 = "span";
var G__17079 = ({"className": class$, "key": devcards.util.edn_renderer.get_key()});
var G__17080 = sablono.interpreter.interpret(devcards.util.utils.pprint_str(x));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17078,G__17079,G__17080) : sablono.core.create_element.call(null,G__17078,G__17079,G__17080));
});
devcards.util.edn_renderer.html_val = (function devcards$util$edn_renderer$html_val(index,v){
var G__17081 = "span";
var G__17082 = ({"key": index});
var G__17083 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17081,G__17082,G__17083) : sablono.core.create_element.call(null,G__17081,G__17082,G__17083));
});
devcards.util.edn_renderer.join_html = (function devcards$util$edn_renderer$join_html(separator,coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_val,coll)),separator,devcards.util.edn_renderer.separate_fn(coll));
});
devcards.util.edn_renderer.html_keyval = (function devcards$util$edn_renderer$html_keyval(p__17084){
var vec__17085 = p__17084;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17085,(1),null);
var G__17088 = "span";
var G__17089 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)), "className": "keyval"});
var G__17090 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(k) : devcards.util.edn_renderer.html.call(null,k)));
var G__17091 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17088,G__17089,G__17090,G__17091) : sablono.core.create_element.call(null,G__17088,G__17089,G__17090,G__17091));
});
devcards.util.edn_renderer.html_keyvals = (function devcards$util$edn_renderer$html_keyvals(coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_keyval,coll)," ",devcards.util.edn_renderer.separate_fn(cljs.core.vals(coll)));
});
devcards.util.edn_renderer.open_close = (function devcards$util$edn_renderer$open_close(class_str,opener,closer,rct_coll){
var G__17092 = "span";
var G__17093 = ({"className": class_str, "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(rct_coll))});
var G__17094 = (function (){var G__17097 = "span";
var G__17098 = ({"key": (1), "className": "opener"});
var G__17099 = sablono.interpreter.interpret(opener);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17097,G__17098,G__17099) : sablono.core.create_element.call(null,G__17097,G__17098,G__17099));
})();
var G__17095 = (function (){var G__17100 = "span";
var G__17101 = ({"key": (2), "className": "contents"});
var G__17102 = sablono.interpreter.interpret(rct_coll);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17100,G__17101,G__17102) : sablono.core.create_element.call(null,G__17100,G__17101,G__17102));
})();
var G__17096 = (function (){var G__17103 = "span";
var G__17104 = ({"key": (3), "className": "closer"});
var G__17105 = sablono.interpreter.interpret(closer);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17103,G__17104,G__17105) : sablono.core.create_element.call(null,G__17103,G__17104,G__17105));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__17092,G__17093,G__17094,G__17095,G__17096) : sablono.core.create_element.call(null,G__17092,G__17093,G__17094,G__17095,G__17096));
});
devcards.util.edn_renderer.html_collection = (function devcards$util$edn_renderer$html_collection(class$,opener,closer,coll){
return devcards.util.edn_renderer.open_close(["collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),opener,closer,devcards.util.edn_renderer.join_html(" ",coll));
});
devcards.util.edn_renderer.html_map = (function devcards$util$edn_renderer$html_map(coll){
return devcards.util.edn_renderer.open_close("collection map","{","}",devcards.util.edn_renderer.html_keyvals(coll));
});
devcards.util.edn_renderer.html_string = (function devcards$util$edn_renderer$html_string(s){
return devcards.util.edn_renderer.open_close("string","\"","\"",s);
});
devcards.util.edn_renderer.html = (function devcards$util$edn_renderer$html(x){
if(typeof x === 'number'){
return devcards.util.edn_renderer.literal("number",x);
} else {
if((x instanceof cljs.core.Keyword)){
return devcards.util.edn_renderer.literal("keyword",x);
} else {
if((x instanceof cljs.core.Symbol)){
return devcards.util.edn_renderer.literal("symbol",x);
} else {
if(typeof x === 'string'){
return devcards.util.edn_renderer.html_string(x);
} else {
if(cljs.core.map_QMARK_(x)){
return devcards.util.edn_renderer.html_map(x);
} else {
if(cljs.core.set_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("set","#{","}",x);
} else {
if(cljs.core.vector_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("vector","[","]",x);
} else {
if(cljs.core.seq_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("seq","(",")",x);
} else {
return devcards.util.edn_renderer.literal("literal",x);

}
}
}
}
}
}
}
}
});
devcards.util.edn_renderer.html_edn = (function devcards$util$edn_renderer$html_edn(e){
var _STAR_key_counter_STAR__orig_val__17108 = devcards.util.edn_renderer._STAR_key_counter_STAR_;
var _STAR_key_counter_STAR__temp_val__17109 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
(devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR__temp_val__17109);

try{var G__17110 = "div";
var G__17111 = ({"key": "devcards-edn-block", "className": "com-rigsomelight-rendered-edn com-rigsomelight-devcards-typog"});
var G__17112 = sablono.interpreter.interpret(devcards.util.edn_renderer.html(e));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17110,G__17111,G__17112) : sablono.core.create_element.call(null,G__17110,G__17111,G__17112));
}finally {(devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR__orig_val__17108);
}});

//# sourceMappingURL=devcards.util.edn_renderer.js.map