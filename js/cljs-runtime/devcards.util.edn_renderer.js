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
var G__16521 = "span";
var G__16522 = ({"key": devcards.util.edn_renderer.get_key(), "className": "seperator"});
var G__16523 = sablono.interpreter.interpret(s);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16521,G__16522,G__16523) : sablono.core.create_element.call(null,G__16521,G__16522,G__16523));
});
devcards.util.edn_renderer.clearfix_separator_STAR_ = (function devcards$util$edn_renderer$clearfix_separator_STAR_(s){
var G__16526 = "span";
var G__16527 = ({"key": devcards.util.edn_renderer.get_key()});
var G__16528 = sablono.interpreter.interpret(devcards.util.edn_renderer.separator_STAR_(s));
var G__16529 = (function (){var G__16530 = "span";
var G__16531 = ({"className": "clearfix"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__16530,G__16531) : sablono.core.create_element.call(null,G__16530,G__16531));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__16526,G__16527,G__16528,G__16529) : sablono.core.create_element.call(null,G__16526,G__16527,G__16528,G__16529));
});
devcards.util.edn_renderer.separate_fn = (function devcards$util$edn_renderer$separate_fn(coll){
try{if((!(cljs.core.every_QMARK_(devcards.util.edn_renderer.literal_QMARK_,coll)))){
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
return devcards.util.edn_renderer.separator_STAR_;
}
}catch (e16532){if((e16532 instanceof Error)){
var e = e16532;
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
throw e16532;

}
}});
devcards.util.edn_renderer.interpose_separator = (function devcards$util$edn_renderer$interpose_separator(rct_coll,s,sep_fn){
return cljs.core.to_array(cljs.core.cons(cljs.core.first(rct_coll),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (sep_fn.cljs$core$IFn$_invoke$arity$1 ? sep_fn.cljs$core$IFn$_invoke$arity$1(s) : sep_fn.call(null,s));
})),cljs.core.rest(rct_coll))));
});
devcards.util.edn_renderer.literal = (function devcards$util$edn_renderer$literal(class$,x){
var G__16534 = "span";
var G__16535 = ({"className": class$, "key": devcards.util.edn_renderer.get_key()});
var G__16536 = sablono.interpreter.interpret(devcards.util.utils.pprint_str(x));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16534,G__16535,G__16536) : sablono.core.create_element.call(null,G__16534,G__16535,G__16536));
});
devcards.util.edn_renderer.html_val = (function devcards$util$edn_renderer$html_val(index,v){
var G__16537 = "span";
var G__16538 = ({"key": index});
var G__16539 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16537,G__16538,G__16539) : sablono.core.create_element.call(null,G__16537,G__16538,G__16539));
});
devcards.util.edn_renderer.join_html = (function devcards$util$edn_renderer$join_html(separator,coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_val,coll)),separator,devcards.util.edn_renderer.separate_fn(coll));
});
devcards.util.edn_renderer.html_keyval = (function devcards$util$edn_renderer$html_keyval(p__16540){
var vec__16541 = p__16540;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16541,(1),null);
var G__16544 = "span";
var G__16545 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)), "className": "keyval"});
var G__16546 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(k) : devcards.util.edn_renderer.html.call(null,k)));
var G__16547 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__16544,G__16545,G__16546,G__16547) : sablono.core.create_element.call(null,G__16544,G__16545,G__16546,G__16547));
});
devcards.util.edn_renderer.html_keyvals = (function devcards$util$edn_renderer$html_keyvals(coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_keyval,coll)," ",devcards.util.edn_renderer.separate_fn(cljs.core.vals(coll)));
});
devcards.util.edn_renderer.open_close = (function devcards$util$edn_renderer$open_close(class_str,opener,closer,rct_coll){
var G__16548 = "span";
var G__16549 = ({"className": class_str, "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(rct_coll))});
var G__16550 = (function (){var G__16553 = "span";
var G__16554 = ({"key": (1), "className": "opener"});
var G__16555 = sablono.interpreter.interpret(opener);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16553,G__16554,G__16555) : sablono.core.create_element.call(null,G__16553,G__16554,G__16555));
})();
var G__16551 = (function (){var G__16556 = "span";
var G__16557 = ({"key": (2), "className": "contents"});
var G__16558 = sablono.interpreter.interpret(rct_coll);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16556,G__16557,G__16558) : sablono.core.create_element.call(null,G__16556,G__16557,G__16558));
})();
var G__16552 = (function (){var G__16559 = "span";
var G__16560 = ({"key": (3), "className": "closer"});
var G__16561 = sablono.interpreter.interpret(closer);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16559,G__16560,G__16561) : sablono.core.create_element.call(null,G__16559,G__16560,G__16561));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__16548,G__16549,G__16550,G__16551,G__16552) : sablono.core.create_element.call(null,G__16548,G__16549,G__16550,G__16551,G__16552));
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
var _STAR_key_counter_STAR__orig_val__16562 = devcards.util.edn_renderer._STAR_key_counter_STAR_;
var _STAR_key_counter_STAR__temp_val__16563 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
(devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR__temp_val__16563);

try{var G__16565 = "div";
var G__16566 = ({"key": "devcards-edn-block", "className": "com-rigsomelight-rendered-edn com-rigsomelight-devcards-typog"});
var G__16567 = sablono.interpreter.interpret(devcards.util.edn_renderer.html(e));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16565,G__16566,G__16567) : sablono.core.create_element.call(null,G__16565,G__16566,G__16567));
}finally {(devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR__orig_val__16562);
}});

//# sourceMappingURL=devcards.util.edn_renderer.js.map
